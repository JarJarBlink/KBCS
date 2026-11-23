# v16.0.2 → v16.0.3 · 要調査の変更候補 (34)

[一覧の目次](README.md)

<a id="compare-e1403e5acef75823ac27809db1b92822"></a>

### [`00b7199c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b71/00b7199c.md) → [`00b72990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b72/00b72990.md) _ZNK11flatbuffers6Parser12LookupStructERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5cb80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cb80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5db50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5db50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b719b0 ["INT_ADD", "register:40f0:8", ["const:b719b0:8", "const:4:8"]]
- 00b719b0 ["CALL", null, ["callee:00c5db50:8"]]
+ 00b729a4 ["INT_ADD", "register:40f0:8", ["const:b729a4:8", "const:4:8"]]
+ 00b729a4 ["CALL", null, ["callee:00c5db50:8"]]
~~~


<a id="compare-b0f02bb27288c6f80046fc91f4c8e5b9"></a>

### [`00b719e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b71/00b719e8.md) → [`00b729dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b72/00b729dc.md) _ZNK11flatbuffers6Parser32LookupStructThruParentNamespacesERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cab0.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c5a9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9b0.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md)
- 新版 呼出元 1件 [`00c5da80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5da80.md) · 呼出先 6件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59020`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59020.md) [`00c5b980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b980.md) [`00c5cf10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cf10.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b71ab8 ["INT_ADD", "register:40f0:8", ["const:b71ab8:8", "const:4:8"]]
- 00b71ab8 ["CALL", null, ["callee:00c59020:8"]]
+ 00b72aac ["INT_ADD", "register:40f0:8", ["const:b72aac:8", "const:4:8"]]
+ 00b72aac ["CALL", null, ["callee:00c59020:8"]]
- 00b71b04 ["INT_ADD", "register:40f0:8", ["const:b71b04:8", "const:4:8"]]
- 00b71b04 ["CALL", null, ["callee:00c5b980:8"]]
+ 00b72af8 ["INT_ADD", "register:40f0:8", ["const:b72af8:8", "const:4:8"]]
+ 00b72af8 ["CALL", null, ["callee:00c5b980:8"]]
- 00b71b48 ["INT_ADD", "register:40f0:8", ["const:b71b48:8", "const:4:8"]]
- 00b71b48 ["CALL", null, ["callee:00c5cf10:8"]]
+ 00b72b3c ["INT_ADD", "register:40f0:8", ["const:b72b3c:8", "const:4:8"]]
+ 00b72b3c ["CALL", null, ["callee:00c5cf10:8"]]
~~~


<a id="compare-2f18da5cff5713a6830a709f526e9b76"></a>

### [`00b71ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b71/00b71ca8.md) → [`00b72c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b72/00b72c9c.md) _ZN11flatbuffers6Parser14ParseTypeIdentERNS_4TypeE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c670.md) · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5d640`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d640.md) · 呼出先 9件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b71d40 ["INT_ADD", "register:40f0:8", ["const:b71d40:8", "const:4:8"]]
- 00b71d40 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b72d34 ["INT_ADD", "register:40f0:8", ["const:b72d34:8", "const:4:8"]]
+ 00b72d34 ["CALL", null, ["callee:00c58f30:8"]]
- 00b71d60 ["INT_ADD", "register:40f0:8", ["const:b71d60:8", "const:4:8"]]
- 00b71d60 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b72d54 ["INT_ADD", "register:40f0:8", ["const:b72d54:8", "const:4:8"]]
+ 00b72d54 ["CALL", null, ["callee:00c590a0:8"]]
- 00b71d74 ["INT_ADD", "register:40f0:8", ["const:b71d74:8", "const:4:8"]]
- 00b71d74 ["CALL", null, ["callee:00c5d7f0:8"]]
+ 00b72d68 ["INT_ADD", "register:40f0:8", ["const:b72d68:8", "const:4:8"]]
+ 00b72d68 ["CALL", null, ["callee:00c5d7f0:8"]]
~~~


<a id="compare-ca685b7f1e1c3d3d2eb2f0bb6ee919fc"></a>

### [`00b72e40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b72/00b72e40.md) → [`00b73e34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b73/00b73e34.md) _ZN11flatbuffers11SymbolTableINS_8FieldDefEE3AddERKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEPS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c170.md) · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5d140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d140.md) · 呼出先 9件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b72ed0 ["INT_ADD", "register:40f0:8", ["const:b72ed0:8", "const:4:8"]]
- 00b72ed0 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00b73ec4 ["INT_ADD", "register:40f0:8", ["const:b73ec4:8", "const:4:8"]]
+ 00b73ec4 ["CALL", null, ["callee:00c5c1e0:8"]]
- 00b72edc ["INT_ADD", "register:40f0:8", ["const:b72edc:8", "const:4:8"]]
- 00b72edc ["CALL", null, ["callee:00c58f30:8"]]
+ 00b73ed0 ["INT_ADD", "register:40f0:8", ["const:b73ed0:8", "const:4:8"]]
+ 00b73ed0 ["CALL", null, ["callee:00c58f30:8"]]
- 00b72f04 ["INT_ADD", "register:40f0:8", ["const:b72f04:8", "const:4:8"]]
- 00b72f04 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b73ef8 ["INT_ADD", "register:40f0:8", ["const:b73ef8:8", "const:4:8"]]
+ 00b73ef8 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-9b0ecdecf8a85106380457347776814c"></a>

### [`00b76ad8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b76/00b76ad8.md) → [`00b77acc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b77/00b77acc.md) _ZNK11flatbuffers7EnumDef11FindByValueERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cac0.md) · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5c280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c280.md) [`00c5c290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c290.md)
- 新版 呼出元 1件 [`00c5da90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5da90.md) · 呼出先 3件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5d250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d250.md) [`00c5d260`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d260.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b76b28 ["INT_ADD", "register:40f0:8", ["const:b76b28:8", "const:4:8"]]
- 00b76b28 ["CALL", null, ["callee:00c5d260:8"]]
+ 00b77b1c ["INT_ADD", "register:40f0:8", ["const:b77b1c:8", "const:4:8"]]
+ 00b77b1c ["CALL", null, ["callee:00c5d260:8"]]
- 00b76b7c ["INT_ADD", "register:40f0:8", ["const:b76b7c:8", "const:4:8"]]
- 00b76b7c ["CALL", null, ["callee:00c5d250:8"]]
+ 00b77b70 ["INT_ADD", "register:40f0:8", ["const:b77b70:8", "const:4:8"]]
+ 00b77b70 ["CALL", null, ["callee:00c5d250:8"]]
- 00b76c0c ["INT_ADD", "register:40f0:8", ["const:b76c0c:8", "const:4:8"]]
- 00b76c0c ["CALL", null, ["callee:00c58f80:8"]]
+ 00b77c00 ["INT_ADD", "register:40f0:8", ["const:b77c00:8", "const:4:8"]]
+ 00b77c00 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-be433c684c2c874bcdc5bfecc7535df7"></a>

### [`00b76c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b76/00b76c10.md) → [`00b77c04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b77/00b77c04.md) _ZN11flatbuffers11SymbolTableINS_5ValueEE3AddERKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEPS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c130.md) · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5d100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d100.md) · 呼出先 9件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b76ca0 ["INT_ADD", "register:40f0:8", ["const:b76ca0:8", "const:4:8"]]
- 00b76ca0 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00b77c94 ["INT_ADD", "register:40f0:8", ["const:b77c94:8", "const:4:8"]]
+ 00b77c94 ["CALL", null, ["callee:00c5c1e0:8"]]
- 00b76cac ["INT_ADD", "register:40f0:8", ["const:b76cac:8", "const:4:8"]]
- 00b76cac ["CALL", null, ["callee:00c58f30:8"]]
+ 00b77ca0 ["INT_ADD", "register:40f0:8", ["const:b77ca0:8", "const:4:8"]]
+ 00b77ca0 ["CALL", null, ["callee:00c58f30:8"]]
- 00b76cd4 ["INT_ADD", "register:40f0:8", ["const:b76cd4:8", "const:4:8"]]
- 00b76cd4 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b77cc8 ["INT_ADD", "register:40f0:8", ["const:b77cc8:8", "const:4:8"]]
+ 00b77cc8 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-38176ddb9b7f0036f01472314e9e081f"></a>

### [`00b7722c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b77/00b7722c.md) → [`00b78220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b78/00b78220.md) _ZN11flatbuffers6Parser11ParseStringERNS_5ValueEb

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c5a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c5a0.md) · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5d570`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d570.md) · 呼出先 9件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b772cc ["INT_ADD", "register:40f0:8", ["const:b772cc:8", "const:4:8"]]
- 00b772cc ["CALL", null, ["callee:00c58f30:8"]]
+ 00b782c0 ["INT_ADD", "register:40f0:8", ["const:b782c0:8", "const:4:8"]]
+ 00b782c0 ["CALL", null, ["callee:00c58f30:8"]]
- 00b772ec ["INT_ADD", "register:40f0:8", ["const:b772ec:8", "const:4:8"]]
- 00b772ec ["CALL", null, ["callee:00c590a0:8"]]
+ 00b782e0 ["INT_ADD", "register:40f0:8", ["const:b782e0:8", "const:4:8"]]
+ 00b782e0 ["CALL", null, ["callee:00c590a0:8"]]
- 00b77300 ["INT_ADD", "register:40f0:8", ["const:b77300:8", "const:4:8"]]
- 00b77300 ["CALL", null, ["callee:00c5d7f0:8"]]
+ 00b782f4 ["INT_ADD", "register:40f0:8", ["const:b782f4:8", "const:4:8"]]
+ 00b782f4 ["CALL", null, ["callee:00c5d7f0:8"]]
~~~


<a id="compare-0ddc4738bede1e59a80ef22bbc8c07ba"></a>

### [`00b77584`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b77/00b77584.md) → [`00b78578`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b78/00b78578.md) _ZN11flatbuffers6Parser10ParseCommaEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5c820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c820.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d7f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b775a4 ["INT_ADD", "register:40f0:8", ["const:b775a4:8", "const:4:8"]]
- 00b775a4 ["CALL", null, ["callee:00c5d7f0:8"]]
+ 00b78598 ["INT_ADD", "register:40f0:8", ["const:b78598:8", "const:4:8"]]
+ 00b78598 ["CALL", null, ["callee:00c5d7f0:8"]]
~~~


<a id="compare-3dfd2cc81c260b0140aec0d185bad29d"></a>

### [`00b7cf70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7c/00b7cf70.md) → [`00b7df64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b7d/00b7df64.md) _ZN11flatbuffers6Parser15SerializeStructERNS_21FlatBufferBuilderImplILb0EEERKNS_9StructDefERKNS_5ValueE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c690.md) · 呼出先 2件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md)
- 新版 呼出元 1件 [`00c5d660`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d660.md) · 呼出先 2件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7cfd0 ["INT_ADD", "register:40f0:8", ["const:b7cfd0:8", "const:4:8"]]
- 00b7cfd0 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b7dfc4 ["INT_ADD", "register:40f0:8", ["const:b7dfc4:8", "const:4:8"]]
+ 00b7dfc4 ["CALL", null, ["callee:00c5d240:8"]]
- 00b7d054 ["INT_ADD", "register:40f0:8", ["const:b7d054:8", "const:4:8"]]
- 00b7d054 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b7e048 ["INT_ADD", "register:40f0:8", ["const:b7e048:8", "const:4:8"]]
+ 00b7e048 ["CALL", null, ["callee:00c5d240:8"]]
- 00b7d078 ["INT_ADD", "register:40f0:8", ["const:b7d078:8", "const:4:8"]]
- 00b7d078 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b7e06c ["INT_ADD", "register:40f0:8", ["const:b7e06c:8", "const:4:8"]]
+ 00b7e06c ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-dca1a450400ceff64a4784b799ed852f"></a>

### [`00b7d0e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7d/00b7d0e8.md) → [`00b7e0dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b7e/00b7e0dc.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE10AddElementIhEEvtT_S3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c2b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c2b0.md) · 呼出先 1件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md)
- 新版 呼出元 1件 [`00c5d280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d280.md) · 呼出先 1件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7d140 ["INT_ADD", "register:40f0:8", ["const:b7d140:8", "const:4:8"]]
- 00b7d140 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b7e134 ["INT_ADD", "register:40f0:8", ["const:b7e134:8", "const:4:8"]]
+ 00b7e134 ["CALL", null, ["callee:00c5d240:8"]]
- 00b7d180 ["INT_ADD", "register:40f0:8", ["const:b7d180:8", "const:4:8"]]
- 00b7d180 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b7e174 ["INT_ADD", "register:40f0:8", ["const:b7e174:8", "const:4:8"]]
+ 00b7e174 ["CALL", null, ["callee:00c5d240:8"]]
~~~


<a id="compare-4d0dc24e6c20fe2e1ff54863a9c5589a"></a>

### [`00b7d640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7d/00b7d640.md) → [`00b7e634`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b7e/00b7e634.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE10AddElementIaEEvtT_S3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c2a0.md) · 呼出先 1件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md)
- 新版 呼出元 1件 [`00c5d270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d270.md) · 呼出先 1件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7d698 ["INT_ADD", "register:40f0:8", ["const:b7d698:8", "const:4:8"]]
- 00b7d698 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b7e68c ["INT_ADD", "register:40f0:8", ["const:b7e68c:8", "const:4:8"]]
+ 00b7e68c ["CALL", null, ["callee:00c5d240:8"]]
- 00b7d6d8 ["INT_ADD", "register:40f0:8", ["const:b7d6d8:8", "const:4:8"]]
- 00b7d6d8 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b7e6cc ["INT_ADD", "register:40f0:8", ["const:b7e6cc:8", "const:4:8"]]
+ 00b7e6cc ["CALL", null, ["callee:00c5d240:8"]]
~~~


<a id="compare-924932189f557c47e77bd1a7efa3bf38"></a>

### [`00b7db98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7d/00b7db98.md) → [`00b7eb8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b7e/00b7eb8c.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE10AddElementIsEEvtT_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c2c0.md) · 呼出先 1件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md)
- 新版 呼出元 1件 [`00c5d290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d290.md) · 呼出先 1件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7dbf0 ["INT_ADD", "register:40f0:8", ["const:b7dbf0:8", "const:4:8"]]
- 00b7dbf0 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b7ebe4 ["INT_ADD", "register:40f0:8", ["const:b7ebe4:8", "const:4:8"]]
+ 00b7ebe4 ["CALL", null, ["callee:00c5d240:8"]]
- 00b7dc28 ["INT_ADD", "register:40f0:8", ["const:b7dc28:8", "const:4:8"]]
- 00b7dc28 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b7ec1c ["INT_ADD", "register:40f0:8", ["const:b7ec1c:8", "const:4:8"]]
+ 00b7ec1c ["CALL", null, ["callee:00c5d240:8"]]
- 00b7dc5c ["INT_ADD", "register:40f0:8", ["const:b7dc5c:8", "const:4:8"]]
- 00b7dc5c ["CALL", null, ["callee:00c5d240:8"]]
+ 00b7ec50 ["INT_ADD", "register:40f0:8", ["const:b7ec50:8", "const:4:8"]]
+ 00b7ec50 ["CALL", null, ["callee:00c5d240:8"]]
~~~


<a id="compare-4b6f2e996c5404f6b42d10004e37fb92"></a>

### [`00b7dcac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7d/00b7dcac.md) → [`00b7eca0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b7e/00b7eca0.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE10AddElementItEEvtT_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c2d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c2d0.md) · 呼出先 1件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md)
- 新版 呼出元 1件 [`00c5d2a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2a0.md) · 呼出先 1件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7dd04 ["INT_ADD", "register:40f0:8", ["const:b7dd04:8", "const:4:8"]]
- 00b7dd04 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b7ecf8 ["INT_ADD", "register:40f0:8", ["const:b7ecf8:8", "const:4:8"]]
+ 00b7ecf8 ["CALL", null, ["callee:00c5d240:8"]]
- 00b7dd3c ["INT_ADD", "register:40f0:8", ["const:b7dd3c:8", "const:4:8"]]
- 00b7dd3c ["CALL", null, ["callee:00c5d240:8"]]
+ 00b7ed30 ["INT_ADD", "register:40f0:8", ["const:b7ed30:8", "const:4:8"]]
+ 00b7ed30 ["CALL", null, ["callee:00c5d240:8"]]
- 00b7dd70 ["INT_ADD", "register:40f0:8", ["const:b7dd70:8", "const:4:8"]]
- 00b7dd70 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b7ed64 ["INT_ADD", "register:40f0:8", ["const:b7ed64:8", "const:4:8"]]
+ 00b7ed64 ["CALL", null, ["callee:00c5d240:8"]]
~~~


<a id="compare-1487af19b3d75f4e7f3649a394ce3350"></a>

### [`00b7ddc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7d/00b7ddc0.md) → [`00b7edb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b7e/00b7edb4.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE10AddElementItEEvtT_S3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c2e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c2e0.md) · 呼出先 1件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md)
- 新版 呼出元 1件 [`00c5d2b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2b0.md) · 呼出先 1件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7de2c ["INT_ADD", "register:40f0:8", ["const:b7de2c:8", "const:4:8"]]
- 00b7de2c ["CALL", null, ["callee:00c5d240:8"]]
+ 00b7ee20 ["INT_ADD", "register:40f0:8", ["const:b7ee20:8", "const:4:8"]]
+ 00b7ee20 ["CALL", null, ["callee:00c5d240:8"]]
- 00b7de64 ["INT_ADD", "register:40f0:8", ["const:b7de64:8", "const:4:8"]]
- 00b7de64 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b7ee58 ["INT_ADD", "register:40f0:8", ["const:b7ee58:8", "const:4:8"]]
+ 00b7ee58 ["CALL", null, ["callee:00c5d240:8"]]
- 00b7de98 ["INT_ADD", "register:40f0:8", ["const:b7de98:8", "const:4:8"]]
- 00b7de98 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b7ee8c ["INT_ADD", "register:40f0:8", ["const:b7ee8c:8", "const:4:8"]]
+ 00b7ee8c ["CALL", null, ["callee:00c5d240:8"]]
~~~


<a id="compare-4f4fe3f1544b9465b294a4139d1bb516"></a>

### [`00b7e35c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7e/00b7e35c.md) → [`00b7f350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b7f/00b7f350.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE11PushElementIijEET0_T_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c310.md) · 呼出先 1件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md)
- 新版 呼出元 1件 [`00c5d2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2e0.md) · 呼出先 1件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7e3b4 ["INT_ADD", "register:40f0:8", ["const:b7e3b4:8", "const:4:8"]]
- 00b7e3b4 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b7f3a8 ["INT_ADD", "register:40f0:8", ["const:b7f3a8:8", "const:4:8"]]
+ 00b7f3a8 ["CALL", null, ["callee:00c5d240:8"]]
- 00b7e410 ["INT_ADD", "register:40f0:8", ["const:b7e410:8", "const:4:8"]]
- 00b7e410 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b7f404 ["INT_ADD", "register:40f0:8", ["const:b7f404:8", "const:4:8"]]
+ 00b7f404 ["CALL", null, ["callee:00c5d240:8"]]
~~~


<a id="compare-f3fdae9542d6be6835c902c531fac8c6"></a>

### [`00b7e444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7e/00b7e444.md) → [`00b7f438`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b7f/00b7f438.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE11PushElementIjjEET0_T_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md) · 呼出先 1件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md)
- 新版 呼出元 1件 [`00c5d2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2f0.md) · 呼出先 1件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7e49c ["INT_ADD", "register:40f0:8", ["const:b7e49c:8", "const:4:8"]]
- 00b7e49c ["CALL", null, ["callee:00c5d240:8"]]
+ 00b7f490 ["INT_ADD", "register:40f0:8", ["const:b7f490:8", "const:4:8"]]
+ 00b7f490 ["CALL", null, ["callee:00c5d240:8"]]
- 00b7e4f8 ["INT_ADD", "register:40f0:8", ["const:b7e4f8:8", "const:4:8"]]
- 00b7e4f8 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b7f4ec ["INT_ADD", "register:40f0:8", ["const:b7f4ec:8", "const:4:8"]]
+ 00b7f4ec ["CALL", null, ["callee:00c5d240:8"]]
~~~


<a id="compare-75b964d44fd65bd370ae119e966a3898"></a>

### [`00b7e90c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7e/00b7e90c.md) → [`00b7f900`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b7f/00b7f900.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE11PushElementIljEET0_T_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c330.md) · 呼出先 1件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md)
- 新版 呼出元 1件 [`00c5d300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d300.md) · 呼出先 1件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7e964 ["INT_ADD", "register:40f0:8", ["const:b7e964:8", "const:4:8"]]
- 00b7e964 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b7f958 ["INT_ADD", "register:40f0:8", ["const:b7f958:8", "const:4:8"]]
+ 00b7f958 ["CALL", null, ["callee:00c5d240:8"]]
- 00b7e9c0 ["INT_ADD", "register:40f0:8", ["const:b7e9c0:8", "const:4:8"]]
- 00b7e9c0 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b7f9b4 ["INT_ADD", "register:40f0:8", ["const:b7f9b4:8", "const:4:8"]]
+ 00b7f9b4 ["CALL", null, ["callee:00c5d240:8"]]
~~~


<a id="compare-d9d65df410376db4f2c64349defdf77a"></a>

### [`00b7ee20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7e/00b7ee20.md) → [`00b7fe14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b7f/00b7fe14.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE11PushElementImjEET0_T_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c340.md) · 呼出先 1件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md)
- 新版 呼出元 1件 [`00c5d310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d310.md) · 呼出先 1件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7ee78 ["INT_ADD", "register:40f0:8", ["const:b7ee78:8", "const:4:8"]]
- 00b7ee78 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b7fe6c ["INT_ADD", "register:40f0:8", ["const:b7fe6c:8", "const:4:8"]]
+ 00b7fe6c ["CALL", null, ["callee:00c5d240:8"]]
- 00b7eed4 ["INT_ADD", "register:40f0:8", ["const:b7eed4:8", "const:4:8"]]
- 00b7eed4 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b7fec8 ["INT_ADD", "register:40f0:8", ["const:b7fec8:8", "const:4:8"]]
+ 00b7fec8 ["CALL", null, ["callee:00c5d240:8"]]
~~~


<a id="compare-74fd907c6b8cac7a605cd3bac63bd9b7"></a>

### [`00b7f100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7f/00b7f100.md) → [`00b800f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b80/00b800f4.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE11PushElementIfjEET0_T_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c300.md) · 呼出先 1件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md)
- 新版 呼出元 1件 [`00c5d2d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2d0.md) · 呼出先 1件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7f158 ["INT_ADD", "register:40f0:8", ["const:b7f158:8", "const:4:8"]]
- 00b7f158 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b8014c ["INT_ADD", "register:40f0:8", ["const:b8014c:8", "const:4:8"]]
+ 00b8014c ["CALL", null, ["callee:00c5d240:8"]]
- 00b7f1b4 ["INT_ADD", "register:40f0:8", ["const:b7f1b4:8", "const:4:8"]]
- 00b7f1b4 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b801a8 ["INT_ADD", "register:40f0:8", ["const:b801a8:8", "const:4:8"]]
+ 00b801a8 ["CALL", null, ["callee:00c5d240:8"]]
~~~


<a id="compare-6a84884fa43297c0ea62b34e3063ae70"></a>

### [`00b7f3ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7f/00b7f3ec.md) → [`00b803e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b80/00b803e0.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE11PushElementIdjEET0_T_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c2f0.md) · 呼出先 1件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md)
- 新版 呼出元 1件 [`00c5d2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2c0.md) · 呼出先 1件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7f444 ["INT_ADD", "register:40f0:8", ["const:b7f444:8", "const:4:8"]]
- 00b7f444 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b80438 ["INT_ADD", "register:40f0:8", ["const:b80438:8", "const:4:8"]]
+ 00b80438 ["CALL", null, ["callee:00c5d240:8"]]
- 00b7f4a0 ["INT_ADD", "register:40f0:8", ["const:b7f4a0:8", "const:4:8"]]
- 00b7f4a0 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b80494 ["INT_ADD", "register:40f0:8", ["const:b80494:8", "const:4:8"]]
+ 00b80494 ["CALL", null, ["callee:00c5d240:8"]]
~~~


<a id="compare-8db0dc761d8532afa41939acfeb29ed9"></a>

### [`00b7f4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7f/00b7f4d0.md) → [`00b804c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b80/00b804c4.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE9AddOffsetIvEEvtNS_8Offset64IT_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c4f0.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c340.md)
- 新版 呼出元 1件 [`00c5d4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d4c0.md) · 呼出先 2件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md) [`00c5d310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d310.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7f530 ["INT_ADD", "register:40f0:8", ["const:b7f530:8", "const:4:8"]]
- 00b7f530 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b80524 ["INT_ADD", "register:40f0:8", ["const:b80524:8", "const:4:8"]]
+ 00b80524 ["CALL", null, ["callee:00c5d240:8"]]
- 00b7f58c ["INT_ADD", "register:40f0:8", ["const:b7f58c:8", "const:4:8"]]
- 00b7f58c ["CALL", null, ["callee:00c5d310:8"]]
+ 00b80580 ["INT_ADD", "register:40f0:8", ["const:b80580:8", "const:4:8"]]
+ 00b80580 ["CALL", null, ["callee:00c5d310:8"]]
- 00b7f5b0 ["INT_ADD", "register:40f0:8", ["const:b7f5b0:8", "const:4:8"]]
- 00b7f5b0 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b805a4 ["INT_ADD", "register:40f0:8", ["const:b805a4:8", "const:4:8"]]
+ 00b805a4 ["CALL", null, ["callee:00c5d240:8"]]
~~~


<a id="compare-a54dabcae0fee47969965b803d116824"></a>

### [`00b7f600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7f/00b7f600.md) → [`00b805f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b80/00b805f4.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE9AddOffsetIvEEvtNS_6OffsetIT_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c4e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c4e0.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)
- 新版 呼出元 1件 [`00c5d4b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d4b0.md) · 呼出先 2件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md) [`00c5d2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7f660 ["INT_ADD", "register:40f0:8", ["const:b7f660:8", "const:4:8"]]
- 00b7f660 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b80654 ["INT_ADD", "register:40f0:8", ["const:b80654:8", "const:4:8"]]
+ 00b80654 ["CALL", null, ["callee:00c5d240:8"]]
- 00b7f6bc ["INT_ADD", "register:40f0:8", ["const:b7f6bc:8", "const:4:8"]]
- 00b7f6bc ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00b806b0 ["INT_ADD", "register:40f0:8", ["const:b806b0:8", "const:4:8"]]
+ 00b806b0 ["CALL", null, ["callee:00c5d2f0:8"]]
- 00b7f6e0 ["INT_ADD", "register:40f0:8", ["const:b7f6e0:8", "const:4:8"]]
- 00b7f6e0 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b806d4 ["INT_ADD", "register:40f0:8", ["const:b806d4:8", "const:4:8"]]
+ 00b806d4 ["CALL", null, ["callee:00c5d240:8"]]
~~~


<a id="compare-2f6364ee4fd3efd9c9843362b5990baf"></a>

### [`00b7f730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7f/00b7f730.md) → [`00b80724`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b80/00b80724.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE8EndTableEj

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c410.md) · 呼出先 4件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md) [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c310.md)
- 新版 呼出元 1件 [`00c5d3e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d3e0.md) · 呼出先 4件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md) [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md) [`00c5d2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7f758 ["INT_ADD", "register:40f0:8", ["const:b7f758:8", "const:4:8"]]
- 00b7f758 ["CALL", null, ["callee:00c5d2e0:8"]]
+ 00b8074c ["INT_ADD", "register:40f0:8", ["const:b8074c:8", "const:4:8"]]
+ 00b8074c ["CALL", null, ["callee:00c5d2e0:8"]]
- 00b7f79c ["INT_ADD", "register:40f0:8", ["const:b7f79c:8", "const:4:8"]]
- 00b7f79c ["CALL", null, ["callee:00c5d240:8"]]
+ 00b80790 ["INT_ADD", "register:40f0:8", ["const:b80790:8", "const:4:8"]]
+ 00b80790 ["CALL", null, ["callee:00c5d240:8"]]
- 00b7f7c0 ["INT_ADD", "register:40f0:8", ["const:b7f7c0:8", "const:4:8"]]
- 00b7f7c0 ["CALL", null, ["callee:00c59130:8"]]
+ 00b807b4 ["INT_ADD", "register:40f0:8", ["const:b807b4:8", "const:4:8"]]
+ 00b807b4 ["CALL", null, ["callee:00c59130:8"]]
~~~


<a id="compare-9d4d7f4f975ae935bbd2b385cb986b51"></a>

### [`00b7fd98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7f/00b7fd98.md) → [`00b80d8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b80/00b80d8c.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE11StartVectorINS_6OffsetEjEEvmmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c350.md) · 呼出先 1件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md)
- 新版 呼出元 1件 [`00c5d320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d320.md) · 呼出先 1件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7fe04 ["INT_ADD", "register:40f0:8", ["const:b7fe04:8", "const:4:8"]]
- 00b7fe04 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b80df8 ["INT_ADD", "register:40f0:8", ["const:b80df8:8", "const:4:8"]]
+ 00b80df8 ["CALL", null, ["callee:00c5d240:8"]]
- 00b7fe88 ["INT_ADD", "register:40f0:8", ["const:b7fe88:8", "const:4:8"]]
- 00b7fe88 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b80e7c ["INT_ADD", "register:40f0:8", ["const:b80e7c:8", "const:4:8"]]
+ 00b80e7c ["CALL", null, ["callee:00c5d240:8"]]
~~~


<a id="compare-c8cf6bd29105b69e080011c03c5c07ff"></a>

### [`00b7fed8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7f/00b7fed8.md) → [`00b80ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b80/00b80ecc.md) FUN_00b80ecc

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00b7b314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7b/00b7b314.md) [`00b7fed8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7f/00b7fed8.md) · 呼出先 2件 [`00b7fed8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7f/00b7fed8.md) [`00baafa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baa/00baafa8.md)
- 新版 呼出元 2件 [`00b7c308`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b7c/00b7c308.md) [`00b80ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b80/00b80ecc.md) · 呼出先 2件 [`00b80ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b80/00b80ecc.md) [`00babf9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bab/00babf9c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7ff54 ["INT_ADD", "register:40f0:8", ["const:b7ff54:8", "const:4:8"]]
- 00b7ff54 ["CALL", null, ["local:b0:8"]]
+ 00b80f48 ["INT_ADD", "register:40f0:8", ["const:b80f48:8", "const:4:8"]]
+ 00b80f48 ["CALL", null, ["local:b0:8"]]
- 00b7ff9c ["INT_ADD", "register:40f0:8", ["const:b7ff9c:8", "const:4:8"]]
- 00b7ff9c ["CALL", null, ["callee:00babf9c:8"]]
+ 00b80f90 ["INT_ADD", "register:40f0:8", ["const:b80f90:8", "const:4:8"]]
+ 00b80f90 ["CALL", null, ["callee:00babf9c:8"]]
~~~


<a id="compare-ab17915ad9eb0a06479e87699f35d476"></a>

### [`00b80114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b80/00b80114.md) → [`00b81108`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b81/00b81108.md) FUN_00b81108

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00b7b314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7b/00b7b314.md) [`00b80114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b80/00b80114.md) · 呼出先 2件 [`00b80114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b80/00b80114.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 2件 [`00b7c308`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b7c/00b7c308.md) [`00b81108`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b81/00b81108.md) · 呼出先 2件 [`00b81108`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b81/00b81108.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b80184 ["INT_ADD", "register:40f0:8", ["const:b80184:8", "const:4:8"]]
- 00b80184 ["CALL", null, ["local:b0:8"]]
+ 00b81178 ["INT_ADD", "register:40f0:8", ["const:b81178:8", "const:4:8"]]
+ 00b81178 ["CALL", null, ["local:b0:8"]]
- 00b8023c ["INT_ADD", "register:40f0:8", ["const:b8023c:8", "const:4:8"]]
- 00b8023c ["CALL", null, ["callee:00c590f0:8"]]
+ 00b81230 ["INT_ADD", "register:40f0:8", ["const:b81230:8", "const:4:8"]]
+ 00b81230 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-696162e3e00cf9c971ff9cc3d7d78c1a"></a>

### [`00b802b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b80/00b802b4.md) → [`00b812a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b81/00b812a8.md) FUN_00b812a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00b7b314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7b/00b7b314.md) [`00b802b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b80/00b802b4.md) · 呼出先 2件 [`00b802b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b80/00b802b4.md) [`00baafa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baa/00baafa8.md)
- 新版 呼出元 2件 [`00b7c308`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b7c/00b7c308.md) [`00b812a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b81/00b812a8.md) · 呼出先 2件 [`00b812a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b81/00b812a8.md) [`00babf9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bab/00babf9c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b80318 ["INT_ADD", "register:40f0:8", ["const:b80318:8", "const:4:8"]]
- 00b80318 ["CALL", null, ["local:b0:8"]]
+ 00b8130c ["INT_ADD", "register:40f0:8", ["const:b8130c:8", "const:4:8"]]
+ 00b8130c ["CALL", null, ["local:b0:8"]]
- 00b803b4 ["INT_ADD", "register:40f0:8", ["const:b803b4:8", "const:4:8"]]
- 00b803b4 ["CALL", null, ["callee:00babf9c:8"]]
+ 00b813a8 ["INT_ADD", "register:40f0:8", ["const:b813a8:8", "const:4:8"]]
+ 00b813a8 ["CALL", null, ["callee:00babf9c:8"]]
~~~


<a id="compare-1ddf547e72eb8b55a75e07d8f636b425"></a>

### [`00b80860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b80/00b80860.md) → [`00b81854`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b81/00b81854.md) _ZN11flatbuffers10IDLOptionsaSERKS0_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c070.md) · 呼出先 2件 [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md) [`00c5d100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d100.md)
- 新版 呼出元 1件 [`00c5d040`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d040.md) · 呼出先 2件 [`00c5c150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c150.md) [`00c5e0d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e0d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b808ac ["INT_ADD", "register:40f0:8", ["const:b808ac:8", "const:4:8"]]
- 00b808ac ["CALL", null, ["callee:00c5c150:8"]]
+ 00b818a0 ["INT_ADD", "register:40f0:8", ["const:b818a0:8", "const:4:8"]]
+ 00b818a0 ["CALL", null, ["callee:00c5c150:8"]]
- 00b808d0 ["INT_ADD", "register:40f0:8", ["const:b808d0:8", "const:4:8"]]
- 00b808d0 ["CALL", null, ["callee:00c5c150:8"]]
+ 00b818c4 ["INT_ADD", "register:40f0:8", ["const:b818c4:8", "const:4:8"]]
+ 00b818c4 ["CALL", null, ["callee:00c5c150:8"]]
- 00b80904 ["INT_ADD", "register:40f0:8", ["const:b80904:8", "const:4:8"]]
- 00b80904 ["CALL", null, ["callee:00c5c150:8"]]
+ 00b818f8 ["INT_ADD", "register:40f0:8", ["const:b818f8:8", "const:4:8"]]
+ 00b818f8 ["CALL", null, ["callee:00c5c150:8"]]
~~~


<a id="compare-3dba7ab0ddf342ace39a4988b6436d03"></a>

### [`00b80c84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b80/00b80c84.md) → [`00b81c78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b81/00b81c78.md) _ZN11flatbuffers6Parser5ParseEPKcPS2_S2_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5bfe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bfe0.md) · 呼出先 5件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5c680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c680.md) [`00c5c770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c770.md) [`00c5c890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c890.md) [`00c5c9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c9b0.md)
- 新版 呼出元 1件 [`00c5cfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cfb0.md) · 呼出先 5件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5d650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d650.md) [`00c5d740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d740.md) [`00c5d860`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d860.md) [`00c5d980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d980.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b80cbc ["INT_ADD", "register:40f0:8", ["const:b80cbc:8", "const:4:8"]]
- 00b80cbc ["CALL", null, ["callee:00c5d650:8"]]
+ 00b81cb0 ["INT_ADD", "register:40f0:8", ["const:b81cb0:8", "const:4:8"]]
+ 00b81cb0 ["CALL", null, ["callee:00c5d650:8"]]
- 00b80ce0 ["INT_ADD", "register:40f0:8", ["const:b80ce0:8", "const:4:8"]]
- 00b80ce0 ["CALL", null, ["callee:00c5d740:8"]]
+ 00b81cd4 ["INT_ADD", "register:40f0:8", ["const:b81cd4:8", "const:4:8"]]
+ 00b81cd4 ["CALL", null, ["callee:00c5d740:8"]]
- 00b80cfc ["INT_ADD", "register:40f0:8", ["const:b80cfc:8", "const:4:8"]]
- 00b80cfc ["CALL", null, ["callee:00c5d860:8"]]
+ 00b81cf0 ["INT_ADD", "register:40f0:8", ["const:b81cf0:8", "const:4:8"]]
+ 00b81cf0 ["CALL", null, ["callee:00c5d860:8"]]
~~~


<a id="compare-8d1047c806922b8f026ae8b702df8b93"></a>

### [`00b80d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b80/00b80d44.md) → [`00b81d38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b81/00b81d38.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE12CreateVectorIhNS_6OffsetENS_6VectorEEET0_IJT1_IJT_EEEEPKS7_m

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c360.md) · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)
- 新版 呼出元 1件 [`00c5d330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d330.md) · 呼出先 3件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md) [`00c5d2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b80db0 ["INT_ADD", "register:40f0:8", ["const:b80db0:8", "const:4:8"]]
- 00b80db0 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b81da4 ["INT_ADD", "register:40f0:8", ["const:b81da4:8", "const:4:8"]]
+ 00b81da4 ["CALL", null, ["callee:00c5d240:8"]]
- 00b80e1c ["INT_ADD", "register:40f0:8", ["const:b80e1c:8", "const:4:8"]]
- 00b80e1c ["CALL", null, ["callee:00c5d240:8"]]
+ 00b81e10 ["INT_ADD", "register:40f0:8", ["const:b81e10:8", "const:4:8"]]
+ 00b81e10 ["CALL", null, ["callee:00c5d240:8"]]
- 00b80e40 ["INT_ADD", "register:40f0:8", ["const:b80e40:8", "const:4:8"]]
- 00b80e40 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b81e34 ["INT_ADD", "register:40f0:8", ["const:b81e34:8", "const:4:8"]]
+ 00b81e34 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-7ac4ff044eeb41d01bf717e16b456068"></a>

### [`00b82818`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b82/00b82818.md) → [`00b8380c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b83/00b8380c.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6insertEmmc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cbb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cbb0.md) · 呼出先 4件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md) [`00c5a9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9b0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5db80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5db80.md) · 呼出先 4件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md) [`00c5b980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b980.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b828a4 ["INT_ADD", "register:40f0:8", ["const:b828a4:8", "const:4:8"]]
- 00b828a4 ["CALL", null, ["callee:00c5b980:8"]]
+ 00b83898 ["INT_ADD", "register:40f0:8", ["const:b83898:8", "const:4:8"]]
+ 00b83898 ["CALL", null, ["callee:00c5b980:8"]]
- 00b828d8 ["INT_ADD", "register:40f0:8", ["const:b828d8:8", "const:4:8"]]
- 00b828d8 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00b838cc ["INT_ADD", "register:40f0:8", ["const:b838cc:8", "const:4:8"]]
+ 00b838cc ["CALL", null, ["callee:00c58fe0:8"]]
- 00b828e8 ["INT_ADD", "register:40f0:8", ["const:b828e8:8", "const:4:8"]]
- 00b828e8 ["CALL", null, ["callee:00c59130:8"]]
+ 00b838dc ["INT_ADD", "register:40f0:8", ["const:b838dc:8", "const:4:8"]]
+ 00b838dc ["CALL", null, ["callee:00c59130:8"]]
~~~


<a id="compare-27ccab05eeb61c87695e26e169165614"></a>

### [`00b82928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b82/00b82928.md) → [`00b8391c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b83/00b8391c.md) _ZN11flatbuffers11SymbolTableINS_9StructDefEE3AddERKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEPS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c180.md) · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5d150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d150.md) · 呼出先 9件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b829b8 ["INT_ADD", "register:40f0:8", ["const:b829b8:8", "const:4:8"]]
- 00b829b8 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00b839ac ["INT_ADD", "register:40f0:8", ["const:b839ac:8", "const:4:8"]]
+ 00b839ac ["CALL", null, ["callee:00c5c1e0:8"]]
- 00b829c4 ["INT_ADD", "register:40f0:8", ["const:b829c4:8", "const:4:8"]]
- 00b829c4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b839b8 ["INT_ADD", "register:40f0:8", ["const:b839b8:8", "const:4:8"]]
+ 00b839b8 ["CALL", null, ["callee:00c58f30:8"]]
- 00b829ec ["INT_ADD", "register:40f0:8", ["const:b829ec:8", "const:4:8"]]
- 00b829ec ["CALL", null, ["callee:00c590a0:8"]]
+ 00b839e0 ["INT_ADD", "register:40f0:8", ["const:b839e0:8", "const:4:8"]]
+ 00b839e0 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-107118c3e1ba909d690cdc8070bb3a92"></a>

### [`00b82c14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b82/00b82c14.md) → [`00b83c08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b83/00b83c08.md) _ZN11flatbuffers7EnumDef16RemoveDuplicatesEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c8e0.md) · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5b9f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b9f0.md)
- 新版 呼出元 1件 [`00c5d8b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d8b0.md) · 呼出先 3件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c5c9c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c9c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b82c88 ["INT_ADD", "register:40f0:8", ["const:b82c88:8", "const:4:8"]]
- 00b82c88 ["CALL", null, ["callee:00c5c9c0:8"]]
+ 00b83c7c ["INT_ADD", "register:40f0:8", ["const:b83c7c:8", "const:4:8"]]
+ 00b83c7c ["CALL", null, ["callee:00c5c9c0:8"]]
- 00b82c90 ["INT_ADD", "register:40f0:8", ["const:b82c90:8", "const:4:8"]]
- 00b82c90 ["CALL", null, ["callee:00c58f50:8"]]
+ 00b83c84 ["INT_ADD", "register:40f0:8", ["const:b83c84:8", "const:4:8"]]
+ 00b83c84 ["CALL", null, ["callee:00c58f50:8"]]
- 00b82d34 ["INT_ADD", "register:40f0:8", ["const:b82d34:8", "const:4:8"]]
- 00b82d34 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00b83d28 ["INT_ADD", "register:40f0:8", ["const:b83d28:8", "const:4:8"]]
+ 00b83d28 ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-c71a8b7c8dcd415e198e1a2a4a81d0b7"></a>

### [`00b845d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b84/00b845d8.md) → [`00b855cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b85/00b855cc.md) _ZN11flatbuffers6Parser16ParseProtoOptionEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c6f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c6f0.md) · 呼出先 3件 [`00c5c630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c630.md) [`00c5c7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c7c0.md) [`00c5c820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c820.md)
- 新版 呼出元 1件 [`00c5d6c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d6c0.md) · 呼出先 3件 [`00c5d600`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d600.md) [`00c5d790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d790.md) [`00c5d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d7f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b845f0 ["INT_ADD", "register:40f0:8", ["const:b845f0:8", "const:4:8"]]
- 00b845f0 ["CALL", null, ["callee:00c5d790:8"]]
+ 00b855e4 ["INT_ADD", "register:40f0:8", ["const:b855e4:8", "const:4:8"]]
+ 00b855e4 ["CALL", null, ["callee:00c5d790:8"]]
- 00b8460c ["INT_ADD", "register:40f0:8", ["const:b8460c:8", "const:4:8"]]
- 00b8460c ["CALL", null, ["callee:00c5d600:8"]]
+ 00b85600 ["INT_ADD", "register:40f0:8", ["const:b85600:8", "const:4:8"]]
+ 00b85600 ["CALL", null, ["callee:00c5d600:8"]]
- 00b84628 ["INT_ADD", "register:40f0:8", ["const:b84628:8", "const:4:8"]]
- 00b84628 ["CALL", null, ["callee:00c5d7f0:8"]]
+ 00b8561c ["INT_ADD", "register:40f0:8", ["const:b8561c:8", "const:4:8"]]
+ 00b8561c ["CALL", null, ["callee:00c5d7f0:8"]]
~~~


<a id="compare-3c3ed322f13ca2495749351ba212a8a1"></a>

### [`00b848a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b84/00b848a4.md) → [`00b85898`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b85/00b85898.md) _ZN11flatbuffers11SymbolTableINS_4TypeEE3AddERKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEPS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c120.md) · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5d0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d0f0.md) · 呼出先 9件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b84934 ["INT_ADD", "register:40f0:8", ["const:b84934:8", "const:4:8"]]
- 00b84934 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00b85928 ["INT_ADD", "register:40f0:8", ["const:b85928:8", "const:4:8"]]
+ 00b85928 ["CALL", null, ["callee:00c5c1e0:8"]]
- 00b84940 ["INT_ADD", "register:40f0:8", ["const:b84940:8", "const:4:8"]]
- 00b84940 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b85934 ["INT_ADD", "register:40f0:8", ["const:b85934:8", "const:4:8"]]
+ 00b85934 ["CALL", null, ["callee:00c58f30:8"]]
- 00b84968 ["INT_ADD", "register:40f0:8", ["const:b84968:8", "const:4:8"]]
- 00b84968 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b8595c ["INT_ADD", "register:40f0:8", ["const:b8595c:8", "const:4:8"]]
+ 00b8595c ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-18284c8ccdb9e2f01da0ed1ff13cb98a"></a>

### [`00b84f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b84/00b84f20.md) → [`00b85f14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b85/00b85f14.md) _ZNK11flatbuffers6Parser16GetIncludedFilesEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5cb30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cb30.md) [`00c5d0c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d0c0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5db00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5db00.md) [`00c5e090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e090.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b84f3c ["INT_ADD", "register:40f0:8", ["const:b84f3c:8", "const:4:8"]]
- 00b84f3c ["CALL", null, ["callee:00c5db00:8"]]
+ 00b85f30 ["INT_ADD", "register:40f0:8", ["const:b85f30:8", "const:4:8"]]
+ 00b85f30 ["CALL", null, ["callee:00c5db00:8"]]
~~~


<a id="compare-3e5f7e2b4a141e8386fdb0557a9d76ca"></a>

### [`00b84f78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b84/00b84f78.md) → [`00b85f6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b85/00b85f6c.md) _ZNSt6__ndk16vectorIN11flatbuffers12IncludedFileENS_9allocatorIS2_EEEC2INS_21__tree_const_iteratorIS2_PNS_11__tree_nodeIS2_PvEElEEEET_NS_9en

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d0c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d0c0.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md) [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md)
- 新版 呼出元 1件 [`00c5e090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e090.md) · 呼出先 3件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md) [`00c5c650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c650.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b8502c ["INT_ADD", "register:40f0:8", ["const:b8502c:8", "const:4:8"]]
- 00b8502c ["CALL", null, ["callee:00c58f30:8"]]
+ 00b86020 ["INT_ADD", "register:40f0:8", ["const:b86020:8", "const:4:8"]]
+ 00b86020 ["CALL", null, ["callee:00c58f30:8"]]
- 00b8505c ["INT_ADD", "register:40f0:8", ["const:b8505c:8", "const:4:8"]]
- 00b8505c ["CALL", null, ["callee:00c5c650:8"]]
+ 00b86050 ["INT_ADD", "register:40f0:8", ["const:b86050:8", "const:4:8"]]
+ 00b86050 ["CALL", null, ["callee:00c5c650:8"]]
- 00b85068 ["INT_ADD", "register:40f0:8", ["const:b85068:8", "const:4:8"]]
- 00b85068 ["CALL", null, ["callee:00c5c650:8"]]
+ 00b8605c ["INT_ADD", "register:40f0:8", ["const:b8605c:8", "const:4:8"]]
+ 00b8605c ["CALL", null, ["callee:00c5c650:8"]]
~~~


<a id="compare-d4354b9088ef5fd78bb876d79daa78f8"></a>

### [`00b850f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b85/00b850f8.md) → [`00b860ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b86/00b860ec.md) _ZN11flatbuffers6Parser15UniqueNamespaceEPNS_9NamespaceE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c6a0.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5d670`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d670.md) · 呼出先 5件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b851fc ["INT_ADD", "register:40f0:8", ["const:b851fc:8", "const:4:8"]]
- 00b851fc ["CALL", null, ["callee:00c590f0:8"]]
+ 00b861f0 ["INT_ADD", "register:40f0:8", ["const:b861f0:8", "const:4:8"]]
+ 00b861f0 ["CALL", null, ["callee:00c590f0:8"]]
- 00b85260 ["INT_ADD", "register:40f0:8", ["const:b85260:8", "const:4:8"]]
- 00b85260 ["CALL", null, ["callee:00c58f50:8"]]
+ 00b86254 ["INT_ADD", "register:40f0:8", ["const:b86254:8", "const:4:8"]]
+ 00b86254 ["CALL", null, ["callee:00c58f50:8"]]
- 00b852a4 ["INT_ADD", "register:40f0:8", ["const:b852a4:8", "const:4:8"]]
- 00b852a4 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00b86298 ["INT_ADD", "register:40f0:8", ["const:b86298:8", "const:4:8"]]
+ 00b86298 ["CALL", null, ["callee:00c5c1e0:8"]]
~~~


<a id="compare-4f311659ee7d70e32f55c56ce0965157"></a>

### [`00b85348`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b85/00b85348.md) → [`00b8633c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b86/00b8633c.md) _ZN11flatbuffers6Parser15UnqualifiedNameERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c6b0.md) · 呼出先 7件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580a0.md) [`00c5b720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b720.md)
- 新版 呼出元 1件 [`00c5d680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d680.md) · 呼出先 7件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59070.md) [`00c5c6f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c6f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b85380 ["INT_ADD", "register:40f0:8", ["const:b85380:8", "const:4:8"]]
- 00b85380 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b86374 ["INT_ADD", "register:40f0:8", ["const:b86374:8", "const:4:8"]]
+ 00b86374 ["CALL", null, ["callee:00c58f30:8"]]
- 00b853b4 ["INT_ADD", "register:40f0:8", ["const:b853b4:8", "const:4:8"]]
- 00b853b4 ["CALL", null, ["callee:00c59070:8"]]
+ 00b863a8 ["INT_ADD", "register:40f0:8", ["const:b863a8:8", "const:4:8"]]
+ 00b863a8 ["CALL", null, ["callee:00c59070:8"]]
- 00b853e4 ["INT_ADD", "register:40f0:8", ["const:b853e4:8", "const:4:8"]]
- 00b853e4 ["CALL", null, ["callee:00c5c890:8"]]
+ 00b863d8 ["INT_ADD", "register:40f0:8", ["const:b863d8:8", "const:4:8"]]
+ 00b863d8 ["CALL", null, ["callee:00c5c890:8"]]
~~~


<a id="compare-f5592c2f037277d77edb2a4f5633df62"></a>

### [`00b86348`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b86/00b86348.md) → [`00b8733c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b87/00b8733c.md) FUN_00b8733c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b854d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b85/00b854d8.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aa00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aa00.md) [`00c5cb40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cb40.md)
- 新版 呼出元 1件 [`00b864cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b86/00b864cc.md) · 呼出先 4件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b9d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b9d0.md) [`00c5db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5db10.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b86394 ["INT_ADD", "register:40f0:8", ["const:b86394:8", "const:4:8"]]
- 00b86394 ["CALL", null, ["callee:00c5db10:8"]]
+ 00b87388 ["INT_ADD", "register:40f0:8", ["const:b87388:8", "const:4:8"]]
+ 00b87388 ["CALL", null, ["callee:00c5db10:8"]]
- 00b863c8 ["INT_ADD", "register:40f0:8", ["const:b863c8:8", "const:4:8"]]
- 00b863c8 ["CALL", null, ["callee:00c5b9d0:8"]]
+ 00b873bc ["INT_ADD", "register:40f0:8", ["const:b873bc:8", "const:4:8"]]
+ 00b873bc ["CALL", null, ["callee:00c5b9d0:8"]]
- 00b863dc ["INT_ADD", "register:40f0:8", ["const:b863dc:8", "const:4:8"]]
- 00b863dc ["CALL", null, ["callee:00c58f50:8"]]
+ 00b873d0 ["INT_ADD", "register:40f0:8", ["const:b873d0:8", "const:4:8"]]
+ 00b873d0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-3cf20c43b288c910c3ecdb6980571fcd"></a>

### [`00b86ee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b86/00b86ee0.md) → [`00b87ed4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b87/00b87ed4.md) _ZN11flatbuffers11SymbolTableINS_10ServiceDefEE3AddERKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEPS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c110.md) · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5d0e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d0e0.md) · 呼出先 9件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b86f70 ["INT_ADD", "register:40f0:8", ["const:b86f70:8", "const:4:8"]]
- 00b86f70 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00b87f64 ["INT_ADD", "register:40f0:8", ["const:b87f64:8", "const:4:8"]]
+ 00b87f64 ["CALL", null, ["callee:00c5c1e0:8"]]
- 00b86f7c ["INT_ADD", "register:40f0:8", ["const:b86f7c:8", "const:4:8"]]
- 00b86f7c ["CALL", null, ["callee:00c58f30:8"]]
+ 00b87f70 ["INT_ADD", "register:40f0:8", ["const:b87f70:8", "const:4:8"]]
+ 00b87f70 ["CALL", null, ["callee:00c58f30:8"]]
- 00b86fa4 ["INT_ADD", "register:40f0:8", ["const:b86fa4:8", "const:4:8"]]
- 00b86fa4 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b87f98 ["INT_ADD", "register:40f0:8", ["const:b87f98:8", "const:4:8"]]
+ 00b87f98 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-739611ebd26b37c622a32154fbcf0156"></a>

### [`00b87098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b87/00b87098.md) → [`00b8808c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b88/00b8808c.md) _ZN11flatbuffers11SymbolTableINS_7RPCCallEE3AddERKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEPS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c160.md) · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5d130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d130.md) · 呼出先 9件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b87128 ["INT_ADD", "register:40f0:8", ["const:b87128:8", "const:4:8"]]
- 00b87128 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00b8811c ["INT_ADD", "register:40f0:8", ["const:b8811c:8", "const:4:8"]]
+ 00b8811c ["CALL", null, ["callee:00c5c1e0:8"]]
- 00b87134 ["INT_ADD", "register:40f0:8", ["const:b87134:8", "const:4:8"]]
- 00b87134 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b88128 ["INT_ADD", "register:40f0:8", ["const:b88128:8", "const:4:8"]]
+ 00b88128 ["CALL", null, ["callee:00c58f30:8"]]
- 00b8715c ["INT_ADD", "register:40f0:8", ["const:b8715c:8", "const:4:8"]]
- 00b8715c ["CALL", null, ["callee:00c590a0:8"]]
+ 00b88150 ["INT_ADD", "register:40f0:8", ["const:b88150:8", "const:4:8"]]
+ 00b88150 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-ad13502834324355dfa9e969d179def5"></a>

### [`00b87250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b87/00b87250.md) → [`00b88244`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b88/00b88244.md) _ZN11flatbuffers6Parser11SetRootTypeEPKc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c5c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c5c0.md) · 呼出先 8件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00c5d590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d590.md) · 呼出先 8件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b87290 ["INT_ADD", "register:40f0:8", ["const:b87290:8", "const:4:8"]]
- 00b87290 ["CALL", null, ["callee:00c59080:8"]]
+ 00b88284 ["INT_ADD", "register:40f0:8", ["const:b88284:8", "const:4:8"]]
+ 00b88284 ["CALL", null, ["callee:00c59080:8"]]
- 00b872cc ["INT_ADD", "register:40f0:8", ["const:b872cc:8", "const:4:8"]]
- 00b872cc ["CALL", null, ["callee:00c58f30:8"]]
+ 00b882c0 ["INT_ADD", "register:40f0:8", ["const:b882c0:8", "const:4:8"]]
+ 00b882c0 ["CALL", null, ["callee:00c58f30:8"]]
- 00b872ec ["INT_ADD", "register:40f0:8", ["const:b872ec:8", "const:4:8"]]
- 00b872ec ["CALL", null, ["callee:00c590a0:8"]]
+ 00b882e0 ["INT_ADD", "register:40f0:8", ["const:b882e0:8", "const:4:8"]]
+ 00b882e0 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-f0ddbbc9790a188be4f822e59b833bcb"></a>

### [`00b87580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b87/00b87580.md) → [`00b88574`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b88/00b88574.md) _ZN11flatbuffers6Parser14ParseNamespaceEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c650.md) · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md) [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md)
- 新版 呼出元 1件 [`00c5d620`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d620.md) · 呼出先 9件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md) [`00c5c650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c650.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b875a4 ["INT_ADD", "register:40f0:8", ["const:b875a4:8", "const:4:8"]]
- 00b875a4 ["CALL", null, ["callee:00c5d790:8"]]
+ 00b88598 ["INT_ADD", "register:40f0:8", ["const:b88598:8", "const:4:8"]]
+ 00b88598 ["CALL", null, ["callee:00c5d790:8"]]
- 00b875d8 ["INT_ADD", "register:40f0:8", ["const:b875d8:8", "const:4:8"]]
- 00b875d8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b885cc ["INT_ADD", "register:40f0:8", ["const:b885cc:8", "const:4:8"]]
+ 00b885cc ["CALL", null, ["callee:00c58f30:8"]]
- 00b87640 ["INT_ADD", "register:40f0:8", ["const:b87640:8", "const:4:8"]]
- 00b87640 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00b88634 ["INT_ADD", "register:40f0:8", ["const:b88634:8", "const:4:8"]]
+ 00b88634 ["CALL", null, ["callee:00c5c1e0:8"]]
~~~


<a id="compare-067d32e3c75aab844dcea44f1dddc279"></a>

### [`00b89a0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b89/00b89a0c.md) → [`00b8aa00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b8a/00b8aa00.md) _ZN11flatbuffers6Parser24ParseProtoCurliesOrIdentEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5c7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c7c0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5d790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d790.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b89a28 ["INT_ADD", "register:40f0:8", ["const:b89a28:8", "const:4:8"]]
- 00b89a28 ["CALL", null, ["callee:00c5d790:8"]]
+ 00b8aa1c ["INT_ADD", "register:40f0:8", ["const:b8aa1c:8", "const:4:8"]]
+ 00b8aa1c ["CALL", null, ["callee:00c5d790:8"]]
- 00b89a60 ["INT_ADD", "register:40f0:8", ["const:b89a60:8", "const:4:8"]]
- 00b89a60 ["CALL", null, ["callee:00c5d790:8"]]
+ 00b8aa54 ["INT_ADD", "register:40f0:8", ["const:b8aa54:8", "const:4:8"]]
+ 00b8aa54 ["CALL", null, ["callee:00c5d790:8"]]
~~~


<a id="compare-fcf7b22793972ecc7974222e39aa321a"></a>

### [`00b89aa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b89/00b89aa8.md) → [`00b8aa9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b8a/00b8aa9c.md) _ZN11flatbuffers11SymbolTableINS_7EnumDefEE3AddERKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEPS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c140.md) · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5d110`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d110.md) · 呼出先 9件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b89b38 ["INT_ADD", "register:40f0:8", ["const:b89b38:8", "const:4:8"]]
- 00b89b38 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00b8ab2c ["INT_ADD", "register:40f0:8", ["const:b8ab2c:8", "const:4:8"]]
+ 00b8ab2c ["CALL", null, ["callee:00c5c1e0:8"]]
- 00b89b44 ["INT_ADD", "register:40f0:8", ["const:b89b44:8", "const:4:8"]]
- 00b89b44 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b8ab38 ["INT_ADD", "register:40f0:8", ["const:b8ab38:8", "const:4:8"]]
+ 00b8ab38 ["CALL", null, ["callee:00c58f30:8"]]
- 00b89b6c ["INT_ADD", "register:40f0:8", ["const:b89b6c:8", "const:4:8"]]
- 00b89b6c ["CALL", null, ["callee:00c590a0:8"]]
+ 00b8ab60 ["INT_ADD", "register:40f0:8", ["const:b8ab60:8", "const:4:8"]]
+ 00b8ab60 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-5e23830eb522e3ad5b74caf8eaeb1b9e"></a>

### [`00b8a294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8a/00b8a294.md) → [`00b8b288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b8b/00b8b288.md) _ZN11flatbuffers6Parser13ParseProtoKeyEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c630.md) · 呼出先 2件 [`00c5c7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c7c0.md) [`00c5c820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c820.md)
- 新版 呼出元 1件 [`00c5d600`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d600.md) · 呼出先 2件 [`00c5d790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d790.md) [`00c5d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d7f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b8a2c0 ["INT_ADD", "register:40f0:8", ["const:b8a2c0:8", "const:4:8"]]
- 00b8a2c0 ["CALL", null, ["callee:00c5d790:8"]]
+ 00b8b2b4 ["INT_ADD", "register:40f0:8", ["const:b8b2b4:8", "const:4:8"]]
+ 00b8b2b4 ["CALL", null, ["callee:00c5d790:8"]]
- 00b8a2e0 ["INT_ADD", "register:40f0:8", ["const:b8a2e0:8", "const:4:8"]]
- 00b8a2e0 ["CALL", null, ["callee:00c5d790:8"]]
+ 00b8b2d4 ["INT_ADD", "register:40f0:8", ["const:b8b2d4:8", "const:4:8"]]
+ 00b8b2d4 ["CALL", null, ["callee:00c5d790:8"]]
- 00b8a310 ["INT_ADD", "register:40f0:8", ["const:b8a310:8", "const:4:8"]]
- 00b8a310 ["CALL", null, ["callee:00c5d7f0:8"]]
+ 00b8b304 ["INT_ADD", "register:40f0:8", ["const:b8b304:8", "const:4:8"]]
+ 00b8b304 ["CALL", null, ["callee:00c5d7f0:8"]]
~~~


<a id="compare-aec03600d9db38ddcc29d31d12abc6fc"></a>

### [`00b8aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8a/00b8aed0.md) → [`00b8bec4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b8b/00b8bec4.md) _ZN11flexbuffers7Builder6EndMapEm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c9a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c9a0.md) · 呼出先 8件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5d970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d970.md) · 呼出先 8件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b8af40 ["INT_ADD", "register:40f0:8", ["const:b8af40:8", "const:4:8"]]
- 00b8af40 ["CALL", null, ["callee:00c5deb0:8"]]
+ 00b8bf34 ["INT_ADD", "register:40f0:8", ["const:b8bf34:8", "const:4:8"]]
+ 00b8bf34 ["CALL", null, ["callee:00c5deb0:8"]]
- 00b8af60 ["INT_ADD", "register:40f0:8", ["const:b8af60:8", "const:4:8"]]
- 00b8af60 ["CALL", null, ["callee:00c5d950:8"]]
+ 00b8bf54 ["INT_ADD", "register:40f0:8", ["const:b8bf54:8", "const:4:8"]]
+ 00b8bf54 ["CALL", null, ["callee:00c5d950:8"]]
- 00b8af84 ["INT_ADD", "register:40f0:8", ["const:b8af84:8", "const:4:8"]]
- 00b8af84 ["CALL", null, ["callee:00c5d950:8"]]
+ 00b8bf78 ["INT_ADD", "register:40f0:8", ["const:b8bf78:8", "const:4:8"]]
+ 00b8bf78 ["CALL", null, ["callee:00c5d950:8"]]
~~~


<a id="compare-403d0171ff049a44a9ab3b63d5467694"></a>

### [`00b8b0ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8b/00b8b0ac.md) → [`00b8c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b8c/00b8c0a0.md) _ZN11flexbuffers7Builder9EndVectorEmbb

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c9e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c9e0.md) · 呼出先 6件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md) [`00c5c980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c980.md)
- 新版 呼出元 1件 [`00c5d9b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d9b0.md) · 呼出先 6件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md) [`00c5d950`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d950.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b8b0f8 ["INT_ADD", "register:40f0:8", ["const:b8b0f8:8", "const:4:8"]]
- 00b8b0f8 ["CALL", null, ["callee:00c5d950:8"]]
+ 00b8c0ec ["INT_ADD", "register:40f0:8", ["const:b8c0ec:8", "const:4:8"]]
+ 00b8c0ec ["CALL", null, ["callee:00c5d950:8"]]
- 00b8b124 ["INT_ADD", "register:40f0:8", ["const:b8b124:8", "const:4:8"]]
- 00b8b124 ["CALL", null, ["callee:00c5e0b0:8"]]
+ 00b8c118 ["INT_ADD", "register:40f0:8", ["const:b8c118:8", "const:4:8"]]
+ 00b8c118 ["CALL", null, ["callee:00c5e0b0:8"]]
- 00b8b194 ["INT_ADD", "register:40f0:8", ["const:b8b194:8", "const:4:8"]]
- 00b8b194 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00b8c188 ["INT_ADD", "register:40f0:8", ["const:b8c188:8", "const:4:8"]]
+ 00b8c188 ["CALL", null, ["callee:00c5c1e0:8"]]
~~~


<a id="compare-c08fb311c667e93bf47892fb287dc4c7"></a>

### [`00b8b208`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8b/00b8b208.md) → [`00b8c1fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b8c/00b8c1fc.md) _ZN11flatbuffers6Parser15ParseFlexBufferEPKcS2_PN11flexbuffers7BuilderE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5c680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c680.md) [`00c5c770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c770.md) [`00c5c9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c9b0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5d650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d650.md) [`00c5d740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d740.md) [`00c5d980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d980.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b8b234 ["INT_ADD", "register:40f0:8", ["const:b8b234:8", "const:4:8"]]
- 00b8b234 ["CALL", null, ["callee:00c5d650:8"]]
+ 00b8c228 ["INT_ADD", "register:40f0:8", ["const:b8c228:8", "const:4:8"]]
+ 00b8c228 ["CALL", null, ["callee:00c5d650:8"]]
- 00b8b254 ["INT_ADD", "register:40f0:8", ["const:b8b254:8", "const:4:8"]]
- 00b8b254 ["CALL", null, ["callee:00c5d740:8"]]
+ 00b8c248 ["INT_ADD", "register:40f0:8", ["const:b8c248:8", "const:4:8"]]
+ 00b8c248 ["CALL", null, ["callee:00c5d740:8"]]
- 00b8b28c ["INT_ADD", "register:40f0:8", ["const:b8b28c:8", "const:4:8"]]
- 00b8b28c ["CALL", null, ["callee:00c5d980:8"]]
+ 00b8c280 ["INT_ADD", "register:40f0:8", ["const:b8c280:8", "const:4:8"]]
+ 00b8c280 ["CALL", null, ["callee:00c5d980:8"]]
~~~


<a id="compare-2c70a48dcb8269bb5d5813bc9214383a"></a>

### [`00b8b414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8b/00b8b414.md) → [`00b8c408`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b8c/00b8c408.md) _ZN11flexbuffers7Builder6FinishEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c9b0.md) · 呼出先 4件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5c9d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c9d0.md) [`00c5d140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d140.md) [`00c5d150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d150.md)
- 新版 呼出元 1件 [`00c5d980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d980.md) · 呼出先 4件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5d9a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d9a0.md) [`00c5e110`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e110.md) [`00c5e120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e120.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b8b4e0 ["INT_ADD", "register:40f0:8", ["const:b8b4e0:8", "const:4:8"]]
- 00b8b4e0 ["CALL", null, ["callee:00c5e110:8"]]
+ 00b8c4d4 ["INT_ADD", "register:40f0:8", ["const:b8c4d4:8", "const:4:8"]]
+ 00b8c4d4 ["CALL", null, ["callee:00c5e110:8"]]
- 00b8b4f0 ["INT_ADD", "register:40f0:8", ["const:b8b4f0:8", "const:4:8"]]
- 00b8b4f0 ["CALL", null, ["callee:00c5d9a0:8"]]
+ 00b8c4e4 ["INT_ADD", "register:40f0:8", ["const:b8c4e4:8", "const:4:8"]]
+ 00b8c4e4 ["CALL", null, ["callee:00c5d9a0:8"]]
- 00b8b544 ["INT_ADD", "register:40f0:8", ["const:b8b544:8", "const:4:8"]]
- 00b8b544 ["CALL", null, ["callee:00c5e120:8"]]
+ 00b8c538 ["INT_ADD", "register:40f0:8", ["const:b8c538:8", "const:4:8"]]
+ 00b8c538 ["CALL", null, ["callee:00c5e120:8"]]
~~~


<a id="compare-8300fdcf81752e3faac5b33c6c77cceb"></a>

### [`00b8bc08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8b/00b8bc08.md) → [`00b8cbfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b8c/00b8cbfc.md) _ZN11flatbuffers6Parser9ParseJsonEPKcS2_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5bae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bae0.md) [`00c5c580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c580.md) [`00c5c680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c680.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5cab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cab0.md) [`00c5d550`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d550.md) [`00c5d650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d650.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b8bc9c ["INT_ADD", "register:40f0:8", ["const:b8bc9c:8", "const:4:8"]]
- 00b8bc9c ["CALL", null, ["callee:00c5cab0:8"]]
+ 00b8cc90 ["INT_ADD", "register:40f0:8", ["const:b8cc90:8", "const:4:8"]]
+ 00b8cc90 ["CALL", null, ["callee:00c5cab0:8"]]
- 00b8bcbc ["INT_ADD", "register:40f0:8", ["const:b8bcbc:8", "const:4:8"]]
- 00b8bcbc ["CALL", null, ["callee:00c5d650:8"]]
+ 00b8ccb0 ["INT_ADD", "register:40f0:8", ["const:b8ccb0:8", "const:4:8"]]
+ 00b8ccb0 ["CALL", null, ["callee:00c5d650:8"]]
- 00b8bcdc ["INT_ADD", "register:40f0:8", ["const:b8bcdc:8", "const:4:8"]]
- 00b8bcdc ["CALL", null, ["callee:00c5d550:8"]]
+ 00b8ccd0 ["INT_ADD", "register:40f0:8", ["const:b8ccd0:8", "const:4:8"]]
+ 00b8ccd0 ["CALL", null, ["callee:00c5d550:8"]]
~~~


<a id="compare-24d9dcb1cf56cb677cd7de35ebf2b264"></a>

### [`00b8d85c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8d/00b8d85c.md) → [`00b8e850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b8e/00b8e850.md) _ZN11flatbuffers6Parser16CheckPrivateLeakEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c6c0.md) · 呼出先 1件 [`00c5c7a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c7a0.md)
- 新版 呼出元 1件 [`00c5d690`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d690.md) · 呼出先 1件 [`00c5d770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d770.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b8d8c4 ["INT_ADD", "register:40f0:8", ["const:b8d8c4:8", "const:4:8"]]
- 00b8d8c4 ["CALL", null, ["callee:00c5d770:8"]]
+ 00b8e8b8 ["INT_ADD", "register:40f0:8", ["const:b8e8b8:8", "const:4:8"]]
+ 00b8e8b8 ["CALL", null, ["callee:00c5d770:8"]]
- 00b8d960 ["INT_ADD", "register:40f0:8", ["const:b8d960:8", "const:4:8"]]
- 00b8d960 ["CALL", null, ["callee:00c5d770:8"]]
+ 00b8e954 ["INT_ADD", "register:40f0:8", ["const:b8e954:8", "const:4:8"]]
+ 00b8e954 ["CALL", null, ["callee:00c5d770:8"]]
~~~


<a id="compare-46df81639632b61954f26f7a407d9f41"></a>

### [`00b8db54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8d/00b8db54.md) → [`00b8eb48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b8e/00b8eb48.md) FUN_00b8eb48

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b8bf60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8b/00b8bf60.md) · 呼出先 7件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00b8cf54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b8c/00b8cf54.md) · 呼出先 7件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b8dba4 ["INT_ADD", "register:40f0:8", ["const:b8dba4:8", "const:4:8"]]
- 00b8dba4 ["CALL", null, ["callee:00c59080:8"]]
+ 00b8eb98 ["INT_ADD", "register:40f0:8", ["const:b8eb98:8", "const:4:8"]]
+ 00b8eb98 ["CALL", null, ["callee:00c59080:8"]]
- 00b8dbe0 ["INT_ADD", "register:40f0:8", ["const:b8dbe0:8", "const:4:8"]]
- 00b8dbe0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b8ebd4 ["INT_ADD", "register:40f0:8", ["const:b8ebd4:8", "const:4:8"]]
+ 00b8ebd4 ["CALL", null, ["callee:00c58f30:8"]]
- 00b8dc00 ["INT_ADD", "register:40f0:8", ["const:b8dc00:8", "const:4:8"]]
- 00b8dc00 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b8ebf4 ["INT_ADD", "register:40f0:8", ["const:b8ebf4:8", "const:4:8"]]
+ 00b8ebf4 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-fffdc15bb55e7712a4089a6137e6519b"></a>

### [`00b8dcf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8d/00b8dcf4.md) → [`00b8ece8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b8e/00b8ece8.md) _ZNK11flatbuffers6Parser25GetIncludedFilesRecursiveERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 10件 [`0054a654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054a/0054a654.md) [`0054dc90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054d/0054dc90.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0054a974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054a/0054a974.md) [`0054dfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054d/0054dfb0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b8dd68 ["INT_ADD", "register:40f0:8", ["const:b8dd68:8", "const:4:8"]]
- 00b8dd68 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b8ed5c ["INT_ADD", "register:40f0:8", ["const:b8ed5c:8", "const:4:8"]]
+ 00b8ed5c ["CALL", null, ["callee:00c58f30:8"]]
- 00b8dd78 ["INT_ADD", "register:40f0:8", ["const:b8dd78:8", "const:4:8"]]
- 00b8dd78 ["CALL", null, ["callee:00c5c650:8"]]
+ 00b8ed6c ["INT_ADD", "register:40f0:8", ["const:b8ed6c:8", "const:4:8"]]
+ 00b8ed6c ["CALL", null, ["callee:00c5c650:8"]]
- 00b8de24 ["INT_ADD", "register:40f0:8", ["const:b8de24:8", "const:4:8"]]
- 00b8de24 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b8ee18 ["INT_ADD", "register:40f0:8", ["const:b8ee18:8", "const:4:8"]]
+ 00b8ee18 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-73f8c228834c92c5ef5a793d6a96adb1"></a>

### [`00b8ee0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8e/00b8ee0c.md) → [`00b8fe00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b8f/00b8fe00.md) _ZNK11flatbuffers9StructDef9SerializeEPNS_21FlatBufferBuilderImplILb0EEERKNS_6ParserE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cb20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cb20.md) · 呼出先 13件 [`00b92f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b92/00b92f34.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00c5daf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5daf0.md) · 呼出先 13件 [`00b93f28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b93/00b93f28.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b8ee84 ["INT_ADD", "register:40f0:8", ["const:b8ee84:8", "const:4:8"]]
- 00b8ee84 ["CALL", null, ["callee:00c5dad0:8"]]
+ 00b8fe78 ["INT_ADD", "register:40f0:8", ["const:b8fe78:8", "const:4:8"]]
+ 00b8fe78 ["CALL", null, ["callee:00c5dad0:8"]]
- 00b8eee8 ["INT_ADD", "register:40f0:8", ["const:b8eee8:8", "const:4:8"]]
- 00b8eee8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b8fedc ["INT_ADD", "register:40f0:8", ["const:b8fedc:8", "const:4:8"]]
+ 00b8fedc ["CALL", null, ["callee:00c58f30:8"]]
- 00b8ef10 ["INT_ADD", "register:40f0:8", ["const:b8ef10:8", "const:4:8"]]
- 00b8ef10 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b8ff04 ["INT_ADD", "register:40f0:8", ["const:b8ff04:8", "const:4:8"]]
+ 00b8ff04 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-3925ddf560a85de5dd51383e9ef5eb3e"></a>

### [`00b9016c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b90/00b9016c.md) → [`00b91160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b91/00b91160.md) _ZN10reflection12CreateSchemaERN11flatbuffers21FlatBufferBuilderImplILb0EEENS0_6OffsetINS0_6VectorINS4_INS_6ObjectEEEjEEEENS4_INS5_INS4_INS_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c050.md) · 呼出先 9件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c340.md) [`00c5c410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c410.md) [`00c5c430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c430.md) [`00c5c440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c440.md)
- 新版 呼出元 1件 [`00c5d020`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d020.md) · 呼出先 9件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md) [`00c5d310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d310.md) [`00c5d3e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d3e0.md) [`00c5d400`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d400.md) [`00c5d410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d410.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b901c8 ["INT_ADD", "register:40f0:8", ["const:b901c8:8", "const:4:8"]]
- 00b901c8 ["CALL", null, ["callee:00c5d310:8"]]
+ 00b911bc ["INT_ADD", "register:40f0:8", ["const:b911bc:8", "const:4:8"]]
+ 00b911bc ["CALL", null, ["callee:00c5d310:8"]]
- 00b901ec ["INT_ADD", "register:40f0:8", ["const:b901ec:8", "const:4:8"]]
- 00b901ec ["CALL", null, ["callee:00c5d240:8"]]
+ 00b911e0 ["INT_ADD", "register:40f0:8", ["const:b911e0:8", "const:4:8"]]
+ 00b911e0 ["CALL", null, ["callee:00c5d240:8"]]
- 00b90238 ["INT_ADD", "register:40f0:8", ["const:b90238:8", "const:4:8"]]
- 00b90238 ["CALL", null, ["callee:00c5d420:8"]]
+ 00b9122c ["INT_ADD", "register:40f0:8", ["const:b9122c:8", "const:4:8"]]
+ 00b9122c ["CALL", null, ["callee:00c5d420:8"]]
~~~


<a id="compare-f453f152780156f319ae4fac41f801a9"></a>

### [`00b906c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b90/00b906c8.md) → [`00b916bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b91/00b916bc.md) _ZNK11flatbuffers10Definition19SerializeAttributesEPNS_21FlatBufferBuilderImplILb0EEERKNS_6ParserE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00b92f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b92/00b92f34.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00b93f28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b93/00b93f28.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b906d4 ["INT_ADD", "register:40f0:8", ["const:b906d4:8", "const:4:8"]]
- 00b906d4 ["CALL", null, ["callee:00b93f28:8"]]
+ 00b916c8 ["INT_ADD", "register:40f0:8", ["const:b916c8:8", "const:4:8"]]
+ 00b916c8 ["CALL", null, ["callee:00b93f28:8"]]
~~~


<a id="compare-fcc1cb92a48d0c6151cab05611945a61"></a>

### [`00b906e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b90/00b906e4.md) → [`00b916d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b91/00b916d8.md) _ZN10reflection12CreateObjectERN11flatbuffers21FlatBufferBuilderImplILb0EEENS0_6OffsetINS0_6StringEEENS4_INS0_6VectorINS4_INS_5FieldEEEjEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c040.md) · 呼出先 8件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c2b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c2b0.md) [`00c5c310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c310.md) [`00c5c410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c410.md) [`00c5c440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c440.md)
- 新版 呼出元 1件 [`00c5d010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d010.md) · 呼出先 8件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md) [`00c5d280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d280.md) [`00c5d2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2e0.md) [`00c5d3e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d3e0.md) [`00c5d410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d410.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b90734 ["INT_ADD", "register:40f0:8", ["const:b90734:8", "const:4:8"]]
- 00b90734 ["CALL", null, ["callee:00c5d410:8"]]
+ 00b91728 ["INT_ADD", "register:40f0:8", ["const:b91728:8", "const:4:8"]]
+ 00b91728 ["CALL", null, ["callee:00c5d410:8"]]
- 00b90744 ["INT_ADD", "register:40f0:8", ["const:b90744:8", "const:4:8"]]
- 00b90744 ["CALL", null, ["callee:00c5d4a0:8"]]
+ 00b91738 ["INT_ADD", "register:40f0:8", ["const:b91738:8", "const:4:8"]]
+ 00b91738 ["CALL", null, ["callee:00c5d4a0:8"]]
- 00b90754 ["INT_ADD", "register:40f0:8", ["const:b90754:8", "const:4:8"]]
- 00b90754 ["CALL", null, ["callee:00c5d490:8"]]
+ 00b91748 ["INT_ADD", "register:40f0:8", ["const:b91748:8", "const:4:8"]]
+ 00b91748 ["CALL", null, ["callee:00c5d490:8"]]
~~~


<a id="compare-63b626e4d0ee18416a67f90be740ee47"></a>

### [`00b91630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b91/00b91630.md) → [`00b92624`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b92/00b92624.md) _ZN10reflection11CreateFieldERN11flatbuffers21FlatBufferBuilderImplILb0EEENS0_6OffsetINS0_6StringEEENS4_INS_4TypeEEEttldbbbNS4_INS0_6VectorI

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c030.md) · 呼出先 10件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c2b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c2b0.md) [`00c5c2e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c2e0.md) [`00c5c2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c2f0.md) [`00c5c330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c330.md)
- 新版 呼出元 1件 [`00c5d000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d000.md) · 呼出先 10件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md) [`00c5d280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d280.md) [`00c5d2b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2b0.md) [`00c5d2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2c0.md) [`00c5d300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d300.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b91698 ["INT_ADD", "register:40f0:8", ["const:b91698:8", "const:4:8"]]
- 00b91698 ["CALL", null, ["callee:00c5d2c0:8"]]
+ 00b9268c ["INT_ADD", "register:40f0:8", ["const:b9268c:8", "const:4:8"]]
+ 00b9268c ["CALL", null, ["callee:00c5d2c0:8"]]
- 00b916bc ["INT_ADD", "register:40f0:8", ["const:b916bc:8", "const:4:8"]]
- 00b916bc ["CALL", null, ["callee:00c5d240:8"]]
+ 00b926b0 ["INT_ADD", "register:40f0:8", ["const:b926b0:8", "const:4:8"]]
+ 00b926b0 ["CALL", null, ["callee:00c5d240:8"]]
- 00b91720 ["INT_ADD", "register:40f0:8", ["const:b91720:8", "const:4:8"]]
- 00b91720 ["CALL", null, ["callee:00c5d300:8"]]
+ 00b92714 ["INT_ADD", "register:40f0:8", ["const:b92714:8", "const:4:8"]]
+ 00b92714 ["CALL", null, ["callee:00c5d300:8"]]
~~~


<a id="compare-2416be6150e861582e3491dee2e801f7"></a>

### [`00b91c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b91/00b91c1c.md) → [`00b92c10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b92/00b92c10.md) _ZNK11flatbuffers7RPCCall9SerializeEPNS_21FlatBufferBuilderImplILb0EEERKNS_6ParserE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5caf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5caf0.md) · 呼出先 8件 [`00b92f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b92/00b92f34.md) [`00c5c370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c370.md) [`00c5c390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c390.md) [`00c5c410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c410.md) [`00c5c430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c430.md)
- 新版 呼出元 1件 [`00c5dac0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dac0.md) · 呼出先 8件 [`00b93f28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b93/00b93f28.md) [`00c5d340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d340.md) [`00c5d360`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d360.md) [`00c5d3e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d3e0.md) [`00c5d400`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d400.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b91c58 ["INT_ADD", "register:40f0:8", ["const:b91c58:8", "const:4:8"]]
- 00b91c58 ["CALL", null, ["callee:00c5d340:8"]]
+ 00b92c4c ["INT_ADD", "register:40f0:8", ["const:b92c4c:8", "const:4:8"]]
+ 00b92c4c ["CALL", null, ["callee:00c5d340:8"]]
- 00b91c6c ["INT_ADD", "register:40f0:8", ["const:b91c6c:8", "const:4:8"]]
- 00b91c6c ["CALL", null, ["callee:00b93f28:8"]]
+ 00b92c60 ["INT_ADD", "register:40f0:8", ["const:b92c60:8", "const:4:8"]]
+ 00b92c60 ["CALL", null, ["callee:00b93f28:8"]]
- 00b91c8c ["INT_ADD", "register:40f0:8", ["const:b91c8c:8", "const:4:8"]]
- 00b91c8c ["CALL", null, ["callee:00c5d360:8"]]
+ 00b92c80 ["INT_ADD", "register:40f0:8", ["const:b92c80:8", "const:4:8"]]
+ 00b92c80 ["CALL", null, ["callee:00c5d360:8"]]
~~~


<a id="compare-e55289783c5577519d84e726687cd175"></a>

### [`00b91d24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b91/00b91d24.md) → [`00b92d18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b92/00b92d18.md) _ZN11flatbuffers7RPCCall11DeserializeERNS_6ParserEPKN10reflection7RPCCallE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c900.md) · 呼出先 7件 [`00b931ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b93/00b931ec.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00c5d8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d8d0.md) · 呼出先 7件 [`00b941e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b94/00b941e0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b91dac ["INT_ADD", "register:40f0:8", ["const:b91dac:8", "const:4:8"]]
- 00b91dac ["CALL", null, ["callee:00c58f30:8"]]
+ 00b92da0 ["INT_ADD", "register:40f0:8", ["const:b92da0:8", "const:4:8"]]
+ 00b92da0 ["CALL", null, ["callee:00c58f30:8"]]
- 00b91dcc ["INT_ADD", "register:40f0:8", ["const:b91dcc:8", "const:4:8"]]
- 00b91dcc ["CALL", null, ["callee:00c590a0:8"]]
+ 00b92dc0 ["INT_ADD", "register:40f0:8", ["const:b92dc0:8", "const:4:8"]]
+ 00b92dc0 ["CALL", null, ["callee:00c590a0:8"]]
- 00b91dfc ["INT_ADD", "register:40f0:8", ["const:b91dfc:8", "const:4:8"]]
- 00b91dfc ["CALL", null, ["callee:00c58f50:8"]]
+ 00b92df0 ["INT_ADD", "register:40f0:8", ["const:b92df0:8", "const:4:8"]]
+ 00b92df0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-575207837d96dd38ba113438d269c92f"></a>

### [`00b92580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b92/00b92580.md) → [`00b93574`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b93/00b93574.md) _ZNK11flatbuffers7EnumVal9SerializeEPNS_21FlatBufferBuilderImplILb0EEERKNS_6ParserE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cae0.md) · 呼出先 5件 [`00b92f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b92/00b92f34.md) [`00c5c060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c060.md) [`00c5c370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c370.md) [`00c5c390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c390.md) [`00c5caa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5caa0.md)
- 新版 呼出元 1件 [`00c5dab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dab0.md) · 呼出先 5件 [`00b93f28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b93/00b93f28.md) [`00c5d030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d030.md) [`00c5d340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d340.md) [`00c5d360`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d360.md) [`00c5da70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5da70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b925bc ["INT_ADD", "register:40f0:8", ["const:b925bc:8", "const:4:8"]]
- 00b925bc ["CALL", null, ["callee:00c5d340:8"]]
+ 00b935b0 ["INT_ADD", "register:40f0:8", ["const:b935b0:8", "const:4:8"]]
+ 00b935b0 ["CALL", null, ["callee:00c5d340:8"]]
- 00b925cc ["INT_ADD", "register:40f0:8", ["const:b925cc:8", "const:4:8"]]
- 00b925cc ["CALL", null, ["callee:00c5da70:8"]]
+ 00b935c0 ["INT_ADD", "register:40f0:8", ["const:b935c0:8", "const:4:8"]]
+ 00b935c0 ["CALL", null, ["callee:00c5da70:8"]]
- 00b925e0 ["INT_ADD", "register:40f0:8", ["const:b925e0:8", "const:4:8"]]
- 00b925e0 ["CALL", null, ["callee:00b93f28:8"]]
+ 00b935d4 ["INT_ADD", "register:40f0:8", ["const:b935d4:8", "const:4:8"]]
+ 00b935d4 ["CALL", null, ["callee:00b93f28:8"]]
~~~


<a id="compare-656f34d7f4b8dbdca04f87c6a17d4d82"></a>

### [`00b92640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b92/00b92640.md) → [`00b93634`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b93/00b93634.md) _ZN11flatbuffers7EnumDef11DeserializeERNS_6ParserEPKN10reflection4EnumE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c8d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c8d0.md) · 呼出先 11件 [`00b931ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b93/00b931ec.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00c5d8a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d8a0.md) · 呼出先 11件 [`00b941e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b94/00b941e0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b926c8 ["INT_ADD", "register:40f0:8", ["const:b926c8:8", "const:4:8"]]
- 00b926c8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b936bc ["INT_ADD", "register:40f0:8", ["const:b936bc:8", "const:4:8"]]
+ 00b936bc ["CALL", null, ["callee:00c58f30:8"]]
- 00b926e8 ["INT_ADD", "register:40f0:8", ["const:b926e8:8", "const:4:8"]]
- 00b926e8 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b936dc ["INT_ADD", "register:40f0:8", ["const:b936dc:8", "const:4:8"]]
+ 00b936dc ["CALL", null, ["callee:00c590a0:8"]]
- 00b926fc ["INT_ADD", "register:40f0:8", ["const:b926fc:8", "const:4:8"]]
- 00b926fc ["CALL", null, ["callee:00c5d680:8"]]
+ 00b936f0 ["INT_ADD", "register:40f0:8", ["const:b936f0:8", "const:4:8"]]
+ 00b936f0 ["CALL", null, ["callee:00c5d680:8"]]
~~~


<a id="compare-49b59d50ad8658c94906c2410e6b6710"></a>

### [`00b92a60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b92/00b92a60.md) → [`00b93a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b93/00b93a54.md) _ZN11flatbuffers7EnumVal11DeserializeERNS_6ParserEPKN10reflection7EnumValE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c8f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c8f0.md) · 呼出先 7件 [`00b931ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b93/00b931ec.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00c5d8c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d8c0.md) · 呼出先 7件 [`00b941e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b94/00b941e0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b92ae8 ["INT_ADD", "register:40f0:8", ["const:b92ae8:8", "const:4:8"]]
- 00b92ae8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b93adc ["INT_ADD", "register:40f0:8", ["const:b93adc:8", "const:4:8"]]
+ 00b93adc ["CALL", null, ["callee:00c58f30:8"]]
- 00b92b08 ["INT_ADD", "register:40f0:8", ["const:b92b08:8", "const:4:8"]]
- 00b92b08 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b93afc ["INT_ADD", "register:40f0:8", ["const:b93afc:8", "const:4:8"]]
+ 00b93afc ["CALL", null, ["callee:00c590a0:8"]]
- 00b92b38 ["INT_ADD", "register:40f0:8", ["const:b92b38:8", "const:4:8"]]
- 00b92b38 ["CALL", null, ["callee:00c58f50:8"]]
+ 00b93b2c ["INT_ADD", "register:40f0:8", ["const:b93b2c:8", "const:4:8"]]
+ 00b93b2c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-14ec4482d9408303c96be9d7d6cab5e9"></a>

### [`00b92d60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b92/00b92d60.md) → [`00b93d54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b93/00b93d54.md) _ZN11flatbuffers11SymbolTableINS_7EnumValEE3AddERKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEPS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c150.md) · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5d120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d120.md) · 呼出先 9件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b92df0 ["INT_ADD", "register:40f0:8", ["const:b92df0:8", "const:4:8"]]
- 00b92df0 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00b93de4 ["INT_ADD", "register:40f0:8", ["const:b93de4:8", "const:4:8"]]
+ 00b93de4 ["CALL", null, ["callee:00c5c1e0:8"]]
- 00b92dfc ["INT_ADD", "register:40f0:8", ["const:b92dfc:8", "const:4:8"]]
- 00b92dfc ["CALL", null, ["callee:00c58f30:8"]]
+ 00b93df0 ["INT_ADD", "register:40f0:8", ["const:b93df0:8", "const:4:8"]]
+ 00b93df0 ["CALL", null, ["callee:00c58f30:8"]]
- 00b92e24 ["INT_ADD", "register:40f0:8", ["const:b92e24:8", "const:4:8"]]
- 00b92e24 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b93e18 ["INT_ADD", "register:40f0:8", ["const:b93e18:8", "const:4:8"]]
+ 00b93e18 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-e92eab09f6973c6bc9c32d261dee898a"></a>

### [`00b92f18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b92/00b92f18.md) → [`00b93f0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b93/00b93f0c.md) _ZNK11flatbuffers7EnumVal19SerializeAttributesEPNS_21FlatBufferBuilderImplILb0EEERKNS_6ParserE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00b92f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b92/00b92f34.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00b93f28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b93/00b93f28.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b92f24 ["INT_ADD", "register:40f0:8", ["const:b92f24:8", "const:4:8"]]
- 00b92f24 ["CALL", null, ["callee:00b93f28:8"]]
+ 00b93f18 ["INT_ADD", "register:40f0:8", ["const:b93f18:8", "const:4:8"]]
+ 00b93f18 ["CALL", null, ["callee:00b93f28:8"]]
~~~


<a id="compare-4c228718e2981f3a6a8fd16867431b1b"></a>

### [`00b92f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b92/00b92f34.md) → [`00b93f28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b93/00b93f28.md) FUN_00b93f28

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 8件 [`00b8ee0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8e/00b8ee0c.md) [`00b8f154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8f/00b8f154.md) [`00b8f5d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8f/00b8f5d0.md) [`00b902c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b90/00b902c8.md) [`00b906c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b90/00b906c8.md) · 呼出先 10件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 8件 [`00b8fe00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b8f/00b8fe00.md) [`00b90148`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b90/00b90148.md) [`00b905c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b90/00b905c4.md) [`00b912bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b91/00b912bc.md) [`00b916bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b91/00b916bc.md) · 呼出先 10件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b92fb4 ["INT_ADD", "register:40f0:8", ["const:b92fb4:8", "const:4:8"]]
- 00b92fb4 ["CALL", null, ["callee:00c5db60:8"]]
+ 00b93fa8 ["INT_ADD", "register:40f0:8", ["const:b93fa8:8", "const:4:8"]]
+ 00b93fa8 ["CALL", null, ["callee:00c5db60:8"]]
- 00b92fe0 ["INT_ADD", "register:40f0:8", ["const:b92fe0:8", "const:4:8"]]
- 00b92fe0 ["CALL", null, ["callee:00c5d340:8"]]
+ 00b93fd4 ["INT_ADD", "register:40f0:8", ["const:b93fd4:8", "const:4:8"]]
+ 00b93fd4 ["CALL", null, ["callee:00c5d340:8"]]
- 00b9300c ["INT_ADD", "register:40f0:8", ["const:b9300c:8", "const:4:8"]]
- 00b9300c ["CALL", null, ["callee:00c5d340:8"]]
+ 00b94000 ["INT_ADD", "register:40f0:8", ["const:b94000:8", "const:4:8"]]
+ 00b94000 ["CALL", null, ["callee:00c5d340:8"]]
~~~


<a id="compare-4545027890f99cf5a8eec101d4a2dcde"></a>

### [`00b935a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b93/00b935a0.md) → [`00b94594`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b94/00b94594.md) _ZN10reflection13CreateEnumValERN11flatbuffers21FlatBufferBuilderImplILb0EEENS0_6OffsetINS0_6StringEEElNS4_INS_4TypeEEENS4_INS0_6VectorIS6_j

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c060.md) · 呼出先 7件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c330.md) [`00c5c410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c410.md) [`00c5c420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c420.md) [`00c5c440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c440.md)
- 新版 呼出元 1件 [`00c5d030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d030.md) · 呼出先 7件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md) [`00c5d300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d300.md) [`00c5d3e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d3e0.md) [`00c5d3f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d3f0.md) [`00c5d410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d410.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b935ec ["INT_ADD", "register:40f0:8", ["const:b935ec:8", "const:4:8"]]
- 00b935ec ["CALL", null, ["callee:00c5d300:8"]]
+ 00b945e0 ["INT_ADD", "register:40f0:8", ["const:b945e0:8", "const:4:8"]]
+ 00b945e0 ["CALL", null, ["callee:00c5d300:8"]]
- 00b93610 ["INT_ADD", "register:40f0:8", ["const:b93610:8", "const:4:8"]]
- 00b93610 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b94604 ["INT_ADD", "register:40f0:8", ["const:b94604:8", "const:4:8"]]
+ 00b94604 ["CALL", null, ["callee:00c5d240:8"]]
- 00b9365c ["INT_ADD", "register:40f0:8", ["const:b9365c:8", "const:4:8"]]
- 00b9365c ["CALL", null, ["callee:00c5d490:8"]]
+ 00b94650 ["INT_ADD", "register:40f0:8", ["const:b94650:8", "const:4:8"]]
+ 00b94650 ["CALL", null, ["callee:00c5d490:8"]]
~~~


<a id="compare-6b187e7e0468ae19f36908b87c50385a"></a>

### [`00b936b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b93/00b936b8.md) → [`00b946ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b94/00b946ac.md) _ZN10reflection10CreateTypeERN11flatbuffers21FlatBufferBuilderImplILb0EEENS_8BaseTypeES4_itjj

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c020.md) · 呼出先 6件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c2a0.md) [`00c5c2e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c2e0.md) [`00c5c310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c310.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)
- 新版 呼出元 1件 [`00c5cff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cff0.md) · 呼出先 6件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md) [`00c5d270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d270.md) [`00c5d2b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2b0.md) [`00c5d2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2e0.md) [`00c5d2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b93708 ["INT_ADD", "register:40f0:8", ["const:b93708:8", "const:4:8"]]
- 00b93708 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00b946fc ["INT_ADD", "register:40f0:8", ["const:b946fc:8", "const:4:8"]]
+ 00b946fc ["CALL", null, ["callee:00c5d2f0:8"]]
- 00b9372c ["INT_ADD", "register:40f0:8", ["const:b9372c:8", "const:4:8"]]
- 00b9372c ["CALL", null, ["callee:00c5d240:8"]]
+ 00b94720 ["INT_ADD", "register:40f0:8", ["const:b94720:8", "const:4:8"]]
+ 00b94720 ["CALL", null, ["callee:00c5d240:8"]]
- 00b93790 ["INT_ADD", "register:40f0:8", ["const:b93790:8", "const:4:8"]]
- 00b93790 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00b94784 ["INT_ADD", "register:40f0:8", ["const:b94784:8", "const:4:8"]]
+ 00b94784 ["CALL", null, ["callee:00c5d2f0:8"]]
~~~


<a id="compare-e7cd2507f324585651535bb91efc4538"></a>

### [`00b94ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b94/00b94ddc.md) → [`00b95dd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b95/00b95dd0.md) FUN_00b95dd0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b93b00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b93/00b93b00.md) · 呼出先 11件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580a0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00b94af4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b94/00b94af4.md) · 呼出先 11件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59070.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b94ea4 ["INT_ADD", "register:40f0:8", ["const:b94ea4:8", "const:4:8"]]
- 00b94ea4 ["CALL", null, ["callee:00c5e000:8"]]
+ 00b95e98 ["INT_ADD", "register:40f0:8", ["const:b95e98:8", "const:4:8"]]
+ 00b95e98 ["CALL", null, ["callee:00c5e000:8"]]
- 00b94ec4 ["INT_ADD", "register:40f0:8", ["const:b94ec4:8", "const:4:8"]]
- 00b94ec4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b95eb8 ["INT_ADD", "register:40f0:8", ["const:b95eb8:8", "const:4:8"]]
+ 00b95eb8 ["CALL", null, ["callee:00c58f30:8"]]
- 00b94f2c ["INT_ADD", "register:40f0:8", ["const:b94f2c:8", "const:4:8"]]
- 00b94f2c ["CALL", null, ["callee:00c58f30:8"]]
+ 00b95f20 ["INT_ADD", "register:40f0:8", ["const:b95f20:8", "const:4:8"]]
+ 00b95f20 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-fc0069443a86f9db08d5f45c80dc167d"></a>

### [`00b95a4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b95/00b95a4c.md) → [`00b96a40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b96/00b96a40.md) _ZN11flatbuffers11EqualByNameERKNS_4TypeES2_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c0a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c0a0.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5d070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d070.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b95b18 ["INT_ADD", "register:40f0:8", ["const:b95b18:8", "const:4:8"]]
- 00b95b18 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b96b0c ["INT_ADD", "register:40f0:8", ["const:b96b0c:8", "const:4:8"]]
+ 00b96b0c ["CALL", null, ["callee:00c590f0:8"]]
- 00b95bcc ["INT_ADD", "register:40f0:8", ["const:b95bcc:8", "const:4:8"]]
- 00b95bcc ["CALL", null, ["callee:00c590f0:8"]]
+ 00b96bc0 ["INT_ADD", "register:40f0:8", ["const:b96bc0:8", "const:4:8"]]
+ 00b96bc0 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-4856ba20e1086e36475414057315db44"></a>

### [`00b95be4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b95/00b95be4.md) → [`00b96bd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b96/00b96bd8.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEmc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) · 呼出先 2件 [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md) [`00c5a9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9b0.md)
- 新版 呼出元 1件 [`00c5cf10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cf10.md) · 呼出先 2件 [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md) [`00c5b980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b980.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b95c50 ["INT_ADD", "register:40f0:8", ["const:b95c50:8", "const:4:8"]]
- 00b95c50 ["CALL", null, ["callee:00c5b980:8"]]
+ 00b96c44 ["INT_ADD", "register:40f0:8", ["const:b96c44:8", "const:4:8"]]
+ 00b96c44 ["CALL", null, ["callee:00c5b980:8"]]
- 00b95c74 ["INT_ADD", "register:40f0:8", ["const:b95c74:8", "const:4:8"]]
- 00b95c74 ["CALL", null, ["callee:00c59130:8"]]
+ 00b96c68 ["INT_ADD", "register:40f0:8", ["const:b96c68:8", "const:4:8"]]
+ 00b96c68 ["CALL", null, ["callee:00c59130:8"]]
~~~


<a id="compare-e71459ac9c10b1bd27340554e3cb33ea"></a>

### [`00b95f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b95/00b95f6c.md) → [`00b96f60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b96/00b96f60.md) _ZNKSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers7EnumValEEENS_19__map_value_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cb60.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5db30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5db30.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b96004 ["INT_ADD", "register:40f0:8", ["const:b96004:8", "const:4:8"]]
- 00b96004 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b96ff8 ["INT_ADD", "register:40f0:8", ["const:b96ff8:8", "const:4:8"]]
+ 00b96ff8 ["CALL", null, ["callee:00c590f0:8"]]
- 00b9604c ["INT_ADD", "register:40f0:8", ["const:b9604c:8", "const:4:8"]]
- 00b9604c ["CALL", null, ["callee:00c590f0:8"]]
+ 00b97040 ["INT_ADD", "register:40f0:8", ["const:b97040:8", "const:4:8"]]
+ 00b97040 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-f9deabdd952c185d7045205da0aa5bb4"></a>

### [`00b96080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b96/00b96080.md) → [`00b97074`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b97/00b97074.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers7EnumDefEEENS_19__map_value_c

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cfa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cfa0.md) · 呼出先 5件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md) [`00c5bb30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bb30.md) [`00c5cfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cfb0.md)
- 新版 呼出元 1件 [`00c5df70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5df70.md) · 呼出先 5件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5c150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c150.md) [`00c5c680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c680.md) [`00c5cb00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cb00.md) [`00c5df80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5df80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9617c ["INT_ADD", "register:40f0:8", ["const:b9617c:8", "const:4:8"]]
- 00b9617c ["CALL", null, ["callee:00c5c150:8"]]
+ 00b97170 ["INT_ADD", "register:40f0:8", ["const:b97170:8", "const:4:8"]]
+ 00b97170 ["CALL", null, ["callee:00c5c150:8"]]
- 00b961f8 ["INT_ADD", "register:40f0:8", ["const:b961f8:8", "const:4:8"]]
- 00b961f8 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b971ec ["INT_ADD", "register:40f0:8", ["const:b971ec:8", "const:4:8"]]
+ 00b971ec ["CALL", null, ["callee:00c590f0:8"]]
- 00b96268 ["INT_ADD", "register:40f0:8", ["const:b96268:8", "const:4:8"]]
- 00b96268 ["CALL", null, ["callee:00c5c680:8"]]
+ 00b9725c ["INT_ADD", "register:40f0:8", ["const:b9725c:8", "const:4:8"]]
+ 00b9725c ["CALL", null, ["callee:00c5c680:8"]]
~~~


<a id="compare-0422c8c35a310754048519fb828b4a1d"></a>

### [`00b9640c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b96/00b9640c.md) → [`00b97400`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b97/00b97400.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers7EnumDefEEENS_19__map_value_c

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cfb0.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md)
- 新版 呼出元 1件 [`00c5df80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5df80.md) · 呼出先 4件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5c650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c650.md) [`00c5c680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c680.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9642c ["INT_ADD", "register:40f0:8", ["const:b9642c:8", "const:4:8"]]
- 00b9642c ["CALL", null, ["callee:00c58f30:8"]]
+ 00b97420 ["INT_ADD", "register:40f0:8", ["const:b97420:8", "const:4:8"]]
+ 00b97420 ["CALL", null, ["callee:00c58f30:8"]]
- 00b9643c ["INT_ADD", "register:40f0:8", ["const:b9643c:8", "const:4:8"]]
- 00b9643c ["CALL", null, ["callee:00c5c650:8"]]
+ 00b97430 ["INT_ADD", "register:40f0:8", ["const:b97430:8", "const:4:8"]]
+ 00b97430 ["CALL", null, ["callee:00c5c650:8"]]
- 00b964b4 ["INT_ADD", "register:40f0:8", ["const:b964b4:8", "const:4:8"]]
- 00b964b4 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b974a8 ["INT_ADD", "register:40f0:8", ["const:b974a8:8", "const:4:8"]]
+ 00b974a8 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-40df3e056e60014bdcab70ae6b5c2735"></a>

### [`00b96540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b96/00b96540.md) → [`00b97534`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b97/00b97534.md) _ZNSt6__ndk16vectorIPN11flatbuffers7EnumDefENS_9allocatorIS3_EEE6assignIPS3_EENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_co

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d130.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5e100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e100.md) · 呼出先 5件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b96588 ["INT_ADD", "register:40f0:8", ["const:b96588:8", "const:4:8"]]
- 00b96588 ["CALL", null, ["callee:00c58f50:8"]]
+ 00b9757c ["INT_ADD", "register:40f0:8", ["const:b9757c:8", "const:4:8"]]
+ 00b9757c ["CALL", null, ["callee:00c58f50:8"]]
- 00b965c4 ["INT_ADD", "register:40f0:8", ["const:b965c4:8", "const:4:8"]]
- 00b965c4 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00b975b8 ["INT_ADD", "register:40f0:8", ["const:b975b8:8", "const:4:8"]]
+ 00b975b8 ["CALL", null, ["callee:00c5c1e0:8"]]
- 00b965f8 ["INT_ADD", "register:40f0:8", ["const:b965f8:8", "const:4:8"]]
- 00b965f8 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00b975ec ["INT_ADD", "register:40f0:8", ["const:b975ec:8", "const:4:8"]]
+ 00b975ec ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-d5118f92e7b8ad37b91c5fbf93f0ef73"></a>

### [`00b98ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b98ca4.md) → [`00b99c98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b99/00b99c98.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5e180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e180.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b98cb8 ["INT_ADD", "register:40f0:8", ["const:b98cb8:8", "const:4:8"]]
- 00b98cb8 ["CALL", null, ["callee:00c5e180:8"]]
+ 00b99cac ["INT_ADD", "register:40f0:8", ["const:b99cac:8", "const:4:8"]]
+ 00b99cac ["CALL", null, ["callee:00c5e180:8"]]
~~~


<a id="compare-f8f956dd8e276cfa365ba523130ecd86"></a>

### [`00b98ce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b98ce0.md) → [`00b99cd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b99/00b99cd4.md) _ZTv0_n24_NSt6__ndk113basic_istreamIcNS_11char_traitsIcEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5e180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e180.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b98cfc ["INT_ADD", "register:40f0:8", ["const:b98cfc:8", "const:4:8"]]
- 00b98cfc ["CALL", null, ["callee:00c5e180:8"]]
+ 00b99cf0 ["INT_ADD", "register:40f0:8", ["const:b99cf0:8", "const:4:8"]]
+ 00b99cf0 ["CALL", null, ["callee:00c5e180:8"]]
~~~


<a id="compare-008d207d86f34b5bbeebde5d06986db7"></a>

### [`00b99160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b99/00b99160.md) → [`00b9a154`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9a/00b9a154.md) _ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEE6xsgetnEPcl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b991e0 ["INT_ADD", "register:40f0:8", ["const:b991e0:8", "const:4:8"]]
- 00b991e0 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b9a1d4 ["INT_ADD", "register:40f0:8", ["const:b9a1d4:8", "const:4:8"]]
+ 00b9a1d4 ["CALL", null, ["callee:00c590a0:8"]]
- 00b991f4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b991f4 ["INT_ADD", "register:40f0:8", ["const:b991f4:8", "const:4:8"]]
- 00b991f4 ["CALLIND", null, ["register:0:8"]]
+ 00b9a1e8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b9a1e8 ["INT_ADD", "register:40f0:8", ["const:b9a1e8:8", "const:4:8"]]
+ 00b9a1e8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9f2338721b5714cf9bff379f4d6b15f0"></a>

### [`00b99278`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b99/00b99278.md) → [`00b9a26c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9a/00b9a26c.md) _ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEE5uflowEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b99290 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b99290 ["INT_ADD", "register:40f0:8", ["const:b99290:8", "const:4:8"]]
- 00b99290 ["CALLIND", null, ["register:0:8"]]
+ 00b9a284 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b9a284 ["INT_ADD", "register:40f0:8", ["const:b9a284:8", "const:4:8"]]
+ 00b9a284 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-fe00fd627ccb926b64218bf2dcd1c44c"></a>

### [`00b99328`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b99/00b99328.md) → [`00b9a31c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9a/00b9a31c.md) _ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEE6xsputnEPKcl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9939c ["INT_ADD", "register:40f0:8", ["const:b9939c:8", "const:4:8"]]
- 00b9939c ["CALL", null, ["callee:00c590a0:8"]]
+ 00b9a390 ["INT_ADD", "register:40f0:8", ["const:b9a390:8", "const:4:8"]]
+ 00b9a390 ["CALL", null, ["callee:00c590a0:8"]]
- 00b993b4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b993b4 ["INT_ADD", "register:40f0:8", ["const:b993b4:8", "const:4:8"]]
- 00b993b4 ["CALLIND", null, ["register:0:8"]]
+ 00b9a3a8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b9a3a8 ["INT_ADD", "register:40f0:8", ["const:b9a3a8:8", "const:4:8"]]
+ 00b9a3a8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6d226b2276192de53fc4c3cd8c8df2f1"></a>

### [`00b993f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b99/00b993f0.md) → [`00b9a3e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9a/00b9a3e4.md) _ZNSt6__ndk115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE8overflowEi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9b0.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b980.md) [`00c5cf10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cf10.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b994a0 ["INT_ADD", "register:40f0:8", ["const:b994a0:8", "const:4:8"]]
- 00b994a0 ["CALL", null, ["callee:00c5b980:8"]]
+ 00b9a494 ["INT_ADD", "register:40f0:8", ["const:b9a494:8", "const:4:8"]]
+ 00b9a494 ["CALL", null, ["callee:00c5b980:8"]]
- 00b9951c ["INT_ADD", "register:40f0:8", ["const:b9951c:8", "const:4:8"]]
- 00b9951c ["CALL", null, ["callee:00c5cf10:8"]]
+ 00b9a510 ["INT_ADD", "register:40f0:8", ["const:b9a510:8", "const:4:8"]]
+ 00b9a510 ["CALL", null, ["callee:00c5cf10:8"]]
~~~


<a id="compare-d562f4704b5e785eee97ba3c426456e6"></a>

### [`00b9968c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b99/00b9968c.md) → [`00b9a680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9a/00b9a680.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEE5flushEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c58fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58fc0.md) · 呼出先 3件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c58fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58fc0.md) [`00c5d1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1c0.md)
- 新版 呼出元 1件 [`00c59f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59f90.md) · 呼出先 3件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c59f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59f90.md) [`00c5e190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e190.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b996c4 ["INT_ADD", "register:40f0:8", ["const:b996c4:8", "const:4:8"]]
- 00b996c4 ["CALL", null, ["callee:00c59f90:8"]]
+ 00b9a6b8 ["INT_ADD", "register:40f0:8", ["const:b9a6b8:8", "const:4:8"]]
+ 00b9a6b8 ["CALL", null, ["callee:00c59f90:8"]]
- 00b996e0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b996e0 ["INT_ADD", "register:40f0:8", ["const:b996e0:8", "const:4:8"]]
- 00b996e0 ["CALLIND", null, ["register:0:8"]]
+ 00b9a6d4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b9a6d4 ["INT_ADD", "register:40f0:8", ["const:b9a6d4:8", "const:4:8"]]
+ 00b9a6d4 ["CALLIND", null, ["register:0:8"]]
- 00b99700 ["INT_ADD", "register:40f0:8", ["const:b99700:8", "const:4:8"]]
- 00b99700 ["CALL", null, ["callee:00c59340:8"]]
+ 00b9a6f4 ["INT_ADD", "register:40f0:8", ["const:b9a6f4:8", "const:4:8"]]
+ 00b9a6f4 ["CALL", null, ["callee:00c59340:8"]]
~~~


<a id="compare-ecd00c4543cf52b113a86c0adec695df"></a>

### [`00b9977c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b99/00b9977c.md) → [`00b9a770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9a/00b9a770.md) _ZNKSt6__ndk115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE3strEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58280.md) · 呼出先 2件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c59250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59250.md) · 呼出先 2件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b99854 ["INT_ADD", "register:40f0:8", ["const:b99854:8", "const:4:8"]]
- 00b99854 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b9a848 ["INT_ADD", "register:40f0:8", ["const:b9a848:8", "const:4:8"]]
+ 00b9a848 ["CALL", null, ["callee:00c58f30:8"]]
- 00b9989c ["INT_ADD", "register:40f0:8", ["const:b9989c:8", "const:4:8"]]
- 00b9989c ["CALL", null, ["callee:00c58f30:8"]]
+ 00b9a890 ["INT_ADD", "register:40f0:8", ["const:b9a890:8", "const:4:8"]]
+ 00b9a890 ["CALL", null, ["callee:00c58f30:8"]]
- 00b99984 ["INT_ADD", "register:40f0:8", ["const:b99984:8", "const:4:8"]]
- 00b99984 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00b9a978 ["INT_ADD", "register:40f0:8", ["const:b9a978:8", "const:4:8"]]
+ 00b9a978 ["CALL", null, ["callee:00c5c1e0:8"]]
~~~


<a id="compare-04152e062939127d57d86f7e5c2757f3"></a>

### [`00b99988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b99/00b99988.md) → [`00b9a97c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9a/00b9a97c.md) FUN_00b9a97c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`00b8a49c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8a/00b8a49c.md) [`00b8a5d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8a/00b8a5d4.md) [`00b9b798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9b/00b9b798.md) [`00bb0110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb0/00bb0110.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 4件 [`00b8b490`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b8b/00b8b490.md) [`00b8b5c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b8b/00b8b5c8.md) [`00b9c78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9c/00b9c78c.md) [`00bb1104`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb1/00bb1104.md) · 呼出先 4件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b99a08 ["INT_ADD", "register:40f0:8", ["const:b99a08:8", "const:4:8"]]
- 00b99a08 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00b9a9fc ["INT_ADD", "register:40f0:8", ["const:b9a9fc:8", "const:4:8"]]
+ 00b9a9fc ["CALL", null, ["callee:00c5c1e0:8"]]
- 00b99a14 ["INT_ADD", "register:40f0:8", ["const:b99a14:8", "const:4:8"]]
- 00b99a14 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b9aa08 ["INT_ADD", "register:40f0:8", ["const:b9aa08:8", "const:4:8"]]
+ 00b9aa08 ["CALL", null, ["callee:00c58f30:8"]]
- 00b99a44 ["INT_ADD", "register:40f0:8", ["const:b99a44:8", "const:4:8"]]
- 00b99a44 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b9aa38 ["INT_ADD", "register:40f0:8", ["const:b9aa38:8", "const:4:8"]]
+ 00b9aa38 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-cd6f5a3357249426013ba59c2f680dc6"></a>

### [`00b9a5a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9a/00b9a5a0.md) → [`00b9b594`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9b/00b9b594.md) _ZNSt6__ndk17__sort3IRZN11flexbuffers7Builder6EndMapEmEUlRKZNS2_6EndMapEmE8TwoValueS5_E_PS3_EEjT0_S9_S9_T_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d160.md) · 呼出先 1件 [`00c5b920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b920.md)
- 新版 呼出元 1件 [`00c5e130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e130.md) · 呼出先 1件 [`00c5c8f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c8f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9a5e4 ["INT_ADD", "register:40f0:8", ["const:b9a5e4:8", "const:4:8"]]
- 00b9a5e4 ["CALL", null, ["callee:00c5c8f0:8"]]
+ 00b9b5d8 ["INT_ADD", "register:40f0:8", ["const:b9b5d8:8", "const:4:8"]]
+ 00b9b5d8 ["CALL", null, ["callee:00c5c8f0:8"]]
- 00b9a610 ["INT_ADD", "register:40f0:8", ["const:b9a610:8", "const:4:8"]]
- 00b9a610 ["CALL", null, ["callee:00c5c8f0:8"]]
+ 00b9b604 ["INT_ADD", "register:40f0:8", ["const:b9b604:8", "const:4:8"]]
+ 00b9b604 ["CALL", null, ["callee:00c5c8f0:8"]]
- 00b9a684 ["INT_ADD", "register:40f0:8", ["const:b9a684:8", "const:4:8"]]
- 00b9a684 ["CALL", null, ["callee:00c5c8f0:8"]]
+ 00b9b678 ["INT_ADD", "register:40f0:8", ["const:b9b678:8", "const:4:8"]]
+ 00b9b678 ["CALL", null, ["callee:00c5c8f0:8"]]
~~~


<a id="compare-e29fd5fcdf37f98c24fffea7517ca599"></a>

### [`00b9a758`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9a/00b9a758.md) → [`00b9b74c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9b/00b9b74c.md) _ZNSt6__ndk17__sort4IRZN11flexbuffers7Builder6EndMapEmEUlRKZNS2_6EndMapEmE8TwoValueS5_E_PS3_EEjT0_S9_S9_S9_T_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d1a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1a0.md) · 呼出先 2件 [`00c5b920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b920.md) [`00c5d160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d160.md)
- 新版 呼出元 1件 [`00c5e170`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e170.md) · 呼出先 2件 [`00c5c8f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c8f0.md) [`00c5e130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e130.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9a78c ["INT_ADD", "register:40f0:8", ["const:b9a78c:8", "const:4:8"]]
- 00b9a78c ["CALL", null, ["callee:00c5e130:8"]]
+ 00b9b780 ["INT_ADD", "register:40f0:8", ["const:b9b780:8", "const:4:8"]]
+ 00b9b780 ["CALL", null, ["callee:00c5e130:8"]]
- 00b9a7b0 ["INT_ADD", "register:40f0:8", ["const:b9a7b0:8", "const:4:8"]]
- 00b9a7b0 ["CALL", null, ["callee:00c5c8f0:8"]]
+ 00b9b7a4 ["INT_ADD", "register:40f0:8", ["const:b9b7a4:8", "const:4:8"]]
+ 00b9b7a4 ["CALL", null, ["callee:00c5c8f0:8"]]
- 00b9a804 ["INT_ADD", "register:40f0:8", ["const:b9a804:8", "const:4:8"]]
- 00b9a804 ["CALL", null, ["callee:00c5c8f0:8"]]
+ 00b9b7f8 ["INT_ADD", "register:40f0:8", ["const:b9b7f8:8", "const:4:8"]]
+ 00b9b7f8 ["CALL", null, ["callee:00c5c8f0:8"]]
~~~


<a id="compare-2925bf26e85e1e75a4ef4acea47e7e5f"></a>

### [`00b9a8b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9a/00b9a8b4.md) → [`00b9b8a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9b/00b9b8a8.md) FUN_00b9b8a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00b99fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b99/00b99fc0.md) [`00b9ab94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9a/00b9ab94.md) · 呼出先 2件 [`00c5b920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b920.md) [`00c5d1a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1a0.md)
- 新版 呼出元 2件 [`00b9afb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9a/00b9afb4.md) [`00b9bb88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9b/00b9bb88.md) · 呼出先 2件 [`00c5c8f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c8f0.md) [`00c5e170`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e170.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9a8f0 ["INT_ADD", "register:40f0:8", ["const:b9a8f0:8", "const:4:8"]]
- 00b9a8f0 ["CALL", null, ["callee:00c5e170:8"]]
+ 00b9b8e4 ["INT_ADD", "register:40f0:8", ["const:b9b8e4:8", "const:4:8"]]
+ 00b9b8e4 ["CALL", null, ["callee:00c5e170:8"]]
- 00b9a914 ["INT_ADD", "register:40f0:8", ["const:b9a914:8", "const:4:8"]]
- 00b9a914 ["CALL", null, ["callee:00c5c8f0:8"]]
+ 00b9b908 ["INT_ADD", "register:40f0:8", ["const:b9b908:8", "const:4:8"]]
+ 00b9b908 ["CALL", null, ["callee:00c5c8f0:8"]]
- 00b9a968 ["INT_ADD", "register:40f0:8", ["const:b9a968:8", "const:4:8"]]
- 00b9a968 ["CALL", null, ["callee:00c5c8f0:8"]]
+ 00b9b95c ["INT_ADD", "register:40f0:8", ["const:b9b95c:8", "const:4:8"]]
+ 00b9b95c ["CALL", null, ["callee:00c5c8f0:8"]]
~~~


<a id="compare-156f442ca7b3d6070158c2f17929fe3a"></a>

### [`00b9aa70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9a/00b9aa70.md) → [`00b9ba64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9b/00b9ba64.md) _ZNSt6__ndk118__insertion_sort_3IRZN11flexbuffers7Builder6EndMapEmEUlRKZNS2_6EndMapEmE8TwoValueS5_E_PS3_EEvT0_S9_T_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cce0.md) · 呼出先 2件 [`00c5b920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b920.md) [`00c5d160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d160.md)
- 新版 呼出元 1件 [`00c5dcb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dcb0.md) · 呼出先 2件 [`00c5c8f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c8f0.md) [`00c5e130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e130.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9aaa8 ["INT_ADD", "register:40f0:8", ["const:b9aaa8:8", "const:4:8"]]
- 00b9aaa8 ["CALL", null, ["callee:00c5e130:8"]]
+ 00b9ba9c ["INT_ADD", "register:40f0:8", ["const:b9ba9c:8", "const:4:8"]]
+ 00b9ba9c ["CALL", null, ["callee:00c5e130:8"]]
- 00b9aaf8 ["INT_ADD", "register:40f0:8", ["const:b9aaf8:8", "const:4:8"]]
- 00b9aaf8 ["CALL", null, ["callee:00c5c8f0:8"]]
+ 00b9baec ["INT_ADD", "register:40f0:8", ["const:b9baec:8", "const:4:8"]]
+ 00b9baec ["CALL", null, ["callee:00c5c8f0:8"]]
- 00b9ab3c ["INT_ADD", "register:40f0:8", ["const:b9ab3c:8", "const:4:8"]]
- 00b9ab3c ["CALL", null, ["callee:00c5c8f0:8"]]
+ 00b9bb30 ["INT_ADD", "register:40f0:8", ["const:b9bb30:8", "const:4:8"]]
+ 00b9bb30 ["CALL", null, ["callee:00c5c8f0:8"]]
~~~


<a id="compare-fe444f84712d231215d79054c062a9fd"></a>

### [`00b9aea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9a/00b9aea8.md) → [`00b9be9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9b/00b9be9c.md) _ZNSt6__ndk16vectorIhNS_9allocatorIhEEE6insertENS_11__wrap_iterIPKhEEmRS5_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d140.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5e110`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e110.md) · 呼出先 5件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9af64 ["INT_ADD", "register:40f0:8", ["const:b9af64:8", "const:4:8"]]
- 00b9af64 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b9bf58 ["INT_ADD", "register:40f0:8", ["const:b9bf58:8", "const:4:8"]]
+ 00b9bf58 ["CALL", null, ["callee:00c58f30:8"]]
- 00b9b000 ["INT_ADD", "register:40f0:8", ["const:b9b000:8", "const:4:8"]]
- 00b9b000 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b9bff4 ["INT_ADD", "register:40f0:8", ["const:b9bff4:8", "const:4:8"]]
+ 00b9bff4 ["CALL", null, ["callee:00c590a0:8"]]
- 00b9b024 ["INT_ADD", "register:40f0:8", ["const:b9b024:8", "const:4:8"]]
- 00b9b024 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b9c018 ["INT_ADD", "register:40f0:8", ["const:b9c018:8", "const:4:8"]]
+ 00b9c018 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-e2589ca758773dc7d6d8376aa50c8253"></a>

### [`00b9b214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9b/00b9b214.md) → [`00b9c208`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9c/00b9c208.md) _ZNSt6__ndk16vectorIhNS_9allocatorIhEEE6insertIPKhEENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIhNS_15iterator

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d150.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5e120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e120.md) · 呼出先 5件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9b2c8 ["INT_ADD", "register:40f0:8", ["const:b9b2c8:8", "const:4:8"]]
- 00b9b2c8 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b9c2bc ["INT_ADD", "register:40f0:8", ["const:b9c2bc:8", "const:4:8"]]
+ 00b9c2bc ["CALL", null, ["callee:00c590a0:8"]]
- 00b9b2ec ["INT_ADD", "register:40f0:8", ["const:b9b2ec:8", "const:4:8"]]
- 00b9b2ec ["CALL", null, ["callee:00c58f30:8"]]
+ 00b9c2e0 ["INT_ADD", "register:40f0:8", ["const:b9c2e0:8", "const:4:8"]]
+ 00b9c2e0 ["CALL", null, ["callee:00c58f30:8"]]
- 00b9b39c ["INT_ADD", "register:40f0:8", ["const:b9b39c:8", "const:4:8"]]
- 00b9b39c ["CALL", null, ["callee:00c590a0:8"]]
+ 00b9c390 ["INT_ADD", "register:40f0:8", ["const:b9c390:8", "const:4:8"]]
+ 00b9c390 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-2a07fb809f83ac26302e67455b5a8b6d"></a>

### [`00b9b4e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9b/00b9b4e4.md) → [`00b9c4d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9c/00b9c4d8.md) _ZNSt6__ndk16vectorIN11flexbuffers7Builder5ValueENS_9allocatorIS3_EEE8__appendEm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d0e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d0e0.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5e0b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e0b0.md) · 呼出先 5件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9b554 ["INT_ADD", "register:40f0:8", ["const:b9b554:8", "const:4:8"]]
- 00b9b554 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00b9c548 ["INT_ADD", "register:40f0:8", ["const:b9c548:8", "const:4:8"]]
+ 00b9c548 ["CALL", null, ["callee:00c5c1e0:8"]]
- 00b9b590 ["INT_ADD", "register:40f0:8", ["const:b9b590:8", "const:4:8"]]
- 00b9b590 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b9c584 ["INT_ADD", "register:40f0:8", ["const:b9c584:8", "const:4:8"]]
+ 00b9c584 ["CALL", null, ["callee:00c58f30:8"]]
- 00b9b5ac ["INT_ADD", "register:40f0:8", ["const:b9b5ac:8", "const:4:8"]]
- 00b9b5ac ["CALL", null, ["callee:00c59130:8"]]
+ 00b9c5a0 ["INT_ADD", "register:40f0:8", ["const:b9c5a0:8", "const:4:8"]]
+ 00b9c5a0 ["CALL", null, ["callee:00c59130:8"]]
~~~


<a id="compare-8ef43c968a48ef9cfa30118061fd0fbc"></a>

### [`00b9b610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9b/00b9b610.md) → [`00b9c604`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9c/00b9c604.md) _ZN11flexbuffers7Builder6StringEPKcm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c9c0.md) · 呼出先 5件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5b730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b730.md) [`00c5c970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c970.md) [`00c5d090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d090.md)
- 新版 呼出元 1件 [`00c5d990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d990.md) · 呼出先 5件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5c700`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c700.md) [`00c5d940`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d940.md) [`00c5e060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e060.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9b650 ["INT_ADD", "register:40f0:8", ["const:b9b650:8", "const:4:8"]]
- 00b9b650 ["CALL", null, ["callee:00c5d940:8"]]
+ 00b9c644 ["INT_ADD", "register:40f0:8", ["const:b9c644:8", "const:4:8"]]
+ 00b9c644 ["CALL", null, ["callee:00c5d940:8"]]
- 00b9b6b8 ["INT_ADD", "register:40f0:8", ["const:b9b6b8:8", "const:4:8"]]
- 00b9b6b8 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b9c6ac ["INT_ADD", "register:40f0:8", ["const:b9c6ac:8", "const:4:8"]]
+ 00b9c6ac ["CALL", null, ["callee:00c590f0:8"]]
- 00b9b6f8 ["INT_ADD", "register:40f0:8", ["const:b9b6f8:8", "const:4:8"]]
- 00b9b6f8 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b9c6ec ["INT_ADD", "register:40f0:8", ["const:b9c6ec:8", "const:4:8"]]
+ 00b9c6ec ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-bd22085dd7488f45dbd5157edcc1a5eb"></a>

### [`00b9b798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9b/00b9b798.md) → [`00b9c78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9c/00b9c78c.md) _ZN11flexbuffers7Builder10CreateBlobEPKvmmNS_4TypeE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c970.md) · 呼出先 4件 [`00b99988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b99/00b99988.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5d140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d140.md) [`00c5d150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d150.md)
- 新版 呼出元 1件 [`00c5d940`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d940.md) · 呼出先 4件 [`00b9a97c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9a/00b9a97c.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5e110`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e110.md) [`00c5e120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e120.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9b830 ["INT_ADD", "register:40f0:8", ["const:b9b830:8", "const:4:8"]]
- 00b9b830 ["CALL", null, ["callee:00c5e110:8"]]
+ 00b9c824 ["INT_ADD", "register:40f0:8", ["const:b9c824:8", "const:4:8"]]
+ 00b9c824 ["CALL", null, ["callee:00c5e110:8"]]
- 00b9b848 ["INT_ADD", "register:40f0:8", ["const:b9b848:8", "const:4:8"]]
- 00b9b848 ["CALL", null, ["callee:00c5e120:8"]]
+ 00b9c83c ["INT_ADD", "register:40f0:8", ["const:b9c83c:8", "const:4:8"]]
+ 00b9c83c ["CALL", null, ["callee:00c5e120:8"]]
- 00b9b864 ["INT_ADD", "register:40f0:8", ["const:b9b864:8", "const:4:8"]]
- 00b9b864 ["CALL", null, ["callee:00c5e120:8"]]
+ 00b9c858 ["INT_ADD", "register:40f0:8", ["const:b9c858:8", "const:4:8"]]
+ 00b9c858 ["CALL", null, ["callee:00c5e120:8"]]
~~~


<a id="compare-b73b8cc51f3a368e74840d8ade71dd71"></a>

### [`00b9b8b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9b/00b9b8b4.md) → [`00b9c8a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9c/00b9c8a8.md) _ZNSt6__ndk16__treeINS_4pairImmEEN11flexbuffers7Builder19StringOffsetCompareENS_9allocatorIS2_EEE25__emplace_unique_key_argsIS2_JRKS2_EEENS1

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d090.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md)
- 新版 呼出元 1件 [`00c5e060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e060.md) · 呼出先 3件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5c680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c680.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9b918 ["INT_ADD", "register:40f0:8", ["const:b9b918:8", "const:4:8"]]
- 00b9b918 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b9c90c ["INT_ADD", "register:40f0:8", ["const:b9c90c:8", "const:4:8"]]
+ 00b9c90c ["CALL", null, ["callee:00c590f0:8"]]
- 00b9b954 ["INT_ADD", "register:40f0:8", ["const:b9b954:8", "const:4:8"]]
- 00b9b954 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b9c948 ["INT_ADD", "register:40f0:8", ["const:b9c948:8", "const:4:8"]]
+ 00b9c948 ["CALL", null, ["callee:00c590f0:8"]]
- 00b9b9a4 ["INT_ADD", "register:40f0:8", ["const:b9b9a4:8", "const:4:8"]]
- 00b9b9a4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b9c998 ["INT_ADD", "register:40f0:8", ["const:b9c998:8", "const:4:8"]]
+ 00b9c998 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-c80080d421594e62061b5186e4df28dc"></a>

### [`00b9ba14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9b/00b9ba14.md) → [`00b9ca08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9c/00b9ca08.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE9AddOffsetINS_6VectorINS_6OffsetINS_6StringEEEjEEEEvtNS4_IT_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c4d0.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)
- 新版 呼出元 1件 [`00c5d4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d4a0.md) · 呼出先 2件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md) [`00c5d2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9ba74 ["INT_ADD", "register:40f0:8", ["const:b9ba74:8", "const:4:8"]]
- 00b9ba74 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b9ca68 ["INT_ADD", "register:40f0:8", ["const:b9ca68:8", "const:4:8"]]
+ 00b9ca68 ["CALL", null, ["callee:00c5d240:8"]]
- 00b9bad0 ["INT_ADD", "register:40f0:8", ["const:b9bad0:8", "const:4:8"]]
- 00b9bad0 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00b9cac4 ["INT_ADD", "register:40f0:8", ["const:b9cac4:8", "const:4:8"]]
+ 00b9cac4 ["CALL", null, ["callee:00c5d2f0:8"]]
- 00b9baf4 ["INT_ADD", "register:40f0:8", ["const:b9baf4:8", "const:4:8"]]
- 00b9baf4 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b9cae8 ["INT_ADD", "register:40f0:8", ["const:b9cae8:8", "const:4:8"]]
+ 00b9cae8 ["CALL", null, ["callee:00c5d240:8"]]
~~~


<a id="compare-04e41f10259986d1ea8d3ed97dc4cf07"></a>

### [`00b9bb44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9b/00b9bb44.md) → [`00b9cb38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9c/00b9cb38.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE9AddOffsetINS_6StringEEEvtNS_6OffsetIT_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c440.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)
- 新版 呼出元 1件 [`00c5d410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d410.md) · 呼出先 2件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md) [`00c5d2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9bba4 ["INT_ADD", "register:40f0:8", ["const:b9bba4:8", "const:4:8"]]
- 00b9bba4 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b9cb98 ["INT_ADD", "register:40f0:8", ["const:b9cb98:8", "const:4:8"]]
+ 00b9cb98 ["CALL", null, ["callee:00c5d240:8"]]
- 00b9bc00 ["INT_ADD", "register:40f0:8", ["const:b9bc00:8", "const:4:8"]]
- 00b9bc00 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00b9cbf4 ["INT_ADD", "register:40f0:8", ["const:b9cbf4:8", "const:4:8"]]
+ 00b9cbf4 ["CALL", null, ["callee:00c5d2f0:8"]]
- 00b9bc24 ["INT_ADD", "register:40f0:8", ["const:b9bc24:8", "const:4:8"]]
- 00b9bc24 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b9cc18 ["INT_ADD", "register:40f0:8", ["const:b9cc18:8", "const:4:8"]]
+ 00b9cc18 ["CALL", null, ["callee:00c5d240:8"]]
~~~


<a id="compare-a02d232d1182530e1f026942abeef6d7"></a>

### [`00b9bc74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9b/00b9bc74.md) → [`00b9cc68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9c/00b9cc68.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE9AddOffsetINS_6VectorINS_6OffsetIN10reflection10SchemaFileEEEjEEEEvtNS4_IT_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c450.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)
- 新版 呼出元 1件 [`00c5d420`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d420.md) · 呼出先 2件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md) [`00c5d2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9bcd4 ["INT_ADD", "register:40f0:8", ["const:b9bcd4:8", "const:4:8"]]
- 00b9bcd4 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b9ccc8 ["INT_ADD", "register:40f0:8", ["const:b9ccc8:8", "const:4:8"]]
+ 00b9ccc8 ["CALL", null, ["callee:00c5d240:8"]]
- 00b9bd30 ["INT_ADD", "register:40f0:8", ["const:b9bd30:8", "const:4:8"]]
- 00b9bd30 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00b9cd24 ["INT_ADD", "register:40f0:8", ["const:b9cd24:8", "const:4:8"]]
+ 00b9cd24 ["CALL", null, ["callee:00c5d2f0:8"]]
- 00b9bd54 ["INT_ADD", "register:40f0:8", ["const:b9bd54:8", "const:4:8"]]
- 00b9bd54 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b9cd48 ["INT_ADD", "register:40f0:8", ["const:b9cd48:8", "const:4:8"]]
+ 00b9cd48 ["CALL", null, ["callee:00c5d240:8"]]
~~~


<a id="compare-b740fae5aa8e62259286363f0fb0603b"></a>

### [`00b9bda4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9b/00b9bda4.md) → [`00b9cd98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b9c/00b9cd98.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE9AddOffsetINS_6VectorINS_6OffsetIN10reflection7ServiceEEEjEEEEvtNS4_IT_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c4b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c4b0.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)
- 新版 呼出元 1件 [`00c5d480`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d480.md) · 呼出先 2件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md) [`00c5d2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9be04 ["INT_ADD", "register:40f0:8", ["const:b9be04:8", "const:4:8"]]
- 00b9be04 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b9cdf8 ["INT_ADD", "register:40f0:8", ["const:b9cdf8:8", "const:4:8"]]
+ 00b9cdf8 ["CALL", null, ["callee:00c5d240:8"]]
- 00b9be60 ["INT_ADD", "register:40f0:8", ["const:b9be60:8", "const:4:8"]]
- 00b9be60 ["CALL", null, ["callee:00c5d2f0:8"]]
+ 00b9ce54 ["INT_ADD", "register:40f0:8", ["const:b9ce54:8", "const:4:8"]]
+ 00b9ce54 ["CALL", null, ["callee:00c5d2f0:8"]]
- 00b9be84 ["INT_ADD", "register:40f0:8", ["const:b9be84:8", "const:4:8"]]
- 00b9be84 ["CALL", null, ["callee:00c5d240:8"]]
+ 00b9ce78 ["INT_ADD", "register:40f0:8", ["const:b9ce78:8", "const:4:8"]]
+ 00b9ce78 ["CALL", null, ["callee:00c5d240:8"]]
~~~


