# 00baeb3c

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/inspection-0039.md#compare-670c34508eee0e97947f2191fb5320ab)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/inspection-0035.md#compare-1a54fa52fa3e394018b59282db2cb94f)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00baeb3c",
  "name": "_ZNSt6__ndk16__treeINS_4pairIN11flatbuffers8BaseTypeEPNS2_9StructDefEEENS_4lessIS6_EENS_9allocatorIS6_EEE7destroyEPNS_11__tree_nodeIS6_PvEE",
  "size": 64,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "82ebf1a068c0c6901ca3b65dd23ed6e7b5db7c633352f2a184ffe9f5f5ff060f",
  "source_text_sha256": "82ebf1a068c0c6901ca3b65dd23ed6e7b5db7c633352f2a184ffe9f5f5ff060f"
}
~~~

## 呼び出し元

- [00c5d080](../00c5d/00c5d080.md)

## 呼び出し先

- [00c57f80](../00c57/00c57f80.md)
- [00c5d080](../00c5d/00c5d080.md)

## 疑似コード / UTF-8 651 bytes

~~~c

void _ZNSt6__ndk16__treeINS_4pairIN11flatbuffers8BaseTypeEPNS2_9StructDefEEENS_4lessIS6_EENS_9allocatorIS6_EEE7destroyEPNS_11__tree_nodeIS6_PvEE
               (undefined8 param_1,undefined8 *param_2)

{
  if (param_2 != (undefined8 *)0x0) {
    _ZNSt6__ndk16__treeINS_4pairIN11flatbuffers8BaseTypeEPNS2_9StructDefEEENS_4lessIS6_EENS_9allocatorIS6_EEE7destroyEPNS_11__tree_nodeIS6_PvEE
              (param_1,*param_2);
    _ZNSt6__ndk16__treeINS_4pairIN11flatbuffers8BaseTypeEPNS2_9StructDefEEENS_4lessIS6_EENS_9allocatorIS6_EEE7destroyEPNS_11__tree_nodeIS6_PvEE
              (param_1,param_2[1]);
    _ZdlPv(param_2);
    return;
  }
  return;
}

~~~
