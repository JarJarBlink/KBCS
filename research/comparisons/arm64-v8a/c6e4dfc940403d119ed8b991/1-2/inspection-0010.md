# v16.0.2 → v16.0.3 · 要調査の変更候補 (10)

[一覧の目次](README.md)

<a id="compare-9b07b64163a9163ec290cd25abd1892d"></a>

### [`00533210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00533/00533210.md) → [`00533530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00533/00533530.md) FUN_00533530

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053322c ["INT_ADD", "register:40f0:8", ["const:53322c:8", "const:4:8"]]
- 0053322c ["CALL", null, ["callee:00c58f50:8"]]
+ 0053354c ["INT_ADD", "register:40f0:8", ["const:53354c:8", "const:4:8"]]
+ 0053354c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-6841dbd40179aaec315471b224932a94"></a>

### [`0053325c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00533/0053325c.md) → [`0053357c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00533/0053357c.md) FUN_0053357c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00533278 ["INT_ADD", "register:40f0:8", ["const:533278:8", "const:4:8"]]
- 00533278 ["CALL", null, ["callee:00c58f50:8"]]
+ 00533598 ["INT_ADD", "register:40f0:8", ["const:533598:8", "const:4:8"]]
+ 00533598 ["CALL", null, ["callee:00c58f50:8"]]
- 00533290 ["COPY", "register:0:8", ["register:4040:8"]]
- 00533290 ["INT_ADD", "register:40f0:8", ["const:533290:8", "const:4:8"]]
- 00533290 ["CALLIND", null, ["register:0:8"]]
+ 005335b0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005335b0 ["INT_ADD", "register:40f0:8", ["const:5335b0:8", "const:4:8"]]
+ 005335b0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-062ab139569c1c1bb2c786b766583b07"></a>

### [`005332a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00533/005332a4.md) → [`005335c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00533/005335c4.md) FUN_005335c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c595e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c595e0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5a5b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a5b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005332b8 ["INT_ADD", "register:40f0:8", ["const:5332b8:8", "const:4:8"]]
- 005332b8 ["CALL", null, ["callee:00c58f30:8"]]
+ 005335d8 ["INT_ADD", "register:40f0:8", ["const:5335d8:8", "const:4:8"]]
+ 005335d8 ["CALL", null, ["callee:00c58f30:8"]]
- 005332d0 ["COPY", "register:0:8", ["register:4048:8"]]
- 005332d0 ["INT_ADD", "register:40f0:8", ["const:5332d0:8", "const:4:8"]]
- 005332d0 ["CALLIND", null, ["register:0:8"]]
+ 005335f0 ["COPY", "register:0:8", ["register:4048:8"]]
+ 005335f0 ["INT_ADD", "register:40f0:8", ["const:5335f0:8", "const:4:8"]]
+ 005335f0 ["CALLIND", null, ["register:0:8"]]
- 005332dc ["INT_ADD", "register:40f0:8", ["const:5332dc:8", "const:4:8"]]
- 005332dc ["CALL", null, ["callee:00c5a5b0:8"]]
+ 005335fc ["INT_ADD", "register:40f0:8", ["const:5335fc:8", "const:4:8"]]
+ 005335fc ["CALL", null, ["callee:00c5a5b0:8"]]
~~~


<a id="compare-e20c1873e63d0369fa06af1ae2ea20e7"></a>

### [`005333f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00533/005333f8.md) → [`00533718`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00533/00533718.md) FUN_00533718

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c595d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c595d0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5a5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a5a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053341c ["INT_ADD", "register:40f0:8", ["const:53341c:8", "const:4:8"]]
- 0053341c ["CALL", null, ["callee:00c58f30:8"]]
+ 0053373c ["INT_ADD", "register:40f0:8", ["const:53373c:8", "const:4:8"]]
+ 0053373c ["CALL", null, ["callee:00c58f30:8"]]
- 0053342c ["INT_ADD", "register:40f0:8", ["const:53342c:8", "const:4:8"]]
- 0053342c ["CALL", null, ["callee:00c5a5a0:8"]]
+ 0053374c ["INT_ADD", "register:40f0:8", ["const:53374c:8", "const:4:8"]]
+ 0053374c ["CALL", null, ["callee:00c5a5a0:8"]]
- 0053343c ["INT_ADD", "register:40f0:8", ["const:53343c:8", "const:4:8"]]
- 0053343c ["CALL", null, ["callee:00c58f50:8"]]
+ 0053375c ["INT_ADD", "register:40f0:8", ["const:53375c:8", "const:4:8"]]
+ 0053375c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-d1b69cecbb6e1538a3fbb3a41326284f"></a>

### [`005335bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00533/005335bc.md) → [`005338dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00533/005338dc.md) FUN_005338dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005335e4 ["COPY", "register:0:8", ["register:4048:8"]]
- 005335e4 ["INT_ADD", "register:40f0:8", ["const:5335e4:8", "const:4:8"]]
- 005335e4 ["CALLIND", null, ["register:0:8"]]
+ 00533904 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00533904 ["INT_ADD", "register:40f0:8", ["const:533904:8", "const:4:8"]]
+ 00533904 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a4e88fced2c9764fcae94512c30d3967"></a>

### [`005335f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00533/005335f8.md) → [`00533918`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00533/00533918.md) FUN_00533918

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c595f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c595f0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5a5c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a5c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053360c ["INT_ADD", "register:40f0:8", ["const:53360c:8", "const:4:8"]]
- 0053360c ["CALL", null, ["callee:00c58f30:8"]]
+ 0053392c ["INT_ADD", "register:40f0:8", ["const:53392c:8", "const:4:8"]]
+ 0053392c ["CALL", null, ["callee:00c58f30:8"]]
- 00533624 ["COPY", "register:0:8", ["register:4048:8"]]
- 00533624 ["INT_ADD", "register:40f0:8", ["const:533624:8", "const:4:8"]]
- 00533624 ["CALLIND", null, ["register:0:8"]]
+ 00533944 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00533944 ["INT_ADD", "register:40f0:8", ["const:533944:8", "const:4:8"]]
+ 00533944 ["CALLIND", null, ["register:0:8"]]
- 00533634 ["INT_ADD", "register:40f0:8", ["const:533634:8", "const:4:8"]]
- 00533634 ["CALL", null, ["callee:00c5a5c0:8"]]
+ 00533954 ["INT_ADD", "register:40f0:8", ["const:533954:8", "const:4:8"]]
+ 00533954 ["CALL", null, ["callee:00c5a5c0:8"]]
~~~


<a id="compare-e33d51895d09f6b19e4393b7cdb1358d"></a>

### [`00533738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00533/00533738.md) → [`00533a58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00533/00533a58.md) FUN_00533a58

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c59600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59600.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5a5d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a5d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053374c ["INT_ADD", "register:40f0:8", ["const:53374c:8", "const:4:8"]]
- 0053374c ["CALL", null, ["callee:00c58f30:8"]]
+ 00533a6c ["INT_ADD", "register:40f0:8", ["const:533a6c:8", "const:4:8"]]
+ 00533a6c ["CALL", null, ["callee:00c58f30:8"]]
- 00533764 ["COPY", "register:0:8", ["register:4048:8"]]
- 00533764 ["INT_ADD", "register:40f0:8", ["const:533764:8", "const:4:8"]]
- 00533764 ["CALLIND", null, ["register:0:8"]]
+ 00533a84 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00533a84 ["INT_ADD", "register:40f0:8", ["const:533a84:8", "const:4:8"]]
+ 00533a84 ["CALLIND", null, ["register:0:8"]]
- 00533774 ["INT_ADD", "register:40f0:8", ["const:533774:8", "const:4:8"]]
- 00533774 ["CALL", null, ["callee:00c5a5d0:8"]]
+ 00533a94 ["INT_ADD", "register:40f0:8", ["const:533a94:8", "const:4:8"]]
+ 00533a94 ["CALL", null, ["callee:00c5a5d0:8"]]
~~~


<a id="compare-a1c401d53129aca6010139e6c4867c68"></a>

### [`00533878`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00533/00533878.md) → [`00533b98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00533/00533b98.md) FUN_00533b98

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005337ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00533/005337ac.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00533acc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00533/00533acc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00533888 ["INT_ADD", "register:40f0:8", ["const:533888:8", "const:4:8"]]
- 00533888 ["CALL", null, ["callee:00533acc:8"]]
+ 00533ba8 ["INT_ADD", "register:40f0:8", ["const:533ba8:8", "const:4:8"]]
+ 00533ba8 ["CALL", null, ["callee:00533acc:8"]]
~~~


<a id="compare-241afb1b122775059098e92f443de872"></a>

### [`00533b00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00533/00533b00.md) → [`00533e20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00533/00533e20.md) FUN_00533e20

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005339e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00533/005339e4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00533d04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00533/00533d04.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00533b10 ["INT_ADD", "register:40f0:8", ["const:533b10:8", "const:4:8"]]
- 00533b10 ["CALL", null, ["callee:00533d04:8"]]
+ 00533e30 ["INT_ADD", "register:40f0:8", ["const:533e30:8", "const:4:8"]]
+ 00533e30 ["CALL", null, ["callee:00533d04:8"]]
~~~


<a id="compare-d9b3c3a98e89564a341fc07ed06f7402"></a>

### [`00533b2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00533/00533b2c.md) → [`00533e4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00533/00533e4c.md) FUN_00533e4c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005339e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00533/005339e4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00533d04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00533/00533d04.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00533b40 ["INT_ADD", "register:40f0:8", ["const:533b40:8", "const:4:8"]]
- 00533b40 ["CALL", null, ["callee:00533d04:8"]]
+ 00533e60 ["INT_ADD", "register:40f0:8", ["const:533e60:8", "const:4:8"]]
+ 00533e60 ["CALL", null, ["callee:00533d04:8"]]
~~~


<a id="compare-48ac939fe8d40381787f34cae6672161"></a>

### [`005346b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00534/005346b4.md) → [`005349d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00534/005349d4.md) FUN_005349d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00534700 ["INT_ADD", "register:40f0:8", ["const:534700:8", "const:4:8"]]
- 00534700 ["CALL", null, ["callee:00c54d90:8"]]
+ 00534a20 ["INT_ADD", "register:40f0:8", ["const:534a20:8", "const:4:8"]]
+ 00534a20 ["CALL", null, ["callee:00c54d90:8"]]
- 00534714 ["COPY", "register:0:8", ["register:4040:8"]]
- 00534714 ["INT_ADD", "register:40f0:8", ["const:534714:8", "const:4:8"]]
- 00534714 ["CALLIND", null, ["register:0:8"]]
+ 00534a34 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00534a34 ["INT_ADD", "register:40f0:8", ["const:534a34:8", "const:4:8"]]
+ 00534a34 ["CALLIND", null, ["register:0:8"]]
- 0053471c ["INT_ADD", "register:40f0:8", ["const:53471c:8", "const:4:8"]]
- 0053471c ["CALL", null, ["callee:00c58f20:8"]]
+ 00534a3c ["INT_ADD", "register:40f0:8", ["const:534a3c:8", "const:4:8"]]
+ 00534a3c ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-663764d5ae594c9e200581efd70ce2c0"></a>

### [`005347ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00534/005347ac.md) → [`00534acc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00534/00534acc.md) FUN_00534acc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005347c8 ["INT_ADD", "register:40f0:8", ["const:5347c8:8", "const:4:8"]]
- 005347c8 ["CALL", null, ["callee:00c54d90:8"]]
+ 00534ae8 ["INT_ADD", "register:40f0:8", ["const:534ae8:8", "const:4:8"]]
+ 00534ae8 ["CALL", null, ["callee:00c54d90:8"]]
- 005347e8 ["COPY", "register:0:8", ["register:4040:8"]]
- 005347e8 ["INT_ADD", "register:40f0:8", ["const:5347e8:8", "const:4:8"]]
- 005347e8 ["CALLIND", null, ["register:0:8"]]
+ 00534b08 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00534b08 ["INT_ADD", "register:40f0:8", ["const:534b08:8", "const:4:8"]]
+ 00534b08 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-54b68fd6c0fa97bd0bb30ff828dc46ef"></a>

### [`005347fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00534/005347fc.md) → [`00534b1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00534/00534b1c.md) FUN_00534b1c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053481c ["INT_ADD", "register:40f0:8", ["const:53481c:8", "const:4:8"]]
- 0053481c ["CALL", null, ["callee:00c54d90:8"]]
+ 00534b3c ["INT_ADD", "register:40f0:8", ["const:534b3c:8", "const:4:8"]]
+ 00534b3c ["CALL", null, ["callee:00c54d90:8"]]
- 00534830 ["COPY", "register:0:8", ["register:4040:8"]]
- 00534830 ["INT_ADD", "register:40f0:8", ["const:534830:8", "const:4:8"]]
- 00534830 ["CALLIND", null, ["register:0:8"]]
+ 00534b50 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00534b50 ["INT_ADD", "register:40f0:8", ["const:534b50:8", "const:4:8"]]
+ 00534b50 ["CALLIND", null, ["register:0:8"]]
- 00534838 ["INT_ADD", "register:40f0:8", ["const:534838:8", "const:4:8"]]
- 00534838 ["CALL", null, ["callee:00c58f20:8"]]
+ 00534b58 ["INT_ADD", "register:40f0:8", ["const:534b58:8", "const:4:8"]]
+ 00534b58 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-4eb51e30f44ab909a2ccab6bb71f4925"></a>

### [`005350e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005350e8.md) → [`00535408`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00535/00535408.md) FUN_00535408

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f30.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f00.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053510c ["COPY", "register:0:8", ["register:4040:8"]]
- 0053510c ["INT_ADD", "register:40f0:8", ["const:53510c:8", "const:4:8"]]
- 0053510c ["CALLIND", null, ["register:0:8"]]
+ 0053542c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0053542c ["INT_ADD", "register:40f0:8", ["const:53542c:8", "const:4:8"]]
+ 0053542c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-28cb1fc555ea0e8654d022a24ca2b943"></a>

### [`00535120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/00535120.md) → [`00535440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00535/00535440.md) FUN_00535440

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f30.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f00.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00535144 ["COPY", "register:0:8", ["register:4040:8"]]
- 00535144 ["INT_ADD", "register:40f0:8", ["const:535144:8", "const:4:8"]]
- 00535144 ["CALLIND", null, ["register:0:8"]]
+ 00535464 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00535464 ["INT_ADD", "register:40f0:8", ["const:535464:8", "const:4:8"]]
+ 00535464 ["CALLIND", null, ["register:0:8"]]
- 0053514c ["INT_ADD", "register:40f0:8", ["const:53514c:8", "const:4:8"]]
- 0053514c ["CALL", null, ["callee:00c58f00:8"]]
+ 0053546c ["INT_ADD", "register:40f0:8", ["const:53546c:8", "const:4:8"]]
+ 0053546c ["CALL", null, ["callee:00c58f00:8"]]
~~~


<a id="compare-867f50aa8440856e8cc6f38d8507c756"></a>

### [`00535160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/00535160.md) → [`00535480`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00535/00535480.md) FUN_00535480

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c59180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59180.md) [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00535180 ["INT_ADD", "register:40f0:8", ["const:535180:8", "const:4:8"]]
- 00535180 ["CALL", null, ["callee:00c59180:8"]]
+ 005354a0 ["INT_ADD", "register:40f0:8", ["const:5354a0:8", "const:4:8"]]
+ 005354a0 ["CALL", null, ["callee:00c59180:8"]]
- 00535198 ["COPY", "register:0:8", ["register:4040:8"]]
- 00535198 ["INT_ADD", "register:40f0:8", ["const:535198:8", "const:4:8"]]
- 00535198 ["CALLIND", null, ["register:0:8"]]
+ 005354b8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005354b8 ["INT_ADD", "register:40f0:8", ["const:5354b8:8", "const:4:8"]]
+ 005354b8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-dabf70772db4edfd8817f7972e04d4e2"></a>

### [`005351c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005351c4.md) → [`005354e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00535/005354e4.md) FUN_005354e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c59180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59180.md) [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005351e4 ["INT_ADD", "register:40f0:8", ["const:5351e4:8", "const:4:8"]]
- 005351e4 ["CALL", null, ["callee:00c59180:8"]]
+ 00535504 ["INT_ADD", "register:40f0:8", ["const:535504:8", "const:4:8"]]
+ 00535504 ["CALL", null, ["callee:00c59180:8"]]
- 005351fc ["COPY", "register:0:8", ["register:4040:8"]]
- 005351fc ["INT_ADD", "register:40f0:8", ["const:5351fc:8", "const:4:8"]]
- 005351fc ["CALLIND", null, ["register:0:8"]]
+ 0053551c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0053551c ["INT_ADD", "register:40f0:8", ["const:53551c:8", "const:4:8"]]
+ 0053551c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-51de2fc13d2a831c42c53abdcf46809a"></a>

### [`00535228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/00535228.md) → [`00535548`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00535/00535548.md) FUN_00535548

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c59180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59180.md) [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00535240 ["INT_ADD", "register:40f0:8", ["const:535240:8", "const:4:8"]]
- 00535240 ["CALL", null, ["callee:00c59180:8"]]
+ 00535560 ["INT_ADD", "register:40f0:8", ["const:535560:8", "const:4:8"]]
+ 00535560 ["CALL", null, ["callee:00c59180:8"]]
- 00535254 ["COPY", "register:0:8", ["register:4048:8"]]
- 00535254 ["INT_ADD", "register:40f0:8", ["const:535254:8", "const:4:8"]]
- 00535254 ["CALLIND", null, ["register:0:8"]]
+ 00535574 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00535574 ["INT_ADD", "register:40f0:8", ["const:535574:8", "const:4:8"]]
+ 00535574 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9c35b76f0583c9dbc4bf89ef946dd164"></a>

### [`0053527c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/0053527c.md) → [`0053559c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00535/0053559c.md) FUN_0053559c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c59180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59180.md) [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00535290 ["INT_ADD", "register:40f0:8", ["const:535290:8", "const:4:8"]]
- 00535290 ["CALL", null, ["callee:00c59180:8"]]
+ 005355b0 ["INT_ADD", "register:40f0:8", ["const:5355b0:8", "const:4:8"]]
+ 005355b0 ["CALL", null, ["callee:00c59180:8"]]
- 005352a0 ["COPY", "register:0:8", ["register:4040:8"]]
- 005352a0 ["INT_ADD", "register:40f0:8", ["const:5352a0:8", "const:4:8"]]
- 005352a0 ["CALLIND", null, ["register:0:8"]]
+ 005355c0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005355c0 ["INT_ADD", "register:40f0:8", ["const:5355c0:8", "const:4:8"]]
+ 005355c0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-61d83f3db414fe773a8c4286a816a597"></a>

### [`005352c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/005352c8.md) → [`005355e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00535/005355e8.md) FUN_005355e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c59180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59180.md) [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005352dc ["INT_ADD", "register:40f0:8", ["const:5352dc:8", "const:4:8"]]
- 005352dc ["CALL", null, ["callee:00c59180:8"]]
+ 005355fc ["INT_ADD", "register:40f0:8", ["const:5355fc:8", "const:4:8"]]
+ 005355fc ["CALL", null, ["callee:00c59180:8"]]
- 005352ec ["COPY", "register:0:8", ["register:4040:8"]]
- 005352ec ["INT_ADD", "register:40f0:8", ["const:5352ec:8", "const:4:8"]]
- 005352ec ["CALLIND", null, ["register:0:8"]]
+ 0053560c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0053560c ["INT_ADD", "register:40f0:8", ["const:53560c:8", "const:4:8"]]
+ 0053560c ["CALLIND", null, ["register:0:8"]]
- 005352f8 ["INT_ADD", "register:40f0:8", ["const:5352f8:8", "const:4:8"]]
- 005352f8 ["CALL", null, ["callee:00c59190:8"]]
+ 00535618 ["INT_ADD", "register:40f0:8", ["const:535618:8", "const:4:8"]]
+ 00535618 ["CALL", null, ["callee:00c59190:8"]]
~~~


<a id="compare-a65cdab1ff0a6338dd3a2def7de6fee7"></a>

### [`00535320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/00535320.md) → [`00535640`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00535/00535640.md) FUN_00535640

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c59180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59180.md) [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00535344 ["INT_ADD", "register:40f0:8", ["const:535344:8", "const:4:8"]]
- 00535344 ["CALL", null, ["callee:00c59180:8"]]
+ 00535664 ["INT_ADD", "register:40f0:8", ["const:535664:8", "const:4:8"]]
+ 00535664 ["CALL", null, ["callee:00c59180:8"]]
- 00535360 ["COPY", "register:0:8", ["register:4040:8"]]
- 00535360 ["INT_ADD", "register:40f0:8", ["const:535360:8", "const:4:8"]]
- 00535360 ["CALLIND", null, ["register:0:8"]]
+ 00535680 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00535680 ["INT_ADD", "register:40f0:8", ["const:535680:8", "const:4:8"]]
+ 00535680 ["CALLIND", null, ["register:0:8"]]
- 0053536c ["INT_ADD", "register:40f0:8", ["const:53536c:8", "const:4:8"]]
- 0053536c ["CALL", null, ["callee:00c59190:8"]]
+ 0053568c ["INT_ADD", "register:40f0:8", ["const:53568c:8", "const:4:8"]]
+ 0053568c ["CALL", null, ["callee:00c59190:8"]]
~~~


<a id="compare-43cdaaefb63b415aeea97d10c661cef5"></a>

### [`005363e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00536/005363e4.md) → [`00536704`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00536/00536704.md) FUN_00536704

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053640c ["COPY", "register:0:8", ["register:4048:8"]]
- 0053640c ["INT_ADD", "register:40f0:8", ["const:53640c:8", "const:4:8"]]
- 0053640c ["CALLIND", null, ["register:0:8"]]
+ 0053672c ["COPY", "register:0:8", ["register:4048:8"]]
+ 0053672c ["INT_ADD", "register:40f0:8", ["const:53672c:8", "const:4:8"]]
+ 0053672c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-325ac162b85f83d3e5a04b354a58f80c"></a>

### [`0053691c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00536/0053691c.md) → [`00536c3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00536/00536c3c.md) FUN_00536c3c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`004ebcac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004eb/004ebcac.md) · 呼出先 4件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)
- 新版 呼出元 1件 [`004ebfcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004eb/004ebfcc.md) · 呼出先 4件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00536940 ["INT_ADD", "register:40f0:8", ["const:536940:8", "const:4:8"]]
- 00536940 ["CALL", null, ["callee:00c59080:8"]]
+ 00536c60 ["INT_ADD", "register:40f0:8", ["const:536c60:8", "const:4:8"]]
+ 00536c60 ["CALL", null, ["callee:00c59080:8"]]
- 00536988 ["INT_ADD", "register:40f0:8", ["const:536988:8", "const:4:8"]]
- 00536988 ["CALL", null, ["callee:00c58f30:8"]]
+ 00536ca8 ["INT_ADD", "register:40f0:8", ["const:536ca8:8", "const:4:8"]]
+ 00536ca8 ["CALL", null, ["callee:00c58f30:8"]]
- 005369a8 ["INT_ADD", "register:40f0:8", ["const:5369a8:8", "const:4:8"]]
- 005369a8 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00536cc8 ["INT_ADD", "register:40f0:8", ["const:536cc8:8", "const:4:8"]]
+ 00536cc8 ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-473d3dbbebfdf726fd0c9cfde6b6d01d"></a>

### [`00537a00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00537/00537a00.md) → [`00537d20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00537/00537d20.md) FUN_00537d20

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c593c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c593c0.md) [`00c593d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c593d0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a390.md) [`00c5a3a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a3a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00537a18 ["INT_ADD", "register:40f0:8", ["const:537a18:8", "const:4:8"]]
- 00537a18 ["CALL", null, ["callee:00c5a390:8"]]
+ 00537d38 ["INT_ADD", "register:40f0:8", ["const:537d38:8", "const:4:8"]]
+ 00537d38 ["CALL", null, ["callee:00c5a390:8"]]
~~~


<a id="compare-1205ccc44bf0eebdea754c20872f1d13"></a>

### [`00538c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00538/00538c40.md) → [`00538f60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00538/00538f60.md) FUN_00538f60

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00538acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00538/00538acc.md) [`00538fdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00538/00538fdc.md) · 呼出先 6件 [`0045a714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md) [`00c583c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583c0.md)
- 新版 呼出元 2件 [`00538dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00538/00538dec.md) [`005392fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00539/005392fc.md) · 呼出先 6件 [`0045aa34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045aa34.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59180.md) [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md) [`00c59390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59390.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00538c6c ["INT_ADD", "register:40f0:8", ["const:538c6c:8", "const:4:8"]]
- 00538c6c ["CALL", null, ["callee:00c59180:8"]]
+ 00538f8c ["INT_ADD", "register:40f0:8", ["const:538f8c:8", "const:4:8"]]
+ 00538f8c ["CALL", null, ["callee:00c59180:8"]]
- 00538c84 ["INT_ADD", "register:40f0:8", ["const:538c84:8", "const:4:8"]]
- 00538c84 ["CALL", null, ["callee:00c59390:8"]]
+ 00538fa4 ["INT_ADD", "register:40f0:8", ["const:538fa4:8", "const:4:8"]]
+ 00538fa4 ["CALL", null, ["callee:00c59390:8"]]
- 00538ce8 ["INT_ADD", "register:40f0:8", ["const:538ce8:8", "const:4:8"]]
- 00538ce8 ["CALL", null, ["callee:00c59420:8"]]
+ 00539008 ["INT_ADD", "register:40f0:8", ["const:539008:8", "const:4:8"]]
+ 00539008 ["CALL", null, ["callee:00c59420:8"]]
~~~


<a id="compare-f7085ec0debca76c5239f8c85337c34d"></a>

### [`00538d58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00538/00538d58.md) → [`00539078`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00539/00539078.md) FUN_00539078

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005387ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00538/005387ec.md) · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58200.md) [`00c58210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58210.md) [`00c58220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58220.md)
- 新版 呼出元 1件 [`00538b0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00538/00538b0c.md) · 呼出先 5件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c591d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591d0.md) [`00c591e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591e0.md) [`00c591f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00538d80 ["INT_ADD", "register:40f0:8", ["const:538d80:8", "const:4:8"]]
- 00538d80 ["CALL", null, ["callee:00c591d0:8"]]
+ 005390a0 ["INT_ADD", "register:40f0:8", ["const:5390a0:8", "const:4:8"]]
+ 005390a0 ["CALL", null, ["callee:00c591d0:8"]]
- 00538d90 ["INT_ADD", "register:40f0:8", ["const:538d90:8", "const:4:8"]]
- 00538d90 ["CALL", null, ["callee:00c591e0:8"]]
+ 005390b0 ["INT_ADD", "register:40f0:8", ["const:5390b0:8", "const:4:8"]]
+ 005390b0 ["CALL", null, ["callee:00c591e0:8"]]
- 00538dac ["COPY", "register:0:8", ["register:4040:8"]]
- 00538dac ["INT_ADD", "register:40f0:8", ["const:538dac:8", "const:4:8"]]
- 00538dac ["CALLIND", null, ["register:0:8"]]
+ 005390cc ["COPY", "register:0:8", ["register:4040:8"]]
+ 005390cc ["INT_ADD", "register:40f0:8", ["const:5390cc:8", "const:4:8"]]
+ 005390cc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-04070cdc5f53878c0f75849fc3df49ed"></a>

### [`00538e24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00538/00538e24.md) → [`00539144`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00539/00539144.md) FUN_00539144

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58220.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c591f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00538e4c ["INT_ADD", "register:40f0:8", ["const:538e4c:8", "const:4:8"]]
- 00538e4c ["CALL", null, ["callee:00c591f0:8"]]
+ 0053916c ["INT_ADD", "register:40f0:8", ["const:53916c:8", "const:4:8"]]
+ 0053916c ["CALL", null, ["callee:00c591f0:8"]]
- 00538e54 ["INT_ADD", "register:40f0:8", ["const:538e54:8", "const:4:8"]]
- 00538e54 ["CALL", null, ["callee:00c58f50:8"]]
+ 00539174 ["INT_ADD", "register:40f0:8", ["const:539174:8", "const:4:8"]]
+ 00539174 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-320e866b9b0c481fa8e858ab131c31df"></a>

### [`005390ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00539/005390ec.md) → [`0053940c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00539/0053940c.md) FUN_0053940c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00537bd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00537/00537bd8.md) · 呼出先 8件 [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md) [`00c583c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583c0.md)
- 新版 呼出元 1件 [`00537ef8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00537/00537ef8.md) · 呼出先 8件 [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59180.md) [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md) [`00c59390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59390.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00539128 ["INT_ADD", "register:40f0:8", ["const:539128:8", "const:4:8"]]
- 00539128 ["CALL", null, ["callee:00c59180:8"]]
+ 00539448 ["INT_ADD", "register:40f0:8", ["const:539448:8", "const:4:8"]]
+ 00539448 ["CALL", null, ["callee:00c59180:8"]]
- 00539134 ["INT_ADD", "register:40f0:8", ["const:539134:8", "const:4:8"]]
- 00539134 ["CALL", null, ["callee:00c59540:8"]]
+ 00539454 ["INT_ADD", "register:40f0:8", ["const:539454:8", "const:4:8"]]
+ 00539454 ["CALL", null, ["callee:00c59540:8"]]
- 00539148 ["INT_ADD", "register:40f0:8", ["const:539148:8", "const:4:8"]]
- 00539148 ["CALL", null, ["callee:00c59390:8"]]
+ 00539468 ["INT_ADD", "register:40f0:8", ["const:539468:8", "const:4:8"]]
+ 00539468 ["CALL", null, ["callee:00c59390:8"]]
~~~


<a id="compare-454bcfaa7cdaf4b4a297cd596dab1f0b"></a>

### [`00539a54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00539/00539a54.md) → [`00539d74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00539/00539d74.md) FUN_00539d74

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c598a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c598a0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5a870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a870.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00539a68 ["INT_ADD", "register:40f0:8", ["const:539a68:8", "const:4:8"]]
- 00539a68 ["CALL", null, ["callee:00c5a870:8"]]
+ 00539d88 ["INT_ADD", "register:40f0:8", ["const:539d88:8", "const:4:8"]]
+ 00539d88 ["CALL", null, ["callee:00c5a870:8"]]
~~~


<a id="compare-69b013070c19fad6f7e0285cc24074b9"></a>

### [`00539ea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00539/00539ea8.md) → [`0053a1c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053a/0053a1c8.md) FUN_0053a1c8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00539eec ["COPY", "register:0:8", ["register:4040:8"]]
- 00539eec ["INT_ADD", "register:40f0:8", ["const:539eec:8", "const:4:8"]]
- 00539eec ["CALLIND", null, ["register:0:8"]]
+ 0053a20c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0053a20c ["INT_ADD", "register:40f0:8", ["const:53a20c:8", "const:4:8"]]
+ 0053a20c ["CALLIND", null, ["register:0:8"]]
- 00539f1c ["COPY", "register:0:8", ["register:4040:8"]]
- 00539f1c ["INT_ADD", "register:40f0:8", ["const:539f1c:8", "const:4:8"]]
- 00539f1c ["CALLIND", null, ["register:0:8"]]
+ 0053a23c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0053a23c ["INT_ADD", "register:40f0:8", ["const:53a23c:8", "const:4:8"]]
+ 0053a23c ["CALLIND", null, ["register:0:8"]]
- 00539f50 ["INT_ADD", "register:40f0:8", ["const:539f50:8", "const:4:8"]]
- 00539f50 ["CALL", null, ["callee:0045a0d4:8"]]
+ 0053a270 ["INT_ADD", "register:40f0:8", ["const:53a270:8", "const:4:8"]]
+ 0053a270 ["CALL", null, ["callee:0045a0d4:8"]]
~~~


<a id="compare-223dfc1668264c69314cf35dcb06dd36"></a>

### [`00539f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00539/00539f5c.md) → [`0053a27c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053a/0053a27c.md) FUN_0053a27c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`004fbf3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fb/004fbf3c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`004fc25c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004fc/004fc25c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00539ff8 ["INT_ADD", "register:40f0:8", ["const:539ff8:8", "const:4:8"]]
- 00539ff8 ["CALL", null, ["callee:00c58f50:8"]]
+ 0053a318 ["INT_ADD", "register:40f0:8", ["const:53a318:8", "const:4:8"]]
+ 0053a318 ["CALL", null, ["callee:00c58f50:8"]]
- 0053a044 ["INT_ADD", "register:40f0:8", ["const:53a044:8", "const:4:8"]]
- 0053a044 ["CALL", null, ["callee:00c58f50:8"]]
+ 0053a364 ["INT_ADD", "register:40f0:8", ["const:53a364:8", "const:4:8"]]
+ 0053a364 ["CALL", null, ["callee:00c58f50:8"]]
- 0053a090 ["INT_ADD", "register:40f0:8", ["const:53a090:8", "const:4:8"]]
- 0053a090 ["CALL", null, ["callee:00c58f50:8"]]
+ 0053a3b0 ["INT_ADD", "register:40f0:8", ["const:53a3b0:8", "const:4:8"]]
+ 0053a3b0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-145a9642d6d2fa740ee6a7edf2ca5412"></a>

### [`0053a0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053a/0053a0f4.md) → [`0053a414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053a/0053a414.md) FUN_0053a414

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`004fbf3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fb/004fbf3c.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0053a5b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053a/0053a5b4.md) [`0053a73c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053a/0053a73c.md) [`0053a8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053a/0053a8c8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`004fc25c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004fc/004fc25c.md) · 呼出先 8件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0053a8d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053a/0053a8d4.md) [`0053aa5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053a/0053aa5c.md) [`0053abe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053a/0053abe8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053a18c ["INT_ADD", "register:40f0:8", ["const:53a18c:8", "const:4:8"]]
- 0053a18c ["CALL", null, ["callee:00c58fe0:8"]]
+ 0053a4ac ["INT_ADD", "register:40f0:8", ["const:53a4ac:8", "const:4:8"]]
+ 0053a4ac ["CALL", null, ["callee:00c58fe0:8"]]
- 0053a1d0 ["INT_ADD", "register:40f0:8", ["const:53a1d0:8", "const:4:8"]]
- 0053a1d0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0053a4f0 ["INT_ADD", "register:40f0:8", ["const:53a4f0:8", "const:4:8"]]
+ 0053a4f0 ["CALL", null, ["callee:00c58f30:8"]]
- 0053a1e0 ["INT_ADD", "register:40f0:8", ["const:53a1e0:8", "const:4:8"]]
- 0053a1e0 ["CALL", null, ["callee:0053a8d4:8"]]
+ 0053a500 ["INT_ADD", "register:40f0:8", ["const:53a500:8", "const:4:8"]]
+ 0053a500 ["CALL", null, ["callee:0053a8d4:8"]]
~~~


<a id="compare-c68dc069ecba5efaf2fa4c25071f3ca4"></a>

### [`0053a5b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053a/0053a5b4.md) → [`0053a8d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053a/0053a8d4.md) FUN_0053a8d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0053a0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053a/0053a0f4.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`0053a414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053a/0053a414.md) · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053a61c ["INT_ADD", "register:40f0:8", ["const:53a61c:8", "const:4:8"]]
- 0053a61c ["CALL", null, ["callee:00c58fe0:8"]]
+ 0053a93c ["INT_ADD", "register:40f0:8", ["const:53a93c:8", "const:4:8"]]
+ 0053a93c ["CALL", null, ["callee:00c58fe0:8"]]
- 0053a654 ["INT_ADD", "register:40f0:8", ["const:53a654:8", "const:4:8"]]
- 0053a654 ["CALL", null, ["callee:00c58f30:8"]]
+ 0053a974 ["INT_ADD", "register:40f0:8", ["const:53a974:8", "const:4:8"]]
+ 0053a974 ["CALL", null, ["callee:00c58f30:8"]]
- 0053a704 ["INT_ADD", "register:40f0:8", ["const:53a704:8", "const:4:8"]]
- 0053a704 ["CALL", null, ["callee:00c58f50:8"]]
+ 0053aa24 ["INT_ADD", "register:40f0:8", ["const:53aa24:8", "const:4:8"]]
+ 0053aa24 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-cb8f3032c23276514552cd7b09d0a41e"></a>

### [`0053a73c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053a/0053a73c.md) → [`0053aa5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053a/0053aa5c.md) FUN_0053aa5c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0053a0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053a/0053a0f4.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`0053a414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053a/0053a414.md) · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053a7ac ["INT_ADD", "register:40f0:8", ["const:53a7ac:8", "const:4:8"]]
- 0053a7ac ["CALL", null, ["callee:00c58fe0:8"]]
+ 0053aacc ["INT_ADD", "register:40f0:8", ["const:53aacc:8", "const:4:8"]]
+ 0053aacc ["CALL", null, ["callee:00c58fe0:8"]]
- 0053a7e4 ["INT_ADD", "register:40f0:8", ["const:53a7e4:8", "const:4:8"]]
- 0053a7e4 ["CALL", null, ["callee:00c58f30:8"]]
+ 0053ab04 ["INT_ADD", "register:40f0:8", ["const:53ab04:8", "const:4:8"]]
+ 0053ab04 ["CALL", null, ["callee:00c58f30:8"]]
- 0053a894 ["INT_ADD", "register:40f0:8", ["const:53a894:8", "const:4:8"]]
- 0053a894 ["CALL", null, ["callee:00c58f50:8"]]
+ 0053abb4 ["INT_ADD", "register:40f0:8", ["const:53abb4:8", "const:4:8"]]
+ 0053abb4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-ebefdf0e86225583d982b5e7b852fa33"></a>

### [`0053a8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053a/0053a8c8.md) → [`0053abe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053a/0053abe8.md) FUN_0053abe8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0053a0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053a/0053a0f4.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`0053a414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053a/0053a414.md) · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053a938 ["INT_ADD", "register:40f0:8", ["const:53a938:8", "const:4:8"]]
- 0053a938 ["CALL", null, ["callee:00c58fe0:8"]]
+ 0053ac58 ["INT_ADD", "register:40f0:8", ["const:53ac58:8", "const:4:8"]]
+ 0053ac58 ["CALL", null, ["callee:00c58fe0:8"]]
- 0053a970 ["INT_ADD", "register:40f0:8", ["const:53a970:8", "const:4:8"]]
- 0053a970 ["CALL", null, ["callee:00c58f30:8"]]
+ 0053ac90 ["INT_ADD", "register:40f0:8", ["const:53ac90:8", "const:4:8"]]
+ 0053ac90 ["CALL", null, ["callee:00c58f30:8"]]
- 0053aa20 ["INT_ADD", "register:40f0:8", ["const:53aa20:8", "const:4:8"]]
- 0053aa20 ["CALL", null, ["callee:00c58f50:8"]]
+ 0053ad40 ["INT_ADD", "register:40f0:8", ["const:53ad40:8", "const:4:8"]]
+ 0053ad40 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-349d182dd8a637e62e5d26191d6828ed"></a>

### [`0053aae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053a/0053aae4.md) → [`0053ae04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053a/0053ae04.md) FUN_0053ae04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 6件 [`00502838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00502/00502838.md) [`00515704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00515/00515704.md) [`0051e3d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0051e/0051e3d8.md) [`0052d550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052d/0052d550.md) [`0052e374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052e/0052e374.md) · 呼出先 5件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0053abe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053a/0053abe4.md) [`0053ae64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053a/0053ae64.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 6件 [`00502b58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00502/00502b58.md) [`00515a24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00515/00515a24.md) [`0051e6f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0051e/0051e6f8.md) [`0052d870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052d/0052d870.md) [`0052e694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052e/0052e694.md) · 呼出先 5件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0053af04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053a/0053af04.md) [`0053b184`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053b/0053b184.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053ab1c ["INT_ADD", "register:40f0:8", ["const:53ab1c:8", "const:4:8"]]
- 0053ab1c ["CALL", null, ["callee:00c58f30:8"]]
+ 0053ae3c ["INT_ADD", "register:40f0:8", ["const:53ae3c:8", "const:4:8"]]
+ 0053ae3c ["CALL", null, ["callee:00c58f30:8"]]
- 0053ab34 ["INT_ADD", "register:40f0:8", ["const:53ab34:8", "const:4:8"]]
- 0053ab34 ["CALL", null, ["callee:0053b184:8"]]
+ 0053ae54 ["INT_ADD", "register:40f0:8", ["const:53ae54:8", "const:4:8"]]
+ 0053ae54 ["CALL", null, ["callee:0053b184:8"]]
- 0053ab50 ["INT_ADD", "register:40f0:8", ["const:53ab50:8", "const:4:8"]]
- 0053ab50 ["CALL", null, ["callee:0053af04:8"]]
+ 0053ae70 ["INT_ADD", "register:40f0:8", ["const:53ae70:8", "const:4:8"]]
+ 0053ae70 ["CALL", null, ["callee:0053af04:8"]]
~~~


<a id="compare-1e8cddc8c238fbaa68be345b1adea162"></a>

### [`0053adf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053a/0053adf8.md) → [`0053b118`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053b/0053b118.md) FUN_0053b118

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053ae24 ["INT_ADD", "register:40f0:8", ["const:53ae24:8", "const:4:8"]]
- 0053ae24 ["CALL", null, ["callee:00c58f50:8"]]
+ 0053b144 ["INT_ADD", "register:40f0:8", ["const:53b144:8", "const:4:8"]]
+ 0053b144 ["CALL", null, ["callee:00c58f50:8"]]
- 0053ae34 ["INT_ADD", "register:40f0:8", ["const:53ae34:8", "const:4:8"]]
- 0053ae34 ["CALL", null, ["callee:00c58f50:8"]]
+ 0053b154 ["INT_ADD", "register:40f0:8", ["const:53b154:8", "const:4:8"]]
+ 0053b154 ["CALL", null, ["callee:00c58f50:8"]]
- 0053ae44 ["INT_ADD", "register:40f0:8", ["const:53ae44:8", "const:4:8"]]
- 0053ae44 ["CALL", null, ["callee:00c58f50:8"]]
+ 0053b164 ["INT_ADD", "register:40f0:8", ["const:53b164:8", "const:4:8"]]
+ 0053b164 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-7c47c734370e71f4829b6e4cfa4d4cef"></a>

### [`0053afd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053a/0053afd0.md) → [`0053b2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053b/0053b2f0.md) FUN_0053b2f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 43件 [`004ffaec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ff/004ffaec.md) [`004ffe60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ff/004ffe60.md) [`00500f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00500/00500f4c.md) [`00501838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00501/00501838.md) [`0050263c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00502/0050263c.md) · 呼出先 2件 [`0053afd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053a/0053afd0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 43件 [`004ffe0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ff/004ffe0c.md) [`00500180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00500/00500180.md) [`0050126c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00501/0050126c.md) [`00501b58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00501/00501b58.md) [`0050295c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00502/0050295c.md) · 呼出先 2件 [`0053b2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053b/0053b2f0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053afec ["INT_ADD", "register:40f0:8", ["const:53afec:8", "const:4:8"]]
- 0053afec ["CALL", null, ["local:b0:8"]]
+ 0053b30c ["INT_ADD", "register:40f0:8", ["const:53b30c:8", "const:4:8"]]
+ 0053b30c ["CALL", null, ["local:b0:8"]]
- 0053aff8 ["INT_ADD", "register:40f0:8", ["const:53aff8:8", "const:4:8"]]
- 0053aff8 ["CALL", null, ["local:b0:8"]]
+ 0053b318 ["INT_ADD", "register:40f0:8", ["const:53b318:8", "const:4:8"]]
+ 0053b318 ["CALL", null, ["local:b0:8"]]
- 0053b008 ["INT_ADD", "register:40f0:8", ["const:53b008:8", "const:4:8"]]
- 0053b008 ["CALL", null, ["callee:00c58f50:8"]]
+ 0053b328 ["INT_ADD", "register:40f0:8", ["const:53b328:8", "const:4:8"]]
+ 0053b328 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-1773e52c8935ebd8af7e2dc3686fbc30"></a>

### [`0053b3f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053b/0053b3f8.md) → [`0053b718`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053b/0053b718.md) FUN_0053b718

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053b420 ["COPY", "register:0:8", ["register:4040:8"]]
- 0053b420 ["INT_ADD", "register:40f0:8", ["const:53b420:8", "const:4:8"]]
- 0053b420 ["CALLIND", null, ["register:0:8"]]
+ 0053b740 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0053b740 ["INT_ADD", "register:40f0:8", ["const:53b740:8", "const:4:8"]]
+ 0053b740 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-33dc8b2cedec9f7962075bdd3a23c8dc"></a>

### [`0053b464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053b/0053b464.md) → [`0053b784`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053b/0053b784.md) FUN_0053b784

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 17件 [`00509c54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00509/00509c54.md) [`0050b39c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0050b/0050b39c.md) [`0050cef4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0050c/0050cef4.md) [`00510d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00510/00510d98.md) [`0051211c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00512/0051211c.md) · 呼出先 4件 [`0053b464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053b/0053b464.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 17件 [`00509f74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00509/00509f74.md) [`0050b6bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0050b/0050b6bc.md) [`0050d214`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0050d/0050d214.md) [`005110b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00511/005110b8.md) [`0051243c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00512/0051243c.md) · 呼出先 4件 [`0053b784`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053b/0053b784.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053b480 ["INT_ADD", "register:40f0:8", ["const:53b480:8", "const:4:8"]]
- 0053b480 ["CALL", null, ["local:b0:8"]]
+ 0053b7a0 ["INT_ADD", "register:40f0:8", ["const:53b7a0:8", "const:4:8"]]
+ 0053b7a0 ["CALL", null, ["local:b0:8"]]
- 0053b48c ["INT_ADD", "register:40f0:8", ["const:53b48c:8", "const:4:8"]]
- 0053b48c ["CALL", null, ["local:b0:8"]]
+ 0053b7ac ["INT_ADD", "register:40f0:8", ["const:53b7ac:8", "const:4:8"]]
+ 0053b7ac ["CALL", null, ["local:b0:8"]]
- 0053b49c ["INT_ADD", "register:40f0:8", ["const:53b49c:8", "const:4:8"]]
- 0053b49c ["CALL", null, ["callee:00c58f50:8"]]
+ 0053b7bc ["INT_ADD", "register:40f0:8", ["const:53b7bc:8", "const:4:8"]]
+ 0053b7bc ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-de52707e22d1466792ed98e55f56ad35"></a>

### [`0053b7bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053b/0053b7bc.md) → [`0053badc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053b/0053badc.md) FUN_0053badc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 7件 [`0050e084`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0050e/0050e084.md) [`0051eb00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0051e/0051eb00.md) [`00520ef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00520/00520ef0.md) [`0075d7b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075d/0075d7b4.md) [`00bb7cec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb7cec.md) · 呼出先 5件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0053ba50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053b/0053ba50.md) [`0053bbb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053b/0053bbb0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58500.md)
- 新版 呼出元 7件 [`0050e3a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0050e/0050e3a4.md) [`0051ee20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0051e/0051ee20.md) [`00521210`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00521/00521210.md) [`0075db64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075d/0075db64.md) [`00bb8ce0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb8/00bb8ce0.md) · 呼出先 5件 [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0053bd70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053b/0053bd70.md) [`0053bed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053b/0053bed0.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c594d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c594d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053b8a4 ["INT_ADD", "register:40f0:8", ["const:53b8a4:8", "const:4:8"]]
- 0053b8a4 ["CALL", null, ["callee:00c594d0:8"]]
+ 0053bbc4 ["INT_ADD", "register:40f0:8", ["const:53bbc4:8", "const:4:8"]]
+ 0053bbc4 ["CALL", null, ["callee:00c594d0:8"]]
- 0053b8b0 ["INT_ADD", "register:40f0:8", ["const:53b8b0:8", "const:4:8"]]
- 0053b8b0 ["CALL", null, ["callee:00c594d0:8"]]
+ 0053bbd0 ["INT_ADD", "register:40f0:8", ["const:53bbd0:8", "const:4:8"]]
+ 0053bbd0 ["CALL", null, ["callee:00c594d0:8"]]
- 0053b8bc ["INT_ADD", "register:40f0:8", ["const:53b8bc:8", "const:4:8"]]
- 0053b8bc ["CALL", null, ["callee:0053bd70:8"]]
+ 0053bbdc ["INT_ADD", "register:40f0:8", ["const:53bbdc:8", "const:4:8"]]
+ 0053bbdc ["CALL", null, ["callee:0053bd70:8"]]
~~~


<a id="compare-0dd7e6c394b0be963322fe2f48468740"></a>

### [`0053ba50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053b/0053ba50.md) → [`0053bd70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053b/0053bd70.md) FUN_0053bd70

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0053b7bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053b/0053b7bc.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`0053badc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053b/0053badc.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053bacc ["INT_ADD", "register:40f0:8", ["const:53bacc:8", "const:4:8"]]
- 0053bacc ["CALL", null, ["callee:00c590f0:8"]]
+ 0053bdec ["INT_ADD", "register:40f0:8", ["const:53bdec:8", "const:4:8"]]
+ 0053bdec ["CALL", null, ["callee:00c590f0:8"]]
- 0053bb30 ["INT_ADD", "register:40f0:8", ["const:53bb30:8", "const:4:8"]]
- 0053bb30 ["CALL", null, ["callee:0043bf04:8"]]
+ 0053be50 ["INT_ADD", "register:40f0:8", ["const:53be50:8", "const:4:8"]]
+ 0053be50 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-22fd2cc77732bc8135299f132d371aa3"></a>

### [`0053bb58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053b/0053bb58.md) → [`0053be78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053b/0053be78.md) FUN_0053be78

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053bb70 ["INT_ADD", "register:40f0:8", ["const:53bb70:8", "const:4:8"]]
- 0053bb70 ["CALL", null, ["callee:0046d7f0:8"]]
+ 0053be90 ["INT_ADD", "register:40f0:8", ["const:53be90:8", "const:4:8"]]
+ 0053be90 ["CALL", null, ["callee:0046d7f0:8"]]
~~~


<a id="compare-b39416b53770a47dcca0ffb1dad11431"></a>

### [`0053bbb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053b/0053bbb0.md) → [`0053bed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053b/0053bed0.md) FUN_0053bed0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`00504dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00504/00504dd0.md) [`00519a3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00519/00519a3c.md) [`00519b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00519/00519b24.md) [`00520ef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00520/00520ef0.md) [`0053b7bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053b/0053b7bc.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0053bcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053b/0053bcf0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 5件 [`005050f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00505/005050f0.md) [`00519d5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00519/00519d5c.md) [`00519e44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00519/00519e44.md) [`00521210`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00521/00521210.md) [`0053badc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053b/0053badc.md) · 呼出先 4件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0053c010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053c/0053c010.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053bbe0 ["INT_ADD", "register:40f0:8", ["const:53bbe0:8", "const:4:8"]]
- 0053bbe0 ["CALL", null, ["callee:0053c010:8"]]
+ 0053bf00 ["INT_ADD", "register:40f0:8", ["const:53bf00:8", "const:4:8"]]
+ 0053bf00 ["CALL", null, ["callee:0053c010:8"]]
- 0053bc48 ["INT_ADD", "register:40f0:8", ["const:53bc48:8", "const:4:8"]]
- 0053bc48 ["CALL", null, ["callee:00c590f0:8"]]
+ 0053bf68 ["INT_ADD", "register:40f0:8", ["const:53bf68:8", "const:4:8"]]
+ 0053bf68 ["CALL", null, ["callee:00c590f0:8"]]
- 0053bcac ["INT_ADD", "register:40f0:8", ["const:53bcac:8", "const:4:8"]]
- 0053bcac ["CALL", null, ["callee:0043bf04:8"]]
+ 0053bfcc ["INT_ADD", "register:40f0:8", ["const:53bfcc:8", "const:4:8"]]
+ 0053bfcc ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-1aacbeb4f329b54391c7699c7e9adff4"></a>

### [`0053bcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053b/0053bcf0.md) → [`0053c010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053c/0053c010.md) FUN_0053c010

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`0052dd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052d/0052dd40.md) [`0053bbb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053b/0053bbb0.md) [`0053cac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053c/0053cac8.md) [`007262cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00726/007262cc.md) [`00945008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00945/00945008.md) · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 5件 [`0052e060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052e/0052e060.md) [`0053bed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053b/0053bed0.md) [`0053cde8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053c/0053cde8.md) [`0072667c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00726/0072667c.md) [`00945fb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00945/00945fb4.md) · 呼出先 2件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053bd10 ["INT_ADD", "register:40f0:8", ["const:53bd10:8", "const:4:8"]]
- 0053bd10 ["CALL", null, ["callee:00c58f30:8"]]
+ 0053c030 ["INT_ADD", "register:40f0:8", ["const:53c030:8", "const:4:8"]]
+ 0053c030 ["CALL", null, ["callee:00c58f30:8"]]
- 0053bd44 ["INT_ADD", "register:40f0:8", ["const:53bd44:8", "const:4:8"]]
- 0053bd44 ["CALL", null, ["callee:0043be80:8"]]
+ 0053c064 ["INT_ADD", "register:40f0:8", ["const:53c064:8", "const:4:8"]]
+ 0053c064 ["CALL", null, ["callee:0043be80:8"]]
- 0053bd70 ["INT_ADD", "register:40f0:8", ["const:53bd70:8", "const:4:8"]]
- 0053bd70 ["CALL", null, ["callee:0043be80:8"]]
+ 0053c090 ["INT_ADD", "register:40f0:8", ["const:53c090:8", "const:4:8"]]
+ 0053c090 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-ebe146e7efc9d23d9b700234a4191624"></a>

### [`0053bdb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053b/0053bdb8.md) → [`0053c0d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053c/0053c0d8.md) FUN_0053c0d8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`0050ab24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0050a/0050ab24.md) [`0050e084`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0050e/0050e084.md) [`00512d48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00512/00512d48.md) [`0051eb00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0051e/0051eb00.md) [`00520ef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00520/00520ef0.md) · 呼出先 7件 [`0053afd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053a/0053afd0.md) [`0053c074`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053c/0053c074.md) [`0053c1b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053c/0053c1b8.md) [`0053c2e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053c/0053c2e8.md) [`00548ea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00548/00548ea8.md)
- 新版 呼出元 5件 [`0050ae44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0050a/0050ae44.md) [`0050e3a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0050e/0050e3a4.md) [`00513068`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00513/00513068.md) [`0051ee20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0051e/0051ee20.md) [`00521210`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00521/00521210.md) · 呼出先 7件 [`0053b2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053b/0053b2f0.md) [`0053c394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053c/0053c394.md) [`0053c4d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053c/0053c4d8.md) [`0053c608`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053c/0053c608.md) [`005491c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00549/005491c8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053beb0 ["INT_ADD", "register:40f0:8", ["const:53beb0:8", "const:4:8"]]
- 0053beb0 ["CALL", null, ["callee:0053c4d8:8"]]
+ 0053c1d0 ["INT_ADD", "register:40f0:8", ["const:53c1d0:8", "const:4:8"]]
+ 0053c1d0 ["CALL", null, ["callee:0053c4d8:8"]]
- 0053bec0 ["INT_ADD", "register:40f0:8", ["const:53bec0:8", "const:4:8"]]
- 0053bec0 ["CALL", null, ["callee:005491c8:8"]]
+ 0053c1e0 ["INT_ADD", "register:40f0:8", ["const:53c1e0:8", "const:4:8"]]
+ 0053c1e0 ["CALL", null, ["callee:005491c8:8"]]
- 0053becc ["INT_ADD", "register:40f0:8", ["const:53becc:8", "const:4:8"]]
- 0053becc ["CALL", null, ["callee:00c594d0:8"]]
+ 0053c1ec ["INT_ADD", "register:40f0:8", ["const:53c1ec:8", "const:4:8"]]
+ 0053c1ec ["CALL", null, ["callee:00c594d0:8"]]
~~~


<a id="compare-b446c7b72ee99cf18327c616809a05d9"></a>

### [`0053c074`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053c/0053c074.md) → [`0053c394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053c/0053c394.md) FUN_0053c394

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0053bdb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053b/0053bdb8.md) · 呼出先 1件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md)
- 新版 呼出元 1件 [`0053c0d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053c/0053c0d8.md) · 呼出先 1件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053c140 ["INT_ADD", "register:40f0:8", ["const:53c140:8", "const:4:8"]]
- 0053c140 ["CALL", null, ["callee:0043bf04:8"]]
+ 0053c460 ["INT_ADD", "register:40f0:8", ["const:53c460:8", "const:4:8"]]
+ 0053c460 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-7722203b050b48a14afc00f86b35bc7d"></a>

### [`0053c160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053c/0053c160.md) → [`0053c480`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053c/0053c480.md) FUN_0053c480

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`0053afd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053a/0053afd0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0053b2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053b/0053b2f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053c178 ["INT_ADD", "register:40f0:8", ["const:53c178:8", "const:4:8"]]
- 0053c178 ["CALL", null, ["callee:0053b2f0:8"]]
+ 0053c498 ["INT_ADD", "register:40f0:8", ["const:53c498:8", "const:4:8"]]
+ 0053c498 ["CALL", null, ["callee:0053b2f0:8"]]
~~~


<a id="compare-2b053fcd644e7c7819d2130a6440f292"></a>

### [`0053c1b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053c/0053c1b8.md) → [`0053c4d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053c/0053c4d8.md) FUN_0053c4d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`004e44bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e4/004e44bc.md) [`0053bdb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053b/0053bdb8.md) [`0053ecb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053e/0053ecb0.md) [`0054a238`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054a/0054a238.md) [`0055cea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055cea8.md) · 呼出先 5件 [`00535bac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/00535bac.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 5件 [`004e47dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004e4/004e47dc.md) [`0053c0d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053c/0053c0d8.md) [`0053efd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053e/0053efd0.md) [`0054a558`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054a/0054a558.md) [`0055d1c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d1c8.md) · 呼出先 5件 [`00535ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00535/00535ecc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053c1fc ["INT_ADD", "register:40f0:8", ["const:53c1fc:8", "const:4:8"]]
- 0053c1fc ["CALL", null, ["callee:00c58f50:8"]]
+ 0053c51c ["INT_ADD", "register:40f0:8", ["const:53c51c:8", "const:4:8"]]
+ 0053c51c ["CALL", null, ["callee:00c58f50:8"]]
- 0053c244 ["INT_ADD", "register:40f0:8", ["const:53c244:8", "const:4:8"]]
- 0053c244 ["CALL", null, ["callee:00c58f30:8"]]
+ 0053c564 ["INT_ADD", "register:40f0:8", ["const:53c564:8", "const:4:8"]]
+ 0053c564 ["CALL", null, ["callee:00c58f30:8"]]
- 0053c26c ["INT_ADD", "register:40f0:8", ["const:53c26c:8", "const:4:8"]]
- 0053c26c ["CALL", null, ["callee:00c590a0:8"]]
+ 0053c58c ["INT_ADD", "register:40f0:8", ["const:53c58c:8", "const:4:8"]]
+ 0053c58c ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-598885a3c416d686ed202e95bf8c714b"></a>

### [`0053c2e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053c/0053c2e8.md) → [`0053c608`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053c/0053c608.md) FUN_0053c608

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0053bdb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053b/0053bdb8.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0053ae64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053a/0053ae64.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0053c0d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053c/0053c0d8.md) · 呼出先 4件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0053b184`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053b/0053b184.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053c31c ["INT_ADD", "register:40f0:8", ["const:53c31c:8", "const:4:8"]]
- 0053c31c ["CALL", null, ["callee:00c58f30:8"]]
+ 0053c63c ["INT_ADD", "register:40f0:8", ["const:53c63c:8", "const:4:8"]]
+ 0053c63c ["CALL", null, ["callee:00c58f30:8"]]
- 0053c334 ["INT_ADD", "register:40f0:8", ["const:53c334:8", "const:4:8"]]
- 0053c334 ["CALL", null, ["callee:0053b184:8"]]
+ 0053c654 ["INT_ADD", "register:40f0:8", ["const:53c654:8", "const:4:8"]]
+ 0053c654 ["CALL", null, ["callee:0053b184:8"]]
- 0053c3e8 ["INT_ADD", "register:40f0:8", ["const:53c3e8:8", "const:4:8"]]
- 0053c3e8 ["CALL", null, ["callee:0043bf04:8"]]
+ 0053c708 ["INT_ADD", "register:40f0:8", ["const:53c708:8", "const:4:8"]]
+ 0053c708 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-c11ef3a38e0c15ff0c06da00a16d677d"></a>

### [`0053c44c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053c/0053c44c.md) → [`0053c76c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053c/0053c76c.md) FUN_0053c76c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00511264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00511/00511264.md) · 呼出先 5件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`005174c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00517/005174c8.md) [`0053c558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053c/0053c558.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00511584`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00511/00511584.md) · 呼出先 5件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`005177e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00517/005177e8.md) [`0053c878`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053c/0053c878.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053c484 ["INT_ADD", "register:40f0:8", ["const:53c484:8", "const:4:8"]]
- 0053c484 ["CALL", null, ["callee:0053c878:8"]]
+ 0053c7a4 ["INT_ADD", "register:40f0:8", ["const:53c7a4:8", "const:4:8"]]
+ 0053c7a4 ["CALL", null, ["callee:0053c878:8"]]
- 0053c4a4 ["INT_ADD", "register:40f0:8", ["const:53c4a4:8", "const:4:8"]]
- 0053c4a4 ["CALL", null, ["callee:00c58f30:8"]]
+ 0053c7c4 ["INT_ADD", "register:40f0:8", ["const:53c7c4:8", "const:4:8"]]
+ 0053c7c4 ["CALL", null, ["callee:00c58f30:8"]]
- 0053c4bc ["INT_ADD", "register:40f0:8", ["const:53c4bc:8", "const:4:8"]]
- 0053c4bc ["CALL", null, ["callee:005177e8:8"]]
+ 0053c7dc ["INT_ADD", "register:40f0:8", ["const:53c7dc:8", "const:4:8"]]
+ 0053c7dc ["CALL", null, ["callee:005177e8:8"]]
~~~


<a id="compare-89ff1b24188f4d17985d4497ed92a66b"></a>

### [`0053c8f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053c/0053c8f4.md) → [`0053cc14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053c/0053cc14.md) FUN_0053cc14

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053c920 ["INT_ADD", "register:40f0:8", ["const:53c920:8", "const:4:8"]]
- 0053c920 ["CALL", null, ["callee:00c58f50:8"]]
+ 0053cc40 ["INT_ADD", "register:40f0:8", ["const:53cc40:8", "const:4:8"]]
+ 0053cc40 ["CALL", null, ["callee:00c58f50:8"]]
- 0053c934 ["INT_ADD", "register:40f0:8", ["const:53c934:8", "const:4:8"]]
- 0053c934 ["CALL", null, ["callee:00c54d90:8"]]
+ 0053cc54 ["INT_ADD", "register:40f0:8", ["const:53cc54:8", "const:4:8"]]
+ 0053cc54 ["CALL", null, ["callee:00c54d90:8"]]
- 0053c948 ["COPY", "register:0:8", ["register:4040:8"]]
- 0053c948 ["INT_ADD", "register:40f0:8", ["const:53c948:8", "const:4:8"]]
- 0053c948 ["CALLIND", null, ["register:0:8"]]
+ 0053cc68 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0053cc68 ["INT_ADD", "register:40f0:8", ["const:53cc68:8", "const:4:8"]]
+ 0053cc68 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-324467b71819577b3e5598e31795e481"></a>

### [`0053cac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053c/0053cac8.md) → [`0053cde8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053c/0053cde8.md) FUN_0053cde8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`00515704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00515/00515704.md) [`0051e3d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0051e/0051e3d8.md) [`0052d550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052d/0052d550.md) [`0052e374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052e/0052e374.md) [`0053c980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053c/0053c980.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0053bcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053b/0053bcf0.md) [`0053cb9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053c/0053cb9c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 5件 [`00515a24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00515/00515a24.md) [`0051e6f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0051e/0051e6f8.md) [`0052d870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052d/0052d870.md) [`0052e694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052e/0052e694.md) [`0053cca0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053c/0053cca0.md) · 呼出先 4件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0053c010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053c/0053c010.md) [`0053cebc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053c/0053cebc.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053caf8 ["INT_ADD", "register:40f0:8", ["const:53caf8:8", "const:4:8"]]
- 0053caf8 ["CALL", null, ["callee:0053c010:8"]]
+ 0053ce18 ["INT_ADD", "register:40f0:8", ["const:53ce18:8", "const:4:8"]]
+ 0053ce18 ["CALL", null, ["callee:0053c010:8"]]
- 0053cb10 ["INT_ADD", "register:40f0:8", ["const:53cb10:8", "const:4:8"]]
- 0053cb10 ["CALL", null, ["callee:0053cebc:8"]]
+ 0053ce30 ["INT_ADD", "register:40f0:8", ["const:53ce30:8", "const:4:8"]]
+ 0053ce30 ["CALL", null, ["callee:0053cebc:8"]]
- 0053cb3c ["INT_ADD", "register:40f0:8", ["const:53cb3c:8", "const:4:8"]]
- 0053cb3c ["CALL", null, ["callee:0043bf04:8"]]
+ 0053ce5c ["INT_ADD", "register:40f0:8", ["const:53ce5c:8", "const:4:8"]]
+ 0053ce5c ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-f96fa7145995cca85e1e6c48d7e51277"></a>

### [`0053cb9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053c/0053cb9c.md) → [`0053cebc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053c/0053cebc.md) FUN_0053cebc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0053cac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053c/0053cac8.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`0053cde8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053c/0053cde8.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053cc10 ["INT_ADD", "register:40f0:8", ["const:53cc10:8", "const:4:8"]]
- 0053cc10 ["CALL", null, ["callee:00c590f0:8"]]
+ 0053cf30 ["INT_ADD", "register:40f0:8", ["const:53cf30:8", "const:4:8"]]
+ 0053cf30 ["CALL", null, ["callee:00c590f0:8"]]
- 0053cc64 ["INT_ADD", "register:40f0:8", ["const:53cc64:8", "const:4:8"]]
- 0053cc64 ["CALL", null, ["callee:00c590f0:8"]]
+ 0053cf84 ["INT_ADD", "register:40f0:8", ["const:53cf84:8", "const:4:8"]]
+ 0053cf84 ["CALL", null, ["callee:00c590f0:8"]]
- 0053cd18 ["INT_ADD", "register:40f0:8", ["const:53cd18:8", "const:4:8"]]
- 0053cd18 ["CALL", null, ["callee:00c590f0:8"]]
+ 0053d038 ["INT_ADD", "register:40f0:8", ["const:53d038:8", "const:4:8"]]
+ 0053d038 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-65856d66e4c36561088aa1a2b9ea9445"></a>

### [`0053d6f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053d/0053d6f4.md) → [`0053da14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053d/0053da14.md) FUN_0053da14

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053d710 ["INT_ADD", "register:40f0:8", ["const:53d710:8", "const:4:8"]]
- 0053d710 ["CALL", null, ["callee:00c54d90:8"]]
+ 0053da30 ["INT_ADD", "register:40f0:8", ["const:53da30:8", "const:4:8"]]
+ 0053da30 ["CALL", null, ["callee:00c54d90:8"]]
- 0053d730 ["COPY", "register:0:8", ["register:4040:8"]]
- 0053d730 ["INT_ADD", "register:40f0:8", ["const:53d730:8", "const:4:8"]]
- 0053d730 ["CALLIND", null, ["register:0:8"]]
+ 0053da50 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0053da50 ["INT_ADD", "register:40f0:8", ["const:53da50:8", "const:4:8"]]
+ 0053da50 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b6de62bff0daeb83278b3606df0fd09c"></a>

### [`0053d744`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053d/0053d744.md) → [`0053da64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053d/0053da64.md) FUN_0053da64

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053d754 ["INT_ADD", "register:40f0:8", ["const:53d754:8", "const:4:8"]]
- 0053d754 ["CALL", null, ["callee:00c58f40:8"]]
+ 0053da74 ["INT_ADD", "register:40f0:8", ["const:53da74:8", "const:4:8"]]
+ 0053da74 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-d6a0269ac6c0c613147ce4402a3604c1"></a>

### [`0053d7a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053d/0053d7a0.md) → [`0053dac0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053d/0053dac0.md) FUN_0053dac0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0051aa14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0051a/0051aa14.md) [`0053f950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053f950.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`0051ad34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0051a/0051ad34.md) [`0053fc70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053f/0053fc70.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053d804 ["INT_ADD", "register:40f0:8", ["const:53d804:8", "const:4:8"]]
- 0053d804 ["CALL", null, ["callee:00c58f50:8"]]
+ 0053db24 ["INT_ADD", "register:40f0:8", ["const:53db24:8", "const:4:8"]]
+ 0053db24 ["CALL", null, ["callee:00c58f50:8"]]
- 0053d814 ["INT_ADD", "register:40f0:8", ["const:53d814:8", "const:4:8"]]
- 0053d814 ["CALL", null, ["callee:00c58f50:8"]]
+ 0053db34 ["INT_ADD", "register:40f0:8", ["const:53db34:8", "const:4:8"]]
+ 0053db34 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-ab04c1a4519313e9e828e45a983411c9"></a>

### [`0053d9a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053d/0053d9a0.md) → [`0053dcc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053d/0053dcc0.md) FUN_0053dcc0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053d9e0 ["INT_ADD", "register:40f0:8", ["const:53d9e0:8", "const:4:8"]]
- 0053d9e0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0053dd00 ["INT_ADD", "register:40f0:8", ["const:53dd00:8", "const:4:8"]]
+ 0053dd00 ["CALL", null, ["callee:00c58f50:8"]]
- 0053d9f0 ["INT_ADD", "register:40f0:8", ["const:53d9f0:8", "const:4:8"]]
- 0053d9f0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0053dd10 ["INT_ADD", "register:40f0:8", ["const:53dd10:8", "const:4:8"]]
+ 0053dd10 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-5589b79c6fb2d2ac45e41571c839cb05"></a>

### [`0053da04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053d/0053da04.md) → [`0053dd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053d/0053dd24.md) FUN_0053dd24

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c58780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58780.md) [`00c587a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c587a0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c59750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59750.md) [`00c59770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59770.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053da24 ["INT_ADD", "register:40f0:8", ["const:53da24:8", "const:4:8"]]
- 0053da24 ["CALL", null, ["callee:00c59750:8"]]
+ 0053dd44 ["INT_ADD", "register:40f0:8", ["const:53dd44:8", "const:4:8"]]
+ 0053dd44 ["CALL", null, ["callee:00c59750:8"]]
- 0053da38 ["COPY", "register:0:8", ["register:4040:8"]]
- 0053da38 ["INT_ADD", "register:40f0:8", ["const:53da38:8", "const:4:8"]]
- 0053da38 ["CALLIND", null, ["register:0:8"]]
+ 0053dd58 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0053dd58 ["INT_ADD", "register:40f0:8", ["const:53dd58:8", "const:4:8"]]
+ 0053dd58 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a1052506100d22e71d2d6d06e7dca2ec"></a>

### [`0053db50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053d/0053db50.md) → [`0053de70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053d/0053de70.md) FUN_0053de70

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053db70 ["INT_ADD", "register:40f0:8", ["const:53db70:8", "const:4:8"]]
- 0053db70 ["CALL", null, ["callee:00c58f50:8"]]
+ 0053de90 ["INT_ADD", "register:40f0:8", ["const:53de90:8", "const:4:8"]]
+ 0053de90 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-d73947a5b8f637f17a6b90fe29f24be4"></a>

### [`0053ea4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053e/0053ea4c.md) → [`0053ed6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053e/0053ed6c.md) FUN_0053ed6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00520ef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00520/00520ef0.md) · 呼出先 6件 [`0053d838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053d/0053d838.md) [`0053d84c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053d/0053d84c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00521210`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00521/00521210.md) · 呼出先 6件 [`0053db58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053d/0053db58.md) [`0053db6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053d/0053db6c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053ead0 ["INT_ADD", "register:40f0:8", ["const:53ead0:8", "const:4:8"]]
- 0053ead0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0053edf0 ["INT_ADD", "register:40f0:8", ["const:53edf0:8", "const:4:8"]]
+ 0053edf0 ["CALL", null, ["callee:00c58f50:8"]]
- 0053eae0 ["INT_ADD", "register:40f0:8", ["const:53eae0:8", "const:4:8"]]
- 0053eae0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0053ee00 ["INT_ADD", "register:40f0:8", ["const:53ee00:8", "const:4:8"]]
+ 0053ee00 ["CALL", null, ["callee:00c58f50:8"]]
- 0053eb1c ["INT_ADD", "register:40f0:8", ["const:53eb1c:8", "const:4:8"]]
- 0053eb1c ["CALL", null, ["callee:00c594d0:8"]]
+ 0053ee3c ["INT_ADD", "register:40f0:8", ["const:53ee3c:8", "const:4:8"]]
+ 0053ee3c ["CALL", null, ["callee:00c594d0:8"]]
~~~


<a id="compare-dc97c33114c4866edd39b87a5b0a712e"></a>

### [`0053ecb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053e/0053ecb0.md) → [`0053efd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053e/0053efd0.md) FUN_0053efd0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0050b1c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0050b/0050b1c4.md) [`00520ef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00520/00520ef0.md) · 呼出先 6件 [`0053c1b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053c/0053c1b8.md) [`0053eeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053e/0053eeb0.md) [`0053f044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053f044.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`0050b4e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0050b/0050b4e4.md) [`00521210`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00521/00521210.md) · 呼出先 6件 [`0053c4d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053c/0053c4d8.md) [`0053f1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053f/0053f1d0.md) [`0053f364`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053f/0053f364.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053ed20 ["INT_ADD", "register:40f0:8", ["const:53ed20:8", "const:4:8"]]
- 0053ed20 ["CALL", null, ["callee:00c58f50:8"]]
+ 0053f040 ["INT_ADD", "register:40f0:8", ["const:53f040:8", "const:4:8"]]
+ 0053f040 ["CALL", null, ["callee:00c58f50:8"]]
- 0053ed74 ["INT_ADD", "register:40f0:8", ["const:53ed74:8", "const:4:8"]]
- 0053ed74 ["CALL", null, ["callee:0053c4d8:8"]]
+ 0053f094 ["INT_ADD", "register:40f0:8", ["const:53f094:8", "const:4:8"]]
+ 0053f094 ["CALL", null, ["callee:0053c4d8:8"]]
- 0053edb0 ["INT_ADD", "register:40f0:8", ["const:53edb0:8", "const:4:8"]]
- 0053edb0 ["CALL", null, ["callee:0053c4d8:8"]]
+ 0053f0d0 ["INT_ADD", "register:40f0:8", ["const:53f0d0:8", "const:4:8"]]
+ 0053f0d0 ["CALL", null, ["callee:0053c4d8:8"]]
~~~


<a id="compare-17208fd2dbaa0e208befa4a021131a13"></a>

### [`0053eff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053e/0053eff0.md) → [`0053f310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053f/0053f310.md) FUN_0053f310

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0053eeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053e/0053eeb0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0053f1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053f/0053f1d0.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053f030 ["INT_ADD", "register:40f0:8", ["const:53f030:8", "const:4:8"]]
- 0053f030 ["CALL", null, ["callee:00c58f50:8"]]
+ 0053f350 ["INT_ADD", "register:40f0:8", ["const:53f350:8", "const:4:8"]]
+ 0053f350 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-72595fabeca44e03a6b123fe997e1410"></a>

### [`0053f058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053f058.md) → [`0053f378`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053f/0053f378.md) FUN_0053f378

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`00520ef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00520/00520ef0.md) [`005b64a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b6/005b64a8.md) [`008a5130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a5130.md) [`008a6674`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6674.md) · 呼出先 8件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f9c.md) [`004796f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00479/004796f0.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 4件 [`00521210`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00521/00521210.md) [`005b6858`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b6858.md) [`008a60dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a6/008a60dc.md) [`008a7620`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a7/008a7620.md) · 呼出先 8件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`004412bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412bc.md) [`00479a10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00479/00479a10.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053f0ec ["INT_ADD", "register:40f0:8", ["const:53f0ec:8", "const:4:8"]]
- 0053f0ec ["CALL", null, ["callee:00c58f50:8"]]
+ 0053f40c ["INT_ADD", "register:40f0:8", ["const:53f40c:8", "const:4:8"]]
+ 0053f40c ["CALL", null, ["callee:00c58f50:8"]]
- 0053f120 ["INT_ADD", "register:40f0:8", ["const:53f120:8", "const:4:8"]]
- 0053f120 ["CALL", null, ["callee:00c594d0:8"]]
+ 0053f440 ["INT_ADD", "register:40f0:8", ["const:53f440:8", "const:4:8"]]
+ 0053f440 ["CALL", null, ["callee:00c594d0:8"]]
- 0053f194 ["INT_ADD", "register:40f0:8", ["const:53f194:8", "const:4:8"]]
- 0053f194 ["CALL", null, ["callee:0043be80:8"]]
+ 0053f4b4 ["INT_ADD", "register:40f0:8", ["const:53f4b4:8", "const:4:8"]]
+ 0053f4b4 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-d9d61cd43c322b30a4a6683a1875997e"></a>

### [`0053f370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053f370.md) → [`0053f690`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053f/0053f690.md) FUN_0053f690

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0052ce30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052c/0052ce30.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0053f584`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053f584.md) [`0053f850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053f850.md) [`0053f8ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053f8ec.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`0052d150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052d/0052d150.md) · 呼出先 7件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0053f8a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053f/0053f8a4.md) [`0053fb70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053f/0053fb70.md) [`0053fc0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053f/0053fc0c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053f410 ["INT_ADD", "register:40f0:8", ["const:53f410:8", "const:4:8"]]
- 0053f410 ["CALL", null, ["callee:00c58f30:8"]]
+ 0053f730 ["INT_ADD", "register:40f0:8", ["const:53f730:8", "const:4:8"]]
+ 0053f730 ["CALL", null, ["callee:00c58f30:8"]]
- 0053f450 ["INT_ADD", "register:40f0:8", ["const:53f450:8", "const:4:8"]]
- 0053f450 ["CALL", null, ["callee:0053f8a4:8"]]
+ 0053f770 ["INT_ADD", "register:40f0:8", ["const:53f770:8", "const:4:8"]]
+ 0053f770 ["CALL", null, ["callee:0053f8a4:8"]]
- 0053f4cc ["INT_ADD", "register:40f0:8", ["const:53f4cc:8", "const:4:8"]]
- 0053f4cc ["CALL", null, ["callee:0053fb70:8"]]
+ 0053f7ec ["INT_ADD", "register:40f0:8", ["const:53f7ec:8", "const:4:8"]]
+ 0053f7ec ["CALL", null, ["callee:0053fb70:8"]]
~~~


<a id="compare-92b5deb0de28bc3fbf311992e033e62f"></a>

### [`0053f584`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053f584.md) → [`0053f8a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053f/0053f8a4.md) FUN_0053f8a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0052ce30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052c/0052ce30.md) [`0053f370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053f370.md) [`0054ebcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054e/0054ebcc.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0053f6a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053f6a8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 3件 [`0052d150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052d/0052d150.md) [`0053f690`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053f/0053f690.md) [`0054eeec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054e/0054eeec.md) · 呼出先 4件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0053f9c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053f/0053f9c8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053f5e0 ["INT_ADD", "register:40f0:8", ["const:53f5e0:8", "const:4:8"]]
- 0053f5e0 ["CALL", null, ["callee:0053f9c8:8"]]
+ 0053f900 ["INT_ADD", "register:40f0:8", ["const:53f900:8", "const:4:8"]]
+ 0053f900 ["CALL", null, ["callee:0053f9c8:8"]]
- 0053f600 ["INT_ADD", "register:40f0:8", ["const:53f600:8", "const:4:8"]]
- 0053f600 ["CALL", null, ["callee:00c58f30:8"]]
+ 0053f920 ["INT_ADD", "register:40f0:8", ["const:53f920:8", "const:4:8"]]
+ 0053f920 ["CALL", null, ["callee:00c58f30:8"]]
- 0053f63c ["INT_ADD", "register:40f0:8", ["const:53f63c:8", "const:4:8"]]
- 0053f63c ["CALL", null, ["callee:0043bf04:8"]]
+ 0053f95c ["INT_ADD", "register:40f0:8", ["const:53f95c:8", "const:4:8"]]
+ 0053f95c ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-f28cc39561ed3760cd5d7d36e18fb5fd"></a>

### [`0053f850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053f850.md) → [`0053fb70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053f/0053fb70.md) FUN_0053fb70

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 12件 [`00527dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00527/00527dfc.md) [`00527e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00527/00527e68.md) [`005283e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00528/005283e4.md) [`0052b778`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052b/0052b778.md) [`0052c284`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052c/0052c284.md) · 呼出先 2件 [`0053f850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053f850.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 12件 [`0052811c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00528/0052811c.md) [`00528188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00528/00528188.md) [`00528704`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00528/00528704.md) [`0052ba98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052b/0052ba98.md) [`0052c5a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052c/0052c5a4.md) · 呼出先 2件 [`0053fb70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053f/0053fb70.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053f870 ["INT_ADD", "register:40f0:8", ["const:53f870:8", "const:4:8"]]
- 0053f870 ["CALL", null, ["local:b0:8"]]
+ 0053fb90 ["INT_ADD", "register:40f0:8", ["const:53fb90:8", "const:4:8"]]
+ 0053fb90 ["CALL", null, ["local:b0:8"]]
- 0053f87c ["INT_ADD", "register:40f0:8", ["const:53f87c:8", "const:4:8"]]
- 0053f87c ["CALL", null, ["local:b0:8"]]
+ 0053fb9c ["INT_ADD", "register:40f0:8", ["const:53fb9c:8", "const:4:8"]]
+ 0053fb9c ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-a8b8f99e37bb4b3b193f6ed0d8c18b49"></a>

### [`0053f894`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053f894.md) → [`0053fbb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053f/0053fbb4.md) FUN_0053fbb4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0053f850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053f850.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0053fb70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053f/0053fb70.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053f8bc ["INT_ADD", "register:40f0:8", ["const:53f8bc:8", "const:4:8"]]
- 0053f8bc ["CALL", null, ["callee:0053fb70:8"]]
+ 0053fbdc ["INT_ADD", "register:40f0:8", ["const:53fbdc:8", "const:4:8"]]
+ 0053fbdc ["CALL", null, ["callee:0053fb70:8"]]
~~~


<a id="compare-b904298c1d03660a578808c3ace3f938"></a>

### [`0053f900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053f900.md) → [`0053fc20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053f/0053fc20.md) FUN_0053fc20

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`0053f850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053f850.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0053fb70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053f/0053fb70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053f938 ["INT_ADD", "register:40f0:8", ["const:53f938:8", "const:4:8"]]
- 0053f938 ["CALL", null, ["callee:0053fb70:8"]]
+ 0053fc58 ["INT_ADD", "register:40f0:8", ["const:53fc58:8", "const:4:8"]]
+ 0053fc58 ["CALL", null, ["callee:0053fb70:8"]]
~~~


<a id="compare-e2b0fd3c3fd254cc947ae3af79d0a529"></a>

### [`0053f950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053f950.md) → [`0053fc70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053f/0053fc70.md) FUN_0053fc70

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00531d14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00531/00531d14.md) · 呼出先 7件 [`0051ade4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0051a/0051ade4.md) [`0053d7a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053d/0053d7a0.md) [`0053d838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053d/0053d838.md) [`0053d84c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053d/0053d84c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)
- 新版 呼出元 1件 [`00532034`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00532/00532034.md) · 呼出先 7件 [`0051b104`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0051b/0051b104.md) [`0053dac0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053d/0053dac0.md) [`0053db58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053d/0053db58.md) [`0053db6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053d/0053db6c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053f9c8 ["INT_ADD", "register:40f0:8", ["const:53f9c8:8", "const:4:8"]]
- 0053f9c8 ["CALL", null, ["callee:00c58f30:8"]]
+ 0053fce8 ["INT_ADD", "register:40f0:8", ["const:53fce8:8", "const:4:8"]]
+ 0053fce8 ["CALL", null, ["callee:00c58f30:8"]]
- 0053f9ec ["INT_ADD", "register:40f0:8", ["const:53f9ec:8", "const:4:8"]]
- 0053f9ec ["CALL", null, ["callee:0053db6c:8"]]
+ 0053fd0c ["INT_ADD", "register:40f0:8", ["const:53fd0c:8", "const:4:8"]]
+ 0053fd0c ["CALL", null, ["callee:0053db6c:8"]]
- 0053fa38 ["INT_ADD", "register:40f0:8", ["const:53fa38:8", "const:4:8"]]
- 0053fa38 ["CALL", null, ["callee:00c58f30:8"]]
+ 0053fd58 ["INT_ADD", "register:40f0:8", ["const:53fd58:8", "const:4:8"]]
+ 0053fd58 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-0716f196b714443685924ccfbfa47e07"></a>

### [`0053fc4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053fc4c.md) → [`0053ff6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053f/0053ff6c.md) FUN_0053ff6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0053fb18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053fb18.md) · 呼出先 3件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0053afd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053a/0053afd0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0053fe38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053f/0053fe38.md) · 呼出先 3件 [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0053b2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053b/0053b2f0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053fca0 ["INT_ADD", "register:40f0:8", ["const:53fca0:8", "const:4:8"]]
- 0053fca0 ["CALL", null, ["callee:0053b2f0:8"]]
+ 0053ffc0 ["INT_ADD", "register:40f0:8", ["const:53ffc0:8", "const:4:8"]]
+ 0053ffc0 ["CALL", null, ["callee:0053b2f0:8"]]
- 0053fcac ["INT_ADD", "register:40f0:8", ["const:53fcac:8", "const:4:8"]]
- 0053fcac ["CALL", null, ["callee:0046d7f0:8"]]
+ 0053ffcc ["INT_ADD", "register:40f0:8", ["const:53ffcc:8", "const:4:8"]]
+ 0053ffcc ["CALL", null, ["callee:0046d7f0:8"]]
~~~


<a id="compare-dcb5cd92e218b1bc45c3640dd34f291e"></a>

### [`0053fcf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053fcf4.md) → [`00540014`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00540/00540014.md) FUN_00540014

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0053afd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053a/0053afd0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0053b2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053b/0053b2f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053fd2c ["INT_ADD", "register:40f0:8", ["const:53fd2c:8", "const:4:8"]]
- 0053fd2c ["CALL", null, ["callee:0053b2f0:8"]]
+ 0054004c ["INT_ADD", "register:40f0:8", ["const:54004c:8", "const:4:8"]]
+ 0054004c ["CALL", null, ["callee:0053b2f0:8"]]
- 0053fd38 ["INT_ADD", "register:40f0:8", ["const:53fd38:8", "const:4:8"]]
- 0053fd38 ["CALL", null, ["callee:0046d7f0:8"]]
+ 00540058 ["INT_ADD", "register:40f0:8", ["const:540058:8", "const:4:8"]]
+ 00540058 ["CALL", null, ["callee:0046d7f0:8"]]
~~~


<a id="compare-860c71d2138adcf38ac6ba6f08d17fb0"></a>

### [`0053fd58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053fd58.md) → [`00540078`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00540/00540078.md) FUN_00540078

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00532dc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00532/00532dc0.md) [`0053ffe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053ffe0.md) · 呼出先 6件 [`0053fe88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053fe88.md) [`0053ff44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053ff44.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`005330e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00533/005330e0.md) [`00540300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00540/00540300.md) · 呼出先 6件 [`005401a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00540/005401a8.md) [`00540264`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00540/00540264.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0053fda4 ["INT_ADD", "register:40f0:8", ["const:53fda4:8", "const:4:8"]]
- 0053fda4 ["CALL", null, ["callee:00c58f30:8"]]
+ 005400c4 ["INT_ADD", "register:40f0:8", ["const:5400c4:8", "const:4:8"]]
+ 005400c4 ["CALL", null, ["callee:00c58f30:8"]]
- 0053fde4 ["INT_ADD", "register:40f0:8", ["const:53fde4:8", "const:4:8"]]
- 0053fde4 ["CALL", null, ["callee:00c59be0:8"]]
+ 00540104 ["INT_ADD", "register:40f0:8", ["const:540104:8", "const:4:8"]]
+ 00540104 ["CALL", null, ["callee:00c59be0:8"]]
- 0053fe48 ["INT_ADD", "register:40f0:8", ["const:53fe48:8", "const:4:8"]]
- 0053fe48 ["CALL", null, ["callee:00540264:8"]]
+ 00540168 ["INT_ADD", "register:40f0:8", ["const:540168:8", "const:4:8"]]
+ 00540168 ["CALL", null, ["callee:00540264:8"]]
~~~


<a id="compare-ca4afd1144b4ed85b8480e8ce6642be6"></a>

### [`00540714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/00540714.md) → [`00540a34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00540/00540a34.md) FUN_00540a34

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`0050f42c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0050f/0050f42c.md) [`00510d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00510/00510d98.md) [`00511264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00511/00511264.md) [`00531a2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00531/00531a2c.md) [`00531e9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00531/00531e9c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 5件 [`0050f74c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0050f/0050f74c.md) [`005110b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00511/005110b8.md) [`00511584`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00511/00511584.md) [`00531d4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00531/00531d4c.md) [`005321bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00532/005321bc.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00540778 ["INT_ADD", "register:40f0:8", ["const:540778:8", "const:4:8"]]
- 00540778 ["CALL", null, ["callee:00c58f50:8"]]
+ 00540a98 ["INT_ADD", "register:40f0:8", ["const:540a98:8", "const:4:8"]]
+ 00540a98 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-3d5521c2c1e3b165cc3f2c422cf861a7"></a>

### [`0054079c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/0054079c.md) → [`00540abc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00540/00540abc.md) FUN_00540abc

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 29件 [`004e7684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e7/004e7684.md) [`00520ef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00520/00520ef0.md) [`00523038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00523/00523038.md) [`00524a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00524/00524a20.md) [`005321ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00532/005321ac.md) · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f9c.md) [`00479664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00479/00479664.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 29件 [`004e79a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004e7/004e79a4.md) [`00521210`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00521/00521210.md) [`00523358`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00523/00523358.md) [`00524d40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00524/00524d40.md) [`005324cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00532/005324cc.md) · 呼出先 6件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`004412bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412bc.md) [`00479984`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00479/00479984.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005407f8 ["INT_ADD", "register:40f0:8", ["const:5407f8:8", "const:4:8"]]
- 005407f8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00540b18 ["INT_ADD", "register:40f0:8", ["const:540b18:8", "const:4:8"]]
+ 00540b18 ["CALL", null, ["callee:00c58f30:8"]]
- 0054086c ["INT_ADD", "register:40f0:8", ["const:54086c:8", "const:4:8"]]
- 0054086c ["CALL", null, ["callee:0043be80:8"]]
+ 00540b8c ["INT_ADD", "register:40f0:8", ["const:540b8c:8", "const:4:8"]]
+ 00540b8c ["CALL", null, ["callee:0043be80:8"]]
- 005408bc ["INT_ADD", "register:40f0:8", ["const:5408bc:8", "const:4:8"]]
- 005408bc ["CALL", null, ["callee:004412bc:8"]]
+ 00540bdc ["INT_ADD", "register:40f0:8", ["const:540bdc:8", "const:4:8"]]
+ 00540bdc ["CALL", null, ["callee:004412bc:8"]]
~~~


<a id="compare-f1625d294da666914204894aecc93688"></a>

### [`00540910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/00540910.md) → [`00540c30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00540/00540c30.md) FUN_00540c30

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 7件 [`0050e084`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0050e/0050e084.md) [`00529374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00529/00529374.md) [`00529df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00529/00529df8.md) [`00540910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/00540910.md) [`00b6a8d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6a/00b6a8d8.md) · 呼出先 2件 [`00540910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/00540910.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 7件 [`0050e3a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0050e/0050e3a4.md) [`00529694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00529/00529694.md) [`0052a118`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052a/0052a118.md) [`00540c30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00540/00540c30.md) [`00b6b8cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b6b/00b6b8cc.md) · 呼出先 2件 [`00540c30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00540/00540c30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0054092c ["INT_ADD", "register:40f0:8", ["const:54092c:8", "const:4:8"]]
- 0054092c ["CALL", null, ["local:b0:8"]]
+ 00540c4c ["INT_ADD", "register:40f0:8", ["const:540c4c:8", "const:4:8"]]
+ 00540c4c ["CALL", null, ["local:b0:8"]]
- 00540938 ["INT_ADD", "register:40f0:8", ["const:540938:8", "const:4:8"]]
- 00540938 ["CALL", null, ["local:b0:8"]]
+ 00540c58 ["INT_ADD", "register:40f0:8", ["const:540c58:8", "const:4:8"]]
+ 00540c58 ["CALL", null, ["local:b0:8"]]
- 00540948 ["INT_ADD", "register:40f0:8", ["const:540948:8", "const:4:8"]]
- 00540948 ["CALL", null, ["callee:00c58f50:8"]]
+ 00540c68 ["INT_ADD", "register:40f0:8", ["const:540c68:8", "const:4:8"]]
+ 00540c68 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-9e6e92c469d8e1478f2cebd326a26d70"></a>

### [`00540ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/00540ca4.md) → [`00540fc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00540/00540fc4.md) FUN_00540fc4

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`004ad7b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ad/004ad7b4.md) · 呼出先 4件 [`0049f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f46c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`004adad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ad/004adad4.md) · 呼出先 4件 [`0049f78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f78c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00540ce8 ["INT_ADD", "register:40f0:8", ["const:540ce8:8", "const:4:8"]]
- 00540ce8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00541008 ["INT_ADD", "register:40f0:8", ["const:541008:8", "const:4:8"]]
+ 00541008 ["CALL", null, ["callee:00c58f50:8"]]
- 00540d20 ["INT_ADD", "register:40f0:8", ["const:540d20:8", "const:4:8"]]
- 00540d20 ["CALL", null, ["callee:00c58f30:8"]]
+ 00541040 ["INT_ADD", "register:40f0:8", ["const:541040:8", "const:4:8"]]
+ 00541040 ["CALL", null, ["callee:00c58f30:8"]]
- 00540d68 ["INT_ADD", "register:40f0:8", ["const:540d68:8", "const:4:8"]]
- 00540d68 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00541088 ["INT_ADD", "register:40f0:8", ["const:541088:8", "const:4:8"]]
+ 00541088 ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-f60f691098e2747f3541d941fa1a5cc1"></a>

### [`00540dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/00540dbc.md) → [`005410dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00541/005410dc.md) FUN_005410dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 34件 [`004adda4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ad/004adda4.md) [`004bc2b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004bc/004bc2b8.md) [`004cc08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004cc/004cc08c.md) [`004cd8e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004cd/004cd8e8.md) [`004ce728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ce/004ce728.md) · 呼出先 7件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00440f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f9c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 34件 [`004ae0c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ae/004ae0c4.md) [`004bc5d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004bc/004bc5d8.md) [`004cc3ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004cc/004cc3ac.md) [`004cdc08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004cd/004cdc08.md) [`004cea48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ce/004cea48.md) · 呼出先 7件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004412bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412bc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00540e60 ["INT_ADD", "register:40f0:8", ["const:540e60:8", "const:4:8"]]
- 00540e60 ["CALL", null, ["callee:00c58f30:8"]]
+ 00541180 ["INT_ADD", "register:40f0:8", ["const:541180:8", "const:4:8"]]
+ 00541180 ["CALL", null, ["callee:00c58f30:8"]]
- 00540ea8 ["INT_ADD", "register:40f0:8", ["const:540ea8:8", "const:4:8"]]
- 00540ea8 ["CALL", null, ["callee:0043be80:8"]]
+ 005411c8 ["INT_ADD", "register:40f0:8", ["const:5411c8:8", "const:4:8"]]
+ 005411c8 ["CALL", null, ["callee:0043be80:8"]]
- 00540ed0 ["INT_ADD", "register:40f0:8", ["const:540ed0:8", "const:4:8"]]
- 00540ed0 ["CALL", null, ["callee:00c590a0:8"]]
+ 005411f0 ["INT_ADD", "register:40f0:8", ["const:5411f0:8", "const:4:8"]]
+ 005411f0 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-bc0ce703d933f56a27d15e51c05e8fea"></a>

### [`005410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00541/005410cc.md) → [`005413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00541/005413ec.md) FUN_005413ec

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`004b1b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004b1/004b1b94.md) · 呼出先 4件 [`0049f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f46c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`004b1eb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004b1/004b1eb4.md) · 呼出先 4件 [`0049f78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f78c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00541110 ["INT_ADD", "register:40f0:8", ["const:541110:8", "const:4:8"]]
- 00541110 ["CALL", null, ["callee:00c58f50:8"]]
+ 00541430 ["INT_ADD", "register:40f0:8", ["const:541430:8", "const:4:8"]]
+ 00541430 ["CALL", null, ["callee:00c58f50:8"]]
- 00541148 ["INT_ADD", "register:40f0:8", ["const:541148:8", "const:4:8"]]
- 00541148 ["CALL", null, ["callee:00c58f30:8"]]
+ 00541468 ["INT_ADD", "register:40f0:8", ["const:541468:8", "const:4:8"]]
+ 00541468 ["CALL", null, ["callee:00c58f30:8"]]
- 00541190 ["INT_ADD", "register:40f0:8", ["const:541190:8", "const:4:8"]]
- 00541190 ["CALL", null, ["callee:00c58fe0:8"]]
+ 005414b0 ["INT_ADD", "register:40f0:8", ["const:5414b0:8", "const:4:8"]]
+ 005414b0 ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-5c6f0a9b83a7f90af9fb521897255b77"></a>

### [`005412f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00541/005412f0.md) → [`00541610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00541/00541610.md) FUN_00541610

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`004b1f2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004b1/004b1f2c.md) [`005412f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00541/005412f0.md) · 呼出先 9件 [`005412f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00541/005412f0.md) [`00541904`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00541/00541904.md) [`00541b68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00541/00541b68.md) [`00541e9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00541/00541e9c.md) [`005421cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00542/005421cc.md)
- 新版 呼出元 2件 [`004b224c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004b2/004b224c.md) [`00541610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00541/00541610.md) · 呼出先 9件 [`00541610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00541/00541610.md) [`00541c24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00541/00541c24.md) [`00541e88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00541/00541e88.md) [`005421bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00542/005421bc.md) [`005424ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00542/005424ec.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005413b0 ["INT_ADD", "register:40f0:8", ["const:5413b0:8", "const:4:8"]]
- 005413b0 ["CALL", null, ["callee:00541c24:8"]]
+ 005416d0 ["INT_ADD", "register:40f0:8", ["const:5416d0:8", "const:4:8"]]
+ 005416d0 ["CALL", null, ["callee:00541c24:8"]]
- 005413d8 ["INT_ADD", "register:40f0:8", ["const:5413d8:8", "const:4:8"]]
- 005413d8 ["CALL", null, ["callee:00541c24:8"]]
+ 005416f8 ["INT_ADD", "register:40f0:8", ["const:5416f8:8", "const:4:8"]]
+ 005416f8 ["CALL", null, ["callee:00541c24:8"]]
- 005413ec ["INT_ADD", "register:40f0:8", ["const:5413ec:8", "const:4:8"]]
- 005413ec ["CALL", null, ["callee:00541c24:8"]]
+ 0054170c ["INT_ADD", "register:40f0:8", ["const:54170c:8", "const:4:8"]]
+ 0054170c ["CALL", null, ["callee:00541c24:8"]]
~~~


<a id="compare-345b221dce980e5cf4aed25568006fc5"></a>

### [`005421cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00542/005421cc.md) → [`005424ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00542/005424ec.md) FUN_005424ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005412f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00541/005412f0.md) · 呼出先 3件 [`00541904`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00541/00541904.md) [`00542454`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00542/00542454.md) [`005425e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00542/005425e8.md)
- 新版 呼出元 1件 [`00541610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00541/00541610.md) · 呼出先 3件 [`00541c24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00541/00541c24.md) [`00542774`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00542/00542774.md) [`00542908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00542/00542908.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00542230 ["INT_ADD", "register:40f0:8", ["const:542230:8", "const:4:8"]]
- 00542230 ["CALL", null, ["callee:00542908:8"]]
+ 00542550 ["INT_ADD", "register:40f0:8", ["const:542550:8", "const:4:8"]]
+ 00542550 ["CALL", null, ["callee:00542908:8"]]
- 005422a0 ["INT_ADD", "register:40f0:8", ["const:5422a0:8", "const:4:8"]]
- 005422a0 ["CALL", null, ["callee:00541c24:8"]]
+ 005425c0 ["INT_ADD", "register:40f0:8", ["const:5425c0:8", "const:4:8"]]
+ 005425c0 ["CALL", null, ["callee:00541c24:8"]]
- 005422c4 ["INT_ADD", "register:40f0:8", ["const:5422c4:8", "const:4:8"]]
- 005422c4 ["CALL", null, ["callee:00541c24:8"]]
+ 005425e4 ["INT_ADD", "register:40f0:8", ["const:5425e4:8", "const:4:8"]]
+ 005425e4 ["CALL", null, ["callee:00541c24:8"]]
~~~


<a id="compare-6d2278042c609d61a5ccca7dfa309463"></a>

### [`00542454`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00542/00542454.md) → [`00542774`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00542/00542774.md) FUN_00542774

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`005412f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00541/005412f0.md) [`005421cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00542/005421cc.md) [`005425e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00542/005425e8.md) · 呼出先 1件 [`00541904`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00541/00541904.md)
- 新版 呼出元 3件 [`00541610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00541/00541610.md) [`005424ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00542/005424ec.md) [`00542908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00542/00542908.md) · 呼出先 1件 [`00541c24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00541/00541c24.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00542478 ["INT_ADD", "register:40f0:8", ["const:542478:8", "const:4:8"]]
- 00542478 ["CALL", null, ["callee:00541c24:8"]]
+ 00542798 ["INT_ADD", "register:40f0:8", ["const:542798:8", "const:4:8"]]
+ 00542798 ["CALL", null, ["callee:00541c24:8"]]
~~~


<a id="compare-7a6dccc2ad7497f1caf0fb3a6856c863"></a>

### [`005425e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00542/005425e8.md) → [`00542908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00542/00542908.md) FUN_00542908

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`005412f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00541/005412f0.md) [`005421cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00542/005421cc.md) · 呼出先 1件 [`00542454`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00542/00542454.md)
- 新版 呼出元 2件 [`00541610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00541/00541610.md) [`005424ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00542/005424ec.md) · 呼出先 1件 [`00542774`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00542/00542774.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00542614 ["INT_ADD", "register:40f0:8", ["const:542614:8", "const:4:8"]]
- 00542614 ["CALL", null, ["callee:00542774:8"]]
+ 00542934 ["INT_ADD", "register:40f0:8", ["const:542934:8", "const:4:8"]]
+ 00542934 ["CALL", null, ["callee:00542774:8"]]
~~~


<a id="compare-0fea41d02c6dc78a28eabde3cb1bcb6f"></a>

### [`00542fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00542/00542fc8.md) → [`005432e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00543/005432e8.md) FUN_005432e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`004a5418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004a5/004a5418.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00535bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/00535bc0.md) [`0054317c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00543/0054317c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`004a5738`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004a5/004a5738.md) · 呼出先 5件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00535ee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00535/00535ee0.md) [`0054349c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00543/0054349c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00543068 ["INT_ADD", "register:40f0:8", ["const:543068:8", "const:4:8"]]
- 00543068 ["CALL", null, ["callee:00c58f30:8"]]
+ 00543388 ["INT_ADD", "register:40f0:8", ["const:543388:8", "const:4:8"]]
+ 00543388 ["CALL", null, ["callee:00c58f30:8"]]
- 00543130 ["INT_ADD", "register:40f0:8", ["const:543130:8", "const:4:8"]]
- 00543130 ["CALL", null, ["callee:00535ee0:8"]]
+ 00543450 ["INT_ADD", "register:40f0:8", ["const:543450:8", "const:4:8"]]
+ 00543450 ["CALL", null, ["callee:00535ee0:8"]]
- 00543154 ["INT_ADD", "register:40f0:8", ["const:543154:8", "const:4:8"]]
- 00543154 ["CALL", null, ["callee:00c58f50:8"]]
+ 00543474 ["INT_ADD", "register:40f0:8", ["const:543474:8", "const:4:8"]]
+ 00543474 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-818c573c337a7efb3558a1fa5170f5c2"></a>

### [`00543190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00543/00543190.md) → [`005434b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00543/005434b0.md) FUN_005434b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`004b3f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004b3/004b3f24.md) · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`005433ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00543/005433ec.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`004b4244`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004b4/004b4244.md) · 呼出先 6件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0054370c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00543/0054370c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00543214 ["INT_ADD", "register:40f0:8", ["const:543214:8", "const:4:8"]]
- 00543214 ["CALL", null, ["callee:00c58f30:8"]]
+ 00543534 ["INT_ADD", "register:40f0:8", ["const:543534:8", "const:4:8"]]
+ 00543534 ["CALL", null, ["callee:00c58f30:8"]]
- 00543264 ["INT_ADD", "register:40f0:8", ["const:543264:8", "const:4:8"]]
- 00543264 ["CALL", null, ["callee:0043be80:8"]]
+ 00543584 ["INT_ADD", "register:40f0:8", ["const:543584:8", "const:4:8"]]
+ 00543584 ["CALL", null, ["callee:0043be80:8"]]
- 005432dc ["INT_ADD", "register:40f0:8", ["const:5432dc:8", "const:4:8"]]
- 005432dc ["CALL", null, ["callee:00c58f50:8"]]
+ 005435fc ["INT_ADD", "register:40f0:8", ["const:5435fc:8", "const:4:8"]]
+ 005435fc ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-84e1c1eb30b4a44f5cbe5545702db564"></a>

### [`00543384`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00543/00543384.md) → [`005436a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00543/005436a4.md) FUN_005436a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005433d4 ["INT_ADD", "register:40f0:8", ["const:5433d4:8", "const:4:8"]]
- 005433d4 ["CALL", null, ["callee:00c58f50:8"]]
+ 005436f4 ["INT_ADD", "register:40f0:8", ["const:5436f4:8", "const:4:8"]]
+ 005436f4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-7c2039cb2ba4d6b2aa654ec6180bd439"></a>

### [`00543568`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00543/00543568.md) → [`00543888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00543/00543888.md) FUN_00543888

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`004b8580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004b8/004b8580.md) [`004fe468`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004fe/004fe468.md) · 呼出先 4件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c586d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586d0.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)
- 新版 呼出元 2件 [`004b88a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004b8/004b88a0.md) [`004fe788`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004fe/004fe788.md) · 呼出先 4件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59340.md) [`00c596a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c596a0.md) [`00c5ae70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5ae70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005435a4 ["INT_ADD", "register:40f0:8", ["const:5435a4:8", "const:4:8"]]
- 005435a4 ["CALL", null, ["callee:00c5ae70:8"]]
+ 005438c4 ["INT_ADD", "register:40f0:8", ["const:5438c4:8", "const:4:8"]]
+ 005438c4 ["CALL", null, ["callee:00c5ae70:8"]]
- 00543604 ["COPY", "register:0:8", ["register:4040:8"]]
- 00543604 ["INT_ADD", "register:40f0:8", ["const:543604:8", "const:4:8"]]
- 00543604 ["CALLIND", null, ["register:0:8"]]
+ 00543924 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00543924 ["INT_ADD", "register:40f0:8", ["const:543924:8", "const:4:8"]]
+ 00543924 ["CALLIND", null, ["register:0:8"]]
- 00543624 ["INT_ADD", "register:40f0:8", ["const:543624:8", "const:4:8"]]
- 00543624 ["CALL", null, ["callee:00c596a0:8"]]
+ 00543944 ["INT_ADD", "register:40f0:8", ["const:543944:8", "const:4:8"]]
+ 00543944 ["CALL", null, ["callee:00c596a0:8"]]
~~~


<a id="compare-d020f0d2ad37dc0435c6062fcf6840a2"></a>

### [`00543c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00543/00543c9c.md) → [`00543fbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00543/00543fbc.md) FUN_00543fbc

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 20件 [`004c3f58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004c3/004c3f58.md) [`004c40a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004c4/004c40a8.md) [`004c4240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004c4/004c4240.md) [`004c44e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004c4/004c44e8.md) [`004c4734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004c4/004c4734.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00543dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00543/00543dc8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 20件 [`004c4278`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004c4/004c4278.md) [`004c43c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004c4/004c43c8.md) [`004c4560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004c4/004c4560.md) [`004c4808`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004c4/004c4808.md) [`004c4a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004c4/004c4a54.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`005440e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00544/005440e8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00543d14 ["INT_ADD", "register:40f0:8", ["const:543d14:8", "const:4:8"]]
- 00543d14 ["CALL", null, ["callee:00c58f30:8"]]
+ 00544034 ["INT_ADD", "register:40f0:8", ["const:544034:8", "const:4:8"]]
+ 00544034 ["CALL", null, ["callee:00c58f30:8"]]
- 00543d38 ["INT_ADD", "register:40f0:8", ["const:543d38:8", "const:4:8"]]
- 00543d38 ["CALL", null, ["callee:00c59130:8"]]
+ 00544058 ["INT_ADD", "register:40f0:8", ["const:544058:8", "const:4:8"]]
+ 00544058 ["CALL", null, ["callee:00c59130:8"]]
- 00543d64 ["INT_ADD", "register:40f0:8", ["const:543d64:8", "const:4:8"]]
- 00543d64 ["CALL", null, ["callee:00c59130:8"]]
+ 00544084 ["INT_ADD", "register:40f0:8", ["const:544084:8", "const:4:8"]]
+ 00544084 ["CALL", null, ["callee:00c59130:8"]]
~~~


<a id="compare-3af14e0db0dde410a6b6801d7786002f"></a>

### [`00543ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00543/00543ddc.md) → [`005440fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00544/005440fc.md) FUN_005440fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`004c53c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004c5/004c53c8.md) [`004c5520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004c5/004c5520.md) [`004c6b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004c6/004c6b4c.md) [`004ca9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ca/004ca9b0.md) · 呼出先 5件 [`00543dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00543/00543dc8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 4件 [`004c56e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004c5/004c56e8.md) [`004c5840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004c5/004c5840.md) [`004c6e6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004c6/004c6e6c.md) [`004cacd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ca/004cacd0.md) · 呼出先 5件 [`005440e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00544/005440e8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00543e20 ["INT_ADD", "register:40f0:8", ["const:543e20:8", "const:4:8"]]
- 00543e20 ["CALL", null, ["callee:00c58f50:8"]]
+ 00544140 ["INT_ADD", "register:40f0:8", ["const:544140:8", "const:4:8"]]
+ 00544140 ["CALL", null, ["callee:00c58f50:8"]]
- 00543e68 ["INT_ADD", "register:40f0:8", ["const:543e68:8", "const:4:8"]]
- 00543e68 ["CALL", null, ["callee:00c58f30:8"]]
+ 00544188 ["INT_ADD", "register:40f0:8", ["const:544188:8", "const:4:8"]]
+ 00544188 ["CALL", null, ["callee:00c58f30:8"]]
- 00543e90 ["INT_ADD", "register:40f0:8", ["const:543e90:8", "const:4:8"]]
- 00543e90 ["CALL", null, ["callee:00c590a0:8"]]
+ 005441b0 ["INT_ADD", "register:40f0:8", ["const:5441b0:8", "const:4:8"]]
+ 005441b0 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-30e85527037f8635fda1f40363fec817"></a>

### [`00543f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00543/00543f0c.md) → [`0054422c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00544/0054422c.md) FUN_0054422c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`004c7b08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004c7/004c7b08.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`005443cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00544/005443cc.md) [`00544554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00544/00544554.md) [`005446e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00544/005446e0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`004c7e28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004c7/004c7e28.md) · 呼出先 8件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`005446ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00544/005446ec.md) [`00544874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00544/00544874.md) [`00544a00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00544/00544a00.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00543fa4 ["INT_ADD", "register:40f0:8", ["const:543fa4:8", "const:4:8"]]
- 00543fa4 ["CALL", null, ["callee:00c58fe0:8"]]
+ 005442c4 ["INT_ADD", "register:40f0:8", ["const:5442c4:8", "const:4:8"]]
+ 005442c4 ["CALL", null, ["callee:00c58fe0:8"]]
- 00543fe8 ["INT_ADD", "register:40f0:8", ["const:543fe8:8", "const:4:8"]]
- 00543fe8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00544308 ["INT_ADD", "register:40f0:8", ["const:544308:8", "const:4:8"]]
+ 00544308 ["CALL", null, ["callee:00c58f30:8"]]
- 00543ff8 ["INT_ADD", "register:40f0:8", ["const:543ff8:8", "const:4:8"]]
- 00543ff8 ["CALL", null, ["callee:005446ec:8"]]
+ 00544318 ["INT_ADD", "register:40f0:8", ["const:544318:8", "const:4:8"]]
+ 00544318 ["CALL", null, ["callee:005446ec:8"]]
~~~


<a id="compare-7472c4810d0ba64d8c0bf626fcecd656"></a>

### [`005443cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00544/005443cc.md) → [`005446ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00544/005446ec.md) FUN_005446ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00543f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00543/00543f0c.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`0054422c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00544/0054422c.md) · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00544434 ["INT_ADD", "register:40f0:8", ["const:544434:8", "const:4:8"]]
- 00544434 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00544754 ["INT_ADD", "register:40f0:8", ["const:544754:8", "const:4:8"]]
+ 00544754 ["CALL", null, ["callee:00c58fe0:8"]]
- 0054446c ["INT_ADD", "register:40f0:8", ["const:54446c:8", "const:4:8"]]
- 0054446c ["CALL", null, ["callee:00c58f30:8"]]
+ 0054478c ["INT_ADD", "register:40f0:8", ["const:54478c:8", "const:4:8"]]
+ 0054478c ["CALL", null, ["callee:00c58f30:8"]]
- 0054451c ["INT_ADD", "register:40f0:8", ["const:54451c:8", "const:4:8"]]
- 0054451c ["CALL", null, ["callee:00c58f50:8"]]
+ 0054483c ["INT_ADD", "register:40f0:8", ["const:54483c:8", "const:4:8"]]
+ 0054483c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-e078c47e78818d65ed2baa2b243ca8c0"></a>

### [`00544554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00544/00544554.md) → [`00544874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00544/00544874.md) FUN_00544874

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00543f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00543/00543f0c.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`0054422c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00544/0054422c.md) · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005445c4 ["INT_ADD", "register:40f0:8", ["const:5445c4:8", "const:4:8"]]
- 005445c4 ["CALL", null, ["callee:00c58fe0:8"]]
+ 005448e4 ["INT_ADD", "register:40f0:8", ["const:5448e4:8", "const:4:8"]]
+ 005448e4 ["CALL", null, ["callee:00c58fe0:8"]]
- 005445fc ["INT_ADD", "register:40f0:8", ["const:5445fc:8", "const:4:8"]]
- 005445fc ["CALL", null, ["callee:00c58f30:8"]]
+ 0054491c ["INT_ADD", "register:40f0:8", ["const:54491c:8", "const:4:8"]]
+ 0054491c ["CALL", null, ["callee:00c58f30:8"]]
- 005446ac ["INT_ADD", "register:40f0:8", ["const:5446ac:8", "const:4:8"]]
- 005446ac ["CALL", null, ["callee:00c58f50:8"]]
+ 005449cc ["INT_ADD", "register:40f0:8", ["const:5449cc:8", "const:4:8"]]
+ 005449cc ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-1465fba331dfbbd8d048728b4c206dd1"></a>

### [`005446e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00544/005446e0.md) → [`00544a00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00544/00544a00.md) FUN_00544a00

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00543f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00543/00543f0c.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`0054422c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00544/0054422c.md) · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00544750 ["INT_ADD", "register:40f0:8", ["const:544750:8", "const:4:8"]]
- 00544750 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00544a70 ["INT_ADD", "register:40f0:8", ["const:544a70:8", "const:4:8"]]
+ 00544a70 ["CALL", null, ["callee:00c58fe0:8"]]
- 00544788 ["INT_ADD", "register:40f0:8", ["const:544788:8", "const:4:8"]]
- 00544788 ["CALL", null, ["callee:00c58f30:8"]]
+ 00544aa8 ["INT_ADD", "register:40f0:8", ["const:544aa8:8", "const:4:8"]]
+ 00544aa8 ["CALL", null, ["callee:00c58f30:8"]]
- 00544838 ["INT_ADD", "register:40f0:8", ["const:544838:8", "const:4:8"]]
- 00544838 ["CALL", null, ["callee:00c58f50:8"]]
+ 00544b58 ["INT_ADD", "register:40f0:8", ["const:544b58:8", "const:4:8"]]
+ 00544b58 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-83e9f5093c02eaceb07760e45b530d91"></a>

### [`0054486c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00544/0054486c.md) → [`00544b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00544/00544b8c.md) FUN_00544b8c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`004c8150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004c8/004c8150.md) [`004c818c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004c8/004c818c.md) · 呼出先 2件 [`0053080c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00530/0053080c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`004c8470`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004c8/004c8470.md) [`004c84ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004c8/004c84ac.md) · 呼出先 2件 [`00530b2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00530/00530b2c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005448f0 ["INT_ADD", "register:40f0:8", ["const:5448f0:8", "const:4:8"]]
- 005448f0 ["CALL", null, ["callee:00530b2c:8"]]
+ 00544c10 ["INT_ADD", "register:40f0:8", ["const:544c10:8", "const:4:8"]]
+ 00544c10 ["CALL", null, ["callee:00530b2c:8"]]
- 005448f8 ["INT_ADD", "register:40f0:8", ["const:5448f8:8", "const:4:8"]]
- 005448f8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00544c18 ["INT_ADD", "register:40f0:8", ["const:544c18:8", "const:4:8"]]
+ 00544c18 ["CALL", null, ["callee:00c58f50:8"]]
- 00544940 ["INT_ADD", "register:40f0:8", ["const:544940:8", "const:4:8"]]
- 00544940 ["CALL", null, ["callee:00c58f50:8"]]
+ 00544c60 ["INT_ADD", "register:40f0:8", ["const:544c60:8", "const:4:8"]]
+ 00544c60 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-1b1ce53a476e03f8895451ee813d4388"></a>

### [`00544a04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00544/00544a04.md) → [`00544d24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00544/00544d24.md) FUN_00544d24

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`004cb244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004cb/004cb244.md) · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58200.md) [`00c58210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58210.md) [`00c58220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58220.md)
- 新版 呼出元 1件 [`004cb564`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004cb/004cb564.md) · 呼出先 5件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c591d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591d0.md) [`00c591e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591e0.md) [`00c591f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00544a2c ["INT_ADD", "register:40f0:8", ["const:544a2c:8", "const:4:8"]]
- 00544a2c ["CALL", null, ["callee:00c591d0:8"]]
+ 00544d4c ["INT_ADD", "register:40f0:8", ["const:544d4c:8", "const:4:8"]]
+ 00544d4c ["CALL", null, ["callee:00c591d0:8"]]
- 00544a3c ["INT_ADD", "register:40f0:8", ["const:544a3c:8", "const:4:8"]]
- 00544a3c ["CALL", null, ["callee:00c591e0:8"]]
+ 00544d5c ["INT_ADD", "register:40f0:8", ["const:544d5c:8", "const:4:8"]]
+ 00544d5c ["CALL", null, ["callee:00c591e0:8"]]
- 00544a5c ["COPY", "register:0:8", ["register:4040:8"]]
- 00544a5c ["INT_ADD", "register:40f0:8", ["const:544a5c:8", "const:4:8"]]
- 00544a5c ["CALLIND", null, ["register:0:8"]]
+ 00544d7c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00544d7c ["INT_ADD", "register:40f0:8", ["const:544d7c:8", "const:4:8"]]
+ 00544d7c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f4062676ec0b2abb129a4490d538d132"></a>

### [`00544ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00544/00544ad4.md) → [`00544df4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00544/00544df4.md) FUN_00544df4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58220.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c591f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00544afc ["INT_ADD", "register:40f0:8", ["const:544afc:8", "const:4:8"]]
- 00544afc ["CALL", null, ["callee:00c591f0:8"]]
+ 00544e1c ["INT_ADD", "register:40f0:8", ["const:544e1c:8", "const:4:8"]]
+ 00544e1c ["CALL", null, ["callee:00c591f0:8"]]
- 00544b04 ["INT_ADD", "register:40f0:8", ["const:544b04:8", "const:4:8"]]
- 00544b04 ["CALL", null, ["callee:00c58f50:8"]]
+ 00544e24 ["INT_ADD", "register:40f0:8", ["const:544e24:8", "const:4:8"]]
+ 00544e24 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-ae4e9d9bbe7cf9514dce7979499892d7"></a>

### [`00544b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00544/00544b24.md) → [`00544e44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00544/00544e44.md) FUN_00544e44

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58250.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59220.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00544b40 ["INT_ADD", "register:40f0:8", ["const:544b40:8", "const:4:8"]]
- 00544b40 ["CALL", null, ["callee:00c59220:8"]]
+ 00544e60 ["INT_ADD", "register:40f0:8", ["const:544e60:8", "const:4:8"]]
+ 00544e60 ["CALL", null, ["callee:00c59220:8"]]
~~~


<a id="compare-d75f2dc261a0455ac5a2cd655a0d7b2a"></a>

### [`00544b60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00544/00544b60.md) → [`00544e80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00544/00544e80.md) FUN_00544e80

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00544b70 ["INT_ADD", "register:40f0:8", ["const:544b70:8", "const:4:8"]]
- 00544b70 ["CALL", null, ["callee:00c58f40:8"]]
+ 00544e90 ["INT_ADD", "register:40f0:8", ["const:544e90:8", "const:4:8"]]
+ 00544e90 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-bb4c73dcade23bf1155000fb6d92bb14"></a>

### [`00544b84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00544/00544b84.md) → [`00544ea4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00544/00544ea4.md) FUN_00544ea4

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`004ca9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ca/004ca9b0.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58250.md)
- 新版 呼出元 1件 [`004cacd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ca/004cacd0.md) · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59220.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00544b9c ["INT_ADD", "register:40f0:8", ["const:544b9c:8", "const:4:8"]]
- 00544b9c ["CALL", null, ["callee:00c59220:8"]]
+ 00544ebc ["INT_ADD", "register:40f0:8", ["const:544ebc:8", "const:4:8"]]
+ 00544ebc ["CALL", null, ["callee:00c59220:8"]]
~~~


<a id="compare-292c5f2d9c45fa37daa6b36034ac7664"></a>

### [`00544bdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00544/00544bdc.md) → [`00544efc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00544/00544efc.md) FUN_00544efc

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`004ca9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ca/004ca9b0.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`005449f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00544/005449f0.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`004cacd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ca/004cacd0.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00544d10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00544/00544d10.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00544c48 ["INT_ADD", "register:40f0:8", ["const:544c48:8", "const:4:8"]]
- 00544c48 ["CALL", null, ["callee:00c58f30:8"]]
+ 00544f68 ["INT_ADD", "register:40f0:8", ["const:544f68:8", "const:4:8"]]
+ 00544f68 ["CALL", null, ["callee:00c58f30:8"]]
- 00544cb8 ["INT_ADD", "register:40f0:8", ["const:544cb8:8", "const:4:8"]]
- 00544cb8 ["CALL", null, ["callee:00c54d90:8"]]
+ 00544fd8 ["INT_ADD", "register:40f0:8", ["const:544fd8:8", "const:4:8"]]
+ 00544fd8 ["CALL", null, ["callee:00c54d90:8"]]
- 00544ccc ["COPY", "register:0:8", ["register:4040:8"]]
- 00544ccc ["INT_ADD", "register:40f0:8", ["const:544ccc:8", "const:4:8"]]
- 00544ccc ["CALLIND", null, ["register:0:8"]]
+ 00544fec ["COPY", "register:0:8", ["register:4040:8"]]
+ 00544fec ["INT_ADD", "register:40f0:8", ["const:544fec:8", "const:4:8"]]
+ 00544fec ["CALLIND", null, ["register:0:8"]]
~~~


