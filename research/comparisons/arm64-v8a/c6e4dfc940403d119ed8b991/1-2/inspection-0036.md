# v16.0.2 → v16.0.3 · 要調査の変更候補 (36)

[一覧の目次](README.md)

<a id="compare-db76076d808c3df7e29742e748c7eb2a"></a>

### [`00bafedc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baf/00bafedc.md) → [`00bb0ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb0/00bb0ed0.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers7EnumDefEEENS_19__map_value_c

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cfc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cfc0.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5df90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5df90.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00baff74 ["INT_ADD", "register:40f0:8", ["const:baff74:8", "const:4:8"]]
- 00baff74 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bb0f68 ["INT_ADD", "register:40f0:8", ["const:bb0f68:8", "const:4:8"]]
+ 00bb0f68 ["CALL", null, ["callee:00c590f0:8"]]
- 00baffbc ["INT_ADD", "register:40f0:8", ["const:baffbc:8", "const:4:8"]]
- 00baffbc ["CALL", null, ["callee:00c590f0:8"]]
+ 00bb0fb0 ["INT_ADD", "register:40f0:8", ["const:bb0fb0:8", "const:4:8"]]
+ 00bb0fb0 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-82709b8ecf6b160daf97d786fda37761"></a>

### [`00bafff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baf/00bafff0.md) → [`00bb0fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb0/00bb0fe4.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers7EnumDefEEENS_19__map_value_c

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cf90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cf90.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5df60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5df60.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb008c ["INT_ADD", "register:40f0:8", ["const:bb008c:8", "const:4:8"]]
- 00bb008c ["CALL", null, ["callee:00c590f0:8"]]
+ 00bb1080 ["INT_ADD", "register:40f0:8", ["const:bb1080:8", "const:4:8"]]
+ 00bb1080 ["CALL", null, ["callee:00c590f0:8"]]
- 00bb00cc ["INT_ADD", "register:40f0:8", ["const:bb00cc:8", "const:4:8"]]
- 00bb00cc ["CALL", null, ["callee:00c590f0:8"]]
+ 00bb10c0 ["INT_ADD", "register:40f0:8", ["const:bb10c0:8", "const:4:8"]]
+ 00bb10c0 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-cdfabe863c0436b876196b4d76c44642"></a>

### [`00bb0260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb0/00bb0260.md) → [`00bb1254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb1/00bb1254.md) _ZNSt6__ndk16__treeImN11flexbuffers7Builder16KeyOffsetCompareENS_9allocatorImEEE25__emplace_unique_key_argsImJRKmEEENS_4pairINS_15__tree_ite

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d0b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d0b0.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md) [`00c5b920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b920.md)
- 新版 呼出元 1件 [`00c5e080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e080.md) · 呼出先 3件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5c680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c680.md) [`00c5c8f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c8f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb02b0 ["INT_ADD", "register:40f0:8", ["const:bb02b0:8", "const:4:8"]]
- 00bb02b0 ["CALL", null, ["callee:00c5c8f0:8"]]
+ 00bb12a4 ["INT_ADD", "register:40f0:8", ["const:bb12a4:8", "const:4:8"]]
+ 00bb12a4 ["CALL", null, ["callee:00c5c8f0:8"]]
- 00bb02d4 ["INT_ADD", "register:40f0:8", ["const:bb02d4:8", "const:4:8"]]
- 00bb02d4 ["CALL", null, ["callee:00c5c8f0:8"]]
+ 00bb12c8 ["INT_ADD", "register:40f0:8", ["const:bb12c8:8", "const:4:8"]]
+ 00bb12c8 ["CALL", null, ["callee:00c5c8f0:8"]]
- 00bb0314 ["INT_ADD", "register:40f0:8", ["const:bb0314:8", "const:4:8"]]
- 00bb0314 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bb1308 ["INT_ADD", "register:40f0:8", ["const:bb1308:8", "const:4:8"]]
+ 00bb1308 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-750643946bdb4314bdface28e77b402c"></a>

### [`00bb0380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb0/00bb0380.md) → [`00bb1374`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb1/00bb1374.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers9StructDefEEENS_19__map_value

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d060.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5e030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e030.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb0418 ["INT_ADD", "register:40f0:8", ["const:bb0418:8", "const:4:8"]]
- 00bb0418 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bb140c ["INT_ADD", "register:40f0:8", ["const:bb140c:8", "const:4:8"]]
+ 00bb140c ["CALL", null, ["callee:00c590f0:8"]]
- 00bb0460 ["INT_ADD", "register:40f0:8", ["const:bb0460:8", "const:4:8"]]
- 00bb0460 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bb1454 ["INT_ADD", "register:40f0:8", ["const:bb1454:8", "const:4:8"]]
+ 00bb1454 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-b6222208e80614d1b09a8fa95e5bf033"></a>

### [`00bb0494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb0/00bb0494.md) → [`00bb1488`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb1/00bb1488.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_3setIN11flatbuffers12IncludedFileENS_4les

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cf20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cf20.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5def0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5def0.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb0530 ["INT_ADD", "register:40f0:8", ["const:bb0530:8", "const:4:8"]]
- 00bb0530 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bb1524 ["INT_ADD", "register:40f0:8", ["const:bb1524:8", "const:4:8"]]
+ 00bb1524 ["CALL", null, ["callee:00c590f0:8"]]
- 00bb0570 ["INT_ADD", "register:40f0:8", ["const:bb0570:8", "const:4:8"]]
- 00bb0570 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bb1564 ["INT_ADD", "register:40f0:8", ["const:bb1564:8", "const:4:8"]]
+ 00bb1564 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-5a54674caa20b3e8b20487f51a7ab746"></a>

### [`00bb05b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb0/00bb05b4.md) → [`00bb15a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb1/00bb15a8.md) _ZNSt6__ndk16vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEE24__emplace_back_slow_pathIJRS6_EEEvDpOT_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d0f0.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md) [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md)
- 新版 呼出元 1件 [`00c5e0c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e0c0.md) · 呼出先 4件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md) [`00c5c650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c650.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb0634 ["INT_ADD", "register:40f0:8", ["const:bb0634:8", "const:4:8"]]
- 00bb0634 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bb1628 ["INT_ADD", "register:40f0:8", ["const:bb1628:8", "const:4:8"]]
+ 00bb1628 ["CALL", null, ["callee:00c58f30:8"]]
- 00bb064c ["INT_ADD", "register:40f0:8", ["const:bb064c:8", "const:4:8"]]
- 00bb064c ["CALL", null, ["callee:00c5c650:8"]]
+ 00bb1640 ["INT_ADD", "register:40f0:8", ["const:bb1640:8", "const:4:8"]]
+ 00bb1640 ["CALL", null, ["callee:00c5c650:8"]]
- 00bb06c8 ["INT_ADD", "register:40f0:8", ["const:bb06c8:8", "const:4:8"]]
- 00bb06c8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00bb16bc ["INT_ADD", "register:40f0:8", ["const:bb16bc:8", "const:4:8"]]
+ 00bb16bc ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-06c3d251c1591ac00919b5ae17ddb197"></a>

### [`00bb0704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb0/00bb0704.md) → [`00bb16f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb1/00bb16f8.md) _ZNSt6__ndk16__treeIN11flatbuffers12IncludedFileENS_4lessIS2_EENS_9allocatorIS2_EEE25__emplace_unique_key_argsIS2_JRKS2_EEENS_4pairINS_15__t

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cf00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cf00.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md) [`00c5cef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cef0.md)
- 新版 呼出元 1件 [`00c5ded0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5ded0.md) · 呼出先 5件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5c650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c650.md) [`00c5c680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c680.md) [`00c5dec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dec0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb0738 ["INT_ADD", "register:40f0:8", ["const:bb0738:8", "const:4:8"]]
- 00bb0738 ["CALL", null, ["callee:00c5dec0:8"]]
+ 00bb172c ["INT_ADD", "register:40f0:8", ["const:bb172c:8", "const:4:8"]]
+ 00bb172c ["CALL", null, ["callee:00c5dec0:8"]]
- 00bb0754 ["INT_ADD", "register:40f0:8", ["const:bb0754:8", "const:4:8"]]
- 00bb0754 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bb1748 ["INT_ADD", "register:40f0:8", ["const:bb1748:8", "const:4:8"]]
+ 00bb1748 ["CALL", null, ["callee:00c58f30:8"]]
- 00bb0764 ["INT_ADD", "register:40f0:8", ["const:bb0764:8", "const:4:8"]]
- 00bb0764 ["CALL", null, ["callee:00c5c650:8"]]
+ 00bb1758 ["INT_ADD", "register:40f0:8", ["const:bb1758:8", "const:4:8"]]
+ 00bb1758 ["CALL", null, ["callee:00c5c650:8"]]
~~~


<a id="compare-24a97b179329454f54e4fc8971b72aa3"></a>

### [`00bb07e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb0/00bb07e8.md) → [`00bb17dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb1/00bb17dc.md) _ZNSt6__ndk16__treeIN11flatbuffers12IncludedFileENS_4lessIS2_EENS_9allocatorIS2_EEE12__find_equalIS2_EERPNS_16__tree_node_baseIPvEERPNS_15__

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cef0.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5dec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dec0.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb0888 ["INT_ADD", "register:40f0:8", ["const:bb0888:8", "const:4:8"]]
- 00bb0888 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bb187c ["INT_ADD", "register:40f0:8", ["const:bb187c:8", "const:4:8"]]
+ 00bb187c ["CALL", null, ["callee:00c590f0:8"]]
- 00bb08c8 ["INT_ADD", "register:40f0:8", ["const:bb08c8:8", "const:4:8"]]
- 00bb08c8 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bb18bc ["INT_ADD", "register:40f0:8", ["const:bb18bc:8", "const:4:8"]]
+ 00bb18bc ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-beb13a2fbd565d7f65df52647ee79cb3"></a>

### [`00bb090c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb0/00bb090c.md) → [`00bb1900`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb1/00bb1900.md) _ZNSt6__ndk16__treeINS_12__value_typeImNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareImS8_NS_4lessImEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d070.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6a0.md)
- 新版 呼出元 1件 [`00c5e040`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e040.md) · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5c670`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c670.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb09cc ["INT_ADD", "register:40f0:8", ["const:bb09cc:8", "const:4:8"]]
- 00bb09cc ["CALL", null, ["callee:00c5c670:8"]]
+ 00bb19c0 ["INT_ADD", "register:40f0:8", ["const:bb19c0:8", "const:4:8"]]
+ 00bb19c0 ["CALL", null, ["callee:00c5c670:8"]]
- 00bb09dc ["INT_ADD", "register:40f0:8", ["const:bb09dc:8", "const:4:8"]]
- 00bb09dc ["CALL", null, ["callee:00c58f50:8"]]
+ 00bb19d0 ["INT_ADD", "register:40f0:8", ["const:bb19d0:8", "const:4:8"]]
+ 00bb19d0 ["CALL", null, ["callee:00c58f50:8"]]
- 00bb09e4 ["INT_ADD", "register:40f0:8", ["const:bb09e4:8", "const:4:8"]]
- 00bb09e4 ["CALL", null, ["callee:00c58f50:8"]]
+ 00bb19d8 ["INT_ADD", "register:40f0:8", ["const:bb19d8:8", "const:4:8"]]
+ 00bb19d8 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-62967c5fb1771771c6cc0eb13aa64640"></a>

### [`00bb09f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb0/00bb09f8.md) → [`00bb19ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb1/00bb19ec.md) FUN_00bb19ec

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b8e178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8e/00b8e178.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cb10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cb10.md)
- 新版 呼出元 1件 [`00b8f16c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b8f/00b8f16c.md) · 呼出先 4件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5dae0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dae0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb0a3c ["INT_ADD", "register:40f0:8", ["const:bb0a3c:8", "const:4:8"]]
- 00bb0a3c ["CALL", null, ["callee:00c5dae0:8"]]
+ 00bb1a30 ["INT_ADD", "register:40f0:8", ["const:bb1a30:8", "const:4:8"]]
+ 00bb1a30 ["CALL", null, ["callee:00c5dae0:8"]]
- 00bb0a54 ["INT_ADD", "register:40f0:8", ["const:bb0a54:8", "const:4:8"]]
- 00bb0a54 ["CALL", null, ["callee:00c5dae0:8"]]
+ 00bb1a48 ["INT_ADD", "register:40f0:8", ["const:bb1a48:8", "const:4:8"]]
+ 00bb1a48 ["CALL", null, ["callee:00c5dae0:8"]]
- 00bb0ab0 ["INT_ADD", "register:40f0:8", ["const:bb0ab0:8", "const:4:8"]]
- 00bb0ab0 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bb1aa4 ["INT_ADD", "register:40f0:8", ["const:bb1aa4:8", "const:4:8"]]
+ 00bb1aa4 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-bc746f79412504f272f047499c8a4d10"></a>

### [`00bb1044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb1/00bb1044.md) → [`00bb2038`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb2/00bb2038.md) _ZNSt6__ndk17__sort4IRPFbPKN11flatbuffers9StructDefES4_EPPS2_EEjT0_SA_SA_SA_T_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d190.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5e160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e160.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb1078 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb1078 ["INT_ADD", "register:40f0:8", ["const:bb1078:8", "const:4:8"]]
- 00bb1078 ["CALLIND", null, ["register:0:8"]]
+ 00bb206c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb206c ["INT_ADD", "register:40f0:8", ["const:bb206c:8", "const:4:8"]]
+ 00bb206c ["CALLIND", null, ["register:0:8"]]
- 00bb1090 ["COPY", "register:0:8", ["register:4048:8"]]
- 00bb1090 ["INT_ADD", "register:40f0:8", ["const:bb1090:8", "const:4:8"]]
- 00bb1090 ["CALLIND", null, ["register:0:8"]]
+ 00bb2084 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00bb2084 ["INT_ADD", "register:40f0:8", ["const:bb2084:8", "const:4:8"]]
+ 00bb2084 ["CALLIND", null, ["register:0:8"]]
- 00bb10d4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb10d4 ["INT_ADD", "register:40f0:8", ["const:bb10d4:8", "const:4:8"]]
- 00bb10d4 ["CALLIND", null, ["register:0:8"]]
+ 00bb20c8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb20c8 ["INT_ADD", "register:40f0:8", ["const:bb20c8:8", "const:4:8"]]
+ 00bb20c8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7133c17e96a81331856ae354f95b6785"></a>

### [`00bb11c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb1/00bb11c8.md) → [`00bb21bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb2/00bb21bc.md) FUN_00bb21bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00bb0b2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb0/00bb0b2c.md) [`00bb142c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb1/00bb142c.md) · 呼出先 1件 [`00c5d190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d190.md)
- 新版 呼出元 2件 [`00bb1b20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb1/00bb1b20.md) [`00bb2420`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb2/00bb2420.md) · 呼出先 1件 [`00c5e160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e160.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb11fc ["INT_ADD", "register:40f0:8", ["const:bb11fc:8", "const:4:8"]]
- 00bb11fc ["CALL", null, ["callee:00c5e160:8"]]
+ 00bb21f0 ["INT_ADD", "register:40f0:8", ["const:bb21f0:8", "const:4:8"]]
+ 00bb21f0 ["CALL", null, ["callee:00c5e160:8"]]
- 00bb1214 ["COPY", "register:0:8", ["register:4048:8"]]
- 00bb1214 ["INT_ADD", "register:40f0:8", ["const:bb1214:8", "const:4:8"]]
- 00bb1214 ["CALLIND", null, ["register:0:8"]]
+ 00bb2208 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00bb2208 ["INT_ADD", "register:40f0:8", ["const:bb2208:8", "const:4:8"]]
+ 00bb2208 ["CALLIND", null, ["register:0:8"]]
- 00bb1238 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb1238 ["INT_ADD", "register:40f0:8", ["const:bb1238:8", "const:4:8"]]
- 00bb1238 ["CALLIND", null, ["register:0:8"]]
+ 00bb222c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb222c ["INT_ADD", "register:40f0:8", ["const:bb222c:8", "const:4:8"]]
+ 00bb222c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8ab1394d049fb7dfa0ff06d0296f5244"></a>

### [`00bb12d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb1/00bb12d0.md) → [`00bb22c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb2/00bb22c4.md) _ZNSt6__ndk118__insertion_sort_3IRPFbPKN11flatbuffers9StructDefES4_EPPS2_EEvT0_SA_T_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5ccd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ccd0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5dca0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dca0.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb1300 ["COPY", "register:0:8", ["register:4048:8"]]
- 00bb1300 ["INT_ADD", "register:40f0:8", ["const:bb1300:8", "const:4:8"]]
- 00bb1300 ["CALLIND", null, ["register:0:8"]]
+ 00bb22f4 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00bb22f4 ["INT_ADD", "register:40f0:8", ["const:bb22f4:8", "const:4:8"]]
+ 00bb22f4 ["CALLIND", null, ["register:0:8"]]
- 00bb131c ["COPY", "register:0:8", ["register:4048:8"]]
- 00bb131c ["INT_ADD", "register:40f0:8", ["const:bb131c:8", "const:4:8"]]
- 00bb131c ["CALLIND", null, ["register:0:8"]]
+ 00bb2310 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00bb2310 ["INT_ADD", "register:40f0:8", ["const:bb2310:8", "const:4:8"]]
+ 00bb2310 ["CALLIND", null, ["register:0:8"]]
- 00bb1358 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb1358 ["INT_ADD", "register:40f0:8", ["const:bb1358:8", "const:4:8"]]
- 00bb1358 ["CALLIND", null, ["register:0:8"]]
+ 00bb234c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb234c ["INT_ADD", "register:40f0:8", ["const:bb234c:8", "const:4:8"]]
+ 00bb234c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-55b2d426c1116748fd6a08e86cf25472"></a>

### [`00bb16dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb1/00bb16dc.md) → [`00bb26d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb2/00bb26d0.md) FUN_00bb26d0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b8e178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8e/00b8e178.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cb10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cb10.md)
- 新版 呼出元 1件 [`00b8f16c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b8f/00b8f16c.md) · 呼出先 4件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c5dae0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dae0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb1720 ["INT_ADD", "register:40f0:8", ["const:bb1720:8", "const:4:8"]]
- 00bb1720 ["CALL", null, ["callee:00c5dae0:8"]]
+ 00bb2714 ["INT_ADD", "register:40f0:8", ["const:bb2714:8", "const:4:8"]]
+ 00bb2714 ["CALL", null, ["callee:00c5dae0:8"]]
- 00bb1738 ["INT_ADD", "register:40f0:8", ["const:bb1738:8", "const:4:8"]]
- 00bb1738 ["CALL", null, ["callee:00c5dae0:8"]]
+ 00bb272c ["INT_ADD", "register:40f0:8", ["const:bb272c:8", "const:4:8"]]
+ 00bb272c ["CALL", null, ["callee:00c5dae0:8"]]
- 00bb1794 ["INT_ADD", "register:40f0:8", ["const:bb1794:8", "const:4:8"]]
- 00bb1794 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bb2788 ["INT_ADD", "register:40f0:8", ["const:bb2788:8", "const:4:8"]]
+ 00bb2788 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-ebfdb337b097275000879d97b6466018"></a>

### [`00bb1d28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb1/00bb1d28.md) → [`00bb2d1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb2/00bb2d1c.md) _ZNSt6__ndk17__sort4IRPFbPKN11flatbuffers7EnumDefES4_EPPS2_EEjT0_SA_SA_SA_T_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d170.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5e140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e140.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb1d5c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb1d5c ["INT_ADD", "register:40f0:8", ["const:bb1d5c:8", "const:4:8"]]
- 00bb1d5c ["CALLIND", null, ["register:0:8"]]
+ 00bb2d50 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb2d50 ["INT_ADD", "register:40f0:8", ["const:bb2d50:8", "const:4:8"]]
+ 00bb2d50 ["CALLIND", null, ["register:0:8"]]
- 00bb1d74 ["COPY", "register:0:8", ["register:4048:8"]]
- 00bb1d74 ["INT_ADD", "register:40f0:8", ["const:bb1d74:8", "const:4:8"]]
- 00bb1d74 ["CALLIND", null, ["register:0:8"]]
+ 00bb2d68 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00bb2d68 ["INT_ADD", "register:40f0:8", ["const:bb2d68:8", "const:4:8"]]
+ 00bb2d68 ["CALLIND", null, ["register:0:8"]]
- 00bb1db8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb1db8 ["INT_ADD", "register:40f0:8", ["const:bb1db8:8", "const:4:8"]]
- 00bb1db8 ["CALLIND", null, ["register:0:8"]]
+ 00bb2dac ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb2dac ["INT_ADD", "register:40f0:8", ["const:bb2dac:8", "const:4:8"]]
+ 00bb2dac ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-28efa0be6dc68d9a6652ab0cda67bfc9"></a>

### [`00bb1eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb1/00bb1eac.md) → [`00bb2ea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb2/00bb2ea0.md) FUN_00bb2ea0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00bb1810`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb1/00bb1810.md) [`00bb2110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb2/00bb2110.md) · 呼出先 1件 [`00c5d170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d170.md)
- 新版 呼出元 2件 [`00bb2804`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb2/00bb2804.md) [`00bb3104`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb3/00bb3104.md) · 呼出先 1件 [`00c5e140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e140.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb1ee0 ["INT_ADD", "register:40f0:8", ["const:bb1ee0:8", "const:4:8"]]
- 00bb1ee0 ["CALL", null, ["callee:00c5e140:8"]]
+ 00bb2ed4 ["INT_ADD", "register:40f0:8", ["const:bb2ed4:8", "const:4:8"]]
+ 00bb2ed4 ["CALL", null, ["callee:00c5e140:8"]]
- 00bb1ef8 ["COPY", "register:0:8", ["register:4048:8"]]
- 00bb1ef8 ["INT_ADD", "register:40f0:8", ["const:bb1ef8:8", "const:4:8"]]
- 00bb1ef8 ["CALLIND", null, ["register:0:8"]]
+ 00bb2eec ["COPY", "register:0:8", ["register:4048:8"]]
+ 00bb2eec ["INT_ADD", "register:40f0:8", ["const:bb2eec:8", "const:4:8"]]
+ 00bb2eec ["CALLIND", null, ["register:0:8"]]
- 00bb1f1c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb1f1c ["INT_ADD", "register:40f0:8", ["const:bb1f1c:8", "const:4:8"]]
- 00bb1f1c ["CALLIND", null, ["register:0:8"]]
+ 00bb2f10 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb2f10 ["INT_ADD", "register:40f0:8", ["const:bb2f10:8", "const:4:8"]]
+ 00bb2f10 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6aa7bd733cd8cb7800deb970ab2f0b78"></a>

### [`00bb1fb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb1/00bb1fb4.md) → [`00bb2fa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb2/00bb2fa8.md) _ZNSt6__ndk118__insertion_sort_3IRPFbPKN11flatbuffers7EnumDefES4_EPPS2_EEvT0_SA_T_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5ccb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ccb0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5dc80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5dc80.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb1fe4 ["COPY", "register:0:8", ["register:4048:8"]]
- 00bb1fe4 ["INT_ADD", "register:40f0:8", ["const:bb1fe4:8", "const:4:8"]]
- 00bb1fe4 ["CALLIND", null, ["register:0:8"]]
+ 00bb2fd8 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00bb2fd8 ["INT_ADD", "register:40f0:8", ["const:bb2fd8:8", "const:4:8"]]
+ 00bb2fd8 ["CALLIND", null, ["register:0:8"]]
- 00bb2000 ["COPY", "register:0:8", ["register:4048:8"]]
- 00bb2000 ["INT_ADD", "register:40f0:8", ["const:bb2000:8", "const:4:8"]]
- 00bb2000 ["CALLIND", null, ["register:0:8"]]
+ 00bb2ff4 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00bb2ff4 ["INT_ADD", "register:40f0:8", ["const:bb2ff4:8", "const:4:8"]]
+ 00bb2ff4 ["CALLIND", null, ["register:0:8"]]
- 00bb203c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb203c ["INT_ADD", "register:40f0:8", ["const:bb203c:8", "const:4:8"]]
- 00bb203c ["CALLIND", null, ["register:0:8"]]
+ 00bb3030 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb3030 ["INT_ADD", "register:40f0:8", ["const:bb3030:8", "const:4:8"]]
+ 00bb3030 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-07fac69d41a25d4a63f369fa70b5183c"></a>

### [`00bb23c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb2/00bb23c0.md) → [`00bb33b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb3/00bb33b4.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE21CreateVectorOfStringsINSt6__ndk111__wrap_iterIPKNS3_12basic_stringIcNS3_11char_traitsIcEENS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c390.md) · 呼出先 4件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md) [`00c5c350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c350.md) [`00c5c370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c370.md)
- 新版 呼出元 1件 [`00c5d360`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d360.md) · 呼出先 4件 [`00c5d240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d240.md) [`00c5d2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d2f0.md) [`00c5d320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d320.md) [`00c5d340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d340.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb2418 ["INT_ADD", "register:40f0:8", ["const:bb2418:8", "const:4:8"]]
- 00bb2418 ["CALL", null, ["callee:00c5d240:8"]]
+ 00bb340c ["INT_ADD", "register:40f0:8", ["const:bb340c:8", "const:4:8"]]
+ 00bb340c ["CALL", null, ["callee:00c5d240:8"]]
- 00bb245c ["INT_ADD", "register:40f0:8", ["const:bb245c:8", "const:4:8"]]
- 00bb245c ["CALL", null, ["callee:00c5d340:8"]]
+ 00bb3450 ["INT_ADD", "register:40f0:8", ["const:bb3450:8", "const:4:8"]]
+ 00bb3450 ["CALL", null, ["callee:00c5d340:8"]]
- 00bb2480 ["INT_ADD", "register:40f0:8", ["const:bb2480:8", "const:4:8"]]
- 00bb2480 ["CALL", null, ["callee:00c5d240:8"]]
+ 00bb3474 ["INT_ADD", "register:40f0:8", ["const:bb3474:8", "const:4:8"]]
+ 00bb3474 ["CALL", null, ["callee:00c5d240:8"]]
~~~


<a id="compare-9a5c4932a6390c92242b68f5c4ceb3a1"></a>

### [`00bb2590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb2/00bb2590.md) → [`00bb3584`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb3/00bb3584.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers9NamespaceEEENS_19__map_value

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d040.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d040.md)
- 新版 呼出元 1件 [`00c5e010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e010.md) · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5e010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e010.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb25ac ["INT_ADD", "register:40f0:8", ["const:bb25ac:8", "const:4:8"]]
- 00bb25ac ["CALL", null, ["callee:00c5e010:8"]]
+ 00bb35a0 ["INT_ADD", "register:40f0:8", ["const:bb35a0:8", "const:4:8"]]
+ 00bb35a0 ["CALL", null, ["callee:00c5e010:8"]]
- 00bb25b8 ["INT_ADD", "register:40f0:8", ["const:bb25b8:8", "const:4:8"]]
- 00bb25b8 ["CALL", null, ["callee:00c5e010:8"]]
+ 00bb35ac ["INT_ADD", "register:40f0:8", ["const:bb35ac:8", "const:4:8"]]
+ 00bb35ac ["CALL", null, ["callee:00c5e010:8"]]
- 00bb25c8 ["INT_ADD", "register:40f0:8", ["const:bb25c8:8", "const:4:8"]]
- 00bb25c8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00bb35bc ["INT_ADD", "register:40f0:8", ["const:bb35bc:8", "const:4:8"]]
+ 00bb35bc ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-6bda918e587e1e9c4e71e78ab7cc6e73"></a>

### [`00bb25e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb2/00bb25e0.md) → [`00bb35d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb3/00bb35d4.md) _ZNKSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers7EnumDefEEENS_19__map_value_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cb50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cb50.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5db20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5db20.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb2678 ["INT_ADD", "register:40f0:8", ["const:bb2678:8", "const:4:8"]]
- 00bb2678 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bb366c ["INT_ADD", "register:40f0:8", ["const:bb366c:8", "const:4:8"]]
+ 00bb366c ["CALL", null, ["callee:00c590f0:8"]]
- 00bb26c0 ["INT_ADD", "register:40f0:8", ["const:bb26c0:8", "const:4:8"]]
- 00bb26c0 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bb36b4 ["INT_ADD", "register:40f0:8", ["const:bb36b4:8", "const:4:8"]]
+ 00bb36b4 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-17510d894dde441f3cffa4136464abb6"></a>

### [`00bb26f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb2/00bb26f4.md) → [`00bb36e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb3/00bb36e8.md) _ZNSt6__ndk16__treeIPN11flatbuffers8FieldDefENS_4lessIS3_EENS_9allocatorIS3_EEE7destroyEPNS_11__tree_nodeIS3_PvEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d0a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d0a0.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d0a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d0a0.md)
- 新版 呼出元 1件 [`00c5e070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e070.md) · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5e070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e070.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb2710 ["INT_ADD", "register:40f0:8", ["const:bb2710:8", "const:4:8"]]
- 00bb2710 ["CALL", null, ["callee:00c5e070:8"]]
+ 00bb3704 ["INT_ADD", "register:40f0:8", ["const:bb3704:8", "const:4:8"]]
+ 00bb3704 ["CALL", null, ["callee:00c5e070:8"]]
- 00bb271c ["INT_ADD", "register:40f0:8", ["const:bb271c:8", "const:4:8"]]
- 00bb271c ["CALL", null, ["callee:00c5e070:8"]]
+ 00bb3710 ["INT_ADD", "register:40f0:8", ["const:bb3710:8", "const:4:8"]]
+ 00bb3710 ["CALL", null, ["callee:00c5e070:8"]]
~~~


<a id="compare-5ebf25b9214587c0b6830952b5f85473"></a>

### [`00bb2750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb2/00bb2750.md) → [`00bb3744`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb3/00bb3744.md) _ZN11flatbuffers9DirExistsEPKc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c59930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59930.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5a900`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a900.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb2760 ["INT_ADD", "register:40f0:8", ["const:bb2760:8", "const:4:8"]]
- 00bb2760 ["CALL", null, ["callee:00c5a900:8"]]
+ 00bb3754 ["INT_ADD", "register:40f0:8", ["const:bb3754:8", "const:4:8"]]
+ 00bb3754 ["CALL", null, ["callee:00c5a900:8"]]
~~~


<a id="compare-62a0981f3907199d5a3b840a374590f4"></a>

### [`00bb2e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb2/00bb2e80.md) → [`00bb3e74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb3/00bb3e74.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEE5writeEPKcl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c58d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58d40.md) · 呼出先 3件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c58fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58fc0.md) [`00c5d1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1c0.md)
- 新版 呼出元 1件 [`00c59d10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59d10.md) · 呼出先 3件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c59f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59f90.md) [`00c5e190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e190.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb2ecc ["INT_ADD", "register:40f0:8", ["const:bb2ecc:8", "const:4:8"]]
- 00bb2ecc ["CALL", null, ["callee:00c5e190:8"]]
+ 00bb3ec0 ["INT_ADD", "register:40f0:8", ["const:bb3ec0:8", "const:4:8"]]
+ 00bb3ec0 ["CALL", null, ["callee:00c5e190:8"]]
- 00bb2eec ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb2eec ["INT_ADD", "register:40f0:8", ["const:bb2eec:8", "const:4:8"]]
- 00bb2eec ["CALLIND", null, ["register:0:8"]]
+ 00bb3ee0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb3ee0 ["INT_ADD", "register:40f0:8", ["const:bb3ee0:8", "const:4:8"]]
+ 00bb3ee0 ["CALLIND", null, ["register:0:8"]]
- 00bb2f0c ["INT_ADD", "register:40f0:8", ["const:bb2f0c:8", "const:4:8"]]
- 00bb2f0c ["CALL", null, ["callee:00c59340:8"]]
+ 00bb3f00 ["INT_ADD", "register:40f0:8", ["const:bb3f00:8", "const:4:8"]]
+ 00bb3f00 ["CALL", null, ["callee:00c59340:8"]]
~~~


<a id="compare-b625f9fa69ef34427a628e66a1f4aaac"></a>

### [`00bb31c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb3/00bb31c8.md) → [`00bb41bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb4/00bb41bc.md) _ZN11flatbuffers11StripPrefixERKNSt6__ndk112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEES8_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md) [`00c5b8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b8c0.md) [`00c5d200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d200.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c5c650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c650.md) [`00c5c890`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c890.md) [`00c5e1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e1d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb320c ["INT_ADD", "register:40f0:8", ["const:bb320c:8", "const:4:8"]]
- 00bb320c ["CALL", null, ["callee:00c5e1d0:8"]]
+ 00bb4200 ["INT_ADD", "register:40f0:8", ["const:bb4200:8", "const:4:8"]]
+ 00bb4200 ["CALL", null, ["callee:00c5e1d0:8"]]
~~~


<a id="compare-4fad0446ee804e19592e822615ba35da"></a>

### [`00bb3250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb3/00bb3250.md) → [`00bb4244`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb4/00bb4244.md) _ZN11flatbuffers18ConCatPathFileNameERKNSt6__ndk112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEES8_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c810`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c810.md) · 呼出先 4件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c5a9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9b0.md) [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md)
- 新版 呼出元 1件 [`00c5d7e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d7e0.md) · 呼出先 4件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c59020`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59020.md) [`00c5b980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b980.md) [`00c5c650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c650.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb3270 ["INT_ADD", "register:40f0:8", ["const:bb3270:8", "const:4:8"]]
- 00bb3270 ["CALL", null, ["callee:00c5c650:8"]]
+ 00bb4264 ["INT_ADD", "register:40f0:8", ["const:bb4264:8", "const:4:8"]]
+ 00bb4264 ["CALL", null, ["callee:00c5c650:8"]]
- 00bb3304 ["INT_ADD", "register:40f0:8", ["const:bb3304:8", "const:4:8"]]
- 00bb3304 ["CALL", null, ["callee:00c5b980:8"]]
+ 00bb42f8 ["INT_ADD", "register:40f0:8", ["const:bb42f8:8", "const:4:8"]]
+ 00bb42f8 ["CALL", null, ["callee:00c5b980:8"]]
- 00bb3354 ["INT_ADD", "register:40f0:8", ["const:bb3354:8", "const:4:8"]]
- 00bb3354 ["CALL", null, ["callee:00c59020:8"]]
+ 00bb4348 ["INT_ADD", "register:40f0:8", ["const:bb4348:8", "const:4:8"]]
+ 00bb4348 ["CALL", null, ["callee:00c59020:8"]]
~~~


<a id="compare-681723e7662c172b0905ad6e93fc8543"></a>

### [`00bb33e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb3/00bb33e0.md) → [`00bb43d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb4/00bb43d4.md) _ZN11flatbuffers9PosixPathEPKc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c940.md) · 呼出先 1件 [`00c5b690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b690.md)
- 新版 呼出元 1件 [`00c5d910`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d910.md) · 呼出先 1件 [`00c5c660`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c660.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb33f8 ["INT_ADD", "register:40f0:8", ["const:bb33f8:8", "const:4:8"]]
- 00bb33f8 ["CALL", null, ["callee:00c5c660:8"]]
+ 00bb43ec ["INT_ADD", "register:40f0:8", ["const:bb43ec:8", "const:4:8"]]
+ 00bb43ec ["CALL", null, ["callee:00c5c660:8"]]
~~~


<a id="compare-9eb5dbad5331a2579b1225f114a54c32"></a>

### [`00bb3534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb3/00bb3534.md) → [`00bb4528`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb4/00bb4528.md) _ZN11flatbuffers9PosixPathERKNSt6__ndk112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b690.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c660`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c660.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb3558 ["INT_ADD", "register:40f0:8", ["const:bb3558:8", "const:4:8"]]
- 00bb3558 ["CALL", null, ["callee:00c5c660:8"]]
+ 00bb454c ["INT_ADD", "register:40f0:8", ["const:bb454c:8", "const:4:8"]]
+ 00bb454c ["CALL", null, ["callee:00c5c660:8"]]
~~~


<a id="compare-7ae23b8d41f1280decf5a79f7de0328b"></a>

### [`00bb37b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb3/00bb37b8.md) → [`00bb47ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb4/00bb47ac.md) _ZN11flatbuffers12AbsolutePathERKNSt6__ndk112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c7f0.md) · 呼出先 7件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c58730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58730.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md)
- 新版 呼出元 1件 [`00c5d7c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5d/00c5d7c0.md) · 呼出先 7件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c59700`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59700.md) [`00c5c150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c150.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb37f4 ["INT_ADD", "register:40f0:8", ["const:bb37f4:8", "const:4:8"]]
- 00bb37f4 ["CALL", null, ["callee:00c5e2d0:8"]]
+ 00bb47e8 ["INT_ADD", "register:40f0:8", ["const:bb47e8:8", "const:4:8"]]
+ 00bb47e8 ["CALL", null, ["callee:00c5e2d0:8"]]
- 00bb380c ["INT_ADD", "register:40f0:8", ["const:bb380c:8", "const:4:8"]]
- 00bb380c ["CALL", null, ["callee:00c59080:8"]]
+ 00bb4800 ["INT_ADD", "register:40f0:8", ["const:bb4800:8", "const:4:8"]]
+ 00bb4800 ["CALL", null, ["callee:00c59080:8"]]
- 00bb381c ["INT_ADD", "register:40f0:8", ["const:bb381c:8", "const:4:8"]]
- 00bb381c ["CALL", null, ["callee:00c5c150:8"]]
+ 00bb4810 ["INT_ADD", "register:40f0:8", ["const:bb4810:8", "const:4:8"]]
+ 00bb4810 ["CALL", null, ["callee:00c5c150:8"]]
~~~


<a id="compare-df5e35c9d638b38117bb52dce7c5a7f9"></a>

### [`00bb3eb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb3/00bb3eb4.md) → [`00bb4ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb4/00bb4ea8.md) _ZN11flatbuffers19SetGlobalTestLocaleEPKcPNSt6__ndk112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb3ed8 ["INT_ADD", "register:40f0:8", ["const:bb3ed8:8", "const:4:8"]]
- 00bb3ed8 ["CALL", null, ["callee:00c5e2e0:8"]]
+ 00bb4ecc ["INT_ADD", "register:40f0:8", ["const:bb4ecc:8", "const:4:8"]]
+ 00bb4ecc ["CALL", null, ["callee:00c5e2e0:8"]]
- 00bb3ef0 ["INT_ADD", "register:40f0:8", ["const:bb3ef0:8", "const:4:8"]]
- 00bb3ef0 ["CALL", null, ["callee:00c59080:8"]]
+ 00bb4ee4 ["INT_ADD", "register:40f0:8", ["const:bb4ee4:8", "const:4:8"]]
+ 00bb4ee4 ["CALL", null, ["callee:00c59080:8"]]
- 00bb3f2c ["INT_ADD", "register:40f0:8", ["const:bb3f2c:8", "const:4:8"]]
- 00bb3f2c ["CALL", null, ["callee:00c58f30:8"]]
+ 00bb4f20 ["INT_ADD", "register:40f0:8", ["const:bb4f20:8", "const:4:8"]]
+ 00bb4f20 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-efa9661cc69c1af472fe8b9541cfb736"></a>

### [`00bb3fb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb3/00bb3fb4.md) → [`00bb4fa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb4/00bb4fa8.md) _ZN11flatbuffers23ReadEnvironmentVariableEPKcPNSt6__ndk112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c59970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59970.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5a940`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a940.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb3fd0 ["INT_ADD", "register:40f0:8", ["const:bb3fd0:8", "const:4:8"]]
- 00bb3fd0 ["CALL", null, ["callee:00c5a940:8"]]
+ 00bb4fc4 ["INT_ADD", "register:40f0:8", ["const:bb4fc4:8", "const:4:8"]]
+ 00bb4fc4 ["CALL", null, ["callee:00c5a940:8"]]
- 00bb3fe8 ["INT_ADD", "register:40f0:8", ["const:bb3fe8:8", "const:4:8"]]
- 00bb3fe8 ["CALL", null, ["callee:00c59080:8"]]
+ 00bb4fdc ["INT_ADD", "register:40f0:8", ["const:bb4fdc:8", "const:4:8"]]
+ 00bb4fdc ["CALL", null, ["callee:00c59080:8"]]
- 00bb4024 ["INT_ADD", "register:40f0:8", ["const:bb4024:8", "const:4:8"]]
- 00bb4024 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bb5018 ["INT_ADD", "register:40f0:8", ["const:bb5018:8", "const:4:8"]]
+ 00bb5018 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-71784b5832003ff84c2c6c7e9eff8031"></a>

### [`00bb4e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb4/00bb4e20.md) → [`00bb5e14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb5/00bb5e14.md) FUN_00bb5e14

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bb40ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb4/00bb40ac.md) · 呼出先 3件 [`00c5a9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9b0.md) [`00c5d320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d320.md) [`00c5d330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d330.md)
- 新版 呼出元 1件 [`00bb50a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb5/00bb50a0.md) · 呼出先 3件 [`00c5b980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b980.md) [`00c5e2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2f0.md) [`00c5e300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e300.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb4efc ["INT_ADD", "register:40f0:8", ["const:bb4efc:8", "const:4:8"]]
- 00bb4efc ["CALL", null, ["callee:00c5e300:8"]]
+ 00bb5ef0 ["INT_ADD", "register:40f0:8", ["const:bb5ef0:8", "const:4:8"]]
+ 00bb5ef0 ["CALL", null, ["callee:00c5e300:8"]]
- 00bb4f98 ["INT_ADD", "register:40f0:8", ["const:bb4f98:8", "const:4:8"]]
- 00bb4f98 ["CALL", null, ["callee:00c5b980:8"]]
+ 00bb5f8c ["INT_ADD", "register:40f0:8", ["const:bb5f8c:8", "const:4:8"]]
+ 00bb5f8c ["CALL", null, ["callee:00c5b980:8"]]
- 00bb4fb8 ["INT_ADD", "register:40f0:8", ["const:bb4fb8:8", "const:4:8"]]
- 00bb4fb8 ["CALL", null, ["callee:00c5e300:8"]]
+ 00bb5fac ["INT_ADD", "register:40f0:8", ["const:bb5fac:8", "const:4:8"]]
+ 00bb5fac ["CALL", null, ["callee:00c5e300:8"]]
~~~


<a id="compare-65702c11fbc30e84baa42dc10271d3cb"></a>

### [`00bb51ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb51ec.md) → [`00bb61e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb6/00bb61e0.md) _ZN11flatbuffers11CharToUpperEc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bb40ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb4/00bb40ac.md) · 呼出先 1件 [`00c5d330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d330.md)
- 新版 呼出元 1件 [`00bb50a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb5/00bb50a0.md) · 呼出先 1件 [`00c5e300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e300.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb51f8 ["INT_ADD", "register:40f0:8", ["const:bb51f8:8", "const:4:8"]]
- 00bb51f8 ["CALL", null, ["callee:00c5e300:8"]]
+ 00bb61ec ["INT_ADD", "register:40f0:8", ["const:bb61ec:8", "const:4:8"]]
+ 00bb61ec ["CALL", null, ["callee:00c5e300:8"]]
~~~


<a id="compare-611ffe17a4aa279c5e49ed9c0633e6c8"></a>

### [`00bb5204`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5204.md) → [`00bb61f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb6/00bb61f8.md) _ZN11flatbuffers11CharToLowerEc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bb40ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb4/00bb40ac.md) · 呼出先 1件 [`00c5d320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d320.md)
- 新版 呼出元 1件 [`00bb50a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb5/00bb50a0.md) · 呼出先 1件 [`00c5e2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e2f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb5210 ["INT_ADD", "register:40f0:8", ["const:bb5210:8", "const:4:8"]]
- 00bb5210 ["CALL", null, ["callee:00c5e2f0:8"]]
+ 00bb6204 ["INT_ADD", "register:40f0:8", ["const:bb6204:8", "const:4:8"]]
+ 00bb6204 ["CALL", null, ["callee:00c5e2f0:8"]]
~~~


<a id="compare-8a8cea5b7ef4ae780100b8df2d989e78"></a>

### [`00bb521c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb521c.md) → [`00bb6210`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb6/00bb6210.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE5seekgExNS_8ios_base7seekdirE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c598c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c598c0.md) · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c58fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58fc0.md)
- 新版 呼出元 1件 [`00c5a890`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a890.md) · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c59f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59f90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb5250 ["INT_ADD", "register:40f0:8", ["const:bb5250:8", "const:4:8"]]
- 00bb5250 ["CALL", null, ["callee:00c59340:8"]]
+ 00bb6244 ["INT_ADD", "register:40f0:8", ["const:bb6244:8", "const:4:8"]]
+ 00bb6244 ["CALL", null, ["callee:00c59340:8"]]
- 00bb5278 ["INT_ADD", "register:40f0:8", ["const:bb5278:8", "const:4:8"]]
- 00bb5278 ["CALL", null, ["callee:00c59f90:8"]]
+ 00bb626c ["INT_ADD", "register:40f0:8", ["const:bb626c:8", "const:4:8"]]
+ 00bb626c ["CALL", null, ["callee:00c59f90:8"]]
- 00bb52ac ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb52ac ["INT_ADD", "register:40f0:8", ["const:bb52ac:8", "const:4:8"]]
- 00bb52ac ["CALLIND", null, ["register:0:8"]]
+ 00bb62a0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb62a0 ["INT_ADD", "register:40f0:8", ["const:bb62a0:8", "const:4:8"]]
+ 00bb62a0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f81b938efe059fd72374b0ff45322da3"></a>

### [`00bb52e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb52e8.md) → [`00bb62dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb6/00bb62dc.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE5tellgEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c598b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c598b0.md) · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c58fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58fc0.md)
- 新版 呼出元 1件 [`00c5a880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a880.md) · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c59f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59f90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb5310 ["INT_ADD", "register:40f0:8", ["const:bb5310:8", "const:4:8"]]
- 00bb5310 ["CALL", null, ["callee:00c59340:8"]]
+ 00bb6304 ["INT_ADD", "register:40f0:8", ["const:bb6304:8", "const:4:8"]]
+ 00bb6304 ["CALL", null, ["callee:00c59340:8"]]
- 00bb5328 ["INT_ADD", "register:40f0:8", ["const:bb5328:8", "const:4:8"]]
- 00bb5328 ["CALL", null, ["callee:00c59f90:8"]]
+ 00bb631c ["INT_ADD", "register:40f0:8", ["const:bb631c:8", "const:4:8"]]
+ 00bb631c ["CALL", null, ["callee:00c59f90:8"]]
- 00bb535c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb535c ["INT_ADD", "register:40f0:8", ["const:bb535c:8", "const:4:8"]]
- 00bb535c ["CALLIND", null, ["register:0:8"]]
+ 00bb6350 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb6350 ["INT_ADD", "register:40f0:8", ["const:bb6350:8", "const:4:8"]]
+ 00bb6350 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e421be515f72e38a516980cd12d75853"></a>

### [`00bb5394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5394.md) → [`00bb6388`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb6/00bb6388.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEElsEPNS_15basic_streambufIcS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d290.md) · 呼出先 3件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c58fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58fc0.md) [`00c5d1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1c0.md)
- 新版 呼出元 1件 [`00c5e260`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e260.md) · 呼出先 3件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c59f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59f90.md) [`00c5e190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e190.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb53c8 ["INT_ADD", "register:40f0:8", ["const:bb53c8:8", "const:4:8"]]
- 00bb53c8 ["CALL", null, ["callee:00c59f90:8"]]
+ 00bb63bc ["INT_ADD", "register:40f0:8", ["const:bb63bc:8", "const:4:8"]]
+ 00bb63bc ["CALL", null, ["callee:00c59f90:8"]]
- 00bb53f4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb53f4 ["INT_ADD", "register:40f0:8", ["const:bb53f4:8", "const:4:8"]]
- 00bb53f4 ["CALLIND", null, ["register:0:8"]]
+ 00bb63e8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb63e8 ["INT_ADD", "register:40f0:8", ["const:bb63e8:8", "const:4:8"]]
+ 00bb63e8 ["CALLIND", null, ["register:0:8"]]
- 00bb5414 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb5414 ["INT_ADD", "register:40f0:8", ["const:bb5414:8", "const:4:8"]]
- 00bb5414 ["CALLIND", null, ["register:0:8"]]
+ 00bb6408 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb6408 ["INT_ADD", "register:40f0:8", ["const:bb6408:8", "const:4:8"]]
+ 00bb6408 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5306fc4601d0353434d329c30aaa0f07"></a>

### [`00bb5948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5948.md) → [`00bb693c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb6/00bb693c.md) _ZNSt6__ndk113basic_filebufIcNS_11char_traitsIcEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d280.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5e250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e250.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb5958 ["INT_ADD", "register:40f0:8", ["const:bb5958:8", "const:4:8"]]
- 00bb5958 ["CALL", null, ["callee:00c5e250:8"]]
+ 00bb694c ["INT_ADD", "register:40f0:8", ["const:bb694c:8", "const:4:8"]]
+ 00bb694c ["CALL", null, ["callee:00c5e250:8"]]
~~~


<a id="compare-dea82e4034aaa260671de58122a8d071"></a>

### [`00bb5a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5a5c.md) → [`00bb6a50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb6/00bb6a50.md) _ZNSt6__ndk113basic_filebufIcNS_11char_traitsIcEEE6setbufEPcl

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`00bb5584`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5584.md) [`00bb58ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb58ac.md) [`00c05728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c05728.md) [`00c059e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c05/00c059e0.md) · 呼出先 2件 [`00c5bf10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf10.md) [`00c5bf20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf20.md)
- 新版 呼出元 4件 [`00bb6578`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb6/00bb6578.md) [`00bb68a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb6/00bb68a0.md) [`00c0671c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c0671c.md) [`00c069d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c06/00c069d4.md) · 呼出先 2件 [`00c5cee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cee0.md) [`00c5cef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cef0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb5a94 ["INT_ADD", "register:40f0:8", ["const:bb5a94:8", "const:4:8"]]
- 00bb5a94 ["CALL", null, ["callee:00c5cee0:8"]]
+ 00bb6a88 ["INT_ADD", "register:40f0:8", ["const:bb6a88:8", "const:4:8"]]
+ 00bb6a88 ["CALL", null, ["callee:00c5cee0:8"]]
- 00bb5aa8 ["INT_ADD", "register:40f0:8", ["const:bb5aa8:8", "const:4:8"]]
- 00bb5aa8 ["CALL", null, ["callee:00c5cee0:8"]]
+ 00bb6a9c ["INT_ADD", "register:40f0:8", ["const:bb6a9c:8", "const:4:8"]]
+ 00bb6a9c ["CALL", null, ["callee:00c5cee0:8"]]
- 00bb5afc ["INT_ADD", "register:40f0:8", ["const:bb5afc:8", "const:4:8"]]
- 00bb5afc ["CALL", null, ["callee:00c5cef0:8"]]
+ 00bb6af0 ["INT_ADD", "register:40f0:8", ["const:bb6af0:8", "const:4:8"]]
+ 00bb6af0 ["CALL", null, ["callee:00c5cef0:8"]]
~~~


<a id="compare-43b111fac61dbf9f59c2b151c7495a87"></a>

### [`00bb5b54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5b54.md) → [`00bb6b48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb6/00bb6b48.md) _ZNSt6__ndk113basic_filebufIcNS_11char_traitsIcEEE7seekoffExNS_8ios_base7seekdirEj

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00bb6388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb6388.md) [`00c5d2b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2b0.md) [`00c5d2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2c0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00bb737c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb7/00bb737c.md) [`00c5e280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e280.md) [`00c5e290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e290.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb5b80 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb5b80 ["INT_ADD", "register:40f0:8", ["const:bb5b80:8", "const:4:8"]]
- 00bb5b80 ["CALLIND", null, ["register:0:8"]]
+ 00bb6b74 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb6b74 ["INT_ADD", "register:40f0:8", ["const:bb6b74:8", "const:4:8"]]
+ 00bb6b74 ["CALLIND", null, ["register:0:8"]]
- 00bb5ba8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb5ba8 ["INT_ADD", "register:40f0:8", ["const:bb5ba8:8", "const:4:8"]]
- 00bb5ba8 ["CALLIND", null, ["register:0:8"]]
+ 00bb6b9c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb6b9c ["INT_ADD", "register:40f0:8", ["const:bb6b9c:8", "const:4:8"]]
+ 00bb6b9c ["CALLIND", null, ["register:0:8"]]
- 00bb5bd8 ["INT_ADD", "register:40f0:8", ["const:bb5bd8:8", "const:4:8"]]
- 00bb5bd8 ["CALL", null, ["callee:00c5e280:8"]]
+ 00bb6bcc ["INT_ADD", "register:40f0:8", ["const:bb6bcc:8", "const:4:8"]]
+ 00bb6bcc ["CALL", null, ["callee:00c5e280:8"]]
~~~


<a id="compare-7a277b98bdfe9e9759b4527f648b6532"></a>

### [`00bb5c14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5c14.md) → [`00bb6c08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb6/00bb6c08.md) _ZNSt6__ndk113basic_filebufIcNS_11char_traitsIcEEE7seekposENS_4fposI9mbstate_tEEj

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5d2b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2b0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5e280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e280.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb5c40 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb5c40 ["INT_ADD", "register:40f0:8", ["const:bb5c40:8", "const:4:8"]]
- 00bb5c40 ["CALLIND", null, ["register:0:8"]]
+ 00bb6c34 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb6c34 ["INT_ADD", "register:40f0:8", ["const:bb6c34:8", "const:4:8"]]
+ 00bb6c34 ["CALLIND", null, ["register:0:8"]]
- 00bb5c54 ["INT_ADD", "register:40f0:8", ["const:bb5c54:8", "const:4:8"]]
- 00bb5c54 ["CALL", null, ["callee:00c5e280:8"]]
+ 00bb6c48 ["INT_ADD", "register:40f0:8", ["const:bb6c48:8", "const:4:8"]]
+ 00bb6c48 ["CALL", null, ["callee:00c5e280:8"]]
~~~


<a id="compare-c599b86cab942b9d1ddc01d3e997c525"></a>

### [`00bb5c84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5c84.md) → [`00bb6c78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb6/00bb6c78.md) _ZNSt6__ndk113basic_filebufIcNS_11char_traitsIcEEE4syncEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d260.md) · 呼出先 5件 [`00bb6388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb6388.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a280.md) [`00c5a2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a2f0.md) [`00c5d2b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2b0.md)
- 新版 呼出元 1件 [`00c5e230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e230.md) · 呼出先 5件 [`00bb737c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb7/00bb737c.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b250.md) [`00c5b2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b2c0.md) [`00c5e280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e280.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb5d08 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb5d08 ["INT_ADD", "register:40f0:8", ["const:bb5d08:8", "const:4:8"]]
- 00bb5d08 ["CALLIND", null, ["register:0:8"]]
+ 00bb6cfc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb6cfc ["INT_ADD", "register:40f0:8", ["const:bb6cfc:8", "const:4:8"]]
+ 00bb6cfc ["CALLIND", null, ["register:0:8"]]
- 00bb5d38 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb5d38 ["INT_ADD", "register:40f0:8", ["const:bb5d38:8", "const:4:8"]]
- 00bb5d38 ["CALLIND", null, ["register:0:8"]]
+ 00bb6d2c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb6d2c ["INT_ADD", "register:40f0:8", ["const:bb6d2c:8", "const:4:8"]]
+ 00bb6d2c ["CALLIND", null, ["register:0:8"]]
- 00bb5d58 ["INT_ADD", "register:40f0:8", ["const:bb5d58:8", "const:4:8"]]
- 00bb5d58 ["CALL", null, ["callee:00c5b2c0:8"]]
+ 00bb6d4c ["INT_ADD", "register:40f0:8", ["const:bb6d4c:8", "const:4:8"]]
+ 00bb6d4c ["CALL", null, ["callee:00c5b2c0:8"]]
~~~


<a id="compare-63d652070b69a2143837f5ece3535118"></a>

### [`00bb5e74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5e74.md) → [`00bb6e68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb6/00bb6e68.md) _ZNSt6__ndk113basic_filebufIcNS_11char_traitsIcEEE9underflowEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00bb6388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb6388.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5a150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a150.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00bb737c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb7/00bb737c.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c5b120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b120.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb5f70 ["INT_ADD", "register:40f0:8", ["const:bb5f70:8", "const:4:8"]]
- 00bb5f70 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bb6f64 ["INT_ADD", "register:40f0:8", ["const:bb6f64:8", "const:4:8"]]
+ 00bb6f64 ["CALL", null, ["callee:00c58fe0:8"]]
- 00bb5f98 ["INT_ADD", "register:40f0:8", ["const:bb5f98:8", "const:4:8"]]
- 00bb5f98 ["CALL", null, ["callee:00c5b120:8"]]
+ 00bb6f8c ["INT_ADD", "register:40f0:8", ["const:bb6f8c:8", "const:4:8"]]
+ 00bb6f8c ["CALL", null, ["callee:00c5b120:8"]]
- 00bb5fc8 ["INT_ADD", "register:40f0:8", ["const:bb5fc8:8", "const:4:8"]]
- 00bb5fc8 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bb6fbc ["INT_ADD", "register:40f0:8", ["const:bb6fbc:8", "const:4:8"]]
+ 00bb6fbc ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-83ccf10fef949fb770bd71a701fa5bad"></a>

### [`00bb6150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb6150.md) → [`00bb7144`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb7/00bb7144.md) _ZNSt6__ndk113basic_filebufIcNS_11char_traitsIcEEE8overflowEi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00bb6388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb6388.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a2f0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00bb737c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb7/00bb737c.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b2c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb6244 ["INT_ADD", "register:40f0:8", ["const:bb6244:8", "const:4:8"]]
- 00bb6244 ["CALL", null, ["callee:00c5b2c0:8"]]
+ 00bb7238 ["INT_ADD", "register:40f0:8", ["const:bb7238:8", "const:4:8"]]
+ 00bb7238 ["CALL", null, ["callee:00c5b2c0:8"]]
- 00bb6294 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb6294 ["INT_ADD", "register:40f0:8", ["const:bb6294:8", "const:4:8"]]
- 00bb6294 ["CALLIND", null, ["register:0:8"]]
+ 00bb7288 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb7288 ["INT_ADD", "register:40f0:8", ["const:bb7288:8", "const:4:8"]]
+ 00bb7288 ["CALLIND", null, ["register:0:8"]]
- 00bb62d4 ["INT_ADD", "register:40f0:8", ["const:bb62d4:8", "const:4:8"]]
- 00bb62d4 ["CALL", null, ["callee:00c5b2c0:8"]]
+ 00bb72c8 ["INT_ADD", "register:40f0:8", ["const:bb72c8:8", "const:4:8"]]
+ 00bb72c8 ["CALL", null, ["callee:00c5b2c0:8"]]
~~~


<a id="compare-32faac143b35145180e219e6a55649b3"></a>

### [`00bb6388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb6388.md) → [`00bb737c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb7/00bb737c.md) FUN_00bb737c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`00bb5b54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5b54.md) [`00bb5c84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5c84.md) [`00bb5e74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5e74.md) [`00bb6150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb6150.md) · 呼出先 1件 [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 4件 [`00bb6b48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb6/00bb6b48.md) [`00bb6c78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb6/00bb6c78.md) [`00bb6e68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb6/00bb6e68.md) [`00bb7144`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb7/00bb7144.md) · 呼出先 1件 [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb6390 ["INT_ADD", "register:40f0:8", ["const:bb6390:8", "const:4:8"]]
- 00bb6390 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00bb7384 ["INT_ADD", "register:40f0:8", ["const:bb7384:8", "const:4:8"]]
+ 00bb7384 ["CALL", null, ["callee:00c5c1e0:8"]]
~~~


<a id="compare-fd037105c176ffbe56376ba59ad234c7"></a>

### [`00bb639c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb639c.md) → [`00bb7390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb7/00bb7390.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5e180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e180.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb63b0 ["INT_ADD", "register:40f0:8", ["const:bb63b0:8", "const:4:8"]]
- 00bb63b0 ["CALL", null, ["callee:00c5e180:8"]]
+ 00bb73a4 ["INT_ADD", "register:40f0:8", ["const:bb73a4:8", "const:4:8"]]
+ 00bb73a4 ["CALL", null, ["callee:00c5e180:8"]]
~~~


<a id="compare-f0a082ed5ac86747cc5e5f9de315cd07"></a>

### [`00bb63d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb63d8.md) → [`00bb73cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb7/00bb73cc.md) _ZTv0_n24_NSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5e180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e180.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb63f4 ["INT_ADD", "register:40f0:8", ["const:bb63f4:8", "const:4:8"]]
- 00bb63f4 ["CALL", null, ["callee:00c5e180:8"]]
+ 00bb73e8 ["INT_ADD", "register:40f0:8", ["const:bb73e8:8", "const:4:8"]]
+ 00bb73e8 ["CALL", null, ["callee:00c5e180:8"]]
~~~


<a id="compare-7afcedde6f0d95ee398c4836e7f8798a"></a>

### [`00bb6740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb6740.md) → [`00bb7734`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb7/00bb7734.md) FUN_00bb7734

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bb8c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb8/00bb8c78.md) · 呼出先 2件 [`00c5aba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aba0.md) [`00c5ad30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad30.md)
- 新版 呼出元 1件 [`00bb9c6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb9/00bb9c6c.md) · 呼出先 2件 [`00c5bb70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb70.md) [`00c5bd00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd00.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb6750 ["INT_ADD", "register:40f0:8", ["const:bb6750:8", "const:4:8"]]
- 00bb6750 ["CALL", null, ["callee:00c5bd00:8"]]
+ 00bb7744 ["INT_ADD", "register:40f0:8", ["const:bb7744:8", "const:4:8"]]
+ 00bb7744 ["CALL", null, ["callee:00c5bd00:8"]]
~~~


<a id="compare-db9838d05731d4c4ed8a2fd690ecfee7"></a>

### [`00bb6780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb6780.md) → [`00bb7774`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb7/00bb7774.md) FUN_00bb7774

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bb8c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb8/00bb8c78.md) · 呼出先 2件 [`00c5ad30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad30.md) [`00c5d510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d510.md)
- 新版 呼出元 1件 [`00bb9c6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb9/00bb9c6c.md) · 呼出先 2件 [`00c5bd00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd00.md) [`00c5e4e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e4e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb6790 ["INT_ADD", "register:40f0:8", ["const:bb6790:8", "const:4:8"]]
- 00bb6790 ["CALL", null, ["callee:00c5bd00:8"]]
+ 00bb7784 ["INT_ADD", "register:40f0:8", ["const:bb7784:8", "const:4:8"]]
+ 00bb7784 ["CALL", null, ["callee:00c5bd00:8"]]
~~~


<a id="compare-58b6c47f075879098a57127dbebd4dbb"></a>

### [`00bb6e98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb6e98.md) → [`00bb7e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb7/00bb7e8c.md) _ZN8firebase9messaging20PollableListenerImplD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d450.md) · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab70.md) [`00c5d530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d530.md)
- 新版 呼出元 1件 [`00c5e420`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e420.md) · 呼出先 3件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5bb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb40.md) [`00c5e500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e500.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb6eb4 ["INT_ADD", "register:40f0:8", ["const:bb6eb4:8", "const:4:8"]]
- 00bb6eb4 ["CALL", null, ["callee:00c5e500:8"]]
+ 00bb7ea8 ["INT_ADD", "register:40f0:8", ["const:bb7ea8:8", "const:4:8"]]
+ 00bb7ea8 ["CALL", null, ["callee:00c5e500:8"]]
- 00bb6ec8 ["INT_ADD", "register:40f0:8", ["const:bb6ec8:8", "const:4:8"]]
- 00bb6ec8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00bb7ebc ["INT_ADD", "register:40f0:8", ["const:bb7ebc:8", "const:4:8"]]
+ 00bb7ebc ["CALL", null, ["callee:00c58f50:8"]]
- 00bb6efc ["INT_ADD", "register:40f0:8", ["const:bb6efc:8", "const:4:8"]]
- 00bb6efc ["CALL", null, ["callee:00c58f50:8"]]
+ 00bb7ef0 ["INT_ADD", "register:40f0:8", ["const:bb7ef0:8", "const:4:8"]]
+ 00bb7ef0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-46e58e2c1b1faae0da7f6f6b67c339c0"></a>

### [`00bb6fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb6fb0.md) → [`00bb7fa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb7/00bb7fa4.md) _ZN8firebase9messaging20PollableListenerImpl9OnMessageERKNS0_7MessageE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d440.md) · 呼出先 6件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5d4b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d4b0.md) [`00c5d4c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d4c0.md)
- 新版 呼出元 1件 [`00c5e410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e410.md) · 呼出先 6件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5e480`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e480.md) [`00c5e490`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e490.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb6fd8 ["INT_ADD", "register:40f0:8", ["const:bb6fd8:8", "const:4:8"]]
- 00bb6fd8 ["CALL", null, ["callee:00c5e480:8"]]
+ 00bb7fcc ["INT_ADD", "register:40f0:8", ["const:bb7fcc:8", "const:4:8"]]
+ 00bb7fcc ["CALL", null, ["callee:00c5e480:8"]]
- 00bb6fe0 ["INT_ADD", "register:40f0:8", ["const:bb6fe0:8", "const:4:8"]]
- 00bb6fe0 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bb7fd4 ["INT_ADD", "register:40f0:8", ["const:bb7fd4:8", "const:4:8"]]
+ 00bb7fd4 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bb700c ["INT_ADD", "register:40f0:8", ["const:bb700c:8", "const:4:8"]]
- 00bb700c ["CALL", null, ["callee:00c5e550:8"]]
+ 00bb8000 ["INT_ADD", "register:40f0:8", ["const:bb8000:8", "const:4:8"]]
+ 00bb8000 ["CALL", null, ["callee:00c5e550:8"]]
~~~


<a id="compare-4c536f7c9959463283bdced47e196a91"></a>

### [`00bb70c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb70c4.md) → [`00bb80b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb8/00bb80b8.md) _ZN8firebase9messaging20PollableListenerImpl15OnTokenReceivedEPKc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d3e0.md) · 呼出先 4件 [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md)
- 新版 呼出元 1件 [`00c5e3b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e3b0.md) · 呼出先 4件 [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5c150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c150.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb70dc ["INT_ADD", "register:40f0:8", ["const:bb70dc:8", "const:4:8"]]
- 00bb70dc ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bb80d0 ["INT_ADD", "register:40f0:8", ["const:bb80d0:8", "const:4:8"]]
+ 00bb80d0 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bb70e8 ["INT_ADD", "register:40f0:8", ["const:bb70e8:8", "const:4:8"]]
- 00bb70e8 ["CALL", null, ["callee:00c59080:8"]]
+ 00bb80dc ["INT_ADD", "register:40f0:8", ["const:bb80dc:8", "const:4:8"]]
+ 00bb80dc ["CALL", null, ["callee:00c59080:8"]]
- 00bb70f8 ["INT_ADD", "register:40f0:8", ["const:bb70f8:8", "const:4:8"]]
- 00bb70f8 ["CALL", null, ["callee:00c5c150:8"]]
+ 00bb80ec ["INT_ADD", "register:40f0:8", ["const:bb80ec:8", "const:4:8"]]
+ 00bb80ec ["CALL", null, ["callee:00c5c150:8"]]
~~~


<a id="compare-47a4ac4b3ca45c8f812c049f9be402de"></a>

### [`00bb7138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb7138.md) → [`00bb812c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb8/00bb812c.md) _ZN8firebase9messaging20PollableListenerImpl22OnRegistrationReceivedEPKc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d420.md) · 呼出先 4件 [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md)
- 新版 呼出元 1件 [`00c5e3f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e3f0.md) · 呼出先 4件 [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5c150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c150.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb7150 ["INT_ADD", "register:40f0:8", ["const:bb7150:8", "const:4:8"]]
- 00bb7150 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bb8144 ["INT_ADD", "register:40f0:8", ["const:bb8144:8", "const:4:8"]]
+ 00bb8144 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bb715c ["INT_ADD", "register:40f0:8", ["const:bb715c:8", "const:4:8"]]
- 00bb715c ["CALL", null, ["callee:00c59080:8"]]
+ 00bb8150 ["INT_ADD", "register:40f0:8", ["const:bb8150:8", "const:4:8"]]
+ 00bb8150 ["CALL", null, ["callee:00c59080:8"]]
- 00bb716c ["INT_ADD", "register:40f0:8", ["const:bb716c:8", "const:4:8"]]
- 00bb716c ["CALL", null, ["callee:00c5c150:8"]]
+ 00bb8160 ["INT_ADD", "register:40f0:8", ["const:bb8160:8", "const:4:8"]]
+ 00bb8160 ["CALL", null, ["callee:00c5c150:8"]]
~~~


<a id="compare-dfaddf95232e741107fde88a58d4d601"></a>

### [`00bb71ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb71ac.md) → [`00bb81a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb8/00bb81a0.md) _ZN8firebase9messaging20PollableListenerImpl24OnUnregistrationReceivedEPKc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d430.md) · 呼出先 4件 [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md)
- 新版 呼出元 1件 [`00c5e400`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e400.md) · 呼出先 4件 [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5c150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c150.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb71c4 ["INT_ADD", "register:40f0:8", ["const:bb71c4:8", "const:4:8"]]
- 00bb71c4 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bb81b8 ["INT_ADD", "register:40f0:8", ["const:bb81b8:8", "const:4:8"]]
+ 00bb81b8 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bb71d0 ["INT_ADD", "register:40f0:8", ["const:bb71d0:8", "const:4:8"]]
- 00bb71d0 ["CALL", null, ["callee:00c59080:8"]]
+ 00bb81c4 ["INT_ADD", "register:40f0:8", ["const:bb81c4:8", "const:4:8"]]
+ 00bb81c4 ["CALL", null, ["callee:00c59080:8"]]
- 00bb71e0 ["INT_ADD", "register:40f0:8", ["const:bb71e0:8", "const:4:8"]]
- 00bb71e0 ["CALL", null, ["callee:00c5c150:8"]]
+ 00bb81d4 ["INT_ADD", "register:40f0:8", ["const:bb81d4:8", "const:4:8"]]
+ 00bb81d4 ["CALL", null, ["callee:00c5c150:8"]]
~~~


<a id="compare-efa11772778fc592014ce58e2d373f74"></a>

### [`00bb7310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb7310.md) → [`00bb8304`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb8/00bb8304.md) _ZN8firebase9messaging16PollableListener21PollRegistrationTokenEPb

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5d410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d410.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5e3e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e3e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb7334 ["INT_ADD", "register:40f0:8", ["const:bb7334:8", "const:4:8"]]
- 00bb7334 ["CALL", null, ["callee:00c5e3e0:8"]]
+ 00bb8328 ["INT_ADD", "register:40f0:8", ["const:bb8328:8", "const:4:8"]]
+ 00bb8328 ["CALL", null, ["callee:00c5e3e0:8"]]
~~~


<a id="compare-8b9dfede1fd121e061256e9ea071abb0"></a>

### [`00bb7368`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb7368.md) → [`00bb835c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb8/00bb835c.md) _ZN8firebase9messaging20PollableListenerImpl21PollRegistrationTokenEPNSt6__ndk112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d410.md) · 呼出先 3件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md)
- 新版 呼出元 1件 [`00c5e3e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e3e0.md) · 呼出先 3件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5c150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c150.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb7380 ["INT_ADD", "register:40f0:8", ["const:bb7380:8", "const:4:8"]]
- 00bb7380 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bb8374 ["INT_ADD", "register:40f0:8", ["const:bb8374:8", "const:4:8"]]
+ 00bb8374 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bb73b8 ["INT_ADD", "register:40f0:8", ["const:bb73b8:8", "const:4:8"]]
- 00bb73b8 ["CALL", null, ["callee:00c5c150:8"]]
+ 00bb83ac ["INT_ADD", "register:40f0:8", ["const:bb83ac:8", "const:4:8"]]
+ 00bb83ac ["CALL", null, ["callee:00c5c150:8"]]
- 00bb73f0 ["INT_ADD", "register:40f0:8", ["const:bb73f0:8", "const:4:8"]]
- 00bb73f0 ["CALL", null, ["callee:00c5bab0:8"]]
+ 00bb83e4 ["INT_ADD", "register:40f0:8", ["const:bb83e4:8", "const:4:8"]]
+ 00bb83e4 ["CALL", null, ["callee:00c5bab0:8"]]
~~~


<a id="compare-7f7edad73ad5f538ac3b9ef95530a166"></a>

### [`00bb7424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb7424.md) → [`00bb8418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb8/00bb8418.md) _ZN8firebase9messaging16PollableListener16PollRegistrationEPb

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5d3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d3f0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5e3c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e3c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb7448 ["INT_ADD", "register:40f0:8", ["const:bb7448:8", "const:4:8"]]
- 00bb7448 ["CALL", null, ["callee:00c5e3c0:8"]]
+ 00bb843c ["INT_ADD", "register:40f0:8", ["const:bb843c:8", "const:4:8"]]
+ 00bb843c ["CALL", null, ["callee:00c5e3c0:8"]]
~~~


<a id="compare-076e81d1a19c0ede006f245efe1d6650"></a>

### [`00bb747c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb747c.md) → [`00bb8470`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb8/00bb8470.md) _ZN8firebase9messaging20PollableListenerImpl16PollRegistrationEPNSt6__ndk112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d3f0.md) · 呼出先 3件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md)
- 新版 呼出元 1件 [`00c5e3c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e3c0.md) · 呼出先 3件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5c150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c150.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb7494 ["INT_ADD", "register:40f0:8", ["const:bb7494:8", "const:4:8"]]
- 00bb7494 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bb8488 ["INT_ADD", "register:40f0:8", ["const:bb8488:8", "const:4:8"]]
+ 00bb8488 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bb74cc ["INT_ADD", "register:40f0:8", ["const:bb74cc:8", "const:4:8"]]
- 00bb74cc ["CALL", null, ["callee:00c5c150:8"]]
+ 00bb84c0 ["INT_ADD", "register:40f0:8", ["const:bb84c0:8", "const:4:8"]]
+ 00bb84c0 ["CALL", null, ["callee:00c5c150:8"]]
- 00bb7504 ["INT_ADD", "register:40f0:8", ["const:bb7504:8", "const:4:8"]]
- 00bb7504 ["CALL", null, ["callee:00c5bab0:8"]]
+ 00bb84f8 ["INT_ADD", "register:40f0:8", ["const:bb84f8:8", "const:4:8"]]
+ 00bb84f8 ["CALL", null, ["callee:00c5bab0:8"]]
~~~


<a id="compare-74d10322e5c487fc4ab942d46549199d"></a>

### [`00bb7538`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb7538.md) → [`00bb852c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb8/00bb852c.md) _ZN8firebase9messaging16PollableListener18PollUnregistrationEPb

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5d400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d400.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5e3d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e3d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb755c ["INT_ADD", "register:40f0:8", ["const:bb755c:8", "const:4:8"]]
- 00bb755c ["CALL", null, ["callee:00c5e3d0:8"]]
+ 00bb8550 ["INT_ADD", "register:40f0:8", ["const:bb8550:8", "const:4:8"]]
+ 00bb8550 ["CALL", null, ["callee:00c5e3d0:8"]]
~~~


<a id="compare-4be2556b0371742796f1edc4bf9af821"></a>

### [`00bb7590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb7590.md) → [`00bb8584`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb8/00bb8584.md) _ZN8firebase9messaging20PollableListenerImpl18PollUnregistrationEPNSt6__ndk112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d400.md) · 呼出先 3件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md)
- 新版 呼出元 1件 [`00c5e3d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e3d0.md) · 呼出先 3件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5c150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c150.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb75a8 ["INT_ADD", "register:40f0:8", ["const:bb75a8:8", "const:4:8"]]
- 00bb75a8 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bb859c ["INT_ADD", "register:40f0:8", ["const:bb859c:8", "const:4:8"]]
+ 00bb859c ["CALL", null, ["callee:00c5baa0:8"]]
- 00bb75e0 ["INT_ADD", "register:40f0:8", ["const:bb75e0:8", "const:4:8"]]
- 00bb75e0 ["CALL", null, ["callee:00c5c150:8"]]
+ 00bb85d4 ["INT_ADD", "register:40f0:8", ["const:bb85d4:8", "const:4:8"]]
+ 00bb85d4 ["CALL", null, ["callee:00c5c150:8"]]
- 00bb7618 ["INT_ADD", "register:40f0:8", ["const:bb7618:8", "const:4:8"]]
- 00bb7618 ["CALL", null, ["callee:00c5bab0:8"]]
+ 00bb860c ["INT_ADD", "register:40f0:8", ["const:bb860c:8", "const:4:8"]]
+ 00bb860c ["CALL", null, ["callee:00c5bab0:8"]]
~~~


<a id="compare-6bcef854398dd787510e197d69367105"></a>

### [`00bb7714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb7714.md) → [`00bb8708`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb8/00bb8708.md) _ZNSt6__ndk112__deque_baseIN8firebase9messaging7MessageENS_9allocatorIS3_EEE5clearEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d530.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d4c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d4c0.md)
- 新版 呼出元 1件 [`00c5e500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e500.md) · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5e490`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e490.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb7794 ["INT_ADD", "register:40f0:8", ["const:bb7794:8", "const:4:8"]]
- 00bb7794 ["CALL", null, ["callee:00c5e490:8"]]
+ 00bb8788 ["INT_ADD", "register:40f0:8", ["const:bb8788:8", "const:4:8"]]
+ 00bb8788 ["CALL", null, ["callee:00c5e490:8"]]
- 00bb77d8 ["INT_ADD", "register:40f0:8", ["const:bb77d8:8", "const:4:8"]]
- 00bb77d8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00bb87cc ["INT_ADD", "register:40f0:8", ["const:bb87cc:8", "const:4:8"]]
+ 00bb87cc ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-a9fc866d72465e3b330c74e2a7052373"></a>

### [`00bb782c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb782c.md) → [`00bb8820`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb8/00bb8820.md) _ZN8firebase9messaging7MessageD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d4c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d4c0.md) · 呼出先 3件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d3a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d3a0.md)
- 新版 呼出元 1件 [`00c5e490`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e490.md) · 呼出先 3件 [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5e370`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e370.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb7848 ["INT_ADD", "register:40f0:8", ["const:bb7848:8", "const:4:8"]]
- 00bb7848 ["CALL", null, ["callee:00c5e370:8"]]
+ 00bb883c ["INT_ADD", "register:40f0:8", ["const:bb883c:8", "const:4:8"]]
+ 00bb883c ["CALL", null, ["callee:00c5e370:8"]]
- 00bb7850 ["INT_ADD", "register:40f0:8", ["const:bb7850:8", "const:4:8"]]
- 00bb7850 ["CALL", null, ["callee:00c58f50:8"]]
+ 00bb8844 ["INT_ADD", "register:40f0:8", ["const:bb8844:8", "const:4:8"]]
+ 00bb8844 ["CALL", null, ["callee:00c58f50:8"]]
- 00bb7898 ["INT_ADD", "register:40f0:8", ["const:bb7898:8", "const:4:8"]]
- 00bb7898 ["CALL", null, ["callee:00c58f50:8"]]
+ 00bb888c ["INT_ADD", "register:40f0:8", ["const:bb888c:8", "const:4:8"]]
+ 00bb888c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-1d549574e4a9e709071a5eaac2dc8500"></a>

### [`00bb7970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb7970.md) → [`00bb8964`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb8/00bb8964.md) _ZN8firebase9messaging12NotificationD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d3a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d3a0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00c5e370`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e370.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb7998 ["INT_ADD", "register:40f0:8", ["const:bb7998:8", "const:4:8"]]
- 00bb7998 ["CALL", null, ["callee:00c58f50:8"]]
+ 00bb898c ["INT_ADD", "register:40f0:8", ["const:bb898c:8", "const:4:8"]]
+ 00bb898c ["CALL", null, ["callee:00c58f50:8"]]
- 00bb79a0 ["INT_ADD", "register:40f0:8", ["const:bb79a0:8", "const:4:8"]]
- 00bb79a0 ["CALL", null, ["callee:00c58f50:8"]]
+ 00bb8994 ["INT_ADD", "register:40f0:8", ["const:bb8994:8", "const:4:8"]]
+ 00bb8994 ["CALL", null, ["callee:00c58f50:8"]]
- 00bb79dc ["INT_ADD", "register:40f0:8", ["const:bb79dc:8", "const:4:8"]]
- 00bb79dc ["CALL", null, ["callee:00c58f50:8"]]
+ 00bb89d0 ["INT_ADD", "register:40f0:8", ["const:bb89d0:8", "const:4:8"]]
+ 00bb89d0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-14c3ca11b59de0ed23eda530ca880e02"></a>

### [`00bb7b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb7b48.md) → [`00bb8b3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb8/00bb8b3c.md) _ZN8firebase9messaging7MessageC2ERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d4b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d4b0.md) · 呼出先 1件 [`00c5d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d4d0.md)
- 新版 呼出元 1件 [`00c5e480`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e480.md) · 呼出先 1件 [`00c5e4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e4a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb7bb8 ["INT_ADD", "register:40f0:8", ["const:bb7bb8:8", "const:4:8"]]
- 00bb7bb8 ["CALL", null, ["callee:00c5e4a0:8"]]
+ 00bb8bac ["INT_ADD", "register:40f0:8", ["const:bb8bac:8", "const:4:8"]]
+ 00bb8bac ["CALL", null, ["callee:00c5e4a0:8"]]
~~~


<a id="compare-8af222353c2558815b69855fa570b0e7"></a>

### [`00bb7cec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb7cec.md) → [`00bb8ce0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb8/00bb8ce0.md) _ZN8firebase9messaging7MessageaSERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d4d0.md) · 呼出先 7件 [`0053b7bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053b/0053b7bc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md) [`00c5d390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d390.md)
- 新版 呼出元 1件 [`00c5e4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e4a0.md) · 呼出先 7件 [`0053badc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053b/0053badc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5c150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c150.md) [`00c5e360`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e360.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb7d28 ["INT_ADD", "register:40f0:8", ["const:bb7d28:8", "const:4:8"]]
- 00bb7d28 ["CALL", null, ["callee:00c5c150:8"]]
+ 00bb8d1c ["INT_ADD", "register:40f0:8", ["const:bb8d1c:8", "const:4:8"]]
+ 00bb8d1c ["CALL", null, ["callee:00c5c150:8"]]
- 00bb7d4c ["INT_ADD", "register:40f0:8", ["const:bb7d4c:8", "const:4:8"]]
- 00bb7d4c ["CALL", null, ["callee:00c5c150:8"]]
+ 00bb8d40 ["INT_ADD", "register:40f0:8", ["const:bb8d40:8", "const:4:8"]]
+ 00bb8d40 ["CALL", null, ["callee:00c5c150:8"]]
- 00bb7d70 ["INT_ADD", "register:40f0:8", ["const:bb7d70:8", "const:4:8"]]
- 00bb7d70 ["CALL", null, ["callee:00c5c150:8"]]
+ 00bb8d64 ["INT_ADD", "register:40f0:8", ["const:bb8d64:8", "const:4:8"]]
+ 00bb8d64 ["CALL", null, ["callee:00c5c150:8"]]
~~~


<a id="compare-67ea87ed7302f7f0dc74f71cf9f58d5a"></a>

### [`00bb7f1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb7f1c.md) → [`00bb8f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb8/00bb8f10.md) _ZN8firebase9messaging12NotificationC2ERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d390.md) · 呼出先 1件 [`00c5d3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d3b0.md)
- 新版 呼出元 1件 [`00c5e360`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e360.md) · 呼出先 1件 [`00c5e380`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e380.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb7f5c ["INT_ADD", "register:40f0:8", ["const:bb7f5c:8", "const:4:8"]]
- 00bb7f5c ["CALL", null, ["callee:00c5e380:8"]]
+ 00bb8f50 ["INT_ADD", "register:40f0:8", ["const:bb8f50:8", "const:4:8"]]
+ 00bb8f50 ["CALL", null, ["callee:00c5e380:8"]]
~~~


<a id="compare-18aa2d26869d1b17595d3207c6aa1378"></a>

### [`00bb810c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb8/00bb810c.md) → [`00bb9100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb9/00bb9100.md) _ZNSt6__ndk16vectorIhNS_9allocatorIhEEE6assignIPhEENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIhNS_15iterator_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d590.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5ade0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ade0.md)
- 新版 呼出元 1件 [`00c5e560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e560.md) · 呼出先 5件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5bdb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb8150 ["INT_ADD", "register:40f0:8", ["const:bb8150:8", "const:4:8"]]
- 00bb8150 ["CALL", null, ["callee:00c58f50:8"]]
+ 00bb9144 ["INT_ADD", "register:40f0:8", ["const:bb9144:8", "const:4:8"]]
+ 00bb9144 ["CALL", null, ["callee:00c58f50:8"]]
- 00bb81ac ["INT_ADD", "register:40f0:8", ["const:bb81ac:8", "const:4:8"]]
- 00bb81ac ["CALL", null, ["callee:00c58fe0:8"]]
+ 00bb91a0 ["INT_ADD", "register:40f0:8", ["const:bb91a0:8", "const:4:8"]]
+ 00bb91a0 ["CALL", null, ["callee:00c58fe0:8"]]
- 00bb81d4 ["INT_ADD", "register:40f0:8", ["const:bb81d4:8", "const:4:8"]]
- 00bb81d4 ["CALL", null, ["callee:00c590a0:8"]]
+ 00bb91c8 ["INT_ADD", "register:40f0:8", ["const:bb91c8:8", "const:4:8"]]
+ 00bb91c8 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-ed53f062f320656488ea9d724fb8b8b3"></a>

### [`00bb823c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb8/00bb823c.md) → [`00bb9230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb9/00bb9230.md) _ZN8firebase9messaging12NotificationaSERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d3b0.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md) [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md) [`00c5d100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d100.md)
- 新版 呼出元 1件 [`00c5e380`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e380.md) · 呼出先 5件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5c150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c150.md) [`00c5c650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c650.md) [`00c5e0d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e0d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb8278 ["INT_ADD", "register:40f0:8", ["const:bb8278:8", "const:4:8"]]
- 00bb8278 ["CALL", null, ["callee:00c5c150:8"]]
+ 00bb926c ["INT_ADD", "register:40f0:8", ["const:bb926c:8", "const:4:8"]]
+ 00bb926c ["CALL", null, ["callee:00c5c150:8"]]
- 00bb829c ["INT_ADD", "register:40f0:8", ["const:bb829c:8", "const:4:8"]]
- 00bb829c ["CALL", null, ["callee:00c5c150:8"]]
+ 00bb9290 ["INT_ADD", "register:40f0:8", ["const:bb9290:8", "const:4:8"]]
+ 00bb9290 ["CALL", null, ["callee:00c5c150:8"]]
- 00bb82c0 ["INT_ADD", "register:40f0:8", ["const:bb82c0:8", "const:4:8"]]
- 00bb82c0 ["CALL", null, ["callee:00c5c150:8"]]
+ 00bb92b4 ["INT_ADD", "register:40f0:8", ["const:bb92b4:8", "const:4:8"]]
+ 00bb92b4 ["CALL", null, ["callee:00c5c150:8"]]
~~~


<a id="compare-39d4b4a86550009aa6930eb982d7ae42"></a>

### [`00bb96d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb9/00bb96d4.md) → [`00bba6c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bba/00bba6c8.md) _ZN8firebase9messaging10FileLockerC2EPKc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5d650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d650.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5e620`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e620.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb96f4 ["INT_ADD", "register:40f0:8", ["const:bb96f4:8", "const:4:8"]]
- 00bb96f4 ["CALL", null, ["callee:00c5e620:8"]]
+ 00bba6e8 ["INT_ADD", "register:40f0:8", ["const:bba6e8:8", "const:4:8"]]
+ 00bba6e8 ["CALL", null, ["callee:00c5e620:8"]]
~~~


<a id="compare-4722b768005a7160228ec861ebf2b6e5"></a>

### [`00bbd4fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbd/00bbd4fc.md) → [`00bbe4f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbe/00bbe4f0.md) FUN_00bbe4f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00bbb738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbb/00bbb738.md) [`00bbbcdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbb/00bbbcdc.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5ae70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae70.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)
- 新版 呼出元 2件 [`00bbc72c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbc/00bbc72c.md) [`00bbccd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbc/00bbccd0.md) · 呼出先 6件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb30.md) [`00c5be40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5be40.md) [`00c5bea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bea0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bbd534 ["INT_ADD", "register:40f0:8", ["const:bbd534:8", "const:4:8"]]
- 00bbd534 ["CALL", null, ["callee:00c5e310:8"]]
+ 00bbe528 ["INT_ADD", "register:40f0:8", ["const:bbe528:8", "const:4:8"]]
+ 00bbe528 ["CALL", null, ["callee:00c5e310:8"]]
- 00bbd544 ["INT_ADD", "register:40f0:8", ["const:bbd544:8", "const:4:8"]]
- 00bbd544 ["CALL", null, ["callee:00c5bea0:8"]]
+ 00bbe538 ["INT_ADD", "register:40f0:8", ["const:bbe538:8", "const:4:8"]]
+ 00bbe538 ["CALL", null, ["callee:00c5bea0:8"]]
- 00bbd55c ["INT_ADD", "register:40f0:8", ["const:bbd55c:8", "const:4:8"]]
- 00bbd55c ["CALL", null, ["callee:00c5be40:8"]]
+ 00bbe550 ["INT_ADD", "register:40f0:8", ["const:bbe550:8", "const:4:8"]]
+ 00bbe550 ["CALL", null, ["callee:00c5be40:8"]]
~~~


<a id="compare-16e79b18999fe0527547bbe14488ee2b"></a>

### [`00bbd5b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbd/00bbd5b8.md) → [`00bbe5ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbe/00bbe5ac.md) _ZNSt6__ndk16vectorINS_4pairINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN8firebase16SafeFutureHandleIvEEEENS5_ISB_EEE21__push

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d6a0.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5ade0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ade0.md) [`00c5bd30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bd30.md)
- 新版 呼出元 1件 [`00c5e670`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e670.md) · 呼出先 5件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb30.md) [`00c5bdb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdb0.md) [`00c5cd00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5cd00.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bbd640 ["INT_ADD", "register:40f0:8", ["const:bbd640:8", "const:4:8"]]
- 00bbd640 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bbe634 ["INT_ADD", "register:40f0:8", ["const:bbe634:8", "const:4:8"]]
+ 00bbe634 ["CALL", null, ["callee:00c58f30:8"]]
- 00bbd670 ["INT_ADD", "register:40f0:8", ["const:bbd670:8", "const:4:8"]]
- 00bbd670 ["CALL", null, ["callee:00c5cd00:8"]]
+ 00bbe664 ["INT_ADD", "register:40f0:8", ["const:bbe664:8", "const:4:8"]]
+ 00bbe664 ["CALL", null, ["callee:00c5cd00:8"]]
- 00bbd6b4 ["INT_ADD", "register:40f0:8", ["const:bbd6b4:8", "const:4:8"]]
- 00bbd6b4 ["CALL", null, ["callee:00c5cd00:8"]]
+ 00bbe6a8 ["INT_ADD", "register:40f0:8", ["const:bbe6a8:8", "const:4:8"]]
+ 00bbe6a8 ["CALL", null, ["callee:00c5cd00:8"]]
~~~


<a id="compare-eeebfd69bbc129b03864e4ad23ca4166"></a>

### [`00bbea58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbe/00bbea58.md) → [`00bbfa4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbf/00bbfa4c.md) _ZNSt6__ndk16vectorIhNS_9allocatorIhEEE6assignIN11flatbuffers14VectorIteratorIhhPKhjEEEENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valu

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d640.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ade0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ade0.md)
- 新版 呼出元 1件 [`00c5e610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e610.md) · 呼出先 3件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5bdb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bbea9c ["INT_ADD", "register:40f0:8", ["const:bbea9c:8", "const:4:8"]]
- 00bbea9c ["CALL", null, ["callee:00c58f50:8"]]
+ 00bbfa90 ["INT_ADD", "register:40f0:8", ["const:bbfa90:8", "const:4:8"]]
+ 00bbfa90 ["CALL", null, ["callee:00c58f50:8"]]
- 00bbeb00 ["INT_ADD", "register:40f0:8", ["const:bbeb00:8", "const:4:8"]]
- 00bbeb00 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bbfaf4 ["INT_ADD", "register:40f0:8", ["const:bbfaf4:8", "const:4:8"]]
+ 00bbfaf4 ["CALL", null, ["callee:00c58f30:8"]]
- 00bbecb4 ["INT_ADD", "register:40f0:8", ["const:bbecb4:8", "const:4:8"]]
- 00bbecb4 ["CALL", null, ["callee:00c5bdb0:8"]]
+ 00bbfca8 ["INT_ADD", "register:40f0:8", ["const:bbfca8:8", "const:4:8"]]
+ 00bbfca8 ["CALL", null, ["callee:00c5bdb0:8"]]
~~~


<a id="compare-a726f899b1779e46eddadf8d2434c1b2"></a>

### [`00bbeec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbe/00bbeec8.md) → [`00bbfebc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbf/00bbfebc.md) _ZNK3com6google8firebase9messaging3cpp17SerializedMessage6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d5b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d5b0.md) · 呼出先 2件 [`00c5d5c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d5c0.md) [`00c5d600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d600.md)
- 新版 呼出元 1件 [`00c5e580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e580.md) · 呼出先 2件 [`00c5e590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e590.md) [`00c5e5d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e5d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bbf334 ["INT_ADD", "register:40f0:8", ["const:bbf334:8", "const:4:8"]]
- 00bbf334 ["CALL", null, ["callee:00c5e5d0:8"]]
+ 00bc0328 ["INT_ADD", "register:40f0:8", ["const:bc0328:8", "const:4:8"]]
+ 00bc0328 ["CALL", null, ["callee:00c5e5d0:8"]]
- 00bbf9c4 ["INT_ADD", "register:40f0:8", ["const:bbf9c4:8", "const:4:8"]]
- 00bbf9c4 ["CALL", null, ["callee:00c5e590:8"]]
+ 00bc09b8 ["INT_ADD", "register:40f0:8", ["const:bc09b8:8", "const:4:8"]]
+ 00bc09b8 ["CALL", null, ["callee:00c5e590:8"]]
~~~


<a id="compare-b38a40c020077aa4becd772ff1a81f53"></a>

### [`00bc1140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc1140.md) → [`00bc2134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc2134.md) _ZNSt6__ndk16vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEE8__appendEm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d630.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ade0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ade0.md)
- 新版 呼出元 1件 [`00c5e600`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e600.md) · 呼出先 3件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5bdb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc11dc ["INT_ADD", "register:40f0:8", ["const:bc11dc:8", "const:4:8"]]
- 00bc11dc ["CALL", null, ["callee:00c58f30:8"]]
+ 00bc21d0 ["INT_ADD", "register:40f0:8", ["const:bc21d0:8", "const:4:8"]]
+ 00bc21d0 ["CALL", null, ["callee:00c58f30:8"]]
- 00bc12c8 ["INT_ADD", "register:40f0:8", ["const:bc12c8:8", "const:4:8"]]
- 00bc12c8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00bc22bc ["INT_ADD", "register:40f0:8", ["const:bc22bc:8", "const:4:8"]]
+ 00bc22bc ["CALL", null, ["callee:00c58f50:8"]]
- 00bc1304 ["INT_ADD", "register:40f0:8", ["const:bc1304:8", "const:4:8"]]
- 00bc1304 ["CALL", null, ["callee:00c5bdb0:8"]]
+ 00bc22f8 ["INT_ADD", "register:40f0:8", ["const:bc22f8:8", "const:4:8"]]
+ 00bc22f8 ["CALL", null, ["callee:00c5bdb0:8"]]
~~~


<a id="compare-c6c88bb4e584de0242d5f1711b70ea0f"></a>

### [`00bc1884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc1884.md) → [`00bc2878`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc2878.md) _ZN8firebase13remote_config12RemoteConfigD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5d780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d780.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5e750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e750.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc188c ["INT_ADD", "register:40f0:8", ["const:bc188c:8", "const:4:8"]]
- 00bc188c ["CALL", null, ["callee:00c5e750:8"]]
+ 00bc2880 ["INT_ADD", "register:40f0:8", ["const:bc2880:8", "const:4:8"]]
+ 00bc2880 ["CALL", null, ["callee:00c5e750:8"]]
~~~


<a id="compare-338dac01e975d5a2c75fa496beda5e88"></a>

### [`00bc18cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc18cc.md) → [`00bc28c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc28c0.md) _ZN8firebase13remote_config12RemoteConfig5FetchEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5d820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d820.md) [`00c5d8b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d8b0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5e7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e7f0.md) [`00c5e880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e880.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc18e4 ["INT_ADD", "register:40f0:8", ["const:bc18e4:8", "const:4:8"]]
- 00bc18e4 ["CALL", null, ["callee:00c5e7f0:8"]]
+ 00bc28d8 ["INT_ADD", "register:40f0:8", ["const:bc28d8:8", "const:4:8"]]
+ 00bc28d8 ["CALL", null, ["callee:00c5e7f0:8"]]
~~~


<a id="compare-2d55e7887b9291beb15c57f3250520eb"></a>

### [`00bc19f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc19f4.md) → [`00bc29e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc29e8.md) _ZN8firebase13remote_config12RemoteConfig25AddOnConfigUpdateListenerENSt6__ndk18functionIFvONS0_12ConfigUpdateENS0_17RemoteConfigErrorEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5d860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d860.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5e830`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e830.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc1a38 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc1a38 ["INT_ADD", "register:40f0:8", ["const:bc1a38:8", "const:4:8"]]
- 00bc1a38 ["CALLIND", null, ["register:0:8"]]
+ 00bc2a2c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bc2a2c ["INT_ADD", "register:40f0:8", ["const:bc2a2c:8", "const:4:8"]]
+ 00bc2a2c ["CALLIND", null, ["register:0:8"]]
- 00bc1a60 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc1a60 ["INT_ADD", "register:40f0:8", ["const:bc1a60:8", "const:4:8"]]
- 00bc1a60 ["CALLIND", null, ["register:0:8"]]
+ 00bc2a54 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bc2a54 ["INT_ADD", "register:40f0:8", ["const:bc2a54:8", "const:4:8"]]
+ 00bc2a54 ["CALLIND", null, ["register:0:8"]]
- 00bc1a74 ["INT_ADD", "register:40f0:8", ["const:bc1a74:8", "const:4:8"]]
- 00bc1a74 ["CALL", null, ["callee:00c5e830:8"]]
+ 00bc2a68 ["INT_ADD", "register:40f0:8", ["const:bc2a68:8", "const:4:8"]]
+ 00bc2a68 ["CALL", null, ["callee:00c5e830:8"]]
~~~


<a id="compare-cdee0bcef8d220c917aebbf00db67f59"></a>

### [`00bc1b34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc1b34.md) → [`00bc2b28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc2b28.md) _ZNSt6__ndk16__treeINS_12__value_typeIPN8firebase3AppEPNS2_13remote_config12RemoteConfigEEENS_19__map_value_compareIS4_S8_NS_4lessIS4_EELb1E

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d980.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d980.md)
- 新版 呼出元 1件 [`00c5e950`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e950.md) · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5e950`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e950.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc1b50 ["INT_ADD", "register:40f0:8", ["const:bc1b50:8", "const:4:8"]]
- 00bc1b50 ["CALL", null, ["callee:00c5e950:8"]]
+ 00bc2b44 ["INT_ADD", "register:40f0:8", ["const:bc2b44:8", "const:4:8"]]
+ 00bc2b44 ["CALL", null, ["callee:00c5e950:8"]]
- 00bc1b5c ["INT_ADD", "register:40f0:8", ["const:bc1b5c:8", "const:4:8"]]
- 00bc1b5c ["CALL", null, ["callee:00c5e950:8"]]
+ 00bc2b50 ["INT_ADD", "register:40f0:8", ["const:bc2b50:8", "const:4:8"]]
+ 00bc2b50 ["CALL", null, ["callee:00c5e950:8"]]
~~~


<a id="compare-d4e704de01df3b029fa457312d251a0c"></a>

### [`00bc48a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc48a0.md) → [`00bc5894`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc5/00bc5894.md) _ZNSt6__ndk16vectorIN8firebase8internal12EmbeddedFileENS_9allocatorIS3_EEEC2ERKS6_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5da40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5da40.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5ade0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ade0.md)
- 新版 呼出元 1件 [`00c5ea10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ea10.md) · 呼出先 3件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5bdb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc48f0 ["INT_ADD", "register:40f0:8", ["const:bc48f0:8", "const:4:8"]]
- 00bc48f0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bc58e4 ["INT_ADD", "register:40f0:8", ["const:bc58e4:8", "const:4:8"]]
+ 00bc58e4 ["CALL", null, ["callee:00c58f30:8"]]
- 00bc492c ["INT_ADD", "register:40f0:8", ["const:bc492c:8", "const:4:8"]]
- 00bc492c ["CALL", null, ["callee:00c590a0:8"]]
+ 00bc5920 ["INT_ADD", "register:40f0:8", ["const:bc5920:8", "const:4:8"]]
+ 00bc5920 ["CALL", null, ["callee:00c590a0:8"]]
- 00bc4950 ["INT_ADD", "register:40f0:8", ["const:bc4950:8", "const:4:8"]]
- 00bc4950 ["CALL", null, ["callee:00c5bdb0:8"]]
+ 00bc5944 ["INT_ADD", "register:40f0:8", ["const:bc5944:8", "const:4:8"]]
+ 00bc5944 ["CALL", null, ["callee:00c5bdb0:8"]]
~~~


<a id="compare-74a709e6304e4f3383cda1f186166262"></a>

### [`00bc4974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc4974.md) → [`00bc5968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc5/00bc5968.md) _ZN8firebase8internal18ReferenceCountLockINS0_14ReferenceCountEED2Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5da00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5da00.md) · 呼出先 2件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)
- 新版 呼出元 1件 [`00c5e9d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e9d0.md) · 呼出先 2件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc4994 ["INT_ADD", "register:40f0:8", ["const:bc4994:8", "const:4:8"]]
- 00bc4994 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bc5988 ["INT_ADD", "register:40f0:8", ["const:bc5988:8", "const:4:8"]]
+ 00bc5988 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bc49ac ["INT_ADD", "register:40f0:8", ["const:bc49ac:8", "const:4:8"]]
- 00bc49ac ["CALL", null, ["callee:00c5bab0:8"]]
+ 00bc59a0 ["INT_ADD", "register:40f0:8", ["const:bc59a0:8", "const:4:8"]]
+ 00bc59a0 ["CALL", null, ["callee:00c5bab0:8"]]
- 00bc49b4 ["INT_ADD", "register:40f0:8", ["const:bc49b4:8", "const:4:8"]]
- 00bc49b4 ["CALL", null, ["callee:00c5bab0:8"]]
+ 00bc59a8 ["INT_ADD", "register:40f0:8", ["const:bc59a8:8", "const:4:8"]]
+ 00bc59a8 ["CALL", null, ["callee:00c5bab0:8"]]
~~~


<a id="compare-8a54a9ca0e5575f5feb3abb92ff409af"></a>

### [`00bc49e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc49e4.md) → [`00bc59d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc5/00bc59d8.md) FUN_00bc59d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc4a30 ["INT_ADD", "register:40f0:8", ["const:bc4a30:8", "const:4:8"]]
- 00bc4a30 ["CALL", null, ["callee:00c58f50:8"]]
+ 00bc5a24 ["INT_ADD", "register:40f0:8", ["const:bc5a24:8", "const:4:8"]]
+ 00bc5a24 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-2f32ae0019dc3e47cabd345180ad71d2"></a>

### [`00bc4a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc4a68.md) → [`00bc5a5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc5/00bc5a5c.md) _ZN8firebase13remote_config8internal20RemoteConfigInternalD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d950.md) · 呼出先 7件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab70.md) [`00c5ad00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad00.md) [`00c5ad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad20.md) [`00c5afd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afd0.md)
- 新版 呼出元 1件 [`00c5e920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e920.md) · 呼出先 7件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5bb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb40.md) [`00c5bcd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bcd0.md) [`00c5bcf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bcf0.md) [`00c5bfa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfa0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc4a84 ["INT_ADD", "register:40f0:8", ["const:bc4a84:8", "const:4:8"]]
- 00bc4a84 ["CALL", null, ["callee:00c5c830:8"]]
+ 00bc5a78 ["INT_ADD", "register:40f0:8", ["const:bc5a78:8", "const:4:8"]]
+ 00bc5a78 ["CALL", null, ["callee:00c5c830:8"]]
- 00bc4a8c ["INT_ADD", "register:40f0:8", ["const:bc4a8c:8", "const:4:8"]]
- 00bc4a8c ["CALL", null, ["callee:00c5c120:8"]]
+ 00bc5a80 ["INT_ADD", "register:40f0:8", ["const:bc5a80:8", "const:4:8"]]
+ 00bc5a80 ["CALL", null, ["callee:00c5c120:8"]]
- 00bc4aa8 ["INT_ADD", "register:40f0:8", ["const:bc4aa8:8", "const:4:8"]]
- 00bc4aa8 ["CALL", null, ["callee:00c5bfa0:8"]]
+ 00bc5a9c ["INT_ADD", "register:40f0:8", ["const:bc5a9c:8", "const:4:8"]]
+ 00bc5a9c ["CALL", null, ["callee:00c5bfa0:8"]]
~~~


<a id="compare-711be5cb413614bf45b797c805c804dc"></a>

### [`00bc4fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc4fc8.md) → [`00bc5fbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc5/00bc5fbc.md) _ZN8firebase13remote_config8internal25EnsureInitializedCallbackEP7_JNIEnvP8_jobjectNS_4util12FutureResultEPKcPv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bc5770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc5770.md) · 呼出先 6件 [`00bc50f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc50f8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)
- 新版 呼出元 1件 [`00bc6764`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc6/00bc6764.md) · 呼出先 6件 [`00bc60ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc6/00bc60ec.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb30.md) [`00c5bea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bea0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc5004 ["INT_ADD", "register:40f0:8", ["const:bc5004:8", "const:4:8"]]
- 00bc5004 ["CALL", null, ["callee:00bc60ec:8"]]
+ 00bc5ff8 ["INT_ADD", "register:40f0:8", ["const:bc5ff8:8", "const:4:8"]]
+ 00bc5ff8 ["CALL", null, ["callee:00bc60ec:8"]]
- 00bc5020 ["INT_ADD", "register:40f0:8", ["const:bc5020:8", "const:4:8"]]
- 00bc5020 ["CALL", null, ["callee:00c5bea0:8"]]
+ 00bc6014 ["INT_ADD", "register:40f0:8", ["const:bc6014:8", "const:4:8"]]
+ 00bc6014 ["CALL", null, ["callee:00c5bea0:8"]]
- 00bc5048 ["INT_ADD", "register:40f0:8", ["const:bc5048:8", "const:4:8"]]
- 00bc5048 ["CALL", null, ["callee:00c5e970:8"]]
+ 00bc603c ["INT_ADD", "register:40f0:8", ["const:bc603c:8", "const:4:8"]]
+ 00bc603c ["CALL", null, ["callee:00c5e970:8"]]
~~~


<a id="compare-b88d4c310a54f2c4b96ce7488777bdfc"></a>

### [`00bc51bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc51bc.md) → [`00bc61b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc6/00bc61b0.md) _ZN8firebase13remote_config8internal18BoolResultCallbackEP7_JNIEnvP8_jobjectNS_4util12FutureResultEPKcPv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00bc5a9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc5a9c.md) [`00bc5dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc5dc8.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md) [`00c5b3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b3b0.md)
- 新版 呼出元 2件 [`00bc6a90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc6/00bc6a90.md) [`00bc6dbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc6/00bc6dbc.md) · 呼出先 6件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb30.md) [`00c5bea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bea0.md) [`00c5c380`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c380.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc51fc ["INT_ADD", "register:40f0:8", ["const:bc51fc:8", "const:4:8"]]
- 00bc51fc ["CALL", null, ["callee:00c5c380:8"]]
+ 00bc61f0 ["INT_ADD", "register:40f0:8", ["const:bc61f0:8", "const:4:8"]]
+ 00bc61f0 ["CALL", null, ["callee:00c5c380:8"]]
- 00bc521c ["INT_ADD", "register:40f0:8", ["const:bc521c:8", "const:4:8"]]
- 00bc521c ["CALL", null, ["callee:00c5bea0:8"]]
+ 00bc6210 ["INT_ADD", "register:40f0:8", ["const:bc6210:8", "const:4:8"]]
+ 00bc6210 ["CALL", null, ["callee:00c5bea0:8"]]
- 00bc5238 ["INT_ADD", "register:40f0:8", ["const:bc5238:8", "const:4:8"]]
- 00bc5238 ["CALL", null, ["callee:00c5e980:8"]]
+ 00bc622c ["INT_ADD", "register:40f0:8", ["const:bc622c:8", "const:4:8"]]
+ 00bc622c ["CALL", null, ["callee:00c5e980:8"]]
~~~


<a id="compare-1f5f31fb223090b2cafdf349a7b65a1c"></a>

### [`00bc52ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc52ec.md) → [`00bc62e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc6/00bc62e0.md) _ZN8firebase13remote_config8internal20CompleteVoidCallbackEP7_JNIEnvP8_jobjectNS_4util12FutureResultEPKcPv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00bc7384`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc7/00bc7384.md) [`00bc77d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc7/00bc77d8.md) [`00c5d990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d990.md) · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5ae70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae70.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)
- 新版 呼出元 3件 [`00bc8378`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc8/00bc8378.md) [`00bc87cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc8/00bc87cc.md) [`00c5e960`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e960.md) · 呼出先 5件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb30.md) [`00c5be40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5be40.md) [`00c5bea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bea0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc5328 ["INT_ADD", "register:40f0:8", ["const:bc5328:8", "const:4:8"]]
- 00bc5328 ["CALL", null, ["callee:00c5bea0:8"]]
+ 00bc631c ["INT_ADD", "register:40f0:8", ["const:bc631c:8", "const:4:8"]]
+ 00bc631c ["CALL", null, ["callee:00c5bea0:8"]]
- 00bc5344 ["INT_ADD", "register:40f0:8", ["const:bc5344:8", "const:4:8"]]
- 00bc5344 ["CALL", null, ["callee:00c5be40:8"]]
+ 00bc6338 ["INT_ADD", "register:40f0:8", ["const:bc6338:8", "const:4:8"]]
+ 00bc6338 ["CALL", null, ["callee:00c5be40:8"]]
- 00bc534c ["INT_ADD", "register:40f0:8", ["const:bc534c:8", "const:4:8"]]
- 00bc534c ["CALL", null, ["callee:00c5bb30:8"]]
+ 00bc6340 ["INT_ADD", "register:40f0:8", ["const:bc6340:8", "const:4:8"]]
+ 00bc6340 ["CALL", null, ["callee:00c5bb30:8"]]
~~~


<a id="compare-1448d10248f8180a24c3d934b82fc5d8"></a>

### [`00bc5474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc5474.md) → [`00bc6468`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc6/00bc6468.md) _ZN8firebase13remote_config8internal19SetDefaultsCallbackEP7_JNIEnvP8_jobjectNS_4util12FutureResultEPKcPv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00bc641c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc6/00bc641c.md) [`00bc66b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc6/00bc66b4.md) [`00bc6dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc6/00bc6dc8.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5d990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d990.md)
- 新版 呼出元 3件 [`00bc7410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc7/00bc7410.md) [`00bc76a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc7/00bc76a8.md) [`00bc7dbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc7/00bc7dbc.md) · 呼出先 6件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5e960`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e960.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc54b0 ["INT_ADD", "register:40f0:8", ["const:bc54b0:8", "const:4:8"]]
- 00bc54b0 ["CALL", null, ["callee:00c5e960:8"]]
+ 00bc64a4 ["INT_ADD", "register:40f0:8", ["const:bc64a4:8", "const:4:8"]]
+ 00bc64a4 ["CALL", null, ["callee:00c5e960:8"]]
- 00bc54fc ["INT_ADD", "register:40f0:8", ["const:bc54fc:8", "const:4:8"]]
- 00bc54fc ["CALL", null, ["callee:00c5ea20:8"]]
+ 00bc64f0 ["INT_ADD", "register:40f0:8", ["const:bc64f0:8", "const:4:8"]]
+ 00bc64f0 ["CALL", null, ["callee:00c5ea20:8"]]
- 00bc5508 ["INT_ADD", "register:40f0:8", ["const:bc5508:8", "const:4:8"]]
- 00bc5508 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bc64fc ["INT_ADD", "register:40f0:8", ["const:bc64fc:8", "const:4:8"]]
+ 00bc64fc ["CALL", null, ["callee:00c5baa0:8"]]
~~~


<a id="compare-43caf2a8764f9276d86a6fdedaf16cd7"></a>

### [`00bc564c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc564c.md) → [`00bc6640`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc6/00bc6640.md) _ZNSt6__ndk16vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEEC2ERKS8_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5da50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5da50.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5ade0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ade0.md) [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md)
- 新版 呼出元 1件 [`00c5ea20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ea20.md) · 呼出先 3件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5bdb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdb0.md) [`00c5c650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c650.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc569c ["INT_ADD", "register:40f0:8", ["const:bc569c:8", "const:4:8"]]
- 00bc569c ["CALL", null, ["callee:00c58f30:8"]]
+ 00bc6690 ["INT_ADD", "register:40f0:8", ["const:bc6690:8", "const:4:8"]]
+ 00bc6690 ["CALL", null, ["callee:00c58f30:8"]]
- 00bc56c8 ["INT_ADD", "register:40f0:8", ["const:bc56c8:8", "const:4:8"]]
- 00bc56c8 ["CALL", null, ["callee:00c5c650:8"]]
+ 00bc66bc ["INT_ADD", "register:40f0:8", ["const:bc66bc:8", "const:4:8"]]
+ 00bc66bc ["CALL", null, ["callee:00c5c650:8"]]
- 00bc56f4 ["INT_ADD", "register:40f0:8", ["const:bc56f4:8", "const:4:8"]]
- 00bc56f4 ["CALL", null, ["callee:00c5bdb0:8"]]
+ 00bc66e8 ["INT_ADD", "register:40f0:8", ["const:bc66e8:8", "const:4:8"]]
+ 00bc66e8 ["CALL", null, ["callee:00c5bdb0:8"]]
~~~


<a id="compare-84627caa4f053bdd544de3cbbaddb9c9"></a>

### [`00bc5a0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc5a0c.md) → [`00bc6a00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc6/00bc6a00.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal27EnsureInitializedLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d890.md) · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)
- 新版 呼出元 1件 [`00c5e860`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e860.md) · 呼出先 5件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdf0.md) [`00c5beb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5beb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc5a2c ["INT_ADD", "register:40f0:8", ["const:bc5a2c:8", "const:4:8"]]
- 00bc5a2c ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bc6a20 ["INT_ADD", "register:40f0:8", ["const:bc6a20:8", "const:4:8"]]
+ 00bc6a20 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bc5a38 ["INT_ADD", "register:40f0:8", ["const:bc5a38:8", "const:4:8"]]
- 00bc5a38 ["CALL", null, ["callee:00c5bab0:8"]]
+ 00bc6a2c ["INT_ADD", "register:40f0:8", ["const:bc6a2c:8", "const:4:8"]]
+ 00bc6a2c ["CALL", null, ["callee:00c5bab0:8"]]
- 00bc5a44 ["INT_ADD", "register:40f0:8", ["const:bc5a44:8", "const:4:8"]]
- 00bc5a44 ["CALL", null, ["callee:00c5bd10:8"]]
+ 00bc6a38 ["INT_ADD", "register:40f0:8", ["const:bc6a38:8", "const:4:8"]]
+ 00bc6a38 ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-d3373f7d694e55195d6beb1a4195b5f4"></a>

### [`00bc5d38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc5d38.md) → [`00bc6d2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc6/00bc6d2c.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal18ActivateLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d840.md) · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)
- 新版 呼出元 1件 [`00c5e810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e810.md) · 呼出先 5件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdf0.md) [`00c5beb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5beb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc5d58 ["INT_ADD", "register:40f0:8", ["const:bc5d58:8", "const:4:8"]]
- 00bc5d58 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bc6d4c ["INT_ADD", "register:40f0:8", ["const:bc6d4c:8", "const:4:8"]]
+ 00bc6d4c ["CALL", null, ["callee:00c5baa0:8"]]
- 00bc5d64 ["INT_ADD", "register:40f0:8", ["const:bc5d64:8", "const:4:8"]]
- 00bc5d64 ["CALL", null, ["callee:00c5bab0:8"]]
+ 00bc6d58 ["INT_ADD", "register:40f0:8", ["const:bc6d58:8", "const:4:8"]]
+ 00bc6d58 ["CALL", null, ["callee:00c5bab0:8"]]
- 00bc5d70 ["INT_ADD", "register:40f0:8", ["const:bc5d70:8", "const:4:8"]]
- 00bc5d70 ["CALL", null, ["callee:00c5bd10:8"]]
+ 00bc6d64 ["INT_ADD", "register:40f0:8", ["const:bc6d64:8", "const:4:8"]]
+ 00bc6d64 ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-668a1b864d1e837ff1fa350372e3e4e0"></a>

### [`00bc6064`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc6/00bc6064.md) → [`00bc7058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc7/00bc7058.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal26FetchAndActivateLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d870.md) · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)
- 新版 呼出元 1件 [`00c5e840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e840.md) · 呼出先 5件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdf0.md) [`00c5beb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5beb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc6084 ["INT_ADD", "register:40f0:8", ["const:bc6084:8", "const:4:8"]]
- 00bc6084 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bc7078 ["INT_ADD", "register:40f0:8", ["const:bc7078:8", "const:4:8"]]
+ 00bc7078 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bc6090 ["INT_ADD", "register:40f0:8", ["const:bc6090:8", "const:4:8"]]
- 00bc6090 ["CALL", null, ["callee:00c5bab0:8"]]
+ 00bc7084 ["INT_ADD", "register:40f0:8", ["const:bc7084:8", "const:4:8"]]
+ 00bc7084 ["CALL", null, ["callee:00c5bab0:8"]]
- 00bc609c ["INT_ADD", "register:40f0:8", ["const:bc609c:8", "const:4:8"]]
- 00bc609c ["CALL", null, ["callee:00c5bd10:8"]]
+ 00bc7090 ["INT_ADD", "register:40f0:8", ["const:bc7090:8", "const:4:8"]]
+ 00bc7090 ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-afec778a03a8fa7a8f0686d0d0132c39"></a>

### [`00bc638c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc6/00bc638c.md) → [`00bc7380`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc7/00bc7380.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal15FetchLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d7d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d7d0.md) · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)
- 新版 呼出元 1件 [`00c5e7a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e7a0.md) · 呼出先 5件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdf0.md) [`00c5beb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5beb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc63ac ["INT_ADD", "register:40f0:8", ["const:bc63ac:8", "const:4:8"]]
- 00bc63ac ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bc73a0 ["INT_ADD", "register:40f0:8", ["const:bc73a0:8", "const:4:8"]]
+ 00bc73a0 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bc63b8 ["INT_ADD", "register:40f0:8", ["const:bc63b8:8", "const:4:8"]]
- 00bc63b8 ["CALL", null, ["callee:00c5bab0:8"]]
+ 00bc73ac ["INT_ADD", "register:40f0:8", ["const:bc73ac:8", "const:4:8"]]
+ 00bc73ac ["CALL", null, ["callee:00c5bab0:8"]]
- 00bc63c4 ["INT_ADD", "register:40f0:8", ["const:bc63c4:8", "const:4:8"]]
- 00bc63c4 ["CALL", null, ["callee:00c5bd10:8"]]
+ 00bc73b8 ["INT_ADD", "register:40f0:8", ["const:bc73b8:8", "const:4:8"]]
+ 00bc73b8 ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-7d13e6b14d565bb93d2b5f15cf2dad57"></a>

### [`00bc72f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc7/00bc72f4.md) → [`00bc82e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc8/00bc82e8.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal21SetDefaultsLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d850.md) · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)
- 新版 呼出元 1件 [`00c5e820`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e820.md) · 呼出先 5件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdf0.md) [`00c5beb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5beb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc7314 ["INT_ADD", "register:40f0:8", ["const:bc7314:8", "const:4:8"]]
- 00bc7314 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bc8308 ["INT_ADD", "register:40f0:8", ["const:bc8308:8", "const:4:8"]]
+ 00bc8308 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bc7320 ["INT_ADD", "register:40f0:8", ["const:bc7320:8", "const:4:8"]]
- 00bc7320 ["CALL", null, ["callee:00c5bab0:8"]]
+ 00bc8314 ["INT_ADD", "register:40f0:8", ["const:bc8314:8", "const:4:8"]]
+ 00bc8314 ["CALL", null, ["callee:00c5bab0:8"]]
- 00bc732c ["INT_ADD", "register:40f0:8", ["const:bc732c:8", "const:4:8"]]
- 00bc732c ["CALL", null, ["callee:00c5bd10:8"]]
+ 00bc8320 ["INT_ADD", "register:40f0:8", ["const:bc8320:8", "const:4:8"]]
+ 00bc8320 ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-1daf639e6b145ffa575442311c02ce32"></a>

### [`00bc7748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc7/00bc7748.md) → [`00bc873c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc8/00bc873c.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal27SetConfigSettingsLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d8a0.md) · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)
- 新版 呼出元 1件 [`00c5e870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e870.md) · 呼出先 5件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdf0.md) [`00c5beb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5beb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc7768 ["INT_ADD", "register:40f0:8", ["const:bc7768:8", "const:4:8"]]
- 00bc7768 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bc875c ["INT_ADD", "register:40f0:8", ["const:bc875c:8", "const:4:8"]]
+ 00bc875c ["CALL", null, ["callee:00c5baa0:8"]]
- 00bc7774 ["INT_ADD", "register:40f0:8", ["const:bc7774:8", "const:4:8"]]
- 00bc7774 ["CALL", null, ["callee:00c5bab0:8"]]
+ 00bc8768 ["INT_ADD", "register:40f0:8", ["const:bc8768:8", "const:4:8"]]
+ 00bc8768 ["CALL", null, ["callee:00c5bab0:8"]]
- 00bc7780 ["INT_ADD", "register:40f0:8", ["const:bc7780:8", "const:4:8"]]
- 00bc7780 ["CALL", null, ["callee:00c5bd10:8"]]
+ 00bc8774 ["INT_ADD", "register:40f0:8", ["const:bc8774:8", "const:4:8"]]
+ 00bc8774 ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-f0e42a187ad67965986a6c8ce7bf46e6"></a>

### [`00bc7e90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc7/00bc7e90.md) → [`00bc8e84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc8/00bc8e84.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal26SetCustomSignalsLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d880.md) · 呼出先 5件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)
- 新版 呼出元 1件 [`00c5e850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e850.md) · 呼出先 5件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdf0.md) [`00c5beb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5beb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc7eb0 ["INT_ADD", "register:40f0:8", ["const:bc7eb0:8", "const:4:8"]]
- 00bc7eb0 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bc8ea4 ["INT_ADD", "register:40f0:8", ["const:bc8ea4:8", "const:4:8"]]
+ 00bc8ea4 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bc7ebc ["INT_ADD", "register:40f0:8", ["const:bc7ebc:8", "const:4:8"]]
- 00bc7ebc ["CALL", null, ["callee:00c5bab0:8"]]
+ 00bc8eb0 ["INT_ADD", "register:40f0:8", ["const:bc8eb0:8", "const:4:8"]]
+ 00bc8eb0 ["CALL", null, ["callee:00c5bab0:8"]]
- 00bc7ec8 ["INT_ADD", "register:40f0:8", ["const:bc7ec8:8", "const:4:8"]]
- 00bc7ec8 ["CALL", null, ["callee:00c5bd10:8"]]
+ 00bc8ebc ["INT_ADD", "register:40f0:8", ["const:bc8ebc:8", "const:4:8"]]
+ 00bc8ebc ["CALL", null, ["callee:00c5bd10:8"]]
~~~


<a id="compare-82441ce4c3126c5a5a0858e5a560d84d"></a>

### [`00bc8a50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc8a50.md) → [`00bc9a44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc9/00bc9a44.md) _ZN8firebase9MutexLockD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5da10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5da10.md) · 呼出先 1件 [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)
- 新版 呼出元 1件 [`00c5e9e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e9e0.md) · 呼出先 1件 [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc8a5c ["INT_ADD", "register:40f0:8", ["const:bc8a5c:8", "const:4:8"]]
- 00bc8a5c ["CALL", null, ["callee:00c5bab0:8"]]
+ 00bc9a50 ["INT_ADD", "register:40f0:8", ["const:bc9a50:8", "const:4:8"]]
+ 00bc9a50 ["CALL", null, ["callee:00c5bab0:8"]]
~~~


<a id="compare-86aa8d5ad431a8f1a616517b5adb54bd"></a>

### [`00bc96f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc96f0.md) → [`00bca6e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bca/00bca6e4.md) _ZN8firebase13remote_config8internal37JniConfigUpdateListener_nativeOnErrorEP7_JNIEnvP8_jobjectli

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00b611c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b611c8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00b621bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b62/00b621bc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc9740 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc9740 ["INT_ADD", "register:40f0:8", ["const:bc9740:8", "const:4:8"]]
- 00bc9740 ["CALLIND", null, ["register:0:8"]]
+ 00bca734 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bca734 ["INT_ADD", "register:40f0:8", ["const:bca734:8", "const:4:8"]]
+ 00bca734 ["CALLIND", null, ["register:0:8"]]
- 00bc977c ["INT_ADD", "register:40f0:8", ["const:bc977c:8", "const:4:8"]]
- 00bc977c ["CALL", null, ["callee:00c58f50:8"]]
+ 00bca770 ["INT_ADD", "register:40f0:8", ["const:bca770:8", "const:4:8"]]
+ 00bca770 ["CALL", null, ["callee:00c58f50:8"]]
- 00bc9794 ["INT_ADD", "register:40f0:8", ["const:bc9794:8", "const:4:8"]]
- 00bc9794 ["CALL", null, ["callee:00c58f50:8"]]
+ 00bca788 ["INT_ADD", "register:40f0:8", ["const:bca788:8", "const:4:8"]]
+ 00bca788 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-7a6541e4a0b4f5fdaf16d0a829a0215e"></a>

### [`00bc9824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9824.md) → [`00bca818`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bca/00bca818.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN8firebase7VariantEEENS_19__map_value_compar

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5da30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5da30.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md) [`00c5da20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5da20.md)
- 新版 呼出元 1件 [`00c5ea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ea00.md) · 呼出先 5件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b8e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8e0.md) [`00c5c680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c680.md) [`00c5e9f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e9f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc9858 ["INT_ADD", "register:40f0:8", ["const:bc9858:8", "const:4:8"]]
- 00bc9858 ["CALL", null, ["callee:00c5e9f0:8"]]
+ 00bca84c ["INT_ADD", "register:40f0:8", ["const:bca84c:8", "const:4:8"]]
+ 00bca84c ["CALL", null, ["callee:00c5e9f0:8"]]
- 00bc9874 ["INT_ADD", "register:40f0:8", ["const:bc9874:8", "const:4:8"]]
- 00bc9874 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bca868 ["INT_ADD", "register:40f0:8", ["const:bca868:8", "const:4:8"]]
+ 00bca868 ["CALL", null, ["callee:00c58f30:8"]]
- 00bc989c ["INT_ADD", "register:40f0:8", ["const:bc989c:8", "const:4:8"]]
- 00bc989c ["CALL", null, ["callee:00c5b8e0:8"]]
+ 00bca890 ["INT_ADD", "register:40f0:8", ["const:bca890:8", "const:4:8"]]
+ 00bca890 ["CALL", null, ["callee:00c5b8e0:8"]]
~~~


<a id="compare-ff78d063118415c6c112d3b1189a2237"></a>

### [`00bc9914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9914.md) → [`00bca908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bca/00bca908.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN8firebase7VariantEEENS_19__map_value_compar

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5da20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5da20.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5e9f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e9f0.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc99b0 ["INT_ADD", "register:40f0:8", ["const:bc99b0:8", "const:4:8"]]
- 00bc99b0 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bca9a4 ["INT_ADD", "register:40f0:8", ["const:bca9a4:8", "const:4:8"]]
+ 00bca9a4 ["CALL", null, ["callee:00c590f0:8"]]
- 00bc99f0 ["INT_ADD", "register:40f0:8", ["const:bc99f0:8", "const:4:8"]]
- 00bc99f0 ["CALL", null, ["callee:00c590f0:8"]]
+ 00bca9e4 ["INT_ADD", "register:40f0:8", ["const:bca9e4:8", "const:4:8"]]
+ 00bca9e4 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-e3770a6b06c29e7d2def367d589d3d4a"></a>

### [`00bc9a34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9a34.md) → [`00bcaa28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bca/00bcaa28.md) FUN_00bcaa28

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bc9290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9290.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d760.md)
- 新版 呼出元 1件 [`00bca284`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bca/00bca284.md) · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5e730`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e730.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc9a48 ["INT_ADD", "register:40f0:8", ["const:bc9a48:8", "const:4:8"]]
- 00bc9a48 ["CALL", null, ["callee:00c5e730:8"]]
+ 00bcaa3c ["INT_ADD", "register:40f0:8", ["const:bcaa3c:8", "const:4:8"]]
+ 00bcaa3c ["CALL", null, ["callee:00c5e730:8"]]
~~~


<a id="compare-a4ffbc1142583dec491676fae3699c12"></a>

### [`00bc9dc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9dc4.md) → [`00bcadb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bca/00bcadb8.md) _ZN8firebase6FutureINS_13remote_config10ConfigInfoEEC2EPNS_6detail18FutureApiInterfaceERKNS_12FutureHandleE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d9e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d9e0.md) · 呼出先 3件 [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5aec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aec0.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)
- 新版 呼出元 1件 [`00c5e9b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e9b0.md) · 呼出先 3件 [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5be90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5be90.md) [`00c5bea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bea0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc9de4 ["INT_ADD", "register:40f0:8", ["const:bc9de4:8", "const:4:8"]]
- 00bc9de4 ["CALL", null, ["callee:00c5bd10:8"]]
+ 00bcadd8 ["INT_ADD", "register:40f0:8", ["const:bcadd8:8", "const:4:8"]]
+ 00bcadd8 ["CALL", null, ["callee:00c5bd10:8"]]
- 00bc9df8 ["INT_ADD", "register:40f0:8", ["const:bc9df8:8", "const:4:8"]]
- 00bc9df8 ["CALL", null, ["callee:00c5bea0:8"]]
+ 00bcadec ["INT_ADD", "register:40f0:8", ["const:bcadec:8", "const:4:8"]]
+ 00bcadec ["CALL", null, ["callee:00c5bea0:8"]]
- 00bc9e0c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc9e0c ["INT_ADD", "register:40f0:8", ["const:bc9e0c:8", "const:4:8"]]
- 00bc9e0c ["CALLIND", null, ["register:0:8"]]
+ 00bcae00 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bcae00 ["INT_ADD", "register:40f0:8", ["const:bcae00:8", "const:4:8"]]
+ 00bcae00 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-cb2ccf44748f22813e35cc1e8f022d99"></a>

### [`00bc9f78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9f78.md) → [`00bcaf6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bca/00bcaf6c.md) _ZN8firebase6FutureIbEC2EPNS_6detail18FutureApiInterfaceERKNS_12FutureHandleE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d9f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d9f0.md) · 呼出先 3件 [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5aec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aec0.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)
- 新版 呼出元 1件 [`00c5e9c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e9c0.md) · 呼出先 3件 [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5be90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5be90.md) [`00c5bea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bea0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc9f98 ["INT_ADD", "register:40f0:8", ["const:bc9f98:8", "const:4:8"]]
- 00bc9f98 ["CALL", null, ["callee:00c5bd10:8"]]
+ 00bcaf8c ["INT_ADD", "register:40f0:8", ["const:bcaf8c:8", "const:4:8"]]
+ 00bcaf8c ["CALL", null, ["callee:00c5bd10:8"]]
- 00bc9fac ["INT_ADD", "register:40f0:8", ["const:bc9fac:8", "const:4:8"]]
- 00bc9fac ["CALL", null, ["callee:00c5bea0:8"]]
+ 00bcafa0 ["INT_ADD", "register:40f0:8", ["const:bcafa0:8", "const:4:8"]]
+ 00bcafa0 ["CALL", null, ["callee:00c5bea0:8"]]
- 00bc9fc0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc9fc0 ["INT_ADD", "register:40f0:8", ["const:bc9fc0:8", "const:4:8"]]
- 00bc9fc0 ["CALLIND", null, ["register:0:8"]]
+ 00bcafb4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bcafb4 ["INT_ADD", "register:40f0:8", ["const:bcafb4:8", "const:4:8"]]
+ 00bcafb4 ["CALLIND", null, ["register:0:8"]]
~~~


