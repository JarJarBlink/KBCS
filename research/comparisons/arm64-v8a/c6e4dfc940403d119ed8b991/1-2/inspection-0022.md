# v16.0.2 → v16.0.3 · 要調査の変更候補 (22)

[一覧の目次](README.md)

<a id="compare-03ce137beff2c4d63eadcdc31d5ccd85"></a>

### [`0086c3e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c3e4.md) → [`0086d390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d390.md) FUN_0086d390

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0086c3e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c3e4.md) · 呼出先 2件 [`0086c3e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c3e4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0086d390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d390.md) · 呼出先 2件 [`0086d390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d390.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c404 ["INT_ADD", "register:40f0:8", ["const:86c404:8", "const:4:8"]]
- 0086c404 ["CALL", null, ["local:b0:8"]]
+ 0086d3b0 ["INT_ADD", "register:40f0:8", ["const:86d3b0:8", "const:4:8"]]
+ 0086d3b0 ["CALL", null, ["local:b0:8"]]
- 0086c410 ["INT_ADD", "register:40f0:8", ["const:86c410:8", "const:4:8"]]
- 0086c410 ["CALL", null, ["local:b0:8"]]
+ 0086d3bc ["INT_ADD", "register:40f0:8", ["const:86d3bc:8", "const:4:8"]]
+ 0086d3bc ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-32463f8ba4d2d52f09d4e4b5ba66c6c8"></a>

### [`0086c428`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c428.md) → [`0086d3d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d3d4.md) FUN_0086d3d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0086c428`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c428.md) [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 3件 [`0086c428`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c428.md) [`0086c478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c478.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0086d3d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d3d4.md) [`00a271bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a27/00a271bc.md) · 呼出先 3件 [`0086d3d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d3d4.md) [`0086d424`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d424.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c448 ["INT_ADD", "register:40f0:8", ["const:86c448:8", "const:4:8"]]
- 0086c448 ["CALL", null, ["local:b0:8"]]
+ 0086d3f4 ["INT_ADD", "register:40f0:8", ["const:86d3f4:8", "const:4:8"]]
+ 0086d3f4 ["CALL", null, ["local:b0:8"]]
- 0086c454 ["INT_ADD", "register:40f0:8", ["const:86c454:8", "const:4:8"]]
- 0086c454 ["CALL", null, ["local:b0:8"]]
+ 0086d400 ["INT_ADD", "register:40f0:8", ["const:86d400:8", "const:4:8"]]
+ 0086d400 ["CALL", null, ["local:b0:8"]]
- 0086c460 ["INT_ADD", "register:40f0:8", ["const:86c460:8", "const:4:8"]]
- 0086c460 ["CALL", null, ["callee:0086d424:8"]]
+ 0086d40c ["INT_ADD", "register:40f0:8", ["const:86d40c:8", "const:4:8"]]
+ 0086d40c ["CALL", null, ["callee:0086d424:8"]]
~~~


<a id="compare-3245530b7a96a6e7944c3c4017d919ca"></a>

### [`0086c478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c478.md) → [`0086d424`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d424.md) FUN_0086d424

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0086c428`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c428.md) [`0086c478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c478.md) [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 2件 [`0086c478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c478.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0086d3d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d3d4.md) [`0086d424`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d424.md) [`00a2c310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a2c/00a2c310.md) · 呼出先 2件 [`0086d424`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d424.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c498 ["INT_ADD", "register:40f0:8", ["const:86c498:8", "const:4:8"]]
- 0086c498 ["CALL", null, ["local:b0:8"]]
+ 0086d444 ["INT_ADD", "register:40f0:8", ["const:86d444:8", "const:4:8"]]
+ 0086d444 ["CALL", null, ["local:b0:8"]]
- 0086c4a4 ["INT_ADD", "register:40f0:8", ["const:86c4a4:8", "const:4:8"]]
- 0086c4a4 ["CALL", null, ["local:b0:8"]]
+ 0086d450 ["INT_ADD", "register:40f0:8", ["const:86d450:8", "const:4:8"]]
+ 0086d450 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-3bb7d7e14c882d581e1ba9e10800994e"></a>

### [`0086c4bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c4bc.md) → [`0086d468`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d468.md) FUN_0086d468

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c51c ["INT_ADD", "register:40f0:8", ["const:86c51c:8", "const:4:8"]]
- 0086c51c ["CALL", null, ["callee:00c58f50:8"]]
+ 0086d4c8 ["INT_ADD", "register:40f0:8", ["const:86d4c8:8", "const:4:8"]]
+ 0086d4c8 ["CALL", null, ["callee:00c58f50:8"]]
- 0086c52c ["INT_ADD", "register:40f0:8", ["const:86c52c:8", "const:4:8"]]
- 0086c52c ["CALL", null, ["callee:00c58f50:8"]]
+ 0086d4d8 ["INT_ADD", "register:40f0:8", ["const:86d4d8:8", "const:4:8"]]
+ 0086d4d8 ["CALL", null, ["callee:00c58f50:8"]]
- 0086c53c ["INT_ADD", "register:40f0:8", ["const:86c53c:8", "const:4:8"]]
- 0086c53c ["CALL", null, ["callee:00c58f50:8"]]
+ 0086d4e8 ["INT_ADD", "register:40f0:8", ["const:86d4e8:8", "const:4:8"]]
+ 0086d4e8 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-ee30d24ad1cfd0a0d336dbb6f069cded"></a>

### [`0086c570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c570.md) → [`0086d51c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d51c.md) FUN_0086d51c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0086c570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c570.md) · 呼出先 2件 [`0086c570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c570.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0086d51c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d51c.md) · 呼出先 2件 [`0086d51c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d51c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c58c ["INT_ADD", "register:40f0:8", ["const:86c58c:8", "const:4:8"]]
- 0086c58c ["CALL", null, ["local:b0:8"]]
+ 0086d538 ["INT_ADD", "register:40f0:8", ["const:86d538:8", "const:4:8"]]
+ 0086d538 ["CALL", null, ["local:b0:8"]]
- 0086c598 ["INT_ADD", "register:40f0:8", ["const:86c598:8", "const:4:8"]]
- 0086c598 ["CALL", null, ["local:b0:8"]]
+ 0086d544 ["INT_ADD", "register:40f0:8", ["const:86d544:8", "const:4:8"]]
+ 0086d544 ["CALL", null, ["local:b0:8"]]
- 0086c5b8 ["INT_ADD", "register:40f0:8", ["const:86c5b8:8", "const:4:8"]]
- 0086c5b8 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086d564 ["INT_ADD", "register:40f0:8", ["const:86d564:8", "const:4:8"]]
+ 0086d564 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-af33858090cc038d05b9aa611a362213"></a>

### [`0086de2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086de2c.md) → [`0086edd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086edd8.md) FUN_0086edd8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0086d774`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d774.md) · 呼出先 2件 [`004647dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00464/004647dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0086e720`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086e720.md) · 呼出先 2件 [`00464afc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00464/00464afc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086de48 ["INT_ADD", "register:40f0:8", ["const:86de48:8", "const:4:8"]]
- 0086de48 ["CALL", null, ["callee:00464afc:8"]]
+ 0086edf4 ["INT_ADD", "register:40f0:8", ["const:86edf4:8", "const:4:8"]]
+ 0086edf4 ["CALL", null, ["callee:00464afc:8"]]
~~~


<a id="compare-e487adae66084adcfe284c300c498dd3"></a>

### [`00872044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/00872044.md) → [`00872ff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00872/00872ff0.md) FUN_00872ff0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00865168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865168.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00866114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/00866114.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00872064 ["INT_ADD", "register:40f0:8", ["const:872064:8", "const:4:8"]]
- 00872064 ["CALL", null, ["callee:00c58f50:8"]]
+ 00873010 ["INT_ADD", "register:40f0:8", ["const:873010:8", "const:4:8"]]
+ 00873010 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-bafd3200af3a9c778e28d41d783c5060"></a>

### [`00872274`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/00872274.md) → [`00873220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00873/00873220.md) FUN_00873220

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00865168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865168.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00866114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/00866114.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00872294 ["INT_ADD", "register:40f0:8", ["const:872294:8", "const:4:8"]]
- 00872294 ["CALL", null, ["callee:00c58f50:8"]]
+ 00873240 ["INT_ADD", "register:40f0:8", ["const:873240:8", "const:4:8"]]
+ 00873240 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-a82bd0ad4ef2b90012db2d81c410ac63"></a>

### [`008743e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/008743e4.md) → [`00875390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/00875390.md) FUN_00875390

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00874400 ["INT_ADD", "register:40f0:8", ["const:874400:8", "const:4:8"]]
- 00874400 ["CALL", null, ["callee:00c54d90:8"]]
+ 008753ac ["INT_ADD", "register:40f0:8", ["const:8753ac:8", "const:4:8"]]
+ 008753ac ["CALL", null, ["callee:00c54d90:8"]]
- 00874420 ["COPY", "register:0:8", ["register:4040:8"]]
- 00874420 ["INT_ADD", "register:40f0:8", ["const:874420:8", "const:4:8"]]
- 00874420 ["CALLIND", null, ["register:0:8"]]
+ 008753cc ["COPY", "register:0:8", ["register:4040:8"]]
+ 008753cc ["INT_ADD", "register:40f0:8", ["const:8753cc:8", "const:4:8"]]
+ 008753cc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ddafa2a5c1eb108d40477a64777fd119"></a>

### [`00874434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874434.md) → [`008753e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/008753e0.md) FUN_008753e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00874450 ["INT_ADD", "register:40f0:8", ["const:874450:8", "const:4:8"]]
- 00874450 ["CALL", null, ["callee:00c54d90:8"]]
+ 008753fc ["INT_ADD", "register:40f0:8", ["const:8753fc:8", "const:4:8"]]
+ 008753fc ["CALL", null, ["callee:00c54d90:8"]]
- 00874470 ["COPY", "register:0:8", ["register:4040:8"]]
- 00874470 ["INT_ADD", "register:40f0:8", ["const:874470:8", "const:4:8"]]
- 00874470 ["CALLIND", null, ["register:0:8"]]
+ 0087541c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087541c ["INT_ADD", "register:40f0:8", ["const:87541c:8", "const:4:8"]]
+ 0087541c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f11eaeb4c5980321ff7750d674a0d282"></a>

### [`008745d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/008745d0.md) → [`0087557c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/0087557c.md) FUN_0087557c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00873b00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873b00.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`00874aac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/00874aac.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008745ec ["INT_ADD", "register:40f0:8", ["const:8745ec:8", "const:4:8"]]
- 008745ec ["CALL", null, ["callee:00c54d90:8"]]
+ 00875598 ["INT_ADD", "register:40f0:8", ["const:875598:8", "const:4:8"]]
+ 00875598 ["CALL", null, ["callee:00c54d90:8"]]
- 0087460c ["COPY", "register:0:8", ["register:4040:8"]]
- 0087460c ["INT_ADD", "register:40f0:8", ["const:87460c:8", "const:4:8"]]
- 0087460c ["CALLIND", null, ["register:0:8"]]
+ 008755b8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008755b8 ["INT_ADD", "register:40f0:8", ["const:8755b8:8", "const:4:8"]]
+ 008755b8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-00b06fedf3aee4720d8f7c02b311ee1c"></a>

### [`00874620`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874620.md) → [`008755cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/008755cc.md) FUN_008755cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00873b00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873b00.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00874aac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/00874aac.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00874640 ["INT_ADD", "register:40f0:8", ["const:874640:8", "const:4:8"]]
- 00874640 ["CALL", null, ["callee:00c54d90:8"]]
+ 008755ec ["INT_ADD", "register:40f0:8", ["const:8755ec:8", "const:4:8"]]
+ 008755ec ["CALL", null, ["callee:00c54d90:8"]]
- 00874654 ["COPY", "register:0:8", ["register:4040:8"]]
- 00874654 ["INT_ADD", "register:40f0:8", ["const:874654:8", "const:4:8"]]
- 00874654 ["CALLIND", null, ["register:0:8"]]
+ 00875600 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00875600 ["INT_ADD", "register:40f0:8", ["const:875600:8", "const:4:8"]]
+ 00875600 ["CALLIND", null, ["register:0:8"]]
- 0087465c ["INT_ADD", "register:40f0:8", ["const:87465c:8", "const:4:8"]]
- 0087465c ["CALL", null, ["callee:00c58f20:8"]]
+ 00875608 ["INT_ADD", "register:40f0:8", ["const:875608:8", "const:4:8"]]
+ 00875608 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-33fcfe423eadfa039e99c0d6535a9df3"></a>

### [`00874670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874670.md) → [`0087561c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/0087561c.md) FUN_0087561c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00874740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874740.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`008756ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/008756ec.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008746b4 ["INT_ADD", "register:40f0:8", ["const:8746b4:8", "const:4:8"]]
- 008746b4 ["CALL", null, ["callee:008756ec:8"]]
+ 00875660 ["INT_ADD", "register:40f0:8", ["const:875660:8", "const:4:8"]]
+ 00875660 ["CALL", null, ["callee:008756ec:8"]]
- 008746c4 ["INT_ADD", "register:40f0:8", ["const:8746c4:8", "const:4:8"]]
- 008746c4 ["CALL", null, ["callee:00c58f50:8"]]
+ 00875670 ["INT_ADD", "register:40f0:8", ["const:875670:8", "const:4:8"]]
+ 00875670 ["CALL", null, ["callee:00c58f50:8"]]
- 00874714 ["INT_ADD", "register:40f0:8", ["const:874714:8", "const:4:8"]]
- 00874714 ["CALL", null, ["callee:00c58f80:8"]]
+ 008756c0 ["INT_ADD", "register:40f0:8", ["const:8756c0:8", "const:4:8"]]
+ 008756c0 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-929f2f4d1311ca91ef695cdbc46c4a30"></a>

### [`008748f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/008748f0.md) → [`0087589c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/0087589c.md) FUN_0087589c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087490c ["INT_ADD", "register:40f0:8", ["const:87490c:8", "const:4:8"]]
- 0087490c ["CALL", null, ["callee:00c54d90:8"]]
+ 008758b8 ["INT_ADD", "register:40f0:8", ["const:8758b8:8", "const:4:8"]]
+ 008758b8 ["CALL", null, ["callee:00c54d90:8"]]
- 0087492c ["COPY", "register:0:8", ["register:4040:8"]]
- 0087492c ["INT_ADD", "register:40f0:8", ["const:87492c:8", "const:4:8"]]
- 0087492c ["CALLIND", null, ["register:0:8"]]
+ 008758d8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008758d8 ["INT_ADD", "register:40f0:8", ["const:8758d8:8", "const:4:8"]]
+ 008758d8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-de5447e023e22ebcd2edc8085153688d"></a>

### [`00874a8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874a8c.md) → [`00875a38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/00875a38.md) FUN_00875a38

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00874740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874740.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`008756ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/008756ec.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00874aa8 ["INT_ADD", "register:40f0:8", ["const:874aa8:8", "const:4:8"]]
- 00874aa8 ["CALL", null, ["callee:00c54d90:8"]]
+ 00875a54 ["INT_ADD", "register:40f0:8", ["const:875a54:8", "const:4:8"]]
+ 00875a54 ["CALL", null, ["callee:00c54d90:8"]]
- 00874ac8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00874ac8 ["INT_ADD", "register:40f0:8", ["const:874ac8:8", "const:4:8"]]
- 00874ac8 ["CALLIND", null, ["register:0:8"]]
+ 00875a74 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00875a74 ["INT_ADD", "register:40f0:8", ["const:875a74:8", "const:4:8"]]
+ 00875a74 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-60804db11d77e5f155bf3b15ca6ad399"></a>

### [`00874adc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874adc.md) → [`00875a88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/00875a88.md) FUN_00875a88

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00874740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874740.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008756ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/008756ec.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00874afc ["INT_ADD", "register:40f0:8", ["const:874afc:8", "const:4:8"]]
- 00874afc ["CALL", null, ["callee:00c54d90:8"]]
+ 00875aa8 ["INT_ADD", "register:40f0:8", ["const:875aa8:8", "const:4:8"]]
+ 00875aa8 ["CALL", null, ["callee:00c54d90:8"]]
- 00874b10 ["COPY", "register:0:8", ["register:4040:8"]]
- 00874b10 ["INT_ADD", "register:40f0:8", ["const:874b10:8", "const:4:8"]]
- 00874b10 ["CALLIND", null, ["register:0:8"]]
+ 00875abc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00875abc ["INT_ADD", "register:40f0:8", ["const:875abc:8", "const:4:8"]]
+ 00875abc ["CALLIND", null, ["register:0:8"]]
- 00874b18 ["INT_ADD", "register:40f0:8", ["const:874b18:8", "const:4:8"]]
- 00874b18 ["CALL", null, ["callee:00c58f20:8"]]
+ 00875ac4 ["INT_ADD", "register:40f0:8", ["const:875ac4:8", "const:4:8"]]
+ 00875ac4 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-ff313a869f4e75b12b937be810ef3d08"></a>

### [`00874b64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874b64.md) → [`00875b10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/00875b10.md) FUN_00875b10

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00874b80 ["INT_ADD", "register:40f0:8", ["const:874b80:8", "const:4:8"]]
- 00874b80 ["CALL", null, ["callee:00c54d90:8"]]
+ 00875b2c ["INT_ADD", "register:40f0:8", ["const:875b2c:8", "const:4:8"]]
+ 00875b2c ["CALL", null, ["callee:00c54d90:8"]]
- 00874ba0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00874ba0 ["INT_ADD", "register:40f0:8", ["const:874ba0:8", "const:4:8"]]
- 00874ba0 ["CALLIND", null, ["register:0:8"]]
+ 00875b4c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00875b4c ["INT_ADD", "register:40f0:8", ["const:875b4c:8", "const:4:8"]]
+ 00875b4c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9823e0bd45c279cd0d16bf48d94aba1e"></a>

### [`00874d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874d00.md) → [`00875cac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/00875cac.md) FUN_00875cac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00873ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873ca8.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`00874c54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/00874c54.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00874d1c ["INT_ADD", "register:40f0:8", ["const:874d1c:8", "const:4:8"]]
- 00874d1c ["CALL", null, ["callee:00c54d90:8"]]
+ 00875cc8 ["INT_ADD", "register:40f0:8", ["const:875cc8:8", "const:4:8"]]
+ 00875cc8 ["CALL", null, ["callee:00c54d90:8"]]
- 00874d3c ["COPY", "register:0:8", ["register:4040:8"]]
- 00874d3c ["INT_ADD", "register:40f0:8", ["const:874d3c:8", "const:4:8"]]
- 00874d3c ["CALLIND", null, ["register:0:8"]]
+ 00875ce8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00875ce8 ["INT_ADD", "register:40f0:8", ["const:875ce8:8", "const:4:8"]]
+ 00875ce8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-20fde7bd9e714d64576511cf79e30c7c"></a>

### [`00874f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874f9c.md) → [`00875f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/00875f48.md) FUN_00875f48

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00874fb8 ["INT_ADD", "register:40f0:8", ["const:874fb8:8", "const:4:8"]]
- 00874fb8 ["CALL", null, ["callee:00c54d90:8"]]
+ 00875f64 ["INT_ADD", "register:40f0:8", ["const:875f64:8", "const:4:8"]]
+ 00875f64 ["CALL", null, ["callee:00c54d90:8"]]
- 00874fd8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00874fd8 ["INT_ADD", "register:40f0:8", ["const:874fd8:8", "const:4:8"]]
- 00874fd8 ["CALLIND", null, ["register:0:8"]]
+ 00875f84 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00875f84 ["INT_ADD", "register:40f0:8", ["const:875f84:8", "const:4:8"]]
+ 00875f84 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-1b4dca24e5cb1ed72d40dcc5abefa866"></a>

### [`00875188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875188.md) → [`00876134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/00876134.md) FUN_00876134

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00873e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873e20.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00874dcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/00874dcc.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008751a8 ["INT_ADD", "register:40f0:8", ["const:8751a8:8", "const:4:8"]]
- 008751a8 ["CALL", null, ["callee:00c54d90:8"]]
+ 00876154 ["INT_ADD", "register:40f0:8", ["const:876154:8", "const:4:8"]]
+ 00876154 ["CALL", null, ["callee:00c54d90:8"]]
- 008751bc ["COPY", "register:0:8", ["register:4040:8"]]
- 008751bc ["INT_ADD", "register:40f0:8", ["const:8751bc:8", "const:4:8"]]
- 008751bc ["CALLIND", null, ["register:0:8"]]
+ 00876168 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00876168 ["INT_ADD", "register:40f0:8", ["const:876168:8", "const:4:8"]]
+ 00876168 ["CALLIND", null, ["register:0:8"]]
- 008751c4 ["INT_ADD", "register:40f0:8", ["const:8751c4:8", "const:4:8"]]
- 008751c4 ["CALL", null, ["callee:00c58f20:8"]]
+ 00876170 ["INT_ADD", "register:40f0:8", ["const:876170:8", "const:4:8"]]
+ 00876170 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-9e03c3ea04e3de9b3b8e7bc59161096b"></a>

### [`00875624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875624.md) → [`008765d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/008765d0.md) FUN_008765d0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00875640 ["INT_ADD", "register:40f0:8", ["const:875640:8", "const:4:8"]]
- 00875640 ["CALL", null, ["callee:00c54d90:8"]]
+ 008765ec ["INT_ADD", "register:40f0:8", ["const:8765ec:8", "const:4:8"]]
+ 008765ec ["CALL", null, ["callee:00c54d90:8"]]
- 00875660 ["COPY", "register:0:8", ["register:4040:8"]]
- 00875660 ["INT_ADD", "register:40f0:8", ["const:875660:8", "const:4:8"]]
- 00875660 ["CALLIND", null, ["register:0:8"]]
+ 0087660c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087660c ["INT_ADD", "register:40f0:8", ["const:87660c:8", "const:4:8"]]
+ 0087660c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b24261690abd7aea5d22189460c7a4de"></a>

### [`00876010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876010.md) → [`00876fbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/00876fbc.md) FUN_00876fbc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00875cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875cd0.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`00876c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/00876c7c.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087602c ["INT_ADD", "register:40f0:8", ["const:87602c:8", "const:4:8"]]
- 0087602c ["CALL", null, ["callee:00c54d90:8"]]
+ 00876fd8 ["INT_ADD", "register:40f0:8", ["const:876fd8:8", "const:4:8"]]
+ 00876fd8 ["CALL", null, ["callee:00c54d90:8"]]
- 0087604c ["COPY", "register:0:8", ["register:4040:8"]]
- 0087604c ["INT_ADD", "register:40f0:8", ["const:87604c:8", "const:4:8"]]
- 0087604c ["CALLIND", null, ["register:0:8"]]
+ 00876ff8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00876ff8 ["INT_ADD", "register:40f0:8", ["const:876ff8:8", "const:4:8"]]
+ 00876ff8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8a606ed0ff6ebc8803df555215256f0f"></a>

### [`008760e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/008760e8.md) → [`00877094`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00877/00877094.md) FUN_00877094

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00873f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873f98.md) [`008760e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/008760e8.md) · 呼出先 2件 [`008760e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/008760e8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`00874f44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/00874f44.md) [`00877094`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00877/00877094.md) · 呼出先 2件 [`00877094`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00877/00877094.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00876104 ["INT_ADD", "register:40f0:8", ["const:876104:8", "const:4:8"]]
- 00876104 ["CALL", null, ["local:b0:8"]]
+ 008770b0 ["INT_ADD", "register:40f0:8", ["const:8770b0:8", "const:4:8"]]
+ 008770b0 ["CALL", null, ["local:b0:8"]]
- 00876110 ["INT_ADD", "register:40f0:8", ["const:876110:8", "const:4:8"]]
- 00876110 ["CALL", null, ["local:b0:8"]]
+ 008770bc ["INT_ADD", "register:40f0:8", ["const:8770bc:8", "const:4:8"]]
+ 008770bc ["CALL", null, ["local:b0:8"]]
- 00876120 ["INT_ADD", "register:40f0:8", ["const:876120:8", "const:4:8"]]
- 00876120 ["CALL", null, ["callee:00c58f50:8"]]
+ 008770cc ["INT_ADD", "register:40f0:8", ["const:8770cc:8", "const:4:8"]]
+ 008770cc ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-fe135a68bff0deb7c31cc34a9358efec"></a>

### [`00877c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00877/00877c78.md) → [`00878c24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00878/00878c24.md) FUN_00878c24

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00877918`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00877/00877918.md) · 呼出先 5件 [`0048b584`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048b/0048b584.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`008788c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00878/008788c4.md) · 呼出先 5件 [`0048b8a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048b/0048b8a4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00877cbc ["INT_ADD", "register:40f0:8", ["const:877cbc:8", "const:4:8"]]
- 00877cbc ["CALL", null, ["callee:00c58f50:8"]]
+ 00878c68 ["INT_ADD", "register:40f0:8", ["const:878c68:8", "const:4:8"]]
+ 00878c68 ["CALL", null, ["callee:00c58f50:8"]]
- 00877d04 ["INT_ADD", "register:40f0:8", ["const:877d04:8", "const:4:8"]]
- 00877d04 ["CALL", null, ["callee:00c58f30:8"]]
+ 00878cb0 ["INT_ADD", "register:40f0:8", ["const:878cb0:8", "const:4:8"]]
+ 00878cb0 ["CALL", null, ["callee:00c58f30:8"]]
- 00877d2c ["INT_ADD", "register:40f0:8", ["const:877d2c:8", "const:4:8"]]
- 00877d2c ["CALL", null, ["callee:00c590a0:8"]]
+ 00878cd8 ["INT_ADD", "register:40f0:8", ["const:878cd8:8", "const:4:8"]]
+ 00878cd8 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-329a2882e3ed2263dc49d768aee9600d"></a>

### [`00877da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00877/00877da8.md) → [`00878d54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00878/00878d54.md) FUN_00878d54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00877ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00877/00877ac8.md) · 呼出先 9件 [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`00597e88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597e88.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0085b488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b488.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00878a74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00878/00878a74.md) · 呼出先 9件 [`00597dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597dec.md) [`005981a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/005981a8.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0085c434`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c434.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00877dd0 ["INT_ADD", "register:40f0:8", ["const:877dd0:8", "const:4:8"]]
- 00877dd0 ["CALL", null, ["callee:00c591d0:8"]]
+ 00878d7c ["INT_ADD", "register:40f0:8", ["const:878d7c:8", "const:4:8"]]
+ 00878d7c ["CALL", null, ["callee:00c591d0:8"]]
- 00877de0 ["INT_ADD", "register:40f0:8", ["const:877de0:8", "const:4:8"]]
- 00877de0 ["CALL", null, ["callee:00c591e0:8"]]
+ 00878d8c ["INT_ADD", "register:40f0:8", ["const:878d8c:8", "const:4:8"]]
+ 00878d8c ["CALL", null, ["callee:00c591e0:8"]]
- 00877dec ["INT_ADD", "register:40f0:8", ["const:877dec:8", "const:4:8"]]
- 00877dec ["CALL", null, ["callee:005981a8:8"]]
+ 00878d98 ["INT_ADD", "register:40f0:8", ["const:878d98:8", "const:4:8"]]
+ 00878d98 ["CALL", null, ["callee:005981a8:8"]]
~~~


<a id="compare-306fa70285ca4d59523803847f9ace8b"></a>

### [`00877ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00877/00877ea0.md) → [`00878e4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00878/00878e4c.md) FUN_00878e4c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58220.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c591f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c591f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00877ec8 ["INT_ADD", "register:40f0:8", ["const:877ec8:8", "const:4:8"]]
- 00877ec8 ["CALL", null, ["callee:00c591f0:8"]]
+ 00878e74 ["INT_ADD", "register:40f0:8", ["const:878e74:8", "const:4:8"]]
+ 00878e74 ["CALL", null, ["callee:00c591f0:8"]]
- 00877ed0 ["INT_ADD", "register:40f0:8", ["const:877ed0:8", "const:4:8"]]
- 00877ed0 ["CALL", null, ["callee:00c58f50:8"]]
+ 00878e7c ["INT_ADD", "register:40f0:8", ["const:878e7c:8", "const:4:8"]]
+ 00878e7c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-e78ea815ec6a72cefb7e87a554642e20"></a>

### [`00878284`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/00878284.md) → [`00879230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00879/00879230.md) FUN_00879230

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00848730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848730.md) [`0085155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/0085155c.md) [`00854944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00854/00854944.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5aa10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aa10.md)
- 新版 呼出元 4件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`008496dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/008496dc.md) [`00852508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/00852508.md) [`008558f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00855/008558f0.md) · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5b9e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b9e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00878294 ["INT_ADD", "register:40f0:8", ["const:878294:8", "const:4:8"]]
- 00878294 ["CALL", null, ["callee:00c5b9e0:8"]]
+ 00879240 ["INT_ADD", "register:40f0:8", ["const:879240:8", "const:4:8"]]
+ 00879240 ["CALL", null, ["callee:00c5b9e0:8"]]
- 008782a4 ["INT_ADD", "register:40f0:8", ["const:8782a4:8", "const:4:8"]]
- 008782a4 ["CALL", null, ["callee:00c58f50:8"]]
+ 00879250 ["INT_ADD", "register:40f0:8", ["const:879250:8", "const:4:8"]]
+ 00879250 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-7db594fa54408dd7b0d0e15c28a9aa0b"></a>

### [`00879c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/00879c10.md) → [`0087abbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087a/0087abbc.md) FUN_0087abbc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005b1378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1378.md) · 呼出先 7件 [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589890.md) [`00879ce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/00879ce0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`005b1728`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1728.md) · 呼出先 7件 [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589bb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589bb0.md) [`0087ac8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087a/0087ac8c.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00879c58 ["INT_ADD", "register:40f0:8", ["const:879c58:8", "const:4:8"]]
- 00879c58 ["CALL", null, ["callee:005891cc:8"]]
+ 0087ac04 ["INT_ADD", "register:40f0:8", ["const:87ac04:8", "const:4:8"]]
+ 0087ac04 ["CALL", null, ["callee:005891cc:8"]]
- 00879c60 ["INT_ADD", "register:40f0:8", ["const:879c60:8", "const:4:8"]]
- 00879c60 ["CALL", null, ["callee:005894bc:8"]]
+ 0087ac0c ["INT_ADD", "register:40f0:8", ["const:87ac0c:8", "const:4:8"]]
+ 0087ac0c ["CALL", null, ["callee:005894bc:8"]]
- 00879c64 ["INT_ADD", "register:40f0:8", ["const:879c64:8", "const:4:8"]]
- 00879c64 ["CALL", null, ["callee:00589bb0:8"]]
+ 0087ac10 ["INT_ADD", "register:40f0:8", ["const:87ac10:8", "const:4:8"]]
+ 0087ac10 ["CALL", null, ["callee:00589bb0:8"]]
~~~


<a id="compare-1ed9f4f40b8d43df40d1112b02adbd2b"></a>

### [`00879ce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/00879ce0.md) → [`0087ac8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087a/0087ac8c.md) FUN_0087ac8c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 7件 [`00879c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/00879c10.md) [`0087e62c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087e62c.md) [`00b66c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66c94.md) [`00b66d48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66d48.md) [`00b66e40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66e40.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 7件 [`0087abbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087a/0087abbc.md) [`0087f5d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087f5d8.md) [`00b67c88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b67/00b67c88.md) [`00b67d3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b67/00b67d3c.md) [`00b67e34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b67/00b67e34.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00879d48 ["INT_ADD", "register:40f0:8", ["const:879d48:8", "const:4:8"]]
- 00879d48 ["CALL", null, ["callee:00c58f50:8"]]
+ 0087acf4 ["INT_ADD", "register:40f0:8", ["const:87acf4:8", "const:4:8"]]
+ 0087acf4 ["CALL", null, ["callee:00c58f50:8"]]
- 00879d58 ["INT_ADD", "register:40f0:8", ["const:879d58:8", "const:4:8"]]
- 00879d58 ["CALL", null, ["callee:00c58f50:8"]]
+ 0087ad04 ["INT_ADD", "register:40f0:8", ["const:87ad04:8", "const:4:8"]]
+ 0087ad04 ["CALL", null, ["callee:00c58f50:8"]]
- 00879d68 ["INT_ADD", "register:40f0:8", ["const:879d68:8", "const:4:8"]]
- 00879d68 ["CALL", null, ["callee:00c58f50:8"]]
+ 0087ad14 ["INT_ADD", "register:40f0:8", ["const:87ad14:8", "const:4:8"]]
+ 0087ad14 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-b4e2dad0a4ebe2f8e63a2c0b19836ed3"></a>

### [`0087a5a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087a5a8.md) → [`0087b554`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087b/0087b554.md) FUN_0087b554

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087a5e4 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087a5e4 ["INT_ADD", "register:40f0:8", ["const:87a5e4:8", "const:4:8"]]
- 0087a5e4 ["CALLIND", null, ["register:0:8"]]
+ 0087b590 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087b590 ["INT_ADD", "register:40f0:8", ["const:87b590:8", "const:4:8"]]
+ 0087b590 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d4b0bc701bd0cd761865701b2abf6e74"></a>

### [`0087b414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b414.md) → [`0087c3c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087c3c0.md) FUN_0087c3c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 8件 [`00879de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/00879de0.md) [`0087a7a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087a7a0.md) [`0087acb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087acb0.md) [`00b344ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b344ac.md) [`00b34f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b34f40.md) · 呼出先 4件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab70.md)
- 新版 呼出元 8件 [`0087ad8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087a/0087ad8c.md) [`0087b74c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087b/0087b74c.md) [`0087bc5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087b/0087bc5c.md) [`00b354a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b35/00b354a0.md) [`00b35f34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b35/00b35f34.md) · 呼出先 4件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb30.md) [`00c5bb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb40.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087b424 ["INT_ADD", "register:40f0:8", ["const:87b424:8", "const:4:8"]]
- 0087b424 ["CALL", null, ["callee:00c5baa0:8"]]
+ 0087c3d0 ["INT_ADD", "register:40f0:8", ["const:87c3d0:8", "const:4:8"]]
+ 0087c3d0 ["CALL", null, ["callee:00c5baa0:8"]]
- 0087b43c ["COPY", "register:0:8", ["register:4040:8"]]
- 0087b43c ["INT_ADD", "register:40f0:8", ["const:87b43c:8", "const:4:8"]]
- 0087b43c ["CALLIND", null, ["register:0:8"]]
+ 0087c3e8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087c3e8 ["INT_ADD", "register:40f0:8", ["const:87c3e8:8", "const:4:8"]]
+ 0087c3e8 ["CALLIND", null, ["register:0:8"]]
- 0087b450 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087b450 ["INT_ADD", "register:40f0:8", ["const:87b450:8", "const:4:8"]]
- 0087b450 ["CALLIND", null, ["register:0:8"]]
+ 0087c3fc ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087c3fc ["INT_ADD", "register:40f0:8", ["const:87c3fc:8", "const:4:8"]]
+ 0087c3fc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e675186fc8d0449701f4ae34cdf65138"></a>

### [`0087b4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b4a0.md) → [`0087c44c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087c44c.md) FUN_0087c44c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0087a360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087a360.md) [`0087aa68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087aa68.md) [`0087b148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b148.md) · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)
- 新版 呼出元 3件 [`0087b30c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087b/0087b30c.md) [`0087ba14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087b/0087ba14.md) [`0087c0f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087c0f4.md) · 呼出先 3件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087b4c8 ["INT_ADD", "register:40f0:8", ["const:87b4c8:8", "const:4:8"]]
- 0087b4c8 ["CALL", null, ["callee:00c5baa0:8"]]
+ 0087c474 ["INT_ADD", "register:40f0:8", ["const:87c474:8", "const:4:8"]]
+ 0087c474 ["CALL", null, ["callee:00c5baa0:8"]]
- 0087b4ec ["COPY", "register:0:8", ["register:4040:8"]]
- 0087b4ec ["INT_ADD", "register:40f0:8", ["const:87b4ec:8", "const:4:8"]]
- 0087b4ec ["CALLIND", null, ["register:0:8"]]
+ 0087c498 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087c498 ["INT_ADD", "register:40f0:8", ["const:87c498:8", "const:4:8"]]
+ 0087c498 ["CALLIND", null, ["register:0:8"]]
- 0087b510 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087b510 ["INT_ADD", "register:40f0:8", ["const:87b510:8", "const:4:8"]]
- 0087b510 ["CALLIND", null, ["register:0:8"]]
+ 0087c4bc ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087c4bc ["INT_ADD", "register:40f0:8", ["const:87c4bc:8", "const:4:8"]]
+ 0087c4bc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d3fe9e444a798a42120843e1651ce6f1"></a>

### [`0087b7d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b7d0.md) → [`0087c77c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087c77c.md) FUN_0087c77c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0087a360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087a360.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0087b30c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087b/0087b30c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087b80c ["COPY", "register:0:8", ["register:4040:8"]]
- 0087b80c ["INT_ADD", "register:40f0:8", ["const:87b80c:8", "const:4:8"]]
- 0087b80c ["CALLIND", null, ["register:0:8"]]
+ 0087c7b8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087c7b8 ["INT_ADD", "register:40f0:8", ["const:87c7b8:8", "const:4:8"]]
+ 0087c7b8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-68a6845f581122c2533e6fe30008f1e3"></a>

### [`0087b820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b820.md) → [`0087c7cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087c7cc.md) FUN_0087c7cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087b83c ["INT_ADD", "register:40f0:8", ["const:87b83c:8", "const:4:8"]]
- 0087b83c ["CALL", null, ["callee:0045a0d4:8"]]
+ 0087c7e8 ["INT_ADD", "register:40f0:8", ["const:87c7e8:8", "const:4:8"]]
+ 0087c7e8 ["CALL", null, ["callee:0045a0d4:8"]]
~~~


<a id="compare-c3f79bba5be2e522cc7f9a4df09b6b72"></a>

### [`0087bb98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087bb98.md) → [`0087cb44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087cb44.md) FUN_0087cb44

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087bbd8 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087bbd8 ["INT_ADD", "register:40f0:8", ["const:87bbd8:8", "const:4:8"]]
- 0087bbd8 ["CALLIND", null, ["register:0:8"]]
+ 0087cb84 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087cb84 ["INT_ADD", "register:40f0:8", ["const:87cb84:8", "const:4:8"]]
+ 0087cb84 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-65befa8a7e1e897ce79b6497aebef97c"></a>

### [`0087bc1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087bc1c.md) → [`0087cbc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087cbc8.md) FUN_0087cbc8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00879de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/00879de0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0087ad8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087a/0087ad8c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087bc5c ["COPY", "register:0:8", ["register:4040:8"]]
- 0087bc5c ["INT_ADD", "register:40f0:8", ["const:87bc5c:8", "const:4:8"]]
- 0087bc5c ["CALLIND", null, ["register:0:8"]]
+ 0087cc08 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087cc08 ["INT_ADD", "register:40f0:8", ["const:87cc08:8", "const:4:8"]]
+ 0087cc08 ["CALLIND", null, ["register:0:8"]]
- 0087bc88 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087bc88 ["INT_ADD", "register:40f0:8", ["const:87bc88:8", "const:4:8"]]
- 0087bc88 ["CALLIND", null, ["register:0:8"]]
+ 0087cc34 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087cc34 ["INT_ADD", "register:40f0:8", ["const:87cc34:8", "const:4:8"]]
+ 0087cc34 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f4a87f013d530c6ee7711f869bf632fd"></a>

### [`0087bf80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087bf80.md) → [`0087cf2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087cf2c.md) FUN_0087cf2c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087bfc0 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087bfc0 ["INT_ADD", "register:40f0:8", ["const:87bfc0:8", "const:4:8"]]
- 0087bfc0 ["CALLIND", null, ["register:0:8"]]
+ 0087cf6c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087cf6c ["INT_ADD", "register:40f0:8", ["const:87cf6c:8", "const:4:8"]]
+ 0087cf6c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-099d65ad671af17b2e7a9f3ae50444f2"></a>

### [`0087c888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c888.md) → [`0087d834`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087d/0087d834.md) FUN_0087d834

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087c8a4 ["INT_ADD", "register:40f0:8", ["const:87c8a4:8", "const:4:8"]]
- 0087c8a4 ["CALL", null, ["callee:0045a0d4:8"]]
+ 0087d850 ["INT_ADD", "register:40f0:8", ["const:87d850:8", "const:4:8"]]
+ 0087d850 ["CALL", null, ["callee:0045a0d4:8"]]
~~~


<a id="compare-51b1e9ef6a154f5798f63206ae64a049"></a>

### [`0087d2d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087d2d4.md) → [`0087e280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087e/0087e280.md) FUN_0087e280

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ab90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5bb60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087d2e4 ["INT_ADD", "register:40f0:8", ["const:87d2e4:8", "const:4:8"]]
- 0087d2e4 ["CALL", null, ["callee:00c5bb60:8"]]
+ 0087e290 ["INT_ADD", "register:40f0:8", ["const:87e290:8", "const:4:8"]]
+ 0087e290 ["CALL", null, ["callee:00c5bb60:8"]]
~~~


<a id="compare-b4a0fb467dadf2e2770c8ae3a0ffd1f2"></a>

### [`0087e734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087e734.md) → [`0087f6e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087f6e0.md) FUN_0087f6e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0085155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/0085155c.md) · 呼出先 1件 [`0087ec14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087ec14.md)
- 新版 呼出元 1件 [`00852508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/00852508.md) · 呼出先 1件 [`0087fbc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087fbc0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087e74c ["INT_ADD", "register:40f0:8", ["const:87e74c:8", "const:4:8"]]
- 0087e74c ["CALL", null, ["callee:0087fbc0:8"]]
+ 0087f6f8 ["INT_ADD", "register:40f0:8", ["const:87f6f8:8", "const:4:8"]]
+ 0087f6f8 ["CALL", null, ["callee:0087fbc0:8"]]
~~~


<a id="compare-a4696c4d639de3d6a4c99988c53cdce2"></a>

### [`0087eb18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eb18.md) → [`0087fac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087fac4.md) FUN_0087fac4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 8件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`006103fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00610/006103fc.md) [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) [`00763db0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00763/00763db0.md) [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 2件 [`0087d948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087d948.md) [`0087eca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eca0.md)
- 新版 呼出元 8件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`006107ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00610/006107ac.md) [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) [`0076418c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00764/0076418c.md) [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) · 呼出先 2件 [`0087e8f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087e/0087e8f4.md) [`0087fc4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087fc4c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087eb38 ["INT_ADD", "register:40f0:8", ["const:87eb38:8", "const:4:8"]]
- 0087eb38 ["CALL", null, ["callee:0087fc4c:8"]]
+ 0087fae4 ["INT_ADD", "register:40f0:8", ["const:87fae4:8", "const:4:8"]]
+ 0087fae4 ["CALL", null, ["callee:0087fc4c:8"]]
- 0087eb4c ["INT_ADD", "register:40f0:8", ["const:87eb4c:8", "const:4:8"]]
- 0087eb4c ["CALL", null, ["callee:0087e8f4:8"]]
+ 0087faf8 ["INT_ADD", "register:40f0:8", ["const:87faf8:8", "const:4:8"]]
+ 0087faf8 ["CALL", null, ["callee:0087e8f4:8"]]
~~~


<a id="compare-a6b538b551da6c173d9d28d308574066"></a>

### [`0087ec14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087ec14.md) → [`0087fbc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087fbc0.md) FUN_0087fbc0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0087e728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087e728.md) [`0087e734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087e734.md) [`0087ec14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087ec14.md) · 呼出先 4件 [`0087ec14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087ec14.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0087f6d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087f6d4.md) [`0087f6e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087f6e0.md) [`0087fbc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087fbc0.md) · 呼出先 4件 [`0087fbc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087fbc0.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087ec30 ["INT_ADD", "register:40f0:8", ["const:87ec30:8", "const:4:8"]]
- 0087ec30 ["CALL", null, ["local:b0:8"]]
+ 0087fbdc ["INT_ADD", "register:40f0:8", ["const:87fbdc:8", "const:4:8"]]
+ 0087fbdc ["CALL", null, ["local:b0:8"]]
- 0087ec3c ["INT_ADD", "register:40f0:8", ["const:87ec3c:8", "const:4:8"]]
- 0087ec3c ["CALL", null, ["local:b0:8"]]
+ 0087fbe8 ["INT_ADD", "register:40f0:8", ["const:87fbe8:8", "const:4:8"]]
+ 0087fbe8 ["CALL", null, ["local:b0:8"]]
- 0087ec50 ["INT_ADD", "register:40f0:8", ["const:87ec50:8", "const:4:8"]]
- 0087ec50 ["CALL", null, ["callee:00c54d90:8"]]
+ 0087fbfc ["INT_ADD", "register:40f0:8", ["const:87fbfc:8", "const:4:8"]]
+ 0087fbfc ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-5adef738e9e5e97fd316b4ed9d2cf00e"></a>

### [`0088266c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/0088266c.md) → [`00883618`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00883/00883618.md) FUN_00883618

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008801e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/008801e4.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00881190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00881/00881190.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008826a8 ["COPY", "register:0:8", ["register:4040:8"]]
- 008826a8 ["INT_ADD", "register:40f0:8", ["const:8826a8:8", "const:4:8"]]
- 008826a8 ["CALLIND", null, ["register:0:8"]]
+ 00883654 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00883654 ["INT_ADD", "register:40f0:8", ["const:883654:8", "const:4:8"]]
+ 00883654 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-70d06527f44b3d9e9ca75d2e63250eb3"></a>

### [`00882d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/00882d98.md) → [`00883d44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00883/00883d44.md) FUN_00883d44

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0087f3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f3c0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0088036c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00880/0088036c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00882db8 ["INT_ADD", "register:40f0:8", ["const:882db8:8", "const:4:8"]]
- 00882db8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00883d64 ["INT_ADD", "register:40f0:8", ["const:883d64:8", "const:4:8"]]
+ 00883d64 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-7b4e86a911ba71fb76409fdc78ba7bc6"></a>

### [`00883ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/00883ffc.md) → [`00884fa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00884/00884fa8.md) FUN_00884fa8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00884038 ["COPY", "register:0:8", ["register:4040:8"]]
- 00884038 ["INT_ADD", "register:40f0:8", ["const:884038:8", "const:4:8"]]
- 00884038 ["CALLIND", null, ["register:0:8"]]
+ 00884fe4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00884fe4 ["INT_ADD", "register:40f0:8", ["const:884fe4:8", "const:4:8"]]
+ 00884fe4 ["CALLIND", null, ["register:0:8"]]
- 0088404c ["INT_ADD", "register:40f0:8", ["const:88404c:8", "const:4:8"]]
- 0088404c ["CALL", null, ["callee:00c54d90:8"]]
+ 00884ff8 ["INT_ADD", "register:40f0:8", ["const:884ff8:8", "const:4:8"]]
+ 00884ff8 ["CALL", null, ["callee:00c54d90:8"]]
- 0088406c ["COPY", "register:0:8", ["register:4040:8"]]
- 0088406c ["INT_ADD", "register:40f0:8", ["const:88406c:8", "const:4:8"]]
- 0088406c ["CALLIND", null, ["register:0:8"]]
+ 00885018 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885018 ["INT_ADD", "register:40f0:8", ["const:885018:8", "const:4:8"]]
+ 00885018 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-dae2c91a03ede6e4f4e162483f5bf745"></a>

### [`00884080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/00884080.md) → [`0088502c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00885/0088502c.md) FUN_0088502c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008840bc ["COPY", "register:0:8", ["register:4040:8"]]
- 008840bc ["INT_ADD", "register:40f0:8", ["const:8840bc:8", "const:4:8"]]
- 008840bc ["CALLIND", null, ["register:0:8"]]
+ 00885068 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885068 ["INT_ADD", "register:40f0:8", ["const:885068:8", "const:4:8"]]
+ 00885068 ["CALLIND", null, ["register:0:8"]]
- 008840d0 ["INT_ADD", "register:40f0:8", ["const:8840d0:8", "const:4:8"]]
- 008840d0 ["CALL", null, ["callee:00c54d90:8"]]
+ 0088507c ["INT_ADD", "register:40f0:8", ["const:88507c:8", "const:4:8"]]
+ 0088507c ["CALL", null, ["callee:00c54d90:8"]]
- 008840f0 ["COPY", "register:0:8", ["register:4040:8"]]
- 008840f0 ["INT_ADD", "register:40f0:8", ["const:8840f0:8", "const:4:8"]]
- 008840f0 ["CALLIND", null, ["register:0:8"]]
+ 0088509c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088509c ["INT_ADD", "register:40f0:8", ["const:88509c:8", "const:4:8"]]
+ 0088509c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7c56dd2573abc5e78422c0a00c8ec12b"></a>

### [`00884370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/00884370.md) → [`0088531c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00885/0088531c.md) FUN_0088531c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008843ac ["COPY", "register:0:8", ["register:4040:8"]]
- 008843ac ["INT_ADD", "register:40f0:8", ["const:8843ac:8", "const:4:8"]]
- 008843ac ["CALLIND", null, ["register:0:8"]]
+ 00885358 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885358 ["INT_ADD", "register:40f0:8", ["const:885358:8", "const:4:8"]]
+ 00885358 ["CALLIND", null, ["register:0:8"]]
- 008843c0 ["INT_ADD", "register:40f0:8", ["const:8843c0:8", "const:4:8"]]
- 008843c0 ["CALL", null, ["callee:00c54d90:8"]]
+ 0088536c ["INT_ADD", "register:40f0:8", ["const:88536c:8", "const:4:8"]]
+ 0088536c ["CALL", null, ["callee:00c54d90:8"]]
- 008843e0 ["COPY", "register:0:8", ["register:4040:8"]]
- 008843e0 ["INT_ADD", "register:40f0:8", ["const:8843e0:8", "const:4:8"]]
- 008843e0 ["CALLIND", null, ["register:0:8"]]
+ 0088538c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088538c ["INT_ADD", "register:40f0:8", ["const:88538c:8", "const:4:8"]]
+ 0088538c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-39e0e02b56a0f66c34f85e4803f9eebc"></a>

### [`008843f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/008843f4.md) → [`008853a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00885/008853a0.md) FUN_008853a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00883b2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/00883b2c.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00884ad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00884/00884ad8.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00884430 ["COPY", "register:0:8", ["register:4040:8"]]
- 00884430 ["INT_ADD", "register:40f0:8", ["const:884430:8", "const:4:8"]]
- 00884430 ["CALLIND", null, ["register:0:8"]]
+ 008853dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 008853dc ["INT_ADD", "register:40f0:8", ["const:8853dc:8", "const:4:8"]]
+ 008853dc ["CALLIND", null, ["register:0:8"]]
- 00884444 ["INT_ADD", "register:40f0:8", ["const:884444:8", "const:4:8"]]
- 00884444 ["CALL", null, ["callee:00c54d90:8"]]
+ 008853f0 ["INT_ADD", "register:40f0:8", ["const:8853f0:8", "const:4:8"]]
+ 008853f0 ["CALL", null, ["callee:00c54d90:8"]]
- 00884458 ["COPY", "register:0:8", ["register:4040:8"]]
- 00884458 ["INT_ADD", "register:40f0:8", ["const:884458:8", "const:4:8"]]
- 00884458 ["CALLIND", null, ["register:0:8"]]
+ 00885404 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885404 ["INT_ADD", "register:40f0:8", ["const:885404:8", "const:4:8"]]
+ 00885404 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-513c02a030d61a7672ebf7f237561a99"></a>

### [`00884fcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/00884fcc.md) → [`00885f78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00885/00885f78.md) FUN_00885f78

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00885008 ["COPY", "register:0:8", ["register:4040:8"]]
- 00885008 ["INT_ADD", "register:40f0:8", ["const:885008:8", "const:4:8"]]
- 00885008 ["CALLIND", null, ["register:0:8"]]
+ 00885fb4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885fb4 ["INT_ADD", "register:40f0:8", ["const:885fb4:8", "const:4:8"]]
+ 00885fb4 ["CALLIND", null, ["register:0:8"]]
- 0088501c ["INT_ADD", "register:40f0:8", ["const:88501c:8", "const:4:8"]]
- 0088501c ["CALL", null, ["callee:00c54d90:8"]]
+ 00885fc8 ["INT_ADD", "register:40f0:8", ["const:885fc8:8", "const:4:8"]]
+ 00885fc8 ["CALL", null, ["callee:00c54d90:8"]]
- 0088503c ["COPY", "register:0:8", ["register:4040:8"]]
- 0088503c ["INT_ADD", "register:40f0:8", ["const:88503c:8", "const:4:8"]]
- 0088503c ["CALLIND", null, ["register:0:8"]]
+ 00885fe8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885fe8 ["INT_ADD", "register:40f0:8", ["const:885fe8:8", "const:4:8"]]
+ 00885fe8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-55f9da59da3a707e2fd99b787d4ec4be"></a>

### [`00885340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/00885340.md) → [`008862ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00886/008862ec.md) FUN_008862ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00884bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/00884bcc.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00885b78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00885/00885b78.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088537c ["COPY", "register:0:8", ["register:4040:8"]]
- 0088537c ["INT_ADD", "register:40f0:8", ["const:88537c:8", "const:4:8"]]
- 0088537c ["CALLIND", null, ["register:0:8"]]
+ 00886328 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00886328 ["INT_ADD", "register:40f0:8", ["const:886328:8", "const:4:8"]]
+ 00886328 ["CALLIND", null, ["register:0:8"]]
- 00885390 ["INT_ADD", "register:40f0:8", ["const:885390:8", "const:4:8"]]
- 00885390 ["CALL", null, ["callee:00c54d90:8"]]
+ 0088633c ["INT_ADD", "register:40f0:8", ["const:88633c:8", "const:4:8"]]
+ 0088633c ["CALL", null, ["callee:00c54d90:8"]]
- 008853a4 ["COPY", "register:0:8", ["register:4040:8"]]
- 008853a4 ["INT_ADD", "register:40f0:8", ["const:8853a4:8", "const:4:8"]]
- 008853a4 ["CALLIND", null, ["register:0:8"]]
+ 00886350 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00886350 ["INT_ADD", "register:40f0:8", ["const:886350:8", "const:4:8"]]
+ 00886350 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b7bf0850cde8f76c12e73d6e5171717c"></a>

### [`00885664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/00885664.md) → [`00886610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00886/00886610.md) FUN_00886610

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088568c ["INT_ADD", "register:40f0:8", ["const:88568c:8", "const:4:8"]]
- 0088568c ["CALL", null, ["callee:00c54d90:8"]]
+ 00886638 ["INT_ADD", "register:40f0:8", ["const:886638:8", "const:4:8"]]
+ 00886638 ["CALL", null, ["callee:00c54d90:8"]]
- 008856a0 ["COPY", "register:0:8", ["register:4040:8"]]
- 008856a0 ["INT_ADD", "register:40f0:8", ["const:8856a0:8", "const:4:8"]]
- 008856a0 ["CALLIND", null, ["register:0:8"]]
+ 0088664c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088664c ["INT_ADD", "register:40f0:8", ["const:88664c:8", "const:4:8"]]
+ 0088664c ["CALLIND", null, ["register:0:8"]]
- 008856a8 ["INT_ADD", "register:40f0:8", ["const:8856a8:8", "const:4:8"]]
- 008856a8 ["CALL", null, ["callee:00c58f20:8"]]
+ 00886654 ["INT_ADD", "register:40f0:8", ["const:886654:8", "const:4:8"]]
+ 00886654 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-5af18b823367bf37545b1c44b88b6c23"></a>

### [`008856f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/008856f4.md) → [`008866a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00886/008866a0.md) FUN_008866a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00880d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880d4c.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00881cf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00881/00881cf8.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088571c ["INT_ADD", "register:40f0:8", ["const:88571c:8", "const:4:8"]]
- 0088571c ["CALL", null, ["callee:00c54d90:8"]]
+ 008866c8 ["INT_ADD", "register:40f0:8", ["const:8866c8:8", "const:4:8"]]
+ 008866c8 ["CALL", null, ["callee:00c54d90:8"]]
- 00885730 ["COPY", "register:0:8", ["register:4040:8"]]
- 00885730 ["INT_ADD", "register:40f0:8", ["const:885730:8", "const:4:8"]]
- 00885730 ["CALLIND", null, ["register:0:8"]]
+ 008866dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 008866dc ["INT_ADD", "register:40f0:8", ["const:8866dc:8", "const:4:8"]]
+ 008866dc ["CALLIND", null, ["register:0:8"]]
- 00885738 ["INT_ADD", "register:40f0:8", ["const:885738:8", "const:4:8"]]
- 00885738 ["CALL", null, ["callee:00c58f20:8"]]
+ 008866e4 ["INT_ADD", "register:40f0:8", ["const:8866e4:8", "const:4:8"]]
+ 008866e4 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-e6c8f3dd8db2c1063e3fb6a158d4a410"></a>

### [`00886aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886aac.md) → [`00887a58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00887/00887a58.md) FUN_00887a58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008817b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00881/008817b0.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0088275c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00882/0088275c.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00886acc ["INT_ADD", "register:40f0:8", ["const:886acc:8", "const:4:8"]]
- 00886acc ["CALL", null, ["callee:00c54d90:8"]]
+ 00887a78 ["INT_ADD", "register:40f0:8", ["const:887a78:8", "const:4:8"]]
+ 00887a78 ["CALL", null, ["callee:00c54d90:8"]]
- 00886ae0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00886ae0 ["INT_ADD", "register:40f0:8", ["const:886ae0:8", "const:4:8"]]
- 00886ae0 ["CALLIND", null, ["register:0:8"]]
+ 00887a8c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00887a8c ["INT_ADD", "register:40f0:8", ["const:887a8c:8", "const:4:8"]]
+ 00887a8c ["CALLIND", null, ["register:0:8"]]
- 00886ae8 ["INT_ADD", "register:40f0:8", ["const:886ae8:8", "const:4:8"]]
- 00886ae8 ["CALL", null, ["callee:00c58f20:8"]]
+ 00887a94 ["INT_ADD", "register:40f0:8", ["const:887a94:8", "const:4:8"]]
+ 00887a94 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-b970474c003d29208b0660088860ea37"></a>

### [`0088777c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/0088777c.md) → [`00888728`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/00888728.md) FUN_00888728

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`008487a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/008487a8.md) [`0085155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/0085155c.md) [`00854944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00854/00854944.md) · 呼出先 4件 [`006a2bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2bd0.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`00849754`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/00849754.md) [`00852508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/00852508.md) [`008558f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00855/008558f0.md) · 呼出先 4件 [`006a2f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a2/006a2f80.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008877a4 ["INT_ADD", "register:40f0:8", ["const:8877a4:8", "const:4:8"]]
- 008877a4 ["CALL", null, ["callee:00c58f50:8"]]
+ 00888750 ["INT_ADD", "register:40f0:8", ["const:888750:8", "const:4:8"]]
+ 00888750 ["CALL", null, ["callee:00c58f50:8"]]
- 008877b8 ["INT_ADD", "register:40f0:8", ["const:8877b8:8", "const:4:8"]]
- 008877b8 ["CALL", null, ["callee:006a2f80:8"]]
+ 00888764 ["INT_ADD", "register:40f0:8", ["const:888764:8", "const:4:8"]]
+ 00888764 ["CALL", null, ["callee:006a2f80:8"]]
- 008877d4 ["INT_ADD", "register:40f0:8", ["const:8877d4:8", "const:4:8"]]
- 008877d4 ["CALL", null, ["callee:00c58f50:8"]]
+ 00888780 ["INT_ADD", "register:40f0:8", ["const:888780:8", "const:4:8"]]
+ 00888780 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-dd8f8512fbca1c22854f8474b1972b43"></a>

### [`00888084`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888084.md) → [`00889030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00889/00889030.md) FUN_00889030

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`008888dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/008888dc.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008880a0 ["INT_ADD", "register:40f0:8", ["const:8880a0:8", "const:4:8"]]
- 008880a0 ["CALL", null, ["callee:00c54d90:8"]]
+ 0088904c ["INT_ADD", "register:40f0:8", ["const:88904c:8", "const:4:8"]]
+ 0088904c ["CALL", null, ["callee:00c54d90:8"]]
- 008880c0 ["COPY", "register:0:8", ["register:4040:8"]]
- 008880c0 ["INT_ADD", "register:40f0:8", ["const:8880c0:8", "const:4:8"]]
- 008880c0 ["CALLIND", null, ["register:0:8"]]
+ 0088906c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088906c ["INT_ADD", "register:40f0:8", ["const:88906c:8", "const:4:8"]]
+ 0088906c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-78f361442b7bb314910305d24e442bed"></a>

### [`008880d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/008880d4.md) → [`00889080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00889/00889080.md) FUN_00889080

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008880f0 ["INT_ADD", "register:40f0:8", ["const:8880f0:8", "const:4:8"]]
- 008880f0 ["CALL", null, ["callee:00c54d90:8"]]
+ 0088909c ["INT_ADD", "register:40f0:8", ["const:88909c:8", "const:4:8"]]
+ 0088909c ["CALL", null, ["callee:00c54d90:8"]]
- 00888110 ["COPY", "register:0:8", ["register:4040:8"]]
- 00888110 ["INT_ADD", "register:40f0:8", ["const:888110:8", "const:4:8"]]
- 00888110 ["CALLIND", null, ["register:0:8"]]
+ 008890bc ["COPY", "register:0:8", ["register:4040:8"]]
+ 008890bc ["INT_ADD", "register:40f0:8", ["const:8890bc:8", "const:4:8"]]
+ 008890bc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-be8d73cec375cb59766d52f688c2d886"></a>

### [`008881c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/008881c4.md) → [`00889170`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00889/00889170.md) FUN_00889170

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008881e0 ["INT_ADD", "register:40f0:8", ["const:8881e0:8", "const:4:8"]]
- 008881e0 ["CALL", null, ["callee:00c54d90:8"]]
+ 0088918c ["INT_ADD", "register:40f0:8", ["const:88918c:8", "const:4:8"]]
+ 0088918c ["CALL", null, ["callee:00c54d90:8"]]
- 00888200 ["COPY", "register:0:8", ["register:4040:8"]]
- 00888200 ["INT_ADD", "register:40f0:8", ["const:888200:8", "const:4:8"]]
- 00888200 ["CALLIND", null, ["register:0:8"]]
+ 008891ac ["COPY", "register:0:8", ["register:4040:8"]]
+ 008891ac ["INT_ADD", "register:40f0:8", ["const:8891ac:8", "const:4:8"]]
+ 008891ac ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-02827c45e81b422b61c1f2ac23231308"></a>

### [`00888214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888214.md) → [`008891c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00889/008891c0.md) FUN_008891c0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`008888dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/008888dc.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00888230 ["INT_ADD", "register:40f0:8", ["const:888230:8", "const:4:8"]]
- 00888230 ["CALL", null, ["callee:00c54d90:8"]]
+ 008891dc ["INT_ADD", "register:40f0:8", ["const:8891dc:8", "const:4:8"]]
+ 008891dc ["CALL", null, ["callee:00c54d90:8"]]
- 00888250 ["COPY", "register:0:8", ["register:4040:8"]]
- 00888250 ["INT_ADD", "register:40f0:8", ["const:888250:8", "const:4:8"]]
- 00888250 ["CALLIND", null, ["register:0:8"]]
+ 008891fc ["COPY", "register:0:8", ["register:4040:8"]]
+ 008891fc ["INT_ADD", "register:40f0:8", ["const:8891fc:8", "const:4:8"]]
+ 008891fc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-bda43a850b63d967ef06ae6a8120919a"></a>

### [`00888264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888264.md) → [`00889210`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00889/00889210.md) FUN_00889210

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`008888dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/008888dc.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00888280 ["INT_ADD", "register:40f0:8", ["const:888280:8", "const:4:8"]]
- 00888280 ["CALL", null, ["callee:00c54d90:8"]]
+ 0088922c ["INT_ADD", "register:40f0:8", ["const:88922c:8", "const:4:8"]]
+ 0088922c ["CALL", null, ["callee:00c54d90:8"]]
- 008882a0 ["COPY", "register:0:8", ["register:4040:8"]]
- 008882a0 ["INT_ADD", "register:40f0:8", ["const:8882a0:8", "const:4:8"]]
- 008882a0 ["CALLIND", null, ["register:0:8"]]
+ 0088924c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088924c ["INT_ADD", "register:40f0:8", ["const:88924c:8", "const:4:8"]]
+ 0088924c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9873b1899f97e6176a04eb3db6f4241d"></a>

### [`008882b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/008882b4.md) → [`00889260`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00889/00889260.md) FUN_00889260

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`008888dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/008888dc.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008882d0 ["INT_ADD", "register:40f0:8", ["const:8882d0:8", "const:4:8"]]
- 008882d0 ["CALL", null, ["callee:00c54d90:8"]]
+ 0088927c ["INT_ADD", "register:40f0:8", ["const:88927c:8", "const:4:8"]]
+ 0088927c ["CALL", null, ["callee:00c54d90:8"]]
- 008882f0 ["COPY", "register:0:8", ["register:4040:8"]]
- 008882f0 ["INT_ADD", "register:40f0:8", ["const:8882f0:8", "const:4:8"]]
- 008882f0 ["CALLIND", null, ["register:0:8"]]
+ 0088929c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088929c ["INT_ADD", "register:40f0:8", ["const:88929c:8", "const:4:8"]]
+ 0088929c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d555f19683cb61fe2c7ec2618b3ff4c4"></a>

### [`00888304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888304.md) → [`008892b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00889/008892b0.md) FUN_008892b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 10件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`006103fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00610/006103fc.md) [`00616990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/00616990.md) [`00626504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00626/00626504.md) [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) · 呼出先 1件 [`00b37ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37ab4.md)
- 新版 呼出元 10件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`006107ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00610/006107ac.md) [`00616d40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00616/00616d40.md) [`006268b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00626/006268b4.md) [`006f28dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f2/006f28dc.md) · 呼出先 1件 [`00b38aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b38/00b38aa8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00888410 ["COPY", "register:0:8", ["register:4040:8"]]
- 00888410 ["INT_ADD", "register:40f0:8", ["const:888410:8", "const:4:8"]]
- 00888410 ["CALLIND", null, ["register:0:8"]]
+ 008893bc ["COPY", "register:0:8", ["register:4040:8"]]
+ 008893bc ["INT_ADD", "register:40f0:8", ["const:8893bc:8", "const:4:8"]]
+ 008893bc ["CALLIND", null, ["register:0:8"]]
- 00888418 ["INT_ADD", "register:40f0:8", ["const:888418:8", "const:4:8"]]
- 00888418 ["CALL", null, ["callee:00b38aa8:8"]]
+ 008893c4 ["INT_ADD", "register:40f0:8", ["const:8893c4:8", "const:4:8"]]
+ 008893c4 ["CALL", null, ["callee:00b38aa8:8"]]
~~~


<a id="compare-9f2be2b44585aa888a7b0b4c4183076f"></a>

### [`008890c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/008890c8.md) → [`0088a074`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088a/0088a074.md) FUN_0088a074

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008874d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/008874d0.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0088847c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/0088847c.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00889134 ["COPY", "register:0:8", ["register:4040:8"]]
- 00889134 ["INT_ADD", "register:40f0:8", ["const:889134:8", "const:4:8"]]
- 00889134 ["CALLIND", null, ["register:0:8"]]
+ 0088a0e0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088a0e0 ["INT_ADD", "register:40f0:8", ["const:88a0e0:8", "const:4:8"]]
+ 0088a0e0 ["CALLIND", null, ["register:0:8"]]
- 00889144 ["COPY", "register:0:8", ["register:4040:8"]]
- 00889144 ["INT_ADD", "register:40f0:8", ["const:889144:8", "const:4:8"]]
- 00889144 ["CALLIND", null, ["register:0:8"]]
+ 0088a0f0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088a0f0 ["INT_ADD", "register:40f0:8", ["const:88a0f0:8", "const:4:8"]]
+ 0088a0f0 ["CALLIND", null, ["register:0:8"]]
- 00889164 ["COPY", "register:0:8", ["register:4040:8"]]
- 00889164 ["INT_ADD", "register:40f0:8", ["const:889164:8", "const:4:8"]]
- 00889164 ["CALLIND", null, ["register:0:8"]]
+ 0088a110 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088a110 ["INT_ADD", "register:40f0:8", ["const:88a110:8", "const:4:8"]]
+ 0088a110 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-3f89adad9ba4fd14a95af9edef804d89"></a>

### [`008895c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/008895c4.md) → [`0088a570`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088a/0088a570.md) FUN_0088a570

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`008874d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/008874d0.md) [`00b37c24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37c24.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`0088847c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/0088847c.md) [`00b38c18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b38/00b38c18.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00889630 ["COPY", "register:0:8", ["register:4040:8"]]
- 00889630 ["INT_ADD", "register:40f0:8", ["const:889630:8", "const:4:8"]]
- 00889630 ["CALLIND", null, ["register:0:8"]]
+ 0088a5dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088a5dc ["INT_ADD", "register:40f0:8", ["const:88a5dc:8", "const:4:8"]]
+ 0088a5dc ["CALLIND", null, ["register:0:8"]]
- 00889640 ["COPY", "register:0:8", ["register:4040:8"]]
- 00889640 ["INT_ADD", "register:40f0:8", ["const:889640:8", "const:4:8"]]
- 00889640 ["CALLIND", null, ["register:0:8"]]
+ 0088a5ec ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088a5ec ["INT_ADD", "register:40f0:8", ["const:88a5ec:8", "const:4:8"]]
+ 0088a5ec ["CALLIND", null, ["register:0:8"]]
- 00889660 ["COPY", "register:0:8", ["register:4040:8"]]
- 00889660 ["INT_ADD", "register:40f0:8", ["const:889660:8", "const:4:8"]]
- 00889660 ["CALLIND", null, ["register:0:8"]]
+ 0088a60c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088a60c ["INT_ADD", "register:40f0:8", ["const:88a60c:8", "const:4:8"]]
+ 0088a60c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8d0a44735809031100c957c4b645a7ea"></a>

### [`0088a7bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a7bc.md) → [`0088b768`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088b768.md) FUN_0088b768

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088a7ec ["INT_ADD", "register:40f0:8", ["const:88a7ec:8", "const:4:8"]]
- 0088a7ec ["CALL", null, ["callee:00c54d90:8"]]
+ 0088b798 ["INT_ADD", "register:40f0:8", ["const:88b798:8", "const:4:8"]]
+ 0088b798 ["CALL", null, ["callee:00c54d90:8"]]
- 0088a800 ["COPY", "register:0:8", ["register:4040:8"]]
- 0088a800 ["INT_ADD", "register:40f0:8", ["const:88a800:8", "const:4:8"]]
- 0088a800 ["CALLIND", null, ["register:0:8"]]
+ 0088b7ac ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088b7ac ["INT_ADD", "register:40f0:8", ["const:88b7ac:8", "const:4:8"]]
+ 0088b7ac ["CALLIND", null, ["register:0:8"]]
- 0088a808 ["INT_ADD", "register:40f0:8", ["const:88a808:8", "const:4:8"]]
- 0088a808 ["CALL", null, ["callee:00c58f20:8"]]
+ 0088b7b4 ["INT_ADD", "register:40f0:8", ["const:88b7b4:8", "const:4:8"]]
+ 0088b7b4 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-5bd1c495c1f8b8a564dba7cef2048a4f"></a>

### [`0088f058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f058.md) → [`00890004`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/00890004.md) FUN_00890004

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) [`00895a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00895/00895a28.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 2件 [`0088d874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088d/0088d874.md) [`008969d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00896/008969d4.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088f09c ["INT_ADD", "register:40f0:8", ["const:88f09c:8", "const:4:8"]]
- 0088f09c ["CALL", null, ["callee:00c590f0:8"]]
+ 00890048 ["INT_ADD", "register:40f0:8", ["const:890048:8", "const:4:8"]]
+ 00890048 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-40d5bef61f7dde833177ec5b3068fbd1"></a>

### [`0088f118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f118.md) → [`008900c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/008900c4.md) FUN_008900c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`006394fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/006394fc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0088d874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088d/0088d874.md) · 呼出先 4件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`006398ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/006398ac.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088f14c ["INT_ADD", "register:40f0:8", ["const:88f14c:8", "const:4:8"]]
- 0088f14c ["CALL", null, ["callee:006398ac:8"]]
+ 008900f8 ["INT_ADD", "register:40f0:8", ["const:8900f8:8", "const:4:8"]]
+ 008900f8 ["CALL", null, ["callee:006398ac:8"]]
- 0088f160 ["INT_ADD", "register:40f0:8", ["const:88f160:8", "const:4:8"]]
- 0088f160 ["CALL", null, ["callee:00c58f30:8"]]
+ 0089010c ["INT_ADD", "register:40f0:8", ["const:89010c:8", "const:4:8"]]
+ 0089010c ["CALL", null, ["callee:00c58f30:8"]]
- 0088f1b0 ["INT_ADD", "register:40f0:8", ["const:88f1b0:8", "const:4:8"]]
- 0088f1b0 ["CALL", null, ["callee:0043bf04:8"]]
+ 0089015c ["INT_ADD", "register:40f0:8", ["const:89015c:8", "const:4:8"]]
+ 0089015c ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-a62aefd6ef5bcb75d9f553be2f468b16"></a>

### [`0088f1f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f1f0.md) → [`0089019c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/0089019c.md) FUN_0089019c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`0088d874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088d/0088d874.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088f268 ["INT_ADD", "register:40f0:8", ["const:88f268:8", "const:4:8"]]
- 0088f268 ["CALL", null, ["callee:00c590f0:8"]]
+ 00890214 ["INT_ADD", "register:40f0:8", ["const:890214:8", "const:4:8"]]
+ 00890214 ["CALL", null, ["callee:00c590f0:8"]]
- 0088f290 ["INT_ADD", "register:40f0:8", ["const:88f290:8", "const:4:8"]]
- 0088f290 ["CALL", null, ["callee:00c590f0:8"]]
+ 0089023c ["INT_ADD", "register:40f0:8", ["const:89023c:8", "const:4:8"]]
+ 0089023c ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-ea40f356e872ec7c634c1ce0a4408af1"></a>

### [`0088fb30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088fb30.md) → [`00890adc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/00890adc.md) FUN_00890adc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088fb4c ["INT_ADD", "register:40f0:8", ["const:88fb4c:8", "const:4:8"]]
- 0088fb4c ["CALL", null, ["callee:00c54d90:8"]]
+ 00890af8 ["INT_ADD", "register:40f0:8", ["const:890af8:8", "const:4:8"]]
+ 00890af8 ["CALL", null, ["callee:00c54d90:8"]]
- 0088fb6c ["COPY", "register:0:8", ["register:4040:8"]]
- 0088fb6c ["INT_ADD", "register:40f0:8", ["const:88fb6c:8", "const:4:8"]]
- 0088fb6c ["CALLIND", null, ["register:0:8"]]
+ 00890b18 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00890b18 ["INT_ADD", "register:40f0:8", ["const:890b18:8", "const:4:8"]]
+ 00890b18 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a84d0aa9ed1773ca02a132292ba25d47"></a>

### [`0088fd0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088fd0c.md) → [`00890cb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/00890cb8.md) FUN_00890cb8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0088f738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f738.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008906e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/008906e4.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088fd2c ["INT_ADD", "register:40f0:8", ["const:88fd2c:8", "const:4:8"]]
- 0088fd2c ["CALL", null, ["callee:00c54d90:8"]]
+ 00890cd8 ["INT_ADD", "register:40f0:8", ["const:890cd8:8", "const:4:8"]]
+ 00890cd8 ["CALL", null, ["callee:00c54d90:8"]]
- 0088fd40 ["COPY", "register:0:8", ["register:4040:8"]]
- 0088fd40 ["INT_ADD", "register:40f0:8", ["const:88fd40:8", "const:4:8"]]
- 0088fd40 ["CALLIND", null, ["register:0:8"]]
+ 00890cec ["COPY", "register:0:8", ["register:4040:8"]]
+ 00890cec ["INT_ADD", "register:40f0:8", ["const:890cec:8", "const:4:8"]]
+ 00890cec ["CALLIND", null, ["register:0:8"]]
- 0088fd48 ["INT_ADD", "register:40f0:8", ["const:88fd48:8", "const:4:8"]]
- 0088fd48 ["CALL", null, ["callee:00c58f20:8"]]
+ 00890cf4 ["INT_ADD", "register:40f0:8", ["const:890cf4:8", "const:4:8"]]
+ 00890cf4 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-4ada3aee0bb822204bb5c9ceec8b8bb2"></a>

### [`00890d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/00890d70.md) → [`00891d1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00891/00891d1c.md) FUN_00891d1c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00890dc0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00890dc0 ["INT_ADD", "register:40f0:8", ["const:890dc0:8", "const:4:8"]]
- 00890dc0 ["CALLIND", null, ["register:0:8"]]
+ 00891d6c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00891d6c ["INT_ADD", "register:40f0:8", ["const:891d6c:8", "const:4:8"]]
+ 00891d6c ["CALLIND", null, ["register:0:8"]]
- 00890dd0 ["INT_ADD", "register:40f0:8", ["const:890dd0:8", "const:4:8"]]
- 00890dd0 ["CALL", null, ["callee:00c58f50:8"]]
+ 00891d7c ["INT_ADD", "register:40f0:8", ["const:891d7c:8", "const:4:8"]]
+ 00891d7c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-708c8130dc9d1c249fda2d1684a579b8"></a>

### [`00892ed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892ed0.md) → [`00893e7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893e7c.md) FUN_00893e7c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0089135c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/0089135c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00892308`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00892/00892308.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00892ef0 ["INT_ADD", "register:40f0:8", ["const:892ef0:8", "const:4:8"]]
- 00892ef0 ["CALL", null, ["callee:00c58f50:8"]]
+ 00893e9c ["INT_ADD", "register:40f0:8", ["const:893e9c:8", "const:4:8"]]
+ 00893e9c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-838c351a2a585d023b4018429d3c94c4"></a>

### [`00893440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/00893440.md) → [`008943ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/008943ec.md) FUN_008943ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00892d60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892d60.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`008bb568`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bb568.md)
- 新版 呼出元 0件  · 呼出先 4件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00893d0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893d0c.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`008bc514`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bc/008bc514.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0089345c ["INT_ADD", "register:40f0:8", ["const:89345c:8", "const:4:8"]]
- 0089345c ["CALL", null, ["callee:008524fc:8"]]
+ 00894408 ["INT_ADD", "register:40f0:8", ["const:894408:8", "const:4:8"]]
+ 00894408 ["CALL", null, ["callee:008524fc:8"]]
- 00893468 ["INT_ADD", "register:40f0:8", ["const:893468:8", "const:4:8"]]
- 00893468 ["CALL", null, ["callee:008bc514:8"]]
+ 00894414 ["INT_ADD", "register:40f0:8", ["const:894414:8", "const:4:8"]]
+ 00894414 ["CALL", null, ["callee:008bc514:8"]]
- 00893470 ["INT_ADD", "register:40f0:8", ["const:893470:8", "const:4:8"]]
- 00893470 ["CALL", null, ["callee:008524fc:8"]]
+ 0089441c ["INT_ADD", "register:40f0:8", ["const:89441c:8", "const:4:8"]]
+ 0089441c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-5c9506a07ffb3103b134baefbdb80012"></a>

### [`008a3cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a3/008a3cf0.md) → [`008a4c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a4/008a4c9c.md) FUN_008a4c9c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0074a82c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074a/0074a82c.md)
- 新版 呼出元 1件 [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) · 呼出先 2件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0074abdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074a/0074abdc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008a3d04 ["INT_ADD", "register:40f0:8", ["const:8a3d04:8", "const:4:8"]]
- 008a3d04 ["CALL", null, ["callee:0074abdc:8"]]
+ 008a4cb0 ["INT_ADD", "register:40f0:8", ["const:8a4cb0:8", "const:4:8"]]
+ 008a4cb0 ["CALL", null, ["callee:0074abdc:8"]]
- 008a3d30 ["INT_ADD", "register:40f0:8", ["const:8a3d30:8", "const:4:8"]]
- 008a3d30 ["CALL", null, ["callee:0043be80:8"]]
+ 008a4cdc ["INT_ADD", "register:40f0:8", ["const:8a4cdc:8", "const:4:8"]]
+ 008a4cdc ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-787ac7ac6a60298973f8807a5fade041"></a>

### [`008a3d54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a3/008a3d54.md) → [`008a4d00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a4/008a4d00.md) FUN_008a4d00

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 2件 [`00748b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748b88.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) · 呼出先 2件 [`00748f38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748f38.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008a3d8c ["INT_ADD", "register:40f0:8", ["const:8a3d8c:8", "const:4:8"]]
- 008a3d8c ["CALL", null, ["callee:00748f38:8"]]
+ 008a4d38 ["INT_ADD", "register:40f0:8", ["const:8a4d38:8", "const:4:8"]]
+ 008a4d38 ["CALL", null, ["callee:00748f38:8"]]
~~~


<a id="compare-a6a11e9a86ffc8c863e8f6ff1adddf46"></a>

### [`008a7500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7500.md) → [`008a84ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a8/008a84ac.md) FUN_008a84ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0044f8d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f8d8.md) [`0082eb50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082e/0082eb50.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0044fbf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044f/0044fbf8.md) [`0082fafc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0082f/0082fafc.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 92.86% / 新版 92.86%

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008a84c4",
      "incomplete_value": true,
      "site": "008a84c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "leaf",
            "const:b48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008a7518",
      "incomplete_value": true,
      "site": "008a751c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:4000:8"
              ],
              "INT_LEFT"
            ]
          ],
          [
            "leaf",
            "const:b48:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 1
  }
]
~~~


~~~diff
- 008a751c ["INT_ADD", "register:40f0:8", ["const:8a751c:8", "const:4:8"]]
- 008a751c ["CALL", null, ["callee:0082fafc:8"]]
+ 008a84c8 ["INT_ADD", "register:40f0:8", ["const:8a84c8:8", "const:4:8"]]
+ 008a84c8 ["CALL", null, ["callee:0082fafc:8"]]
- 008a7508 ["INT_ADD", "register:40f0:8", ["const:8a7508:8", "const:4:8"]]
- 008a7508 ["CALL", null, ["callee:008524fc:8"]]
+ 008a84b4 ["INT_ADD", "register:40f0:8", ["const:8a84b4:8", "const:4:8"]]
+ 008a84b4 ["CALL", null, ["callee:008524fc:8"]]
- 008a7518 ["COPY", "tmp:0:8", ["const:b48:8"]]
- 008a7518 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008a7518 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008a7518 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-535c8ad08f1db6922e13b4adaf76de7c"></a>

### [`008b6d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6d7c.md) → [`008b7d28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7d28.md) FUN_008b7d28

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008b6ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6ab4.md) · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`008b7a60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7a60.md) · 呼出先 2件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b6db8 ["COPY", "register:0:8", ["register:4040:8"]]
- 008b6db8 ["INT_ADD", "register:40f0:8", ["const:8b6db8:8", "const:4:8"]]
- 008b6db8 ["CALLIND", null, ["register:0:8"]]
+ 008b7d64 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008b7d64 ["INT_ADD", "register:40f0:8", ["const:8b7d64:8", "const:4:8"]]
+ 008b7d64 ["CALLIND", null, ["register:0:8"]]
- 008b6dec ["INT_ADD", "register:40f0:8", ["const:8b6dec:8", "const:4:8"]]
- 008b6dec ["CALL", null, ["callee:0045a0d4:8"]]
+ 008b7d98 ["INT_ADD", "register:40f0:8", ["const:8b7d98:8", "const:4:8"]]
+ 008b7d98 ["CALL", null, ["callee:0045a0d4:8"]]
- 008b6df0 ["INT_ADD", "register:40f0:8", ["const:8b6df0:8", "const:4:8"]]
- 008b6df0 ["CALL", null, ["callee:00c58f80:8"]]
+ 008b7d9c ["INT_ADD", "register:40f0:8", ["const:8b7d9c:8", "const:4:8"]]
+ 008b7d9c ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-66b702b7c2ccfa648bc1d122c461b789"></a>

### [`008b6f1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f1c.md) → [`008b7ec8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ec8.md) FUN_008b7ec8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00786d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/00786d2c.md) · 呼出先 1件 [`00814030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00814/00814030.md)
- 新版 呼出元 1件 [`00787108`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00787/00787108.md) · 呼出先 1件 [`00814f94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00814/00814f94.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b6f54 ["INT_ADD", "register:40f0:8", ["const:8b6f54:8", "const:4:8"]]
- 008b6f54 ["CALL", null, ["callee:00814f94:8"]]
+ 008b7f00 ["INT_ADD", "register:40f0:8", ["const:8b7f00:8", "const:4:8"]]
+ 008b7f00 ["CALL", null, ["callee:00814f94:8"]]
~~~


<a id="compare-de9fe835461169cf1e02423bd9dea0f4"></a>

### [`008b6fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6fb0.md) → [`008b7f5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f5c.md) FUN_008b7f5c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`006a97bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a9/006a97bc.md) [`007f704c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f704c.md) · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`006a9b6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a9/006a9b6c.md) [`007f7fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f7/007f7fb0.md) · 呼出先 2件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b7008 ["COPY", "register:0:8", ["register:4048:8"]]
- 008b7008 ["INT_ADD", "register:40f0:8", ["const:8b7008:8", "const:4:8"]]
- 008b7008 ["CALLIND", null, ["register:0:8"]]
+ 008b7fb4 ["COPY", "register:0:8", ["register:4048:8"]]
+ 008b7fb4 ["INT_ADD", "register:40f0:8", ["const:8b7fb4:8", "const:4:8"]]
+ 008b7fb4 ["CALLIND", null, ["register:0:8"]]
- 008b703c ["INT_ADD", "register:40f0:8", ["const:8b703c:8", "const:4:8"]]
- 008b703c ["CALL", null, ["callee:0045a0d4:8"]]
+ 008b7fe8 ["INT_ADD", "register:40f0:8", ["const:8b7fe8:8", "const:4:8"]]
+ 008b7fe8 ["CALL", null, ["callee:0045a0d4:8"]]
- 008b7040 ["INT_ADD", "register:40f0:8", ["const:8b7040:8", "const:4:8"]]
- 008b7040 ["CALL", null, ["callee:00c58f80:8"]]
+ 008b7fec ["INT_ADD", "register:40f0:8", ["const:8b7fec:8", "const:4:8"]]
+ 008b7fec ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-8582110af128e7982d3c5cf59c140b88"></a>

### [`008b7ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7ca4.md) → [`008b8c50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8c50.md) FUN_008b8c50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008b79a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b79a0.md) · 呼出先 3件 [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`008b7424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7424.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008b894c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b894c.md) · 呼出先 3件 [`00494970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00494/00494970.md) [`008b83d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b83d0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b7d54 ["INT_ADD", "register:40f0:8", ["const:8b7d54:8", "const:4:8"]]
- 008b7d54 ["CALL", null, ["callee:00494970:8"]]
+ 008b8d00 ["INT_ADD", "register:40f0:8", ["const:8b8d00:8", "const:4:8"]]
+ 008b8d00 ["CALL", null, ["callee:00494970:8"]]
- 008b7d5c ["INT_ADD", "register:40f0:8", ["const:8b7d5c:8", "const:4:8"]]
- 008b7d5c ["CALL", null, ["callee:008b83d0:8"]]
+ 008b8d08 ["INT_ADD", "register:40f0:8", ["const:8b8d08:8", "const:4:8"]]
+ 008b8d08 ["CALL", null, ["callee:008b83d0:8"]]
- 008b7d64 ["INT_ADD", "register:40f0:8", ["const:8b7d64:8", "const:4:8"]]
- 008b7d64 ["CALL", null, ["callee:00c58f50:8"]]
+ 008b8d10 ["INT_ADD", "register:40f0:8", ["const:8b8d10:8", "const:4:8"]]
+ 008b8d10 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-003c2ad4171b6b7cfe9f9113304cfe6c"></a>

### [`008b925c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b925c.md) → [`008ba208`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba208.md) FUN_008ba208

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 5件 [`00a00048`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a00/00a00048.md) [`00a02c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a02c3c.md) [`00a03a18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a03a18.md) [`00a03d58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a03d58.md) [`00a05834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a05834.md) · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 5件 [`00a00ff4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a00/00a00ff4.md) [`00a03be8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a03/00a03be8.md) [`00a049c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a04/00a049c4.md) [`00a04d04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a04/00a04d04.md) [`00a067e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a06/00a067e0.md) · 呼出先 2件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b92ac ["COPY", "register:0:8", ["register:4040:8"]]
- 008b92ac ["INT_ADD", "register:40f0:8", ["const:8b92ac:8", "const:4:8"]]
- 008b92ac ["CALLIND", null, ["register:0:8"]]
+ 008ba258 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008ba258 ["INT_ADD", "register:40f0:8", ["const:8ba258:8", "const:4:8"]]
+ 008ba258 ["CALLIND", null, ["register:0:8"]]
- 008b92e0 ["INT_ADD", "register:40f0:8", ["const:8b92e0:8", "const:4:8"]]
- 008b92e0 ["CALL", null, ["callee:0045a0d4:8"]]
+ 008ba28c ["INT_ADD", "register:40f0:8", ["const:8ba28c:8", "const:4:8"]]
+ 008ba28c ["CALL", null, ["callee:0045a0d4:8"]]
- 008b92e4 ["INT_ADD", "register:40f0:8", ["const:8b92e4:8", "const:4:8"]]
- 008b92e4 ["CALL", null, ["callee:00c58f80:8"]]
+ 008ba290 ["INT_ADD", "register:40f0:8", ["const:8ba290:8", "const:4:8"]]
+ 008ba290 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-5bc51d1e8eda8690b0cf3bee6247e876"></a>

### [`008b92f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92f0.md) → [`008ba29c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba29c.md) FUN_008ba29c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 54件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00627cf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00627/00627cf4.md) [`0068e7ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068e/0068e7ac.md) [`0068edd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068e/0068edd8.md) [`0068f630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068f/0068f630.md) · 呼出先 2件 [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 54件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`006280a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00628/006280a4.md) [`0068eb5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0068e/0068eb5c.md) [`0068f188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0068f/0068f188.md) [`0068f9e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0068f/0068f9e0.md) · 呼出先 2件 [`0046de54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de54.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b9318 ["INT_ADD", "register:40f0:8", ["const:8b9318:8", "const:4:8"]]
- 008b9318 ["CALL", null, ["callee:0046de54:8"]]
+ 008ba2c4 ["INT_ADD", "register:40f0:8", ["const:8ba2c4:8", "const:4:8"]]
+ 008ba2c4 ["CALL", null, ["callee:0046de54:8"]]
- 008b9340 ["INT_ADD", "register:40f0:8", ["const:8b9340:8", "const:4:8"]]
- 008b9340 ["CALL", null, ["callee:00c58f80:8"]]
+ 008ba2ec ["INT_ADD", "register:40f0:8", ["const:8ba2ec:8", "const:4:8"]]
+ 008ba2ec ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-683c43599166c0abaa7e5ff2e2015379"></a>

### [`008b9344`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b9344.md) → [`008ba2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba2f0.md) FUN_008ba2f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 14件 [`00695564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00695/00695564.md) [`00696768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696768.md) [`0069802c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/0069802c.md) [`006992d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/006992d4.md) [`006af7a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af7a0.md) · 呼出先 3件 [`0046db2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db2c.md) [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 14件 [`00695914`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00695/00695914.md) [`00696b18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00696/00696b18.md) [`006983dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00698/006983dc.md) [`00699684`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00699/00699684.md) [`006afb50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006af/006afb50.md) · 呼出先 3件 [`0046de4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de4c.md) [`0046de54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de54.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b9460 ["INT_ADD", "register:40f0:8", ["const:8b9460:8", "const:4:8"]]
- 008b9460 ["CALL", null, ["callee:0046de4c:8"]]
+ 008ba40c ["INT_ADD", "register:40f0:8", ["const:8ba40c:8", "const:4:8"]]
+ 008ba40c ["CALL", null, ["callee:0046de4c:8"]]
- 008b952c ["INT_ADD", "register:40f0:8", ["const:8b952c:8", "const:4:8"]]
- 008b952c ["CALL", null, ["callee:0046de54:8"]]
+ 008ba4d8 ["INT_ADD", "register:40f0:8", ["const:8ba4d8:8", "const:4:8"]]
+ 008ba4d8 ["CALL", null, ["callee:0046de54:8"]]
- 008b9554 ["INT_ADD", "register:40f0:8", ["const:8b9554:8", "const:4:8"]]
- 008b9554 ["CALL", null, ["callee:00c58f80:8"]]
+ 008ba500 ["INT_ADD", "register:40f0:8", ["const:8ba500:8", "const:4:8"]]
+ 008ba500 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-fcb40928be60dba2dcfb6c7bf897a4bd"></a>

### [`008b9624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b9624.md) → [`008ba5d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba5d0.md) FUN_008ba5d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 22件 [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`0061456c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00614/0061456c.md) [`0068e7ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068e/0068e7ac.md) [`0068edd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068e/0068edd8.md) [`0068f630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068f/0068f630.md) · 呼出先 2件 [`008bc298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc298.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 22件 [`00606ed4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00606/00606ed4.md) [`0061491c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00614/0061491c.md) [`0068eb5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0068e/0068eb5c.md) [`0068f188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0068f/0068f188.md) [`0068f9e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0068f/0068f9e0.md) · 呼出先 2件 [`008bd244`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bd/008bd244.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b9664 ["COPY", "register:0:8", ["register:4048:8"]]
- 008b9664 ["INT_ADD", "register:40f0:8", ["const:8b9664:8", "const:4:8"]]
- 008b9664 ["CALLIND", null, ["register:0:8"]]
+ 008ba610 ["COPY", "register:0:8", ["register:4048:8"]]
+ 008ba610 ["INT_ADD", "register:40f0:8", ["const:8ba610:8", "const:4:8"]]
+ 008ba610 ["CALLIND", null, ["register:0:8"]]
- 008b9690 ["COPY", "register:0:8", ["register:4040:8"]]
- 008b9690 ["INT_ADD", "register:40f0:8", ["const:8b9690:8", "const:4:8"]]
- 008b9690 ["CALLIND", null, ["register:0:8"]]
+ 008ba63c ["COPY", "register:0:8", ["register:4040:8"]]
+ 008ba63c ["INT_ADD", "register:40f0:8", ["const:8ba63c:8", "const:4:8"]]
+ 008ba63c ["CALLIND", null, ["register:0:8"]]
- 008b96a0 ["INT_ADD", "register:40f0:8", ["const:8b96a0:8", "const:4:8"]]
- 008b96a0 ["CALL", null, ["callee:008bd244:8"]]
+ 008ba64c ["INT_ADD", "register:40f0:8", ["const:8ba64c:8", "const:4:8"]]
+ 008ba64c ["CALL", null, ["callee:008bd244:8"]]
~~~


<a id="compare-6f27d9ac204ae3341326dab310fea997"></a>

### [`008b96fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b96fc.md) → [`008ba6a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba6a8.md) FUN_008ba6a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 38件 [`0060e104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060e/0060e104.md) [`00634aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00634/00634aa4.md) [`0066ffb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066f/0066ffb4.md) [`0068e7ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068e/0068e7ac.md) [`0068edd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068e/0068edd8.md) · 呼出先 2件 [`008bc400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc400.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 38件 [`0060e4b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0060e/0060e4b4.md) [`00634e54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00634/00634e54.md) [`00670364`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00670/00670364.md) [`0068eb5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0068e/0068eb5c.md) [`0068f188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0068f/0068f188.md) · 呼出先 2件 [`008bd3ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bd/008bd3ac.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b973c ["COPY", "register:0:8", ["register:4048:8"]]
- 008b973c ["INT_ADD", "register:40f0:8", ["const:8b973c:8", "const:4:8"]]
- 008b973c ["CALLIND", null, ["register:0:8"]]
+ 008ba6e8 ["COPY", "register:0:8", ["register:4048:8"]]
+ 008ba6e8 ["INT_ADD", "register:40f0:8", ["const:8ba6e8:8", "const:4:8"]]
+ 008ba6e8 ["CALLIND", null, ["register:0:8"]]
- 008b9768 ["COPY", "register:0:8", ["register:4040:8"]]
- 008b9768 ["INT_ADD", "register:40f0:8", ["const:8b9768:8", "const:4:8"]]
- 008b9768 ["CALLIND", null, ["register:0:8"]]
+ 008ba714 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008ba714 ["INT_ADD", "register:40f0:8", ["const:8ba714:8", "const:4:8"]]
+ 008ba714 ["CALLIND", null, ["register:0:8"]]
- 008b9778 ["INT_ADD", "register:40f0:8", ["const:8b9778:8", "const:4:8"]]
- 008b9778 ["CALL", null, ["callee:008bd3ac:8"]]
+ 008ba724 ["INT_ADD", "register:40f0:8", ["const:8ba724:8", "const:4:8"]]
+ 008ba724 ["CALL", null, ["callee:008bd3ac:8"]]
~~~


<a id="compare-74ef14438c4093ffe10db2d806da93f1"></a>

### [`008ba8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008ba8c0.md) → [`008bb86c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bb/008bb86c.md) FUN_008bb86c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 66件 [`005ccd44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005ccd44.md) [`005d9f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d9/005d9f8c.md) [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`006103fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00610/006103fc.md) [`0061308c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00613/0061308c.md) · 呼出先 10件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b83ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b8/008b83ac.md) [`008bace4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008bace4.md) [`008bc568`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc568.md)
- 新版 呼出元 66件 [`005cd0f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cd0f4.md) [`005da33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005da/005da33c.md) [`00606ed4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00606/00606ed4.md) [`006107ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00610/006107ac.md) [`0061343c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00613/0061343c.md) · 呼出先 10件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b9358`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b9/008b9358.md) [`008bbc90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bb/008bbc90.md) [`008bd514`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bd/008bd514.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008ba908 ["INT_ADD", "register:40f0:8", ["const:8ba908:8", "const:4:8"]]
- 008ba908 ["CALL", null, ["callee:00c58f30:8"]]
+ 008bb8b4 ["INT_ADD", "register:40f0:8", ["const:8bb8b4:8", "const:4:8"]]
+ 008bb8b4 ["CALL", null, ["callee:00c58f30:8"]]
- 008ba954 ["COPY", "register:0:8", ["register:4040:8"]]
- 008ba954 ["INT_ADD", "register:40f0:8", ["const:8ba954:8", "const:4:8"]]
- 008ba954 ["CALLIND", null, ["register:0:8"]]
+ 008bb900 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008bb900 ["INT_ADD", "register:40f0:8", ["const:8bb900:8", "const:4:8"]]
+ 008bb900 ["CALLIND", null, ["register:0:8"]]
- 008ba984 ["COPY", "register:0:8", ["register:4040:8"]]
- 008ba984 ["INT_ADD", "register:40f0:8", ["const:8ba984:8", "const:4:8"]]
- 008ba984 ["CALLIND", null, ["register:0:8"]]
+ 008bb930 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008bb930 ["INT_ADD", "register:40f0:8", ["const:8bb930:8", "const:4:8"]]
+ 008bb930 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e86535eb2f3e2cdfda1a776dff6df2cf"></a>

### [`008bace4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008bace4.md) → [`008bbc90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bb/008bbc90.md) FUN_008bbc90

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`008ba8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008ba8c0.md) [`008bad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008bad20.md) [`008bb144`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bb144.md) · 呼出先 2件 [`00869b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869b94.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`008bb86c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bb/008bb86c.md) [`008bbccc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bb/008bbccc.md) [`008bc0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bc/008bc0f0.md) · 呼出先 2件 [`0086ab40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086ab40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008bad00 ["INT_ADD", "register:40f0:8", ["const:8bad00:8", "const:4:8"]]
- 008bad00 ["CALL", null, ["callee:0086ab40:8"]]
+ 008bbcac ["INT_ADD", "register:40f0:8", ["const:8bbcac:8", "const:4:8"]]
+ 008bbcac ["CALL", null, ["callee:0086ab40:8"]]
~~~


<a id="compare-d0434a39cf33741a3e91ee4a1f8229af"></a>

### [`008bba4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bba4c.md) → [`008bc9f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bc/008bc9f8.md) FUN_008bc9f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 1件 [`008b9d84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b9d84.md)
- 新版 呼出元 1件 [`0085ab5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab5c.md) · 呼出先 1件 [`008bad30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008bad30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008bbaa0 ["INT_ADD", "register:40f0:8", ["const:8bbaa0:8", "const:4:8"]]
- 008bbaa0 ["CALL", null, ["callee:008bad30:8"]]
+ 008bca4c ["INT_ADD", "register:40f0:8", ["const:8bca4c:8", "const:4:8"]]
+ 008bca4c ["CALL", null, ["callee:008bad30:8"]]
~~~


<a id="compare-0fc3c2c8da0275cd1a0d7da90a8b4ac4"></a>

### [`008bbcc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bbcc4.md) → [`008bcc70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bc/008bcc70.md) FUN_008bcc70

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008b83ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b8/008b83ac.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`008b9358`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b9/008b9358.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008bbd30 ["COPY", "register:0:8", ["register:4040:8"]]
- 008bbd30 ["INT_ADD", "register:40f0:8", ["const:8bbd30:8", "const:4:8"]]
- 008bbd30 ["CALLIND", null, ["register:0:8"]]
+ 008bccdc ["COPY", "register:0:8", ["register:4040:8"]]
+ 008bccdc ["INT_ADD", "register:40f0:8", ["const:8bccdc:8", "const:4:8"]]
+ 008bccdc ["CALLIND", null, ["register:0:8"]]
- 008bbd40 ["COPY", "register:0:8", ["register:4040:8"]]
- 008bbd40 ["INT_ADD", "register:40f0:8", ["const:8bbd40:8", "const:4:8"]]
- 008bbd40 ["CALLIND", null, ["register:0:8"]]
+ 008bccec ["COPY", "register:0:8", ["register:4040:8"]]
+ 008bccec ["INT_ADD", "register:40f0:8", ["const:8bccec:8", "const:4:8"]]
+ 008bccec ["CALLIND", null, ["register:0:8"]]
- 008bbd60 ["COPY", "register:0:8", ["register:4040:8"]]
- 008bbd60 ["INT_ADD", "register:40f0:8", ["const:8bbd60:8", "const:4:8"]]
- 008bbd60 ["CALLIND", null, ["register:0:8"]]
+ 008bcd0c ["COPY", "register:0:8", ["register:4040:8"]]
+ 008bcd0c ["INT_ADD", "register:40f0:8", ["const:8bcd0c:8", "const:4:8"]]
+ 008bcd0c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-eb7e43d47e5267fb1a9e63223917a962"></a>

### [`008bc1a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc1a4.md) → [`008bd150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bd/008bd150.md) FUN_008bd150

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008bc218 ["INT_ADD", "register:40f0:8", ["const:8bc218:8", "const:4:8"]]
- 008bc218 ["CALL", null, ["callee:00c54d90:8"]]
+ 008bd1c4 ["INT_ADD", "register:40f0:8", ["const:8bd1c4:8", "const:4:8"]]
+ 008bd1c4 ["CALL", null, ["callee:00c54d90:8"]]
- 008bc22c ["COPY", "register:0:8", ["register:4040:8"]]
- 008bc22c ["INT_ADD", "register:40f0:8", ["const:8bc22c:8", "const:4:8"]]
- 008bc22c ["CALLIND", null, ["register:0:8"]]
+ 008bd1d8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008bd1d8 ["INT_ADD", "register:40f0:8", ["const:8bd1d8:8", "const:4:8"]]
+ 008bd1d8 ["CALLIND", null, ["register:0:8"]]
- 008bc234 ["INT_ADD", "register:40f0:8", ["const:8bc234:8", "const:4:8"]]
- 008bc234 ["CALL", null, ["callee:00c58f20:8"]]
+ 008bd1e0 ["INT_ADD", "register:40f0:8", ["const:8bd1e0:8", "const:4:8"]]
+ 008bd1e0 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-3013d6d8b24ffe06740dfc24a4b5ff6f"></a>

### [`008bc400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc400.md) → [`008bd3ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bd/008bd3ac.md) FUN_008bd3ac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008b96fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b96fc.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`008ba6a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba6a8.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008bc46c ["COPY", "register:0:8", ["register:4040:8"]]
- 008bc46c ["INT_ADD", "register:40f0:8", ["const:8bc46c:8", "const:4:8"]]
- 008bc46c ["CALLIND", null, ["register:0:8"]]
+ 008bd418 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008bd418 ["INT_ADD", "register:40f0:8", ["const:8bd418:8", "const:4:8"]]
+ 008bd418 ["CALLIND", null, ["register:0:8"]]
- 008bc47c ["COPY", "register:0:8", ["register:4040:8"]]
- 008bc47c ["INT_ADD", "register:40f0:8", ["const:8bc47c:8", "const:4:8"]]
- 008bc47c ["CALLIND", null, ["register:0:8"]]
+ 008bd428 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008bd428 ["INT_ADD", "register:40f0:8", ["const:8bd428:8", "const:4:8"]]
+ 008bd428 ["CALLIND", null, ["register:0:8"]]
- 008bc49c ["COPY", "register:0:8", ["register:4040:8"]]
- 008bc49c ["INT_ADD", "register:40f0:8", ["const:8bc49c:8", "const:4:8"]]
- 008bc49c ["CALLIND", null, ["register:0:8"]]
+ 008bd448 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008bd448 ["INT_ADD", "register:40f0:8", ["const:8bd448:8", "const:4:8"]]
+ 008bd448 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b2cc74a3d555c6eab2294934c0d63976"></a>

### [`008bf8ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bf/008bf8ac.md) → [`008c0858`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c0/008c0858.md) FUN_008c0858

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`008bf604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bf/008bf604.md) [`008c5df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c5df8.md) [`008d05cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d05cc.md) · 呼出先 4件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md) [`00ac96f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ac9/00ac96f8.md)
- 新版 呼出元 3件 [`008c05b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c0/008c05b0.md) [`008c6da4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c6/008c6da4.md) [`008d1578`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d1/008d1578.md) · 呼出先 4件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f1c.md) [`008b89cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b89cc.md) [`00aca6ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aca/00aca6ec.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008bf8b8 ["INT_ADD", "register:40f0:8", ["const:8bf8b8:8", "const:4:8"]]
- 008bf8b8 ["CALL", null, ["callee:008524fc:8"]]
+ 008c0864 ["INT_ADD", "register:40f0:8", ["const:8c0864:8", "const:4:8"]]
+ 008c0864 ["CALL", null, ["callee:008524fc:8"]]
- 008bf8c4 ["INT_ADD", "register:40f0:8", ["const:8bf8c4:8", "const:4:8"]]
- 008bf8c4 ["CALL", null, ["callee:00aca6ec:8"]]
+ 008c0870 ["INT_ADD", "register:40f0:8", ["const:8c0870:8", "const:4:8"]]
+ 008c0870 ["CALL", null, ["callee:00aca6ec:8"]]
- 008bf8c8 ["INT_ADD", "register:40f0:8", ["const:8bf8c8:8", "const:4:8"]]
- 008bf8c8 ["CALL", null, ["callee:008524fc:8"]]
+ 008c0874 ["INT_ADD", "register:40f0:8", ["const:8c0874:8", "const:4:8"]]
+ 008c0874 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-a4ad41a5100933155c3f7362e7fc74d7"></a>

### [`008c1ef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c1/008c1ef0.md) → [`008c2e9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c2/008c2e9c.md) FUN_008c2e9c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`005fa864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fa/005fa864.md) [`008c1534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c1/008c1534.md) [`00ad6fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad6/00ad6fbc.md) · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043e868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e868.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00a4203c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a42/00a4203c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`005fac14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fa/005fac14.md) [`008c24e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c2/008c24e0.md) [`00ad7fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ad7/00ad7fb0.md) · 呼出先 7件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043eb88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043eb88.md) [`0044dc80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044d/0044dc80.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00a43030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a43/00a43030.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008c1f24 ["INT_ADD", "register:40f0:8", ["const:8c1f24:8", "const:4:8"]]
- 008c1f24 ["CALL", null, ["callee:008524fc:8"]]
+ 008c2ed0 ["INT_ADD", "register:40f0:8", ["const:8c2ed0:8", "const:4:8"]]
+ 008c2ed0 ["CALL", null, ["callee:008524fc:8"]]
- 008c1f88 ["INT_ADD", "register:40f0:8", ["const:8c1f88:8", "const:4:8"]]
- 008c1f88 ["CALL", null, ["callee:008524fc:8"]]
+ 008c2f34 ["INT_ADD", "register:40f0:8", ["const:8c2f34:8", "const:4:8"]]
+ 008c2f34 ["CALL", null, ["callee:008524fc:8"]]
- 008c1fc8 ["INT_ADD", "register:40f0:8", ["const:8c1fc8:8", "const:4:8"]]
- 008c1fc8 ["CALL", null, ["callee:008524fc:8"]]
+ 008c2f74 ["INT_ADD", "register:40f0:8", ["const:8c2f74:8", "const:4:8"]]
+ 008c2f74 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-97d7024134683e58e687cbb5880d7492"></a>

### [`008c2538`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c2/008c2538.md) → [`008c34e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c3/008c34e4.md) FUN_008c34e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008c5df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c5df8.md) · 呼出先 11件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00ad0410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad0/00ad0410.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 1件 [`008c6da4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c6/008c6da4.md) · 呼出先 11件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00ad1404`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ad1/00ad1404.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008c258c ["INT_ADD", "register:40f0:8", ["const:8c258c:8", "const:4:8"]]
- 008c258c ["CALL", null, ["callee:008524fc:8"]]
+ 008c3538 ["INT_ADD", "register:40f0:8", ["const:8c3538:8", "const:4:8"]]
+ 008c3538 ["CALL", null, ["callee:008524fc:8"]]
- 008c2594 ["INT_ADD", "register:40f0:8", ["const:8c2594:8", "const:4:8"]]
- 008c2594 ["CALL", null, ["callee:00ad1404:8"]]
+ 008c3540 ["INT_ADD", "register:40f0:8", ["const:8c3540:8", "const:4:8"]]
+ 008c3540 ["CALL", null, ["callee:00ad1404:8"]]
- 008c25b8 ["INT_ADD", "register:40f0:8", ["const:8c25b8:8", "const:4:8"]]
- 008c25b8 ["CALL", null, ["callee:008524fc:8"]]
+ 008c3564 ["INT_ADD", "register:40f0:8", ["const:8c3564:8", "const:4:8"]]
+ 008c3564 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-0a06a6764fc234c965cacc6b25de392c"></a>

### [`008c28c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c2/008c28c4.md) → [`008c3870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c3/008c3870.md) FUN_008c3870

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008c28e0 ["INT_ADD", "register:40f0:8", ["const:8c28e0:8", "const:4:8"]]
- 008c28e0 ["CALL", null, ["callee:00c54d90:8"]]
+ 008c388c ["INT_ADD", "register:40f0:8", ["const:8c388c:8", "const:4:8"]]
+ 008c388c ["CALL", null, ["callee:00c54d90:8"]]
- 008c2900 ["COPY", "register:0:8", ["register:4040:8"]]
- 008c2900 ["INT_ADD", "register:40f0:8", ["const:8c2900:8", "const:4:8"]]
- 008c2900 ["CALLIND", null, ["register:0:8"]]
+ 008c38ac ["COPY", "register:0:8", ["register:4040:8"]]
+ 008c38ac ["INT_ADD", "register:40f0:8", ["const:8c38ac:8", "const:4:8"]]
+ 008c38ac ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-eb94bdf82679469f91f528d2249760fd"></a>

### [`008c2914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c2/008c2914.md) → [`008c38c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c3/008c38c0.md) FUN_008c38c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 6件 [`008c5df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c5df8.md) [`008cb488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cb488.md) [`008cf498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf498.md) [`008cf750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf750.md) [`008cf970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf970.md) · 呼出先 4件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md) [`00ac9604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ac9/00ac9604.md)
- 新版 呼出元 6件 [`008c6da4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c6/008c6da4.md) [`008cc434`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cc/008cc434.md) [`008d0444`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d0/008d0444.md) [`008d06fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d0/008d06fc.md) [`008d091c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d0/008d091c.md) · 呼出先 4件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f1c.md) [`008b89cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b89cc.md) [`00aca5f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aca/00aca5f8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008c2920 ["INT_ADD", "register:40f0:8", ["const:8c2920:8", "const:4:8"]]
- 008c2920 ["CALL", null, ["callee:008524fc:8"]]
+ 008c38cc ["INT_ADD", "register:40f0:8", ["const:8c38cc:8", "const:4:8"]]
+ 008c38cc ["CALL", null, ["callee:008524fc:8"]]
- 008c292c ["INT_ADD", "register:40f0:8", ["const:8c292c:8", "const:4:8"]]
- 008c292c ["CALL", null, ["callee:00aca5f8:8"]]
+ 008c38d8 ["INT_ADD", "register:40f0:8", ["const:8c38d8:8", "const:4:8"]]
+ 008c38d8 ["CALL", null, ["callee:00aca5f8:8"]]
- 008c2930 ["INT_ADD", "register:40f0:8", ["const:8c2930:8", "const:4:8"]]
- 008c2930 ["CALL", null, ["callee:008524fc:8"]]
+ 008c38dc ["INT_ADD", "register:40f0:8", ["const:8c38dc:8", "const:4:8"]]
+ 008c38dc ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-f594e6684a34435252d6f02cd994844d"></a>

### [`008c2d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c2/008c2d7c.md) → [`008c3d28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c3/008c3d28.md) FUN_008c3d28

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 19件 [`005afe48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005af/005afe48.md) [`005aff9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005af/005aff9c.md) [`005b00a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b0/005b00a4.md) [`005b0100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b0/005b0100.md) [`005b0180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b0/005b0180.md) · 呼出先 6件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`009e1014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e1/009e1014.md) [`009e431c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e4/009e431c.md) [`00a41fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a41/00a41fa0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 19件 [`005b01f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b01f8.md) [`005b034c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b034c.md) [`005b0454`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b0454.md) [`005b04b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b04b0.md) [`005b0530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b0530.md) · 呼出先 6件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`009e1fc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e1/009e1fc0.md) [`009e52c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e5/009e52c8.md) [`00a42f94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a42/00a42f94.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008c2e4c ["INT_ADD", "register:40f0:8", ["const:8c2e4c:8", "const:4:8"]]
- 008c2e4c ["CALL", null, ["callee:008524fc:8"]]
+ 008c3df8 ["INT_ADD", "register:40f0:8", ["const:8c3df8:8", "const:4:8"]]
+ 008c3df8 ["CALL", null, ["callee:008524fc:8"]]
- 008c2e60 ["INT_ADD", "register:40f0:8", ["const:8c2e60:8", "const:4:8"]]
- 008c2e60 ["CALL", null, ["callee:00a42f94:8"]]
+ 008c3e0c ["INT_ADD", "register:40f0:8", ["const:8c3e0c:8", "const:4:8"]]
+ 008c3e0c ["CALL", null, ["callee:00a42f94:8"]]
- 008c2e74 ["INT_ADD", "register:40f0:8", ["const:8c2e74:8", "const:4:8"]]
- 008c2e74 ["CALL", null, ["callee:008524fc:8"]]
+ 008c3e20 ["INT_ADD", "register:40f0:8", ["const:8c3e20:8", "const:4:8"]]
+ 008c3e20 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-a3a9040ef13d38664df274ae6d18c0db"></a>

### [`008c2f04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c2/008c2f04.md) → [`008c3eb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c3/008c3eb0.md) FUN_008c3eb0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b000f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b000f0.md) · 呼出先 10件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`009e1014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e1/009e1014.md) [`009e431c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e4/009e431c.md)
- 新版 呼出元 1件 [`00b010e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b01/00b010e4.md) · 呼出先 10件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`009e1fc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e1/009e1fc0.md) [`009e52c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e5/009e52c8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008c2fe0 ["INT_ADD", "register:40f0:8", ["const:8c2fe0:8", "const:4:8"]]
- 008c2fe0 ["CALL", null, ["callee:008524fc:8"]]
+ 008c3f8c ["INT_ADD", "register:40f0:8", ["const:8c3f8c:8", "const:4:8"]]
+ 008c3f8c ["CALL", null, ["callee:008524fc:8"]]
- 008c2ffc ["INT_ADD", "register:40f0:8", ["const:8c2ffc:8", "const:4:8"]]
- 008c2ffc ["CALL", null, ["callee:00a42f94:8"]]
+ 008c3fa8 ["INT_ADD", "register:40f0:8", ["const:8c3fa8:8", "const:4:8"]]
+ 008c3fa8 ["CALL", null, ["callee:00a42f94:8"]]
- 008c3078 ["INT_ADD", "register:40f0:8", ["const:8c3078:8", "const:4:8"]]
- 008c3078 ["CALL", null, ["callee:00c58f30:8"]]
+ 008c4024 ["INT_ADD", "register:40f0:8", ["const:8c4024:8", "const:4:8"]]
+ 008c4024 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-cec409edb1302ccffac6720e1c2bb104"></a>

### [`008cb904`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cb904.md) → [`008cc8b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cc/008cc8b0.md) FUN_008cc8b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`008cb840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cb840.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`008cc7ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cc/008cc7ec.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008cb914 ["INT_ADD", "register:40f0:8", ["const:8cb914:8", "const:4:8"]]
- 008cb914 ["CALL", null, ["callee:008cc7ec:8"]]
+ 008cc8c0 ["INT_ADD", "register:40f0:8", ["const:8cc8c0:8", "const:4:8"]]
+ 008cc8c0 ["CALL", null, ["callee:008cc7ec:8"]]
~~~


<a id="compare-e55ad3813a2404665a6ef2f94796a029"></a>

### [`008ceac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ce/008ceac8.md) → [`008cfa74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cf/008cfa74.md) FUN_008cfa74

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008ce618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ce/008ce618.md) · 呼出先 3件 [`008ce618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ce/008ce618.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`008cf5c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cf/008cf5c4.md) · 呼出先 3件 [`008cf5c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cf/008cf5c4.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008cec34 ["INT_ADD", "register:40f0:8", ["const:8cec34:8", "const:4:8"]]
- 008cec34 ["CALL", null, ["callee:00c54d90:8"]]
+ 008cfbe0 ["INT_ADD", "register:40f0:8", ["const:8cfbe0:8", "const:4:8"]]
+ 008cfbe0 ["CALL", null, ["callee:00c54d90:8"]]
- 008cec48 ["COPY", "register:0:8", ["register:4040:8"]]
- 008cec48 ["INT_ADD", "register:40f0:8", ["const:8cec48:8", "const:4:8"]]
- 008cec48 ["CALLIND", null, ["register:0:8"]]
+ 008cfbf4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008cfbf4 ["INT_ADD", "register:40f0:8", ["const:8cfbf4:8", "const:4:8"]]
+ 008cfbf4 ["CALLIND", null, ["register:0:8"]]
- 008cec50 ["INT_ADD", "register:40f0:8", ["const:8cec50:8", "const:4:8"]]
- 008cec50 ["CALL", null, ["callee:00c58f20:8"]]
+ 008cfbfc ["INT_ADD", "register:40f0:8", ["const:8cfbfc:8", "const:4:8"]]
+ 008cfbfc ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-00be5a22a006502f520077f39026e872"></a>

### [`008cfe44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cfe44.md) → [`008d0df0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d0/008d0df0.md) FUN_008d0df0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008c5df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c5df8.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008c6da4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c6/008c6da4.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008cfe64 ["INT_ADD", "register:40f0:8", ["const:8cfe64:8", "const:4:8"]]
- 008cfe64 ["CALL", null, ["callee:00c58f50:8"]]
+ 008d0e10 ["INT_ADD", "register:40f0:8", ["const:8d0e10:8", "const:4:8"]]
+ 008d0e10 ["CALL", null, ["callee:00c58f50:8"]]
~~~


