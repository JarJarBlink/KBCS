# v16.0.2 → v16.0.3 · 要調査の変更候補 (32)

[一覧の目次](README.md)

<a id="compare-07102c6c78af55d5607d42ae40b17414"></a>

### [`00b3c3a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3c3a8.md) → [`00b3d39c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3d/00b3d39c.md) FUN_00b3d39c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 10件 [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md) [`00767fec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00767/00767fec.md) [`007685fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/007685fc.md) [`00768848`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768848.md) [`00768c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768c40.md) · 呼出先 5件 [`004499f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00449/004499f8.md) [`00b3c504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3c504.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)
- 新版 呼出元 10件 [`00765314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00765/00765314.md) [`007683c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00768/007683c8.md) [`007689d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00768/007689d8.md) [`00768c24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00768/00768c24.md) [`0076901c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00769/0076901c.md) · 呼出先 5件 [`00449d18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00449/00449d18.md) [`00b3d4f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3d/00b3d4f8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b3c3ec ["INT_ADD", "register:40f0:8", ["const:b3c3ec:8", "const:4:8"]]
- 00b3c3ec ["CALL", null, ["callee:00c58f30:8"]]
+ 00b3d3e0 ["INT_ADD", "register:40f0:8", ["const:b3d3e0:8", "const:4:8"]]
+ 00b3d3e0 ["CALL", null, ["callee:00c58f30:8"]]
- 00b3c408 ["INT_ADD", "register:40f0:8", ["const:b3c408:8", "const:4:8"]]
- 00b3c408 ["CALL", null, ["callee:00c59130:8"]]
+ 00b3d3fc ["INT_ADD", "register:40f0:8", ["const:b3d3fc:8", "const:4:8"]]
+ 00b3d3fc ["CALL", null, ["callee:00c59130:8"]]
- 00b3c444 ["INT_ADD", "register:40f0:8", ["const:b3c444:8", "const:4:8"]]
- 00b3c444 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b3d438 ["INT_ADD", "register:40f0:8", ["const:b3d438:8", "const:4:8"]]
+ 00b3d438 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-e849e4f7008e1754475f6f53b03546b4"></a>

### [`00b3c760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3c760.md) → [`00b3d754`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3d/00b3d754.md) FUN_00b3d754

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00878310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/00878310.md) · 呼出先 7件 [`004499f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00449/004499f8.md) [`00b3c504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3c504.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`008792bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00879/008792bc.md) · 呼出先 7件 [`00449d18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00449/00449d18.md) [`00b3d4f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3d/00b3d4f8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b3c7d0 ["INT_ADD", "register:40f0:8", ["const:b3c7d0:8", "const:4:8"]]
- 00b3c7d0 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00b3d7c4 ["INT_ADD", "register:40f0:8", ["const:b3d7c4:8", "const:4:8"]]
+ 00b3d7c4 ["CALL", null, ["callee:00c58fe0:8"]]
- 00b3c82c ["INT_ADD", "register:40f0:8", ["const:b3c82c:8", "const:4:8"]]
- 00b3c82c ["CALL", null, ["callee:00c58f30:8"]]
+ 00b3d820 ["INT_ADD", "register:40f0:8", ["const:b3d820:8", "const:4:8"]]
+ 00b3d820 ["CALL", null, ["callee:00c58f30:8"]]
- 00b3c848 ["INT_ADD", "register:40f0:8", ["const:b3c848:8", "const:4:8"]]
- 00b3c848 ["CALL", null, ["callee:00c59130:8"]]
+ 00b3d83c ["INT_ADD", "register:40f0:8", ["const:b3d83c:8", "const:4:8"]]
+ 00b3d83c ["CALL", null, ["callee:00c59130:8"]]
~~~


<a id="compare-43ed059c98a5409616edc46e1ea94511"></a>

### [`00b3c978`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3c978.md) → [`00b3d96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3d/00b3d96c.md) FUN_00b3d96c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 20件 [`00444e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444e60.md) [`00476b90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00476/00476b90.md) [`0048d95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048d/0048d95c.md) [`0048f4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048f/0048f4a0.md) [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 3件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)
- 新版 呼出元 20件 [`00445180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00445/00445180.md) [`00476eb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00476/00476eb0.md) [`0048dc7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048dc7c.md) [`0048f7c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048f/0048f7c0.md) [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) · 呼出先 3件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b3c9e0 ["INT_ADD", "register:40f0:8", ["const:b3c9e0:8", "const:4:8"]]
- 00b3c9e0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b3d9d4 ["INT_ADD", "register:40f0:8", ["const:b3d9d4:8", "const:4:8"]]
+ 00b3d9d4 ["CALL", null, ["callee:00c58f30:8"]]
- 00b3ca00 ["INT_ADD", "register:40f0:8", ["const:b3ca00:8", "const:4:8"]]
- 00b3ca00 ["CALL", null, ["callee:00c59130:8"]]
+ 00b3d9f4 ["INT_ADD", "register:40f0:8", ["const:b3d9f4:8", "const:4:8"]]
+ 00b3d9f4 ["CALL", null, ["callee:00c59130:8"]]
- 00b3cb5c ["INT_ADD", "register:40f0:8", ["const:b3cb5c:8", "const:4:8"]]
- 00b3cb5c ["CALL", null, ["callee:0043bac4:8"]]
+ 00b3db50 ["INT_ADD", "register:40f0:8", ["const:b3db50:8", "const:4:8"]]
+ 00b3db50 ["CALL", null, ["callee:0043bac4:8"]]
~~~


<a id="compare-90581d704553a1c945c56eb4ab1ccb0a"></a>

### [`00b3d554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3d/00b3d554.md) → [`00b3e548`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3e/00b3e548.md) FUN_00b3e548

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b3e5d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3e/00b3e5d8.md) · 呼出先 1件 [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md)
- 新版 呼出元 1件 [`00b3f5cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3f/00b3f5cc.md) · 呼出先 1件 [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b3d570 ["INT_ADD", "register:40f0:8", ["const:b3d570:8", "const:4:8"]]
- 00b3d570 ["CALL", null, ["callee:00487c9c:8"]]
+ 00b3e564 ["INT_ADD", "register:40f0:8", ["const:b3e564:8", "const:4:8"]]
+ 00b3e564 ["CALL", null, ["callee:00487c9c:8"]]
- 00b3d580 ["INT_ADD", "register:40f0:8", ["const:b3d580:8", "const:4:8"]]
- 00b3d580 ["CALL", null, ["callee:00487c9c:8"]]
+ 00b3e574 ["INT_ADD", "register:40f0:8", ["const:b3e574:8", "const:4:8"]]
+ 00b3e574 ["CALL", null, ["callee:00487c9c:8"]]
- 00b3d598 ["INT_ADD", "register:40f0:8", ["const:b3d598:8", "const:4:8"]]
- 00b3d598 ["CALL", null, ["callee:00487c9c:8"]]
+ 00b3e58c ["INT_ADD", "register:40f0:8", ["const:b3e58c:8", "const:4:8"]]
+ 00b3e58c ["CALL", null, ["callee:00487c9c:8"]]
~~~


<a id="compare-d44a649ad39cc257fa89a296bc53bbd6"></a>

### [`00b3e4ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3e/00b3e4ac.md) → [`00b3f4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3f/00b3f4a0.md) FUN_00b3f4a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 40件 [`005cc724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005cc724.md) [`00606514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606514.md) [`0067676c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/0067676c.md) [`00679574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00679/00679574.md) [`006d203c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d2/006d203c.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 40件 [`005ccad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cc/005ccad4.md) [`006068c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00606/006068c4.md) [`00676b1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676b1c.md) [`00679924`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00679/00679924.md) [`006d23ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d2/006d23ec.md) · 呼出先 3件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b3e4c4 ["INT_ADD", "register:40f0:8", ["const:b3e4c4:8", "const:4:8"]]
- 00b3e4c4 ["CALL", null, ["callee:008524fc:8"]]
+ 00b3f4b8 ["INT_ADD", "register:40f0:8", ["const:b3f4b8:8", "const:4:8"]]
+ 00b3f4b8 ["CALL", null, ["callee:008524fc:8"]]
- 00b3e508 ["INT_ADD", "register:40f0:8", ["const:b3e508:8", "const:4:8"]]
- 00b3e508 ["CALL", null, ["callee:008524fc:8"]]
+ 00b3f4fc ["INT_ADD", "register:40f0:8", ["const:b3f4fc:8", "const:4:8"]]
+ 00b3f4fc ["CALL", null, ["callee:008524fc:8"]]
- 00b3e51c ["INT_ADD", "register:40f0:8", ["const:b3e51c:8", "const:4:8"]]
- 00b3e51c ["CALL", null, ["callee:008524fc:8"]]
+ 00b3f510 ["INT_ADD", "register:40f0:8", ["const:b3f510:8", "const:4:8"]]
+ 00b3f510 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-882e1c47e4b04254e22c5f3e3d15e22f"></a>

### [`00b3f580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3f580.md) → [`00b40574`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b40/00b40574.md) FUN_00b40574

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) · 呼出先 5件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b3e1d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3e/00b3e1d4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00a07d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07d9c.md) · 呼出先 5件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00b3f1c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3f/00b3f1c8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b3f600 ["INT_ADD", "register:40f0:8", ["const:b3f600:8", "const:4:8"]]
- 00b3f600 ["CALL", null, ["callee:00b3f1c8:8"]]
+ 00b405f4 ["INT_ADD", "register:40f0:8", ["const:b405f4:8", "const:4:8"]]
+ 00b405f4 ["CALL", null, ["callee:00b3f1c8:8"]]
- 00b3f660 ["INT_ADD", "register:40f0:8", ["const:b3f660:8", "const:4:8"]]
- 00b3f660 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b40654 ["INT_ADD", "register:40f0:8", ["const:b40654:8", "const:4:8"]]
+ 00b40654 ["CALL", null, ["callee:00c58f30:8"]]
- 00b3f694 ["INT_ADD", "register:40f0:8", ["const:b3f694:8", "const:4:8"]]
- 00b3f694 ["CALL", null, ["callee:0043bf04:8"]]
+ 00b40688 ["INT_ADD", "register:40f0:8", ["const:b40688:8", "const:4:8"]]
+ 00b40688 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-ef1b8995fc9d2f54a6f4695f694ea9b9"></a>

### [`00b3f7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3f7c0.md) → [`00b407b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b40/00b407b4.md) FUN_00b407b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 6件 [`006d8d58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d8d58.md) [`0075a470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075a/0075a470.md) [`009852e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/009852e8.md) [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 1件 [`00b3e4ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3e/00b3e4ac.md)
- 新版 呼出元 6件 [`006d9108`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d9/006d9108.md) [`0075a820`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075a/0075a820.md) [`00986294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00986/00986294.md) [`00986418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00986/00986418.md) [`0098ec08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0098e/0098ec08.md) · 呼出先 1件 [`00b3f4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3f/00b3f4a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b3f7e0 ["INT_ADD", "register:40f0:8", ["const:b3f7e0:8", "const:4:8"]]
- 00b3f7e0 ["CALL", null, ["callee:00b3f4a0:8"]]
+ 00b407d4 ["INT_ADD", "register:40f0:8", ["const:b407d4:8", "const:4:8"]]
+ 00b407d4 ["CALL", null, ["callee:00b3f4a0:8"]]
- 00b3f844 ["INT_ADD", "register:40f0:8", ["const:b3f844:8", "const:4:8"]]
- 00b3f844 ["CALL", null, ["callee:00b3f4a0:8"]]
+ 00b40838 ["INT_ADD", "register:40f0:8", ["const:b40838:8", "const:4:8"]]
+ 00b40838 ["CALL", null, ["callee:00b3f4a0:8"]]
~~~


<a id="compare-ee3ff0f49d9b5893f9335c2ec3439355"></a>

### [`00b3ff0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3ff0c.md) → [`00b40f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b40/00b40f00.md) FUN_00b40f00

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b40448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40448.md) · 呼出先 2件 [`00c5aa30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aa30.md) [`00c5ad30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad30.md)
- 新版 呼出元 1件 [`00b4143c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b4143c.md) · 呼出先 2件 [`00c5ba00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5ba00.md) [`00c5bd00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd00.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b3ff1c ["INT_ADD", "register:40f0:8", ["const:b3ff1c:8", "const:4:8"]]
- 00b3ff1c ["CALL", null, ["callee:00c5bd00:8"]]
+ 00b40f10 ["INT_ADD", "register:40f0:8", ["const:b40f10:8", "const:4:8"]]
+ 00b40f10 ["CALL", null, ["callee:00c5bd00:8"]]
- 00b3ff2c ["INT_ADD", "register:40f0:8", ["const:b3ff2c:8", "const:4:8"]]
- 00b3ff2c ["CALL", null, ["callee:00c5ba00:8"]]
+ 00b40f20 ["INT_ADD", "register:40f0:8", ["const:b40f20:8", "const:4:8"]]
+ 00b40f20 ["CALL", null, ["callee:00c5ba00:8"]]
~~~


<a id="compare-e4add7ec87375826acccf267985fb8dc"></a>

### [`00b3ff40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3ff40.md) → [`00b40f34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b40/00b40f34.md) FUN_00b40f34

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b40448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40448.md) · 呼出先 2件 [`00c5aa10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aa10.md) [`00c5ad30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad30.md)
- 新版 呼出元 1件 [`00b4143c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b4143c.md) · 呼出先 2件 [`00c5b9e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b9e0.md) [`00c5bd00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd00.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b3ff50 ["INT_ADD", "register:40f0:8", ["const:b3ff50:8", "const:4:8"]]
- 00b3ff50 ["CALL", null, ["callee:00c5bd00:8"]]
+ 00b40f44 ["INT_ADD", "register:40f0:8", ["const:b40f44:8", "const:4:8"]]
+ 00b40f44 ["CALL", null, ["callee:00c5bd00:8"]]
~~~


<a id="compare-c04ae10017d99d12f436dba9ec7f4e28"></a>

### [`00b4018c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b4018c.md) → [`00b41180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41180.md) _ZNSt6__ndk16vectorIN8firebase10FutureBaseENS_9allocatorIS2_EEEC2Em

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ae10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae10.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5acb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acb0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ade0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ade0.md)
- 新版 呼出元 1件 [`00c5bde0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bde0.md) · 呼出先 4件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5bc80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc80.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bdb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b401c0 ["INT_ADD", "register:40f0:8", ["const:b401c0:8", "const:4:8"]]
- 00b401c0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b411b4 ["INT_ADD", "register:40f0:8", ["const:b411b4:8", "const:4:8"]]
+ 00b411b4 ["CALL", null, ["callee:00c58f30:8"]]
- 00b401e4 ["INT_ADD", "register:40f0:8", ["const:b401e4:8", "const:4:8"]]
- 00b401e4 ["CALL", null, ["callee:00c5bd10:8"]]
+ 00b411d8 ["INT_ADD", "register:40f0:8", ["const:b411d8:8", "const:4:8"]]
+ 00b411d8 ["CALL", null, ["callee:00c5bd10:8"]]
- 00b401f8 ["INT_ADD", "register:40f0:8", ["const:b401f8:8", "const:4:8"]]
- 00b401f8 ["CALL", null, ["callee:00c5bc80:8"]]
+ 00b411ec ["INT_ADD", "register:40f0:8", ["const:b411ec:8", "const:4:8"]]
+ 00b411ec ["CALL", null, ["callee:00c5bc80:8"]]
~~~


<a id="compare-1286c83d245d7971784ac5e708df1572"></a>

### [`00b4025c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b4025c.md) → [`00b41250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41250.md) _ZNSt6__ndk113__vector_baseIN8firebase10FutureBaseENS_9allocatorIS2_EEED2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab70.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb30.md) [`00c5bb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb40.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b4028c ["INT_ADD", "register:40f0:8", ["const:b4028c:8", "const:4:8"]]
- 00b4028c ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b41280 ["INT_ADD", "register:40f0:8", ["const:b41280:8", "const:4:8"]]
+ 00b41280 ["CALL", null, ["callee:00c5baa0:8"]]
- 00b402a4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b402a4 ["INT_ADD", "register:40f0:8", ["const:b402a4:8", "const:4:8"]]
- 00b402a4 ["CALLIND", null, ["register:0:8"]]
+ 00b41298 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b41298 ["INT_ADD", "register:40f0:8", ["const:b41298:8", "const:4:8"]]
+ 00b41298 ["CALLIND", null, ["register:0:8"]]
- 00b402b8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b402b8 ["INT_ADD", "register:40f0:8", ["const:b402b8:8", "const:4:8"]]
- 00b402b8 ["CALLIND", null, ["register:0:8"]]
+ 00b412ac ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b412ac ["INT_ADD", "register:40f0:8", ["const:b412ac:8", "const:4:8"]]
+ 00b412ac ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-84d0e57885ae2104428615a91c4ec1b6"></a>

### [`00b403dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b403dc.md) → [`00b413d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b413d0.md) _ZNSt6__ndk16__treeINS_12__value_typeImPN8firebase17FutureBackingDataEEENS_19__map_value_compareImS5_NS_4lessImEELb1EEENS_9allocatorIS5_EEE7

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ae00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae00.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ae00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae00.md)
- 新版 呼出元 1件 [`00c5bdd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdd0.md) · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5bdd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdd0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b403f8 ["INT_ADD", "register:40f0:8", ["const:b403f8:8", "const:4:8"]]
- 00b403f8 ["CALL", null, ["callee:00c5bdd0:8"]]
+ 00b413ec ["INT_ADD", "register:40f0:8", ["const:b413ec:8", "const:4:8"]]
+ 00b413ec ["CALL", null, ["callee:00c5bdd0:8"]]
- 00b40404 ["INT_ADD", "register:40f0:8", ["const:b40404:8", "const:4:8"]]
- 00b40404 ["CALL", null, ["callee:00c5bdd0:8"]]
+ 00b413f8 ["INT_ADD", "register:40f0:8", ["const:b413f8:8", "const:4:8"]]
+ 00b413f8 ["CALL", null, ["callee:00c5bdd0:8"]]
~~~


<a id="compare-cd008229127528c9b519d30c6e760627"></a>

### [`00b41144`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b41/00b41144.md) → [`00b42138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b42/00b42138.md) _ZN7_JNIEnv22CallStaticObjectMethodEP7_jclassP10_jmethodIDz

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00c5bc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc40.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b411b8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b411b8 ["INT_ADD", "register:40f0:8", ["const:b411b8:8", "const:4:8"]]
- 00b411b8 ["CALLIND", null, ["register:0:8"]]
+ 00b421ac ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b421ac ["INT_ADD", "register:40f0:8", ["const:b421ac:8", "const:4:8"]]
+ 00b421ac ["CALLIND", null, ["register:0:8"]]
- 00b411dc ["INT_ADD", "register:40f0:8", ["const:b411dc:8", "const:4:8"]]
- 00b411dc ["CALL", null, ["callee:00c58f80:8"]]
+ 00b421d0 ["INT_ADD", "register:40f0:8", ["const:b421d0:8", "const:4:8"]]
+ 00b421d0 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-3692a6b9c4157e2de7b58cc3a61a2ab6"></a>

### [`00b41770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b41/00b41770.md) → [`00b42764`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b42/00b42764.md) _ZN8firebase9analytics11AddToBundleEP7_JNIEnvP8_jobjectPKcS6_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b060.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c030.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b41798 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b41798 ["INT_ADD", "register:40f0:8", ["const:b41798:8", "const:4:8"]]
- 00b41798 ["CALLIND", null, ["register:0:8"]]
+ 00b4278c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4278c ["INT_ADD", "register:40f0:8", ["const:b4278c:8", "const:4:8"]]
+ 00b4278c ["CALLIND", null, ["register:0:8"]]
- 00b417b0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b417b0 ["INT_ADD", "register:40f0:8", ["const:b417b0:8", "const:4:8"]]
- 00b417b0 ["CALLIND", null, ["register:0:8"]]
+ 00b427a4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b427a4 ["INT_ADD", "register:40f0:8", ["const:b427a4:8", "const:4:8"]]
+ 00b427a4 ["CALLIND", null, ["register:0:8"]]
- 00b417bc ["INT_ADD", "register:40f0:8", ["const:b417bc:8", "const:4:8"]]
- 00b417bc ["CALL", null, ["callee:00c5c030:8"]]
+ 00b427b0 ["INT_ADD", "register:40f0:8", ["const:b427b0:8", "const:4:8"]]
+ 00b427b0 ["CALL", null, ["callee:00c5c030:8"]]
~~~


<a id="compare-ca7b94929fca38c79d8149905ea4c1bc"></a>

### [`00b41814`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b41/00b41814.md) → [`00b42808`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b42/00b42808.md) _ZN8firebase9analytics11AddToBundleEP7_JNIEnvP8_jobjectPKcd

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b060.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c030.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b41840 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b41840 ["INT_ADD", "register:40f0:8", ["const:b41840:8", "const:4:8"]]
- 00b41840 ["CALLIND", null, ["register:0:8"]]
+ 00b42834 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b42834 ["INT_ADD", "register:40f0:8", ["const:b42834:8", "const:4:8"]]
+ 00b42834 ["CALLIND", null, ["register:0:8"]]
- 00b4184c ["INT_ADD", "register:40f0:8", ["const:b4184c:8", "const:4:8"]]
- 00b4184c ["CALL", null, ["callee:00c5c030:8"]]
+ 00b42840 ["INT_ADD", "register:40f0:8", ["const:b42840:8", "const:4:8"]]
+ 00b42840 ["CALL", null, ["callee:00c5c030:8"]]
- 00b41864 ["INT_ADD", "register:40f0:8", ["const:b41864:8", "const:4:8"]]
- 00b41864 ["CALL", null, ["callee:0057504c:8"]]
+ 00b42858 ["INT_ADD", "register:40f0:8", ["const:b42858:8", "const:4:8"]]
+ 00b42858 ["CALL", null, ["callee:0057504c:8"]]
~~~


<a id="compare-98eab83a6c65898baecb765c0b096145"></a>

### [`00b41894`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b41/00b41894.md) → [`00b42888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b42/00b42888.md) _ZN8firebase9analytics11AddToBundleEP7_JNIEnvP8_jobjectPKcl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b060.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c030.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b418bc ["COPY", "register:0:8", ["register:4040:8"]]
- 00b418bc ["INT_ADD", "register:40f0:8", ["const:b418bc:8", "const:4:8"]]
- 00b418bc ["CALLIND", null, ["register:0:8"]]
+ 00b428b0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b428b0 ["INT_ADD", "register:40f0:8", ["const:b428b0:8", "const:4:8"]]
+ 00b428b0 ["CALLIND", null, ["register:0:8"]]
- 00b418c8 ["INT_ADD", "register:40f0:8", ["const:b418c8:8", "const:4:8"]]
- 00b418c8 ["CALL", null, ["callee:00c5c030:8"]]
+ 00b428bc ["INT_ADD", "register:40f0:8", ["const:b428bc:8", "const:4:8"]]
+ 00b428bc ["CALL", null, ["callee:00c5c030:8"]]
- 00b418e0 ["INT_ADD", "register:40f0:8", ["const:b418e0:8", "const:4:8"]]
- 00b418e0 ["CALL", null, ["callee:0057504c:8"]]
+ 00b428d4 ["INT_ADD", "register:40f0:8", ["const:b428d4:8", "const:4:8"]]
+ 00b428d4 ["CALL", null, ["callee:0057504c:8"]]
~~~


<a id="compare-cd5a513f837d900f3120501e2441d6a9"></a>

### [`00b4190c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b41/00b4190c.md) → [`00b42900`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b42/00b42900.md) _ZN8firebase9analytics20AddArrayListToBundleEP7_JNIEnvP8_jobjectPKcS4_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b060.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c030.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b41934 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b41934 ["INT_ADD", "register:40f0:8", ["const:b41934:8", "const:4:8"]]
- 00b41934 ["CALLIND", null, ["register:0:8"]]
+ 00b42928 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b42928 ["INT_ADD", "register:40f0:8", ["const:b42928:8", "const:4:8"]]
+ 00b42928 ["CALLIND", null, ["register:0:8"]]
- 00b41940 ["INT_ADD", "register:40f0:8", ["const:b41940:8", "const:4:8"]]
- 00b41940 ["CALL", null, ["callee:00c5c030:8"]]
+ 00b42934 ["INT_ADD", "register:40f0:8", ["const:b42934:8", "const:4:8"]]
+ 00b42934 ["CALL", null, ["callee:00c5c030:8"]]
- 00b41958 ["INT_ADD", "register:40f0:8", ["const:b41958:8", "const:4:8"]]
- 00b41958 ["CALL", null, ["callee:0057504c:8"]]
+ 00b4294c ["INT_ADD", "register:40f0:8", ["const:b4294c:8", "const:4:8"]]
+ 00b4294c ["CALL", null, ["callee:0057504c:8"]]
~~~


<a id="compare-02c14f292686f87ecd144dc7f5effb79"></a>

### [`00b41984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b41/00b41984.md) → [`00b42978`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b42/00b42978.md) _ZN8firebase9analytics17AddBundleToBundleEP7_JNIEnvP8_jobjectPKcS4_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b060.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c030.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b419ac ["COPY", "register:0:8", ["register:4040:8"]]
- 00b419ac ["INT_ADD", "register:40f0:8", ["const:b419ac:8", "const:4:8"]]
- 00b419ac ["CALLIND", null, ["register:0:8"]]
+ 00b429a0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b429a0 ["INT_ADD", "register:40f0:8", ["const:b429a0:8", "const:4:8"]]
+ 00b429a0 ["CALLIND", null, ["register:0:8"]]
- 00b419b8 ["INT_ADD", "register:40f0:8", ["const:b419b8:8", "const:4:8"]]
- 00b419b8 ["CALL", null, ["callee:00c5c030:8"]]
+ 00b429ac ["INT_ADD", "register:40f0:8", ["const:b429ac:8", "const:4:8"]]
+ 00b429ac ["CALL", null, ["callee:00c5c030:8"]]
- 00b419d0 ["INT_ADD", "register:40f0:8", ["const:b419d0:8", "const:4:8"]]
- 00b419d0 ["CALL", null, ["callee:0057504c:8"]]
+ 00b429c4 ["INT_ADD", "register:40f0:8", ["const:b429c4:8", "const:4:8"]]
+ 00b429c4 ["CALL", null, ["callee:0057504c:8"]]
~~~


<a id="compare-f12a9890ee01f40b44019bd41ce3a6b5"></a>

### [`00b426e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b426e0.md) → [`00b436d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b43/00b436d4.md) _ZN8firebase6FutureIvEC2EPNS_6detail18FutureApiInterfaceERKNS_12FutureHandleE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5aea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aea0.md) · 呼出先 3件 [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5aec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aec0.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)
- 新版 呼出元 1件 [`00c5be70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5be70.md) · 呼出先 3件 [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5be90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5be90.md) [`00c5bea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bea0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b42700 ["INT_ADD", "register:40f0:8", ["const:b42700:8", "const:4:8"]]
- 00b42700 ["CALL", null, ["callee:00c5bd10:8"]]
+ 00b436f4 ["INT_ADD", "register:40f0:8", ["const:b436f4:8", "const:4:8"]]
+ 00b436f4 ["CALL", null, ["callee:00c5bd10:8"]]
- 00b42714 ["INT_ADD", "register:40f0:8", ["const:b42714:8", "const:4:8"]]
- 00b42714 ["CALL", null, ["callee:00c5bea0:8"]]
+ 00b43708 ["INT_ADD", "register:40f0:8", ["const:b43708:8", "const:4:8"]]
+ 00b43708 ["CALL", null, ["callee:00c5bea0:8"]]
- 00b42728 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b42728 ["INT_ADD", "register:40f0:8", ["const:b42728:8", "const:4:8"]]
- 00b42728 ["CALLIND", null, ["register:0:8"]]
+ 00b4371c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4371c ["INT_ADD", "register:40f0:8", ["const:b4371c:8", "const:4:8"]]
+ 00b4371c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e9ea02ef24551e69efae56789b25fe8c"></a>

### [`00b42780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b42780.md) → [`00b43774`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b43/00b43774.md) _ZN8firebase9analytics29LogAppleTransactionLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 7件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5acb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acb0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ad80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad80.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bc80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc80.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bd50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b42794 ["INT_ADD", "register:40f0:8", ["const:b42794:8", "const:4:8"]]
- 00b42794 ["CALL", null, ["callee:00c5bd50:8"]]
+ 00b43788 ["INT_ADD", "register:40f0:8", ["const:b43788:8", "const:4:8"]]
+ 00b43788 ["CALL", null, ["callee:00c5bd50:8"]]
- 00b4279c ["INT_ADD", "register:40f0:8", ["const:b4279c:8", "const:4:8"]]
- 00b4279c ["CALL", null, ["callee:00c5bd50:8"]]
+ 00b43790 ["INT_ADD", "register:40f0:8", ["const:b43790:8", "const:4:8"]]
+ 00b43790 ["CALL", null, ["callee:00c5bd50:8"]]
- 00b427b0 ["INT_ADD", "register:40f0:8", ["const:b427b0:8", "const:4:8"]]
- 00b427b0 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b437a4 ["INT_ADD", "register:40f0:8", ["const:b437a4:8", "const:4:8"]]
+ 00b437a4 ["CALL", null, ["callee:00c5baa0:8"]]
~~~


<a id="compare-e172145923446dc0495c52341a791ec3"></a>

### [`00b43074`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b43074.md) → [`00b44068`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b44/00b44068.md) _ZN8firebase6FutureINSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEEC2EPNS_6detail18FutureApiInterfaceERKNS_12FutureHand

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5ae80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae80.md) · 呼出先 3件 [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5aec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aec0.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)
- 新版 呼出元 1件 [`00c5be50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5be50.md) · 呼出先 3件 [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5be90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5be90.md) [`00c5bea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bea0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b43094 ["INT_ADD", "register:40f0:8", ["const:b43094:8", "const:4:8"]]
- 00b43094 ["CALL", null, ["callee:00c5bd10:8"]]
+ 00b44088 ["INT_ADD", "register:40f0:8", ["const:b44088:8", "const:4:8"]]
+ 00b44088 ["CALL", null, ["callee:00c5bd10:8"]]
- 00b430a8 ["INT_ADD", "register:40f0:8", ["const:b430a8:8", "const:4:8"]]
- 00b430a8 ["CALL", null, ["callee:00c5bea0:8"]]
+ 00b4409c ["INT_ADD", "register:40f0:8", ["const:b4409c:8", "const:4:8"]]
+ 00b4409c ["CALL", null, ["callee:00c5bea0:8"]]
- 00b430bc ["COPY", "register:0:8", ["register:4040:8"]]
- 00b430bc ["INT_ADD", "register:40f0:8", ["const:b430bc:8", "const:4:8"]]
- 00b430bc ["CALLIND", null, ["register:0:8"]]
+ 00b440b0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b440b0 ["INT_ADD", "register:40f0:8", ["const:b440b0:8", "const:4:8"]]
+ 00b440b0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-32bc9469c643d75e087e5cad67093d7f"></a>

### [`00b4333c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b4333c.md) → [`00b44330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b44/00b44330.md) _ZN8firebase6FutureIlEC2EPNS_6detail18FutureApiInterfaceERKNS_12FutureHandleE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5ae90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae90.md) · 呼出先 3件 [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5aec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aec0.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)
- 新版 呼出元 1件 [`00c5be60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5be60.md) · 呼出先 3件 [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5be90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5be90.md) [`00c5bea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bea0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b4335c ["INT_ADD", "register:40f0:8", ["const:b4335c:8", "const:4:8"]]
- 00b4335c ["CALL", null, ["callee:00c5bd10:8"]]
+ 00b44350 ["INT_ADD", "register:40f0:8", ["const:b44350:8", "const:4:8"]]
+ 00b44350 ["CALL", null, ["callee:00c5bd10:8"]]
- 00b43370 ["INT_ADD", "register:40f0:8", ["const:b43370:8", "const:4:8"]]
- 00b43370 ["CALL", null, ["callee:00c5bea0:8"]]
+ 00b44364 ["INT_ADD", "register:40f0:8", ["const:b44364:8", "const:4:8"]]
+ 00b44364 ["CALL", null, ["callee:00c5bea0:8"]]
- 00b43384 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b43384 ["INT_ADD", "register:40f0:8", ["const:b43384:8", "const:4:8"]]
- 00b43384 ["CALLIND", null, ["register:0:8"]]
+ 00b44378 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b44378 ["INT_ADD", "register:40f0:8", ["const:b44378:8", "const:4:8"]]
+ 00b44378 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-3e2cdbffa16559b505b5ce88c0339fbe"></a>

### [`00b434b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b434b4.md) → [`00b444a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b44/00b444a8.md) _ZN8firebase10FutureBaseaSERKS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md) · 呼出先 6件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aee0.md)
- 新版 呼出元 1件 [`00c5bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdf0.md) · 呼出先 6件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb30.md) [`00c5beb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5beb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b434dc ["INT_ADD", "register:40f0:8", ["const:b434dc:8", "const:4:8"]]
- 00b434dc ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b444d0 ["INT_ADD", "register:40f0:8", ["const:b444d0:8", "const:4:8"]]
+ 00b444d0 ["CALL", null, ["callee:00c5baa0:8"]]
- 00b434f4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b434f4 ["INT_ADD", "register:40f0:8", ["const:b434f4:8", "const:4:8"]]
- 00b434f4 ["CALLIND", null, ["register:0:8"]]
+ 00b444e8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b444e8 ["INT_ADD", "register:40f0:8", ["const:b444e8:8", "const:4:8"]]
+ 00b444e8 ["CALLIND", null, ["register:0:8"]]
- 00b43508 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b43508 ["INT_ADD", "register:40f0:8", ["const:b43508:8", "const:4:8"]]
- 00b43508 ["CALLIND", null, ["register:0:8"]]
+ 00b444fc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b444fc ["INT_ADD", "register:40f0:8", ["const:b444fc:8", "const:4:8"]]
+ 00b444fc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-eca572f7b3754615559f2c5d0cc7eccc"></a>

### [`00b4398c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b4398c.md) → [`00b44980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b44/00b44980.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKcm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md) · 呼出先 2件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5b170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b170.md)
- 新版 呼出元 1件 [`00c5c150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c150.md) · 呼出先 2件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c5c140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c140.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b43a00 ["INT_ADD", "register:40f0:8", ["const:b43a00:8", "const:4:8"]]
- 00b43a00 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00b449f4 ["INT_ADD", "register:40f0:8", ["const:b449f4:8", "const:4:8"]]
+ 00b449f4 ["CALL", null, ["callee:00c58fe0:8"]]
- 00b43a34 ["INT_ADD", "register:40f0:8", ["const:b43a34:8", "const:4:8"]]
- 00b43a34 ["CALL", null, ["callee:00c5c140:8"]]
+ 00b44a28 ["INT_ADD", "register:40f0:8", ["const:b44a28:8", "const:4:8"]]
+ 00b44a28 ["CALL", null, ["callee:00c5c140:8"]]
~~~


<a id="compare-f917d6db7666e8bdf9d2aa2e67c0ae19"></a>

### [`00b43a54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b43/00b43a54.md) → [`00b44a48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b44/00b44a48.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEmmmmmmPKc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b170.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b160.md)
- 新版 呼出元 1件 [`00c5c140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c140.md) · 呼出先 4件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5c130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c130.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b43af4 ["INT_ADD", "register:40f0:8", ["const:b43af4:8", "const:4:8"]]
- 00b43af4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b44ae8 ["INT_ADD", "register:40f0:8", ["const:b44ae8:8", "const:4:8"]]
+ 00b44ae8 ["CALL", null, ["callee:00c58f30:8"]]
- 00b43b0c ["INT_ADD", "register:40f0:8", ["const:b43b0c:8", "const:4:8"]]
- 00b43b0c ["CALL", null, ["callee:00c590a0:8"]]
+ 00b44b00 ["INT_ADD", "register:40f0:8", ["const:b44b00:8", "const:4:8"]]
+ 00b44b00 ["CALL", null, ["callee:00c590a0:8"]]
- 00b43b20 ["INT_ADD", "register:40f0:8", ["const:b43b20:8", "const:4:8"]]
- 00b43b20 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b44b14 ["INT_ADD", "register:40f0:8", ["const:b44b14:8", "const:4:8"]]
+ 00b44b14 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-c8318d0284cb0d2efd83be9d998caa89"></a>

### [`00b44054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44054.md) → [`00b45048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b45048.md) _ZN8firebase26ReferenceCountedFutureImpl7DeleteTINSt6__ndk112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEEEvPv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00b42d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b42/00b42d4c.md) [`00bbc874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbc/00bbc874.md) [`00bde8b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bde/00bde8b4.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`00b43d40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b43/00b43d40.md) [`00bbd868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbd/00bbd868.md) [`00bdf8a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdf/00bdf8a8.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b44074 ["INT_ADD", "register:40f0:8", ["const:b44074:8", "const:4:8"]]
- 00b44074 ["CALL", null, ["callee:00c58f50:8"]]
+ 00b45068 ["INT_ADD", "register:40f0:8", ["const:b45068:8", "const:4:8"]]
+ 00b45068 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-bae928b1c6983ede16ef1d09615f069b"></a>

### [`00b441bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b441bc.md) → [`00b451b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b451b0.md) FUN_00b451b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00b441ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b441ec.md) [`00b446e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b446e8.md) [`00b44714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44714.md) · 呼出先 2件 [`00b4475c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b4475c.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 3件 [`00b451e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b451e0.md) [`00b456dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b456dc.md) [`00b45708`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b45708.md) · 呼出先 2件 [`00b45750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b45750.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b441d0 ["INT_ADD", "register:40f0:8", ["const:b441d0:8", "const:4:8"]]
- 00b441d0 ["CALL", null, ["callee:00b45750:8"]]
+ 00b451c4 ["INT_ADD", "register:40f0:8", ["const:b451c4:8", "const:4:8"]]
+ 00b451c4 ["CALL", null, ["callee:00b45750:8"]]
- 00b441e8 ["INT_ADD", "register:40f0:8", ["const:b441e8:8", "const:4:8"]]
- 00b441e8 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00b451dc ["INT_ADD", "register:40f0:8", ["const:b451dc:8", "const:4:8"]]
+ 00b451dc ["CALL", null, ["callee:00c5c1e0:8"]]
~~~


<a id="compare-9319646e22b9033318db4472b08af058"></a>

### [`00b44320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44320.md) → [`00b45314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b45314.md) _ZN8firebase8LogDebugEPKcz

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b200.md) · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b1f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b1f0.md)
- 新版 呼出元 1件 [`00c5c1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1d0.md) · 呼出先 2件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5c1c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b4439c ["INT_ADD", "register:40f0:8", ["const:b4439c:8", "const:4:8"]]
- 00b4439c ["CALL", null, ["callee:00c5c1c0:8"]]
+ 00b45390 ["INT_ADD", "register:40f0:8", ["const:b45390:8", "const:4:8"]]
+ 00b45390 ["CALL", null, ["callee:00c5c1c0:8"]]
- 00b443c0 ["INT_ADD", "register:40f0:8", ["const:b443c0:8", "const:4:8"]]
- 00b443c0 ["CALL", null, ["callee:00c58f80:8"]]
+ 00b453b4 ["INT_ADD", "register:40f0:8", ["const:b453b4:8", "const:4:8"]]
+ 00b453b4 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-cd60dff18a4565853576d65fdc1d2a7a"></a>

### [`00b443c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b443c4.md) → [`00b453b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b453b8.md) _ZN8firebase7LogInfoEPKcz

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b0b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0b0.md) · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b1f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b1f0.md)
- 新版 呼出元 1件 [`00c5c080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c080.md) · 呼出先 2件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5c1c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b44440 ["INT_ADD", "register:40f0:8", ["const:b44440:8", "const:4:8"]]
- 00b44440 ["CALL", null, ["callee:00c5c1c0:8"]]
+ 00b45434 ["INT_ADD", "register:40f0:8", ["const:b45434:8", "const:4:8"]]
+ 00b45434 ["CALL", null, ["callee:00c5c1c0:8"]]
- 00b44464 ["INT_ADD", "register:40f0:8", ["const:b44464:8", "const:4:8"]]
- 00b44464 ["CALL", null, ["callee:00c58f80:8"]]
+ 00b45458 ["INT_ADD", "register:40f0:8", ["const:b45458:8", "const:4:8"]]
+ 00b45458 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-c22d56470c38c72680e32c3ee5231203"></a>

### [`00b44468`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44468.md) → [`00b4545c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b4545c.md) _ZN8firebase10LogWarningEPKcz

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aeb0.md) · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b1f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b1f0.md)
- 新版 呼出元 1件 [`00c5be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5be80.md) · 呼出先 2件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5c1c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b444e4 ["INT_ADD", "register:40f0:8", ["const:b444e4:8", "const:4:8"]]
- 00b444e4 ["CALL", null, ["callee:00c5c1c0:8"]]
+ 00b454d8 ["INT_ADD", "register:40f0:8", ["const:b454d8:8", "const:4:8"]]
+ 00b454d8 ["CALL", null, ["callee:00c5c1c0:8"]]
- 00b44508 ["INT_ADD", "register:40f0:8", ["const:b44508:8", "const:4:8"]]
- 00b44508 ["CALL", null, ["callee:00c58f80:8"]]
+ 00b454fc ["INT_ADD", "register:40f0:8", ["const:b454fc:8", "const:4:8"]]
+ 00b454fc ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-2076791d036443f3ee4206f5ecf355e0"></a>

### [`00b4450c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b4450c.md) → [`00b45500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b45500.md) _ZN8firebase8LogErrorEPKcz

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b1f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b1f0.md)
- 新版 呼出元 1件 [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) · 呼出先 2件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5c1c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b44588 ["INT_ADD", "register:40f0:8", ["const:b44588:8", "const:4:8"]]
- 00b44588 ["CALL", null, ["callee:00c5c1c0:8"]]
+ 00b4557c ["INT_ADD", "register:40f0:8", ["const:b4557c:8", "const:4:8"]]
+ 00b4557c ["CALL", null, ["callee:00c5c1c0:8"]]
- 00b445ac ["INT_ADD", "register:40f0:8", ["const:b445ac:8", "const:4:8"]]
- 00b445ac ["CALL", null, ["callee:00c58f80:8"]]
+ 00b455a0 ["INT_ADD", "register:40f0:8", ["const:b455a0:8", "const:4:8"]]
+ 00b455a0 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-2c3fc1fc54af8bb15342ac724de53b3e"></a>

### [`00b445b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b445b0.md) → [`00b455a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b455a4.md) _ZN8firebase9LogAssertEPKcz

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b1f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b1f0.md)
- 新版 呼出元 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) · 呼出先 2件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5c1c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b4462c ["INT_ADD", "register:40f0:8", ["const:b4462c:8", "const:4:8"]]
- 00b4462c ["CALL", null, ["callee:00c5c1c0:8"]]
+ 00b45620 ["INT_ADD", "register:40f0:8", ["const:b45620:8", "const:4:8"]]
+ 00b45620 ["CALL", null, ["callee:00c5c1c0:8"]]
- 00b44650 ["INT_ADD", "register:40f0:8", ["const:b44650:8", "const:4:8"]]
- 00b44650 ["CALL", null, ["callee:00c58f80:8"]]
+ 00b45644 ["INT_ADD", "register:40f0:8", ["const:b45644:8", "const:4:8"]]
+ 00b45644 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-a06f00ec100e332a95b6ad30b32ebdd3"></a>

### [`00b44654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44654.md) → [`00b45648`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b45648.md) _ZN8firebase10LogMessageENS_8LogLevelEPKcz

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b190.md) · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b1f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b1f0.md)
- 新版 呼出元 1件 [`00c5c160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c160.md) · 呼出先 2件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5c1c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b446c0 ["INT_ADD", "register:40f0:8", ["const:b446c0:8", "const:4:8"]]
- 00b446c0 ["CALL", null, ["callee:00c5c1c0:8"]]
+ 00b456b4 ["INT_ADD", "register:40f0:8", ["const:b456b4:8", "const:4:8"]]
+ 00b456b4 ["CALL", null, ["callee:00c5c1c0:8"]]
- 00b446e4 ["INT_ADD", "register:40f0:8", ["const:b446e4:8", "const:4:8"]]
- 00b446e4 ["CALL", null, ["callee:00c58f80:8"]]
+ 00b456d8 ["INT_ADD", "register:40f0:8", ["const:b456d8:8", "const:4:8"]]
+ 00b456d8 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-0cb2d489db9c5269ba29c5203cc65590"></a>

### [`00b4483c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b4483c.md) → [`00b45830`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b45830.md) _ZN8firebase18AndroidLogMessageVEiPKcS1_St9__va_list

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b2c0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5c290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c290.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b44864 ["INT_ADD", "register:40f0:8", ["const:b44864:8", "const:4:8"]]
- 00b44864 ["CALL", null, ["callee:00c5c290:8"]]
+ 00b45858 ["INT_ADD", "register:40f0:8", ["const:b45858:8", "const:4:8"]]
+ 00b45858 ["CALL", null, ["callee:00c5c290:8"]]
- 00b44888 ["INT_ADD", "register:40f0:8", ["const:b44888:8", "const:4:8"]]
- 00b44888 ["CALL", null, ["callee:00c58f80:8"]]
+ 00b4587c ["INT_ADD", "register:40f0:8", ["const:b4587c:8", "const:4:8"]]
+ 00b4587c ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-17ef7d004a80df96528ff727d961fb35"></a>

### [`00b44c74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44c74.md) → [`00b45c68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b45c68.md) _ZN8firebase4util26CheckAndClearJniExceptionsEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b44c8c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b44c8c ["INT_ADD", "register:40f0:8", ["const:b44c8c:8", "const:4:8"]]
- 00b44c8c ["CALLIND", null, ["register:0:8"]]
+ 00b45c80 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b45c80 ["INT_ADD", "register:40f0:8", ["const:b45c80:8", "const:4:8"]]
+ 00b45c80 ["CALLIND", null, ["register:0:8"]]
- 00b44ca4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b44ca4 ["INT_ADD", "register:40f0:8", ["const:b44ca4:8", "const:4:8"]]
- 00b44ca4 ["CALLIND", null, ["register:0:8"]]
+ 00b45c98 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b45c98 ["INT_ADD", "register:40f0:8", ["const:b45c98:8", "const:4:8"]]
+ 00b45c98 ["CALLIND", null, ["register:0:8"]]
- 00b44cb4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b44cb4 ["INT_ADD", "register:40f0:8", ["const:b44cb4:8", "const:4:8"]]
- 00b44cb4 ["CALLIND", null, ["register:0:8"]]
+ 00b45ca8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b45ca8 ["INT_ADD", "register:40f0:8", ["const:b45ca8:8", "const:4:8"]]
+ 00b45ca8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-274fc0aaabfcfd0ccfce760dea678ed9"></a>

### [`00b517a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b51/00b517a0.md) → [`00b52794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b52/00b52794.md) _ZN7_JNIEnv20CallStaticVoidMethodEP7_jclassP10_jmethodIDz

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b310.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00c5c2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c2e0.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b51814 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b51814 ["INT_ADD", "register:40f0:8", ["const:b51814:8", "const:4:8"]]
- 00b51814 ["CALLIND", null, ["register:0:8"]]
+ 00b52808 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b52808 ["INT_ADD", "register:40f0:8", ["const:b52808:8", "const:4:8"]]
+ 00b52808 ["CALLIND", null, ["register:0:8"]]
- 00b51838 ["INT_ADD", "register:40f0:8", ["const:b51838:8", "const:4:8"]]
- 00b51838 ["CALL", null, ["callee:00c58f80:8"]]
+ 00b5282c ["INT_ADD", "register:40f0:8", ["const:b5282c:8", "const:4:8"]]
+ 00b5282c ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-f8541b1ff19b1c819b978cd72a0facee"></a>

### [`00b5183c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b51/00b5183c.md) → [`00b52830`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b52/00b52830.md) FUN_00b52830

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00b44de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44de0.md) [`00b450f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b450f8.md) · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b220.md)
- 新版 呼出元 2件 [`00b45dd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b45dd4.md) [`00b460ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b460ec.md) · 呼出先 2件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5c1f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b518ac ["INT_ADD", "register:40f0:8", ["const:b518ac:8", "const:4:8"]]
- 00b518ac ["CALL", null, ["callee:00c5c1f0:8"]]
+ 00b528a0 ["INT_ADD", "register:40f0:8", ["const:b528a0:8", "const:4:8"]]
+ 00b528a0 ["CALL", null, ["callee:00c5c1f0:8"]]
- 00b518d0 ["INT_ADD", "register:40f0:8", ["const:b518d0:8", "const:4:8"]]
- 00b518d0 ["CALL", null, ["callee:00c58f80:8"]]
+ 00b528c4 ["INT_ADD", "register:40f0:8", ["const:b528c4:8", "const:4:8"]]
+ 00b528c4 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-38767bd72cff0519c37256028042e53d"></a>

### [`00b533e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b53/00b533e8.md) → [`00b543dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b54/00b543dc.md) _ZN8firebase4util17JniStringToStringEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b460.md) · 呼出先 1件 [`00c5aff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aff0.md)
- 新版 呼出元 1件 [`00c5c430`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c430.md) · 呼出先 1件 [`00c5bfc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfc0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b533fc ["INT_ADD", "register:40f0:8", ["const:b533fc:8", "const:4:8"]]
- 00b533fc ["CALL", null, ["callee:00c5bfc0:8"]]
+ 00b543f0 ["INT_ADD", "register:40f0:8", ["const:b543f0:8", "const:4:8"]]
+ 00b543f0 ["CALL", null, ["callee:00c5bfc0:8"]]
~~~


<a id="compare-2727f7be2c1860e25b1c9f7c65eaf61d"></a>

### [`00b536dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b53/00b536dc.md) → [`00b546d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b54/00b546d0.md) _ZNSt6__ndk16vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEE7reserveEm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ac80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac80.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5bc50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc50.md) · 呼出先 3件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b53738 ["INT_ADD", "register:40f0:8", ["const:b53738:8", "const:4:8"]]
- 00b53738 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b5472c ["INT_ADD", "register:40f0:8", ["const:b5472c:8", "const:4:8"]]
+ 00b5472c ["CALL", null, ["callee:00c58f30:8"]]
- 00b537b0 ["INT_ADD", "register:40f0:8", ["const:b537b0:8", "const:4:8"]]
- 00b537b0 ["CALL", null, ["callee:00c58f50:8"]]
+ 00b547a4 ["INT_ADD", "register:40f0:8", ["const:b547a4:8", "const:4:8"]]
+ 00b547a4 ["CALL", null, ["callee:00c58f50:8"]]
- 00b537e8 ["INT_ADD", "register:40f0:8", ["const:b537e8:8", "const:4:8"]]
- 00b537e8 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00b547dc ["INT_ADD", "register:40f0:8", ["const:b547dc:8", "const:4:8"]]
+ 00b547dc ["CALL", null, ["callee:00c5c1e0:8"]]
~~~


<a id="compare-b64fddb7ead69c92d1afa97140fcd861"></a>

### [`00b53cac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b53/00b53cac.md) → [`00b54ca0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b54/00b54ca0.md) _ZNSt6__ndk16vectorIN8firebase7VariantENS_9allocatorIS2_EEE7reserveEm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b700.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5c6d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c6d0.md) · 呼出先 5件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5b8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8d0.md) [`00c5b8e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8e0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b53d0c ["INT_ADD", "register:40f0:8", ["const:b53d0c:8", "const:4:8"]]
- 00b53d0c ["CALL", null, ["callee:00c58f30:8"]]
+ 00b54d00 ["INT_ADD", "register:40f0:8", ["const:b54d00:8", "const:4:8"]]
+ 00b54d00 ["CALL", null, ["callee:00c58f30:8"]]
- 00b53d4c ["INT_ADD", "register:40f0:8", ["const:b53d4c:8", "const:4:8"]]
- 00b53d4c ["CALL", null, ["callee:00c5b8e0:8"]]
+ 00b54d40 ["INT_ADD", "register:40f0:8", ["const:b54d40:8", "const:4:8"]]
+ 00b54d40 ["CALL", null, ["callee:00c5b8e0:8"]]
- 00b53d88 ["INT_ADD", "register:40f0:8", ["const:b53d88:8", "const:4:8"]]
- 00b53d88 ["CALL", null, ["callee:00c5b8d0:8"]]
+ 00b54d7c ["INT_ADD", "register:40f0:8", ["const:b54d7c:8", "const:4:8"]]
+ 00b54d7c ["CALL", null, ["callee:00c5b8d0:8"]]
~~~


<a id="compare-a75ee92ebd063b1414cb17335bd1f434"></a>

### [`00b53dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b53/00b53dc8.md) → [`00b54dbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b54/00b54dbc.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2IDnEEPKc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b690.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5c660`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c660.md) · 呼出先 4件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b53dec ["INT_ADD", "register:40f0:8", ["const:b53dec:8", "const:4:8"]]
- 00b53dec ["CALL", null, ["callee:00c59080:8"]]
+ 00b54de0 ["INT_ADD", "register:40f0:8", ["const:b54de0:8", "const:4:8"]]
+ 00b54de0 ["CALL", null, ["callee:00c59080:8"]]
- 00b53e20 ["INT_ADD", "register:40f0:8", ["const:b53e20:8", "const:4:8"]]
- 00b53e20 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b54e14 ["INT_ADD", "register:40f0:8", ["const:b54e14:8", "const:4:8"]]
+ 00b54e14 ["CALL", null, ["callee:00c58f30:8"]]
- 00b53e40 ["INT_ADD", "register:40f0:8", ["const:b53e40:8", "const:4:8"]]
- 00b53e40 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b54e34 ["INT_ADD", "register:40f0:8", ["const:b54e34:8", "const:4:8"]]
+ 00b54e34 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-d4cfb9a54a328890569a89bdc6c5ee32"></a>

### [`00b54078`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b54078.md) → [`00b5506c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b55/00b5506c.md) _ZN7_JNIEnv14CallByteMethodEP8_jobjectP10_jmethodIDz

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b2d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b2d0.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00c5c2a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c2a0.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b540ec ["COPY", "register:0:8", ["register:4040:8"]]
- 00b540ec ["INT_ADD", "register:40f0:8", ["const:b540ec:8", "const:4:8"]]
- 00b540ec ["CALLIND", null, ["register:0:8"]]
+ 00b550e0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b550e0 ["INT_ADD", "register:40f0:8", ["const:b550e0:8", "const:4:8"]]
+ 00b550e0 ["CALLIND", null, ["register:0:8"]]
- 00b54110 ["INT_ADD", "register:40f0:8", ["const:b54110:8", "const:4:8"]]
- 00b54110 ["CALL", null, ["callee:00c58f80:8"]]
+ 00b55104 ["INT_ADD", "register:40f0:8", ["const:b55104:8", "const:4:8"]]
+ 00b55104 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-9746c0716f13b896205aed9cd991367f"></a>

### [`00b5417c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b5417c.md) → [`00b55170`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b55/00b55170.md) _ZN7_JNIEnv14CallCharMethodEP8_jobjectP10_jmethodIDz

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b2e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b2e0.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00c5c2b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c2b0.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b541f0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b541f0 ["INT_ADD", "register:40f0:8", ["const:b541f0:8", "const:4:8"]]
- 00b541f0 ["CALLIND", null, ["register:0:8"]]
+ 00b551e4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b551e4 ["INT_ADD", "register:40f0:8", ["const:b551e4:8", "const:4:8"]]
+ 00b551e4 ["CALLIND", null, ["register:0:8"]]
- 00b54214 ["INT_ADD", "register:40f0:8", ["const:b54214:8", "const:4:8"]]
- 00b54214 ["CALL", null, ["callee:00c58f80:8"]]
+ 00b55208 ["INT_ADD", "register:40f0:8", ["const:b55208:8", "const:4:8"]]
+ 00b55208 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-81e2e8959b21e2d69df37214754fe71f"></a>

### [`00b54280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b54280.md) → [`00b55274`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b55/00b55274.md) _ZN7_JNIEnv15CallShortMethodEP8_jobjectP10_jmethodIDz

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b2f0.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00c5c2c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c2c0.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b542f4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b542f4 ["INT_ADD", "register:40f0:8", ["const:b542f4:8", "const:4:8"]]
- 00b542f4 ["CALLIND", null, ["register:0:8"]]
+ 00b552e8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b552e8 ["INT_ADD", "register:40f0:8", ["const:b552e8:8", "const:4:8"]]
+ 00b552e8 ["CALLIND", null, ["register:0:8"]]
- 00b54318 ["INT_ADD", "register:40f0:8", ["const:b54318:8", "const:4:8"]]
- 00b54318 ["CALL", null, ["callee:00c58f80:8"]]
+ 00b5530c ["INT_ADD", "register:40f0:8", ["const:b5530c:8", "const:4:8"]]
+ 00b5530c ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-cbce167b58b47f89402882e8073744a0"></a>

### [`00b544cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b544cc.md) → [`00b554c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b55/00b554c0.md) _ZN7_JNIEnv16CallDoubleMethodEP8_jobjectP10_jmethodIDz

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b300.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00c5c2d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c2d0.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b54540 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b54540 ["INT_ADD", "register:40f0:8", ["const:b54540:8", "const:4:8"]]
- 00b54540 ["CALLIND", null, ["register:0:8"]]
+ 00b55534 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b55534 ["INT_ADD", "register:40f0:8", ["const:b55534:8", "const:4:8"]]
+ 00b55534 ["CALLIND", null, ["register:0:8"]]
- 00b54564 ["INT_ADD", "register:40f0:8", ["const:b54564:8", "const:4:8"]]
- 00b54564 ["CALL", null, ["callee:00c58f80:8"]]
+ 00b55558 ["INT_ADD", "register:40f0:8", ["const:b55558:8", "const:4:8"]]
+ 00b55558 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-b116fa7145d1c588b673b602a9163328"></a>

### [`00b54928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b54928.md) → [`00b5591c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b55/00b5591c.md) _ZN8firebase4util22JBooleanArrayToVariantEP7_JNIEnvP14_jbooleanArray

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b580.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5c550`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c550.md) · 呼出先 5件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8d0.md) [`00c5b8e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8e0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b54968 ["COPY", "register:0:8", ["register:4048:8"]]
- 00b54968 ["INT_ADD", "register:40f0:8", ["const:b54968:8", "const:4:8"]]
- 00b54968 ["CALLIND", null, ["register:0:8"]]
+ 00b5595c ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b5595c ["INT_ADD", "register:40f0:8", ["const:b5595c:8", "const:4:8"]]
+ 00b5595c ["CALLIND", null, ["register:0:8"]]
- 00b54984 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b54984 ["INT_ADD", "register:40f0:8", ["const:b54984:8", "const:4:8"]]
- 00b54984 ["CALLIND", null, ["register:0:8"]]
+ 00b55978 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b55978 ["INT_ADD", "register:40f0:8", ["const:b55978:8", "const:4:8"]]
+ 00b55978 ["CALLIND", null, ["register:0:8"]]
- 00b54990 ["INT_ADD", "register:40f0:8", ["const:b54990:8", "const:4:8"]]
- 00b54990 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b55984 ["INT_ADD", "register:40f0:8", ["const:b55984:8", "const:4:8"]]
+ 00b55984 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-9245ff676a30dd5f1a0695fa96d1f09b"></a>

### [`00b54aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b54aac.md) → [`00b55aa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b55/00b55aa0.md) _ZN8firebase4util19JByteArrayToVariantEP7_JNIEnvP11_jbyteArray

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b4a0.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5c470`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c470.md) · 呼出先 5件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8d0.md) [`00c5b8e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8e0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b54aec ["COPY", "register:0:8", ["register:4048:8"]]
- 00b54aec ["INT_ADD", "register:40f0:8", ["const:b54aec:8", "const:4:8"]]
- 00b54aec ["CALLIND", null, ["register:0:8"]]
+ 00b55ae0 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b55ae0 ["INT_ADD", "register:40f0:8", ["const:b55ae0:8", "const:4:8"]]
+ 00b55ae0 ["CALLIND", null, ["register:0:8"]]
- 00b54b08 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b54b08 ["INT_ADD", "register:40f0:8", ["const:b54b08:8", "const:4:8"]]
- 00b54b08 ["CALLIND", null, ["register:0:8"]]
+ 00b55afc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b55afc ["INT_ADD", "register:40f0:8", ["const:b55afc:8", "const:4:8"]]
+ 00b55afc ["CALLIND", null, ["register:0:8"]]
- 00b54b14 ["INT_ADD", "register:40f0:8", ["const:b54b14:8", "const:4:8"]]
- 00b54b14 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b55b08 ["INT_ADD", "register:40f0:8", ["const:b55b08:8", "const:4:8"]]
+ 00b55b08 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-b3ccabbb5447f52b9bf6744f3dc59ff1"></a>

### [`00b54c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b54c28.md) → [`00b55c1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b55/00b55c1c.md) _ZN8firebase4util19JCharArrayToVariantEP7_JNIEnvP11_jcharArray

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b4b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b4b0.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5c480`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c480.md) · 呼出先 5件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8d0.md) [`00c5b8e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8e0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b54c68 ["COPY", "register:0:8", ["register:4048:8"]]
- 00b54c68 ["INT_ADD", "register:40f0:8", ["const:b54c68:8", "const:4:8"]]
- 00b54c68 ["CALLIND", null, ["register:0:8"]]
+ 00b55c5c ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b55c5c ["INT_ADD", "register:40f0:8", ["const:b55c5c:8", "const:4:8"]]
+ 00b55c5c ["CALLIND", null, ["register:0:8"]]
- 00b54c84 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b54c84 ["INT_ADD", "register:40f0:8", ["const:b54c84:8", "const:4:8"]]
- 00b54c84 ["CALLIND", null, ["register:0:8"]]
+ 00b55c78 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b55c78 ["INT_ADD", "register:40f0:8", ["const:b55c78:8", "const:4:8"]]
+ 00b55c78 ["CALLIND", null, ["register:0:8"]]
- 00b54c90 ["INT_ADD", "register:40f0:8", ["const:b54c90:8", "const:4:8"]]
- 00b54c90 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b55c84 ["INT_ADD", "register:40f0:8", ["const:b55c84:8", "const:4:8"]]
+ 00b55c84 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-0b66c8e2df202ee4b6badf782be45b85"></a>

### [`00b54da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b54da8.md) → [`00b55d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b55/00b55d9c.md) _ZN8firebase4util20JShortArrayToVariantEP7_JNIEnvP12_jshortArray

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b530.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5c500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c500.md) · 呼出先 5件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8d0.md) [`00c5b8e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8e0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b54de8 ["COPY", "register:0:8", ["register:4048:8"]]
- 00b54de8 ["INT_ADD", "register:40f0:8", ["const:b54de8:8", "const:4:8"]]
- 00b54de8 ["CALLIND", null, ["register:0:8"]]
+ 00b55ddc ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b55ddc ["INT_ADD", "register:40f0:8", ["const:b55ddc:8", "const:4:8"]]
+ 00b55ddc ["CALLIND", null, ["register:0:8"]]
- 00b54e04 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b54e04 ["INT_ADD", "register:40f0:8", ["const:b54e04:8", "const:4:8"]]
- 00b54e04 ["CALLIND", null, ["register:0:8"]]
+ 00b55df8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b55df8 ["INT_ADD", "register:40f0:8", ["const:b55df8:8", "const:4:8"]]
+ 00b55df8 ["CALLIND", null, ["register:0:8"]]
- 00b54e10 ["INT_ADD", "register:40f0:8", ["const:b54e10:8", "const:4:8"]]
- 00b54e10 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b55e04 ["INT_ADD", "register:40f0:8", ["const:b55e04:8", "const:4:8"]]
+ 00b55e04 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-12cecb224ff077edc7fef109b7454e60"></a>

### [`00b54f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b54f24.md) → [`00b55f18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b55/00b55f18.md) _ZN8firebase4util18JIntArrayToVariantEP7_JNIEnvP10_jintArray

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b480.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5c450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c450.md) · 呼出先 5件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8d0.md) [`00c5b8e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8e0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b54f64 ["COPY", "register:0:8", ["register:4048:8"]]
- 00b54f64 ["INT_ADD", "register:40f0:8", ["const:b54f64:8", "const:4:8"]]
- 00b54f64 ["CALLIND", null, ["register:0:8"]]
+ 00b55f58 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b55f58 ["INT_ADD", "register:40f0:8", ["const:b55f58:8", "const:4:8"]]
+ 00b55f58 ["CALLIND", null, ["register:0:8"]]
- 00b54f80 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b54f80 ["INT_ADD", "register:40f0:8", ["const:b54f80:8", "const:4:8"]]
- 00b54f80 ["CALLIND", null, ["register:0:8"]]
+ 00b55f74 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b55f74 ["INT_ADD", "register:40f0:8", ["const:b55f74:8", "const:4:8"]]
+ 00b55f74 ["CALLIND", null, ["register:0:8"]]
- 00b54f8c ["INT_ADD", "register:40f0:8", ["const:b54f8c:8", "const:4:8"]]
- 00b54f8c ["CALL", null, ["callee:00c58f30:8"]]
+ 00b55f80 ["INT_ADD", "register:40f0:8", ["const:b55f80:8", "const:4:8"]]
+ 00b55f80 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-eaff01074b3c1045a32af57d95c42353"></a>

### [`00b550a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b55/00b550a0.md) → [`00b56094`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b56/00b56094.md) _ZN8firebase4util19JLongArrayToVariantEP7_JNIEnvP11_jlongArray

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b4c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b4c0.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5c490`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c490.md) · 呼出先 5件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8d0.md) [`00c5b8e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8e0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b550e0 ["COPY", "register:0:8", ["register:4048:8"]]
- 00b550e0 ["INT_ADD", "register:40f0:8", ["const:b550e0:8", "const:4:8"]]
- 00b550e0 ["CALLIND", null, ["register:0:8"]]
+ 00b560d4 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b560d4 ["INT_ADD", "register:40f0:8", ["const:b560d4:8", "const:4:8"]]
+ 00b560d4 ["CALLIND", null, ["register:0:8"]]
- 00b550fc ["COPY", "register:0:8", ["register:4040:8"]]
- 00b550fc ["INT_ADD", "register:40f0:8", ["const:b550fc:8", "const:4:8"]]
- 00b550fc ["CALLIND", null, ["register:0:8"]]
+ 00b560f0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b560f0 ["INT_ADD", "register:40f0:8", ["const:b560f0:8", "const:4:8"]]
+ 00b560f0 ["CALLIND", null, ["register:0:8"]]
- 00b55108 ["INT_ADD", "register:40f0:8", ["const:b55108:8", "const:4:8"]]
- 00b55108 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b560fc ["INT_ADD", "register:40f0:8", ["const:b560fc:8", "const:4:8"]]
+ 00b560fc ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-a0a7044ac18ead26d001214abd6dc9dd"></a>

### [`00b5521c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b55/00b5521c.md) → [`00b56210`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b56/00b56210.md) _ZN8firebase4util20JFloatArrayToVariantEP7_JNIEnvP12_jfloatArray

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b520.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5c4f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c4f0.md) · 呼出先 5件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8d0.md) [`00c5b8e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8e0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b55260 ["COPY", "register:0:8", ["register:4048:8"]]
- 00b55260 ["INT_ADD", "register:40f0:8", ["const:b55260:8", "const:4:8"]]
- 00b55260 ["CALLIND", null, ["register:0:8"]]
+ 00b56254 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b56254 ["INT_ADD", "register:40f0:8", ["const:b56254:8", "const:4:8"]]
+ 00b56254 ["CALLIND", null, ["register:0:8"]]
- 00b5527c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5527c ["INT_ADD", "register:40f0:8", ["const:b5527c:8", "const:4:8"]]
- 00b5527c ["CALLIND", null, ["register:0:8"]]
+ 00b56270 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b56270 ["INT_ADD", "register:40f0:8", ["const:b56270:8", "const:4:8"]]
+ 00b56270 ["CALLIND", null, ["register:0:8"]]
- 00b55288 ["INT_ADD", "register:40f0:8", ["const:b55288:8", "const:4:8"]]
- 00b55288 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b5627c ["INT_ADD", "register:40f0:8", ["const:b5627c:8", "const:4:8"]]
+ 00b5627c ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-bc9f90cdbe3bd7e3a34717531ba9af95"></a>

### [`00b553a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b55/00b553a4.md) → [`00b56398`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b56/00b56398.md) _ZN8firebase4util21JDoubleArrayToVariantEP7_JNIEnvP13_jdoubleArray

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b550.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5c520`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c520.md) · 呼出先 5件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8d0.md) [`00c5b8e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8e0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b553e4 ["COPY", "register:0:8", ["register:4048:8"]]
- 00b553e4 ["INT_ADD", "register:40f0:8", ["const:b553e4:8", "const:4:8"]]
- 00b553e4 ["CALLIND", null, ["register:0:8"]]
+ 00b563d8 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b563d8 ["INT_ADD", "register:40f0:8", ["const:b563d8:8", "const:4:8"]]
+ 00b563d8 ["CALLIND", null, ["register:0:8"]]
- 00b55400 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b55400 ["INT_ADD", "register:40f0:8", ["const:b55400:8", "const:4:8"]]
- 00b55400 ["CALLIND", null, ["register:0:8"]]
+ 00b563f4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b563f4 ["INT_ADD", "register:40f0:8", ["const:b563f4:8", "const:4:8"]]
+ 00b563f4 ["CALLIND", null, ["register:0:8"]]
- 00b5540c ["INT_ADD", "register:40f0:8", ["const:b5540c:8", "const:4:8"]]
- 00b5540c ["CALL", null, ["callee:00c58f30:8"]]
+ 00b56400 ["INT_ADD", "register:40f0:8", ["const:b56400:8", "const:4:8"]]
+ 00b56400 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-121ae0a6c54b15b790715c8f59b392cf"></a>

### [`00b55520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b55/00b55520.md) → [`00b56514`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b56/00b56514.md) _ZN8firebase4util21JObjectArrayToVariantEP7_JNIEnvP13_jobjectArray

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b560.md) · 呼出先 7件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md) [`00c5b4e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b4e0.md)
- 新版 呼出元 1件 [`00c5c530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c530.md) · 呼出先 7件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8d0.md) [`00c5b8e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8e0.md) [`00c5c4b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c4b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b55560 ["COPY", "register:0:8", ["register:4048:8"]]
- 00b55560 ["INT_ADD", "register:40f0:8", ["const:b55560:8", "const:4:8"]]
- 00b55560 ["CALLIND", null, ["register:0:8"]]
+ 00b56554 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b56554 ["INT_ADD", "register:40f0:8", ["const:b56554:8", "const:4:8"]]
+ 00b56554 ["CALLIND", null, ["register:0:8"]]
- 00b55570 ["INT_ADD", "register:40f0:8", ["const:b55570:8", "const:4:8"]]
- 00b55570 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b56564 ["INT_ADD", "register:40f0:8", ["const:b56564:8", "const:4:8"]]
+ 00b56564 ["CALL", null, ["callee:00c58f30:8"]]
- 00b55584 ["INT_ADD", "register:40f0:8", ["const:b55584:8", "const:4:8"]]
- 00b55584 ["CALL", null, ["callee:00c5c6d0:8"]]
+ 00b56578 ["INT_ADD", "register:40f0:8", ["const:b56578:8", "const:4:8"]]
+ 00b56578 ["CALL", null, ["callee:00c5c6d0:8"]]
~~~


<a id="compare-7445ba7586c5f6ff6ee7a673f9ce7180"></a>

### [`00b55aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b55/00b55aac.md) → [`00b56aa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b56/00b56aa0.md) _ZN8firebase4util25ByteBufferToJavaByteArrayEP7_JNIEnvPKhm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b55ad4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b55ad4 ["INT_ADD", "register:40f0:8", ["const:b55ad4:8", "const:4:8"]]
- 00b55ad4 ["CALLIND", null, ["register:0:8"]]
+ 00b56ac8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b56ac8 ["INT_ADD", "register:40f0:8", ["const:b56ac8:8", "const:4:8"]]
+ 00b56ac8 ["CALLIND", null, ["register:0:8"]]
- 00b55af8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b55af8 ["INT_ADD", "register:40f0:8", ["const:b55af8:8", "const:4:8"]]
- 00b55af8 ["CALLIND", null, ["register:0:8"]]
+ 00b56aec ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b56aec ["INT_ADD", "register:40f0:8", ["const:b56aec:8", "const:4:8"]]
+ 00b56aec ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e8786e9f4c075b01ac4a3b13ad41a138"></a>

### [`00b55e34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b55/00b55e34.md) → [`00b56e28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b56/00b56e28.md) _ZN8firebase4util20JniByteArrayToVectorEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b540.md) · 呼出先 1件 [`00c5b730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b730.md)
- 新版 呼出元 1件 [`00c5c510`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c510.md) · 呼出先 1件 [`00c5c700`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c700.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b55e60 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b55e60 ["INT_ADD", "register:40f0:8", ["const:b55e60:8", "const:4:8"]]
- 00b55e60 ["CALLIND", null, ["register:0:8"]]
+ 00b56e54 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b56e54 ["INT_ADD", "register:40f0:8", ["const:b56e54:8", "const:4:8"]]
+ 00b56e54 ["CALLIND", null, ["register:0:8"]]
- 00b55e74 ["INT_ADD", "register:40f0:8", ["const:b55e74:8", "const:4:8"]]
- 00b55e74 ["CALL", null, ["callee:00c5c700:8"]]
+ 00b56e68 ["INT_ADD", "register:40f0:8", ["const:b56e68:8", "const:4:8"]]
+ 00b56e68 ["CALL", null, ["callee:00c5c700:8"]]
- 00b55e94 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b55e94 ["INT_ADD", "register:40f0:8", ["const:b55e94:8", "const:4:8"]]
- 00b55e94 ["CALLIND", null, ["register:0:8"]]
+ 00b56e88 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b56e88 ["INT_ADD", "register:40f0:8", ["const:b56e88:8", "const:4:8"]]
+ 00b56e88 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-53a6c8c25edac743e65eb7d2a10d336d"></a>

### [`00b55eb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b55/00b55eb8.md) → [`00b56eac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b56/00b56eac.md) _ZN8firebase4util22LocalToGlobalReferenceEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b55edc ["COPY", "register:0:8", ["register:4040:8"]]
- 00b55edc ["INT_ADD", "register:40f0:8", ["const:b55edc:8", "const:4:8"]]
- 00b55edc ["CALLIND", null, ["register:0:8"]]
+ 00b56ed0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b56ed0 ["INT_ADD", "register:40f0:8", ["const:b56ed0:8", "const:4:8"]]
+ 00b56ed0 ["CALLIND", null, ["register:0:8"]]
- 00b55ef4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b55ef4 ["INT_ADD", "register:40f0:8", ["const:b55ef4:8", "const:4:8"]]
- 00b55ef4 ["CALLIND", null, ["register:0:8"]]
+ 00b56ee8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b56ee8 ["INT_ADD", "register:40f0:8", ["const:b56ee8:8", "const:4:8"]]
+ 00b56ee8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-3668115c8b3554018716e766a43bb4f1"></a>

### [`00b55f14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b55/00b55f14.md) → [`00b56f08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b56/00b56f08.md) _ZN8firebase4util15ContinueBuilderEP7_JNIEnvP8_jobjectS4_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b55f2c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b55f2c ["INT_ADD", "register:40f0:8", ["const:b55f2c:8", "const:4:8"]]
- 00b55f2c ["CALLIND", null, ["register:0:8"]]
+ 00b56f20 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b56f20 ["INT_ADD", "register:40f0:8", ["const:b56f20:8", "const:4:8"]]
+ 00b56f20 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-bfb21c49eac71cf75bd1e4b80aaf5af9"></a>

### [`00b57034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b57034.md) → [`00b58028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b58/00b58028.md) _ZNSt6__ndk1plIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_12basic_stringIT_T0_T1_EERKS9_S6_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b740.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9b0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5c710`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c710.md) · 呼出先 4件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5b980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b980.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b570a4 ["INT_ADD", "register:40f0:8", ["const:b570a4:8", "const:4:8"]]
- 00b570a4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b58098 ["INT_ADD", "register:40f0:8", ["const:b58098:8", "const:4:8"]]
+ 00b58098 ["CALL", null, ["callee:00c58f30:8"]]
- 00b570c4 ["INT_ADD", "register:40f0:8", ["const:b570c4:8", "const:4:8"]]
- 00b570c4 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b580b8 ["INT_ADD", "register:40f0:8", ["const:b580b8:8", "const:4:8"]]
+ 00b580b8 ["CALL", null, ["callee:00c590a0:8"]]
- 00b57114 ["INT_ADD", "register:40f0:8", ["const:b57114:8", "const:4:8"]]
- 00b57114 ["CALL", null, ["callee:00c5b980:8"]]
+ 00b58108 ["INT_ADD", "register:40f0:8", ["const:b58108:8", "const:4:8"]]
+ 00b58108 ["CALL", null, ["callee:00c5b980:8"]]
~~~


<a id="compare-b21c814c73cefd75f8b3adbd3f60de58"></a>

### [`00b57460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b57460.md) → [`00b58454`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b58/00b58454.md) _ZN8firebase4util27GetAndClearExceptionMessageEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b040.md) · 呼出先 1件 [`00c5b020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b020.md)
- 新版 呼出元 1件 [`00c5c010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c010.md) · 呼出先 1件 [`00c5bff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bff0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b57480 ["COPY", "register:0:8", ["register:4048:8"]]
- 00b57480 ["INT_ADD", "register:40f0:8", ["const:b57480:8", "const:4:8"]]
- 00b57480 ["CALLIND", null, ["register:0:8"]]
+ 00b58474 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b58474 ["INT_ADD", "register:40f0:8", ["const:b58474:8", "const:4:8"]]
+ 00b58474 ["CALLIND", null, ["register:0:8"]]
- 00b57498 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b57498 ["INT_ADD", "register:40f0:8", ["const:b57498:8", "const:4:8"]]
- 00b57498 ["CALLIND", null, ["register:0:8"]]
+ 00b5848c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5848c ["INT_ADD", "register:40f0:8", ["const:b5848c:8", "const:4:8"]]
+ 00b5848c ["CALLIND", null, ["register:0:8"]]
- 00b574a8 ["INT_ADD", "register:40f0:8", ["const:b574a8:8", "const:4:8"]]
- 00b574a8 ["CALL", null, ["callee:00c5bff0:8"]]
+ 00b5849c ["INT_ADD", "register:40f0:8", ["const:b5849c:8", "const:4:8"]]
+ 00b5849c ["CALL", null, ["callee:00c5bff0:8"]]
~~~


<a id="compare-2df2d2a4297b08469ddee82ec0e17002"></a>

### [`00b5793c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b5793c.md) → [`00b58930`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b58/00b58930.md) DetachJVMThreads

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00b579b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b579b4.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00b589a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b58/00b589a8.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5796c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5796c ["INT_ADD", "register:40f0:8", ["const:b5796c:8", "const:4:8"]]
- 00b5796c ["CALLIND", null, ["register:0:8"]]
+ 00b58960 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b58960 ["INT_ADD", "register:40f0:8", ["const:b58960:8", "const:4:8"]]
+ 00b58960 ["CALLIND", null, ["register:0:8"]]
- 00b5797c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5797c ["INT_ADD", "register:40f0:8", ["const:b5797c:8", "const:4:8"]]
- 00b5797c ["CALLIND", null, ["register:0:8"]]
+ 00b58970 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b58970 ["INT_ADD", "register:40f0:8", ["const:b58970:8", "const:4:8"]]
+ 00b58970 ["CALLIND", null, ["register:0:8"]]
- 00b579a0 ["INT_ADD", "register:40f0:8", ["const:b579a0:8", "const:4:8"]]
- 00b579a0 ["CALL", null, ["callee:00c58f80:8"]]
+ 00b58994 ["INT_ADD", "register:40f0:8", ["const:b58994:8", "const:4:8"]]
+ 00b58994 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-c8272631ee9a014ec2c63f2b2a9a59f5"></a>

### [`00b57a58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b57a58.md) → [`00b58a4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b58/00b58a4c.md) _ZN8firebase4util16GetJNIEnvFromAppEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b410.md) · 呼出先 3件 [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b320.md) [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md)
- 新版 呼出元 1件 [`00c5c3e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c3e0.md) · 呼出先 3件 [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md) [`00c5c2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c2f0.md) [`00c5c300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c300.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b57a60 ["INT_ADD", "register:40f0:8", ["const:b57a60:8", "const:4:8"]]
- 00b57a60 ["CALL", null, ["callee:00c5c2f0:8"]]
+ 00b58a54 ["INT_ADD", "register:40f0:8", ["const:b58a54:8", "const:4:8"]]
+ 00b58a54 ["CALL", null, ["callee:00c5c2f0:8"]]
- 00b57a68 ["INT_ADD", "register:40f0:8", ["const:b57a68:8", "const:4:8"]]
- 00b57a68 ["CALL", null, ["callee:00c5c300:8"]]
+ 00b58a5c ["INT_ADD", "register:40f0:8", ["const:b58a5c:8", "const:4:8"]]
+ 00b58a5c ["CALL", null, ["callee:00c5c300:8"]]
~~~


<a id="compare-ecc1582879b88934367dbd4890dd52d5"></a>

### [`00b57a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b57a80.md) → [`00b58a74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b58/00b58a74.md) _ZN8firebase7Variant18set_mutable_stringERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEb

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b650.md) · 呼出先 3件 [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a9d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9d0.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md)
- 新版 呼出元 1件 [`00c5c620`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c620.md) · 呼出先 3件 [`00c5b8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8d0.md) [`00c5b9a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b9a0.md) [`00c5c150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c150.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b57abc ["INT_ADD", "register:40f0:8", ["const:b57abc:8", "const:4:8"]]
- 00b57abc ["CALL", null, ["callee:00c5b8d0:8"]]
+ 00b58ab0 ["INT_ADD", "register:40f0:8", ["const:b58ab0:8", "const:4:8"]]
+ 00b58ab0 ["CALL", null, ["callee:00c5b8d0:8"]]
- 00b57ae0 ["INT_ADD", "register:40f0:8", ["const:b57ae0:8", "const:4:8"]]
- 00b57ae0 ["CALL", null, ["callee:00c5b9a0:8"]]
+ 00b58ad4 ["INT_ADD", "register:40f0:8", ["const:b58ad4:8", "const:4:8"]]
+ 00b58ad4 ["CALL", null, ["callee:00c5b9a0:8"]]
- 00b57af0 ["INT_ADD", "register:40f0:8", ["const:b57af0:8", "const:4:8"]]
- 00b57af0 ["CALL", null, ["callee:00c5b8d0:8"]]
+ 00b58ae4 ["INT_ADD", "register:40f0:8", ["const:b58ae4:8", "const:4:8"]]
+ 00b58ae4 ["CALL", null, ["callee:00c5b8d0:8"]]
~~~


<a id="compare-a9719e226df47a0334227ae8f7a0984d"></a>

### [`00b57b28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b57b28.md) → [`00b58b1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b58/00b58b1c.md) _ZNSt6__ndk16__treeINS_12__value_typeIPKcNS_4listIN8firebase4util12CallbackDataENS_9allocatorIS7_EEEEEENS_19__map_value_compareIS3_SB_NS_4le

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b6e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6e0.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b6e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6e0.md)
- 新版 呼出元 1件 [`00c5c6b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c6b0.md) · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5c6b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c6b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b57b48 ["INT_ADD", "register:40f0:8", ["const:b57b48:8", "const:4:8"]]
- 00b57b48 ["CALL", null, ["callee:00c5c6b0:8"]]
+ 00b58b3c ["INT_ADD", "register:40f0:8", ["const:b58b3c:8", "const:4:8"]]
+ 00b58b3c ["CALL", null, ["callee:00c5c6b0:8"]]
- 00b57b54 ["INT_ADD", "register:40f0:8", ["const:b57b54:8", "const:4:8"]]
- 00b57b54 ["CALL", null, ["callee:00c5c6b0:8"]]
+ 00b58b48 ["INT_ADD", "register:40f0:8", ["const:b58b48:8", "const:4:8"]]
+ 00b58b48 ["CALL", null, ["callee:00c5c6b0:8"]]
- 00b57b8c ["INT_ADD", "register:40f0:8", ["const:b57b8c:8", "const:4:8"]]
- 00b57b8c ["CALL", null, ["callee:00c58f50:8"]]
+ 00b58b80 ["INT_ADD", "register:40f0:8", ["const:b58b80:8", "const:4:8"]]
+ 00b58b80 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-d289c001e9f66bc2894587b3a4a4f24a"></a>

### [`00b57d54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b57d54.md) → [`00b58d48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b58/00b58d48.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5c650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c650.md) · 呼出先 3件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b57dc0 ["INT_ADD", "register:40f0:8", ["const:b57dc0:8", "const:4:8"]]
- 00b57dc0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b58db4 ["INT_ADD", "register:40f0:8", ["const:b58db4:8", "const:4:8"]]
+ 00b58db4 ["CALL", null, ["callee:00c58f30:8"]]
- 00b57de0 ["INT_ADD", "register:40f0:8", ["const:b57de0:8", "const:4:8"]]
- 00b57de0 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b58dd4 ["INT_ADD", "register:40f0:8", ["const:b58dd4:8", "const:4:8"]]
+ 00b58dd4 ["CALL", null, ["callee:00c590a0:8"]]
- 00b57df8 ["INT_ADD", "register:40f0:8", ["const:b57df8:8", "const:4:8"]]
- 00b57df8 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00b58dec ["INT_ADD", "register:40f0:8", ["const:b58dec:8", "const:4:8"]]
+ 00b58dec ["CALL", null, ["callee:00c5c1e0:8"]]
~~~


<a id="compare-19018873199b9c8db6cf8c4556192b1e"></a>

### [`00b57dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b57dfc.md) → [`00b58df0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b58/00b58df0.md) _ZNSt6__ndk16__treeINS_12__value_typeIN8firebase7VariantES3_EENS_19__map_value_compareIS3_S4_NS_4lessIS3_EELb1EEENS_9allocatorIS4_EEE25__emp

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6c0.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md) [`00c5b670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b670.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md)
- 新版 呼出元 1件 [`00c5c690`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c690.md) · 呼出先 4件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5b8e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8e0.md) [`00c5c640`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c640.md) [`00c5c680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c680.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b57e38 ["INT_ADD", "register:40f0:8", ["const:b57e38:8", "const:4:8"]]
- 00b57e38 ["CALL", null, ["callee:00c5c640:8"]]
+ 00b58e2c ["INT_ADD", "register:40f0:8", ["const:b58e2c:8", "const:4:8"]]
+ 00b58e2c ["CALL", null, ["callee:00c5c640:8"]]
- 00b57e5c ["INT_ADD", "register:40f0:8", ["const:b57e5c:8", "const:4:8"]]
- 00b57e5c ["CALL", null, ["callee:00c5c640:8"]]
+ 00b58e50 ["INT_ADD", "register:40f0:8", ["const:b58e50:8", "const:4:8"]]
+ 00b58e50 ["CALL", null, ["callee:00c5c640:8"]]
- 00b57e9c ["INT_ADD", "register:40f0:8", ["const:b57e9c:8", "const:4:8"]]
- 00b57e9c ["CALL", null, ["callee:00c58f30:8"]]
+ 00b58e90 ["INT_ADD", "register:40f0:8", ["const:b58e90:8", "const:4:8"]]
+ 00b58e90 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-61e877eab61435b5ff4f3a1b16103921"></a>

### [`00b57f18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b57f18.md) → [`00b58f0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b58/00b58f0c.md) _ZNSt6__ndk16vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEE21__push_back_slow_pathIRKS6_EEvOT_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b710.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md) [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md)
- 新版 呼出元 1件 [`00c5c6e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c6e0.md) · 呼出先 4件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md) [`00c5c650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c650.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b57f98 ["INT_ADD", "register:40f0:8", ["const:b57f98:8", "const:4:8"]]
- 00b57f98 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b58f8c ["INT_ADD", "register:40f0:8", ["const:b58f8c:8", "const:4:8"]]
+ 00b58f8c ["CALL", null, ["callee:00c58f30:8"]]
- 00b57fb0 ["INT_ADD", "register:40f0:8", ["const:b57fb0:8", "const:4:8"]]
- 00b57fb0 ["CALL", null, ["callee:00c5c650:8"]]
+ 00b58fa4 ["INT_ADD", "register:40f0:8", ["const:b58fa4:8", "const:4:8"]]
+ 00b58fa4 ["CALL", null, ["callee:00c5c650:8"]]
- 00b5802c ["INT_ADD", "register:40f0:8", ["const:b5802c:8", "const:4:8"]]
- 00b5802c ["CALL", null, ["callee:00c58f50:8"]]
+ 00b59020 ["INT_ADD", "register:40f0:8", ["const:b59020:8", "const:4:8"]]
+ 00b59020 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-11805ceb7b5ba6a37faf7294902eda18"></a>

### [`00b58068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b58068.md) → [`00b5905c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b59/00b5905c.md) _ZNSt6__ndk16vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEE21__push_back_slow_pathIS6_EEvOT_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b720.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5c6f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c6f0.md) · 呼出先 3件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b580e8 ["INT_ADD", "register:40f0:8", ["const:b580e8:8", "const:4:8"]]
- 00b580e8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b590dc ["INT_ADD", "register:40f0:8", ["const:b590dc:8", "const:4:8"]]
+ 00b590dc ["CALL", null, ["callee:00c58f30:8"]]
- 00b5818c ["INT_ADD", "register:40f0:8", ["const:b5818c:8", "const:4:8"]]
- 00b5818c ["CALL", null, ["callee:00c58f50:8"]]
+ 00b59180 ["INT_ADD", "register:40f0:8", ["const:b59180:8", "const:4:8"]]
+ 00b59180 ["CALL", null, ["callee:00c58f50:8"]]
- 00b581c4 ["INT_ADD", "register:40f0:8", ["const:b581c4:8", "const:4:8"]]
- 00b581c4 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00b591b8 ["INT_ADD", "register:40f0:8", ["const:b591b8:8", "const:4:8"]]
+ 00b591b8 ["CALL", null, ["callee:00c5c1e0:8"]]
~~~


<a id="compare-03cb6c87a0fdcfc6e1e0b88cf5646636"></a>

### [`00b581c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b581c8.md) → [`00b591bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b59/00b591bc.md) _ZNSt6__ndk16vectorIN8firebase7VariantENS_9allocatorIS2_EEE21__push_back_slow_pathIS2_EEvOT_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b6f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6f0.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5c6c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c6c0.md) · 呼出先 5件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5b8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8d0.md) [`00c5b8e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b8e0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b58250 ["INT_ADD", "register:40f0:8", ["const:b58250:8", "const:4:8"]]
- 00b58250 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b59244 ["INT_ADD", "register:40f0:8", ["const:b59244:8", "const:4:8"]]
+ 00b59244 ["CALL", null, ["callee:00c58f30:8"]]
- 00b58274 ["INT_ADD", "register:40f0:8", ["const:b58274:8", "const:4:8"]]
- 00b58274 ["CALL", null, ["callee:00c5b8e0:8"]]
+ 00b59268 ["INT_ADD", "register:40f0:8", ["const:b59268:8", "const:4:8"]]
+ 00b59268 ["CALL", null, ["callee:00c5b8e0:8"]]
- 00b582a0 ["INT_ADD", "register:40f0:8", ["const:b582a0:8", "const:4:8"]]
- 00b582a0 ["CALL", null, ["callee:00c5b8e0:8"]]
+ 00b59294 ["INT_ADD", "register:40f0:8", ["const:b59294:8", "const:4:8"]]
+ 00b59294 ["CALL", null, ["callee:00c5b8e0:8"]]
~~~


<a id="compare-d19d6aa3909e304cffb4b07ac0ede25f"></a>

### [`00b5832c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b5832c.md) → [`00b59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b59/00b59320.md) _ZNSt6__ndk16vectorIhNS_9allocatorIhEEE8__appendEm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b730.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5c700`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c700.md) · 呼出先 5件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b583a8 ["INT_ADD", "register:40f0:8", ["const:b583a8:8", "const:4:8"]]
- 00b583a8 ["CALL", null, ["callee:00c59130:8"]]
+ 00b5939c ["INT_ADD", "register:40f0:8", ["const:b5939c:8", "const:4:8"]]
+ 00b5939c ["CALL", null, ["callee:00c59130:8"]]
- 00b583c0 ["INT_ADD", "register:40f0:8", ["const:b583c0:8", "const:4:8"]]
- 00b583c0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b593b4 ["INT_ADD", "register:40f0:8", ["const:b593b4:8", "const:4:8"]]
+ 00b593b4 ["CALL", null, ["callee:00c58f30:8"]]
- 00b583dc ["INT_ADD", "register:40f0:8", ["const:b583dc:8", "const:4:8"]]
- 00b583dc ["CALL", null, ["callee:00c59130:8"]]
+ 00b593d0 ["INT_ADD", "register:40f0:8", ["const:b593d0:8", "const:4:8"]]
+ 00b593d0 ["CALL", null, ["callee:00c59130:8"]]
~~~


<a id="compare-ab745ab8e7af7484a2f10961d7b82fae"></a>

### [`00b5843c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b5843c.md) → [`00b59430`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b59/00b59430.md) _ZNSt6__ndk16__treeINS_12__value_typeIPKcNS_4listIN8firebase4util12CallbackDataENS_9allocatorIS7_EEEEEENS_19__map_value_compareIS3_SB_NS_4le

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b6d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6d0.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6a0.md)
- 新版 呼出元 1件 [`00c5c6a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c6a0.md) · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5c670`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c670.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b584b8 ["INT_ADD", "register:40f0:8", ["const:b584b8:8", "const:4:8"]]
- 00b584b8 ["CALL", null, ["callee:00c5c670:8"]]
+ 00b594ac ["INT_ADD", "register:40f0:8", ["const:b594ac:8", "const:4:8"]]
+ 00b594ac ["CALL", null, ["callee:00c5c670:8"]]
- 00b584f0 ["INT_ADD", "register:40f0:8", ["const:b584f0:8", "const:4:8"]]
- 00b584f0 ["CALL", null, ["callee:00c58f50:8"]]
+ 00b594e4 ["INT_ADD", "register:40f0:8", ["const:b594e4:8", "const:4:8"]]
+ 00b594e4 ["CALL", null, ["callee:00c58f50:8"]]
- 00b58504 ["INT_ADD", "register:40f0:8", ["const:b58504:8", "const:4:8"]]
- 00b58504 ["CALL", null, ["callee:00c58f50:8"]]
+ 00b594f8 ["INT_ADD", "register:40f0:8", ["const:b594f8:8", "const:4:8"]]
+ 00b594f8 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-40ddee452add4ae8ad5851431ab36018"></a>

### [`00b588cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b588cc.md) → [`00b598c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b59/00b598c0.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) · 呼出先 2件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b170.md)
- 新版 呼出元 1件 [`00c59020`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59020.md) · 呼出先 2件 [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5c140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c140.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b58930 ["INT_ADD", "register:40f0:8", ["const:b58930:8", "const:4:8"]]
- 00b58930 ["CALL", null, ["callee:00c5c140:8"]]
+ 00b59924 ["INT_ADD", "register:40f0:8", ["const:b59924:8", "const:4:8"]]
+ 00b59924 ["CALL", null, ["callee:00c5c140:8"]]
- 00b58958 ["INT_ADD", "register:40f0:8", ["const:b58958:8", "const:4:8"]]
- 00b58958 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b5994c ["INT_ADD", "register:40f0:8", ["const:b5994c:8", "const:4:8"]]
+ 00b5994c ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-757e15b8e6ac1594f50e7711ab3dd816"></a>

### [`00b58990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b58990.md) → [`00b59984`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b59/00b59984.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEmmmmmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5a9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9b0.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5b980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b980.md) · 呼出先 4件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b58a2c ["INT_ADD", "register:40f0:8", ["const:b58a2c:8", "const:4:8"]]
- 00b58a2c ["CALL", null, ["callee:00c58f30:8"]]
+ 00b59a20 ["INT_ADD", "register:40f0:8", ["const:b59a20:8", "const:4:8"]]
+ 00b59a20 ["CALL", null, ["callee:00c58f30:8"]]
- 00b58a44 ["INT_ADD", "register:40f0:8", ["const:b58a44:8", "const:4:8"]]
- 00b58a44 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b59a38 ["INT_ADD", "register:40f0:8", ["const:b59a38:8", "const:4:8"]]
+ 00b59a38 ["CALL", null, ["callee:00c590a0:8"]]
- 00b58a64 ["INT_ADD", "register:40f0:8", ["const:b58a64:8", "const:4:8"]]
- 00b58a64 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b59a58 ["INT_ADD", "register:40f0:8", ["const:b59a58:8", "const:4:8"]]
+ 00b59a58 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-c0d7c8817379f4fadb3cd0f516428a16"></a>

### [`00b58b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b58b8c.md) → [`00b59b80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b59/00b59b80.md) _ZN8firebase8internal16JObjectReferenceC1EP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b260.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00c5c230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c230.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b58bc4 ["COPY", "register:0:8", ["register:4048:8"]]
- 00b58bc4 ["INT_ADD", "register:40f0:8", ["const:b58bc4:8", "const:4:8"]]
- 00b58bc4 ["CALLIND", null, ["register:0:8"]]
+ 00b59bb8 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b59bb8 ["INT_ADD", "register:40f0:8", ["const:b59bb8:8", "const:4:8"]]
+ 00b59bb8 ["CALLIND", null, ["register:0:8"]]
- 00b58bf0 ["INT_ADD", "register:40f0:8", ["const:b58bf0:8", "const:4:8"]]
- 00b58bf0 ["CALL", null, ["callee:00c58f80:8"]]
+ 00b59be4 ["INT_ADD", "register:40f0:8", ["const:b59be4:8", "const:4:8"]]
+ 00b59be4 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-92198059498de60cef73618776d86978"></a>

### [`00b58bf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b58bf4.md) → [`00b59be8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b59/00b59be8.md) _ZN8firebase8internal16JObjectReference9GetJavaVMEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b58c20 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b58c20 ["INT_ADD", "register:40f0:8", ["const:b58c20:8", "const:4:8"]]
- 00b58c20 ["CALLIND", null, ["register:0:8"]]
+ 00b59c14 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b59c14 ["INT_ADD", "register:40f0:8", ["const:b59c14:8", "const:4:8"]]
+ 00b59c14 ["CALLIND", null, ["register:0:8"]]
- 00b58c48 ["INT_ADD", "register:40f0:8", ["const:b58c48:8", "const:4:8"]]
- 00b58c48 ["CALL", null, ["callee:00c58f80:8"]]
+ 00b59c3c ["INT_ADD", "register:40f0:8", ["const:b59c3c:8", "const:4:8"]]
+ 00b59c3c ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-94a507199ae3a9945641a6c1f281791c"></a>

### [`00b58c4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b58c4c.md) → [`00b59c40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b59/00b59c40.md) _ZN8firebase8internal16JObjectReferenceC2EP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b58c8c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b58c8c ["INT_ADD", "register:40f0:8", ["const:b58c8c:8", "const:4:8"]]
- 00b58c8c ["CALLIND", null, ["register:0:8"]]
+ 00b59c80 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b59c80 ["INT_ADD", "register:40f0:8", ["const:b59c80:8", "const:4:8"]]
+ 00b59c80 ["CALLIND", null, ["register:0:8"]]
- 00b58cac ["COPY", "register:0:8", ["register:4040:8"]]
- 00b58cac ["INT_ADD", "register:40f0:8", ["const:b58cac:8", "const:4:8"]]
- 00b58cac ["CALLIND", null, ["register:0:8"]]
+ 00b59ca0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b59ca0 ["INT_ADD", "register:40f0:8", ["const:b59ca0:8", "const:4:8"]]
+ 00b59ca0 ["CALLIND", null, ["register:0:8"]]
- 00b58cd8 ["INT_ADD", "register:40f0:8", ["const:b58cd8:8", "const:4:8"]]
- 00b58cd8 ["CALL", null, ["callee:00c58f80:8"]]
+ 00b59ccc ["INT_ADD", "register:40f0:8", ["const:b59ccc:8", "const:4:8"]]
+ 00b59ccc ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-b409431cc09961e9934038a954c512d3"></a>

### [`00b58cdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b58cdc.md) → [`00b59cd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b59/00b59cd0.md) _ZN8firebase8internal16JObjectReference10InitializeEP7_JavaVMP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b58d04 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b58d04 ["INT_ADD", "register:40f0:8", ["const:b58d04:8", "const:4:8"]]
- 00b58d04 ["CALLIND", null, ["register:0:8"]]
+ 00b59cf8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b59cf8 ["INT_ADD", "register:40f0:8", ["const:b59cf8:8", "const:4:8"]]
+ 00b59cf8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-51a7248cc47ad2270f58484502bca89d"></a>

### [`00b58d18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b58d18.md) → [`00b59d0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b59/00b59d0c.md) _ZN8firebase8internal16JObjectReferenceC2ERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b270.md) · 呼出先 1件 [`00c5b490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b490.md)
- 新版 呼出元 1件 [`00c5c240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c240.md) · 呼出先 1件 [`00c5c460`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c460.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b58d3c ["INT_ADD", "register:40f0:8", ["const:b58d3c:8", "const:4:8"]]
- 00b58d3c ["CALL", null, ["callee:00c5c460:8"]]
+ 00b59d30 ["INT_ADD", "register:40f0:8", ["const:b59d30:8", "const:4:8"]]
+ 00b59d30 ["CALL", null, ["callee:00c5c460:8"]]
- 00b58d5c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b58d5c ["INT_ADD", "register:40f0:8", ["const:b58d5c:8", "const:4:8"]]
- 00b58d5c ["CALLIND", null, ["register:0:8"]]
+ 00b59d50 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b59d50 ["INT_ADD", "register:40f0:8", ["const:b59d50:8", "const:4:8"]]
+ 00b59d50 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d3939c2251b9e1416bfa0a1cc973a53f"></a>

### [`00b58da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b58da4.md) → [`00b59d98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b59/00b59d98.md) _ZN8firebase8internal16JObjectReferenceD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c5b280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b280.md) [`00c5b290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b290.md) · 呼出先 1件 [`00c5b490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b490.md)
- 新版 呼出元 2件 [`00c5c250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c250.md) [`00c5c260`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c260.md) · 呼出先 1件 [`00c5c460`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c460.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b58dbc ["INT_ADD", "register:40f0:8", ["const:b58dbc:8", "const:4:8"]]
- 00b58dbc ["CALL", null, ["callee:00c5c460:8"]]
+ 00b59db0 ["INT_ADD", "register:40f0:8", ["const:b59db0:8", "const:4:8"]]
+ 00b59db0 ["CALL", null, ["callee:00c5c460:8"]]
- 00b58dd4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b58dd4 ["INT_ADD", "register:40f0:8", ["const:b58dd4:8", "const:4:8"]]
- 00b58dd4 ["CALLIND", null, ["register:0:8"]]
+ 00b59dc8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b59dc8 ["INT_ADD", "register:40f0:8", ["const:b59dc8:8", "const:4:8"]]
+ 00b59dc8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-30b9c4e08895b2ae4b8084062b83693b"></a>

### [`00b58de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b58de8.md) → [`00b59ddc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b59/00b59ddc.md) _ZN8firebase8internal16JObjectReference3SetEP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b250.md) · 呼出先 1件 [`00c5b490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b490.md)
- 新版 呼出元 1件 [`00c5c220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c220.md) · 呼出先 1件 [`00c5c460`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c460.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b58e08 ["INT_ADD", "register:40f0:8", ["const:b58e08:8", "const:4:8"]]
- 00b58e08 ["CALL", null, ["callee:00c5c460:8"]]
+ 00b59dfc ["INT_ADD", "register:40f0:8", ["const:b59dfc:8", "const:4:8"]]
+ 00b59dfc ["CALL", null, ["callee:00c5c460:8"]]
- 00b58e28 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b58e28 ["INT_ADD", "register:40f0:8", ["const:b58e28:8", "const:4:8"]]
- 00b58e28 ["CALLIND", null, ["register:0:8"]]
+ 00b59e1c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b59e1c ["INT_ADD", "register:40f0:8", ["const:b59e1c:8", "const:4:8"]]
+ 00b59e1c ["CALLIND", null, ["register:0:8"]]
- 00b58e54 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b58e54 ["INT_ADD", "register:40f0:8", ["const:b58e54:8", "const:4:8"]]
- 00b58e54 ["CALLIND", null, ["register:0:8"]]
+ 00b59e48 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b59e48 ["INT_ADD", "register:40f0:8", ["const:b59e48:8", "const:4:8"]]
+ 00b59e48 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-761bf50686a7a2b2fa45b59d23eabb26"></a>

### [`00b58e6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b58e6c.md) → [`00b59e60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b59/00b59e60.md) _ZN8firebase8internal16JObjectReferenceaSERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b490.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5c460`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c460.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b58ea0 ["INT_ADD", "register:40f0:8", ["const:b58ea0:8", "const:4:8"]]
- 00b58ea0 ["CALL", null, ["callee:00c5c460:8"]]
+ 00b59e94 ["INT_ADD", "register:40f0:8", ["const:b59e94:8", "const:4:8"]]
+ 00b59e94 ["CALL", null, ["callee:00c5c460:8"]]
- 00b58ec4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b58ec4 ["INT_ADD", "register:40f0:8", ["const:b58ec4:8", "const:4:8"]]
- 00b58ec4 ["CALLIND", null, ["register:0:8"]]
+ 00b59eb8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b59eb8 ["INT_ADD", "register:40f0:8", ["const:b59eb8:8", "const:4:8"]]
+ 00b59eb8 ["CALLIND", null, ["register:0:8"]]
- 00b58eec ["COPY", "register:0:8", ["register:4040:8"]]
- 00b58eec ["INT_ADD", "register:40f0:8", ["const:b58eec:8", "const:4:8"]]
- 00b58eec ["CALLIND", null, ["register:0:8"]]
+ 00b59ee0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b59ee0 ["INT_ADD", "register:40f0:8", ["const:b59ee0:8", "const:4:8"]]
+ 00b59ee0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-db4e62a89210d8a525490644d6ebaaa0"></a>

### [`00b58f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b58f40.md) → [`00b59f34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b59/00b59f34.md) _ZN8firebase8internal16JObjectReference3SetEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b58f84 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b58f84 ["INT_ADD", "register:40f0:8", ["const:b58f84:8", "const:4:8"]]
- 00b58f84 ["CALLIND", null, ["register:0:8"]]
+ 00b59f78 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b59f78 ["INT_ADD", "register:40f0:8", ["const:b59f78:8", "const:4:8"]]
+ 00b59f78 ["CALLIND", null, ["register:0:8"]]
- 00b58fa0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b58fa0 ["INT_ADD", "register:40f0:8", ["const:b58fa0:8", "const:4:8"]]
- 00b58fa0 ["CALLIND", null, ["register:0:8"]]
+ 00b59f94 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b59f94 ["INT_ADD", "register:40f0:8", ["const:b59f94:8", "const:4:8"]]
+ 00b59f94 ["CALLIND", null, ["register:0:8"]]
- 00b58fc0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b58fc0 ["INT_ADD", "register:40f0:8", ["const:b58fc0:8", "const:4:8"]]
- 00b58fc0 ["CALLIND", null, ["register:0:8"]]
+ 00b59fb4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b59fb4 ["INT_ADD", "register:40f0:8", ["const:b59fb4:8", "const:4:8"]]
+ 00b59fb4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-644aa99529a0dd82860ddb9821447057"></a>

### [`00b58ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b58/00b58ff0.md) → [`00b59fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b59/00b59fe4.md) _ZNK8firebase8internal16JObjectReference11GetLocalRefEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b2a0.md) · 呼出先 1件 [`00c5b490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b490.md)
- 新版 呼出元 1件 [`00c5c270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c270.md) · 呼出先 1件 [`00c5c460`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c460.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b59008 ["INT_ADD", "register:40f0:8", ["const:b59008:8", "const:4:8"]]
- 00b59008 ["CALL", null, ["callee:00c5c460:8"]]
+ 00b59ffc ["INT_ADD", "register:40f0:8", ["const:b59ffc:8", "const:4:8"]]
+ 00b59ffc ["CALL", null, ["callee:00c5c460:8"]]
~~~


<a id="compare-24c5196a99cae0267beff8a275d5b17c"></a>

### [`00b5903c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b59/00b5903c.md) → [`00b5a030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5a/00b5a030.md) _ZN8firebase8internal16JObjectReference18FromLocalReferenceEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b240.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00c5c210`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c210.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b59078 ["COPY", "register:0:8", ["register:4048:8"]]
- 00b59078 ["INT_ADD", "register:40f0:8", ["const:b59078:8", "const:4:8"]]
- 00b59078 ["CALLIND", null, ["register:0:8"]]
+ 00b5a06c ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b5a06c ["INT_ADD", "register:40f0:8", ["const:b5a06c:8", "const:4:8"]]
+ 00b5a06c ["CALLIND", null, ["register:0:8"]]
- 00b59098 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b59098 ["INT_ADD", "register:40f0:8", ["const:b59098:8", "const:4:8"]]
- 00b59098 ["CALLIND", null, ["register:0:8"]]
+ 00b5a08c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5a08c ["INT_ADD", "register:40f0:8", ["const:b5a08c:8", "const:4:8"]]
+ 00b5a08c ["CALLIND", null, ["register:0:8"]]
- 00b590b0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b590b0 ["INT_ADD", "register:40f0:8", ["const:b590b0:8", "const:4:8"]]
- 00b590b0 ["CALLIND", null, ["register:0:8"]]
+ 00b5a0a4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5a0a4 ["INT_ADD", "register:40f0:8", ["const:b5a0a4:8", "const:4:8"]]
+ 00b5a0a4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2c186a13235b044a1b537a9fbaa2544e"></a>

### [`00b5ac50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5a/00b5ac50.md) → [`00b5bc44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5b/00b5bc44.md) FUN_00b5bc44

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 9件 [`00b5a174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5a/00b5a174.md) [`00b5d6d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5d6d4.md) [`00b5d798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5d798.md) [`00b71e50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b71/00b71e50.md) [`00b72ff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b72/00b72ff8.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 9件 [`00b5b168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5b/00b5b168.md) [`00b5e6c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5e/00b5e6c8.md) [`00b5e78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5e/00b5e78c.md) [`00b72e44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b72/00b72e44.md) [`00b73fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b73/00b73fec.md) · 呼出先 5件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c59020`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59020.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5ac8c ["INT_ADD", "register:40f0:8", ["const:b5ac8c:8", "const:4:8"]]
- 00b5ac8c ["CALL", null, ["callee:00c59080:8"]]
+ 00b5bc80 ["INT_ADD", "register:40f0:8", ["const:b5bc80:8", "const:4:8"]]
+ 00b5bc80 ["CALL", null, ["callee:00c59080:8"]]
- 00b5aca4 ["INT_ADD", "register:40f0:8", ["const:b5aca4:8", "const:4:8"]]
- 00b5aca4 ["CALL", null, ["callee:00c59080:8"]]
+ 00b5bc98 ["INT_ADD", "register:40f0:8", ["const:b5bc98:8", "const:4:8"]]
+ 00b5bc98 ["CALL", null, ["callee:00c59080:8"]]
- 00b5ace4 ["INT_ADD", "register:40f0:8", ["const:b5ace4:8", "const:4:8"]]
- 00b5ace4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b5bcd8 ["INT_ADD", "register:40f0:8", ["const:b5bcd8:8", "const:4:8"]]
+ 00b5bcd8 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-764a124dff01e4469ab17a6d101d16ac"></a>

### [`00b5ad38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5a/00b5ad38.md) → [`00b5bd2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5b/00b5bd2c.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_mmRKS4_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b8c0.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5c890`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c890.md) · 呼出先 3件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5adb8 ["INT_ADD", "register:40f0:8", ["const:b5adb8:8", "const:4:8"]]
- 00b5adb8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b5bdac ["INT_ADD", "register:40f0:8", ["const:b5bdac:8", "const:4:8"]]
+ 00b5bdac ["CALL", null, ["callee:00c58f30:8"]]
- 00b5add8 ["INT_ADD", "register:40f0:8", ["const:b5add8:8", "const:4:8"]]
- 00b5add8 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b5bdcc ["INT_ADD", "register:40f0:8", ["const:b5bdcc:8", "const:4:8"]]
+ 00b5bdcc ["CALL", null, ["callee:00c590a0:8"]]
- 00b5adf4 ["INT_ADD", "register:40f0:8", ["const:b5adf4:8", "const:4:8"]]
- 00b5adf4 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00b5bde8 ["INT_ADD", "register:40f0:8", ["const:b5bde8:8", "const:4:8"]]
+ 00b5bde8 ["CALL", null, ["callee:00c5c1e0:8"]]
~~~


<a id="compare-54deb9c67cd6d978c4c6fd20f7eea1b6"></a>

### [`00b5adf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5a/00b5adf8.md) → [`00b5bdec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5b/00b5bdec.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_10unique_ptrIN8firebase10app_common7AppDa

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b8d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b8d0.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5c8a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c8a0.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5ae94 ["INT_ADD", "register:40f0:8", ["const:b5ae94:8", "const:4:8"]]
- 00b5ae94 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b5be88 ["INT_ADD", "register:40f0:8", ["const:b5be88:8", "const:4:8"]]
+ 00b5be88 ["CALL", null, ["callee:00c590f0:8"]]
- 00b5aed4 ["INT_ADD", "register:40f0:8", ["const:b5aed4:8", "const:4:8"]]
- 00b5aed4 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b5bec8 ["INT_ADD", "register:40f0:8", ["const:b5bec8:8", "const:4:8"]]
+ 00b5bec8 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-86fab598e7bbd623f37ab30fd6fa0924"></a>

### [`00b5af18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5a/00b5af18.md) → [`00b5bf0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5b/00b5bf0c.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_10unique_ptrIN8firebase10app_common7AppDa

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b8e0.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00c5c8b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c8b0.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5afb0 ["INT_ADD", "register:40f0:8", ["const:b5afb0:8", "const:4:8"]]
- 00b5afb0 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b5bfa4 ["INT_ADD", "register:40f0:8", ["const:b5bfa4:8", "const:4:8"]]
+ 00b5bfa4 ["CALL", null, ["callee:00c590f0:8"]]
- 00b5aff8 ["INT_ADD", "register:40f0:8", ["const:b5aff8:8", "const:4:8"]]
- 00b5aff8 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b5bfec ["INT_ADD", "register:40f0:8", ["const:b5bfec:8", "const:4:8"]]
+ 00b5bfec ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-1a3db667fa2f55716720d0439940872e"></a>

### [`00b5b02c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b02c.md) → [`00b5c020`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5c/00b5c020.md) _ZNSt6__ndk16vectorIPN8firebase3AppENS_9allocatorIS3_EEE21__push_back_slow_pathIRKS3_EEvOT_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b910.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)
- 新版 呼出元 1件 [`00c5c8e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c8e0.md) · 呼出先 4件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5c1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5b090 ["INT_ADD", "register:40f0:8", ["const:b5b090:8", "const:4:8"]]
- 00b5b090 ["CALL", null, ["callee:00c5c1e0:8"]]
+ 00b5c084 ["INT_ADD", "register:40f0:8", ["const:b5c084:8", "const:4:8"]]
+ 00b5c084 ["CALL", null, ["callee:00c5c1e0:8"]]
- 00b5b09c ["INT_ADD", "register:40f0:8", ["const:b5b09c:8", "const:4:8"]]
- 00b5b09c ["CALL", null, ["callee:00c58f30:8"]]
+ 00b5c090 ["INT_ADD", "register:40f0:8", ["const:b5c090:8", "const:4:8"]]
+ 00b5c090 ["CALL", null, ["callee:00c58f30:8"]]
- 00b5b0c8 ["INT_ADD", "register:40f0:8", ["const:b5b0c8:8", "const:4:8"]]
- 00b5b0c8 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b5c0bc ["INT_ADD", "register:40f0:8", ["const:b5c0bc:8", "const:4:8"]]
+ 00b5c0bc ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-4e208e902ffcdc540e79168b7bee6d19"></a>

### [`00b5b114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b114.md) → [`00b5c108`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5c/00b5c108.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_10unique_ptrIN8firebase10app_common7AppDa

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b8f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b8f0.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ad00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad00.md) [`00c5b230`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b230.md) [`00c5b6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6a0.md)
- 新版 呼出元 1件 [`00c5c8c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c8c0.md) · 呼出先 4件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5bcd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bcd0.md) [`00c5c200`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c200.md) [`00c5c670`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c670.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5b190 ["INT_ADD", "register:40f0:8", ["const:b5b190:8", "const:4:8"]]
- 00b5b190 ["CALL", null, ["callee:00c5c670:8"]]
+ 00b5c184 ["INT_ADD", "register:40f0:8", ["const:b5c184:8", "const:4:8"]]
+ 00b5c184 ["CALL", null, ["callee:00c5c670:8"]]
- 00b5b1a4 ["INT_ADD", "register:40f0:8", ["const:b5b1a4:8", "const:4:8"]]
- 00b5b1a4 ["CALL", null, ["callee:00c5c200:8"]]
+ 00b5c198 ["INT_ADD", "register:40f0:8", ["const:b5c198:8", "const:4:8"]]
+ 00b5c198 ["CALL", null, ["callee:00c5c200:8"]]
- 00b5b1ac ["INT_ADD", "register:40f0:8", ["const:b5b1ac:8", "const:4:8"]]
- 00b5b1ac ["CALL", null, ["callee:00c5bcd0:8"]]
+ 00b5c1a0 ["INT_ADD", "register:40f0:8", ["const:b5c1a0:8", "const:4:8"]]
+ 00b5c1a0 ["CALL", null, ["callee:00c5bcd0:8"]]
~~~


<a id="compare-f82bd350ebe809f440ab85870004a7ce"></a>

### [`00b5b1e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b1e4.md) → [`00b5c1d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5c/00b5c1d8.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_10unique_ptrIN8firebase10app_common7AppDa

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b900.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ad00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad00.md) [`00c5b230`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b230.md) [`00c5b900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b900.md)
- 新版 呼出元 1件 [`00c5c8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c8d0.md) · 呼出先 4件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5bcd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bcd0.md) [`00c5c200`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c200.md) [`00c5c8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c8d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5b200 ["INT_ADD", "register:40f0:8", ["const:b5b200:8", "const:4:8"]]
- 00b5b200 ["CALL", null, ["callee:00c5c8d0:8"]]
+ 00b5c1f4 ["INT_ADD", "register:40f0:8", ["const:b5c1f4:8", "const:4:8"]]
+ 00b5c1f4 ["CALL", null, ["callee:00c5c8d0:8"]]
- 00b5b20c ["INT_ADD", "register:40f0:8", ["const:b5b20c:8", "const:4:8"]]
- 00b5b20c ["CALL", null, ["callee:00c5c8d0:8"]]
+ 00b5c200 ["INT_ADD", "register:40f0:8", ["const:b5c200:8", "const:4:8"]]
+ 00b5c200 ["CALL", null, ["callee:00c5c8d0:8"]]
- 00b5b220 ["INT_ADD", "register:40f0:8", ["const:b5b220:8", "const:4:8"]]
- 00b5b220 ["CALL", null, ["callee:00c5c200:8"]]
+ 00b5c214 ["INT_ADD", "register:40f0:8", ["const:b5c214:8", "const:4:8"]]
+ 00b5c214 ["CALL", null, ["callee:00c5c200:8"]]
~~~


<a id="compare-6554128ba866293c153909dbe78a47c3"></a>

### [`00b5b2b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b2b0.md) → [`00b5c2a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5c/00b5c2a4.md) _ZNK8firebase10LoggerBase8LogDebugEPKcz

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5b328 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5b328 ["INT_ADD", "register:40f0:8", ["const:b5b328:8", "const:4:8"]]
- 00b5b328 ["CALLIND", null, ["register:0:8"]]
+ 00b5c31c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5c31c ["INT_ADD", "register:40f0:8", ["const:b5c31c:8", "const:4:8"]]
+ 00b5c31c ["CALLIND", null, ["register:0:8"]]
- 00b5b354 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5b354 ["INT_ADD", "register:40f0:8", ["const:b5b354:8", "const:4:8"]]
- 00b5b354 ["CALLIND", null, ["register:0:8"]]
+ 00b5c348 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5c348 ["INT_ADD", "register:40f0:8", ["const:b5c348:8", "const:4:8"]]
+ 00b5c348 ["CALLIND", null, ["register:0:8"]]
- 00b5b37c ["INT_ADD", "register:40f0:8", ["const:b5b37c:8", "const:4:8"]]
- 00b5b37c ["CALL", null, ["callee:00c58f80:8"]]
+ 00b5c370 ["INT_ADD", "register:40f0:8", ["const:b5c370:8", "const:4:8"]]
+ 00b5c370 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-5051a390ae8d1b89d7ef0dfe7ff90fab"></a>

### [`00b5b380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b380.md) → [`00b5c374`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5c/00b5c374.md) _ZNK8firebase10LoggerBase17FilterLogMessageVENS_8LogLevelEPKcSt9__va_list

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5b3bc ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5b3bc ["INT_ADD", "register:40f0:8", ["const:b5b3bc:8", "const:4:8"]]
- 00b5b3bc ["CALLIND", null, ["register:0:8"]]
+ 00b5c3b0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5c3b0 ["INT_ADD", "register:40f0:8", ["const:b5c3b0:8", "const:4:8"]]
+ 00b5c3b0 ["CALLIND", null, ["register:0:8"]]
- 00b5b3e8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5b3e8 ["INT_ADD", "register:40f0:8", ["const:b5b3e8:8", "const:4:8"]]
- 00b5b3e8 ["CALLIND", null, ["register:0:8"]]
+ 00b5c3dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5c3dc ["INT_ADD", "register:40f0:8", ["const:b5c3dc:8", "const:4:8"]]
+ 00b5c3dc ["CALLIND", null, ["register:0:8"]]
- 00b5b414 ["INT_ADD", "register:40f0:8", ["const:b5b414:8", "const:4:8"]]
- 00b5b414 ["CALL", null, ["callee:00c58f80:8"]]
+ 00b5c408 ["INT_ADD", "register:40f0:8", ["const:b5c408:8", "const:4:8"]]
+ 00b5c408 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-f571cf99546fed0ba5fc15e85b703dd5"></a>

### [`00b5b418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b418.md) → [`00b5c40c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5c/00b5c40c.md) _ZNK8firebase10LoggerBase7LogInfoEPKcz

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5b490 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5b490 ["INT_ADD", "register:40f0:8", ["const:b5b490:8", "const:4:8"]]
- 00b5b490 ["CALLIND", null, ["register:0:8"]]
+ 00b5c484 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5c484 ["INT_ADD", "register:40f0:8", ["const:b5c484:8", "const:4:8"]]
+ 00b5c484 ["CALLIND", null, ["register:0:8"]]
- 00b5b4bc ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5b4bc ["INT_ADD", "register:40f0:8", ["const:b5b4bc:8", "const:4:8"]]
- 00b5b4bc ["CALLIND", null, ["register:0:8"]]
+ 00b5c4b0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5c4b0 ["INT_ADD", "register:40f0:8", ["const:b5c4b0:8", "const:4:8"]]
+ 00b5c4b0 ["CALLIND", null, ["register:0:8"]]
- 00b5b4e4 ["INT_ADD", "register:40f0:8", ["const:b5b4e4:8", "const:4:8"]]
- 00b5b4e4 ["CALL", null, ["callee:00c58f80:8"]]
+ 00b5c4d8 ["INT_ADD", "register:40f0:8", ["const:b5c4d8:8", "const:4:8"]]
+ 00b5c4d8 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-c90620767818eca3653e951bd36f2aa8"></a>

### [`00b5b4e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b4e8.md) → [`00b5c4dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5c/00b5c4dc.md) _ZNK8firebase10LoggerBase10LogWarningEPKcz

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5b560 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5b560 ["INT_ADD", "register:40f0:8", ["const:b5b560:8", "const:4:8"]]
- 00b5b560 ["CALLIND", null, ["register:0:8"]]
+ 00b5c554 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5c554 ["INT_ADD", "register:40f0:8", ["const:b5c554:8", "const:4:8"]]
+ 00b5c554 ["CALLIND", null, ["register:0:8"]]
- 00b5b58c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5b58c ["INT_ADD", "register:40f0:8", ["const:b5b58c:8", "const:4:8"]]
- 00b5b58c ["CALLIND", null, ["register:0:8"]]
+ 00b5c580 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5c580 ["INT_ADD", "register:40f0:8", ["const:b5c580:8", "const:4:8"]]
+ 00b5c580 ["CALLIND", null, ["register:0:8"]]
- 00b5b5b4 ["INT_ADD", "register:40f0:8", ["const:b5b5b4:8", "const:4:8"]]
- 00b5b5b4 ["CALL", null, ["callee:00c58f80:8"]]
+ 00b5c5a8 ["INT_ADD", "register:40f0:8", ["const:b5c5a8:8", "const:4:8"]]
+ 00b5c5a8 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-aa55c69b50a58e46163c75f8c89db62e"></a>

### [`00b5b5b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b5b8.md) → [`00b5c5ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5c/00b5c5ac.md) _ZNK8firebase10LoggerBase8LogErrorEPKcz

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5b630 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5b630 ["INT_ADD", "register:40f0:8", ["const:b5b630:8", "const:4:8"]]
- 00b5b630 ["CALLIND", null, ["register:0:8"]]
+ 00b5c624 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5c624 ["INT_ADD", "register:40f0:8", ["const:b5c624:8", "const:4:8"]]
+ 00b5c624 ["CALLIND", null, ["register:0:8"]]
- 00b5b65c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5b65c ["INT_ADD", "register:40f0:8", ["const:b5b65c:8", "const:4:8"]]
- 00b5b65c ["CALLIND", null, ["register:0:8"]]
+ 00b5c650 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5c650 ["INT_ADD", "register:40f0:8", ["const:b5c650:8", "const:4:8"]]
+ 00b5c650 ["CALLIND", null, ["register:0:8"]]
- 00b5b684 ["INT_ADD", "register:40f0:8", ["const:b5b684:8", "const:4:8"]]
- 00b5b684 ["CALL", null, ["callee:00c58f80:8"]]
+ 00b5c678 ["INT_ADD", "register:40f0:8", ["const:b5c678:8", "const:4:8"]]
+ 00b5c678 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-2b6096a8ae035aec81ab9c540fd7c9cb"></a>

### [`00b5b688`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b688.md) → [`00b5c67c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5c/00b5c67c.md) _ZNK8firebase10LoggerBase9LogAssertEPKcz

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5b700 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5b700 ["INT_ADD", "register:40f0:8", ["const:b5b700:8", "const:4:8"]]
- 00b5b700 ["CALLIND", null, ["register:0:8"]]
+ 00b5c6f4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5c6f4 ["INT_ADD", "register:40f0:8", ["const:b5c6f4:8", "const:4:8"]]
+ 00b5c6f4 ["CALLIND", null, ["register:0:8"]]
- 00b5b72c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5b72c ["INT_ADD", "register:40f0:8", ["const:b5b72c:8", "const:4:8"]]
- 00b5b72c ["CALLIND", null, ["register:0:8"]]
+ 00b5c720 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5c720 ["INT_ADD", "register:40f0:8", ["const:b5c720:8", "const:4:8"]]
+ 00b5c720 ["CALLIND", null, ["register:0:8"]]
- 00b5b754 ["INT_ADD", "register:40f0:8", ["const:b5b754:8", "const:4:8"]]
- 00b5b754 ["CALL", null, ["callee:00c58f80:8"]]
+ 00b5c748 ["INT_ADD", "register:40f0:8", ["const:b5c748:8", "const:4:8"]]
+ 00b5c748 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-8da443b9613991c6e5b45d6518b75884"></a>

### [`00b5b758`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b758.md) → [`00b5c74c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5c/00b5c74c.md) _ZNK8firebase10LoggerBase10LogMessageENS_8LogLevelEPKcz

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5b7d8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5b7d8 ["INT_ADD", "register:40f0:8", ["const:b5b7d8:8", "const:4:8"]]
- 00b5b7d8 ["CALLIND", null, ["register:0:8"]]
+ 00b5c7cc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5c7cc ["INT_ADD", "register:40f0:8", ["const:b5c7cc:8", "const:4:8"]]
+ 00b5c7cc ["CALLIND", null, ["register:0:8"]]
- 00b5b804 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5b804 ["INT_ADD", "register:40f0:8", ["const:b5b804:8", "const:4:8"]]
- 00b5b804 ["CALLIND", null, ["register:0:8"]]
+ 00b5c7f8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5c7f8 ["INT_ADD", "register:40f0:8", ["const:b5c7f8:8", "const:4:8"]]
+ 00b5c7f8 ["CALLIND", null, ["register:0:8"]]
- 00b5b830 ["INT_ADD", "register:40f0:8", ["const:b5b830:8", "const:4:8"]]
- 00b5b830 ["CALL", null, ["callee:00c58f80:8"]]
+ 00b5c824 ["INT_ADD", "register:40f0:8", ["const:b5c824:8", "const:4:8"]]
+ 00b5c824 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-d858996e8db5af2c088573ce548ff032"></a>

### [`00b5b834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b834.md) → [`00b5c828`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5c/00b5c828.md) _ZNK8firebase10LoggerBase11LogMessageVENS_8LogLevelEPKcSt9__va_list

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5b870 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5b870 ["INT_ADD", "register:40f0:8", ["const:b5b870:8", "const:4:8"]]
- 00b5b870 ["CALLIND", null, ["register:0:8"]]
+ 00b5c864 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5c864 ["INT_ADD", "register:40f0:8", ["const:b5c864:8", "const:4:8"]]
+ 00b5c864 ["CALLIND", null, ["register:0:8"]]
- 00b5b89c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5b89c ["INT_ADD", "register:40f0:8", ["const:b5b89c:8", "const:4:8"]]
- 00b5b89c ["CALLIND", null, ["register:0:8"]]
+ 00b5c890 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5c890 ["INT_ADD", "register:40f0:8", ["const:b5c890:8", "const:4:8"]]
+ 00b5c890 ["CALLIND", null, ["register:0:8"]]
- 00b5b8c4 ["INT_ADD", "register:40f0:8", ["const:b5b8c4:8", "const:4:8"]]
- 00b5b8c4 ["CALL", null, ["callee:00c58f80:8"]]
+ 00b5c8b8 ["INT_ADD", "register:40f0:8", ["const:b5c8b8:8", "const:4:8"]]
+ 00b5c8b8 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-e6b57304b26439ad0dc47e1cafda6fc1"></a>

### [`00b5b8d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b8d8.md) → [`00b5c8cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b5c/00b5c8cc.md) _ZNK8firebase12SystemLogger15LogMessageImplVENS_8LogLevelEPKcSt9__va_list

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b1f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b1f0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5c1c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5b90c ["INT_ADD", "register:40f0:8", ["const:b5b90c:8", "const:4:8"]]
- 00b5b90c ["CALL", null, ["callee:00c5c1c0:8"]]
+ 00b5c900 ["INT_ADD", "register:40f0:8", ["const:b5c900:8", "const:4:8"]]
+ 00b5c900 ["CALL", null, ["callee:00c5c1c0:8"]]
- 00b5b930 ["INT_ADD", "register:40f0:8", ["const:b5b930:8", "const:4:8"]]
- 00b5b930 ["CALL", null, ["callee:00c58f80:8"]]
+ 00b5c924 ["INT_ADD", "register:40f0:8", ["const:b5c924:8", "const:4:8"]]
+ 00b5c924 ["CALL", null, ["callee:00c58f80:8"]]
~~~


