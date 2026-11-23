# v16.0.2 → v16.0.3 · 要調査の変更候補 (27)

[一覧の目次](README.md)

<a id="compare-7d0cacb1a3057882607b58b7384fcf4d"></a>

### [`009f3938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3938.md) → [`009f48e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f48e4.md) FUN_009f48e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ef6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009ef6c0.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`009f066c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f0/009f066c.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009f39a4 ["COPY", "register:0:8", ["register:4040:8"]]
- 009f39a4 ["INT_ADD", "register:40f0:8", ["const:9f39a4:8", "const:4:8"]]
- 009f39a4 ["CALLIND", null, ["register:0:8"]]
+ 009f4950 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009f4950 ["INT_ADD", "register:40f0:8", ["const:9f4950:8", "const:4:8"]]
+ 009f4950 ["CALLIND", null, ["register:0:8"]]
- 009f39b4 ["COPY", "register:0:8", ["register:4040:8"]]
- 009f39b4 ["INT_ADD", "register:40f0:8", ["const:9f39b4:8", "const:4:8"]]
- 009f39b4 ["CALLIND", null, ["register:0:8"]]
+ 009f4960 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009f4960 ["INT_ADD", "register:40f0:8", ["const:9f4960:8", "const:4:8"]]
+ 009f4960 ["CALLIND", null, ["register:0:8"]]
- 009f39d4 ["COPY", "register:0:8", ["register:4040:8"]]
- 009f39d4 ["INT_ADD", "register:40f0:8", ["const:9f39d4:8", "const:4:8"]]
- 009f39d4 ["CALLIND", null, ["register:0:8"]]
+ 009f4980 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009f4980 ["INT_ADD", "register:40f0:8", ["const:9f4980:8", "const:4:8"]]
+ 009f4980 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-50d2ec606de83d079721d2a30b5b7228"></a>

### [`009f3b20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3b20.md) → [`009f4acc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f4acc.md) FUN_009f4acc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009efe3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009efe3c.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`009f3cac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3cac.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009f0de8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f0/009f0de8.md) · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`009f4c58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f4c58.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009f3bac ["INT_ADD", "register:40f0:8", ["const:9f3bac:8", "const:4:8"]]
- 009f3bac ["CALL", null, ["callee:00c58f30:8"]]
+ 009f4b58 ["INT_ADD", "register:40f0:8", ["const:9f4b58:8", "const:4:8"]]
+ 009f4b58 ["CALL", null, ["callee:00c58f30:8"]]
- 009f3c64 ["INT_ADD", "register:40f0:8", ["const:9f3c64:8", "const:4:8"]]
- 009f3c64 ["CALL", null, ["callee:00c58f50:8"]]
+ 009f4c10 ["INT_ADD", "register:40f0:8", ["const:9f4c10:8", "const:4:8"]]
+ 009f4c10 ["CALL", null, ["callee:00c58f50:8"]]
- 009f3c80 ["INT_ADD", "register:40f0:8", ["const:9f3c80:8", "const:4:8"]]
- 009f3c80 ["CALL", null, ["callee:00c58f50:8"]]
+ 009f4c2c ["INT_ADD", "register:40f0:8", ["const:9f4c2c:8", "const:4:8"]]
+ 009f4c2c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-7111098295bfc49e3b7f7ecab2f07a26"></a>

### [`009f3cc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3cc0.md) → [`009f4c6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f4c6c.md) FUN_009f4c6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009f0560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f0/009f0560.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`009f3b0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3b0c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`009f150c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f1/009f150c.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`009f4ab8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f4ab8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009f3d44 ["INT_ADD", "register:40f0:8", ["const:9f3d44:8", "const:4:8"]]
- 009f3d44 ["CALL", null, ["callee:00c58f30:8"]]
+ 009f4cf0 ["INT_ADD", "register:40f0:8", ["const:9f4cf0:8", "const:4:8"]]
+ 009f4cf0 ["CALL", null, ["callee:00c58f30:8"]]
- 009f3d7c ["INT_ADD", "register:40f0:8", ["const:9f3d7c:8", "const:4:8"]]
- 009f3d7c ["CALL", null, ["callee:00c58fe0:8"]]
+ 009f4d28 ["INT_ADD", "register:40f0:8", ["const:9f4d28:8", "const:4:8"]]
+ 009f4d28 ["CALL", null, ["callee:00c58fe0:8"]]
- 009f3e84 ["INT_ADD", "register:40f0:8", ["const:9f3e84:8", "const:4:8"]]
- 009f3e84 ["CALL", null, ["callee:00c590a0:8"]]
+ 009f4e30 ["INT_ADD", "register:40f0:8", ["const:9f4e30:8", "const:4:8"]]
+ 009f4e30 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-1e87c3179ace30b88056d9e8afc54c53"></a>

### [`009f3f88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3f88.md) → [`009f4f34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f4f34.md) FUN_009f4f34

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`009f0d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f0/009f0d88.md) [`009f19cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f1/009f19cc.md) [`009f1ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f1/009f1ea0.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`009f40a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f40a4.md) [`009f424c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f424c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 3件 [`009f1d34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f1/009f1d34.md) [`009f2978`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f2/009f2978.md) [`009f2e4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f2/009f2e4c.md) · 呼出先 4件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`009f5050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f5/009f5050.md) [`009f51f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f5/009f51f8.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009f3fe4 ["INT_ADD", "register:40f0:8", ["const:9f3fe4:8", "const:4:8"]]
- 009f3fe4 ["CALL", null, ["callee:009f5050:8"]]
+ 009f4f90 ["INT_ADD", "register:40f0:8", ["const:9f4f90:8", "const:4:8"]]
+ 009f4f90 ["CALL", null, ["callee:009f5050:8"]]
- 009f400c ["INT_ADD", "register:40f0:8", ["const:9f400c:8", "const:4:8"]]
- 009f400c ["CALL", null, ["callee:009f51f8:8"]]
+ 009f4fb8 ["INT_ADD", "register:40f0:8", ["const:9f4fb8:8", "const:4:8"]]
+ 009f4fb8 ["CALL", null, ["callee:009f51f8:8"]]
- 009f4038 ["INT_ADD", "register:40f0:8", ["const:9f4038:8", "const:4:8"]]
- 009f4038 ["CALL", null, ["callee:0043bf04:8"]]
+ 009f4fe4 ["INT_ADD", "register:40f0:8", ["const:9f4fe4:8", "const:4:8"]]
+ 009f4fe4 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-4550cbe35abfd82aebd589258e298875"></a>

### [`009f424c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f424c.md) → [`009f51f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f5/009f51f8.md) FUN_009f51f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009f3f88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3f88.md) · 呼出先 2件 [`009f46c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f46c0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`009f4f34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f4f34.md) · 呼出先 2件 [`009f566c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f5/009f566c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009f4270 ["INT_ADD", "register:40f0:8", ["const:9f4270:8", "const:4:8"]]
- 009f4270 ["CALL", null, ["callee:00c58f30:8"]]
+ 009f521c ["INT_ADD", "register:40f0:8", ["const:9f521c:8", "const:4:8"]]
+ 009f521c ["CALL", null, ["callee:00c58f30:8"]]
- 009f42e0 ["INT_ADD", "register:40f0:8", ["const:9f42e0:8", "const:4:8"]]
- 009f42e0 ["CALL", null, ["callee:009f566c:8"]]
+ 009f528c ["INT_ADD", "register:40f0:8", ["const:9f528c:8", "const:4:8"]]
+ 009f528c ["CALL", null, ["callee:009f566c:8"]]
~~~


<a id="compare-3ec0b93dc86a71545bf0e3d73cfabd7b"></a>

### [`009f4334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f4334.md) → [`009f52e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f5/009f52e0.md) FUN_009f52e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`009f109c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f1/009f109c.md) [`009f1ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f1/009f1ea0.md) [`009f46c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f46c0.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`009f4450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f4450.md) [`009f45f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f45f8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 3件 [`009f2048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f2/009f2048.md) [`009f2e4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f2/009f2e4c.md) [`009f566c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f5/009f566c.md) · 呼出先 4件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`009f53fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f5/009f53fc.md) [`009f55a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f5/009f55a4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009f4390 ["INT_ADD", "register:40f0:8", ["const:9f4390:8", "const:4:8"]]
- 009f4390 ["CALL", null, ["callee:009f53fc:8"]]
+ 009f533c ["INT_ADD", "register:40f0:8", ["const:9f533c:8", "const:4:8"]]
+ 009f533c ["CALL", null, ["callee:009f53fc:8"]]
- 009f43b8 ["INT_ADD", "register:40f0:8", ["const:9f43b8:8", "const:4:8"]]
- 009f43b8 ["CALL", null, ["callee:009f55a4:8"]]
+ 009f5364 ["INT_ADD", "register:40f0:8", ["const:9f5364:8", "const:4:8"]]
+ 009f5364 ["CALL", null, ["callee:009f55a4:8"]]
- 009f43e4 ["INT_ADD", "register:40f0:8", ["const:9f43e4:8", "const:4:8"]]
- 009f43e4 ["CALL", null, ["callee:0043bf04:8"]]
+ 009f5390 ["INT_ADD", "register:40f0:8", ["const:9f5390:8", "const:4:8"]]
+ 009f5390 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-2f2374d04a11e87be3f18580de8a7e88"></a>

### [`009f45f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f45f8.md) → [`009f55a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f5/009f55a4.md) FUN_009f55a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009f4334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f4334.md) · 呼出先 6件 [`009f2e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2e38.md) [`009f376c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f376c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009f52e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f5/009f52e0.md) · 呼出先 6件 [`009f3de4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f3/009f3de4.md) [`009f4718`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f4718.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009f461c ["INT_ADD", "register:40f0:8", ["const:9f461c:8", "const:4:8"]]
- 009f461c ["CALL", null, ["callee:00c58f30:8"]]
+ 009f55c8 ["INT_ADD", "register:40f0:8", ["const:9f55c8:8", "const:4:8"]]
+ 009f55c8 ["CALL", null, ["callee:00c58f30:8"]]
- 009f4654 ["INT_ADD", "register:40f0:8", ["const:9f4654:8", "const:4:8"]]
- 009f4654 ["CALL", null, ["callee:00c58f30:8"]]
+ 009f5600 ["INT_ADD", "register:40f0:8", ["const:9f5600:8", "const:4:8"]]
+ 009f5600 ["CALL", null, ["callee:00c58f30:8"]]
- 009f466c ["INT_ADD", "register:40f0:8", ["const:9f466c:8", "const:4:8"]]
- 009f466c ["CALL", null, ["callee:00c590a0:8"]]
+ 009f5618 ["INT_ADD", "register:40f0:8", ["const:9f5618:8", "const:4:8"]]
+ 009f5618 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-66a1580831eeeef2f35a3b15b4f5319e"></a>

### [`009f46c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f46c0.md) → [`009f566c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f5/009f566c.md) FUN_009f566c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`009f0d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f0/009f0d88.md) [`009f1ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f1/009f1ea0.md) [`009f424c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f424c.md) · 呼出先 5件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`009f4334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f4334.md) [`009f47fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f47fc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 3件 [`009f1d34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f1/009f1d34.md) [`009f2e4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f2/009f2e4c.md) [`009f51f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f5/009f51f8.md) · 呼出先 5件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`009f52e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f5/009f52e0.md) [`009f57a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f5/009f57a8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009f46fc ["INT_ADD", "register:40f0:8", ["const:9f46fc:8", "const:4:8"]]
- 009f46fc ["CALL", null, ["callee:009f57a8:8"]]
+ 009f56a8 ["INT_ADD", "register:40f0:8", ["const:9f56a8:8", "const:4:8"]]
+ 009f56a8 ["CALL", null, ["callee:009f57a8:8"]]
- 009f471c ["INT_ADD", "register:40f0:8", ["const:9f471c:8", "const:4:8"]]
- 009f471c ["CALL", null, ["callee:00c58f30:8"]]
+ 009f56c8 ["INT_ADD", "register:40f0:8", ["const:9f56c8:8", "const:4:8"]]
+ 009f56c8 ["CALL", null, ["callee:00c58f30:8"]]
- 009f4754 ["INT_ADD", "register:40f0:8", ["const:9f4754:8", "const:4:8"]]
- 009f4754 ["CALL", null, ["callee:009f52e0:8"]]
+ 009f5700 ["INT_ADD", "register:40f0:8", ["const:9f5700:8", "const:4:8"]]
+ 009f5700 ["CALL", null, ["callee:009f52e0:8"]]
~~~


<a id="compare-481af5fb6ef1393673bc918358f54f12"></a>

### [`009f49a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f49a4.md) → [`009f5950`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f5/009f5950.md) FUN_009f5950

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009f1254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f1/009f1254.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`009f3cac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3cac.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009f2200`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f2/009f2200.md) · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`009f4c58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f4c58.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009f4a30 ["INT_ADD", "register:40f0:8", ["const:9f4a30:8", "const:4:8"]]
- 009f4a30 ["CALL", null, ["callee:00c58f30:8"]]
+ 009f59dc ["INT_ADD", "register:40f0:8", ["const:9f59dc:8", "const:4:8"]]
+ 009f59dc ["CALL", null, ["callee:00c58f30:8"]]
- 009f4ae8 ["INT_ADD", "register:40f0:8", ["const:9f4ae8:8", "const:4:8"]]
- 009f4ae8 ["CALL", null, ["callee:00c58f50:8"]]
+ 009f5a94 ["INT_ADD", "register:40f0:8", ["const:9f5a94:8", "const:4:8"]]
+ 009f5a94 ["CALL", null, ["callee:00c58f50:8"]]
- 009f4b04 ["INT_ADD", "register:40f0:8", ["const:9f4b04:8", "const:4:8"]]
- 009f4b04 ["CALL", null, ["callee:00c58f50:8"]]
+ 009f5ab0 ["INT_ADD", "register:40f0:8", ["const:9f5ab0:8", "const:4:8"]]
+ 009f5ab0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-6a6d615aa6ee74755e54d5462b33d768"></a>

### [`009f9d64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f9/009f9d64.md) → [`009fad10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fa/009fad10.md) FUN_009fad10

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ff460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ff/009ff460.md) · 呼出先 6件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`009df918`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009df/009df918.md) [`009e2fe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e2/009e2fe8.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`00a0040c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a00/00a0040c.md) · 呼出先 6件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`009e08c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e0/009e08c4.md) [`009e3f94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e3/009e3f94.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009f9d90 ["INT_ADD", "register:40f0:8", ["const:9f9d90:8", "const:4:8"]]
- 009f9d90 ["CALL", null, ["callee:008524fc:8"]]
+ 009fad3c ["INT_ADD", "register:40f0:8", ["const:9fad3c:8", "const:4:8"]]
+ 009fad3c ["CALL", null, ["callee:008524fc:8"]]
- 009f9da0 ["INT_ADD", "register:40f0:8", ["const:9f9da0:8", "const:4:8"]]
- 009f9da0 ["CALL", null, ["callee:009e3f94:8"]]
+ 009fad4c ["INT_ADD", "register:40f0:8", ["const:9fad4c:8", "const:4:8"]]
+ 009fad4c ["CALL", null, ["callee:009e3f94:8"]]
- 009f9dbc ["COPY", "register:0:8", ["register:4040:8"]]
- 009f9dbc ["INT_ADD", "register:40f0:8", ["const:9f9dbc:8", "const:4:8"]]
- 009f9dbc ["CALLIND", null, ["register:0:8"]]
+ 009fad68 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009fad68 ["INT_ADD", "register:40f0:8", ["const:9fad68:8", "const:4:8"]]
+ 009fad68 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-11df82d916df537e9ed3883176ceec5c"></a>

### [`009fcd58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fc/009fcd58.md) → [`009fdd04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fd/009fdd04.md) FUN_009fdd04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009fcd94 ["COPY", "register:0:8", ["register:4040:8"]]
- 009fcd94 ["INT_ADD", "register:40f0:8", ["const:9fcd94:8", "const:4:8"]]
- 009fcd94 ["CALLIND", null, ["register:0:8"]]
+ 009fdd40 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009fdd40 ["INT_ADD", "register:40f0:8", ["const:9fdd40:8", "const:4:8"]]
+ 009fdd40 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-58a5e41b8c3593f357a9a11c49f04aeb"></a>

### [`009fce4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fc/009fce4c.md) → [`009fddf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fd/009fddf8.md) FUN_009fddf8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009f6268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f6/009f6268.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`009fcf68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fc/009fcf68.md) [`009fd110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fd110.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`009f7214`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f7/009f7214.md) · 呼出先 4件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`009fdf14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fd/009fdf14.md) [`009fe0bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fe/009fe0bc.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009fcea8 ["INT_ADD", "register:40f0:8", ["const:9fcea8:8", "const:4:8"]]
- 009fcea8 ["CALL", null, ["callee:009fdf14:8"]]
+ 009fde54 ["INT_ADD", "register:40f0:8", ["const:9fde54:8", "const:4:8"]]
+ 009fde54 ["CALL", null, ["callee:009fdf14:8"]]
- 009fced0 ["INT_ADD", "register:40f0:8", ["const:9fced0:8", "const:4:8"]]
- 009fced0 ["CALL", null, ["callee:009fe0bc:8"]]
+ 009fde7c ["INT_ADD", "register:40f0:8", ["const:9fde7c:8", "const:4:8"]]
+ 009fde7c ["CALL", null, ["callee:009fe0bc:8"]]
- 009fcefc ["INT_ADD", "register:40f0:8", ["const:9fcefc:8", "const:4:8"]]
- 009fcefc ["CALL", null, ["callee:0043bf04:8"]]
+ 009fdea8 ["INT_ADD", "register:40f0:8", ["const:9fdea8:8", "const:4:8"]]
+ 009fdea8 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-0e642991a1d82877992759178d0c62bb"></a>

### [`009fd110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fd110.md) → [`009fe0bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fe/009fe0bc.md) FUN_009fe0bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009fce4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fc/009fce4c.md) · 呼出先 3件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`009fddf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fd/009fddf8.md) · 呼出先 3件 [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009fd134 ["INT_ADD", "register:40f0:8", ["const:9fd134:8", "const:4:8"]]
- 009fd134 ["CALL", null, ["callee:00c58f30:8"]]
+ 009fe0e0 ["INT_ADD", "register:40f0:8", ["const:9fe0e0:8", "const:4:8"]]
+ 009fe0e0 ["CALL", null, ["callee:00c58f30:8"]]
- 009fd16c ["INT_ADD", "register:40f0:8", ["const:9fd16c:8", "const:4:8"]]
- 009fd16c ["CALL", null, ["callee:00c58f30:8"]]
+ 009fe118 ["INT_ADD", "register:40f0:8", ["const:9fe118:8", "const:4:8"]]
+ 009fe118 ["CALL", null, ["callee:00c58f30:8"]]
- 009fd184 ["INT_ADD", "register:40f0:8", ["const:9fd184:8", "const:4:8"]]
- 009fd184 ["CALL", null, ["callee:00c590a0:8"]]
+ 009fe130 ["INT_ADD", "register:40f0:8", ["const:9fe130:8", "const:4:8"]]
+ 009fe130 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-b13fd6586634d93b7b4a5bc30d1df2ae"></a>

### [`009fd218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fd218.md) → [`009fe1c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fe/009fe1c4.md) FUN_009fe1c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b79a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b79a0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b894c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b894c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009fd230 ["INT_ADD", "register:40f0:8", ["const:9fd230:8", "const:4:8"]]
- 009fd230 ["CALL", null, ["callee:008524fc:8"]]
+ 009fe1dc ["INT_ADD", "register:40f0:8", ["const:9fe1dc:8", "const:4:8"]]
+ 009fe1dc ["CALL", null, ["callee:008524fc:8"]]
- 009fd240 ["INT_ADD", "register:40f0:8", ["const:9fd240:8", "const:4:8"]]
- 009fd240 ["CALL", null, ["callee:008b894c:8"]]
+ 009fe1ec ["INT_ADD", "register:40f0:8", ["const:9fe1ec:8", "const:4:8"]]
+ 009fe1ec ["CALL", null, ["callee:008b894c:8"]]
- 009fd244 ["INT_ADD", "register:40f0:8", ["const:9fd244:8", "const:4:8"]]
- 009fd244 ["CALL", null, ["callee:008524fc:8"]]
+ 009fe1f0 ["INT_ADD", "register:40f0:8", ["const:9fe1f0:8", "const:4:8"]]
+ 009fe1f0 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-d01fbd67f7810bb6a8d33f39bce13c51"></a>

### [`009fdd20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdd20.md) → [`009feccc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fe/009feccc.md) FUN_009feccc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`009f931c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f9/009f931c.md) [`009fdd20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdd20.md) [`009fdfe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdfe8.md) · 呼出先 4件 [`009fdd20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdd20.md) [`009fdfe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdfe8.md) [`009fe260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fe260.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 3件 [`009fa2c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fa/009fa2c8.md) [`009feccc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fe/009feccc.md) [`009fef94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fe/009fef94.md) · 呼出先 4件 [`009feccc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fe/009feccc.md) [`009fef94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fe/009fef94.md) [`009ff20c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ff/009ff20c.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009fde8c ["INT_ADD", "register:40f0:8", ["const:9fde8c:8", "const:4:8"]]
- 009fde8c ["CALL", null, ["local:b0:8"]]
+ 009fee38 ["INT_ADD", "register:40f0:8", ["const:9fee38:8", "const:4:8"]]
+ 009fee38 ["CALL", null, ["local:b0:8"]]
- 009fdeac ["INT_ADD", "register:40f0:8", ["const:9fdeac:8", "const:4:8"]]
- 009fdeac ["CALL", null, ["local:b0:8"]]
+ 009fee58 ["INT_ADD", "register:40f0:8", ["const:9fee58:8", "const:4:8"]]
+ 009fee58 ["CALL", null, ["local:b0:8"]]
- 009fdf08 ["INT_ADD", "register:40f0:8", ["const:9fdf08:8", "const:4:8"]]
- 009fdf08 ["CALL", null, ["callee:009fef94:8"]]
+ 009feeb4 ["INT_ADD", "register:40f0:8", ["const:9feeb4:8", "const:4:8"]]
+ 009feeb4 ["CALL", null, ["callee:009fef94:8"]]
~~~


<a id="compare-3cd7ef5c1eb1c9febaaaa0a73843a24a"></a>

### [`009fdfe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdfe8.md) → [`009fef94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fe/009fef94.md) FUN_009fef94

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009fdd20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdd20.md) · 呼出先 1件 [`009fdd20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdd20.md)
- 新版 呼出元 1件 [`009feccc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fe/009feccc.md) · 呼出先 1件 [`009feccc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fe/009feccc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009fe178 ["INT_ADD", "register:40f0:8", ["const:9fe178:8", "const:4:8"]]
- 009fe178 ["CALL", null, ["callee:009feccc:8"]]
+ 009ff124 ["INT_ADD", "register:40f0:8", ["const:9ff124:8", "const:4:8"]]
+ 009ff124 ["CALL", null, ["callee:009feccc:8"]]
- 009fe190 ["INT_ADD", "register:40f0:8", ["const:9fe190:8", "const:4:8"]]
- 009fe190 ["CALL", null, ["callee:009feccc:8"]]
+ 009ff13c ["INT_ADD", "register:40f0:8", ["const:9ff13c:8", "const:4:8"]]
+ 009ff13c ["CALL", null, ["callee:009feccc:8"]]
~~~


<a id="compare-98ba1b620c494684c41ccd0c230b667a"></a>

### [`009fe260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fe260.md) → [`009ff20c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ff/009ff20c.md) FUN_009ff20c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`009fdd20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdd20.md) [`009fe260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fe260.md) · 呼出先 4件 [`009fe260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fe260.md) [`009fe684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fe684.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 2件 [`009feccc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fe/009feccc.md) [`009ff20c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ff/009ff20c.md) · 呼出先 4件 [`009ff20c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ff/009ff20c.md) [`009ff630`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ff/009ff630.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009fe3f4 ["INT_ADD", "register:40f0:8", ["const:9fe3f4:8", "const:4:8"]]
- 009fe3f4 ["CALL", null, ["callee:009ff630:8"]]
+ 009ff3a0 ["INT_ADD", "register:40f0:8", ["const:9ff3a0:8", "const:4:8"]]
+ 009ff3a0 ["CALL", null, ["callee:009ff630:8"]]
- 009fe434 ["INT_ADD", "register:40f0:8", ["const:9fe434:8", "const:4:8"]]
- 009fe434 ["CALL", null, ["local:b0:8"]]
+ 009ff3e0 ["INT_ADD", "register:40f0:8", ["const:9ff3e0:8", "const:4:8"]]
+ 009ff3e0 ["CALL", null, ["local:b0:8"]]
- 009fe470 ["INT_ADD", "register:40f0:8", ["const:9fe470:8", "const:4:8"]]
- 009fe470 ["CALL", null, ["local:b0:8"]]
+ 009ff41c ["INT_ADD", "register:40f0:8", ["const:9ff41c:8", "const:4:8"]]
+ 009ff41c ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-671faed252aa0883f5b0bd8803e31fc8"></a>

### [`009fe684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fe684.md) → [`009ff630`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ff/009ff630.md) FUN_009ff630

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`009fe260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fe260.md) [`009fede8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fede8.md) · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 2件 [`009ff20c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ff/009ff20c.md) [`009ffd94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ff/009ffd94.md) · 呼出先 2件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009fe768 ["INT_ADD", "register:40f0:8", ["const:9fe768:8", "const:4:8"]]
- 009fe768 ["CALL", null, ["callee:00c58fe0:8"]]
+ 009ff714 ["INT_ADD", "register:40f0:8", ["const:9ff714:8", "const:4:8"]]
+ 009ff714 ["CALL", null, ["callee:00c58fe0:8"]]
- 009fe7c0 ["INT_ADD", "register:40f0:8", ["const:9fe7c0:8", "const:4:8"]]
- 009fe7c0 ["CALL", null, ["callee:00c58fe0:8"]]
+ 009ff76c ["INT_ADD", "register:40f0:8", ["const:9ff76c:8", "const:4:8"]]
+ 009ff76c ["CALL", null, ["callee:00c58fe0:8"]]
- 009fe8a4 ["INT_ADD", "register:40f0:8", ["const:9fe8a4:8", "const:4:8"]]
- 009fe8a4 ["CALL", null, ["callee:00c58f80:8"]]
+ 009ff850 ["INT_ADD", "register:40f0:8", ["const:9ff850:8", "const:4:8"]]
+ 009ff850 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-4702afe8cd295cf846c4a04f5e506f2a"></a>

### [`009fe8a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fe8a8.md) → [`009ff854`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ff/009ff854.md) FUN_009ff854

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`009f9870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f9/009f9870.md) [`009fe8a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fe8a8.md) [`009feb70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009feb70.md) · 呼出先 4件 [`009fe8a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fe8a8.md) [`009feb70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009feb70.md) [`009fede8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fede8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 3件 [`009fa81c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fa/009fa81c.md) [`009ff854`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ff/009ff854.md) [`009ffb1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ff/009ffb1c.md) · 呼出先 4件 [`009ff854`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ff/009ff854.md) [`009ffb1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ff/009ffb1c.md) [`009ffd94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ff/009ffd94.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009fea14 ["INT_ADD", "register:40f0:8", ["const:9fea14:8", "const:4:8"]]
- 009fea14 ["CALL", null, ["local:b0:8"]]
+ 009ff9c0 ["INT_ADD", "register:40f0:8", ["const:9ff9c0:8", "const:4:8"]]
+ 009ff9c0 ["CALL", null, ["local:b0:8"]]
- 009fea34 ["INT_ADD", "register:40f0:8", ["const:9fea34:8", "const:4:8"]]
- 009fea34 ["CALL", null, ["local:b0:8"]]
+ 009ff9e0 ["INT_ADD", "register:40f0:8", ["const:9ff9e0:8", "const:4:8"]]
+ 009ff9e0 ["CALL", null, ["local:b0:8"]]
- 009fea90 ["INT_ADD", "register:40f0:8", ["const:9fea90:8", "const:4:8"]]
- 009fea90 ["CALL", null, ["callee:009ffb1c:8"]]
+ 009ffa3c ["INT_ADD", "register:40f0:8", ["const:9ffa3c:8", "const:4:8"]]
+ 009ffa3c ["CALL", null, ["callee:009ffb1c:8"]]
~~~


<a id="compare-67e50ff0715a30e3156c3e088782195b"></a>

### [`009feb70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009feb70.md) → [`009ffb1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ff/009ffb1c.md) FUN_009ffb1c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009fe8a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fe8a8.md) · 呼出先 1件 [`009fe8a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fe8a8.md)
- 新版 呼出元 1件 [`009ff854`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ff/009ff854.md) · 呼出先 1件 [`009ff854`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ff/009ff854.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009fed00 ["INT_ADD", "register:40f0:8", ["const:9fed00:8", "const:4:8"]]
- 009fed00 ["CALL", null, ["callee:009ff854:8"]]
+ 009ffcac ["INT_ADD", "register:40f0:8", ["const:9ffcac:8", "const:4:8"]]
+ 009ffcac ["CALL", null, ["callee:009ff854:8"]]
- 009fed18 ["INT_ADD", "register:40f0:8", ["const:9fed18:8", "const:4:8"]]
- 009fed18 ["CALL", null, ["callee:009ff854:8"]]
+ 009ffcc4 ["INT_ADD", "register:40f0:8", ["const:9ffcc4:8", "const:4:8"]]
+ 009ffcc4 ["CALL", null, ["callee:009ff854:8"]]
~~~


<a id="compare-8223bfae84dd74750c18dab2389fa5da"></a>

### [`009fede8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fede8.md) → [`009ffd94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ff/009ffd94.md) FUN_009ffd94

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`009fe8a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fe8a8.md) [`009fede8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fede8.md) · 呼出先 4件 [`009fe684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fe684.md) [`009fede8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fede8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 2件 [`009ff854`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ff/009ff854.md) [`009ffd94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ff/009ffd94.md) · 呼出先 4件 [`009ff630`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ff/009ff630.md) [`009ffd94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ff/009ffd94.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009fef7c ["INT_ADD", "register:40f0:8", ["const:9fef7c:8", "const:4:8"]]
- 009fef7c ["CALL", null, ["callee:009ff630:8"]]
+ 009fff28 ["INT_ADD", "register:40f0:8", ["const:9fff28:8", "const:4:8"]]
+ 009fff28 ["CALL", null, ["callee:009ff630:8"]]
- 009fefbc ["INT_ADD", "register:40f0:8", ["const:9fefbc:8", "const:4:8"]]
- 009fefbc ["CALL", null, ["local:b0:8"]]
+ 009fff68 ["INT_ADD", "register:40f0:8", ["const:9fff68:8", "const:4:8"]]
+ 009fff68 ["CALL", null, ["local:b0:8"]]
- 009feff8 ["INT_ADD", "register:40f0:8", ["const:9feff8:8", "const:4:8"]]
- 009feff8 ["CALL", null, ["local:b0:8"]]
+ 009fffa4 ["INT_ADD", "register:40f0:8", ["const:9fffa4:8", "const:4:8"]]
+ 009fffa4 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-9e5cc885f3efba70e0b37eb56fbe7a8b"></a>

### [`009ff410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ff/009ff410.md) → [`00a003bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a00/00a003bc.md) FUN_00a003bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009f9f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f9/009f9f34.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009faee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fa/009faee0.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ff44c ["COPY", "register:0:8", ["register:4040:8"]]
- 009ff44c ["INT_ADD", "register:40f0:8", ["const:9ff44c:8", "const:4:8"]]
- 009ff44c ["CALLIND", null, ["register:0:8"]]
+ 00a003f8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a003f8 ["INT_ADD", "register:40f0:8", ["const:a003f8:8", "const:4:8"]]
+ 00a003f8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a95bc8f352bdde69befd9ebe573194fd"></a>

### [`009ffff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ff/009ffff8.md) → [`00a00fa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a00/00a00fa4.md) FUN_00a00fa4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ff460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ff/009ff460.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00a0040c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a00/00a0040c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a00034 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a00034 ["INT_ADD", "register:40f0:8", ["const:a00034:8", "const:4:8"]]
- 00a00034 ["CALLIND", null, ["register:0:8"]]
+ 00a00fe0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a00fe0 ["INT_ADD", "register:40f0:8", ["const:a00fe0:8", "const:4:8"]]
+ 00a00fe0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-41f837ddb7b3e6a05c57b6dd18fdc217"></a>

### [`00a001f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a00/00a001f4.md) → [`00a011a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a01/00a011a0.md) FUN_00a011a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b92e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92e8.md) [`008b92f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92f0.md) [`00a835f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a835f8.md)
- 新版 呼出元 0件  · 呼出先 4件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba294.md) [`008ba29c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba29c.md) [`00a845ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a84/00a845ec.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a00218 ["INT_ADD", "register:40f0:8", ["const:a00218:8", "const:4:8"]]
- 00a00218 ["CALL", null, ["callee:008ba294:8"]]
+ 00a011c4 ["INT_ADD", "register:40f0:8", ["const:a011c4:8", "const:4:8"]]
+ 00a011c4 ["CALL", null, ["callee:008ba294:8"]]
- 00a00228 ["INT_ADD", "register:40f0:8", ["const:a00228:8", "const:4:8"]]
- 00a00228 ["CALL", null, ["callee:008ba294:8"]]
+ 00a011d4 ["INT_ADD", "register:40f0:8", ["const:a011d4:8", "const:4:8"]]
+ 00a011d4 ["CALL", null, ["callee:008ba294:8"]]
- 00a00238 ["INT_ADD", "register:40f0:8", ["const:a00238:8", "const:4:8"]]
- 00a00238 ["CALL", null, ["callee:008ba29c:8"]]
+ 00a011e4 ["INT_ADD", "register:40f0:8", ["const:a011e4:8", "const:4:8"]]
+ 00a011e4 ["CALL", null, ["callee:008ba29c:8"]]
~~~


<a id="compare-9a6aa4ba1354bf9f745a6311b3ac914d"></a>

### [`00a02b38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a02b38.md) → [`00a03ae4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a03/00a03ae4.md) FUN_00a03ae4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a02b74 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a02b74 ["INT_ADD", "register:40f0:8", ["const:a02b74:8", "const:4:8"]]
- 00a02b74 ["CALLIND", null, ["register:0:8"]]
+ 00a03b20 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a03b20 ["INT_ADD", "register:40f0:8", ["const:a03b20:8", "const:4:8"]]
+ 00a03b20 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-90cc3778b51069dbdd9349aa7b244f38"></a>

### [`00a02bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a02bbc.md) → [`00a03b68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a03/00a03b68.md) FUN_00a03b68

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009fb4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fb/009fb4a0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009fc44c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fc/009fc44c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a02bf8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a02bf8 ["INT_ADD", "register:40f0:8", ["const:a02bf8:8", "const:4:8"]]
- 00a02bf8 ["CALLIND", null, ["register:0:8"]]
+ 00a03ba4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a03ba4 ["INT_ADD", "register:40f0:8", ["const:a03ba4:8", "const:4:8"]]
+ 00a03ba4 ["CALLIND", null, ["register:0:8"]]
- 00a02c28 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a02c28 ["INT_ADD", "register:40f0:8", ["const:a02c28:8", "const:4:8"]]
- 00a02c28 ["CALLIND", null, ["register:0:8"]]
+ 00a03bd4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a03bd4 ["INT_ADD", "register:40f0:8", ["const:a03bd4:8", "const:4:8"]]
+ 00a03bd4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6b60781d33c498bacb36704398825042"></a>

### [`00a039c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a039c8.md) → [`00a04974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a04/00a04974.md) FUN_00a04974

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a02c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a02c3c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00a03be8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a03/00a03be8.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a03a04 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a03a04 ["INT_ADD", "register:40f0:8", ["const:a03a04:8", "const:4:8"]]
- 00a03a04 ["CALLIND", null, ["register:0:8"]]
+ 00a049b0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a049b0 ["INT_ADD", "register:40f0:8", ["const:a049b0:8", "const:4:8"]]
+ 00a049b0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-de2fa6b9cef4cc19525b10a3a5ea5119"></a>

### [`00a03d08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a03d08.md) → [`00a04cb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a04/00a04cb4.md) FUN_00a04cb4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a02c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a02c3c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00a03be8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a03/00a03be8.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a03d44 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a03d44 ["INT_ADD", "register:40f0:8", ["const:a03d44:8", "const:4:8"]]
- 00a03d44 ["CALLIND", null, ["register:0:8"]]
+ 00a04cf0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a04cf0 ["INT_ADD", "register:40f0:8", ["const:a04cf0:8", "const:4:8"]]
+ 00a04cf0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d4c30ca3af9b6406b7428e0d4e11f1cf"></a>

### [`00a04e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a04/00a04e80.md) → [`00a05e2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a05/00a05e2c.md) FUN_00a05e2c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`008b97f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b97f8.md)
- 新版 呼出元 0件  · 呼出先 1件 [`008ba7a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba7a4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a04ea4 ["INT_ADD", "register:40f0:8", ["const:a04ea4:8", "const:4:8"]]
- 00a04ea4 ["CALL", null, ["callee:008ba7a4:8"]]
+ 00a05e50 ["INT_ADD", "register:40f0:8", ["const:a05e50:8", "const:4:8"]]
+ 00a05e50 ["CALL", null, ["callee:008ba7a4:8"]]
~~~


<a id="compare-9733c5e271450933fee1c327dc1bd02e"></a>

### [`00a062c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a062c8.md) → [`00a07274`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07274.md) FUN_00a07274

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 8件 [`0059769c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/0059769c.md) [`005977b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/005977b8.md) [`00597a8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597a8c.md) [`00597a98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597a98.md) [`00597aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597aa4.md)
- 新版 呼出元 1件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) · 呼出先 8件 [`005979bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/005979bc.md) [`00597ad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597ad8.md) [`00597dac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597dac.md) [`00597db8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597db8.md) [`00597dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597dc4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a062f0 ["INT_ADD", "register:40f0:8", ["const:a062f0:8", "const:4:8"]]
- 00a062f0 ["CALL", null, ["callee:00a073d4:8"]]
+ 00a0729c ["INT_ADD", "register:40f0:8", ["const:a0729c:8", "const:4:8"]]
+ 00a0729c ["CALL", null, ["callee:00a073d4:8"]]
- 00a0635c ["INT_ADD", "register:40f0:8", ["const:a0635c:8", "const:4:8"]]
- 00a0635c ["CALL", null, ["callee:00597ad8:8"]]
+ 00a07308 ["INT_ADD", "register:40f0:8", ["const:a07308:8", "const:4:8"]]
+ 00a07308 ["CALL", null, ["callee:00597ad8:8"]]
- 00a06364 ["INT_ADD", "register:40f0:8", ["const:a06364:8", "const:4:8"]]
- 00a06364 ["CALL", null, ["callee:005979bc:8"]]
+ 00a07310 ["INT_ADD", "register:40f0:8", ["const:a07310:8", "const:4:8"]]
+ 00a07310 ["CALL", null, ["callee:005979bc:8"]]
~~~


<a id="compare-9e20e4cc52d6c058f35f8a6fac8a0b6a"></a>

### [`00a06428`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06428.md) → [`00a073d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a073d4.md) FUN_00a073d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`00a062c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a062c8.md) · 呼出先 9件 [`0059769c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/0059769c.md) [`005977b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/005977b8.md) [`00597a8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597a8c.md) [`00597a98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597a98.md) [`00597aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597aa4.md)
- 新版 呼出元 2件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`00a07274`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07274.md) · 呼出先 9件 [`005979bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/005979bc.md) [`00597ad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597ad8.md) [`00597dac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597dac.md) [`00597db8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597db8.md) [`00597dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597dc4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a0644c ["INT_ADD", "register:40f0:8", ["const:a0644c:8", "const:4:8"]]
- 00a0644c ["CALL", null, ["callee:008524fc:8"]]
+ 00a073f8 ["INT_ADD", "register:40f0:8", ["const:a073f8:8", "const:4:8"]]
+ 00a073f8 ["CALL", null, ["callee:008524fc:8"]]
- 00a06458 ["INT_ADD", "register:40f0:8", ["const:a06458:8", "const:4:8"]]
- 00a06458 ["CALL", null, ["callee:00a881b4:8"]]
+ 00a07404 ["INT_ADD", "register:40f0:8", ["const:a07404:8", "const:4:8"]]
+ 00a07404 ["CALL", null, ["callee:00a881b4:8"]]
- 00a064d0 ["INT_ADD", "register:40f0:8", ["const:a064d0:8", "const:4:8"]]
- 00a064d0 ["CALL", null, ["callee:00597ad8:8"]]
+ 00a0747c ["INT_ADD", "register:40f0:8", ["const:a0747c:8", "const:4:8"]]
+ 00a0747c ["CALL", null, ["callee:00597ad8:8"]]
~~~


<a id="compare-e994cb71d1fce7ea39ded52730b1e47f"></a>

### [`00a06564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06564.md) → [`00a07510`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07510.md) FUN_00a07510

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007efd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efd00.md) · 呼出先 4件 [`0071c4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071c/0071c4b8.md) [`00732cdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00732/00732cdc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008d3600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d3/008d3600.md)
- 新版 呼出元 1件 [`007f0c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f0/007f0c64.md) · 呼出先 4件 [`0071c868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071c/0071c868.md) [`0073308c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00733/0073308c.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008d45ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d4/008d45ac.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a06574 ["INT_ADD", "register:40f0:8", ["const:a06574:8", "const:4:8"]]
- 00a06574 ["CALL", null, ["callee:008524fc:8"]]
+ 00a07520 ["INT_ADD", "register:40f0:8", ["const:a07520:8", "const:4:8"]]
+ 00a07520 ["CALL", null, ["callee:008524fc:8"]]
- 00a06584 ["INT_ADD", "register:40f0:8", ["const:a06584:8", "const:4:8"]]
- 00a06584 ["CALL", null, ["callee:0073308c:8"]]
+ 00a07530 ["INT_ADD", "register:40f0:8", ["const:a07530:8", "const:4:8"]]
+ 00a07530 ["CALL", null, ["callee:0073308c:8"]]
- 00a0658c ["INT_ADD", "register:40f0:8", ["const:a0658c:8", "const:4:8"]]
- 00a0658c ["CALL", null, ["callee:008524fc:8"]]
+ 00a07538 ["INT_ADD", "register:40f0:8", ["const:a07538:8", "const:4:8"]]
+ 00a07538 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-9a72e32295cec2f65f908635ad959d4c"></a>

### [`00a06630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06630.md) → [`00a075dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a075dc.md) FUN_00a075dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 2件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008d3600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d3/008d3600.md)
- 新版 呼出元 1件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) · 呼出先 2件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008d45ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d4/008d45ac.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a06640 ["INT_ADD", "register:40f0:8", ["const:a06640:8", "const:4:8"]]
- 00a06640 ["CALL", null, ["callee:008524fc:8"]]
+ 00a075ec ["INT_ADD", "register:40f0:8", ["const:a075ec:8", "const:4:8"]]
+ 00a075ec ["CALL", null, ["callee:008524fc:8"]]
- 00a0664c ["INT_ADD", "register:40f0:8", ["const:a0664c:8", "const:4:8"]]
- 00a0664c ["CALL", null, ["callee:008d45ac:8"]]
+ 00a075f8 ["INT_ADD", "register:40f0:8", ["const:a075f8:8", "const:4:8"]]
+ 00a075f8 ["CALL", null, ["callee:008d45ac:8"]]
- 00a06660 ["INT_ADD", "register:40f0:8", ["const:a06660:8", "const:4:8"]]
- 00a06660 ["CALL", null, ["callee:008524fc:8"]]
+ 00a0760c ["INT_ADD", "register:40f0:8", ["const:a0760c:8", "const:4:8"]]
+ 00a0760c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-9dc156a897735292c9739c3031a16d75"></a>

### [`00a066c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a066c8.md) → [`00a07674`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07674.md) FUN_00a07674

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`007ef378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007ef378.md) · 呼出先 2件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008d3600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d3/008d3600.md)
- 新版 呼出元 2件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`007f02dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f0/007f02dc.md) · 呼出先 2件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008d45ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d4/008d45ac.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a066d8 ["INT_ADD", "register:40f0:8", ["const:a066d8:8", "const:4:8"]]
- 00a066d8 ["CALL", null, ["callee:008524fc:8"]]
+ 00a07684 ["INT_ADD", "register:40f0:8", ["const:a07684:8", "const:4:8"]]
+ 00a07684 ["CALL", null, ["callee:008524fc:8"]]
- 00a066e4 ["INT_ADD", "register:40f0:8", ["const:a066e4:8", "const:4:8"]]
- 00a066e4 ["CALL", null, ["callee:008d45ac:8"]]
+ 00a07690 ["INT_ADD", "register:40f0:8", ["const:a07690:8", "const:4:8"]]
+ 00a07690 ["CALL", null, ["callee:008d45ac:8"]]
- 00a066f8 ["INT_ADD", "register:40f0:8", ["const:a066f8:8", "const:4:8"]]
- 00a066f8 ["CALL", null, ["callee:008524fc:8"]]
+ 00a076a4 ["INT_ADD", "register:40f0:8", ["const:a076a4:8", "const:4:8"]]
+ 00a076a4 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-a52afe3b3b16d595d5f52cbfe2f0b618"></a>

### [`00a06780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06780.md) → [`00a0772c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a0772c.md) FUN_00a0772c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`007ef378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007ef378.md) · 呼出先 11件 [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) [`00802d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802d44.md) [`00802da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802da4.md) [`00802dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802dd0.md) [`00802ec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802ec4.md)
- 新版 呼出元 2件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`007f02dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f0/007f02dc.md) · 呼出先 11件 [`00801334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/00801334.md) [`00803ca8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803ca8.md) [`00803d08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803d08.md) [`00803d34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803d34.md) [`00803e28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803e28.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a0679c ["INT_ADD", "register:40f0:8", ["const:a0679c:8", "const:4:8"]]
- 00a0679c ["CALL", null, ["callee:008524fc:8"]]
+ 00a07748 ["INT_ADD", "register:40f0:8", ["const:a07748:8", "const:4:8"]]
+ 00a07748 ["CALL", null, ["callee:008524fc:8"]]
- 00a067ac ["INT_ADD", "register:40f0:8", ["const:a067ac:8", "const:4:8"]]
- 00a067ac ["CALL", null, ["callee:00b3f4a0:8"]]
+ 00a07758 ["INT_ADD", "register:40f0:8", ["const:a07758:8", "const:4:8"]]
+ 00a07758 ["CALL", null, ["callee:00b3f4a0:8"]]
- 00a067b4 ["INT_ADD", "register:40f0:8", ["const:a067b4:8", "const:4:8"]]
- 00a067b4 ["CALL", null, ["callee:00803ca8:8"]]
+ 00a07760 ["INT_ADD", "register:40f0:8", ["const:a07760:8", "const:4:8"]]
+ 00a07760 ["CALL", null, ["callee:00803ca8:8"]]
~~~


<a id="compare-97a733aa157a9b8d556ee91b7a5e04fa"></a>

### [`00a06884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06884.md) → [`00a07830`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07830.md) FUN_00a07830

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 2件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b3e4ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3e/00b3e4ac.md)
- 新版 呼出元 2件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`007e00a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007e0/007e00a4.md) · 呼出先 2件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00b3f4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3f/00b3f4a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a0688c ["INT_ADD", "register:40f0:8", ["const:a0688c:8", "const:4:8"]]
- 00a0688c ["CALL", null, ["callee:008524fc:8"]]
+ 00a07838 ["INT_ADD", "register:40f0:8", ["const:a07838:8", "const:4:8"]]
+ 00a07838 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-dd3c953df5bc600e55dc4aeb53cc922b"></a>

### [`00a068a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a068a4.md) → [`00a07850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07850.md) FUN_00a07850

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a86f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a86/00a86f0c.md) · 呼出先 7件 [`00597728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597728.md) [`005977b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/005977b8.md) [`00597a8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597a8c.md) [`00597a98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597a98.md) [`00597aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597aa4.md)
- 新版 呼出元 1件 [`00a87f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a87/00a87f00.md) · 呼出先 7件 [`00597a48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597a48.md) [`00597ad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597ad8.md) [`00597dac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597dac.md) [`00597db8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597db8.md) [`00597dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597dc4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a06934 ["INT_ADD", "register:40f0:8", ["const:a06934:8", "const:4:8"]]
- 00a06934 ["CALL", null, ["callee:00597ad8:8"]]
+ 00a078e0 ["INT_ADD", "register:40f0:8", ["const:a078e0:8", "const:4:8"]]
+ 00a078e0 ["CALL", null, ["callee:00597ad8:8"]]
- 00a0693c ["INT_ADD", "register:40f0:8", ["const:a0693c:8", "const:4:8"]]
- 00a0693c ["CALL", null, ["callee:00597dec:8"]]
+ 00a078e8 ["INT_ADD", "register:40f0:8", ["const:a078e8:8", "const:4:8"]]
+ 00a078e8 ["CALL", null, ["callee:00597dec:8"]]
- 00a06968 ["INT_ADD", "register:40f0:8", ["const:a06968:8", "const:4:8"]]
- 00a06968 ["CALL", null, ["callee:00597a48:8"]]
+ 00a07914 ["INT_ADD", "register:40f0:8", ["const:a07914:8", "const:4:8"]]
+ 00a07914 ["CALL", null, ["callee:00597a48:8"]]
~~~


<a id="compare-7852eade227c1554db104c707ea5c212"></a>

### [`00a069c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a069c4.md) → [`00a07970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07970.md) FUN_00a07970

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 2件 [`00480b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480b78.md) [`00480c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480c28.md)
- 新版 呼出元 1件 [`00a2c310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a2c/00a2c310.md) · 呼出先 2件 [`00480e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480e98.md) [`00480f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480f48.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a069e4 ["INT_ADD", "register:40f0:8", ["const:a069e4:8", "const:4:8"]]
- 00a069e4 ["CALL", null, ["callee:00480f48:8"]]
+ 00a07990 ["INT_ADD", "register:40f0:8", ["const:a07990:8", "const:4:8"]]
+ 00a07990 ["CALL", null, ["callee:00480f48:8"]]
~~~


<a id="compare-e9212d879e57c895908155bd613f286d"></a>

### [`00a069fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a069fc.md) → [`00a079a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a079a8.md) FUN_00a079a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 2件 [`00480158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480158.md) [`00480218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480218.md)
- 新版 呼出元 1件 [`00a271bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a27/00a271bc.md) · 呼出先 2件 [`00480478`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480478.md) [`00480538`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480538.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a06a14 ["INT_ADD", "register:40f0:8", ["const:a06a14:8", "const:4:8"]]
- 00a06a14 ["CALL", null, ["callee:00480538:8"]]
+ 00a079c0 ["INT_ADD", "register:40f0:8", ["const:a079c0:8", "const:4:8"]]
+ 00a079c0 ["CALL", null, ["callee:00480538:8"]]
- 00a06a20 ["INT_ADD", "register:40f0:8", ["const:a06a20:8", "const:4:8"]]
- 00a06a20 ["CALL", null, ["callee:00480478:8"]]
+ 00a079cc ["INT_ADD", "register:40f0:8", ["const:a079cc:8", "const:4:8"]]
+ 00a079cc ["CALL", null, ["callee:00480478:8"]]
~~~


<a id="compare-62e59defface9fd0adedca4cebcbac13"></a>

### [`00a2de30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2d/00a2de30.md) → [`00a2ee24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a2e/00a2ee24.md) FUN_00a2ee24

根拠 `relaxed_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 6件 [`00480bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480bd0.md) [`00480d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480d88.md) [`00480e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480e68.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00691858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00691/00691858.md)
- 新版 呼出元 1件 [`00a2c310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a2c/00a2c310.md) · 呼出先 6件 [`00480ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480ef0.md) [`004810a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/004810a8.md) [`00481188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/00481188.md) [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00691c08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00691/00691c08.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a2de70 ["INT_ADD", "register:40f0:8", ["const:a2de70:8", "const:4:8"]]
- 00a2de70 ["CALL", null, ["callee:00480ef0:8"]]
+ 00a2ee64 ["INT_ADD", "register:40f0:8", ["const:a2ee64:8", "const:4:8"]]
+ 00a2ee64 ["CALL", null, ["callee:00480ef0:8"]]
- 00a2de8c ["INT_ADD", "register:40f0:8", ["const:a2de8c:8", "const:4:8"]]
- 00a2de8c ["CALL", null, ["callee:00480ef0:8"]]
+ 00a2ee80 ["INT_ADD", "register:40f0:8", ["const:a2ee80:8", "const:4:8"]]
+ 00a2ee80 ["CALL", null, ["callee:00480ef0:8"]]
- 00a2dec4 ["INT_ADD", "register:40f0:8", ["const:a2dec4:8", "const:4:8"]]
- 00a2dec4 ["CALL", null, ["callee:00480ef0:8"]]
+ 00a2eeb8 ["INT_ADD", "register:40f0:8", ["const:a2eeb8:8", "const:4:8"]]
+ 00a2eeb8 ["CALL", null, ["callee:00480ef0:8"]]
~~~


<a id="compare-87e5f55a3039c784aada0c23f50cf53b"></a>

### [`00a30484`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a30/00a30484.md) → [`00a31478`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a31/00a31478.md) FUN_00a31478

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00895a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00895/00895a28.md) [`0089bce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089bce4.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`008969d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00896/008969d4.md) [`0089cc90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089c/0089cc90.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a3048c ["INT_ADD", "register:40f0:8", ["const:a3048c:8", "const:4:8"]]
- 00a3048c ["CALL", null, ["callee:008524fc:8"]]
+ 00a31480 ["INT_ADD", "register:40f0:8", ["const:a31480:8", "const:4:8"]]
+ 00a31480 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-843f2bbcfd0619e288ddf79bb78e6b00"></a>

### [`00a31b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a31/00a31b70.md) → [`00a32b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a32/00a32b64.md) FUN_00a32b64

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 11件 [`005e0ee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0ee8.md) [`00605294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/00605294.md) [`00626a74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00626/00626a74.md) [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md)
- 新版 呼出元 11件 [`005e1298`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e1/005e1298.md) [`00605644`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00605/00605644.md) [`00626e24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00626/00626e24.md) [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`007106e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) · 呼出先 1件 [`00803b14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803b14.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a31b84 ["INT_ADD", "register:40f0:8", ["const:a31b84:8", "const:4:8"]]
- 00a31b84 ["CALL", null, ["callee:00803b14:8"]]
+ 00a32b78 ["INT_ADD", "register:40f0:8", ["const:a32b78:8", "const:4:8"]]
+ 00a32b78 ["CALL", null, ["callee:00803b14:8"]]
~~~


<a id="compare-9e7fa1b705c6c32b5f7e46da98fd1b19"></a>

### [`00a31bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a31/00a31bcc.md) → [`00a32bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a32/00a32bc0.md) FUN_00a32bc0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007ca0c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ca/007ca0c4.md) [`00a9ee5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9e/00a9ee5c.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`007cb028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cb/007cb028.md) [`00a9fe50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9f/00a9fe50.md) · 呼出先 3件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00803b14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803b14.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a31bfc ["INT_ADD", "register:40f0:8", ["const:a31bfc:8", "const:4:8"]]
- 00a31bfc ["CALL", null, ["callee:00803b14:8"]]
+ 00a32bf0 ["INT_ADD", "register:40f0:8", ["const:a32bf0:8", "const:4:8"]]
+ 00a32bf0 ["CALL", null, ["callee:00803b14:8"]]
- 00a31c80 ["INT_ADD", "register:40f0:8", ["const:a31c80:8", "const:4:8"]]
- 00a31c80 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a32c74 ["INT_ADD", "register:40f0:8", ["const:a32c74:8", "const:4:8"]]
+ 00a32c74 ["CALL", null, ["callee:00c58f30:8"]]
- 00a31cd4 ["INT_ADD", "register:40f0:8", ["const:a31cd4:8", "const:4:8"]]
- 00a31cd4 ["CALL", null, ["callee:0043bf04:8"]]
+ 00a32cc8 ["INT_ADD", "register:40f0:8", ["const:a32cc8:8", "const:4:8"]]
+ 00a32cc8 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-db04aa9003924ef13edce4c1e4b14141"></a>

### [`00a31fa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a31/00a31fa8.md) → [`00a32f9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a32/00a32f9c.md) FUN_00a32f9c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00a31d04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a31/00a31d04.md)
- 新版 呼出元 3件 [`0070ee64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070ee64.md) [`007106e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00710/007106e0.md) [`00711df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00711/00711df8.md) · 呼出先 1件 [`00a32cf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a32/00a32cf8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a31fb8 ["INT_ADD", "register:40f0:8", ["const:a31fb8:8", "const:4:8"]]
- 00a31fb8 ["CALL", null, ["callee:00a32cf8:8"]]
+ 00a32fac ["INT_ADD", "register:40f0:8", ["const:a32fac:8", "const:4:8"]]
+ 00a32fac ["CALL", null, ["callee:00a32cf8:8"]]
~~~


<a id="compare-ee64325549792a49be2930754a3b6700"></a>

### [`00a31fec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a31/00a31fec.md) → [`00a32fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a32/00a32fe0.md) FUN_00a32fe0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 1件 [`00480338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480338.md)
- 新版 呼出元 1件 [`00a271bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a27/00a271bc.md) · 呼出先 1件 [`00480658`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480658.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a32000 ["INT_ADD", "register:40f0:8", ["const:a32000:8", "const:4:8"]]
- 00a32000 ["CALL", null, ["callee:00480658:8"]]
+ 00a32ff4 ["INT_ADD", "register:40f0:8", ["const:a32ff4:8", "const:4:8"]]
+ 00a32ff4 ["CALL", null, ["callee:00480658:8"]]
~~~


<a id="compare-658fdeece4247aca205cdbb0a91d1b03"></a>

### [`00a323f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a32/00a323f4.md) → [`00a333e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a33/00a333e8.md) FUN_00a333e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0066ae90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066ae90.md) · 呼出先 2件 [`00719790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00719/00719790.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0066b240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066b/0066b240.md) · 呼出先 2件 [`00719b40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00719/00719b40.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a32454 ["INT_ADD", "register:40f0:8", ["const:a32454:8", "const:4:8"]]
- 00a32454 ["CALL", null, ["callee:00719b40:8"]]
+ 00a33448 ["INT_ADD", "register:40f0:8", ["const:a33448:8", "const:4:8"]]
+ 00a33448 ["CALL", null, ["callee:00719b40:8"]]
- 00a3249c ["INT_ADD", "register:40f0:8", ["const:a3249c:8", "const:4:8"]]
- 00a3249c ["CALL", null, ["callee:00719b40:8"]]
+ 00a33490 ["INT_ADD", "register:40f0:8", ["const:a33490:8", "const:4:8"]]
+ 00a33490 ["CALL", null, ["callee:00719b40:8"]]
- 00a324c8 ["INT_ADD", "register:40f0:8", ["const:a324c8:8", "const:4:8"]]
- 00a324c8 ["CALL", null, ["callee:00c58f80:8"]]
+ 00a334bc ["INT_ADD", "register:40f0:8", ["const:a334bc:8", "const:4:8"]]
+ 00a334bc ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-8c506394f132267dcdc06bc860de889e"></a>

### [`00a324cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a32/00a324cc.md) → [`00a334c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a33/00a334c0.md) FUN_00a334c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) · 呼出先 2件 [`00719790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00719/00719790.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`009d1320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d1/009d1320.md) · 呼出先 2件 [`00719b40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00719/00719b40.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a32524 ["INT_ADD", "register:40f0:8", ["const:a32524:8", "const:4:8"]]
- 00a32524 ["CALL", null, ["callee:00719b40:8"]]
+ 00a33518 ["INT_ADD", "register:40f0:8", ["const:a33518:8", "const:4:8"]]
+ 00a33518 ["CALL", null, ["callee:00719b40:8"]]
- 00a32550 ["INT_ADD", "register:40f0:8", ["const:a32550:8", "const:4:8"]]
- 00a32550 ["CALL", null, ["callee:00c58f80:8"]]
+ 00a33544 ["INT_ADD", "register:40f0:8", ["const:a33544:8", "const:4:8"]]
+ 00a33544 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-51b05f343943b679be30b719442001fb"></a>

### [`00a32de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a32/00a32de8.md) → [`00a33ddc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a33/00a33ddc.md) FUN_00a33ddc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 1件 [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md)
- 新版 呼出元 2件 [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) [`007e00a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007e0/007e00a4.md) · 呼出先 1件 [`00803b14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803b14.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a32e10 ["INT_ADD", "register:40f0:8", ["const:a32e10:8", "const:4:8"]]
- 00a32e10 ["CALL", null, ["callee:00803b14:8"]]
+ 00a33e04 ["INT_ADD", "register:40f0:8", ["const:a33e04:8", "const:4:8"]]
+ 00a33e04 ["CALL", null, ["callee:00803b14:8"]]
~~~


<a id="compare-34ffa1be243dff68c4575f9c1a588f2c"></a>

### [`00a32e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a32/00a32e5c.md) → [`00a33e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a33/00a33e50.md) FUN_00a33e50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 7件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00611ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00611/00611ea0.md) [`007efc08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efc08.md) [`009340cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/009340cc.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 1件 [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md)
- 新版 呼出元 7件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`00612250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00612/00612250.md) [`007f0b6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f0/007f0b6c.md) [`00935078`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00935/00935078.md) [`00a48f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) · 呼出先 1件 [`00803b14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803b14.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a32e70 ["INT_ADD", "register:40f0:8", ["const:a32e70:8", "const:4:8"]]
- 00a32e70 ["CALL", null, ["callee:00803b14:8"]]
+ 00a33e64 ["INT_ADD", "register:40f0:8", ["const:a33e64:8", "const:4:8"]]
+ 00a33e64 ["CALL", null, ["callee:00803b14:8"]]
~~~


<a id="compare-e8104233f046577f85b57084f2f37124"></a>

### [`00a33428`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a33/00a33428.md) → [`00a3441c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a34/00a3441c.md) FUN_00a3441c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 11件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00480158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480158.md) [`00480218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480218.md)
- 新版 呼出元 1件 [`00a271bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a27/00a271bc.md) · 呼出先 11件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00480478`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480478.md) [`00480538`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480538.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a33454 ["INT_ADD", "register:40f0:8", ["const:a33454:8", "const:4:8"]]
- 00a33454 ["CALL", null, ["callee:00480538:8"]]
+ 00a34448 ["INT_ADD", "register:40f0:8", ["const:a34448:8", "const:4:8"]]
+ 00a34448 ["CALL", null, ["callee:00480538:8"]]
- 00a33460 ["INT_ADD", "register:40f0:8", ["const:a33460:8", "const:4:8"]]
- 00a33460 ["CALL", null, ["callee:00480aa4:8"]]
+ 00a34454 ["INT_ADD", "register:40f0:8", ["const:a34454:8", "const:4:8"]]
+ 00a34454 ["CALL", null, ["callee:00480aa4:8"]]
- 00a3346c ["INT_ADD", "register:40f0:8", ["const:a3346c:8", "const:4:8"]]
- 00a3346c ["CALL", null, ["callee:00480658:8"]]
+ 00a34460 ["INT_ADD", "register:40f0:8", ["const:a34460:8", "const:4:8"]]
+ 00a34460 ["CALL", null, ["callee:00480658:8"]]
~~~


<a id="compare-98ea9251e58718c4ea91e2328cc9065f"></a>

### [`00a33c70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a33/00a33c70.md) → [`00a34c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a34/00a34c64.md) FUN_00a34c64

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 12件 [`0062c100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0062c/0062c100.md) [`0069a55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a55c.md) [`00732d50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00732/00732d50.md) [`00745988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00745/00745988.md) [`00747438`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747438.md) · 呼出先 3件 [`005977b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/005977b8.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 12件 [`0062c4b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0062c/0062c4b0.md) [`0069a90c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069a/0069a90c.md) [`00733100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00733/00733100.md) [`00745d38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00745/00745d38.md) [`007477e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00747/007477e8.md) · 呼出先 3件 [`00597ad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597ad8.md) [`00597dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597dec.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a33ca4 ["INT_ADD", "register:40f0:8", ["const:a33ca4:8", "const:4:8"]]
- 00a33ca4 ["CALL", null, ["callee:00597ad8:8"]]
+ 00a34c98 ["INT_ADD", "register:40f0:8", ["const:a34c98:8", "const:4:8"]]
+ 00a34c98 ["CALL", null, ["callee:00597ad8:8"]]
- 00a33cac ["INT_ADD", "register:40f0:8", ["const:a33cac:8", "const:4:8"]]
- 00a33cac ["CALL", null, ["callee:00597dec:8"]]
+ 00a34ca0 ["INT_ADD", "register:40f0:8", ["const:a34ca0:8", "const:4:8"]]
+ 00a34ca0 ["CALL", null, ["callee:00597dec:8"]]
- 00a33cd4 ["INT_ADD", "register:40f0:8", ["const:a33cd4:8", "const:4:8"]]
- 00a33cd4 ["CALL", null, ["callee:00c58f80:8"]]
+ 00a34cc8 ["INT_ADD", "register:40f0:8", ["const:a34cc8:8", "const:4:8"]]
+ 00a34cc8 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-6fb21af6f63d27e542c8ae105132ef8c"></a>

### [`00a33d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a33/00a33d00.md) → [`00a34cf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a34/00a34cf4.md) FUN_00a34cf4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a33fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a33/00a33fd0.md) · 呼出先 2件 [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00a38d18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a38d18.md)
- 新版 呼出元 1件 [`00a34fc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a34/00a34fc4.md) · 呼出先 2件 [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00a39d0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a39/00a39d0c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a33d34 ["INT_ADD", "register:40f0:8", ["const:a33d34:8", "const:4:8"]]
- 00a33d34 ["CALL", null, ["callee:00487c9c:8"]]
+ 00a34d28 ["INT_ADD", "register:40f0:8", ["const:a34d28:8", "const:4:8"]]
+ 00a34d28 ["CALL", null, ["callee:00487c9c:8"]]
- 00a33d50 ["INT_ADD", "register:40f0:8", ["const:a33d50:8", "const:4:8"]]
- 00a33d50 ["CALL", null, ["callee:00487c9c:8"]]
+ 00a34d44 ["INT_ADD", "register:40f0:8", ["const:a34d44:8", "const:4:8"]]
+ 00a34d44 ["CALL", null, ["callee:00487c9c:8"]]
- 00a33d80 ["INT_ADD", "register:40f0:8", ["const:a33d80:8", "const:4:8"]]
- 00a33d80 ["CALL", null, ["callee:00487c9c:8"]]
+ 00a34d74 ["INT_ADD", "register:40f0:8", ["const:a34d74:8", "const:4:8"]]
+ 00a34d74 ["CALL", null, ["callee:00487c9c:8"]]
~~~


<a id="compare-0d8e4b166f0ac94f32302e4823599b6b"></a>

### [`00a346e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a34/00a346e8.md) → [`00a356dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a35/00a356dc.md) FUN_00a356dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008658e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/008658e4.md) · 呼出先 3件 [`005977b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/005977b8.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00866890`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/00866890.md) · 呼出先 3件 [`00597ad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597ad8.md) [`00597dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597dec.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a34728 ["INT_ADD", "register:40f0:8", ["const:a34728:8", "const:4:8"]]
- 00a34728 ["CALL", null, ["callee:00597ad8:8"]]
+ 00a3571c ["INT_ADD", "register:40f0:8", ["const:a3571c:8", "const:4:8"]]
+ 00a3571c ["CALL", null, ["callee:00597ad8:8"]]
- 00a34730 ["INT_ADD", "register:40f0:8", ["const:a34730:8", "const:4:8"]]
- 00a34730 ["CALL", null, ["callee:00597dec:8"]]
+ 00a35724 ["INT_ADD", "register:40f0:8", ["const:a35724:8", "const:4:8"]]
+ 00a35724 ["CALL", null, ["callee:00597dec:8"]]
- 00a3475c ["INT_ADD", "register:40f0:8", ["const:a3475c:8", "const:4:8"]]
- 00a3475c ["CALL", null, ["callee:00597ad8:8"]]
+ 00a35750 ["INT_ADD", "register:40f0:8", ["const:a35750:8", "const:4:8"]]
+ 00a35750 ["CALL", null, ["callee:00597ad8:8"]]
~~~


<a id="compare-76cfc10352bd77aeb97cc879e721c5a6"></a>

### [`00a37e58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a37/00a37e58.md) → [`00a38e4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a38/00a38e4c.md) FUN_00a38e4c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00631334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00631/00631334.md) [`0075ba1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075b/0075ba1c.md) · 呼出先 4件 [`00562734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00562/00562734.md) [`00a37b9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a37/00a37b9c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`006316e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00631/006316e4.md) [`0075bdcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075b/0075bdcc.md) · 呼出先 4件 [`00562a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00562/00562a54.md) [`00a38b90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a38/00a38b90.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a37e7c ["INT_ADD", "register:40f0:8", ["const:a37e7c:8", "const:4:8"]]
- 00a37e7c ["CALL", null, ["callee:00a38b90:8"]]
+ 00a38e70 ["INT_ADD", "register:40f0:8", ["const:a38e70:8", "const:4:8"]]
+ 00a38e70 ["CALL", null, ["callee:00a38b90:8"]]
- 00a37ea4 ["INT_ADD", "register:40f0:8", ["const:a37ea4:8", "const:4:8"]]
- 00a37ea4 ["CALL", null, ["callee:00562a54:8"]]
+ 00a38e98 ["INT_ADD", "register:40f0:8", ["const:a38e98:8", "const:4:8"]]
+ 00a38e98 ["CALL", null, ["callee:00562a54:8"]]
- 00a37eb4 ["INT_ADD", "register:40f0:8", ["const:a37eb4:8", "const:4:8"]]
- 00a37eb4 ["CALL", null, ["callee:00c58f50:8"]]
+ 00a38ea8 ["INT_ADD", "register:40f0:8", ["const:a38ea8:8", "const:4:8"]]
+ 00a38ea8 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-6291f8b155e7f7f6e5b2596c54026ee0"></a>

### [`00a3804c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a3804c.md) → [`00a39040`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a39/00a39040.md) FUN_00a39040

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`008691e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008691e0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0086a18c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a18c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a38084 ["INT_ADD", "register:40f0:8", ["const:a38084:8", "const:4:8"]]
- 00a38084 ["CALL", null, ["callee:0086a18c:8"]]
+ 00a39078 ["INT_ADD", "register:40f0:8", ["const:a39078:8", "const:4:8"]]
+ 00a39078 ["CALL", null, ["callee:0086a18c:8"]]
~~~


<a id="compare-850e99b792988aedf0a32ca04756a82d"></a>

### [`00a38120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a38120.md) → [`00a39114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a39/00a39114.md) FUN_00a39114

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00869364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869364.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0086a310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a310.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a38138 ["INT_ADD", "register:40f0:8", ["const:a38138:8", "const:4:8"]]
- 00a38138 ["CALL", null, ["callee:0086a310:8"]]
+ 00a3912c ["INT_ADD", "register:40f0:8", ["const:a3912c:8", "const:4:8"]]
+ 00a3912c ["CALL", null, ["callee:0086a310:8"]]
~~~


<a id="compare-c536f1e056277a4749a2a0e532c3fd01"></a>

### [`00a39be8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39be8.md) → [`00a3abdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3a/00a3abdc.md) FUN_00a3abdc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a39a24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39a24.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00a3aa18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3a/00a3aa18.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a39c14 ["INT_ADD", "register:40f0:8", ["const:a39c14:8", "const:4:8"]]
- 00a39c14 ["CALL", null, ["callee:00c58f50:8"]]
+ 00a3ac08 ["INT_ADD", "register:40f0:8", ["const:a3ac08:8", "const:4:8"]]
+ 00a3ac08 ["CALL", null, ["callee:00c58f50:8"]]
- 00a39c30 ["INT_ADD", "register:40f0:8", ["const:a39c30:8", "const:4:8"]]
- 00a39c30 ["CALL", null, ["callee:00c58f50:8"]]
+ 00a3ac24 ["INT_ADD", "register:40f0:8", ["const:a3ac24:8", "const:4:8"]]
+ 00a3ac24 ["CALL", null, ["callee:00c58f50:8"]]
- 00a39c68 ["INT_ADD", "register:40f0:8", ["const:a39c68:8", "const:4:8"]]
- 00a39c68 ["CALL", null, ["callee:00c58f50:8"]]
+ 00a3ac5c ["INT_ADD", "register:40f0:8", ["const:a3ac5c:8", "const:4:8"]]
+ 00a3ac5c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-b64429a67227a00375c87ab1df009ffd"></a>

### [`00a39c90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39c90.md) → [`00a3ac84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3a/00a3ac84.md) FUN_00a3ac84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00a39cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39cc8.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00a3acbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3a/00a3acbc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a39cb8 ["INT_ADD", "register:40f0:8", ["const:a39cb8:8", "const:4:8"]]
- 00a39cb8 ["CALL", null, ["callee:00a3acbc:8"]]
+ 00a3acac ["INT_ADD", "register:40f0:8", ["const:a3acac:8", "const:4:8"]]
+ 00a3acac ["CALL", null, ["callee:00a3acbc:8"]]
~~~


<a id="compare-567038c13c2ba6b8595a4f00e9517274"></a>

### [`00a39d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39d70.md) → [`00a3ad64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3a/00a3ad64.md) FUN_00a3ad64

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00a39894`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39894.md) [`00a39b9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39b9c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`00a3a888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3a/00a3a888.md) [`00a3ab90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3a/00a3ab90.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a39da4 ["INT_ADD", "register:40f0:8", ["const:a39da4:8", "const:4:8"]]
- 00a39da4 ["CALL", null, ["callee:00c58f50:8"]]
+ 00a3ad98 ["INT_ADD", "register:40f0:8", ["const:a3ad98:8", "const:4:8"]]
+ 00a3ad98 ["CALL", null, ["callee:00c58f50:8"]]
- 00a39dc8 ["INT_ADD", "register:40f0:8", ["const:a39dc8:8", "const:4:8"]]
- 00a39dc8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00a3adbc ["INT_ADD", "register:40f0:8", ["const:a3adbc:8", "const:4:8"]]
+ 00a3adbc ["CALL", null, ["callee:00c58f50:8"]]
- 00a39e00 ["INT_ADD", "register:40f0:8", ["const:a39e00:8", "const:4:8"]]
- 00a39e00 ["CALL", null, ["callee:00c58f50:8"]]
+ 00a3adf4 ["INT_ADD", "register:40f0:8", ["const:a3adf4:8", "const:4:8"]]
+ 00a3adf4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-2ae44f740e2a7fa04e9123ba293a0d54"></a>

### [`00a3a2bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3a/00a3a2bc.md) → [`00a3b2b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3b/00a3b2b0.md) FUN_00a3b2b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a3a06c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3a/00a3a06c.md) · 呼出先 1件 [`008691e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008691e0.md)
- 新版 呼出元 1件 [`00a3b060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3b/00a3b060.md) · 呼出先 1件 [`0086a18c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a18c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a3a400 ["INT_ADD", "register:40f0:8", ["const:a3a400:8", "const:4:8"]]
- 00a3a400 ["CALL", null, ["callee:0086a18c:8"]]
+ 00a3b3f4 ["INT_ADD", "register:40f0:8", ["const:a3b3f4:8", "const:4:8"]]
+ 00a3b3f4 ["CALL", null, ["callee:0086a18c:8"]]
~~~


<a id="compare-59d86636efa542ba830fc14824f4d9ad"></a>

### [`00a3a45c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3a/00a3a45c.md) → [`00a3b450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3b/00a3b450.md) FUN_00a3b450

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`008691e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008691e0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0086a18c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a18c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a3a484 ["INT_ADD", "register:40f0:8", ["const:a3a484:8", "const:4:8"]]
- 00a3a484 ["CALL", null, ["callee:0086a18c:8"]]
+ 00a3b478 ["INT_ADD", "register:40f0:8", ["const:a3b478:8", "const:4:8"]]
+ 00a3b478 ["CALL", null, ["callee:0086a18c:8"]]
~~~


<a id="compare-51f408c921c2579b8fcc051280e6fcad"></a>

### [`00a3a858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3a/00a3a858.md) → [`00a3b84c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3b/00a3b84c.md) FUN_00a3b84c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00a3a98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3a/00a3a98c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`009d1320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d1/009d1320.md) · 呼出先 3件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00a3b980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3b/00a3b980.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a3a900 ["INT_ADD", "register:40f0:8", ["const:a3a900:8", "const:4:8"]]
- 00a3a900 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a3b8f4 ["INT_ADD", "register:40f0:8", ["const:a3b8f4:8", "const:4:8"]]
+ 00a3b8f4 ["CALL", null, ["callee:00c58f30:8"]]
- 00a3a934 ["INT_ADD", "register:40f0:8", ["const:a3a934:8", "const:4:8"]]
- 00a3a934 ["CALL", null, ["callee:0043bf04:8"]]
+ 00a3b928 ["INT_ADD", "register:40f0:8", ["const:a3b928:8", "const:4:8"]]
+ 00a3b928 ["CALL", null, ["callee:0043bf04:8"]]
- 00a3a980 ["INT_ADD", "register:40f0:8", ["const:a3a980:8", "const:4:8"]]
- 00a3a980 ["CALL", null, ["callee:00a3b980:8"]]
+ 00a3b974 ["INT_ADD", "register:40f0:8", ["const:a3b974:8", "const:4:8"]]
+ 00a3b974 ["CALL", null, ["callee:00a3b980:8"]]
~~~


<a id="compare-01c59c0eaf9b4ac1a154598565b7b6a9"></a>

### [`00a3a98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3a/00a3a98c.md) → [`00a3b980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3b/00a3b980.md) FUN_00a3b980

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a3a858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3a/00a3a858.md) · 呼出先 3件 [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00a3b84c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3b/00a3b84c.md) · 呼出先 3件 [`00494970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00494/00494970.md) [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a3aa3c ["INT_ADD", "register:40f0:8", ["const:a3aa3c:8", "const:4:8"]]
- 00a3aa3c ["CALL", null, ["callee:00494970:8"]]
+ 00a3ba30 ["INT_ADD", "register:40f0:8", ["const:a3ba30:8", "const:4:8"]]
+ 00a3ba30 ["CALL", null, ["callee:00494970:8"]]
- 00a3aa44 ["INT_ADD", "register:40f0:8", ["const:a3aa44:8", "const:4:8"]]
- 00a3aa44 ["CALL", null, ["callee:00c58f50:8"]]
+ 00a3ba38 ["INT_ADD", "register:40f0:8", ["const:a3ba38:8", "const:4:8"]]
+ 00a3ba38 ["CALL", null, ["callee:00c58f50:8"]]
- 00a3aaf8 ["INT_ADD", "register:40f0:8", ["const:a3aaf8:8", "const:4:8"]]
- 00a3aaf8 ["CALL", null, ["callee:00494970:8"]]
+ 00a3baec ["INT_ADD", "register:40f0:8", ["const:a3baec:8", "const:4:8"]]
+ 00a3baec ["CALL", null, ["callee:00494970:8"]]
~~~


<a id="compare-ae0ffbe9ae5f1c7254f362e8ab29bde4"></a>

### [`00a3edac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3e/00a3edac.md) → [`00a3fda0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3f/00a3fda0.md) FUN_00a3fda0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md)
- 新版 呼出元 0件  · 呼出先 1件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a3edc4 ["INT_ADD", "register:40f0:8", ["const:a3edc4:8", "const:4:8"]]
- 00a3edc4 ["CALL", null, ["callee:005c1b8c:8"]]
+ 00a3fdb8 ["INT_ADD", "register:40f0:8", ["const:a3fdb8:8", "const:4:8"]]
+ 00a3fdb8 ["CALL", null, ["callee:005c1b8c:8"]]
~~~


<a id="compare-8bb425f0582f122baf392478ae41ffaf"></a>

### [`00a3efcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3e/00a3efcc.md) → [`00a3ffc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3f/00a3ffc0.md) FUN_00a3ffc0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md)
- 新版 呼出元 0件  · 呼出先 1件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a3efe4 ["INT_ADD", "register:40f0:8", ["const:a3efe4:8", "const:4:8"]]
- 00a3efe4 ["CALL", null, ["callee:005c1b8c:8"]]
+ 00a3ffd8 ["INT_ADD", "register:40f0:8", ["const:a3ffd8:8", "const:4:8"]]
+ 00a3ffd8 ["CALL", null, ["callee:005c1b8c:8"]]
~~~


<a id="compare-b70b6624145ea070b925f5b89f11a539"></a>

### [`00a3effc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3e/00a3effc.md) → [`00a3fff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3f/00a3fff0.md) FUN_00a3fff0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a3ea24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3e/00a3ea24.md) · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00a3fa18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3f/00a3fa18.md) · 呼出先 2件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a3f014 ["INT_ADD", "register:40f0:8", ["const:a3f014:8", "const:4:8"]]
- 00a3f014 ["CALL", null, ["callee:005c1b8c:8"]]
+ 00a40008 ["INT_ADD", "register:40f0:8", ["const:a40008:8", "const:4:8"]]
+ 00a40008 ["CALL", null, ["callee:005c1b8c:8"]]
- 00a3f020 ["INT_ADD", "register:40f0:8", ["const:a3f020:8", "const:4:8"]]
- 00a3f020 ["CALL", null, ["callee:005c1b8c:8"]]
+ 00a40014 ["INT_ADD", "register:40f0:8", ["const:a40014:8", "const:4:8"]]
+ 00a40014 ["CALL", null, ["callee:005c1b8c:8"]]
~~~


<a id="compare-7fbe022723557cc86f27512a0292466d"></a>

### [`00a40ce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a40/00a40ce0.md) → [`00a41cd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a41/00a41cd4.md) FUN_00a41cd4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00a40be8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a40/00a40be8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00a41bdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a41/00a41bdc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a40cf0 ["INT_ADD", "register:40f0:8", ["const:a40cf0:8", "const:4:8"]]
- 00a40cf0 ["CALL", null, ["callee:00a41bdc:8"]]
+ 00a41ce4 ["INT_ADD", "register:40f0:8", ["const:a41ce4:8", "const:4:8"]]
+ 00a41ce4 ["CALL", null, ["callee:00a41bdc:8"]]
~~~


<a id="compare-e2f1737ecccd635544ed45348e6e72c6"></a>

### [`00a41f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a41/00a41f5c.md) → [`00a42f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a42/00a42f50.md) FUN_00a42f50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a41f78 ["INT_ADD", "register:40f0:8", ["const:a41f78:8", "const:4:8"]]
- 00a41f78 ["CALL", null, ["callee:00c58f50:8"]]
+ 00a42f6c ["INT_ADD", "register:40f0:8", ["const:a42f6c:8", "const:4:8"]]
+ 00a42f6c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-92ca34508f3f5ef0f1ba6a759a5d63d8"></a>

### [`00a46650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46650.md) → [`00a47644`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47644.md) FUN_00a47644

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00788d04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/00788d04.md) [`007cab20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ca/007cab20.md) [`00a8a488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8a/00a8a488.md) · 呼出先 2件 [`00a466a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a466a4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 3件 [`007890e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00789/007890e0.md) [`007cba84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cb/007cba84.md) [`00a8b47c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8b/00a8b47c.md) · 呼出先 2件 [`00a47698`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47698.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a46674 ["INT_ADD", "register:40f0:8", ["const:a46674:8", "const:4:8"]]
- 00a46674 ["CALL", null, ["callee:00a47698:8"]]
+ 00a47668 ["INT_ADD", "register:40f0:8", ["const:a47668:8", "const:4:8"]]
+ 00a47668 ["CALL", null, ["callee:00a47698:8"]]
- 00a466a0 ["INT_ADD", "register:40f0:8", ["const:a466a0:8", "const:4:8"]]
- 00a466a0 ["CALL", null, ["callee:00c58f80:8"]]
+ 00a47694 ["INT_ADD", "register:40f0:8", ["const:a47694:8", "const:4:8"]]
+ 00a47694 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-b5122a0dc301d324a997aef87ba07c27"></a>

### [`00a467d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a467d8.md) → [`00a477cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a477cc.md) FUN_00a477cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 63件 [`005c4998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c4/005c4998.md) [`005c8f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8f3c.md) [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00606514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606514.md) [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00a47af0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47af0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 62件 [`005c4d48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c4d48.md) [`005c92ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c9/005c92ec.md) [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`006068c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00606/006068c4.md) [`00606ed4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00606/00606ed4.md) · 呼出先 5件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00a48ae4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48ae4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a46860 ["INT_ADD", "register:40f0:8", ["const:a46860:8", "const:4:8"]]
- 00a46860 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a47854 ["INT_ADD", "register:40f0:8", ["const:a47854:8", "const:4:8"]]
+ 00a47854 ["CALL", null, ["callee:00c58f30:8"]]
- 00a4689c ["INT_ADD", "register:40f0:8", ["const:a4689c:8", "const:4:8"]]
- 00a4689c ["CALL", null, ["callee:00c590a0:8"]]
+ 00a47890 ["INT_ADD", "register:40f0:8", ["const:a47890:8", "const:4:8"]]
+ 00a47890 ["CALL", null, ["callee:00c590a0:8"]]
- 00a468b0 ["INT_ADD", "register:40f0:8", ["const:a468b0:8", "const:4:8"]]
- 00a468b0 ["CALL", null, ["callee:00c58f50:8"]]
+ 00a478a4 ["INT_ADD", "register:40f0:8", ["const:a478a4:8", "const:4:8"]]
+ 00a478a4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-7b802904072c81a70e72be18f503556c"></a>

### [`00a46950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46950.md) → [`00a47944`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47944.md) FUN_00a47944

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 77件 [`005c4998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c4/005c4998.md) [`005c8f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8f3c.md) [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00606514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606514.md) [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) · 呼出先 9件 [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`00489f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f98.md) [`0048ab80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab80.md) [`0048ab88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab88.md) [`00a46a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46a78.md)
- 新版 呼出元 75件 [`005c4d48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c4d48.md) [`005c92ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c9/005c92ec.md) [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`006068c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00606/006068c4.md) [`00606ed4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00606/00606ed4.md) · 呼出先 9件 [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md) [`0048a2b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2b8.md) [`0048aea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048aea0.md) [`0048aea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048aea8.md) [`00a47a6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47a6c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a4697c ["INT_ADD", "register:40f0:8", ["const:a4697c:8", "const:4:8"]]
- 00a4697c ["CALL", null, ["callee:00a47a6c:8"]]
+ 00a47970 ["INT_ADD", "register:40f0:8", ["const:a47970:8", "const:4:8"]]
+ 00a47970 ["CALL", null, ["callee:00a47a6c:8"]]
- 00a46994 ["INT_ADD", "register:40f0:8", ["const:a46994:8", "const:4:8"]]
- 00a46994 ["CALL", null, ["callee:00c54d60:8"]]
+ 00a47988 ["INT_ADD", "register:40f0:8", ["const:a47988:8", "const:4:8"]]
+ 00a47988 ["CALL", null, ["callee:00c54d60:8"]]
- 00a469ac ["INT_ADD", "register:40f0:8", ["const:a469ac:8", "const:4:8"]]
- 00a469ac ["CALL", null, ["callee:00c54d90:8"]]
+ 00a479a0 ["INT_ADD", "register:40f0:8", ["const:a479a0:8", "const:4:8"]]
+ 00a479a0 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-9487d861f35235fa51e84cac9616f7f9"></a>

### [`00a46b9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46b9c.md) → [`00a47b90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47b90.md) FUN_00a47b90

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 5件 [`00786c00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/00786c00.md) [`007c8d48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007c8/007c8d48.md) [`00a8de28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8d/00a8de28.md) [`00a91e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a91/00a91e80.md) [`00a9286c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a92/00a9286c.md) · 呼出先 3件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 5件 [`00786fdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00786/00786fdc.md) [`007c9cac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007c9/007c9cac.md) [`00a8ee1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8e/00a8ee1c.md) [`00a92e74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a92/00a92e74.md) [`00a93860`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a93/00a93860.md) · 呼出先 3件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a46bc0 ["INT_ADD", "register:40f0:8", ["const:a46bc0:8", "const:4:8"]]
- 00a46bc0 ["CALL", null, ["callee:00c54d60:8"]]
+ 00a47bb4 ["INT_ADD", "register:40f0:8", ["const:a47bb4:8", "const:4:8"]]
+ 00a47bb4 ["CALL", null, ["callee:00c54d60:8"]]
- 00a46bd8 ["INT_ADD", "register:40f0:8", ["const:a46bd8:8", "const:4:8"]]
- 00a46bd8 ["CALL", null, ["callee:00c54d90:8"]]
+ 00a47bcc ["INT_ADD", "register:40f0:8", ["const:a47bcc:8", "const:4:8"]]
+ 00a47bcc ["CALL", null, ["callee:00c54d90:8"]]
- 00a46bec ["COPY", "register:0:8", ["register:4040:8"]]
- 00a46bec ["INT_ADD", "register:40f0:8", ["const:a46bec:8", "const:4:8"]]
- 00a46bec ["CALLIND", null, ["register:0:8"]]
+ 00a47be0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a47be0 ["INT_ADD", "register:40f0:8", ["const:a47be0:8", "const:4:8"]]
+ 00a47be0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-093990ec0f3d0db924a4c8db216a2e1a"></a>

### [`00a46c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46c0c.md) → [`00a47c00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47c00.md) FUN_00a47c00

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 59件 [`005c69b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c6/005c69b8.md) [`005c8800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8800.md) [`005c8f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8f3c.md) [`005dc220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc220.md) [`0061e5d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061e/0061e5d8.md) · 呼出先 4件 [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`00489f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f98.md) [`0048ab80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab80.md) [`0048ab88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab88.md)
- 新版 呼出元 59件 [`005c6d68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c6/005c6d68.md) [`005c8bb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c8/005c8bb0.md) [`005c92ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c9/005c92ec.md) [`005dc5d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dc5d0.md) [`0061e988`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061e/0061e988.md) · 呼出先 4件 [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md) [`0048a2b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2b8.md) [`0048aea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048aea0.md) [`0048aea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048aea8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a46c2c ["INT_ADD", "register:40f0:8", ["const:a46c2c:8", "const:4:8"]]
- 00a46c2c ["CALL", null, ["callee:0048a2b8:8"]]
+ 00a47c20 ["INT_ADD", "register:40f0:8", ["const:a47c20:8", "const:4:8"]]
+ 00a47c20 ["CALL", null, ["callee:0048a2b8:8"]]
- 00a46c40 ["INT_ADD", "register:40f0:8", ["const:a46c40:8", "const:4:8"]]
- 00a46c40 ["CALL", null, ["callee:0048a2ac:8"]]
+ 00a47c34 ["INT_ADD", "register:40f0:8", ["const:a47c34:8", "const:4:8"]]
+ 00a47c34 ["CALL", null, ["callee:0048a2ac:8"]]
- 00a46c58 ["INT_ADD", "register:40f0:8", ["const:a46c58:8", "const:4:8"]]
- 00a46c58 ["CALL", null, ["callee:0048aea0:8"]]
+ 00a47c4c ["INT_ADD", "register:40f0:8", ["const:a47c4c:8", "const:4:8"]]
+ 00a47c4c ["CALL", null, ["callee:0048aea0:8"]]
~~~


<a id="compare-d6af35347e979b5357ef5f09e169f7c9"></a>

### [`00a46d1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46d1c.md) → [`00a47d10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47d10.md) FUN_00a47d10

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`005c4998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c4/005c4998.md) [`007cab20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ca/007cab20.md) [`007f05cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f0/007f05cc.md) · 呼出先 9件 [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`00489f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f98.md) [`0048ab80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab80.md) [`0048ab88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab88.md) [`00a46a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46a78.md)
- 新版 呼出元 3件 [`005c4d48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c4d48.md) [`007cba84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cb/007cba84.md) [`007f1530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f1/007f1530.md) · 呼出先 9件 [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md) [`0048a2b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2b8.md) [`0048aea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048aea0.md) [`0048aea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048aea8.md) [`00a47a6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47a6c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a46d48 ["INT_ADD", "register:40f0:8", ["const:a46d48:8", "const:4:8"]]
- 00a46d48 ["CALL", null, ["callee:00a47a6c:8"]]
+ 00a47d3c ["INT_ADD", "register:40f0:8", ["const:a47d3c:8", "const:4:8"]]
+ 00a47d3c ["CALL", null, ["callee:00a47a6c:8"]]
- 00a46d60 ["INT_ADD", "register:40f0:8", ["const:a46d60:8", "const:4:8"]]
- 00a46d60 ["CALL", null, ["callee:00c54d60:8"]]
+ 00a47d54 ["INT_ADD", "register:40f0:8", ["const:a47d54:8", "const:4:8"]]
+ 00a47d54 ["CALL", null, ["callee:00c54d60:8"]]
- 00a46d78 ["INT_ADD", "register:40f0:8", ["const:a46d78:8", "const:4:8"]]
- 00a46d78 ["CALL", null, ["callee:00c54d90:8"]]
+ 00a47d6c ["INT_ADD", "register:40f0:8", ["const:a47d6c:8", "const:4:8"]]
+ 00a47d6c ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-b71e366e4646265525fbd5e00dc8cd40"></a>

### [`00a47448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47448.md) → [`00a4843c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a4843c.md) FUN_00a4843c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`0046aa3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046aa3c.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`0046ad5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046a/0046ad5c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a4746c ["COPY", "register:0:8", ["register:4040:8"]]
- 00a4746c ["INT_ADD", "register:40f0:8", ["const:a4746c:8", "const:4:8"]]
- 00a4746c ["CALLIND", null, ["register:0:8"]]
+ 00a48460 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a48460 ["INT_ADD", "register:40f0:8", ["const:a48460:8", "const:4:8"]]
+ 00a48460 ["CALLIND", null, ["register:0:8"]]
- 00a47470 ["INT_ADD", "register:40f0:8", ["const:a47470:8", "const:4:8"]]
- 00a47470 ["CALL", null, ["callee:00467bc0:8"]]
+ 00a48464 ["INT_ADD", "register:40f0:8", ["const:a48464:8", "const:4:8"]]
+ 00a48464 ["CALL", null, ["callee:00467bc0:8"]]
- 00a474a4 ["INT_ADD", "register:40f0:8", ["const:a474a4:8", "const:4:8"]]
- 00a474a4 ["CALL", null, ["callee:00467e8c:8"]]
+ 00a48498 ["INT_ADD", "register:40f0:8", ["const:a48498:8", "const:4:8"]]
+ 00a48498 ["CALL", null, ["callee:00467e8c:8"]]
~~~


<a id="compare-41ce8ef7d09eae6222b1a56abd8d746f"></a>

### [`00a475a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a475a0.md) → [`00a48594`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48594.md) FUN_00a48594

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 25件 [`005c8f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8f3c.md) [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00606514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606514.md) [`00659edc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00659/00659edc.md) [`0065be6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065b/0065be6c.md) · 呼出先 5件 [`00a466a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a466a4.md) [`00a46c88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46c88.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 25件 [`005c92ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c9/005c92ec.md) [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`006068c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00606/006068c4.md) [`0065a28c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065a/0065a28c.md) [`0065c21c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065c/0065c21c.md) · 呼出先 5件 [`00a47698`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47698.md) [`00a47c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47c7c.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a475e4 ["INT_ADD", "register:40f0:8", ["const:a475e4:8", "const:4:8"]]
- 00a475e4 ["CALL", null, ["callee:00a47698:8"]]
+ 00a485d8 ["INT_ADD", "register:40f0:8", ["const:a485d8:8", "const:4:8"]]
+ 00a485d8 ["CALL", null, ["callee:00a47698:8"]]
- 00a475fc ["INT_ADD", "register:40f0:8", ["const:a475fc:8", "const:4:8"]]
- 00a475fc ["CALL", null, ["callee:00c54d60:8"]]
+ 00a485f0 ["INT_ADD", "register:40f0:8", ["const:a485f0:8", "const:4:8"]]
+ 00a485f0 ["CALL", null, ["callee:00c54d60:8"]]
- 00a47614 ["INT_ADD", "register:40f0:8", ["const:a47614:8", "const:4:8"]]
- 00a47614 ["CALL", null, ["callee:00c54d90:8"]]
+ 00a48608 ["INT_ADD", "register:40f0:8", ["const:a48608:8", "const:4:8"]]
+ 00a48608 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-39a79d29d95c96421ffd6071b7a6a994"></a>

### [`00a5e3fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a5e/00a5e3fc.md) → [`00a5f3f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a5f/00a5f3f0.md) FUN_00a5f3f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a52ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a52/00a52ea0.md) · 呼出先 1件 [`0046ef38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ef38.md)
- 新版 呼出元 1件 [`00a53e94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a53/00a53e94.md) · 呼出先 1件 [`0046f258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f258.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a5e410 ["INT_ADD", "register:40f0:8", ["const:a5e410:8", "const:4:8"]]
- 00a5e410 ["CALL", null, ["callee:0046f258:8"]]
+ 00a5f404 ["INT_ADD", "register:40f0:8", ["const:a5f404:8", "const:4:8"]]
+ 00a5f404 ["CALL", null, ["callee:0046f258:8"]]
- 00a5e41c ["INT_ADD", "register:40f0:8", ["const:a5e41c:8", "const:4:8"]]
- 00a5e41c ["CALL", null, ["callee:0046f258:8"]]
+ 00a5f410 ["INT_ADD", "register:40f0:8", ["const:a5f410:8", "const:4:8"]]
+ 00a5f410 ["CALL", null, ["callee:0046f258:8"]]
- 00a5e428 ["INT_ADD", "register:40f0:8", ["const:a5e428:8", "const:4:8"]]
- 00a5e428 ["CALL", null, ["callee:0046f258:8"]]
+ 00a5f41c ["INT_ADD", "register:40f0:8", ["const:a5f41c:8", "const:4:8"]]
+ 00a5f41c ["CALL", null, ["callee:0046f258:8"]]
~~~


<a id="compare-edf0032ff8ed0c730634122632ea2d74"></a>

### [`00a5e534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a5e/00a5e534.md) → [`00a5f528`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a5f/00a5f528.md) FUN_00a5f528

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a52ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a52/00a52ea0.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0078109c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00781/0078109c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00a53e94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a53/00a53e94.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00781478`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00781/00781478.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a5e590 ["INT_ADD", "register:40f0:8", ["const:a5e590:8", "const:4:8"]]
- 00a5e590 ["CALL", null, ["callee:0043be80:8"]]
+ 00a5f584 ["INT_ADD", "register:40f0:8", ["const:a5f584:8", "const:4:8"]]
+ 00a5f584 ["CALL", null, ["callee:0043be80:8"]]
- 00a5e5a0 ["INT_ADD", "register:40f0:8", ["const:a5e5a0:8", "const:4:8"]]
- 00a5e5a0 ["CALL", null, ["callee:0043be80:8"]]
+ 00a5f594 ["INT_ADD", "register:40f0:8", ["const:a5f594:8", "const:4:8"]]
+ 00a5f594 ["CALL", null, ["callee:0043be80:8"]]
- 00a5e5d4 ["INT_ADD", "register:40f0:8", ["const:a5e5d4:8", "const:4:8"]]
- 00a5e5d4 ["CALL", null, ["callee:00781478:8"]]
+ 00a5f5c8 ["INT_ADD", "register:40f0:8", ["const:a5f5c8:8", "const:4:8"]]
+ 00a5f5c8 ["CALL", null, ["callee:00781478:8"]]
~~~


<a id="compare-fcd7fbe3e35e7a356c83d022fe2791e5"></a>

### [`00a5e668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a5e/00a5e668.md) → [`00a5f65c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a5f/00a5f65c.md) FUN_00a5f65c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a5e984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a5e/00a5e984.md) · 呼出先 1件 [`00682258`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682258.md)
- 新版 呼出元 1件 [`00a5f978`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a5f/00a5f978.md) · 呼出先 1件 [`00682608`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00682/00682608.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a5e680 ["INT_ADD", "register:40f0:8", ["const:a5e680:8", "const:4:8"]]
- 00a5e680 ["CALL", null, ["callee:00682608:8"]]
+ 00a5f674 ["INT_ADD", "register:40f0:8", ["const:a5f674:8", "const:4:8"]]
+ 00a5f674 ["CALL", null, ["callee:00682608:8"]]
- 00a5e68c ["INT_ADD", "register:40f0:8", ["const:a5e68c:8", "const:4:8"]]
- 00a5e68c ["CALL", null, ["callee:00682608:8"]]
+ 00a5f680 ["INT_ADD", "register:40f0:8", ["const:a5f680:8", "const:4:8"]]
+ 00a5f680 ["CALL", null, ["callee:00682608:8"]]
- 00a5e698 ["INT_ADD", "register:40f0:8", ["const:a5e698:8", "const:4:8"]]
- 00a5e698 ["CALL", null, ["callee:00682608:8"]]
+ 00a5f68c ["INT_ADD", "register:40f0:8", ["const:a5f68c:8", "const:4:8"]]
+ 00a5f68c ["CALL", null, ["callee:00682608:8"]]
~~~


<a id="compare-ad9b5be8cba80c45b0dd7636e53a3fb3"></a>

### [`00a5e77c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a5e/00a5e77c.md) → [`00a5f770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a5f/00a5f770.md) FUN_00a5f770

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a5e984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a5e/00a5e984.md) · 呼出先 1件 [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md)
- 新版 呼出元 1件 [`00a5f978`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a5f/00a5f978.md) · 呼出先 1件 [`0046f33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f33c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a5e790 ["INT_ADD", "register:40f0:8", ["const:a5e790:8", "const:4:8"]]
- 00a5e790 ["CALL", null, ["callee:0046f33c:8"]]
+ 00a5f784 ["INT_ADD", "register:40f0:8", ["const:a5f784:8", "const:4:8"]]
+ 00a5f784 ["CALL", null, ["callee:0046f33c:8"]]
- 00a5e798 ["INT_ADD", "register:40f0:8", ["const:a5e798:8", "const:4:8"]]
- 00a5e798 ["CALL", null, ["callee:0046f33c:8"]]
+ 00a5f78c ["INT_ADD", "register:40f0:8", ["const:a5f78c:8", "const:4:8"]]
+ 00a5f78c ["CALL", null, ["callee:0046f33c:8"]]
- 00a5e7a0 ["INT_ADD", "register:40f0:8", ["const:a5e7a0:8", "const:4:8"]]
- 00a5e7a0 ["CALL", null, ["callee:0046f33c:8"]]
+ 00a5f794 ["INT_ADD", "register:40f0:8", ["const:a5f794:8", "const:4:8"]]
+ 00a5f794 ["CALL", null, ["callee:0046f33c:8"]]
~~~


<a id="compare-87727905ec33c30b5423250b5c28b9f9"></a>

### [`00a5e83c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a5e/00a5e83c.md) → [`00a5f830`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a5f/00a5f830.md) FUN_00a5f830

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0046ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ec04.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a5e850 ["INT_ADD", "register:40f0:8", ["const:a5e850:8", "const:4:8"]]
- 00a5e850 ["CALL", null, ["callee:0046ec04:8"]]
+ 00a5f844 ["INT_ADD", "register:40f0:8", ["const:a5f844:8", "const:4:8"]]
+ 00a5f844 ["CALL", null, ["callee:0046ec04:8"]]
- 00a5e858 ["INT_ADD", "register:40f0:8", ["const:a5e858:8", "const:4:8"]]
- 00a5e858 ["CALL", null, ["callee:0046ec04:8"]]
+ 00a5f84c ["INT_ADD", "register:40f0:8", ["const:a5f84c:8", "const:4:8"]]
+ 00a5f84c ["CALL", null, ["callee:0046ec04:8"]]
~~~


<a id="compare-6d7348459a10faa194afab38d314b4b2"></a>

### [`00a5e86c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a5e/00a5e86c.md) → [`00a5f860`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a5f/00a5f860.md) FUN_00a5f860

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0046ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ec04.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a5e880 ["INT_ADD", "register:40f0:8", ["const:a5e880:8", "const:4:8"]]
- 00a5e880 ["CALL", null, ["callee:0046ec04:8"]]
+ 00a5f874 ["INT_ADD", "register:40f0:8", ["const:a5f874:8", "const:4:8"]]
+ 00a5f874 ["CALL", null, ["callee:0046ec04:8"]]
- 00a5e888 ["INT_ADD", "register:40f0:8", ["const:a5e888:8", "const:4:8"]]
- 00a5e888 ["CALL", null, ["callee:0046ec04:8"]]
+ 00a5f87c ["INT_ADD", "register:40f0:8", ["const:a5f87c:8", "const:4:8"]]
+ 00a5f87c ["CALL", null, ["callee:0046ec04:8"]]
- 00a5e890 ["INT_ADD", "register:40f0:8", ["const:a5e890:8", "const:4:8"]]
- 00a5e890 ["CALL", null, ["callee:0046ec04:8"]]
+ 00a5f884 ["INT_ADD", "register:40f0:8", ["const:a5f884:8", "const:4:8"]]
+ 00a5f884 ["CALL", null, ["callee:0046ec04:8"]]
~~~


<a id="compare-d169690359d0f32575911aa48ee9ffb8"></a>

### [`00a5e8ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a5e/00a5e8ac.md) → [`00a5f8a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a5f/00a5f8a0.md) FUN_00a5f8a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a5e8e4 ["INT_ADD", "register:40f0:8", ["const:a5e8e4:8", "const:4:8"]]
- 00a5e8e4 ["CALL", null, ["callee:00c54d90:8"]]
+ 00a5f8d8 ["INT_ADD", "register:40f0:8", ["const:a5f8d8:8", "const:4:8"]]
+ 00a5f8d8 ["CALL", null, ["callee:00c54d90:8"]]
- 00a5e8f8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a5e8f8 ["INT_ADD", "register:40f0:8", ["const:a5e8f8:8", "const:4:8"]]
- 00a5e8f8 ["CALLIND", null, ["register:0:8"]]
+ 00a5f8ec ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a5f8ec ["INT_ADD", "register:40f0:8", ["const:a5f8ec:8", "const:4:8"]]
+ 00a5f8ec ["CALLIND", null, ["register:0:8"]]
- 00a5e900 ["INT_ADD", "register:40f0:8", ["const:a5e900:8", "const:4:8"]]
- 00a5e900 ["CALL", null, ["callee:00c58f20:8"]]
+ 00a5f8f4 ["INT_ADD", "register:40f0:8", ["const:a5f8f4:8", "const:4:8"]]
+ 00a5f8f4 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-8c2a82cde2c740b937fd0e2fd1848d5a"></a>

### [`00a5e918`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a5e/00a5e918.md) → [`00a5f90c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a5f/00a5f90c.md) FUN_00a5f90c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a5e950 ["INT_ADD", "register:40f0:8", ["const:a5e950:8", "const:4:8"]]
- 00a5e950 ["CALL", null, ["callee:00c54d90:8"]]
+ 00a5f944 ["INT_ADD", "register:40f0:8", ["const:a5f944:8", "const:4:8"]]
+ 00a5f944 ["CALL", null, ["callee:00c54d90:8"]]
- 00a5e964 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a5e964 ["INT_ADD", "register:40f0:8", ["const:a5e964:8", "const:4:8"]]
- 00a5e964 ["CALLIND", null, ["register:0:8"]]
+ 00a5f958 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a5f958 ["INT_ADD", "register:40f0:8", ["const:a5f958:8", "const:4:8"]]
+ 00a5f958 ["CALLIND", null, ["register:0:8"]]
- 00a5e96c ["INT_ADD", "register:40f0:8", ["const:a5e96c:8", "const:4:8"]]
- 00a5e96c ["CALL", null, ["callee:00c58f20:8"]]
+ 00a5f960 ["INT_ADD", "register:40f0:8", ["const:a5f960:8", "const:4:8"]]
+ 00a5f960 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-33e241d5ff41381c14168a7ddcf5d97c"></a>

### [`00a60108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a60/00a60108.md) → [`00a610fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a61/00a610fc.md) FUN_00a610fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a60124 ["INT_ADD", "register:40f0:8", ["const:a60124:8", "const:4:8"]]
- 00a60124 ["CALL", null, ["callee:00c58f50:8"]]
+ 00a61118 ["INT_ADD", "register:40f0:8", ["const:a61118:8", "const:4:8"]]
+ 00a61118 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-c97345aa1c5524d723510b22f39f0daa"></a>

### [`00a622a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a62/00a622a8.md) → [`00a6329c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a63/00a6329c.md) FUN_00a6329c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a5fd58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a5f/00a5fd58.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00a62458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a62/00a62458.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00a60d4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a60/00a60d4c.md) · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00a6344c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a63/00a6344c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a62330 ["INT_ADD", "register:40f0:8", ["const:a62330:8", "const:4:8"]]
- 00a62330 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a63324 ["INT_ADD", "register:40f0:8", ["const:a63324:8", "const:4:8"]]
+ 00a63324 ["CALL", null, ["callee:00c58f30:8"]]
- 00a62404 ["INT_ADD", "register:40f0:8", ["const:a62404:8", "const:4:8"]]
- 00a62404 ["CALL", null, ["callee:00c58f50:8"]]
+ 00a633f8 ["INT_ADD", "register:40f0:8", ["const:a633f8:8", "const:4:8"]]
+ 00a633f8 ["CALL", null, ["callee:00c58f50:8"]]
- 00a62414 ["INT_ADD", "register:40f0:8", ["const:a62414:8", "const:4:8"]]
- 00a62414 ["CALL", null, ["callee:00c58f50:8"]]
+ 00a63408 ["INT_ADD", "register:40f0:8", ["const:a63408:8", "const:4:8"]]
+ 00a63408 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-bab7a56c041e0ca271bc9edf30efef85"></a>

### [`00a62a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a62/00a62a88.md) → [`00a63a7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a63/00a63a7c.md) FUN_00a63a7c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00a6296c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a62/00a6296c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00a63960`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a63/00a63960.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a62a98 ["INT_ADD", "register:40f0:8", ["const:a62a98:8", "const:4:8"]]
- 00a62a98 ["CALL", null, ["callee:00a63960:8"]]
+ 00a63a8c ["INT_ADD", "register:40f0:8", ["const:a63a8c:8", "const:4:8"]]
+ 00a63a8c ["CALL", null, ["callee:00a63960:8"]]
~~~


<a id="compare-82063a41d1db6ad28b26b00f1e4a16b8"></a>

### [`00a643dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a64/00a643dc.md) → [`00a653d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a65/00a653d0.md) FUN_00a653d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009d5d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d5/009d5d4c.md) · 呼出先 1件 [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md)
- 新版 呼出元 1件 [`009d6cf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d6/009d6cf8.md) · 呼出先 1件 [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a64414 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a64414 ["INT_ADD", "register:40f0:8", ["const:a64414:8", "const:4:8"]]
- 00a64414 ["CALLIND", null, ["register:0:8"]]
+ 00a65408 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a65408 ["INT_ADD", "register:40f0:8", ["const:a65408:8", "const:4:8"]]
+ 00a65408 ["CALLIND", null, ["register:0:8"]]
- 00a64428 ["INT_ADD", "register:40f0:8", ["const:a64428:8", "const:4:8"]]
- 00a64428 ["CALL", null, ["callee:00487c9c:8"]]
+ 00a6541c ["INT_ADD", "register:40f0:8", ["const:a6541c:8", "const:4:8"]]
+ 00a6541c ["CALL", null, ["callee:00487c9c:8"]]
~~~


<a id="compare-9d1cc6438fa9e12b873d87e6f7967cb7"></a>

### [`00a64464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a64/00a64464.md) → [`00a65458`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a65/00a65458.md) FUN_00a65458

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a1a7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a7a4.md) · 呼出先 1件 [`00480430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480430.md)
- 新版 呼出元 1件 [`00a1b750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a1b/00a1b750.md) · 呼出先 1件 [`00480750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480750.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a64490 ["INT_ADD", "register:40f0:8", ["const:a64490:8", "const:4:8"]]
- 00a64490 ["CALL", null, ["callee:00480750:8"]]
+ 00a65484 ["INT_ADD", "register:40f0:8", ["const:a65484:8", "const:4:8"]]
+ 00a65484 ["CALL", null, ["callee:00480750:8"]]
- 00a644a4 ["INT_ADD", "register:40f0:8", ["const:a644a4:8", "const:4:8"]]
- 00a644a4 ["CALL", null, ["callee:00480750:8"]]
+ 00a65498 ["INT_ADD", "register:40f0:8", ["const:a65498:8", "const:4:8"]]
+ 00a65498 ["CALL", null, ["callee:00480750:8"]]
~~~


<a id="compare-428db358d61767ebeda307013aae08cb"></a>

### [`00a645dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a64/00a645dc.md) → [`00a655d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a65/00a655d0.md) FUN_00a655d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a22424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a22/00a22424.md) · 呼出先 1件 [`00480e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480e68.md)
- 新版 呼出元 1件 [`00a233d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a23/00a233d0.md) · 呼出先 1件 [`00481188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/00481188.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a645f8 ["INT_ADD", "register:40f0:8", ["const:a645f8:8", "const:4:8"]]
- 00a645f8 ["CALL", null, ["callee:00481188:8"]]
+ 00a655ec ["INT_ADD", "register:40f0:8", ["const:a655ec:8", "const:4:8"]]
+ 00a655ec ["CALL", null, ["callee:00481188:8"]]
- 00a64604 ["INT_ADD", "register:40f0:8", ["const:a64604:8", "const:4:8"]]
- 00a64604 ["CALL", null, ["callee:00481188:8"]]
+ 00a655f8 ["INT_ADD", "register:40f0:8", ["const:a655f8:8", "const:4:8"]]
+ 00a655f8 ["CALL", null, ["callee:00481188:8"]]
- 00a64610 ["INT_ADD", "register:40f0:8", ["const:a64610:8", "const:4:8"]]
- 00a64610 ["CALL", null, ["callee:00481188:8"]]
+ 00a65604 ["INT_ADD", "register:40f0:8", ["const:a65604:8", "const:4:8"]]
+ 00a65604 ["CALL", null, ["callee:00481188:8"]]
~~~


<a id="compare-01f2a557a40c4edcd30bc3c81e7af7e6"></a>

### [`00a646cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a64/00a646cc.md) → [`00a656c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a65/00a656c0.md) FUN_00a656c0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a1a7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a7a4.md) · 呼出先 1件 [`00480430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480430.md)
- 新版 呼出元 1件 [`00a1b750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a1b/00a1b750.md) · 呼出先 1件 [`00480750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480750.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a646ec ["INT_ADD", "register:40f0:8", ["const:a646ec:8", "const:4:8"]]
- 00a646ec ["CALL", null, ["callee:00480750:8"]]
+ 00a656e0 ["INT_ADD", "register:40f0:8", ["const:a656e0:8", "const:4:8"]]
+ 00a656e0 ["CALL", null, ["callee:00480750:8"]]
- 00a646f8 ["INT_ADD", "register:40f0:8", ["const:a646f8:8", "const:4:8"]]
- 00a646f8 ["CALL", null, ["callee:00480750:8"]]
+ 00a656ec ["INT_ADD", "register:40f0:8", ["const:a656ec:8", "const:4:8"]]
+ 00a656ec ["CALL", null, ["callee:00480750:8"]]
- 00a64714 ["INT_ADD", "register:40f0:8", ["const:a64714:8", "const:4:8"]]
- 00a64714 ["CALL", null, ["callee:00480750:8"]]
+ 00a65708 ["INT_ADD", "register:40f0:8", ["const:a65708:8", "const:4:8"]]
+ 00a65708 ["CALL", null, ["callee:00480750:8"]]
~~~


<a id="compare-fd715ec652848248c12dfb3b47a46efc"></a>

### [`00a64734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a64/00a64734.md) → [`00a65728`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a65/00a65728.md) FUN_00a65728

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a22424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a22/00a22424.md) · 呼出先 1件 [`00480e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480e68.md)
- 新版 呼出元 1件 [`00a233d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a23/00a233d0.md) · 呼出先 1件 [`00481188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/00481188.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a64754 ["INT_ADD", "register:40f0:8", ["const:a64754:8", "const:4:8"]]
- 00a64754 ["CALL", null, ["callee:00481188:8"]]
+ 00a65748 ["INT_ADD", "register:40f0:8", ["const:a65748:8", "const:4:8"]]
+ 00a65748 ["CALL", null, ["callee:00481188:8"]]
- 00a64760 ["INT_ADD", "register:40f0:8", ["const:a64760:8", "const:4:8"]]
- 00a64760 ["CALL", null, ["callee:00481188:8"]]
+ 00a65754 ["INT_ADD", "register:40f0:8", ["const:a65754:8", "const:4:8"]]
+ 00a65754 ["CALL", null, ["callee:00481188:8"]]
~~~


<a id="compare-ed1a674050a88465cba9ad25d8f57454"></a>

### [`00a64b08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a64/00a64b08.md) → [`00a65afc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a65/00a65afc.md) FUN_00a65afc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 9件 [`005e871c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e871c.md) [`005e9114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e9/005e9114.md) [`005ec2b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ec/005ec2b4.md) [`005edabc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ed/005edabc.md) [`005ee610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ee/005ee610.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 9件 [`005e8acc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e8/005e8acc.md) [`005e94c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e9/005e94c4.md) [`005ec664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ec/005ec664.md) [`005ede6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ed/005ede6c.md) [`005ee9c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ee/005ee9c0.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a64b10 ["INT_ADD", "register:40f0:8", ["const:a64b10:8", "const:4:8"]]
- 00a64b10 ["CALL", null, ["callee:008524fc:8"]]
+ 00a65b04 ["INT_ADD", "register:40f0:8", ["const:a65b04:8", "const:4:8"]]
+ 00a65b04 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-7609c8be6bf1becc0bcb3fa19a231a7d"></a>

### [`00a64b28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a64/00a64b28.md) → [`00a65b1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a65/00a65b1c.md) FUN_00a65b1c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005ec2b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ec/005ec2b4.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`005ec664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ec/005ec664.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a64b30 ["INT_ADD", "register:40f0:8", ["const:a64b30:8", "const:4:8"]]
- 00a64b30 ["CALL", null, ["callee:008524fc:8"]]
+ 00a65b24 ["INT_ADD", "register:40f0:8", ["const:a65b24:8", "const:4:8"]]
+ 00a65b24 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-53fb26ee2108df6eaf89d90678f7d74c"></a>

### [`00a65cdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a65/00a65cdc.md) → [`00a66cd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a66/00a66cd0.md) FUN_00a66cd0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00a658d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a65/00a658d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`007e00a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007e0/007e00a4.md) · 呼出先 3件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00a668c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a66/00a668c4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a65cfc ["INT_ADD", "register:40f0:8", ["const:a65cfc:8", "const:4:8"]]
- 00a65cfc ["CALL", null, ["callee:00a668c4:8"]]
+ 00a66cf0 ["INT_ADD", "register:40f0:8", ["const:a66cf0:8", "const:4:8"]]
+ 00a66cf0 ["CALL", null, ["callee:00a668c4:8"]]
- 00a65d4c ["INT_ADD", "register:40f0:8", ["const:a65d4c:8", "const:4:8"]]
- 00a65d4c ["CALL", null, ["callee:00c58f30:8"]]
+ 00a66d40 ["INT_ADD", "register:40f0:8", ["const:a66d40:8", "const:4:8"]]
+ 00a66d40 ["CALL", null, ["callee:00c58f30:8"]]
- 00a65d90 ["INT_ADD", "register:40f0:8", ["const:a65d90:8", "const:4:8"]]
- 00a65d90 ["CALL", null, ["callee:0043bf04:8"]]
+ 00a66d84 ["INT_ADD", "register:40f0:8", ["const:a66d84:8", "const:4:8"]]
+ 00a66d84 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-95ef43087b970dfb757f92849e0d685b"></a>

### [`00a67ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a67/00a67ca4.md) → [`00a68c98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a68/00a68c98.md) FUN_00a68c98

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a68404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a68/00a68404.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00a693f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a69/00a693f8.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a67cd0 ["INT_ADD", "register:40f0:8", ["const:a67cd0:8", "const:4:8"]]
- 00a67cd0 ["CALL", null, ["callee:00c58f50:8"]]
+ 00a68cc4 ["INT_ADD", "register:40f0:8", ["const:a68cc4:8", "const:4:8"]]
+ 00a68cc4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-f1b7da79c7bd9423a7298da99d3e5883"></a>

### [`00a67cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a67/00a67cf0.md) → [`00a68ce4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a68/00a68ce4.md) FUN_00a68ce4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a64fa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a64/00a64fa8.md) · 呼出先 5件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00869190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869190.md) [`00a680dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a68/00a680dc.md) [`00a68404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a68/00a68404.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00a65f9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a65/00a65f9c.md) · 呼出先 5件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0086a13c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a13c.md) [`00a690d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a69/00a690d0.md) [`00a693f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a69/00a693f8.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a67df0 ["INT_ADD", "register:40f0:8", ["const:a67df0:8", "const:4:8"]]
- 00a67df0 ["CALL", null, ["callee:00a690d0:8"]]
+ 00a68de4 ["INT_ADD", "register:40f0:8", ["const:a68de4:8", "const:4:8"]]
+ 00a68de4 ["CALL", null, ["callee:00a690d0:8"]]
- 00a67e60 ["INT_ADD", "register:40f0:8", ["const:a67e60:8", "const:4:8"]]
- 00a67e60 ["CALL", null, ["callee:0043bf04:8"]]
+ 00a68e54 ["INT_ADD", "register:40f0:8", ["const:a68e54:8", "const:4:8"]]
+ 00a68e54 ["CALL", null, ["callee:0043bf04:8"]]
- 00a67f30 ["INT_ADD", "register:40f0:8", ["const:a67f30:8", "const:4:8"]]
- 00a67f30 ["CALL", null, ["callee:0086a13c:8"]]
+ 00a68f24 ["INT_ADD", "register:40f0:8", ["const:a68f24:8", "const:4:8"]]
+ 00a68f24 ["CALL", null, ["callee:0086a13c:8"]]
~~~


<a id="compare-71de2905077249b1e7a0b0ae1556f5f6"></a>

### [`00a68084`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a68/00a68084.md) → [`00a69078`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a69/00a69078.md) FUN_00a69078

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00869190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869190.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0086a13c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a13c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a6809c ["INT_ADD", "register:40f0:8", ["const:a6809c:8", "const:4:8"]]
- 00a6809c ["CALL", null, ["callee:0086a13c:8"]]
+ 00a69090 ["INT_ADD", "register:40f0:8", ["const:a69090:8", "const:4:8"]]
+ 00a69090 ["CALL", null, ["callee:0086a13c:8"]]
~~~


<a id="compare-ed63bb480f0f66717239ca83db6fad99"></a>

### [`00a680dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a68/00a680dc.md) → [`00a690d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a69/00a690d0.md) FUN_00a690d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a67cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a67/00a67cf0.md) · 呼出先 4件 [`006b8c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8c9c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00a68ce4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a68/00a68ce4.md) · 呼出先 4件 [`006b904c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b9/006b904c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a68120 ["INT_ADD", "register:40f0:8", ["const:a68120:8", "const:4:8"]]
- 00a68120 ["CALL", null, ["callee:00c58f50:8"]]
+ 00a69114 ["INT_ADD", "register:40f0:8", ["const:a69114:8", "const:4:8"]]
+ 00a69114 ["CALL", null, ["callee:00c58f50:8"]]
- 00a68168 ["INT_ADD", "register:40f0:8", ["const:a68168:8", "const:4:8"]]
- 00a68168 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a6915c ["INT_ADD", "register:40f0:8", ["const:a6915c:8", "const:4:8"]]
+ 00a6915c ["CALL", null, ["callee:00c58f30:8"]]
- 00a681a0 ["INT_ADD", "register:40f0:8", ["const:a681a0:8", "const:4:8"]]
- 00a681a0 ["CALL", null, ["callee:00c590a0:8"]]
+ 00a69194 ["INT_ADD", "register:40f0:8", ["const:a69194:8", "const:4:8"]]
+ 00a69194 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-668992a59bb12b98b9f72896804254fd"></a>

### [`00a68404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a68/00a68404.md) → [`00a693f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a69/00a693f8.md) FUN_00a693f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a67cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a67/00a67cf0.md) · 呼出先 6件 [`006b8c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8c9c.md) [`00a67ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a67/00a67ca4.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00a68ce4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a68/00a68ce4.md) · 呼出先 6件 [`006b904c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b9/006b904c.md) [`00a68c98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a68/00a68c98.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a68428 ["INT_ADD", "register:40f0:8", ["const:a68428:8", "const:4:8"]]
- 00a68428 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a6941c ["INT_ADD", "register:40f0:8", ["const:a6941c:8", "const:4:8"]]
+ 00a6941c ["CALL", null, ["callee:00c58f30:8"]]
- 00a68460 ["INT_ADD", "register:40f0:8", ["const:a68460:8", "const:4:8"]]
- 00a68460 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a69454 ["INT_ADD", "register:40f0:8", ["const:a69454:8", "const:4:8"]]
+ 00a69454 ["CALL", null, ["callee:00c58f30:8"]]
- 00a68480 ["INT_ADD", "register:40f0:8", ["const:a68480:8", "const:4:8"]]
- 00a68480 ["CALL", null, ["callee:00c590a0:8"]]
+ 00a69474 ["INT_ADD", "register:40f0:8", ["const:a69474:8", "const:4:8"]]
+ 00a69474 ["CALL", null, ["callee:00c590a0:8"]]
~~~


