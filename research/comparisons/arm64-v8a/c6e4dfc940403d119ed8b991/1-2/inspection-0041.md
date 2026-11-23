# v16.0.2 → v16.0.3 · 要調査の変更候補 (41)

[一覧の目次](README.md)

<a id="compare-d8be05905d04c43b06bf29e1fedaa41c"></a>

### [`00c1475c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c1475c.md) → [`00c15750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c15/00c15750.md) _ZNKSt6__ndk18time_getIcNS_19istreambuf_iteratorIcNS_11char_traitsIcEEEEE13__get_percentERS4_S4_RjRKNS_5ctypeIcEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e6f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e6f0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5f6c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f6c0.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c147b4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c147b4 ["INT_ADD", "register:40f0:8", ["const:c147b4:8", "const:4:8"]]
- 00c147b4 ["CALLIND", null, ["register:0:8"]]
+ 00c157a8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c157a8 ["INT_ADD", "register:40f0:8", ["const:c157a8:8", "const:4:8"]]
+ 00c157a8 ["CALLIND", null, ["register:0:8"]]
- 00c14814 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c14814 ["INT_ADD", "register:40f0:8", ["const:c14814:8", "const:4:8"]]
- 00c14814 ["CALLIND", null, ["register:0:8"]]
+ 00c15808 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c15808 ["INT_ADD", "register:40f0:8", ["const:c15808:8", "const:4:8"]]
+ 00c15808 ["CALLIND", null, ["register:0:8"]]
- 00c1483c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c1483c ["INT_ADD", "register:40f0:8", ["const:c1483c:8", "const:4:8"]]
- 00c1483c ["CALLIND", null, ["register:0:8"]]
+ 00c15830 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c15830 ["INT_ADD", "register:40f0:8", ["const:c15830:8", "const:4:8"]]
+ 00c15830 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b065c653632c82f9b037eba165d767bf"></a>

### [`00c14948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14948.md) → [`00c1593c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c15/00c1593c.md) FUN_00c1593c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 12件 [`00c1392c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c1392c.md) [`00c13a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c13a48.md) [`00c13ab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c13/00c13ab0.md) [`00c14130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14130.md) [`00c14194`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c14/00c14194.md) · 呼出先 0件 
- 新版 呼出元 12件 [`00c14920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c14/00c14920.md) [`00c14a3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c14/00c14a3c.md) [`00c14aa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c14/00c14aa4.md) [`00c15124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c15/00c15124.md) [`00c15188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c15/00c15188.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c149a0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c149a0 ["INT_ADD", "register:40f0:8", ["const:c149a0:8", "const:4:8"]]
- 00c149a0 ["CALLIND", null, ["register:0:8"]]
+ 00c15994 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c15994 ["INT_ADD", "register:40f0:8", ["const:c15994:8", "const:4:8"]]
+ 00c15994 ["CALLIND", null, ["register:0:8"]]
- 00c14a0c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c14a0c ["INT_ADD", "register:40f0:8", ["const:c14a0c:8", "const:4:8"]]
- 00c14a0c ["CALLIND", null, ["register:0:8"]]
+ 00c15a00 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c15a00 ["INT_ADD", "register:40f0:8", ["const:c15a00:8", "const:4:8"]]
+ 00c15a00 ["CALLIND", null, ["register:0:8"]]
- 00c14a38 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c14a38 ["INT_ADD", "register:40f0:8", ["const:c14a38:8", "const:4:8"]]
- 00c14a38 ["CALLIND", null, ["register:0:8"]]
+ 00c15a2c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c15a2c ["INT_ADD", "register:40f0:8", ["const:c15a2c:8", "const:4:8"]]
+ 00c15a2c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e673164d78e41507cd7fb6fbef79e688"></a>

### [`00c151cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c151cc.md) → [`00c161c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c16/00c161c0.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE11do_get_dateES4_S4_RNS_8ios_baseERjP2tm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e700.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5f6d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f6d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c15204 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c15204 ["INT_ADD", "register:40f0:8", ["const:c15204:8", "const:4:8"]]
- 00c15204 ["CALLIND", null, ["register:0:8"]]
+ 00c161f8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c161f8 ["INT_ADD", "register:40f0:8", ["const:c161f8:8", "const:4:8"]]
+ 00c161f8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-34d405544fe9de8116a1a391069b2cf1"></a>

### [`00c153b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c153b4.md) → [`00c163a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c16/00c163a8.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE17__get_weekdaynameERiRS4_S4_RjRKNS_5ctypeIwEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c0b08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0b08c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c0c080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0c/00c0c080.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c153e8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c153e8 ["INT_ADD", "register:40f0:8", ["const:c153e8:8", "const:4:8"]]
- 00c153e8 ["CALLIND", null, ["register:0:8"]]
+ 00c163dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c163dc ["INT_ADD", "register:40f0:8", ["const:c163dc:8", "const:4:8"]]
+ 00c163dc ["CALLIND", null, ["register:0:8"]]
- 00c1540c ["INT_ADD", "register:40f0:8", ["const:c1540c:8", "const:4:8"]]
- 00c1540c ["CALL", null, ["callee:00c0c080:8"]]
+ 00c16400 ["INT_ADD", "register:40f0:8", ["const:c16400:8", "const:4:8"]]
+ 00c16400 ["CALL", null, ["callee:00c0c080:8"]]
~~~


<a id="compare-753935cd23d0a9f9aac40434a038e75f"></a>

### [`00c155c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c155c0.md) → [`00c165b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c16/00c165b4.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE15__get_monthnameERiRS4_S4_RjRKNS_5ctypeIwEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c0b08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0b08c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c0c080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0c/00c0c080.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c155f4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c155f4 ["INT_ADD", "register:40f0:8", ["const:c155f4:8", "const:4:8"]]
- 00c155f4 ["CALLIND", null, ["register:0:8"]]
+ 00c165e8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c165e8 ["INT_ADD", "register:40f0:8", ["const:c165e8:8", "const:4:8"]]
+ 00c165e8 ["CALLIND", null, ["register:0:8"]]
- 00c15618 ["INT_ADD", "register:40f0:8", ["const:c15618:8", "const:4:8"]]
- 00c15618 ["CALL", null, ["callee:00c0c080:8"]]
+ 00c1660c ["INT_ADD", "register:40f0:8", ["const:c1660c:8", "const:4:8"]]
+ 00c1660c ["CALL", null, ["callee:00c0c080:8"]]
~~~


<a id="compare-55e6d3c0be44059ef6b7ee0994820b2a"></a>

### [`00c15790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c15790.md) → [`00c16784`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c16/00c16784.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE10__get_yearERiRS4_S4_RjRKNS_5ctypeIwEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c1668c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c1668c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c17680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c17/00c17680.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c157bc ["INT_ADD", "register:40f0:8", ["const:c157bc:8", "const:4:8"]]
- 00c157bc ["CALL", null, ["callee:00c17680:8"]]
+ 00c167b0 ["INT_ADD", "register:40f0:8", ["const:c167b0:8", "const:4:8"]]
+ 00c167b0 ["CALL", null, ["callee:00c17680:8"]]
~~~


<a id="compare-76619550fc36c4705300f9533b7a88a3"></a>

### [`00c15e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c15e68.md) → [`00c16e5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c16/00c16e5c.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE9__get_dayERiRS4_S4_RjRKNS_5ctypeIwEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c1668c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c1668c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c17680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c17/00c17680.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c15e94 ["INT_ADD", "register:40f0:8", ["const:c15e94:8", "const:4:8"]]
- 00c15e94 ["CALL", null, ["callee:00c17680:8"]]
+ 00c16e88 ["INT_ADD", "register:40f0:8", ["const:c16e88:8", "const:4:8"]]
+ 00c16e88 ["CALL", null, ["callee:00c17680:8"]]
~~~


<a id="compare-72ec963fd0a0dc6375826fb34346350f"></a>

### [`00c15ecc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c15ecc.md) → [`00c16ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c16/00c16ec0.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE10__get_hourERiRS4_S4_RjRKNS_5ctypeIwEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c1668c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c1668c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c17680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c17/00c17680.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c15ef8 ["INT_ADD", "register:40f0:8", ["const:c15ef8:8", "const:4:8"]]
- 00c15ef8 ["CALL", null, ["callee:00c17680:8"]]
+ 00c16eec ["INT_ADD", "register:40f0:8", ["const:c16eec:8", "const:4:8"]]
+ 00c16eec ["CALL", null, ["callee:00c17680:8"]]
~~~


<a id="compare-02b1b8f98539c80ea659e668f45b6369"></a>

### [`00c15f2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c15f2c.md) → [`00c16f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c16/00c16f20.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE13__get_12_hourERiRS4_S4_RjRKNS_5ctypeIwEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c1668c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c1668c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c17680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c17/00c17680.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c15f58 ["INT_ADD", "register:40f0:8", ["const:c15f58:8", "const:4:8"]]
- 00c15f58 ["CALL", null, ["callee:00c17680:8"]]
+ 00c16f4c ["INT_ADD", "register:40f0:8", ["const:c16f4c:8", "const:4:8"]]
+ 00c16f4c ["CALL", null, ["callee:00c17680:8"]]
~~~


<a id="compare-6f524241836c1f20da2fe904b08465bf"></a>

### [`00c15f90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c15f90.md) → [`00c16f84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c16/00c16f84.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE18__get_day_year_numERiRS4_S4_RjRKNS_5ctypeIwEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c1668c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c1668c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c17680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c17/00c17680.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c15fbc ["INT_ADD", "register:40f0:8", ["const:c15fbc:8", "const:4:8"]]
- 00c15fbc ["CALL", null, ["callee:00c17680:8"]]
+ 00c16fb0 ["INT_ADD", "register:40f0:8", ["const:c16fb0:8", "const:4:8"]]
+ 00c16fb0 ["CALL", null, ["callee:00c17680:8"]]
~~~


<a id="compare-0c8137ec99131c42a6212e97f73b6b09"></a>

### [`00c15ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c15ff0.md) → [`00c16fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c16/00c16fe4.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE11__get_monthERiRS4_S4_RjRKNS_5ctypeIwEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c1668c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c1668c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c17680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c17/00c17680.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c1601c ["INT_ADD", "register:40f0:8", ["const:c1601c:8", "const:4:8"]]
- 00c1601c ["CALL", null, ["callee:00c17680:8"]]
+ 00c17010 ["INT_ADD", "register:40f0:8", ["const:c17010:8", "const:4:8"]]
+ 00c17010 ["CALL", null, ["callee:00c17680:8"]]
~~~


<a id="compare-de6d8f5d565a845e9bfb721fa7a120e7"></a>

### [`00c16054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c16054.md) → [`00c17048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c17/00c17048.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE12__get_minuteERiRS4_S4_RjRKNS_5ctypeIwEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c1668c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c1668c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c17680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c17/00c17680.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c16080 ["INT_ADD", "register:40f0:8", ["const:c16080:8", "const:4:8"]]
- 00c16080 ["CALL", null, ["callee:00c17680:8"]]
+ 00c17074 ["INT_ADD", "register:40f0:8", ["const:c17074:8", "const:4:8"]]
+ 00c17074 ["CALL", null, ["callee:00c17680:8"]]
~~~


<a id="compare-9eddddeec06674eec02e92a6ed8c731a"></a>

### [`00c160b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c160b4.md) → [`00c170a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c17/00c170a8.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE17__get_white_spaceERS4_S4_RjRKNS_5ctypeIwEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e710.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5f6e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f6e0.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c16130 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c16130 ["INT_ADD", "register:40f0:8", ["const:c16130:8", "const:4:8"]]
- 00c16130 ["CALLIND", null, ["register:0:8"]]
+ 00c17124 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c17124 ["INT_ADD", "register:40f0:8", ["const:c17124:8", "const:4:8"]]
+ 00c17124 ["CALLIND", null, ["register:0:8"]]
- 00c1616c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c1616c ["INT_ADD", "register:40f0:8", ["const:c1616c:8", "const:4:8"]]
- 00c1616c ["CALLIND", null, ["register:0:8"]]
+ 00c17160 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c17160 ["INT_ADD", "register:40f0:8", ["const:c17160:8", "const:4:8"]]
+ 00c17160 ["CALLIND", null, ["register:0:8"]]
- 00c161ac ["COPY", "register:0:8", ["register:4040:8"]]
- 00c161ac ["INT_ADD", "register:40f0:8", ["const:c161ac:8", "const:4:8"]]
- 00c161ac ["CALLIND", null, ["register:0:8"]]
+ 00c171a0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c171a0 ["INT_ADD", "register:40f0:8", ["const:c171a0:8", "const:4:8"]]
+ 00c171a0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c5d5ab00c1e7bcc0039564daf40b2b31"></a>

### [`00c162a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c162a4.md) → [`00c17298`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c17/00c17298.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE11__get_am_pmERiRS4_S4_RjRKNS_5ctypeIwEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c0b08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0b/00c0b08c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c0c080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c0c/00c0c080.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c162d8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c162d8 ["INT_ADD", "register:40f0:8", ["const:c162d8:8", "const:4:8"]]
- 00c162d8 ["CALLIND", null, ["register:0:8"]]
+ 00c172cc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c172cc ["INT_ADD", "register:40f0:8", ["const:c172cc:8", "const:4:8"]]
+ 00c172cc ["CALLIND", null, ["register:0:8"]]
- 00c1633c ["INT_ADD", "register:40f0:8", ["const:c1633c:8", "const:4:8"]]
- 00c1633c ["CALL", null, ["callee:00c0c080:8"]]
+ 00c17330 ["INT_ADD", "register:40f0:8", ["const:c17330:8", "const:4:8"]]
+ 00c17330 ["CALL", null, ["callee:00c0c080:8"]]
~~~


<a id="compare-2398753953cad5026f22189550d3ad38"></a>

### [`00c1638c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c1638c.md) → [`00c17380`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c17/00c17380.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE12__get_secondERiRS4_S4_RjRKNS_5ctypeIwEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c1668c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c1668c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c17680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c17/00c17680.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c163b8 ["INT_ADD", "register:40f0:8", ["const:c163b8:8", "const:4:8"]]
- 00c163b8 ["CALL", null, ["callee:00c17680:8"]]
+ 00c173ac ["INT_ADD", "register:40f0:8", ["const:c173ac:8", "const:4:8"]]
+ 00c173ac ["CALL", null, ["callee:00c17680:8"]]
~~~


<a id="compare-7f27a2c3d7bf314f288361c3a49de713"></a>

### [`00c163ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c163ec.md) → [`00c173e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c17/00c173e0.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE13__get_weekdayERiRS4_S4_RjRKNS_5ctypeIwEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c1668c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c1668c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c17680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c17/00c17680.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c16418 ["INT_ADD", "register:40f0:8", ["const:c16418:8", "const:4:8"]]
- 00c16418 ["CALL", null, ["callee:00c17680:8"]]
+ 00c1740c ["INT_ADD", "register:40f0:8", ["const:c1740c:8", "const:4:8"]]
+ 00c1740c ["CALL", null, ["callee:00c17680:8"]]
~~~


<a id="compare-cc9eb72bdc701c737db0fb9ca6497fb7"></a>

### [`00c1644c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c1644c.md) → [`00c17440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c17/00c17440.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE11__get_year4ERiRS4_S4_RjRKNS_5ctypeIwEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c1668c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c1668c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c17680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c17/00c17680.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c16478 ["INT_ADD", "register:40f0:8", ["const:c16478:8", "const:4:8"]]
- 00c16478 ["CALL", null, ["callee:00c17680:8"]]
+ 00c1746c ["INT_ADD", "register:40f0:8", ["const:c1746c:8", "const:4:8"]]
+ 00c1746c ["CALL", null, ["callee:00c17680:8"]]
~~~


<a id="compare-033338d348e531dc5a9f1d23fbf1912a"></a>

### [`00c1649c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c1649c.md) → [`00c17490`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c17/00c17490.md) _ZNKSt6__ndk18time_getIwNS_19istreambuf_iteratorIwNS_11char_traitsIwEEEEE13__get_percentERS4_S4_RjRKNS_5ctypeIwEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e720.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5f6f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f6f0.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c16508 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c16508 ["INT_ADD", "register:40f0:8", ["const:c16508:8", "const:4:8"]]
- 00c16508 ["CALLIND", null, ["register:0:8"]]
+ 00c174fc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c174fc ["INT_ADD", "register:40f0:8", ["const:c174fc:8", "const:4:8"]]
+ 00c174fc ["CALLIND", null, ["register:0:8"]]
- 00c16540 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c16540 ["INT_ADD", "register:40f0:8", ["const:c16540:8", "const:4:8"]]
- 00c16540 ["CALLIND", null, ["register:0:8"]]
+ 00c17534 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c17534 ["INT_ADD", "register:40f0:8", ["const:c17534:8", "const:4:8"]]
+ 00c17534 ["CALLIND", null, ["register:0:8"]]
- 00c16580 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c16580 ["INT_ADD", "register:40f0:8", ["const:c16580:8", "const:4:8"]]
- 00c16580 ["CALLIND", null, ["register:0:8"]]
+ 00c17574 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c17574 ["INT_ADD", "register:40f0:8", ["const:c17574:8", "const:4:8"]]
+ 00c17574 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b9a69a153d1fd5441eb06cd684eff9c9"></a>

### [`00c1668c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c1668c.md) → [`00c17680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c17/00c17680.md) FUN_00c17680

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 12件 [`00c15674`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c15674.md) [`00c15790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c15790.md) [`00c157f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c157f8.md) [`00c15e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c15e68.md) [`00c15ecc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c15/00c15ecc.md) · 呼出先 0件 
- 新版 呼出元 12件 [`00c16668`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c16/00c16668.md) [`00c16784`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c16/00c16784.md) [`00c167ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c16/00c167ec.md) [`00c16e5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c16/00c16e5c.md) [`00c16ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c16/00c16ec0.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c16700 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c16700 ["INT_ADD", "register:40f0:8", ["const:c16700:8", "const:4:8"]]
- 00c16700 ["CALLIND", null, ["register:0:8"]]
+ 00c176f4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c176f4 ["INT_ADD", "register:40f0:8", ["const:c176f4:8", "const:4:8"]]
+ 00c176f4 ["CALLIND", null, ["register:0:8"]]
- 00c16738 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c16738 ["INT_ADD", "register:40f0:8", ["const:c16738:8", "const:4:8"]]
- 00c16738 ["CALLIND", null, ["register:0:8"]]
+ 00c1772c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c1772c ["INT_ADD", "register:40f0:8", ["const:c1772c:8", "const:4:8"]]
+ 00c1772c ["CALLIND", null, ["register:0:8"]]
- 00c1677c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c1677c ["INT_ADD", "register:40f0:8", ["const:c1677c:8", "const:4:8"]]
- 00c1677c ["CALLIND", null, ["register:0:8"]]
+ 00c17770 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c17770 ["INT_ADD", "register:40f0:8", ["const:c17770:8", "const:4:8"]]
+ 00c17770 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-1baac6084318b63085387b66dfb8e603"></a>

### [`00c16c88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c16c88.md) → [`00c17c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c17/00c17c7c.md) _ZNKSt6__ndk18time_putIcNS_19ostreambuf_iteratorIcNS_11char_traitsIcEEEEE6do_putES4_RNS_8ios_baseEcPK2tmcc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e730.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5f700`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f700.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c16cdc ["INT_ADD", "register:40f0:8", ["const:c16cdc:8", "const:4:8"]]
- 00c16cdc ["CALL", null, ["callee:00c5f700:8"]]
+ 00c17cd0 ["INT_ADD", "register:40f0:8", ["const:c17cd0:8", "const:4:8"]]
+ 00c17cd0 ["CALL", null, ["callee:00c5f700:8"]]
- 00c16cfc ["COPY", "register:0:8", ["register:4040:8"]]
- 00c16cfc ["INT_ADD", "register:40f0:8", ["const:c16cfc:8", "const:4:8"]]
- 00c16cfc ["CALLIND", null, ["register:0:8"]]
+ 00c17cf0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c17cf0 ["INT_ADD", "register:40f0:8", ["const:c17cf0:8", "const:4:8"]]
+ 00c17cf0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a1b3e6095463bb2faa2ec697eb01d593"></a>

### [`00c16d54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c16/00c16d54.md) → [`00c17d48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c17/00c17d48.md) _ZNKSt6__ndk110__time_put8__do_putEPcRS1_PK2tmcc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e730.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5f700`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f700.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c16da8 ["INT_ADD", "register:40f0:8", ["const:c16da8:8", "const:4:8"]]
- 00c16da8 ["CALL", null, ["callee:00c5f700:8"]]
+ 00c17d9c ["INT_ADD", "register:40f0:8", ["const:c17d9c:8", "const:4:8"]]
+ 00c17d9c ["CALL", null, ["callee:00c5f700:8"]]
~~~


<a id="compare-849635050dde360b0441151a7c673265"></a>

### [`00c17078`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c17/00c17078.md) → [`00c1806c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c18/00c1806c.md) _ZNKSt6__ndk18time_putIwNS_19ostreambuf_iteratorIwNS_11char_traitsIwEEEEE6do_putES4_RNS_8ios_baseEwPK2tmcc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e740.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5f710`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f710.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c170b8 ["INT_ADD", "register:40f0:8", ["const:c170b8:8", "const:4:8"]]
- 00c170b8 ["CALL", null, ["callee:00c5f710:8"]]
+ 00c180ac ["INT_ADD", "register:40f0:8", ["const:c180ac:8", "const:4:8"]]
+ 00c180ac ["CALL", null, ["callee:00c5f710:8"]]
- 00c1710c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c1710c ["INT_ADD", "register:40f0:8", ["const:c1710c:8", "const:4:8"]]
- 00c1710c ["CALLIND", null, ["register:0:8"]]
+ 00c18100 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c18100 ["INT_ADD", "register:40f0:8", ["const:c18100:8", "const:4:8"]]
+ 00c18100 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-dc3a6894d1e26f23a9810ae25163c51c"></a>

### [`00c19060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c19/00c19060.md) → [`00c1a054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1a/00c1a054.md) FUN_00c1a054

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c18da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c18/00c18da0.md) · 呼出先 6件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00c19d94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c19/00c19d94.md) · 呼出先 6件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c19198 ["INT_ADD", "register:40f0:8", ["const:c19198:8", "const:4:8"]]
- 00c19198 ["CALL", null, ["callee:00c58f30:8"]]
+ 00c1a18c ["INT_ADD", "register:40f0:8", ["const:c1a18c:8", "const:4:8"]]
+ 00c1a18c ["CALL", null, ["callee:00c58f30:8"]]
- 00c191b8 ["INT_ADD", "register:40f0:8", ["const:c191b8:8", "const:4:8"]]
- 00c191b8 ["CALL", null, ["callee:00c590a0:8"]]
+ 00c1a1ac ["INT_ADD", "register:40f0:8", ["const:c1a1ac:8", "const:4:8"]]
+ 00c1a1ac ["CALL", null, ["callee:00c590a0:8"]]
- 00c19214 ["INT_ADD", "register:40f0:8", ["const:c19214:8", "const:4:8"]]
- 00c19214 ["CALL", null, ["callee:00c5c140:8"]]
+ 00c1a208 ["INT_ADD", "register:40f0:8", ["const:c1a208:8", "const:4:8"]]
+ 00c1a208 ["CALL", null, ["callee:00c5c140:8"]]
~~~


<a id="compare-85b51b49e9fd3c4a5dd6936114b435fd"></a>

### [`00c1b088`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1b/00c1b088.md) → [`00c1c07c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1c/00c1c07c.md) FUN_00c1c07c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c1ad5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1a/00c1ad5c.md) · 呼出先 8件 [`006d76f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`00c1bd50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1b/00c1bd50.md) · 呼出先 8件 [`006d7aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7aa8.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c1b178 ["INT_ADD", "register:40f0:8", ["const:c1b178:8", "const:4:8"]]
- 00c1b178 ["CALL", null, ["callee:00c5b940:8"]]
+ 00c1c16c ["INT_ADD", "register:40f0:8", ["const:c1c16c:8", "const:4:8"]]
+ 00c1c16c ["CALL", null, ["callee:00c5b940:8"]]
- 00c1b1f4 ["INT_ADD", "register:40f0:8", ["const:c1b1f4:8", "const:4:8"]]
- 00c1b1f4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00c1c1e8 ["INT_ADD", "register:40f0:8", ["const:c1c1e8:8", "const:4:8"]]
+ 00c1c1e8 ["CALL", null, ["callee:00c58f30:8"]]
- 00c1b224 ["INT_ADD", "register:40f0:8", ["const:c1b224:8", "const:4:8"]]
- 00c1b224 ["CALL", null, ["callee:00c590a0:8"]]
+ 00c1c218 ["INT_ADD", "register:40f0:8", ["const:c1c218:8", "const:4:8"]]
+ 00c1c218 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-88a9429466c5f0e9556716cfbb209ab3"></a>

### [`00c1ba7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1b/00c1ba7c.md) → [`00c1ca70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1c/00c1ca70.md) FUN_00c1ca70

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 6件 [`00c0f714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0f714.md) [`00c0fba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c0f/00c0fba4.md) [`00c10e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c10/00c10e48.md) [`00c112d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c11/00c112d8.md) [`00c1b5d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1b/00c1b5d0.md) · 呼出先 2件 [`00c5e640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e640.md) [`00c5e7d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e7d0.md)
- 新版 呼出元 6件 [`00c10708`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c10/00c10708.md) [`00c10b98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c10/00c10b98.md) [`00c11e3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c11/00c11e3c.md) [`00c122cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c12/00c122cc.md) [`00c1c5c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1c/00c1c5c4.md) · 呼出先 2件 [`00c5f610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f610.md) [`00c5f7a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f7a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c1bae0 ["INT_ADD", "register:40f0:8", ["const:c1bae0:8", "const:4:8"]]
- 00c1bae0 ["CALL", null, ["callee:00c5f610:8"]]
+ 00c1cad4 ["INT_ADD", "register:40f0:8", ["const:c1cad4:8", "const:4:8"]]
+ 00c1cad4 ["CALL", null, ["callee:00c5f610:8"]]
- 00c1bb00 ["INT_ADD", "register:40f0:8", ["const:c1bb00:8", "const:4:8"]]
- 00c1bb00 ["CALL", null, ["callee:00c5f7a0:8"]]
+ 00c1caf4 ["INT_ADD", "register:40f0:8", ["const:c1caf4:8", "const:4:8"]]
+ 00c1caf4 ["CALL", null, ["callee:00c5f7a0:8"]]
- 00c1bb10 ["INT_ADD", "register:40f0:8", ["const:c1bb10:8", "const:4:8"]]
- 00c1bb10 ["CALL", null, ["callee:00c5f610:8"]]
+ 00c1cb04 ["INT_ADD", "register:40f0:8", ["const:c1cb04:8", "const:4:8"]]
+ 00c1cb04 ["CALL", null, ["callee:00c5f610:8"]]
~~~


<a id="compare-fb35b38355a82f6ce73bb4af419d7673"></a>

### [`00c1bd5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1b/00c1bd5c.md) → [`00c1cd50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1c/00c1cd50.md) _ZNSt6__ndk111__money_putIcE8__formatEPcRS2_S3_jPKcS5_RKNS_5ctypeIcEEbRKNS_10money_base7patternEccRKNS_12basic_stringIcNS_11char_traitsIcEEN

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e7c0.md) · 呼出先 1件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`00c5f790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f790.md) · 呼出先 1件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c1bef8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c1bef8 ["INT_ADD", "register:40f0:8", ["const:c1bef8:8", "const:4:8"]]
- 00c1bef8 ["CALLIND", null, ["register:0:8"]]
+ 00c1ceec ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c1ceec ["INT_ADD", "register:40f0:8", ["const:c1ceec:8", "const:4:8"]]
+ 00c1ceec ["CALLIND", null, ["register:0:8"]]
- 00c1bf54 ["INT_ADD", "register:40f0:8", ["const:c1bf54:8", "const:4:8"]]
- 00c1bf54 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00c1cf48 ["INT_ADD", "register:40f0:8", ["const:c1cf48:8", "const:4:8"]]
+ 00c1cf48 ["CALL", null, ["callee:00c58fe0:8"]]
- 00c1bfb8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c1bfb8 ["INT_ADD", "register:40f0:8", ["const:c1bfb8:8", "const:4:8"]]
- 00c1bfb8 ["CALLIND", null, ["register:0:8"]]
+ 00c1cfac ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c1cfac ["INT_ADD", "register:40f0:8", ["const:c1cfac:8", "const:4:8"]]
+ 00c1cfac ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d12ded95ed5c3e24145baa70f54869ab"></a>

### [`00c1cc18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1c/00c1cc18.md) → [`00c1dc0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1d/00c1dc0c.md) _ZNSt6__ndk111__money_putIwE8__formatEPwRS2_S3_jPKwS5_RKNS_5ctypeIwEEbRKNS_10money_base7patternEwwRKNS_12basic_stringIcNS_11char_traitsIcEEN

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e7f0.md) · 呼出先 1件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`00c5f7c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f7c0.md) · 呼出先 1件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c1cd24 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c1cd24 ["INT_ADD", "register:40f0:8", ["const:c1cd24:8", "const:4:8"]]
- 00c1cd24 ["CALLIND", null, ["register:0:8"]]
+ 00c1dd18 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c1dd18 ["INT_ADD", "register:40f0:8", ["const:c1dd18:8", "const:4:8"]]
+ 00c1dd18 ["CALLIND", null, ["register:0:8"]]
- 00c1cdac ["COPY", "register:0:8", ["register:4040:8"]]
- 00c1cdac ["INT_ADD", "register:40f0:8", ["const:c1cdac:8", "const:4:8"]]
- 00c1cdac ["CALLIND", null, ["register:0:8"]]
+ 00c1dda0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c1dda0 ["INT_ADD", "register:40f0:8", ["const:c1dda0:8", "const:4:8"]]
+ 00c1dda0 ["CALLIND", null, ["register:0:8"]]
- 00c1ce04 ["INT_ADD", "register:40f0:8", ["const:c1ce04:8", "const:4:8"]]
- 00c1ce04 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00c1ddf8 ["INT_ADD", "register:40f0:8", ["const:c1ddf8:8", "const:4:8"]]
+ 00c1ddf8 ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-8ac395c4f6da118aa8cd7ed5231708bb"></a>

### [`00c1d4cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1d/00c1d4cc.md) → [`00c1e4c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1e/00c1e4c0.md) _ZNSt6__ndk114codecvt_bynameIcc9mbstate_tED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e810`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e810.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5f7e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f7e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c1d4e0 ["INT_ADD", "register:40f0:8", ["const:c1d4e0:8", "const:4:8"]]
- 00c1d4e0 ["CALL", null, ["callee:00c5f7e0:8"]]
+ 00c1e4d4 ["INT_ADD", "register:40f0:8", ["const:c1e4d4:8", "const:4:8"]]
+ 00c1e4d4 ["CALL", null, ["callee:00c5f7e0:8"]]
~~~


<a id="compare-cb4e8dbb4df1381d23d843d57cf26830"></a>

### [`00c1d500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1d/00c1d500.md) → [`00c1e4f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1e/00c1e4f4.md) _ZNSt6__ndk114codecvt_bynameIwc9mbstate_tED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e820.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5f7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f7f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c1d514 ["INT_ADD", "register:40f0:8", ["const:c1d514:8", "const:4:8"]]
- 00c1d514 ["CALL", null, ["callee:00c5f7f0:8"]]
+ 00c1e508 ["INT_ADD", "register:40f0:8", ["const:c1e508:8", "const:4:8"]]
+ 00c1e508 ["CALL", null, ["callee:00c5f7f0:8"]]
~~~


<a id="compare-c2ad1950ae9300a92f1208eeaab59187"></a>

### [`00c1d534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1d/00c1d534.md) → [`00c1e528`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1e/00c1e528.md) _ZNSt6__ndk114codecvt_bynameIDsc9mbstate_tED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e840.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5f810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f810.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c1d548 ["INT_ADD", "register:40f0:8", ["const:c1d548:8", "const:4:8"]]
- 00c1d548 ["CALL", null, ["callee:00c5f810:8"]]
+ 00c1e53c ["INT_ADD", "register:40f0:8", ["const:c1e53c:8", "const:4:8"]]
+ 00c1e53c ["CALL", null, ["callee:00c5f810:8"]]
~~~


<a id="compare-6dae21f5684ad795dcc3dbc377717c8e"></a>

### [`00c1d568`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1d/00c1d568.md) → [`00c1e55c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1e/00c1e55c.md) _ZNSt6__ndk114codecvt_bynameIDic9mbstate_tED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e860.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5f830`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f830.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c1d57c ["INT_ADD", "register:40f0:8", ["const:c1d57c:8", "const:4:8"]]
- 00c1d57c ["CALL", null, ["callee:00c5f830:8"]]
+ 00c1e570 ["INT_ADD", "register:40f0:8", ["const:c1e570:8", "const:4:8"]]
+ 00c1e570 ["CALL", null, ["callee:00c5f830:8"]]
~~~


<a id="compare-f673395b09e2cb1730f26c7901065256"></a>

### [`00c1d59c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1d/00c1d59c.md) → [`00c1e590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1e/00c1e590.md) _ZNSt6__ndk114codecvt_bynameIDsDu9mbstate_tED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e880.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5f850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f850.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c1d5b0 ["INT_ADD", "register:40f0:8", ["const:c1d5b0:8", "const:4:8"]]
- 00c1d5b0 ["CALL", null, ["callee:00c5f850:8"]]
+ 00c1e5a4 ["INT_ADD", "register:40f0:8", ["const:c1e5a4:8", "const:4:8"]]
+ 00c1e5a4 ["CALL", null, ["callee:00c5f850:8"]]
~~~


<a id="compare-ea0ef93fd204b82fdff387522256e210"></a>

### [`00c1d5d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1d/00c1d5d0.md) → [`00c1e5c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1e/00c1e5c4.md) _ZNSt6__ndk114codecvt_bynameIDiDu9mbstate_tED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e8a0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5f870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f870.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c1d5e4 ["INT_ADD", "register:40f0:8", ["const:c1d5e4:8", "const:4:8"]]
- 00c1d5e4 ["CALL", null, ["callee:00c5f870:8"]]
+ 00c1e5d8 ["INT_ADD", "register:40f0:8", ["const:c1e5d8:8", "const:4:8"]]
+ 00c1e5d8 ["CALL", null, ["callee:00c5f870:8"]]
~~~


<a id="compare-44a11997acd84a47d69f577c785bf79d"></a>

### [`00c1d5fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1d/00c1d5fc.md) → [`00c1e5f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c1e/00c1e5f0.md) FUN_00c1e5f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 2件 [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) [`00c23008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23008.md) · 呼出先 2件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c1d6ec ["INT_ADD", "register:40f0:8", ["const:c1d6ec:8", "const:4:8"]]
- 00c1d6ec ["CALL", null, ["callee:00c590f0:8"]]
+ 00c1e6e0 ["INT_ADD", "register:40f0:8", ["const:c1e6e0:8", "const:4:8"]]
+ 00c1e6e0 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-0fe9433e40ae6a630a43669c033159fb"></a>

### [`00c24d18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24d18.md) → [`00c25d0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c25/00c25d0c.md) FUN_00c25d0c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c24c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c24/00c24c44.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c25c38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c25/00c25c38.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c24d2c ["INT_ADD", "register:40f0:8", ["const:c24d2c:8", "const:4:8"]]
- 00c24d2c ["CALL", null, ["callee:00c25c38:8"]]
+ 00c25d20 ["INT_ADD", "register:40f0:8", ["const:c25d20:8", "const:4:8"]]
+ 00c25d20 ["CALL", null, ["callee:00c25c38:8"]]
~~~


<a id="compare-ae4c49b49449f52bdd6bb776fe40d019"></a>

### [`00c250d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c250d0.md) → [`00c260c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c260c4.md) _ZNSt6__ndk16localeC1ERKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c1f528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c1f/00c1f528.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c2051c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c20/00c2051c.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c250f0 ["INT_ADD", "register:40f0:8", ["const:c250f0:8", "const:4:8"]]
- 00c250f0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00c260e4 ["INT_ADD", "register:40f0:8", ["const:c260e4:8", "const:4:8"]]
+ 00c260e4 ["CALL", null, ["callee:00c58f30:8"]]
- 00c25100 ["INT_ADD", "register:40f0:8", ["const:c25100:8", "const:4:8"]]
- 00c25100 ["CALL", null, ["callee:00c2051c:8"]]
+ 00c260f4 ["INT_ADD", "register:40f0:8", ["const:c260f4:8", "const:4:8"]]
+ 00c260f4 ["CALL", null, ["callee:00c2051c:8"]]
- 00c25110 ["INT_ADD", "register:40f0:8", ["const:c25110:8", "const:4:8"]]
- 00c25110 ["CALL", null, ["callee:00c54d60:8"]]
+ 00c26104 ["INT_ADD", "register:40f0:8", ["const:c26104:8", "const:4:8"]]
+ 00c26104 ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-ff531c78be0b9694b3d22a83f0d9c3cf"></a>

### [`00c2528c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c2528c.md) → [`00c26280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c26280.md) _ZNSt6__ndk16localeC1ERKS0_RKNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEi

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c219c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c21/00c219c4.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c229b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c22/00c229b8.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c252b4 ["INT_ADD", "register:40f0:8", ["const:c252b4:8", "const:4:8"]]
- 00c252b4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00c262a8 ["INT_ADD", "register:40f0:8", ["const:c262a8:8", "const:4:8"]]
+ 00c262a8 ["CALL", null, ["callee:00c58f30:8"]]
- 00c252c8 ["INT_ADD", "register:40f0:8", ["const:c252c8:8", "const:4:8"]]
- 00c252c8 ["CALL", null, ["callee:00c229b8:8"]]
+ 00c262bc ["INT_ADD", "register:40f0:8", ["const:c262bc:8", "const:4:8"]]
+ 00c262bc ["CALL", null, ["callee:00c229b8:8"]]
- 00c252d8 ["INT_ADD", "register:40f0:8", ["const:c252d8:8", "const:4:8"]]
- 00c252d8 ["CALL", null, ["callee:00c54d60:8"]]
+ 00c262cc ["INT_ADD", "register:40f0:8", ["const:c262cc:8", "const:4:8"]]
+ 00c262cc ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-1d21f218491e3ecdfcd139f894d217c0"></a>

### [`00c25304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c25304.md) → [`00c262f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c262f8.md) _ZNSt6__ndk16localeC1ERKS0_S2_i

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c22014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c22/00c22014.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c23008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c23/00c23008.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c2532c ["INT_ADD", "register:40f0:8", ["const:c2532c:8", "const:4:8"]]
- 00c2532c ["CALL", null, ["callee:00c58f30:8"]]
+ 00c26320 ["INT_ADD", "register:40f0:8", ["const:c26320:8", "const:4:8"]]
+ 00c26320 ["CALL", null, ["callee:00c58f30:8"]]
- 00c25340 ["INT_ADD", "register:40f0:8", ["const:c25340:8", "const:4:8"]]
- 00c25340 ["CALL", null, ["callee:00c23008:8"]]
+ 00c26334 ["INT_ADD", "register:40f0:8", ["const:c26334:8", "const:4:8"]]
+ 00c26334 ["CALL", null, ["callee:00c23008:8"]]
- 00c25350 ["INT_ADD", "register:40f0:8", ["const:c25350:8", "const:4:8"]]
- 00c25350 ["CALL", null, ["callee:00c54d60:8"]]
+ 00c26344 ["INT_ADD", "register:40f0:8", ["const:c26344:8", "const:4:8"]]
+ 00c26344 ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-51062e5c7ccab330740750764c1162fd"></a>

### [`00c257cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c257cc.md) → [`00c267c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c267c0.md) _ZNKSt6__ndk16localeeqERKS0_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c25878 ["INT_ADD", "register:40f0:8", ["const:c25878:8", "const:4:8"]]
- 00c25878 ["CALL", null, ["callee:00c590f0:8"]]
+ 00c2686c ["INT_ADD", "register:40f0:8", ["const:c2686c:8", "const:4:8"]]
+ 00c2686c ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-45914eab4aa972a15c5d13ccc0e57e19"></a>

### [`00c258bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c258bc.md) → [`00c268b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c268b0.md) _ZNSt6__ndk16locale5facetD0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e9e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e9e0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5f9b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f9b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c258d0 ["INT_ADD", "register:40f0:8", ["const:c258d0:8", "const:4:8"]]
- 00c258d0 ["CALL", null, ["callee:00c5f9b0:8"]]
+ 00c268c4 ["INT_ADD", "register:40f0:8", ["const:c268c4:8", "const:4:8"]]
+ 00c268c4 ["CALL", null, ["callee:00c5f9b0:8"]]
~~~


<a id="compare-6b77da2baeb0ada3adf7c647eeb3732b"></a>

### [`00c259d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c259d0.md) → [`00c269c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c269c4.md) FUN_00c269c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 13件 [`00c258f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c258f8.md) [`00c25f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c25f3c.md) [`00c27234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c27/00c27234.md) [`00c277ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c27/00c277ac.md) [`00c28348`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c28/00c28348.md) · 呼出先 2件 [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c590a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c590a0.md)
- 新版 呼出元 13件 [`00c268ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c268ec.md) [`00c26f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c26f30.md) [`00c28228`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c28/00c28228.md) [`00c287a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c28/00c287a0.md) [`00c2933c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c29/00c2933c.md) · 呼出先 2件 [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c5a070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a070.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c259f0 ["INT_ADD", "register:40f0:8", ["const:c259f0:8", "const:4:8"]]
- 00c259f0 ["CALL", null, ["callee:00c59080:8"]]
+ 00c269e4 ["INT_ADD", "register:40f0:8", ["const:c269e4:8", "const:4:8"]]
+ 00c269e4 ["CALL", null, ["callee:00c59080:8"]]
- 00c25a04 ["INT_ADD", "register:40f0:8", ["const:c25a04:8", "const:4:8"]]
- 00c25a04 ["CALL", null, ["callee:00c5a070:8"]]
+ 00c269f8 ["INT_ADD", "register:40f0:8", ["const:c269f8:8", "const:4:8"]]
+ 00c269f8 ["CALL", null, ["callee:00c5a070:8"]]
~~~


<a id="compare-ba4d52e8ad2cffe05f77a8722a4f1861"></a>

### [`00c25b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c25b3c.md) → [`00c26b30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c26b30.md) _ZNSt6__ndk114collate_bynameIcED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e9f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e9f0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5f9c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f9c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c25b50 ["INT_ADD", "register:40f0:8", ["const:c25b50:8", "const:4:8"]]
- 00c25b50 ["CALL", null, ["callee:00c5f9c0:8"]]
+ 00c26b44 ["INT_ADD", "register:40f0:8", ["const:c26b44:8", "const:4:8"]]
+ 00c26b44 ["CALL", null, ["callee:00c5f9c0:8"]]
~~~


<a id="compare-d633593036a82d52e87dad69d7573dc0"></a>

### [`00c25b68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c25b68.md) → [`00c26b5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c26b5c.md) _ZNKSt6__ndk114collate_bynameIcE10do_compareEPKcS3_S3_S3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5ea00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ea00.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5f9d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f9d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c25be8 ["INT_ADD", "register:40f0:8", ["const:c25be8:8", "const:4:8"]]
- 00c25be8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00c26bdc ["INT_ADD", "register:40f0:8", ["const:c26bdc:8", "const:4:8"]]
+ 00c26bdc ["CALL", null, ["callee:00c58f30:8"]]
- 00c25c10 ["INT_ADD", "register:40f0:8", ["const:c25c10:8", "const:4:8"]]
- 00c25c10 ["CALL", null, ["callee:00c590a0:8"]]
+ 00c26c04 ["INT_ADD", "register:40f0:8", ["const:c26c04:8", "const:4:8"]]
+ 00c26c04 ["CALL", null, ["callee:00c590a0:8"]]
- 00c25c54 ["INT_ADD", "register:40f0:8", ["const:c25c54:8", "const:4:8"]]
- 00c25c54 ["CALL", null, ["callee:00c590a0:8"]]
+ 00c26c48 ["INT_ADD", "register:40f0:8", ["const:c26c48:8", "const:4:8"]]
+ 00c26c48 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-0b0e4d166514f2c5fddd8389a8f44684"></a>

### [`00c25d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c25/00c25d40.md) → [`00c26d34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c26/00c26d34.md) _ZNKSt6__ndk114collate_bynameIcE12do_transformEPKcS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c25db8 ["INT_ADD", "register:40f0:8", ["const:c25db8:8", "const:4:8"]]
- 00c25db8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00c26dac ["INT_ADD", "register:40f0:8", ["const:c26dac:8", "const:4:8"]]
+ 00c26dac ["CALL", null, ["callee:00c58f30:8"]]
- 00c25de0 ["INT_ADD", "register:40f0:8", ["const:c25de0:8", "const:4:8"]]
- 00c25de0 ["CALL", null, ["callee:00c590a0:8"]]
+ 00c26dd4 ["INT_ADD", "register:40f0:8", ["const:c26dd4:8", "const:4:8"]]
+ 00c26dd4 ["CALL", null, ["callee:00c590a0:8"]]
- 00c25e0c ["INT_ADD", "register:40f0:8", ["const:c25e0c:8", "const:4:8"]]
- 00c25e0c ["CALL", null, ["callee:00c5f9e0:8"]]
+ 00c26e00 ["INT_ADD", "register:40f0:8", ["const:c26e00:8", "const:4:8"]]
+ 00c26e00 ["CALL", null, ["callee:00c5f9e0:8"]]
~~~


<a id="compare-aaf0ac51e6508cf305fa5096801572f5"></a>

### [`00c2611c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c2611c.md) → [`00c27110`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c27/00c27110.md) _ZNSt6__ndk114collate_bynameIwED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ea20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ea20.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5f9f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f9f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c26130 ["INT_ADD", "register:40f0:8", ["const:c26130:8", "const:4:8"]]
- 00c26130 ["CALL", null, ["callee:00c5f9f0:8"]]
+ 00c27124 ["INT_ADD", "register:40f0:8", ["const:c27124:8", "const:4:8"]]
+ 00c27124 ["CALL", null, ["callee:00c5f9f0:8"]]
~~~


<a id="compare-decc0cf497d14bb0ac452550f720a5b6"></a>

### [`00c26148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c26148.md) → [`00c2713c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c27/00c2713c.md) _ZNKSt6__ndk114collate_bynameIwE10do_compareEPKwS3_S3_S3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 6件 [`006d76f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`006d7aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7aa8.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c261dc ["INT_ADD", "register:40f0:8", ["const:c261dc:8", "const:4:8"]]
- 00c261dc ["CALL", null, ["callee:00c58f30:8"]]
+ 00c271d0 ["INT_ADD", "register:40f0:8", ["const:c271d0:8", "const:4:8"]]
+ 00c271d0 ["CALL", null, ["callee:00c58f30:8"]]
- 00c26210 ["INT_ADD", "register:40f0:8", ["const:c26210:8", "const:4:8"]]
- 00c26210 ["CALL", null, ["callee:00c590a0:8"]]
+ 00c27204 ["INT_ADD", "register:40f0:8", ["const:c27204:8", "const:4:8"]]
+ 00c27204 ["CALL", null, ["callee:00c590a0:8"]]
- 00c26268 ["INT_ADD", "register:40f0:8", ["const:c26268:8", "const:4:8"]]
- 00c26268 ["CALL", null, ["callee:00c590a0:8"]]
+ 00c2725c ["INT_ADD", "register:40f0:8", ["const:c2725c:8", "const:4:8"]]
+ 00c2725c ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-bb06dee1c7f4118d8d53c21475726966"></a>

### [`00c26360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c26360.md) → [`00c27354`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c27/00c27354.md) _ZNKSt6__ndk114collate_bynameIwE12do_transformEPKwS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006d76f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`006d7aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7aa8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c263ec ["INT_ADD", "register:40f0:8", ["const:c263ec:8", "const:4:8"]]
- 00c263ec ["CALL", null, ["callee:00c58f30:8"]]
+ 00c273e0 ["INT_ADD", "register:40f0:8", ["const:c273e0:8", "const:4:8"]]
+ 00c273e0 ["CALL", null, ["callee:00c58f30:8"]]
- 00c26420 ["INT_ADD", "register:40f0:8", ["const:c26420:8", "const:4:8"]]
- 00c26420 ["CALL", null, ["callee:00c590a0:8"]]
+ 00c27414 ["INT_ADD", "register:40f0:8", ["const:c27414:8", "const:4:8"]]
+ 00c27414 ["CALL", null, ["callee:00c590a0:8"]]
- 00c26450 ["INT_ADD", "register:40f0:8", ["const:c26450:8", "const:4:8"]]
- 00c26450 ["CALL", null, ["callee:00c5fa10:8"]]
+ 00c27444 ["INT_ADD", "register:40f0:8", ["const:c27444:8", "const:4:8"]]
+ 00c27444 ["CALL", null, ["callee:00c5fa10:8"]]
~~~


<a id="compare-4ef8cf36b7f30ab09d9347c830e7886d"></a>

### [`00c26594`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c26594.md) → [`00c27588`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c27/00c27588.md) _ZNSt6__ndk15ctypeIwED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ea50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ea50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5fa20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fa20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c265a8 ["INT_ADD", "register:40f0:8", ["const:c265a8:8", "const:4:8"]]
- 00c265a8 ["CALL", null, ["callee:00c5fa20:8"]]
+ 00c2759c ["INT_ADD", "register:40f0:8", ["const:c2759c:8", "const:4:8"]]
+ 00c2759c ["CALL", null, ["callee:00c5fa20:8"]]
~~~


<a id="compare-7d89033324b71434a328e9e184075844"></a>

### [`00c26d30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c26/00c26d30.md) → [`00c27d24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c27/00c27d24.md) _ZNSt6__ndk15ctypeIcED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ea80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ea80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5fa50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fa50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c26d44 ["INT_ADD", "register:40f0:8", ["const:c26d44:8", "const:4:8"]]
- 00c26d44 ["CALL", null, ["callee:00c5fa50:8"]]
+ 00c27d38 ["INT_ADD", "register:40f0:8", ["const:c27d38:8", "const:4:8"]]
+ 00c27d38 ["CALL", null, ["callee:00c5fa50:8"]]
~~~


<a id="compare-3b2f5d75cafade8310b7bf32ebd7851b"></a>

### [`00c273f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c27/00c273f0.md) → [`00c283e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c28/00c283e4.md) _ZNSt6__ndk112ctype_bynameIcED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5eab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eab0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5fa80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fa80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c27404 ["INT_ADD", "register:40f0:8", ["const:c27404:8", "const:4:8"]]
- 00c27404 ["CALL", null, ["callee:00c5fa80:8"]]
+ 00c283f8 ["INT_ADD", "register:40f0:8", ["const:c283f8:8", "const:4:8"]]
+ 00c283f8 ["CALL", null, ["callee:00c5fa80:8"]]
~~~


<a id="compare-36e5b7c4e7bf7e73e1b3562f9bb083da"></a>

### [`00c27948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c27/00c27948.md) → [`00c2893c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c28/00c2893c.md) _ZNSt6__ndk112ctype_bynameIwED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5eaf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eaf0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5fac0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fac0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c2795c ["INT_ADD", "register:40f0:8", ["const:c2795c:8", "const:4:8"]]
- 00c2795c ["CALL", null, ["callee:00c5fac0:8"]]
+ 00c28950 ["INT_ADD", "register:40f0:8", ["const:c28950:8", "const:4:8"]]
+ 00c28950 ["CALL", null, ["callee:00c5fac0:8"]]
~~~


<a id="compare-b227657a8bcd310758afdcd7002c1f9a"></a>

### [`00c27974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c27/00c27974.md) → [`00c28968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c28/00c28968.md) _ZNKSt6__ndk112ctype_bynameIwE5do_isEmw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 10件 [`00c5ea60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ea60.md) [`00c5eb00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eb00.md) [`00c5eb10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eb10.md) [`00c5eb20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eb20.md) [`00c5eb30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eb30.md)
- 新版 呼出元 0件  · 呼出先 10件 [`00c5fa30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fa30.md) [`00c5fad0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fad0.md) [`00c5fae0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fae0.md) [`00c5faf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5faf0.md) [`00c5fb00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fb00.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c279ac ["INT_ADD", "register:40f0:8", ["const:c279ac:8", "const:4:8"]]
- 00c279ac ["CALL", null, ["callee:00c5fad0:8"]]
+ 00c289a0 ["INT_ADD", "register:40f0:8", ["const:c289a0:8", "const:4:8"]]
+ 00c289a0 ["CALL", null, ["callee:00c5fad0:8"]]
- 00c279c4 ["INT_ADD", "register:40f0:8", ["const:c279c4:8", "const:4:8"]]
- 00c279c4 ["CALL", null, ["callee:00c5fae0:8"]]
+ 00c289b8 ["INT_ADD", "register:40f0:8", ["const:c289b8:8", "const:4:8"]]
+ 00c289b8 ["CALL", null, ["callee:00c5fae0:8"]]
- 00c279f8 ["INT_ADD", "register:40f0:8", ["const:c279f8:8", "const:4:8"]]
- 00c279f8 ["CALL", null, ["callee:00c5faf0:8"]]
+ 00c289ec ["INT_ADD", "register:40f0:8", ["const:c289ec:8", "const:4:8"]]
+ 00c289ec ["CALL", null, ["callee:00c5faf0:8"]]
~~~


<a id="compare-b6678f84205a356c20d9879c2bf96555"></a>

### [`00c27c64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c27/00c27c64.md) → [`00c28c58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c28/00c28c58.md) _ZNKSt6__ndk112ctype_bynameIwE10do_scan_isEmPKwS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 10件 [`00c5ea60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ea60.md) [`00c5eb00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eb00.md) [`00c5eb10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eb10.md) [`00c5eb20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eb20.md) [`00c5eb30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eb30.md)
- 新版 呼出元 0件  · 呼出先 10件 [`00c5fa30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fa30.md) [`00c5fad0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fad0.md) [`00c5fae0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fae0.md) [`00c5faf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5faf0.md) [`00c5fb00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fb00.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c27cb4 ["INT_ADD", "register:40f0:8", ["const:c27cb4:8", "const:4:8"]]
- 00c27cb4 ["CALL", null, ["callee:00c5fad0:8"]]
+ 00c28ca8 ["INT_ADD", "register:40f0:8", ["const:c28ca8:8", "const:4:8"]]
+ 00c28ca8 ["CALL", null, ["callee:00c5fad0:8"]]
- 00c27cc8 ["INT_ADD", "register:40f0:8", ["const:c27cc8:8", "const:4:8"]]
- 00c27cc8 ["CALL", null, ["callee:00c5fae0:8"]]
+ 00c28cbc ["INT_ADD", "register:40f0:8", ["const:c28cbc:8", "const:4:8"]]
+ 00c28cbc ["CALL", null, ["callee:00c5fae0:8"]]
- 00c27cdc ["INT_ADD", "register:40f0:8", ["const:c27cdc:8", "const:4:8"]]
- 00c27cdc ["CALL", null, ["callee:00c5fb00:8"]]
+ 00c28cd0 ["INT_ADD", "register:40f0:8", ["const:c28cd0:8", "const:4:8"]]
+ 00c28cd0 ["CALL", null, ["callee:00c5fb00:8"]]
~~~


<a id="compare-77b91425e448b0897205222ea66f8c0c"></a>

### [`00c27d94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c27/00c27d94.md) → [`00c28d88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c28/00c28d88.md) _ZNKSt6__ndk112ctype_bynameIwE11do_scan_notEmPKwS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 10件 [`00c5ea60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ea60.md) [`00c5eb00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eb00.md) [`00c5eb10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eb10.md) [`00c5eb20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eb20.md) [`00c5eb30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eb30.md)
- 新版 呼出元 0件  · 呼出先 10件 [`00c5fa30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fa30.md) [`00c5fad0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fad0.md) [`00c5fae0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fae0.md) [`00c5faf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5faf0.md) [`00c5fb00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fb00.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c27dd0 ["INT_ADD", "register:40f0:8", ["const:c27dd0:8", "const:4:8"]]
- 00c27dd0 ["CALL", null, ["callee:00c5fad0:8"]]
+ 00c28dc4 ["INT_ADD", "register:40f0:8", ["const:c28dc4:8", "const:4:8"]]
+ 00c28dc4 ["CALL", null, ["callee:00c5fad0:8"]]
- 00c27df8 ["INT_ADD", "register:40f0:8", ["const:c27df8:8", "const:4:8"]]
- 00c27df8 ["CALL", null, ["callee:00c5fae0:8"]]
+ 00c28dec ["INT_ADD", "register:40f0:8", ["const:c28dec:8", "const:4:8"]]
+ 00c28dec ["CALL", null, ["callee:00c5fae0:8"]]
- 00c27e0c ["INT_ADD", "register:40f0:8", ["const:c27e0c:8", "const:4:8"]]
- 00c27e0c ["CALL", null, ["callee:00c5fb00:8"]]
+ 00c28e00 ["INT_ADD", "register:40f0:8", ["const:c28e00:8", "const:4:8"]]
+ 00c28e00 ["CALL", null, ["callee:00c5fb00:8"]]
~~~


<a id="compare-cb52125b1c3d15692d250bf0353bef4d"></a>

### [`00c27ed8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c27/00c27ed8.md) → [`00c28ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c28/00c28ecc.md) _ZNKSt6__ndk112ctype_bynameIwE10do_toupperEPwPKw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5eb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eb90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5fb60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fb60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c27f08 ["INT_ADD", "register:40f0:8", ["const:c27f08:8", "const:4:8"]]
- 00c27f08 ["CALL", null, ["callee:00c5fb60:8"]]
+ 00c28efc ["INT_ADD", "register:40f0:8", ["const:c28efc:8", "const:4:8"]]
+ 00c28efc ["CALL", null, ["callee:00c5fb60:8"]]
~~~


<a id="compare-e4fa074f62688b33aaa0c9eddb2a84ee"></a>

### [`00c27f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c27/00c27f48.md) → [`00c28f3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c28/00c28f3c.md) _ZNKSt6__ndk112ctype_bynameIwE10do_tolowerEPwPKw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5eba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eba0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5fb70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fb70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c27f78 ["INT_ADD", "register:40f0:8", ["const:c27f78:8", "const:4:8"]]
- 00c27f78 ["CALL", null, ["callee:00c5fb70:8"]]
+ 00c28f6c ["INT_ADD", "register:40f0:8", ["const:c28f6c:8", "const:4:8"]]
+ 00c28f6c ["CALL", null, ["callee:00c5fb70:8"]]
~~~


<a id="compare-370e01294b554d0f779790311cf38f84"></a>

### [`00c27fa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c27/00c27fa4.md) → [`00c28f98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c28/00c28f98.md) _ZNKSt6__ndk112ctype_bynameIwE8do_widenEc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5e640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e640.md) [`00c5ebb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ebb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5f610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f610.md) [`00c5fb80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fb80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c27fc0 ["INT_ADD", "register:40f0:8", ["const:c27fc0:8", "const:4:8"]]
- 00c27fc0 ["CALL", null, ["callee:00c5f610:8"]]
+ 00c28fb4 ["INT_ADD", "register:40f0:8", ["const:c28fb4:8", "const:4:8"]]
+ 00c28fb4 ["CALL", null, ["callee:00c5f610:8"]]
- 00c27fd0 ["INT_ADD", "register:40f0:8", ["const:c27fd0:8", "const:4:8"]]
- 00c27fd0 ["CALL", null, ["callee:00c5fb80:8"]]
+ 00c28fc4 ["INT_ADD", "register:40f0:8", ["const:c28fc4:8", "const:4:8"]]
+ 00c28fc4 ["CALL", null, ["callee:00c5fb80:8"]]
- 00c27fe0 ["INT_ADD", "register:40f0:8", ["const:c27fe0:8", "const:4:8"]]
- 00c27fe0 ["CALL", null, ["callee:00c5f610:8"]]
+ 00c28fd4 ["INT_ADD", "register:40f0:8", ["const:c28fd4:8", "const:4:8"]]
+ 00c28fd4 ["CALL", null, ["callee:00c5f610:8"]]
~~~


<a id="compare-fca71126018540485e0bad379b1439b8"></a>

### [`00c28014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c28/00c28014.md) → [`00c29008`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c29/00c29008.md) _ZNKSt6__ndk112ctype_bynameIwE8do_widenEPKcS3_Pw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5e640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e640.md) [`00c5ebb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ebb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5f610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f610.md) [`00c5fb80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fb80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c28064 ["INT_ADD", "register:40f0:8", ["const:c28064:8", "const:4:8"]]
- 00c28064 ["CALL", null, ["callee:00c5f610:8"]]
+ 00c29058 ["INT_ADD", "register:40f0:8", ["const:c29058:8", "const:4:8"]]
+ 00c29058 ["CALL", null, ["callee:00c5f610:8"]]
- 00c28074 ["INT_ADD", "register:40f0:8", ["const:c28074:8", "const:4:8"]]
- 00c28074 ["CALL", null, ["callee:00c5fb80:8"]]
+ 00c29068 ["INT_ADD", "register:40f0:8", ["const:c29068:8", "const:4:8"]]
+ 00c29068 ["CALL", null, ["callee:00c5fb80:8"]]
- 00c28084 ["INT_ADD", "register:40f0:8", ["const:c28084:8", "const:4:8"]]
- 00c28084 ["CALL", null, ["callee:00c5f610:8"]]
+ 00c29078 ["INT_ADD", "register:40f0:8", ["const:c29078:8", "const:4:8"]]
+ 00c29078 ["CALL", null, ["callee:00c5f610:8"]]
~~~


<a id="compare-42dba8dee6010e025c02d47360eec981"></a>

### [`00c280c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c28/00c280c8.md) → [`00c290bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c29/00c290bc.md) _ZNKSt6__ndk112ctype_bynameIwE9do_narrowEwc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5e640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e640.md) [`00c5ebc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ebc0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5f610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f610.md) [`00c5fb90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fb90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c280e8 ["INT_ADD", "register:40f0:8", ["const:c280e8:8", "const:4:8"]]
- 00c280e8 ["CALL", null, ["callee:00c5f610:8"]]
+ 00c290dc ["INT_ADD", "register:40f0:8", ["const:c290dc:8", "const:4:8"]]
+ 00c290dc ["CALL", null, ["callee:00c5f610:8"]]
- 00c280f8 ["INT_ADD", "register:40f0:8", ["const:c280f8:8", "const:4:8"]]
- 00c280f8 ["CALL", null, ["callee:00c5fb90:8"]]
+ 00c290ec ["INT_ADD", "register:40f0:8", ["const:c290ec:8", "const:4:8"]]
+ 00c290ec ["CALL", null, ["callee:00c5fb90:8"]]
- 00c28108 ["INT_ADD", "register:40f0:8", ["const:c28108:8", "const:4:8"]]
- 00c28108 ["CALL", null, ["callee:00c5f610:8"]]
+ 00c290fc ["INT_ADD", "register:40f0:8", ["const:c290fc:8", "const:4:8"]]
+ 00c290fc ["CALL", null, ["callee:00c5f610:8"]]
~~~


<a id="compare-93f02194023ae3a4dd7e157e3aa658ca"></a>

### [`00c28140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c28/00c28140.md) → [`00c29134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c29/00c29134.md) _ZNKSt6__ndk112ctype_bynameIwE9do_narrowEPKwS3_cPc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5e640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e640.md) [`00c5ebc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ebc0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5f610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f610.md) [`00c5fb90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fb90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c2819c ["INT_ADD", "register:40f0:8", ["const:c2819c:8", "const:4:8"]]
- 00c2819c ["CALL", null, ["callee:00c5f610:8"]]
+ 00c29190 ["INT_ADD", "register:40f0:8", ["const:c29190:8", "const:4:8"]]
+ 00c29190 ["CALL", null, ["callee:00c5f610:8"]]
- 00c281ac ["INT_ADD", "register:40f0:8", ["const:c281ac:8", "const:4:8"]]
- 00c281ac ["CALL", null, ["callee:00c5fb90:8"]]
+ 00c291a0 ["INT_ADD", "register:40f0:8", ["const:c291a0:8", "const:4:8"]]
+ 00c291a0 ["CALL", null, ["callee:00c5fb90:8"]]
- 00c281bc ["INT_ADD", "register:40f0:8", ["const:c281bc:8", "const:4:8"]]
- 00c281bc ["CALL", null, ["callee:00c5f610:8"]]
+ 00c291b0 ["INT_ADD", "register:40f0:8", ["const:c291b0:8", "const:4:8"]]
+ 00c291b0 ["CALL", null, ["callee:00c5f610:8"]]
~~~


<a id="compare-55d96a931810e79cc5bce88c6238dcbf"></a>

### [`00c28200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c28/00c28200.md) → [`00c291f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c29/00c291f4.md) _ZNSt6__ndk17codecvtIcc9mbstate_tED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ebd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ebd0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5fba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fba0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c28214 ["INT_ADD", "register:40f0:8", ["const:c28214:8", "const:4:8"]]
- 00c28214 ["CALL", null, ["callee:00c5fba0:8"]]
+ 00c29208 ["INT_ADD", "register:40f0:8", ["const:c29208:8", "const:4:8"]]
+ 00c29208 ["CALL", null, ["callee:00c5fba0:8"]]
~~~


<a id="compare-7af65850b60127cfeb19465248ecfadc"></a>

### [`00c28420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c28/00c28420.md) → [`00c29414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c29/00c29414.md) _ZNSt6__ndk17codecvtIwc9mbstate_tED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ebe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ebe0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5fbb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fbb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c28434 ["INT_ADD", "register:40f0:8", ["const:c28434:8", "const:4:8"]]
- 00c28434 ["CALL", null, ["callee:00c5fbb0:8"]]
+ 00c29428 ["INT_ADD", "register:40f0:8", ["const:c29428:8", "const:4:8"]]
+ 00c29428 ["CALL", null, ["callee:00c5fbb0:8"]]
~~~


<a id="compare-e00ce5bff941bfb8d2d8957a7281e5c9"></a>

### [`00c2844c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c28/00c2844c.md) → [`00c29440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c29/00c29440.md) _ZNKSt6__ndk17codecvtIwc9mbstate_tE6do_outERS1_PKwS5_RS5_PcS7_RS7_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c5e640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e640.md) [`00c5ebf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ebf0.md) [`00c5ec00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ec00.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c5f610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f610.md) [`00c5fbc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fbc0.md) [`00c5fbd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fbd0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c28500 ["INT_ADD", "register:40f0:8", ["const:c28500:8", "const:4:8"]]
- 00c28500 ["CALL", null, ["callee:00c5f610:8"]]
+ 00c294f4 ["INT_ADD", "register:40f0:8", ["const:c294f4:8", "const:4:8"]]
+ 00c294f4 ["CALL", null, ["callee:00c5f610:8"]]
- 00c28520 ["INT_ADD", "register:40f0:8", ["const:c28520:8", "const:4:8"]]
- 00c28520 ["CALL", null, ["callee:00c5fbc0:8"]]
+ 00c29514 ["INT_ADD", "register:40f0:8", ["const:c29514:8", "const:4:8"]]
+ 00c29514 ["CALL", null, ["callee:00c5fbc0:8"]]
- 00c28530 ["INT_ADD", "register:40f0:8", ["const:c28530:8", "const:4:8"]]
- 00c28530 ["CALL", null, ["callee:00c5f610:8"]]
+ 00c29524 ["INT_ADD", "register:40f0:8", ["const:c29524:8", "const:4:8"]]
+ 00c29524 ["CALL", null, ["callee:00c5f610:8"]]
~~~


<a id="compare-a182cf46eb4a934c3632537bd92404d3"></a>

### [`00c28710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c28/00c28710.md) → [`00c29704`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c29/00c29704.md) _ZNKSt6__ndk17codecvtIwc9mbstate_tE5do_inERS1_PKcS5_RS5_PwS7_RS7_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c5e640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e640.md) [`00c5ec10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ec10.md) [`00c5ec20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ec20.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c5f610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f610.md) [`00c5fbe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fbe0.md) [`00c5fbf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fbf0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c287b0 ["INT_ADD", "register:40f0:8", ["const:c287b0:8", "const:4:8"]]
- 00c287b0 ["CALL", null, ["callee:00c5f610:8"]]
+ 00c297a4 ["INT_ADD", "register:40f0:8", ["const:c297a4:8", "const:4:8"]]
+ 00c297a4 ["CALL", null, ["callee:00c5f610:8"]]
- 00c287d0 ["INT_ADD", "register:40f0:8", ["const:c287d0:8", "const:4:8"]]
- 00c287d0 ["CALL", null, ["callee:00c5fbe0:8"]]
+ 00c297c4 ["INT_ADD", "register:40f0:8", ["const:c297c4:8", "const:4:8"]]
+ 00c297c4 ["CALL", null, ["callee:00c5fbe0:8"]]
- 00c287e0 ["INT_ADD", "register:40f0:8", ["const:c287e0:8", "const:4:8"]]
- 00c287e0 ["CALL", null, ["callee:00c5f610:8"]]
+ 00c297d4 ["INT_ADD", "register:40f0:8", ["const:c297d4:8", "const:4:8"]]
+ 00c297d4 ["CALL", null, ["callee:00c5f610:8"]]
~~~


<a id="compare-e9f26ecf6feeea665da8fdf5cf07b2cd"></a>

### [`00c289c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c28/00c289c4.md) → [`00c299b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c29/00c299b8.md) _ZNKSt6__ndk17codecvtIwc9mbstate_tE10do_unshiftERS1_PcS4_RS4_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5e640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e640.md) [`00c5ec00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ec00.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5f610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f610.md) [`00c5fbd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fbd0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c289f0 ["INT_ADD", "register:40f0:8", ["const:c289f0:8", "const:4:8"]]
- 00c289f0 ["CALL", null, ["callee:00c5f610:8"]]
+ 00c299e4 ["INT_ADD", "register:40f0:8", ["const:c299e4:8", "const:4:8"]]
+ 00c299e4 ["CALL", null, ["callee:00c5f610:8"]]
- 00c28a08 ["INT_ADD", "register:40f0:8", ["const:c28a08:8", "const:4:8"]]
- 00c28a08 ["CALL", null, ["callee:00c5fbd0:8"]]
+ 00c299fc ["INT_ADD", "register:40f0:8", ["const:c299fc:8", "const:4:8"]]
+ 00c299fc ["CALL", null, ["callee:00c5fbd0:8"]]
- 00c28a18 ["INT_ADD", "register:40f0:8", ["const:c28a18:8", "const:4:8"]]
- 00c28a18 ["CALL", null, ["callee:00c5f610:8"]]
+ 00c29a0c ["INT_ADD", "register:40f0:8", ["const:c29a0c:8", "const:4:8"]]
+ 00c29a0c ["CALL", null, ["callee:00c5f610:8"]]
~~~


<a id="compare-63b7175b6c84b5d9880fa5990b243e16"></a>

### [`00c28aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c28/00c28aa4.md) → [`00c29a98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c29/00c29a98.md) _ZNKSt6__ndk17codecvtIwc9mbstate_tE11do_encodingEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c5e640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e640.md) [`00c5ec30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ec30.md) [`00c5ec40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ec40.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c5f610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f610.md) [`00c5fc00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fc00.md) [`00c5fc10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fc10.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c28ac0 ["INT_ADD", "register:40f0:8", ["const:c28ac0:8", "const:4:8"]]
- 00c28ac0 ["CALL", null, ["callee:00c5f610:8"]]
+ 00c29ab4 ["INT_ADD", "register:40f0:8", ["const:c29ab4:8", "const:4:8"]]
+ 00c29ab4 ["CALL", null, ["callee:00c5f610:8"]]
- 00c28ad8 ["INT_ADD", "register:40f0:8", ["const:c28ad8:8", "const:4:8"]]
- 00c28ad8 ["CALL", null, ["callee:00c5fc00:8"]]
+ 00c29acc ["INT_ADD", "register:40f0:8", ["const:c29acc:8", "const:4:8"]]
+ 00c29acc ["CALL", null, ["callee:00c5fc00:8"]]
- 00c28ae8 ["INT_ADD", "register:40f0:8", ["const:c28ae8:8", "const:4:8"]]
- 00c28ae8 ["CALL", null, ["callee:00c5f610:8"]]
+ 00c29adc ["INT_ADD", "register:40f0:8", ["const:c29adc:8", "const:4:8"]]
+ 00c29adc ["CALL", null, ["callee:00c5f610:8"]]
~~~


<a id="compare-0b870f37ad7310302539dfaa152a77c9"></a>

### [`00c28b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c28/00c28b74.md) → [`00c29b68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c29/00c29b68.md) _ZNKSt6__ndk17codecvtIwc9mbstate_tE9do_lengthERS1_PKcS5_m

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5e640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e640.md) [`00c5ec50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ec50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5f610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f610.md) [`00c5fc20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fc20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c28bc8 ["INT_ADD", "register:40f0:8", ["const:c28bc8:8", "const:4:8"]]
- 00c28bc8 ["CALL", null, ["callee:00c5f610:8"]]
+ 00c29bbc ["INT_ADD", "register:40f0:8", ["const:c29bbc:8", "const:4:8"]]
+ 00c29bbc ["CALL", null, ["callee:00c5f610:8"]]
- 00c28be0 ["INT_ADD", "register:40f0:8", ["const:c28be0:8", "const:4:8"]]
- 00c28be0 ["CALL", null, ["callee:00c5fc20:8"]]
+ 00c29bd4 ["INT_ADD", "register:40f0:8", ["const:c29bd4:8", "const:4:8"]]
+ 00c29bd4 ["CALL", null, ["callee:00c5fc20:8"]]
- 00c28bf0 ["INT_ADD", "register:40f0:8", ["const:c28bf0:8", "const:4:8"]]
- 00c28bf0 ["CALL", null, ["callee:00c5f610:8"]]
+ 00c29be4 ["INT_ADD", "register:40f0:8", ["const:c29be4:8", "const:4:8"]]
+ 00c29be4 ["CALL", null, ["callee:00c5f610:8"]]
~~~


<a id="compare-6dff9bf97481b7584ceaaf6fd8ec6908"></a>

### [`00c28c6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c28/00c28c6c.md) → [`00c29c60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c29/00c29c60.md) _ZNKSt6__ndk17codecvtIwc9mbstate_tE13do_max_lengthEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5e640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e640.md) [`00c5ec40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ec40.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5f610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f610.md) [`00c5fc10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fc10.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c28c88 ["INT_ADD", "register:40f0:8", ["const:c28c88:8", "const:4:8"]]
- 00c28c88 ["CALL", null, ["callee:00c5f610:8"]]
+ 00c29c7c ["INT_ADD", "register:40f0:8", ["const:c29c7c:8", "const:4:8"]]
+ 00c29c7c ["CALL", null, ["callee:00c5f610:8"]]
- 00c28c94 ["INT_ADD", "register:40f0:8", ["const:c28c94:8", "const:4:8"]]
- 00c28c94 ["CALL", null, ["callee:00c5fc10:8"]]
+ 00c29c88 ["INT_ADD", "register:40f0:8", ["const:c29c88:8", "const:4:8"]]
+ 00c29c88 ["CALL", null, ["callee:00c5fc10:8"]]
- 00c28ca4 ["INT_ADD", "register:40f0:8", ["const:c28ca4:8", "const:4:8"]]
- 00c28ca4 ["CALL", null, ["callee:00c5f610:8"]]
+ 00c29c98 ["INT_ADD", "register:40f0:8", ["const:c29c98:8", "const:4:8"]]
+ 00c29c98 ["CALL", null, ["callee:00c5f610:8"]]
~~~


<a id="compare-142576392bd55dd72942ee0e87606609"></a>

### [`00c28ce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c28/00c28ce4.md) → [`00c29cd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c29/00c29cd8.md) _ZNSt6__ndk17codecvtIDsc9mbstate_tED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ec60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ec60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5fc30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fc30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c28cf8 ["INT_ADD", "register:40f0:8", ["const:c28cf8:8", "const:4:8"]]
- 00c28cf8 ["CALL", null, ["callee:00c5fc30:8"]]
+ 00c29cec ["INT_ADD", "register:40f0:8", ["const:c29cec:8", "const:4:8"]]
+ 00c29cec ["CALL", null, ["callee:00c5fc30:8"]]
~~~


<a id="compare-44fd90c94d194858b084f4823b6cd644"></a>

### [`00c28d10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c28/00c28d10.md) → [`00c29d04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c29/00c29d04.md) _ZNKSt6__ndk17codecvtIDsc9mbstate_tE6do_outERS1_PKDsS5_RS5_PcS7_RS7_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c28d78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c28/00c28d78.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c29d6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c29/00c29d6c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c28d54 ["INT_ADD", "register:40f0:8", ["const:c28d54:8", "const:4:8"]]
- 00c28d54 ["CALL", null, ["callee:00c29d6c:8"]]
+ 00c29d48 ["INT_ADD", "register:40f0:8", ["const:c29d48:8", "const:4:8"]]
+ 00c29d48 ["CALL", null, ["callee:00c29d6c:8"]]
~~~


<a id="compare-2f5d6d987201d6a9acefbd34a1bc76c9"></a>

### [`00c28fd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c28/00c28fd4.md) → [`00c29fc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c29/00c29fc8.md) _ZNKSt6__ndk17codecvtIDsc9mbstate_tE5do_inERS1_PKcS5_RS5_PDsS7_RS7_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c2903c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c29/00c2903c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c2a030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2a/00c2a030.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c29018 ["INT_ADD", "register:40f0:8", ["const:c29018:8", "const:4:8"]]
- 00c29018 ["CALL", null, ["callee:00c2a030:8"]]
+ 00c2a00c ["INT_ADD", "register:40f0:8", ["const:c2a00c:8", "const:4:8"]]
+ 00c2a00c ["CALL", null, ["callee:00c2a030:8"]]
~~~


<a id="compare-e71a655032cff50e0c64f2768d23ec9f"></a>

### [`00c29520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c29/00c29520.md) → [`00c2a514`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2a/00c2a514.md) _ZNSt6__ndk17codecvtIDsDu9mbstate_tED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ec70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ec70.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5fc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fc40.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c29534 ["INT_ADD", "register:40f0:8", ["const:c29534:8", "const:4:8"]]
- 00c29534 ["CALL", null, ["callee:00c5fc40:8"]]
+ 00c2a528 ["INT_ADD", "register:40f0:8", ["const:c2a528:8", "const:4:8"]]
+ 00c2a528 ["CALL", null, ["callee:00c5fc40:8"]]
~~~


<a id="compare-8936c713192593017b90122d2405ad2d"></a>

### [`00c2954c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c29/00c2954c.md) → [`00c2a540`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2a/00c2a540.md) _ZNKSt6__ndk17codecvtIDsDu9mbstate_tE6do_outERS1_PKDsS5_RS5_PDuS7_RS7_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c28d78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c28/00c28d78.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c29d6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c29/00c29d6c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c29590 ["INT_ADD", "register:40f0:8", ["const:c29590:8", "const:4:8"]]
- 00c29590 ["CALL", null, ["callee:00c29d6c:8"]]
+ 00c2a584 ["INT_ADD", "register:40f0:8", ["const:c2a584:8", "const:4:8"]]
+ 00c2a584 ["CALL", null, ["callee:00c29d6c:8"]]
~~~


<a id="compare-c186babb82dbf589dfa75060dd31299d"></a>

### [`00c295b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c29/00c295b4.md) → [`00c2a5a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2a/00c2a5a8.md) _ZNKSt6__ndk17codecvtIDsDu9mbstate_tE5do_inERS1_PKDuS5_RS5_PDsS7_RS7_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c2903c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c29/00c2903c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c2a030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2a/00c2a030.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c295f8 ["INT_ADD", "register:40f0:8", ["const:c295f8:8", "const:4:8"]]
- 00c295f8 ["CALL", null, ["callee:00c2a030:8"]]
+ 00c2a5ec ["INT_ADD", "register:40f0:8", ["const:c2a5ec:8", "const:4:8"]]
+ 00c2a5ec ["CALL", null, ["callee:00c2a030:8"]]
~~~


<a id="compare-ec5ee15fc0312070becef08fee91e024"></a>

### [`00c2966c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c29/00c2966c.md) → [`00c2a660`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2a/00c2a660.md) _ZNSt6__ndk17codecvtIDic9mbstate_tED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ec80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ec80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5fc50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fc50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c29680 ["INT_ADD", "register:40f0:8", ["const:c29680:8", "const:4:8"]]
- 00c29680 ["CALL", null, ["callee:00c5fc50:8"]]
+ 00c2a674 ["INT_ADD", "register:40f0:8", ["const:c2a674:8", "const:4:8"]]
+ 00c2a674 ["CALL", null, ["callee:00c5fc50:8"]]
~~~


<a id="compare-eb6320e98e434e2e3127c5e54bcf553e"></a>

### [`00c29948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c29/00c29948.md) → [`00c2a93c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2a/00c2a93c.md) _ZNKSt6__ndk17codecvtIDic9mbstate_tE5do_inERS1_PKcS5_RS5_PDiS7_RS7_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c299b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c29/00c299b0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c2a9a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2a/00c2a9a4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c2998c ["INT_ADD", "register:40f0:8", ["const:c2998c:8", "const:4:8"]]
- 00c2998c ["CALL", null, ["callee:00c2a9a4:8"]]
+ 00c2a980 ["INT_ADD", "register:40f0:8", ["const:c2a980:8", "const:4:8"]]
+ 00c2a980 ["CALL", null, ["callee:00c2a9a4:8"]]
~~~


<a id="compare-283813468907813f4e3159e839535da5"></a>

### [`00c29e28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c29/00c29e28.md) → [`00c2ae1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2a/00c2ae1c.md) _ZNSt6__ndk17codecvtIDiDu9mbstate_tED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ec90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ec90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5fc60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fc60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c29e3c ["INT_ADD", "register:40f0:8", ["const:c29e3c:8", "const:4:8"]]
- 00c29e3c ["CALL", null, ["callee:00c5fc60:8"]]
+ 00c2ae30 ["INT_ADD", "register:40f0:8", ["const:c2ae30:8", "const:4:8"]]
+ 00c2ae30 ["CALL", null, ["callee:00c5fc60:8"]]
~~~


<a id="compare-4f683bb216e051eb784e82cb1c40acb5"></a>

### [`00c29f7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c29/00c29f7c.md) → [`00c2af70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2a/00c2af70.md) _ZNKSt6__ndk17codecvtIDiDu9mbstate_tE5do_inERS1_PKDuS5_RS5_PDiS7_RS7_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c299b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c29/00c299b0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c2a9a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2a/00c2a9a4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c29fc0 ["INT_ADD", "register:40f0:8", ["const:c29fc0:8", "const:4:8"]]
- 00c29fc0 ["CALL", null, ["callee:00c2a9a4:8"]]
+ 00c2afb4 ["INT_ADD", "register:40f0:8", ["const:c2afb4:8", "const:4:8"]]
+ 00c2afb4 ["CALL", null, ["callee:00c2a9a4:8"]]
~~~


<a id="compare-15171733808c72ba289ecfcf0286cd51"></a>

### [`00c2a034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2a/00c2a034.md) → [`00c2b028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2b/00c2b028.md) _ZNKSt6__ndk114__codecvt_utf8IwE6do_outER9mbstate_tPKwS5_RS5_PcS7_RS7_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c297c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c29/00c297c0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c2a7b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2a/00c2a7b4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c2a080 ["INT_ADD", "register:40f0:8", ["const:c2a080:8", "const:4:8"]]
- 00c2a080 ["CALL", null, ["callee:00c2a7b4:8"]]
+ 00c2b074 ["INT_ADD", "register:40f0:8", ["const:c2b074:8", "const:4:8"]]
+ 00c2b074 ["CALL", null, ["callee:00c2a7b4:8"]]
~~~


<a id="compare-f338b49c48d4a70151ec38582c2afd60"></a>

### [`00c2a0a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2a/00c2a0a4.md) → [`00c2b098`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2b/00c2b098.md) _ZNKSt6__ndk114__codecvt_utf8IwE5do_inER9mbstate_tPKcS5_RS5_PwS7_RS7_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c299b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c29/00c299b0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c2a9a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2a/00c2a9a4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c2a0f0 ["INT_ADD", "register:40f0:8", ["const:c2a0f0:8", "const:4:8"]]
- 00c2a0f0 ["CALL", null, ["callee:00c2a9a4:8"]]
+ 00c2b0e4 ["INT_ADD", "register:40f0:8", ["const:c2b0e4:8", "const:4:8"]]
+ 00c2b0e4 ["CALL", null, ["callee:00c2a9a4:8"]]
~~~


<a id="compare-fb9577943a3921fdd5d6f49879a99025"></a>

### [`00c2a5c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2a/00c2a5c4.md) → [`00c2b5b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2b/00c2b5b8.md) _ZNKSt6__ndk114__codecvt_utf8IDiE6do_outER9mbstate_tPKDiS5_RS5_PcS7_RS7_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c297c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c29/00c297c0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c2a7b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2a/00c2a7b4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c2a610 ["INT_ADD", "register:40f0:8", ["const:c2a610:8", "const:4:8"]]
- 00c2a610 ["CALL", null, ["callee:00c2a7b4:8"]]
+ 00c2b604 ["INT_ADD", "register:40f0:8", ["const:c2b604:8", "const:4:8"]]
+ 00c2b604 ["CALL", null, ["callee:00c2a7b4:8"]]
~~~


<a id="compare-445dde8ff965bec5ae3c580e42b69fa5"></a>

### [`00c2a634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2a/00c2a634.md) → [`00c2b628`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2b/00c2b628.md) _ZNKSt6__ndk114__codecvt_utf8IDiE5do_inER9mbstate_tPKcS5_RS5_PDiS7_RS7_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c299b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c29/00c299b0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c2a9a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2a/00c2a9a4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c2a680 ["INT_ADD", "register:40f0:8", ["const:c2a680:8", "const:4:8"]]
- 00c2a680 ["CALL", null, ["callee:00c2a9a4:8"]]
+ 00c2b674 ["INT_ADD", "register:40f0:8", ["const:c2b674:8", "const:4:8"]]
+ 00c2b674 ["CALL", null, ["callee:00c2a9a4:8"]]
~~~


<a id="compare-ff9dc4558b5f391bc77e562ac4f5ad52"></a>

### [`00c2b5d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2b/00c2b5d8.md) → [`00c2c5cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2c/00c2c5cc.md) _ZNKSt6__ndk120__codecvt_utf8_utf16IwE6do_outER9mbstate_tPKwS5_RS5_PcS7_RS7_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c2b648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2b/00c2b648.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c2c63c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2c/00c2c63c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c2b624 ["INT_ADD", "register:40f0:8", ["const:c2b624:8", "const:4:8"]]
- 00c2b624 ["CALL", null, ["callee:00c2c63c:8"]]
+ 00c2c618 ["INT_ADD", "register:40f0:8", ["const:c2c618:8", "const:4:8"]]
+ 00c2c618 ["CALL", null, ["callee:00c2c63c:8"]]
~~~


<a id="compare-ad48c7b6e5acd2536b1e401a402c668e"></a>

### [`00c2b870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2b/00c2b870.md) → [`00c2c864`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2c/00c2c864.md) _ZNKSt6__ndk120__codecvt_utf8_utf16IwE5do_inER9mbstate_tPKcS5_RS5_PwS7_RS7_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c2b8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2b/00c2b8e0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c2c8d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2c/00c2c8d4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c2b8bc ["INT_ADD", "register:40f0:8", ["const:c2b8bc:8", "const:4:8"]]
- 00c2b8bc ["CALL", null, ["callee:00c2c8d4:8"]]
+ 00c2c8b0 ["INT_ADD", "register:40f0:8", ["const:c2c8b0:8", "const:4:8"]]
+ 00c2c8b0 ["CALL", null, ["callee:00c2c8d4:8"]]
~~~


<a id="compare-ad118a09b8e5275dbd3f50969aafa978"></a>

### [`00c2bbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2b/00c2bbd0.md) → [`00c2cbc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2c/00c2cbc4.md) _ZNKSt6__ndk120__codecvt_utf8_utf16IDsE6do_outER9mbstate_tPKDsS5_RS5_PcS7_RS7_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c28d78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c28/00c28d78.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c29d6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c29/00c29d6c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c2bc1c ["INT_ADD", "register:40f0:8", ["const:c2bc1c:8", "const:4:8"]]
- 00c2bc1c ["CALL", null, ["callee:00c29d6c:8"]]
+ 00c2cc10 ["INT_ADD", "register:40f0:8", ["const:c2cc10:8", "const:4:8"]]
+ 00c2cc10 ["CALL", null, ["callee:00c29d6c:8"]]
~~~


<a id="compare-8895a1c07f8b7756dd53b7351b91853a"></a>

### [`00c2bc40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2b/00c2bc40.md) → [`00c2cc34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2c/00c2cc34.md) _ZNKSt6__ndk120__codecvt_utf8_utf16IDsE5do_inER9mbstate_tPKcS5_RS5_PDsS7_RS7_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c2903c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c29/00c2903c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c2a030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2a/00c2a030.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c2bc8c ["INT_ADD", "register:40f0:8", ["const:c2bc8c:8", "const:4:8"]]
- 00c2bc8c ["CALL", null, ["callee:00c2a030:8"]]
+ 00c2cc80 ["INT_ADD", "register:40f0:8", ["const:c2cc80:8", "const:4:8"]]
+ 00c2cc80 ["CALL", null, ["callee:00c2a030:8"]]
~~~


<a id="compare-fd586ea2674129b90dc2edb49030edfa"></a>

### [`00c2bd14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2b/00c2bd14.md) → [`00c2cd08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2c/00c2cd08.md) _ZNKSt6__ndk120__codecvt_utf8_utf16IDiE6do_outER9mbstate_tPKDiS5_RS5_PcS7_RS7_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c2b648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2b/00c2b648.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c2c63c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2c/00c2c63c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c2bd60 ["INT_ADD", "register:40f0:8", ["const:c2bd60:8", "const:4:8"]]
- 00c2bd60 ["CALL", null, ["callee:00c2c63c:8"]]
+ 00c2cd54 ["INT_ADD", "register:40f0:8", ["const:c2cd54:8", "const:4:8"]]
+ 00c2cd54 ["CALL", null, ["callee:00c2c63c:8"]]
~~~


<a id="compare-f72d34244dec0b5d3815dfe09cf21a6f"></a>

### [`00c2bd84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2b/00c2bd84.md) → [`00c2cd78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2c/00c2cd78.md) _ZNKSt6__ndk120__codecvt_utf8_utf16IDiE5do_inER9mbstate_tPKcS5_RS5_PDiS7_RS7_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c2b8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2b/00c2b8e0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c2c8d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2c/00c2c8d4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c2bdd0 ["INT_ADD", "register:40f0:8", ["const:c2bdd0:8", "const:4:8"]]
- 00c2bdd0 ["CALL", null, ["callee:00c2c8d4:8"]]
+ 00c2cdc4 ["INT_ADD", "register:40f0:8", ["const:c2cdc4:8", "const:4:8"]]
+ 00c2cdc4 ["CALL", null, ["callee:00c2c8d4:8"]]
~~~


<a id="compare-ddcd66b8c3f5e7d47cd7cbe20b58ce5c"></a>

### [`00c2be58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2b/00c2be58.md) → [`00c2ce4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2c/00c2ce4c.md) _ZNSt6__ndk116__narrow_to_utf8ILm16EED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5eca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5eca0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5fc70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fc70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c2be6c ["INT_ADD", "register:40f0:8", ["const:c2be6c:8", "const:4:8"]]
- 00c2be6c ["CALL", null, ["callee:00c5fc70:8"]]
+ 00c2ce60 ["INT_ADD", "register:40f0:8", ["const:c2ce60:8", "const:4:8"]]
+ 00c2ce60 ["CALL", null, ["callee:00c5fc70:8"]]
~~~


<a id="compare-5f64d25a3c93b6c5fc42864a94a0fa81"></a>

### [`00c2be84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2b/00c2be84.md) → [`00c2ce78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2c/00c2ce78.md) _ZNSt6__ndk116__narrow_to_utf8ILm32EED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ecb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ecb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5fc80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fc80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c2be98 ["INT_ADD", "register:40f0:8", ["const:c2be98:8", "const:4:8"]]
- 00c2be98 ["CALL", null, ["callee:00c5fc80:8"]]
+ 00c2ce8c ["INT_ADD", "register:40f0:8", ["const:c2ce8c:8", "const:4:8"]]
+ 00c2ce8c ["CALL", null, ["callee:00c5fc80:8"]]
~~~


<a id="compare-5ddbb057ad3a8e6a897602ca56334a30"></a>

### [`00c2beb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2b/00c2beb0.md) → [`00c2cea4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2c/00c2cea4.md) _ZNSt6__ndk117__widen_from_utf8ILm16EED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ecc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ecc0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5fc90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fc90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c2bec4 ["INT_ADD", "register:40f0:8", ["const:c2bec4:8", "const:4:8"]]
- 00c2bec4 ["CALL", null, ["callee:00c5fc90:8"]]
+ 00c2ceb8 ["INT_ADD", "register:40f0:8", ["const:c2ceb8:8", "const:4:8"]]
+ 00c2ceb8 ["CALL", null, ["callee:00c5fc90:8"]]
~~~


<a id="compare-3b545e5f5106e2a5c7148d7f8eb9c19b"></a>

### [`00c2bedc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2b/00c2bedc.md) → [`00c2ced0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2c/00c2ced0.md) _ZNSt6__ndk117__widen_from_utf8ILm32EED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ecd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ecd0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5fca0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fca0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c2bef0 ["INT_ADD", "register:40f0:8", ["const:c2bef0:8", "const:4:8"]]
- 00c2bef0 ["CALL", null, ["callee:00c5fca0:8"]]
+ 00c2cee4 ["INT_ADD", "register:40f0:8", ["const:c2cee4:8", "const:4:8"]]
+ 00c2cee4 ["CALL", null, ["callee:00c5fca0:8"]]
~~~


<a id="compare-aac71302ebcf713ec06648d3ab3f1a4c"></a>

### [`00c2bfb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2b/00c2bfb4.md) → [`00c2cfa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2c/00c2cfa8.md) _ZNSt6__ndk18numpunctIcED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ecf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ecf0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5fcc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fcc0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c2bfc8 ["INT_ADD", "register:40f0:8", ["const:c2bfc8:8", "const:4:8"]]
- 00c2bfc8 ["CALL", null, ["callee:00c5fcc0:8"]]
+ 00c2cfbc ["INT_ADD", "register:40f0:8", ["const:c2cfbc:8", "const:4:8"]]
+ 00c2cfbc ["CALL", null, ["callee:00c5fcc0:8"]]
~~~


<a id="compare-89d290bc6c5f10fbf743b1ac31716a4e"></a>

### [`00c2c030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c030.md) → [`00c2d024`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2d/00c2d024.md) _ZNSt6__ndk18numpunctIwED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ed10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ed10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5fce0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fce0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c2c044 ["INT_ADD", "register:40f0:8", ["const:c2c044:8", "const:4:8"]]
- 00c2c044 ["CALL", null, ["callee:00c5fce0:8"]]
+ 00c2d038 ["INT_ADD", "register:40f0:8", ["const:c2d038:8", "const:4:8"]]
+ 00c2d038 ["CALL", null, ["callee:00c5fce0:8"]]
~~~


<a id="compare-fc4d68ceebe59cc26ba74b79800d2839"></a>

### [`00c2c130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c130.md) → [`00c2d124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2d/00c2d124.md) FUN_00c2d124

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`00c2e2f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e2f4.md) [`00c2e400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e400.md) [`00c2e50c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e50c.md) [`00c2e618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e618.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006d76f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5e0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e0d0.md)
- 新版 呼出元 4件 [`00c2f2e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2f/00c2f2e8.md) [`00c2f3f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2f/00c2f3f4.md) [`00c2f500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2f/00c2f500.md) [`00c2f60c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2f/00c2f60c.md) · 呼出先 5件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`006d7aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7aa8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c5f0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f0a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c2c150 ["INT_ADD", "register:40f0:8", ["const:c2c150:8", "const:4:8"]]
- 00c2c150 ["CALL", null, ["callee:00c5f0a0:8"]]
+ 00c2d144 ["INT_ADD", "register:40f0:8", ["const:c2d144:8", "const:4:8"]]
+ 00c2d144 ["CALL", null, ["callee:00c5f0a0:8"]]
- 00c2c1a4 ["INT_ADD", "register:40f0:8", ["const:c2c1a4:8", "const:4:8"]]
- 00c2c1a4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00c2d198 ["INT_ADD", "register:40f0:8", ["const:c2d198:8", "const:4:8"]]
+ 00c2d198 ["CALL", null, ["callee:00c58f30:8"]]
- 00c2c1c4 ["INT_ADD", "register:40f0:8", ["const:c2c1c4:8", "const:4:8"]]
- 00c2c1c4 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00c2d1b8 ["INT_ADD", "register:40f0:8", ["const:c2d1b8:8", "const:4:8"]]
+ 00c2d1b8 ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-866b4d17685969b8fff598a129696c35"></a>

### [`00c2c608`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c608.md) → [`00c2d5fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2d/00c2d5fc.md) _ZNSt6__ndk115numpunct_bynameIcED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ed40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ed40.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5fd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fd10.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c2c61c ["INT_ADD", "register:40f0:8", ["const:c2c61c:8", "const:4:8"]]
- 00c2c61c ["CALL", null, ["callee:00c5fd10:8"]]
+ 00c2d610 ["INT_ADD", "register:40f0:8", ["const:c2d610:8", "const:4:8"]]
+ 00c2d610 ["CALL", null, ["callee:00c5fd10:8"]]
~~~


<a id="compare-7aaca095aff35e6c129433028ae665bf"></a>

### [`00c2c634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c634.md) → [`00c2d628`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2d/00c2d628.md) FUN_00c2d628

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00c2c6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c6c0.md) [`00c3381c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c33/00c3381c.md) [`00c34518`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c34/00c34518.md) · 呼出先 1件 [`00c5d2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2a0.md)
- 新版 呼出元 3件 [`00c2d6b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2d/00c2d6b4.md) [`00c34810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c34/00c34810.md) [`00c3550c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c35/00c3550c.md) · 呼出先 1件 [`00c5e270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e270.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c2c648 ["INT_ADD", "register:40f0:8", ["const:c2c648:8", "const:4:8"]]
- 00c2c648 ["CALL", null, ["callee:00c5e270:8"]]
+ 00c2d63c ["INT_ADD", "register:40f0:8", ["const:c2d63c:8", "const:4:8"]]
+ 00c2d63c ["CALL", null, ["callee:00c5e270:8"]]
~~~


<a id="compare-0a55d8383ae93c54a852dea588a04562"></a>

### [`00c2c940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2c/00c2c940.md) → [`00c2d934`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2d/00c2d934.md) _ZNSt6__ndk115numpunct_bynameIwED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ed60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ed60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5fd30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fd30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c2c954 ["INT_ADD", "register:40f0:8", ["const:c2c954:8", "const:4:8"]]
- 00c2c954 ["CALL", null, ["callee:00c5fd30:8"]]
+ 00c2d948 ["INT_ADD", "register:40f0:8", ["const:c2d948:8", "const:4:8"]]
+ 00c2d948 ["CALL", null, ["callee:00c5fd30:8"]]
~~~


<a id="compare-709a66f2a8560bda6f7414af5feb5f72"></a>

### [`00c2e81c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e81c.md) → [`00c2f810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2f/00c2f810.md) _ZNSt6__ndk110__time_getD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ed90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ed90.md) · 呼出先 1件 [`00c5d2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d2a0.md)
- 新版 呼出元 1件 [`00c5fd60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5fd60.md) · 呼出先 1件 [`00c5e270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e270.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c2e82c ["INT_ADD", "register:40f0:8", ["const:c2e82c:8", "const:4:8"]]
- 00c2e82c ["CALL", null, ["callee:00c5e270:8"]]
+ 00c2f820 ["INT_ADD", "register:40f0:8", ["const:c2f820:8", "const:4:8"]]
+ 00c2f820 ["CALL", null, ["callee:00c5e270:8"]]
~~~


<a id="compare-7f8d2a0856246631c344a6ce2007e7fa"></a>

### [`00c2ee28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2ee28.md) → [`00c2fe1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2f/00c2fe1c.md) FUN_00c2fe1c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c2e840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c2e/00c2e840.md) · 呼出先 3件 [`00c58730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58730.md) [`00c5a0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0f0.md) [`00c5e050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e050.md)
- 新版 呼出元 1件 [`00c2f834`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c2f/00c2f834.md) · 呼出先 3件 [`00c59700`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59700.md) [`00c5b0c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b0c0.md) [`00c5f020`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5f/00c5f020.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c2ee88 ["INT_ADD", "register:40f0:8", ["const:c2ee88:8", "const:4:8"]]
- 00c2ee88 ["CALL", null, ["callee:00c5b0c0:8"]]
+ 00c2fe7c ["INT_ADD", "register:40f0:8", ["const:c2fe7c:8", "const:4:8"]]
+ 00c2fe7c ["CALL", null, ["callee:00c5b0c0:8"]]
- 00c2ee98 ["INT_ADD", "register:40f0:8", ["const:c2ee98:8", "const:4:8"]]
- 00c2ee98 ["CALL", null, ["callee:00c5f020:8"]]
+ 00c2fe8c ["INT_ADD", "register:40f0:8", ["const:c2fe8c:8", "const:4:8"]]
+ 00c2fe8c ["CALL", null, ["callee:00c5f020:8"]]
- 00c2ef2c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c2ef2c ["INT_ADD", "register:40f0:8", ["const:c2ef2c:8", "const:4:8"]]
- 00c2ef2c ["CALLIND", null, ["register:0:8"]]
+ 00c2ff20 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c2ff20 ["INT_ADD", "register:40f0:8", ["const:c2ff20:8", "const:4:8"]]
+ 00c2ff20 ["CALLIND", null, ["register:0:8"]]
~~~


