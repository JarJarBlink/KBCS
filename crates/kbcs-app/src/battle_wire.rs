use anyhow::{Context, Result};
use kbcs_bridge::render::Command;
use std::io::Write;
use std::time::Instant;

// C ABIのメモリを送らず、明示したLE形式で全値をそのまま渡す。
pub fn encode(
    metadata: &impl serde::Serialize,
    commands: &[Command],
    started: Instant,
    compressed: bool,
) -> Result<Vec<u8>> {
    encode_frame(metadata, commands, started, compressed, false)
}

pub fn encode_mobile(
    metadata: &impl serde::Serialize,
    commands: &[Command],
    started: Instant,
) -> Result<Vec<u8>> {
    encode_frame(metadata, commands, started, false, true)
}

fn encode_frame(
    metadata: &impl serde::Serialize,
    commands: &[Command],
    started: Instant,
    compressed: bool,
    mobile: bool,
) -> Result<Vec<u8>> {
    let encoding = Instant::now();
    let json = serde_json::to_vec(metadata)?;
    let json_len = u32::try_from(json.len()).context("戦闘ヘッダーが大きすぎます")?;
    let count = u32::try_from(commands.len()).context("描画命令が多すぎます")?;
    let offset = (32 + json.len() + 7) & !7;
    let mut bytes = Vec::with_capacity(offset + commands.len() * if mobile { 128 } else { 192 });
    bytes.extend_from_slice(if mobile { b"KBP1" } else { b"KBF1" });
    for value in [json_len, count, if mobile { 0 } else { 192 }] {
        bytes.extend_from_slice(&value.to_le_bytes());
    }
    bytes.resize(32, 0);
    bytes.extend_from_slice(&json);
    bytes.resize(offset, 0);
    for command in commands {
        for value in [command.texture, command.layer, command.count, command.blend] {
            bytes.extend_from_slice(&value.to_le_bytes());
        }
        bytes.extend_from_slice(&command.opacity.to_le_bytes());
        // USBでは命令が実際に使う頂点だけを送る。座標の精度・描画順は維持する。
        let points = if mobile {
            usize::try_from(command.count)
                .ok()
                .filter(|count| *count <= 8)
                .context("描画命令の頂点数が不正です")?
                * 2
        } else {
            command.points.len()
        };
        for value in &command.points[..points] {
            bytes.extend_from_slice(&value.to_le_bytes());
        }
        for value in command.cut.into_iter().chain(command.colors) {
            bytes.extend_from_slice(&value.to_le_bytes());
        }
    }
    if compressed && bytes.len() > 8192 {
        let mut encoder = flate2::write::GzEncoder::new(Vec::new(), flate2::Compression::fast());
        encoder.write_all(&bytes[32..])?;
        let payload = encoder.finish()?;
        if payload.len() + 32 < bytes.len() {
            bytes.truncate(32);
            bytes[..4].copy_from_slice(b"KBG1");
            bytes.extend_from_slice(&payload);
        }
    }
    bytes[16..24].copy_from_slice(&(started.elapsed().as_secs_f64() * 1000.).to_le_bytes());
    bytes[24..32].copy_from_slice(&(encoding.elapsed().as_secs_f64() * 1000.).to_le_bytes());
    Ok(bytes)
}

#[test]
fn wire_preserves_offsets_and_float_bits() {
    let command = Command {
        texture: -2,
        count: 8,
        opacity: 0.1,
        points: [-0.; 16],
        cut: [-7, 8, 9, 10],
        colors: [1, 2, 3, 4, 5, 6],
        ..Default::default()
    };
    let bytes = encode(
        &serde_json::json!({"日本語":true}),
        std::slice::from_ref(&command),
        Instant::now(),
        false,
    )
    .unwrap();
    let length = u32::from_le_bytes(bytes[4..8].try_into().unwrap()) as usize;
    let offset = (32 + length + 7) & !7;
    assert_eq!(&bytes[..4], b"KBF1");
    assert_eq!(bytes.len(), offset + 192);
    assert_eq!(
        i32::from_le_bytes(bytes[offset..offset + 4].try_into().unwrap()),
        -2
    );
    assert_eq!(
        f64::from_le_bytes(bytes[offset + 16..offset + 24].try_into().unwrap()).to_bits(),
        command.opacity.to_bits()
    );
    assert_eq!(
        f64::from_le_bytes(bytes[offset + 24..offset + 32].try_into().unwrap()).to_bits(),
        (-0_f64).to_bits()
    );
    assert_eq!(
        i32::from_le_bytes(bytes[offset + 152..offset + 156].try_into().unwrap()),
        -7
    );
    assert_eq!(
        i32::from_le_bytes(bytes[offset + 188..offset + 192].try_into().unwrap()),
        6
    );
    let repeated = vec![command; 100];
    let plain = encode(&serde_json::json!({}), &repeated, Instant::now(), false).unwrap();
    let packed = encode(&serde_json::json!({}), &repeated, Instant::now(), true).unwrap();
    assert_eq!(&packed[..4], b"KBG1");
    assert!(packed.len() < plain.len());
    let mut expanded = Vec::new();
    std::io::Read::read_to_end(
        &mut flate2::read::GzDecoder::new(&packed[32..]),
        &mut expanded,
    )
    .unwrap();
    assert_eq!(expanded, plain[32..]);
    let mut quad = repeated[0].clone();
    quad.count = 4;
    let mobile = encode_mobile(&serde_json::json!({}), &[quad], Instant::now()).unwrap();
    let offset = 40;
    assert_eq!(&mobile[..4], b"KBP1");
    assert_eq!(mobile.len(), offset + 128);
    assert_eq!(&mobile[offset + 88..offset + 92], &(-7i32).to_le_bytes());
}
