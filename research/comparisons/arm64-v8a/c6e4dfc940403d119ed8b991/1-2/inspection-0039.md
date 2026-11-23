# v16.0.2 → v16.0.3 · 要調査の変更候補 (39)

[一覧の目次](README.md)

<a id="compare-941ce8d335d1bd54dfeaf8b229618056"></a>

### [`00bf9b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9b3c.md) → [`00bfab30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfab30.md) _ZNSt6__ndk117__assoc_sub_state4waitEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c58600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58600.md) · 呼出先 3件 [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md) [`00c58550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58550.md)
- 新版 呼出元 1件 [`00c595d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c595d0.md) · 呼出先 3件 [`00c59180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59180.md) [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md) [`00c59520`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59520.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf9b68 ["INT_ADD", "register:40f0:8", ["const:bf9b68:8", "const:4:8"]]
- 00bf9b68 ["CALL", null, ["callee:00c59180:8"]]
+ 00bfab5c ["INT_ADD", "register:40f0:8", ["const:bfab5c:8", "const:4:8"]]
+ 00bfab5c ["CALL", null, ["callee:00c59180:8"]]
- 00bf9b80 ["INT_ADD", "register:40f0:8", ["const:bf9b80:8", "const:4:8"]]
- 00bf9b80 ["CALL", null, ["callee:00c59520:8"]]
+ 00bfab74 ["INT_ADD", "register:40f0:8", ["const:bfab74:8", "const:4:8"]]
+ 00bfab74 ["CALL", null, ["callee:00c59520:8"]]
- 00bf9b98 ["INT_ADD", "register:40f0:8", ["const:bf9b98:8", "const:4:8"]]
- 00bf9b98 ["CALL", null, ["callee:00c59190:8"]]
+ 00bfab8c ["INT_ADD", "register:40f0:8", ["const:bfab8c:8", "const:4:8"]]
+ 00bfab8c ["CALL", null, ["callee:00c59190:8"]]
~~~


<a id="compare-60a43e82cfcb92ca0a2f8d9585f94cfb"></a>

### [`00bf9be0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9be0.md) → [`00bfabd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfabd4.md) _ZNSt6__ndk117__assoc_sub_state9__executeEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`0045a714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0045aa34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045aa34.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf9bf0 ["INT_ADD", "register:40f0:8", ["const:bf9bf0:8", "const:4:8"]]
- 00bf9bf0 ["CALL", null, ["callee:0045aa34:8"]]
+ 00bfabe4 ["INT_ADD", "register:40f0:8", ["const:bfabe4:8", "const:4:8"]]
+ 00bfabe4 ["CALL", null, ["callee:0045aa34:8"]]
~~~


<a id="compare-a2c5242c36a25690c2c9b861ea11060f"></a>

### [`00bf9bf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9bf4.md) → [`00bfabe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfabe8.md) _ZNSt6__ndk16futureIvEC1EPNS_17__assoc_sub_stateE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c585f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c585f0.md) · 呼出先 4件 [`0045a714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md)
- 新版 呼出元 1件 [`00c595c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c595c0.md) · 呼出先 4件 [`0045aa34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045aa34.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c59180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59180.md) [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf9c10 ["INT_ADD", "register:40f0:8", ["const:bf9c10:8", "const:4:8"]]
- 00bf9c10 ["CALL", null, ["callee:00c59180:8"]]
+ 00bfac04 ["INT_ADD", "register:40f0:8", ["const:bfac04:8", "const:4:8"]]
+ 00bfac04 ["CALL", null, ["callee:00c59180:8"]]
- 00bf9c24 ["INT_ADD", "register:40f0:8", ["const:bf9c24:8", "const:4:8"]]
- 00bf9c24 ["CALL", null, ["callee:00c54d60:8"]]
+ 00bfac18 ["INT_ADD", "register:40f0:8", ["const:bfac18:8", "const:4:8"]]
+ 00bfac18 ["CALL", null, ["callee:00c54d60:8"]]
- 00bf9c48 ["INT_ADD", "register:40f0:8", ["const:bf9c48:8", "const:4:8"]]
- 00bf9c48 ["CALL", null, ["callee:0045aa34:8"]]
+ 00bfac3c ["INT_ADD", "register:40f0:8", ["const:bfac3c:8", "const:4:8"]]
+ 00bfac3c ["CALL", null, ["callee:0045aa34:8"]]
~~~


<a id="compare-e11b5a666784e4c0bd7ee28bb617bc70"></a>

### [`00bf9c60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9c60.md) → [`00bfac54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfac54.md) _ZNSt6__ndk16futureIvED1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c585b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c585b0.md) · 呼出先 1件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00c59580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59580.md) · 呼出先 1件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf9c80 ["INT_ADD", "register:40f0:8", ["const:bf9c80:8", "const:4:8"]]
- 00bf9c80 ["CALL", null, ["callee:00c54d90:8"]]
+ 00bfac74 ["INT_ADD", "register:40f0:8", ["const:bfac74:8", "const:4:8"]]
+ 00bfac74 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-2d6ca0c685a1c2bf3db8db4771738329"></a>

### [`00bf9cb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9cb4.md) → [`00bfaca8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfaca8.md) _ZNSt6__ndk16futureIvE3getEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5e330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e330.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c5f300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f300.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf9cd0 ["INT_ADD", "register:40f0:8", ["const:bf9cd0:8", "const:4:8"]]
- 00bf9cd0 ["CALL", null, ["callee:00c5f300:8"]]
+ 00bfacc4 ["INT_ADD", "register:40f0:8", ["const:bfacc4:8", "const:4:8"]]
+ 00bfacc4 ["CALL", null, ["callee:00c5f300:8"]]
- 00bf9cdc ["INT_ADD", "register:40f0:8", ["const:bf9cdc:8", "const:4:8"]]
- 00bf9cdc ["CALL", null, ["callee:00c54d90:8"]]
+ 00bfacd0 ["INT_ADD", "register:40f0:8", ["const:bfacd0:8", "const:4:8"]]
+ 00bfacd0 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-35b15bc3815fc1d2968b4ac94c70860f"></a>

### [`00bf9f28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9f28.md) → [`00bfaf1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfaf1c.md) _ZNSt6__ndk17promiseIvE10get_futureEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0045a714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md) [`00c585f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c585f0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0045aa34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045aa34.md) [`00c595c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c595c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf9f4c ["INT_ADD", "register:40f0:8", ["const:bf9f4c:8", "const:4:8"]]
- 00bf9f4c ["CALL", null, ["callee:0045aa34:8"]]
+ 00bfaf40 ["INT_ADD", "register:40f0:8", ["const:bfaf40:8", "const:4:8"]]
+ 00bfaf40 ["CALL", null, ["callee:0045aa34:8"]]
~~~


<a id="compare-f74de4bc266330fa472f386c72923557"></a>

### [`00bf9f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9f50.md) → [`00bfaf44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfaf44.md) _ZNSt6__ndk17promiseIvE9set_valueEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0045a714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md) [`00c58620`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58620.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0045aa34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045aa34.md) [`00c595f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c595f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf9f70 ["INT_ADD", "register:40f0:8", ["const:bf9f70:8", "const:4:8"]]
- 00bf9f70 ["CALL", null, ["callee:0045aa34:8"]]
+ 00bfaf64 ["INT_ADD", "register:40f0:8", ["const:bfaf64:8", "const:4:8"]]
+ 00bfaf64 ["CALL", null, ["callee:0045aa34:8"]]
~~~


<a id="compare-113ed3bcb951eac2abeba6fba51392bb"></a>

### [`00bf9f74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9f74.md) → [`00bfaf68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfaf68.md) _ZNSt6__ndk17promiseIvE13set_exceptionESt13exception_ptr

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`0045a714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md) [`00c583c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583c0.md) [`00c58430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58430.md) [`00c58580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58580.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0045aa34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045aa34.md) [`00c59390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59390.md) [`00c59400`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59400.md) [`00c59550`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf9f90 ["INT_ADD", "register:40f0:8", ["const:bf9f90:8", "const:4:8"]]
- 00bf9f90 ["CALL", null, ["callee:00c59550:8"]]
+ 00bfaf84 ["INT_ADD", "register:40f0:8", ["const:bfaf84:8", "const:4:8"]]
+ 00bfaf84 ["CALL", null, ["callee:00c59550:8"]]
- 00bf9f9c ["INT_ADD", "register:40f0:8", ["const:bf9f9c:8", "const:4:8"]]
- 00bf9f9c ["CALL", null, ["callee:00c59400:8"]]
+ 00bfaf90 ["INT_ADD", "register:40f0:8", ["const:bfaf90:8", "const:4:8"]]
+ 00bfaf90 ["CALL", null, ["callee:00c59400:8"]]
- 00bf9fa4 ["INT_ADD", "register:40f0:8", ["const:bf9fa4:8", "const:4:8"]]
- 00bf9fa4 ["CALL", null, ["callee:00c59390:8"]]
+ 00bfaf98 ["INT_ADD", "register:40f0:8", ["const:bfaf98:8", "const:4:8"]]
+ 00bfaf98 ["CALL", null, ["callee:00c59390:8"]]
~~~


<a id="compare-a945dce85658a3342ed8c05a56961e44"></a>

### [`00bf9fd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9fd4.md) → [`00bfafc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfafc8.md) _ZNSt6__ndk17promiseIvE24set_value_at_thread_exitEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0045a714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md) [`00c5e2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e2f0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0045aa34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045aa34.md) [`00c5f2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f2c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf9ff4 ["INT_ADD", "register:40f0:8", ["const:bf9ff4:8", "const:4:8"]]
- 00bf9ff4 ["CALL", null, ["callee:0045aa34:8"]]
+ 00bfafe8 ["INT_ADD", "register:40f0:8", ["const:bfafe8:8", "const:4:8"]]
+ 00bfafe8 ["CALL", null, ["callee:0045aa34:8"]]
~~~


<a id="compare-65443d507f3fe6579c82ccf12c4253fc"></a>

### [`00bf9ff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9ff8.md) → [`00bfafec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfa/00bfafec.md) _ZNSt6__ndk17promiseIvE28set_exception_at_thread_exitESt13exception_ptr

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`0045a714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md) [`00c583c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583c0.md) [`00c58580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58580.md) [`00c5e310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e310.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0045aa34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045aa34.md) [`00c59390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59390.md) [`00c59550`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59550.md) [`00c5f2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f2e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa014 ["INT_ADD", "register:40f0:8", ["const:bfa014:8", "const:4:8"]]
- 00bfa014 ["CALL", null, ["callee:00c59550:8"]]
+ 00bfb008 ["INT_ADD", "register:40f0:8", ["const:bfb008:8", "const:4:8"]]
+ 00bfb008 ["CALL", null, ["callee:00c59550:8"]]
- 00bfa020 ["INT_ADD", "register:40f0:8", ["const:bfa020:8", "const:4:8"]]
- 00bfa020 ["CALL", null, ["callee:00c5f2e0:8"]]
+ 00bfb014 ["INT_ADD", "register:40f0:8", ["const:bfb014:8", "const:4:8"]]
+ 00bfb014 ["CALL", null, ["callee:00c5f2e0:8"]]
- 00bfa028 ["INT_ADD", "register:40f0:8", ["const:bfa028:8", "const:4:8"]]
- 00bfa028 ["CALL", null, ["callee:00c59390:8"]]
+ 00bfb01c ["INT_ADD", "register:40f0:8", ["const:bfb01c:8", "const:4:8"]]
+ 00bfb01c ["CALL", null, ["callee:00c59390:8"]]
~~~


<a id="compare-aa5a420975e8978cd0c28d5f8477d832"></a>

### [`00bfa058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa058.md) → [`00bfb04c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb04c.md) _ZNSt6__ndk113shared_futureIvED1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa078 ["INT_ADD", "register:40f0:8", ["const:bfa078:8", "const:4:8"]]
- 00bfa078 ["CALL", null, ["callee:00c54d90:8"]]
+ 00bfb06c ["INT_ADD", "register:40f0:8", ["const:bfb06c:8", "const:4:8"]]
+ 00bfb06c ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-214612c03e5c6b060feae361339b2336"></a>

### [`00bfa0ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa0ac.md) → [`00bfb0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb0a0.md) _ZNSt6__ndk113shared_futureIvEaSERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa0d8 ["INT_ADD", "register:40f0:8", ["const:bfa0d8:8", "const:4:8"]]
- 00bfa0d8 ["CALL", null, ["callee:00c54d60:8"]]
+ 00bfb0cc ["INT_ADD", "register:40f0:8", ["const:bfb0cc:8", "const:4:8"]]
+ 00bfb0cc ["CALL", null, ["callee:00c54d60:8"]]
- 00bfa0ec ["INT_ADD", "register:40f0:8", ["const:bfa0ec:8", "const:4:8"]]
- 00bfa0ec ["CALL", null, ["callee:00c54d90:8"]]
+ 00bfb0e0 ["INT_ADD", "register:40f0:8", ["const:bfb0e0:8", "const:4:8"]]
+ 00bfb0e0 ["CALL", null, ["callee:00c54d90:8"]]
- 00bfa100 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfa100 ["INT_ADD", "register:40f0:8", ["const:bfa100:8", "const:4:8"]]
- 00bfa100 ["CALLIND", null, ["register:0:8"]]
+ 00bfb0f4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfb0f4 ["INT_ADD", "register:40f0:8", ["const:bfb0f4:8", "const:4:8"]]
+ 00bfb0f4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5267369e3564847df7c090ed32175906"></a>

### [`00bfa180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa180.md) → [`00bfb174`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb174.md) FUN_00bfb174

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5dfc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfc0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5ef90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa194 ["INT_ADD", "register:40f0:8", ["const:bfa194:8", "const:4:8"]]
- 00bfa194 ["CALL", null, ["callee:00c5ef90:8"]]
+ 00bfb188 ["INT_ADD", "register:40f0:8", ["const:bfb188:8", "const:4:8"]]
+ 00bfb188 ["CALL", null, ["callee:00c5ef90:8"]]
~~~


<a id="compare-d528d5c8bb035f6741cce93fc7537d61"></a>

### [`00bfa1ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa1ac.md) → [`00bfb1a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb1a0.md) _ZNSt6__ndk15mutexD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 6件 [`0043aeb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb8.md) [`00452528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00452/00452528.md) [`00452c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00452/00452c94.md) [`0048bb30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048b/0048bb30.md) [`0058f6f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f6f0.md) · 呼出先 1件 [`00c5b760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b760.md)
- 新版 呼出元 6件 [`0043b1d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d8.md) [`00452848`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00452/00452848.md) [`00452fb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00452/00452fb4.md) [`0048be50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048b/0048be50.md) [`0058fa10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058fa10.md) · 呼出先 1件 [`00c5c730`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c730.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa1b8 ["INT_ADD", "register:40f0:8", ["const:bfa1b8:8", "const:4:8"]]
- 00bfa1b8 ["CALL", null, ["callee:00c5c730:8"]]
+ 00bfb1ac ["INT_ADD", "register:40f0:8", ["const:bfb1ac:8", "const:4:8"]]
+ 00bfb1ac ["CALL", null, ["callee:00c5c730:8"]]
~~~


<a id="compare-e0c9ec7e4c79bb22d3d33fac40d8b0fc"></a>

### [`00bfa1f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa1f8.md) → [`00bfb1ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb1ec.md) _ZNSt6__ndk15mutex8try_lockEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e340.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5f310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f310.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa204 ["INT_ADD", "register:40f0:8", ["const:bfa204:8", "const:4:8"]]
- 00bfa204 ["CALL", null, ["callee:00c5f310:8"]]
+ 00bfb1f8 ["INT_ADD", "register:40f0:8", ["const:bfb1f8:8", "const:4:8"]]
+ 00bfb1f8 ["CALL", null, ["callee:00c5f310:8"]]
~~~


<a id="compare-23fec7b1f4a0c1d427e42b7ee85b5215"></a>

### [`00bfa220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa220.md) → [`00bfb214`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb214.md) _ZNSt6__ndk15mutex6unlockEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md) · 呼出先 1件 [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md)
- 新版 呼出元 1件 [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md) · 呼出先 1件 [`00c5c750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c750.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa22c ["INT_ADD", "register:40f0:8", ["const:bfa22c:8", "const:4:8"]]
- 00bfa22c ["CALL", null, ["callee:00c5c750:8"]]
+ 00bfb220 ["INT_ADD", "register:40f0:8", ["const:bfb220:8", "const:4:8"]]
+ 00bfb220 ["CALL", null, ["callee:00c5c750:8"]]
~~~


<a id="compare-41a3ff430547a2f8c77fba1feefb8276"></a>

### [`00bfa2e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa2e4.md) → [`00bfb2d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb2d8.md) _ZNSt6__ndk115recursive_mutexD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5a1a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a1a0.md) · 呼出先 1件 [`00c5b760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b760.md)
- 新版 呼出元 1件 [`00c5b170`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b170.md) · 呼出先 1件 [`00c5c730`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c730.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa2f0 ["INT_ADD", "register:40f0:8", ["const:bfa2f0:8", "const:4:8"]]
- 00bfa2f0 ["CALL", null, ["callee:00c5c730:8"]]
+ 00bfb2e4 ["INT_ADD", "register:40f0:8", ["const:bfb2e4:8", "const:4:8"]]
+ 00bfb2e4 ["CALL", null, ["callee:00c5c730:8"]]
~~~


<a id="compare-8bcb46af7d183c1ad88f71c78bb76cbc"></a>

### [`00bfa330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa330.md) → [`00bfb324`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb324.md) _ZNSt6__ndk115recursive_mutex6unlockEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5a1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a1c0.md) · 呼出先 1件 [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md)
- 新版 呼出元 1件 [`00c5b190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b190.md) · 呼出先 1件 [`00c5c750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c750.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa33c ["INT_ADD", "register:40f0:8", ["const:bfa33c:8", "const:4:8"]]
- 00bfa33c ["CALL", null, ["callee:00c5c750:8"]]
+ 00bfb330 ["INT_ADD", "register:40f0:8", ["const:bfb330:8", "const:4:8"]]
+ 00bfb330 ["CALL", null, ["callee:00c5c750:8"]]
~~~


<a id="compare-946333073ee7ecf3babacb6ad463cae4"></a>

### [`00bfa350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa350.md) → [`00bfb344`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb344.md) _ZNSt6__ndk115recursive_mutex8try_lockEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e340.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5f310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f310.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa35c ["INT_ADD", "register:40f0:8", ["const:bfa35c:8", "const:4:8"]]
- 00bfa35c ["CALL", null, ["callee:00c5f310:8"]]
+ 00bfb350 ["INT_ADD", "register:40f0:8", ["const:bfb350:8", "const:4:8"]]
+ 00bfb350 ["CALL", null, ["callee:00c5f310:8"]]
~~~


<a id="compare-6865bd2d651ad5d201dd7aac0a2a64f7"></a>

### [`00bfa478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa478.md) → [`00bfb46c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb46c.md) _ZNSt6__ndk111timed_mutex8try_lockEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md) [`00c5e340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e340.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5c750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c750.md) [`00c5f310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f310.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa48c ["INT_ADD", "register:40f0:8", ["const:bfa48c:8", "const:4:8"]]
- 00bfa48c ["CALL", null, ["callee:00c5f310:8"]]
+ 00bfb480 ["INT_ADD", "register:40f0:8", ["const:bfb480:8", "const:4:8"]]
+ 00bfb480 ["CALL", null, ["callee:00c5f310:8"]]
- 00bfa4b8 ["INT_ADD", "register:40f0:8", ["const:bfa4b8:8", "const:4:8"]]
- 00bfa4b8 ["CALL", null, ["callee:00c5c750:8"]]
+ 00bfb4ac ["INT_ADD", "register:40f0:8", ["const:bfb4ac:8", "const:4:8"]]
+ 00bfb4ac ["CALL", null, ["callee:00c5c750:8"]]
~~~


<a id="compare-0f157fc323dc5cc9b11e762b0c3dac4e"></a>

### [`00bfa67c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa67c.md) → [`00bfb670`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb670.md) _ZNSt6__ndk121recursive_timed_mutex8try_lockEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c586f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586f0.md) [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md) [`00c5e340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e340.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c596c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c596c0.md) [`00c5c750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c750.md) [`00c5f310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f310.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa694 ["INT_ADD", "register:40f0:8", ["const:bfa694:8", "const:4:8"]]
- 00bfa694 ["CALL", null, ["callee:00c596c0:8"]]
+ 00bfb688 ["INT_ADD", "register:40f0:8", ["const:bfb688:8", "const:4:8"]]
+ 00bfb688 ["CALL", null, ["callee:00c596c0:8"]]
- 00bfa6a0 ["INT_ADD", "register:40f0:8", ["const:bfa6a0:8", "const:4:8"]]
- 00bfa6a0 ["CALL", null, ["callee:00c5f310:8"]]
+ 00bfb694 ["INT_ADD", "register:40f0:8", ["const:bfb694:8", "const:4:8"]]
+ 00bfb694 ["CALL", null, ["callee:00c5f310:8"]]
- 00bfa6e0 ["INT_ADD", "register:40f0:8", ["const:bfa6e0:8", "const:4:8"]]
- 00bfa6e0 ["CALL", null, ["callee:00c5c750:8"]]
+ 00bfb6d4 ["INT_ADD", "register:40f0:8", ["const:bfb6d4:8", "const:4:8"]]
+ 00bfb6d4 ["CALL", null, ["callee:00c5c750:8"]]
~~~


<a id="compare-6e8564fc7fd553c123d092840dd3c5c1"></a>

### [`00bfa780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa780.md) → [`00bfb774`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb774.md) _ZNSt6__ndk16threadD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58250.md) · 呼出先 1件 [`00c580f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580f0.md)
- 新版 呼出元 1件 [`00c59220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59220.md) · 呼出先 1件 [`00c590c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa79c ["INT_ADD", "register:40f0:8", ["const:bfa79c:8", "const:4:8"]]
- 00bfa79c ["CALL", null, ["callee:00c590c0:8"]]
+ 00bfb790 ["INT_ADD", "register:40f0:8", ["const:bfb790:8", "const:4:8"]]
+ 00bfb790 ["CALL", null, ["callee:00c590c0:8"]]
~~~


<a id="compare-13d38bb7f114d546c406aaf33084c540"></a>

### [`00bfa834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa834.md) → [`00bfb828`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb828.md) _ZNSt6__ndk16thread20hardware_concurrencyEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e360.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5f330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f330.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa844 ["INT_ADD", "register:40f0:8", ["const:bfa844:8", "const:4:8"]]
- 00bfa844 ["CALL", null, ["callee:00c5f330:8"]]
+ 00bfb838 ["INT_ADD", "register:40f0:8", ["const:bfb838:8", "const:4:8"]]
+ 00bfb838 ["CALL", null, ["callee:00c5f330:8"]]
~~~


<a id="compare-f349a52e5c08e4bd2a49dc3cc18ea179"></a>

### [`00bfa860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa860.md) → [`00bfb854`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb854.md) _ZNSt6__ndk111this_thread9sleep_forERKNS_6chrono8durationIxNS_5ratioILl1ELl1000000000EEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58560.md) · 呼出先 2件 [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5e370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e370.md)
- 新版 呼出元 1件 [`00c59530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59530.md) · 呼出先 2件 [`00c59160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59160.md) [`00c5f340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f340.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa8b4 ["INT_ADD", "register:40f0:8", ["const:bfa8b4:8", "const:4:8"]]
- 00bfa8b4 ["CALL", null, ["callee:00c5f340:8"]]
+ 00bfb8a8 ["INT_ADD", "register:40f0:8", ["const:bfb8a8:8", "const:4:8"]]
+ 00bfb8a8 ["CALL", null, ["callee:00c5f340:8"]]
- 00bfa8c0 ["INT_ADD", "register:40f0:8", ["const:bfa8c0:8", "const:4:8"]]
- 00bfa8c0 ["CALL", null, ["callee:00c59160:8"]]
+ 00bfb8b4 ["INT_ADD", "register:40f0:8", ["const:bfb8b4:8", "const:4:8"]]
+ 00bfb8b4 ["CALL", null, ["callee:00c59160:8"]]
~~~


<a id="compare-a7be9901d3a5bed8c45e7f4a6e25035b"></a>

### [`00bfa998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa998.md) → [`00bfb98c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb98c.md) FUN_00bfb98c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfac8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfac8c.md) · 呼出先 5件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md) [`00c58450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58450.md) [`00c5e320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e320.md)
- 新版 呼出元 1件 [`00bfbc80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfbc80.md) · 呼出先 5件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md) [`00c59420`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59420.md) [`00c5f2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f2f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa9c0 ["INT_ADD", "register:40f0:8", ["const:bfa9c0:8", "const:4:8"]]
- 00bfa9c0 ["CALL", null, ["callee:00c59420:8"]]
+ 00bfb9b4 ["INT_ADD", "register:40f0:8", ["const:bfb9b4:8", "const:4:8"]]
+ 00bfb9b4 ["CALL", null, ["callee:00c59420:8"]]
- 00bfa9c8 ["INT_ADD", "register:40f0:8", ["const:bfa9c8:8", "const:4:8"]]
- 00bfa9c8 ["CALL", null, ["callee:00c59190:8"]]
+ 00bfb9bc ["INT_ADD", "register:40f0:8", ["const:bfb9bc:8", "const:4:8"]]
+ 00bfb9bc ["CALL", null, ["callee:00c59190:8"]]
- 00bfa9f0 ["INT_ADD", "register:40f0:8", ["const:bfa9f0:8", "const:4:8"]]
- 00bfa9f0 ["CALL", null, ["callee:00c5f2f0:8"]]
+ 00bfb9e4 ["INT_ADD", "register:40f0:8", ["const:bfb9e4:8", "const:4:8"]]
+ 00bfb9e4 ["CALL", null, ["callee:00c5f2f0:8"]]
~~~


<a id="compare-275d7d5871f2754b2c66ea6de5a25b53"></a>

### [`00bfaa64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfaa64.md) → [`00bfba58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfba58.md) FUN_00bfba58

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bfacd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfacd0.md) · 呼出先 4件 [`00bface8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bface8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00bfbcc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfbcc4.md) · 呼出先 4件 [`00bfbcdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfbcdc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfaae0 ["INT_ADD", "register:40f0:8", ["const:bfaae0:8", "const:4:8"]]
- 00bfaae0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bfbad4 ["INT_ADD", "register:40f0:8", ["const:bfbad4:8", "const:4:8"]]
+ 00bfbad4 ["CALL", null, ["callee:00c58f30:8"]]
- 00bfab24 ["INT_ADD", "register:40f0:8", ["const:bfab24:8", "const:4:8"]]
- 00bfab24 ["CALL", null, ["callee:00c590a0:8"]]
+ 00bfbb18 ["INT_ADD", "register:40f0:8", ["const:bfbb18:8", "const:4:8"]]
+ 00bfbb18 ["CALL", null, ["callee:00c590a0:8"]]
- 00bfab38 ["INT_ADD", "register:40f0:8", ["const:bfab38:8", "const:4:8"]]
- 00bfab38 ["CALL", null, ["callee:00c58f50:8"]]
+ 00bfbb2c ["INT_ADD", "register:40f0:8", ["const:bfbb2c:8", "const:4:8"]]
+ 00bfbb2c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-836932a50c8bf0db42079ab2445e9b5f"></a>

### [`00bfab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfab60.md) → [`00bfbb54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfbb54.md) FUN_00bfbb54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bfacdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfacdc.md) · 呼出先 5件 [`00bfad00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfad00.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00bfbcd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfbcd0.md) · 呼出先 5件 [`00bfbcf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfbcf4.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfabd4 ["INT_ADD", "register:40f0:8", ["const:bfabd4:8", "const:4:8"]]
- 00bfabd4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bfbbc8 ["INT_ADD", "register:40f0:8", ["const:bfbbc8:8", "const:4:8"]]
+ 00bfbbc8 ["CALL", null, ["callee:00c58f30:8"]]
- 00bfac08 ["INT_ADD", "register:40f0:8", ["const:bfac08:8", "const:4:8"]]
- 00bfac08 ["CALL", null, ["callee:00c590a0:8"]]
+ 00bfbbfc ["INT_ADD", "register:40f0:8", ["const:bfbbfc:8", "const:4:8"]]
+ 00bfbbfc ["CALL", null, ["callee:00c590a0:8"]]
- 00bfac1c ["INT_ADD", "register:40f0:8", ["const:bfac1c:8", "const:4:8"]]
- 00bfac1c ["CALL", null, ["callee:00c58f50:8"]]
+ 00bfbc10 ["INT_ADD", "register:40f0:8", ["const:bfbc10:8", "const:4:8"]]
+ 00bfbc10 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-6649a3f58f70e57bf8d528174a457d2c"></a>

### [`00bfac50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfac50.md) → [`00bfbc44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfbc44.md) _ZNSt6__ndk115__thread_structC1Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c581d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581d0.md) · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`00c591a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591a0.md) · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfac68 ["INT_ADD", "register:40f0:8", ["const:bfac68:8", "const:4:8"]]
- 00bfac68 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bfbc5c ["INT_ADD", "register:40f0:8", ["const:bfbc5c:8", "const:4:8"]]
+ 00bfbc5c ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-c40fc7ba5d1489fc78018cda99821503"></a>

### [`00bfac8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfac8c.md) → [`00bfbc80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfbc80.md) _ZNSt6__ndk115__thread_structD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58220.md) · 呼出先 2件 [`00bfa998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa998.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00c591f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591f0.md) · 呼出先 2件 [`00bfb98c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb98c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfaca8 ["INT_ADD", "register:40f0:8", ["const:bfaca8:8", "const:4:8"]]
- 00bfaca8 ["CALL", null, ["callee:00bfb98c:8"]]
+ 00bfbc9c ["INT_ADD", "register:40f0:8", ["const:bfbc9c:8", "const:4:8"]]
+ 00bfbc9c ["CALL", null, ["callee:00bfb98c:8"]]
~~~


<a id="compare-e68544a74a00aeba07ade381774c5141"></a>

### [`00bfad18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfad18.md) → [`00bfbd0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfbd0c.md) FUN_00bfbd0c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bfa964`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa964.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58220.md)
- 新版 呼出元 1件 [`00bfb958`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb958.md) · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c591f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfad34 ["INT_ADD", "register:40f0:8", ["const:bfad34:8", "const:4:8"]]
- 00bfad34 ["CALL", null, ["callee:00c591f0:8"]]
+ 00bfbd28 ["INT_ADD", "register:40f0:8", ["const:bfbd28:8", "const:4:8"]]
+ 00bfbd28 ["CALL", null, ["callee:00c591f0:8"]]
~~~


<a id="compare-d2af5fa10dd6cc688fe5eb764313944c"></a>

### [`00bfadf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfadf4.md) → [`00bfbde8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfbde8.md) _ZNSt6__ndk113random_deviceD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`005607cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/005607cc.md) [`00c584a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c584a0.md) · 呼出先 1件 [`00c598a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c598a0.md)
- 新版 呼出元 2件 [`00560aec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/00560aec.md) [`00c59470`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59470.md) · 呼出先 1件 [`00c5a870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a870.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfae04 ["INT_ADD", "register:40f0:8", ["const:bfae04:8", "const:4:8"]]
- 00bfae04 ["CALL", null, ["callee:00c5a870:8"]]
+ 00bfbdf8 ["INT_ADD", "register:40f0:8", ["const:bfbdf8:8", "const:4:8"]]
+ 00bfbdf8 ["CALL", null, ["callee:00c5a870:8"]]
~~~


<a id="compare-59d9d9c6eac7d23d0cfa9f95feeb376d"></a>

### [`00bfaeac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfaeac.md) → [`00bfbea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfbea0.md) _ZNKSt6__ndk113random_device7entropyEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e380.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5f350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f350.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfaecc ["INT_ADD", "register:40f0:8", ["const:bfaecc:8", "const:4:8"]]
- 00bfaecc ["CALL", null, ["callee:00c5f350:8"]]
+ 00bfbec0 ["INT_ADD", "register:40f0:8", ["const:bfbec0:8", "const:4:8"]]
+ 00bfbec0 ["CALL", null, ["callee:00c5f350:8"]]
~~~


<a id="compare-82deddafa9b6440bfee7516e0e02b115"></a>

### [`00bfb060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb060.md) → [`00bfc054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfc054.md) _ZNSt6__ndk18ios_base7failureD0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e390.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5f360`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f360.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfb074 ["INT_ADD", "register:40f0:8", ["const:bfb074:8", "const:4:8"]]
- 00bfb074 ["CALL", null, ["callee:00c5f360:8"]]
+ 00bfc068 ["INT_ADD", "register:40f0:8", ["const:bfc068:8", "const:4:8"]]
+ 00bfc068 ["CALL", null, ["callee:00c5f360:8"]]
~~~


<a id="compare-3adf1e495cc466694049eedcffa60fc1"></a>

### [`00bfb08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb08c.md) → [`00bfc080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfc080.md) _ZNSt6__ndk18ios_base16__call_callbacksENS0_5eventE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e3a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3a0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5f370`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f370.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfb0cc ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfb0cc ["INT_ADD", "register:40f0:8", ["const:bfb0cc:8", "const:4:8"]]
- 00bfb0cc ["CALLIND", null, ["register:0:8"]]
+ 00bfc0c0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfc0c0 ["INT_ADD", "register:40f0:8", ["const:bfc0c0:8", "const:4:8"]]
+ 00bfc0c0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8580da0389372eba280e473a9930ae4e"></a>

### [`00bfb0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb0f0.md) → [`00bfc0e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfc0e4.md) _ZNSt6__ndk18ios_base5imbueERKNS_6localeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) [`00c5e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3b0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b870.md) [`00c5f380`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f380.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfb118 ["INT_ADD", "register:40f0:8", ["const:bfb118:8", "const:4:8"]]
- 00bfb118 ["CALL", null, ["callee:00c5b870:8"]]
+ 00bfc10c ["INT_ADD", "register:40f0:8", ["const:bfc10c:8", "const:4:8"]]
+ 00bfc10c ["CALL", null, ["callee:00c5b870:8"]]
- 00bfb124 ["INT_ADD", "register:40f0:8", ["const:bfb124:8", "const:4:8"]]
- 00bfb124 ["CALL", null, ["callee:00c5f380:8"]]
+ 00bfc118 ["INT_ADD", "register:40f0:8", ["const:bfc118:8", "const:4:8"]]
+ 00bfc118 ["CALL", null, ["callee:00c5f380:8"]]
- 00bfb148 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfb148 ["INT_ADD", "register:40f0:8", ["const:bfb148:8", "const:4:8"]]
- 00bfb148 ["CALLIND", null, ["register:0:8"]]
+ 00bfc13c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfc13c ["INT_ADD", "register:40f0:8", ["const:bfc13c:8", "const:4:8"]]
+ 00bfc13c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-eb7a082ddf8630be7363ebd762965afb"></a>

### [`00bfb574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb574.md) → [`00bfc568`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfc568.md) _ZNSt6__ndk18ios_baseD0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3c0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5f390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f390.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfb588 ["INT_ADD", "register:40f0:8", ["const:bfb588:8", "const:4:8"]]
- 00bfb588 ["CALL", null, ["callee:00c5f390:8"]]
+ 00bfc57c ["INT_ADD", "register:40f0:8", ["const:bfc57c:8", "const:4:8"]]
+ 00bfc57c ["CALL", null, ["callee:00c5f390:8"]]
~~~


<a id="compare-bbf569e92eb392cead5468cd2aec41b6"></a>

### [`00bfb6cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb6cc.md) → [`00bfc6c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfc6c0.md) _ZNSt6__ndk18ios_base7copyfmtERKS0_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5e3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3e0.md) · 呼出先 5件 [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58730.md) [`00c5a0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0f0.md) [`00c5e050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e050.md) [`00c5e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3b0.md)
- 新版 呼出元 1件 [`00c5f3b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f3b0.md) · 呼出先 5件 [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c59700`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59700.md) [`00c5b0c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b0c0.md) [`00c5f020`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f020.md) [`00c5f380`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f380.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfb700 ["INT_ADD", "register:40f0:8", ["const:bfb700:8", "const:4:8"]]
- 00bfb700 ["CALL", null, ["callee:00c5b0c0:8"]]
+ 00bfc6f4 ["INT_ADD", "register:40f0:8", ["const:bfc6f4:8", "const:4:8"]]
+ 00bfc6f4 ["CALL", null, ["callee:00c5b0c0:8"]]
- 00bfb710 ["INT_ADD", "register:40f0:8", ["const:bfb710:8", "const:4:8"]]
- 00bfb710 ["CALL", null, ["callee:00c5b0c0:8"]]
+ 00bfc704 ["INT_ADD", "register:40f0:8", ["const:bfc704:8", "const:4:8"]]
+ 00bfc704 ["CALL", null, ["callee:00c5b0c0:8"]]
- 00bfb73c ["INT_ADD", "register:40f0:8", ["const:bfb73c:8", "const:4:8"]]
- 00bfb73c ["CALL", null, ["callee:00c5b0c0:8"]]
+ 00bfc730 ["INT_ADD", "register:40f0:8", ["const:bfc730:8", "const:4:8"]]
+ 00bfc730 ["CALL", null, ["callee:00c5b0c0:8"]]
~~~


<a id="compare-f360f72306e4a2a1d8741140906e40cc"></a>

### [`00bfb98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb98c.md) → [`00bfc980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfc980.md) _ZNSt6__ndk18ios_base4moveERS0_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b870.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfb9c8 ["INT_ADD", "register:40f0:8", ["const:bfb9c8:8", "const:4:8"]]
- 00bfb9c8 ["CALL", null, ["callee:00c5b870:8"]]
+ 00bfc9bc ["INT_ADD", "register:40f0:8", ["const:bfc9bc:8", "const:4:8"]]
+ 00bfc9bc ["CALL", null, ["callee:00c5b870:8"]]
~~~


<a id="compare-0d4204ed8efc93c8f13130a82d68aebd"></a>

### [`00bfba28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfba28.md) → [`00bfca1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfca1c.md) _ZNSt6__ndk18ios_base4swapERS0_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5e3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3f0.md) · 呼出先 3件 [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) [`00c5e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3b0.md)
- 新版 呼出元 1件 [`00c5f3c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f3c0.md) · 呼出先 3件 [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c5b870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b870.md) [`00c5f380`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f380.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfba9c ["INT_ADD", "register:40f0:8", ["const:bfba9c:8", "const:4:8"]]
- 00bfba9c ["CALL", null, ["callee:00c5b870:8"]]
+ 00bfca90 ["INT_ADD", "register:40f0:8", ["const:bfca90:8", "const:4:8"]]
+ 00bfca90 ["CALL", null, ["callee:00c5b870:8"]]
- 00bfbaa8 ["INT_ADD", "register:40f0:8", ["const:bfbaa8:8", "const:4:8"]]
- 00bfbaa8 ["CALL", null, ["callee:00c5f380:8"]]
+ 00bfca9c ["INT_ADD", "register:40f0:8", ["const:bfca9c:8", "const:4:8"]]
+ 00bfca9c ["CALL", null, ["callee:00c5f380:8"]]
- 00bfbab4 ["INT_ADD", "register:40f0:8", ["const:bfbab4:8", "const:4:8"]]
- 00bfbab4 ["CALL", null, ["callee:00c5f380:8"]]
+ 00bfcaa8 ["INT_ADD", "register:40f0:8", ["const:bfcaa8:8", "const:4:8"]]
+ 00bfcaa8 ["CALL", null, ["callee:00c5f380:8"]]
~~~


<a id="compare-ec0de9731e4144af13e43dfff6e00a0a"></a>

### [`00bfbb44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfbb44.md) → [`00bfcb38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfcb38.md) _ZNSt6__ndk18ios_base33__set_badbit_and_consider_rethrowEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58390.md) · 呼出先 1件 [`00c585d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c585d0.md)
- 新版 呼出元 1件 [`00c59360`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59360.md) · 呼出先 1件 [`00c595a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c595a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfbb6c ["INT_ADD", "register:40f0:8", ["const:bfbb6c:8", "const:4:8"]]
- 00bfbb6c ["CALL", null, ["callee:00c595a0:8"]]
+ 00bfcb60 ["INT_ADD", "register:40f0:8", ["const:bfcb60:8", "const:4:8"]]
+ 00bfcb60 ["CALL", null, ["callee:00c595a0:8"]]
~~~


<a id="compare-24992a96f221b05ba89f7d2f9252984f"></a>

### [`00bfbb70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfbb70.md) → [`00bfcb64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfcb64.md) _ZNSt6__ndk18ios_base34__set_failbit_and_consider_rethrowEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5e400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e400.md) · 呼出先 1件 [`00c585d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c585d0.md)
- 新版 呼出元 1件 [`00c5f3d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f3d0.md) · 呼出先 1件 [`00c595a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c595a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfbb98 ["INT_ADD", "register:40f0:8", ["const:bfbb98:8", "const:4:8"]]
- 00bfbb98 ["CALL", null, ["callee:00c595a0:8"]]
+ 00bfcb8c ["INT_ADD", "register:40f0:8", ["const:bfcb8c:8", "const:4:8"]]
+ 00bfcb8c ["CALL", null, ["callee:00c595a0:8"]]
~~~


<a id="compare-95f4f70f26357a00ea285cb255b70770"></a>

### [`00bfbbb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfbbb8.md) → [`00bfcbac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfcbac.md) FUN_00bfcbac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5dfc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfc0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5ef90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ef90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfbbcc ["INT_ADD", "register:40f0:8", ["const:bfbbcc:8", "const:4:8"]]
- 00bfbbcc ["CALL", null, ["callee:00c5ef90:8"]]
+ 00bfcbc0 ["INT_ADD", "register:40f0:8", ["const:bfcbc0:8", "const:4:8"]]
+ 00bfcbc0 ["CALL", null, ["callee:00c5ef90:8"]]
~~~


<a id="compare-81f8c58ae8e46beb16079a078d600e9d"></a>

### [`00bfbbec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfbbec.md) → [`00bfcbe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfcbe0.md) _ZNSt6__ndk19basic_iosIcNS_11char_traitsIcEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e410.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5f3e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f3e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfbc00 ["INT_ADD", "register:40f0:8", ["const:bfbc00:8", "const:4:8"]]
- 00bfbc00 ["CALL", null, ["callee:00c5f3e0:8"]]
+ 00bfcbf4 ["INT_ADD", "register:40f0:8", ["const:bfcbf4:8", "const:4:8"]]
+ 00bfcbf4 ["CALL", null, ["callee:00c5f3e0:8"]]
~~~


<a id="compare-5628f74b0d60089859e9d3af85444e34"></a>

### [`00bfbc18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfbc18.md) → [`00bfcc0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfcc0c.md) _ZNSt6__ndk19basic_iosIcNS_11char_traitsIcEEE7copyfmtERKS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e3a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3a0.md) [`00c5e3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3e0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f370`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f370.md) [`00c5f3b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f3b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfbc40 ["INT_ADD", "register:40f0:8", ["const:bfbc40:8", "const:4:8"]]
- 00bfbc40 ["CALL", null, ["callee:00c5f370:8"]]
+ 00bfcc34 ["INT_ADD", "register:40f0:8", ["const:bfcc34:8", "const:4:8"]]
+ 00bfcc34 ["CALL", null, ["callee:00c5f370:8"]]
- 00bfbc4c ["INT_ADD", "register:40f0:8", ["const:bfbc4c:8", "const:4:8"]]
- 00bfbc4c ["CALL", null, ["callee:00c5f3b0:8"]]
+ 00bfcc40 ["INT_ADD", "register:40f0:8", ["const:bfcc40:8", "const:4:8"]]
+ 00bfcc40 ["CALL", null, ["callee:00c5f3b0:8"]]
- 00bfbc68 ["INT_ADD", "register:40f0:8", ["const:bfbc68:8", "const:4:8"]]
- 00bfbc68 ["CALL", null, ["callee:00c5f370:8"]]
+ 00bfcc5c ["INT_ADD", "register:40f0:8", ["const:bfcc5c:8", "const:4:8"]]
+ 00bfcc5c ["CALL", null, ["callee:00c5f370:8"]]
~~~


<a id="compare-cfdfa1b7f3fc6d4879bbadbe7bf3a292"></a>

### [`00bfbcac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfbcac.md) → [`00bfcca0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfcca0.md) FUN_00bfcca0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e420.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5f3f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f3f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfbcc0 ["INT_ADD", "register:40f0:8", ["const:bfbcc0:8", "const:4:8"]]
- 00bfbcc0 ["CALL", null, ["callee:00c5f3f0:8"]]
+ 00bfccb4 ["INT_ADD", "register:40f0:8", ["const:bfccb4:8", "const:4:8"]]
+ 00bfccb4 ["CALL", null, ["callee:00c5f3f0:8"]]
~~~


<a id="compare-c0e5070f215241102472a66c04e0049f"></a>

### [`00bfbcd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfbcd8.md) → [`00bfcccc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfcccc.md) _ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEE8pubimbueERKNS_6localeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) [`00c5e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3b0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b870.md) [`00c5f380`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f380.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfbd00 ["COPY", "register:0:8", ["register:4048:8"]]
- 00bfbd00 ["INT_ADD", "register:40f0:8", ["const:bfbd00:8", "const:4:8"]]
- 00bfbd00 ["CALLIND", null, ["register:0:8"]]
+ 00bfccf4 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00bfccf4 ["INT_ADD", "register:40f0:8", ["const:bfccf4:8", "const:4:8"]]
+ 00bfccf4 ["CALLIND", null, ["register:0:8"]]
- 00bfbd0c ["INT_ADD", "register:40f0:8", ["const:bfbd0c:8", "const:4:8"]]
- 00bfbd0c ["CALL", null, ["callee:00c5b870:8"]]
+ 00bfcd00 ["INT_ADD", "register:40f0:8", ["const:bfcd00:8", "const:4:8"]]
+ 00bfcd00 ["CALL", null, ["callee:00c5b870:8"]]
~~~


<a id="compare-73e7e2afa4e92a4181ec0a119faa6062"></a>

### [`00bfbda0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfbda0.md) → [`00bfcd94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfcd94.md) _ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEE6snextcEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfbde0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfbde0 ["INT_ADD", "register:40f0:8", ["const:bfbde0:8", "const:4:8"]]
- 00bfbde0 ["CALLIND", null, ["register:0:8"]]
+ 00bfcdd4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfcdd4 ["INT_ADD", "register:40f0:8", ["const:bfcdd4:8", "const:4:8"]]
+ 00bfcdd4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-eda56d0b1c394a09d6471b3212c72753"></a>

### [`00bfbfd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfbfd4.md) → [`00bfcfc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfc/00bfcfc8.md) _ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEEaSERKS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3b0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5f380`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f380.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfbff4 ["INT_ADD", "register:40f0:8", ["const:bfbff4:8", "const:4:8"]]
- 00bfbff4 ["CALL", null, ["callee:00c5f380:8"]]
+ 00bfcfe8 ["INT_ADD", "register:40f0:8", ["const:bfcfe8:8", "const:4:8"]]
+ 00bfcfe8 ["CALL", null, ["callee:00c5f380:8"]]
~~~


<a id="compare-fd77823b91897b72810b32b37951e610"></a>

### [`00bfc024`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfc024.md) → [`00bfd018`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfd/00bfd018.md) _ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEE4swapERS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) [`00c5e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3b0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c5b870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b870.md) [`00c5f380`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f380.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfc048 ["INT_ADD", "register:40f0:8", ["const:bfc048:8", "const:4:8"]]
- 00bfc048 ["CALL", null, ["callee:00c5b870:8"]]
+ 00bfd03c ["INT_ADD", "register:40f0:8", ["const:bfd03c:8", "const:4:8"]]
+ 00bfd03c ["CALL", null, ["callee:00c5b870:8"]]
- 00bfc054 ["INT_ADD", "register:40f0:8", ["const:bfc054:8", "const:4:8"]]
- 00bfc054 ["CALL", null, ["callee:00c5f380:8"]]
+ 00bfd048 ["INT_ADD", "register:40f0:8", ["const:bfd048:8", "const:4:8"]]
+ 00bfd048 ["CALL", null, ["callee:00c5f380:8"]]
- 00bfc060 ["INT_ADD", "register:40f0:8", ["const:bfc060:8", "const:4:8"]]
- 00bfc060 ["CALL", null, ["callee:00c5f380:8"]]
+ 00bfd054 ["INT_ADD", "register:40f0:8", ["const:bfd054:8", "const:4:8"]]
+ 00bfd054 ["CALL", null, ["callee:00c5f380:8"]]
~~~


<a id="compare-cdc6321447986a1fec77cbacf1cc032c"></a>

### [`00bfc128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfc128.md) → [`00bfd11c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfd/00bfd11c.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEEC2EPNS_15basic_streambufIcS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c59280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59280.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfc164 ["INT_ADD", "register:40f0:8", ["const:bfc164:8", "const:4:8"]]
- 00bfc164 ["CALL", null, ["callee:00c59280:8"]]
+ 00bfd158 ["INT_ADD", "register:40f0:8", ["const:bfd158:8", "const:4:8"]]
+ 00bfd158 ["CALL", null, ["callee:00c59280:8"]]
~~~


<a id="compare-b9b90f8b13937303981666c31fd8b449"></a>

### [`00bfc1f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfc1f8.md) → [`00bfd1ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfd/00bfd1ec.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE4swapERS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3f0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5f3c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f3c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfc230 ["INT_ADD", "register:40f0:8", ["const:bfc230:8", "const:4:8"]]
- 00bfc230 ["CALL", null, ["callee:00c5f3c0:8"]]
+ 00bfd224 ["INT_ADD", "register:40f0:8", ["const:bfd224:8", "const:4:8"]]
+ 00bfd224 ["CALL", null, ["callee:00c5f3c0:8"]]
~~~


<a id="compare-db820031eed27c8bb60d0dfdd75663d2"></a>

### [`00bfc448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfc448.md) → [`00bfd43c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfd/00bfd43c.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEErsEPFRNS_9basic_iosIcS2_EES6_E

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfc468 ["COPY", "register:0:8", ["register:4008:8"]]
- 00bfc468 ["INT_ADD", "register:40f0:8", ["const:bfc468:8", "const:4:8"]]
- 00bfc468 ["CALLIND", null, ["register:0:8"]]
+ 00bfd45c ["COPY", "register:0:8", ["register:4008:8"]]
+ 00bfd45c ["INT_ADD", "register:40f0:8", ["const:bfd45c:8", "const:4:8"]]
+ 00bfd45c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-552faa50bb76629abcc3c3728de71a66"></a>

### [`00bfc480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfc480.md) → [`00bfd474`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfd/00bfd474.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEErsEPFRNS_8ios_baseES5_E

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfc4a0 ["COPY", "register:0:8", ["register:4008:8"]]
- 00bfc4a0 ["INT_ADD", "register:40f0:8", ["const:bfc4a0:8", "const:4:8"]]
- 00bfc4a0 ["CALLIND", null, ["register:0:8"]]
+ 00bfd494 ["COPY", "register:0:8", ["register:4008:8"]]
+ 00bfd494 ["INT_ADD", "register:40f0:8", ["const:bfd494:8", "const:4:8"]]
+ 00bfd494 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5b81c4737a5b7f4b200f6bb4b1bde60f"></a>

### [`00bfc4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfc4b8.md) → [`00bfd4ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfd/00bfd4ac.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEErsEPNS_15basic_streambufIcS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5ae70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5ae70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfc4e8 ["INT_ADD", "register:40f0:8", ["const:bfc4e8:8", "const:4:8"]]
- 00bfc4e8 ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bfd4dc ["INT_ADD", "register:40f0:8", ["const:bfd4dc:8", "const:4:8"]]
+ 00bfd4dc ["CALL", null, ["callee:00c5ae70:8"]]
- 00bfc54c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfc54c ["INT_ADD", "register:40f0:8", ["const:bfc54c:8", "const:4:8"]]
- 00bfc54c ["CALLIND", null, ["register:0:8"]]
+ 00bfd540 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfd540 ["INT_ADD", "register:40f0:8", ["const:bfd540:8", "const:4:8"]]
+ 00bfd540 ["CALLIND", null, ["register:0:8"]]
- 00bfc584 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfc584 ["INT_ADD", "register:40f0:8", ["const:bfc584:8", "const:4:8"]]
- 00bfc584 ["CALLIND", null, ["register:0:8"]]
+ 00bfd578 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfd578 ["INT_ADD", "register:40f0:8", ["const:bfd578:8", "const:4:8"]]
+ 00bfd578 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5e9d0da3a4dfa7175a8e7cd0f1d7b8f1"></a>

### [`00bfd6c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfd6c8.md) → [`00bfe6bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfe/00bfe6bc.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE3getEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e430.md) · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)
- 新版 呼出元 1件 [`00c5f400`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f400.md) · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5ae70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5ae70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfd6f0 ["INT_ADD", "register:40f0:8", ["const:bfd6f0:8", "const:4:8"]]
- 00bfd6f0 ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bfe6e4 ["INT_ADD", "register:40f0:8", ["const:bfe6e4:8", "const:4:8"]]
+ 00bfe6e4 ["CALL", null, ["callee:00c5ae70:8"]]
- 00bfd738 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfd738 ["INT_ADD", "register:40f0:8", ["const:bfd738:8", "const:4:8"]]
- 00bfd738 ["CALLIND", null, ["register:0:8"]]
+ 00bfe72c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfe72c ["INT_ADD", "register:40f0:8", ["const:bfe72c:8", "const:4:8"]]
+ 00bfe72c ["CALLIND", null, ["register:0:8"]]
- 00bfd768 ["INT_ADD", "register:40f0:8", ["const:bfd768:8", "const:4:8"]]
- 00bfd768 ["CALL", null, ["callee:00c59340:8"]]
+ 00bfe75c ["INT_ADD", "register:40f0:8", ["const:bfe75c:8", "const:4:8"]]
+ 00bfe75c ["CALL", null, ["callee:00c59340:8"]]
~~~


<a id="compare-88584bc7f43c0cdb123b8258a68748c7"></a>

### [`00bfd7e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfd7e0.md) → [`00bfe7d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfe/00bfe7d4.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE3getERc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e430.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5f400`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f400.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfd7f8 ["INT_ADD", "register:40f0:8", ["const:bfd7f8:8", "const:4:8"]]
- 00bfd7f8 ["CALL", null, ["callee:00c5f400:8"]]
+ 00bfe7ec ["INT_ADD", "register:40f0:8", ["const:bfe7ec:8", "const:4:8"]]
+ 00bfe7ec ["CALL", null, ["callee:00c5f400:8"]]
~~~


<a id="compare-2537a0a7e123b5a24ecc4e5cd8584246"></a>

### [`00bfd8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfd8c0.md) → [`00bfe8b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfe/00bfe8b4.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE3getEPclc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e440.md) · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)
- 新版 呼出元 1件 [`00c5f410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f410.md) · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5ae70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5ae70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfd8fc ["INT_ADD", "register:40f0:8", ["const:bfd8fc:8", "const:4:8"]]
- 00bfd8fc ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bfe8f0 ["INT_ADD", "register:40f0:8", ["const:bfe8f0:8", "const:4:8"]]
+ 00bfe8f0 ["CALL", null, ["callee:00c5ae70:8"]]
- 00bfd978 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfd978 ["INT_ADD", "register:40f0:8", ["const:bfd978:8", "const:4:8"]]
- 00bfd978 ["CALLIND", null, ["register:0:8"]]
+ 00bfe96c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfe96c ["INT_ADD", "register:40f0:8", ["const:bfe96c:8", "const:4:8"]]
+ 00bfe96c ["CALLIND", null, ["register:0:8"]]
- 00bfd9b8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfd9b8 ["INT_ADD", "register:40f0:8", ["const:bfd9b8:8", "const:4:8"]]
- 00bfd9b8 ["CALLIND", null, ["register:0:8"]]
+ 00bfe9ac ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfe9ac ["INT_ADD", "register:40f0:8", ["const:bfe9ac:8", "const:4:8"]]
+ 00bfe9ac ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9806d80f0f46720ca01727245bc2ea35"></a>

### [`00bfdb28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfdb28.md) → [`00bfeb1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfe/00bfeb1c.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE3getERNS_15basic_streambufIcS2_EEc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e450.md) · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)
- 新版 呼出元 1件 [`00c5f420`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f420.md) · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5ae70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5ae70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfdb5c ["INT_ADD", "register:40f0:8", ["const:bfdb5c:8", "const:4:8"]]
- 00bfdb5c ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bfeb50 ["INT_ADD", "register:40f0:8", ["const:bfeb50:8", "const:4:8"]]
+ 00bfeb50 ["CALL", null, ["callee:00c5ae70:8"]]
- 00bfdbc0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfdbc0 ["INT_ADD", "register:40f0:8", ["const:bfdbc0:8", "const:4:8"]]
- 00bfdbc0 ["CALLIND", null, ["register:0:8"]]
+ 00bfebb4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfebb4 ["INT_ADD", "register:40f0:8", ["const:bfebb4:8", "const:4:8"]]
+ 00bfebb4 ["CALLIND", null, ["register:0:8"]]
- 00bfdc04 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfdc04 ["INT_ADD", "register:40f0:8", ["const:bfdc04:8", "const:4:8"]]
- 00bfdc04 ["CALLIND", null, ["register:0:8"]]
+ 00bfebf8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfebf8 ["INT_ADD", "register:40f0:8", ["const:bfebf8:8", "const:4:8"]]
+ 00bfebf8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-bf0d26b4f0776e547803ad8439c34551"></a>

### [`00bfdd3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfdd3c.md) → [`00bfed30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfe/00bfed30.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE7getlineEPclc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e460.md) · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)
- 新版 呼出元 1件 [`00c5f430`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f430.md) · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5ae70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5ae70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfdd7c ["INT_ADD", "register:40f0:8", ["const:bfdd7c:8", "const:4:8"]]
- 00bfdd7c ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bfed70 ["INT_ADD", "register:40f0:8", ["const:bfed70:8", "const:4:8"]]
+ 00bfed70 ["CALL", null, ["callee:00c5ae70:8"]]
- 00bfddc0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfddc0 ["INT_ADD", "register:40f0:8", ["const:bfddc0:8", "const:4:8"]]
- 00bfddc0 ["CALLIND", null, ["register:0:8"]]
+ 00bfedb4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfedb4 ["INT_ADD", "register:40f0:8", ["const:bfedb4:8", "const:4:8"]]
+ 00bfedb4 ["CALLIND", null, ["register:0:8"]]
- 00bfde18 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfde18 ["INT_ADD", "register:40f0:8", ["const:bfde18:8", "const:4:8"]]
- 00bfde18 ["CALLIND", null, ["register:0:8"]]
+ 00bfee0c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfee0c ["INT_ADD", "register:40f0:8", ["const:bfee0c:8", "const:4:8"]]
+ 00bfee0c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-239c132c8a6e70cf9e0f3607f59f5ffd"></a>

### [`00bfdf80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfdf80.md) → [`00bfef74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfe/00bfef74.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE6ignoreEli

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5ae70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5ae70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfdfb4 ["INT_ADD", "register:40f0:8", ["const:bfdfb4:8", "const:4:8"]]
- 00bfdfb4 ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bfefa8 ["INT_ADD", "register:40f0:8", ["const:bfefa8:8", "const:4:8"]]
+ 00bfefa8 ["CALL", null, ["callee:00c5ae70:8"]]
- 00bfe00c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfe00c ["INT_ADD", "register:40f0:8", ["const:bfe00c:8", "const:4:8"]]
- 00bfe00c ["CALLIND", null, ["register:0:8"]]
+ 00bff000 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bff000 ["INT_ADD", "register:40f0:8", ["const:bff000:8", "const:4:8"]]
+ 00bff000 ["CALLIND", null, ["register:0:8"]]
- 00bfe088 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfe088 ["INT_ADD", "register:40f0:8", ["const:bfe088:8", "const:4:8"]]
- 00bfe088 ["CALLIND", null, ["register:0:8"]]
+ 00bff07c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bff07c ["INT_ADD", "register:40f0:8", ["const:bff07c:8", "const:4:8"]]
+ 00bff07c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-faa2e768ae1733f22ff20ed19d162632"></a>

### [`00bfe13c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfe13c.md) → [`00bff130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bff/00bff130.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE4peekEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5ae70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5ae70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfe164 ["INT_ADD", "register:40f0:8", ["const:bfe164:8", "const:4:8"]]
- 00bfe164 ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bff158 ["INT_ADD", "register:40f0:8", ["const:bff158:8", "const:4:8"]]
+ 00bff158 ["CALL", null, ["callee:00c5ae70:8"]]
- 00bfe1a4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfe1a4 ["INT_ADD", "register:40f0:8", ["const:bfe1a4:8", "const:4:8"]]
- 00bfe1a4 ["CALLIND", null, ["register:0:8"]]
+ 00bff198 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bff198 ["INT_ADD", "register:40f0:8", ["const:bff198:8", "const:4:8"]]
+ 00bff198 ["CALLIND", null, ["register:0:8"]]
- 00bfe1cc ["INT_ADD", "register:40f0:8", ["const:bfe1cc:8", "const:4:8"]]
- 00bfe1cc ["CALL", null, ["callee:00c59340:8"]]
+ 00bff1c0 ["INT_ADD", "register:40f0:8", ["const:bff1c0:8", "const:4:8"]]
+ 00bff1c0 ["CALL", null, ["callee:00c59340:8"]]
~~~


<a id="compare-24618cd2f601a79c1866e225d3ea4766"></a>

### [`00bfe23c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfe23c.md) → [`00bff230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bff/00bff230.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE4readEPcl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c591a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c591a0.md) · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)
- 新版 呼出元 1件 [`00c5a170`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a170.md) · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5ae70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5ae70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfe26c ["INT_ADD", "register:40f0:8", ["const:bfe26c:8", "const:4:8"]]
- 00bfe26c ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bff260 ["INT_ADD", "register:40f0:8", ["const:bff260:8", "const:4:8"]]
+ 00bff260 ["CALL", null, ["callee:00c5ae70:8"]]
- 00bfe298 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfe298 ["INT_ADD", "register:40f0:8", ["const:bfe298:8", "const:4:8"]]
- 00bfe298 ["CALLIND", null, ["register:0:8"]]
+ 00bff28c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bff28c ["INT_ADD", "register:40f0:8", ["const:bff28c:8", "const:4:8"]]
+ 00bff28c ["CALLIND", null, ["register:0:8"]]
- 00bfe2c8 ["INT_ADD", "register:40f0:8", ["const:bfe2c8:8", "const:4:8"]]
- 00bfe2c8 ["CALL", null, ["callee:00c59340:8"]]
+ 00bff2bc ["INT_ADD", "register:40f0:8", ["const:bff2bc:8", "const:4:8"]]
+ 00bff2bc ["CALL", null, ["callee:00c59340:8"]]
~~~


<a id="compare-31635775e52b5d2f1d179508d90df565"></a>

### [`00bfe334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfe334.md) → [`00bff328`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bff/00bff328.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE8readsomeEPcl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5ae70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5ae70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfe364 ["INT_ADD", "register:40f0:8", ["const:bfe364:8", "const:4:8"]]
- 00bfe364 ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bff358 ["INT_ADD", "register:40f0:8", ["const:bff358:8", "const:4:8"]]
+ 00bff358 ["CALL", null, ["callee:00c5ae70:8"]]
- 00bfe3a4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfe3a4 ["INT_ADD", "register:40f0:8", ["const:bfe3a4:8", "const:4:8"]]
- 00bfe3a4 ["CALLIND", null, ["register:0:8"]]
+ 00bff398 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bff398 ["INT_ADD", "register:40f0:8", ["const:bff398:8", "const:4:8"]]
+ 00bff398 ["CALLIND", null, ["register:0:8"]]
- 00bfe3f0 ["COPY", "register:0:8", ["register:4048:8"]]
- 00bfe3f0 ["INT_ADD", "register:40f0:8", ["const:bfe3f0:8", "const:4:8"]]
- 00bfe3f0 ["CALLIND", null, ["register:0:8"]]
+ 00bff3e4 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00bff3e4 ["INT_ADD", "register:40f0:8", ["const:bff3e4:8", "const:4:8"]]
+ 00bff3e4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-29031949b3f57b3c0a5080044afddf22"></a>

### [`00bfe484`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfe484.md) → [`00bff478`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bff/00bff478.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE7putbackEc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5ae70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5ae70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfe4c4 ["INT_ADD", "register:40f0:8", ["const:bfe4c4:8", "const:4:8"]]
- 00bfe4c4 ["CALL", null, ["callee:00c59340:8"]]
+ 00bff4b8 ["INT_ADD", "register:40f0:8", ["const:bff4b8:8", "const:4:8"]]
+ 00bff4b8 ["CALL", null, ["callee:00c59340:8"]]
- 00bfe4d4 ["INT_ADD", "register:40f0:8", ["const:bfe4d4:8", "const:4:8"]]
- 00bfe4d4 ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bff4c8 ["INT_ADD", "register:40f0:8", ["const:bff4c8:8", "const:4:8"]]
+ 00bff4c8 ["CALL", null, ["callee:00c5ae70:8"]]
- 00bfe528 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfe528 ["INT_ADD", "register:40f0:8", ["const:bfe528:8", "const:4:8"]]
- 00bfe528 ["CALLIND", null, ["register:0:8"]]
+ 00bff51c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bff51c ["INT_ADD", "register:40f0:8", ["const:bff51c:8", "const:4:8"]]
+ 00bff51c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d69f8586842d39dd8997820e66ba1674"></a>

### [`00bfe5b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfe5b8.md) → [`00bff5ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bff/00bff5ac.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE5ungetEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5ae70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5ae70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfe5f4 ["INT_ADD", "register:40f0:8", ["const:bfe5f4:8", "const:4:8"]]
- 00bfe5f4 ["CALL", null, ["callee:00c59340:8"]]
+ 00bff5e8 ["INT_ADD", "register:40f0:8", ["const:bff5e8:8", "const:4:8"]]
+ 00bff5e8 ["CALL", null, ["callee:00c59340:8"]]
- 00bfe604 ["INT_ADD", "register:40f0:8", ["const:bfe604:8", "const:4:8"]]
- 00bfe604 ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bff5f8 ["INT_ADD", "register:40f0:8", ["const:bff5f8:8", "const:4:8"]]
+ 00bff5f8 ["CALL", null, ["callee:00c5ae70:8"]]
- 00bfe650 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfe650 ["INT_ADD", "register:40f0:8", ["const:bfe650:8", "const:4:8"]]
- 00bfe650 ["CALLIND", null, ["register:0:8"]]
+ 00bff644 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bff644 ["INT_ADD", "register:40f0:8", ["const:bff644:8", "const:4:8"]]
+ 00bff644 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-0c81c081fc2a5d8339dbd3872d57d3d7"></a>

### [`00bfe6e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfe6e0.md) → [`00bff6d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bff/00bff6d4.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE4syncEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5ae70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5ae70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfe704 ["INT_ADD", "register:40f0:8", ["const:bfe704:8", "const:4:8"]]
- 00bfe704 ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bff6f8 ["INT_ADD", "register:40f0:8", ["const:bff6f8:8", "const:4:8"]]
+ 00bff6f8 ["CALL", null, ["callee:00c5ae70:8"]]
- 00bfe72c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfe72c ["INT_ADD", "register:40f0:8", ["const:bfe72c:8", "const:4:8"]]
- 00bfe72c ["CALLIND", null, ["register:0:8"]]
+ 00bff720 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bff720 ["INT_ADD", "register:40f0:8", ["const:bff720:8", "const:4:8"]]
+ 00bff720 ["CALLIND", null, ["register:0:8"]]
- 00bfe750 ["INT_ADD", "register:40f0:8", ["const:bfe750:8", "const:4:8"]]
- 00bfe750 ["CALL", null, ["callee:00c59340:8"]]
+ 00bff744 ["INT_ADD", "register:40f0:8", ["const:bff744:8", "const:4:8"]]
+ 00bff744 ["CALL", null, ["callee:00c59340:8"]]
~~~


<a id="compare-08d1e0c316b4cb7312d7d479bc949b33"></a>

### [`00bfe7d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfe7d0.md) → [`00bff7c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bff/00bff7c4.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE5seekgENS_4fposI9mbstate_tEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c598d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c598d0.md) · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)
- 新版 呼出元 1件 [`00c5a8a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a8a0.md) · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5ae70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5ae70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfe80c ["INT_ADD", "register:40f0:8", ["const:bfe80c:8", "const:4:8"]]
- 00bfe80c ["CALL", null, ["callee:00c59340:8"]]
+ 00bff800 ["INT_ADD", "register:40f0:8", ["const:bff800:8", "const:4:8"]]
+ 00bff800 ["CALL", null, ["callee:00c59340:8"]]
- 00bfe81c ["INT_ADD", "register:40f0:8", ["const:bfe81c:8", "const:4:8"]]
- 00bfe81c ["CALL", null, ["callee:00c5ae70:8"]]
+ 00bff810 ["INT_ADD", "register:40f0:8", ["const:bff810:8", "const:4:8"]]
+ 00bff810 ["CALL", null, ["callee:00c5ae70:8"]]
- 00bfe84c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfe84c ["INT_ADD", "register:40f0:8", ["const:bfe84c:8", "const:4:8"]]
- 00bfe84c ["CALLIND", null, ["register:0:8"]]
+ 00bff840 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bff840 ["INT_ADD", "register:40f0:8", ["const:bff840:8", "const:4:8"]]
+ 00bff840 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c085c19f9eb9491060a3fd2559972877"></a>

### [`00bfe8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfe8e0.md) → [`00bff8d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bff/00bff8d4.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEEC2EPNS_15basic_streambufIcS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c59280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59280.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfe918 ["INT_ADD", "register:40f0:8", ["const:bfe918:8", "const:4:8"]]
- 00bfe918 ["CALL", null, ["callee:00c59280:8"]]
+ 00bff90c ["INT_ADD", "register:40f0:8", ["const:bff90c:8", "const:4:8"]]
+ 00bff90c ["CALL", null, ["callee:00c59280:8"]]
~~~


<a id="compare-3aad40a159f1fdf987951255e39f4d67"></a>

### [`00bfe9ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfe9ac.md) → [`00bff9a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bff/00bff9a0.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEE4swapERS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3f0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5f3c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f3c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfe9dc ["INT_ADD", "register:40f0:8", ["const:bfe9dc:8", "const:4:8"]]
- 00bfe9dc ["CALL", null, ["callee:00c5f3c0:8"]]
+ 00bff9d0 ["INT_ADD", "register:40f0:8", ["const:bff9d0:8", "const:4:8"]]
+ 00bff9d0 ["CALL", null, ["callee:00c5f3c0:8"]]
~~~


<a id="compare-11b1cf961c50e8ed639518d4be7ba072"></a>

### [`00bfea10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfea10.md) → [`00bffa04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bff/00bffa04.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEE6sentryC1ERS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58330.md) · 呼出先 1件 [`00c58fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58fc0.md)
- 新版 呼出元 1件 [`00c59300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59300.md) · 呼出先 1件 [`00c59f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59f90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfea54 ["INT_ADD", "register:40f0:8", ["const:bfea54:8", "const:4:8"]]
- 00bfea54 ["CALL", null, ["callee:00c59f90:8"]]
+ 00bffa48 ["INT_ADD", "register:40f0:8", ["const:bffa48:8", "const:4:8"]]
+ 00bffa48 ["CALL", null, ["callee:00c59f90:8"]]
~~~


<a id="compare-0904e356e901451c8bdf0427921570a5"></a>

### [`00bfea74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfea74.md) → [`00bffa68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bff/00bffa68.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEE6sentryD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c58380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58380.md) · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5d1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1c0.md)
- 新版 呼出元 1件 [`00c59350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59350.md) · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5e190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e190.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfeab0 ["INT_ADD", "register:40f0:8", ["const:bfeab0:8", "const:4:8"]]
- 00bfeab0 ["CALL", null, ["callee:00c5e190:8"]]
+ 00bffaa4 ["INT_ADD", "register:40f0:8", ["const:bffaa4:8", "const:4:8"]]
+ 00bffaa4 ["CALL", null, ["callee:00c5e190:8"]]
- 00bfead4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfead4 ["INT_ADD", "register:40f0:8", ["const:bfead4:8", "const:4:8"]]
- 00bfead4 ["CALLIND", null, ["register:0:8"]]
+ 00bffac8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bffac8 ["INT_ADD", "register:40f0:8", ["const:bffac8:8", "const:4:8"]]
+ 00bffac8 ["CALLIND", null, ["register:0:8"]]
- 00bfeaf8 ["INT_ADD", "register:40f0:8", ["const:bfeaf8:8", "const:4:8"]]
- 00bfeaf8 ["CALL", null, ["callee:00c59340:8"]]
+ 00bffaec ["INT_ADD", "register:40f0:8", ["const:bffaec:8", "const:4:8"]]
+ 00bffaec ["CALL", null, ["callee:00c59340:8"]]
~~~


<a id="compare-a0dc52496d1eb221621d7c3973b983bb"></a>

### [`00bfeb28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfeb28.md) → [`00bffb1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bff/00bffb1c.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEElsEPFRNS_9basic_iosIcS2_EES6_E

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfeb48 ["COPY", "register:0:8", ["register:4008:8"]]
- 00bfeb48 ["INT_ADD", "register:40f0:8", ["const:bfeb48:8", "const:4:8"]]
- 00bfeb48 ["CALLIND", null, ["register:0:8"]]
+ 00bffb3c ["COPY", "register:0:8", ["register:4008:8"]]
+ 00bffb3c ["INT_ADD", "register:40f0:8", ["const:bffb3c:8", "const:4:8"]]
+ 00bffb3c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b5fdc5368596ca29779ac824345d6f65"></a>

### [`00bfeb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfeb60.md) → [`00bffb54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bff/00bffb54.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEElsEPFRNS_8ios_baseES5_E

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfeb80 ["COPY", "register:0:8", ["register:4008:8"]]
- 00bfeb80 ["INT_ADD", "register:40f0:8", ["const:bfeb80:8", "const:4:8"]]
- 00bfeb80 ["CALLIND", null, ["register:0:8"]]
+ 00bffb74 ["COPY", "register:0:8", ["register:4008:8"]]
+ 00bffb74 ["INT_ADD", "register:40f0:8", ["const:bffb74:8", "const:4:8"]]
+ 00bffb74 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-235483113c8faf81b38316ac5f4a2f61"></a>

### [`00bff500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bff500.md) → [`00c004f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c00/00c004f4.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEE3putEc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58330.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c58380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58380.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c59300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59300.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c59350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59350.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bff524 ["INT_ADD", "register:40f0:8", ["const:bff524:8", "const:4:8"]]
- 00bff524 ["CALL", null, ["callee:00c59300:8"]]
+ 00c00518 ["INT_ADD", "register:40f0:8", ["const:c00518:8", "const:4:8"]]
+ 00c00518 ["CALL", null, ["callee:00c59300:8"]]
- 00bff56c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bff56c ["INT_ADD", "register:40f0:8", ["const:bff56c:8", "const:4:8"]]
- 00bff56c ["CALLIND", null, ["register:0:8"]]
+ 00c00560 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c00560 ["INT_ADD", "register:40f0:8", ["const:c00560:8", "const:4:8"]]
+ 00c00560 ["CALLIND", null, ["register:0:8"]]
- 00bff58c ["INT_ADD", "register:40f0:8", ["const:bff58c:8", "const:4:8"]]
- 00bff58c ["CALL", null, ["callee:00c59340:8"]]
+ 00c00580 ["INT_ADD", "register:40f0:8", ["const:c00580:8", "const:4:8"]]
+ 00c00580 ["CALL", null, ["callee:00c59340:8"]]
~~~


<a id="compare-3e53bfdce5119db59d3dd63932faa4e7"></a>

### [`00bff5f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bff5f8.md) → [`00c005ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c00/00c005ec.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEE5tellpEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bff648 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bff648 ["INT_ADD", "register:40f0:8", ["const:bff648:8", "const:4:8"]]
- 00bff648 ["CALLIND", null, ["register:0:8"]]
+ 00c0063c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0063c ["INT_ADD", "register:40f0:8", ["const:c0063c:8", "const:4:8"]]
+ 00c0063c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9a7ce2b7ed491b39f48cf7e6d4ee30f9"></a>

### [`00bff658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bff658.md) → [`00c0064c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c00/00c0064c.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEE5seekpENS_4fposI9mbstate_tEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58330.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c58380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58380.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c59300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59300.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c59350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59350.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bff684 ["INT_ADD", "register:40f0:8", ["const:bff684:8", "const:4:8"]]
- 00bff684 ["CALL", null, ["callee:00c59300:8"]]
+ 00c00678 ["INT_ADD", "register:40f0:8", ["const:c00678:8", "const:4:8"]]
+ 00c00678 ["CALL", null, ["callee:00c59300:8"]]
- 00bff6bc ["COPY", "register:0:8", ["register:4040:8"]]
- 00bff6bc ["INT_ADD", "register:40f0:8", ["const:bff6bc:8", "const:4:8"]]
- 00bff6bc ["CALLIND", null, ["register:0:8"]]
+ 00c006b0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c006b0 ["INT_ADD", "register:40f0:8", ["const:c006b0:8", "const:4:8"]]
+ 00c006b0 ["CALLIND", null, ["register:0:8"]]
- 00bff6dc ["INT_ADD", "register:40f0:8", ["const:bff6dc:8", "const:4:8"]]
- 00bff6dc ["CALL", null, ["callee:00c59340:8"]]
+ 00c006d0 ["INT_ADD", "register:40f0:8", ["const:c006d0:8", "const:4:8"]]
+ 00c006d0 ["CALL", null, ["callee:00c59340:8"]]
~~~


<a id="compare-38b17f5b4df0831cbdc513bb0d99244b"></a>

### [`00bff71c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bff71c.md) → [`00c00710`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c00/00c00710.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEE5seekpExNS_8ios_base7seekdirE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58330.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c58380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58380.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c59300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59300.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c59350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59350.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bff748 ["INT_ADD", "register:40f0:8", ["const:bff748:8", "const:4:8"]]
- 00bff748 ["CALL", null, ["callee:00c59300:8"]]
+ 00c0073c ["INT_ADD", "register:40f0:8", ["const:c0073c:8", "const:4:8"]]
+ 00c0073c ["CALL", null, ["callee:00c59300:8"]]
- 00bff780 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bff780 ["INT_ADD", "register:40f0:8", ["const:bff780:8", "const:4:8"]]
- 00bff780 ["CALLIND", null, ["register:0:8"]]
+ 00c00774 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c00774 ["INT_ADD", "register:40f0:8", ["const:c00774:8", "const:4:8"]]
+ 00c00774 ["CALLIND", null, ["register:0:8"]]
- 00bff7a0 ["INT_ADD", "register:40f0:8", ["const:bff7a0:8", "const:4:8"]]
- 00bff7a0 ["CALL", null, ["callee:00c59340:8"]]
+ 00c00794 ["INT_ADD", "register:40f0:8", ["const:c00794:8", "const:4:8"]]
+ 00c00794 ["CALL", null, ["callee:00c59340:8"]]
~~~


<a id="compare-e10adf831f4fc9003140d6cac60a23c9"></a>

### [`00bff7e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bff7e0.md) → [`00c007d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c00/00c007d4.md) _ZNSt6__ndk114basic_iostreamIcNS_11char_traitsIcEEEC2EPNS_15basic_streambufIcS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c59280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59280.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bff828 ["INT_ADD", "register:40f0:8", ["const:bff828:8", "const:4:8"]]
- 00bff828 ["CALL", null, ["callee:00c59280:8"]]
+ 00c0081c ["INT_ADD", "register:40f0:8", ["const:c0081c:8", "const:4:8"]]
+ 00c0081c ["CALL", null, ["callee:00c59280:8"]]
~~~


<a id="compare-2aca13f6ffda680fa253125711533010"></a>

### [`00bff940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bff940.md) → [`00c00934`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c00/00c00934.md) _ZNSt6__ndk114basic_iostreamIcNS_11char_traitsIcEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5e180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e180.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bff958 ["INT_ADD", "register:40f0:8", ["const:bff958:8", "const:4:8"]]
- 00bff958 ["CALL", null, ["callee:00c5e180:8"]]
+ 00c0094c ["INT_ADD", "register:40f0:8", ["const:c0094c:8", "const:4:8"]]
+ 00c0094c ["CALL", null, ["callee:00c5e180:8"]]
~~~


<a id="compare-eefced0febb18a26fbd162173a9bb375"></a>

### [`00bff970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bff970.md) → [`00c00964`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c00/00c00964.md) _ZThn16_NSt6__ndk114basic_iostreamIcNS_11char_traitsIcEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5e180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e180.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bff988 ["INT_ADD", "register:40f0:8", ["const:bff988:8", "const:4:8"]]
- 00bff988 ["CALL", null, ["callee:00c5e180:8"]]
+ 00c0097c ["INT_ADD", "register:40f0:8", ["const:c0097c:8", "const:4:8"]]
+ 00c0097c ["CALL", null, ["callee:00c5e180:8"]]
~~~


<a id="compare-f56710212921834a495ea4a258ce2012"></a>

### [`00bff9a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bff9a0.md) → [`00c00994`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c00/00c00994.md) _ZTv0_n24_NSt6__ndk114basic_iostreamIcNS_11char_traitsIcEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5e180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e180.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bff9c0 ["INT_ADD", "register:40f0:8", ["const:bff9c0:8", "const:4:8"]]
- 00bff9c0 ["CALL", null, ["callee:00c5e180:8"]]
+ 00c009b4 ["INT_ADD", "register:40f0:8", ["const:c009b4:8", "const:4:8"]]
+ 00c009b4 ["CALL", null, ["callee:00c5e180:8"]]
~~~


<a id="compare-d898618566307433046cb636fce2de76"></a>

### [`00bff9d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bff9d8.md) → [`00c009cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c00/00c009cc.md) _ZNSt6__ndk114basic_iostreamIcNS_11char_traitsIcEEE4swapERS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3f0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5f3c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f3c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bffa10 ["INT_ADD", "register:40f0:8", ["const:bffa10:8", "const:4:8"]]
- 00bffa10 ["CALL", null, ["callee:00c5f3c0:8"]]
+ 00c00a04 ["INT_ADD", "register:40f0:8", ["const:c00a04:8", "const:4:8"]]
+ 00c00a04 ["CALL", null, ["callee:00c5f3c0:8"]]
~~~


<a id="compare-b617a5a41dc5b323d62120f907b4b6ab"></a>

### [`00bffa4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bffa4c.md) → [`00c00a40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c00/00c00a40.md) _ZNSt6__ndk19basic_iosIwNS_11char_traitsIwEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e480.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5f450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f450.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bffa60 ["INT_ADD", "register:40f0:8", ["const:bffa60:8", "const:4:8"]]
- 00bffa60 ["CALL", null, ["callee:00c5f450:8"]]
+ 00c00a54 ["INT_ADD", "register:40f0:8", ["const:c00a54:8", "const:4:8"]]
+ 00c00a54 ["CALL", null, ["callee:00c5f450:8"]]
~~~


<a id="compare-cc4bcc9dc192b8f7675662e5e57e9b72"></a>

### [`00bffa78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bffa78.md) → [`00c00a6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c00/00c00a6c.md) _ZNSt6__ndk19basic_iosIwNS_11char_traitsIwEEE7copyfmtERKS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e3a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3a0.md) [`00c5e3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3e0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f370`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f370.md) [`00c5f3b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f3b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bffaa0 ["INT_ADD", "register:40f0:8", ["const:bffaa0:8", "const:4:8"]]
- 00bffaa0 ["CALL", null, ["callee:00c5f370:8"]]
+ 00c00a94 ["INT_ADD", "register:40f0:8", ["const:c00a94:8", "const:4:8"]]
+ 00c00a94 ["CALL", null, ["callee:00c5f370:8"]]
- 00bffaac ["INT_ADD", "register:40f0:8", ["const:bffaac:8", "const:4:8"]]
- 00bffaac ["CALL", null, ["callee:00c5f3b0:8"]]
+ 00c00aa0 ["INT_ADD", "register:40f0:8", ["const:c00aa0:8", "const:4:8"]]
+ 00c00aa0 ["CALL", null, ["callee:00c5f3b0:8"]]
- 00bffac8 ["INT_ADD", "register:40f0:8", ["const:bffac8:8", "const:4:8"]]
- 00bffac8 ["CALL", null, ["callee:00c5f370:8"]]
+ 00c00abc ["INT_ADD", "register:40f0:8", ["const:c00abc:8", "const:4:8"]]
+ 00c00abc ["CALL", null, ["callee:00c5f370:8"]]
~~~


<a id="compare-243c2492d9eeda408d696eea544254b0"></a>

### [`00bffb0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bffb0c.md) → [`00c00b00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c00/00c00b00.md) _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4a0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5f470`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f470.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bffb20 ["INT_ADD", "register:40f0:8", ["const:bffb20:8", "const:4:8"]]
- 00bffb20 ["CALL", null, ["callee:00c5f470:8"]]
+ 00c00b14 ["INT_ADD", "register:40f0:8", ["const:c00b14:8", "const:4:8"]]
+ 00c00b14 ["CALL", null, ["callee:00c5f470:8"]]
~~~


<a id="compare-0d8fd7c13fc33dc471b65ccd90207151"></a>

### [`00bffb38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bffb38.md) → [`00c00b2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c00/00c00b2c.md) _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEE8pubimbueERKNS_6localeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) [`00c5e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3b0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b870.md) [`00c5f380`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f380.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bffb60 ["COPY", "register:0:8", ["register:4048:8"]]
- 00bffb60 ["INT_ADD", "register:40f0:8", ["const:bffb60:8", "const:4:8"]]
- 00bffb60 ["CALLIND", null, ["register:0:8"]]
+ 00c00b54 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00c00b54 ["INT_ADD", "register:40f0:8", ["const:c00b54:8", "const:4:8"]]
+ 00c00b54 ["CALLIND", null, ["register:0:8"]]
- 00bffb6c ["INT_ADD", "register:40f0:8", ["const:bffb6c:8", "const:4:8"]]
- 00bffb6c ["CALL", null, ["callee:00c5b870:8"]]
+ 00c00b60 ["INT_ADD", "register:40f0:8", ["const:c00b60:8", "const:4:8"]]
+ 00c00b60 ["CALL", null, ["callee:00c5b870:8"]]
~~~


<a id="compare-8d9fd6639586c68ca22de860864fb4b1"></a>

### [`00bffc04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bffc04.md) → [`00c00bf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c00/00c00bf8.md) _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEE6snextcEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bffc50 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bffc50 ["INT_ADD", "register:40f0:8", ["const:bffc50:8", "const:4:8"]]
- 00bffc50 ["CALLIND", null, ["register:0:8"]]
+ 00c00c44 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c00c44 ["INT_ADD", "register:40f0:8", ["const:c00c44:8", "const:4:8"]]
+ 00c00c44 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e97bd3b0c37cb0ccc58e1e740991fd7d"></a>

### [`00bffe40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bffe40.md) → [`00c00e34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c00/00c00e34.md) _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEEaSERKS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3b0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5f380`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f380.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bffe60 ["INT_ADD", "register:40f0:8", ["const:bffe60:8", "const:4:8"]]
- 00bffe60 ["CALL", null, ["callee:00c5f380:8"]]
+ 00c00e54 ["INT_ADD", "register:40f0:8", ["const:c00e54:8", "const:4:8"]]
+ 00c00e54 ["CALL", null, ["callee:00c5f380:8"]]
~~~


<a id="compare-1326a1ed3355074f9b7aed283d5f4e77"></a>

### [`00bffe90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bffe90.md) → [`00c00e84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c00/00c00e84.md) _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEE4swapERS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) [`00c5e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3b0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c5b870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b870.md) [`00c5f380`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f380.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bffeb4 ["INT_ADD", "register:40f0:8", ["const:bffeb4:8", "const:4:8"]]
- 00bffeb4 ["CALL", null, ["callee:00c5b870:8"]]
+ 00c00ea8 ["INT_ADD", "register:40f0:8", ["const:c00ea8:8", "const:4:8"]]
+ 00c00ea8 ["CALL", null, ["callee:00c5b870:8"]]
- 00bffec0 ["INT_ADD", "register:40f0:8", ["const:bffec0:8", "const:4:8"]]
- 00bffec0 ["CALL", null, ["callee:00c5f380:8"]]
+ 00c00eb4 ["INT_ADD", "register:40f0:8", ["const:c00eb4:8", "const:4:8"]]
+ 00c00eb4 ["CALL", null, ["callee:00c5f380:8"]]
- 00bffecc ["INT_ADD", "register:40f0:8", ["const:bffecc:8", "const:4:8"]]
- 00bffecc ["CALL", null, ["callee:00c5f380:8"]]
+ 00c00ec0 ["INT_ADD", "register:40f0:8", ["const:c00ec0:8", "const:4:8"]]
+ 00c00ec0 ["CALL", null, ["callee:00c5f380:8"]]
~~~


<a id="compare-2f1eee283ca7385b1486d096e60b5edd"></a>

### [`00bfffdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bfffdc.md) → [`00c00fd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c00/00c00fd0.md) _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEE6xsgetnEPwl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c00060 ["INT_ADD", "register:40f0:8", ["const:c00060:8", "const:4:8"]]
- 00c00060 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00c01054 ["INT_ADD", "register:40f0:8", ["const:c01054:8", "const:4:8"]]
+ 00c01054 ["CALL", null, ["callee:00c58fe0:8"]]
- 00c00078 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c00078 ["INT_ADD", "register:40f0:8", ["const:c00078:8", "const:4:8"]]
- 00c00078 ["CALLIND", null, ["register:0:8"]]
+ 00c0106c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0106c ["INT_ADD", "register:40f0:8", ["const:c0106c:8", "const:4:8"]]
+ 00c0106c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-92c631c8f0e49c1cf972e5510efde159"></a>

### [`00c000bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c000bc.md) → [`00c010b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c01/00c010b0.md) _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEE5uflowEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c000d8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c000d8 ["INT_ADD", "register:40f0:8", ["const:c000d8:8", "const:4:8"]]
- 00c000d8 ["CALLIND", null, ["register:0:8"]]
+ 00c010cc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c010cc ["INT_ADD", "register:40f0:8", ["const:c010cc:8", "const:4:8"]]
+ 00c010cc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b34fb6cef6b7dc01b756670cae81d36f"></a>

### [`00c0010c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c0010c.md) → [`00c01100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c01/00c01100.md) _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEE6xsputnEPKwl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c00188 ["INT_ADD", "register:40f0:8", ["const:c00188:8", "const:4:8"]]
- 00c00188 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00c0117c ["INT_ADD", "register:40f0:8", ["const:c0117c:8", "const:4:8"]]
+ 00c0117c ["CALL", null, ["callee:00c58fe0:8"]]
- 00c001a4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c001a4 ["INT_ADD", "register:40f0:8", ["const:c001a4:8", "const:4:8"]]
- 00c001a4 ["CALLIND", null, ["register:0:8"]]
+ 00c01198 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c01198 ["INT_ADD", "register:40f0:8", ["const:c01198:8", "const:4:8"]]
+ 00c01198 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-76f9aa97777b99e95e36a30d1133941a"></a>

### [`00c001f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c001f0.md) → [`00c011e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c01/00c011e4.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEEC2EPNS_15basic_streambufIwS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c59280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59280.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0022c ["INT_ADD", "register:40f0:8", ["const:c0022c:8", "const:4:8"]]
- 00c0022c ["CALL", null, ["callee:00c59280:8"]]
+ 00c01220 ["INT_ADD", "register:40f0:8", ["const:c01220:8", "const:4:8"]]
+ 00c01220 ["CALL", null, ["callee:00c59280:8"]]
~~~


<a id="compare-00f67abf3be1c2b7e449eabb2aa9e900"></a>

### [`00c002e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c002e4.md) → [`00c012d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c01/00c012d8.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5e180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e180.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c002fc ["INT_ADD", "register:40f0:8", ["const:c002fc:8", "const:4:8"]]
- 00c002fc ["CALL", null, ["callee:00c5e180:8"]]
+ 00c012f0 ["INT_ADD", "register:40f0:8", ["const:c012f0:8", "const:4:8"]]
+ 00c012f0 ["CALL", null, ["callee:00c5e180:8"]]
~~~


<a id="compare-d44af55ca1e7fe610f52b54c4037a52b"></a>

### [`00c00314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c00314.md) → [`00c01308`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c01/00c01308.md) _ZTv0_n24_NSt6__ndk113basic_istreamIwNS_11char_traitsIwEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5e180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e180.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c00334 ["INT_ADD", "register:40f0:8", ["const:c00334:8", "const:4:8"]]
- 00c00334 ["CALL", null, ["callee:00c5e180:8"]]
+ 00c01328 ["INT_ADD", "register:40f0:8", ["const:c01328:8", "const:4:8"]]
+ 00c01328 ["CALL", null, ["callee:00c5e180:8"]]
~~~


<a id="compare-d000a1bf202661f4d9aab3246dde7a61"></a>

### [`00c0034c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c0034c.md) → [`00c01340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c01/00c01340.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE4swapERS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3f0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5f3c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f3c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c00384 ["INT_ADD", "register:40f0:8", ["const:c00384:8", "const:4:8"]]
- 00c00384 ["CALL", null, ["callee:00c5f3c0:8"]]
+ 00c01378 ["INT_ADD", "register:40f0:8", ["const:c01378:8", "const:4:8"]]
+ 00c01378 ["CALL", null, ["callee:00c5f3c0:8"]]
~~~


<a id="compare-8e09d3d830a9101c57f3f64afc78de0c"></a>

### [`00c005a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c005a8.md) → [`00c0159c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c01/00c0159c.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEE5flushEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e4c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4c0.md) · 呼出先 3件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md) [`00c5e4e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4e0.md)
- 新版 呼出元 1件 [`00c5f490`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f490.md) · 呼出先 3件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4a0.md) [`00c5f4b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c005dc ["INT_ADD", "register:40f0:8", ["const:c005dc:8", "const:4:8"]]
- 00c005dc ["CALL", null, ["callee:00c5f4a0:8"]]
+ 00c015d0 ["INT_ADD", "register:40f0:8", ["const:c015d0:8", "const:4:8"]]
+ 00c015d0 ["CALL", null, ["callee:00c5f4a0:8"]]
- 00c00600 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c00600 ["INT_ADD", "register:40f0:8", ["const:c00600:8", "const:4:8"]]
- 00c00600 ["CALLIND", null, ["register:0:8"]]
+ 00c015f4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c015f4 ["INT_ADD", "register:40f0:8", ["const:c015f4:8", "const:4:8"]]
+ 00c015f4 ["CALLIND", null, ["register:0:8"]]
- 00c00620 ["INT_ADD", "register:40f0:8", ["const:c00620:8", "const:4:8"]]
- 00c00620 ["CALL", null, ["callee:00c59340:8"]]
+ 00c01614 ["INT_ADD", "register:40f0:8", ["const:c01614:8", "const:4:8"]]
+ 00c01614 ["CALL", null, ["callee:00c59340:8"]]
~~~


<a id="compare-088fbc9246ffaf268e55c98267308bfc"></a>

### [`00c00698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c00698.md) → [`00c0168c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c01/00c0168c.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEErsEPFRNS_9basic_iosIwS2_EES6_E

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c006b8 ["COPY", "register:0:8", ["register:4008:8"]]
- 00c006b8 ["INT_ADD", "register:40f0:8", ["const:c006b8:8", "const:4:8"]]
- 00c006b8 ["CALLIND", null, ["register:0:8"]]
+ 00c016ac ["COPY", "register:0:8", ["register:4008:8"]]
+ 00c016ac ["INT_ADD", "register:40f0:8", ["const:c016ac:8", "const:4:8"]]
+ 00c016ac ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8e35343fe178a3ab366115c5dd49f746"></a>

### [`00c006d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c006d0.md) → [`00c016c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c01/00c016c4.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEErsEPFRNS_8ios_baseES5_E

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c006f0 ["COPY", "register:0:8", ["register:4008:8"]]
- 00c006f0 ["INT_ADD", "register:40f0:8", ["const:c006f0:8", "const:4:8"]]
- 00c006f0 ["CALLIND", null, ["register:0:8"]]
+ 00c016e4 ["COPY", "register:0:8", ["register:4008:8"]]
+ 00c016e4 ["INT_ADD", "register:40f0:8", ["const:c016e4:8", "const:4:8"]]
+ 00c016e4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a0ad46830fab78d3f18fb3370b78435c"></a>

### [`00c00708`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c00708.md) → [`00c016fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c01/00c016fc.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEErsEPNS_15basic_streambufIwS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c5f4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f4c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c00738 ["INT_ADD", "register:40f0:8", ["const:c00738:8", "const:4:8"]]
- 00c00738 ["CALL", null, ["callee:00c5f4c0:8"]]
+ 00c0172c ["INT_ADD", "register:40f0:8", ["const:c0172c:8", "const:4:8"]]
+ 00c0172c ["CALL", null, ["callee:00c5f4c0:8"]]
- 00c0079c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0079c ["INT_ADD", "register:40f0:8", ["const:c0079c:8", "const:4:8"]]
- 00c0079c ["CALLIND", null, ["register:0:8"]]
+ 00c01790 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c01790 ["INT_ADD", "register:40f0:8", ["const:c01790:8", "const:4:8"]]
+ 00c01790 ["CALLIND", null, ["register:0:8"]]
- 00c007d0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c007d0 ["INT_ADD", "register:40f0:8", ["const:c007d0:8", "const:4:8"]]
- 00c007d0 ["CALLIND", null, ["register:0:8"]]
+ 00c017c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c017c4 ["INT_ADD", "register:40f0:8", ["const:c017c4:8", "const:4:8"]]
+ 00c017c4 ["CALLIND", null, ["register:0:8"]]
~~~


