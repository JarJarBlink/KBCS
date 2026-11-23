# v16.0.2 → v16.0.3 · 要調査の変更候補 (23)

[一覧の目次](README.md)

<a id="compare-80c3449e7ed541b742923dde8ffb7406"></a>

### [`008d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d0374.md) → [`008d1320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d1/008d1320.md) FUN_008d1320

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008c7b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c7/008c7b94.md) · 呼出先 1件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`008c8b40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c8/008c8b40.md) · 呼出先 1件 [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008d04b0 ["INT_ADD", "register:40f0:8", ["const:8d04b0:8", "const:4:8"]]
- 008d04b0 ["CALL", null, ["callee:00c58fe0:8"]]
+ 008d145c ["INT_ADD", "register:40f0:8", ["const:8d145c:8", "const:4:8"]]
+ 008d145c ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-b1a179215c13a646f8dd3bc76fb40d61"></a>

### [`008d05cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d05cc.md) → [`008d1578`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d1/008d1578.md) FUN_008d1578

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008bf8ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bf/008bf8ac.md)
- 新版 呼出元 0件  · 呼出先 2件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008c0858`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c0/008c0858.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008d05d4 ["INT_ADD", "register:40f0:8", ["const:8d05d4:8", "const:4:8"]]
- 008d05d4 ["CALL", null, ["callee:008524fc:8"]]
+ 008d1580 ["INT_ADD", "register:40f0:8", ["const:8d1580:8", "const:4:8"]]
+ 008d1580 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-e02e43b2157f7061fd30cb947b6c7a24"></a>

### [`008d1ec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d1/008d1ec8.md) → [`008d2e74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d2/008d2e74.md) FUN_008d2e74

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 3件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00a35bec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a35/00a35bec.md) [`00a38c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a38c40.md)
- 新版 呼出元 1件 [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) · 呼出先 3件 [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`00a36be0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a36/00a36be0.md) [`00a39c34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a39/00a39c34.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008d1ed8 ["INT_ADD", "register:40f0:8", ["const:8d1ed8:8", "const:4:8"]]
- 008d1ed8 ["CALL", null, ["callee:00a36be0:8"]]
+ 008d2e84 ["INT_ADD", "register:40f0:8", ["const:8d2e84:8", "const:4:8"]]
+ 008d2e84 ["CALL", null, ["callee:00a36be0:8"]]
- 008d1ee0 ["INT_ADD", "register:40f0:8", ["const:8d1ee0:8", "const:4:8"]]
- 008d1ee0 ["CALL", null, ["callee:0048d1e4:8"]]
+ 008d2e8c ["INT_ADD", "register:40f0:8", ["const:8d2e8c:8", "const:4:8"]]
+ 008d2e8c ["CALL", null, ["callee:0048d1e4:8"]]
- 008d1eec ["INT_ADD", "register:40f0:8", ["const:8d1eec:8", "const:4:8"]]
- 008d1eec ["CALL", null, ["callee:00a39c34:8"]]
+ 008d2e98 ["INT_ADD", "register:40f0:8", ["const:8d2e98:8", "const:4:8"]]
+ 008d2e98 ["CALL", null, ["callee:00a39c34:8"]]
~~~


<a id="compare-1fa79f71f10f256ed8f22f5127bb69ac"></a>

### [`008d6124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d6/008d6124.md) → [`008d70d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d7/008d70d0.md) FUN_008d70d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007738ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00773/007738ec.md) [`00814f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00814/00814f80.md) · 呼出先 2件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b3e4ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3e/00b3e4ac.md)
- 新版 呼出元 2件 [`00773cc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00773/00773cc8.md) [`00815ee4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00815/00815ee4.md) · 呼出先 2件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00b3f4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3f/00b3f4a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008d613c ["INT_ADD", "register:40f0:8", ["const:8d613c:8", "const:4:8"]]
- 008d613c ["CALL", null, ["callee:008524fc:8"]]
+ 008d70e8 ["INT_ADD", "register:40f0:8", ["const:8d70e8:8", "const:4:8"]]
+ 008d70e8 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-6aa99a343edcc0796677c6319b68ee79"></a>

### [`008d81a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d81a8.md) → [`008d9154`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9154.md) FUN_008d9154

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`008d7f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d7/008d7f30.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`008d8edc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d8/008d8edc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008d81b8 ["INT_ADD", "register:40f0:8", ["const:8d81b8:8", "const:4:8"]]
- 008d81b8 ["CALL", null, ["callee:008d8edc:8"]]
+ 008d9164 ["INT_ADD", "register:40f0:8", ["const:8d9164:8", "const:4:8"]]
+ 008d9164 ["CALL", null, ["callee:008d8edc:8"]]
~~~


<a id="compare-e456d4194870ddc7352500cefcff57d9"></a>

### [`008d82a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d82a0.md) → [`008d924c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d924c.md) FUN_008d924c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008d7248`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d7/008d7248.md) · 呼出先 5件 [`008d828c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d828c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`008d81f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d8/008d81f4.md) · 呼出先 5件 [`008d9238`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9238.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008d82f4 ["INT_ADD", "register:40f0:8", ["const:8d82f4:8", "const:4:8"]]
- 008d82f4 ["CALL", null, ["callee:00c58f50:8"]]
+ 008d92a0 ["INT_ADD", "register:40f0:8", ["const:8d92a0:8", "const:4:8"]]
+ 008d92a0 ["CALL", null, ["callee:00c58f50:8"]]
- 008d8358 ["INT_ADD", "register:40f0:8", ["const:8d8358:8", "const:4:8"]]
- 008d8358 ["CALL", null, ["callee:00c58f30:8"]]
+ 008d9304 ["INT_ADD", "register:40f0:8", ["const:8d9304:8", "const:4:8"]]
+ 008d9304 ["CALL", null, ["callee:00c58f30:8"]]
- 008d8380 ["INT_ADD", "register:40f0:8", ["const:8d8380:8", "const:4:8"]]
- 008d8380 ["CALL", null, ["callee:00c590a0:8"]]
+ 008d932c ["INT_ADD", "register:40f0:8", ["const:8d932c:8", "const:4:8"]]
+ 008d932c ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-20499a8321ebc1a416238e6e162d8c47"></a>

### [`008d9a60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9a60.md) → [`008daa0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008daa0c.md) FUN_008daa0c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008d2b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d2/008d2b8c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008d3b38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d3/008d3b38.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008d9a80 ["INT_ADD", "register:40f0:8", ["const:8d9a80:8", "const:4:8"]]
- 008d9a80 ["CALL", null, ["callee:00c58f50:8"]]
+ 008daa2c ["INT_ADD", "register:40f0:8", ["const:8daa2c:8", "const:4:8"]]
+ 008daa2c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-c8e79255fcb652c7ad839d5d98e5d692"></a>

### [`008d9a94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9a94.md) → [`008daa40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008daa40.md) FUN_008daa40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`008d2b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d2/008d2b8c.md) [`008d79e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d7/008d79e4.md)
- 新版 呼出元 0件  · 呼出先 3件 [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`008d3b38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d3/008d3b38.md) [`008d8990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d8/008d8990.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008d9ac8 ["INT_ADD", "register:40f0:8", ["const:8d9ac8:8", "const:4:8"]]
- 008d9ac8 ["CALL", null, ["callee:008d8990:8"]]
+ 008daa74 ["INT_ADD", "register:40f0:8", ["const:8daa74:8", "const:4:8"]]
+ 008daa74 ["CALL", null, ["callee:008d8990:8"]]
- 008d9ad0 ["INT_ADD", "register:40f0:8", ["const:8d9ad0:8", "const:4:8"]]
- 008d9ad0 ["CALL", null, ["callee:008ba17c:8"]]
+ 008daa7c ["INT_ADD", "register:40f0:8", ["const:8daa7c:8", "const:4:8"]]
+ 008daa7c ["CALL", null, ["callee:008ba17c:8"]]
~~~


<a id="compare-500e123813951f84e9e7e528155096f0"></a>

### [`008da7a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da7a8.md) → [`008db754`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008db/008db754.md) FUN_008db754

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008d54e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d5/008d54e0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008d648c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d6/008d648c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008da7e4 ["COPY", "register:0:8", ["register:4040:8"]]
- 008da7e4 ["INT_ADD", "register:40f0:8", ["const:8da7e4:8", "const:4:8"]]
- 008da7e4 ["CALLIND", null, ["register:0:8"]]
+ 008db790 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008db790 ["INT_ADD", "register:40f0:8", ["const:8db790:8", "const:4:8"]]
+ 008db790 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-abd203938290840dadf6aced25eec09b"></a>

### [`008daeac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008daeac.md) → [`008dbe58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008db/008dbe58.md) FUN_008dbe58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008d6d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d6/008d6d34.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008d7ce0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d7/008d7ce0.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008daee8 ["COPY", "register:0:8", ["register:4040:8"]]
- 008daee8 ["INT_ADD", "register:40f0:8", ["const:8daee8:8", "const:4:8"]]
- 008daee8 ["CALLIND", null, ["register:0:8"]]
+ 008dbe94 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008dbe94 ["INT_ADD", "register:40f0:8", ["const:8dbe94:8", "const:4:8"]]
+ 008dbe94 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-16781a8ddb08bedfca050b880658aa0e"></a>

### [`008daefc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008daefc.md) → [`008dbea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008db/008dbea8.md) FUN_008dbea8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00596f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596f6c.md) [`00865b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865b4c.md) [`008d615c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d6/008d615c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`0059728c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/0059728c.md) [`00866af8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/00866af8.md) [`008d7108`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d7/008d7108.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008daf40 ["COPY", "register:0:8", ["register:4040:8"]]
- 008daf40 ["INT_ADD", "register:40f0:8", ["const:8daf40:8", "const:4:8"]]
- 008daf40 ["CALLIND", null, ["register:0:8"]]
+ 008dbeec ["COPY", "register:0:8", ["register:4040:8"]]
+ 008dbeec ["INT_ADD", "register:40f0:8", ["const:8dbeec:8", "const:4:8"]]
+ 008dbeec ["CALLIND", null, ["register:0:8"]]
- 008daf58 ["COPY", "register:0:8", ["register:4048:8"]]
- 008daf58 ["INT_ADD", "register:40f0:8", ["const:8daf58:8", "const:4:8"]]
- 008daf58 ["CALLIND", null, ["register:0:8"]]
+ 008dbf04 ["COPY", "register:0:8", ["register:4048:8"]]
+ 008dbf04 ["INT_ADD", "register:40f0:8", ["const:8dbf04:8", "const:4:8"]]
+ 008dbf04 ["CALLIND", null, ["register:0:8"]]
- 008daf8c ["COPY", "register:0:8", ["register:4040:8"]]
- 008daf8c ["INT_ADD", "register:40f0:8", ["const:8daf8c:8", "const:4:8"]]
- 008daf8c ["CALLIND", null, ["register:0:8"]]
+ 008dbf38 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008dbf38 ["INT_ADD", "register:40f0:8", ["const:8dbf38:8", "const:4:8"]]
+ 008dbf38 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-27aa25e1ca64abd833057248dcc468cb"></a>

### [`008df46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008df/008df46c.md) → [`008e0418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e0/008e0418.md) FUN_008e0418

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`008dd084`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008dd084.md) [`008df46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008df/008df46c.md) [`008df938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008df/008df938.md) · 呼出先 4件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008df46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008df/008df46c.md) [`008df938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008df/008df938.md) [`008dfdc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008df/008dfdc4.md)
- 新版 呼出元 3件 [`008de030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008de/008de030.md) [`008e0418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e0/008e0418.md) [`008e08e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e0/008e08e4.md) · 呼出先 4件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008e0418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e0/008e0418.md) [`008e08e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e0/008e08e4.md) [`008e0d70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e0/008e0d70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008df4c8 ["INT_ADD", "register:40f0:8", ["const:8df4c8:8", "const:4:8"]]
- 008df4c8 ["CALL", null, ["callee:008524fc:8"]]
+ 008e0474 ["INT_ADD", "register:40f0:8", ["const:8e0474:8", "const:4:8"]]
+ 008e0474 ["CALL", null, ["callee:008524fc:8"]]
- 008df4d8 ["INT_ADD", "register:40f0:8", ["const:8df4d8:8", "const:4:8"]]
- 008df4d8 ["CALL", null, ["callee:008524fc:8"]]
+ 008e0484 ["INT_ADD", "register:40f0:8", ["const:8e0484:8", "const:4:8"]]
+ 008e0484 ["CALL", null, ["callee:008524fc:8"]]
- 008df4e8 ["INT_ADD", "register:40f0:8", ["const:8df4e8:8", "const:4:8"]]
- 008df4e8 ["CALL", null, ["callee:008524fc:8"]]
+ 008e0494 ["INT_ADD", "register:40f0:8", ["const:8e0494:8", "const:4:8"]]
+ 008e0494 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-8e2d79d27814bb5e9dc1c28302a99843"></a>

### [`008df938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008df/008df938.md) → [`008e08e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e0/008e08e4.md) FUN_008e08e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008df46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008df/008df46c.md) · 呼出先 2件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008df46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008df/008df46c.md)
- 新版 呼出元 1件 [`008e0418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e0/008e0418.md) · 呼出先 2件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008e0418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e0/008e0418.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008df980 ["INT_ADD", "register:40f0:8", ["const:8df980:8", "const:4:8"]]
- 008df980 ["CALL", null, ["callee:008524fc:8"]]
+ 008e092c ["INT_ADD", "register:40f0:8", ["const:8e092c:8", "const:4:8"]]
+ 008e092c ["CALL", null, ["callee:008524fc:8"]]
- 008df990 ["INT_ADD", "register:40f0:8", ["const:8df990:8", "const:4:8"]]
- 008df990 ["CALL", null, ["callee:008524fc:8"]]
+ 008e093c ["INT_ADD", "register:40f0:8", ["const:8e093c:8", "const:4:8"]]
+ 008e093c ["CALL", null, ["callee:008524fc:8"]]
- 008df9a0 ["INT_ADD", "register:40f0:8", ["const:8df9a0:8", "const:4:8"]]
- 008df9a0 ["CALL", null, ["callee:008524fc:8"]]
+ 008e094c ["INT_ADD", "register:40f0:8", ["const:8e094c:8", "const:4:8"]]
+ 008e094c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-4a4bbe6054f9e448f464f4b7d8a8cd52"></a>

### [`008dfdc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008df/008dfdc4.md) → [`008e0d70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e0/008e0d70.md) FUN_008e0d70

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`008df46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008df/008df46c.md) [`008dfdc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008df/008dfdc4.md) · 呼出先 3件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008dfdc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008df/008dfdc4.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 2件 [`008e0418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e0/008e0418.md) [`008e0d70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e0/008e0d70.md) · 呼出先 3件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008e0d70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e0/008e0d70.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008dfe28 ["INT_ADD", "register:40f0:8", ["const:8dfe28:8", "const:4:8"]]
- 008dfe28 ["CALL", null, ["callee:008524fc:8"]]
+ 008e0dd4 ["INT_ADD", "register:40f0:8", ["const:8e0dd4:8", "const:4:8"]]
+ 008e0dd4 ["CALL", null, ["callee:008524fc:8"]]
- 008dfe38 ["INT_ADD", "register:40f0:8", ["const:8dfe38:8", "const:4:8"]]
- 008dfe38 ["CALL", null, ["callee:008524fc:8"]]
+ 008e0de4 ["INT_ADD", "register:40f0:8", ["const:8e0de4:8", "const:4:8"]]
+ 008e0de4 ["CALL", null, ["callee:008524fc:8"]]
- 008dfe48 ["INT_ADD", "register:40f0:8", ["const:8dfe48:8", "const:4:8"]]
- 008dfe48 ["CALL", null, ["callee:008524fc:8"]]
+ 008e0df4 ["INT_ADD", "register:40f0:8", ["const:8e0df4:8", "const:4:8"]]
+ 008e0df4 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-f2cf18307764955cc2aefedff5e4493a"></a>

### [`008e0648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e0/008e0648.md) → [`008e15f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e1/008e15f4.md) FUN_008e15f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008dd148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008dd148.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0086a008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a008.md) [`008e07e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e0/008e07e8.md) [`008e0a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e0/008e0a80.md) [`008e0a94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e0/008e0a94.md)
- 新版 呼出元 1件 [`008de0f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008de/008de0f4.md) · 呼出先 8件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0086afb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086afb4.md) [`008e1794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e1/008e1794.md) [`008e1a2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e1/008e1a2c.md) [`008e1a40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e1/008e1a40.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e06cc ["INT_ADD", "register:40f0:8", ["const:8e06cc:8", "const:4:8"]]
- 008e06cc ["CALL", null, ["callee:00c58f30:8"]]
+ 008e1678 ["INT_ADD", "register:40f0:8", ["const:8e1678:8", "const:4:8"]]
+ 008e1678 ["CALL", null, ["callee:00c58f30:8"]]
- 008e06f0 ["INT_ADD", "register:40f0:8", ["const:8e06f0:8", "const:4:8"]]
- 008e06f0 ["CALL", null, ["callee:008e1794:8"]]
+ 008e169c ["INT_ADD", "register:40f0:8", ["const:8e169c:8", "const:4:8"]]
+ 008e169c ["CALL", null, ["callee:008e1794:8"]]
- 008e0720 ["INT_ADD", "register:40f0:8", ["const:8e0720:8", "const:4:8"]]
- 008e0720 ["CALL", null, ["callee:008e1a40:8"]]
+ 008e16cc ["INT_ADD", "register:40f0:8", ["const:8e16cc:8", "const:4:8"]]
+ 008e16cc ["CALL", null, ["callee:008e1a40:8"]]
~~~


<a id="compare-f193cc87aa8ea5a8452a6e816c947ceb"></a>

### [`008e07e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e0/008e07e8.md) → [`008e1794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e1/008e1794.md) FUN_008e1794

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`008dd148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008dd148.md) [`008e0648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e0/008e0648.md) · 呼出先 2件 [`006d5efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d5/006d5efc.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 2件 [`008de0f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008de/008de0f4.md) [`008e15f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e1/008e15f4.md) · 呼出先 2件 [`006d62ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d6/006d62ac.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e0818 ["INT_ADD", "register:40f0:8", ["const:8e0818:8", "const:4:8"]]
- 008e0818 ["CALL", null, ["callee:00c54d60:8"]]
+ 008e17c4 ["INT_ADD", "register:40f0:8", ["const:8e17c4:8", "const:4:8"]]
+ 008e17c4 ["CALL", null, ["callee:00c54d60:8"]]
- 008e084c ["INT_ADD", "register:40f0:8", ["const:8e084c:8", "const:4:8"]]
- 008e084c ["CALL", null, ["callee:006d62ac:8"]]
+ 008e17f8 ["INT_ADD", "register:40f0:8", ["const:8e17f8:8", "const:4:8"]]
+ 008e17f8 ["CALL", null, ["callee:006d62ac:8"]]
- 008e0870 ["INT_ADD", "register:40f0:8", ["const:8e0870:8", "const:4:8"]]
- 008e0870 ["CALL", null, ["callee:006d62ac:8"]]
+ 008e181c ["INT_ADD", "register:40f0:8", ["const:8e181c:8", "const:4:8"]]
+ 008e181c ["CALL", null, ["callee:006d62ac:8"]]
~~~


<a id="compare-7fccfb931d4a75122ff5bbe39958dcea"></a>

### [`008e0a2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e0/008e0a2c.md) → [`008e19d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e1/008e19d8.md) FUN_008e19d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0086a008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a008.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0086afb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086afb4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e0a50 ["INT_ADD", "register:40f0:8", ["const:8e0a50:8", "const:4:8"]]
- 008e0a50 ["CALL", null, ["callee:0086afb4:8"]]
+ 008e19fc ["INT_ADD", "register:40f0:8", ["const:8e19fc:8", "const:4:8"]]
+ 008e19fc ["CALL", null, ["callee:0086afb4:8"]]
~~~


<a id="compare-8799d76852f20595784793819f233113"></a>

### [`008e207c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e2/008e207c.md) → [`008e3028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e3/008e3028.md) FUN_008e3028

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008e49f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e4/008e49f4.md) · 呼出先 8件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`008e59a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e5/008e59a0.md) · 呼出先 8件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e21c0 ["INT_ADD", "register:40f0:8", ["const:8e21c0:8", "const:4:8"]]
- 008e21c0 ["CALL", null, ["callee:00c58f30:8"]]
+ 008e316c ["INT_ADD", "register:40f0:8", ["const:8e316c:8", "const:4:8"]]
+ 008e316c ["CALL", null, ["callee:00c58f30:8"]]
- 008e21f4 ["INT_ADD", "register:40f0:8", ["const:8e21f4:8", "const:4:8"]]
- 008e21f4 ["CALL", null, ["callee:0043bf04:8"]]
+ 008e31a0 ["INT_ADD", "register:40f0:8", ["const:8e31a0:8", "const:4:8"]]
+ 008e31a0 ["CALL", null, ["callee:0043bf04:8"]]
- 008e2244 ["INT_ADD", "register:40f0:8", ["const:8e2244:8", "const:4:8"]]
- 008e2244 ["CALL", null, ["callee:00c58f30:8"]]
+ 008e31f0 ["INT_ADD", "register:40f0:8", ["const:8e31f0:8", "const:4:8"]]
+ 008e31f0 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-051d3ce5a496aa7b129bfb47f6606fc6"></a>

### [`008e2840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e2/008e2840.md) → [`008e37ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e3/008e37ec.md) FUN_008e37ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008e49f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e4/008e49f4.md) · 呼出先 3件 [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008e59a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e5/008e59a0.md) · 呼出先 3件 [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e2864 ["INT_ADD", "register:40f0:8", ["const:8e2864:8", "const:4:8"]]
- 008e2864 ["CALL", null, ["callee:0046db10:8"]]
+ 008e3810 ["INT_ADD", "register:40f0:8", ["const:8e3810:8", "const:4:8"]]
+ 008e3810 ["CALL", null, ["callee:0046db10:8"]]
- 008e28a0 ["INT_ADD", "register:40f0:8", ["const:8e28a0:8", "const:4:8"]]
- 008e28a0 ["CALL", null, ["callee:00c58f30:8"]]
+ 008e384c ["INT_ADD", "register:40f0:8", ["const:8e384c:8", "const:4:8"]]
+ 008e384c ["CALL", null, ["callee:00c58f30:8"]]
- 008e28bc ["INT_ADD", "register:40f0:8", ["const:8e28bc:8", "const:4:8"]]
- 008e28bc ["CALL", null, ["callee:00c58f30:8"]]
+ 008e3868 ["INT_ADD", "register:40f0:8", ["const:8e3868:8", "const:4:8"]]
+ 008e3868 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-1cb712cf43fa719e091999bff312daa6"></a>

### [`008e3148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e3/008e3148.md) → [`008e40f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e4/008e40f4.md) FUN_008e40f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008e2910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e2/008e2910.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`008e82b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e82b8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008e38bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e3/008e38bc.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`008e9264`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9264.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e3188 ["INT_ADD", "register:40f0:8", ["const:8e3188:8", "const:4:8"]]
- 008e3188 ["CALL", null, ["callee:00487c9c:8"]]
+ 008e4134 ["INT_ADD", "register:40f0:8", ["const:8e4134:8", "const:4:8"]]
+ 008e4134 ["CALL", null, ["callee:00487c9c:8"]]
- 008e3198 ["INT_ADD", "register:40f0:8", ["const:8e3198:8", "const:4:8"]]
- 008e3198 ["CALL", null, ["callee:00487c9c:8"]]
+ 008e4144 ["INT_ADD", "register:40f0:8", ["const:8e4144:8", "const:4:8"]]
+ 008e4144 ["CALL", null, ["callee:00487c9c:8"]]
- 008e31c0 ["COPY", "register:0:8", ["register:4040:8"]]
- 008e31c0 ["INT_ADD", "register:40f0:8", ["const:8e31c0:8", "const:4:8"]]
- 008e31c0 ["CALLIND", null, ["register:0:8"]]
+ 008e416c ["COPY", "register:0:8", ["register:4040:8"]]
+ 008e416c ["INT_ADD", "register:40f0:8", ["const:8e416c:8", "const:4:8"]]
+ 008e416c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7dfc3459b760f8d9b5ab8e185b9cdb14"></a>

### [`008e3368`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e3/008e3368.md) → [`008e4314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e4/008e4314.md) FUN_008e4314

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008e2910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e2/008e2910.md) · 呼出先 1件 [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md)
- 新版 呼出元 1件 [`008e38bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e3/008e38bc.md) · 呼出先 1件 [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e338c ["INT_ADD", "register:40f0:8", ["const:8e338c:8", "const:4:8"]]
- 008e338c ["CALL", null, ["callee:00487c9c:8"]]
+ 008e4338 ["INT_ADD", "register:40f0:8", ["const:8e4338:8", "const:4:8"]]
+ 008e4338 ["CALL", null, ["callee:00487c9c:8"]]
- 008e339c ["INT_ADD", "register:40f0:8", ["const:8e339c:8", "const:4:8"]]
- 008e339c ["CALL", null, ["callee:00487c9c:8"]]
+ 008e4348 ["INT_ADD", "register:40f0:8", ["const:8e4348:8", "const:4:8"]]
+ 008e4348 ["CALL", null, ["callee:00487c9c:8"]]
- 008e33ac ["INT_ADD", "register:40f0:8", ["const:8e33ac:8", "const:4:8"]]
- 008e33ac ["CALL", null, ["callee:00487c9c:8"]]
+ 008e4358 ["INT_ADD", "register:40f0:8", ["const:8e4358:8", "const:4:8"]]
+ 008e4358 ["CALL", null, ["callee:00487c9c:8"]]
~~~


<a id="compare-8a161fbfc8c74d3f695ddf5a6ebca811"></a>

### [`008e3ce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e3/008e3ce0.md) → [`008e4c8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e4/008e4c8c.md) FUN_008e4c8c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`008e9390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9390.md) [`008e9ce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9ce0.md) [`008ea310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea310.md) · 呼出先 3件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md)
- 新版 呼出元 3件 [`008ea33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008ea33c.md) [`008eac8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008eac8c.md) [`008eb2bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008eb2bc.md) · 呼出先 3件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f1c.md) [`008b89cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b89cc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e3cf0 ["INT_ADD", "register:40f0:8", ["const:8e3cf0:8", "const:4:8"]]
- 008e3cf0 ["CALL", null, ["callee:008524fc:8"]]
+ 008e4c9c ["INT_ADD", "register:40f0:8", ["const:8e4c9c:8", "const:4:8"]]
+ 008e4c9c ["CALL", null, ["callee:008524fc:8"]]
- 008e3d00 ["INT_ADD", "register:40f0:8", ["const:8e3d00:8", "const:4:8"]]
- 008e3d00 ["CALL", null, ["callee:008b89cc:8"]]
+ 008e4cac ["INT_ADD", "register:40f0:8", ["const:8e4cac:8", "const:4:8"]]
+ 008e4cac ["CALL", null, ["callee:008b89cc:8"]]
- 008e3d08 ["INT_ADD", "register:40f0:8", ["const:8e3d08:8", "const:4:8"]]
- 008e3d08 ["CALL", null, ["callee:008b7f1c:8"]]
+ 008e4cb4 ["INT_ADD", "register:40f0:8", ["const:8e4cb4:8", "const:4:8"]]
+ 008e4cb4 ["CALL", null, ["callee:008b7f1c:8"]]
~~~


<a id="compare-592abb20c29e24d9da344d3f9117c2bc"></a>

### [`008e4470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e4/008e4470.md) → [`008e541c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e5/008e541c.md) FUN_008e541c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) · 呼出先 2件 [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) [`0046ef38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ef38.md)
- 新版 呼出元 1件 [`00840888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00840/00840888.md) · 呼出先 2件 [`0046eb24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eb24.md) [`0046f258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f258.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e44d4 ["INT_ADD", "register:40f0:8", ["const:8e44d4:8", "const:4:8"]]
- 008e44d4 ["CALL", null, ["callee:0046f258:8"]]
+ 008e5480 ["INT_ADD", "register:40f0:8", ["const:8e5480:8", "const:4:8"]]
+ 008e5480 ["CALL", null, ["callee:0046f258:8"]]
- 008e44dc ["INT_ADD", "register:40f0:8", ["const:8e44dc:8", "const:4:8"]]
- 008e44dc ["CALL", null, ["callee:0046eb24:8"]]
+ 008e5488 ["INT_ADD", "register:40f0:8", ["const:8e5488:8", "const:4:8"]]
+ 008e5488 ["CALL", null, ["callee:0046eb24:8"]]
- 008e44e8 ["INT_ADD", "register:40f0:8", ["const:8e44e8:8", "const:4:8"]]
- 008e44e8 ["CALL", null, ["callee:0046eb24:8"]]
+ 008e5494 ["INT_ADD", "register:40f0:8", ["const:8e5494:8", "const:4:8"]]
+ 008e5494 ["CALL", null, ["callee:0046eb24:8"]]
~~~


<a id="compare-b61d34531b104b51caea7eca6e9bac31"></a>

### [`008e45b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e4/008e45b4.md) → [`008e5560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e5/008e5560.md) FUN_008e5560

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00868c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868c78.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00869c24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00869/00869c24.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e45cc ["INT_ADD", "register:40f0:8", ["const:8e45cc:8", "const:4:8"]]
- 008e45cc ["CALL", null, ["callee:00869c24:8"]]
+ 008e5578 ["INT_ADD", "register:40f0:8", ["const:8e5578:8", "const:4:8"]]
+ 008e5578 ["CALL", null, ["callee:00869c24:8"]]
~~~


<a id="compare-3b749057150d5df327022dbcd875cd26"></a>

### [`008e45e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e4/008e45e4.md) → [`008e5590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e5/008e5590.md) FUN_008e5590

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`008e3da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e3/008e3da4.md) [`008e9614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9614.md) · 呼出先 12件 [`008e8344`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8344.md) [`008e83bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e83bc.md) [`008e8608`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8608.md) [`008e8690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8690.md) [`008e86a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e86a4.md)
- 新版 呼出元 2件 [`008e4d50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e4/008e4d50.md) [`008ea5c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ea/008ea5c0.md) · 呼出先 12件 [`008e92f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e92f0.md) [`008e9368`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9368.md) [`008e95b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e95b4.md) [`008e963c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e963c.md) [`008e9650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9650.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e4630 ["INT_ADD", "register:40f0:8", ["const:8e4630:8", "const:4:8"]]
- 008e4630 ["CALL", null, ["callee:008e9368:8"]]
+ 008e55dc ["INT_ADD", "register:40f0:8", ["const:8e55dc:8", "const:4:8"]]
+ 008e55dc ["CALL", null, ["callee:008e9368:8"]]
- 008e4684 ["INT_ADD", "register:40f0:8", ["const:8e4684:8", "const:4:8"]]
- 008e4684 ["CALL", null, ["callee:00c58f30:8"]]
+ 008e5630 ["INT_ADD", "register:40f0:8", ["const:8e5630:8", "const:4:8"]]
+ 008e5630 ["CALL", null, ["callee:00c58f30:8"]]
- 008e46a8 ["INT_ADD", "register:40f0:8", ["const:8e46a8:8", "const:4:8"]]
- 008e46a8 ["CALL", null, ["callee:008e9650:8"]]
+ 008e5654 ["INT_ADD", "register:40f0:8", ["const:8e5654:8", "const:4:8"]]
+ 008e5654 ["CALL", null, ["callee:008e9650:8"]]
~~~


<a id="compare-97b082aa4e086b512633cf17c677214f"></a>

### [`008e5108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e5/008e5108.md) → [`008e60b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e6/008e60b4.md) FUN_008e60b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`008e49f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e4/008e49f4.md) [`008e5fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e5/008e5fd0.md) · 呼出先 3件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`008e59a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e5/008e59a0.md) [`008e6f7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e6/008e6f7c.md) · 呼出先 3件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e5188 ["INT_ADD", "register:40f0:8", ["const:8e5188:8", "const:4:8"]]
- 008e5188 ["CALL", null, ["callee:0043be80:8"]]
+ 008e6134 ["INT_ADD", "register:40f0:8", ["const:8e6134:8", "const:4:8"]]
+ 008e6134 ["CALL", null, ["callee:0043be80:8"]]
- 008e51e0 ["INT_ADD", "register:40f0:8", ["const:8e51e0:8", "const:4:8"]]
- 008e51e0 ["CALL", null, ["callee:00c58f50:8"]]
+ 008e618c ["INT_ADD", "register:40f0:8", ["const:8e618c:8", "const:4:8"]]
+ 008e618c ["CALL", null, ["callee:00c58f50:8"]]
- 008e5234 ["INT_ADD", "register:40f0:8", ["const:8e5234:8", "const:4:8"]]
- 008e5234 ["CALL", null, ["callee:00c58f80:8"]]
+ 008e61e0 ["INT_ADD", "register:40f0:8", ["const:8e61e0:8", "const:4:8"]]
+ 008e61e0 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-9ebac756ea42b2c0de82e162f7ed495f"></a>

### [`008e5da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e5/008e5da8.md) → [`008e6d54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e6/008e6d54.md) FUN_008e6d54

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e5df0 ["INT_ADD", "register:40f0:8", ["const:8e5df0:8", "const:4:8"]]
- 008e5df0 ["CALL", null, ["callee:00c58f50:8"]]
+ 008e6d9c ["INT_ADD", "register:40f0:8", ["const:8e6d9c:8", "const:4:8"]]
+ 008e6d9c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-253714491a2b2351f668b15cbaf3b0c7"></a>

### [`008e5e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e5/008e5e20.md) → [`008e6dcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e6/008e6dcc.md) FUN_008e6dcc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e5e68 ["INT_ADD", "register:40f0:8", ["const:8e5e68:8", "const:4:8"]]
- 008e5e68 ["CALL", null, ["callee:00c58f50:8"]]
+ 008e6e14 ["INT_ADD", "register:40f0:8", ["const:8e6e14:8", "const:4:8"]]
+ 008e6e14 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-9366c894f53552be04fa64ba6f5b1bf2"></a>

### [`008e5e98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e5/008e5e98.md) → [`008e6e44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e6/008e6e44.md) FUN_008e6e44

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008e6700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e6/008e6700.md) · 呼出先 3件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`008e76ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e7/008e76ac.md) · 呼出先 3件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e5f40 ["INT_ADD", "register:40f0:8", ["const:8e5f40:8", "const:4:8"]]
- 008e5f40 ["CALL", null, ["callee:0043be80:8"]]
+ 008e6eec ["INT_ADD", "register:40f0:8", ["const:8e6eec:8", "const:4:8"]]
+ 008e6eec ["CALL", null, ["callee:0043be80:8"]]
- 008e5f64 ["INT_ADD", "register:40f0:8", ["const:8e5f64:8", "const:4:8"]]
- 008e5f64 ["CALL", null, ["callee:00c58f50:8"]]
+ 008e6f10 ["INT_ADD", "register:40f0:8", ["const:8e6f10:8", "const:4:8"]]
+ 008e6f10 ["CALL", null, ["callee:00c58f50:8"]]
- 008e5fcc ["INT_ADD", "register:40f0:8", ["const:8e5fcc:8", "const:4:8"]]
- 008e5fcc ["CALL", null, ["callee:00c58f80:8"]]
+ 008e6f78 ["INT_ADD", "register:40f0:8", ["const:8e6f78:8", "const:4:8"]]
+ 008e6f78 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-0072d4984923e8f64afc2993234ab871"></a>

### [`008e82cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e82cc.md) → [`008e9278`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9278.md) FUN_008e9278

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e8314 ["INT_ADD", "register:40f0:8", ["const:8e8314:8", "const:4:8"]]
- 008e8314 ["CALL", null, ["callee:00c58f50:8"]]
+ 008e92c0 ["INT_ADD", "register:40f0:8", ["const:8e92c0:8", "const:4:8"]]
+ 008e92c0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-e1567d3410d8ab1e97db5a89c880729f"></a>

### [`008e8344`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8344.md) → [`008e92f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e92f0.md) FUN_008e92f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008e45e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e4/008e45e4.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008e5590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e5/008e5590.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e838c ["INT_ADD", "register:40f0:8", ["const:8e838c:8", "const:4:8"]]
- 008e838c ["CALL", null, ["callee:00c58f50:8"]]
+ 008e9338 ["INT_ADD", "register:40f0:8", ["const:8e9338:8", "const:4:8"]]
+ 008e9338 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-3b9c6cc0b59e6b6615bab3376b9817d9"></a>

### [`008e83bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e83bc.md) → [`008e9368`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9368.md) FUN_008e9368

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008e45e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e4/008e45e4.md) · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`008e8518`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8518.md) [`008e85a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e85a0.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`008e5590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e5/008e5590.md) · 呼出先 6件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`008e94c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e94c4.md) [`008e954c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e954c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e8408 ["INT_ADD", "register:40f0:8", ["const:8e8408:8", "const:4:8"]]
- 008e8408 ["CALL", null, ["callee:00c58f30:8"]]
+ 008e93b4 ["INT_ADD", "register:40f0:8", ["const:8e93b4:8", "const:4:8"]]
+ 008e93b4 ["CALL", null, ["callee:00c58f30:8"]]
- 008e8488 ["INT_ADD", "register:40f0:8", ["const:8e8488:8", "const:4:8"]]
- 008e8488 ["CALL", null, ["callee:0043be80:8"]]
+ 008e9434 ["INT_ADD", "register:40f0:8", ["const:8e9434:8", "const:4:8"]]
+ 008e9434 ["CALL", null, ["callee:0043be80:8"]]
- 008e84d8 ["INT_ADD", "register:40f0:8", ["const:8e84d8:8", "const:4:8"]]
- 008e84d8 ["CALL", null, ["callee:008e954c:8"]]
+ 008e9484 ["INT_ADD", "register:40f0:8", ["const:8e9484:8", "const:4:8"]]
+ 008e9484 ["CALL", null, ["callee:008e954c:8"]]
~~~


<a id="compare-c36bff036422cb4392990349e8bb4607"></a>

### [`008e8518`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8518.md) → [`008e94c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e94c4.md) FUN_008e94c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008e83bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e83bc.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008e9368`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9368.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e857c ["INT_ADD", "register:40f0:8", ["const:8e857c:8", "const:4:8"]]
- 008e857c ["CALL", null, ["callee:00c58f50:8"]]
+ 008e9528 ["INT_ADD", "register:40f0:8", ["const:8e9528:8", "const:4:8"]]
+ 008e9528 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-a64e628d45c7ac6aa2bc6a85368a3288"></a>

### [`008e85b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e85b4.md) → [`008e9560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9560.md) FUN_008e9560

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e85f4 ["INT_ADD", "register:40f0:8", ["const:8e85f4:8", "const:4:8"]]
- 008e85f4 ["CALL", null, ["callee:00c58f50:8"]]
+ 008e95a0 ["INT_ADD", "register:40f0:8", ["const:8e95a0:8", "const:4:8"]]
+ 008e95a0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-ccdac1f0a393ac7b65ea7cf23da574ed"></a>

### [`008e8608`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8608.md) → [`008e95b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e95b4.md) FUN_008e95b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008e45e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e4/008e45e4.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008e5590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e5/008e5590.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e866c ["INT_ADD", "register:40f0:8", ["const:8e866c:8", "const:4:8"]]
- 008e866c ["CALL", null, ["callee:00c58f50:8"]]
+ 008e9618 ["INT_ADD", "register:40f0:8", ["const:8e9618:8", "const:4:8"]]
+ 008e9618 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-73fa6977291544495ef1015d8524c575"></a>

### [`008e86a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e86a4.md) → [`008e9650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9650.md) FUN_008e9650

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008e45e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e4/008e45e4.md) · 呼出先 7件 [`008e82b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e82b8.md) [`008e880c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e880c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008e5590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e5/008e5590.md) · 呼出先 7件 [`008e9264`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9264.md) [`008e97b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e97b8.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e8760 ["INT_ADD", "register:40f0:8", ["const:8e8760:8", "const:4:8"]]
- 008e8760 ["CALL", null, ["callee:00c58f30:8"]]
+ 008e970c ["INT_ADD", "register:40f0:8", ["const:8e970c:8", "const:4:8"]]
+ 008e970c ["CALL", null, ["callee:00c58f30:8"]]
- 008e8778 ["INT_ADD", "register:40f0:8", ["const:8e8778:8", "const:4:8"]]
- 008e8778 ["CALL", null, ["callee:00c590a0:8"]]
+ 008e9724 ["INT_ADD", "register:40f0:8", ["const:8e9724:8", "const:4:8"]]
+ 008e9724 ["CALL", null, ["callee:00c590a0:8"]]
- 008e87cc ["INT_ADD", "register:40f0:8", ["const:8e87cc:8", "const:4:8"]]
- 008e87cc ["CALL", null, ["callee:008e9264:8"]]
+ 008e9778 ["INT_ADD", "register:40f0:8", ["const:8e9778:8", "const:4:8"]]
+ 008e9778 ["CALL", null, ["callee:008e9264:8"]]
~~~


<a id="compare-17b4152bfcc1dad7752ebf6ac1ce790c"></a>

### [`008e880c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e880c.md) → [`008e97b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e97b8.md) FUN_008e97b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008e86a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e86a4.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008e9650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9650.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e884c ["INT_ADD", "register:40f0:8", ["const:8e884c:8", "const:4:8"]]
- 008e884c ["CALL", null, ["callee:00c58f50:8"]]
+ 008e97f8 ["INT_ADD", "register:40f0:8", ["const:8e97f8:8", "const:4:8"]]
+ 008e97f8 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-49eb8892311ad101e874d0a9d5771a0d"></a>

### [`008e8874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8874.md) → [`008e9820`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9820.md) FUN_008e9820

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008e45e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e4/008e45e4.md) · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`008e89d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e89d0.md) [`008e8a58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8a58.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`008e5590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e5/008e5590.md) · 呼出先 6件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`008e997c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e997c.md) [`008e9a04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9a04.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e88c0 ["INT_ADD", "register:40f0:8", ["const:8e88c0:8", "const:4:8"]]
- 008e88c0 ["CALL", null, ["callee:00c58f30:8"]]
+ 008e986c ["INT_ADD", "register:40f0:8", ["const:8e986c:8", "const:4:8"]]
+ 008e986c ["CALL", null, ["callee:00c58f30:8"]]
- 008e8940 ["INT_ADD", "register:40f0:8", ["const:8e8940:8", "const:4:8"]]
- 008e8940 ["CALL", null, ["callee:0043be80:8"]]
+ 008e98ec ["INT_ADD", "register:40f0:8", ["const:8e98ec:8", "const:4:8"]]
+ 008e98ec ["CALL", null, ["callee:0043be80:8"]]
- 008e8990 ["INT_ADD", "register:40f0:8", ["const:8e8990:8", "const:4:8"]]
- 008e8990 ["CALL", null, ["callee:008e9a04:8"]]
+ 008e993c ["INT_ADD", "register:40f0:8", ["const:8e993c:8", "const:4:8"]]
+ 008e993c ["CALL", null, ["callee:008e9a04:8"]]
~~~


<a id="compare-303d84675fb840a7187ef2efcbb66682"></a>

### [`008e89d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e89d0.md) → [`008e997c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e997c.md) FUN_008e997c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008e8874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8874.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008e9820`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9820.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e8a34 ["INT_ADD", "register:40f0:8", ["const:8e8a34:8", "const:4:8"]]
- 008e8a34 ["CALL", null, ["callee:00c58f50:8"]]
+ 008e99e0 ["INT_ADD", "register:40f0:8", ["const:8e99e0:8", "const:4:8"]]
+ 008e99e0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-1dcd004ef0dca4be5edd5c1a9d9fc548"></a>

### [`008e8a6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8a6c.md) → [`008e9a18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9a18.md) FUN_008e9a18

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e8aac ["INT_ADD", "register:40f0:8", ["const:8e8aac:8", "const:4:8"]]
- 008e8aac ["CALL", null, ["callee:00c58f50:8"]]
+ 008e9a58 ["INT_ADD", "register:40f0:8", ["const:8e9a58:8", "const:4:8"]]
+ 008e9a58 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-11bae08a7d5d62f797b9a8ba1be6482a"></a>

### [`008e8ac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8ac0.md) → [`008e9a6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9a6c.md) FUN_008e9a6c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008e45e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e4/008e45e4.md) · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`008e8c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8c1c.md) [`008e8ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8ca4.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`008e5590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e5/008e5590.md) · 呼出先 6件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`008e9bc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9bc8.md) [`008e9c50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9c50.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e8b0c ["INT_ADD", "register:40f0:8", ["const:8e8b0c:8", "const:4:8"]]
- 008e8b0c ["CALL", null, ["callee:00c58f30:8"]]
+ 008e9ab8 ["INT_ADD", "register:40f0:8", ["const:8e9ab8:8", "const:4:8"]]
+ 008e9ab8 ["CALL", null, ["callee:00c58f30:8"]]
- 008e8b8c ["INT_ADD", "register:40f0:8", ["const:8e8b8c:8", "const:4:8"]]
- 008e8b8c ["CALL", null, ["callee:0043be80:8"]]
+ 008e9b38 ["INT_ADD", "register:40f0:8", ["const:8e9b38:8", "const:4:8"]]
+ 008e9b38 ["CALL", null, ["callee:0043be80:8"]]
- 008e8bdc ["INT_ADD", "register:40f0:8", ["const:8e8bdc:8", "const:4:8"]]
- 008e8bdc ["CALL", null, ["callee:008e9c50:8"]]
+ 008e9b88 ["INT_ADD", "register:40f0:8", ["const:8e9b88:8", "const:4:8"]]
+ 008e9b88 ["CALL", null, ["callee:008e9c50:8"]]
~~~


<a id="compare-3990ed9caeaba7c74160a2840298d14f"></a>

### [`008e8c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8c1c.md) → [`008e9bc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9bc8.md) FUN_008e9bc8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008e8ac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8ac0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008e9a6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9a6c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e8c80 ["INT_ADD", "register:40f0:8", ["const:8e8c80:8", "const:4:8"]]
- 008e8c80 ["CALL", null, ["callee:00c58f50:8"]]
+ 008e9c2c ["INT_ADD", "register:40f0:8", ["const:8e9c2c:8", "const:4:8"]]
+ 008e9c2c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-4e0018cb149e7095bec69193c5dfff5c"></a>

### [`008e8cb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8cb8.md) → [`008e9c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9c64.md) FUN_008e9c64

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e8cf8 ["INT_ADD", "register:40f0:8", ["const:8e8cf8:8", "const:4:8"]]
- 008e8cf8 ["CALL", null, ["callee:00c58f50:8"]]
+ 008e9ca4 ["INT_ADD", "register:40f0:8", ["const:8e9ca4:8", "const:4:8"]]
+ 008e9ca4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-a7b25a73176a4269da8bb6e96ae6b893"></a>

### [`008e8d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8d0c.md) → [`008e9cb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9cb8.md) FUN_008e9cb8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008e2910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e2/008e2910.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`008e8690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8690.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008e38bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e3/008e38bc.md) · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`008e963c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e963c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e8d94 ["INT_ADD", "register:40f0:8", ["const:8e8d94:8", "const:4:8"]]
- 008e8d94 ["CALL", null, ["callee:00c58f30:8"]]
+ 008e9d40 ["INT_ADD", "register:40f0:8", ["const:8e9d40:8", "const:4:8"]]
+ 008e9d40 ["CALL", null, ["callee:00c58f30:8"]]
- 008e8e50 ["INT_ADD", "register:40f0:8", ["const:8e8e50:8", "const:4:8"]]
- 008e8e50 ["CALL", null, ["callee:00c58f50:8"]]
+ 008e9dfc ["INT_ADD", "register:40f0:8", ["const:8e9dfc:8", "const:4:8"]]
+ 008e9dfc ["CALL", null, ["callee:00c58f50:8"]]
- 008e8e6c ["INT_ADD", "register:40f0:8", ["const:8e8e6c:8", "const:4:8"]]
- 008e8e6c ["CALL", null, ["callee:00c58f50:8"]]
+ 008e9e18 ["INT_ADD", "register:40f0:8", ["const:8e9e18:8", "const:4:8"]]
+ 008e9e18 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-b2a3072d000fa0c3b8edd7aa6d14a737"></a>

### [`008e8e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8e94.md) → [`008e9e40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9e40.md) FUN_008e9e40

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008e2910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e2/008e2910.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`008e85a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e85a0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008e38bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e3/008e38bc.md) · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`008e954c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e954c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008e8efc ["INT_ADD", "register:40f0:8", ["const:8e8efc:8", "const:4:8"]]
- 008e8efc ["CALL", null, ["callee:00c58f30:8"]]
+ 008e9ea8 ["INT_ADD", "register:40f0:8", ["const:8e9ea8:8", "const:4:8"]]
+ 008e9ea8 ["CALL", null, ["callee:00c58f30:8"]]
- 008e8f98 ["INT_ADD", "register:40f0:8", ["const:8e8f98:8", "const:4:8"]]
- 008e8f98 ["CALL", null, ["callee:00c58f50:8"]]
+ 008e9f44 ["INT_ADD", "register:40f0:8", ["const:8e9f44:8", "const:4:8"]]
+ 008e9f44 ["CALL", null, ["callee:00c58f50:8"]]
- 008e8fb4 ["INT_ADD", "register:40f0:8", ["const:8e8fb4:8", "const:4:8"]]
- 008e8fb4 ["CALL", null, ["callee:00c58f50:8"]]
+ 008e9f60 ["INT_ADD", "register:40f0:8", ["const:8e9f60:8", "const:4:8"]]
+ 008e9f60 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-6a7f385e4a245ca56deb34874aea9e7b"></a>

### [`008ea3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea3f0.md) → [`008eb39c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008eb39c.md) FUN_008eb39c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008e5238`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e5/008e5238.md) · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`008e8ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8ca4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008e61e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e6/008e61e4.md) · 呼出先 6件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`008e9c50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9c50.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008ea474 ["INT_ADD", "register:40f0:8", ["const:8ea474:8", "const:4:8"]]
- 008ea474 ["CALL", null, ["callee:00c58f30:8"]]
+ 008eb420 ["INT_ADD", "register:40f0:8", ["const:8eb420:8", "const:4:8"]]
+ 008eb420 ["CALL", null, ["callee:00c58f30:8"]]
- 008ea4c4 ["INT_ADD", "register:40f0:8", ["const:8ea4c4:8", "const:4:8"]]
- 008ea4c4 ["CALL", null, ["callee:0043be80:8"]]
+ 008eb470 ["INT_ADD", "register:40f0:8", ["const:8eb470:8", "const:4:8"]]
+ 008eb470 ["CALL", null, ["callee:0043be80:8"]]
- 008ea540 ["INT_ADD", "register:40f0:8", ["const:8ea540:8", "const:4:8"]]
- 008ea540 ["CALL", null, ["callee:00c58f50:8"]]
+ 008eb4ec ["INT_ADD", "register:40f0:8", ["const:8eb4ec:8", "const:4:8"]]
+ 008eb4ec ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-bb26062626a71b7809af58cd9ad360b6"></a>

### [`008ea5ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ea/008ea5ec.md) → [`008eb598`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008eb598.md) FUN_008eb598

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008e5238`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e5/008e5238.md) · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`008e8a58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e8/008e8a58.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008e61e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e6/008e61e4.md) · 呼出先 6件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`008e9a04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008e9/008e9a04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008ea670 ["INT_ADD", "register:40f0:8", ["const:8ea670:8", "const:4:8"]]
- 008ea670 ["CALL", null, ["callee:00c58f30:8"]]
+ 008eb61c ["INT_ADD", "register:40f0:8", ["const:8eb61c:8", "const:4:8"]]
+ 008eb61c ["CALL", null, ["callee:00c58f30:8"]]
- 008ea6c0 ["INT_ADD", "register:40f0:8", ["const:8ea6c0:8", "const:4:8"]]
- 008ea6c0 ["CALL", null, ["callee:0043be80:8"]]
+ 008eb66c ["INT_ADD", "register:40f0:8", ["const:8eb66c:8", "const:4:8"]]
+ 008eb66c ["CALL", null, ["callee:0043be80:8"]]
- 008ea738 ["INT_ADD", "register:40f0:8", ["const:8ea738:8", "const:4:8"]]
- 008ea738 ["CALL", null, ["callee:00c58f50:8"]]
+ 008eb6e4 ["INT_ADD", "register:40f0:8", ["const:8eb6e4:8", "const:4:8"]]
+ 008eb6e4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-a4f2dc947a52bc91caa9a3f794feeab5"></a>

### [`008ec220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ec/008ec220.md) → [`008ed1cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ed/008ed1cc.md) FUN_008ed1cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008f6b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f6b3c.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`008f7ae8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f7/008f7ae8.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008ec250 ["INT_ADD", "register:40f0:8", ["const:8ec250:8", "const:4:8"]]
- 008ec250 ["CALL", null, ["callee:00c54d90:8"]]
+ 008ed1fc ["INT_ADD", "register:40f0:8", ["const:8ed1fc:8", "const:4:8"]]
+ 008ed1fc ["CALL", null, ["callee:00c54d90:8"]]
- 008ec264 ["COPY", "register:0:8", ["register:4040:8"]]
- 008ec264 ["INT_ADD", "register:40f0:8", ["const:8ec264:8", "const:4:8"]]
- 008ec264 ["CALLIND", null, ["register:0:8"]]
+ 008ed210 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008ed210 ["INT_ADD", "register:40f0:8", ["const:8ed210:8", "const:4:8"]]
+ 008ed210 ["CALLIND", null, ["register:0:8"]]
- 008ec26c ["INT_ADD", "register:40f0:8", ["const:8ec26c:8", "const:4:8"]]
- 008ec26c ["CALL", null, ["callee:00c58f20:8"]]
+ 008ed218 ["INT_ADD", "register:40f0:8", ["const:8ed218:8", "const:4:8"]]
+ 008ed218 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-2b2a323d4723189a6e12a390c47dc705"></a>

### [`008f39a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f3/008f39a4.md) → [`008f4950`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f4/008f4950.md) FUN_008f4950

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006d87c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d87c0.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`006d8b70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d8/006d8b70.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008f39c8 ["INT_ADD", "register:40f0:8", ["const:8f39c8:8", "const:4:8"]]
- 008f39c8 ["CALL", null, ["callee:00c54d90:8"]]
+ 008f4974 ["INT_ADD", "register:40f0:8", ["const:8f4974:8", "const:4:8"]]
+ 008f4974 ["CALL", null, ["callee:00c54d90:8"]]
- 008f39e8 ["COPY", "register:0:8", ["register:4040:8"]]
- 008f39e8 ["INT_ADD", "register:40f0:8", ["const:8f39e8:8", "const:4:8"]]
- 008f39e8 ["CALLIND", null, ["register:0:8"]]
+ 008f4994 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008f4994 ["INT_ADD", "register:40f0:8", ["const:8f4994:8", "const:4:8"]]
+ 008f4994 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5b417fae2cbcd4326d47b1d383d4071d"></a>

### [`008f5ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f5/008f5ad4.md) → [`008f6a80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f6/008f6a80.md) FUN_008f6a80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008f5404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f5/008f5404.md) · 呼出先 4件 [`006d7f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d7f4c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`008f63b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f6/008f63b0.md) · 呼出先 4件 [`006d82fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d8/006d82fc.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008f5b00 ["INT_ADD", "register:40f0:8", ["const:8f5b00:8", "const:4:8"]]
- 008f5b00 ["CALL", null, ["callee:00c54d60:8"]]
+ 008f6aac ["INT_ADD", "register:40f0:8", ["const:8f6aac:8", "const:4:8"]]
+ 008f6aac ["CALL", null, ["callee:00c54d60:8"]]
- 008f5b18 ["INT_ADD", "register:40f0:8", ["const:8f5b18:8", "const:4:8"]]
- 008f5b18 ["CALL", null, ["callee:00c54d90:8"]]
+ 008f6ac4 ["INT_ADD", "register:40f0:8", ["const:8f6ac4:8", "const:4:8"]]
+ 008f6ac4 ["CALL", null, ["callee:00c54d90:8"]]
- 008f5b2c ["COPY", "register:0:8", ["register:4040:8"]]
- 008f5b2c ["INT_ADD", "register:40f0:8", ["const:8f5b2c:8", "const:4:8"]]
- 008f5b2c ["CALLIND", null, ["register:0:8"]]
+ 008f6ad8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008f6ad8 ["INT_ADD", "register:40f0:8", ["const:8f6ad8:8", "const:4:8"]]
+ 008f6ad8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a699aff9566f3e64f59c836996a0a2b0"></a>

### [`008fc380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fc/008fc380.md) → [`008fd32c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fd/008fd32c.md) FUN_008fd32c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`008fc4b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fc/008fc4b4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`009d1320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d1/009d1320.md) · 呼出先 3件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`008fd460`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fd/008fd460.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008fc428 ["INT_ADD", "register:40f0:8", ["const:8fc428:8", "const:4:8"]]
- 008fc428 ["CALL", null, ["callee:00c58f30:8"]]
+ 008fd3d4 ["INT_ADD", "register:40f0:8", ["const:8fd3d4:8", "const:4:8"]]
+ 008fd3d4 ["CALL", null, ["callee:00c58f30:8"]]
- 008fc45c ["INT_ADD", "register:40f0:8", ["const:8fc45c:8", "const:4:8"]]
- 008fc45c ["CALL", null, ["callee:0043bf04:8"]]
+ 008fd408 ["INT_ADD", "register:40f0:8", ["const:8fd408:8", "const:4:8"]]
+ 008fd408 ["CALL", null, ["callee:0043bf04:8"]]
- 008fc4a8 ["INT_ADD", "register:40f0:8", ["const:8fc4a8:8", "const:4:8"]]
- 008fc4a8 ["CALL", null, ["callee:008fd460:8"]]
+ 008fd454 ["INT_ADD", "register:40f0:8", ["const:8fd454:8", "const:4:8"]]
+ 008fd454 ["CALL", null, ["callee:008fd460:8"]]
~~~


<a id="compare-6955fce7062d782d8032b4fb4745fbc6"></a>

### [`008fc4b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fc/008fc4b4.md) → [`008fd460`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fd/008fd460.md) FUN_008fd460

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008fc380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fc/008fc380.md) · 呼出先 3件 [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008fd32c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fd/008fd32c.md) · 呼出先 3件 [`00494970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00494/00494970.md) [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008fc564 ["INT_ADD", "register:40f0:8", ["const:8fc564:8", "const:4:8"]]
- 008fc564 ["CALL", null, ["callee:00494970:8"]]
+ 008fd510 ["INT_ADD", "register:40f0:8", ["const:8fd510:8", "const:4:8"]]
+ 008fd510 ["CALL", null, ["callee:00494970:8"]]
- 008fc56c ["INT_ADD", "register:40f0:8", ["const:8fc56c:8", "const:4:8"]]
- 008fc56c ["CALL", null, ["callee:00c58f50:8"]]
+ 008fd518 ["INT_ADD", "register:40f0:8", ["const:8fd518:8", "const:4:8"]]
+ 008fd518 ["CALL", null, ["callee:00c58f50:8"]]
- 008fc620 ["INT_ADD", "register:40f0:8", ["const:8fc620:8", "const:4:8"]]
- 008fc620 ["CALL", null, ["callee:00494970:8"]]
+ 008fd5cc ["INT_ADD", "register:40f0:8", ["const:8fd5cc:8", "const:4:8"]]
+ 008fd5cc ["CALL", null, ["callee:00494970:8"]]
~~~


<a id="compare-1de0ddee665006938ebf878e313e8564"></a>

### [`008fd0a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fd/008fd0a8.md) → [`008fe054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fe/008fe054.md) FUN_008fe054

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`0086a1bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a1bc.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`0086b168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b168.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008fd0c0 ["INT_ADD", "register:40f0:8", ["const:8fd0c0:8", "const:4:8"]]
- 008fd0c0 ["CALL", null, ["callee:005c1b8c:8"]]
+ 008fe06c ["INT_ADD", "register:40f0:8", ["const:8fe06c:8", "const:4:8"]]
+ 008fe06c ["CALL", null, ["callee:005c1b8c:8"]]
~~~


<a id="compare-e9821ff50636dffdcc32d5bf16ec3fbb"></a>

### [`008fd0d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fd/008fd0d8.md) → [`008fe084`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fe/008fe084.md) FUN_008fe084

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008fc644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fc/008fc644.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`008fd5f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fd/008fd5f0.md) · 呼出先 3件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008fd12c ["INT_ADD", "register:40f0:8", ["const:8fd12c:8", "const:4:8"]]
- 008fd12c ["CALL", null, ["callee:0046db10:8"]]
+ 008fe0d8 ["INT_ADD", "register:40f0:8", ["const:8fe0d8:8", "const:4:8"]]
+ 008fe0d8 ["CALL", null, ["callee:0046db10:8"]]
- 008fd180 ["INT_ADD", "register:40f0:8", ["const:8fd180:8", "const:4:8"]]
- 008fd180 ["CALL", null, ["callee:00c58f30:8"]]
+ 008fe12c ["INT_ADD", "register:40f0:8", ["const:8fe12c:8", "const:4:8"]]
+ 008fe12c ["CALL", null, ["callee:00c58f30:8"]]
- 008fd1b4 ["INT_ADD", "register:40f0:8", ["const:8fd1b4:8", "const:4:8"]]
- 008fd1b4 ["CALL", null, ["callee:0043bf04:8"]]
+ 008fe160 ["INT_ADD", "register:40f0:8", ["const:8fe160:8", "const:4:8"]]
+ 008fe160 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-112be83c35f8eede2dce3fc4e466eb7f"></a>

### [`008fe638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fe/008fe638.md) → [`008ff5e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ff/008ff5e4.md) FUN_008ff5e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008fe650 ["INT_ADD", "register:40f0:8", ["const:8fe650:8", "const:4:8"]]
- 008fe650 ["CALL", null, ["callee:005c1b8c:8"]]
+ 008ff5fc ["INT_ADD", "register:40f0:8", ["const:8ff5fc:8", "const:4:8"]]
+ 008ff5fc ["CALL", null, ["callee:005c1b8c:8"]]
- 008fe65c ["INT_ADD", "register:40f0:8", ["const:8fe65c:8", "const:4:8"]]
- 008fe65c ["CALL", null, ["callee:005c1b8c:8"]]
+ 008ff608 ["INT_ADD", "register:40f0:8", ["const:8ff608:8", "const:4:8"]]
+ 008ff608 ["CALL", null, ["callee:005c1b8c:8"]]
~~~


<a id="compare-c1b51173ead977659e54088b3701bcb6"></a>

### [`008ff42c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff42c.md) → [`009003d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00900/009003d8.md) FUN_009003d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008ff444 ["INT_ADD", "register:40f0:8", ["const:8ff444:8", "const:4:8"]]
- 008ff444 ["CALL", null, ["callee:005c1b8c:8"]]
+ 009003f0 ["INT_ADD", "register:40f0:8", ["const:9003f0:8", "const:4:8"]]
+ 009003f0 ["CALL", null, ["callee:005c1b8c:8"]]
- 008ff450 ["INT_ADD", "register:40f0:8", ["const:8ff450:8", "const:4:8"]]
- 008ff450 ["CALL", null, ["callee:005c1b8c:8"]]
+ 009003fc ["INT_ADD", "register:40f0:8", ["const:9003fc:8", "const:4:8"]]
+ 009003fc ["CALL", null, ["callee:005c1b8c:8"]]
~~~


<a id="compare-02d3dd5bb473e8a452e33cb962a267e8"></a>

### [`00901308`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901308.md) → [`009022b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00902/009022b4.md) FUN_009022b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`009011e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/009011e0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0090218c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00902/0090218c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00901318 ["INT_ADD", "register:40f0:8", ["const:901318:8", "const:4:8"]]
- 00901318 ["CALL", null, ["callee:0090218c:8"]]
+ 009022c4 ["INT_ADD", "register:40f0:8", ["const:9022c4:8", "const:4:8"]]
+ 009022c4 ["CALL", null, ["callee:0090218c:8"]]
~~~


<a id="compare-22b2525a426cfa9715deded5b0d31b12"></a>

### [`009039d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00903/009039d0.md) → [`0090497c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00904/0090497c.md) FUN_0090497c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 2件 [`009039f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00903/009039f4.md) [`00903cc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00903/00903cc4.md)
- 新版 呼出元 1件 [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) · 呼出先 2件 [`009049a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00904/009049a0.md) [`00904c70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00904/00904c70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009039e0 ["INT_ADD", "register:40f0:8", ["const:9039e0:8", "const:4:8"]]
- 009039e0 ["CALL", null, ["callee:009049a0:8"]]
+ 0090498c ["INT_ADD", "register:40f0:8", ["const:90498c:8", "const:4:8"]]
+ 0090498c ["CALL", null, ["callee:009049a0:8"]]
~~~


<a id="compare-18c705677fb5e9a15a3ab0029bb6b7d1"></a>

### [`00903f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00903/00903f98.md) → [`00904f44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00904/00904f44.md) FUN_00904f44

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 20件 [`005afcb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005af/005afcb8.md) [`005afe48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005af/005afe48.md) [`0066242c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/0066242c.md) [`006624d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/006624d0.md) [`00662574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/00662574.md) · 呼出先 3件 [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md) [`00802d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802d00.md) [`00802f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802f38.md)
- 新版 呼出元 20件 [`005b0068`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b0068.md) [`005b01f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b01f8.md) [`006627dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00662/006627dc.md) [`00662880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00662/00662880.md) [`00662924`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00662/00662924.md) · 呼出先 3件 [`00803b14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803b14.md) [`00803c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803c64.md) [`00803e9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803e9c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00903fbc ["INT_ADD", "register:40f0:8", ["const:903fbc:8", "const:4:8"]]
- 00903fbc ["CALL", null, ["callee:00803b14:8"]]
+ 00904f68 ["INT_ADD", "register:40f0:8", ["const:904f68:8", "const:4:8"]]
+ 00904f68 ["CALL", null, ["callee:00803b14:8"]]
- 00903fc4 ["INT_ADD", "register:40f0:8", ["const:903fc4:8", "const:4:8"]]
- 00903fc4 ["CALL", null, ["callee:00803c64:8"]]
+ 00904f70 ["INT_ADD", "register:40f0:8", ["const:904f70:8", "const:4:8"]]
+ 00904f70 ["CALL", null, ["callee:00803c64:8"]]
- 00903fcc ["INT_ADD", "register:40f0:8", ["const:903fcc:8", "const:4:8"]]
- 00903fcc ["CALL", null, ["callee:00803e9c:8"]]
+ 00904f78 ["INT_ADD", "register:40f0:8", ["const:904f78:8", "const:4:8"]]
+ 00904f78 ["CALL", null, ["callee:00803e9c:8"]]
~~~


<a id="compare-874519098361bfa36a2a224e322d002e"></a>

### [`00904070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/00904070.md) → [`0090501c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00905/0090501c.md) FUN_0090501c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 3件 [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md) [`00802d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802d00.md) [`00802f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802f38.md)
- 新版 呼出元 2件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`00a48f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) · 呼出先 3件 [`00803b14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803b14.md) [`00803c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803c64.md) [`00803e9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803e9c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00904098 ["INT_ADD", "register:40f0:8", ["const:904098:8", "const:4:8"]]
- 00904098 ["CALL", null, ["callee:00803b14:8"]]
+ 00905044 ["INT_ADD", "register:40f0:8", ["const:905044:8", "const:4:8"]]
+ 00905044 ["CALL", null, ["callee:00803b14:8"]]
- 009040a0 ["INT_ADD", "register:40f0:8", ["const:9040a0:8", "const:4:8"]]
- 009040a0 ["CALL", null, ["callee:00803c64:8"]]
+ 0090504c ["INT_ADD", "register:40f0:8", ["const:90504c:8", "const:4:8"]]
+ 0090504c ["CALL", null, ["callee:00803c64:8"]]
- 009040a8 ["INT_ADD", "register:40f0:8", ["const:9040a8:8", "const:4:8"]]
- 009040a8 ["CALL", null, ["callee:00803e9c:8"]]
+ 00905054 ["INT_ADD", "register:40f0:8", ["const:905054:8", "const:4:8"]]
+ 00905054 ["CALL", null, ["callee:00803e9c:8"]]
~~~


<a id="compare-5b2bada346de8c80e4efd62d25c8ba3f"></a>

### [`00904120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/00904120.md) → [`009050cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00905/009050cc.md) FUN_009050cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 3件 [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md) [`00802d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802d00.md) [`00802f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802f38.md)
- 新版 呼出元 1件 [`007e00a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007e0/007e00a4.md) · 呼出先 3件 [`00803b14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803b14.md) [`00803c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803c64.md) [`00803e9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803e9c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00904144 ["INT_ADD", "register:40f0:8", ["const:904144:8", "const:4:8"]]
- 00904144 ["CALL", null, ["callee:00803b14:8"]]
+ 009050f0 ["INT_ADD", "register:40f0:8", ["const:9050f0:8", "const:4:8"]]
+ 009050f0 ["CALL", null, ["callee:00803b14:8"]]
- 0090414c ["INT_ADD", "register:40f0:8", ["const:90414c:8", "const:4:8"]]
- 0090414c ["CALL", null, ["callee:00803c64:8"]]
+ 009050f8 ["INT_ADD", "register:40f0:8", ["const:9050f8:8", "const:4:8"]]
+ 009050f8 ["CALL", null, ["callee:00803c64:8"]]
- 00904154 ["INT_ADD", "register:40f0:8", ["const:904154:8", "const:4:8"]]
- 00904154 ["CALL", null, ["callee:00803e9c:8"]]
+ 00905100 ["INT_ADD", "register:40f0:8", ["const:905100:8", "const:4:8"]]
+ 00905100 ["CALL", null, ["callee:00803e9c:8"]]
~~~


<a id="compare-5e14aba983904985f8298459a46960a8"></a>

### [`009041f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/009041f8.md) → [`009051a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00905/009051a4.md) FUN_009051a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007cb638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cb/007cb638.md) · 呼出先 3件 [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md) [`00802d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802d00.md) [`00802f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802f38.md)
- 新版 呼出元 1件 [`007cc59c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cc/007cc59c.md) · 呼出先 3件 [`00803b14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803b14.md) [`00803c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803c64.md) [`00803e9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803e9c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00904220 ["INT_ADD", "register:40f0:8", ["const:904220:8", "const:4:8"]]
- 00904220 ["CALL", null, ["callee:00803b14:8"]]
+ 009051cc ["INT_ADD", "register:40f0:8", ["const:9051cc:8", "const:4:8"]]
+ 009051cc ["CALL", null, ["callee:00803b14:8"]]
- 00904228 ["INT_ADD", "register:40f0:8", ["const:904228:8", "const:4:8"]]
- 00904228 ["CALL", null, ["callee:00803c64:8"]]
+ 009051d4 ["INT_ADD", "register:40f0:8", ["const:9051d4:8", "const:4:8"]]
+ 009051d4 ["CALL", null, ["callee:00803c64:8"]]
- 00904230 ["INT_ADD", "register:40f0:8", ["const:904230:8", "const:4:8"]]
- 00904230 ["CALL", null, ["callee:00803e9c:8"]]
+ 009051dc ["INT_ADD", "register:40f0:8", ["const:9051dc:8", "const:4:8"]]
+ 009051dc ["CALL", null, ["callee:00803e9c:8"]]
~~~


<a id="compare-2ddc4e01157e2b679ef5231eac284668"></a>

### [`009042a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/009042a8.md) → [`00905254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00905/00905254.md) FUN_00905254

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`007738ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00773/007738ec.md) [`00789e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00789/00789e38.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) [`008d38f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d3/008d38f0.md) [`00a92db8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a92/00a92db8.md) · 呼出先 2件 [`0080603c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00806/0080603c.md) [`00807850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00807/00807850.md)
- 新版 呼出元 5件 [`00773cc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00773/00773cc8.md) [`0078a214`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078a/0078a214.md) [`007e00a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007e0/007e00a4.md) [`008d489c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d4/008d489c.md) [`00a93dac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a93/00a93dac.md) · 呼出先 2件 [`00806fa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00806/00806fa0.md) [`008087b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00808/008087b4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009042b8 ["INT_ADD", "register:40f0:8", ["const:9042b8:8", "const:4:8"]]
- 009042b8 ["CALL", null, ["callee:00806fa0:8"]]
+ 00905264 ["INT_ADD", "register:40f0:8", ["const:905264:8", "const:4:8"]]
+ 00905264 ["CALL", null, ["callee:00806fa0:8"]]
- 009042d8 ["INT_ADD", "register:40f0:8", ["const:9042d8:8", "const:4:8"]]
- 009042d8 ["CALL", null, ["callee:008087b4:8"]]
+ 00905284 ["INT_ADD", "register:40f0:8", ["const:905284:8", "const:4:8"]]
+ 00905284 ["CALL", null, ["callee:008087b4:8"]]
~~~


<a id="compare-4881fbb9a10fc63c5bb3f36cc8d82517"></a>

### [`009042f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/009042f8.md) → [`009052a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00905/009052a4.md) FUN_009052a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 1件 [`00480338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480338.md)
- 新版 呼出元 1件 [`00a271bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a27/00a271bc.md) · 呼出先 1件 [`00480658`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480658.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0090430c ["INT_ADD", "register:40f0:8", ["const:90430c:8", "const:4:8"]]
- 0090430c ["CALL", null, ["callee:00480658:8"]]
+ 009052b8 ["INT_ADD", "register:40f0:8", ["const:9052b8:8", "const:4:8"]]
+ 009052b8 ["CALL", null, ["callee:00480658:8"]]
~~~


<a id="compare-4c795dc63adee4efd5a3114dd644bd54"></a>

### [`00904348`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/00904348.md) → [`009052f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00905/009052f4.md) FUN_009052f4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009039f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00903/009039f4.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`009044cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/009044cc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009049a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00904/009049a0.md) · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00905478`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00905/00905478.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009043d0 ["INT_ADD", "register:40f0:8", ["const:9043d0:8", "const:4:8"]]
- 009043d0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0090537c ["INT_ADD", "register:40f0:8", ["const:90537c:8", "const:4:8"]]
+ 0090537c ["CALL", null, ["callee:00c58f30:8"]]
- 00904488 ["INT_ADD", "register:40f0:8", ["const:904488:8", "const:4:8"]]
- 00904488 ["CALL", null, ["callee:00c58f50:8"]]
+ 00905434 ["INT_ADD", "register:40f0:8", ["const:905434:8", "const:4:8"]]
+ 00905434 ["CALL", null, ["callee:00c58f50:8"]]
- 009044a4 ["INT_ADD", "register:40f0:8", ["const:9044a4:8", "const:4:8"]]
- 009044a4 ["CALL", null, ["callee:00c58f50:8"]]
+ 00905450 ["INT_ADD", "register:40f0:8", ["const:905450:8", "const:4:8"]]
+ 00905450 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-5bfcbf5efc9c0d618ed177452bc34af1"></a>

### [`009044e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/009044e0.md) → [`0090548c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00905/0090548c.md) FUN_0090548c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00903cc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00903/00903cc4.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00904664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/00904664.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00904c70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00904/00904c70.md) · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00905610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00905/00905610.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00904568 ["INT_ADD", "register:40f0:8", ["const:904568:8", "const:4:8"]]
- 00904568 ["CALL", null, ["callee:00c58f30:8"]]
+ 00905514 ["INT_ADD", "register:40f0:8", ["const:905514:8", "const:4:8"]]
+ 00905514 ["CALL", null, ["callee:00c58f30:8"]]
- 00904620 ["INT_ADD", "register:40f0:8", ["const:904620:8", "const:4:8"]]
- 00904620 ["CALL", null, ["callee:00c58f50:8"]]
+ 009055cc ["INT_ADD", "register:40f0:8", ["const:9055cc:8", "const:4:8"]]
+ 009055cc ["CALL", null, ["callee:00c58f50:8"]]
- 0090463c ["INT_ADD", "register:40f0:8", ["const:90463c:8", "const:4:8"]]
- 0090463c ["CALL", null, ["callee:00c58f50:8"]]
+ 009055e8 ["INT_ADD", "register:40f0:8", ["const:9055e8:8", "const:4:8"]]
+ 009055e8 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-859effa3c57ff4607f494e23a123825b"></a>

### [`0090a034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090a/0090a034.md) → [`0090afe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0090a/0090afe0.md) FUN_0090afe0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`00904a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/00904a08.md) [`00a6fdf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6f/00a6fdf8.md) [`00a735a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a73/00a735a0.md) [`00a7c564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7c/00a7c564.md) [`00b2e554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2e/00b2e554.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00920554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00920/00920554.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 5件 [`009059b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00905/009059b4.md) [`00a70dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a70/00a70dec.md) [`00a74594`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a74/00a74594.md) [`00a7d558`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7d/00a7d558.md) [`00b2f548`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2f/00b2f548.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00921500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00921/00921500.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0090a088 ["INT_ADD", "register:40f0:8", ["const:90a088:8", "const:4:8"]]
- 0090a088 ["CALL", null, ["callee:0043be80:8"]]
+ 0090b034 ["INT_ADD", "register:40f0:8", ["const:90b034:8", "const:4:8"]]
+ 0090b034 ["CALL", null, ["callee:0043be80:8"]]
- 0090a098 ["INT_ADD", "register:40f0:8", ["const:90a098:8", "const:4:8"]]
- 0090a098 ["CALL", null, ["callee:0043be80:8"]]
+ 0090b044 ["INT_ADD", "register:40f0:8", ["const:90b044:8", "const:4:8"]]
+ 0090b044 ["CALL", null, ["callee:0043be80:8"]]
- 0090a0c8 ["INT_ADD", "register:40f0:8", ["const:90a0c8:8", "const:4:8"]]
- 0090a0c8 ["CALL", null, ["callee:00921500:8"]]
+ 0090b074 ["INT_ADD", "register:40f0:8", ["const:90b074:8", "const:4:8"]]
+ 0090b074 ["CALL", null, ["callee:00921500:8"]]
~~~


<a id="compare-0ce51eb9c765164df04c9e1cfc835b93"></a>

### [`0090a5a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090a/0090a5a0.md) → [`0090b54c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0090b/0090b54c.md) FUN_0090b54c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0090a5d8 ["INT_ADD", "register:40f0:8", ["const:90a5d8:8", "const:4:8"]]
- 0090a5d8 ["CALL", null, ["callee:00c54d90:8"]]
+ 0090b584 ["INT_ADD", "register:40f0:8", ["const:90b584:8", "const:4:8"]]
+ 0090b584 ["CALL", null, ["callee:00c54d90:8"]]
- 0090a5ec ["COPY", "register:0:8", ["register:4040:8"]]
- 0090a5ec ["INT_ADD", "register:40f0:8", ["const:90a5ec:8", "const:4:8"]]
- 0090a5ec ["CALLIND", null, ["register:0:8"]]
+ 0090b598 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0090b598 ["INT_ADD", "register:40f0:8", ["const:90b598:8", "const:4:8"]]
+ 0090b598 ["CALLIND", null, ["register:0:8"]]
- 0090a5f4 ["INT_ADD", "register:40f0:8", ["const:90a5f4:8", "const:4:8"]]
- 0090a5f4 ["CALL", null, ["callee:00c58f20:8"]]
+ 0090b5a0 ["INT_ADD", "register:40f0:8", ["const:90b5a0:8", "const:4:8"]]
+ 0090b5a0 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-a0f9d7af77ec600293c168e366038c0a"></a>

### [`00920308`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00920/00920308.md) → [`009212b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00921/009212b4.md) FUN_009212b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0091ffb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0091f/0091ffb0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00920f5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00920/00920f5c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00920318 ["INT_ADD", "register:40f0:8", ["const:920318:8", "const:4:8"]]
- 00920318 ["CALL", null, ["callee:00920f5c:8"]]
+ 009212c4 ["INT_ADD", "register:40f0:8", ["const:9212c4:8", "const:4:8"]]
+ 009212c4 ["CALL", null, ["callee:00920f5c:8"]]
~~~


<a id="compare-54890c26a17e21070f7b1d937cc5ac36"></a>

### [`00920530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00920/00920530.md) → [`009214dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00921/009214dc.md) FUN_009214dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0092032c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00920/0092032c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`009212d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00921/009212d8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00920540 ["INT_ADD", "register:40f0:8", ["const:920540:8", "const:4:8"]]
- 00920540 ["CALL", null, ["callee:009212d8:8"]]
+ 009214ec ["INT_ADD", "register:40f0:8", ["const:9214ec:8", "const:4:8"]]
+ 009214ec ["CALL", null, ["callee:009212d8:8"]]
~~~


<a id="compare-c43faad270735c1458728e1703135fd4"></a>

### [`009270f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00927/009270f0.md) → [`0092809c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00928/0092809c.md) FUN_0092809c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00926eb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00926/00926eb4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00927e60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00927/00927e60.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00927100 ["INT_ADD", "register:40f0:8", ["const:927100:8", "const:4:8"]]
- 00927100 ["CALL", null, ["callee:00927e60:8"]]
+ 009280ac ["INT_ADD", "register:40f0:8", ["const:9280ac:8", "const:4:8"]]
+ 009280ac ["CALL", null, ["callee:00927e60:8"]]
~~~


<a id="compare-23932d24b73150c5329449692108921f"></a>

### [`00927ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00927/00927ce8.md) → [`00928c94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00928/00928c94.md) FUN_00928c94

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0092836c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00928/0092836c.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`00929318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00929/00929318.md) · 呼出先 8件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00487dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487dc4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00927d24 ["INT_ADD", "register:40f0:8", ["const:927d24:8", "const:4:8"]]
- 00927d24 ["CALL", null, ["callee:00487c9c:8"]]
+ 00928cd0 ["INT_ADD", "register:40f0:8", ["const:928cd0:8", "const:4:8"]]
+ 00928cd0 ["CALL", null, ["callee:00487c9c:8"]]
- 00927d38 ["INT_ADD", "register:40f0:8", ["const:927d38:8", "const:4:8"]]
- 00927d38 ["CALL", null, ["callee:00487dc4:8"]]
+ 00928ce4 ["INT_ADD", "register:40f0:8", ["const:928ce4:8", "const:4:8"]]
+ 00928ce4 ["CALL", null, ["callee:00487dc4:8"]]
- 00927d4c ["INT_ADD", "register:40f0:8", ["const:927d4c:8", "const:4:8"]]
- 00927d4c ["CALL", null, ["callee:00c58f50:8"]]
+ 00928cf8 ["INT_ADD", "register:40f0:8", ["const:928cf8:8", "const:4:8"]]
+ 00928cf8 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-02d28ddd7810091e90844fd0d54ee76c"></a>

### [`00928000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00928/00928000.md) → [`00928fac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00928/00928fac.md) FUN_00928fac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0092836c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00928/0092836c.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00929318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00929/00929318.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00928020 ["INT_ADD", "register:40f0:8", ["const:928020:8", "const:4:8"]]
- 00928020 ["CALL", null, ["callee:00c594d0:8"]]
+ 00928fcc ["INT_ADD", "register:40f0:8", ["const:928fcc:8", "const:4:8"]]
+ 00928fcc ["CALL", null, ["callee:00c594d0:8"]]
- 00928078 ["INT_ADD", "register:40f0:8", ["const:928078:8", "const:4:8"]]
- 00928078 ["CALL", null, ["callee:00c58f30:8"]]
+ 00929024 ["INT_ADD", "register:40f0:8", ["const:929024:8", "const:4:8"]]
+ 00929024 ["CALL", null, ["callee:00c58f30:8"]]
- 0092809c ["INT_ADD", "register:40f0:8", ["const:92809c:8", "const:4:8"]]
- 0092809c ["CALL", null, ["callee:00c58f50:8"]]
+ 00929048 ["INT_ADD", "register:40f0:8", ["const:929048:8", "const:4:8"]]
+ 00929048 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-4b2795720a571943c85ea2eb78cf632b"></a>

### [`0092816c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00928/0092816c.md) → [`00929118`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00929/00929118.md) FUN_00929118

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`007738ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00773/007738ec.md) · 呼出先 1件 [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md)
- 新版 呼出元 2件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) [`00773cc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00773/00773cc8.md) · 呼出先 1件 [`0049f750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f750.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00928194 ["INT_ADD", "register:40f0:8", ["const:928194:8", "const:4:8"]]
- 00928194 ["CALL", null, ["callee:0049f750:8"]]
+ 00929140 ["INT_ADD", "register:40f0:8", ["const:929140:8", "const:4:8"]]
+ 00929140 ["CALL", null, ["callee:0049f750:8"]]
~~~


<a id="compare-cfc0f834dcd09a8850a402f6ea71b894"></a>

### [`009281f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00928/009281f4.md) → [`009291a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00929/009291a0.md) FUN_009291a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 5件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`0092836c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00928/0092836c.md) [`00928828`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00928/00928828.md) [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md)
- 新版 呼出元 1件 [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) · 呼出先 5件 [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`00929318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00929/00929318.md) [`009297d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00929/009297d4.md) [`00c59180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59180.md) [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00928218 ["INT_ADD", "register:40f0:8", ["const:928218:8", "const:4:8"]]
- 00928218 ["CALL", null, ["callee:0048d1e4:8"]]
+ 009291c4 ["INT_ADD", "register:40f0:8", ["const:9291c4:8", "const:4:8"]]
+ 009291c4 ["CALL", null, ["callee:0048d1e4:8"]]
- 00928244 ["INT_ADD", "register:40f0:8", ["const:928244:8", "const:4:8"]]
- 00928244 ["CALL", null, ["callee:00929318:8"]]
+ 009291f0 ["INT_ADD", "register:40f0:8", ["const:9291f0:8", "const:4:8"]]
+ 009291f0 ["CALL", null, ["callee:00929318:8"]]
- 0092829c ["INT_ADD", "register:40f0:8", ["const:92829c:8", "const:4:8"]]
- 0092829c ["CALL", null, ["callee:00c59180:8"]]
+ 00929248 ["INT_ADD", "register:40f0:8", ["const:929248:8", "const:4:8"]]
+ 00929248 ["CALL", null, ["callee:00c59180:8"]]
~~~


<a id="compare-7172fa27d6174dee11085bec5efe02a7"></a>

### [`00929244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929244.md) → [`0092a1f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092a/0092a1f0.md) FUN_0092a1f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 3件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 3件 [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`00c59180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59180.md) [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0092925c ["INT_ADD", "register:40f0:8", ["const:92925c:8", "const:4:8"]]
- 0092925c ["CALL", null, ["callee:00c59180:8"]]
+ 0092a208 ["INT_ADD", "register:40f0:8", ["const:92a208:8", "const:4:8"]]
+ 0092a208 ["CALL", null, ["callee:00c59180:8"]]
- 00929264 ["INT_ADD", "register:40f0:8", ["const:929264:8", "const:4:8"]]
- 00929264 ["CALL", null, ["callee:0048d1e4:8"]]
+ 0092a210 ["INT_ADD", "register:40f0:8", ["const:92a210:8", "const:4:8"]]
+ 0092a210 ["CALL", null, ["callee:0048d1e4:8"]]
- 00929270 ["INT_ADD", "register:40f0:8", ["const:929270:8", "const:4:8"]]
- 00929270 ["CALL", null, ["callee:00c59190:8"]]
+ 0092a21c ["INT_ADD", "register:40f0:8", ["const:92a21c:8", "const:4:8"]]
+ 0092a21c ["CALL", null, ["callee:00c59190:8"]]
~~~


<a id="compare-9a24d49ab9ec44e5c4be2c4bcfad2a3c"></a>

### [`00929c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929c08.md) → [`0092abb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092a/0092abb4.md) FUN_0092abb4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 3件 [`004801b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/004801b8.md) [`00480430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480430.md) [`00480784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480784.md)
- 新版 呼出元 1件 [`00a271bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a27/00a271bc.md) · 呼出先 3件 [`004804d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/004804d8.md) [`00480750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480750.md) [`00480aa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480aa4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00929c20 ["INT_ADD", "register:40f0:8", ["const:929c20:8", "const:4:8"]]
- 00929c20 ["CALL", null, ["callee:004804d8:8"]]
+ 0092abcc ["INT_ADD", "register:40f0:8", ["const:92abcc:8", "const:4:8"]]
+ 0092abcc ["CALL", null, ["callee:004804d8:8"]]
- 00929c30 ["INT_ADD", "register:40f0:8", ["const:929c30:8", "const:4:8"]]
- 00929c30 ["CALL", null, ["callee:004804d8:8"]]
+ 0092abdc ["INT_ADD", "register:40f0:8", ["const:92abdc:8", "const:4:8"]]
+ 0092abdc ["CALL", null, ["callee:004804d8:8"]]
- 00929c40 ["INT_ADD", "register:40f0:8", ["const:929c40:8", "const:4:8"]]
- 00929c40 ["CALL", null, ["callee:00480750:8"]]
+ 0092abec ["INT_ADD", "register:40f0:8", ["const:92abec:8", "const:4:8"]]
+ 0092abec ["CALL", null, ["callee:00480750:8"]]
~~~


<a id="compare-2e14fdd3561b058b22b154d2f0ffc417"></a>

### [`00929c60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929c60.md) → [`0092ac0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092a/0092ac0c.md) FUN_0092ac0c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 3件 [`00480bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480bd0.md) [`00480e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480e68.md) [`004810d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/004810d8.md)
- 新版 呼出元 1件 [`00a2c310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a2c/00a2c310.md) · 呼出先 3件 [`00480ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480ef0.md) [`00481188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/00481188.md) [`004813f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/004813f8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00929c80 ["INT_ADD", "register:40f0:8", ["const:929c80:8", "const:4:8"]]
- 00929c80 ["CALL", null, ["callee:00480ef0:8"]]
+ 0092ac2c ["INT_ADD", "register:40f0:8", ["const:92ac2c:8", "const:4:8"]]
+ 0092ac2c ["CALL", null, ["callee:00480ef0:8"]]
- 00929c8c ["INT_ADD", "register:40f0:8", ["const:929c8c:8", "const:4:8"]]
- 00929c8c ["CALL", null, ["callee:00480ef0:8"]]
+ 0092ac38 ["INT_ADD", "register:40f0:8", ["const:92ac38:8", "const:4:8"]]
+ 0092ac38 ["CALL", null, ["callee:00480ef0:8"]]
- 00929c98 ["INT_ADD", "register:40f0:8", ["const:929c98:8", "const:4:8"]]
- 00929c98 ["CALL", null, ["callee:00481188:8"]]
+ 0092ac44 ["INT_ADD", "register:40f0:8", ["const:92ac44:8", "const:4:8"]]
+ 0092ac44 ["CALL", null, ["callee:00481188:8"]]
~~~


<a id="compare-b7de998413857a30b53d00ff4db9588e"></a>

### [`0092a064`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092a/0092a064.md) → [`0092b010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092b/0092b010.md) FUN_0092b010

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0092a0a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092a/0092a0a4.md)
- 新版 呼出元 0件  · 呼出先 2件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0092b050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092b/0092b050.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0092a06c ["INT_ADD", "register:40f0:8", ["const:92a06c:8", "const:4:8"]]
- 0092a06c ["CALL", null, ["callee:008524fc:8"]]
+ 0092b018 ["INT_ADD", "register:40f0:8", ["const:92b018:8", "const:4:8"]]
+ 0092b018 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-6f32778678549d05f2c58f1af4776247"></a>

### [`0092a428`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092a/0092a428.md) → [`0092b3d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092b/0092b3d4.md) FUN_0092b3d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0092a0a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092a/0092a0a4.md)
- 新版 呼出元 0件  · 呼出先 2件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0092b050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092b/0092b050.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0092a430 ["INT_ADD", "register:40f0:8", ["const:92a430:8", "const:4:8"]]
- 0092a430 ["CALL", null, ["callee:008524fc:8"]]
+ 0092b3dc ["INT_ADD", "register:40f0:8", ["const:92b3dc:8", "const:4:8"]]
+ 0092b3dc ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-dcf755ba99f7979a62945a8ab4ea82b7"></a>

### [`0092e434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092e/0092e434.md) → [`0092f3e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092f/0092f3e0.md) FUN_0092f3e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`009304d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/009304d0.md) [`009315b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/009315b0.md) [`00931b5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931b5c.md) [`00a99514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a99/00a99514.md) [`00a9a06c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a06c.md) · 呼出先 7件 [`0074e31c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074e/0074e31c.md) [`0074e324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074e/0074e324.md) [`0074e32c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074e/0074e32c.md) [`0074e334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074e/0074e334.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 5件 [`0093147c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00931/0093147c.md) [`0093255c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/0093255c.md) [`00932b08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/00932b08.md) [`00a9a508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9a/00a9a508.md) [`00a9b060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9b060.md) · 呼出先 7件 [`0074e6cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074e/0074e6cc.md) [`0074e6d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074e/0074e6d4.md) [`0074e6dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074e/0074e6dc.md) [`0074e6e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074e/0074e6e4.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0092e444 ["INT_ADD", "register:40f0:8", ["const:92e444:8", "const:4:8"]]
- 0092e444 ["CALL", null, ["callee:008524fc:8"]]
+ 0092f3f0 ["INT_ADD", "register:40f0:8", ["const:92f3f0:8", "const:4:8"]]
+ 0092f3f0 ["CALL", null, ["callee:008524fc:8"]]
- 0092e454 ["INT_ADD", "register:40f0:8", ["const:92e454:8", "const:4:8"]]
- 0092e454 ["CALL", null, ["callee:008b89cc:8"]]
+ 0092f400 ["INT_ADD", "register:40f0:8", ["const:92f400:8", "const:4:8"]]
+ 0092f400 ["CALL", null, ["callee:008b89cc:8"]]
- 0092e45c ["INT_ADD", "register:40f0:8", ["const:92e45c:8", "const:4:8"]]
- 0092e45c ["CALL", null, ["callee:008b7f1c:8"]]
+ 0092f408 ["INT_ADD", "register:40f0:8", ["const:92f408:8", "const:4:8"]]
+ 0092f408 ["CALL", null, ["callee:008b7f1c:8"]]
~~~


<a id="compare-8119f70839a16091dd435f3a31eed7ac"></a>

### [`009302e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/009302e4.md) → [`00931290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00931/00931290.md) FUN_00931290

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`009304d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/009304d0.md) [`00934658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/00934658.md) · 呼出先 3件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md)
- 新版 呼出元 2件 [`0093147c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00931/0093147c.md) [`00935604`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00935/00935604.md) · 呼出先 3件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f1c.md) [`008b89cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b89cc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009302fc ["INT_ADD", "register:40f0:8", ["const:9302fc:8", "const:4:8"]]
- 009302fc ["CALL", null, ["callee:008524fc:8"]]
+ 009312a8 ["INT_ADD", "register:40f0:8", ["const:9312a8:8", "const:4:8"]]
+ 009312a8 ["CALL", null, ["callee:008524fc:8"]]
- 0093030c ["INT_ADD", "register:40f0:8", ["const:93030c:8", "const:4:8"]]
- 0093030c ["CALL", null, ["callee:008b89cc:8"]]
+ 009312b8 ["INT_ADD", "register:40f0:8", ["const:9312b8:8", "const:4:8"]]
+ 009312b8 ["CALL", null, ["callee:008b89cc:8"]]
- 00930314 ["INT_ADD", "register:40f0:8", ["const:930314:8", "const:4:8"]]
- 00930314 ["CALL", null, ["callee:008b7f1c:8"]]
+ 009312c0 ["INT_ADD", "register:40f0:8", ["const:9312c0:8", "const:4:8"]]
+ 009312c0 ["CALL", null, ["callee:008b7f1c:8"]]
~~~


<a id="compare-95b7597db9b5821c84648f46a9a049d7"></a>

### [`009303e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/009303e8.md) → [`00931394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00931/00931394.md) FUN_00931394

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) [`00a98dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a98dbc.md) [`00a98f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a98f70.md) · 呼出先 3件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 3件 [`00a48f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) [`00a99db0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a99/00a99db0.md) [`00a99f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a99/00a99f64.md) · 呼出先 3件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00930414 ["INT_ADD", "register:40f0:8", ["const:930414:8", "const:4:8"]]
- 00930414 ["CALL", null, ["callee:00c54d60:8"]]
+ 009313c0 ["INT_ADD", "register:40f0:8", ["const:9313c0:8", "const:4:8"]]
+ 009313c0 ["CALL", null, ["callee:00c54d60:8"]]
- 0093042c ["INT_ADD", "register:40f0:8", ["const:93042c:8", "const:4:8"]]
- 0093042c ["CALL", null, ["callee:00c54d90:8"]]
+ 009313d8 ["INT_ADD", "register:40f0:8", ["const:9313d8:8", "const:4:8"]]
+ 009313d8 ["CALL", null, ["callee:00c54d90:8"]]
- 00930450 ["COPY", "register:0:8", ["register:4040:8"]]
- 00930450 ["INT_ADD", "register:40f0:8", ["const:930450:8", "const:4:8"]]
- 00930450 ["CALLIND", null, ["register:0:8"]]
+ 009313fc ["COPY", "register:0:8", ["register:4040:8"]]
+ 009313fc ["INT_ADD", "register:40f0:8", ["const:9313fc:8", "const:4:8"]]
+ 009313fc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7103977088198f2be5b8b5fd14a1ea18"></a>

### [`00930468`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/00930468.md) → [`00931414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00931/00931414.md) FUN_00931414

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00853cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853cd0.md) [`00a98dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a98dbc.md) [`00a98f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a98f70.md) · 呼出先 4件 [`00726fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00726/00726fa0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0092a7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092a/0092a7f8.md) [`0092e6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092e/0092e6c0.md)
- 新版 呼出元 4件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`00854c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00854/00854c7c.md) [`00a99db0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a99/00a99db0.md) [`00a99f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a99/00a99f64.md) · 呼出先 4件 [`00727350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00727/00727350.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0092b7a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092b/0092b7a4.md) [`0092f66c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092f/0092f66c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00930490 ["INT_ADD", "register:40f0:8", ["const:930490:8", "const:4:8"]]
- 00930490 ["CALL", null, ["callee:008524fc:8"]]
+ 0093143c ["INT_ADD", "register:40f0:8", ["const:93143c:8", "const:4:8"]]
+ 0093143c ["CALL", null, ["callee:008524fc:8"]]
- 00930498 ["INT_ADD", "register:40f0:8", ["const:930498:8", "const:4:8"]]
- 00930498 ["CALL", null, ["callee:00727350:8"]]
+ 00931444 ["INT_ADD", "register:40f0:8", ["const:931444:8", "const:4:8"]]
+ 00931444 ["CALL", null, ["callee:00727350:8"]]
~~~


<a id="compare-a0c9fe2d9a382ae7ba4b279a89b5fba6"></a>

### [`00931050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931050.md) → [`00931ffc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00931/00931ffc.md) FUN_00931ffc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00765314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00765/00765314.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093106c ["INT_ADD", "register:40f0:8", ["const:93106c:8", "const:4:8"]]
- 0093106c ["CALL", null, ["callee:008524fc:8"]]
+ 00932018 ["INT_ADD", "register:40f0:8", ["const:932018:8", "const:4:8"]]
+ 00932018 ["CALL", null, ["callee:008524fc:8"]]
- 00931074 ["INT_ADD", "register:40f0:8", ["const:931074:8", "const:4:8"]]
- 00931074 ["CALL", null, ["callee:00765314:8"]]
+ 00932020 ["INT_ADD", "register:40f0:8", ["const:932020:8", "const:4:8"]]
+ 00932020 ["CALL", null, ["callee:00765314:8"]]
- 0093108c ["INT_ADD", "register:40f0:8", ["const:93108c:8", "const:4:8"]]
- 0093108c ["CALL", null, ["callee:00c58f50:8"]]
+ 00932038 ["INT_ADD", "register:40f0:8", ["const:932038:8", "const:4:8"]]
+ 00932038 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-b89cd636e0e842841d9950305d9862c1"></a>

### [`00931134`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931134.md) → [`009320e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/009320e0.md) FUN_009320e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00765314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00765/00765314.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00931150 ["INT_ADD", "register:40f0:8", ["const:931150:8", "const:4:8"]]
- 00931150 ["CALL", null, ["callee:008524fc:8"]]
+ 009320fc ["INT_ADD", "register:40f0:8", ["const:9320fc:8", "const:4:8"]]
+ 009320fc ["CALL", null, ["callee:008524fc:8"]]
- 00931158 ["INT_ADD", "register:40f0:8", ["const:931158:8", "const:4:8"]]
- 00931158 ["CALL", null, ["callee:00765314:8"]]
+ 00932104 ["INT_ADD", "register:40f0:8", ["const:932104:8", "const:4:8"]]
+ 00932104 ["CALL", null, ["callee:00765314:8"]]
- 00931170 ["INT_ADD", "register:40f0:8", ["const:931170:8", "const:4:8"]]
- 00931170 ["CALL", null, ["callee:00c58f50:8"]]
+ 0093211c ["INT_ADD", "register:40f0:8", ["const:93211c:8", "const:4:8"]]
+ 0093211c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-a33c9b8293659101c81cb37552aecdd1"></a>

### [`00931508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931508.md) → [`009324b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/009324b4.md) FUN_009324b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00931510 ["INT_ADD", "register:40f0:8", ["const:931510:8", "const:4:8"]]
- 00931510 ["CALL", null, ["callee:008524fc:8"]]
+ 009324bc ["INT_ADD", "register:40f0:8", ["const:9324bc:8", "const:4:8"]]
+ 009324bc ["CALL", null, ["callee:008524fc:8"]]
- 00931520 ["INT_ADD", "register:40f0:8", ["const:931520:8", "const:4:8"]]
- 00931520 ["CALL", null, ["callee:008524fc:8"]]
+ 009324cc ["INT_ADD", "register:40f0:8", ["const:9324cc:8", "const:4:8"]]
+ 009324cc ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-1b608ff15b7992e58056e1958b8a8842"></a>

### [`00931980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931980.md) → [`0093292c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/0093292c.md) FUN_0093292c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00765314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00765/00765314.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093199c ["INT_ADD", "register:40f0:8", ["const:93199c:8", "const:4:8"]]
- 0093199c ["CALL", null, ["callee:008524fc:8"]]
+ 00932948 ["INT_ADD", "register:40f0:8", ["const:932948:8", "const:4:8"]]
+ 00932948 ["CALL", null, ["callee:008524fc:8"]]
- 009319a4 ["INT_ADD", "register:40f0:8", ["const:9319a4:8", "const:4:8"]]
- 009319a4 ["CALL", null, ["callee:00765314:8"]]
+ 00932950 ["INT_ADD", "register:40f0:8", ["const:932950:8", "const:4:8"]]
+ 00932950 ["CALL", null, ["callee:00765314:8"]]
- 009319bc ["INT_ADD", "register:40f0:8", ["const:9319bc:8", "const:4:8"]]
- 009319bc ["CALL", null, ["callee:00c58f50:8"]]
+ 00932968 ["INT_ADD", "register:40f0:8", ["const:932968:8", "const:4:8"]]
+ 00932968 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-30545f0ee77d2fe37242d6b0a0ff7d3c"></a>

### [`00931a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931a64.md) → [`00932a10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/00932a10.md) FUN_00932a10

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00765314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00765/00765314.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00931a80 ["INT_ADD", "register:40f0:8", ["const:931a80:8", "const:4:8"]]
- 00931a80 ["CALL", null, ["callee:008524fc:8"]]
+ 00932a2c ["INT_ADD", "register:40f0:8", ["const:932a2c:8", "const:4:8"]]
+ 00932a2c ["CALL", null, ["callee:008524fc:8"]]
- 00931a88 ["INT_ADD", "register:40f0:8", ["const:931a88:8", "const:4:8"]]
- 00931a88 ["CALL", null, ["callee:00765314:8"]]
+ 00932a34 ["INT_ADD", "register:40f0:8", ["const:932a34:8", "const:4:8"]]
+ 00932a34 ["CALL", null, ["callee:00765314:8"]]
- 00931aa0 ["INT_ADD", "register:40f0:8", ["const:931aa0:8", "const:4:8"]]
- 00931aa0 ["CALL", null, ["callee:00c58f50:8"]]
+ 00932a4c ["INT_ADD", "register:40f0:8", ["const:932a4c:8", "const:4:8"]]
+ 00932a4c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-fe1d5d042449c494705396c892222437"></a>

### [`00931f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/00931f50.md) → [`00932efc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/00932efc.md) FUN_00932efc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00765314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00765/00765314.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00931f6c ["INT_ADD", "register:40f0:8", ["const:931f6c:8", "const:4:8"]]
- 00931f6c ["CALL", null, ["callee:008524fc:8"]]
+ 00932f18 ["INT_ADD", "register:40f0:8", ["const:932f18:8", "const:4:8"]]
+ 00932f18 ["CALL", null, ["callee:008524fc:8"]]
- 00931f74 ["INT_ADD", "register:40f0:8", ["const:931f74:8", "const:4:8"]]
- 00931f74 ["CALL", null, ["callee:00765314:8"]]
+ 00932f20 ["INT_ADD", "register:40f0:8", ["const:932f20:8", "const:4:8"]]
+ 00932f20 ["CALL", null, ["callee:00765314:8"]]
- 00931f8c ["INT_ADD", "register:40f0:8", ["const:931f8c:8", "const:4:8"]]
- 00931f8c ["CALL", null, ["callee:00c58f50:8"]]
+ 00932f38 ["INT_ADD", "register:40f0:8", ["const:932f38:8", "const:4:8"]]
+ 00932f38 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-fe06d82cbdeef8b1c174ce59d218bb15"></a>

### [`00932034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00932/00932034.md) → [`00932fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/00932fe0.md) FUN_00932fe0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00765314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00765/00765314.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00932050 ["INT_ADD", "register:40f0:8", ["const:932050:8", "const:4:8"]]
- 00932050 ["CALL", null, ["callee:008524fc:8"]]
+ 00932ffc ["INT_ADD", "register:40f0:8", ["const:932ffc:8", "const:4:8"]]
+ 00932ffc ["CALL", null, ["callee:008524fc:8"]]
- 00932058 ["INT_ADD", "register:40f0:8", ["const:932058:8", "const:4:8"]]
- 00932058 ["CALL", null, ["callee:00765314:8"]]
+ 00933004 ["INT_ADD", "register:40f0:8", ["const:933004:8", "const:4:8"]]
+ 00933004 ["CALL", null, ["callee:00765314:8"]]
- 00932070 ["INT_ADD", "register:40f0:8", ["const:932070:8", "const:4:8"]]
- 00932070 ["CALL", null, ["callee:00c58f50:8"]]
+ 0093301c ["INT_ADD", "register:40f0:8", ["const:93301c:8", "const:4:8"]]
+ 0093301c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-148ef4768a3832fc1d0c3d75c14ff819"></a>

### [`0093249c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00932/0093249c.md) → [`00933448`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00933/00933448.md) FUN_00933448

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00765314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00765/00765314.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009324b8 ["INT_ADD", "register:40f0:8", ["const:9324b8:8", "const:4:8"]]
- 009324b8 ["CALL", null, ["callee:008524fc:8"]]
+ 00933464 ["INT_ADD", "register:40f0:8", ["const:933464:8", "const:4:8"]]
+ 00933464 ["CALL", null, ["callee:008524fc:8"]]
- 009324c0 ["INT_ADD", "register:40f0:8", ["const:9324c0:8", "const:4:8"]]
- 009324c0 ["CALL", null, ["callee:00765314:8"]]
+ 0093346c ["INT_ADD", "register:40f0:8", ["const:93346c:8", "const:4:8"]]
+ 0093346c ["CALL", null, ["callee:00765314:8"]]
- 009324d8 ["INT_ADD", "register:40f0:8", ["const:9324d8:8", "const:4:8"]]
- 009324d8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00933484 ["INT_ADD", "register:40f0:8", ["const:933484:8", "const:4:8"]]
+ 00933484 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-ac5e2cbf260e17a7e34ce3022ed049fc"></a>

### [`00932580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00932/00932580.md) → [`0093352c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00933/0093352c.md) FUN_0093352c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00765314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00765/00765314.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093259c ["INT_ADD", "register:40f0:8", ["const:93259c:8", "const:4:8"]]
- 0093259c ["CALL", null, ["callee:008524fc:8"]]
+ 00933548 ["INT_ADD", "register:40f0:8", ["const:933548:8", "const:4:8"]]
+ 00933548 ["CALL", null, ["callee:008524fc:8"]]
- 009325a4 ["INT_ADD", "register:40f0:8", ["const:9325a4:8", "const:4:8"]]
- 009325a4 ["CALL", null, ["callee:00765314:8"]]
+ 00933550 ["INT_ADD", "register:40f0:8", ["const:933550:8", "const:4:8"]]
+ 00933550 ["CALL", null, ["callee:00765314:8"]]
- 009325bc ["INT_ADD", "register:40f0:8", ["const:9325bc:8", "const:4:8"]]
- 009325bc ["CALL", null, ["callee:00c58f50:8"]]
+ 00933568 ["INT_ADD", "register:40f0:8", ["const:933568:8", "const:4:8"]]
+ 00933568 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-e6f5f9d5347a6ddea2e8a7628daa5936"></a>

### [`00932c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00932/00932c40.md) → [`00933bec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00933/00933bec.md) FUN_00933bec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00765314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00765/00765314.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00932c5c ["INT_ADD", "register:40f0:8", ["const:932c5c:8", "const:4:8"]]
- 00932c5c ["CALL", null, ["callee:008524fc:8"]]
+ 00933c08 ["INT_ADD", "register:40f0:8", ["const:933c08:8", "const:4:8"]]
+ 00933c08 ["CALL", null, ["callee:008524fc:8"]]
- 00932c64 ["INT_ADD", "register:40f0:8", ["const:932c64:8", "const:4:8"]]
- 00932c64 ["CALL", null, ["callee:00765314:8"]]
+ 00933c10 ["INT_ADD", "register:40f0:8", ["const:933c10:8", "const:4:8"]]
+ 00933c10 ["CALL", null, ["callee:00765314:8"]]
- 00932c7c ["INT_ADD", "register:40f0:8", ["const:932c7c:8", "const:4:8"]]
- 00932c7c ["CALL", null, ["callee:00c58f50:8"]]
+ 00933c28 ["INT_ADD", "register:40f0:8", ["const:933c28:8", "const:4:8"]]
+ 00933c28 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-621e1ce0b106ff56659c4184a44353a3"></a>

### [`00932d24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00932/00932d24.md) → [`00933cd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00933/00933cd0.md) FUN_00933cd0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00765314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00765/00765314.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00932d40 ["INT_ADD", "register:40f0:8", ["const:932d40:8", "const:4:8"]]
- 00932d40 ["CALL", null, ["callee:008524fc:8"]]
+ 00933cec ["INT_ADD", "register:40f0:8", ["const:933cec:8", "const:4:8"]]
+ 00933cec ["CALL", null, ["callee:008524fc:8"]]
- 00932d48 ["INT_ADD", "register:40f0:8", ["const:932d48:8", "const:4:8"]]
- 00932d48 ["CALL", null, ["callee:00765314:8"]]
+ 00933cf4 ["INT_ADD", "register:40f0:8", ["const:933cf4:8", "const:4:8"]]
+ 00933cf4 ["CALL", null, ["callee:00765314:8"]]
- 00932d60 ["INT_ADD", "register:40f0:8", ["const:932d60:8", "const:4:8"]]
- 00932d60 ["CALL", null, ["callee:00c58f50:8"]]
+ 00933d0c ["INT_ADD", "register:40f0:8", ["const:933d0c:8", "const:4:8"]]
+ 00933d0c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-3415b53387b07986278096a229bfad42"></a>

### [`00933264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933264.md) → [`00934210`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/00934210.md) FUN_00934210

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00765314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00765/00765314.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00933280 ["INT_ADD", "register:40f0:8", ["const:933280:8", "const:4:8"]]
- 00933280 ["CALL", null, ["callee:008524fc:8"]]
+ 0093422c ["INT_ADD", "register:40f0:8", ["const:93422c:8", "const:4:8"]]
+ 0093422c ["CALL", null, ["callee:008524fc:8"]]
- 00933288 ["INT_ADD", "register:40f0:8", ["const:933288:8", "const:4:8"]]
- 00933288 ["CALL", null, ["callee:00765314:8"]]
+ 00934234 ["INT_ADD", "register:40f0:8", ["const:934234:8", "const:4:8"]]
+ 00934234 ["CALL", null, ["callee:00765314:8"]]
- 009332a0 ["INT_ADD", "register:40f0:8", ["const:9332a0:8", "const:4:8"]]
- 009332a0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0093424c ["INT_ADD", "register:40f0:8", ["const:93424c:8", "const:4:8"]]
+ 0093424c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-7552ae192800599cefe5b38c5e0a58ee"></a>

### [`00933348`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00933/00933348.md) → [`009342f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00934/009342f4.md) FUN_009342f4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00765314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00765/00765314.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00933364 ["INT_ADD", "register:40f0:8", ["const:933364:8", "const:4:8"]]
- 00933364 ["CALL", null, ["callee:008524fc:8"]]
+ 00934310 ["INT_ADD", "register:40f0:8", ["const:934310:8", "const:4:8"]]
+ 00934310 ["CALL", null, ["callee:008524fc:8"]]
- 0093336c ["INT_ADD", "register:40f0:8", ["const:93336c:8", "const:4:8"]]
- 0093336c ["CALL", null, ["callee:00765314:8"]]
+ 00934318 ["INT_ADD", "register:40f0:8", ["const:934318:8", "const:4:8"]]
+ 00934318 ["CALL", null, ["callee:00765314:8"]]
- 00933384 ["INT_ADD", "register:40f0:8", ["const:933384:8", "const:4:8"]]
- 00933384 ["CALL", null, ["callee:00c58f50:8"]]
+ 00934330 ["INT_ADD", "register:40f0:8", ["const:934330:8", "const:4:8"]]
+ 00934330 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-dc8007aa2001689d74c2feb30969513e"></a>

### [`00935ac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00935/00935ac4.md) → [`00936a70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00936/00936a70.md) FUN_00936a70

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00935ae0 ["INT_ADD", "register:40f0:8", ["const:935ae0:8", "const:4:8"]]
- 00935ae0 ["CALL", null, ["callee:00c54d90:8"]]
+ 00936a8c ["INT_ADD", "register:40f0:8", ["const:936a8c:8", "const:4:8"]]
+ 00936a8c ["CALL", null, ["callee:00c54d90:8"]]
- 00935b00 ["COPY", "register:0:8", ["register:4040:8"]]
- 00935b00 ["INT_ADD", "register:40f0:8", ["const:935b00:8", "const:4:8"]]
- 00935b00 ["CALLIND", null, ["register:0:8"]]
+ 00936aac ["COPY", "register:0:8", ["register:4040:8"]]
+ 00936aac ["INT_ADD", "register:40f0:8", ["const:936aac:8", "const:4:8"]]
+ 00936aac ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5c1fd64c2daea4035edff9182f0d5e81"></a>

### [`00935b14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00935/00935b14.md) → [`00936ac0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00936/00936ac0.md) FUN_00936ac0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00935b30 ["INT_ADD", "register:40f0:8", ["const:935b30:8", "const:4:8"]]
- 00935b30 ["CALL", null, ["callee:00c54d90:8"]]
+ 00936adc ["INT_ADD", "register:40f0:8", ["const:936adc:8", "const:4:8"]]
+ 00936adc ["CALL", null, ["callee:00c54d90:8"]]
- 00935b50 ["COPY", "register:0:8", ["register:4040:8"]]
- 00935b50 ["INT_ADD", "register:40f0:8", ["const:935b50:8", "const:4:8"]]
- 00935b50 ["CALLIND", null, ["register:0:8"]]
+ 00936afc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00936afc ["INT_ADD", "register:40f0:8", ["const:936afc:8", "const:4:8"]]
+ 00936afc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ddc6a182e9f4bb168eb398724ef654d4"></a>

### [`00935b64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00935/00935b64.md) → [`00936b10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00936/00936b10.md) FUN_00936b10

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`00859ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859ba4.md) [`0085b2fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b2fc.md) [`0085b304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b304.md) [`0085b32c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b32c.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md) [`0085ab50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab50.md) [`0085c2a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c2a8.md) [`0085c2b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c2b0.md) [`0085c2d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c2d8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00935ba4 ["INT_ADD", "register:40f0:8", ["const:935ba4:8", "const:4:8"]]
- 00935ba4 ["CALL", null, ["callee:0085ab50:8"]]
+ 00936b50 ["INT_ADD", "register:40f0:8", ["const:936b50:8", "const:4:8"]]
+ 00936b50 ["CALL", null, ["callee:0085ab50:8"]]
- 00935bb0 ["INT_ADD", "register:40f0:8", ["const:935bb0:8", "const:4:8"]]
- 00935bb0 ["CALL", null, ["callee:0085c2d8:8"]]
+ 00936b5c ["INT_ADD", "register:40f0:8", ["const:936b5c:8", "const:4:8"]]
+ 00936b5c ["CALL", null, ["callee:0085c2d8:8"]]
- 00935bbc ["INT_ADD", "register:40f0:8", ["const:935bbc:8", "const:4:8"]]
- 00935bbc ["CALL", null, ["callee:0085c2a8:8"]]
+ 00936b68 ["INT_ADD", "register:40f0:8", ["const:936b68:8", "const:4:8"]]
+ 00936b68 ["CALL", null, ["callee:0085c2a8:8"]]
~~~


