# ネイティブ関数のバージョン間追跡

[実測と再実行手順](../../../matcher/docs/matching-validation.md) · [集計と出典](summary.json)

SQLite SHA-256 `0ce7dd59117746027036e42cc5c1f3c49397f95025f7102e96b804f848089634`

関係は根拠付きの推定です。変更候補は検査範囲と合わせて読みます。
構造とP-codeの一致だけで実行時の挙動は確定しません。

## 連続版の比較

- [v16.0.1 → v16.0.2](0-1/README.md)
- [v16.0.2 → v16.0.3](1-2/README.md)

## 3版経路の検証

直接経路は検証に用います。一致した経路も共通の解析器に依存します。

~~~json
{
  "consistent": 22774,
  "gap_candidate": 150,
  "partial": 341,
  "temporary_change_candidate": 3
}
~~~


[矛盾・再登場・一時変化候補](cycles/README.md)
