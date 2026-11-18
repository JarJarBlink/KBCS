use crate::recording::{CHUNK_LIMIT, downloads_directory, publish};
use anyhow::{Context, Result, bail, ensure};
use serde::Deserialize;
use serde_json::{Value, json};
use std::{
    borrow::Cow,
    collections::BTreeMap,
    fs::{self, File, OpenOptions},
    io::Write,
    path::{Path, PathBuf},
    sync::Mutex,
    time::{Duration, Instant},
};
use zip::{ZipWriter, write::SimpleFileOptions};

const ARCHIVE_LIMIT: u64 = 8 * 1024 * 1024 * 1024;
const FRAME_LIMIT: usize = 108_000;

#[derive(Deserialize)]
struct Format {
    name: String,
    width: u32,
    height: u32,
}

struct FrameArchive {
    format: Format,
    temporary: PathBuf,
    writer: Option<ZipWriter<File>>,
    finished: bool,
    times: Vec<u64>,
    bytes: u64,
    offset: usize,
    length: usize,
    frame_time: u64,
    updated: Instant,
}

impl Drop for FrameArchive {
    fn drop(&mut self) {
        drop(self.writer.take());
        let _ = fs::remove_file(&self.temporary);
    }
}

impl FrameArchive {
    fn open(id: &str, format: Format, directory: &Path) -> Result<Self> {
        let stem = format
            .name
            .strip_suffix(".zip")
            .context("ZIPの拡張子が必要です")?;
        ensure!(
            stem.starts_with("KBCS-")
                && stem.len() <= 120
                && stem
                    .bytes()
                    .all(|v| v.is_ascii_alphanumeric() || matches!(v, b'-' | b'_')),
            "録画のファイル名が不正です"
        );
        ensure!(
            (960..=3840).contains(&format.width) && format.height == 640,
            "戦闘画面の寸法が不正です"
        );
        fs::create_dir_all(directory).context("ダウンロードフォルダーを開けません")?;
        let temporary = directory.join(format!(".kbcs-frames-{id}.part"));
        let file = OpenOptions::new()
            .write(true)
            .create_new(true)
            .open(&temporary)
            .context("録画の一時ファイルを作成できません")?;
        Ok(Self {
            format,
            temporary,
            writer: Some(ZipWriter::new(file)),
            finished: false,
            times: Vec::new(),
            bytes: 0,
            offset: 0,
            length: 0,
            frame_time: 0,
            updated: Instant::now(),
        })
    }

    fn append(
        &mut self,
        frame: usize,
        offset: usize,
        length: usize,
        time: u64,
        body: &[u8],
    ) -> Result<Value> {
        ensure!(
            frame == self.times.len() && frame < FRAME_LIMIT,
            "録画フレーム番号または枚数の上限が不正です"
        );
        ensure!(
            offset == self.offset
                && (1..=CHUNK_LIMIT).contains(&body.len())
                && (25..=11 * 1024 * 1024).contains(&length)
                && offset + body.len() <= length,
            "PNGの分割位置または容量が不正です"
        );
        let writer = self.writer.as_mut().context("録画は確定済みです")?;
        if offset == 0 {
            ensure!(
                self.bytes + length as u64 <= ARCHIVE_LIMIT,
                "PNG録画の容量上限に達しました"
            );
            ensure!(
                body.starts_with(b"\x89PNG\r\n\x1a\n\x00\x00\x00\x0dIHDR")
                    && body.get(16..20) == Some(&self.format.width.to_be_bytes())
                    && body.get(20..24) == Some(&self.format.height.to_be_bytes()),
                "PNGの形式または寸法が不正です"
            );
            ensure!(
                self.times.last().is_none_or(|last| time >= *last),
                "録画時刻が不正です"
            );
            writer.start_file(
                format!("frames/{frame:06}.png"),
                SimpleFileOptions::default().compression_method(zip::CompressionMethod::Stored),
            )?;
            self.length = length;
            self.frame_time = time;
        } else {
            ensure!(length == self.length && time == self.frame_time, "同じPNGの容量または時刻が変わりました");
        }
        writer
            .write_all(body)
            .context("PNGをディスクに書き込めません")?;
        let written = offset + body.len();
        self.offset = written;
        if written == self.length {
            self.times.push(time);
            self.bytes += length as u64;
            self.offset = 0;
        }
        self.updated = Instant::now();
        Ok(json!({"written":written}))
    }

    fn finish(&mut self) -> Result<Value> {
        ensure!(
            self.offset == 0 && !self.times.is_empty(),
            "確定できるPNGがありません"
        );
        let mut writer = self.writer.take().context("録画は確定済みです")?;
        writer.start_file("timeline.json", SimpleFileOptions::default())?;
        serde_json::to_writer(
            &mut writer,
            &json!({"width":self.format.width,"height":self.format.height,"timestampUnit":"microseconds","firstIndex":0,"timestamps":self.times}),
        )?;
        writer
            .finish()?
            .sync_all()
            .context("録画をディスクに保存できません")?;
        self.finished = true;
        self.updated = Instant::now();
        Ok(json!({"bytes":fs::metadata(&self.temporary)?.len(),"frames":self.times.len()}))
    }
}

#[derive(Default)]
pub struct FrameRecordings(Mutex<BTreeMap<String, FrameArchive>>);

impl FrameRecordings {
    #[cfg(any(windows, target_os = "macos"))]
    pub fn clear(&self) {
        self.0.lock().unwrap().clear();
    }

    pub fn handle(
        &self,
        id: &str,
        action: &str,
        query: &BTreeMap<Cow<'_, str>, Cow<'_, str>>,
        body: &[u8],
    ) -> Result<Value> {
        let param = |key: &str| {
            query
                .get(key)
                .map(|value| value.as_ref())
                .with_context(|| format!("録画入力 {key} がありません"))
        };
        let mut archives = self.0.lock().unwrap();
        if action == "begin" {
            ensure!(body.len() <= 1024, "録画の保存要求が不正です");
            archives
                .retain(|_, archive| archive.updated.elapsed() < Duration::from_secs(6 * 60 * 60));
            ensure!(
                !archives.contains_key(id) && archives.len() < 4,
                "PNG録画の保存が混み合っています"
            );
            archives.insert(
                id.into(),
                FrameArchive::open(id, serde_json::from_slice(body)?, &downloads_directory()?)?,
            );
            return Ok(json!({"written":0}));
        }
        if action == "cancel" {
            archives.remove(id);
            return Ok(json!({"cancelled":true}));
        }
        let archive = archives
            .get_mut(id)
            .context("PNG録画が開始されていません")?;
        match action {
            "append" => archive.append(
                param("frame")?.parse()?,
                param("offset")?.parse()?,
                param("length")?.parse()?,
                param("time")?.parse()?,
                body,
            ),
            "finish" => archive.finish(),
            "save" => {
                ensure!(archive.finished, "録画の確定が完了していません");
                let path = publish(&archive.temporary, &archive.format.name)?;
                archives.remove(id);
                Ok(json!({"path":path.to_string_lossy()}))
            }
            _ => bail!("PNG録画の保存操作が不正です"),
        }
    }
}

#[test]
fn png_archive_retains_frame_bytes_and_times() {
    use std::io::Read;
    let dir = std::env::temp_dir();
    let id = format!("archive-test-{}", std::process::id());
    let format = Format {
        name: "KBCS-test.zip".into(),
        width: 961,
        height: 640,
    };
    let mut archive = FrameArchive::open(&id, format, &dir).unwrap();
    let mut png = b"\x89PNG\r\n\x1a\n\x00\x00\x00\x0dIHDR".to_vec();
    png.extend(961u32.to_be_bytes());
    png.extend(640u32.to_be_bytes());
    png.extend([7; 20]);
    assert!(archive.append(0, 1, png.len(), 0, &png).is_err());
    archive.append(0, 0, png.len(), 0, &png[..30]).unwrap();
    assert!(archive.finish().is_err());
    archive.append(0, 30, png.len(), 0, &png[30..]).unwrap();
    archive.append(1, 0, png.len(), 33333, &png).unwrap();
    assert_eq!(archive.finish().unwrap()["frames"], 2);
    let mut zip = zip::ZipArchive::new(File::open(&archive.temporary).unwrap()).unwrap();
    let mut restored = Vec::new();
    zip.by_name("frames/000001.png")
        .unwrap()
        .read_to_end(&mut restored)
        .unwrap();
    assert_eq!(restored, png);
    let timeline: Value = serde_json::from_reader(zip.by_name("timeline.json").unwrap()).unwrap();
    assert_eq!(timeline["timestamps"], json!([0, 33333]));
    assert_eq!(timeline["width"], 961);
}
