use anyhow::{Context, Result, bail, ensure};
use serde::Deserialize;
use serde_json::{Value, json};
use std::{
    collections::BTreeMap,
    fs::{self, File, OpenOptions},
    io::{self, Write},
    path::{Path, PathBuf},
    sync::Mutex,
    time::{Duration, Instant},
};

pub(crate) const CHUNK_LIMIT: usize = 512 * 1024;
const VIDEO_LIMIT: usize = 272 * 1024 * 1024;

#[derive(Deserialize)]
struct Recording {
    name: String,
    bytes: usize,
}

struct Upload {
    recording: Recording,
    temporary: PathBuf,
    file: Option<File>,
    written: usize,
    updated: Instant,
}

impl Drop for Upload {
    fn drop(&mut self) {
        drop(self.file.take());
        let _ = fs::remove_file(&self.temporary);
    }
}

#[derive(Default)]
pub struct Recordings(
    Mutex<BTreeMap<String, Upload>>,
    crate::recording_frames::FrameRecordings,
);

impl Recordings {
    #[cfg(any(windows, target_os = "macos"))]
    pub fn clear(&self) {
        self.0.lock().unwrap().clear();
        self.1.clear();
    }

    pub fn handle(&self, method: &str, url: &url::Url, body: &[u8]) -> Result<Value> {
        ensure!(method == "POST", "POSTが必要です");
        let query: BTreeMap<_, _> = url.query_pairs().collect();
        let id = query.get("id").context("録画IDがありません")?;
        ensure!(
            id.len() == 36 && id.bytes().all(|v| v.is_ascii_hexdigit() || v == b'-'),
            "録画IDが不正です"
        );
        let action = query
            .get("action")
            .map(|value| value.as_ref())
            .unwrap_or_default();
        if let Some(action) = action.strip_prefix("png-") {
            return self.1.handle(id, action, &query, body);
        }
        match action {
            "begin" => {
                ensure!(body.len() <= 1024, "録画の保存要求が不正です");
                self.begin(id, serde_json::from_slice(body)?, &downloads_directory()?)?;
                Ok(json!({"written":0}))
            }
            "append" => {
                let offset = query
                    .get("offset")
                    .context("保存位置がありません")?
                    .parse()?;
                self.append(id, offset, body)
            }
            "cancel" => {
                self.0.lock().unwrap().remove(id.as_ref());
                Ok(json!({"cancelled":true}))
            }
            _ => bail!("録画の保存操作が不正です"),
        }
    }

    fn begin(&self, id: &str, recording: Recording, directory: &Path) -> Result<()> {
        let (stem, extension) = recording
            .name
            .rsplit_once('.')
            .context("動画の拡張子がありません")?;
        ensure!(
            stem.starts_with("KBCS-")
                && stem.len() <= 120
                && stem
                    .bytes()
                    .all(|v| v.is_ascii_alphanumeric() || matches!(v, b'-' | b'_'))
                && matches!(extension, "webm" | "mp4")
                && (8..=VIDEO_LIMIT).contains(&recording.bytes),
            "録画のファイル名または容量が不正です"
        );
        let mut uploads = self.0.lock().unwrap();
        uploads.retain(|_, upload| upload.updated.elapsed() < Duration::from_secs(300));
        ensure!(
            !uploads.contains_key(id) && uploads.len() < 4,
            "録画の保存が混み合っています"
        );
        fs::create_dir_all(directory).context("ダウンロードフォルダーを開けません")?;
        let temporary = directory.join(format!(".kbcs-recording-{id}.part"));
        let file = OpenOptions::new()
            .write(true)
            .create_new(true)
            .open(&temporary)
            .context("録画の一時ファイルを作成できません")?;
        uploads.insert(
            id.into(),
            Upload {
                recording,
                temporary,
                file: Some(file),
                written: 0,
                updated: Instant::now(),
            },
        );
        Ok(())
    }

    fn append(&self, id: &str, offset: usize, body: &[u8]) -> Result<Value> {
        let mut uploads = self.0.lock().unwrap();
        let upload = uploads
            .get_mut(id)
            .context("録画の保存が開始されていません")?;
        ensure!(
            offset == upload.written
                && (1..=CHUNK_LIMIT).contains(&body.len())
                && body.len() <= upload.recording.bytes - offset,
            "録画の分割データが不正です"
        );
        if offset == 0 {
            let valid = if upload.recording.name.ends_with(".webm") {
                body.starts_with(&[0x1a, 0x45, 0xdf, 0xa3])
            } else {
                body.get(4..8) == Some(b"ftyp")
            };
            ensure!(valid, "動画形式を確認できません");
        }
        if let Err(error) = upload.file.as_mut().unwrap().write_all(body) {
            uploads.remove(id);
            return Err(error).context("録画を書き込めません");
        }
        upload.written += body.len();
        upload.updated = Instant::now();
        if upload.written < upload.recording.bytes {
            return Ok(json!({"written":upload.written}));
        }

        let mut upload = uploads.remove(id).unwrap();
        drop(uploads);
        upload
            .file
            .take()
            .unwrap()
            .sync_all()
            .context("録画をディスクに保存できません")?;
        let path = publish(&upload.temporary, &upload.recording.name)?;
        Ok(json!({"written":upload.written,"path":path.to_string_lossy()}))
    }
}

// 同名ファイルがあれば連番を試し、既存の動画を上書きしない。
pub(crate) fn publish(temporary: &Path, name: &str) -> Result<PathBuf> {
    let directory = temporary.parent().unwrap();
    let (stem, extension) = name.rsplit_once('.').unwrap();
    for index in 0..100 {
        let target = directory.join(if index == 0 {
            name.to_owned()
        } else {
            format!("{stem}-{index}.{extension}")
        });
        match fs::hard_link(temporary, &target) {
            Ok(()) => return Ok(target),
            Err(error) if error.kind() == io::ErrorKind::AlreadyExists => continue,
            Err(_) => (), // ハードリンク非対応の保存先では、新規ファイルを排他的に開く。
        }
        let mut file = match OpenOptions::new()
            .write(true)
            .create_new(true)
            .open(&target)
        {
            Ok(file) => file,
            Err(error) if error.kind() == io::ErrorKind::AlreadyExists => continue,
            Err(error) => return Err(error).context("録画ファイルを作成できません"),
        };
        let copied = File::open(temporary)
            .and_then(|mut source| io::copy(&mut source, &mut file))
            .and_then(|_| file.sync_all());
        drop(file);
        if let Err(error) = copied {
            let _ = fs::remove_file(&target);
            return Err(error).context("録画ファイルを保存できません");
        }
        return Ok(target);
    }
    bail!("録画の保存名を確保できません")
}

#[cfg(windows)]
pub(crate) fn downloads_directory() -> Result<PathBuf> {
    use windows::Win32::{
        System::Com::CoTaskMemFree,
        UI::Shell::{FOLDERID_Downloads, KF_FLAG_DEFAULT, SHGetKnownFolderPath},
    };
    let path = unsafe { SHGetKnownFolderPath(&FOLDERID_Downloads, KF_FLAG_DEFAULT, None) }
        .context("ダウンロードフォルダーを取得できません")?;
    let result = unsafe { path.to_string() };
    unsafe { CoTaskMemFree(Some(path.0.cast())) };
    Ok(PathBuf::from(result?))
}

#[cfg(not(windows))]
pub(crate) fn downloads_directory() -> Result<PathBuf> {
    Ok(
        PathBuf::from(std::env::var_os("HOME").context("ホームフォルダーを取得できません")?)
            .join("Downloads"),
    )
}

#[test]
fn recording_is_published_after_the_last_chunk_without_replacing_previous_files() {
    let directory =
        std::env::temp_dir().join(format!("kbcs-recording-test-{}", std::process::id()));
    fs::create_dir(&directory).unwrap();
    let store = Recordings::default();
    let id = "aabbccdd-0000-0000-0000-000000000001";
    let name = "KBCS-stage.webm";
    let header = [0x1a, 0x45, 0xdf, 0xa3, 0, 1, 2, 3];
    fs::write(directory.join(name), b"previous").unwrap();
    store
        .begin(
            id,
            Recording {
                name: name.into(),
                bytes: 10,
            },
            &directory,
        )
        .unwrap();
    assert!(store.append(id, 1, &header).is_err());
    assert_eq!(store.append(id, 0, &header).unwrap(), json!({"written":8}));
    let target = directory.join("KBCS-stage-1.webm");
    assert!(!target.exists());
    let final_reply = store.append(id, 8, &[4, 5]).unwrap();
    assert_eq!(
        final_reply,
        json!({"written":10,"path":target.to_string_lossy()})
    );
    assert_eq!(fs::read(&target).unwrap(), [&header[..], &[4, 5]].concat());
    assert_eq!(fs::read(directory.join(name)).unwrap(), b"previous");
    assert_eq!(fs::read_dir(&directory).unwrap().count(), 2);
    let mp4 = b"\0\0\0\x18ftypisom";
    store
        .begin(
            id,
            Recording {
                name: "KBCS-stage.mp4".into(),
                bytes: mp4.len(),
            },
            &directory,
        )
        .unwrap();
    let reply = store.append(id, 0, mp4).unwrap();
    let mp4_path = directory.join("KBCS-stage.mp4");
    assert_eq!(reply["path"], mp4_path.to_string_lossy().as_ref());
    assert_eq!(fs::read(&mp4_path).unwrap(), mp4);
    fs::remove_file(mp4_path).unwrap();
    fs::remove_file(target).unwrap();
    fs::remove_file(directory.join(name)).unwrap();
    fs::remove_dir(directory).unwrap();
}
