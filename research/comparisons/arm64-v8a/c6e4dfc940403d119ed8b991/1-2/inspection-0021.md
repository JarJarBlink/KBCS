# v16.0.2 → v16.0.3 · 要調査の変更候補 (21)

[一覧の目次](README.md)

<a id="compare-7ae67219362232b4e758690a445e3850"></a>

### [`0081c34c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081c/0081c34c.md) → [`0081d2f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0081d/0081d2f8.md) FUN_0081d2f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`0081a86c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081a/0081a86c.md) [`0082d800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082d/0082d800.md) [`00830664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/00830664.md) [`008306b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/008306b0.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`0081b818`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0081b/0081b818.md) [`0082e7ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0082e/0082e7ac.md) [`00831610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00831/00831610.md) [`0083165c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00831/0083165c.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0081c36c ["INT_ADD", "register:40f0:8", ["const:81c36c:8", "const:4:8"]]
- 0081c36c ["CALL", null, ["callee:00c58f50:8"]]
+ 0081d318 ["INT_ADD", "register:40f0:8", ["const:81d318:8", "const:4:8"]]
+ 0081d318 ["CALL", null, ["callee:00c58f50:8"]]
- 0081c3a8 ["INT_ADD", "register:40f0:8", ["const:81c3a8:8", "const:4:8"]]
- 0081c3a8 ["CALL", null, ["callee:00c54d90:8"]]
+ 0081d354 ["INT_ADD", "register:40f0:8", ["const:81d354:8", "const:4:8"]]
+ 0081d354 ["CALL", null, ["callee:00c54d90:8"]]
- 0081c3bc ["COPY", "register:0:8", ["register:4040:8"]]
- 0081c3bc ["INT_ADD", "register:40f0:8", ["const:81c3bc:8", "const:4:8"]]
- 0081c3bc ["CALLIND", null, ["register:0:8"]]
+ 0081d368 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0081d368 ["INT_ADD", "register:40f0:8", ["const:81d368:8", "const:4:8"]]
+ 0081d368 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e29a13ab4bd378d5193991c943bed93e"></a>

### [`0081c464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081c/0081c464.md) → [`0081d410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0081d/0081d410.md) FUN_0081d410

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0081a86c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081a/0081a86c.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0081b818`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0081b/0081b818.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0081c49c ["INT_ADD", "register:40f0:8", ["const:81c49c:8", "const:4:8"]]
- 0081c49c ["CALL", null, ["callee:00c58f50:8"]]
+ 0081d448 ["INT_ADD", "register:40f0:8", ["const:81d448:8", "const:4:8"]]
+ 0081d448 ["CALL", null, ["callee:00c58f50:8"]]
- 0081c4e4 ["INT_ADD", "register:40f0:8", ["const:81c4e4:8", "const:4:8"]]
- 0081c4e4 ["CALL", null, ["callee:00c54d90:8"]]
+ 0081d490 ["INT_ADD", "register:40f0:8", ["const:81d490:8", "const:4:8"]]
+ 0081d490 ["CALL", null, ["callee:00c54d90:8"]]
- 0081c4f8 ["COPY", "register:0:8", ["register:4040:8"]]
- 0081c4f8 ["INT_ADD", "register:40f0:8", ["const:81c4f8:8", "const:4:8"]]
- 0081c4f8 ["CALLIND", null, ["register:0:8"]]
+ 0081d4a4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0081d4a4 ["INT_ADD", "register:40f0:8", ["const:81d4a4:8", "const:4:8"]]
+ 0081d4a4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2272ca2bb4d1aacb2de444133fef364a"></a>

### [`0081c5a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081c/0081c5a8.md) → [`0081d554`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0081d/0081d554.md) FUN_0081d554

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0081a86c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081a/0081a86c.md) · 呼出先 10件 [`00819d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00819/00819d34.md) [`0082fdc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082f/0082fdc4.md) [`008300a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/008300a4.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`0081b818`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0081b/0081b818.md) · 呼出先 10件 [`0081ace0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0081a/0081ace0.md) [`00830d70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00830/00830d70.md) [`00831050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00831/00831050.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0081c5fc ["INT_ADD", "register:40f0:8", ["const:81c5fc:8", "const:4:8"]]
- 0081c5fc ["CALL", null, ["callee:00c58f30:8"]]
+ 0081d5a8 ["INT_ADD", "register:40f0:8", ["const:81d5a8:8", "const:4:8"]]
+ 0081d5a8 ["CALL", null, ["callee:00c58f30:8"]]
- 0081c644 ["INT_ADD", "register:40f0:8", ["const:81c644:8", "const:4:8"]]
- 0081c644 ["CALL", null, ["callee:00c54d60:8"]]
+ 0081d5f0 ["INT_ADD", "register:40f0:8", ["const:81d5f0:8", "const:4:8"]]
+ 0081d5f0 ["CALL", null, ["callee:00c54d60:8"]]
- 0081c678 ["INT_ADD", "register:40f0:8", ["const:81c678:8", "const:4:8"]]
- 0081c678 ["CALL", null, ["callee:00830d70:8"]]
+ 0081d624 ["INT_ADD", "register:40f0:8", ["const:81d624:8", "const:4:8"]]
+ 0081d624 ["CALL", null, ["callee:00830d70:8"]]
~~~


<a id="compare-2a65b1faf8e9c9236e28e2b894121eba"></a>

### [`0081c760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081c/0081c760.md) → [`0081d70c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0081d/0081d70c.md) FUN_0081d70c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0082168c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00821/0082168c.md) · 呼出先 5件 [`008302cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/008302cc.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00822638`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00822/00822638.md) · 呼出先 5件 [`00831278`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00831/00831278.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0081c800 ["INT_ADD", "register:40f0:8", ["const:81c800:8", "const:4:8"]]
- 0081c800 ["CALL", null, ["callee:00c58f30:8"]]
+ 0081d7ac ["INT_ADD", "register:40f0:8", ["const:81d7ac:8", "const:4:8"]]
+ 0081d7ac ["CALL", null, ["callee:00c58f30:8"]]
- 0081c818 ["INT_ADD", "register:40f0:8", ["const:81c818:8", "const:4:8"]]
- 0081c818 ["CALL", null, ["callee:00c590a0:8"]]
+ 0081d7c4 ["INT_ADD", "register:40f0:8", ["const:81d7c4:8", "const:4:8"]]
+ 0081d7c4 ["CALL", null, ["callee:00c590a0:8"]]
- 0081c828 ["INT_ADD", "register:40f0:8", ["const:81c828:8", "const:4:8"]]
- 0081c828 ["CALL", null, ["callee:00831278:8"]]
+ 0081d7d4 ["INT_ADD", "register:40f0:8", ["const:81d7d4:8", "const:4:8"]]
+ 0081d7d4 ["CALL", null, ["callee:00831278:8"]]
~~~


<a id="compare-e66420584b81dddd0bcc39ec83d9fbf4"></a>

### [`0081c84c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081c/0081c84c.md) → [`0081d7f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0081d/0081d7f8.md) FUN_0081d7f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00822e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00822/00822e48.md) [`00822f88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00822/00822f88.md) [`00823068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00823/00823068.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 3件 [`00823df4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00823/00823df4.md) [`00823f34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00823/00823f34.md) [`00824014`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00824/00824014.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0081c900 ["INT_ADD", "register:40f0:8", ["const:81c900:8", "const:4:8"]]
- 0081c900 ["CALL", null, ["callee:00c58f30:8"]]
+ 0081d8ac ["INT_ADD", "register:40f0:8", ["const:81d8ac:8", "const:4:8"]]
+ 0081d8ac ["CALL", null, ["callee:00c58f30:8"]]
- 0081c934 ["INT_ADD", "register:40f0:8", ["const:81c934:8", "const:4:8"]]
- 0081c934 ["CALL", null, ["callee:0043bf04:8"]]
+ 0081d8e0 ["INT_ADD", "register:40f0:8", ["const:81d8e0:8", "const:4:8"]]
+ 0081d8e0 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-a4ae45e6cca4136c62834458e1650213"></a>

### [`0081c95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081c/0081c95c.md) → [`0081d908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0081d/0081d908.md) FUN_0081d908

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 4件 [`0081cbe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081c/0081cbe0.md) [`00830664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/00830664.md) [`00830850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/00830850.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) · 呼出先 4件 [`0081db8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0081d/0081db8c.md) [`00831610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00831/00831610.md) [`008317fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00831/008317fc.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0081c9c4 ["INT_ADD", "register:40f0:8", ["const:81c9c4:8", "const:4:8"]]
- 0081c9c4 ["CALL", null, ["callee:008317fc:8"]]
+ 0081d970 ["INT_ADD", "register:40f0:8", ["const:81d970:8", "const:4:8"]]
+ 0081d970 ["CALL", null, ["callee:008317fc:8"]]
- 0081ca20 ["INT_ADD", "register:40f0:8", ["const:81ca20:8", "const:4:8"]]
- 0081ca20 ["CALL", null, ["callee:0081db8c:8"]]
+ 0081d9cc ["INT_ADD", "register:40f0:8", ["const:81d9cc:8", "const:4:8"]]
+ 0081d9cc ["CALL", null, ["callee:0081db8c:8"]]
- 0081caa8 ["INT_ADD", "register:40f0:8", ["const:81caa8:8", "const:4:8"]]
- 0081caa8 ["CALL", null, ["callee:00831610:8"]]
+ 0081da54 ["INT_ADD", "register:40f0:8", ["const:81da54:8", "const:4:8"]]
+ 0081da54 ["CALL", null, ["callee:00831610:8"]]
~~~


<a id="compare-1b5d90770328cac79b956fb820b465d8"></a>

### [`0081d224`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081d/0081d224.md) → [`0081e1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0081e/0081e1d0.md) FUN_0081e1d0

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0072b19c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072b/0072b19c.md) [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) [`007738ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00773/007738ec.md) · 呼出先 2件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b3e4ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3e/00b3e4ac.md)
- 新版 呼出元 3件 [`0072b54c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072b/0072b54c.md) [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) [`00773cc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00773/00773cc8.md) · 呼出先 2件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00b3f4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3f/00b3f4a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0081d22c ["INT_ADD", "register:40f0:8", ["const:81d22c:8", "const:4:8"]]
- 0081d22c ["CALL", null, ["callee:008524fc:8"]]
+ 0081e1d8 ["INT_ADD", "register:40f0:8", ["const:81e1d8:8", "const:4:8"]]
+ 0081e1d8 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-073b634d6dcbd31805b3d15a3a982d4f"></a>

### [`00820774`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00820/00820774.md) → [`00821720`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00821/00821720.md) FUN_00821720

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`008202f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00820/008202f0.md) [`00822cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00822/00822cf0.md) [`00823068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00823/00823068.md) [`008300b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/008300b8.md) · 呼出先 10件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00819dcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00819/00819dcc.md) [`008300a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/008300a4.md) [`008301c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/008301c8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 4件 [`0082129c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00821/0082129c.md) [`00823c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00823/00823c9c.md) [`00824014`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00824/00824014.md) [`00831064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00831/00831064.md) · 呼出先 10件 [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`0081ad78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0081a/0081ad78.md) [`00831050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00831/00831050.md) [`00831174`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00831/00831174.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008207cc ["INT_ADD", "register:40f0:8", ["const:8207cc:8", "const:4:8"]]
- 008207cc ["CALL", null, ["callee:00c58f30:8"]]
+ 00821778 ["INT_ADD", "register:40f0:8", ["const:821778:8", "const:4:8"]]
+ 00821778 ["CALL", null, ["callee:00c58f30:8"]]
- 008207e4 ["INT_ADD", "register:40f0:8", ["const:8207e4:8", "const:4:8"]]
- 008207e4 ["CALL", null, ["callee:00c590a0:8"]]
+ 00821790 ["INT_ADD", "register:40f0:8", ["const:821790:8", "const:4:8"]]
+ 00821790 ["CALL", null, ["callee:00c590a0:8"]]
- 00820810 ["INT_ADD", "register:40f0:8", ["const:820810:8", "const:4:8"]]
- 00820810 ["CALL", null, ["callee:00c54d60:8"]]
+ 008217bc ["INT_ADD", "register:40f0:8", ["const:8217bc:8", "const:4:8"]]
+ 008217bc ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-25d965c8346a1e6456b030052fdf1555"></a>

### [`00822e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00822/00822e48.md) → [`00823df4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00823/00823df4.md) FUN_00823df4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00823068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00823/00823068.md) · 呼出先 3件 [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md) [`0081c84c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081c/0081c84c.md) [`00c58520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58520.md)
- 新版 呼出元 1件 [`00824014`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00824/00824014.md) · 呼出先 3件 [`0049f750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f750.md) [`0081d7f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0081d/0081d7f8.md) [`00c594f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c594f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00822eb8 ["INT_ADD", "register:40f0:8", ["const:822eb8:8", "const:4:8"]]
- 00822eb8 ["CALL", null, ["callee:00c594f0:8"]]
+ 00823e64 ["INT_ADD", "register:40f0:8", ["const:823e64:8", "const:4:8"]]
+ 00823e64 ["CALL", null, ["callee:00c594f0:8"]]
- 00822eec ["INT_ADD", "register:40f0:8", ["const:822eec:8", "const:4:8"]]
- 00822eec ["CALL", null, ["callee:00c594f0:8"]]
+ 00823e98 ["INT_ADD", "register:40f0:8", ["const:823e98:8", "const:4:8"]]
+ 00823e98 ["CALL", null, ["callee:00c594f0:8"]]
- 00822f84 ["INT_ADD", "register:40f0:8", ["const:822f84:8", "const:4:8"]]
- 00822f84 ["CALL", null, ["callee:0049f750:8"]]
+ 00823f30 ["INT_ADD", "register:40f0:8", ["const:823f30:8", "const:4:8"]]
+ 00823f30 ["CALL", null, ["callee:0049f750:8"]]
~~~


<a id="compare-4e8abd2d2398c4b367797c600676c1aa"></a>

### [`00822f88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00822/00822f88.md) → [`00823f34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00823/00823f34.md) FUN_00823f34

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00823068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00823/00823068.md) · 呼出先 3件 [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md) [`0081c84c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081c/0081c84c.md) [`00c58520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58520.md)
- 新版 呼出元 1件 [`00824014`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00824/00824014.md) · 呼出先 3件 [`0049f750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f750.md) [`0081d7f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0081d/0081d7f8.md) [`00c594f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c594f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00823018 ["INT_ADD", "register:40f0:8", ["const:823018:8", "const:4:8"]]
- 00823018 ["CALL", null, ["callee:00c594f0:8"]]
+ 00823fc4 ["INT_ADD", "register:40f0:8", ["const:823fc4:8", "const:4:8"]]
+ 00823fc4 ["CALL", null, ["callee:00c594f0:8"]]
- 00823064 ["INT_ADD", "register:40f0:8", ["const:823064:8", "const:4:8"]]
- 00823064 ["CALL", null, ["callee:0049f750:8"]]
+ 00824010 ["INT_ADD", "register:40f0:8", ["const:824010:8", "const:4:8"]]
+ 00824010 ["CALL", null, ["callee:0049f750:8"]]
~~~


<a id="compare-3ccdbef01e09e6d3c100f5b27c16d96b"></a>

### [`0082cd54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082c/0082cd54.md) → [`0082dd00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0082d/0082dd00.md) FUN_0082dd00

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009dd02c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009dd/009dd02c.md) · 呼出先 2件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00ac86ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ac8/00ac86ac.md)
- 新版 呼出元 1件 [`009ddfd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009dd/009ddfd8.md) · 呼出先 2件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00ac96a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ac9/00ac96a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0082cd5c ["INT_ADD", "register:40f0:8", ["const:82cd5c:8", "const:4:8"]]
- 0082cd5c ["CALL", null, ["callee:008524fc:8"]]
+ 0082dd08 ["INT_ADD", "register:40f0:8", ["const:82dd08:8", "const:4:8"]]
+ 0082dd08 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-68043bdad0922bf669d6bb73c493f3b1"></a>

### [`0082d7b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082d/0082d7b0.md) → [`0082e75c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0082e/0082e75c.md) FUN_0082e75c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0082d7cc ["INT_ADD", "register:40f0:8", ["const:82d7cc:8", "const:4:8"]]
- 0082d7cc ["CALL", null, ["callee:00c54d90:8"]]
+ 0082e778 ["INT_ADD", "register:40f0:8", ["const:82e778:8", "const:4:8"]]
+ 0082e778 ["CALL", null, ["callee:00c54d90:8"]]
- 0082d7ec ["COPY", "register:0:8", ["register:4040:8"]]
- 0082d7ec ["INT_ADD", "register:40f0:8", ["const:82d7ec:8", "const:4:8"]]
- 0082d7ec ["CALLIND", null, ["register:0:8"]]
+ 0082e798 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0082e798 ["INT_ADD", "register:40f0:8", ["const:82e798:8", "const:4:8"]]
+ 0082e798 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8759c27fa5b89002ec2288c7bb5fd7b7"></a>

### [`008304a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/008304a4.md) → [`00831450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00831/00831450.md) FUN_00831450

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00830498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/00830498.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00831444`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00831/00831444.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008304c0 ["INT_ADD", "register:40f0:8", ["const:8304c0:8", "const:4:8"]]
- 008304c0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0083146c ["INT_ADD", "register:40f0:8", ["const:83146c:8", "const:4:8"]]
+ 0083146c ["CALL", null, ["callee:00c58f50:8"]]
- 008304d0 ["INT_ADD", "register:40f0:8", ["const:8304d0:8", "const:4:8"]]
- 008304d0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0083147c ["INT_ADD", "register:40f0:8", ["const:83147c:8", "const:4:8"]]
+ 0083147c ["CALL", null, ["callee:00c58f50:8"]]
- 008304e0 ["INT_ADD", "register:40f0:8", ["const:8304e0:8", "const:4:8"]]
- 008304e0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0083148c ["INT_ADD", "register:40f0:8", ["const:83148c:8", "const:4:8"]]
+ 0083148c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-bd66e8d4b47a0253623a8ebfe601b4da"></a>

### [`008305ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/008305ac.md) → [`00831558`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00831/00831558.md) FUN_00831558

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0081a86c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081a/0081a86c.md) [`008305ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/008305ac.md) [`008478b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/008478b8.md) · 呼出先 4件 [`008305ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/008305ac.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0081b818`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0081b/0081b818.md) [`00831558`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00831/00831558.md) [`00848864`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00848/00848864.md) · 呼出先 4件 [`00831558`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00831/00831558.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008305c8 ["INT_ADD", "register:40f0:8", ["const:8305c8:8", "const:4:8"]]
- 008305c8 ["CALL", null, ["local:b0:8"]]
+ 00831574 ["INT_ADD", "register:40f0:8", ["const:831574:8", "const:4:8"]]
+ 00831574 ["CALL", null, ["local:b0:8"]]
- 008305d4 ["INT_ADD", "register:40f0:8", ["const:8305d4:8", "const:4:8"]]
- 008305d4 ["CALL", null, ["local:b0:8"]]
+ 00831580 ["INT_ADD", "register:40f0:8", ["const:831580:8", "const:4:8"]]
+ 00831580 ["CALL", null, ["local:b0:8"]]
- 008305e8 ["INT_ADD", "register:40f0:8", ["const:8305e8:8", "const:4:8"]]
- 008305e8 ["CALL", null, ["callee:00c54d90:8"]]
+ 00831594 ["INT_ADD", "register:40f0:8", ["const:831594:8", "const:4:8"]]
+ 00831594 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-f44ac60b34b767fc1c2a61f61861d9b7"></a>

### [`00830664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/00830664.md) → [`00831610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00831/00831610.md) FUN_00831610

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 11件 [`0081a86c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081a/0081a86c.md) [`0081c95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081c/0081c95c.md) [`00823068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00823/00823068.md) [`008238b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00823/008238b8.md) [`008293ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00829/008293ec.md) · 呼出先 3件 [`0081c34c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081c/0081c34c.md) [`00830664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/00830664.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 11件 [`0081b818`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0081b/0081b818.md) [`0081d908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0081d/0081d908.md) [`00824014`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00824/00824014.md) [`00824864`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00824/00824864.md) [`0082a398`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0082a/0082a398.md) · 呼出先 3件 [`0081d2f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0081d/0081d2f8.md) [`00831610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00831/00831610.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00830684 ["INT_ADD", "register:40f0:8", ["const:830684:8", "const:4:8"]]
- 00830684 ["CALL", null, ["local:b0:8"]]
+ 00831630 ["INT_ADD", "register:40f0:8", ["const:831630:8", "const:4:8"]]
+ 00831630 ["CALL", null, ["local:b0:8"]]
- 00830690 ["INT_ADD", "register:40f0:8", ["const:830690:8", "const:4:8"]]
- 00830690 ["CALL", null, ["local:b0:8"]]
+ 0083163c ["INT_ADD", "register:40f0:8", ["const:83163c:8", "const:4:8"]]
+ 0083163c ["CALL", null, ["local:b0:8"]]
- 00830698 ["INT_ADD", "register:40f0:8", ["const:830698:8", "const:4:8"]]
- 00830698 ["CALL", null, ["callee:0081d2f8:8"]]
+ 00831644 ["INT_ADD", "register:40f0:8", ["const:831644:8", "const:4:8"]]
+ 00831644 ["CALL", null, ["callee:0081d2f8:8"]]
~~~


<a id="compare-947774c26eb101aefd27ecbed945f399"></a>

### [`00830ea4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00830/00830ea4.md) → [`00831e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00831/00831e50.md) FUN_00831e50

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00827970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00827/00827970.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0082891c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00828/0082891c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00830ee0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00830ee0 ["INT_ADD", "register:40f0:8", ["const:830ee0:8", "const:4:8"]]
- 00830ee0 ["CALLIND", null, ["register:0:8"]]
+ 00831e8c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00831e8c ["INT_ADD", "register:40f0:8", ["const:831e8c:8", "const:4:8"]]
+ 00831e8c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e174b527d9f0c3c5d97eaafe60853553"></a>

### [`00831170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831170.md) → [`0083211c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00832/0083211c.md) FUN_0083211c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00827970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00827/00827970.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0082891c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00828/0082891c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008311ac ["COPY", "register:0:8", ["register:4040:8"]]
- 008311ac ["INT_ADD", "register:40f0:8", ["const:8311ac:8", "const:4:8"]]
- 008311ac ["CALLIND", null, ["register:0:8"]]
+ 00832158 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00832158 ["INT_ADD", "register:40f0:8", ["const:832158:8", "const:4:8"]]
+ 00832158 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-67dc9740db196aa769f7d5a694be5a6f"></a>

### [`00831cf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831cf8.md) → [`00832ca4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00832/00832ca4.md) FUN_00832ca4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0082acc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082a/0082acc0.md) [`00831cf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831cf8.md) · 呼出先 2件 [`00831cf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00831/00831cf8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`0082bc6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0082b/0082bc6c.md) [`00832ca4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00832/00832ca4.md) · 呼出先 2件 [`00832ca4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00832/00832ca4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00831d18 ["INT_ADD", "register:40f0:8", ["const:831d18:8", "const:4:8"]]
- 00831d18 ["CALL", null, ["local:b0:8"]]
+ 00832cc4 ["INT_ADD", "register:40f0:8", ["const:832cc4:8", "const:4:8"]]
+ 00832cc4 ["CALL", null, ["local:b0:8"]]
- 00831d24 ["INT_ADD", "register:40f0:8", ["const:831d24:8", "const:4:8"]]
- 00831d24 ["CALL", null, ["local:b0:8"]]
+ 00832cd0 ["INT_ADD", "register:40f0:8", ["const:832cd0:8", "const:4:8"]]
+ 00832cd0 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-0db31e59350fe98c8c4a2e5b1ebad2e2"></a>

### [`00835760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/00835760.md) → [`0083670c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/0083670c.md) FUN_0083670c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0083212c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00832/0083212c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008330d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00833/008330d8.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00835780 ["INT_ADD", "register:40f0:8", ["const:835780:8", "const:4:8"]]
- 00835780 ["CALL", null, ["callee:00c58f50:8"]]
+ 0083672c ["INT_ADD", "register:40f0:8", ["const:83672c:8", "const:4:8"]]
+ 0083672c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-fc70535b92d6c425d9ffb6d3c66b1943"></a>

### [`00835bdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/00835bdc.md) → [`00836b88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/00836b88.md) FUN_00836b88

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0083212c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00832/0083212c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008330d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00833/008330d8.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00835bfc ["INT_ADD", "register:40f0:8", ["const:835bfc:8", "const:4:8"]]
- 00835bfc ["CALL", null, ["callee:00c58f50:8"]]
+ 00836ba8 ["INT_ADD", "register:40f0:8", ["const:836ba8:8", "const:4:8"]]
+ 00836ba8 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-5519af1e2469c152d296a09ed1d5ae9d"></a>

### [`00835e70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00835/00835e70.md) → [`00836e1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/00836e1c.md) FUN_00836e1c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0082c8bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082c/0082c8bc.md) [`0082cd70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082c/0082cd70.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00836024`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00836/00836024.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`0082d868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0082d/0082d868.md) [`0082dd1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0082d/0082dd1c.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00836fd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00836/00836fd0.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00835f14 ["INT_ADD", "register:40f0:8", ["const:835f14:8", "const:4:8"]]
- 00835f14 ["CALL", null, ["callee:00c58f30:8"]]
+ 00836ec0 ["INT_ADD", "register:40f0:8", ["const:836ec0:8", "const:4:8"]]
+ 00836ec0 ["CALL", null, ["callee:00c58f30:8"]]
- 00835fc0 ["INT_ADD", "register:40f0:8", ["const:835fc0:8", "const:4:8"]]
- 00835fc0 ["CALL", null, ["callee:00c54d90:8"]]
+ 00836f6c ["INT_ADD", "register:40f0:8", ["const:836f6c:8", "const:4:8"]]
+ 00836f6c ["CALL", null, ["callee:00c54d90:8"]]
- 00835fd4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00835fd4 ["INT_ADD", "register:40f0:8", ["const:835fd4:8", "const:4:8"]]
- 00835fd4 ["CALLIND", null, ["register:0:8"]]
+ 00836f80 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00836f80 ["INT_ADD", "register:40f0:8", ["const:836f80:8", "const:4:8"]]
+ 00836f80 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b12bce238dfd60febefb3106fa301dcb"></a>

### [`00838acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00838/00838acc.md) → [`00839a78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00839/00839a78.md) FUN_00839a78

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0082d538`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082d/0082d538.md) [`00ac96f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ac9/00ac96f8.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0082e4e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0082e/0082e4e4.md) [`00aca6ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aca/00aca6ec.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00838ae0 ["INT_ADD", "register:40f0:8", ["const:838ae0:8", "const:4:8"]]
- 00838ae0 ["CALL", null, ["callee:00aca6ec:8"]]
+ 00839a8c ["INT_ADD", "register:40f0:8", ["const:839a8c:8", "const:4:8"]]
+ 00839a8c ["CALL", null, ["callee:00aca6ec:8"]]
~~~


<a id="compare-c7b9ac2c20f0150f6fd2a7f6ea1dc2d9"></a>

### [`008395bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00839/008395bc.md) → [`0083a568`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083a/0083a568.md) FUN_0083a568

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md)
- 新版 呼出元 1件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) · 呼出先 2件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00676e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676e50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008395d4 ["INT_ADD", "register:40f0:8", ["const:8395d4:8", "const:4:8"]]
- 008395d4 ["CALL", null, ["callee:00676e50:8"]]
+ 0083a580 ["INT_ADD", "register:40f0:8", ["const:83a580:8", "const:4:8"]]
+ 0083a580 ["CALL", null, ["callee:00676e50:8"]]
~~~


<a id="compare-ce85109943d32978d37859add190f51b"></a>

### [`008395ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00839/008395ec.md) → [`0083a598`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083a/0083a598.md) FUN_0083a598

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md)
- 新版 呼出元 2件 [`0084f5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084f/0084f5a0.md) [`00a07d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07d9c.md) · 呼出先 2件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00676e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676e50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00839608 ["INT_ADD", "register:40f0:8", ["const:839608:8", "const:4:8"]]
- 00839608 ["CALL", null, ["callee:005c1b8c:8"]]
+ 0083a5b4 ["INT_ADD", "register:40f0:8", ["const:83a5b4:8", "const:4:8"]]
+ 0083a5b4 ["CALL", null, ["callee:005c1b8c:8"]]
- 00839624 ["INT_ADD", "register:40f0:8", ["const:839624:8", "const:4:8"]]
- 00839624 ["CALL", null, ["callee:00676e50:8"]]
+ 0083a5d0 ["INT_ADD", "register:40f0:8", ["const:83a5d0:8", "const:4:8"]]
+ 0083a5d0 ["CALL", null, ["callee:00676e50:8"]]
~~~


<a id="compare-13f1b1f26fe24de4c4a166053fb15964"></a>

### [`008467dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00846/008467dc.md) → [`00847788`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00847/00847788.md) FUN_00847788

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) · 呼出先 2件 [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) [`0046ef38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ef38.md)
- 新版 呼出元 1件 [`00840888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00840/00840888.md) · 呼出先 2件 [`0046eb24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eb24.md) [`0046f258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f258.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00846804 ["INT_ADD", "register:40f0:8", ["const:846804:8", "const:4:8"]]
- 00846804 ["CALL", null, ["callee:0046f258:8"]]
+ 008477b0 ["INT_ADD", "register:40f0:8", ["const:8477b0:8", "const:4:8"]]
+ 008477b0 ["CALL", null, ["callee:0046f258:8"]]
- 0084680c ["INT_ADD", "register:40f0:8", ["const:84680c:8", "const:4:8"]]
- 0084680c ["CALL", null, ["callee:0046f258:8"]]
+ 008477b8 ["INT_ADD", "register:40f0:8", ["const:8477b8:8", "const:4:8"]]
+ 008477b8 ["CALL", null, ["callee:0046f258:8"]]
- 00846814 ["INT_ADD", "register:40f0:8", ["const:846814:8", "const:4:8"]]
- 00846814 ["CALL", null, ["callee:0046eb24:8"]]
+ 008477c0 ["INT_ADD", "register:40f0:8", ["const:8477c0:8", "const:4:8"]]
+ 008477c0 ["CALL", null, ["callee:0046eb24:8"]]
~~~


<a id="compare-09c805a0770ab290e74b7bb349fe6d0b"></a>

### [`008473ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/008473ec.md) → [`00848398`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00848/00848398.md) FUN_00848398

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00847408 ["INT_ADD", "register:40f0:8", ["const:847408:8", "const:4:8"]]
- 00847408 ["CALL", null, ["callee:00c54d90:8"]]
+ 008483b4 ["INT_ADD", "register:40f0:8", ["const:8483b4:8", "const:4:8"]]
+ 008483b4 ["CALL", null, ["callee:00c54d90:8"]]
- 00847428 ["COPY", "register:0:8", ["register:4040:8"]]
- 00847428 ["INT_ADD", "register:40f0:8", ["const:847428:8", "const:4:8"]]
- 00847428 ["CALLIND", null, ["register:0:8"]]
+ 008483d4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008483d4 ["INT_ADD", "register:40f0:8", ["const:8483d4:8", "const:4:8"]]
+ 008483d4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-53c7d1bac60bafe5509e881abae8a9cd"></a>

### [`008475bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/008475bc.md) → [`00848568`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00848/00848568.md) FUN_00848568

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00847600 ["INT_ADD", "register:40f0:8", ["const:847600:8", "const:4:8"]]
- 00847600 ["CALL", null, ["callee:00c58f50:8"]]
+ 008485ac ["INT_ADD", "register:40f0:8", ["const:8485ac:8", "const:4:8"]]
+ 008485ac ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-eebd3ddf0ecdcd3079fdc8c9de98162f"></a>

### [`00847630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/00847630.md) → [`008485dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00848/008485dc.md) FUN_008485dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0084767c ["INT_ADD", "register:40f0:8", ["const:84767c:8", "const:4:8"]]
- 0084767c ["CALL", null, ["callee:005c1b8c:8"]]
+ 00848628 ["INT_ADD", "register:40f0:8", ["const:848628:8", "const:4:8"]]
+ 00848628 ["CALL", null, ["callee:005c1b8c:8"]]
- 00847684 ["INT_ADD", "register:40f0:8", ["const:847684:8", "const:4:8"]]
- 00847684 ["CALL", null, ["callee:00c58f50:8"]]
+ 00848630 ["INT_ADD", "register:40f0:8", ["const:848630:8", "const:4:8"]]
+ 00848630 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-f16f16a59c99f1c3c6790d8c1e8f75bb"></a>

### [`008476b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/008476b4.md) → [`00848660`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00848/00848660.md) FUN_00848660

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008476d0 ["INT_ADD", "register:40f0:8", ["const:8476d0:8", "const:4:8"]]
- 008476d0 ["CALL", null, ["callee:00c54d90:8"]]
+ 0084867c ["INT_ADD", "register:40f0:8", ["const:84867c:8", "const:4:8"]]
+ 0084867c ["CALL", null, ["callee:00c54d90:8"]]
- 008476f0 ["COPY", "register:0:8", ["register:4040:8"]]
- 008476f0 ["INT_ADD", "register:40f0:8", ["const:8476f0:8", "const:4:8"]]
- 008476f0 ["CALLIND", null, ["register:0:8"]]
+ 0084869c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0084869c ["INT_ADD", "register:40f0:8", ["const:84869c:8", "const:4:8"]]
+ 0084869c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d5641e43e1a1e1c6646368e395ea922b"></a>

### [`00847a58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/00847a58.md) → [`00848a04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00848/00848a04.md) FUN_00848a04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0046ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ec04.md) [`0046f33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f33c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00847a74 ["INT_ADD", "register:40f0:8", ["const:847a74:8", "const:4:8"]]
- 00847a74 ["CALL", null, ["callee:00c58f50:8"]]
+ 00848a20 ["INT_ADD", "register:40f0:8", ["const:848a20:8", "const:4:8"]]
+ 00848a20 ["CALL", null, ["callee:00c58f50:8"]]
- 00847a7c ["INT_ADD", "register:40f0:8", ["const:847a7c:8", "const:4:8"]]
- 00847a7c ["CALL", null, ["callee:0046ec04:8"]]
+ 00848a28 ["INT_ADD", "register:40f0:8", ["const:848a28:8", "const:4:8"]]
+ 00848a28 ["CALL", null, ["callee:0046ec04:8"]]
~~~


<a id="compare-cd14b636bead7a6e59e99523bd0de1b5"></a>

### [`00847f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/00847f30.md) → [`00848edc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00848/00848edc.md) FUN_00848edc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00672788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672788.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00672b38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00672/00672b38.md) [`00676e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676e50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00847f44 ["INT_ADD", "register:40f0:8", ["const:847f44:8", "const:4:8"]]
- 00847f44 ["CALL", null, ["callee:00672b38:8"]]
+ 00848ef0 ["INT_ADD", "register:40f0:8", ["const:848ef0:8", "const:4:8"]]
+ 00848ef0 ["CALL", null, ["callee:00672b38:8"]]
- 00847f50 ["INT_ADD", "register:40f0:8", ["const:847f50:8", "const:4:8"]]
- 00847f50 ["CALL", null, ["callee:00676e50:8"]]
+ 00848efc ["INT_ADD", "register:40f0:8", ["const:848efc:8", "const:4:8"]]
+ 00848efc ["CALL", null, ["callee:00676e50:8"]]
~~~


<a id="compare-2b614fda99dc88d5b7132cdef78b372c"></a>

### [`00847f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/00847f68.md) → [`00848f14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00848/00848f14.md) FUN_00848f14

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005c1c30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1c30.md) [`00c57f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005c1fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1fe0.md) [`00c58f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f00.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00847f80 ["INT_ADD", "register:40f0:8", ["const:847f80:8", "const:4:8"]]
- 00847f80 ["CALL", null, ["callee:005c1fe0:8"]]
+ 00848f2c ["INT_ADD", "register:40f0:8", ["const:848f2c:8", "const:4:8"]]
+ 00848f2c ["CALL", null, ["callee:005c1fe0:8"]]
~~~


<a id="compare-3bb2d6bd308724210dd3caa41c25bf80"></a>

### [`00847f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/00847f94.md) → [`00848f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00848/00848f40.md) FUN_00848f40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00847fcc ["INT_ADD", "register:40f0:8", ["const:847fcc:8", "const:4:8"]]
- 00847fcc ["CALL", null, ["callee:00c54d90:8"]]
+ 00848f78 ["INT_ADD", "register:40f0:8", ["const:848f78:8", "const:4:8"]]
+ 00848f78 ["CALL", null, ["callee:00c54d90:8"]]
- 00847fe0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00847fe0 ["INT_ADD", "register:40f0:8", ["const:847fe0:8", "const:4:8"]]
- 00847fe0 ["CALLIND", null, ["register:0:8"]]
+ 00848f8c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00848f8c ["INT_ADD", "register:40f0:8", ["const:848f8c:8", "const:4:8"]]
+ 00848f8c ["CALLIND", null, ["register:0:8"]]
- 00847fe8 ["INT_ADD", "register:40f0:8", ["const:847fe8:8", "const:4:8"]]
- 00847fe8 ["CALL", null, ["callee:00c58f20:8"]]
+ 00848f94 ["INT_ADD", "register:40f0:8", ["const:848f94:8", "const:4:8"]]
+ 00848f94 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-6dd67b41dbfed662e31b497cb2b67735"></a>

### [`00848000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848000.md) → [`00848fac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00848/00848fac.md) FUN_00848fac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848038 ["INT_ADD", "register:40f0:8", ["const:848038:8", "const:4:8"]]
- 00848038 ["CALL", null, ["callee:00c54d90:8"]]
+ 00848fe4 ["INT_ADD", "register:40f0:8", ["const:848fe4:8", "const:4:8"]]
+ 00848fe4 ["CALL", null, ["callee:00c54d90:8"]]
- 0084804c ["COPY", "register:0:8", ["register:4040:8"]]
- 0084804c ["INT_ADD", "register:40f0:8", ["const:84804c:8", "const:4:8"]]
- 0084804c ["CALLIND", null, ["register:0:8"]]
+ 00848ff8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00848ff8 ["INT_ADD", "register:40f0:8", ["const:848ff8:8", "const:4:8"]]
+ 00848ff8 ["CALLIND", null, ["register:0:8"]]
- 00848054 ["INT_ADD", "register:40f0:8", ["const:848054:8", "const:4:8"]]
- 00848054 ["CALL", null, ["callee:00c58f20:8"]]
+ 00849000 ["INT_ADD", "register:40f0:8", ["const:849000:8", "const:4:8"]]
+ 00849000 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-8b831dbccc15bb83f543a8602a783bf0"></a>

### [`00848378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848378.md) → [`00849324`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/00849324.md) FUN_00849324

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0046ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ec04.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0084838c ["INT_ADD", "register:40f0:8", ["const:84838c:8", "const:4:8"]]
- 0084838c ["CALL", null, ["callee:0046ec04:8"]]
+ 00849338 ["INT_ADD", "register:40f0:8", ["const:849338:8", "const:4:8"]]
+ 00849338 ["CALL", null, ["callee:0046ec04:8"]]
- 00848394 ["INT_ADD", "register:40f0:8", ["const:848394:8", "const:4:8"]]
- 00848394 ["CALL", null, ["callee:0046ec04:8"]]
+ 00849340 ["INT_ADD", "register:40f0:8", ["const:849340:8", "const:4:8"]]
+ 00849340 ["CALL", null, ["callee:0046ec04:8"]]
- 0084839c ["INT_ADD", "register:40f0:8", ["const:84839c:8", "const:4:8"]]
- 0084839c ["CALL", null, ["callee:0046ec04:8"]]
+ 00849348 ["INT_ADD", "register:40f0:8", ["const:849348:8", "const:4:8"]]
+ 00849348 ["CALL", null, ["callee:0046ec04:8"]]
~~~


<a id="compare-78430bdee919ab11b8635d7c86c50004"></a>

### [`008483b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/008483b0.md) → [`0084935c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/0084935c.md) FUN_0084935c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0046f33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f33c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008483c4 ["INT_ADD", "register:40f0:8", ["const:8483c4:8", "const:4:8"]]
- 008483c4 ["CALL", null, ["callee:0046f33c:8"]]
+ 00849370 ["INT_ADD", "register:40f0:8", ["const:849370:8", "const:4:8"]]
+ 00849370 ["CALL", null, ["callee:0046f33c:8"]]
- 008483cc ["INT_ADD", "register:40f0:8", ["const:8483cc:8", "const:4:8"]]
- 008483cc ["CALL", null, ["callee:0046f33c:8"]]
+ 00849378 ["INT_ADD", "register:40f0:8", ["const:849378:8", "const:4:8"]]
+ 00849378 ["CALL", null, ["callee:0046f33c:8"]]
- 008483d4 ["INT_ADD", "register:40f0:8", ["const:8483d4:8", "const:4:8"]]
- 008483d4 ["CALL", null, ["callee:0046f33c:8"]]
+ 00849380 ["INT_ADD", "register:40f0:8", ["const:849380:8", "const:4:8"]]
+ 00849380 ["CALL", null, ["callee:0046f33c:8"]]
~~~


<a id="compare-07312002c664e6a3344d3edf0781bf70"></a>

### [`008483e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/008483e8.md) → [`00849394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/00849394.md) FUN_00849394

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00810b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00810/00810b40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00811aa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00811/00811aa4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848400 ["INT_ADD", "register:40f0:8", ["const:848400:8", "const:4:8"]]
- 00848400 ["CALL", null, ["callee:00811aa4:8"]]
+ 008493ac ["INT_ADD", "register:40f0:8", ["const:8493ac:8", "const:4:8"]]
+ 008493ac ["CALL", null, ["callee:00811aa4:8"]]
- 00848410 ["INT_ADD", "register:40f0:8", ["const:848410:8", "const:4:8"]]
- 00848410 ["CALL", null, ["callee:00c58f50:8"]]
+ 008493bc ["INT_ADD", "register:40f0:8", ["const:8493bc:8", "const:4:8"]]
+ 008493bc ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-76f16f5d2959a1dcea444ad98f990612"></a>

### [`008484c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/008484c8.md) → [`00849474`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/00849474.md) FUN_00849474

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848510 ["INT_ADD", "register:40f0:8", ["const:848510:8", "const:4:8"]]
- 00848510 ["CALL", null, ["callee:00c58f50:8"]]
+ 008494bc ["INT_ADD", "register:40f0:8", ["const:8494bc:8", "const:4:8"]]
+ 008494bc ["CALL", null, ["callee:00c58f50:8"]]
- 00848520 ["INT_ADD", "register:40f0:8", ["const:848520:8", "const:4:8"]]
- 00848520 ["CALL", null, ["callee:00c58f50:8"]]
+ 008494cc ["INT_ADD", "register:40f0:8", ["const:8494cc:8", "const:4:8"]]
+ 008494cc ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-7c16a03849a880c2ac3623d8c69c8d73"></a>

### [`00848590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848590.md) → [`0084953c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/0084953c.md) FUN_0084953c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`009a4eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a4/009a4eac.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`009a5e58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a5/009a5e58.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008485ac ["INT_ADD", "register:40f0:8", ["const:8485ac:8", "const:4:8"]]
- 008485ac ["CALL", null, ["callee:009a5e58:8"]]
+ 00849558 ["INT_ADD", "register:40f0:8", ["const:849558:8", "const:4:8"]]
+ 00849558 ["CALL", null, ["callee:009a5e58:8"]]
~~~


<a id="compare-b1fe7470d340a2a34631b00ceef7f70e"></a>

### [`00848644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848644.md) → [`008495f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/008495f0.md) FUN_008495f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005b13e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b13e8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005b1798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1798.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848660 ["INT_ADD", "register:40f0:8", ["const:848660:8", "const:4:8"]]
- 00848660 ["CALL", null, ["callee:005b1798:8"]]
+ 0084960c ["INT_ADD", "register:40f0:8", ["const:84960c:8", "const:4:8"]]
+ 0084960c ["CALL", null, ["callee:005b1798:8"]]
~~~


<a id="compare-9a8973f20aa5a80e03a2ad7e28f31d7c"></a>

### [`00848680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848680.md) → [`0084962c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/0084962c.md) FUN_0084962c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`006629dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/006629dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00662d8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00662/00662d8c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008486a0 ["INT_ADD", "register:40f0:8", ["const:8486a0:8", "const:4:8"]]
- 008486a0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0084964c ["INT_ADD", "register:40f0:8", ["const:84964c:8", "const:4:8"]]
+ 0084964c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-9ac5088e9303c2676f111ab65e1fa9cc"></a>

### [`008486b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/008486b8.md) → [`00849664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/00849664.md) FUN_00849664

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0087e728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087e728.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0087f6d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087f6d4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008486d4 ["INT_ADD", "register:40f0:8", ["const:8486d4:8", "const:4:8"]]
- 008486d4 ["CALL", null, ["callee:0087f6d4:8"]]
+ 00849680 ["INT_ADD", "register:40f0:8", ["const:849680:8", "const:4:8"]]
+ 00849680 ["CALL", null, ["callee:0087f6d4:8"]]
~~~


<a id="compare-530fbf906fe185334fe3181aece6d450"></a>

### [`008487e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/008487e4.md) → [`00849790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/00849790.md) FUN_00849790

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`009b88c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b88c0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`009b986c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b9/009b986c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848800 ["INT_ADD", "register:40f0:8", ["const:848800:8", "const:4:8"]]
- 00848800 ["CALL", null, ["callee:009b986c:8"]]
+ 008497ac ["INT_ADD", "register:40f0:8", ["const:8497ac:8", "const:4:8"]]
+ 008497ac ["CALL", null, ["callee:009b986c:8"]]
~~~


<a id="compare-6edc4456081e64eeb8d11ebf85253206"></a>

### [`00848820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848820.md) → [`008497cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/008497cc.md) FUN_008497cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00869f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869f4c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0086aef8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086aef8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848840 ["INT_ADD", "register:40f0:8", ["const:848840:8", "const:4:8"]]
- 00848840 ["CALL", null, ["callee:0086aef8:8"]]
+ 008497ec ["INT_ADD", "register:40f0:8", ["const:8497ec:8", "const:4:8"]]
+ 008497ec ["CALL", null, ["callee:0086aef8:8"]]
- 00848848 ["INT_ADD", "register:40f0:8", ["const:848848:8", "const:4:8"]]
- 00848848 ["CALL", null, ["callee:00c58f50:8"]]
+ 008497f4 ["INT_ADD", "register:40f0:8", ["const:8497f4:8", "const:4:8"]]
+ 008497f4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-d80bb8ad76ac92474151d969c3214f2b"></a>

### [`00848bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848bb4.md) → [`00849b60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/00849b60.md) FUN_00849b60

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`005c1820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1820.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`005c1bd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1bd0.md) [`00676e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676e50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848bcc ["INT_ADD", "register:40f0:8", ["const:848bcc:8", "const:4:8"]]
- 00848bcc ["CALL", null, ["callee:005c1bd0:8"]]
+ 00849b78 ["INT_ADD", "register:40f0:8", ["const:849b78:8", "const:4:8"]]
+ 00849b78 ["CALL", null, ["callee:005c1bd0:8"]]
- 00848bd8 ["INT_ADD", "register:40f0:8", ["const:848bd8:8", "const:4:8"]]
- 00848bd8 ["CALL", null, ["callee:00676e50:8"]]
+ 00849b84 ["INT_ADD", "register:40f0:8", ["const:849b84:8", "const:4:8"]]
+ 00849b84 ["CALL", null, ["callee:00676e50:8"]]
~~~


<a id="compare-9350118f98f12da142b000fa7dfeb636"></a>

### [`00848bf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848bf0.md) → [`00849b9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/00849b9c.md) FUN_00849b9c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`0086a200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a200.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`0086b1ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b1ac.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848c08 ["INT_ADD", "register:40f0:8", ["const:848c08:8", "const:4:8"]]
- 00848c08 ["CALL", null, ["callee:005c1b8c:8"]]
+ 00849bb4 ["INT_ADD", "register:40f0:8", ["const:849bb4:8", "const:4:8"]]
+ 00849bb4 ["CALL", null, ["callee:005c1b8c:8"]]
- 00848c14 ["INT_ADD", "register:40f0:8", ["const:848c14:8", "const:4:8"]]
- 00848c14 ["CALL", null, ["callee:005c1b8c:8"]]
+ 00849bc0 ["INT_ADD", "register:40f0:8", ["const:849bc0:8", "const:4:8"]]
+ 00849bc0 ["CALL", null, ["callee:005c1b8c:8"]]
- 00848c24 ["INT_ADD", "register:40f0:8", ["const:848c24:8", "const:4:8"]]
- 00848c24 ["CALL", null, ["callee:00c58f50:8"]]
+ 00849bd0 ["INT_ADD", "register:40f0:8", ["const:849bd0:8", "const:4:8"]]
+ 00849bd0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-ec95fd85917a2bd718a9522f90aab36a"></a>

### [`00848c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848c3c.md) → [`00849be8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/00849be8.md) FUN_00849be8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`005c1820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1820.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`005c1bd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1bd0.md) [`00676e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676e50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848c54 ["INT_ADD", "register:40f0:8", ["const:848c54:8", "const:4:8"]]
- 00848c54 ["CALL", null, ["callee:005c1bd0:8"]]
+ 00849c00 ["INT_ADD", "register:40f0:8", ["const:849c00:8", "const:4:8"]]
+ 00849c00 ["CALL", null, ["callee:005c1bd0:8"]]
- 00848c60 ["INT_ADD", "register:40f0:8", ["const:848c60:8", "const:4:8"]]
- 00848c60 ["CALL", null, ["callee:00676e50:8"]]
+ 00849c0c ["INT_ADD", "register:40f0:8", ["const:849c0c:8", "const:4:8"]]
+ 00849c0c ["CALL", null, ["callee:00676e50:8"]]
~~~


<a id="compare-261ab9abd770ddfabba20d1256242b82"></a>

### [`00848d54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848d54.md) → [`00849d00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/00849d00.md) FUN_00849d00

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`006a2bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2bd0.md) [`0086a2d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a2d0.md) [`00c57f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f30.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 4件 [`006a2f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a2/006a2f80.md) [`0086b27c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b27c.md) [`00c58f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f00.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848d74 ["INT_ADD", "register:40f0:8", ["const:848d74:8", "const:4:8"]]
- 00848d74 ["CALL", null, ["callee:006a2f80:8"]]
+ 00849d20 ["INT_ADD", "register:40f0:8", ["const:849d20:8", "const:4:8"]]
+ 00849d20 ["CALL", null, ["callee:006a2f80:8"]]
- 00848d7c ["INT_ADD", "register:40f0:8", ["const:848d7c:8", "const:4:8"]]
- 00848d7c ["CALL", null, ["callee:00c58f50:8"]]
+ 00849d28 ["INT_ADD", "register:40f0:8", ["const:849d28:8", "const:4:8"]]
+ 00849d28 ["CALL", null, ["callee:00c58f50:8"]]
- 00848d84 ["INT_ADD", "register:40f0:8", ["const:848d84:8", "const:4:8"]]
- 00848d84 ["CALL", null, ["callee:00c58f00:8"]]
+ 00849d30 ["INT_ADD", "register:40f0:8", ["const:849d30:8", "const:4:8"]]
+ 00849d30 ["CALL", null, ["callee:00c58f00:8"]]
~~~


<a id="compare-01b4af3821c63a1859a1bb99bfd4ea4d"></a>

### [`00848f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848f80.md) → [`00849f2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/00849f2c.md) FUN_00849f2c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0078dd04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078dd04.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0078e0e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e0e0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848f9c ["INT_ADD", "register:40f0:8", ["const:848f9c:8", "const:4:8"]]
- 00848f9c ["CALL", null, ["callee:00c58f50:8"]]
+ 00849f48 ["INT_ADD", "register:40f0:8", ["const:849f48:8", "const:4:8"]]
+ 00849f48 ["CALL", null, ["callee:00c58f50:8"]]
- 00848fac ["INT_ADD", "register:40f0:8", ["const:848fac:8", "const:4:8"]]
- 00848fac ["CALL", null, ["callee:00c58f50:8"]]
+ 00849f58 ["INT_ADD", "register:40f0:8", ["const:849f58:8", "const:4:8"]]
+ 00849f58 ["CALL", null, ["callee:00c58f50:8"]]
- 00848fbc ["INT_ADD", "register:40f0:8", ["const:848fbc:8", "const:4:8"]]
- 00848fbc ["CALL", null, ["callee:00c58f50:8"]]
+ 00849f68 ["INT_ADD", "register:40f0:8", ["const:849f68:8", "const:4:8"]]
+ 00849f68 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-5ceb5821e25aeb148a36a7ad6be179c1"></a>

### [`008491fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/008491fc.md) → [`0084a1a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084a1a8.md) FUN_0084a1a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`0080b37c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080b/0080b37c.md) [`0080b3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080b/0080b3c0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`0080c2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080c/0080c2e0.md) [`0080c324`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080c/0080c324.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0084921c",
      "incomplete_value": true,
      "site": "00849220",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:18:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00849218",
      "incomplete_value": true,
      "site": "00849220",
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
                "register:4098:8"
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
    "ordinal": 1,
    "slot": 2
  }
]
~~~


~~~diff
- 00849220 ["INT_ADD", "register:40f0:8", ["const:849220:8", "const:4:8"]]
- 00849220 ["CALL", null, ["callee:0080c2e0:8"]]
+ 0084a1cc ["INT_ADD", "register:40f0:8", ["const:84a1cc:8", "const:4:8"]]
+ 0084a1cc ["CALL", null, ["callee:0080c2e0:8"]]
- 00849214 ["INT_ADD", "register:40f0:8", ["const:849214:8", "const:4:8"]]
- 00849214 ["CALL", null, ["callee:005c1b8c:8"]]
+ 0084a1c0 ["INT_ADD", "register:40f0:8", ["const:84a1c0:8", "const:4:8"]]
+ 0084a1c0 ["CALL", null, ["callee:005c1b8c:8"]]
~~~


<a id="compare-424e0b7ed6cc8e9f38eed8aa91cd8efe"></a>

### [`00849238`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849238.md) → [`0084a1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084a1e4.md) FUN_0084a1e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`005c1c30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1c30.md) [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md) [`00676af8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676af8.md)
- 新版 呼出元 0件  · 呼出先 3件 [`005c1fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1fe0.md) [`005c426c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c426c.md) [`00676ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676ea8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00849250 ["INT_ADD", "register:40f0:8", ["const:849250:8", "const:4:8"]]
- 00849250 ["CALL", null, ["callee:005c1fe0:8"]]
+ 0084a1fc ["INT_ADD", "register:40f0:8", ["const:84a1fc:8", "const:4:8"]]
+ 0084a1fc ["CALL", null, ["callee:005c1fe0:8"]]
- 0084925c ["INT_ADD", "register:40f0:8", ["const:84925c:8", "const:4:8"]]
- 0084925c ["CALL", null, ["callee:005c426c:8"]]
+ 0084a208 ["INT_ADD", "register:40f0:8", ["const:84a208:8", "const:4:8"]]
+ 0084a208 ["CALL", null, ["callee:005c426c:8"]]
~~~


<a id="compare-b727bc0012adef7255e955ba731b16ac"></a>

### [`00849274`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849274.md) → [`0084a220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084a220.md) FUN_0084a220

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`006776ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00677/006776ac.md)
- 新版 呼出元 0件  · 呼出先 3件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00676e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676e50.md) [`00677a5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00677/00677a5c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0084928c ["INT_ADD", "register:40f0:8", ["const:84928c:8", "const:4:8"]]
- 0084928c ["CALL", null, ["callee:00676e50:8"]]
+ 0084a238 ["INT_ADD", "register:40f0:8", ["const:84a238:8", "const:4:8"]]
+ 0084a238 ["CALL", null, ["callee:00676e50:8"]]
- 00849298 ["INT_ADD", "register:40f0:8", ["const:849298:8", "const:4:8"]]
- 00849298 ["CALL", null, ["callee:005c1b8c:8"]]
+ 0084a244 ["INT_ADD", "register:40f0:8", ["const:84a244:8", "const:4:8"]]
+ 0084a244 ["CALL", null, ["callee:005c1b8c:8"]]
- 008492a4 ["INT_ADD", "register:40f0:8", ["const:8492a4:8", "const:4:8"]]
- 008492a4 ["CALL", null, ["callee:005c1b8c:8"]]
+ 0084a250 ["INT_ADD", "register:40f0:8", ["const:84a250:8", "const:4:8"]]
+ 0084a250 ["CALL", null, ["callee:005c1b8c:8"]]
~~~


<a id="compare-c1cdcd8b94b2d7b8a84a4d3dd9d8d132"></a>

### [`008497d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/008497d0.md) → [`0084a77c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084a77c.md) FUN_0084a77c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`0073a35c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073a35c.md) [`0086a5fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a5fc.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0073a70c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073a/0073a70c.md) [`0086b5a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b5a8.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008497f8 ["INT_ADD", "register:40f0:8", ["const:8497f8:8", "const:4:8"]]
- 008497f8 ["CALL", null, ["callee:0073a70c:8"]]
+ 0084a7a4 ["INT_ADD", "register:40f0:8", ["const:84a7a4:8", "const:4:8"]]
+ 0084a7a4 ["CALL", null, ["callee:0073a70c:8"]]
- 00849804 ["INT_ADD", "register:40f0:8", ["const:849804:8", "const:4:8"]]
- 00849804 ["CALL", null, ["callee:0086b5a8:8"]]
+ 0084a7b0 ["INT_ADD", "register:40f0:8", ["const:84a7b0:8", "const:4:8"]]
+ 0084a7b0 ["CALL", null, ["callee:0086b5a8:8"]]
- 00849828 ["INT_ADD", "register:40f0:8", ["const:849828:8", "const:4:8"]]
- 00849828 ["CALL", null, ["callee:00c58f80:8"]]
+ 0084a7d4 ["INT_ADD", "register:40f0:8", ["const:84a7d4:8", "const:4:8"]]
+ 0084a7d4 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-46fec22eb6a721a35e910809bdd16c64"></a>

### [`0084982c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/0084982c.md) → [`0084a7d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084a7d8.md) FUN_0084a7d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00849848 ["INT_ADD", "register:40f0:8", ["const:849848:8", "const:4:8"]]
- 00849848 ["CALL", null, ["callee:00c58f50:8"]]
+ 0084a7f4 ["INT_ADD", "register:40f0:8", ["const:84a7f4:8", "const:4:8"]]
+ 0084a7f4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-0c2b05e7724fae3499e5553e38e67be5"></a>

### [`00849870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849870.md) → [`0084a81c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084a81c.md) FUN_0084a81c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md) [`0086bbf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bbf0.md) [`0086be10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086be10.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 5件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`005c426c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c426c.md) [`0086cb9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cb9c.md) [`0086cdbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cdbc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0084a844",
      "incomplete_value": true,
      "site": "0084a848",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:38:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0084a840",
      "incomplete_value": true,
      "site": "0084a848",
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
                "register:4098:8"
              ],
              [
                "leaf",
                "const:40:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008498a0",
      "incomplete_value": true,
      "site": "008498a8",
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
                "register:4098:8"
              ],
              [
                "leaf",
                "const:28:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 2
  }
]
~~~


~~~diff
- 0084989c ["INT_ADD", "register:40f0:8", ["const:84989c:8", "const:4:8"]]
- 0084989c ["CALL", null, ["callee:0086cb9c:8"]]
+ 0084a848 ["INT_ADD", "register:40f0:8", ["const:84a848:8", "const:4:8"]]
+ 0084a848 ["CALL", null, ["callee:0086cb9c:8"]]
- 008498a8 ["INT_ADD", "register:40f0:8", ["const:8498a8:8", "const:4:8"]]
- 008498a8 ["CALL", null, ["callee:005c426c:8"]]
+ 0084a854 ["INT_ADD", "register:40f0:8", ["const:84a854:8", "const:4:8"]]
+ 0084a854 ["CALL", null, ["callee:005c426c:8"]]
- 00849890 ["INT_ADD", "register:40f0:8", ["const:849890:8", "const:4:8"]]
- 00849890 ["CALL", null, ["callee:005c1b8c:8"]]
+ 0084a83c ["INT_ADD", "register:40f0:8", ["const:84a83c:8", "const:4:8"]]
+ 0084a83c ["CALL", null, ["callee:005c1b8c:8"]]
~~~


<a id="compare-1ccc4f9278d1d343dda663f4ec5cf782"></a>

### [`00849920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849920.md) → [`0084a8cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084a8cc.md) FUN_0084a8cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`006a6130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6130.md) [`006a6180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6180.md)
- 新版 呼出元 0件  · 呼出先 2件 [`006a64e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a6/006a64e0.md) [`006a6530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a6/006a6530.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00849938 ["INT_ADD", "register:40f0:8", ["const:849938:8", "const:4:8"]]
- 00849938 ["CALL", null, ["callee:006a64e0:8"]]
+ 0084a8e4 ["INT_ADD", "register:40f0:8", ["const:84a8e4:8", "const:4:8"]]
+ 0084a8e4 ["CALL", null, ["callee:006a64e0:8"]]
~~~


<a id="compare-02ca28a0955a83b6ffe11426f29fe9a6"></a>

### [`00849a38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849a38.md) → [`0084a9e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084a9e4.md) FUN_0084a9e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`005c426c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c426c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00849a50 ["INT_ADD", "register:40f0:8", ["const:849a50:8", "const:4:8"]]
- 00849a50 ["CALL", null, ["callee:005c426c:8"]]
+ 0084a9fc ["INT_ADD", "register:40f0:8", ["const:84a9fc:8", "const:4:8"]]
+ 0084a9fc ["CALL", null, ["callee:005c426c:8"]]
~~~


<a id="compare-24a27a788f68e0b78ff3c754b1f2bfec"></a>

### [`00849a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849a68.md) → [`0084aa14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084aa14.md) FUN_0084aa14

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005c426c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c426c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00849a88 ["INT_ADD", "register:40f0:8", ["const:849a88:8", "const:4:8"]]
- 00849a88 ["CALL", null, ["callee:00c58f50:8"]]
+ 0084aa34 ["INT_ADD", "register:40f0:8", ["const:84aa34:8", "const:4:8"]]
+ 0084aa34 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-113fe3349e74a45b4cf93a7782c3e87c"></a>

### [`00849aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849aa0.md) → [`0084aa4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084aa4c.md) FUN_0084aa4c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`005c1820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1820.md) [`0086a7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a7b8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 4件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`005c1bd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1bd0.md) [`0086b764`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b764.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00849ab8 ["INT_ADD", "register:40f0:8", ["const:849ab8:8", "const:4:8"]]
- 00849ab8 ["CALL", null, ["callee:005c1b8c:8"]]
+ 0084aa64 ["INT_ADD", "register:40f0:8", ["const:84aa64:8", "const:4:8"]]
+ 0084aa64 ["CALL", null, ["callee:005c1b8c:8"]]
- 00849ac8 ["INT_ADD", "register:40f0:8", ["const:849ac8:8", "const:4:8"]]
- 00849ac8 ["CALL", null, ["callee:00c58f50:8"]]
+ 0084aa74 ["INT_ADD", "register:40f0:8", ["const:84aa74:8", "const:4:8"]]
+ 0084aa74 ["CALL", null, ["callee:00c58f50:8"]]
- 00849ad8 ["INT_ADD", "register:40f0:8", ["const:849ad8:8", "const:4:8"]]
- 00849ad8 ["CALL", null, ["callee:00c58f50:8"]]
+ 0084aa84 ["INT_ADD", "register:40f0:8", ["const:84aa84:8", "const:4:8"]]
+ 0084aa84 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-8ef53c1fa272b5e99180d9bfe4f7a550"></a>

### [`00859ae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859ae8.md) → [`0085aa94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085aa94.md) FUN_0085aa94

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 3件 [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 3件 [`00765314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00765/00765314.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00859b08 ["INT_ADD", "register:40f0:8", ["const:859b08:8", "const:4:8"]]
- 00859b08 ["CALL", null, ["callee:00765314:8"]]
+ 0085aab4 ["INT_ADD", "register:40f0:8", ["const:85aab4:8", "const:4:8"]]
+ 0085aab4 ["CALL", null, ["callee:00765314:8"]]
- 00859b20 ["INT_ADD", "register:40f0:8", ["const:859b20:8", "const:4:8"]]
- 00859b20 ["CALL", null, ["callee:00c58f50:8"]]
+ 0085aacc ["INT_ADD", "register:40f0:8", ["const:85aacc:8", "const:4:8"]]
+ 0085aacc ["CALL", null, ["callee:00c58f50:8"]]
- 00859b4c ["INT_ADD", "register:40f0:8", ["const:859b4c:8", "const:4:8"]]
- 00859b4c ["CALL", null, ["callee:00c58f80:8"]]
+ 0085aaf8 ["INT_ADD", "register:40f0:8", ["const:85aaf8:8", "const:4:8"]]
+ 0085aaf8 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-d1d74455dfb049ebd34ebe57c0f50418"></a>

### [`0085adf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085a/0085adf8.md) → [`0085bda4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085b/0085bda4.md) FUN_0085bda4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`006bf8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bf/006bf8e4.md) · 呼出先 2件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ac8.md)
- 新版 呼出元 1件 [`006bfc94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006bf/006bfc94.md) · 呼出先 2件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467de8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467de8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0085ae14 ["INT_ADD", "register:40f0:8", ["const:85ae14:8", "const:4:8"]]
- 0085ae14 ["CALL", null, ["callee:00467bc0:8"]]
+ 0085bdc0 ["INT_ADD", "register:40f0:8", ["const:85bdc0:8", "const:4:8"]]
+ 0085bdc0 ["CALL", null, ["callee:00467bc0:8"]]
~~~


<a id="compare-05e83ccd88ee5ceb7c3f237f49a7ed0d"></a>

### [`008688dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/008688dc.md) → [`00869888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/00869888.md) FUN_00869888

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`008670c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/008670c0.md) [`008688dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/008688dc.md) · 呼出先 2件 [`008688dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/008688dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`0086806c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00868/0086806c.md) [`00869888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/00869888.md) · 呼出先 2件 [`00869888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/00869888.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008688fc ["INT_ADD", "register:40f0:8", ["const:8688fc:8", "const:4:8"]]
- 008688fc ["CALL", null, ["local:b0:8"]]
+ 008698a8 ["INT_ADD", "register:40f0:8", ["const:8698a8:8", "const:4:8"]]
+ 008698a8 ["CALL", null, ["local:b0:8"]]
- 00868908 ["INT_ADD", "register:40f0:8", ["const:868908:8", "const:4:8"]]
- 00868908 ["CALL", null, ["local:b0:8"]]
+ 008698b4 ["INT_ADD", "register:40f0:8", ["const:8698b4:8", "const:4:8"]]
+ 008698b4 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-6a9592d655b332ffbf2064e9d8e10db0"></a>

### [`00869190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869190.md) → [`0086a13c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a13c.md) FUN_0086a13c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`00869140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869140.md) [`00869190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869190.md) [`00a64fa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a64/00a64fa8.md) [`00a67cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a67/00a67cf0.md) [`00a68084`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a68/00a68084.md) · 呼出先 2件 [`00869190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869190.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 5件 [`0086a0ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a0ec.md) [`0086a13c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a13c.md) [`00a65f9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a65/00a65f9c.md) [`00a68ce4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a68/00a68ce4.md) [`00a69078`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a69/00a69078.md) · 呼出先 2件 [`0086a13c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a13c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008691ac ["INT_ADD", "register:40f0:8", ["const:8691ac:8", "const:4:8"]]
- 008691ac ["CALL", null, ["local:b0:8"]]
+ 0086a158 ["INT_ADD", "register:40f0:8", ["const:86a158:8", "const:4:8"]]
+ 0086a158 ["CALL", null, ["local:b0:8"]]
- 008691b8 ["INT_ADD", "register:40f0:8", ["const:8691b8:8", "const:4:8"]]
- 008691b8 ["CALL", null, ["local:b0:8"]]
+ 0086a164 ["INT_ADD", "register:40f0:8", ["const:86a164:8", "const:4:8"]]
+ 0086a164 ["CALL", null, ["local:b0:8"]]
- 008691c8 ["INT_ADD", "register:40f0:8", ["const:8691c8:8", "const:4:8"]]
- 008691c8 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086a174 ["INT_ADD", "register:40f0:8", ["const:86a174:8", "const:4:8"]]
+ 0086a174 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-f6207056e1e6e5f09aaae072048dc86e"></a>

### [`00869478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869478.md) → [`0086a424`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a424.md) FUN_0086a424

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00847508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/00847508.md) [`00869478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869478.md) · 呼出先 2件 [`00869478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869478.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`008484b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00848/008484b4.md) [`0086a424`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a424.md) · 呼出先 2件 [`0086a424`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a424.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00869498 ["INT_ADD", "register:40f0:8", ["const:869498:8", "const:4:8"]]
- 00869498 ["CALL", null, ["local:b0:8"]]
+ 0086a444 ["INT_ADD", "register:40f0:8", ["const:86a444:8", "const:4:8"]]
+ 0086a444 ["CALL", null, ["local:b0:8"]]
- 008694a4 ["INT_ADD", "register:40f0:8", ["const:8694a4:8", "const:4:8"]]
- 008694a4 ["CALL", null, ["local:b0:8"]]
+ 0086a450 ["INT_ADD", "register:40f0:8", ["const:86a450:8", "const:4:8"]]
+ 0086a450 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-ce1639eb25cfcc34af34ec1e30e5f9db"></a>

### [`008694bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008694bc.md) → [`0086a468`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a468.md) FUN_0086a468

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`008694bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008694bc.md) · 呼出先 2件 [`008694bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008694bc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0086a468`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a468.md) · 呼出先 2件 [`0086a468`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a468.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008694d8 ["INT_ADD", "register:40f0:8", ["const:8694d8:8", "const:4:8"]]
- 008694d8 ["CALL", null, ["local:b0:8"]]
+ 0086a484 ["INT_ADD", "register:40f0:8", ["const:86a484:8", "const:4:8"]]
+ 0086a484 ["CALL", null, ["local:b0:8"]]
- 008694e4 ["INT_ADD", "register:40f0:8", ["const:8694e4:8", "const:4:8"]]
- 008694e4 ["CALL", null, ["local:b0:8"]]
+ 0086a490 ["INT_ADD", "register:40f0:8", ["const:86a490:8", "const:4:8"]]
+ 0086a490 ["CALL", null, ["local:b0:8"]]
- 008694f4 ["INT_ADD", "register:40f0:8", ["const:8694f4:8", "const:4:8"]]
- 008694f4 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086a4a0 ["INT_ADD", "register:40f0:8", ["const:86a4a0:8", "const:4:8"]]
+ 0086a4a0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-be7a941987ce2ff4733d49097697ec94"></a>

### [`0086950c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/0086950c.md) → [`0086a4b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a4b8.md) FUN_0086a4b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 6件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00847704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/00847704.md) [`0086950c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/0086950c.md) [`00aafaa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aaf/00aafaa4.md) [`00ab0a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ab0/00ab0a64.md) · 呼出先 2件 [`0086950c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/0086950c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 6件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`008486b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00848/008486b0.md) [`0086a4b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a4b8.md) [`00ab0a98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ab0/00ab0a98.md) [`00ab1a58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ab1/00ab1a58.md) · 呼出先 2件 [`0086a4b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a4b8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00869528 ["INT_ADD", "register:40f0:8", ["const:869528:8", "const:4:8"]]
- 00869528 ["CALL", null, ["local:b0:8"]]
+ 0086a4d4 ["INT_ADD", "register:40f0:8", ["const:86a4d4:8", "const:4:8"]]
+ 0086a4d4 ["CALL", null, ["local:b0:8"]]
- 00869534 ["INT_ADD", "register:40f0:8", ["const:869534:8", "const:4:8"]]
- 00869534 ["CALL", null, ["local:b0:8"]]
+ 0086a4e0 ["INT_ADD", "register:40f0:8", ["const:86a4e0:8", "const:4:8"]]
+ 0086a4e0 ["CALL", null, ["local:b0:8"]]
- 00869544 ["INT_ADD", "register:40f0:8", ["const:869544:8", "const:4:8"]]
- 00869544 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086a4f0 ["INT_ADD", "register:40f0:8", ["const:86a4f0:8", "const:4:8"]]
+ 0086a4f0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-eaaf6f3040c218f145c9838c8f3c602a"></a>

### [`00869e18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869e18.md) → [`0086adc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086adc4.md) FUN_0086adc4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00869e18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869e18.md) · 呼出先 3件 [`00869e18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869e18.md) [`00869e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869e68.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0086adc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086adc4.md) · 呼出先 3件 [`0086adc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086adc4.md) [`0086ae14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086ae14.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00869e38 ["INT_ADD", "register:40f0:8", ["const:869e38:8", "const:4:8"]]
- 00869e38 ["CALL", null, ["local:b0:8"]]
+ 0086ade4 ["INT_ADD", "register:40f0:8", ["const:86ade4:8", "const:4:8"]]
+ 0086ade4 ["CALL", null, ["local:b0:8"]]
- 00869e44 ["INT_ADD", "register:40f0:8", ["const:869e44:8", "const:4:8"]]
- 00869e44 ["CALL", null, ["local:b0:8"]]
+ 0086adf0 ["INT_ADD", "register:40f0:8", ["const:86adf0:8", "const:4:8"]]
+ 0086adf0 ["CALL", null, ["local:b0:8"]]
- 00869e50 ["INT_ADD", "register:40f0:8", ["const:869e50:8", "const:4:8"]]
- 00869e50 ["CALL", null, ["callee:0086ae14:8"]]
+ 0086adfc ["INT_ADD", "register:40f0:8", ["const:86adfc:8", "const:4:8"]]
+ 0086adfc ["CALL", null, ["callee:0086ae14:8"]]
~~~


<a id="compare-ffd9aae0f4517adef2e7bc43398c3f9d"></a>

### [`00869efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869efc.md) → [`0086aea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086aea8.md) FUN_0086aea8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00869efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869efc.md) [`00a62fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a62/00a62fbc.md) · 呼出先 3件 [`005c1820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1820.md) [`00869efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869efc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0086aea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086aea8.md) [`00a63fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a63/00a63fb0.md) · 呼出先 3件 [`005c1bd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1bd0.md) [`0086aea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086aea8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00869f1c ["INT_ADD", "register:40f0:8", ["const:869f1c:8", "const:4:8"]]
- 00869f1c ["CALL", null, ["local:b0:8"]]
+ 0086aec8 ["INT_ADD", "register:40f0:8", ["const:86aec8:8", "const:4:8"]]
+ 0086aec8 ["CALL", null, ["local:b0:8"]]
- 00869f28 ["INT_ADD", "register:40f0:8", ["const:869f28:8", "const:4:8"]]
- 00869f28 ["CALL", null, ["local:b0:8"]]
+ 0086aed4 ["INT_ADD", "register:40f0:8", ["const:86aed4:8", "const:4:8"]]
+ 0086aed4 ["CALL", null, ["local:b0:8"]]
- 00869f34 ["INT_ADD", "register:40f0:8", ["const:869f34:8", "const:4:8"]]
- 00869f34 ["CALL", null, ["callee:005c1bd0:8"]]
+ 0086aee0 ["INT_ADD", "register:40f0:8", ["const:86aee0:8", "const:4:8"]]
+ 0086aee0 ["CALL", null, ["callee:005c1bd0:8"]]
~~~


<a id="compare-603ba2fa65718019eae17f4bfe4f0a52"></a>

### [`00869f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869f4c.md) → [`0086aef8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086aef8.md) FUN_0086aef8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 10件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00848820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848820.md) [`009aa670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aa670.md) [`009ac454`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac454.md) [`009acc84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009acc84.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 10件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`008497cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/008497cc.md) [`009ab61c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ab/009ab61c.md) [`009ad400`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009ad400.md) [`009adc30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009adc30.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00869fd0 ["INT_ADD", "register:40f0:8", ["const:869fd0:8", "const:4:8"]]
- 00869fd0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086af7c ["INT_ADD", "register:40f0:8", ["const:86af7c:8", "const:4:8"]]
+ 0086af7c ["CALL", null, ["callee:00c58f50:8"]]
- 00869fe0 ["INT_ADD", "register:40f0:8", ["const:869fe0:8", "const:4:8"]]
- 00869fe0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086af8c ["INT_ADD", "register:40f0:8", ["const:86af8c:8", "const:4:8"]]
+ 0086af8c ["CALL", null, ["callee:00c58f50:8"]]
- 00869ff0 ["INT_ADD", "register:40f0:8", ["const:869ff0:8", "const:4:8"]]
- 00869ff0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086af9c ["INT_ADD", "register:40f0:8", ["const:86af9c:8", "const:4:8"]]
+ 0086af9c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-06d1c380ac589e12096e642b2c2f1752"></a>

### [`0086a508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a508.md) → [`0086b4b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b4b4.md) FUN_0086b4b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849458.md) [`0086a508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a508.md) [`00981720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/00981720.md) · 呼出先 2件 [`0086a508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a508.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084a404`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084a404.md) [`0086b4b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b4b4.md) [`009826cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00982/009826cc.md) · 呼出先 2件 [`0086b4b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b4b4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086a528 ["INT_ADD", "register:40f0:8", ["const:86a528:8", "const:4:8"]]
- 0086a528 ["CALL", null, ["local:b0:8"]]
+ 0086b4d4 ["INT_ADD", "register:40f0:8", ["const:86b4d4:8", "const:4:8"]]
+ 0086b4d4 ["CALL", null, ["local:b0:8"]]
- 0086a534 ["INT_ADD", "register:40f0:8", ["const:86a534:8", "const:4:8"]]
- 0086a534 ["CALL", null, ["local:b0:8"]]
+ 0086b4e0 ["INT_ADD", "register:40f0:8", ["const:86b4e0:8", "const:4:8"]]
+ 0086b4e0 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-3f0081e45908aecf236ce7aa1b527d5a"></a>

### [`0086a768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a768.md) → [`0086b714`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b714.md) FUN_0086b714

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0086a6fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a6fc.md) [`0086a768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a768.md) · 呼出先 2件 [`0086a768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a768.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`0086b6a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b6a8.md) [`0086b714`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b714.md) · 呼出先 2件 [`0086b714`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b714.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086a784 ["INT_ADD", "register:40f0:8", ["const:86a784:8", "const:4:8"]]
- 0086a784 ["CALL", null, ["local:b0:8"]]
+ 0086b730 ["INT_ADD", "register:40f0:8", ["const:86b730:8", "const:4:8"]]
+ 0086b730 ["CALL", null, ["local:b0:8"]]
- 0086a790 ["INT_ADD", "register:40f0:8", ["const:86a790:8", "const:4:8"]]
- 0086a790 ["CALL", null, ["local:b0:8"]]
+ 0086b73c ["INT_ADD", "register:40f0:8", ["const:86b73c:8", "const:4:8"]]
+ 0086b73c ["CALL", null, ["local:b0:8"]]
- 0086a7a0 ["INT_ADD", "register:40f0:8", ["const:86a7a0:8", "const:4:8"]]
- 0086a7a0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086b74c ["INT_ADD", "register:40f0:8", ["const:86b74c:8", "const:4:8"]]
+ 0086b74c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-3555435f76d7f122b21cd6d0399eaac8"></a>

### [`0086a930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a930.md) → [`0086b8dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b8dc.md) FUN_0086b8dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849b3c.md) [`0086a930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a930.md) [`009c3430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c3/009c3430.md) · 呼出先 2件 [`0086a930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a930.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084aae8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084aae8.md) [`0086b8dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b8dc.md) [`009c43dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c4/009c43dc.md) · 呼出先 2件 [`0086b8dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b8dc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086a950 ["INT_ADD", "register:40f0:8", ["const:86a950:8", "const:4:8"]]
- 0086a950 ["CALL", null, ["local:b0:8"]]
+ 0086b8fc ["INT_ADD", "register:40f0:8", ["const:86b8fc:8", "const:4:8"]]
+ 0086b8fc ["CALL", null, ["local:b0:8"]]
- 0086a95c ["INT_ADD", "register:40f0:8", ["const:86a95c:8", "const:4:8"]]
- 0086a95c ["CALL", null, ["local:b0:8"]]
+ 0086b908 ["INT_ADD", "register:40f0:8", ["const:86b908:8", "const:4:8"]]
+ 0086b908 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-da34ce846d8ee25c3dff96e349a0be06"></a>

### [`0086aaf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086aaf0.md) → [`0086ba9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086ba9c.md) FUN_0086ba9c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0086aaf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086aaf0.md) [`00ab9f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ab9/00ab9f8c.md) · 呼出先 2件 [`0086aaf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086aaf0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0086ba9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086ba9c.md) [`00abaf80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aba/00abaf80.md) · 呼出先 2件 [`0086ba9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086ba9c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086ab10 ["INT_ADD", "register:40f0:8", ["const:86ab10:8", "const:4:8"]]
- 0086ab10 ["CALL", null, ["local:b0:8"]]
+ 0086babc ["INT_ADD", "register:40f0:8", ["const:86babc:8", "const:4:8"]]
+ 0086babc ["CALL", null, ["local:b0:8"]]
- 0086ab1c ["INT_ADD", "register:40f0:8", ["const:86ab1c:8", "const:4:8"]]
- 0086ab1c ["CALL", null, ["local:b0:8"]]
+ 0086bac8 ["INT_ADD", "register:40f0:8", ["const:86bac8:8", "const:4:8"]]
+ 0086bac8 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-b65c76f51f765b543e8f3a7b98ca2d02"></a>

### [`0086ab34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ab34.md) → [`0086bae0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086bae0.md) FUN_0086bae0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849c68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849c68.md) [`0086ab34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ab34.md) [`009e0228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e0/009e0228.md) [`009e0dcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e0/009e0dcc.md) · 呼出先 3件 [`0086ab34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ab34.md) [`0086ab90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ab90.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 5件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084ac14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084ac14.md) [`0086bae0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086bae0.md) [`009e11d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e1/009e11d4.md) [`009e1d78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e1/009e1d78.md) · 呼出先 3件 [`0086bae0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086bae0.md) [`0086bb3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086bb3c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086ab50 ["INT_ADD", "register:40f0:8", ["const:86ab50:8", "const:4:8"]]
- 0086ab50 ["CALL", null, ["local:b0:8"]]
+ 0086bafc ["INT_ADD", "register:40f0:8", ["const:86bafc:8", "const:4:8"]]
+ 0086bafc ["CALL", null, ["local:b0:8"]]
- 0086ab5c ["INT_ADD", "register:40f0:8", ["const:86ab5c:8", "const:4:8"]]
- 0086ab5c ["CALL", null, ["local:b0:8"]]
+ 0086bb08 ["INT_ADD", "register:40f0:8", ["const:86bb08:8", "const:4:8"]]
+ 0086bb08 ["CALL", null, ["local:b0:8"]]
- 0086ab6c ["INT_ADD", "register:40f0:8", ["const:86ab6c:8", "const:4:8"]]
- 0086ab6c ["CALL", null, ["callee:00c58f50:8"]]
+ 0086bb18 ["INT_ADD", "register:40f0:8", ["const:86bb18:8", "const:4:8"]]
+ 0086bb18 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-2f3dacc0bcd6b967f822bd990c889c07"></a>

### [`0086ab90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ab90.md) → [`0086bb3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086bb3c.md) FUN_0086bb3c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0086ab34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ab34.md) [`0086ab90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ab90.md) [`009dfe60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009df/009dfe60.md) [`009e8970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8970.md) · 呼出先 3件 [`0086ab90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ab90.md) [`0086ac08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ac08.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`0086bae0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086bae0.md) [`0086bb3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086bb3c.md) [`009e0e0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e0/009e0e0c.md) [`009e991c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e9/009e991c.md) · 呼出先 3件 [`0086bb3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086bb3c.md) [`0086bbb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086bbb4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086abac ["INT_ADD", "register:40f0:8", ["const:86abac:8", "const:4:8"]]
- 0086abac ["CALL", null, ["local:b0:8"]]
+ 0086bb58 ["INT_ADD", "register:40f0:8", ["const:86bb58:8", "const:4:8"]]
+ 0086bb58 ["CALL", null, ["local:b0:8"]]
- 0086abb8 ["INT_ADD", "register:40f0:8", ["const:86abb8:8", "const:4:8"]]
- 0086abb8 ["CALL", null, ["local:b0:8"]]
+ 0086bb64 ["INT_ADD", "register:40f0:8", ["const:86bb64:8", "const:4:8"]]
+ 0086bb64 ["CALL", null, ["local:b0:8"]]
- 0086abc8 ["INT_ADD", "register:40f0:8", ["const:86abc8:8", "const:4:8"]]
- 0086abc8 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086bb74 ["INT_ADD", "register:40f0:8", ["const:86bb74:8", "const:4:8"]]
+ 0086bb74 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-ea1692f8af1296311f761ef031c34952"></a>

### [`0086af4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086af4c.md) → [`0086bef8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086bef8.md) FUN_0086bef8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008536f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/008536f8.md) · 呼出先 2件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008546a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00854/008546a4.md) · 呼出先 2件 [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086af68 ["INT_ADD", "register:40f0:8", ["const:86af68:8", "const:4:8"]]
- 0086af68 ["CALL", null, ["callee:00c58f20:8"]]
+ 0086bf14 ["INT_ADD", "register:40f0:8", ["const:86bf14:8", "const:4:8"]]
+ 0086bf14 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-2ba4275b8b7f7c9b173896277ddf0623"></a>

### [`0086b5c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b5c4.md) → [`0086c570`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086c570.md) FUN_0086c570

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`004988bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00498/004988bc.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00498bdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00498/00498bdc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086b5d8 ["INT_ADD", "register:40f0:8", ["const:86b5d8:8", "const:4:8"]]
- 0086b5d8 ["CALL", null, ["callee:00498bdc:8"]]
+ 0086c584 ["INT_ADD", "register:40f0:8", ["const:86c584:8", "const:4:8"]]
+ 0086c584 ["CALL", null, ["callee:00498bdc:8"]]
~~~


<a id="compare-3f265566f7a254a5158aba93c59141b4"></a>

### [`0086b600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b600.md) → [`0086c5ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086c5ac.md) FUN_0086c5ac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00498210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00498/00498210.md) [`00498844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00498/00498844.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00498530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00498/00498530.md) [`00498b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00498/00498b64.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086b614 ["INT_ADD", "register:40f0:8", ["const:86b614:8", "const:4:8"]]
- 0086b614 ["CALL", null, ["callee:00498530:8"]]
+ 0086c5c0 ["INT_ADD", "register:40f0:8", ["const:86c5c0:8", "const:4:8"]]
+ 0086c5c0 ["CALL", null, ["callee:00498530:8"]]
~~~


<a id="compare-86383080e6cb18db40c65ce6e90c92d7"></a>

### [`0086b638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b638.md) → [`0086c5e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086c5e4.md) FUN_0086c5e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0085c1a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085c/0085c1a4.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0054079c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/0054079c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`0085d150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085d/0085d150.md) · 呼出先 5件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00540abc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00540/00540abc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086b67c ["INT_ADD", "register:40f0:8", ["const:86b67c:8", "const:4:8"]]
- 0086b67c ["CALL", null, ["callee:00540abc:8"]]
+ 0086c628 ["INT_ADD", "register:40f0:8", ["const:86c628:8", "const:4:8"]]
+ 0086c628 ["CALL", null, ["callee:00540abc:8"]]
- 0086b6a0 ["INT_ADD", "register:40f0:8", ["const:86b6a0:8", "const:4:8"]]
- 0086b6a0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0086c64c ["INT_ADD", "register:40f0:8", ["const:86c64c:8", "const:4:8"]]
+ 0086c64c ["CALL", null, ["callee:00c58f30:8"]]
- 0086b6b8 ["INT_ADD", "register:40f0:8", ["const:86b6b8:8", "const:4:8"]]
- 0086b6b8 ["CALL", null, ["callee:00c590a0:8"]]
+ 0086c664 ["INT_ADD", "register:40f0:8", ["const:86c664:8", "const:4:8"]]
+ 0086c664 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-bc4439c778e5cc66618ce1f353fd6809"></a>

### [`0086bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bb60.md) → [`0086cb0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cb0c.md) FUN_0086cb0c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) [`0086bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bb60.md) [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 2件 [`0086bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bb60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084f5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084f/0084f5a0.md) [`0086cb0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cb0c.md) [`00a271bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a27/00a271bc.md) · 呼出先 2件 [`0086cb0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cb0c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086bb7c ["INT_ADD", "register:40f0:8", ["const:86bb7c:8", "const:4:8"]]
- 0086bb7c ["CALL", null, ["local:b0:8"]]
+ 0086cb28 ["INT_ADD", "register:40f0:8", ["const:86cb28:8", "const:4:8"]]
+ 0086cb28 ["CALL", null, ["local:b0:8"]]
- 0086bb88 ["INT_ADD", "register:40f0:8", ["const:86bb88:8", "const:4:8"]]
- 0086bb88 ["CALL", null, ["local:b0:8"]]
+ 0086cb34 ["INT_ADD", "register:40f0:8", ["const:86cb34:8", "const:4:8"]]
+ 0086cb34 ["CALL", null, ["local:b0:8"]]
- 0086bb94 ["INT_ADD", "register:40f0:8", ["const:86bb94:8", "const:4:8"]]
- 0086bb94 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086cb40 ["INT_ADD", "register:40f0:8", ["const:86cb40:8", "const:4:8"]]
+ 0086cb40 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-a24a735651c4306f7cba8bd68d8af90c"></a>

### [`0086bbac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bbac.md) → [`0086cb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cb58.md) FUN_0086cb58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 7件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849b3c.md) [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) [`0086bbac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bbac.md) [`009c33a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c3/009c33a4.md) · 呼出先 2件 [`0086bbac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bbac.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 7件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084aae8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084aae8.md) [`0084f5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084f/0084f5a0.md) [`0086cb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cb58.md) [`009c4350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c4/009c4350.md) · 呼出先 2件 [`0086cb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cb58.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086bbcc ["INT_ADD", "register:40f0:8", ["const:86bbcc:8", "const:4:8"]]
- 0086bbcc ["CALL", null, ["local:b0:8"]]
+ 0086cb78 ["INT_ADD", "register:40f0:8", ["const:86cb78:8", "const:4:8"]]
+ 0086cb78 ["CALL", null, ["local:b0:8"]]
- 0086bbd8 ["INT_ADD", "register:40f0:8", ["const:86bbd8:8", "const:4:8"]]
- 0086bbd8 ["CALL", null, ["local:b0:8"]]
+ 0086cb84 ["INT_ADD", "register:40f0:8", ["const:86cb84:8", "const:4:8"]]
+ 0086cb84 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-bc7b52093ef2d71b6d5a174c6d915402"></a>

### [`0086bbf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bbf0.md) → [`0086cb9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cb9c.md) FUN_0086cb9c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849870.md) [`0085155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/0085155c.md) [`0086bbf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bbf0.md) · 呼出先 3件 [`0086bbf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bbf0.md) [`0086bc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bc50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084a81c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084a81c.md) [`00852508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/00852508.md) [`0086cb9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cb9c.md) · 呼出先 3件 [`0086cb9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cb9c.md) [`0086cbfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cbfc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086bc0c ["INT_ADD", "register:40f0:8", ["const:86bc0c:8", "const:4:8"]]
- 0086bc0c ["CALL", null, ["local:b0:8"]]
+ 0086cbb8 ["INT_ADD", "register:40f0:8", ["const:86cbb8:8", "const:4:8"]]
+ 0086cbb8 ["CALL", null, ["local:b0:8"]]
- 0086bc18 ["INT_ADD", "register:40f0:8", ["const:86bc18:8", "const:4:8"]]
- 0086bc18 ["CALL", null, ["local:b0:8"]]
+ 0086cbc4 ["INT_ADD", "register:40f0:8", ["const:86cbc4:8", "const:4:8"]]
+ 0086cbc4 ["CALL", null, ["local:b0:8"]]
- 0086bc30 ["INT_ADD", "register:40f0:8", ["const:86bc30:8", "const:4:8"]]
- 0086bc30 ["CALL", null, ["callee:0086cbfc:8"]]
+ 0086cbdc ["INT_ADD", "register:40f0:8", ["const:86cbdc:8", "const:4:8"]]
+ 0086cbdc ["CALL", null, ["callee:0086cbfc:8"]]
~~~


<a id="compare-2c394053a2e8ace1e744151a59d2e7e5"></a>

### [`0086bc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bc50.md) → [`0086cbfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cbfc.md) FUN_0086cbfc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0086bbf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bbf0.md) [`0086bc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bc50.md) [`00a6a310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6a/00a6a310.md) [`00a6a6d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6a/00a6a6d0.md) · 呼出先 3件 [`0086bc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bc50.md) [`0086bcac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bcac.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`0086cb9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cb9c.md) [`0086cbfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cbfc.md) [`00a6b304`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6b/00a6b304.md) [`00a6b6c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6b/00a6b6c4.md) · 呼出先 3件 [`0086cbfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cbfc.md) [`0086cc58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cc58.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086bc6c ["INT_ADD", "register:40f0:8", ["const:86bc6c:8", "const:4:8"]]
- 0086bc6c ["CALL", null, ["local:b0:8"]]
+ 0086cc18 ["INT_ADD", "register:40f0:8", ["const:86cc18:8", "const:4:8"]]
+ 0086cc18 ["CALL", null, ["local:b0:8"]]
- 0086bc78 ["INT_ADD", "register:40f0:8", ["const:86bc78:8", "const:4:8"]]
- 0086bc78 ["CALL", null, ["local:b0:8"]]
+ 0086cc24 ["INT_ADD", "register:40f0:8", ["const:86cc24:8", "const:4:8"]]
+ 0086cc24 ["CALL", null, ["local:b0:8"]]
- 0086bc8c ["INT_ADD", "register:40f0:8", ["const:86bc8c:8", "const:4:8"]]
- 0086bc8c ["CALL", null, ["callee:0086cc58:8"]]
+ 0086cc38 ["INT_ADD", "register:40f0:8", ["const:86cc38:8", "const:4:8"]]
+ 0086cc38 ["CALL", null, ["callee:0086cc58:8"]]
~~~


<a id="compare-866d0bc1ae7e1daed4b48705b1d7688c"></a>

### [`0086bcac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bcac.md) → [`0086cc58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cc58.md) FUN_0086cc58

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0086bc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bc50.md) [`00a6c288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6c/00a6c288.md) [`00a6c4bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6c/00a6c4bc.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0086cbfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cbfc.md) [`00a6d27c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6d/00a6d27c.md) [`00a6d4b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6d/00a6d4b0.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086bcd0 ["INT_ADD", "register:40f0:8", ["const:86bcd0:8", "const:4:8"]]
- 0086bcd0 ["CALL", null, ["callee:00c54d90:8"]]
+ 0086cc7c ["INT_ADD", "register:40f0:8", ["const:86cc7c:8", "const:4:8"]]
+ 0086cc7c ["CALL", null, ["callee:00c54d90:8"]]
- 0086bce4 ["COPY", "register:0:8", ["register:4040:8"]]
- 0086bce4 ["INT_ADD", "register:40f0:8", ["const:86bce4:8", "const:4:8"]]
- 0086bce4 ["CALLIND", null, ["register:0:8"]]
+ 0086cc90 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0086cc90 ["INT_ADD", "register:40f0:8", ["const:86cc90:8", "const:4:8"]]
+ 0086cc90 ["CALLIND", null, ["register:0:8"]]
- 0086bcec ["INT_ADD", "register:40f0:8", ["const:86bcec:8", "const:4:8"]]
- 0086bcec ["CALL", null, ["callee:00c58f20:8"]]
+ 0086cc98 ["INT_ADD", "register:40f0:8", ["const:86cc98:8", "const:4:8"]]
+ 0086cc98 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-e703b3b1bf9459027a0131904e803e3a"></a>

### [`0086be10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086be10.md) → [`0086cdbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cdbc.md) FUN_0086cdbc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 6件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849870.md) [`0085155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/0085155c.md) [`0086be10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086be10.md) [`00a691c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a69/00a691c4.md) · 呼出先 4件 [`0086be10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086be10.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 6件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084a81c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084a81c.md) [`00852508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/00852508.md) [`0086cdbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cdbc.md) [`00a6a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6a/00a6a1b8.md) · 呼出先 4件 [`0086cdbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cdbc.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086be2c ["INT_ADD", "register:40f0:8", ["const:86be2c:8", "const:4:8"]]
- 0086be2c ["CALL", null, ["local:b0:8"]]
+ 0086cdd8 ["INT_ADD", "register:40f0:8", ["const:86cdd8:8", "const:4:8"]]
+ 0086cdd8 ["CALL", null, ["local:b0:8"]]
- 0086be38 ["INT_ADD", "register:40f0:8", ["const:86be38:8", "const:4:8"]]
- 0086be38 ["CALL", null, ["local:b0:8"]]
+ 0086cde4 ["INT_ADD", "register:40f0:8", ["const:86cde4:8", "const:4:8"]]
+ 0086cde4 ["CALL", null, ["local:b0:8"]]
- 0086be4c ["INT_ADD", "register:40f0:8", ["const:86be4c:8", "const:4:8"]]
- 0086be4c ["CALL", null, ["callee:00c54d90:8"]]
+ 0086cdf8 ["INT_ADD", "register:40f0:8", ["const:86cdf8:8", "const:4:8"]]
+ 0086cdf8 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-059636fcca5f19b4f08b90c000e01ec9"></a>

### [`0086be80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086be80.md) → [`0086ce2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086ce2c.md) FUN_0086ce2c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) [`0086be80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086be80.md) [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 2件 [`0086be80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086be80.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084f5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084f/0084f5a0.md) [`0086ce2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086ce2c.md) [`00a271bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a27/00a271bc.md) · 呼出先 2件 [`0086ce2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086ce2c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086bea0 ["INT_ADD", "register:40f0:8", ["const:86bea0:8", "const:4:8"]]
- 0086bea0 ["CALL", null, ["local:b0:8"]]
+ 0086ce4c ["INT_ADD", "register:40f0:8", ["const:86ce4c:8", "const:4:8"]]
+ 0086ce4c ["CALL", null, ["local:b0:8"]]
- 0086beac ["INT_ADD", "register:40f0:8", ["const:86beac:8", "const:4:8"]]
- 0086beac ["CALL", null, ["local:b0:8"]]
+ 0086ce58 ["INT_ADD", "register:40f0:8", ["const:86ce58:8", "const:4:8"]]
+ 0086ce58 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-758445adee173c39dafc626dd96a52f5"></a>

### [`0086bf08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bf08.md) → [`0086ceb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086ceb4.md) FUN_0086ceb4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0086bf08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bf08.md) · 呼出先 2件 [`0086bf08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bf08.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0086ceb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086ceb4.md) · 呼出先 2件 [`0086ceb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086ceb4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086bf24 ["INT_ADD", "register:40f0:8", ["const:86bf24:8", "const:4:8"]]
- 0086bf24 ["CALL", null, ["local:b0:8"]]
+ 0086ced0 ["INT_ADD", "register:40f0:8", ["const:86ced0:8", "const:4:8"]]
+ 0086ced0 ["CALL", null, ["local:b0:8"]]
- 0086bf30 ["INT_ADD", "register:40f0:8", ["const:86bf30:8", "const:4:8"]]
- 0086bf30 ["CALL", null, ["local:b0:8"]]
+ 0086cedc ["INT_ADD", "register:40f0:8", ["const:86cedc:8", "const:4:8"]]
+ 0086cedc ["CALL", null, ["local:b0:8"]]
- 0086bf40 ["INT_ADD", "register:40f0:8", ["const:86bf40:8", "const:4:8"]]
- 0086bf40 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086ceec ["INT_ADD", "register:40f0:8", ["const:86ceec:8", "const:4:8"]]
+ 0086ceec ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-0f139dd38e202560986d8bca21235db6"></a>

### [`0086bf58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bf58.md) → [`0086cf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cf04.md) FUN_0086cf04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0086bf58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bf58.md) [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 2件 [`0086bf58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bf58.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0086cf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cf04.md) [`00b204b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b20/00b204b8.md) · 呼出先 2件 [`0086cf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cf04.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086bf74 ["INT_ADD", "register:40f0:8", ["const:86bf74:8", "const:4:8"]]
- 0086bf74 ["CALL", null, ["local:b0:8"]]
+ 0086cf20 ["INT_ADD", "register:40f0:8", ["const:86cf20:8", "const:4:8"]]
+ 0086cf20 ["CALL", null, ["local:b0:8"]]
- 0086bf80 ["INT_ADD", "register:40f0:8", ["const:86bf80:8", "const:4:8"]]
- 0086bf80 ["CALL", null, ["local:b0:8"]]
+ 0086cf2c ["INT_ADD", "register:40f0:8", ["const:86cf2c:8", "const:4:8"]]
+ 0086cf2c ["CALL", null, ["local:b0:8"]]
- 0086bf90 ["INT_ADD", "register:40f0:8", ["const:86bf90:8", "const:4:8"]]
- 0086bf90 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086cf3c ["INT_ADD", "register:40f0:8", ["const:86cf3c:8", "const:4:8"]]
+ 0086cf3c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-8d8cd0b568a1c00609dd65a701cf7bd0"></a>

### [`0086bfa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bfa8.md) → [`0086cf54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cf54.md) FUN_0086cf54

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0086bfa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bfa8.md) · 呼出先 3件 [`0086bfa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bfa8.md) [`0086bff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bff4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0086cf54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cf54.md) · 呼出先 3件 [`0086cf54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cf54.md) [`0086cfa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cfa0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086bfc8 ["INT_ADD", "register:40f0:8", ["const:86bfc8:8", "const:4:8"]]
- 0086bfc8 ["CALL", null, ["local:b0:8"]]
+ 0086cf74 ["INT_ADD", "register:40f0:8", ["const:86cf74:8", "const:4:8"]]
+ 0086cf74 ["CALL", null, ["local:b0:8"]]
- 0086bfd4 ["INT_ADD", "register:40f0:8", ["const:86bfd4:8", "const:4:8"]]
- 0086bfd4 ["CALL", null, ["local:b0:8"]]
+ 0086cf80 ["INT_ADD", "register:40f0:8", ["const:86cf80:8", "const:4:8"]]
+ 0086cf80 ["CALL", null, ["local:b0:8"]]
- 0086bfdc ["INT_ADD", "register:40f0:8", ["const:86bfdc:8", "const:4:8"]]
- 0086bfdc ["CALL", null, ["callee:0086cfa0:8"]]
+ 0086cf88 ["INT_ADD", "register:40f0:8", ["const:86cf88:8", "const:4:8"]]
+ 0086cf88 ["CALL", null, ["callee:0086cfa0:8"]]
~~~


<a id="compare-a2881c8f652d7fbce184a9db69e77d15"></a>

### [`0086bff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bff4.md) → [`0086cfa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cfa0.md) FUN_0086cfa0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0086bfa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bfa8.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0086cf54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cf54.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c040 ["INT_ADD", "register:40f0:8", ["const:86c040:8", "const:4:8"]]
- 0086c040 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086cfec ["INT_ADD", "register:40f0:8", ["const:86cfec:8", "const:4:8"]]
+ 0086cfec ["CALL", null, ["callee:00c58f50:8"]]
- 0086c050 ["INT_ADD", "register:40f0:8", ["const:86c050:8", "const:4:8"]]
- 0086c050 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086cffc ["INT_ADD", "register:40f0:8", ["const:86cffc:8", "const:4:8"]]
+ 0086cffc ["CALL", null, ["callee:00c58f50:8"]]
- 0086c05c ["INT_ADD", "register:40f0:8", ["const:86c05c:8", "const:4:8"]]
- 0086c05c ["CALL", null, ["callee:00c58f50:8"]]
+ 0086d008 ["INT_ADD", "register:40f0:8", ["const:86d008:8", "const:4:8"]]
+ 0086d008 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-a9cc2b4faa443335c729508454ac473d"></a>

### [`0086c098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c098.md) → [`0086d044`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d044.md) FUN_0086d044

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0086c098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c098.md) [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 3件 [`0086ba28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086ba28.md) [`0086c098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c098.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0086d044`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d044.md) [`00b204b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b20/00b204b8.md) · 呼出先 3件 [`0086c9d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086c9d4.md) [`0086d044`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d044.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c0b8 ["INT_ADD", "register:40f0:8", ["const:86c0b8:8", "const:4:8"]]
- 0086c0b8 ["CALL", null, ["local:b0:8"]]
+ 0086d064 ["INT_ADD", "register:40f0:8", ["const:86d064:8", "const:4:8"]]
+ 0086d064 ["CALL", null, ["local:b0:8"]]
- 0086c0c4 ["INT_ADD", "register:40f0:8", ["const:86c0c4:8", "const:4:8"]]
- 0086c0c4 ["CALL", null, ["local:b0:8"]]
+ 0086d070 ["INT_ADD", "register:40f0:8", ["const:86d070:8", "const:4:8"]]
+ 0086d070 ["CALL", null, ["local:b0:8"]]
- 0086c0cc ["INT_ADD", "register:40f0:8", ["const:86c0cc:8", "const:4:8"]]
- 0086c0cc ["CALL", null, ["callee:0086c9d4:8"]]
+ 0086d078 ["INT_ADD", "register:40f0:8", ["const:86d078:8", "const:4:8"]]
+ 0086d078 ["CALL", null, ["callee:0086c9d4:8"]]
~~~


<a id="compare-83de3b2aa97f48642dba450d632a2ea1"></a>

### [`0086c0e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c0e4.md) → [`0086d090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d090.md) FUN_0086d090

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0086c0e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c0e4.md) · 呼出先 4件 [`0086c0e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c0e4.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0086d090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d090.md) · 呼出先 4件 [`0086d090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d090.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c104 ["INT_ADD", "register:40f0:8", ["const:86c104:8", "const:4:8"]]
- 0086c104 ["CALL", null, ["local:b0:8"]]
+ 0086d0b0 ["INT_ADD", "register:40f0:8", ["const:86d0b0:8", "const:4:8"]]
+ 0086d0b0 ["CALL", null, ["local:b0:8"]]
- 0086c110 ["INT_ADD", "register:40f0:8", ["const:86c110:8", "const:4:8"]]
- 0086c110 ["CALL", null, ["local:b0:8"]]
+ 0086d0bc ["INT_ADD", "register:40f0:8", ["const:86d0bc:8", "const:4:8"]]
+ 0086d0bc ["CALL", null, ["local:b0:8"]]
- 0086c14c ["INT_ADD", "register:40f0:8", ["const:86c14c:8", "const:4:8"]]
- 0086c14c ["CALL", null, ["callee:00c54d90:8"]]
+ 0086d0f8 ["INT_ADD", "register:40f0:8", ["const:86d0f8:8", "const:4:8"]]
+ 0086d0f8 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-9e33a09fdd907f2c408d0560f959cea7"></a>

### [`0086c194`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c194.md) → [`0086d140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d140.md) FUN_0086d140

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) [`0086c194`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c194.md) · 呼出先 2件 [`0086c194`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c194.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084f5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084f/0084f5a0.md) [`0086d140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d140.md) · 呼出先 2件 [`0086d140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d140.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c1b4 ["INT_ADD", "register:40f0:8", ["const:86c1b4:8", "const:4:8"]]
- 0086c1b4 ["CALL", null, ["local:b0:8"]]
+ 0086d160 ["INT_ADD", "register:40f0:8", ["const:86d160:8", "const:4:8"]]
+ 0086d160 ["CALL", null, ["local:b0:8"]]
- 0086c1c0 ["INT_ADD", "register:40f0:8", ["const:86c1c0:8", "const:4:8"]]
- 0086c1c0 ["CALL", null, ["local:b0:8"]]
+ 0086d16c ["INT_ADD", "register:40f0:8", ["const:86d16c:8", "const:4:8"]]
+ 0086d16c ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-47209e398e1bbfdcd5499750f374fa83"></a>

### [`0086c1d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c1d8.md) → [`0086d184`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d184.md) FUN_0086d184

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) [`0086c1d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c1d8.md) · 呼出先 2件 [`0086c1d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c1d8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084f5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084f/0084f5a0.md) [`0086d184`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d184.md) · 呼出先 2件 [`0086d184`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d184.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c1f4 ["INT_ADD", "register:40f0:8", ["const:86c1f4:8", "const:4:8"]]
- 0086c1f4 ["CALL", null, ["local:b0:8"]]
+ 0086d1a0 ["INT_ADD", "register:40f0:8", ["const:86d1a0:8", "const:4:8"]]
+ 0086d1a0 ["CALL", null, ["local:b0:8"]]
- 0086c200 ["INT_ADD", "register:40f0:8", ["const:86c200:8", "const:4:8"]]
- 0086c200 ["CALL", null, ["local:b0:8"]]
+ 0086d1ac ["INT_ADD", "register:40f0:8", ["const:86d1ac:8", "const:4:8"]]
+ 0086d1ac ["CALL", null, ["local:b0:8"]]
- 0086c210 ["INT_ADD", "register:40f0:8", ["const:86c210:8", "const:4:8"]]
- 0086c210 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086d1bc ["INT_ADD", "register:40f0:8", ["const:86d1bc:8", "const:4:8"]]
+ 0086d1bc ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-815baedbea87e84bb8fe2494bcdb8536"></a>

### [`0086c228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c228.md) → [`0086d1d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d1d4.md) FUN_0086d1d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`008615b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00861/008615b4.md) [`0086c228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c228.md) · 呼出先 2件 [`0086c228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c228.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`00862560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00862/00862560.md) [`0086d1d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d1d4.md) · 呼出先 2件 [`0086d1d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d1d4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c248 ["INT_ADD", "register:40f0:8", ["const:86c248:8", "const:4:8"]]
- 0086c248 ["CALL", null, ["local:b0:8"]]
+ 0086d1f4 ["INT_ADD", "register:40f0:8", ["const:86d1f4:8", "const:4:8"]]
+ 0086d1f4 ["CALL", null, ["local:b0:8"]]
- 0086c254 ["INT_ADD", "register:40f0:8", ["const:86c254:8", "const:4:8"]]
- 0086c254 ["CALL", null, ["local:b0:8"]]
+ 0086d200 ["INT_ADD", "register:40f0:8", ["const:86d200:8", "const:4:8"]]
+ 0086d200 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-9183316268bb1d03a277e9119040d1f2"></a>

### [`0086c26c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c26c.md) → [`0086d218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d218.md) FUN_0086d218

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0086c26c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c26c.md) [`00b13398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b13/00b13398.md) · 呼出先 2件 [`0086c26c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c26c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0086d218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d218.md) [`00b1438c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b14/00b1438c.md) · 呼出先 2件 [`0086d218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d218.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c288 ["INT_ADD", "register:40f0:8", ["const:86c288:8", "const:4:8"]]
- 0086c288 ["CALL", null, ["local:b0:8"]]
+ 0086d234 ["INT_ADD", "register:40f0:8", ["const:86d234:8", "const:4:8"]]
+ 0086d234 ["CALL", null, ["local:b0:8"]]
- 0086c294 ["INT_ADD", "register:40f0:8", ["const:86c294:8", "const:4:8"]]
- 0086c294 ["CALL", null, ["local:b0:8"]]
+ 0086d240 ["INT_ADD", "register:40f0:8", ["const:86d240:8", "const:4:8"]]
+ 0086d240 ["CALL", null, ["local:b0:8"]]
- 0086c2a4 ["INT_ADD", "register:40f0:8", ["const:86c2a4:8", "const:4:8"]]
- 0086c2a4 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086d250 ["INT_ADD", "register:40f0:8", ["const:86d250:8", "const:4:8"]]
+ 0086d250 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-762e3f8dba4fc4547ca776d02771184e"></a>

### [`0086c2bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c2bc.md) → [`0086d268`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d268.md) FUN_0086d268

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) [`00860a44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00860/00860a44.md) [`0086c2bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c2bc.md) [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) · 呼出先 3件 [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`0086c2bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c2bc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 5件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084f5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084f/0084f5a0.md) [`008619f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00861/008619f0.md) [`0086d268`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d268.md) [`00a07d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07d9c.md) · 呼出先 3件 [`00676e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676e50.md) [`0086d268`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d268.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c2dc ["INT_ADD", "register:40f0:8", ["const:86c2dc:8", "const:4:8"]]
- 0086c2dc ["CALL", null, ["local:b0:8"]]
+ 0086d288 ["INT_ADD", "register:40f0:8", ["const:86d288:8", "const:4:8"]]
+ 0086d288 ["CALL", null, ["local:b0:8"]]
- 0086c2e8 ["INT_ADD", "register:40f0:8", ["const:86c2e8:8", "const:4:8"]]
- 0086c2e8 ["CALL", null, ["local:b0:8"]]
+ 0086d294 ["INT_ADD", "register:40f0:8", ["const:86d294:8", "const:4:8"]]
+ 0086d294 ["CALL", null, ["local:b0:8"]]
- 0086c2f4 ["INT_ADD", "register:40f0:8", ["const:86c2f4:8", "const:4:8"]]
- 0086c2f4 ["CALL", null, ["callee:00676e50:8"]]
+ 0086d2a0 ["INT_ADD", "register:40f0:8", ["const:86d2a0:8", "const:4:8"]]
+ 0086d2a0 ["CALL", null, ["callee:00676e50:8"]]
~~~


<a id="compare-2acbe1ae4227ada7a4aae2e759b79a61"></a>

### [`0086c30c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c30c.md) → [`0086d2b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d2b8.md) FUN_0086d2b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 7件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00850830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00850/00850830.md) [`0086c30c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c30c.md) [`0086c350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c350.md) [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 2件 [`0086c30c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c30c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 7件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`008517dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00851/008517dc.md) [`0086d2b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d2b8.md) [`0086d2fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d2fc.md) [`00a271bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a27/00a271bc.md) · 呼出先 2件 [`0086d2b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d2b8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c32c ["INT_ADD", "register:40f0:8", ["const:86c32c:8", "const:4:8"]]
- 0086c32c ["CALL", null, ["local:b0:8"]]
+ 0086d2d8 ["INT_ADD", "register:40f0:8", ["const:86d2d8:8", "const:4:8"]]
+ 0086d2d8 ["CALL", null, ["local:b0:8"]]
- 0086c338 ["INT_ADD", "register:40f0:8", ["const:86c338:8", "const:4:8"]]
- 0086c338 ["CALL", null, ["local:b0:8"]]
+ 0086d2e4 ["INT_ADD", "register:40f0:8", ["const:86d2e4:8", "const:4:8"]]
+ 0086d2e4 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-fb715814a63b413a363378611fa5fd91"></a>

### [`0086c350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c350.md) → [`0086d2fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d2fc.md) FUN_0086d2fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00850830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00850/00850830.md) [`0086c350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c350.md) [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 3件 [`0086c30c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c30c.md) [`0086c350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c350.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`008517dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00851/008517dc.md) [`0086d2fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d2fc.md) [`00a271bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a27/00a271bc.md) · 呼出先 3件 [`0086d2b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d2b8.md) [`0086d2fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d2fc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c370 ["INT_ADD", "register:40f0:8", ["const:86c370:8", "const:4:8"]]
- 0086c370 ["CALL", null, ["local:b0:8"]]
+ 0086d31c ["INT_ADD", "register:40f0:8", ["const:86d31c:8", "const:4:8"]]
+ 0086d31c ["CALL", null, ["local:b0:8"]]
- 0086c37c ["INT_ADD", "register:40f0:8", ["const:86c37c:8", "const:4:8"]]
- 0086c37c ["CALL", null, ["local:b0:8"]]
+ 0086d328 ["INT_ADD", "register:40f0:8", ["const:86d328:8", "const:4:8"]]
+ 0086d328 ["CALL", null, ["local:b0:8"]]
- 0086c388 ["INT_ADD", "register:40f0:8", ["const:86c388:8", "const:4:8"]]
- 0086c388 ["CALL", null, ["callee:0086d2b8:8"]]
+ 0086d334 ["INT_ADD", "register:40f0:8", ["const:86d334:8", "const:4:8"]]
+ 0086d334 ["CALL", null, ["callee:0086d2b8:8"]]
~~~


<a id="compare-b979240896d5f57ed6bc72fc296709bc"></a>

### [`0086c3a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c3a0.md) → [`0086d34c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d34c.md) FUN_0086d34c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0086c3a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c3a0.md) · 呼出先 2件 [`0086c3a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c3a0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0086d34c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d34c.md) · 呼出先 2件 [`0086d34c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d34c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c3c0 ["INT_ADD", "register:40f0:8", ["const:86c3c0:8", "const:4:8"]]
- 0086c3c0 ["CALL", null, ["local:b0:8"]]
+ 0086d36c ["INT_ADD", "register:40f0:8", ["const:86d36c:8", "const:4:8"]]
+ 0086d36c ["CALL", null, ["local:b0:8"]]
- 0086c3cc ["INT_ADD", "register:40f0:8", ["const:86c3cc:8", "const:4:8"]]
- 0086c3cc ["CALL", null, ["local:b0:8"]]
+ 0086d378 ["INT_ADD", "register:40f0:8", ["const:86d378:8", "const:4:8"]]
+ 0086d378 ["CALL", null, ["local:b0:8"]]
~~~


