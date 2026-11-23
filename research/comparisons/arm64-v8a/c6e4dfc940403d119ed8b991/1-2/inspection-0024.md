# v16.0.2 → v16.0.3 · 要調査の変更候補 (24)

[一覧の目次](README.md)

<a id="compare-4fb164fedffc4e7917a81fed3ca9b03c"></a>

### [`00935d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00935/00935d4c.md) → [`00936cf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00936/00936cf8.md) FUN_00936cf8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`00732120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00732/00732120.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`007324d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00732/007324d0.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00935da8 ["INT_ADD", "register:40f0:8", ["const:935da8:8", "const:4:8"]]
- 00935da8 ["CALL", null, ["callee:00c54d60:8"]]
+ 00936d54 ["INT_ADD", "register:40f0:8", ["const:936d54:8", "const:4:8"]]
+ 00936d54 ["CALL", null, ["callee:00c54d60:8"]]
- 00935e0c ["INT_ADD", "register:40f0:8", ["const:935e0c:8", "const:4:8"]]
- 00935e0c ["CALL", null, ["callee:007324d0:8"]]
+ 00936db8 ["INT_ADD", "register:40f0:8", ["const:936db8:8", "const:4:8"]]
+ 00936db8 ["CALL", null, ["callee:007324d0:8"]]
- 00935e1c ["INT_ADD", "register:40f0:8", ["const:935e1c:8", "const:4:8"]]
- 00935e1c ["CALL", null, ["callee:00c54d90:8"]]
+ 00936dc8 ["INT_ADD", "register:40f0:8", ["const:936dc8:8", "const:4:8"]]
+ 00936dc8 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-0530292030a02e5be2338dc558f16172"></a>

### [`00935e90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00935/00935e90.md) → [`00936e3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00936/00936e3c.md) FUN_00936e3c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009b892c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b892c.md) · 呼出先 2件 [`0057c694`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0057c/0057c694.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`009b98d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b9/009b98d8.md) · 呼出先 2件 [`0057c9b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0057c/0057c9b4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00935ecc ["COPY", "register:0:8", ["register:4048:8"]]
- 00935ecc ["INT_ADD", "register:40f0:8", ["const:935ecc:8", "const:4:8"]]
- 00935ecc ["CALLIND", null, ["register:0:8"]]
+ 00936e78 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00936e78 ["INT_ADD", "register:40f0:8", ["const:936e78:8", "const:4:8"]]
+ 00936e78 ["CALLIND", null, ["register:0:8"]]
- 00935ef8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00935ef8 ["INT_ADD", "register:40f0:8", ["const:935ef8:8", "const:4:8"]]
- 00935ef8 ["CALLIND", null, ["register:0:8"]]
+ 00936ea4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00936ea4 ["INT_ADD", "register:40f0:8", ["const:936ea4:8", "const:4:8"]]
+ 00936ea4 ["CALLIND", null, ["register:0:8"]]
- 00935f08 ["INT_ADD", "register:40f0:8", ["const:935f08:8", "const:4:8"]]
- 00935f08 ["CALL", null, ["callee:0057c9b4:8"]]
+ 00936eb4 ["INT_ADD", "register:40f0:8", ["const:936eb4:8", "const:4:8"]]
+ 00936eb4 ["CALL", null, ["callee:0057c9b4:8"]]
~~~


<a id="compare-7d0806ad9e794acaf2bb5ef9f4d13f65"></a>

### [`00936cd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00936/00936cd8.md) → [`00937c84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00937/00937c84.md) FUN_00937c84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) · 呼出先 1件 [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md)
- 新版 呼出元 1件 [`0084f5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084f/0084f5a0.md) · 呼出先 1件 [`005c426c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c426c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00936cf0 ["INT_ADD", "register:40f0:8", ["const:936cf0:8", "const:4:8"]]
- 00936cf0 ["CALL", null, ["callee:005c426c:8"]]
+ 00937c9c ["INT_ADD", "register:40f0:8", ["const:937c9c:8", "const:4:8"]]
+ 00937c9c ["CALL", null, ["callee:005c426c:8"]]
~~~


<a id="compare-ebb9aa65fc01ec27eb20088498738054"></a>

### [`009379f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00937/009379f4.md) → [`009389a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00938/009389a0.md) FUN_009389a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 3件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`0093c770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093c/0093c770.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00937a8c ["INT_ADD", "register:40f0:8", ["const:937a8c:8", "const:4:8"]]
- 00937a8c ["CALL", null, ["callee:00c58f30:8"]]
+ 00938a38 ["INT_ADD", "register:40f0:8", ["const:938a38:8", "const:4:8"]]
+ 00938a38 ["CALL", null, ["callee:00c58f30:8"]]
- 00937ae4 ["INT_ADD", "register:40f0:8", ["const:937ae4:8", "const:4:8"]]
- 00937ae4 ["CALL", null, ["callee:0043bf04:8"]]
+ 00938a90 ["INT_ADD", "register:40f0:8", ["const:938a90:8", "const:4:8"]]
+ 00938a90 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-795c4d4f6615de2ecb800ad46eae2a7e"></a>

### [`00937b14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00937/00937b14.md) → [`00938ac0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00938/00938ac0.md) FUN_00938ac0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 6件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00605294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/00605294.md) [`0071e9c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071e/0071e9c4.md) [`007ca580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ca/007ca580.md) [`007dd3bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007dd/007dd3bc.md) · 呼出先 5件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046dafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046dafc.md) [`0080b098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080b/0080b098.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 6件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`00605644`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00605/00605644.md) [`0071ed74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071e/0071ed74.md) [`007cb4e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cb/007cb4e4.md) [`007de320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007de/007de320.md) · 呼出先 5件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0046de1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de1c.md) [`0080bffc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080b/0080bffc.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00937b88 ["INT_ADD", "register:40f0:8", ["const:937b88:8", "const:4:8"]]
- 00937b88 ["CALL", null, ["callee:0043bf04:8"]]
+ 00938b34 ["INT_ADD", "register:40f0:8", ["const:938b34:8", "const:4:8"]]
+ 00938b34 ["CALL", null, ["callee:0043bf04:8"]]
- 00937ba4 ["INT_ADD", "register:40f0:8", ["const:937ba4:8", "const:4:8"]]
- 00937ba4 ["CALL", null, ["callee:0046de1c:8"]]
+ 00938b50 ["INT_ADD", "register:40f0:8", ["const:938b50:8", "const:4:8"]]
+ 00938b50 ["CALL", null, ["callee:0046de1c:8"]]
- 00937bf8 ["INT_ADD", "register:40f0:8", ["const:937bf8:8", "const:4:8"]]
- 00937bf8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00938ba4 ["INT_ADD", "register:40f0:8", ["const:938ba4:8", "const:4:8"]]
+ 00938ba4 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-10203080f4800783a0f98ea2e11b604e"></a>

### [`00937e04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00937/00937e04.md) → [`00938db0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00938/00938db0.md) FUN_00938db0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 9件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`004801b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/004801b8.md) [`00480218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480218.md)
- 新版 呼出元 1件 [`00a271bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a27/00a271bc.md) · 呼出先 9件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`004804d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/004804d8.md) [`00480538`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480538.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00937e3c ["INT_ADD", "register:40f0:8", ["const:937e3c:8", "const:4:8"]]
- 00937e3c ["CALL", null, ["callee:005c426c:8"]]
+ 00938de8 ["INT_ADD", "register:40f0:8", ["const:938de8:8", "const:4:8"]]
+ 00938de8 ["CALL", null, ["callee:005c426c:8"]]
- 00937e4c ["INT_ADD", "register:40f0:8", ["const:937e4c:8", "const:4:8"]]
- 00937e4c ["CALL", null, ["callee:004804d8:8"]]
+ 00938df8 ["INT_ADD", "register:40f0:8", ["const:938df8:8", "const:4:8"]]
+ 00938df8 ["CALL", null, ["callee:004804d8:8"]]
- 00937e84 ["INT_ADD", "register:40f0:8", ["const:937e84:8", "const:4:8"]]
- 00937e84 ["CALL", null, ["callee:00480538:8"]]
+ 00938e30 ["INT_ADD", "register:40f0:8", ["const:938e30:8", "const:4:8"]]
+ 00938e30 ["CALL", null, ["callee:00480538:8"]]
~~~


<a id="compare-bb4be51f058b022f9f411805493a1c93"></a>

### [`00938038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00938/00938038.md) → [`00938fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00938/00938fe4.md) FUN_00938fe4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 2件 [`00480bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480bd0.md) [`00480c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480c28.md)
- 新版 呼出元 1件 [`00a2c310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a2c/00a2c310.md) · 呼出先 2件 [`00480ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480ef0.md) [`00480f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480f48.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00938060 ["INT_ADD", "register:40f0:8", ["const:938060:8", "const:4:8"]]
- 00938060 ["CALL", null, ["callee:00480ef0:8"]]
+ 0093900c ["INT_ADD", "register:40f0:8", ["const:93900c:8", "const:4:8"]]
+ 0093900c ["CALL", null, ["callee:00480ef0:8"]]
- 0093809c ["INT_ADD", "register:40f0:8", ["const:93809c:8", "const:4:8"]]
- 0093809c ["CALL", null, ["callee:00480f48:8"]]
+ 00939048 ["INT_ADD", "register:40f0:8", ["const:939048:8", "const:4:8"]]
+ 00939048 ["CALL", null, ["callee:00480f48:8"]]
- 009380b0 ["INT_ADD", "register:40f0:8", ["const:9380b0:8", "const:4:8"]]
- 009380b0 ["CALL", null, ["callee:00480ef0:8"]]
+ 0093905c ["INT_ADD", "register:40f0:8", ["const:93905c:8", "const:4:8"]]
+ 0093905c ["CALL", null, ["callee:00480ef0:8"]]
~~~


<a id="compare-0a5ebbd9722200dc9fd7afd8f5911106"></a>

### [`00938104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00938/00938104.md) → [`009390b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00939/009390b0.md) FUN_009390b0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) · 呼出先 13件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`005dc340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc340.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`0080b098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080b/0080b098.md)
- 新版 呼出元 2件 [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) [`007bea00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007be/007bea00.md) · 呼出先 13件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`005dc6f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dc6f0.md) [`00676e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676e50.md) [`0080bffc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080b/0080bffc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00938180 ["INT_ADD", "register:40f0:8", ["const:938180:8", "const:4:8"]]
- 00938180 ["CALL", null, ["callee:008524fc:8"]]
+ 0093912c ["INT_ADD", "register:40f0:8", ["const:93912c:8", "const:4:8"]]
+ 0093912c ["CALL", null, ["callee:008524fc:8"]]
- 00938190 ["INT_ADD", "register:40f0:8", ["const:938190:8", "const:4:8"]]
- 00938190 ["CALL", null, ["callee:00a6a670:8"]]
+ 0093913c ["INT_ADD", "register:40f0:8", ["const:93913c:8", "const:4:8"]]
+ 0093913c ["CALL", null, ["callee:00a6a670:8"]]
- 009381a0 ["INT_ADD", "register:40f0:8", ["const:9381a0:8", "const:4:8"]]
- 009381a0 ["CALL", null, ["callee:008524fc:8"]]
+ 0093914c ["INT_ADD", "register:40f0:8", ["const:93914c:8", "const:4:8"]]
+ 0093914c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-b284762bc754418fe56d7ddf29571b7a"></a>

### [`00938554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00938/00938554.md) → [`00939500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00939/00939500.md) FUN_00939500

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00938104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00938/00938104.md) [`009387c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00938/009387c8.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58520.md)
- 新版 呼出元 2件 [`009390b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00939/009390b0.md) [`00939774`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00939/00939774.md) · 呼出先 3件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c594f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c594f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009385f4 ["INT_ADD", "register:40f0:8", ["const:9385f4:8", "const:4:8"]]
- 009385f4 ["CALL", null, ["callee:00c58f30:8"]]
+ 009395a0 ["INT_ADD", "register:40f0:8", ["const:9395a0:8", "const:4:8"]]
+ 009395a0 ["CALL", null, ["callee:00c58f30:8"]]
- 00938630 ["INT_ADD", "register:40f0:8", ["const:938630:8", "const:4:8"]]
- 00938630 ["CALL", null, ["callee:0043bf04:8"]]
+ 009395dc ["INT_ADD", "register:40f0:8", ["const:9395dc:8", "const:4:8"]]
+ 009395dc ["CALL", null, ["callee:0043bf04:8"]]
- 00938698 ["INT_ADD", "register:40f0:8", ["const:938698:8", "const:4:8"]]
- 00938698 ["CALL", null, ["callee:00c58f30:8"]]
+ 00939644 ["INT_ADD", "register:40f0:8", ["const:939644:8", "const:4:8"]]
+ 00939644 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-d36fa900e5f5c1a5202486099427469a"></a>

### [`009387c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00938/009387c8.md) → [`00939774`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00939/00939774.md) FUN_00939774

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`00809a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00809/00809a30.md) · 呼出先 11件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00719790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00719/00719790.md) [`00938554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00938/00938554.md)
- 新版 呼出元 3件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`0080a994`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080a/0080a994.md) · 呼出先 11件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00719b40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00719/00719b40.md) [`00939500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00939/00939500.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093880c ["INT_ADD", "register:40f0:8", ["const:93880c:8", "const:4:8"]]
- 0093880c ["CALL", null, ["callee:00939500:8"]]
+ 009397b8 ["INT_ADD", "register:40f0:8", ["const:9397b8:8", "const:4:8"]]
+ 009397b8 ["CALL", null, ["callee:00939500:8"]]
- 0093886c ["INT_ADD", "register:40f0:8", ["const:93886c:8", "const:4:8"]]
- 0093886c ["CALL", null, ["callee:00c58f30:8"]]
+ 00939818 ["INT_ADD", "register:40f0:8", ["const:939818:8", "const:4:8"]]
+ 00939818 ["CALL", null, ["callee:00c58f30:8"]]
- 009388a8 ["INT_ADD", "register:40f0:8", ["const:9388a8:8", "const:4:8"]]
- 009388a8 ["CALL", null, ["callee:0043bf04:8"]]
+ 00939854 ["INT_ADD", "register:40f0:8", ["const:939854:8", "const:4:8"]]
+ 00939854 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-6aed23802849426f2b3b22d3a381712f"></a>

### [`0093a1cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093a/0093a1cc.md) → [`0093b178`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093b/0093b178.md) FUN_0093b178

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093a1e8 ["INT_ADD", "register:40f0:8", ["const:93a1e8:8", "const:4:8"]]
- 0093a1e8 ["CALL", null, ["callee:00c58f50:8"]]
+ 0093b194 ["INT_ADD", "register:40f0:8", ["const:93b194:8", "const:4:8"]]
+ 0093b194 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-63445657e41c548f5a3a7c742717534f"></a>

### [`0093a210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093a/0093a210.md) → [`0093b1bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093b/0093b1bc.md) FUN_0093b1bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) · 呼出先 2件 [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md)
- 新版 呼出元 1件 [`0084f5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084f/0084f5a0.md) · 呼出先 2件 [`005c426c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c426c.md) [`00676e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676e50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093a22c ["INT_ADD", "register:40f0:8", ["const:93a22c:8", "const:4:8"]]
- 0093a22c ["CALL", null, ["callee:005c426c:8"]]
+ 0093b1d8 ["INT_ADD", "register:40f0:8", ["const:93b1d8:8", "const:4:8"]]
+ 0093b1d8 ["CALL", null, ["callee:005c426c:8"]]
- 0093a244 ["INT_ADD", "register:40f0:8", ["const:93a244:8", "const:4:8"]]
- 0093a244 ["CALL", null, ["callee:00676e50:8"]]
+ 0093b1f0 ["INT_ADD", "register:40f0:8", ["const:93b1f0:8", "const:4:8"]]
+ 0093b1f0 ["CALL", null, ["callee:00676e50:8"]]
~~~


<a id="compare-83fdcac6efb208e79a2f932ca94a3540"></a>

### [`0093a25c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093a/0093a25c.md) → [`0093b208`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093b/0093b208.md) FUN_0093b208

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 9件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00480218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480218.md) [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md)
- 新版 呼出元 1件 [`00a271bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a27/00a271bc.md) · 呼出先 9件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00480538`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480538.md) [`005c426c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c426c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093a294 ["INT_ADD", "register:40f0:8", ["const:93a294:8", "const:4:8"]]
- 0093a294 ["CALL", null, ["callee:005c426c:8"]]
+ 0093b240 ["INT_ADD", "register:40f0:8", ["const:93b240:8", "const:4:8"]]
+ 0093b240 ["CALL", null, ["callee:005c426c:8"]]
- 0093a2a4 ["INT_ADD", "register:40f0:8", ["const:93a2a4:8", "const:4:8"]]
- 0093a2a4 ["CALL", null, ["callee:00480538:8"]]
+ 0093b250 ["INT_ADD", "register:40f0:8", ["const:93b250:8", "const:4:8"]]
+ 0093b250 ["CALL", null, ["callee:00480538:8"]]
- 0093a2d8 ["INT_ADD", "register:40f0:8", ["const:93a2d8:8", "const:4:8"]]
- 0093a2d8 ["CALL", null, ["callee:00480538:8"]]
+ 0093b284 ["INT_ADD", "register:40f0:8", ["const:93b284:8", "const:4:8"]]
+ 0093b284 ["CALL", null, ["callee:00480538:8"]]
~~~


<a id="compare-4dcf374fcee4266d083ada0de2e9c6c3"></a>

### [`0093a594`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093a/0093a594.md) → [`0093b540`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093b/0093b540.md) FUN_0093b540

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 6件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00480c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480c28.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00a2c310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a2c/00a2c310.md) · 呼出先 6件 [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00480f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480f48.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093a5d8 ["INT_ADD", "register:40f0:8", ["const:93a5d8:8", "const:4:8"]]
- 0093a5d8 ["CALL", null, ["callee:00480f48:8"]]
+ 0093b584 ["INT_ADD", "register:40f0:8", ["const:93b584:8", "const:4:8"]]
+ 0093b584 ["CALL", null, ["callee:00480f48:8"]]
- 0093a624 ["INT_ADD", "register:40f0:8", ["const:93a624:8", "const:4:8"]]
- 0093a624 ["CALL", null, ["callee:00c58f30:8"]]
+ 0093b5d0 ["INT_ADD", "register:40f0:8", ["const:93b5d0:8", "const:4:8"]]
+ 0093b5d0 ["CALL", null, ["callee:00c58f30:8"]]
- 0093a638 ["INT_ADD", "register:40f0:8", ["const:93a638:8", "const:4:8"]]
- 0093a638 ["CALL", null, ["callee:00c590a0:8"]]
+ 0093b5e4 ["INT_ADD", "register:40f0:8", ["const:93b5e4:8", "const:4:8"]]
+ 0093b5e4 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-e22e092e999b997b0301deb4c9f57224"></a>

### [`0093a82c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093a/0093a82c.md) → [`0093b7d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093b/0093b7d8.md) FUN_0093b7d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00605294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/00605294.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`00605644`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00605/00605644.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093a8c4 ["INT_ADD", "register:40f0:8", ["const:93a8c4:8", "const:4:8"]]
- 0093a8c4 ["CALL", null, ["callee:00c58f30:8"]]
+ 0093b870 ["INT_ADD", "register:40f0:8", ["const:93b870:8", "const:4:8"]]
+ 0093b870 ["CALL", null, ["callee:00c58f30:8"]]
- 0093a904 ["INT_ADD", "register:40f0:8", ["const:93a904:8", "const:4:8"]]
- 0093a904 ["CALL", null, ["callee:0043bf04:8"]]
+ 0093b8b0 ["INT_ADD", "register:40f0:8", ["const:93b8b0:8", "const:4:8"]]
+ 0093b8b0 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-c8f144f8b28f9c27b32d4bee6c7f70ad"></a>

### [`0093a934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093a/0093a934.md) → [`0093b8e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093b/0093b8e0.md) FUN_0093b8e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`0061456c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00614/0061456c.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`00606ed4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00606/00606ed4.md) [`0061491c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00614/0061491c.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093a9ac ["INT_ADD", "register:40f0:8", ["const:93a9ac:8", "const:4:8"]]
- 0093a9ac ["CALL", null, ["callee:0043bf04:8"]]
+ 0093b958 ["INT_ADD", "register:40f0:8", ["const:93b958:8", "const:4:8"]]
+ 0093b958 ["CALL", null, ["callee:0043bf04:8"]]
- 0093aa20 ["INT_ADD", "register:40f0:8", ["const:93aa20:8", "const:4:8"]]
- 0093aa20 ["CALL", null, ["callee:00c58f30:8"]]
+ 0093b9cc ["INT_ADD", "register:40f0:8", ["const:93b9cc:8", "const:4:8"]]
+ 0093b9cc ["CALL", null, ["callee:00c58f30:8"]]
- 0093aa60 ["INT_ADD", "register:40f0:8", ["const:93aa60:8", "const:4:8"]]
- 0093aa60 ["CALL", null, ["callee:0043bf04:8"]]
+ 0093ba0c ["INT_ADD", "register:40f0:8", ["const:93ba0c:8", "const:4:8"]]
+ 0093ba0c ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-645ce0241e552786fa38df9bb3e1a1a3"></a>

### [`0093abd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093a/0093abd8.md) → [`0093bb84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093b/0093bb84.md) FUN_0093bb84

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00605294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/00605294.md) [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58520.md)
- 新版 呼出元 3件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`00605644`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00605/00605644.md) [`0093c770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093c/0093c770.md) · 呼出先 3件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c594f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c594f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093ac78 ["INT_ADD", "register:40f0:8", ["const:93ac78:8", "const:4:8"]]
- 0093ac78 ["CALL", null, ["callee:00c58f30:8"]]
+ 0093bc24 ["INT_ADD", "register:40f0:8", ["const:93bc24:8", "const:4:8"]]
+ 0093bc24 ["CALL", null, ["callee:00c58f30:8"]]
- 0093acb4 ["INT_ADD", "register:40f0:8", ["const:93acb4:8", "const:4:8"]]
- 0093acb4 ["CALL", null, ["callee:0043bf04:8"]]
+ 0093bc60 ["INT_ADD", "register:40f0:8", ["const:93bc60:8", "const:4:8"]]
+ 0093bc60 ["CALL", null, ["callee:0043bf04:8"]]
- 0093ad1c ["INT_ADD", "register:40f0:8", ["const:93ad1c:8", "const:4:8"]]
- 0093ad1c ["CALL", null, ["callee:00c58f30:8"]]
+ 0093bcc8 ["INT_ADD", "register:40f0:8", ["const:93bcc8:8", "const:4:8"]]
+ 0093bcc8 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-51677aaa586df8ddfa552d2e05175223"></a>

### [`0093ae44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093a/0093ae44.md) → [`0093bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093b/0093bdf0.md) FUN_0093bdf0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00605294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/00605294.md) · 呼出先 8件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`00605644`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00605/00605644.md) · 呼出先 8件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093aec0 ["INT_ADD", "register:40f0:8", ["const:93aec0:8", "const:4:8"]]
- 0093aec0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0093be6c ["INT_ADD", "register:40f0:8", ["const:93be6c:8", "const:4:8"]]
+ 0093be6c ["CALL", null, ["callee:00c58f30:8"]]
- 0093aefc ["INT_ADD", "register:40f0:8", ["const:93aefc:8", "const:4:8"]]
- 0093aefc ["CALL", null, ["callee:0043bf04:8"]]
+ 0093bea8 ["INT_ADD", "register:40f0:8", ["const:93bea8:8", "const:4:8"]]
+ 0093bea8 ["CALL", null, ["callee:0043bf04:8"]]
- 0093af54 ["INT_ADD", "register:40f0:8", ["const:93af54:8", "const:4:8"]]
- 0093af54 ["CALL", null, ["callee:00c58f30:8"]]
+ 0093bf00 ["INT_ADD", "register:40f0:8", ["const:93bf00:8", "const:4:8"]]
+ 0093bf00 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-9848796993c3d8506e30dbe471f76f7a"></a>

### [`0093b4b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b4b4.md) → [`0093c460`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093c/0093c460.md) FUN_0093c460

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) · 呼出先 6件 [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`00719790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00719/00719790.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00a69520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a69/00a69520.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009d1320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d1/009d1320.md) · 呼出先 6件 [`00494970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00494/00494970.md) [`00719b40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00719/00719b40.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00a6a514`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a6a/00a6a514.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093b524 ["INT_ADD", "register:40f0:8", ["const:93b524:8", "const:4:8"]]
- 0093b524 ["CALL", null, ["callee:00719b40:8"]]
+ 0093c4d0 ["INT_ADD", "register:40f0:8", ["const:93c4d0:8", "const:4:8"]]
+ 0093c4d0 ["CALL", null, ["callee:00719b40:8"]]
- 0093b5b8 ["INT_ADD", "register:40f0:8", ["const:93b5b8:8", "const:4:8"]]
- 0093b5b8 ["CALL", null, ["callee:00494970:8"]]
+ 0093c564 ["INT_ADD", "register:40f0:8", ["const:93c564:8", "const:4:8"]]
+ 0093c564 ["CALL", null, ["callee:00494970:8"]]
- 0093b5c0 ["INT_ADD", "register:40f0:8", ["const:93b5c0:8", "const:4:8"]]
- 0093b5c0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0093c56c ["INT_ADD", "register:40f0:8", ["const:93c56c:8", "const:4:8"]]
+ 0093c56c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-8f9b380e436b14154f4222e3ea7f2f4e"></a>

### [`0093b634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b634.md) → [`0093c5e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093c/0093c5e0.md) FUN_0093c5e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093b698 ["INT_ADD", "register:40f0:8", ["const:93b698:8", "const:4:8"]]
- 0093b698 ["CALL", null, ["callee:00c58f30:8"]]
+ 0093c644 ["INT_ADD", "register:40f0:8", ["const:93c644:8", "const:4:8"]]
+ 0093c644 ["CALL", null, ["callee:00c58f30:8"]]
- 0093b6d0 ["INT_ADD", "register:40f0:8", ["const:93b6d0:8", "const:4:8"]]
- 0093b6d0 ["CALL", null, ["callee:0043bf04:8"]]
+ 0093c67c ["INT_ADD", "register:40f0:8", ["const:93c67c:8", "const:4:8"]]
+ 0093c67c ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-d0291ea8b08925a1ab641aabceb13ca0"></a>

### [`0093b6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b6f8.md) → [`0093c6a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093c/0093c6a4.md) FUN_0093c6a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093b760 ["INT_ADD", "register:40f0:8", ["const:93b760:8", "const:4:8"]]
- 0093b760 ["CALL", null, ["callee:00c58f30:8"]]
+ 0093c70c ["INT_ADD", "register:40f0:8", ["const:93c70c:8", "const:4:8"]]
+ 0093c70c ["CALL", null, ["callee:00c58f30:8"]]
- 0093b798 ["INT_ADD", "register:40f0:8", ["const:93b798:8", "const:4:8"]]
- 0093b798 ["CALL", null, ["callee:0043bf04:8"]]
+ 0093c744 ["INT_ADD", "register:40f0:8", ["const:93c744:8", "const:4:8"]]
+ 0093c744 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-536293c0334e277b06d2cf3ec4b3ecee"></a>

### [`0093ee94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093e/0093ee94.md) → [`0093fe40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093f/0093fe40.md) FUN_0093fe40

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) [`00ab4d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ab4/00ab4d70.md) · 呼出先 5件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)
- 新版 呼出元 2件 [`0093c770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093c/0093c770.md) [`00ab5d64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ab5/00ab5d64.md) · 呼出先 5件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093eeb8 ["INT_ADD", "register:40f0:8", ["const:93eeb8:8", "const:4:8"]]
- 0093eeb8 ["CALL", null, ["callee:00c59080:8"]]
+ 0093fe64 ["INT_ADD", "register:40f0:8", ["const:93fe64:8", "const:4:8"]]
+ 0093fe64 ["CALL", null, ["callee:00c59080:8"]]
- 0093ef00 ["INT_ADD", "register:40f0:8", ["const:93ef00:8", "const:4:8"]]
- 0093ef00 ["CALL", null, ["callee:00c58f30:8"]]
+ 0093feac ["INT_ADD", "register:40f0:8", ["const:93feac:8", "const:4:8"]]
+ 0093feac ["CALL", null, ["callee:00c58f30:8"]]
- 0093ef20 ["INT_ADD", "register:40f0:8", ["const:93ef20:8", "const:4:8"]]
- 0093ef20 ["CALL", null, ["callee:00c58fe0:8"]]
+ 0093fecc ["INT_ADD", "register:40f0:8", ["const:93fecc:8", "const:4:8"]]
+ 0093fecc ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-3ef14b8e8f91f809b1818fe1ac486ae1"></a>

### [`0093ef88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093e/0093ef88.md) → [`0093ff34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093f/0093ff34.md) FUN_0093ff34

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0093c770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093c/0093c770.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093f000 ["INT_ADD", "register:40f0:8", ["const:93f000:8", "const:4:8"]]
- 0093f000 ["CALL", null, ["callee:00c58f50:8"]]
+ 0093ffac ["INT_ADD", "register:40f0:8", ["const:93ffac:8", "const:4:8"]]
+ 0093ffac ["CALL", null, ["callee:00c58f50:8"]]
- 0093f010 ["INT_ADD", "register:40f0:8", ["const:93f010:8", "const:4:8"]]
- 0093f010 ["CALL", null, ["callee:00c58f50:8"]]
+ 0093ffbc ["INT_ADD", "register:40f0:8", ["const:93ffbc:8", "const:4:8"]]
+ 0093ffbc ["CALL", null, ["callee:00c58f50:8"]]
- 0093f024 ["INT_ADD", "register:40f0:8", ["const:93f024:8", "const:4:8"]]
- 0093f024 ["CALL", null, ["callee:00c58f50:8"]]
+ 0093ffd0 ["INT_ADD", "register:40f0:8", ["const:93ffd0:8", "const:4:8"]]
+ 0093ffd0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-f370c48f6bd8a41d804adc3c1b7c310d"></a>

### [`0093f070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f070.md) → [`0094001c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00940/0094001c.md) FUN_0094001c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093f0b8 ["INT_ADD", "register:40f0:8", ["const:93f0b8:8", "const:4:8"]]
- 0093f0b8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00940064 ["INT_ADD", "register:40f0:8", ["const:940064:8", "const:4:8"]]
+ 00940064 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-2d0955bda4e75132ebdcfd2cd3dd06fa"></a>

### [`0093f0e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f0e8.md) → [`00940094`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00940/00940094.md) FUN_00940094

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0093c770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093c/0093c770.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093f134 ["INT_ADD", "register:40f0:8", ["const:93f134:8", "const:4:8"]]
- 0093f134 ["CALL", null, ["callee:00c58f50:8"]]
+ 009400e0 ["INT_ADD", "register:40f0:8", ["const:9400e0:8", "const:4:8"]]
+ 009400e0 ["CALL", null, ["callee:00c58f50:8"]]
- 0093f144 ["INT_ADD", "register:40f0:8", ["const:93f144:8", "const:4:8"]]
- 0093f144 ["CALL", null, ["callee:00c58f50:8"]]
+ 009400f0 ["INT_ADD", "register:40f0:8", ["const:9400f0:8", "const:4:8"]]
+ 009400f0 ["CALL", null, ["callee:00c58f50:8"]]
- 0093f154 ["INT_ADD", "register:40f0:8", ["const:93f154:8", "const:4:8"]]
- 0093f154 ["CALL", null, ["callee:00c58f50:8"]]
+ 00940100 ["INT_ADD", "register:40f0:8", ["const:940100:8", "const:4:8"]]
+ 00940100 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-818a6145c33e795dd8e3a88563978d8a"></a>

### [`0093f22c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f22c.md) → [`009401d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00940/009401d8.md) FUN_009401d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00939108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00939/00939108.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0093f404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f404.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0093a0b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093a/0093a0b4.md) · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`009403b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00940/009403b0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093f2cc ["INT_ADD", "register:40f0:8", ["const:93f2cc:8", "const:4:8"]]
- 0093f2cc ["CALL", null, ["callee:00c58f30:8"]]
+ 00940278 ["INT_ADD", "register:40f0:8", ["const:940278:8", "const:4:8"]]
+ 00940278 ["CALL", null, ["callee:00c58f30:8"]]
- 0093f3b0 ["INT_ADD", "register:40f0:8", ["const:93f3b0:8", "const:4:8"]]
- 0093f3b0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0094035c ["INT_ADD", "register:40f0:8", ["const:94035c:8", "const:4:8"]]
+ 0094035c ["CALL", null, ["callee:00c58f50:8"]]
- 0093f3c0 ["INT_ADD", "register:40f0:8", ["const:93f3c0:8", "const:4:8"]]
- 0093f3c0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0094036c ["INT_ADD", "register:40f0:8", ["const:94036c:8", "const:4:8"]]
+ 0094036c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-5f40fb9a4bf057cb55dada4a0f779cf9"></a>

### [`0093f418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f418.md) → [`009403c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00940/009403c4.md) FUN_009403c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00939108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00939/00939108.md) [`0093f418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f418.md) · 呼出先 10件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0093f418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f418.md) [`00942760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/00942760.md) [`009428e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/009428e0.md) [`00942fe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/00942fe8.md)
- 新版 呼出元 2件 [`0093a0b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093a/0093a0b4.md) [`009403c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00940/009403c4.md) · 呼出先 10件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`009403c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00940/009403c4.md) [`0094370c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00943/0094370c.md) [`0094388c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00943/0094388c.md) [`00943f94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00943/00943f94.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093f4ec ["INT_ADD", "register:40f0:8", ["const:93f4ec:8", "const:4:8"]]
- 0093f4ec ["CALL", null, ["callee:00943f94:8"]]
+ 00940498 ["INT_ADD", "register:40f0:8", ["const:940498:8", "const:4:8"]]
+ 00940498 ["CALL", null, ["callee:00943f94:8"]]
- 0093f50c ["INT_ADD", "register:40f0:8", ["const:93f50c:8", "const:4:8"]]
- 0093f50c ["CALL", null, ["callee:00943f94:8"]]
+ 009404b8 ["INT_ADD", "register:40f0:8", ["const:9404b8:8", "const:4:8"]]
+ 009404b8 ["CALL", null, ["callee:00943f94:8"]]
- 0093f524 ["INT_ADD", "register:40f0:8", ["const:93f524:8", "const:4:8"]]
- 0093f524 ["CALL", null, ["callee:00943f94:8"]]
+ 009404d0 ["INT_ADD", "register:40f0:8", ["const:9404d0:8", "const:4:8"]]
+ 009404d0 ["CALL", null, ["callee:00943f94:8"]]
~~~


<a id="compare-f485eac4606eadd38ef826b70177e652"></a>

### [`00942760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/00942760.md) → [`0094370c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00943/0094370c.md) FUN_0094370c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`0093f418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f418.md) [`009428e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/009428e0.md) [`00942fe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/00942fe8.md) [`009439ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00943/009439ec.md) [`009441cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00944/009441cc.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 5件 [`009403c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00940/009403c4.md) [`0094388c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00943/0094388c.md) [`00943f94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00943/00943f94.md) [`00944998`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00944/00944998.md) [`00945178`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00945/00945178.md) · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00942818 ["INT_ADD", "register:40f0:8", ["const:942818:8", "const:4:8"]]
- 00942818 ["CALL", null, ["callee:00c58f50:8"]]
+ 009437c4 ["INT_ADD", "register:40f0:8", ["const:9437c4:8", "const:4:8"]]
+ 009437c4 ["CALL", null, ["callee:00c58f50:8"]]
- 00942868 ["INT_ADD", "register:40f0:8", ["const:942868:8", "const:4:8"]]
- 00942868 ["CALL", null, ["callee:00c58f50:8"]]
+ 00943814 ["INT_ADD", "register:40f0:8", ["const:943814:8", "const:4:8"]]
+ 00943814 ["CALL", null, ["callee:00c58f50:8"]]
- 00942890 ["INT_ADD", "register:40f0:8", ["const:942890:8", "const:4:8"]]
- 00942890 ["CALL", null, ["callee:00c58f50:8"]]
+ 0094383c ["INT_ADD", "register:40f0:8", ["const:94383c:8", "const:4:8"]]
+ 0094383c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-e4208184a1a13424fdca180dab7d8d91"></a>

### [`009428e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/009428e0.md) → [`0094388c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00943/0094388c.md) FUN_0094388c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0093f418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f418.md) [`009439ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00943/009439ec.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00942760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/00942760.md) [`009441cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00944/009441cc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`009403c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00940/009403c4.md) [`00944998`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00944/00944998.md) · 呼出先 5件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0094370c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00943/0094370c.md) [`00945178`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00945/00945178.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0094291c ["INT_ADD", "register:40f0:8", ["const:94291c:8", "const:4:8"]]
- 0094291c ["CALL", null, ["callee:00945178:8"]]
+ 009438c8 ["INT_ADD", "register:40f0:8", ["const:9438c8:8", "const:4:8"]]
+ 009438c8 ["CALL", null, ["callee:00945178:8"]]
- 0094295c ["INT_ADD", "register:40f0:8", ["const:94295c:8", "const:4:8"]]
- 0094295c ["CALL", null, ["callee:0043be80:8"]]
+ 00943908 ["INT_ADD", "register:40f0:8", ["const:943908:8", "const:4:8"]]
+ 00943908 ["CALL", null, ["callee:0043be80:8"]]
- 0094298c ["INT_ADD", "register:40f0:8", ["const:94298c:8", "const:4:8"]]
- 0094298c ["CALL", null, ["callee:0043be80:8"]]
+ 00943938 ["INT_ADD", "register:40f0:8", ["const:943938:8", "const:4:8"]]
+ 00943938 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-591bd3fd8373f5c17bf953430e66100f"></a>

### [`00942fe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/00942fe8.md) → [`00943f94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00943/00943f94.md) FUN_00943f94

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0093f418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f418.md) [`009439ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00943/009439ec.md) [`009441cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00944/009441cc.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00942760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/00942760.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 3件 [`009403c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00940/009403c4.md) [`00944998`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00944/00944998.md) [`00945178`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00945/00945178.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0094370c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00943/0094370c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00943054 ["INT_ADD", "register:40f0:8", ["const:943054:8", "const:4:8"]]
- 00943054 ["CALL", null, ["callee:0043be80:8"]]
+ 00944000 ["INT_ADD", "register:40f0:8", ["const:944000:8", "const:4:8"]]
+ 00944000 ["CALL", null, ["callee:0043be80:8"]]
- 00943084 ["INT_ADD", "register:40f0:8", ["const:943084:8", "const:4:8"]]
- 00943084 ["CALL", null, ["callee:0043be80:8"]]
+ 00944030 ["INT_ADD", "register:40f0:8", ["const:944030:8", "const:4:8"]]
+ 00944030 ["CALL", null, ["callee:0043be80:8"]]
- 009430c8 ["INT_ADD", "register:40f0:8", ["const:9430c8:8", "const:4:8"]]
- 009430c8 ["CALL", null, ["callee:0043be80:8"]]
+ 00944074 ["INT_ADD", "register:40f0:8", ["const:944074:8", "const:4:8"]]
+ 00944074 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-e62eeba94c81a041fce509415734034d"></a>

### [`0094386c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00943/0094386c.md) → [`00944818`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00944/00944818.md) FUN_00944818

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0093f418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f418.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`009403c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00940/009403c4.md) · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00943924 ["INT_ADD", "register:40f0:8", ["const:943924:8", "const:4:8"]]
- 00943924 ["CALL", null, ["callee:00c58f50:8"]]
+ 009448d0 ["INT_ADD", "register:40f0:8", ["const:9448d0:8", "const:4:8"]]
+ 009448d0 ["CALL", null, ["callee:00c58f50:8"]]
- 00943974 ["INT_ADD", "register:40f0:8", ["const:943974:8", "const:4:8"]]
- 00943974 ["CALL", null, ["callee:00c58f50:8"]]
+ 00944920 ["INT_ADD", "register:40f0:8", ["const:944920:8", "const:4:8"]]
+ 00944920 ["CALL", null, ["callee:00c58f50:8"]]
- 0094399c ["INT_ADD", "register:40f0:8", ["const:94399c:8", "const:4:8"]]
- 0094399c ["CALL", null, ["callee:00c58f50:8"]]
+ 00944948 ["INT_ADD", "register:40f0:8", ["const:944948:8", "const:4:8"]]
+ 00944948 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-b8ccdf0a2e0d04e86dbe6fe9751085ec"></a>

### [`009439ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00943/009439ec.md) → [`00944998`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00944/00944998.md) FUN_00944998

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0093f418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f418.md) · 呼出先 7件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00942760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/00942760.md) [`009428e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/009428e0.md) [`00942fe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/00942fe8.md) [`009441cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00944/009441cc.md)
- 新版 呼出元 1件 [`009403c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00940/009403c4.md) · 呼出先 7件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0094370c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00943/0094370c.md) [`0094388c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00943/0094388c.md) [`00943f94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00943/00943f94.md) [`00945178`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00945/00945178.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00943a7c ["INT_ADD", "register:40f0:8", ["const:943a7c:8", "const:4:8"]]
- 00943a7c ["CALL", null, ["callee:0094388c:8"]]
+ 00944a28 ["INT_ADD", "register:40f0:8", ["const:944a28:8", "const:4:8"]]
+ 00944a28 ["CALL", null, ["callee:0094388c:8"]]
- 00943ad8 ["INT_ADD", "register:40f0:8", ["const:943ad8:8", "const:4:8"]]
- 00943ad8 ["CALL", null, ["callee:00943f94:8"]]
+ 00944a84 ["INT_ADD", "register:40f0:8", ["const:944a84:8", "const:4:8"]]
+ 00944a84 ["CALL", null, ["callee:00943f94:8"]]
- 00943af8 ["INT_ADD", "register:40f0:8", ["const:943af8:8", "const:4:8"]]
- 00943af8 ["CALL", null, ["callee:00943f94:8"]]
+ 00944aa4 ["INT_ADD", "register:40f0:8", ["const:944aa4:8", "const:4:8"]]
+ 00944aa4 ["CALL", null, ["callee:00943f94:8"]]
~~~


<a id="compare-ec07fa321f718f6fa61e6d6ee943567f"></a>

### [`009441cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00944/009441cc.md) → [`00945178`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00945/00945178.md) FUN_00945178

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0093f418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f418.md) [`009428e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/009428e0.md) [`009439ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00943/009439ec.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00942760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/00942760.md) [`00942fe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/00942fe8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 3件 [`009403c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00940/009403c4.md) [`0094388c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00943/0094388c.md) [`00944998`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00944/00944998.md) · 呼出先 5件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0094370c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00943/0094370c.md) [`00943f94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00943/00943f94.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00944204 ["INT_ADD", "register:40f0:8", ["const:944204:8", "const:4:8"]]
- 00944204 ["CALL", null, ["callee:00943f94:8"]]
+ 009451b0 ["INT_ADD", "register:40f0:8", ["const:9451b0:8", "const:4:8"]]
+ 009451b0 ["CALL", null, ["callee:00943f94:8"]]
- 00944244 ["INT_ADD", "register:40f0:8", ["const:944244:8", "const:4:8"]]
- 00944244 ["CALL", null, ["callee:0043be80:8"]]
+ 009451f0 ["INT_ADD", "register:40f0:8", ["const:9451f0:8", "const:4:8"]]
+ 009451f0 ["CALL", null, ["callee:0043be80:8"]]
- 00944274 ["INT_ADD", "register:40f0:8", ["const:944274:8", "const:4:8"]]
- 00944274 ["CALL", null, ["callee:0043be80:8"]]
+ 00945220 ["INT_ADD", "register:40f0:8", ["const:945220:8", "const:4:8"]]
+ 00945220 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-d2c95e534e534cf5456c8e99985b2caa"></a>

### [`0094472c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00944/0094472c.md) → [`009456d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00945/009456d8.md) FUN_009456d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0093c770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093c/0093c770.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00944798 ["INT_ADD", "register:40f0:8", ["const:944798:8", "const:4:8"]]
- 00944798 ["CALL", null, ["callee:00c58f50:8"]]
+ 00945744 ["INT_ADD", "register:40f0:8", ["const:945744:8", "const:4:8"]]
+ 00945744 ["CALL", null, ["callee:00c58f50:8"]]
- 009447a8 ["INT_ADD", "register:40f0:8", ["const:9447a8:8", "const:4:8"]]
- 009447a8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00945754 ["INT_ADD", "register:40f0:8", ["const:945754:8", "const:4:8"]]
+ 00945754 ["CALL", null, ["callee:00c58f50:8"]]
- 009447b8 ["INT_ADD", "register:40f0:8", ["const:9447b8:8", "const:4:8"]]
- 009447b8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00945764 ["INT_ADD", "register:40f0:8", ["const:945764:8", "const:4:8"]]
+ 00945764 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-b3bb2556d0ff5722520e3f128ca178f0"></a>

### [`00945008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00945/00945008.md) → [`00945fb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00945/00945fb4.md) FUN_00945fb4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) · 呼出先 6件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0046d5e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d5e8.md) [`0053bcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053b/0053bcf0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0093c770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093c/0093c770.md) · 呼出先 6件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0046d908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d908.md) [`0053c010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053c/0053c010.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009450e0 ["INT_ADD", "register:40f0:8", ["const:9450e0:8", "const:4:8"]]
- 009450e0 ["CALL", null, ["callee:0046d908:8"]]
+ 0094608c ["INT_ADD", "register:40f0:8", ["const:94608c:8", "const:4:8"]]
+ 0094608c ["CALL", null, ["callee:0046d908:8"]]
- 009450f8 ["INT_ADD", "register:40f0:8", ["const:9450f8:8", "const:4:8"]]
- 009450f8 ["CALL", null, ["callee:00c594d0:8"]]
+ 009460a4 ["INT_ADD", "register:40f0:8", ["const:9460a4:8", "const:4:8"]]
+ 009460a4 ["CALL", null, ["callee:00c594d0:8"]]
- 00945104 ["INT_ADD", "register:40f0:8", ["const:945104:8", "const:4:8"]]
- 00945104 ["CALL", null, ["callee:00c594d0:8"]]
+ 009460b0 ["INT_ADD", "register:40f0:8", ["const:9460b0:8", "const:4:8"]]
+ 009460b0 ["CALL", null, ["callee:00c594d0:8"]]
~~~


<a id="compare-74684887ff26043f552df2634503d144"></a>

### [`009452dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00945/009452dc.md) → [`00946288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00946/00946288.md) FUN_00946288

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) [`009452dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00945/009452dc.md) · 呼出先 7件 [`009452dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00945/009452dc.md) [`009462dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/009462dc.md) [`00946618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946618.md) [`00946970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946970.md) [`00946ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946ca4.md)
- 新版 呼出元 2件 [`0093c770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093c/0093c770.md) [`00946288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00946/00946288.md) · 呼出先 7件 [`00946288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00946/00946288.md) [`00947288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00947/00947288.md) [`009475c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00947/009475c4.md) [`0094791c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00947/0094791c.md) [`00947c50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00947/00947c50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009453b4 ["INT_ADD", "register:40f0:8", ["const:9453b4:8", "const:4:8"]]
- 009453b4 ["CALL", null, ["callee:009475c4:8"]]
+ 00946360 ["INT_ADD", "register:40f0:8", ["const:946360:8", "const:4:8"]]
+ 00946360 ["CALL", null, ["callee:009475c4:8"]]
- 009453d8 ["INT_ADD", "register:40f0:8", ["const:9453d8:8", "const:4:8"]]
- 009453d8 ["CALL", null, ["callee:009475c4:8"]]
+ 00946384 ["INT_ADD", "register:40f0:8", ["const:946384:8", "const:4:8"]]
+ 00946384 ["CALL", null, ["callee:009475c4:8"]]
- 009453e8 ["INT_ADD", "register:40f0:8", ["const:9453e8:8", "const:4:8"]]
- 009453e8 ["CALL", null, ["callee:009475c4:8"]]
+ 00946394 ["INT_ADD", "register:40f0:8", ["const:946394:8", "const:4:8"]]
+ 00946394 ["CALL", null, ["callee:009475c4:8"]]
~~~


<a id="compare-72865771303e59b6384ac2e60974085a"></a>

### [`009462dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/009462dc.md) → [`00947288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00947/00947288.md) FUN_00947288

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`009452dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00945/009452dc.md) [`00946970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946970.md) · 呼出先 3件 [`00946ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946ca4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`00946288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00946/00946288.md) [`0094791c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00947/0094791c.md) · 呼出先 3件 [`00947c50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00947/00947c50.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0094631c ["INT_ADD", "register:40f0:8", ["const:94631c:8", "const:4:8"]]
- 0094631c ["CALL", null, ["callee:00947c50:8"]]
+ 009472c8 ["INT_ADD", "register:40f0:8", ["const:9472c8:8", "const:4:8"]]
+ 009472c8 ["CALL", null, ["callee:00947c50:8"]]
- 009463b0 ["INT_ADD", "register:40f0:8", ["const:9463b0:8", "const:4:8"]]
- 009463b0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0094735c ["INT_ADD", "register:40f0:8", ["const:94735c:8", "const:4:8"]]
+ 0094735c ["CALL", null, ["callee:00c58f50:8"]]
- 00946460 ["INT_ADD", "register:40f0:8", ["const:946460:8", "const:4:8"]]
- 00946460 ["CALL", null, ["callee:00c58f50:8"]]
+ 0094740c ["INT_ADD", "register:40f0:8", ["const:94740c:8", "const:4:8"]]
+ 0094740c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-f6b65e23919c7847e0c45d0321cdb7f2"></a>

### [`00946618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946618.md) → [`009475c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00947/009475c4.md) FUN_009475c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`009452dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00945/009452dc.md) [`00946970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946970.md) [`00946ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946ca4.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 3件 [`00946288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00946/00946288.md) [`0094791c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00947/0094791c.md) [`00947c50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00947/00947c50.md) · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00946744 ["INT_ADD", "register:40f0:8", ["const:946744:8", "const:4:8"]]
- 00946744 ["CALL", null, ["callee:00c58f50:8"]]
+ 009476f0 ["INT_ADD", "register:40f0:8", ["const:9476f0:8", "const:4:8"]]
+ 009476f0 ["CALL", null, ["callee:00c58f50:8"]]
- 009467f4 ["INT_ADD", "register:40f0:8", ["const:9467f4:8", "const:4:8"]]
- 009467f4 ["CALL", null, ["callee:00c58f50:8"]]
+ 009477a0 ["INT_ADD", "register:40f0:8", ["const:9477a0:8", "const:4:8"]]
+ 009477a0 ["CALL", null, ["callee:00c58f50:8"]]
- 00946878 ["INT_ADD", "register:40f0:8", ["const:946878:8", "const:4:8"]]
- 00946878 ["CALL", null, ["callee:00c58f50:8"]]
+ 00947824 ["INT_ADD", "register:40f0:8", ["const:947824:8", "const:4:8"]]
+ 00947824 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-527ebaed9ff423572fdd78ade11c2579"></a>

### [`00946970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946970.md) → [`0094791c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00947/0094791c.md) FUN_0094791c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009452dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00945/009452dc.md) · 呼出先 5件 [`009462dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/009462dc.md) [`00946618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946618.md) [`00946ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946ca4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00946288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00946/00946288.md) · 呼出先 5件 [`00947288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00947/00947288.md) [`009475c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00947/009475c4.md) [`00947c50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00947/00947c50.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009469f8 ["INT_ADD", "register:40f0:8", ["const:9469f8:8", "const:4:8"]]
- 009469f8 ["CALL", null, ["callee:00947288:8"]]
+ 009479a4 ["INT_ADD", "register:40f0:8", ["const:9479a4:8", "const:4:8"]]
+ 009479a4 ["CALL", null, ["callee:00947288:8"]]
- 00946a90 ["INT_ADD", "register:40f0:8", ["const:946a90:8", "const:4:8"]]
- 00946a90 ["CALL", null, ["callee:00c58f50:8"]]
+ 00947a3c ["INT_ADD", "register:40f0:8", ["const:947a3c:8", "const:4:8"]]
+ 00947a3c ["CALL", null, ["callee:00c58f50:8"]]
- 00946ac4 ["INT_ADD", "register:40f0:8", ["const:946ac4:8", "const:4:8"]]
- 00946ac4 ["CALL", null, ["callee:009475c4:8"]]
+ 00947a70 ["INT_ADD", "register:40f0:8", ["const:947a70:8", "const:4:8"]]
+ 00947a70 ["CALL", null, ["callee:009475c4:8"]]
~~~


<a id="compare-e7f828739300af7606d72830d5d154c0"></a>

### [`00946ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946ca4.md) → [`00947c50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00947/00947c50.md) FUN_00947c50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`009452dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00945/009452dc.md) [`009462dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/009462dc.md) [`00946970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946970.md) · 呼出先 3件 [`00946618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946618.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 3件 [`00946288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00946/00946288.md) [`00947288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00947/00947288.md) [`0094791c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00947/0094791c.md) · 呼出先 3件 [`009475c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00947/009475c4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00946ce0 ["INT_ADD", "register:40f0:8", ["const:946ce0:8", "const:4:8"]]
- 00946ce0 ["CALL", null, ["callee:009475c4:8"]]
+ 00947c8c ["INT_ADD", "register:40f0:8", ["const:947c8c:8", "const:4:8"]]
+ 00947c8c ["CALL", null, ["callee:009475c4:8"]]
- 00946d74 ["INT_ADD", "register:40f0:8", ["const:946d74:8", "const:4:8"]]
- 00946d74 ["CALL", null, ["callee:00c58f50:8"]]
+ 00947d20 ["INT_ADD", "register:40f0:8", ["const:947d20:8", "const:4:8"]]
+ 00947d20 ["CALL", null, ["callee:00c58f50:8"]]
- 00946e28 ["INT_ADD", "register:40f0:8", ["const:946e28:8", "const:4:8"]]
- 00946e28 ["CALL", null, ["callee:00c58f50:8"]]
+ 00947dd4 ["INT_ADD", "register:40f0:8", ["const:947dd4:8", "const:4:8"]]
+ 00947dd4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-774f38a2966726c30243805204e3bfbf"></a>

### [`00961310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00961/00961310.md) → [`009622bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00962/009622bc.md) FUN_009622bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`009781fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00978/009781fc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`009791a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00979/009791a8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00961384 ["INT_ADD", "register:40f0:8", ["const:961384:8", "const:4:8"]]
- 00961384 ["CALL", null, ["callee:0043be80:8"]]
+ 00962330 ["INT_ADD", "register:40f0:8", ["const:962330:8", "const:4:8"]]
+ 00962330 ["CALL", null, ["callee:0043be80:8"]]
- 009613b0 ["INT_ADD", "register:40f0:8", ["const:9613b0:8", "const:4:8"]]
- 009613b0 ["CALL", null, ["callee:0043be80:8"]]
+ 0096235c ["INT_ADD", "register:40f0:8", ["const:96235c:8", "const:4:8"]]
+ 0096235c ["CALL", null, ["callee:0043be80:8"]]
- 009613dc ["INT_ADD", "register:40f0:8", ["const:9613dc:8", "const:4:8"]]
- 009613dc ["CALL", null, ["callee:0043be80:8"]]
+ 00962388 ["INT_ADD", "register:40f0:8", ["const:962388:8", "const:4:8"]]
+ 00962388 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-df252efb8732def89bd67e1bc54fbd02"></a>

### [`0096164c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00961/0096164c.md) → [`009625f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00962/009625f8.md) FUN_009625f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00961670 ["INT_ADD", "register:40f0:8", ["const:961670:8", "const:4:8"]]
- 00961670 ["CALL", null, ["callee:00c59080:8"]]
+ 0096261c ["INT_ADD", "register:40f0:8", ["const:96261c:8", "const:4:8"]]
+ 0096261c ["CALL", null, ["callee:00c59080:8"]]
- 009616b8 ["INT_ADD", "register:40f0:8", ["const:9616b8:8", "const:4:8"]]
- 009616b8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00962664 ["INT_ADD", "register:40f0:8", ["const:962664:8", "const:4:8"]]
+ 00962664 ["CALL", null, ["callee:00c58f30:8"]]
- 009616d8 ["INT_ADD", "register:40f0:8", ["const:9616d8:8", "const:4:8"]]
- 009616d8 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00962684 ["INT_ADD", "register:40f0:8", ["const:962684:8", "const:4:8"]]
+ 00962684 ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-fcff6b5523ba0009ebeae0f20a3f6dd7"></a>

### [`00961788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00961/00961788.md) → [`00962734`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00962/00962734.md) FUN_00962734

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`009472c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00947/009472c0.md) [`009617f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00961/009617f4.md) [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 1件 [`005e81d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e81d8.md)
- 新版 呼出元 3件 [`0094826c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00948/0094826c.md) [`009627a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00962/009627a0.md) [`0098ec08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0098e/0098ec08.md) · 呼出先 1件 [`005e8588`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e8/005e8588.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009617e0 ["INT_ADD", "register:40f0:8", ["const:9617e0:8", "const:4:8"]]
- 009617e0 ["CALL", null, ["callee:005e8588:8"]]
+ 0096278c ["INT_ADD", "register:40f0:8", ["const:96278c:8", "const:4:8"]]
+ 0096278c ["CALL", null, ["callee:005e8588:8"]]
~~~


<a id="compare-853433b5a2d235402b994ae384c4969d"></a>

### [`00963f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00963/00963f80.md) → [`00964f2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00964/00964f2c.md) FUN_00964f2c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00963fd0 ["INT_ADD", "register:40f0:8", ["const:963fd0:8", "const:4:8"]]
- 00963fd0 ["CALL", null, ["callee:00c58f50:8"]]
+ 00964f7c ["INT_ADD", "register:40f0:8", ["const:964f7c:8", "const:4:8"]]
+ 00964f7c ["CALL", null, ["callee:00c58f50:8"]]
- 00963fe0 ["INT_ADD", "register:40f0:8", ["const:963fe0:8", "const:4:8"]]
- 00963fe0 ["CALL", null, ["callee:00c58f50:8"]]
+ 00964f8c ["INT_ADD", "register:40f0:8", ["const:964f8c:8", "const:4:8"]]
+ 00964f8c ["CALL", null, ["callee:00c58f50:8"]]
- 00963ff0 ["INT_ADD", "register:40f0:8", ["const:963ff0:8", "const:4:8"]]
- 00963ff0 ["CALL", null, ["callee:00c58f50:8"]]
+ 00964f9c ["INT_ADD", "register:40f0:8", ["const:964f9c:8", "const:4:8"]]
+ 00964f9c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-4078bd8ffc839bdeaada4733fae13b89"></a>

### [`009781fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00978/009781fc.md) → [`009791a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00979/009791a8.md) FUN_009791a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00961310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00961/00961310.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0097853c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00978/0097853c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`009622bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00962/009622bc.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`009794e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00979/009794e8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00978270 ["INT_ADD", "register:40f0:8", ["const:978270:8", "const:4:8"]]
- 00978270 ["CALL", null, ["callee:0043be80:8"]]
+ 0097921c ["INT_ADD", "register:40f0:8", ["const:97921c:8", "const:4:8"]]
+ 0097921c ["CALL", null, ["callee:0043be80:8"]]
- 0097829c ["INT_ADD", "register:40f0:8", ["const:97829c:8", "const:4:8"]]
- 0097829c ["CALL", null, ["callee:0043be80:8"]]
+ 00979248 ["INT_ADD", "register:40f0:8", ["const:979248:8", "const:4:8"]]
+ 00979248 ["CALL", null, ["callee:0043be80:8"]]
- 009782c8 ["INT_ADD", "register:40f0:8", ["const:9782c8:8", "const:4:8"]]
- 009782c8 ["CALL", null, ["callee:0043be80:8"]]
+ 00979274 ["INT_ADD", "register:40f0:8", ["const:979274:8", "const:4:8"]]
+ 00979274 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-3c79ada6797bab2f7314de2cc33c2484"></a>

### [`0098078c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/0098078c.md) → [`00981738`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00981/00981738.md) FUN_00981738

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009807c4 ["INT_ADD", "register:40f0:8", ["const:9807c4:8", "const:4:8"]]
- 009807c4 ["CALL", null, ["callee:00c58f50:8"]]
+ 00981770 ["INT_ADD", "register:40f0:8", ["const:981770:8", "const:4:8"]]
+ 00981770 ["CALL", null, ["callee:00c58f50:8"]]
- 009807d4 ["INT_ADD", "register:40f0:8", ["const:9807d4:8", "const:4:8"]]
- 009807d4 ["CALL", null, ["callee:00c58f50:8"]]
+ 00981780 ["INT_ADD", "register:40f0:8", ["const:981780:8", "const:4:8"]]
+ 00981780 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-bfc603d474454e473c2b5368a5bebdc5"></a>

### [`009807f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/009807f0.md) → [`0098179c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00981/0098179c.md) FUN_0098179c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0098080c ["INT_ADD", "register:40f0:8", ["const:98080c:8", "const:4:8"]]
- 0098080c ["CALL", null, ["callee:00c58f50:8"]]
+ 009817b8 ["INT_ADD", "register:40f0:8", ["const:9817b8:8", "const:4:8"]]
+ 009817b8 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-af26fc80a9ec4849c4108e0cae5e356f"></a>

### [`00980834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/00980834.md) → [`009817e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00981/009817e0.md) FUN_009817e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`007738ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00773/007738ec.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) [`00773cc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00773/00773cc8.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0098083c ["INT_ADD", "register:40f0:8", ["const:98083c:8", "const:4:8"]]
- 0098083c ["CALL", null, ["callee:008524fc:8"]]
+ 009817e8 ["INT_ADD", "register:40f0:8", ["const:9817e8:8", "const:4:8"]]
+ 009817e8 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-6620397c1023dbda1e22fab79f6cd958"></a>

### [`00980854`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/00980854.md) → [`00981800`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00981/00981800.md) FUN_00981800

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`006103fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00610/006103fc.md) [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 2件 [`009808bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/009808bc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`006107ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00610/006107ac.md) [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) · 呼出先 2件 [`00981868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00981/00981868.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0098089c ["INT_ADD", "register:40f0:8", ["const:98089c:8", "const:4:8"]]
- 0098089c ["CALL", null, ["callee:00c58f50:8"]]
+ 00981848 ["INT_ADD", "register:40f0:8", ["const:981848:8", "const:4:8"]]
+ 00981848 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-048ad25bf73d032fdc4b38d4ed13c500"></a>

### [`00980d58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/00980d58.md) → [`00981d04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00981/00981d04.md) FUN_00981d04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`009808bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/009808bc.md) [`00980f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/00980f80.md) · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)
- 新版 呼出元 2件 [`00981868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00981/00981868.md) [`00981f2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00981/00981f2c.md) · 呼出先 1件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00980d90 ["INT_ADD", "register:40f0:8", ["const:980d90:8", "const:4:8"]]
- 00980d90 ["CALL", null, ["callee:0043be80:8"]]
+ 00981d3c ["INT_ADD", "register:40f0:8", ["const:981d3c:8", "const:4:8"]]
+ 00981d3c ["CALL", null, ["callee:0043be80:8"]]
- 00980dbc ["INT_ADD", "register:40f0:8", ["const:980dbc:8", "const:4:8"]]
- 00980dbc ["CALL", null, ["callee:0043be80:8"]]
+ 00981d68 ["INT_ADD", "register:40f0:8", ["const:981d68:8", "const:4:8"]]
+ 00981d68 ["CALL", null, ["callee:0043be80:8"]]
- 00980de8 ["INT_ADD", "register:40f0:8", ["const:980de8:8", "const:4:8"]]
- 00980de8 ["CALL", null, ["callee:0043be80:8"]]
+ 00981d94 ["INT_ADD", "register:40f0:8", ["const:981d94:8", "const:4:8"]]
+ 00981d94 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-bd1dd99a46fb63fcf97854404f430757"></a>

### [`00980f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/00980f80.md) → [`00981f2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00981/00981f2c.md) FUN_00981f2c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006b8c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8c9c.md) [`00980d58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/00980d58.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) · 呼出先 7件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`006b904c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b9/006b904c.md) [`00981d04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00981/00981d04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00980ff8 ["INT_ADD", "register:40f0:8", ["const:980ff8:8", "const:4:8"]]
- 00980ff8 ["CALL", null, ["callee:00981d04:8"]]
+ 00981fa4 ["INT_ADD", "register:40f0:8", ["const:981fa4:8", "const:4:8"]]
+ 00981fa4 ["CALL", null, ["callee:00981d04:8"]]
- 0098107c ["INT_ADD", "register:40f0:8", ["const:98107c:8", "const:4:8"]]
- 0098107c ["CALL", null, ["callee:00c58f30:8"]]
+ 00982028 ["INT_ADD", "register:40f0:8", ["const:982028:8", "const:4:8"]]
+ 00982028 ["CALL", null, ["callee:00c58f30:8"]]
- 009810a8 ["INT_ADD", "register:40f0:8", ["const:9810a8:8", "const:4:8"]]
- 009810a8 ["CALL", null, ["callee:00c590a0:8"]]
+ 00982054 ["INT_ADD", "register:40f0:8", ["const:982054:8", "const:4:8"]]
+ 00982054 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-d3b84a2eb1fe3a7c77ebe00ad93cc2f8"></a>

### [`009811f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/009811f8.md) → [`009821a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00982/009821a4.md) FUN_009821a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00605294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/00605294.md) [`0075ba1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075b/0075ba1c.md) [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 4件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`00605644`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00605/00605644.md) [`0075bdcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075b/0075bdcc.md) [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0098125c ["INT_ADD", "register:40f0:8", ["const:98125c:8", "const:4:8"]]
- 0098125c ["CALL", null, ["callee:00c58f30:8"]]
+ 00982208 ["INT_ADD", "register:40f0:8", ["const:982208:8", "const:4:8"]]
+ 00982208 ["CALL", null, ["callee:00c58f30:8"]]
- 00981294 ["INT_ADD", "register:40f0:8", ["const:981294:8", "const:4:8"]]
- 00981294 ["CALL", null, ["callee:0043bf04:8"]]
+ 00982240 ["INT_ADD", "register:40f0:8", ["const:982240:8", "const:4:8"]]
+ 00982240 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-9623d4ac0bc8987d78232f39b16badc7"></a>

### [`009812c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/009812c0.md) → [`0098226c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00982/0098226c.md) FUN_0098226c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`006103fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00610/006103fc.md) [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`006107ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00610/006107ac.md) [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00981324 ["INT_ADD", "register:40f0:8", ["const:981324:8", "const:4:8"]]
- 00981324 ["CALL", null, ["callee:00c58f30:8"]]
+ 009822d0 ["INT_ADD", "register:40f0:8", ["const:9822d0:8", "const:4:8"]]
+ 009822d0 ["CALL", null, ["callee:00c58f30:8"]]
- 0098135c ["INT_ADD", "register:40f0:8", ["const:98135c:8", "const:4:8"]]
- 0098135c ["CALL", null, ["callee:0043bf04:8"]]
+ 00982308 ["INT_ADD", "register:40f0:8", ["const:982308:8", "const:4:8"]]
+ 00982308 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-5000092fdee6282447d4407e5d23c9b9"></a>

### [`00981384`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/00981384.md) → [`00982330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00982/00982330.md) FUN_00982330

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`006103fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00610/006103fc.md) [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`006107ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00610/006107ac.md) [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0098142c ["INT_ADD", "register:40f0:8", ["const:98142c:8", "const:4:8"]]
- 0098142c ["CALL", null, ["callee:00c58f30:8"]]
+ 009823d8 ["INT_ADD", "register:40f0:8", ["const:9823d8:8", "const:4:8"]]
+ 009823d8 ["CALL", null, ["callee:00c58f30:8"]]
- 00981464 ["INT_ADD", "register:40f0:8", ["const:981464:8", "const:4:8"]]
- 00981464 ["CALL", null, ["callee:0043bf04:8"]]
+ 00982410 ["INT_ADD", "register:40f0:8", ["const:982410:8", "const:4:8"]]
+ 00982410 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-6dd1681424a9d0ac25041def17c68744"></a>

### [`009815d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/009815d0.md) → [`0098257c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00982/0098257c.md) FUN_0098257c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00480e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480e68.md) [`004810d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/004810d8.md) [`00481168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481168.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00a2c310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a2c/00a2c310.md) · 呼出先 6件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00481188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/00481188.md) [`004813f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/004813f8.md) [`00481488`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/00481488.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00981608 ["INT_ADD", "register:40f0:8", ["const:981608:8", "const:4:8"]]
- 00981608 ["CALL", null, ["callee:00481188:8"]]
+ 009825b4 ["INT_ADD", "register:40f0:8", ["const:9825b4:8", "const:4:8"]]
+ 009825b4 ["CALL", null, ["callee:00481188:8"]]
- 00981658 ["INT_ADD", "register:40f0:8", ["const:981658:8", "const:4:8"]]
- 00981658 ["CALL", null, ["callee:0043be80:8"]]
+ 00982604 ["INT_ADD", "register:40f0:8", ["const:982604:8", "const:4:8"]]
+ 00982604 ["CALL", null, ["callee:0043be80:8"]]
- 0098166c ["INT_ADD", "register:40f0:8", ["const:98166c:8", "const:4:8"]]
- 0098166c ["CALL", null, ["callee:00481488:8"]]
+ 00982618 ["INT_ADD", "register:40f0:8", ["const:982618:8", "const:4:8"]]
+ 00982618 ["CALL", null, ["callee:00481488:8"]]
~~~


<a id="compare-a185ea6ca824ed8c8deae9cd9961147c"></a>

### [`00981720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/00981720.md) → [`009826cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00982/009826cc.md) FUN_009826cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) · 呼出先 2件 [`0086a4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a4b8.md) [`0086a508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a508.md)
- 新版 呼出元 1件 [`0084f5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084f/0084f5a0.md) · 呼出先 2件 [`0086b464`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b464.md) [`0086b4b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b4b4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0098173c ["INT_ADD", "register:40f0:8", ["const:98173c:8", "const:4:8"]]
- 0098173c ["CALL", null, ["callee:0086b464:8"]]
+ 009826e8 ["INT_ADD", "register:40f0:8", ["const:9826e8:8", "const:4:8"]]
+ 009826e8 ["CALL", null, ["callee:0086b464:8"]]
- 00981754 ["INT_ADD", "register:40f0:8", ["const:981754:8", "const:4:8"]]
- 00981754 ["CALL", null, ["callee:0086b4b4:8"]]
+ 00982700 ["INT_ADD", "register:40f0:8", ["const:982700:8", "const:4:8"]]
+ 00982700 ["CALL", null, ["callee:0086b4b4:8"]]
~~~


<a id="compare-b57cf0793a6821fb99a06cf11a38d12e"></a>

### [`00981774`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/00981774.md) → [`00982720`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00982/00982720.md) FUN_00982720

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0097f7d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097f/0097f7d0.md) [`0097fb74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097f/0097fb74.md) [`00980e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/00980e64.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 3件 [`0098077c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00980/0098077c.md) [`00980b20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00980/00980b20.md) [`00981e10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00981/00981e10.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009817e0 ["INT_ADD", "register:40f0:8", ["const:9817e0:8", "const:4:8"]]
- 009817e0 ["CALL", null, ["callee:00c590f0:8"]]
+ 0098278c ["INT_ADD", "register:40f0:8", ["const:98278c:8", "const:4:8"]]
+ 0098278c ["CALL", null, ["callee:00c590f0:8"]]
- 0098183c ["INT_ADD", "register:40f0:8", ["const:98183c:8", "const:4:8"]]
- 0098183c ["CALL", null, ["callee:00c590f0:8"]]
+ 009827e8 ["INT_ADD", "register:40f0:8", ["const:9827e8:8", "const:4:8"]]
+ 009827e8 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-cd01ff2c832970c22558bb9a114a09c5"></a>

### [`00981e10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/00981e10.md) → [`00982dbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00982/00982dbc.md) FUN_00982dbc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0097fb74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097f/0097fb74.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00982014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982014.md) [`0098220c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/0098220c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00980b20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00980/00980b20.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00982fc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00982/00982fc0.md) [`009831b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00983/009831b8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00981e90 ["INT_ADD", "register:40f0:8", ["const:981e90:8", "const:4:8"]]
- 00981e90 ["CALL", null, ["callee:00c58f30:8"]]
+ 00982e3c ["INT_ADD", "register:40f0:8", ["const:982e3c:8", "const:4:8"]]
+ 00982e3c ["CALL", null, ["callee:00c58f30:8"]]
- 00981f1c ["INT_ADD", "register:40f0:8", ["const:981f1c:8", "const:4:8"]]
- 00981f1c ["CALL", null, ["callee:00982fc0:8"]]
+ 00982ec8 ["INT_ADD", "register:40f0:8", ["const:982ec8:8", "const:4:8"]]
+ 00982ec8 ["CALL", null, ["callee:00982fc0:8"]]
- 00981f60 ["INT_ADD", "register:40f0:8", ["const:981f60:8", "const:4:8"]]
- 00981f60 ["CALL", null, ["callee:00c58f50:8"]]
+ 00982f0c ["INT_ADD", "register:40f0:8", ["const:982f0c:8", "const:4:8"]]
+ 00982f0c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-6d14334772dccf1beb6a75bdc6874fbb"></a>

### [`00982014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982014.md) → [`00982fc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00982/00982fc0.md) FUN_00982fc0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00981e10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/00981e10.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00982dbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00982/00982dbc.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009820f8 ["INT_ADD", "register:40f0:8", ["const:9820f8:8", "const:4:8"]]
- 009820f8 ["CALL", null, ["callee:00c58f50:8"]]
+ 009830a4 ["INT_ADD", "register:40f0:8", ["const:9830a4:8", "const:4:8"]]
+ 009830a4 ["CALL", null, ["callee:00c58f50:8"]]
- 00982108 ["INT_ADD", "register:40f0:8", ["const:982108:8", "const:4:8"]]
- 00982108 ["CALL", null, ["callee:00c58f50:8"]]
+ 009830b4 ["INT_ADD", "register:40f0:8", ["const:9830b4:8", "const:4:8"]]
+ 009830b4 ["CALL", null, ["callee:00c58f50:8"]]
- 00982118 ["INT_ADD", "register:40f0:8", ["const:982118:8", "const:4:8"]]
- 00982118 ["CALL", null, ["callee:00c58f50:8"]]
+ 009830c4 ["INT_ADD", "register:40f0:8", ["const:9830c4:8", "const:4:8"]]
+ 009830c4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-af557515fc0d9594e5b6e62d6a8f5558"></a>

### [`0098216c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/0098216c.md) → [`00983118`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00983/00983118.md) FUN_00983118

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009821bc ["INT_ADD", "register:40f0:8", ["const:9821bc:8", "const:4:8"]]
- 009821bc ["CALL", null, ["callee:00c58f50:8"]]
+ 00983168 ["INT_ADD", "register:40f0:8", ["const:983168:8", "const:4:8"]]
+ 00983168 ["CALL", null, ["callee:00c58f50:8"]]
- 009821cc ["INT_ADD", "register:40f0:8", ["const:9821cc:8", "const:4:8"]]
- 009821cc ["CALL", null, ["callee:00c58f50:8"]]
+ 00983178 ["INT_ADD", "register:40f0:8", ["const:983178:8", "const:4:8"]]
+ 00983178 ["CALL", null, ["callee:00c58f50:8"]]
- 009821dc ["INT_ADD", "register:40f0:8", ["const:9821dc:8", "const:4:8"]]
- 009821dc ["CALL", null, ["callee:00c58f50:8"]]
+ 00983188 ["INT_ADD", "register:40f0:8", ["const:983188:8", "const:4:8"]]
+ 00983188 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-10e695e6b29a46642af7e0472c6e9f55"></a>

### [`00982220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982220.md) → [`009831cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00983/009831cc.md) FUN_009831cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0097fb74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097f/0097fb74.md) [`00980e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/00980e64.md) [`00981494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/00981494.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00982350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982350.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 3件 [`00980b20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00980/00980b20.md) [`00981e10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00981/00981e10.md) [`00982440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00982/00982440.md) · 呼出先 5件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`009832fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00983/009832fc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00982254 ["INT_ADD", "register:40f0:8", ["const:982254:8", "const:4:8"]]
- 00982254 ["CALL", null, ["callee:009832fc:8"]]
+ 00983200 ["INT_ADD", "register:40f0:8", ["const:983200:8", "const:4:8"]]
+ 00983200 ["CALL", null, ["callee:009832fc:8"]]
- 00982274 ["INT_ADD", "register:40f0:8", ["const:982274:8", "const:4:8"]]
- 00982274 ["CALL", null, ["callee:00c58f30:8"]]
+ 00983220 ["INT_ADD", "register:40f0:8", ["const:983220:8", "const:4:8"]]
+ 00983220 ["CALL", null, ["callee:00c58f30:8"]]
- 009822b0 ["INT_ADD", "register:40f0:8", ["const:9822b0:8", "const:4:8"]]
- 009822b0 ["CALL", null, ["callee:0043be80:8"]]
+ 0098325c ["INT_ADD", "register:40f0:8", ["const:98325c:8", "const:4:8"]]
+ 0098325c ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-c761d6e0350d59dbab940096f2b57af5"></a>

### [`00982350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982350.md) → [`009832fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00983/009832fc.md) FUN_009832fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00982220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982220.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`009831cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00983/009831cc.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009823d4 ["INT_ADD", "register:40f0:8", ["const:9823d4:8", "const:4:8"]]
- 009823d4 ["CALL", null, ["callee:00c590f0:8"]]
+ 00983380 ["INT_ADD", "register:40f0:8", ["const:983380:8", "const:4:8"]]
+ 00983380 ["CALL", null, ["callee:00c590f0:8"]]
- 00982400 ["INT_ADD", "register:40f0:8", ["const:982400:8", "const:4:8"]]
- 00982400 ["CALL", null, ["callee:00c590f0:8"]]
+ 009833ac ["INT_ADD", "register:40f0:8", ["const:9833ac:8", "const:4:8"]]
+ 009833ac ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-138d256e2649ddb470139fbaf4aecd58"></a>

### [`00982454`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982454.md) → [`00983400`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00983/00983400.md) FUN_00983400

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0098248c ["INT_ADD", "register:40f0:8", ["const:98248c:8", "const:4:8"]]
- 0098248c ["CALL", null, ["callee:00c58f50:8"]]
+ 00983438 ["INT_ADD", "register:40f0:8", ["const:983438:8", "const:4:8"]]
+ 00983438 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-4fe1dfe1630a4e7e92afb7168324e384"></a>

### [`009824a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/009824a4.md) → [`00983450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00983/00983450.md) FUN_00983450

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0097fb74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097f/0097fb74.md) · 呼出先 5件 [`0086a4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a4b8.md) [`00982734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982734.md) [`00982894`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982894.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58500.md)
- 新版 呼出元 1件 [`00980b20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00980/00980b20.md) · 呼出先 5件 [`0086b464`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b464.md) [`009836e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00983/009836e0.md) [`00983840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00983/00983840.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c594d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c594d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0098258c ["INT_ADD", "register:40f0:8", ["const:98258c:8", "const:4:8"]]
- 0098258c ["CALL", null, ["callee:00c594d0:8"]]
+ 00983538 ["INT_ADD", "register:40f0:8", ["const:983538:8", "const:4:8"]]
+ 00983538 ["CALL", null, ["callee:00c594d0:8"]]
- 009825a0 ["INT_ADD", "register:40f0:8", ["const:9825a0:8", "const:4:8"]]
- 009825a0 ["CALL", null, ["callee:009836e0:8"]]
+ 0098354c ["INT_ADD", "register:40f0:8", ["const:98354c:8", "const:4:8"]]
+ 0098354c ["CALL", null, ["callee:009836e0:8"]]
- 00982668 ["INT_ADD", "register:40f0:8", ["const:982668:8", "const:4:8"]]
- 00982668 ["CALL", null, ["callee:0086b464:8"]]
+ 00983614 ["INT_ADD", "register:40f0:8", ["const:983614:8", "const:4:8"]]
+ 00983614 ["CALL", null, ["callee:0086b464:8"]]
~~~


<a id="compare-bfd5ebc6fff7695dbd35031398f4147b"></a>

### [`00982734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982734.md) → [`009836e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00983/009836e0.md) FUN_009836e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009824a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/009824a4.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00983450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00983/00983450.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009827b0 ["INT_ADD", "register:40f0:8", ["const:9827b0:8", "const:4:8"]]
- 009827b0 ["CALL", null, ["callee:00c590f0:8"]]
+ 0098375c ["INT_ADD", "register:40f0:8", ["const:98375c:8", "const:4:8"]]
+ 0098375c ["CALL", null, ["callee:00c590f0:8"]]
- 00982814 ["INT_ADD", "register:40f0:8", ["const:982814:8", "const:4:8"]]
- 00982814 ["CALL", null, ["callee:0043bf04:8"]]
+ 009837c0 ["INT_ADD", "register:40f0:8", ["const:9837c0:8", "const:4:8"]]
+ 009837c0 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-d62561a7b76108e25364e9df594654f8"></a>

### [`0098283c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/0098283c.md) → [`009837e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00983/009837e8.md) FUN_009837e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`0086a4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a4b8.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0086b464`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b464.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00982854 ["INT_ADD", "register:40f0:8", ["const:982854:8", "const:4:8"]]
- 00982854 ["CALL", null, ["callee:0086b464:8"]]
+ 00983800 ["INT_ADD", "register:40f0:8", ["const:983800:8", "const:4:8"]]
+ 00983800 ["CALL", null, ["callee:0086b464:8"]]
~~~


<a id="compare-ddc75b709b276d82985ab2dacb772494"></a>

### [`00982894`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982894.md) → [`00983840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00983/00983840.md) FUN_00983840

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009824a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/009824a4.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00983450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00983/00983450.md) · 呼出先 5件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009828cc ["INT_ADD", "register:40f0:8", ["const:9828cc:8", "const:4:8"]]
- 009828cc ["CALL", null, ["callee:00c58f30:8"]]
+ 00983878 ["INT_ADD", "register:40f0:8", ["const:983878:8", "const:4:8"]]
+ 00983878 ["CALL", null, ["callee:00c58f30:8"]]
- 00982900 ["INT_ADD", "register:40f0:8", ["const:982900:8", "const:4:8"]]
- 00982900 ["CALL", null, ["callee:0043be80:8"]]
+ 009838ac ["INT_ADD", "register:40f0:8", ["const:9838ac:8", "const:4:8"]]
+ 009838ac ["CALL", null, ["callee:0043be80:8"]]
- 0098296c ["INT_ADD", "register:40f0:8", ["const:98296c:8", "const:4:8"]]
- 0098296c ["CALL", null, ["callee:00c590f0:8"]]
+ 00983918 ["INT_ADD", "register:40f0:8", ["const:983918:8", "const:4:8"]]
+ 00983918 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-5a1185871d0e81b892218388841789c1"></a>

### [`0098c9a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098c/0098c9a8.md) → [`0098d954`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0098d/0098d954.md) FUN_0098d954

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) [`00ae1328`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ae1/00ae1328.md) · 呼出先 1件 [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md)
- 新版 呼出元 2件 [`0099803c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00998/0099803c.md) [`00ae231c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ae2/00ae231c.md) · 呼出先 1件 [`00676e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676e50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0098c9cc ["INT_ADD", "register:40f0:8", ["const:98c9cc:8", "const:4:8"]]
- 0098c9cc ["CALL", null, ["callee:00676e50:8"]]
+ 0098d978 ["INT_ADD", "register:40f0:8", ["const:98d978:8", "const:4:8"]]
+ 0098d978 ["CALL", null, ["callee:00676e50:8"]]
~~~


<a id="compare-92df8e1c35bbc02e9c39b5b0ff1691b1"></a>

### [`0098ca18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098c/0098ca18.md) → [`0098d9c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0098d/0098d9c4.md) FUN_0098d9c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) [`00ad09c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad0/00ad09c8.md) · 呼出先 3件 [`00664acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664acc.md) [`00664b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664b70.md) [`00b00000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00000.md)
- 新版 呼出元 2件 [`00986418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00986/00986418.md) [`00ad19bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ad1/00ad19bc.md) · 呼出先 3件 [`00664e7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664e7c.md) [`00664f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664f20.md) [`00b00ff4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b00/00b00ff4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0098cc50 ["INT_ADD", "register:40f0:8", ["const:98cc50:8", "const:4:8"]]
- 0098cc50 ["CALL", null, ["callee:00664e7c:8"]]
+ 0098dbfc ["INT_ADD", "register:40f0:8", ["const:98dbfc:8", "const:4:8"]]
+ 0098dbfc ["CALL", null, ["callee:00664e7c:8"]]
- 0098cc98 ["INT_ADD", "register:40f0:8", ["const:98cc98:8", "const:4:8"]]
- 0098cc98 ["CALL", null, ["callee:00664e7c:8"]]
+ 0098dc44 ["INT_ADD", "register:40f0:8", ["const:98dc44:8", "const:4:8"]]
+ 0098dc44 ["CALL", null, ["callee:00664e7c:8"]]
- 0098cce8 ["INT_ADD", "register:40f0:8", ["const:98cce8:8", "const:4:8"]]
- 0098cce8 ["CALL", null, ["callee:00664e7c:8"]]
+ 0098dc94 ["INT_ADD", "register:40f0:8", ["const:98dc94:8", "const:4:8"]]
+ 0098dc94 ["CALL", null, ["callee:00664e7c:8"]]
~~~


<a id="compare-27c7050ce6d845088cf58fd96b01e7c5"></a>

### [`00996bac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00996/00996bac.md) → [`00997b58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00997/00997b58.md) FUN_00997b58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`0098ec08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0098e/0098ec08.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00996c14 ["INT_ADD", "register:40f0:8", ["const:996c14:8", "const:4:8"]]
- 00996c14 ["CALL", null, ["callee:00c58f30:8"]]
+ 00997bc0 ["INT_ADD", "register:40f0:8", ["const:997bc0:8", "const:4:8"]]
+ 00997bc0 ["CALL", null, ["callee:00c58f30:8"]]
- 00996c48 ["INT_ADD", "register:40f0:8", ["const:996c48:8", "const:4:8"]]
- 00996c48 ["CALL", null, ["callee:0043bf04:8"]]
+ 00997bf4 ["INT_ADD", "register:40f0:8", ["const:997bf4:8", "const:4:8"]]
+ 00997bf4 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-33cd31f2f6668847c6577300f7f6c976"></a>

### [`00996fb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00996/00996fb4.md) → [`00997f60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00997/00997f60.md) FUN_00997f60

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 1件 [`0098ec08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0098e/0098ec08.md) · 呼出先 1件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00997084 ["INT_ADD", "register:40f0:8", ["const:997084:8", "const:4:8"]]
- 00997084 ["CALL", null, ["callee:00c54d60:8"]]
+ 00998030 ["INT_ADD", "register:40f0:8", ["const:998030:8", "const:4:8"]]
+ 00998030 ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-222cdbd2c50bb44014d4f46ec8887f25"></a>

### [`009a13d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a1/009a13d0.md) → [`009a237c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a2/009a237c.md) FUN_009a237c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) [`0099bac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0099b/0099bac4.md) · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 2件 [`0099803c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00998/0099803c.md) [`0099ca70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0099c/0099ca70.md) · 呼出先 1件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009a14a0 ["INT_ADD", "register:40f0:8", ["const:9a14a0:8", "const:4:8"]]
- 009a14a0 ["CALL", null, ["callee:00c54d60:8"]]
+ 009a244c ["INT_ADD", "register:40f0:8", ["const:9a244c:8", "const:4:8"]]
+ 009a244c ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-d6e7e3980cd03dd9eff3d08d52a6d8f1"></a>

### [`009a2b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a2/009a2b88.md) → [`009a3b34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a3/009a3b34.md) FUN_009a3b34

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 10件 [`00982dc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982dc0.md) [`00984a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00984/00984a5c.md) [`00984c88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00984/00984c88.md) [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 5件 [`009a2cd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a2/009a2cd8.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 10件 [`00983d6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00983/00983d6c.md) [`00985a08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00985/00985a08.md) [`00985c34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00985/00985c34.md) [`00986418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00986/00986418.md) [`0098ec08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0098e/0098ec08.md) · 呼出先 5件 [`009a3c84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a3/009a3c84.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009a2c7c ["INT_ADD", "register:40f0:8", ["const:9a2c7c:8", "const:4:8"]]
- 009a2c7c ["CALL", null, ["callee:009a3c84:8"]]
+ 009a3c28 ["INT_ADD", "register:40f0:8", ["const:9a3c28:8", "const:4:8"]]
+ 009a3c28 ["CALL", null, ["callee:009a3c84:8"]]
- 009a2ca4 ["INT_ADD", "register:40f0:8", ["const:9a2ca4:8", "const:4:8"]]
- 009a2ca4 ["CALL", null, ["callee:00c54d90:8"]]
+ 009a3c50 ["INT_ADD", "register:40f0:8", ["const:9a3c50:8", "const:4:8"]]
+ 009a3c50 ["CALL", null, ["callee:00c54d90:8"]]
- 009a2cb8 ["COPY", "register:0:8", ["register:4040:8"]]
- 009a2cb8 ["INT_ADD", "register:40f0:8", ["const:9a2cb8:8", "const:4:8"]]
- 009a2cb8 ["CALLIND", null, ["register:0:8"]]
+ 009a3c64 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009a3c64 ["INT_ADD", "register:40f0:8", ["const:9a3c64:8", "const:4:8"]]
+ 009a3c64 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-aac8da0b6899a92fecc19bcfa73b1d1c"></a>

### [`009a2e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a2/009a2e60.md) → [`009a3e0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a3/009a3e0c.md) FUN_009a3e0c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 8件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00664800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664800.md) [`009c7d04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c7/009c7d04.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00664bb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664bb0.md) [`009c8cb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c8/009c8cb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009a2ed4 ["INT_ADD", "register:40f0:8", ["const:9a2ed4:8", "const:4:8"]]
- 009a2ed4 ["CALL", null, ["callee:0043bf04:8"]]
+ 009a3e80 ["INT_ADD", "register:40f0:8", ["const:9a3e80:8", "const:4:8"]]
+ 009a3e80 ["CALL", null, ["callee:0043bf04:8"]]
- 009a2f48 ["INT_ADD", "register:40f0:8", ["const:9a2f48:8", "const:4:8"]]
- 009a2f48 ["CALL", null, ["callee:009c8cb0:8"]]
+ 009a3ef4 ["INT_ADD", "register:40f0:8", ["const:9a3ef4:8", "const:4:8"]]
+ 009a3ef4 ["CALL", null, ["callee:009c8cb0:8"]]
- 009a2f54 ["INT_ADD", "register:40f0:8", ["const:9a2f54:8", "const:4:8"]]
- 009a2f54 ["CALL", null, ["callee:009c8cb0:8"]]
+ 009a3f00 ["INT_ADD", "register:40f0:8", ["const:9a3f00:8", "const:4:8"]]
+ 009a3f00 ["CALL", null, ["callee:009c8cb0:8"]]
~~~


<a id="compare-369c1dc7889dc87664461e971b3e751a"></a>

### [`009a6828`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6828.md) → [`009a77d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a7/009a77d4.md) FUN_009a77d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009a6844 ["INT_ADD", "register:40f0:8", ["const:9a6844:8", "const:4:8"]]
- 009a6844 ["CALL", null, ["callee:00c54d90:8"]]
+ 009a77f0 ["INT_ADD", "register:40f0:8", ["const:9a77f0:8", "const:4:8"]]
+ 009a77f0 ["CALL", null, ["callee:00c54d90:8"]]
- 009a6864 ["COPY", "register:0:8", ["register:4040:8"]]
- 009a6864 ["INT_ADD", "register:40f0:8", ["const:9a6864:8", "const:4:8"]]
- 009a6864 ["CALLIND", null, ["register:0:8"]]
+ 009a7810 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009a7810 ["INT_ADD", "register:40f0:8", ["const:9a7810:8", "const:4:8"]]
+ 009a7810 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-fb0ace37395c9874b1daa3fcde2d9968"></a>

### [`009a6878`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6878.md) → [`009a7824`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a7/009a7824.md) FUN_009a7824

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009a68c0 ["INT_ADD", "register:40f0:8", ["const:9a68c0:8", "const:4:8"]]
- 009a68c0 ["CALL", null, ["callee:00c58f50:8"]]
+ 009a786c ["INT_ADD", "register:40f0:8", ["const:9a786c:8", "const:4:8"]]
+ 009a786c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-9d9e541a0f6e7b7fe354c5a7b7fb4b46"></a>

### [`009a68f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a68f0.md) → [`009a789c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a7/009a789c.md) FUN_009a789c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009a63f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a63f4.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`009a6a38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6a38.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009a73a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a7/009a73a0.md) · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`009a79e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a7/009a79e4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009a6958 ["INT_ADD", "register:40f0:8", ["const:9a6958:8", "const:4:8"]]
- 009a6958 ["CALL", null, ["callee:00c58f30:8"]]
+ 009a7904 ["INT_ADD", "register:40f0:8", ["const:9a7904:8", "const:4:8"]]
+ 009a7904 ["CALL", null, ["callee:00c58f30:8"]]
- 009a69f4 ["INT_ADD", "register:40f0:8", ["const:9a69f4:8", "const:4:8"]]
- 009a69f4 ["CALL", null, ["callee:00c58f50:8"]]
+ 009a79a0 ["INT_ADD", "register:40f0:8", ["const:9a79a0:8", "const:4:8"]]
+ 009a79a0 ["CALL", null, ["callee:00c58f50:8"]]
- 009a6a10 ["INT_ADD", "register:40f0:8", ["const:9a6a10:8", "const:4:8"]]
- 009a6a10 ["CALL", null, ["callee:00c58f50:8"]]
+ 009a79bc ["INT_ADD", "register:40f0:8", ["const:9a79bc:8", "const:4:8"]]
+ 009a79bc ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-3d7730c25994fa7ea0cdc06a66d980bd"></a>

### [`009a6a4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6a4c.md) → [`009a79f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a7/009a79f8.md) FUN_009a79f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009a6a8c ["INT_ADD", "register:40f0:8", ["const:9a6a8c:8", "const:4:8"]]
- 009a6a8c ["CALL", null, ["callee:00c58f50:8"]]
+ 009a7a38 ["INT_ADD", "register:40f0:8", ["const:9a7a38:8", "const:4:8"]]
+ 009a7a38 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-d495707e0aa0816997f97179a6f37ed3"></a>

### [`009a6aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6aa0.md) → [`009a7a4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a7/009a7a4c.md) FUN_009a7a4c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009a63f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a63f4.md) · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`009a6a38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6a38.md) [`009a6bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6bfc.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`009a73a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a7/009a73a0.md) · 呼出先 6件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`009a79e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a7/009a79e4.md) [`009a7ba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a7/009a7ba8.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009a6aec ["INT_ADD", "register:40f0:8", ["const:9a6aec:8", "const:4:8"]]
- 009a6aec ["CALL", null, ["callee:00c58f30:8"]]
+ 009a7a98 ["INT_ADD", "register:40f0:8", ["const:9a7a98:8", "const:4:8"]]
+ 009a7a98 ["CALL", null, ["callee:00c58f30:8"]]
- 009a6b6c ["INT_ADD", "register:40f0:8", ["const:9a6b6c:8", "const:4:8"]]
- 009a6b6c ["CALL", null, ["callee:0043be80:8"]]
+ 009a7b18 ["INT_ADD", "register:40f0:8", ["const:9a7b18:8", "const:4:8"]]
+ 009a7b18 ["CALL", null, ["callee:0043be80:8"]]
- 009a6bbc ["INT_ADD", "register:40f0:8", ["const:9a6bbc:8", "const:4:8"]]
- 009a6bbc ["CALL", null, ["callee:009a79e4:8"]]
+ 009a7b68 ["INT_ADD", "register:40f0:8", ["const:9a7b68:8", "const:4:8"]]
+ 009a7b68 ["CALL", null, ["callee:009a79e4:8"]]
~~~


<a id="compare-7c7c1a36fc41946abbe50ce4d070b3d1"></a>

### [`009a6bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6bfc.md) → [`009a7ba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a7/009a7ba8.md) FUN_009a7ba8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009a6aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6aa0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009a7a4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a7/009a7a4c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009a6c60 ["INT_ADD", "register:40f0:8", ["const:9a6c60:8", "const:4:8"]]
- 009a6c60 ["CALL", null, ["callee:00c58f50:8"]]
+ 009a7c0c ["INT_ADD", "register:40f0:8", ["const:9a7c0c:8", "const:4:8"]]
+ 009a7c0c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-e6ca763ef8a41b1d2ef05df7fdbdd008"></a>

### [`009a6e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6e80.md) → [`009a7e2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a7/009a7e2c.md) FUN_009a7e2c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009a6e9c ["INT_ADD", "register:40f0:8", ["const:9a6e9c:8", "const:4:8"]]
- 009a6e9c ["CALL", null, ["callee:00c54d90:8"]]
+ 009a7e48 ["INT_ADD", "register:40f0:8", ["const:9a7e48:8", "const:4:8"]]
+ 009a7e48 ["CALL", null, ["callee:00c54d90:8"]]
- 009a6ebc ["COPY", "register:0:8", ["register:4040:8"]]
- 009a6ebc ["INT_ADD", "register:40f0:8", ["const:9a6ebc:8", "const:4:8"]]
- 009a6ebc ["CALLIND", null, ["register:0:8"]]
+ 009a7e68 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009a7e68 ["INT_ADD", "register:40f0:8", ["const:9a7e68:8", "const:4:8"]]
+ 009a7e68 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-419251a2a3c0b78698db45b9c77c7e03"></a>

### [`009a859c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a8/009a859c.md) → [`009a9548`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a9/009a9548.md) FUN_009a9548

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009a5114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a5114.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009a60c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a6/009a60c0.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009a85dc ["COPY", "register:0:8", ["register:4040:8"]]
- 009a85dc ["INT_ADD", "register:40f0:8", ["const:9a85dc:8", "const:4:8"]]
- 009a85dc ["CALLIND", null, ["register:0:8"]]
+ 009a9588 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009a9588 ["INT_ADD", "register:40f0:8", ["const:9a9588:8", "const:4:8"]]
+ 009a9588 ["CALLIND", null, ["register:0:8"]]
- 009a8608 ["COPY", "register:0:8", ["register:4040:8"]]
- 009a8608 ["INT_ADD", "register:40f0:8", ["const:9a8608:8", "const:4:8"]]
- 009a8608 ["CALLIND", null, ["register:0:8"]]
+ 009a95b4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009a95b4 ["INT_ADD", "register:40f0:8", ["const:9a95b4:8", "const:4:8"]]
+ 009a95b4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ada99063b9692976f1da5d3a6fb10953"></a>

### [`009a861c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a8/009a861c.md) → [`009a95c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a9/009a95c8.md) FUN_009a95c8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009a8654 ["INT_ADD", "register:40f0:8", ["const:9a8654:8", "const:4:8"]]
- 009a8654 ["CALL", null, ["callee:00c54d60:8"]]
+ 009a9600 ["INT_ADD", "register:40f0:8", ["const:9a9600:8", "const:4:8"]]
+ 009a9600 ["CALL", null, ["callee:00c54d60:8"]]
- 009a8668 ["INT_ADD", "register:40f0:8", ["const:9a8668:8", "const:4:8"]]
- 009a8668 ["CALL", null, ["callee:00c54d60:8"]]
+ 009a9614 ["INT_ADD", "register:40f0:8", ["const:9a9614:8", "const:4:8"]]
+ 009a9614 ["CALL", null, ["callee:00c54d60:8"]]
- 009a8680 ["COPY", "register:0:8", ["register:4040:8"]]
- 009a8680 ["INT_ADD", "register:40f0:8", ["const:9a8680:8", "const:4:8"]]
- 009a8680 ["CALLIND", null, ["register:0:8"]]
+ 009a962c ["COPY", "register:0:8", ["register:4040:8"]]
+ 009a962c ["INT_ADD", "register:40f0:8", ["const:9a962c:8", "const:4:8"]]
+ 009a962c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-906256c364af0031e7757c98661244d9"></a>

### [`009a8cf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a8/009a8cf8.md) → [`009a9ca4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a9/009a9ca4.md) FUN_009a9ca4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009a5808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a5808.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009a67b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a6/009a67b4.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009a8d38 ["COPY", "register:0:8", ["register:4040:8"]]
- 009a8d38 ["INT_ADD", "register:40f0:8", ["const:9a8d38:8", "const:4:8"]]
- 009a8d38 ["CALLIND", null, ["register:0:8"]]
+ 009a9ce4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009a9ce4 ["INT_ADD", "register:40f0:8", ["const:9a9ce4:8", "const:4:8"]]
+ 009a9ce4 ["CALLIND", null, ["register:0:8"]]
- 009a8d64 ["COPY", "register:0:8", ["register:4040:8"]]
- 009a8d64 ["INT_ADD", "register:40f0:8", ["const:9a8d64:8", "const:4:8"]]
- 009a8d64 ["CALLIND", null, ["register:0:8"]]
+ 009a9d10 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009a9d10 ["INT_ADD", "register:40f0:8", ["const:9a9d10:8", "const:4:8"]]
+ 009a9d10 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-80d4cc12f1509c29e7d72015f09ec546"></a>

### [`009a8d78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a8/009a8d78.md) → [`009a9d24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a9/009a9d24.md) FUN_009a9d24

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009a8db0 ["INT_ADD", "register:40f0:8", ["const:9a8db0:8", "const:4:8"]]
- 009a8db0 ["CALL", null, ["callee:00c54d60:8"]]
+ 009a9d5c ["INT_ADD", "register:40f0:8", ["const:9a9d5c:8", "const:4:8"]]
+ 009a9d5c ["CALL", null, ["callee:00c54d60:8"]]
- 009a8dc4 ["INT_ADD", "register:40f0:8", ["const:9a8dc4:8", "const:4:8"]]
- 009a8dc4 ["CALL", null, ["callee:00c54d60:8"]]
+ 009a9d70 ["INT_ADD", "register:40f0:8", ["const:9a9d70:8", "const:4:8"]]
+ 009a9d70 ["CALL", null, ["callee:00c54d60:8"]]
- 009a8ddc ["COPY", "register:0:8", ["register:4040:8"]]
- 009a8ddc ["INT_ADD", "register:40f0:8", ["const:9a8ddc:8", "const:4:8"]]
- 009a8ddc ["CALLIND", null, ["register:0:8"]]
+ 009a9d88 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009a9d88 ["INT_ADD", "register:40f0:8", ["const:9a9d88:8", "const:4:8"]]
+ 009a9d88 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6bcf0cabc22532afb8c3db6d3ea9fe9e"></a>

### [`009a93b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a93b8.md) → [`009aa364`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009aa/009aa364.md) FUN_009aa364

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`009b5bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5bcc.md) [`00a14de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a14/00a14de0.md) · 呼出先 3件 [`00480d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480d88.md) [`00480e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480e68.md) [`00481168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481168.md)
- 新版 呼出元 2件 [`009b6b78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6b78.md) [`00a15d8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a15/00a15d8c.md) · 呼出先 3件 [`004810a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/004810a8.md) [`00481188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/00481188.md) [`00481488`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/00481488.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009a93dc ["INT_ADD", "register:40f0:8", ["const:9a93dc:8", "const:4:8"]]
- 009a93dc ["CALL", null, ["callee:00481188:8"]]
+ 009aa388 ["INT_ADD", "register:40f0:8", ["const:9aa388:8", "const:4:8"]]
+ 009aa388 ["CALL", null, ["callee:00481188:8"]]
- 009a93e8 ["INT_ADD", "register:40f0:8", ["const:9a93e8:8", "const:4:8"]]
- 009a93e8 ["CALL", null, ["callee:00481188:8"]]
+ 009aa394 ["INT_ADD", "register:40f0:8", ["const:9aa394:8", "const:4:8"]]
+ 009aa394 ["CALL", null, ["callee:00481188:8"]]
- 009a93f4 ["INT_ADD", "register:40f0:8", ["const:9a93f4:8", "const:4:8"]]
- 009a93f4 ["CALL", null, ["callee:004810a8:8"]]
+ 009aa3a0 ["INT_ADD", "register:40f0:8", ["const:9aa3a0:8", "const:4:8"]]
+ 009aa3a0 ["CALL", null, ["callee:004810a8:8"]]
~~~


<a id="compare-249f56bf4ce65edee9ff2fe4249fe0ac"></a>

### [`009a9618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a9618.md) → [`009aa5c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009aa/009aa5c4.md) FUN_009aa5c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`009b5c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5c0c.md) [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) · 呼出先 1件 [`00480338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480338.md)
- 新版 呼出元 2件 [`009b6bb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6bb8.md) [`00a07d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07d9c.md) · 呼出先 1件 [`00480658`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480658.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009a962c ["INT_ADD", "register:40f0:8", ["const:9a962c:8", "const:4:8"]]
- 009a962c ["CALL", null, ["callee:00480658:8"]]
+ 009aa5d8 ["INT_ADD", "register:40f0:8", ["const:9aa5d8:8", "const:4:8"]]
+ 009aa5d8 ["CALL", null, ["callee:00480658:8"]]
~~~


<a id="compare-1f9ed9c526656088ae415d45e1f3200f"></a>

### [`009aa034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aa034.md) → [`009aafe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009aa/009aafe0.md) FUN_009aafe0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`009b2264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2264.md) [`009b62c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b62c4.md) [`009b689c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b689c.md) · 呼出先 1件 [`00c58500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58500.md)
- 新版 呼出元 3件 [`009b3210`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b3/009b3210.md) [`009b7270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b7/009b7270.md) [`009b7848`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b7/009b7848.md) · 呼出先 1件 [`00c594d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c594d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009aa060 ["INT_ADD", "register:40f0:8", ["const:9aa060:8", "const:4:8"]]
- 009aa060 ["CALL", null, ["callee:00c594d0:8"]]
+ 009ab00c ["INT_ADD", "register:40f0:8", ["const:9ab00c:8", "const:4:8"]]
+ 009ab00c ["CALL", null, ["callee:00c594d0:8"]]
~~~


<a id="compare-d555537cc400df51728c5699de4f5f17"></a>

### [`009aae54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aae54.md) → [`009abe00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ab/009abe00.md) FUN_009abe00

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009b0558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0558.md) · 呼出先 3件 [`0074a82c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074a/0074a82c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`009b1504`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b1/009b1504.md) · 呼出先 3件 [`0074abdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074a/0074abdc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009aae8c ["INT_ADD", "register:40f0:8", ["const:9aae8c:8", "const:4:8"]]
- 009aae8c ["CALL", null, ["callee:0074abdc:8"]]
+ 009abe38 ["INT_ADD", "register:40f0:8", ["const:9abe38:8", "const:4:8"]]
+ 009abe38 ["CALL", null, ["callee:0074abdc:8"]]
- 009aaecc ["INT_ADD", "register:40f0:8", ["const:9aaecc:8", "const:4:8"]]
- 009aaecc ["CALL", null, ["callee:00c58f50:8"]]
+ 009abe78 ["INT_ADD", "register:40f0:8", ["const:9abe78:8", "const:4:8"]]
+ 009abe78 ["CALL", null, ["callee:00c58f50:8"]]
- 009aaedc ["INT_ADD", "register:40f0:8", ["const:9aaedc:8", "const:4:8"]]
- 009aaedc ["CALL", null, ["callee:00c58f50:8"]]
+ 009abe88 ["INT_ADD", "register:40f0:8", ["const:9abe88:8", "const:4:8"]]
+ 009abe88 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-b3129018811aeff210dab3f84959eed4"></a>

### [`009ab13c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ab/009ab13c.md) → [`009ac0e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ac/009ac0e8.md) FUN_009ac0e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009a97e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a97e4.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009aa790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009aa/009aa790.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ab178 ["COPY", "register:0:8", ["register:4040:8"]]
- 009ab178 ["INT_ADD", "register:40f0:8", ["const:9ab178:8", "const:4:8"]]
- 009ab178 ["CALLIND", null, ["register:0:8"]]
+ 009ac124 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009ac124 ["INT_ADD", "register:40f0:8", ["const:9ac124:8", "const:4:8"]]
+ 009ac124 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a2ad48fd2db4d9c77adef34bee167ca3"></a>

### [`009abd14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ab/009abd14.md) → [`009accc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ac/009accc0.md) FUN_009accc0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009aa678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aa678.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`009abef4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ab/009abef4.md) [`009ac09c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac09c.md) [`009ac248`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac248.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`009ab624`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ab/009ab624.md) · 呼出先 7件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`009acea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ac/009acea0.md) [`009ad048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009ad048.md) [`009ad1f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009ad1f4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009abdcc ["INT_ADD", "register:40f0:8", ["const:9abdcc:8", "const:4:8"]]
- 009abdcc ["CALL", null, ["callee:00c58f30:8"]]
+ 009acd78 ["INT_ADD", "register:40f0:8", ["const:9acd78:8", "const:4:8"]]
+ 009acd78 ["CALL", null, ["callee:00c58f30:8"]]
- 009abe54 ["INT_ADD", "register:40f0:8", ["const:9abe54:8", "const:4:8"]]
- 009abe54 ["CALL", null, ["callee:009acea0:8"]]
+ 009ace00 ["INT_ADD", "register:40f0:8", ["const:9ace00:8", "const:4:8"]]
+ 009ace00 ["CALL", null, ["callee:009acea0:8"]]
- 009abe64 ["INT_ADD", "register:40f0:8", ["const:9abe64:8", "const:4:8"]]
- 009abe64 ["CALL", null, ["callee:009ad1f4:8"]]
+ 009ace10 ["INT_ADD", "register:40f0:8", ["const:9ace10:8", "const:4:8"]]
+ 009ace10 ["CALL", null, ["callee:009ad1f4:8"]]
~~~


<a id="compare-44eacbf861d7790d1dfea27ea70e4484"></a>

### [`009abef4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ab/009abef4.md) → [`009acea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ac/009acea0.md) FUN_009acea0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009abd14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ab/009abd14.md) · 呼出先 2件 [`009ac0b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac0b0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`009accc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ac/009accc0.md) · 呼出先 2件 [`009ad05c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009ad05c.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009abfd4 ["INT_ADD", "register:40f0:8", ["const:9abfd4:8", "const:4:8"]]
- 009abfd4 ["CALL", null, ["callee:009ad05c:8"]]
+ 009acf80 ["INT_ADD", "register:40f0:8", ["const:9acf80:8", "const:4:8"]]
+ 009acf80 ["CALL", null, ["callee:009ad05c:8"]]
- 009ac060 ["INT_ADD", "register:40f0:8", ["const:9ac060:8", "const:4:8"]]
- 009ac060 ["CALL", null, ["callee:00c58f80:8"]]
+ 009ad00c ["INT_ADD", "register:40f0:8", ["const:9ad00c:8", "const:4:8"]]
+ 009ad00c ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-0111a703a518feaabcc5df81c9c8bb56"></a>

### [`009ac064`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac064.md) → [`009ad010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009ad010.md) FUN_009ad010

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`009ac248`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac248.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`009ad1f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009ad1f4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ac078 ["INT_ADD", "register:40f0:8", ["const:9ac078:8", "const:4:8"]]
- 009ac078 ["CALL", null, ["callee:009ad1f4:8"]]
+ 009ad024 ["INT_ADD", "register:40f0:8", ["const:9ad024:8", "const:4:8"]]
+ 009ad024 ["CALL", null, ["callee:009ad1f4:8"]]
~~~


<a id="compare-1fbcbc7c0859bd1c448f884990400d1d"></a>

### [`009ac0b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac0b0.md) → [`009ad05c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009ad05c.md) FUN_009ad05c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009abef4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ab/009abef4.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009acea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ac/009acea0.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ac118 ["INT_ADD", "register:40f0:8", ["const:9ac118:8", "const:4:8"]]
- 009ac118 ["CALL", null, ["callee:00c58f50:8"]]
+ 009ad0c4 ["INT_ADD", "register:40f0:8", ["const:9ad0c4:8", "const:4:8"]]
+ 009ad0c4 ["CALL", null, ["callee:00c58f50:8"]]
- 009ac128 ["INT_ADD", "register:40f0:8", ["const:9ac128:8", "const:4:8"]]
- 009ac128 ["CALL", null, ["callee:00c58f50:8"]]
+ 009ad0d4 ["INT_ADD", "register:40f0:8", ["const:9ad0d4:8", "const:4:8"]]
+ 009ad0d4 ["CALL", null, ["callee:00c58f50:8"]]
- 009ac138 ["INT_ADD", "register:40f0:8", ["const:9ac138:8", "const:4:8"]]
- 009ac138 ["CALL", null, ["callee:00c58f50:8"]]
+ 009ad0e4 ["INT_ADD", "register:40f0:8", ["const:9ad0e4:8", "const:4:8"]]
+ 009ad0e4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-ce6464e520a89d08afb0f9e3b7cdc49d"></a>

### [`009ac160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac160.md) → [`009ad10c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009ad10c.md) FUN_009ad10c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`009ac198`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac198.md)
- 新版 呼出元 0件  · 呼出先 1件 [`009ad144`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009ad144.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ac188 ["INT_ADD", "register:40f0:8", ["const:9ac188:8", "const:4:8"]]
- 009ac188 ["CALL", null, ["callee:009ad144:8"]]
+ 009ad134 ["INT_ADD", "register:40f0:8", ["const:9ad134:8", "const:4:8"]]
+ 009ad134 ["CALL", null, ["callee:009ad144:8"]]
~~~


<a id="compare-c2f516016808fa91826d4ed1a634cadc"></a>

### [`009ac198`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac198.md) → [`009ad144`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009ad144.md) FUN_009ad144

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009ac160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac160.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009ad10c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009ad10c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ac200 ["INT_ADD", "register:40f0:8", ["const:9ac200:8", "const:4:8"]]
- 009ac200 ["CALL", null, ["callee:00c58f50:8"]]
+ 009ad1ac ["INT_ADD", "register:40f0:8", ["const:9ad1ac:8", "const:4:8"]]
+ 009ad1ac ["CALL", null, ["callee:00c58f50:8"]]
- 009ac210 ["INT_ADD", "register:40f0:8", ["const:9ac210:8", "const:4:8"]]
- 009ac210 ["CALL", null, ["callee:00c58f50:8"]]
+ 009ad1bc ["INT_ADD", "register:40f0:8", ["const:9ad1bc:8", "const:4:8"]]
+ 009ad1bc ["CALL", null, ["callee:00c58f50:8"]]
- 009ac220 ["INT_ADD", "register:40f0:8", ["const:9ac220:8", "const:4:8"]]
- 009ac220 ["CALL", null, ["callee:00c58f50:8"]]
+ 009ad1cc ["INT_ADD", "register:40f0:8", ["const:9ad1cc:8", "const:4:8"]]
+ 009ad1cc ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-2ff931862d47abffb94759746e9e3747"></a>

### [`009ac248`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac248.md) → [`009ad1f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009ad1f4.md) FUN_009ad1f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`009abd14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ab/009abd14.md) [`009ac064`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac064.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`009accc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ac/009accc0.md) [`009ad010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009ad010.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ac2c0 ["INT_ADD", "register:40f0:8", ["const:9ac2c0:8", "const:4:8"]]
- 009ac2c0 ["CALL", null, ["callee:00c58f50:8"]]
+ 009ad26c ["INT_ADD", "register:40f0:8", ["const:9ad26c:8", "const:4:8"]]
+ 009ad26c ["CALL", null, ["callee:00c58f50:8"]]
- 009ac2d0 ["INT_ADD", "register:40f0:8", ["const:9ac2d0:8", "const:4:8"]]
- 009ac2d0 ["CALL", null, ["callee:00c58f50:8"]]
+ 009ad27c ["INT_ADD", "register:40f0:8", ["const:9ad27c:8", "const:4:8"]]
+ 009ad27c ["CALL", null, ["callee:00c58f50:8"]]
- 009ac2e0 ["INT_ADD", "register:40f0:8", ["const:9ac2e0:8", "const:4:8"]]
- 009ac2e0 ["CALL", null, ["callee:00c58f50:8"]]
+ 009ad28c ["INT_ADD", "register:40f0:8", ["const:9ad28c:8", "const:4:8"]]
+ 009ad28c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-b2598d2da80a6683a3d317531410009f"></a>

### [`009ac30c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac30c.md) → [`009ad2b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009ad2b8.md) FUN_009ad2b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`009aae24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aae24.md) [`009acc84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009acc84.md) [`009b593c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b593c.md) · 呼出先 6件 [`0074a82c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074a/0074a82c.md) [`009ac09c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac09c.md) [`009ac454`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac454.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 3件 [`009abdd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ab/009abdd0.md) [`009adc30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009adc30.md) [`009b68e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b68e8.md) · 呼出先 6件 [`0074abdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074a/0074abdc.md) [`009ad048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009ad048.md) [`009ad400`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009ad400.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ac36c ["INT_ADD", "register:40f0:8", ["const:9ac36c:8", "const:4:8"]]
- 009ac36c ["CALL", null, ["callee:00c58f30:8"]]
+ 009ad318 ["INT_ADD", "register:40f0:8", ["const:9ad318:8", "const:4:8"]]
+ 009ad318 ["CALL", null, ["callee:00c58f30:8"]]
- 009ac3b0 ["INT_ADD", "register:40f0:8", ["const:9ac3b0:8", "const:4:8"]]
- 009ac3b0 ["CALL", null, ["callee:0074abdc:8"]]
+ 009ad35c ["INT_ADD", "register:40f0:8", ["const:9ad35c:8", "const:4:8"]]
+ 009ad35c ["CALL", null, ["callee:0074abdc:8"]]
- 009ac414 ["INT_ADD", "register:40f0:8", ["const:9ac414:8", "const:4:8"]]
- 009ac414 ["CALL", null, ["callee:009ad048:8"]]
+ 009ad3c0 ["INT_ADD", "register:40f0:8", ["const:9ad3c0:8", "const:4:8"]]
+ 009ad3c0 ["CALL", null, ["callee:009ad048:8"]]
~~~


<a id="compare-d6bcda69932846188c10afdb99effeeb"></a>

### [`009ac454`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac454.md) → [`009ad400`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009ad400.md) FUN_009ad400

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009ac30c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac30c.md) · 呼出先 2件 [`00869f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869f4c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009ad2b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009ad2b8.md) · 呼出先 2件 [`0086aef8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086aef8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ac480 ["INT_ADD", "register:40f0:8", ["const:9ac480:8", "const:4:8"]]
- 009ac480 ["CALL", null, ["callee:0086aef8:8"]]
+ 009ad42c ["INT_ADD", "register:40f0:8", ["const:9ad42c:8", "const:4:8"]]
+ 009ad42c ["CALL", null, ["callee:0086aef8:8"]]
~~~


<a id="compare-164696a8d8399a4587c38a7f71bd525d"></a>

### [`009ac84c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac84c.md) → [`009ad7f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009ad7f8.md) FUN_009ad7f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0086d29c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d29c.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0086e248`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086e248.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ac898 ["INT_ADD", "register:40f0:8", ["const:9ac898:8", "const:4:8"]]
- 009ac898 ["CALL", null, ["callee:00c54d90:8"]]
+ 009ad844 ["INT_ADD", "register:40f0:8", ["const:9ad844:8", "const:4:8"]]
+ 009ad844 ["CALL", null, ["callee:00c54d90:8"]]
- 009ac8ac ["COPY", "register:0:8", ["register:4040:8"]]
- 009ac8ac ["INT_ADD", "register:40f0:8", ["const:9ac8ac:8", "const:4:8"]]
- 009ac8ac ["CALLIND", null, ["register:0:8"]]
+ 009ad858 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009ad858 ["INT_ADD", "register:40f0:8", ["const:9ad858:8", "const:4:8"]]
+ 009ad858 ["CALLIND", null, ["register:0:8"]]
- 009ac8b4 ["INT_ADD", "register:40f0:8", ["const:9ac8b4:8", "const:4:8"]]
- 009ac8b4 ["CALL", null, ["callee:00c58f20:8"]]
+ 009ad860 ["INT_ADD", "register:40f0:8", ["const:9ad860:8", "const:4:8"]]
+ 009ad860 ["CALL", null, ["callee:00c58f20:8"]]
~~~


