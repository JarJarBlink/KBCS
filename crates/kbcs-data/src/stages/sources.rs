use super::{Row, number, rows};
use crate::store::Database;
use anyhow::{Context, Result};
use serde_json::{Value, json};

// Map_optionは引用・改行を含む注釈まで記録として読む。旧版の列19は注釈。
pub(super) fn map_option_rows(bytes: &[u8]) -> Result<(usize, Vec<Row>)> {
    let text = std::str::from_utf8(bytes)?.trim_start_matches('\u{feff}');
    let mut reader = csv::ReaderBuilder::new()
        .has_headers(false)
        .flexible(true)
        .from_reader(text.as_bytes());
    let mut annotation = 20;
    let mut result = Vec::new();
    for record in reader.records() {
        let record = record?;
        let row = record.position().context("Map_option 行番号欠測")?.line() as usize;
        let Some(first) = record.get(0) else { continue };
        if first.trim().parse::<i64>().is_err() {
            if first.trim().eq_ignore_ascii_case("stageID")
                && record
                    .get(19)
                    .is_some_and(|label| label.trim() == "マップ名")
            {
                annotation = 19;
            }
            continue;
        }
        let values = record
            .iter()
            .take(annotation)
            .enumerate()
            .map(|(column, cell)| {
                let cell = cell.trim();
                if cell.is_empty() {
                    Ok(None)
                } else if cell == "." {
                    Ok(Some(0))
                } else if column == 19 {
                    Ok(cell.parse().ok())
                } else {
                    Ok(Some(cell.parse::<i64>().with_context(|| {
                        format!("Map_option 数値セル不正: 行{row} 列{column}")
                    })?))
                }
            })
            .collect::<Result<Vec<_>>>()?;
        result.push((row, record.iter().map(str::to_owned).collect(), values));
    }
    Ok((annotation, result))
}

pub(super) fn detail_sources(database: &Database, map: &mut Value, stages: &mut [Value]) {
    if let Ok(Some((_, _, _, bytes))) = database.stored_source("Data/Map_option.csv")
        && let Ok((annotation, options)) = map_option_rows(&bytes)
    {
        map["optionsAnnotationIndex"] = json!(annotation);
        if let Some((row, cells, _)) = options
            .iter()
            .find(|(_, _, values)| Some(number(values, 0)) == map["nativeId"].as_i64())
        {
            map["rawOptions"] = json!(cells);
            map["optionsRow"] = json!(row);
        }
    }
    if let Some(path) = map["source"].as_str()
        && let Ok(Some((_, _, _, bytes))) = database.stored_source(path)
        && let Ok(records) = rows(&bytes, None)
    {
        map["headerSourceRows"] = json!(
            records
                .iter()
                .take(2)
                .map(|record| record.0)
                .collect::<Vec<_>>()
        );
    }
    if let Ok(Some((_, _, _, bytes))) = database.stored_source("Data/difficulty_level.tsv")
        && let Ok(text) = std::str::from_utf8(&bytes)
        && let Some((line, cells)) = text
            .trim_start_matches('\u{feff}')
            .lines()
            .enumerate()
            .find_map(|(line, text)| {
                let cells = text.split('\t').collect::<Vec<_>>();
                let id = cells.first()?.parse::<i64>().ok()?;
                (Some(id) == map["nativeId"].as_i64()).then_some((line + 1, cells))
            })
    {
        for stage in stages.iter_mut() {
            if let Some(index) = stage["index"].as_u64()
                && let Some(cell) = cells.get(index as usize + 1)
            {
                stage["difficultySource"] =
                    json!({"row":line,"column":index+1,"mapIdRaw":cells[0],"raw":cell});
            }
        }
    }
    for stage in stages {
        if let Some(path) = stage["source"].as_str()
            && stage["rawHeader"]
                .as_array()
                .is_some_and(|row| !row.is_empty())
        {
            let count = if stage["rawSettings"]
                .as_array()
                .is_some_and(|row| !row.is_empty())
            {
                2
            } else {
                1
            };
            stage["battleSourceRows"] = battle_source_rows(database, path, count);
        }
    }
}

pub(super) fn battle_source_rows(database: &Database, path: &str, count: usize) -> Value {
    database
        .stored_source(path)
        .ok()
        .flatten()
        .and_then(|(_, _, _, bytes)| rows(&bytes, None).ok())
        .map(|records| {
            json!(
                records
                    .iter()
                    .take(count)
                    .map(|record| record.0)
                    .collect::<Vec<_>>()
            )
        })
        .unwrap_or(Value::Null)
}

#[cfg(test)]
mod column_tests {
    use super::*;

    #[test]
    fn map_options_keep_new_columns_and_legacy_annotation() -> Result<()> {
        let prefix = "39001,2,0,100,150,200,300,0,0,,0,0,0,16,0,0,0,1,1";
        let csv = format!("{prefix},1,\"注釈,\nかぎ\"\", // 続き\",未知\n{prefix},0,別名\n");
        let (annotation, rows) = map_option_rows(csv.as_bytes())?;
        assert_eq!(annotation, 20);
        assert_eq!(rows[0].2[9], None);
        assert_eq!(rows[0].2[19], Some(1));
        assert_eq!(rows[0].1[20], "注釈,\nかぎ\", // 続き");
        assert_eq!(rows[0].1[21], "未知");
        assert_eq!(rows[1].0, 3);

        let old = format!(
            "stageID,{}マップ名\n{prefix},\"旧注釈,//\"\n",
            ",".repeat(18)
        );
        let (annotation, rows) = map_option_rows(old.as_bytes())?;
        assert_eq!(annotation, 19);
        assert_eq!(rows[0].1[19], "旧注釈,//");
        assert_eq!(rows[0].2.len(), 19);
        Ok(())
    }
}
