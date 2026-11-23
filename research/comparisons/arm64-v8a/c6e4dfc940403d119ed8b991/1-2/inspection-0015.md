# v16.0.2 → v16.0.3 · 要調査の変更候補 (15)

[一覧の目次](README.md)

<a id="compare-812fd1d0a2f4dfa21a968176b73dca2b"></a>

### [`00597270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597270.md) → [`00597590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597590.md) FUN_00597590

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00596214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596214.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0045900c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/0045900c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00596534`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00596/00596534.md) · 呼出先 5件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0045932c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00459/0045932c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005972b0 ["INT_ADD", "register:40f0:8", ["const:5972b0:8", "const:4:8"]]
- 005972b0 ["CALL", null, ["callee:0045932c:8"]]
+ 005975d0 ["INT_ADD", "register:40f0:8", ["const:5975d0:8", "const:4:8"]]
+ 005975d0 ["CALL", null, ["callee:0045932c:8"]]
- 005972d0 ["INT_ADD", "register:40f0:8", ["const:5972d0:8", "const:4:8"]]
- 005972d0 ["CALL", null, ["callee:00c58f30:8"]]
+ 005975f0 ["INT_ADD", "register:40f0:8", ["const:5975f0:8", "const:4:8"]]
+ 005975f0 ["CALL", null, ["callee:00c58f30:8"]]
- 00597304 ["INT_ADD", "register:40f0:8", ["const:597304:8", "const:4:8"]]
- 00597304 ["CALL", null, ["callee:0043be80:8"]]
+ 00597624 ["INT_ADD", "register:40f0:8", ["const:597624:8", "const:4:8"]]
+ 00597624 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-0a22d7db32c10c25873185fa58bb3531"></a>

### [`005973ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/005973ac.md) → [`005976cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/005976cc.md) FUN_005976cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0059637c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/0059637c.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0045900c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/0045900c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0059669c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00596/0059669c.md) · 呼出先 5件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0045932c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00459/0045932c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005973ec ["INT_ADD", "register:40f0:8", ["const:5973ec:8", "const:4:8"]]
- 005973ec ["CALL", null, ["callee:0045932c:8"]]
+ 0059770c ["INT_ADD", "register:40f0:8", ["const:59770c:8", "const:4:8"]]
+ 0059770c ["CALL", null, ["callee:0045932c:8"]]
- 0059740c ["INT_ADD", "register:40f0:8", ["const:59740c:8", "const:4:8"]]
- 0059740c ["CALL", null, ["callee:00c58f30:8"]]
+ 0059772c ["INT_ADD", "register:40f0:8", ["const:59772c:8", "const:4:8"]]
+ 0059772c ["CALL", null, ["callee:00c58f30:8"]]
- 00597440 ["INT_ADD", "register:40f0:8", ["const:597440:8", "const:4:8"]]
- 00597440 ["CALL", null, ["callee:0043be80:8"]]
+ 00597760 ["INT_ADD", "register:40f0:8", ["const:597760:8", "const:4:8"]]
+ 00597760 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-aaf4289c1f30b58cb7917324f8a5e72a"></a>

### [`005974e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/005974e8.md) → [`00597808`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597808.md) FUN_00597808

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005974f8 ["INT_ADD", "register:40f0:8", ["const:5974f8:8", "const:4:8"]]
- 005974f8 ["CALL", null, ["callee:00c58f40:8"]]
+ 00597818 ["INT_ADD", "register:40f0:8", ["const:597818:8", "const:4:8"]]
+ 00597818 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-77e94ccb8db056f0d4feb3e043d5277f"></a>

### [`00597544`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597544.md) → [`00597864`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597864.md) FUN_00597864

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`005a14b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a14b0.md) [`007662b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00766/007662b4.md) [`007671a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00767/007671a0.md) [`00798ef8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00798/00798ef8.md) [`00b0eb18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0e/00b0eb18.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0059725c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/0059725c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 5件 [`005a17d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a1/005a17d0.md) [`00766690`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00766/00766690.md) [`0076757c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00767/0076757c.md) [`007992d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00799/007992d4.md) [`00b0fb0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0f/00b0fb0c.md) · 呼出先 5件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0059757c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/0059757c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005975c4 ["INT_ADD", "register:40f0:8", ["const:5975c4:8", "const:4:8"]]
- 005975c4 ["CALL", null, ["callee:00c58f30:8"]]
+ 005978e4 ["INT_ADD", "register:40f0:8", ["const:5978e4:8", "const:4:8"]]
+ 005978e4 ["CALL", null, ["callee:00c58f30:8"]]
- 00597600 ["INT_ADD", "register:40f0:8", ["const:597600:8", "const:4:8"]]
- 00597600 ["CALL", null, ["callee:00c590a0:8"]]
+ 00597920 ["INT_ADD", "register:40f0:8", ["const:597920:8", "const:4:8"]]
+ 00597920 ["CALL", null, ["callee:00c590a0:8"]]
- 00597614 ["INT_ADD", "register:40f0:8", ["const:597614:8", "const:4:8"]]
- 00597614 ["CALL", null, ["callee:00c58f50:8"]]
+ 00597934 ["INT_ADD", "register:40f0:8", ["const:597934:8", "const:4:8"]]
+ 00597934 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-f29d2d42a5bd45a38488f75d225bf569"></a>

### [`0059769c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/0059769c.md) → [`005979bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/005979bc.md) FUN_005979bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 18件 [`0043f95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f95c.md) [`004509f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00450/004509f0.md) [`00451f18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00451/00451f18.md) [`00479e08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00479/00479e08.md) [`00574be4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574be4.md) · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580c0.md) [`00c5a3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a3f0.md)
- 新版 呼出元 18件 [`0043fc7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043fc7c.md) [`00450d10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00450/00450d10.md) [`00452238`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00452/00452238.md) [`0047a128`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047a/0047a128.md) [`00574f04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00574/00574f04.md) · 呼出先 3件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59090.md) [`00c5b3c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b3c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005976c0 ["INT_ADD", "register:40f0:8", ["const:5976c0:8", "const:4:8"]]
- 005976c0 ["CALL", null, ["callee:00c59090:8"]]
+ 005979e0 ["INT_ADD", "register:40f0:8", ["const:5979e0:8", "const:4:8"]]
+ 005979e0 ["CALL", null, ["callee:00c59090:8"]]
- 005976e0 ["INT_ADD", "register:40f0:8", ["const:5976e0:8", "const:4:8"]]
- 005976e0 ["CALL", null, ["callee:00c5b3c0:8"]]
+ 00597a00 ["INT_ADD", "register:40f0:8", ["const:597a00:8", "const:4:8"]]
+ 00597a00 ["CALL", null, ["callee:00c5b3c0:8"]]
- 00597724 ["INT_ADD", "register:40f0:8", ["const:597724:8", "const:4:8"]]
- 00597724 ["CALL", null, ["callee:00c58f80:8"]]
+ 00597a44 ["INT_ADD", "register:40f0:8", ["const:597a44:8", "const:4:8"]]
+ 00597a44 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-3f1878c881510186a2827eea66df351e"></a>

### [`00597728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597728.md) → [`00597a48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597a48.md) FUN_00597a48

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 17件 [`00571320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00571/00571320.md) [`00579564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00579/00579564.md) [`0062c100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0062c/0062c100.md) [`0069a55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a55c.md) [`0075d7b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075d/0075d7b4.md) · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58a80.md) [`00c5a3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a3f0.md)
- 新版 呼出元 17件 [`00571640`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00571/00571640.md) [`00579884`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00579/00579884.md) [`0062c4b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0062c/0062c4b0.md) [`0069a90c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069a/0069a90c.md) [`0075db64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075d/0075db64.md) · 呼出先 3件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59a50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59a50.md) [`00c5b3c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b3c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00597768 ["INT_ADD", "register:40f0:8", ["const:597768:8", "const:4:8"]]
- 00597768 ["CALL", null, ["callee:00c59a50:8"]]
+ 00597a88 ["INT_ADD", "register:40f0:8", ["const:597a88:8", "const:4:8"]]
+ 00597a88 ["CALL", null, ["callee:00c59a50:8"]]
- 00597770 ["INT_ADD", "register:40f0:8", ["const:597770:8", "const:4:8"]]
- 00597770 ["CALL", null, ["callee:00c5b3c0:8"]]
+ 00597a90 ["INT_ADD", "register:40f0:8", ["const:597a90:8", "const:4:8"]]
+ 00597a90 ["CALL", null, ["callee:00c5b3c0:8"]]
- 005977b4 ["INT_ADD", "register:40f0:8", ["const:5977b4:8", "const:4:8"]]
- 005977b4 ["CALL", null, ["callee:00c58f80:8"]]
+ 00597ad4 ["INT_ADD", "register:40f0:8", ["const:597ad4:8", "const:4:8"]]
+ 00597ad4 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-0175a90e4ac31794bf5676d9914a0cac"></a>

### [`005977b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/005977b8.md) → [`00597ad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597ad8.md) FUN_00597ad8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 20件 [`0048093c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/0048093c.md) [`0062c100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0062c/0062c100.md) [`00637460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00637/00637460.md) [`0069a55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a55c.md) [`0075d7b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075d/0075d7b4.md) · 呼出先 1件 [`00c5a400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a400.md)
- 新版 呼出元 20件 [`00480c5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480c5c.md) [`0062c4b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0062c/0062c4b0.md) [`00637810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00637/00637810.md) [`0069a90c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069a/0069a90c.md) [`0075db64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075d/0075db64.md) · 呼出先 1件 [`00c5b3d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b3d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005977e8 ["INT_ADD", "register:40f0:8", ["const:5977e8:8", "const:4:8"]]
- 005977e8 ["CALL", null, ["callee:00c5b3d0:8"]]
+ 00597b08 ["INT_ADD", "register:40f0:8", ["const:597b08:8", "const:4:8"]]
+ 00597b08 ["CALL", null, ["callee:00c5b3d0:8"]]
~~~


<a id="compare-92ed388a199aa1bea64115b8b246b5c9"></a>

### [`00597e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597e48.md) → [`00598168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598168.md) FUN_00598168

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`00476708`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00476/00476708.md) [`0075e5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075e5e0.md) [`008d6d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d6/008d6d34.md) [`008e484c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e4/008e484c.md) [`00b2faa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2faa8.md) · 呼出先 2件 [`00c5a400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a400.md) [`00c5a410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a410.md)
- 新版 呼出元 5件 [`00476a28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00476/00476a28.md) [`0075e990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075e990.md) [`008d7ce0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d7/008d7ce0.md) [`008e57f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e5/008e57f8.md) [`00b30a9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b30a9c.md) · 呼出先 2件 [`00c5b3d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b3d0.md) [`00c5b3e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b3e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00597e58 ["INT_ADD", "register:40f0:8", ["const:597e58:8", "const:4:8"]]
- 00597e58 ["CALL", null, ["callee:00c5b3d0:8"]]
+ 00598178 ["INT_ADD", "register:40f0:8", ["const:598178:8", "const:4:8"]]
+ 00598178 ["CALL", null, ["callee:00c5b3d0:8"]]
- 00597e64 ["INT_ADD", "register:40f0:8", ["const:597e64:8", "const:4:8"]]
- 00597e64 ["CALL", null, ["callee:00c5b3e0:8"]]
+ 00598184 ["INT_ADD", "register:40f0:8", ["const:598184:8", "const:4:8"]]
+ 00598184 ["CALL", null, ["callee:00c5b3e0:8"]]
~~~


<a id="compare-5841afc175590f6e5d2ec4a0e4874179"></a>

### [`00597e88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597e88.md) → [`005981a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/005981a8.md) FUN_005981a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 16件 [`00476708`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00476/00476708.md) [`007a0ff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a0ff8.md) [`007a1168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1168.md) [`007abc7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ab/007abc7c.md) [`007acb24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ac/007acb24.md) · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580c0.md) [`00c5a3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a3f0.md)
- 新版 呼出元 16件 [`00476a28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00476/00476a28.md) [`007a13d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a1/007a13d4.md) [`007a1544`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a1/007a1544.md) [`007ac08c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ac/007ac08c.md) [`007acf48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ac/007acf48.md) · 呼出先 3件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59090.md) [`00c5b3c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b3c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00597eac ["INT_ADD", "register:40f0:8", ["const:597eac:8", "const:4:8"]]
- 00597eac ["CALL", null, ["callee:00c59090:8"]]
+ 005981cc ["INT_ADD", "register:40f0:8", ["const:5981cc:8", "const:4:8"]]
+ 005981cc ["CALL", null, ["callee:00c59090:8"]]
- 00597ecc ["INT_ADD", "register:40f0:8", ["const:597ecc:8", "const:4:8"]]
- 00597ecc ["CALL", null, ["callee:00c5b3c0:8"]]
+ 005981ec ["INT_ADD", "register:40f0:8", ["const:5981ec:8", "const:4:8"]]
+ 005981ec ["CALL", null, ["callee:00c5b3c0:8"]]
- 00597ef8 ["INT_ADD", "register:40f0:8", ["const:597ef8:8", "const:4:8"]]
- 00597ef8 ["CALL", null, ["callee:00c58f80:8"]]
+ 00598218 ["INT_ADD", "register:40f0:8", ["const:598218:8", "const:4:8"]]
+ 00598218 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-8180477f7d2a8cb9ca056dcb8f41cf8d"></a>

### [`00598d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598d34.md) → [`00599054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599054.md) FUN_00599054

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 17件 [`005b1e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1e64.md) [`005b279c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b2/005b279c.md) [`005b3638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b3/005b3638.md) [`005b3bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b3/005b3bb4.md) [`005b4060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b4/005b4060.md) · 呼出先 2件 [`0059a370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059a370.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 17件 [`005b2214`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b2214.md) [`005b2b4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b2/005b2b4c.md) [`005b39e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b3/005b39e8.md) [`005b3f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b3/005b3f64.md) [`005b4410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b4/005b4410.md) · 呼出先 2件 [`0059a690`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059a690.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00598d70 ["COPY", "register:0:8", ["register:4048:8"]]
- 00598d70 ["INT_ADD", "register:40f0:8", ["const:598d70:8", "const:4:8"]]
- 00598d70 ["CALLIND", null, ["register:0:8"]]
+ 00599090 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00599090 ["INT_ADD", "register:40f0:8", ["const:599090:8", "const:4:8"]]
+ 00599090 ["CALLIND", null, ["register:0:8"]]
- 00598d9c ["COPY", "register:0:8", ["register:4040:8"]]
- 00598d9c ["INT_ADD", "register:40f0:8", ["const:598d9c:8", "const:4:8"]]
- 00598d9c ["CALLIND", null, ["register:0:8"]]
+ 005990bc ["COPY", "register:0:8", ["register:4040:8"]]
+ 005990bc ["INT_ADD", "register:40f0:8", ["const:5990bc:8", "const:4:8"]]
+ 005990bc ["CALLIND", null, ["register:0:8"]]
- 00598dac ["INT_ADD", "register:40f0:8", ["const:598dac:8", "const:4:8"]]
- 00598dac ["CALL", null, ["callee:0059a690:8"]]
+ 005990cc ["INT_ADD", "register:40f0:8", ["const:5990cc:8", "const:4:8"]]
+ 005990cc ["CALL", null, ["callee:0059a690:8"]]
~~~


<a id="compare-fd68088e162ee903319db6bacfde65ad"></a>

### [`0059920c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/0059920c.md) → [`0059952c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/0059952c.md) FUN_0059952c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`005ad820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ad/005ad820.md) [`005ae924`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ae/005ae924.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 2件 [`005adbd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ad/005adbd0.md) [`005aecd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ae/005aecd4.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00599228 ["INT_ADD", "register:40f0:8", ["const:599228:8", "const:4:8"]]
- 00599228 ["CALL", null, ["callee:00c54d90:8"]]
+ 00599548 ["INT_ADD", "register:40f0:8", ["const:599548:8", "const:4:8"]]
+ 00599548 ["CALL", null, ["callee:00c54d90:8"]]
- 00599248 ["COPY", "register:0:8", ["register:4040:8"]]
- 00599248 ["INT_ADD", "register:40f0:8", ["const:599248:8", "const:4:8"]]
- 00599248 ["CALLIND", null, ["register:0:8"]]
+ 00599568 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00599568 ["INT_ADD", "register:40f0:8", ["const:599568:8", "const:4:8"]]
+ 00599568 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-cbeb6c819059f7a4392342cda71e8a44"></a>

### [`0059925c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/0059925c.md) → [`0059957c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/0059957c.md) FUN_0059957c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00598e00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598e00.md) · 呼出先 2件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00599120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599120.md) · 呼出先 2件 [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00599278 ["INT_ADD", "register:40f0:8", ["const:599278:8", "const:4:8"]]
- 00599278 ["CALL", null, ["callee:00c58f50:8"]]
+ 00599598 ["INT_ADD", "register:40f0:8", ["const:599598:8", "const:4:8"]]
+ 00599598 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-dbec7ff05510c30c5f79faf607619745"></a>

### [`00599690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/00599690.md) → [`005999b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/005999b0.md) FUN_005999b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005996ac ["INT_ADD", "register:40f0:8", ["const:5996ac:8", "const:4:8"]]
- 005996ac ["CALL", null, ["callee:00c58f50:8"]]
+ 005999cc ["INT_ADD", "register:40f0:8", ["const:5999cc:8", "const:4:8"]]
+ 005999cc ["CALL", null, ["callee:00c58f50:8"]]
- 005996c0 ["INT_ADD", "register:40f0:8", ["const:5996c0:8", "const:4:8"]]
- 005996c0 ["CALL", null, ["callee:00c54d90:8"]]
+ 005999e0 ["INT_ADD", "register:40f0:8", ["const:5999e0:8", "const:4:8"]]
+ 005999e0 ["CALL", null, ["callee:00c54d90:8"]]
- 005996e0 ["COPY", "register:0:8", ["register:4040:8"]]
- 005996e0 ["INT_ADD", "register:40f0:8", ["const:5996e0:8", "const:4:8"]]
- 005996e0 ["CALLIND", null, ["register:0:8"]]
+ 00599a00 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00599a00 ["INT_ADD", "register:40f0:8", ["const:599a00:8", "const:4:8"]]
+ 00599a00 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6df3dd29c1f5a0327a066e08c94f5018"></a>

### [`00599a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/00599a64.md) → [`00599d84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599d84.md) FUN_00599d84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00599a80 ["INT_ADD", "register:40f0:8", ["const:599a80:8", "const:4:8"]]
- 00599a80 ["CALL", null, ["callee:00c54d90:8"]]
+ 00599da0 ["INT_ADD", "register:40f0:8", ["const:599da0:8", "const:4:8"]]
+ 00599da0 ["CALL", null, ["callee:00c54d90:8"]]
- 00599aa0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00599aa0 ["INT_ADD", "register:40f0:8", ["const:599aa0:8", "const:4:8"]]
- 00599aa0 ["CALLIND", null, ["register:0:8"]]
+ 00599dc0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00599dc0 ["INT_ADD", "register:40f0:8", ["const:599dc0:8", "const:4:8"]]
+ 00599dc0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a8ef69a6d2ab8f2f03b2182928a681af"></a>

### [`00599cb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/00599cb0.md) → [`00599fd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599fd0.md) FUN_00599fd0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0059a748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059a748.md) [`0059ae58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059ae58.md) · 呼出先 4件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`0059aa68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059aa68.md) [`0059b178`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059b178.md) · 呼出先 4件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00599ce8 ["COPY", "register:0:8", ["register:4048:8"]]
- 00599ce8 ["INT_ADD", "register:40f0:8", ["const:599ce8:8", "const:4:8"]]
- 00599ce8 ["CALLIND", null, ["register:0:8"]]
+ 0059a008 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0059a008 ["INT_ADD", "register:40f0:8", ["const:59a008:8", "const:4:8"]]
+ 0059a008 ["CALLIND", null, ["register:0:8"]]
- 00599d08 ["COPY", "register:0:8", ["register:4048:8"]]
- 00599d08 ["INT_ADD", "register:40f0:8", ["const:599d08:8", "const:4:8"]]
- 00599d08 ["CALLIND", null, ["register:0:8"]]
+ 0059a028 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0059a028 ["INT_ADD", "register:40f0:8", ["const:59a028:8", "const:4:8"]]
+ 0059a028 ["CALLIND", null, ["register:0:8"]]
- 00599d20 ["COPY", "register:0:8", ["register:4040:8"]]
- 00599d20 ["INT_ADD", "register:40f0:8", ["const:599d20:8", "const:4:8"]]
- 00599d20 ["CALLIND", null, ["register:0:8"]]
+ 0059a040 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0059a040 ["INT_ADD", "register:40f0:8", ["const:59a040:8", "const:4:8"]]
+ 0059a040 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9a960cfc1a791b03d52d15d8dca93ca5"></a>

### [`00599df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/00599df4.md) → [`0059a114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059a114.md) FUN_0059a114

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`005ad820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ad/005ad820.md) [`005ae924`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ae/005ae924.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 2件 [`005adbd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ad/005adbd0.md) [`005aecd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ae/005aecd4.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00599e10 ["INT_ADD", "register:40f0:8", ["const:599e10:8", "const:4:8"]]
- 00599e10 ["CALL", null, ["callee:00c54d90:8"]]
+ 0059a130 ["INT_ADD", "register:40f0:8", ["const:59a130:8", "const:4:8"]]
+ 0059a130 ["CALL", null, ["callee:00c54d90:8"]]
- 00599e30 ["COPY", "register:0:8", ["register:4040:8"]]
- 00599e30 ["INT_ADD", "register:40f0:8", ["const:599e30:8", "const:4:8"]]
- 00599e30 ["CALLIND", null, ["register:0:8"]]
+ 0059a150 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0059a150 ["INT_ADD", "register:40f0:8", ["const:59a150:8", "const:4:8"]]
+ 0059a150 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-00f13cae205dde2a9b7826b73fe1e86c"></a>

### [`00599e44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/00599e44.md) → [`0059a164`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059a164.md) FUN_0059a164

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`005ad820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ad/005ad820.md) [`005ae924`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ae/005ae924.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 2件 [`005adbd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ad/005adbd0.md) [`005aecd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ae/005aecd4.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00599e60 ["INT_ADD", "register:40f0:8", ["const:599e60:8", "const:4:8"]]
- 00599e60 ["CALL", null, ["callee:00c54d90:8"]]
+ 0059a180 ["INT_ADD", "register:40f0:8", ["const:59a180:8", "const:4:8"]]
+ 0059a180 ["CALL", null, ["callee:00c54d90:8"]]
- 00599e80 ["COPY", "register:0:8", ["register:4040:8"]]
- 00599e80 ["INT_ADD", "register:40f0:8", ["const:599e80:8", "const:4:8"]]
- 00599e80 ["CALLIND", null, ["register:0:8"]]
+ 0059a1a0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0059a1a0 ["INT_ADD", "register:40f0:8", ["const:59a1a0:8", "const:4:8"]]
+ 0059a1a0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-635855f30009b3eb0dcdaf4dc184038d"></a>

### [`00599f78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/00599f78.md) → [`0059a298`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059a298.md) FUN_0059a298

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00599e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/00599e94.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0059a1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059a1b4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00599f88 ["INT_ADD", "register:40f0:8", ["const:599f88:8", "const:4:8"]]
- 00599f88 ["CALL", null, ["callee:0059a1b4:8"]]
+ 0059a2a8 ["INT_ADD", "register:40f0:8", ["const:59a2a8:8", "const:4:8"]]
+ 0059a2a8 ["CALL", null, ["callee:0059a1b4:8"]]
~~~


<a id="compare-75f2d3c52bf1d758979489166530b203"></a>

### [`0059a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059a170.md) → [`0059a490`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059a490.md) FUN_0059a490

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0059a1ac ["COPY", "register:0:8", ["register:4040:8"]]
- 0059a1ac ["INT_ADD", "register:40f0:8", ["const:59a1ac:8", "const:4:8"]]
- 0059a1ac ["CALLIND", null, ["register:0:8"]]
+ 0059a4cc ["COPY", "register:0:8", ["register:4040:8"]]
+ 0059a4cc ["INT_ADD", "register:40f0:8", ["const:59a4cc:8", "const:4:8"]]
+ 0059a4cc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-bbae0a5cb6cd6141be78fd13389a2bea"></a>

### [`0059a1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059a1c0.md) → [`0059a4e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059a4e0.md) FUN_0059a4e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0059a1dc ["INT_ADD", "register:40f0:8", ["const:59a1dc:8", "const:4:8"]]
- 0059a1dc ["CALL", null, ["callee:0045a0d4:8"]]
+ 0059a4fc ["INT_ADD", "register:40f0:8", ["const:59a4fc:8", "const:4:8"]]
+ 0059a4fc ["CALL", null, ["callee:0045a0d4:8"]]
~~~


<a id="compare-c131f7d6f60a29687cda433fdc5f1d76"></a>

### [`0059a208`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059a208.md) → [`0059a528`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059a528.md) FUN_0059a528

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00598b7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598b7c.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00598e9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598e9c.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0059a274 ["COPY", "register:0:8", ["register:4040:8"]]
- 0059a274 ["INT_ADD", "register:40f0:8", ["const:59a274:8", "const:4:8"]]
- 0059a274 ["CALLIND", null, ["register:0:8"]]
+ 0059a594 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0059a594 ["INT_ADD", "register:40f0:8", ["const:59a594:8", "const:4:8"]]
+ 0059a594 ["CALLIND", null, ["register:0:8"]]
- 0059a284 ["COPY", "register:0:8", ["register:4040:8"]]
- 0059a284 ["INT_ADD", "register:40f0:8", ["const:59a284:8", "const:4:8"]]
- 0059a284 ["CALLIND", null, ["register:0:8"]]
+ 0059a5a4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0059a5a4 ["INT_ADD", "register:40f0:8", ["const:59a5a4:8", "const:4:8"]]
+ 0059a5a4 ["CALLIND", null, ["register:0:8"]]
- 0059a2a4 ["COPY", "register:0:8", ["register:4040:8"]]
- 0059a2a4 ["INT_ADD", "register:40f0:8", ["const:59a2a4:8", "const:4:8"]]
- 0059a2a4 ["CALLIND", null, ["register:0:8"]]
+ 0059a5c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0059a5c4 ["INT_ADD", "register:40f0:8", ["const:59a5c4:8", "const:4:8"]]
+ 0059a5c4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-75e92f57c9669856e8763baa400cc52c"></a>

### [`0059a370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059a370.md) → [`0059a690`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059a690.md) FUN_0059a690

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00598d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598d34.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00599054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599054.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0059a3dc ["COPY", "register:0:8", ["register:4040:8"]]
- 0059a3dc ["INT_ADD", "register:40f0:8", ["const:59a3dc:8", "const:4:8"]]
- 0059a3dc ["CALLIND", null, ["register:0:8"]]
+ 0059a6fc ["COPY", "register:0:8", ["register:4040:8"]]
+ 0059a6fc ["INT_ADD", "register:40f0:8", ["const:59a6fc:8", "const:4:8"]]
+ 0059a6fc ["CALLIND", null, ["register:0:8"]]
- 0059a3ec ["COPY", "register:0:8", ["register:4040:8"]]
- 0059a3ec ["INT_ADD", "register:40f0:8", ["const:59a3ec:8", "const:4:8"]]
- 0059a3ec ["CALLIND", null, ["register:0:8"]]
+ 0059a70c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0059a70c ["INT_ADD", "register:40f0:8", ["const:59a70c:8", "const:4:8"]]
+ 0059a70c ["CALLIND", null, ["register:0:8"]]
- 0059a40c ["COPY", "register:0:8", ["register:4040:8"]]
- 0059a40c ["INT_ADD", "register:40f0:8", ["const:59a40c:8", "const:4:8"]]
- 0059a40c ["CALLIND", null, ["register:0:8"]]
+ 0059a72c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0059a72c ["INT_ADD", "register:40f0:8", ["const:59a72c:8", "const:4:8"]]
+ 0059a72c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-411bf7373fc706eb0e071957094f5d7a"></a>

### [`0059a6cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059a6cc.md) → [`0059a9ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059a9ec.md) FUN_0059a9ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0059a6e8 ["INT_ADD", "register:40f0:8", ["const:59a6e8:8", "const:4:8"]]
- 0059a6e8 ["CALL", null, ["callee:00c58f50:8"]]
+ 0059aa08 ["INT_ADD", "register:40f0:8", ["const:59aa08:8", "const:4:8"]]
+ 0059aa08 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-fed01706482111bc89f3bbddad48fbb5"></a>

### [`0059a70c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059a70c.md) → [`0059aa2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059aa2c.md) FUN_0059aa2c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00598e00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598e00.md) · 呼出先 2件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00599120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599120.md) · 呼出先 2件 [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0059a728 ["INT_ADD", "register:40f0:8", ["const:59a728:8", "const:4:8"]]
- 0059a728 ["CALL", null, ["callee:00c58f50:8"]]
+ 0059aa48 ["INT_ADD", "register:40f0:8", ["const:59aa48:8", "const:4:8"]]
+ 0059aa48 ["CALL", null, ["callee:00c58f50:8"]]
- 0059a734 ["INT_ADD", "register:40f0:8", ["const:59a734:8", "const:4:8"]]
- 0059a734 ["CALL", null, ["callee:00c58f20:8"]]
+ 0059aa54 ["INT_ADD", "register:40f0:8", ["const:59aa54:8", "const:4:8"]]
+ 0059aa54 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-382f021f240a095052cb525bb71349d0"></a>

### [`0059a748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059a748.md) → [`0059aa68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059aa68.md) FUN_0059aa68

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 12件 [`00596f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596f6c.md) [`005996f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/005996f4.md) [`00599ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/00599ab4.md) [`00599cb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/00599cb0.md) [`00795e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795e7c.md)
- 新版 呼出元 0件  · 呼出先 12件 [`0059728c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/0059728c.md) [`00599a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599a14.md) [`00599dd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599dd4.md) [`00599fd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599fd0.md) [`00796258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00796/00796258.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0059a788 ["INT_ADD", "register:40f0:8", ["const:59a788:8", "const:4:8"]]
- 0059a788 ["CALL", null, ["callee:00c59590:8"]]
+ 0059aaa8 ["INT_ADD", "register:40f0:8", ["const:59aaa8:8", "const:4:8"]]
+ 0059aaa8 ["CALL", null, ["callee:00c59590:8"]]
- 0059a7b0 ["COPY", "register:0:8", ["register:4040:8"]]
- 0059a7b0 ["INT_ADD", "register:40f0:8", ["const:59a7b0:8", "const:4:8"]]
- 0059a7b0 ["CALLIND", null, ["register:0:8"]]
+ 0059aad0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0059aad0 ["INT_ADD", "register:40f0:8", ["const:59aad0:8", "const:4:8"]]
+ 0059aad0 ["CALLIND", null, ["register:0:8"]]
- 0059a7c8 ["COPY", "register:0:8", ["register:4048:8"]]
- 0059a7c8 ["INT_ADD", "register:40f0:8", ["const:59a7c8:8", "const:4:8"]]
- 0059a7c8 ["CALLIND", null, ["register:0:8"]]
+ 0059aae8 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0059aae8 ["INT_ADD", "register:40f0:8", ["const:59aae8:8", "const:4:8"]]
+ 0059aae8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-66b77348c6d5702b5c9abe0705214e75"></a>

### [`0059ad94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059ad94.md) → [`0059b0b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059b0b4.md) FUN_0059b0b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0059adb0 ["INT_ADD", "register:40f0:8", ["const:59adb0:8", "const:4:8"]]
- 0059adb0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0059b0d0 ["INT_ADD", "register:40f0:8", ["const:59b0d0:8", "const:4:8"]]
+ 0059b0d0 ["CALL", null, ["callee:00c58f50:8"]]
- 0059adc4 ["INT_ADD", "register:40f0:8", ["const:59adc4:8", "const:4:8"]]
- 0059adc4 ["CALL", null, ["callee:00c54d90:8"]]
+ 0059b0e4 ["INT_ADD", "register:40f0:8", ["const:59b0e4:8", "const:4:8"]]
+ 0059b0e4 ["CALL", null, ["callee:00c54d90:8"]]
- 0059ade4 ["COPY", "register:0:8", ["register:4040:8"]]
- 0059ade4 ["INT_ADD", "register:40f0:8", ["const:59ade4:8", "const:4:8"]]
- 0059ade4 ["CALLIND", null, ["register:0:8"]]
+ 0059b104 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0059b104 ["INT_ADD", "register:40f0:8", ["const:59b104:8", "const:4:8"]]
+ 0059b104 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d6a5831fd4fc1c3fc0022cfd467a17f3"></a>

### [`0059adf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059adf8.md) → [`0059b118`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059b118.md) FUN_0059b118

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0059929c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/0059929c.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005995bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/005995bc.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0059ae14 ["INT_ADD", "register:40f0:8", ["const:59ae14:8", "const:4:8"]]
- 0059ae14 ["CALL", null, ["callee:00c58f50:8"]]
+ 0059b134 ["INT_ADD", "register:40f0:8", ["const:59b134:8", "const:4:8"]]
+ 0059b134 ["CALL", null, ["callee:00c58f50:8"]]
- 0059ae28 ["INT_ADD", "register:40f0:8", ["const:59ae28:8", "const:4:8"]]
- 0059ae28 ["CALL", null, ["callee:00c54d90:8"]]
+ 0059b148 ["INT_ADD", "register:40f0:8", ["const:59b148:8", "const:4:8"]]
+ 0059b148 ["CALL", null, ["callee:00c54d90:8"]]
- 0059ae3c ["COPY", "register:0:8", ["register:4040:8"]]
- 0059ae3c ["INT_ADD", "register:40f0:8", ["const:59ae3c:8", "const:4:8"]]
- 0059ae3c ["CALLIND", null, ["register:0:8"]]
+ 0059b15c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0059b15c ["INT_ADD", "register:40f0:8", ["const:59b15c:8", "const:4:8"]]
+ 0059b15c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6531b6b2fc3bf11487bf6c63308eee43"></a>

### [`0059ae58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059ae58.md) → [`0059b178`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059b178.md) FUN_0059b178

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 11件 [`00596f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596f6c.md) [`005996f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/005996f4.md) [`00599ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/00599ab4.md) [`00599cb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/00599cb0.md) [`00795e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795e7c.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0059728c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/0059728c.md) [`00599a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599a14.md) [`00599dd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599dd4.md) [`00599fd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599fd0.md) [`00796258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00796/00796258.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0059ae9c ["COPY", "register:0:8", ["register:4048:8"]]
- 0059ae9c ["INT_ADD", "register:40f0:8", ["const:59ae9c:8", "const:4:8"]]
- 0059ae9c ["CALLIND", null, ["register:0:8"]]
+ 0059b1bc ["COPY", "register:0:8", ["register:4048:8"]]
+ 0059b1bc ["INT_ADD", "register:40f0:8", ["const:59b1bc:8", "const:4:8"]]
+ 0059b1bc ["CALLIND", null, ["register:0:8"]]
- 0059aeb8 ["COPY", "register:0:8", ["register:4050:8"]]
- 0059aeb8 ["INT_ADD", "register:40f0:8", ["const:59aeb8:8", "const:4:8"]]
- 0059aeb8 ["CALLIND", null, ["register:0:8"]]
+ 0059b1d8 ["COPY", "register:0:8", ["register:4050:8"]]
+ 0059b1d8 ["INT_ADD", "register:40f0:8", ["const:59b1d8:8", "const:4:8"]]
+ 0059b1d8 ["CALLIND", null, ["register:0:8"]]
- 0059aedc ["INT_ADD", "register:40f0:8", ["const:59aedc:8", "const:4:8"]]
- 0059aedc ["CALL", null, ["callee:00c54d60:8"]]
+ 0059b1fc ["INT_ADD", "register:40f0:8", ["const:59b1fc:8", "const:4:8"]]
+ 0059b1fc ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-60ee53d47dd746a175597855b3d748b7"></a>

### [`0059b380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b380.md) → [`0059b6a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059b6a0.md) FUN_0059b6a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00599844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/00599844.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`00599b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599b64.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0059b39c ["INT_ADD", "register:40f0:8", ["const:59b39c:8", "const:4:8"]]
- 0059b39c ["CALL", null, ["callee:00c54d90:8"]]
+ 0059b6bc ["INT_ADD", "register:40f0:8", ["const:59b6bc:8", "const:4:8"]]
+ 0059b6bc ["CALL", null, ["callee:00c54d90:8"]]
- 0059b3bc ["COPY", "register:0:8", ["register:4040:8"]]
- 0059b3bc ["INT_ADD", "register:40f0:8", ["const:59b3bc:8", "const:4:8"]]
- 0059b3bc ["CALLIND", null, ["register:0:8"]]
+ 0059b6dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 0059b6dc ["INT_ADD", "register:40f0:8", ["const:59b6dc:8", "const:4:8"]]
+ 0059b6dc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8a71fafb05dc3fa1c8e21714c7a0ff6a"></a>

### [`0059b3d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b3d0.md) → [`0059b6f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059b6f0.md) FUN_0059b6f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00599844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/00599844.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00599b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599b64.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0059b3f0 ["INT_ADD", "register:40f0:8", ["const:59b3f0:8", "const:4:8"]]
- 0059b3f0 ["CALL", null, ["callee:00c54d90:8"]]
+ 0059b710 ["INT_ADD", "register:40f0:8", ["const:59b710:8", "const:4:8"]]
+ 0059b710 ["CALL", null, ["callee:00c54d90:8"]]
- 0059b404 ["COPY", "register:0:8", ["register:4040:8"]]
- 0059b404 ["INT_ADD", "register:40f0:8", ["const:59b404:8", "const:4:8"]]
- 0059b404 ["CALLIND", null, ["register:0:8"]]
+ 0059b724 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0059b724 ["INT_ADD", "register:40f0:8", ["const:59b724:8", "const:4:8"]]
+ 0059b724 ["CALLIND", null, ["register:0:8"]]
- 0059b40c ["INT_ADD", "register:40f0:8", ["const:59b40c:8", "const:4:8"]]
- 0059b40c ["CALL", null, ["callee:00c58f20:8"]]
+ 0059b72c ["INT_ADD", "register:40f0:8", ["const:59b72c:8", "const:4:8"]]
+ 0059b72c ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-8f6d33c830f5ca92e2d0b3f47cab1ad9"></a>

### [`0059b9cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b9cc.md) → [`0059bcec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059bcec.md) FUN_0059bcec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0059b420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b420.md) [`0059b948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b948.md) · 呼出先 8件 [`00560494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/00560494.md) [`00560498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/00560498.md) [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 2件 [`0059b740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059b740.md) [`0059bc68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059bc68.md) · 呼出先 8件 [`005607b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/005607b4.md) [`005607b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/005607b8.md) [`00765314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00765/00765314.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0059b9f0 ["INT_ADD", "register:40f0:8", ["const:59b9f0:8", "const:4:8"]]
- 0059b9f0 ["CALL", null, ["callee:008524fc:8"]]
+ 0059bd10 ["INT_ADD", "register:40f0:8", ["const:59bd10:8", "const:4:8"]]
+ 0059bd10 ["CALL", null, ["callee:008524fc:8"]]
- 0059b9f8 ["INT_ADD", "register:40f0:8", ["const:59b9f8:8", "const:4:8"]]
- 0059b9f8 ["CALL", null, ["callee:00765314:8"]]
+ 0059bd18 ["INT_ADD", "register:40f0:8", ["const:59bd18:8", "const:4:8"]]
+ 0059bd18 ["CALL", null, ["callee:00765314:8"]]
- 0059ba0c ["INT_ADD", "register:40f0:8", ["const:59ba0c:8", "const:4:8"]]
- 0059ba0c ["CALL", null, ["callee:00c58f50:8"]]
+ 0059bd2c ["INT_ADD", "register:40f0:8", ["const:59bd2c:8", "const:4:8"]]
+ 0059bd2c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-a54e3f356e218ee91598cf33b340d06c"></a>

### [`0059d434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059d/0059d434.md) → [`0059d754`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059d/0059d754.md) FUN_0059d754

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`004517dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00451/004517dc.md) [`0059bf84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059bf84.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00451afc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00451/00451afc.md) [`0059c2a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059c/0059c2a4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0059d460 ["INT_ADD", "register:40f0:8", ["const:59d460:8", "const:4:8"]]
- 0059d460 ["CALL", null, ["callee:0059c2a4:8"]]
+ 0059d780 ["INT_ADD", "register:40f0:8", ["const:59d780:8", "const:4:8"]]
+ 0059d780 ["CALL", null, ["callee:0059c2a4:8"]]
- 0059d490 ["INT_ADD", "register:40f0:8", ["const:59d490:8", "const:4:8"]]
- 0059d490 ["CALL", null, ["callee:00451afc:8"]]
+ 0059d7b0 ["INT_ADD", "register:40f0:8", ["const:59d7b0:8", "const:4:8"]]
+ 0059d7b0 ["CALL", null, ["callee:00451afc:8"]]
- 0059d4a0 ["INT_ADD", "register:40f0:8", ["const:59d4a0:8", "const:4:8"]]
- 0059d4a0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0059d7c0 ["INT_ADD", "register:40f0:8", ["const:59d7c0:8", "const:4:8"]]
+ 0059d7c0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-a38a4f2c6b1273024a65d01b00b487ed"></a>

### [`0059ec3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059e/0059ec3c.md) → [`0059ef5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059e/0059ef5c.md) FUN_0059ef5c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`004517dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00451/004517dc.md) [`0059bf84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059bf84.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00451afc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00451/00451afc.md) [`0059c2a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059c/0059c2a4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0059ec68 ["INT_ADD", "register:40f0:8", ["const:59ec68:8", "const:4:8"]]
- 0059ec68 ["CALL", null, ["callee:0059c2a4:8"]]
+ 0059ef88 ["INT_ADD", "register:40f0:8", ["const:59ef88:8", "const:4:8"]]
+ 0059ef88 ["CALL", null, ["callee:0059c2a4:8"]]
- 0059ec9c ["INT_ADD", "register:40f0:8", ["const:59ec9c:8", "const:4:8"]]
- 0059ec9c ["CALL", null, ["callee:00451afc:8"]]
+ 0059efbc ["INT_ADD", "register:40f0:8", ["const:59efbc:8", "const:4:8"]]
+ 0059efbc ["CALL", null, ["callee:00451afc:8"]]
- 0059ecac ["INT_ADD", "register:40f0:8", ["const:59ecac:8", "const:4:8"]]
- 0059ecac ["CALL", null, ["callee:00c58f50:8"]]
+ 0059efcc ["INT_ADD", "register:40f0:8", ["const:59efcc:8", "const:4:8"]]
+ 0059efcc ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-3fa7822862c0e9207d7eaabe2fc0bae2"></a>

### [`0059f5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059f/0059f5e0.md) → [`0059f900`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059f/0059f900.md) FUN_0059f900

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`004517dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00451/004517dc.md) [`0059bf84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059bf84.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00451afc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00451/00451afc.md) [`0059c2a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059c/0059c2a4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0059f60c ["INT_ADD", "register:40f0:8", ["const:59f60c:8", "const:4:8"]]
- 0059f60c ["CALL", null, ["callee:0059c2a4:8"]]
+ 0059f92c ["INT_ADD", "register:40f0:8", ["const:59f92c:8", "const:4:8"]]
+ 0059f92c ["CALL", null, ["callee:0059c2a4:8"]]
- 0059f640 ["INT_ADD", "register:40f0:8", ["const:59f640:8", "const:4:8"]]
- 0059f640 ["CALL", null, ["callee:00451afc:8"]]
+ 0059f960 ["INT_ADD", "register:40f0:8", ["const:59f960:8", "const:4:8"]]
+ 0059f960 ["CALL", null, ["callee:00451afc:8"]]
- 0059f650 ["INT_ADD", "register:40f0:8", ["const:59f650:8", "const:4:8"]]
- 0059f650 ["CALL", null, ["callee:00c58f50:8"]]
+ 0059f970 ["INT_ADD", "register:40f0:8", ["const:59f970:8", "const:4:8"]]
+ 0059f970 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-ec9363fdf3258a09a913cfdb4a561f7e"></a>

### [`005a1390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1390.md) → [`005a16b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a1/005a16b0.md) FUN_005a16b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005a13dc ["INT_ADD", "register:40f0:8", ["const:5a13dc:8", "const:4:8"]]
- 005a13dc ["CALL", null, ["callee:00c58f50:8"]]
+ 005a16fc ["INT_ADD", "register:40f0:8", ["const:5a16fc:8", "const:4:8"]]
+ 005a16fc ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-cb5a65a754676e33c4d414552e4eaf44"></a>

### [`005a1814`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1814.md) → [`005a1b34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a1/005a1b34.md) FUN_005a1b34

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005a1768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1768.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005a1a88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a1/005a1a88.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005a1824 ["INT_ADD", "register:40f0:8", ["const:5a1824:8", "const:4:8"]]
- 005a1824 ["CALL", null, ["callee:005a1a88:8"]]
+ 005a1b44 ["INT_ADD", "register:40f0:8", ["const:5a1b44:8", "const:4:8"]]
+ 005a1b44 ["CALL", null, ["callee:005a1a88:8"]]
~~~


<a id="compare-ce069ef44ca6b8f2060e69b6955d59f0"></a>

### [`005a1960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1960.md) → [`005a1c80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a1/005a1c80.md) FUN_005a1c80

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005a1e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1e20.md) · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`005a1ac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1ac0.md) [`005a1b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1b4c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`005a2140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a2/005a2140.md) · 呼出先 6件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`005a1de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a1/005a1de0.md) [`005a1e6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a1/005a1e6c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005a19bc ["INT_ADD", "register:40f0:8", ["const:5a19bc:8", "const:4:8"]]
- 005a19bc ["CALL", null, ["callee:00c58f30:8"]]
+ 005a1cdc ["INT_ADD", "register:40f0:8", ["const:5a1cdc:8", "const:4:8"]]
+ 005a1cdc ["CALL", null, ["callee:00c58f30:8"]]
- 005a1a30 ["INT_ADD", "register:40f0:8", ["const:5a1a30:8", "const:4:8"]]
- 005a1a30 ["CALL", null, ["callee:0043be80:8"]]
+ 005a1d50 ["INT_ADD", "register:40f0:8", ["const:5a1d50:8", "const:4:8"]]
+ 005a1d50 ["CALL", null, ["callee:0043be80:8"]]
- 005a1a80 ["INT_ADD", "register:40f0:8", ["const:5a1a80:8", "const:4:8"]]
- 005a1a80 ["CALL", null, ["callee:005a1e6c:8"]]
+ 005a1da0 ["INT_ADD", "register:40f0:8", ["const:5a1da0:8", "const:4:8"]]
+ 005a1da0 ["CALL", null, ["callee:005a1e6c:8"]]
~~~


<a id="compare-b36a206f55ff0c3950bccf977b51a884"></a>

### [`005a1ac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1ac0.md) → [`005a1de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a1/005a1de0.md) FUN_005a1de0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005a1960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1960.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005a1c80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a1/005a1c80.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005a1b28 ["INT_ADD", "register:40f0:8", ["const:5a1b28:8", "const:4:8"]]
- 005a1b28 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a1e48 ["INT_ADD", "register:40f0:8", ["const:5a1e48:8", "const:4:8"]]
+ 005a1e48 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-266922c9533cc475796879377e591fac"></a>

### [`005a1b60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1b60.md) → [`005a1e80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a1/005a1e80.md) FUN_005a1e80

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005a1bac ["INT_ADD", "register:40f0:8", ["const:5a1bac:8", "const:4:8"]]
- 005a1bac ["CALL", null, ["callee:00c58f50:8"]]
+ 005a1ecc ["INT_ADD", "register:40f0:8", ["const:5a1ecc:8", "const:4:8"]]
+ 005a1ecc ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-c52c139e9ef1b4e5eb2078f26df34bfe"></a>

### [`005a1bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1bc0.md) → [`005a1ee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a1/005a1ee0.md) FUN_005a1ee0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005a0ed4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a0/005a0ed4.md) · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`005a1b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1b4c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005a11f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a1/005a11f4.md) · 呼出先 6件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`005a1e6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a1/005a1e6c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005a1c64 ["INT_ADD", "register:40f0:8", ["const:5a1c64:8", "const:4:8"]]
- 005a1c64 ["CALL", null, ["callee:00c58f30:8"]]
+ 005a1f84 ["INT_ADD", "register:40f0:8", ["const:5a1f84:8", "const:4:8"]]
+ 005a1f84 ["CALL", null, ["callee:00c58f30:8"]]
- 005a1cac ["INT_ADD", "register:40f0:8", ["const:5a1cac:8", "const:4:8"]]
- 005a1cac ["CALL", null, ["callee:0043be80:8"]]
+ 005a1fcc ["INT_ADD", "register:40f0:8", ["const:5a1fcc:8", "const:4:8"]]
+ 005a1fcc ["CALL", null, ["callee:0043be80:8"]]
- 005a1d10 ["INT_ADD", "register:40f0:8", ["const:5a1d10:8", "const:4:8"]]
- 005a1d10 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a2030 ["INT_ADD", "register:40f0:8", ["const:5a2030:8", "const:4:8"]]
+ 005a2030 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-07433869b7b72f346096359d07fdd024"></a>

### [`005a1db8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1db8.md) → [`005a20d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a2/005a20d8.md) FUN_005a20d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005a1e08 ["INT_ADD", "register:40f0:8", ["const:5a1e08:8", "const:4:8"]]
- 005a1e08 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a2128 ["INT_ADD", "register:40f0:8", ["const:5a2128:8", "const:4:8"]]
+ 005a2128 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-49f90eabc70a0d13f69db33322191b7a"></a>

### [`005a3eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a3/005a3eac.md) → [`005a41cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a41cc.md) FUN_005a41cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005a3ec8 ["INT_ADD", "register:40f0:8", ["const:5a3ec8:8", "const:4:8"]]
- 005a3ec8 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a41e8 ["INT_ADD", "register:40f0:8", ["const:5a41e8:8", "const:4:8"]]
+ 005a41e8 ["CALL", null, ["callee:00c58f50:8"]]
- 005a3ef4 ["INT_ADD", "register:40f0:8", ["const:5a3ef4:8", "const:4:8"]]
- 005a3ef4 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a4214 ["INT_ADD", "register:40f0:8", ["const:5a4214:8", "const:4:8"]]
+ 005a4214 ["CALL", null, ["callee:00c58f50:8"]]
- 005a3f04 ["INT_ADD", "register:40f0:8", ["const:5a3f04:8", "const:4:8"]]
- 005a3f04 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a4224 ["INT_ADD", "register:40f0:8", ["const:5a4224:8", "const:4:8"]]
+ 005a4224 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-7f00a9d9779133a0227c7a8ccfc63830"></a>

### [`005a3f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a3/005a3f20.md) → [`005a4240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4240.md) FUN_005a4240

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005a4548`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4548.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005a4868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4868.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005a3f38 ["INT_ADD", "register:40f0:8", ["const:5a3f38:8", "const:4:8"]]
- 005a3f38 ["CALL", null, ["callee:005a4868:8"]]
+ 005a4258 ["INT_ADD", "register:40f0:8", ["const:5a4258:8", "const:4:8"]]
+ 005a4258 ["CALL", null, ["callee:005a4868:8"]]
~~~


<a id="compare-382acb5a9d96f064839295fdf916f264"></a>

### [`005a4124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4124.md) → [`005a4444`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4444.md) FUN_005a4444

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`005a495c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a495c.md) [`0079a660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079a/0079a660.md) [`0079c3f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079c/0079c3f8.md) · 呼出先 6件 [`005a4268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4268.md) [`005a42ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a42ac.md) [`005a42e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a42e0.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 3件 [`005a4c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4c7c.md) [`0079aa3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079a/0079aa3c.md) [`0079c7d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079c/0079c7d4.md) · 呼出先 6件 [`005a4588`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4588.md) [`005a45cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a45cc.md) [`005a4600`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4600.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005a4180 ["INT_ADD", "register:40f0:8", ["const:5a4180:8", "const:4:8"]]
- 005a4180 ["CALL", null, ["callee:00c58f30:8"]]
+ 005a44a0 ["INT_ADD", "register:40f0:8", ["const:5a44a0:8", "const:4:8"]]
+ 005a44a0 ["CALL", null, ["callee:00c58f30:8"]]
- 005a41c4 ["INT_ADD", "register:40f0:8", ["const:5a41c4:8", "const:4:8"]]
- 005a41c4 ["CALL", null, ["callee:005a4600:8"]]
+ 005a44e4 ["INT_ADD", "register:40f0:8", ["const:5a44e4:8", "const:4:8"]]
+ 005a44e4 ["CALL", null, ["callee:005a4600:8"]]
- 005a4228 ["INT_ADD", "register:40f0:8", ["const:5a4228:8", "const:4:8"]]
- 005a4228 ["CALL", null, ["callee:005a45cc:8"]]
+ 005a4548 ["INT_ADD", "register:40f0:8", ["const:5a4548:8", "const:4:8"]]
+ 005a4548 ["CALL", null, ["callee:005a45cc:8"]]
~~~


<a id="compare-fff0e09242fe370d3babaf7b3748310c"></a>

### [`005a4268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4268.md) → [`005a4588`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4588.md) FUN_005a4588

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005a4124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4124.md) · 呼出先 2件 [`005a4548`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4548.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005a4444`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4444.md) · 呼出先 2件 [`005a4868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4868.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005a4294 ["INT_ADD", "register:40f0:8", ["const:5a4294:8", "const:4:8"]]
- 005a4294 ["CALL", null, ["callee:005a4868:8"]]
+ 005a45b4 ["INT_ADD", "register:40f0:8", ["const:5a45b4:8", "const:4:8"]]
+ 005a45b4 ["CALL", null, ["callee:005a4868:8"]]
~~~


<a id="compare-df3c692f2e84d5b7ca33e30e85db0650"></a>

### [`005a42c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a42c0.md) → [`005a45e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a45e0.md) FUN_005a45e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0079cc68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079c/0079cc68.md) · 呼出先 1件 [`005a44ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a44ac.md)
- 新版 呼出元 1件 [`0079d044`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079d/0079d044.md) · 呼出先 1件 [`005a47cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a47cc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005a42d0 ["INT_ADD", "register:40f0:8", ["const:5a42d0:8", "const:4:8"]]
- 005a42d0 ["CALL", null, ["callee:005a47cc:8"]]
+ 005a45f0 ["INT_ADD", "register:40f0:8", ["const:5a45f0:8", "const:4:8"]]
+ 005a45f0 ["CALL", null, ["callee:005a47cc:8"]]
~~~


<a id="compare-b3602b59d447fc6603efec99676b453e"></a>

### [`005a42e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a42e0.md) → [`005a4600`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4600.md) FUN_005a4600

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 7件 [`005a3360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a3/005a3360.md) [`005a4124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4124.md) [`005a45d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a45d4.md) [`00799cec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00799/00799cec.md) [`0079a660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079a/0079a660.md) · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`005a4498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4498.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 7件 [`005a3680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a3/005a3680.md) [`005a4444`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4444.md) [`005a48f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a48f4.md) [`0079a0c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079a/0079a0c8.md) [`0079aa3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079a/0079aa3c.md) · 呼出先 6件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`005a47b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a47b8.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005a431c ["INT_ADD", "register:40f0:8", ["const:5a431c:8", "const:4:8"]]
- 005a431c ["CALL", null, ["callee:0043be80:8"]]
+ 005a463c ["INT_ADD", "register:40f0:8", ["const:5a463c:8", "const:4:8"]]
+ 005a463c ["CALL", null, ["callee:0043be80:8"]]
- 005a4350 ["INT_ADD", "register:40f0:8", ["const:5a4350:8", "const:4:8"]]
- 005a4350 ["CALL", null, ["callee:0043be80:8"]]
+ 005a4670 ["INT_ADD", "register:40f0:8", ["const:5a4670:8", "const:4:8"]]
+ 005a4670 ["CALL", null, ["callee:0043be80:8"]]
- 005a4384 ["INT_ADD", "register:40f0:8", ["const:5a4384:8", "const:4:8"]]
- 005a4384 ["CALL", null, ["callee:0043be80:8"]]
+ 005a46a4 ["INT_ADD", "register:40f0:8", ["const:5a46a4:8", "const:4:8"]]
+ 005a46a4 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-eb8d4b6a42cc0e5ae5a5cb51ce2969d9"></a>

### [`005a44ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a44ac.md) → [`005a47cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a47cc.md) FUN_005a47cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005a42c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a42c0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005a45e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a45e0.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005a44f0 ["INT_ADD", "register:40f0:8", ["const:5a44f0:8", "const:4:8"]]
- 005a44f0 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a4810 ["INT_ADD", "register:40f0:8", ["const:5a4810:8", "const:4:8"]]
+ 005a4810 ["CALL", null, ["callee:00c58f50:8"]]
- 005a4514 ["INT_ADD", "register:40f0:8", ["const:5a4514:8", "const:4:8"]]
- 005a4514 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a4834 ["INT_ADD", "register:40f0:8", ["const:5a4834:8", "const:4:8"]]
+ 005a4834 ["CALL", null, ["callee:00c58f50:8"]]
- 005a4524 ["INT_ADD", "register:40f0:8", ["const:5a4524:8", "const:4:8"]]
- 005a4524 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a4844 ["INT_ADD", "register:40f0:8", ["const:5a4844:8", "const:4:8"]]
+ 005a4844 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-127b9bc061f8cb4d2880ffb9fc6d0eaf"></a>

### [`005a4548`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4548.md) → [`005a4868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4868.md) FUN_005a4868

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 8件 [`005a3f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a3/005a3f20.md) [`005a4070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4070.md) [`005a40cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a40cc.md) [`005a4268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4268.md) [`005a4a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4a7c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 8件 [`005a4240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4240.md) [`005a4390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4390.md) [`005a43ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a43ec.md) [`005a4588`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4588.md) [`005a4d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4d9c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005a4598 ["INT_ADD", "register:40f0:8", ["const:5a4598:8", "const:4:8"]]
- 005a4598 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a48b8 ["INT_ADD", "register:40f0:8", ["const:5a48b8:8", "const:4:8"]]
+ 005a48b8 ["CALL", null, ["callee:00c58f50:8"]]
- 005a45a8 ["INT_ADD", "register:40f0:8", ["const:5a45a8:8", "const:4:8"]]
- 005a45a8 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a48c8 ["INT_ADD", "register:40f0:8", ["const:5a48c8:8", "const:4:8"]]
+ 005a48c8 ["CALL", null, ["callee:00c58f50:8"]]
- 005a45b8 ["INT_ADD", "register:40f0:8", ["const:5a45b8:8", "const:4:8"]]
- 005a45b8 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a48d8 ["INT_ADD", "register:40f0:8", ["const:5a48d8:8", "const:4:8"]]
+ 005a48d8 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-e1341f6dbdf23ae3da38c19ecae371cb"></a>

### [`005a45d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a45d4.md) → [`005a48f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a48f4.md) FUN_005a48f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`005a3360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a3/005a3360.md) [`00799cec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00799/00799cec.md) [`007a008c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a008c.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`005a42ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a42ac.md) [`005a42e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a42e0.md) [`005a4794`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4794.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 3件 [`005a3680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a3/005a3680.md) [`0079a0c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079a/0079a0c8.md) [`007a0468`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a0/007a0468.md) · 呼出先 7件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`005a45cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a45cc.md) [`005a4600`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4600.md) [`005a4ab4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4ab4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005a4674 ["INT_ADD", "register:40f0:8", ["const:5a4674:8", "const:4:8"]]
- 005a4674 ["CALL", null, ["callee:00c58f30:8"]]
+ 005a4994 ["INT_ADD", "register:40f0:8", ["const:5a4994:8", "const:4:8"]]
+ 005a4994 ["CALL", null, ["callee:00c58f30:8"]]
- 005a469c ["INT_ADD", "register:40f0:8", ["const:5a469c:8", "const:4:8"]]
- 005a469c ["CALL", null, ["callee:005a4600:8"]]
+ 005a49bc ["INT_ADD", "register:40f0:8", ["const:5a49bc:8", "const:4:8"]]
+ 005a49bc ["CALL", null, ["callee:005a4600:8"]]
- 005a46c0 ["INT_ADD", "register:40f0:8", ["const:5a46c0:8", "const:4:8"]]
- 005a46c0 ["CALL", null, ["callee:005a4ab4:8"]]
+ 005a49e0 ["INT_ADD", "register:40f0:8", ["const:5a49e0:8", "const:4:8"]]
+ 005a49e0 ["CALL", null, ["callee:005a4ab4:8"]]
~~~


<a id="compare-140c3b886b9f43d1a63a5854667af357"></a>

### [`005a475c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a475c.md) → [`005a4a7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4a7c.md) FUN_005a4a7c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005a48b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a48b8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005a4bd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4bd8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005a4770 ["INT_ADD", "register:40f0:8", ["const:5a4770:8", "const:4:8"]]
- 005a4770 ["CALL", null, ["callee:005a4bd8:8"]]
+ 005a4a90 ["INT_ADD", "register:40f0:8", ["const:5a4a90:8", "const:4:8"]]
+ 005a4a90 ["CALL", null, ["callee:005a4bd8:8"]]
~~~


<a id="compare-5ef0552325815159786fd18ec61d607f"></a>

### [`005a4794`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4794.md) → [`005a4ab4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4ab4.md) FUN_005a4ab4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005a45d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a45d4.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005a48f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a48f4.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005a4860 ["INT_ADD", "register:40f0:8", ["const:5a4860:8", "const:4:8"]]
- 005a4860 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a4b80 ["INT_ADD", "register:40f0:8", ["const:5a4b80:8", "const:4:8"]]
+ 005a4b80 ["CALL", null, ["callee:00c58f50:8"]]
- 005a4884 ["INT_ADD", "register:40f0:8", ["const:5a4884:8", "const:4:8"]]
- 005a4884 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a4ba4 ["INT_ADD", "register:40f0:8", ["const:5a4ba4:8", "const:4:8"]]
+ 005a4ba4 ["CALL", null, ["callee:00c58f50:8"]]
- 005a4894 ["INT_ADD", "register:40f0:8", ["const:5a4894:8", "const:4:8"]]
- 005a4894 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a4bb4 ["INT_ADD", "register:40f0:8", ["const:5a4bb4:8", "const:4:8"]]
+ 005a4bb4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-6de22f3cfa48753554c3f115d4beb815"></a>

### [`005a48b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a48b8.md) → [`005a4bd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4bd8.md) FUN_005a4bd8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005a475c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a475c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005a4a7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4a7c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005a4900 ["INT_ADD", "register:40f0:8", ["const:5a4900:8", "const:4:8"]]
- 005a4900 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a4c20 ["INT_ADD", "register:40f0:8", ["const:5a4c20:8", "const:4:8"]]
+ 005a4c20 ["CALL", null, ["callee:00c58f50:8"]]
- 005a4924 ["INT_ADD", "register:40f0:8", ["const:5a4924:8", "const:4:8"]]
- 005a4924 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a4c44 ["INT_ADD", "register:40f0:8", ["const:5a4c44:8", "const:4:8"]]
+ 005a4c44 ["CALL", null, ["callee:00c58f50:8"]]
- 005a4934 ["INT_ADD", "register:40f0:8", ["const:5a4934:8", "const:4:8"]]
- 005a4934 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a4c54 ["INT_ADD", "register:40f0:8", ["const:5a4c54:8", "const:4:8"]]
+ 005a4c54 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-761b73787393c0ac6c9aa048616bf61e"></a>

### [`005ae860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ae/005ae860.md) → [`005aec10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ae/005aec10.md) FUN_005aec10

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005ae87c ["INT_ADD", "register:40f0:8", ["const:5ae87c:8", "const:4:8"]]
- 005ae87c ["CALL", null, ["callee:00c58f50:8"]]
+ 005aec2c ["INT_ADD", "register:40f0:8", ["const:5aec2c:8", "const:4:8"]]
+ 005aec2c ["CALL", null, ["callee:00c58f50:8"]]
- 005ae890 ["INT_ADD", "register:40f0:8", ["const:5ae890:8", "const:4:8"]]
- 005ae890 ["CALL", null, ["callee:00c54d90:8"]]
+ 005aec40 ["INT_ADD", "register:40f0:8", ["const:5aec40:8", "const:4:8"]]
+ 005aec40 ["CALL", null, ["callee:00c54d90:8"]]
- 005ae8b0 ["COPY", "register:0:8", ["register:4040:8"]]
- 005ae8b0 ["INT_ADD", "register:40f0:8", ["const:5ae8b0:8", "const:4:8"]]
- 005ae8b0 ["CALLIND", null, ["register:0:8"]]
+ 005aec60 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005aec60 ["INT_ADD", "register:40f0:8", ["const:5aec60:8", "const:4:8"]]
+ 005aec60 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9f4990e3cb061bfcb111aca0d6eb606d"></a>

### [`005afe2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005af/005afe2c.md) → [`005b01dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b01dc.md) FUN_005b01dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 1件 [`005afcb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005af/005afcb8.md)
- 新版 呼出元 1件 [`00a48f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) · 呼出先 1件 [`005b0068`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b0068.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005afe38 ["INT_ADD", "register:40f0:8", ["const:5afe38:8", "const:4:8"]]
- 005afe38 ["CALL", null, ["callee:005b0068:8"]]
+ 005b01e8 ["INT_ADD", "register:40f0:8", ["const:5b01e8:8", "const:4:8"]]
+ 005b01e8 ["CALL", null, ["callee:005b0068:8"]]
~~~


<a id="compare-d6d3a7d15c97b188933915f4c0396cf4"></a>

### [`005b5260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5260.md) → [`005b5610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5610.md) FUN_005b5610

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`005b13e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b13e8.md) [`005b1480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1480.md) [`005b5260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5260.md) · 呼出先 2件 [`005b5260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5260.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`005b1798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1798.md) [`005b1830`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1830.md) [`005b5610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5610.md) · 呼出先 2件 [`005b5610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5610.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005b527c ["INT_ADD", "register:40f0:8", ["const:5b527c:8", "const:4:8"]]
- 005b527c ["CALL", null, ["local:b0:8"]]
+ 005b562c ["INT_ADD", "register:40f0:8", ["const:5b562c:8", "const:4:8"]]
+ 005b562c ["CALL", null, ["local:b0:8"]]
- 005b5288 ["INT_ADD", "register:40f0:8", ["const:5b5288:8", "const:4:8"]]
- 005b5288 ["CALL", null, ["local:b0:8"]]
+ 005b5638 ["INT_ADD", "register:40f0:8", ["const:5b5638:8", "const:4:8"]]
+ 005b5638 ["CALL", null, ["local:b0:8"]]
- 005b52bc ["COPY", "register:0:8", ["register:4040:8"]]
- 005b52bc ["INT_ADD", "register:40f0:8", ["const:5b52bc:8", "const:4:8"]]
- 005b52bc ["CALLIND", null, ["register:0:8"]]
+ 005b566c ["COPY", "register:0:8", ["register:4040:8"]]
+ 005b566c ["INT_ADD", "register:40f0:8", ["const:5b566c:8", "const:4:8"]]
+ 005b566c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7f1f0c0134a89d1fe979e3accd0febb5"></a>

### [`005b55a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b55a4.md) → [`005b5954`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5954.md) FUN_005b5954

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 1件 [`005b1910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1910.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005b1cc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1cc0.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 call_argument_candidate, constant, local_def_use, operands_and_dependencies

命令の説明率　旧版 92.31% / 新版 92.31%

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005b5970",
      "incomplete_value": true,
      "site": "005b5974",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "old": {
      "definition_site": "005b55c0",
      "incomplete_value": true,
      "site": "005b55c4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:4000:8"
              ],
              [
                "leaf",
                "const:20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 1
  }
]
~~~


~~~diff
- 005b55c4 ["INT_ADD", "register:40f0:8", ["const:5b55c4:8", "const:4:8"]]
- 005b55c4 ["CALL", null, ["callee:00c58f50:8"]]
+ 005b5974 ["INT_ADD", "register:40f0:8", ["const:5b5974:8", "const:4:8"]]
+ 005b5974 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-bc9df3e53934ffcd4ac3d80f75e5136b"></a>

### [`005b5a24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5a24.md) → [`005b5dd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b5/005b5dd4.md) FUN_005b5dd4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005b5a40 ["INT_ADD", "register:40f0:8", ["const:5b5a40:8", "const:4:8"]]
- 005b5a40 ["CALL", null, ["callee:00c54d90:8"]]
+ 005b5df0 ["INT_ADD", "register:40f0:8", ["const:5b5df0:8", "const:4:8"]]
+ 005b5df0 ["CALL", null, ["callee:00c54d90:8"]]
- 005b5a60 ["COPY", "register:0:8", ["register:4040:8"]]
- 005b5a60 ["INT_ADD", "register:40f0:8", ["const:5b5a60:8", "const:4:8"]]
- 005b5a60 ["CALLIND", null, ["register:0:8"]]
+ 005b5e10 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005b5e10 ["INT_ADD", "register:40f0:8", ["const:5b5e10:8", "const:4:8"]]
+ 005b5e10 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b940b1d72f8065047379af1c0ebd7f5b"></a>

### [`005b5d20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b5/005b5d20.md) → [`005b60d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b6/005b60d0.md) FUN_005b60d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005b5d90 ["COPY", "register:0:8", ["register:4040:8"]]
- 005b5d90 ["INT_ADD", "register:40f0:8", ["const:5b5d90:8", "const:4:8"]]
- 005b5d90 ["CALLIND", null, ["register:0:8"]]
+ 005b6140 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005b6140 ["INT_ADD", "register:40f0:8", ["const:5b6140:8", "const:4:8"]]
+ 005b6140 ["CALLIND", null, ["register:0:8"]]
- 005b5dc4 ["INT_ADD", "register:40f0:8", ["const:5b5dc4:8", "const:4:8"]]
- 005b5dc4 ["CALL", null, ["callee:0045a0d4:8"]]
+ 005b6174 ["INT_ADD", "register:40f0:8", ["const:5b6174:8", "const:4:8"]]
+ 005b6174 ["CALL", null, ["callee:0045a0d4:8"]]
- 005b5dc8 ["INT_ADD", "register:40f0:8", ["const:5b5dc8:8", "const:4:8"]]
- 005b5dc8 ["CALL", null, ["callee:00c58f80:8"]]
+ 005b6178 ["INT_ADD", "register:40f0:8", ["const:5b6178:8", "const:4:8"]]
+ 005b6178 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-8366a3663405f6a5b392f633e5532162"></a>

### [`005b7560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b7560.md) → [`005b7910`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b7910.md) FUN_005b7910

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005b3bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b3/005b3bb4.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005b3f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b3/005b3f64.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005b759c ["COPY", "register:0:8", ["register:4040:8"]]
- 005b759c ["INT_ADD", "register:40f0:8", ["const:5b759c:8", "const:4:8"]]
- 005b759c ["CALLIND", null, ["register:0:8"]]
+ 005b794c ["COPY", "register:0:8", ["register:4040:8"]]
+ 005b794c ["INT_ADD", "register:40f0:8", ["const:5b794c:8", "const:4:8"]]
+ 005b794c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-18507a7fc75e415968a59f5c6d0961e9"></a>

### [`005b7ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b7ce8.md) → [`005b8098`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b8098.md) FUN_005b8098

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005b7d04 ["INT_ADD", "register:40f0:8", ["const:5b7d04:8", "const:4:8"]]
- 005b7d04 ["CALL", null, ["callee:00c54d90:8"]]
+ 005b80b4 ["INT_ADD", "register:40f0:8", ["const:5b80b4:8", "const:4:8"]]
+ 005b80b4 ["CALL", null, ["callee:00c54d90:8"]]
- 005b7d24 ["COPY", "register:0:8", ["register:4040:8"]]
- 005b7d24 ["INT_ADD", "register:40f0:8", ["const:5b7d24:8", "const:4:8"]]
- 005b7d24 ["CALLIND", null, ["register:0:8"]]
+ 005b80d4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005b80d4 ["INT_ADD", "register:40f0:8", ["const:5b80d4:8", "const:4:8"]]
+ 005b80d4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f3f9582ed17f28b2d4da458d7ef67f92"></a>

### [`005b8084`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b8084.md) → [`005b8434`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b8434.md) FUN_005b8434

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005b3638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b3/005b3638.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005b39e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b3/005b39e8.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005b80c0 ["COPY", "register:0:8", ["register:4040:8"]]
- 005b80c0 ["INT_ADD", "register:40f0:8", ["const:5b80c0:8", "const:4:8"]]
- 005b80c0 ["CALLIND", null, ["register:0:8"]]
+ 005b8470 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005b8470 ["INT_ADD", "register:40f0:8", ["const:5b8470:8", "const:4:8"]]
+ 005b8470 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-117e6da930af43387ebdb698f26b517e"></a>

### [`005b884c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b884c.md) → [`005b8bfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b8bfc.md) FUN_005b8bfc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005b4060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b4/005b4060.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005b4410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b4/005b4410.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005b8888 ["COPY", "register:0:8", ["register:4040:8"]]
- 005b8888 ["INT_ADD", "register:40f0:8", ["const:5b8888:8", "const:4:8"]]
- 005b8888 ["CALLIND", null, ["register:0:8"]]
+ 005b8c38 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005b8c38 ["INT_ADD", "register:40f0:8", ["const:5b8c38:8", "const:4:8"]]
+ 005b8c38 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-efd8914ab2f641643bd5b240669b5fb3"></a>

### [`005b8a54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b8a54.md) → [`005b8e04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b8e04.md) FUN_005b8e04

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005b8a70 ["INT_ADD", "register:40f0:8", ["const:5b8a70:8", "const:4:8"]]
- 005b8a70 ["CALL", null, ["callee:00c54d90:8"]]
+ 005b8e20 ["INT_ADD", "register:40f0:8", ["const:5b8e20:8", "const:4:8"]]
+ 005b8e20 ["CALL", null, ["callee:00c54d90:8"]]
- 005b8a90 ["COPY", "register:0:8", ["register:4040:8"]]
- 005b8a90 ["INT_ADD", "register:40f0:8", ["const:5b8a90:8", "const:4:8"]]
- 005b8a90 ["CALLIND", null, ["register:0:8"]]
+ 005b8e40 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005b8e40 ["INT_ADD", "register:40f0:8", ["const:5b8e40:8", "const:4:8"]]
+ 005b8e40 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f453629a43da5981c67a273f39f778ac"></a>

### [`005b8e40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b8e40.md) → [`005b91f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b91f0.md) FUN_005b91f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005b45d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b4/005b45d0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005b4980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b4/005b4980.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005b8e7c ["COPY", "register:0:8", ["register:4040:8"]]
- 005b8e7c ["INT_ADD", "register:40f0:8", ["const:5b8e7c:8", "const:4:8"]]
- 005b8e7c ["CALLIND", null, ["register:0:8"]]
+ 005b922c ["COPY", "register:0:8", ["register:4040:8"]]
+ 005b922c ["INT_ADD", "register:40f0:8", ["const:5b922c:8", "const:4:8"]]
+ 005b922c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-bf9fff7486a87fb5713e46dbcc47c42b"></a>

### [`005b8e90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b8e90.md) → [`005b9240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b9240.md) FUN_005b9240

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005b8ec8 ["INT_ADD", "register:40f0:8", ["const:5b8ec8:8", "const:4:8"]]
- 005b8ec8 ["CALL", null, ["callee:00c54d60:8"]]
+ 005b9278 ["INT_ADD", "register:40f0:8", ["const:5b9278:8", "const:4:8"]]
+ 005b9278 ["CALL", null, ["callee:00c54d60:8"]]
- 005b8eec ["COPY", "register:0:8", ["register:4040:8"]]
- 005b8eec ["INT_ADD", "register:40f0:8", ["const:5b8eec:8", "const:4:8"]]
- 005b8eec ["CALLIND", null, ["register:0:8"]]
+ 005b929c ["COPY", "register:0:8", ["register:4040:8"]]
+ 005b929c ["INT_ADD", "register:40f0:8", ["const:5b929c:8", "const:4:8"]]
+ 005b929c ["CALLIND", null, ["register:0:8"]]
- 005b8efc ["INT_ADD", "register:40f0:8", ["const:5b8efc:8", "const:4:8"]]
- 005b8efc ["CALL", null, ["callee:00c54d90:8"]]
+ 005b92ac ["INT_ADD", "register:40f0:8", ["const:5b92ac:8", "const:4:8"]]
+ 005b92ac ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-6ef8f43a37698a77c20968e2c133e343"></a>

### [`005b8fa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b8fa4.md) → [`005b9354`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b9354.md) FUN_005b9354

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005b8fc0 ["INT_ADD", "register:40f0:8", ["const:5b8fc0:8", "const:4:8"]]
- 005b8fc0 ["CALL", null, ["callee:00c54d90:8"]]
+ 005b9370 ["INT_ADD", "register:40f0:8", ["const:5b9370:8", "const:4:8"]]
+ 005b9370 ["CALL", null, ["callee:00c54d90:8"]]
- 005b8fe0 ["COPY", "register:0:8", ["register:4040:8"]]
- 005b8fe0 ["INT_ADD", "register:40f0:8", ["const:5b8fe0:8", "const:4:8"]]
- 005b8fe0 ["CALLIND", null, ["register:0:8"]]
+ 005b9390 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005b9390 ["INT_ADD", "register:40f0:8", ["const:5b9390:8", "const:4:8"]]
+ 005b9390 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-4dc510afa9aabec027fb84fb430a4562"></a>

### [`005b9390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9390.md) → [`005b9740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b9740.md) FUN_005b9740

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005b93ac ["INT_ADD", "register:40f0:8", ["const:5b93ac:8", "const:4:8"]]
- 005b93ac ["CALL", null, ["callee:0045a0d4:8"]]
+ 005b975c ["INT_ADD", "register:40f0:8", ["const:5b975c:8", "const:4:8"]]
+ 005b975c ["CALL", null, ["callee:0045a0d4:8"]]
~~~


<a id="compare-412795ae69bbf9b130a46a55eb816d0b"></a>

### [`005b9a4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9a4c.md) → [`005b9dfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b9dfc.md) FUN_005b9dfc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 3件 [`00480d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480d88.md) [`00480e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480e68.md) [`004810d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/004810d8.md)
- 新版 呼出元 1件 [`00a2c310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a2c/00a2c310.md) · 呼出先 3件 [`004810a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/004810a8.md) [`00481188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/00481188.md) [`004813f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/004813f8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005b9a6c ["INT_ADD", "register:40f0:8", ["const:5b9a6c:8", "const:4:8"]]
- 005b9a6c ["CALL", null, ["callee:004810a8:8"]]
+ 005b9e1c ["INT_ADD", "register:40f0:8", ["const:5b9e1c:8", "const:4:8"]]
+ 005b9e1c ["CALL", null, ["callee:004810a8:8"]]
- 005b9a78 ["INT_ADD", "register:40f0:8", ["const:5b9a78:8", "const:4:8"]]
- 005b9a78 ["CALL", null, ["callee:00481188:8"]]
+ 005b9e28 ["INT_ADD", "register:40f0:8", ["const:5b9e28:8", "const:4:8"]]
+ 005b9e28 ["CALL", null, ["callee:00481188:8"]]
~~~


<a id="compare-237cc10a2deaa6762b17dfde0a2ee067"></a>

### [`005b9a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9a90.md) → [`005b9e40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b9/005b9e40.md) FUN_005b9e40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 3件 [`00480338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480338.md) [`00480430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480430.md) [`00480784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480784.md)
- 新版 呼出元 1件 [`00a271bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a27/00a271bc.md) · 呼出先 3件 [`00480658`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480658.md) [`00480750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480750.md) [`00480aa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480aa4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005b9aa8 ["INT_ADD", "register:40f0:8", ["const:5b9aa8:8", "const:4:8"]]
- 005b9aa8 ["CALL", null, ["callee:00480658:8"]]
+ 005b9e58 ["INT_ADD", "register:40f0:8", ["const:5b9e58:8", "const:4:8"]]
+ 005b9e58 ["CALL", null, ["callee:00480658:8"]]
- 005b9ab8 ["INT_ADD", "register:40f0:8", ["const:5b9ab8:8", "const:4:8"]]
- 005b9ab8 ["CALL", null, ["callee:00480750:8"]]
+ 005b9e68 ["INT_ADD", "register:40f0:8", ["const:5b9e68:8", "const:4:8"]]
+ 005b9e68 ["CALL", null, ["callee:00480750:8"]]
- 005b9ac4 ["INT_ADD", "register:40f0:8", ["const:5b9ac4:8", "const:4:8"]]
- 005b9ac4 ["CALL", null, ["callee:00480aa4:8"]]
+ 005b9e74 ["INT_ADD", "register:40f0:8", ["const:5b9e74:8", "const:4:8"]]
+ 005b9e74 ["CALL", null, ["callee:00480aa4:8"]]
~~~


<a id="compare-60bfc33ee0cf4412f43c40642cc6e69a"></a>

### [`005ba748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005ba748.md) → [`005baaf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ba/005baaf8.md) FUN_005baaf8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005ba768 ["INT_ADD", "register:40f0:8", ["const:5ba768:8", "const:4:8"]]
- 005ba768 ["CALL", null, ["callee:00c54d90:8"]]
+ 005bab18 ["INT_ADD", "register:40f0:8", ["const:5bab18:8", "const:4:8"]]
+ 005bab18 ["CALL", null, ["callee:00c54d90:8"]]
- 005ba780 ["INT_ADD", "register:40f0:8", ["const:5ba780:8", "const:4:8"]]
- 005ba780 ["CALL", null, ["callee:00c54d90:8"]]
+ 005bab30 ["INT_ADD", "register:40f0:8", ["const:5bab30:8", "const:4:8"]]
+ 005bab30 ["CALL", null, ["callee:00c54d90:8"]]
- 005ba7a0 ["COPY", "register:0:8", ["register:4040:8"]]
- 005ba7a0 ["INT_ADD", "register:40f0:8", ["const:5ba7a0:8", "const:4:8"]]
- 005ba7a0 ["CALLIND", null, ["register:0:8"]]
+ 005bab50 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005bab50 ["INT_ADD", "register:40f0:8", ["const:5bab50:8", "const:4:8"]]
+ 005bab50 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ad4d1b979665f2ca7bff83508ce23af3"></a>

### [`005bae34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005bae34.md) → [`005bb1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bb/005bb1e4.md) FUN_005bb1e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`005ba7d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005ba7d8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58620`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58620.md)
- 新版 呼出元 0件  · 呼出先 3件 [`005bab88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ba/005bab88.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c595f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c595f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005bae58 ["INT_ADD", "register:40f0:8", ["const:5bae58:8", "const:4:8"]]
- 005bae58 ["CALL", null, ["callee:005bab88:8"]]
+ 005bb208 ["INT_ADD", "register:40f0:8", ["const:5bb208:8", "const:4:8"]]
+ 005bb208 ["CALL", null, ["callee:005bab88:8"]]
- 005bae60 ["INT_ADD", "register:40f0:8", ["const:5bae60:8", "const:4:8"]]
- 005bae60 ["CALL", null, ["callee:00c595f0:8"]]
+ 005bb210 ["INT_ADD", "register:40f0:8", ["const:5bb210:8", "const:4:8"]]
+ 005bb210 ["CALL", null, ["callee:00c595f0:8"]]
- 005baed4 ["INT_ADD", "register:40f0:8", ["const:5baed4:8", "const:4:8"]]
- 005baed4 ["CALL", null, ["callee:00c58f80:8"]]
+ 005bb284 ["INT_ADD", "register:40f0:8", ["const:5bb284:8", "const:4:8"]]
+ 005bb284 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-d068b0da0797665be208402dd40b4d6c"></a>

### [`005c0e04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c0/005c0e04.md) → [`005c11b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c11b4.md) FUN_005c11b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 2件 [`00480b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480b78.md) [`00480bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480bd0.md)
- 新版 呼出元 1件 [`00a2c310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a2c/00a2c310.md) · 呼出先 2件 [`00480e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480e98.md) [`00480ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480ef0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005c0e2c ["INT_ADD", "register:40f0:8", ["const:5c0e2c:8", "const:4:8"]]
- 005c0e2c ["CALL", null, ["callee:00480e98:8"]]
+ 005c11dc ["INT_ADD", "register:40f0:8", ["const:5c11dc:8", "const:4:8"]]
+ 005c11dc ["CALL", null, ["callee:00480e98:8"]]
- 005c0e64 ["INT_ADD", "register:40f0:8", ["const:5c0e64:8", "const:4:8"]]
- 005c0e64 ["CALL", null, ["callee:00480e98:8"]]
+ 005c1214 ["INT_ADD", "register:40f0:8", ["const:5c1214:8", "const:4:8"]]
+ 005c1214 ["CALL", null, ["callee:00480e98:8"]]
- 005c0e78 ["INT_ADD", "register:40f0:8", ["const:5c0e78:8", "const:4:8"]]
- 005c0e78 ["CALL", null, ["callee:00480e98:8"]]
+ 005c1228 ["INT_ADD", "register:40f0:8", ["const:5c1228:8", "const:4:8"]]
+ 005c1228 ["CALL", null, ["callee:00480e98:8"]]
~~~


<a id="compare-fdbeaa203cdeaa3cf5f4d8bd11bdff6f"></a>

### [`005c1cc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1cc4.md) → [`005c2074`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2074.md) FUN_005c2074

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) [`005c1cc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1cc4.md) · 呼出先 2件 [`005c1cc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1cc4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`005bcbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bcbbc.md) [`005c2074`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2074.md) · 呼出先 2件 [`005c2074`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2074.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 94.12% / 新版 94.12%

~~~diff
- 005c1cd0 ["COPY", "register:40e8:8", ["register:8:8"]]
- 005c1ce4 ["INT_ADD", "register:40f0:8", ["const:5c1ce4:8", "const:4:8"]]
- 005c1ce4 ["CALL", null, ["local:b0:8"]]
+ 005c2094 ["INT_ADD", "register:40f0:8", ["const:5c2094:8", "const:4:8"]]
+ 005c2094 ["CALL", null, ["local:b0:8"]]
- 005c1cf0 ["INT_ADD", "register:40f0:8", ["const:5c1cf0:8", "const:4:8"]]
- 005c1cf0 ["CALL", null, ["local:b0:8"]]
+ 005c20a0 ["INT_ADD", "register:40f0:8", ["const:5c20a0:8", "const:4:8"]]
+ 005c20a0 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-01b3be03f43ac8c1860bf87ed7e0d108"></a>

### [`005cec5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005cec5c.md) → [`005cf00c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cf00c.md) FUN_005cf00c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`005ce50c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce50c.md) [`005ce5ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce5ac.md) [`005d58ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d58ac.md) · 呼出先 3件 [`005d4b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d4/005d4b88.md) [`005d4cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d4/005d4cc8.md) [`005d4d14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d4/005d4d14.md)
- 新版 呼出元 3件 [`005ce8bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce8bc.md) [`005ce95c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce95c.md) [`005d5c5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d5c5c.md) · 呼出先 3件 [`005d4f38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d4/005d4f38.md) [`005d5078`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d5078.md) [`005d50c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d50c4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005cefa0 ["INT_ADD", "register:40f0:8", ["const:5cefa0:8", "const:4:8"]]
- 005cefa0 ["CALL", null, ["callee:005d4f38:8"]]
+ 005cf350 ["INT_ADD", "register:40f0:8", ["const:5cf350:8", "const:4:8"]]
+ 005cf350 ["CALL", null, ["callee:005d4f38:8"]]
- 005cefb4 ["INT_ADD", "register:40f0:8", ["const:5cefb4:8", "const:4:8"]]
- 005cefb4 ["CALL", null, ["callee:005d5078:8"]]
+ 005cf364 ["INT_ADD", "register:40f0:8", ["const:5cf364:8", "const:4:8"]]
+ 005cf364 ["CALL", null, ["callee:005d5078:8"]]
- 005cefb8 ["INT_ADD", "register:40f0:8", ["const:5cefb8:8", "const:4:8"]]
- 005cefb8 ["CALL", null, ["callee:005d50c4:8"]]
+ 005cf368 ["INT_ADD", "register:40f0:8", ["const:5cf368:8", "const:4:8"]]
+ 005cf368 ["CALL", null, ["callee:005d50c4:8"]]
~~~


<a id="compare-08d5de3823d5b3068cda627f05e2422d"></a>

### [`005cf548`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf548.md) → [`005cf8f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cf8f8.md) FUN_005cf8f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`005cf700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf700.md) [`005cfb74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cfb74.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`005cfab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cfab0.md) [`005cff24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cff24.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005cf5b0 ["INT_ADD", "register:40f0:8", ["const:5cf5b0:8", "const:4:8"]]
- 005cf5b0 ["CALL", null, ["callee:005cff24:8"]]
+ 005cf960 ["INT_ADD", "register:40f0:8", ["const:5cf960:8", "const:4:8"]]
+ 005cf960 ["CALL", null, ["callee:005cff24:8"]]
- 005cf600 ["INT_ADD", "register:40f0:8", ["const:5cf600:8", "const:4:8"]]
- 005cf600 ["CALL", null, ["callee:005cfab0:8"]]
+ 005cf9b0 ["INT_ADD", "register:40f0:8", ["const:5cf9b0:8", "const:4:8"]]
+ 005cf9b0 ["CALL", null, ["callee:005cfab0:8"]]
- 005cf6a4 ["INT_ADD", "register:40f0:8", ["const:5cf6a4:8", "const:4:8"]]
- 005cf6a4 ["CALL", null, ["callee:00c58f50:8"]]
+ 005cfa54 ["INT_ADD", "register:40f0:8", ["const:5cfa54:8", "const:4:8"]]
+ 005cfa54 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-e8f47b80bdc5d26ad88a2259b4043984"></a>

### [`005cfd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cfd50.md) → [`005d0100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0100.md) FUN_005d0100

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005d6a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d6/005d6a30.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005d6de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d6/005d6de0.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005cfd6c ["INT_ADD", "register:40f0:8", ["const:5cfd6c:8", "const:4:8"]]
- 005cfd6c ["CALL", null, ["callee:00c58f50:8"]]
+ 005d011c ["INT_ADD", "register:40f0:8", ["const:5d011c:8", "const:4:8"]]
+ 005d011c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-1c4f1ffb9d948bea0601d5e203071fa4"></a>

### [`005cfde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cfde0.md) → [`005d0190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0190.md) FUN_005d0190

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`005cf700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf700.md) [`005d6150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d6/005d6150.md) [`005d6a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d6/005d6a30.md) · 呼出先 6件 [`005cfd3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cfd3c.md) [`005d067c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d067c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`005cfab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cfab0.md) [`005d6500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d6/005d6500.md) [`005d6de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d6/005d6de0.md) · 呼出先 6件 [`005d00ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d00ec.md) [`005d0a2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0a2c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005cfe48 ["INT_ADD", "register:40f0:8", ["const:5cfe48:8", "const:4:8"]]
- 005cfe48 ["CALL", null, ["callee:00c58f30:8"]]
+ 005d01f8 ["INT_ADD", "register:40f0:8", ["const:5d01f8:8", "const:4:8"]]
+ 005d01f8 ["CALL", null, ["callee:00c58f30:8"]]
- 005cfe84 ["INT_ADD", "register:40f0:8", ["const:5cfe84:8", "const:4:8"]]
- 005cfe84 ["CALL", null, ["callee:00c590a0:8"]]
+ 005d0234 ["INT_ADD", "register:40f0:8", ["const:5d0234:8", "const:4:8"]]
+ 005d0234 ["CALL", null, ["callee:00c590a0:8"]]
- 005cfeb0 ["INT_ADD", "register:40f0:8", ["const:5cfeb0:8", "const:4:8"]]
- 005cfeb0 ["CALL", null, ["callee:00c58f30:8"]]
+ 005d0260 ["INT_ADD", "register:40f0:8", ["const:5d0260:8", "const:4:8"]]
+ 005d0260 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-08997ef30166f91aee28e4393e06ce11"></a>

### [`005cffa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cffa4.md) → [`005d0354`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0354.md) FUN_005d0354

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`005cf700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf700.md) [`005d6a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d6/005d6a30.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`005cfab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cfab0.md) [`005d6de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d6/005d6de0.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005cffec ["INT_ADD", "register:40f0:8", ["const:5cffec:8", "const:4:8"]]
- 005cffec ["CALL", null, ["callee:00c58f50:8"]]
+ 005d039c ["INT_ADD", "register:40f0:8", ["const:5d039c:8", "const:4:8"]]
+ 005d039c ["CALL", null, ["callee:00c58f50:8"]]
- 005cfffc ["INT_ADD", "register:40f0:8", ["const:5cfffc:8", "const:4:8"]]
- 005cfffc ["CALL", null, ["callee:00c58f50:8"]]
+ 005d03ac ["INT_ADD", "register:40f0:8", ["const:5d03ac:8", "const:4:8"]]
+ 005d03ac ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-2aace37df52c5694811b6b6e45397d7c"></a>

### [`005d002c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d002c.md) → [`005d03dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d03dc.md) FUN_005d03dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`005cf700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf700.md) [`005d6a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d6/005d6a30.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`005d0210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0210.md) [`005d03b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d03b0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`005cfab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cfab0.md) [`005d6de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d6/005d6de0.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`005d05c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d05c0.md) [`005d0760`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0760.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005d00cc ["INT_ADD", "register:40f0:8", ["const:5d00cc:8", "const:4:8"]]
- 005d00cc ["CALL", null, ["callee:00c58f30:8"]]
+ 005d047c ["INT_ADD", "register:40f0:8", ["const:5d047c:8", "const:4:8"]]
+ 005d047c ["CALL", null, ["callee:00c58f30:8"]]
- 005d013c ["INT_ADD", "register:40f0:8", ["const:5d013c:8", "const:4:8"]]
- 005d013c ["CALL", null, ["callee:005d05c0:8"]]
+ 005d04ec ["INT_ADD", "register:40f0:8", ["const:5d04ec:8", "const:4:8"]]
+ 005d04ec ["CALL", null, ["callee:005d05c0:8"]]
- 005d016c ["INT_ADD", "register:40f0:8", ["const:5d016c:8", "const:4:8"]]
- 005d016c ["CALL", null, ["callee:00c58f50:8"]]
+ 005d051c ["INT_ADD", "register:40f0:8", ["const:5d051c:8", "const:4:8"]]
+ 005d051c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-41c4b66b2506a66b966bcfe3b79e0ead"></a>

### [`005d0210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0210.md) → [`005d05c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d05c0.md) FUN_005d05c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005d002c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d002c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005d03dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d03dc.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005d02d0 ["INT_ADD", "register:40f0:8", ["const:5d02d0:8", "const:4:8"]]
- 005d02d0 ["CALL", null, ["callee:00c58f50:8"]]
+ 005d0680 ["INT_ADD", "register:40f0:8", ["const:5d0680:8", "const:4:8"]]
+ 005d0680 ["CALL", null, ["callee:00c58f50:8"]]
- 005d02e0 ["INT_ADD", "register:40f0:8", ["const:5d02e0:8", "const:4:8"]]
- 005d02e0 ["CALL", null, ["callee:00c58f50:8"]]
+ 005d0690 ["INT_ADD", "register:40f0:8", ["const:5d0690:8", "const:4:8"]]
+ 005d0690 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-55411035020e2e8f1b8371fe3bde1ed1"></a>

### [`005d0334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0334.md) → [`005d06e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d06e4.md) FUN_005d06e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005d0370 ["INT_ADD", "register:40f0:8", ["const:5d0370:8", "const:4:8"]]
- 005d0370 ["CALL", null, ["callee:00c58f50:8"]]
+ 005d0720 ["INT_ADD", "register:40f0:8", ["const:5d0720:8", "const:4:8"]]
+ 005d0720 ["CALL", null, ["callee:00c58f50:8"]]
- 005d0380 ["INT_ADD", "register:40f0:8", ["const:5d0380:8", "const:4:8"]]
- 005d0380 ["CALL", null, ["callee:00c58f50:8"]]
+ 005d0730 ["INT_ADD", "register:40f0:8", ["const:5d0730:8", "const:4:8"]]
+ 005d0730 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-9692643dcf68b8c1af7e986972416560"></a>

### [`005d03c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d03c4.md) → [`005d0774`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0774.md) FUN_005d0774

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`005cf700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf700.md) [`005d6a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d6/005d6a30.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`005cfd3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cfd3c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 2件 [`005cfab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cfab0.md) [`005d6de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d6/005d6de0.md) · 呼出先 5件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`005d00ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d00ec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005d046c ["INT_ADD", "register:40f0:8", ["const:5d046c:8", "const:4:8"]]
- 005d046c ["CALL", null, ["callee:00c58f30:8"]]
+ 005d081c ["INT_ADD", "register:40f0:8", ["const:5d081c:8", "const:4:8"]]
+ 005d081c ["CALL", null, ["callee:00c58f30:8"]]
- 005d0508 ["INT_ADD", "register:40f0:8", ["const:5d0508:8", "const:4:8"]]
- 005d0508 ["CALL", null, ["callee:00c590a0:8"]]
+ 005d08b8 ["INT_ADD", "register:40f0:8", ["const:5d08b8:8", "const:4:8"]]
+ 005d08b8 ["CALL", null, ["callee:00c590a0:8"]]
- 005d0548 ["INT_ADD", "register:40f0:8", ["const:5d0548:8", "const:4:8"]]
- 005d0548 ["CALL", null, ["callee:005d00ec:8"]]
+ 005d08f8 ["INT_ADD", "register:40f0:8", ["const:5d08f8:8", "const:4:8"]]
+ 005d08f8 ["CALL", null, ["callee:005d00ec:8"]]
~~~


<a id="compare-550863c4f7e65974eb5996fd0663f396"></a>

### [`005d0550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0550.md) → [`005d0900`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0900.md) FUN_005d0900

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`005cf700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf700.md) [`005d6150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d6/005d6150.md) [`005d6a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d6/005d6a30.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`005d067c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d067c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 3件 [`005cfab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cfab0.md) [`005d6500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d6/005d6500.md) [`005d6de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d6/005d6de0.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`005d0a2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0a2c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005d05c8 ["INT_ADD", "register:40f0:8", ["const:5d05c8:8", "const:4:8"]]
- 005d05c8 ["CALL", null, ["callee:00c58f30:8"]]
+ 005d0978 ["INT_ADD", "register:40f0:8", ["const:5d0978:8", "const:4:8"]]
+ 005d0978 ["CALL", null, ["callee:00c58f30:8"]]
- 005d05ec ["INT_ADD", "register:40f0:8", ["const:5d05ec:8", "const:4:8"]]
- 005d05ec ["CALL", null, ["callee:00c59130:8"]]
+ 005d099c ["INT_ADD", "register:40f0:8", ["const:5d099c:8", "const:4:8"]]
+ 005d099c ["CALL", null, ["callee:00c59130:8"]]
- 005d0618 ["INT_ADD", "register:40f0:8", ["const:5d0618:8", "const:4:8"]]
- 005d0618 ["CALL", null, ["callee:00c59130:8"]]
+ 005d09c8 ["INT_ADD", "register:40f0:8", ["const:5d09c8:8", "const:4:8"]]
+ 005d09c8 ["CALL", null, ["callee:00c59130:8"]]
~~~


<a id="compare-e8d6fdd136c68198629bba3fc642cede"></a>

### [`005d0690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0690.md) → [`005d0a40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0a40.md) FUN_005d0a40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`005ce9a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce9a4.md) [`005d5688`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d5688.md) [`005d5aa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d5aa8.md) · 呼出先 7件 [`005d17e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d17e4.md) [`005d1940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1940.md) [`005d2bf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d2/005d2bf8.md) [`005d2c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d2/005d2c44.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)
- 新版 呼出元 3件 [`005ced54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ced54.md) [`005d5a38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d5a38.md) [`005d5e58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d5e58.md) · 呼出先 7件 [`005d1b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d1b94.md) [`005d1cf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d1cf0.md) [`005d2fa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d2/005d2fa8.md) [`005d2ff4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d2/005d2ff4.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005d06e4 ["INT_ADD", "register:40f0:8", ["const:5d06e4:8", "const:4:8"]]
- 005d06e4 ["CALL", null, ["callee:00c58f30:8"]]
+ 005d0a94 ["INT_ADD", "register:40f0:8", ["const:5d0a94:8", "const:4:8"]]
+ 005d0a94 ["CALL", null, ["callee:00c58f30:8"]]
- 005d0708 ["INT_ADD", "register:40f0:8", ["const:5d0708:8", "const:4:8"]]
- 005d0708 ["CALL", null, ["callee:005d1cf0:8"]]
+ 005d0ab8 ["INT_ADD", "register:40f0:8", ["const:5d0ab8:8", "const:4:8"]]
+ 005d0ab8 ["CALL", null, ["callee:005d1cf0:8"]]
- 005d0744 ["INT_ADD", "register:40f0:8", ["const:5d0744:8", "const:4:8"]]
- 005d0744 ["CALL", null, ["callee:005d1b94:8"]]
+ 005d0af4 ["INT_ADD", "register:40f0:8", ["const:5d0af4:8", "const:4:8"]]
+ 005d0af4 ["CALL", null, ["callee:005d1b94:8"]]
~~~


<a id="compare-042896a61f2ea9b67aa767aab1b087a4"></a>

### [`005d0830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0830.md) → [`005d0be0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0be0.md) FUN_005d0be0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005ce9a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce9a4.md) · 呼出先 1件 [`005d0ef8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0ef8.md)
- 新版 呼出元 1件 [`005ced54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ced54.md) · 呼出先 1件 [`005d12a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d12a8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005d0880 ["INT_ADD", "register:40f0:8", ["const:5d0880:8", "const:4:8"]]
- 005d0880 ["CALL", null, ["callee:005d12a8:8"]]
+ 005d0c30 ["INT_ADD", "register:40f0:8", ["const:5d0c30:8", "const:4:8"]]
+ 005d0c30 ["CALL", null, ["callee:005d12a8:8"]]
~~~


<a id="compare-853c4a10ecfe2cfce97405221e126930"></a>

### [`005d092c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d092c.md) → [`005d0cdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0cdc.md) FUN_005d0cdc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005ce9a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce9a4.md) · 呼出先 3件 [`005d0ef8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0ef8.md) [`005d1038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1038.md) [`005d1084`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1084.md)
- 新版 呼出元 1件 [`005ced54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ced54.md) · 呼出先 3件 [`005d12a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d12a8.md) [`005d13e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d13e8.md) [`005d1434`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d1434.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005d0950 ["INT_ADD", "register:40f0:8", ["const:5d0950:8", "const:4:8"]]
- 005d0950 ["CALL", null, ["callee:005d12a8:8"]]
+ 005d0d00 ["INT_ADD", "register:40f0:8", ["const:5d0d00:8", "const:4:8"]]
+ 005d0d00 ["CALL", null, ["callee:005d12a8:8"]]
- 005d09dc ["INT_ADD", "register:40f0:8", ["const:5d09dc:8", "const:4:8"]]
- 005d09dc ["CALL", null, ["callee:005d1434:8"]]
+ 005d0d8c ["INT_ADD", "register:40f0:8", ["const:5d0d8c:8", "const:4:8"]]
+ 005d0d8c ["CALL", null, ["callee:005d1434:8"]]
- 005d09f0 ["INT_ADD", "register:40f0:8", ["const:5d09f0:8", "const:4:8"]]
- 005d09f0 ["CALL", null, ["callee:005d13e8:8"]]
+ 005d0da0 ["INT_ADD", "register:40f0:8", ["const:5d0da0:8", "const:4:8"]]
+ 005d0da0 ["CALL", null, ["callee:005d13e8:8"]]
~~~


<a id="compare-1ab908617143972278a9182decbc739c"></a>

### [`005d09f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d09f4.md) → [`005d0da4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0da4.md) FUN_005d0da4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005ce9a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce9a4.md) · 呼出先 3件 [`005d17e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d17e4.md) [`005d1940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1940.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`005ced54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ced54.md) · 呼出先 3件 [`005d1b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d1b94.md) [`005d1cf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d1cf0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005d0a3c ["INT_ADD", "register:40f0:8", ["const:5d0a3c:8", "const:4:8"]]
- 005d0a3c ["CALL", null, ["callee:00c58f30:8"]]
+ 005d0dec ["INT_ADD", "register:40f0:8", ["const:5d0dec:8", "const:4:8"]]
+ 005d0dec ["CALL", null, ["callee:00c58f30:8"]]
- 005d0a60 ["INT_ADD", "register:40f0:8", ["const:5d0a60:8", "const:4:8"]]
- 005d0a60 ["CALL", null, ["callee:005d1cf0:8"]]
+ 005d0e10 ["INT_ADD", "register:40f0:8", ["const:5d0e10:8", "const:4:8"]]
+ 005d0e10 ["CALL", null, ["callee:005d1cf0:8"]]
- 005d0a84 ["INT_ADD", "register:40f0:8", ["const:5d0a84:8", "const:4:8"]]
- 005d0a84 ["CALL", null, ["callee:00c58f30:8"]]
+ 005d0e34 ["INT_ADD", "register:40f0:8", ["const:5d0e34:8", "const:4:8"]]
+ 005d0e34 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-d2ee6ddf014a0e9523314f5b8a38dbb2"></a>

### [`005d1ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1ccc.md) → [`005d207c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d2/005d207c.md) FUN_005d207c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005d1b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1b88.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005d1f38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d1f38.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 88.89% / 新版 88.89%

~~~diff
- 005d1cd4 ["COPY", "register:40e8:8", ["register:8:8"]]
- 005d1cdc ["INT_ADD", "register:40f0:8", ["const:5d1cdc:8", "const:4:8"]]
- 005d1cdc ["CALL", null, ["callee:005d1f38:8"]]
+ 005d208c ["INT_ADD", "register:40f0:8", ["const:5d208c:8", "const:4:8"]]
+ 005d208c ["CALL", null, ["callee:005d1f38:8"]]
+ 005d2084 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-bc1960824fedf21f6e5fc58ef0537195"></a>

### [`005d2650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d2/005d2650.md) → [`005d2a00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d2/005d2a00.md) FUN_005d2a00

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005d1cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1cf0.md) · 呼出先 5件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`005d20a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d2/005d20a0.md) · 呼出先 5件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005d26d4 ["INT_ADD", "register:40f0:8", ["const:5d26d4:8", "const:4:8"]]
- 005d26d4 ["CALL", null, ["callee:00c58f30:8"]]
+ 005d2a84 ["INT_ADD", "register:40f0:8", ["const:5d2a84:8", "const:4:8"]]
+ 005d2a84 ["CALL", null, ["callee:00c58f30:8"]]
- 005d26fc ["INT_ADD", "register:40f0:8", ["const:5d26fc:8", "const:4:8"]]
- 005d26fc ["CALL", null, ["callee:00c590a0:8"]]
+ 005d2aac ["INT_ADD", "register:40f0:8", ["const:5d2aac:8", "const:4:8"]]
+ 005d2aac ["CALL", null, ["callee:00c590a0:8"]]
- 005d2738 ["COPY", "register:0:8", ["register:4048:8"]]
- 005d2738 ["INT_ADD", "register:40f0:8", ["const:5d2738:8", "const:4:8"]]
- 005d2738 ["CALLIND", null, ["register:0:8"]]
+ 005d2ae8 ["COPY", "register:0:8", ["register:4048:8"]]
+ 005d2ae8 ["INT_ADD", "register:40f0:8", ["const:5d2ae8:8", "const:4:8"]]
+ 005d2ae8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-474290e5255e97b928374a0dddd6e485"></a>

### [`005d27c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d2/005d27c0.md) → [`005d2b70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d2/005d2b70.md) FUN_005d2b70

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005d1cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1cf0.md) · 呼出先 7件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`005d20a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d2/005d20a0.md) · 呼出先 7件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005d2844 ["INT_ADD", "register:40f0:8", ["const:5d2844:8", "const:4:8"]]
- 005d2844 ["CALL", null, ["callee:00c58f30:8"]]
+ 005d2bf4 ["INT_ADD", "register:40f0:8", ["const:5d2bf4:8", "const:4:8"]]
+ 005d2bf4 ["CALL", null, ["callee:00c58f30:8"]]
- 005d286c ["INT_ADD", "register:40f0:8", ["const:5d286c:8", "const:4:8"]]
- 005d286c ["CALL", null, ["callee:00c590a0:8"]]
+ 005d2c1c ["INT_ADD", "register:40f0:8", ["const:5d2c1c:8", "const:4:8"]]
+ 005d2c1c ["CALL", null, ["callee:00c590a0:8"]]
- 005d28ac ["INT_ADD", "register:40f0:8", ["const:5d28ac:8", "const:4:8"]]
- 005d28ac ["CALL", null, ["callee:00c5b8a0:8"]]
+ 005d2c5c ["INT_ADD", "register:40f0:8", ["const:5d2c5c:8", "const:4:8"]]
+ 005d2c5c ["CALL", null, ["callee:00c5b8a0:8"]]
~~~


<a id="compare-1b0b3d4a8db11c7ec0fbdc7e40a8a626"></a>

### [`005d2a24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d2/005d2a24.md) → [`005d2dd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d2/005d2dd4.md) FUN_005d2dd4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005d1cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1cf0.md) · 呼出先 5件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`005d20a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d2/005d20a0.md) · 呼出先 5件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005d2aa8 ["INT_ADD", "register:40f0:8", ["const:5d2aa8:8", "const:4:8"]]
- 005d2aa8 ["CALL", null, ["callee:00c58f30:8"]]
+ 005d2e58 ["INT_ADD", "register:40f0:8", ["const:5d2e58:8", "const:4:8"]]
+ 005d2e58 ["CALL", null, ["callee:00c58f30:8"]]
- 005d2ad0 ["INT_ADD", "register:40f0:8", ["const:5d2ad0:8", "const:4:8"]]
- 005d2ad0 ["CALL", null, ["callee:00c590a0:8"]]
+ 005d2e80 ["INT_ADD", "register:40f0:8", ["const:5d2e80:8", "const:4:8"]]
+ 005d2e80 ["CALL", null, ["callee:00c590a0:8"]]
- 005d2b0c ["COPY", "register:0:8", ["register:4048:8"]]
- 005d2b0c ["INT_ADD", "register:40f0:8", ["const:5d2b0c:8", "const:4:8"]]
- 005d2b0c ["CALLIND", null, ["register:0:8"]]
+ 005d2ebc ["COPY", "register:0:8", ["register:4048:8"]]
+ 005d2ebc ["INT_ADD", "register:40f0:8", ["const:5d2ebc:8", "const:4:8"]]
+ 005d2ebc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-966bdd2609458ea7f4a005d96f9668c5"></a>

### [`005d2c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d2/005d2c44.md) → [`005d2ff4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d2/005d2ff4.md) FUN_005d2ff4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005d0690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0690.md) · 呼出先 14件 [`005d17e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d17e4.md) [`005d2bf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d2/005d2bf8.md) [`005d3114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d3114.md) [`005d33a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d33a0.md) [`005d34bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d34bc.md)
- 新版 呼出元 1件 [`005d0a40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0a40.md) · 呼出先 14件 [`005d1b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d1b94.md) [`005d2fa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d2/005d2fa8.md) [`005d34c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d3/005d34c4.md) [`005d3750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d3/005d3750.md) [`005d386c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d3/005d386c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005d2ce0 ["INT_ADD", "register:40f0:8", ["const:5d2ce0:8", "const:4:8"]]
- 005d2ce0 ["CALL", null, ["callee:005d34c4:8"]]
+ 005d3090 ["INT_ADD", "register:40f0:8", ["const:5d3090:8", "const:4:8"]]
+ 005d3090 ["CALL", null, ["callee:005d34c4:8"]]
- 005d2d4c ["INT_ADD", "register:40f0:8", ["const:5d2d4c:8", "const:4:8"]]
- 005d2d4c ["CALL", null, ["callee:005d3750:8"]]
+ 005d30fc ["INT_ADD", "register:40f0:8", ["const:5d30fc:8", "const:4:8"]]
+ 005d30fc ["CALL", null, ["callee:005d3750:8"]]
- 005d2dac ["INT_ADD", "register:40f0:8", ["const:5d2dac:8", "const:4:8"]]
- 005d2dac ["CALL", null, ["callee:005d3990:8"]]
+ 005d315c ["INT_ADD", "register:40f0:8", ["const:5d315c:8", "const:4:8"]]
+ 005d315c ["CALL", null, ["callee:005d3990:8"]]
~~~


<a id="compare-335bb4b313b48a88f48e8b9143a704e0"></a>

### [`005d3114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d3114.md) → [`005d34c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d3/005d34c4.md) FUN_005d34c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005d2c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d2/005d2c44.md) · 呼出先 11件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00540dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/00540dbc.md) [`005d17e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d17e4.md) [`005d2bf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d2/005d2bf8.md) [`005d3c98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d3c98.md)
- 新版 呼出元 1件 [`005d2ff4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d2/005d2ff4.md) · 呼出先 11件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`005410dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00541/005410dc.md) [`005d1b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d1b94.md) [`005d2fa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d2/005d2fa8.md) [`005d4048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d4/005d4048.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005d31a4 ["INT_ADD", "register:40f0:8", ["const:5d31a4:8", "const:4:8"]]
- 005d31a4 ["CALL", null, ["callee:005d42a0:8"]]
+ 005d3554 ["INT_ADD", "register:40f0:8", ["const:5d3554:8", "const:4:8"]]
+ 005d3554 ["CALL", null, ["callee:005d42a0:8"]]
- 005d31dc ["INT_ADD", "register:40f0:8", ["const:5d31dc:8", "const:4:8"]]
- 005d31dc ["CALL", null, ["callee:005d4504:8"]]
+ 005d358c ["INT_ADD", "register:40f0:8", ["const:5d358c:8", "const:4:8"]]
+ 005d358c ["CALL", null, ["callee:005d4504:8"]]
- 005d3258 ["INT_ADD", "register:40f0:8", ["const:5d3258:8", "const:4:8"]]
- 005d3258 ["CALL", null, ["callee:005d1b94:8"]]
+ 005d3608 ["INT_ADD", "register:40f0:8", ["const:5d3608:8", "const:4:8"]]
+ 005d3608 ["CALL", null, ["callee:005d1b94:8"]]
~~~


<a id="compare-8eda9057a6c968345f2761a4130a72ef"></a>

### [`005d33a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d33a0.md) → [`005d3750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d3/005d3750.md) FUN_005d3750

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005d2c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d2/005d2c44.md) · 呼出先 5件 [`005d2bf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d2/005d2bf8.md) [`005d3ea4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d3ea4.md) [`005d3ef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d3ef0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`005d2ff4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d2/005d2ff4.md) · 呼出先 5件 [`005d2fa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d2/005d2fa8.md) [`005d4254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d4/005d4254.md) [`005d42a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d4/005d42a0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005d3420 ["INT_ADD", "register:40f0:8", ["const:5d3420:8", "const:4:8"]]
- 005d3420 ["CALL", null, ["callee:005d42a0:8"]]
+ 005d37d0 ["INT_ADD", "register:40f0:8", ["const:5d37d0:8", "const:4:8"]]
+ 005d37d0 ["CALL", null, ["callee:005d42a0:8"]]
- 005d3430 ["INT_ADD", "register:40f0:8", ["const:5d3430:8", "const:4:8"]]
- 005d3430 ["CALL", null, ["callee:00c58f50:8"]]
+ 005d37e0 ["INT_ADD", "register:40f0:8", ["const:5d37e0:8", "const:4:8"]]
+ 005d37e0 ["CALL", null, ["callee:00c58f50:8"]]
- 005d34a0 ["INT_ADD", "register:40f0:8", ["const:5d34a0:8", "const:4:8"]]
- 005d34a0 ["CALL", null, ["callee:005d2fa8:8"]]
+ 005d3850 ["INT_ADD", "register:40f0:8", ["const:5d3850:8", "const:4:8"]]
+ 005d3850 ["CALL", null, ["callee:005d2fa8:8"]]
~~~


<a id="compare-de8355671e3c9e11b0be598c66c754d6"></a>

### [`005d34bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d34bc.md) → [`005d386c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d3/005d386c.md) FUN_005d386c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005d2c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d2/005d2c44.md) · 呼出先 5件 [`005d08e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d08e0.md) [`005d0bf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0bf8.md) [`005d17e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d17e4.md) [`005d455c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d4/005d455c.md) [`00c5a8b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8b0.md)
- 新版 呼出元 1件 [`005d2ff4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d2/005d2ff4.md) · 呼出先 5件 [`005d0c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0c90.md) [`005d0fa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0fa8.md) [`005d1b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d1b94.md) [`005d490c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d4/005d490c.md) [`00c5b880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b880.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005d354c ["INT_ADD", "register:40f0:8", ["const:5d354c:8", "const:4:8"]]
- 005d354c ["CALL", null, ["callee:005d490c:8"]]
+ 005d38fc ["INT_ADD", "register:40f0:8", ["const:5d38fc:8", "const:4:8"]]
+ 005d38fc ["CALL", null, ["callee:005d490c:8"]]
- 005d3578 ["INT_ADD", "register:40f0:8", ["const:5d3578:8", "const:4:8"]]
- 005d3578 ["CALL", null, ["callee:005d1b94:8"]]
+ 005d3928 ["INT_ADD", "register:40f0:8", ["const:5d3928:8", "const:4:8"]]
+ 005d3928 ["CALL", null, ["callee:005d1b94:8"]]
- 005d3588 ["INT_ADD", "register:40f0:8", ["const:5d3588:8", "const:4:8"]]
- 005d3588 ["CALL", null, ["callee:00c5b880:8"]]
+ 005d3938 ["INT_ADD", "register:40f0:8", ["const:5d3938:8", "const:4:8"]]
+ 005d3938 ["CALL", null, ["callee:00c5b880:8"]]
~~~


<a id="compare-955e65cbf12ba8f86241c022d401ce6c"></a>

### [`005d35e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d35e0.md) → [`005d3990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d3/005d3990.md) FUN_005d3990

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`005d2c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d2/005d2c44.md) [`005d5bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d5bd0.md) · 呼出先 3件 [`005d08e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d08e0.md) [`005d0ef8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0ef8.md) [`00c5a8b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8b0.md)
- 新版 呼出元 2件 [`005d2ff4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d2/005d2ff4.md) [`005d5f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d5f80.md) · 呼出先 3件 [`005d0c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0c90.md) [`005d12a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d12a8.md) [`00c5b880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b880.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005d36dc ["INT_ADD", "register:40f0:8", ["const:5d36dc:8", "const:4:8"]]
- 005d36dc ["CALL", null, ["callee:00c5b880:8"]]
+ 005d3a8c ["INT_ADD", "register:40f0:8", ["const:5d3a8c:8", "const:4:8"]]
+ 005d3a8c ["CALL", null, ["callee:00c5b880:8"]]
- 005d3788 ["INT_ADD", "register:40f0:8", ["const:5d3788:8", "const:4:8"]]
- 005d3788 ["CALL", null, ["callee:005d12a8:8"]]
+ 005d3b38 ["INT_ADD", "register:40f0:8", ["const:5d3b38:8", "const:4:8"]]
+ 005d3b38 ["CALL", null, ["callee:005d12a8:8"]]
- 005d37a0 ["INT_ADD", "register:40f0:8", ["const:5d37a0:8", "const:4:8"]]
- 005d37a0 ["CALL", null, ["callee:00c5b880:8"]]
+ 005d3b50 ["INT_ADD", "register:40f0:8", ["const:5d3b50:8", "const:4:8"]]
+ 005d3b50 ["CALL", null, ["callee:00c5b880:8"]]
~~~


<a id="compare-a0572a3383c9faed2fdf301aba4ea079"></a>

### [`005d37c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d37c8.md) → [`005d3b78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d3/005d3b78.md) FUN_005d3b78

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005d2c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d2/005d2c44.md) · 呼出先 7件 [`004ec298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ec/004ec298.md) [`005d46b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d4/005d46b8.md) [`005d487c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d4/005d487c.md) [`005d48c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d4/005d48c8.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)
- 新版 呼出元 1件 [`005d2ff4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d2/005d2ff4.md) · 呼出先 7件 [`004ec5b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ec/004ec5b8.md) [`005d4a68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d4/005d4a68.md) [`005d4c2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d4/005d4c2c.md) [`005d4c78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d4/005d4c78.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005d3848 ["COPY", "register:0:8", ["register:4040:8"]]
- 005d3848 ["INT_ADD", "register:40f0:8", ["const:5d3848:8", "const:4:8"]]
- 005d3848 ["CALLIND", null, ["register:0:8"]]
+ 005d3bf8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005d3bf8 ["INT_ADD", "register:40f0:8", ["const:5d3bf8:8", "const:4:8"]]
+ 005d3bf8 ["CALLIND", null, ["register:0:8"]]
- 005d38c4 ["COPY", "register:0:8", ["register:4040:8"]]
- 005d38c4 ["INT_ADD", "register:40f0:8", ["const:5d38c4:8", "const:4:8"]]
- 005d38c4 ["CALLIND", null, ["register:0:8"]]
+ 005d3c74 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005d3c74 ["INT_ADD", "register:40f0:8", ["const:5d3c74:8", "const:4:8"]]
+ 005d3c74 ["CALLIND", null, ["register:0:8"]]
- 005d3960 ["COPY", "register:0:8", ["register:4040:8"]]
- 005d3960 ["INT_ADD", "register:40f0:8", ["const:5d3960:8", "const:4:8"]]
- 005d3960 ["CALLIND", null, ["register:0:8"]]
+ 005d3d10 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005d3d10 ["INT_ADD", "register:40f0:8", ["const:5d3d10:8", "const:4:8"]]
+ 005d3d10 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c4f29a8cfb49159b91e6fede594ec47e"></a>

### [`005d3c98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d3c98.md) → [`005d4048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d4/005d4048.md) FUN_005d4048

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`005d2c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d2/005d2c44.md) [`005d3114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d3114.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`005d4a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d4/005d4a7c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 2件 [`005d2ff4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d2/005d2ff4.md) [`005d34c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d3/005d34c4.md) · 呼出先 5件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`005d4e2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d4/005d4e2c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005d3ccc ["COPY", "register:0:8", ["register:4040:8"]]
- 005d3ccc ["INT_ADD", "register:40f0:8", ["const:5d3ccc:8", "const:4:8"]]
- 005d3ccc ["CALLIND", null, ["register:0:8"]]
+ 005d407c ["COPY", "register:0:8", ["register:4040:8"]]
+ 005d407c ["INT_ADD", "register:40f0:8", ["const:5d407c:8", "const:4:8"]]
+ 005d407c ["CALLIND", null, ["register:0:8"]]
- 005d3ce8 ["COPY", "register:0:8", ["register:4048:8"]]
- 005d3ce8 ["INT_ADD", "register:40f0:8", ["const:5d3ce8:8", "const:4:8"]]
- 005d3ce8 ["CALLIND", null, ["register:0:8"]]
+ 005d4098 ["COPY", "register:0:8", ["register:4048:8"]]
+ 005d4098 ["INT_ADD", "register:40f0:8", ["const:5d4098:8", "const:4:8"]]
+ 005d4098 ["CALLIND", null, ["register:0:8"]]
- 005d3da0 ["INT_ADD", "register:40f0:8", ["const:5d3da0:8", "const:4:8"]]
- 005d3da0 ["CALL", null, ["callee:00c58f30:8"]]
+ 005d4150 ["INT_ADD", "register:40f0:8", ["const:5d4150:8", "const:4:8"]]
+ 005d4150 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-1ae553ba5b3392b64b6929c1022b8e01"></a>

### [`005d3ef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d3ef0.md) → [`005d42a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d4/005d42a0.md) FUN_005d42a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`005d3114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d3114.md) [`005d33a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d33a0.md) · 呼出先 7件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 2件 [`005d34c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d3/005d34c4.md) [`005d3750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d3/005d3750.md) · 呼出先 7件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005d3f74 ["INT_ADD", "register:40f0:8", ["const:5d3f74:8", "const:4:8"]]
- 005d3f74 ["CALL", null, ["callee:00c58f30:8"]]
+ 005d4324 ["INT_ADD", "register:40f0:8", ["const:5d4324:8", "const:4:8"]]
+ 005d4324 ["CALL", null, ["callee:00c58f30:8"]]
- 005d3f9c ["INT_ADD", "register:40f0:8", ["const:5d3f9c:8", "const:4:8"]]
- 005d3f9c ["CALL", null, ["callee:00c590a0:8"]]
+ 005d434c ["INT_ADD", "register:40f0:8", ["const:5d434c:8", "const:4:8"]]
+ 005d434c ["CALL", null, ["callee:00c590a0:8"]]
- 005d3fdc ["INT_ADD", "register:40f0:8", ["const:5d3fdc:8", "const:4:8"]]
- 005d3fdc ["CALL", null, ["callee:00c5b8a0:8"]]
+ 005d438c ["INT_ADD", "register:40f0:8", ["const:5d438c:8", "const:4:8"]]
+ 005d438c ["CALL", null, ["callee:00c5b8a0:8"]]
~~~


