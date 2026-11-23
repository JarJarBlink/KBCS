# v16.0.2 → v16.0.3 · 要調査の変更候補 (31)

[一覧の目次](README.md)

<a id="compare-f01646a8c35e617166be447f85e9129f"></a>

### [`00afe040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afe040.md) → [`00aff034`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aff/00aff034.md) FUN_00aff034

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00a52034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a52/00a52034.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00a53028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a53/00a53028.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afe05c ["INT_ADD", "register:40f0:8", ["const:afe05c:8", "const:4:8"]]
- 00afe05c ["CALL", null, ["callee:008524fc:8"]]
+ 00aff050 ["INT_ADD", "register:40f0:8", ["const:aff050:8", "const:4:8"]]
+ 00aff050 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-f26276b1eae01c2342676794899ea987"></a>

### [`00afe08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afe08c.md) → [`00aff080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aff/00aff080.md) FUN_00aff080

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afe0a0 ["INT_ADD", "register:40f0:8", ["const:afe0a0:8", "const:4:8"]]
- 00afe0a0 ["CALL", null, ["callee:008524fc:8"]]
+ 00aff094 ["INT_ADD", "register:40f0:8", ["const:aff094:8", "const:4:8"]]
+ 00aff094 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-b09230720e819eaccef8a59aaa49c67e"></a>

### [`00afe0cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afe0cc.md) → [`00aff0c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aff/00aff0c0.md) FUN_00aff0c0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`00717198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00717/00717198.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afe0e8 ["INT_ADD", "register:40f0:8", ["const:afe0e8:8", "const:4:8"]]
- 00afe0e8 ["CALL", null, ["callee:008524fc:8"]]
+ 00aff0dc ["INT_ADD", "register:40f0:8", ["const:aff0dc:8", "const:4:8"]]
+ 00aff0dc ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-4a8453f4c7bd6e759e7d486a5ad1cf24"></a>

### [`00b00000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00000.md) → [`00b00ff4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b00/00b00ff4.md) FUN_00b00ff4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0098ca18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098c/0098ca18.md) [`00b000f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b000f0.md) · 呼出先 4件 [`0046dafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046dafc.md) [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00afeb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afeb84.md)
- 新版 呼出元 2件 [`0098d9c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0098d/0098d9c4.md) [`00b010e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b01/00b010e4.md) · 呼出先 4件 [`0046de1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de1c.md) [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00affb78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aff/00affb78.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b00020 ["INT_ADD", "register:40f0:8", ["const:b00020:8", "const:4:8"]]
- 00b00020 ["CALL", null, ["callee:008524fc:8"]]
+ 00b01014 ["INT_ADD", "register:40f0:8", ["const:b01014:8", "const:4:8"]]
+ 00b01014 ["CALL", null, ["callee:008524fc:8"]]
- 00b00034 ["INT_ADD", "register:40f0:8", ["const:b00034:8", "const:4:8"]]
- 00b00034 ["CALL", null, ["callee:005e7810:8"]]
+ 00b01028 ["INT_ADD", "register:40f0:8", ["const:b01028:8", "const:4:8"]]
+ 00b01028 ["CALL", null, ["callee:005e7810:8"]]
- 00b00044 ["INT_ADD", "register:40f0:8", ["const:b00044:8", "const:4:8"]]
- 00b00044 ["CALL", null, ["callee:008524fc:8"]]
+ 00b01038 ["INT_ADD", "register:40f0:8", ["const:b01038:8", "const:4:8"]]
+ 00b01038 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-34bd4516f6f839a87ef2581150d81a48"></a>

### [`00b00418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00418.md) → [`00b0140c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b01/00b0140c.md) FUN_00b0140c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005b070c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b0/005b070c.md) · 呼出先 4件 [`0046dafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046dafc.md) [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00afeb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afeb84.md)
- 新版 呼出元 1件 [`005b0abc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b0abc.md) · 呼出先 4件 [`0046de1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de1c.md) [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00affb78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aff/00affb78.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b00434 ["INT_ADD", "register:40f0:8", ["const:b00434:8", "const:4:8"]]
- 00b00434 ["CALL", null, ["callee:008524fc:8"]]
+ 00b01428 ["INT_ADD", "register:40f0:8", ["const:b01428:8", "const:4:8"]]
+ 00b01428 ["CALL", null, ["callee:008524fc:8"]]
- 00b00448 ["INT_ADD", "register:40f0:8", ["const:b00448:8", "const:4:8"]]
- 00b00448 ["CALL", null, ["callee:005e7810:8"]]
+ 00b0143c ["INT_ADD", "register:40f0:8", ["const:b0143c:8", "const:4:8"]]
+ 00b0143c ["CALL", null, ["callee:005e7810:8"]]
- 00b00458 ["INT_ADD", "register:40f0:8", ["const:b00458:8", "const:4:8"]]
- 00b00458 ["CALL", null, ["callee:008524fc:8"]]
+ 00b0144c ["INT_ADD", "register:40f0:8", ["const:b0144c:8", "const:4:8"]]
+ 00b0144c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-1822a2a389528619398063f1fef51a25"></a>

### [`00b015d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b01/00b015d0.md) → [`00b025c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b02/00b025c4.md) FUN_00b025c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`006855c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00685/006855c8.md) [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00b00a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00a78.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b027c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b02/00b027c8.md)
- 新版 呼出元 4件 [`00685978`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00685/00685978.md) [`006c7218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c7/006c7218.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00b01a6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b01/00b01a6c.md) · 呼出先 3件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00b037bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b03/00b037bc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b015ec ["INT_ADD", "register:40f0:8", ["const:b015ec:8", "const:4:8"]]
- 00b015ec ["CALL", null, ["callee:008524fc:8"]]
+ 00b025e0 ["INT_ADD", "register:40f0:8", ["const:b025e0:8", "const:4:8"]]
+ 00b025e0 ["CALL", null, ["callee:008524fc:8"]]
- 00b01600 ["INT_ADD", "register:40f0:8", ["const:b01600:8", "const:4:8"]]
- 00b01600 ["CALL", null, ["callee:005e7810:8"]]
+ 00b025f4 ["INT_ADD", "register:40f0:8", ["const:b025f4:8", "const:4:8"]]
+ 00b025f4 ["CALL", null, ["callee:005e7810:8"]]
- 00b01610 ["INT_ADD", "register:40f0:8", ["const:b01610:8", "const:4:8"]]
- 00b01610 ["CALL", null, ["callee:008524fc:8"]]
+ 00b02604 ["INT_ADD", "register:40f0:8", ["const:b02604:8", "const:4:8"]]
+ 00b02604 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-2c9673116e64858f6da9bd344951f198"></a>

### [`00b01668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b01/00b01668.md) → [`00b0265c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b02/00b0265c.md) FUN_00b0265c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`006855c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00685/006855c8.md) [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00b00a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00a78.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b027c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b02/00b027c8.md)
- 新版 呼出元 4件 [`00685978`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00685/00685978.md) [`006c7218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c7/006c7218.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00b01a6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b01/00b01a6c.md) · 呼出先 3件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00b037bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b03/00b037bc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b01684 ["INT_ADD", "register:40f0:8", ["const:b01684:8", "const:4:8"]]
- 00b01684 ["CALL", null, ["callee:008524fc:8"]]
+ 00b02678 ["INT_ADD", "register:40f0:8", ["const:b02678:8", "const:4:8"]]
+ 00b02678 ["CALL", null, ["callee:008524fc:8"]]
- 00b01698 ["INT_ADD", "register:40f0:8", ["const:b01698:8", "const:4:8"]]
- 00b01698 ["CALL", null, ["callee:005e7810:8"]]
+ 00b0268c ["INT_ADD", "register:40f0:8", ["const:b0268c:8", "const:4:8"]]
+ 00b0268c ["CALL", null, ["callee:005e7810:8"]]
- 00b016a8 ["INT_ADD", "register:40f0:8", ["const:b016a8:8", "const:4:8"]]
- 00b016a8 ["CALL", null, ["callee:008524fc:8"]]
+ 00b0269c ["INT_ADD", "register:40f0:8", ["const:b0269c:8", "const:4:8"]]
+ 00b0269c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-3b22a577d35f6e82d8e3fd0f051a3193"></a>

### [`00b022d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b02/00b022d8.md) → [`00b032cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b03/00b032cc.md) FUN_00b032cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00b00a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00a78.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`006c7218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c7/006c7218.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00b01a6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b01/00b01a6c.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b022f4 ["INT_ADD", "register:40f0:8", ["const:b022f4:8", "const:4:8"]]
- 00b022f4 ["CALL", null, ["callee:008524fc:8"]]
+ 00b032e8 ["INT_ADD", "register:40f0:8", ["const:b032e8:8", "const:4:8"]]
+ 00b032e8 ["CALL", null, ["callee:008524fc:8"]]
- 00b02308 ["INT_ADD", "register:40f0:8", ["const:b02308:8", "const:4:8"]]
- 00b02308 ["CALL", null, ["callee:005e7810:8"]]
+ 00b032fc ["INT_ADD", "register:40f0:8", ["const:b032fc:8", "const:4:8"]]
+ 00b032fc ["CALL", null, ["callee:005e7810:8"]]
- 00b02318 ["INT_ADD", "register:40f0:8", ["const:b02318:8", "const:4:8"]]
- 00b02318 ["CALL", null, ["callee:008524fc:8"]]
+ 00b0330c ["INT_ADD", "register:40f0:8", ["const:b0330c:8", "const:4:8"]]
+ 00b0330c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-9fdfd63e6a4fc1f1bc9bb1ed8c5fbf98"></a>

### [`00b02350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b02/00b02350.md) → [`00b03344`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b03/00b03344.md) FUN_00b03344

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00b00a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00a78.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b027c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b02/00b027c8.md)
- 新版 呼出元 3件 [`006c7218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c7/006c7218.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00b01a6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b01/00b01a6c.md) · 呼出先 3件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00b037bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b03/00b037bc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0236c ["INT_ADD", "register:40f0:8", ["const:b0236c:8", "const:4:8"]]
- 00b0236c ["CALL", null, ["callee:008524fc:8"]]
+ 00b03360 ["INT_ADD", "register:40f0:8", ["const:b03360:8", "const:4:8"]]
+ 00b03360 ["CALL", null, ["callee:008524fc:8"]]
- 00b02380 ["INT_ADD", "register:40f0:8", ["const:b02380:8", "const:4:8"]]
- 00b02380 ["CALL", null, ["callee:005e7810:8"]]
+ 00b03374 ["INT_ADD", "register:40f0:8", ["const:b03374:8", "const:4:8"]]
+ 00b03374 ["CALL", null, ["callee:005e7810:8"]]
- 00b02390 ["INT_ADD", "register:40f0:8", ["const:b02390:8", "const:4:8"]]
- 00b02390 ["CALL", null, ["callee:008524fc:8"]]
+ 00b03384 ["INT_ADD", "register:40f0:8", ["const:b03384:8", "const:4:8"]]
+ 00b03384 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-c218be6386d5532aef4066a73b396934"></a>

### [`00b024a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b02/00b024a4.md) → [`00b03498`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b03/00b03498.md) FUN_00b03498

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00b00a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00a78.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00afeb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afeb84.md)
- 新版 呼出元 3件 [`006c7218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c7/006c7218.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00b01a6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b01/00b01a6c.md) · 呼出先 3件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00affb78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aff/00affb78.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b024c0 ["INT_ADD", "register:40f0:8", ["const:b024c0:8", "const:4:8"]]
- 00b024c0 ["CALL", null, ["callee:008524fc:8"]]
+ 00b034b4 ["INT_ADD", "register:40f0:8", ["const:b034b4:8", "const:4:8"]]
+ 00b034b4 ["CALL", null, ["callee:008524fc:8"]]
- 00b024d4 ["INT_ADD", "register:40f0:8", ["const:b024d4:8", "const:4:8"]]
- 00b024d4 ["CALL", null, ["callee:005e7810:8"]]
+ 00b034c8 ["INT_ADD", "register:40f0:8", ["const:b034c8:8", "const:4:8"]]
+ 00b034c8 ["CALL", null, ["callee:005e7810:8"]]
- 00b024e4 ["INT_ADD", "register:40f0:8", ["const:b024e4:8", "const:4:8"]]
- 00b024e4 ["CALL", null, ["callee:008524fc:8"]]
+ 00b034d8 ["INT_ADD", "register:40f0:8", ["const:b034d8:8", "const:4:8"]]
+ 00b034d8 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-eeec46bdfe945780bbe7243cc3ec5ff9"></a>

### [`00b025ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b02/00b025ec.md) → [`00b035e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b03/00b035e0.md) FUN_00b035e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00b00a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00a78.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`006c7218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c7/006c7218.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00b01a6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b01/00b01a6c.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b02608 ["INT_ADD", "register:40f0:8", ["const:b02608:8", "const:4:8"]]
- 00b02608 ["CALL", null, ["callee:008524fc:8"]]
+ 00b035fc ["INT_ADD", "register:40f0:8", ["const:b035fc:8", "const:4:8"]]
+ 00b035fc ["CALL", null, ["callee:008524fc:8"]]
- 00b0261c ["INT_ADD", "register:40f0:8", ["const:b0261c:8", "const:4:8"]]
- 00b0261c ["CALL", null, ["callee:005e7810:8"]]
+ 00b03610 ["INT_ADD", "register:40f0:8", ["const:b03610:8", "const:4:8"]]
+ 00b03610 ["CALL", null, ["callee:005e7810:8"]]
- 00b0262c ["INT_ADD", "register:40f0:8", ["const:b0262c:8", "const:4:8"]]
- 00b0262c ["CALL", null, ["callee:008524fc:8"]]
+ 00b03620 ["INT_ADD", "register:40f0:8", ["const:b03620:8", "const:4:8"]]
+ 00b03620 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-7eb03a544d0d5073ad1221c523af5434"></a>

### [`00b02c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b02/00b02c78.md) → [`00b03c6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b03/00b03c6c.md) FUN_00b03c6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00b00a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00a78.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b027c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b02/00b027c8.md)
- 新版 呼出元 3件 [`006c7218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c7/006c7218.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00b01a6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b01/00b01a6c.md) · 呼出先 3件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00b037bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b03/00b037bc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b02c94 ["INT_ADD", "register:40f0:8", ["const:b02c94:8", "const:4:8"]]
- 00b02c94 ["CALL", null, ["callee:008524fc:8"]]
+ 00b03c88 ["INT_ADD", "register:40f0:8", ["const:b03c88:8", "const:4:8"]]
+ 00b03c88 ["CALL", null, ["callee:008524fc:8"]]
- 00b02ca8 ["INT_ADD", "register:40f0:8", ["const:b02ca8:8", "const:4:8"]]
- 00b02ca8 ["CALL", null, ["callee:005e7810:8"]]
+ 00b03c9c ["INT_ADD", "register:40f0:8", ["const:b03c9c:8", "const:4:8"]]
+ 00b03c9c ["CALL", null, ["callee:005e7810:8"]]
- 00b02cb8 ["INT_ADD", "register:40f0:8", ["const:b02cb8:8", "const:4:8"]]
- 00b02cb8 ["CALL", null, ["callee:008524fc:8"]]
+ 00b03cac ["INT_ADD", "register:40f0:8", ["const:b03cac:8", "const:4:8"]]
+ 00b03cac ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-6d678a18a044f84536dd7976849b768d"></a>

### [`00b039ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b03/00b039ac.md) → [`00b049a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b04/00b049a0.md) FUN_00b049a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`006cb228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cb/006cb228.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00b00a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00a78.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b027c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b02/00b027c8.md)
- 新版 呼出元 4件 [`006c7218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c7/006c7218.md) [`006cb5d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006cb/006cb5d8.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00b01a6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b01/00b01a6c.md) · 呼出先 3件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00b037bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b03/00b037bc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b039c8 ["INT_ADD", "register:40f0:8", ["const:b039c8:8", "const:4:8"]]
- 00b039c8 ["CALL", null, ["callee:008524fc:8"]]
+ 00b049bc ["INT_ADD", "register:40f0:8", ["const:b049bc:8", "const:4:8"]]
+ 00b049bc ["CALL", null, ["callee:008524fc:8"]]
- 00b039dc ["INT_ADD", "register:40f0:8", ["const:b039dc:8", "const:4:8"]]
- 00b039dc ["CALL", null, ["callee:005e7810:8"]]
+ 00b049d0 ["INT_ADD", "register:40f0:8", ["const:b049d0:8", "const:4:8"]]
+ 00b049d0 ["CALL", null, ["callee:005e7810:8"]]
- 00b039ec ["INT_ADD", "register:40f0:8", ["const:b039ec:8", "const:4:8"]]
- 00b039ec ["CALL", null, ["callee:008524fc:8"]]
+ 00b049e0 ["INT_ADD", "register:40f0:8", ["const:b049e0:8", "const:4:8"]]
+ 00b049e0 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-544de1ad59b9e07a0242256c2406ac49"></a>

### [`00b03a44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b03/00b03a44.md) → [`00b04a38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b04/00b04a38.md) FUN_00b04a38

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00b00a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00a78.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b027c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b02/00b027c8.md)
- 新版 呼出元 3件 [`006c7218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c7/006c7218.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00b01a6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b01/00b01a6c.md) · 呼出先 3件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00b037bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b03/00b037bc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b03a60 ["INT_ADD", "register:40f0:8", ["const:b03a60:8", "const:4:8"]]
- 00b03a60 ["CALL", null, ["callee:008524fc:8"]]
+ 00b04a54 ["INT_ADD", "register:40f0:8", ["const:b04a54:8", "const:4:8"]]
+ 00b04a54 ["CALL", null, ["callee:008524fc:8"]]
- 00b03a74 ["INT_ADD", "register:40f0:8", ["const:b03a74:8", "const:4:8"]]
- 00b03a74 ["CALL", null, ["callee:005e7810:8"]]
+ 00b04a68 ["INT_ADD", "register:40f0:8", ["const:b04a68:8", "const:4:8"]]
+ 00b04a68 ["CALL", null, ["callee:005e7810:8"]]
- 00b03a84 ["INT_ADD", "register:40f0:8", ["const:b03a84:8", "const:4:8"]]
- 00b03a84 ["CALL", null, ["callee:008524fc:8"]]
+ 00b04a78 ["INT_ADD", "register:40f0:8", ["const:b04a78:8", "const:4:8"]]
+ 00b04a78 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-0061494bfc112593d644f0633bc36e10"></a>

### [`00b03adc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b03/00b03adc.md) → [`00b04ad0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b04/00b04ad0.md) FUN_00b04ad0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00b00a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00a78.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b027c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b02/00b027c8.md)
- 新版 呼出元 3件 [`006c7218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c7/006c7218.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00b01a6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b01/00b01a6c.md) · 呼出先 3件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00b037bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b03/00b037bc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b03af8 ["INT_ADD", "register:40f0:8", ["const:b03af8:8", "const:4:8"]]
- 00b03af8 ["CALL", null, ["callee:008524fc:8"]]
+ 00b04aec ["INT_ADD", "register:40f0:8", ["const:b04aec:8", "const:4:8"]]
+ 00b04aec ["CALL", null, ["callee:008524fc:8"]]
- 00b03b0c ["INT_ADD", "register:40f0:8", ["const:b03b0c:8", "const:4:8"]]
- 00b03b0c ["CALL", null, ["callee:005e7810:8"]]
+ 00b04b00 ["INT_ADD", "register:40f0:8", ["const:b04b00:8", "const:4:8"]]
+ 00b04b00 ["CALL", null, ["callee:005e7810:8"]]
- 00b03b1c ["INT_ADD", "register:40f0:8", ["const:b03b1c:8", "const:4:8"]]
- 00b03b1c ["CALL", null, ["callee:008524fc:8"]]
+ 00b04b10 ["INT_ADD", "register:40f0:8", ["const:b04b10:8", "const:4:8"]]
+ 00b04b10 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-bae786189def1f2098ffd0f4fd5c9462"></a>

### [`00b03cb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b03/00b03cb4.md) → [`00b04ca8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b04/00b04ca8.md) FUN_00b04ca8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00b00a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00a78.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b027c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b02/00b027c8.md)
- 新版 呼出元 3件 [`006c7218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c7/006c7218.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00b01a6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b01/00b01a6c.md) · 呼出先 3件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00b037bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b03/00b037bc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b03cd0 ["INT_ADD", "register:40f0:8", ["const:b03cd0:8", "const:4:8"]]
- 00b03cd0 ["CALL", null, ["callee:008524fc:8"]]
+ 00b04cc4 ["INT_ADD", "register:40f0:8", ["const:b04cc4:8", "const:4:8"]]
+ 00b04cc4 ["CALL", null, ["callee:008524fc:8"]]
- 00b03ce4 ["INT_ADD", "register:40f0:8", ["const:b03ce4:8", "const:4:8"]]
- 00b03ce4 ["CALL", null, ["callee:005e7810:8"]]
+ 00b04cd8 ["INT_ADD", "register:40f0:8", ["const:b04cd8:8", "const:4:8"]]
+ 00b04cd8 ["CALL", null, ["callee:005e7810:8"]]
- 00b03cf4 ["INT_ADD", "register:40f0:8", ["const:b03cf4:8", "const:4:8"]]
- 00b03cf4 ["CALL", null, ["callee:008524fc:8"]]
+ 00b04ce8 ["INT_ADD", "register:40f0:8", ["const:b04ce8:8", "const:4:8"]]
+ 00b04ce8 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-ecf2fdf97a70091ebe85c4f24debc21a"></a>

### [`00b03d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b03/00b03d4c.md) → [`00b04d40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b04/00b04d40.md) FUN_00b04d40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00b00a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00a78.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`006c7218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c7/006c7218.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) [`00b01a6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b01/00b01a6c.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b03d68 ["INT_ADD", "register:40f0:8", ["const:b03d68:8", "const:4:8"]]
- 00b03d68 ["CALL", null, ["callee:008524fc:8"]]
+ 00b04d5c ["INT_ADD", "register:40f0:8", ["const:b04d5c:8", "const:4:8"]]
+ 00b04d5c ["CALL", null, ["callee:008524fc:8"]]
- 00b03d7c ["INT_ADD", "register:40f0:8", ["const:b03d7c:8", "const:4:8"]]
- 00b03d7c ["CALL", null, ["callee:005e7810:8"]]
+ 00b04d70 ["INT_ADD", "register:40f0:8", ["const:b04d70:8", "const:4:8"]]
+ 00b04d70 ["CALL", null, ["callee:005e7810:8"]]
- 00b03d8c ["INT_ADD", "register:40f0:8", ["const:b03d8c:8", "const:4:8"]]
- 00b03d8c ["CALL", null, ["callee:008524fc:8"]]
+ 00b04d80 ["INT_ADD", "register:40f0:8", ["const:b04d80:8", "const:4:8"]]
+ 00b04d80 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-7c541344bdb0fc021ca977952f88597c"></a>

### [`00b063d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b06/00b063d0.md) → [`00b073c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b07/00b073c4.md) FUN_00b073c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00afeb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afeb84.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 3件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00affb78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aff/00affb78.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b063ec ["INT_ADD", "register:40f0:8", ["const:b063ec:8", "const:4:8"]]
- 00b063ec ["CALL", null, ["callee:008524fc:8"]]
+ 00b073e0 ["INT_ADD", "register:40f0:8", ["const:b073e0:8", "const:4:8"]]
+ 00b073e0 ["CALL", null, ["callee:008524fc:8"]]
- 00b06400 ["INT_ADD", "register:40f0:8", ["const:b06400:8", "const:4:8"]]
- 00b06400 ["CALL", null, ["callee:005e7810:8"]]
+ 00b073f4 ["INT_ADD", "register:40f0:8", ["const:b073f4:8", "const:4:8"]]
+ 00b073f4 ["CALL", null, ["callee:005e7810:8"]]
- 00b06410 ["INT_ADD", "register:40f0:8", ["const:b06410:8", "const:4:8"]]
- 00b06410 ["CALL", null, ["callee:008524fc:8"]]
+ 00b07404 ["INT_ADD", "register:40f0:8", ["const:b07404:8", "const:4:8"]]
+ 00b07404 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-3fdf9566b5401e3f0a48e8b7446353d4"></a>

### [`00b0645c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b06/00b0645c.md) → [`00b07450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b07/00b07450.md) FUN_00b07450

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00afeb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afeb84.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 3件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00affb78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aff/00affb78.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b06478 ["INT_ADD", "register:40f0:8", ["const:b06478:8", "const:4:8"]]
- 00b06478 ["CALL", null, ["callee:008524fc:8"]]
+ 00b0746c ["INT_ADD", "register:40f0:8", ["const:b0746c:8", "const:4:8"]]
+ 00b0746c ["CALL", null, ["callee:008524fc:8"]]
- 00b0648c ["INT_ADD", "register:40f0:8", ["const:b0648c:8", "const:4:8"]]
- 00b0648c ["CALL", null, ["callee:005e7810:8"]]
+ 00b07480 ["INT_ADD", "register:40f0:8", ["const:b07480:8", "const:4:8"]]
+ 00b07480 ["CALL", null, ["callee:005e7810:8"]]
- 00b0649c ["INT_ADD", "register:40f0:8", ["const:b0649c:8", "const:4:8"]]
- 00b0649c ["CALL", null, ["callee:008524fc:8"]]
+ 00b07490 ["INT_ADD", "register:40f0:8", ["const:b07490:8", "const:4:8"]]
+ 00b07490 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-66d8743c9d92337cb84508689a10f166"></a>

### [`00b065a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b06/00b065a0.md) → [`00b07594`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b07/00b07594.md) FUN_00b07594

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b065bc ["INT_ADD", "register:40f0:8", ["const:b065bc:8", "const:4:8"]]
- 00b065bc ["CALL", null, ["callee:008524fc:8"]]
+ 00b075b0 ["INT_ADD", "register:40f0:8", ["const:b075b0:8", "const:4:8"]]
+ 00b075b0 ["CALL", null, ["callee:008524fc:8"]]
- 00b065d0 ["INT_ADD", "register:40f0:8", ["const:b065d0:8", "const:4:8"]]
- 00b065d0 ["CALL", null, ["callee:005e7810:8"]]
+ 00b075c4 ["INT_ADD", "register:40f0:8", ["const:b075c4:8", "const:4:8"]]
+ 00b075c4 ["CALL", null, ["callee:005e7810:8"]]
- 00b065e0 ["INT_ADD", "register:40f0:8", ["const:b065e0:8", "const:4:8"]]
- 00b065e0 ["CALL", null, ["callee:008524fc:8"]]
+ 00b075d4 ["INT_ADD", "register:40f0:8", ["const:b075d4:8", "const:4:8"]]
+ 00b075d4 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-b6b7c26a323dc33edd39272ec872193e"></a>

### [`00b06618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b06/00b06618.md) → [`00b0760c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b07/00b0760c.md) FUN_00b0760c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`006c7218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c7/006c7218.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b06634 ["INT_ADD", "register:40f0:8", ["const:b06634:8", "const:4:8"]]
- 00b06634 ["CALL", null, ["callee:008524fc:8"]]
+ 00b07628 ["INT_ADD", "register:40f0:8", ["const:b07628:8", "const:4:8"]]
+ 00b07628 ["CALL", null, ["callee:008524fc:8"]]
- 00b06648 ["INT_ADD", "register:40f0:8", ["const:b06648:8", "const:4:8"]]
- 00b06648 ["CALL", null, ["callee:005e7810:8"]]
+ 00b0763c ["INT_ADD", "register:40f0:8", ["const:b0763c:8", "const:4:8"]]
+ 00b0763c ["CALL", null, ["callee:005e7810:8"]]
- 00b06658 ["INT_ADD", "register:40f0:8", ["const:b06658:8", "const:4:8"]]
- 00b06658 ["CALL", null, ["callee:008524fc:8"]]
+ 00b0764c ["INT_ADD", "register:40f0:8", ["const:b0764c:8", "const:4:8"]]
+ 00b0764c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-11a35714c243d99d2400dee93f48b8bd"></a>

### [`00b06924`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b06/00b06924.md) → [`00b07918`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b07/00b07918.md) FUN_00b07918

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b04d18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b04/00b04d18.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)
- 新版 呼出元 1件 [`00b05d0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b05/00b05d0c.md) · 呼出先 3件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0698c ["INT_ADD", "register:40f0:8", ["const:b0698c:8", "const:4:8"]]
- 00b0698c ["CALL", null, ["callee:00c58f30:8"]]
+ 00b07980 ["INT_ADD", "register:40f0:8", ["const:b07980:8", "const:4:8"]]
+ 00b07980 ["CALL", null, ["callee:00c58f30:8"]]
- 00b069a4 ["INT_ADD", "register:40f0:8", ["const:b069a4:8", "const:4:8"]]
- 00b069a4 ["CALL", null, ["callee:00c59130:8"]]
+ 00b07998 ["INT_ADD", "register:40f0:8", ["const:b07998:8", "const:4:8"]]
+ 00b07998 ["CALL", null, ["callee:00c59130:8"]]
- 00b069d0 ["INT_ADD", "register:40f0:8", ["const:b069d0:8", "const:4:8"]]
- 00b069d0 ["CALL", null, ["callee:0043bf04:8"]]
+ 00b079c4 ["INT_ADD", "register:40f0:8", ["const:b079c4:8", "const:4:8"]]
+ 00b079c4 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-cf8a1529828024e21d182009f9cbdf3e"></a>

### [`00b0716c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b07/00b0716c.md) → [`00b08160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b08/00b08160.md) FUN_00b08160

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b04d18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b04/00b04d18.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00b07488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b07/00b07488.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00b05d0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b05/00b05d0c.md) · 呼出先 4件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00b0847c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b08/00b0847c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b071b8 ["INT_ADD", "register:40f0:8", ["const:b071b8:8", "const:4:8"]]
- 00b071b8 ["CALL", null, ["callee:0043bf04:8"]]
+ 00b081ac ["INT_ADD", "register:40f0:8", ["const:b081ac:8", "const:4:8"]]
+ 00b081ac ["CALL", null, ["callee:0043bf04:8"]]
- 00b071e8 ["INT_ADD", "register:40f0:8", ["const:b071e8:8", "const:4:8"]]
- 00b071e8 ["CALL", null, ["callee:00b0847c:8"]]
+ 00b081dc ["INT_ADD", "register:40f0:8", ["const:b081dc:8", "const:4:8"]]
+ 00b081dc ["CALL", null, ["callee:00b0847c:8"]]
- 00b071fc ["INT_ADD", "register:40f0:8", ["const:b071fc:8", "const:4:8"]]
- 00b071fc ["CALL", null, ["callee:00c58f30:8"]]
+ 00b081f0 ["INT_ADD", "register:40f0:8", ["const:b081f0:8", "const:4:8"]]
+ 00b081f0 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-aee4e4080dc9295e33ba65975db063ec"></a>

### [`00b07630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b07/00b07630.md) → [`00b08624`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b08/00b08624.md) FUN_00b08624

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00b04d18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b04/00b04d18.md) [`00b07630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b07/00b07630.md) · 呼出先 2件 [`00b07630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b07/00b07630.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`00b05d0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b05/00b05d0c.md) [`00b08624`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b08/00b08624.md) · 呼出先 2件 [`00b08624`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b08/00b08624.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b07650 ["INT_ADD", "register:40f0:8", ["const:b07650:8", "const:4:8"]]
- 00b07650 ["CALL", null, ["local:b0:8"]]
+ 00b08644 ["INT_ADD", "register:40f0:8", ["const:b08644:8", "const:4:8"]]
+ 00b08644 ["CALL", null, ["local:b0:8"]]
- 00b0765c ["INT_ADD", "register:40f0:8", ["const:b0765c:8", "const:4:8"]]
- 00b0765c ["CALL", null, ["local:b0:8"]]
+ 00b08650 ["INT_ADD", "register:40f0:8", ["const:b08650:8", "const:4:8"]]
+ 00b08650 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-4bb660b052daade021ab74bef14e69ab"></a>

### [`00b07a04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b07/00b07a04.md) → [`00b089f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b08/00b089f8.md) FUN_00b089f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0084f5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084f/0084f5a0.md) · 呼出先 2件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b07a1c ["INT_ADD", "register:40f0:8", ["const:b07a1c:8", "const:4:8"]]
- 00b07a1c ["CALL", null, ["callee:005c1b8c:8"]]
+ 00b08a10 ["INT_ADD", "register:40f0:8", ["const:b08a10:8", "const:4:8"]]
+ 00b08a10 ["CALL", null, ["callee:005c1b8c:8"]]
- 00b07a28 ["INT_ADD", "register:40f0:8", ["const:b07a28:8", "const:4:8"]]
- 00b07a28 ["CALL", null, ["callee:008524fc:8"]]
+ 00b08a1c ["INT_ADD", "register:40f0:8", ["const:b08a1c:8", "const:4:8"]]
+ 00b08a1c ["CALL", null, ["callee:008524fc:8"]]
- 00b07a34 ["INT_ADD", "register:40f0:8", ["const:b07a34:8", "const:4:8"]]
- 00b07a34 ["CALL", null, ["callee:008524fc:8"]]
+ 00b08a28 ["INT_ADD", "register:40f0:8", ["const:b08a28:8", "const:4:8"]]
+ 00b08a28 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-084bd81dd7b33566f9005182eb2c94c3"></a>

### [`00b08db8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b08/00b08db8.md) → [`00b09dac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b09/00b09dac.md) FUN_00b09dac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b08ddc ["INT_ADD", "register:40f0:8", ["const:b08ddc:8", "const:4:8"]]
- 00b08ddc ["CALL", null, ["callee:00c58f50:8"]]
+ 00b09dd0 ["INT_ADD", "register:40f0:8", ["const:b09dd0:8", "const:4:8"]]
+ 00b09dd0 ["CALL", null, ["callee:00c58f50:8"]]
- 00b08dec ["INT_ADD", "register:40f0:8", ["const:b08dec:8", "const:4:8"]]
- 00b08dec ["CALL", null, ["callee:00c58f50:8"]]
+ 00b09de0 ["INT_ADD", "register:40f0:8", ["const:b09de0:8", "const:4:8"]]
+ 00b09de0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-4075c3ec972c5221fbc15f2f05eadbb5"></a>

### [`00b08e0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b08/00b08e0c.md) → [`00b09e00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b09/00b09e00.md) FUN_00b09e00

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) [`00b3d6b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3d/00b3d6b4.md) · 呼出先 7件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b091b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b09/00b091b8.md)
- 新版 呼出元 2件 [`00a07d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07d9c.md) [`00b3e6a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3e/00b3e6a8.md) · 呼出先 7件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0049f750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f750.md) [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00b0a1ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0a/00b0a1ac.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b08e38 ["INT_ADD", "register:40f0:8", ["const:b08e38:8", "const:4:8"]]
- 00b08e38 ["CALL", null, ["callee:005c1b8c:8"]]
+ 00b09e2c ["INT_ADD", "register:40f0:8", ["const:b09e2c:8", "const:4:8"]]
+ 00b09e2c ["CALL", null, ["callee:005c1b8c:8"]]
- 00b08e48 ["INT_ADD", "register:40f0:8", ["const:b08e48:8", "const:4:8"]]
- 00b08e48 ["CALL", null, ["callee:008524fc:8"]]
+ 00b09e3c ["INT_ADD", "register:40f0:8", ["const:b09e3c:8", "const:4:8"]]
+ 00b09e3c ["CALL", null, ["callee:008524fc:8"]]
- 00b08e54 ["INT_ADD", "register:40f0:8", ["const:b08e54:8", "const:4:8"]]
- 00b08e54 ["CALL", null, ["callee:008524fc:8"]]
+ 00b09e48 ["INT_ADD", "register:40f0:8", ["const:b09e48:8", "const:4:8"]]
+ 00b09e48 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-6f75e89c5b58adc6f713b67971fbc1e8"></a>

### [`00b091b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b09/00b091b8.md) → [`00b0a1ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0a/00b0a1ac.md) FUN_00b0a1ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b08e0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b08/00b08e0c.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00b09e00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b09/00b09e00.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b091e0 ["INT_ADD", "register:40f0:8", ["const:b091e0:8", "const:4:8"]]
- 00b091e0 ["CALL", null, ["callee:008524fc:8"]]
+ 00b0a1d4 ["INT_ADD", "register:40f0:8", ["const:b0a1d4:8", "const:4:8"]]
+ 00b0a1d4 ["CALL", null, ["callee:008524fc:8"]]
- 00b091f8 ["INT_ADD", "register:40f0:8", ["const:b091f8:8", "const:4:8"]]
- 00b091f8 ["CALL", null, ["callee:008524fc:8"]]
+ 00b0a1ec ["INT_ADD", "register:40f0:8", ["const:b0a1ec:8", "const:4:8"]]
+ 00b0a1ec ["CALL", null, ["callee:008524fc:8"]]
- 00b09210 ["INT_ADD", "register:40f0:8", ["const:b09210:8", "const:4:8"]]
- 00b09210 ["CALL", null, ["callee:008524fc:8"]]
+ 00b0a204 ["INT_ADD", "register:40f0:8", ["const:b0a204:8", "const:4:8"]]
+ 00b0a204 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-602fb6e9705b27d2b203cdcef9e84819"></a>

### [`00b096a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b09/00b096a0.md) → [`00b0a694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0a/00b0a694.md) FUN_00b0a694

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) · 呼出先 2件 [`0086a7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a7fc.md) [`0086a890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a890.md)
- 新版 呼出元 1件 [`0084f5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084f/0084f5a0.md) · 呼出先 2件 [`0086b7a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b7a8.md) [`0086b83c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b83c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b096bc ["INT_ADD", "register:40f0:8", ["const:b096bc:8", "const:4:8"]]
- 00b096bc ["CALL", null, ["callee:0086b83c:8"]]
+ 00b0a6b0 ["INT_ADD", "register:40f0:8", ["const:b0a6b0:8", "const:4:8"]]
+ 00b0a6b0 ["CALL", null, ["callee:0086b83c:8"]]
- 00b096d8 ["INT_ADD", "register:40f0:8", ["const:b096d8:8", "const:4:8"]]
- 00b096d8 ["CALL", null, ["callee:0086b7a8:8"]]
+ 00b0a6cc ["INT_ADD", "register:40f0:8", ["const:b0a6cc:8", "const:4:8"]]
+ 00b0a6cc ["CALL", null, ["callee:0086b7a8:8"]]
~~~


<a id="compare-e2e641a5796934bcf908c0a4d12439a4"></a>

### [`00b097a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b09/00b097a4.md) → [`00b0a798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0a/00b0a798.md) FUN_00b0a798

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 14件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00480158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480158.md) [`004801b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/004801b8.md) [`00480218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480218.md)
- 新版 呼出元 1件 [`00a271bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a27/00a271bc.md) · 呼出先 14件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00480478`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480478.md) [`004804d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/004804d8.md) [`00480538`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480538.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b097d8 ["INT_ADD", "register:40f0:8", ["const:b097d8:8", "const:4:8"]]
- 00b097d8 ["CALL", null, ["callee:0086b83c:8"]]
+ 00b0a7cc ["INT_ADD", "register:40f0:8", ["const:b0a7cc:8", "const:4:8"]]
+ 00b0a7cc ["CALL", null, ["callee:0086b83c:8"]]
- 00b097f4 ["INT_ADD", "register:40f0:8", ["const:b097f4:8", "const:4:8"]]
- 00b097f4 ["CALL", null, ["callee:0086b7a8:8"]]
+ 00b0a7e8 ["INT_ADD", "register:40f0:8", ["const:b0a7e8:8", "const:4:8"]]
+ 00b0a7e8 ["CALL", null, ["callee:0086b7a8:8"]]
- 00b09810 ["INT_ADD", "register:40f0:8", ["const:b09810:8", "const:4:8"]]
- 00b09810 ["CALL", null, ["callee:004804d8:8"]]
+ 00b0a804 ["INT_ADD", "register:40f0:8", ["const:b0a804:8", "const:4:8"]]
+ 00b0a804 ["CALL", null, ["callee:004804d8:8"]]
~~~


<a id="compare-6dd01b3724813fdb2b455509eb6fd426"></a>

### [`00b09f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b09/00b09f48.md) → [`00b0af3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0a/00b0af3c.md) FUN_00b0af3c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 3件 [`00480b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480b78.md) [`00480bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480bd0.md) [`00480c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480c28.md)
- 新版 呼出元 1件 [`00a2c310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a2c/00a2c310.md) · 呼出先 3件 [`00480e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480e98.md) [`00480ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480ef0.md) [`00480f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480f48.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b09f74 ["INT_ADD", "register:40f0:8", ["const:b09f74:8", "const:4:8"]]
- 00b09f74 ["CALL", null, ["callee:00480ef0:8"]]
+ 00b0af68 ["INT_ADD", "register:40f0:8", ["const:b0af68:8", "const:4:8"]]
+ 00b0af68 ["CALL", null, ["callee:00480ef0:8"]]
- 00b09f90 ["INT_ADD", "register:40f0:8", ["const:b09f90:8", "const:4:8"]]
- 00b09f90 ["CALL", null, ["callee:00480ef0:8"]]
+ 00b0af84 ["INT_ADD", "register:40f0:8", ["const:b0af84:8", "const:4:8"]]
+ 00b0af84 ["CALL", null, ["callee:00480ef0:8"]]
- 00b09fc4 ["INT_ADD", "register:40f0:8", ["const:b09fc4:8", "const:4:8"]]
- 00b09fc4 ["CALL", null, ["callee:00480f48:8"]]
+ 00b0afb8 ["INT_ADD", "register:40f0:8", ["const:b0afb8:8", "const:4:8"]]
+ 00b0afb8 ["CALL", null, ["callee:00480f48:8"]]
~~~


<a id="compare-8797b6fbdff6300d8389f8ff5d40389a"></a>

### [`00b0a654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0a/00b0a654.md) → [`00b0b648`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0b/00b0b648.md) FUN_00b0b648

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00b0a124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0a/00b0a124.md) [`00b0adf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0a/00b0adf4.md) [`00b0c2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0c/00b0c2f0.md) · 呼出先 9件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md) [`00802d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802d00.md)
- 新版 呼出元 3件 [`00b0b118`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0b/00b0b118.md) [`00b0bde8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0b/00b0bde8.md) [`00b0d2e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0d/00b0d2e4.md) · 呼出先 9件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00803b14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803b14.md) [`00803c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803c64.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0a684 ["INT_ADD", "register:40f0:8", ["const:b0a684:8", "const:4:8"]]
- 00b0a684 ["CALL", null, ["callee:00803b14:8"]]
+ 00b0b678 ["INT_ADD", "register:40f0:8", ["const:b0b678:8", "const:4:8"]]
+ 00b0b678 ["CALL", null, ["callee:00803b14:8"]]
- 00b0a68c ["INT_ADD", "register:40f0:8", ["const:b0a68c:8", "const:4:8"]]
- 00b0a68c ["CALL", null, ["callee:00803c64:8"]]
+ 00b0b680 ["INT_ADD", "register:40f0:8", ["const:b0b680:8", "const:4:8"]]
+ 00b0b680 ["CALL", null, ["callee:00803c64:8"]]
- 00b0a694 ["INT_ADD", "register:40f0:8", ["const:b0a694:8", "const:4:8"]]
- 00b0a694 ["CALL", null, ["callee:00803e9c:8"]]
+ 00b0b688 ["INT_ADD", "register:40f0:8", ["const:b0b688:8", "const:4:8"]]
+ 00b0b688 ["CALL", null, ["callee:00803e9c:8"]]
~~~


<a id="compare-c0378e94c2c833914c1385d053922e02"></a>

### [`00b0a890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0a/00b0a890.md) → [`00b0b884`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0b/00b0b884.md) FUN_00b0b884

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00ae0c04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ae0/00ae0c04.md) [`00aed814`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aed/00aed814.md) · 呼出先 13件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0066242c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/0066242c.md) [`006624d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/006624d0.md) [`00662574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/00662574.md)
- 新版 呼出元 2件 [`00ae1bf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ae1/00ae1bf8.md) [`00aee808`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aee/00aee808.md) · 呼出先 13件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`006627dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00662/006627dc.md) [`00662880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00662/00662880.md) [`00662924`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00662/00662924.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0a8c0 ["INT_ADD", "register:40f0:8", ["const:b0a8c0:8", "const:4:8"]]
- 00b0a8c0 ["CALL", null, ["callee:00803b14:8"]]
+ 00b0b8b4 ["INT_ADD", "register:40f0:8", ["const:b0b8b4:8", "const:4:8"]]
+ 00b0b8b4 ["CALL", null, ["callee:00803b14:8"]]
- 00b0a8c8 ["INT_ADD", "register:40f0:8", ["const:b0a8c8:8", "const:4:8"]]
- 00b0a8c8 ["CALL", null, ["callee:00803c64:8"]]
+ 00b0b8bc ["INT_ADD", "register:40f0:8", ["const:b0b8bc:8", "const:4:8"]]
+ 00b0b8bc ["CALL", null, ["callee:00803c64:8"]]
- 00b0a8cc ["INT_ADD", "register:40f0:8", ["const:b0a8cc:8", "const:4:8"]]
- 00b0a8cc ["CALL", null, ["callee:00803e9c:8"]]
+ 00b0b8c0 ["INT_ADD", "register:40f0:8", ["const:b0b8c0:8", "const:4:8"]]
+ 00b0b8c0 ["CALL", null, ["callee:00803e9c:8"]]
~~~


<a id="compare-2e1de60154b1535e3c31ae0f702040bd"></a>

### [`00b0adb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0a/00b0adb0.md) → [`00b0bda4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0b/00b0bda4.md) FUN_00b0bda4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 8件 [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) [`00ad09c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad0/00ad09c8.md) [`00ad6af8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad6/00ad6af8.md) [`00ad6fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad6/00ad6fbc.md) [`00adf100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00adf/00adf100.md) · 呼出先 1件 [`00c58520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58520.md)
- 新版 呼出元 8件 [`005bcbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bcbbc.md) [`00ad19bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ad1/00ad19bc.md) [`00ad7aec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ad7/00ad7aec.md) [`00ad7fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ad7/00ad7fb0.md) [`00ae00f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ae0/00ae00f4.md) · 呼出先 1件 [`00c594f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c594f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0add0 ["INT_ADD", "register:40f0:8", ["const:b0add0:8", "const:4:8"]]
- 00b0add0 ["CALL", null, ["callee:00c594f0:8"]]
+ 00b0bdc4 ["INT_ADD", "register:40f0:8", ["const:b0bdc4:8", "const:4:8"]]
+ 00b0bdc4 ["CALL", null, ["callee:00c594f0:8"]]
~~~


<a id="compare-ddd58f2c81a6def83294fc82db80ed60"></a>

### [`00b0adf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0a/00b0adf4.md) → [`00b0bde8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0b/00b0bde8.md) FUN_00b0bde8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`00ad09c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad0/00ad09c8.md) · 呼出先 6件 [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md) [`00802d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802d00.md) [`00802f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802f38.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b0a654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0a/00b0a654.md)
- 新版 呼出元 2件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`00ad19bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ad1/00ad19bc.md) · 呼出先 6件 [`00803b14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803b14.md) [`00803c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803c64.md) [`00803e9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803e9c.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00b0b648`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0b/00b0b648.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0ae14 ["INT_ADD", "register:40f0:8", ["const:b0ae14:8", "const:4:8"]]
- 00b0ae14 ["CALL", null, ["callee:00803b14:8"]]
+ 00b0be08 ["INT_ADD", "register:40f0:8", ["const:b0be08:8", "const:4:8"]]
+ 00b0be08 ["CALL", null, ["callee:00803b14:8"]]
- 00b0ae1c ["INT_ADD", "register:40f0:8", ["const:b0ae1c:8", "const:4:8"]]
- 00b0ae1c ["CALL", null, ["callee:00803c64:8"]]
+ 00b0be10 ["INT_ADD", "register:40f0:8", ["const:b0be10:8", "const:4:8"]]
+ 00b0be10 ["CALL", null, ["callee:00803c64:8"]]
- 00b0ae24 ["INT_ADD", "register:40f0:8", ["const:b0ae24:8", "const:4:8"]]
- 00b0ae24 ["CALL", null, ["callee:00803e9c:8"]]
+ 00b0be18 ["INT_ADD", "register:40f0:8", ["const:b0be18:8", "const:4:8"]]
+ 00b0be18 ["CALL", null, ["callee:00803e9c:8"]]
~~~


<a id="compare-fa4702dbae4d8686fc734b471479f32c"></a>

### [`00b0af3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0a/00b0af3c.md) → [`00b0bf30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0b/00b0bf30.md) FUN_00b0bf30

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) · 呼出先 12件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md) [`00802d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802d00.md) [`00802f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802f38.md)
- 新版 呼出元 1件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) · 呼出先 12件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00803b14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803b14.md) [`00803c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803c64.md) [`00803e9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803e9c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0af84 ["INT_ADD", "register:40f0:8", ["const:b0af84:8", "const:4:8"]]
- 00b0af84 ["CALL", null, ["callee:00803b14:8"]]
+ 00b0bf78 ["INT_ADD", "register:40f0:8", ["const:b0bf78:8", "const:4:8"]]
+ 00b0bf78 ["CALL", null, ["callee:00803b14:8"]]
- 00b0af8c ["INT_ADD", "register:40f0:8", ["const:b0af8c:8", "const:4:8"]]
- 00b0af8c ["CALL", null, ["callee:00803c64:8"]]
+ 00b0bf80 ["INT_ADD", "register:40f0:8", ["const:b0bf80:8", "const:4:8"]]
+ 00b0bf80 ["CALL", null, ["callee:00803c64:8"]]
- 00b0af94 ["INT_ADD", "register:40f0:8", ["const:b0af94:8", "const:4:8"]]
- 00b0af94 ["CALL", null, ["callee:00803e9c:8"]]
+ 00b0bf88 ["INT_ADD", "register:40f0:8", ["const:b0bf88:8", "const:4:8"]]
+ 00b0bf88 ["CALL", null, ["callee:00803e9c:8"]]
~~~


<a id="compare-ec7d1b6dc8ec4a1dc0e62cc29b2831e8"></a>

### [`00b0b420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0b/00b0b420.md) → [`00b0c414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0c/00b0c414.md) FUN_00b0c414

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 8件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) [`00ad09c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad0/00ad09c8.md) [`00ad6fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad6/00ad6fbc.md) · 呼出先 5件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md) [`00802d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802d00.md) [`00802f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802f38.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 8件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`007e00a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007e0/007e00a4.md) [`00ad19bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ad1/00ad19bc.md) [`00ad7fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ad7/00ad7fb0.md) · 呼出先 5件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00803b14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803b14.md) [`00803c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803c64.md) [`00803e9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803e9c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0b458 ["INT_ADD", "register:40f0:8", ["const:b0b458:8", "const:4:8"]]
- 00b0b458 ["CALL", null, ["callee:00803b14:8"]]
+ 00b0c44c ["INT_ADD", "register:40f0:8", ["const:b0c44c:8", "const:4:8"]]
+ 00b0c44c ["CALL", null, ["callee:00803b14:8"]]
- 00b0b460 ["INT_ADD", "register:40f0:8", ["const:b0b460:8", "const:4:8"]]
- 00b0b460 ["CALL", null, ["callee:00803c64:8"]]
+ 00b0c454 ["INT_ADD", "register:40f0:8", ["const:b0c454:8", "const:4:8"]]
+ 00b0c454 ["CALL", null, ["callee:00803c64:8"]]
- 00b0b468 ["INT_ADD", "register:40f0:8", ["const:b0b468:8", "const:4:8"]]
- 00b0b468 ["CALL", null, ["callee:00803e9c:8"]]
+ 00b0c45c ["INT_ADD", "register:40f0:8", ["const:b0c45c:8", "const:4:8"]]
+ 00b0c45c ["CALL", null, ["callee:00803e9c:8"]]
~~~


<a id="compare-1f05a0921ea8565b41b0f1e85c213f1d"></a>

### [`00b0b578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0b/00b0b578.md) → [`00b0c56c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0c/00b0c56c.md) FUN_00b0c56c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00b0b6dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0b/00b0b6dc.md) [`00b0bd9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0b/00b0bd9c.md) · 呼出先 5件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md) [`00802d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802d00.md) [`00802f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802f38.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`00b0c6d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0c/00b0c6d0.md) [`00b0cd90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0c/00b0cd90.md) · 呼出先 5件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00803b14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803b14.md) [`00803c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803c64.md) [`00803e9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803e9c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0b5b4 ["INT_ADD", "register:40f0:8", ["const:b0b5b4:8", "const:4:8"]]
- 00b0b5b4 ["CALL", null, ["callee:00803b14:8"]]
+ 00b0c5a8 ["INT_ADD", "register:40f0:8", ["const:b0c5a8:8", "const:4:8"]]
+ 00b0c5a8 ["CALL", null, ["callee:00803b14:8"]]
- 00b0b5bc ["INT_ADD", "register:40f0:8", ["const:b0b5bc:8", "const:4:8"]]
- 00b0b5bc ["CALL", null, ["callee:00803c64:8"]]
+ 00b0c5b0 ["INT_ADD", "register:40f0:8", ["const:b0c5b0:8", "const:4:8"]]
+ 00b0c5b0 ["CALL", null, ["callee:00803c64:8"]]
- 00b0b5c4 ["INT_ADD", "register:40f0:8", ["const:b0b5c4:8", "const:4:8"]]
- 00b0b5c4 ["CALL", null, ["callee:00803e9c:8"]]
+ 00b0c5b8 ["INT_ADD", "register:40f0:8", ["const:b0c5b8:8", "const:4:8"]]
+ 00b0c5b8 ["CALL", null, ["callee:00803e9c:8"]]
~~~


<a id="compare-32ff00a9ca901f673dba25a6ca7b29db"></a>

### [`00b0c8b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0c/00b0c8b8.md) → [`00b0d8ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0d/00b0d8ac.md) FUN_00b0d8ac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b097a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b09/00b097a4.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00b0cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0c/00b0cac4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)
- 新版 呼出元 1件 [`00b0a798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0a/00b0a798.md) · 呼出先 5件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00b0dab8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0d/00b0dab8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0c964 ["INT_ADD", "register:40f0:8", ["const:b0c964:8", "const:4:8"]]
- 00b0c964 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b0d958 ["INT_ADD", "register:40f0:8", ["const:b0d958:8", "const:4:8"]]
+ 00b0d958 ["CALL", null, ["callee:00c58f30:8"]]
- 00b0c9a8 ["INT_ADD", "register:40f0:8", ["const:b0c9a8:8", "const:4:8"]]
- 00b0c9a8 ["CALL", null, ["callee:00c59130:8"]]
+ 00b0d99c ["INT_ADD", "register:40f0:8", ["const:b0d99c:8", "const:4:8"]]
+ 00b0d99c ["CALL", null, ["callee:00c59130:8"]]
- 00b0c9ec ["INT_ADD", "register:40f0:8", ["const:b0c9ec:8", "const:4:8"]]
- 00b0c9ec ["CALL", null, ["callee:00c59130:8"]]
+ 00b0d9e0 ["INT_ADD", "register:40f0:8", ["const:b0d9e0:8", "const:4:8"]]
+ 00b0d9e0 ["CALL", null, ["callee:00c59130:8"]]
~~~


<a id="compare-0e4f20c009504ff9bf524445d973befc"></a>

### [`00b0caec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0c/00b0caec.md) → [`00b0dae0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0d/00b0dae0.md) FUN_00b0dae0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b0af3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0a/00b0af3c.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00b0cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0c/00b0cac4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00b0bf30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0b/00b0bf30.md) · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00b0dab8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0d/00b0dab8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0cb78 ["INT_ADD", "register:40f0:8", ["const:b0cb78:8", "const:4:8"]]
- 00b0cb78 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b0db6c ["INT_ADD", "register:40f0:8", ["const:b0db6c:8", "const:4:8"]]
+ 00b0db6c ["CALL", null, ["callee:00c58f30:8"]]
- 00b0cc30 ["INT_ADD", "register:40f0:8", ["const:b0cc30:8", "const:4:8"]]
- 00b0cc30 ["CALL", null, ["callee:00c58f50:8"]]
+ 00b0dc24 ["INT_ADD", "register:40f0:8", ["const:b0dc24:8", "const:4:8"]]
+ 00b0dc24 ["CALL", null, ["callee:00c58f50:8"]]
- 00b0cc4c ["INT_ADD", "register:40f0:8", ["const:b0cc4c:8", "const:4:8"]]
- 00b0cc4c ["CALL", null, ["callee:00c58f50:8"]]
+ 00b0dc40 ["INT_ADD", "register:40f0:8", ["const:b0dc40:8", "const:4:8"]]
+ 00b0dc40 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-e07a44a024eb57245d1358300b1d66fc"></a>

### [`00b0d390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0d390.md) → [`00b0e384`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0e/00b0e384.md) FUN_00b0e384

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6ab4.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md)
- 新版 呼出元 0件  · 呼出先 3件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7a60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7a60.md) [`008b89cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b89cc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0d39c ["INT_ADD", "register:40f0:8", ["const:b0d39c:8", "const:4:8"]]
- 00b0d39c ["CALL", null, ["callee:008524fc:8"]]
+ 00b0e390 ["INT_ADD", "register:40f0:8", ["const:b0e390:8", "const:4:8"]]
+ 00b0e390 ["CALL", null, ["callee:008524fc:8"]]
- 00b0d3ac ["INT_ADD", "register:40f0:8", ["const:b0d3ac:8", "const:4:8"]]
- 00b0d3ac ["CALL", null, ["callee:008b89cc:8"]]
+ 00b0e3a0 ["INT_ADD", "register:40f0:8", ["const:b0e3a0:8", "const:4:8"]]
+ 00b0e3a0 ["CALL", null, ["callee:008b89cc:8"]]
- 00b0d3b4 ["INT_ADD", "register:40f0:8", ["const:b0d3b4:8", "const:4:8"]]
- 00b0d3b4 ["CALL", null, ["callee:008b7a60:8"]]
+ 00b0e3a8 ["INT_ADD", "register:40f0:8", ["const:b0e3a8:8", "const:4:8"]]
+ 00b0e3a8 ["CALL", null, ["callee:008b7a60:8"]]
~~~


<a id="compare-3495ef2c6691c4b82e929896c002dfbe"></a>

### [`00b0d46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0d46c.md) → [`00b0e460`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0e/00b0e460.md) FUN_00b0e460

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 13件 [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 13件 [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md) [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0d498 ["INT_ADD", "register:40f0:8", ["const:b0d498:8", "const:4:8"]]
- 00b0d498 ["CALL", null, ["callee:008ba294:8"]]
+ 00b0e48c ["INT_ADD", "register:40f0:8", ["const:b0e48c:8", "const:4:8"]]
+ 00b0e48c ["CALL", null, ["callee:008ba294:8"]]
- 00b0d4b8 ["INT_ADD", "register:40f0:8", ["const:b0d4b8:8", "const:4:8"]]
- 00b0d4b8 ["CALL", null, ["callee:008ba29c:8"]]
+ 00b0e4ac ["INT_ADD", "register:40f0:8", ["const:b0e4ac:8", "const:4:8"]]
+ 00b0e4ac ["CALL", null, ["callee:008ba29c:8"]]
- 00b0d4c4 ["INT_ADD", "register:40f0:8", ["const:b0d4c4:8", "const:4:8"]]
- 00b0d4c4 ["CALL", null, ["callee:008ba29c:8"]]
+ 00b0e4b8 ["INT_ADD", "register:40f0:8", ["const:b0e4b8:8", "const:4:8"]]
+ 00b0e4b8 ["CALL", null, ["callee:008ba29c:8"]]
~~~


<a id="compare-ed52d666ab5728b74e7ed3ae5f58c26f"></a>

### [`00b0db3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0db3c.md) → [`00b0eb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0e/00b0eb30.md) FUN_00b0eb30

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b0c2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0c/00b0c2f0.md) · 呼出先 2件 [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00b0d2e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0d/00b0d2e4.md) · 呼出先 2件 [`00494970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00494/00494970.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0dba4 ["INT_ADD", "register:40f0:8", ["const:b0dba4:8", "const:4:8"]]
- 00b0dba4 ["CALL", null, ["callee:00494970:8"]]
+ 00b0eb98 ["INT_ADD", "register:40f0:8", ["const:b0eb98:8", "const:4:8"]]
+ 00b0eb98 ["CALL", null, ["callee:00494970:8"]]
- 00b0dbe0 ["INT_ADD", "register:40f0:8", ["const:b0dbe0:8", "const:4:8"]]
- 00b0dbe0 ["CALL", null, ["callee:00c58f50:8"]]
+ 00b0ebd4 ["INT_ADD", "register:40f0:8", ["const:b0ebd4:8", "const:4:8"]]
+ 00b0ebd4 ["CALL", null, ["callee:00c58f50:8"]]
- 00b0dbf0 ["INT_ADD", "register:40f0:8", ["const:b0dbf0:8", "const:4:8"]]
- 00b0dbf0 ["CALL", null, ["callee:00c58f50:8"]]
+ 00b0ebe4 ["INT_ADD", "register:40f0:8", ["const:b0ebe4:8", "const:4:8"]]
+ 00b0ebe4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-2338f2ed345632593126471ea5087b6e"></a>

### [`00b0ee58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0e/00b0ee58.md) → [`00b0fe4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0f/00b0fe4c.md) FUN_00b0fe4c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a1a7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a7a4.md) · 呼出先 2件 [`00480338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480338.md) [`00480430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480430.md)
- 新版 呼出元 1件 [`00a1b750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a1b/00a1b750.md) · 呼出先 2件 [`00480658`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480658.md) [`00480750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480750.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0ee78 ["INT_ADD", "register:40f0:8", ["const:b0ee78:8", "const:4:8"]]
- 00b0ee78 ["CALL", null, ["callee:00480750:8"]]
+ 00b0fe6c ["INT_ADD", "register:40f0:8", ["const:b0fe6c:8", "const:4:8"]]
+ 00b0fe6c ["CALL", null, ["callee:00480750:8"]]
- 00b0ee84 ["INT_ADD", "register:40f0:8", ["const:b0ee84:8", "const:4:8"]]
- 00b0ee84 ["CALL", null, ["callee:00480750:8"]]
+ 00b0fe78 ["INT_ADD", "register:40f0:8", ["const:b0fe78:8", "const:4:8"]]
+ 00b0fe78 ["CALL", null, ["callee:00480750:8"]]
- 00b0ee90 ["INT_ADD", "register:40f0:8", ["const:b0ee90:8", "const:4:8"]]
- 00b0ee90 ["CALL", null, ["callee:00480750:8"]]
+ 00b0fe84 ["INT_ADD", "register:40f0:8", ["const:b0fe84:8", "const:4:8"]]
+ 00b0fe84 ["CALL", null, ["callee:00480750:8"]]
~~~


<a id="compare-aaf01fda677c64803d61a332063ebc58"></a>

### [`00b0ef78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0e/00b0ef78.md) → [`00b0ff6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0f/00b0ff6c.md) FUN_00b0ff6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a22424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a22/00a22424.md) · 呼出先 2件 [`00480d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480d88.md) [`00480e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480e68.md)
- 新版 呼出元 1件 [`00a233d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a23/00a233d0.md) · 呼出先 2件 [`004810a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/004810a8.md) [`00481188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/00481188.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0ef98 ["INT_ADD", "register:40f0:8", ["const:b0ef98:8", "const:4:8"]]
- 00b0ef98 ["CALL", null, ["callee:00481188:8"]]
+ 00b0ff8c ["INT_ADD", "register:40f0:8", ["const:b0ff8c:8", "const:4:8"]]
+ 00b0ff8c ["CALL", null, ["callee:00481188:8"]]
- 00b0efa4 ["INT_ADD", "register:40f0:8", ["const:b0efa4:8", "const:4:8"]]
- 00b0efa4 ["CALL", null, ["callee:00481188:8"]]
+ 00b0ff98 ["INT_ADD", "register:40f0:8", ["const:b0ff98:8", "const:4:8"]]
+ 00b0ff98 ["CALL", null, ["callee:00481188:8"]]
- 00b0efb0 ["INT_ADD", "register:40f0:8", ["const:b0efb0:8", "const:4:8"]]
- 00b0efb0 ["CALL", null, ["callee:00481188:8"]]
+ 00b0ffa4 ["INT_ADD", "register:40f0:8", ["const:b0ffa4:8", "const:4:8"]]
+ 00b0ffa4 ["CALL", null, ["callee:00481188:8"]]
~~~


<a id="compare-96da3635737250864a4da2f76fa2ab5b"></a>

### [`00b0f03c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0f/00b0f03c.md) → [`00b10030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b10/00b10030.md) FUN_00b10030

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a1a7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a7a4.md) · 呼出先 1件 [`00480430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480430.md)
- 新版 呼出元 1件 [`00a1b750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a1b/00a1b750.md) · 呼出先 1件 [`00480750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480750.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0f054 ["INT_ADD", "register:40f0:8", ["const:b0f054:8", "const:4:8"]]
- 00b0f054 ["CALL", null, ["callee:00480750:8"]]
+ 00b10048 ["INT_ADD", "register:40f0:8", ["const:b10048:8", "const:4:8"]]
+ 00b10048 ["CALL", null, ["callee:00480750:8"]]
- 00b0f060 ["INT_ADD", "register:40f0:8", ["const:b0f060:8", "const:4:8"]]
- 00b0f060 ["CALL", null, ["callee:00480750:8"]]
+ 00b10054 ["INT_ADD", "register:40f0:8", ["const:b10054:8", "const:4:8"]]
+ 00b10054 ["CALL", null, ["callee:00480750:8"]]
~~~


<a id="compare-39cd4c0daecf395ac38b36240a033468"></a>

### [`00b0f074`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0f/00b0f074.md) → [`00b10068`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b10/00b10068.md) FUN_00b10068

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a22424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a22/00a22424.md) · 呼出先 1件 [`00480e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480e68.md)
- 新版 呼出元 1件 [`00a233d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a23/00a233d0.md) · 呼出先 1件 [`00481188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/00481188.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0f094 ["INT_ADD", "register:40f0:8", ["const:b0f094:8", "const:4:8"]]
- 00b0f094 ["CALL", null, ["callee:00481188:8"]]
+ 00b10088 ["INT_ADD", "register:40f0:8", ["const:b10088:8", "const:4:8"]]
+ 00b10088 ["CALL", null, ["callee:00481188:8"]]
~~~


<a id="compare-75006b00e053bce1a63fae24b1a16e79"></a>

### [`00b0f4a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0f/00b0f4a8.md) → [`00b1049c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b10/00b1049c.md) FUN_00b1049c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00b0f690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0f/00b0f690.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00b10dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b10/00b10dd0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`00b10684`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b10/00b10684.md) · 呼出先 7件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00b11dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b11/00b11dc4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0f4e8 ["INT_ADD", "register:40f0:8", ["const:b0f4e8:8", "const:4:8"]]
- 00b0f4e8 ["CALL", null, ["callee:00487c9c:8"]]
+ 00b104dc ["INT_ADD", "register:40f0:8", ["const:b104dc:8", "const:4:8"]]
+ 00b104dc ["CALL", null, ["callee:00487c9c:8"]]
- 00b0f4f8 ["INT_ADD", "register:40f0:8", ["const:b0f4f8:8", "const:4:8"]]
- 00b0f4f8 ["CALL", null, ["callee:00487c9c:8"]]
+ 00b104ec ["INT_ADD", "register:40f0:8", ["const:b104ec:8", "const:4:8"]]
+ 00b104ec ["CALL", null, ["callee:00487c9c:8"]]
- 00b0f520 ["INT_ADD", "register:40f0:8", ["const:b0f520:8", "const:4:8"]]
- 00b0f520 ["CALL", null, ["callee:00487c7c:8"]]
+ 00b10514 ["INT_ADD", "register:40f0:8", ["const:b10514:8", "const:4:8"]]
+ 00b10514 ["CALL", null, ["callee:00487c7c:8"]]
~~~


<a id="compare-36b57b00682afc62709ece09337f2621"></a>

### [`00b1ef20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1e/00b1ef20.md) → [`00b1ff14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b1f/00b1ff14.md) FUN_00b1ff14

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b1e124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1e/00b1e124.md) · 呼出先 3件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00b1f118`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b1f/00b1f118.md) · 呼出先 3件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b1ef80 ["INT_ADD", "register:40f0:8", ["const:b1ef80:8", "const:4:8"]]
- 00b1ef80 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b1ff74 ["INT_ADD", "register:40f0:8", ["const:b1ff74:8", "const:4:8"]]
+ 00b1ff74 ["CALL", null, ["callee:00c58f30:8"]]
- 00b1efd8 ["INT_ADD", "register:40f0:8", ["const:b1efd8:8", "const:4:8"]]
- 00b1efd8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00b1ffcc ["INT_ADD", "register:40f0:8", ["const:b1ffcc:8", "const:4:8"]]
+ 00b1ffcc ["CALL", null, ["callee:00c58f50:8"]]
- 00b1f010 ["INT_ADD", "register:40f0:8", ["const:b1f010:8", "const:4:8"]]
- 00b1f010 ["CALL", null, ["callee:00441220:8"]]
+ 00b20004 ["INT_ADD", "register:40f0:8", ["const:b20004:8", "const:4:8"]]
+ 00b20004 ["CALL", null, ["callee:00441220:8"]]
~~~


<a id="compare-d0798962b08bf0b4af21d309fb0a211a"></a>

### [`00b28ea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ea8.md) → [`00b29e9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29e9c.md) FUN_00b29e9c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)
- 新版 呼出元 1件 [`00b204b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b20/00b204b8.md) · 呼出先 1件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b28f04 ["INT_ADD", "register:40f0:8", ["const:b28f04:8", "const:4:8"]]
- 00b28f04 ["CALL", null, ["callee:0043be80:8"]]
+ 00b29ef8 ["INT_ADD", "register:40f0:8", ["const:b29ef8:8", "const:4:8"]]
+ 00b29ef8 ["CALL", null, ["callee:0043be80:8"]]
- 00b28f2c ["INT_ADD", "register:40f0:8", ["const:b28f2c:8", "const:4:8"]]
- 00b28f2c ["CALL", null, ["callee:0043be80:8"]]
+ 00b29f20 ["INT_ADD", "register:40f0:8", ["const:b29f20:8", "const:4:8"]]
+ 00b29f20 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-eda85202158f203aa9187a59b95d845a"></a>

### [`00b28f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28f8c.md) → [`00b29f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29f80.md) FUN_00b29f80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b28fc8 ["INT_ADD", "register:40f0:8", ["const:b28fc8:8", "const:4:8"]]
- 00b28fc8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00b29fbc ["INT_ADD", "register:40f0:8", ["const:b29fbc:8", "const:4:8"]]
+ 00b29fbc ["CALL", null, ["callee:00c58f50:8"]]
- 00b28fd8 ["INT_ADD", "register:40f0:8", ["const:b28fd8:8", "const:4:8"]]
- 00b28fd8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00b29fcc ["INT_ADD", "register:40f0:8", ["const:b29fcc:8", "const:4:8"]]
+ 00b29fcc ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-bf0ff839bf5bb6c43ba5862ec02bc959"></a>

### [`00b29d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b29/00b29d74.md) → [`00b2ad68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2a/00b2ad68.md) FUN_00b2ad68

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b13398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b13/00b13398.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00b29f08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b29/00b29f08.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00b1438c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b14/00b1438c.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00b2aefc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2a/00b2aefc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b29e1c ["INT_ADD", "register:40f0:8", ["const:b29e1c:8", "const:4:8"]]
- 00b29e1c ["CALL", null, ["callee:00c58f30:8"]]
+ 00b2ae10 ["INT_ADD", "register:40f0:8", ["const:b2ae10:8", "const:4:8"]]
+ 00b2ae10 ["CALL", null, ["callee:00c58f30:8"]]
- 00b29e5c ["INT_ADD", "register:40f0:8", ["const:b29e5c:8", "const:4:8"]]
- 00b29e5c ["CALL", null, ["callee:00c59130:8"]]
+ 00b2ae50 ["INT_ADD", "register:40f0:8", ["const:b2ae50:8", "const:4:8"]]
+ 00b2ae50 ["CALL", null, ["callee:00c59130:8"]]
- 00b29ea0 ["INT_ADD", "register:40f0:8", ["const:b29ea0:8", "const:4:8"]]
- 00b29ea0 ["CALL", null, ["callee:00c59130:8"]]
+ 00b2ae94 ["INT_ADD", "register:40f0:8", ["const:b2ae94:8", "const:4:8"]]
+ 00b2ae94 ["CALL", null, ["callee:00c59130:8"]]
~~~


<a id="compare-70f47df4e34777bd59e4672f455470e0"></a>

### [`00b29f1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b29/00b29f1c.md) → [`00b2af10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2a/00b2af10.md) FUN_00b2af10

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b13398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b13/00b13398.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00b2a0ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a0ac.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00b1438c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b14/00b1438c.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00b2b0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2b0a0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b29fc0 ["INT_ADD", "register:40f0:8", ["const:b29fc0:8", "const:4:8"]]
- 00b29fc0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b2afb4 ["INT_ADD", "register:40f0:8", ["const:b2afb4:8", "const:4:8"]]
+ 00b2afb4 ["CALL", null, ["callee:00c58f30:8"]]
- 00b2a000 ["INT_ADD", "register:40f0:8", ["const:b2a000:8", "const:4:8"]]
- 00b2a000 ["CALL", null, ["callee:00c59130:8"]]
+ 00b2aff4 ["INT_ADD", "register:40f0:8", ["const:b2aff4:8", "const:4:8"]]
+ 00b2aff4 ["CALL", null, ["callee:00c59130:8"]]
- 00b2a04c ["INT_ADD", "register:40f0:8", ["const:b2a04c:8", "const:4:8"]]
- 00b2a04c ["CALL", null, ["callee:00c59130:8"]]
+ 00b2b040 ["INT_ADD", "register:40f0:8", ["const:b2b040:8", "const:4:8"]]
+ 00b2b040 ["CALL", null, ["callee:00c59130:8"]]
~~~


<a id="compare-4c017741ba63abb85fada54dc4451409"></a>

### [`00b2a0c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a0c0.md) → [`00b2b0b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2b0b4.md) FUN_00b2b0b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b13398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b13/00b13398.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00b2a1ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a1ec.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00b1438c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b14/00b1438c.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00b2b1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2b1e0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2a138 ["INT_ADD", "register:40f0:8", ["const:b2a138:8", "const:4:8"]]
- 00b2a138 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b2b12c ["INT_ADD", "register:40f0:8", ["const:b2b12c:8", "const:4:8"]]
+ 00b2b12c ["CALL", null, ["callee:00c58f30:8"]]
- 00b2a15c ["INT_ADD", "register:40f0:8", ["const:b2a15c:8", "const:4:8"]]
- 00b2a15c ["CALL", null, ["callee:00c59130:8"]]
+ 00b2b150 ["INT_ADD", "register:40f0:8", ["const:b2b150:8", "const:4:8"]]
+ 00b2b150 ["CALL", null, ["callee:00c59130:8"]]
- 00b2a188 ["INT_ADD", "register:40f0:8", ["const:b2a188:8", "const:4:8"]]
- 00b2a188 ["CALL", null, ["callee:00c59130:8"]]
+ 00b2b17c ["INT_ADD", "register:40f0:8", ["const:b2b17c:8", "const:4:8"]]
+ 00b2b17c ["CALL", null, ["callee:00c59130:8"]]
~~~


<a id="compare-0a01c91dc04c70c39537974787b83dc5"></a>

### [`00b2a200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a200.md) → [`00b2b1f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2b1f4.md) FUN_00b2b1f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b13398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b13/00b13398.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00b2a394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a394.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00b1438c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b14/00b1438c.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00b2b388`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2b388.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2a2a8 ["INT_ADD", "register:40f0:8", ["const:b2a2a8:8", "const:4:8"]]
- 00b2a2a8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b2b29c ["INT_ADD", "register:40f0:8", ["const:b2b29c:8", "const:4:8"]]
+ 00b2b29c ["CALL", null, ["callee:00c58f30:8"]]
- 00b2a2e8 ["INT_ADD", "register:40f0:8", ["const:b2a2e8:8", "const:4:8"]]
- 00b2a2e8 ["CALL", null, ["callee:00c59130:8"]]
+ 00b2b2dc ["INT_ADD", "register:40f0:8", ["const:b2b2dc:8", "const:4:8"]]
+ 00b2b2dc ["CALL", null, ["callee:00c59130:8"]]
- 00b2a32c ["INT_ADD", "register:40f0:8", ["const:b2a32c:8", "const:4:8"]]
- 00b2a32c ["CALL", null, ["callee:00c59130:8"]]
+ 00b2b320 ["INT_ADD", "register:40f0:8", ["const:b2b320:8", "const:4:8"]]
+ 00b2b320 ["CALL", null, ["callee:00c59130:8"]]
~~~


<a id="compare-e3c29f9d9785ffcf42bbecf2f1ac5daf"></a>

### [`00b2a3a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a3a8.md) → [`00b2b39c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2b39c.md) FUN_00b2b39c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b13398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b13/00b13398.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00b2a538`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a538.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00b1438c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b14/00b1438c.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00b2b52c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2b52c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2a44c ["INT_ADD", "register:40f0:8", ["const:b2a44c:8", "const:4:8"]]
- 00b2a44c ["CALL", null, ["callee:00c58f30:8"]]
+ 00b2b440 ["INT_ADD", "register:40f0:8", ["const:b2b440:8", "const:4:8"]]
+ 00b2b440 ["CALL", null, ["callee:00c58f30:8"]]
- 00b2a48c ["INT_ADD", "register:40f0:8", ["const:b2a48c:8", "const:4:8"]]
- 00b2a48c ["CALL", null, ["callee:00c59130:8"]]
+ 00b2b480 ["INT_ADD", "register:40f0:8", ["const:b2b480:8", "const:4:8"]]
+ 00b2b480 ["CALL", null, ["callee:00c59130:8"]]
- 00b2a4d8 ["INT_ADD", "register:40f0:8", ["const:b2a4d8:8", "const:4:8"]]
- 00b2a4d8 ["CALL", null, ["callee:00c59130:8"]]
+ 00b2b4cc ["INT_ADD", "register:40f0:8", ["const:b2b4cc:8", "const:4:8"]]
+ 00b2b4cc ["CALL", null, ["callee:00c59130:8"]]
~~~


<a id="compare-3b75d79a8602ca85d9664a1ecf78ad78"></a>

### [`00b2a560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a560.md) → [`00b2b554`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2b554.md) FUN_00b2b554

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b13398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b13/00b13398.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00b2a68c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a68c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00b1438c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b14/00b1438c.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00b2b680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2b680.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2a5d8 ["INT_ADD", "register:40f0:8", ["const:b2a5d8:8", "const:4:8"]]
- 00b2a5d8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b2b5cc ["INT_ADD", "register:40f0:8", ["const:b2b5cc:8", "const:4:8"]]
+ 00b2b5cc ["CALL", null, ["callee:00c58f30:8"]]
- 00b2a5fc ["INT_ADD", "register:40f0:8", ["const:b2a5fc:8", "const:4:8"]]
- 00b2a5fc ["CALL", null, ["callee:00c59130:8"]]
+ 00b2b5f0 ["INT_ADD", "register:40f0:8", ["const:b2b5f0:8", "const:4:8"]]
+ 00b2b5f0 ["CALL", null, ["callee:00c59130:8"]]
- 00b2a628 ["INT_ADD", "register:40f0:8", ["const:b2a628:8", "const:4:8"]]
- 00b2a628 ["CALL", null, ["callee:00c59130:8"]]
+ 00b2b61c ["INT_ADD", "register:40f0:8", ["const:b2b61c:8", "const:4:8"]]
+ 00b2b61c ["CALL", null, ["callee:00c59130:8"]]
~~~


<a id="compare-b62c59517727b8f12b017f3818fdc8f8"></a>

### [`00b2a8d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a8d8.md) → [`00b2b8cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2b8cc.md) FUN_00b2b8cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00b2ab4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2ab4c.md) [`00b2ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2ab60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00b204b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b20/00b204b8.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00b2bb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2bb40.md) [`00b2bb54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2bb54.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2a978 ["INT_ADD", "register:40f0:8", ["const:b2a978:8", "const:4:8"]]
- 00b2a978 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b2b96c ["INT_ADD", "register:40f0:8", ["const:b2b96c:8", "const:4:8"]]
+ 00b2b96c ["CALL", null, ["callee:00c58f30:8"]]
- 00b2aa08 ["INT_ADD", "register:40f0:8", ["const:b2aa08:8", "const:4:8"]]
- 00b2aa08 ["CALL", null, ["callee:00b2bb54:8"]]
+ 00b2b9fc ["INT_ADD", "register:40f0:8", ["const:b2b9fc:8", "const:4:8"]]
+ 00b2b9fc ["CALL", null, ["callee:00b2bb54:8"]]
- 00b2aa24 ["INT_ADD", "register:40f0:8", ["const:b2aa24:8", "const:4:8"]]
- 00b2aa24 ["CALL", null, ["callee:00c58f50:8"]]
+ 00b2ba18 ["INT_ADD", "register:40f0:8", ["const:b2ba18:8", "const:4:8"]]
+ 00b2ba18 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-8e635dc52b3c69c0833f4bdc3e5770f6"></a>

### [`00b2aaac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2aaac.md) → [`00b2baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2baa0.md) FUN_00b2baa0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2aafc ["INT_ADD", "register:40f0:8", ["const:b2aafc:8", "const:4:8"]]
- 00b2aafc ["CALL", null, ["callee:00c58f50:8"]]
+ 00b2baf0 ["INT_ADD", "register:40f0:8", ["const:b2baf0:8", "const:4:8"]]
+ 00b2baf0 ["CALL", null, ["callee:00c58f50:8"]]
- 00b2ab0c ["INT_ADD", "register:40f0:8", ["const:b2ab0c:8", "const:4:8"]]
- 00b2ab0c ["CALL", null, ["callee:00c58f50:8"]]
+ 00b2bb00 ["INT_ADD", "register:40f0:8", ["const:b2bb00:8", "const:4:8"]]
+ 00b2bb00 ["CALL", null, ["callee:00c58f50:8"]]
- 00b2ab1c ["INT_ADD", "register:40f0:8", ["const:b2ab1c:8", "const:4:8"]]
- 00b2ab1c ["CALL", null, ["callee:00c58f50:8"]]
+ 00b2bb10 ["INT_ADD", "register:40f0:8", ["const:b2bb10:8", "const:4:8"]]
+ 00b2bb10 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-2ad006efc998a3983f1ee301b1a1ebd6"></a>

### [`00b2ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2ab60.md) → [`00b2bb54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2bb54.md) FUN_00b2bb54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b2a8d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a8d8.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00b2b8cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2b8cc.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2ac20 ["INT_ADD", "register:40f0:8", ["const:b2ac20:8", "const:4:8"]]
- 00b2ac20 ["CALL", null, ["callee:00c58f50:8"]]
+ 00b2bc14 ["INT_ADD", "register:40f0:8", ["const:b2bc14:8", "const:4:8"]]
+ 00b2bc14 ["CALL", null, ["callee:00c58f50:8"]]
- 00b2ac30 ["INT_ADD", "register:40f0:8", ["const:b2ac30:8", "const:4:8"]]
- 00b2ac30 ["CALL", null, ["callee:00c58f50:8"]]
+ 00b2bc24 ["INT_ADD", "register:40f0:8", ["const:b2bc24:8", "const:4:8"]]
+ 00b2bc24 ["CALL", null, ["callee:00c58f50:8"]]
- 00b2ac40 ["INT_ADD", "register:40f0:8", ["const:b2ac40:8", "const:4:8"]]
- 00b2ac40 ["CALL", null, ["callee:00c58f50:8"]]
+ 00b2bc34 ["INT_ADD", "register:40f0:8", ["const:b2bc34:8", "const:4:8"]]
+ 00b2bc34 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-61984b2fe7d326323bb9438384c85be4"></a>

### [`00b2ac68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2ac68.md) → [`00b2bc5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2bc5c.md) FUN_00b2bc5c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0054079c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/0054079c.md) [`00794bc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00794/00794bc4.md) [`0080dab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080d/0080dab4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`00b204b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b20/00b204b8.md) · 呼出先 7件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00540abc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00540/00540abc.md) [`00794fa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00794/00794fa0.md) [`0080ea18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0080e/0080ea18.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2ad0c ["INT_ADD", "register:40f0:8", ["const:b2ad0c:8", "const:4:8"]]
- 00b2ad0c ["CALL", null, ["callee:00c58f30:8"]]
+ 00b2bd00 ["INT_ADD", "register:40f0:8", ["const:b2bd00:8", "const:4:8"]]
+ 00b2bd00 ["CALL", null, ["callee:00c58f30:8"]]
- 00b2ad54 ["INT_ADD", "register:40f0:8", ["const:b2ad54:8", "const:4:8"]]
- 00b2ad54 ["CALL", null, ["callee:00540abc:8"]]
+ 00b2bd48 ["INT_ADD", "register:40f0:8", ["const:b2bd48:8", "const:4:8"]]
+ 00b2bd48 ["CALL", null, ["callee:00540abc:8"]]
- 00b2ad6c ["INT_ADD", "register:40f0:8", ["const:b2ad6c:8", "const:4:8"]]
- 00b2ad6c ["CALL", null, ["callee:0080ea18:8"]]
+ 00b2bd60 ["INT_ADD", "register:40f0:8", ["const:b2bd60:8", "const:4:8"]]
+ 00b2bd60 ["CALL", null, ["callee:0080ea18:8"]]
~~~


<a id="compare-7f96e75184d0128b30b36ca697f1131a"></a>

### [`00b2ae78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2ae78.md) → [`00b2be6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2be6c.md) FUN_00b2be6c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`005e81d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e81d8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00b204b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b20/00b204b8.md) · 呼出先 4件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`005e8588`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e8/005e8588.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2aef8 ["INT_ADD", "register:40f0:8", ["const:b2aef8:8", "const:4:8"]]
- 00b2aef8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b2beec ["INT_ADD", "register:40f0:8", ["const:b2beec:8", "const:4:8"]]
+ 00b2beec ["CALL", null, ["callee:00c58f30:8"]]
- 00b2af2c ["INT_ADD", "register:40f0:8", ["const:b2af2c:8", "const:4:8"]]
- 00b2af2c ["CALL", null, ["callee:005e8588:8"]]
+ 00b2bf20 ["INT_ADD", "register:40f0:8", ["const:b2bf20:8", "const:4:8"]]
+ 00b2bf20 ["CALL", null, ["callee:005e8588:8"]]
- 00b2af38 ["INT_ADD", "register:40f0:8", ["const:b2af38:8", "const:4:8"]]
- 00b2af38 ["CALL", null, ["callee:005e8588:8"]]
+ 00b2bf2c ["INT_ADD", "register:40f0:8", ["const:b2bf2c:8", "const:4:8"]]
+ 00b2bf2c ["CALL", null, ["callee:005e8588:8"]]
~~~


<a id="compare-f215b377595c7f80e468779dd21e401a"></a>

### [`00b2afe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2afe4.md) → [`00b2bfd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2bfd8.md) FUN_00b2bfd8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 6件 [`00615f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00615/00615f0c.md) [`00652500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652500.md) [`0065258c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/0065258c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`00b204b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b20/00b204b8.md) · 呼出先 6件 [`006162bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00616/006162bc.md) [`006528b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00652/006528b0.md) [`0065293c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00652/0065293c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2b05c ["INT_ADD", "register:40f0:8", ["const:b2b05c:8", "const:4:8"]]
- 00b2b05c ["CALL", null, ["callee:00c58f30:8"]]
+ 00b2c050 ["INT_ADD", "register:40f0:8", ["const:b2c050:8", "const:4:8"]]
+ 00b2c050 ["CALL", null, ["callee:00c58f30:8"]]
- 00b2b080 ["INT_ADD", "register:40f0:8", ["const:b2b080:8", "const:4:8"]]
- 00b2b080 ["CALL", null, ["callee:0065293c:8"]]
+ 00b2c074 ["INT_ADD", "register:40f0:8", ["const:b2c074:8", "const:4:8"]]
+ 00b2c074 ["CALL", null, ["callee:0065293c:8"]]
- 00b2b0d0 ["INT_ADD", "register:40f0:8", ["const:b2b0d0:8", "const:4:8"]]
- 00b2b0d0 ["CALL", null, ["callee:006162bc:8"]]
+ 00b2c0c4 ["INT_ADD", "register:40f0:8", ["const:b2c0c4:8", "const:4:8"]]
+ 00b2c0c4 ["CALL", null, ["callee:006162bc:8"]]
~~~


<a id="compare-00b95fecfd788ddf47a8092fa0236c43"></a>

### [`00b2b390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2b/00b2b390.md) → [`00b2c384`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2c/00b2c384.md) FUN_00b2c384

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b2b10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2b/00b2b10c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00b2c100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2c/00b2c100.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2b40c ["INT_ADD", "register:40f0:8", ["const:b2b40c:8", "const:4:8"]]
- 00b2b40c ["CALL", null, ["callee:00c58f50:8"]]
+ 00b2c400 ["INT_ADD", "register:40f0:8", ["const:b2c400:8", "const:4:8"]]
+ 00b2c400 ["CALL", null, ["callee:00c58f50:8"]]
- 00b2b454 ["INT_ADD", "register:40f0:8", ["const:b2b454:8", "const:4:8"]]
- 00b2b454 ["CALL", null, ["callee:00c58f50:8"]]
+ 00b2c448 ["INT_ADD", "register:40f0:8", ["const:b2c448:8", "const:4:8"]]
+ 00b2c448 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-719ad4ef92bcb68a769a6073d51dec92"></a>

### [`00b2b4ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2b/00b2b4ac.md) → [`00b2c4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2c/00b2c4a0.md) FUN_00b2c4a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b2b10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2b/00b2b10c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00b2c100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2c/00b2c100.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2b4e0 ["INT_ADD", "register:40f0:8", ["const:b2b4e0:8", "const:4:8"]]
- 00b2b4e0 ["CALL", null, ["callee:00c58f50:8"]]
+ 00b2c4d4 ["INT_ADD", "register:40f0:8", ["const:b2c4d4:8", "const:4:8"]]
+ 00b2c4d4 ["CALL", null, ["callee:00c58f50:8"]]
- 00b2b530 ["INT_ADD", "register:40f0:8", ["const:b2b530:8", "const:4:8"]]
- 00b2b530 ["CALL", null, ["callee:00c58f50:8"]]
+ 00b2c524 ["INT_ADD", "register:40f0:8", ["const:b2c524:8", "const:4:8"]]
+ 00b2c524 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-e118a6c37d7b065641867366382c0513"></a>

### [`00b2bc68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2b/00b2bc68.md) → [`00b2cc5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2c/00b2cc5c.md) FUN_00b2cc5c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0043b5e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b5e8.md) [`0043b698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b698.md) · 呼出先 4件 [`0046cae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cae4.md) [`0046cafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cafc.md) [`0046cb08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cb08.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0043b908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b908.md) [`0043b9b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b9b8.md) · 呼出先 4件 [`0046ce04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046ce04.md) [`0046ce1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046ce1c.md) [`0046ce28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046ce28.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2bc78 ["INT_ADD", "register:40f0:8", ["const:b2bc78:8", "const:4:8"]]
- 00b2bc78 ["CALL", null, ["callee:008524fc:8"]]
+ 00b2cc6c ["INT_ADD", "register:40f0:8", ["const:b2cc6c:8", "const:4:8"]]
+ 00b2cc6c ["CALL", null, ["callee:008524fc:8"]]
- 00b2bc80 ["INT_ADD", "register:40f0:8", ["const:b2bc80:8", "const:4:8"]]
- 00b2bc80 ["CALL", null, ["callee:0046ce1c:8"]]
+ 00b2cc74 ["INT_ADD", "register:40f0:8", ["const:b2cc74:8", "const:4:8"]]
+ 00b2cc74 ["CALL", null, ["callee:0046ce1c:8"]]
- 00b2bc88 ["INT_ADD", "register:40f0:8", ["const:b2bc88:8", "const:4:8"]]
- 00b2bc88 ["CALL", null, ["callee:008524fc:8"]]
+ 00b2cc7c ["INT_ADD", "register:40f0:8", ["const:b2cc7c:8", "const:4:8"]]
+ 00b2cc7c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-d4dbf30d5439e10af9fd2ff7fe113250"></a>

### [`00b2bcd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2b/00b2bcd0.md) → [`00b2ccc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2c/00b2ccc4.md) FUN_00b2ccc4

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0043b468`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b468.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0043b788`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b788.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2bce0 ["INT_ADD", "register:40f0:8", ["const:b2bce0:8", "const:4:8"]]
- 00b2bce0 ["CALL", null, ["callee:008524fc:8"]]
+ 00b2ccd4 ["INT_ADD", "register:40f0:8", ["const:b2ccd4:8", "const:4:8"]]
+ 00b2ccd4 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-40aba7a59dedbc1c0280da9a15a0db91"></a>

### [`00b2d2f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d2f8.md) → [`00b2e2ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2e/00b2e2ec.md) FUN_00b2e2ec

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0043b3a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b3a8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0043b6c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b6c8.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2d314 ["INT_ADD", "register:40f0:8", ["const:b2d314:8", "const:4:8"]]
- 00b2d314 ["CALL", null, ["callee:008524fc:8"]]
+ 00b2e308 ["INT_ADD", "register:40f0:8", ["const:b2e308:8", "const:4:8"]]
+ 00b2e308 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-c14a0083130bc9c4adc82d38058ab14d"></a>

### [`00b2d340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d340.md) → [`00b2e334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2e/00b2e334.md) FUN_00b2e334

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0043b3a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b3a8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0043b6c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b6c8.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2d35c ["INT_ADD", "register:40f0:8", ["const:b2d35c:8", "const:4:8"]]
- 00b2d35c ["CALL", null, ["callee:008524fc:8"]]
+ 00b2e350 ["INT_ADD", "register:40f0:8", ["const:b2e350:8", "const:4:8"]]
+ 00b2e350 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-105b9af2a45ac5c7369f05ca9e089329"></a>

### [`00b2d4b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d4b0.md) → [`00b2e4a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2e/00b2e4a4.md) FUN_00b2e4a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2d4b8 ["INT_ADD", "register:40f0:8", ["const:b2d4b8:8", "const:4:8"]]
- 00b2d4b8 ["CALL", null, ["callee:008524fc:8"]]
+ 00b2e4ac ["INT_ADD", "register:40f0:8", ["const:b2e4ac:8", "const:4:8"]]
+ 00b2e4ac ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-987ea05f2fa1d2d37c5f5298abe5c74c"></a>

### [`00b2d534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d534.md) → [`00b2e528`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2e/00b2e528.md) FUN_00b2e528

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2d53c ["INT_ADD", "register:40f0:8", ["const:b2d53c:8", "const:4:8"]]
- 00b2d53c ["CALL", null, ["callee:008524fc:8"]]
+ 00b2e530 ["INT_ADD", "register:40f0:8", ["const:b2e530:8", "const:4:8"]]
+ 00b2e530 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-794801be93f3f4b00cc654c2c87568e2"></a>

### [`00b2d8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d8c0.md) → [`00b2e8b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2e/00b2e8b4.md) FUN_00b2e8b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b2c4ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2c/00b2c4ec.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00b2d4e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2d/00b2d4e0.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2d8e0 ["INT_ADD", "register:40f0:8", ["const:b2d8e0:8", "const:4:8"]]
- 00b2d8e0 ["CALL", null, ["callee:00c58f50:8"]]
+ 00b2e8d4 ["INT_ADD", "register:40f0:8", ["const:b2e8d4:8", "const:4:8"]]
+ 00b2e8d4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-e01185930f6aabac818edcc28f672dba"></a>

### [`00b2f88c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2f88c.md) → [`00b30880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b30880.md) FUN_00b30880

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 18件 [`0060a8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060a/0060a8e0.md) [`00664b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664b70.md) [`00664c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664c0c.md) [`00664d5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664d5c.md) [`0070d410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070d/0070d410.md) · 呼出先 1件 [`00b3bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bf30.md)
- 新版 呼出元 18件 [`0060ac90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0060a/0060ac90.md) [`00664f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664f20.md) [`00664fbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664fbc.md) [`0066510c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00665/0066510c.md) [`0070d7c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070d/0070d7c0.md) · 呼出先 1件 [`00b3cf24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3cf24.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2f894 ["INT_ADD", "register:40f0:8", ["const:b2f894:8", "const:4:8"]]
- 00b2f894 ["CALL", null, ["callee:00b3cf24:8"]]
+ 00b30888 ["INT_ADD", "register:40f0:8", ["const:b30888:8", "const:4:8"]]
+ 00b30888 ["CALL", null, ["callee:00b3cf24:8"]]
~~~


<a id="compare-6c966c99f902d2ad49604377d0dcc815"></a>

### [`00b2f91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2f91c.md) → [`00b30910`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b30910.md) FUN_00b30910

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 19件 [`0060a8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060a/0060a8e0.md) [`00664acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664acc.md) [`00664c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664c0c.md) [`00664c68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664c68.md) [`00665150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00665/00665150.md) · 呼出先 1件 [`00b3bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bf30.md)
- 新版 呼出元 19件 [`0060ac90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0060a/0060ac90.md) [`00664e7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664e7c.md) [`00664fbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664fbc.md) [`00665018`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00665/00665018.md) [`00665500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00665/00665500.md) · 呼出先 1件 [`00b3cf24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3cf24.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2f924 ["INT_ADD", "register:40f0:8", ["const:b2f924:8", "const:4:8"]]
- 00b2f924 ["CALL", null, ["callee:00b3cf24:8"]]
+ 00b30918 ["INT_ADD", "register:40f0:8", ["const:b30918:8", "const:4:8"]]
+ 00b30918 ["CALL", null, ["callee:00b3cf24:8"]]
~~~


<a id="compare-859896ec2ffe620600f619ddd383c591"></a>

### [`00b2fa54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2fa54.md) → [`00b30a48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b30a48.md) FUN_00b30a48

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 32件 [`005afcb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005af/005afcb8.md) [`005fdc98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fd/005fdc98.md) [`0063d954`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063d/0063d954.md) [`0064a570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064a/0064a570.md) [`006535e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/006535e0.md) · 呼出先 1件 [`00b3bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bf30.md)
- 新版 呼出元 32件 [`005b0068`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b0/005b0068.md) [`005fe048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fe048.md) [`0063dd04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063d/0063dd04.md) [`0064a920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064a/0064a920.md) [`00653990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/00653990.md) · 呼出先 1件 [`00b3cf24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3cf24.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2fa68 ["INT_ADD", "register:40f0:8", ["const:b2fa68:8", "const:4:8"]]
- 00b2fa68 ["CALL", null, ["callee:00b3cf24:8"]]
+ 00b30a5c ["INT_ADD", "register:40f0:8", ["const:b30a5c:8", "const:4:8"]]
+ 00b30a5c ["CALL", null, ["callee:00b3cf24:8"]]
- 00b2fa84 ["INT_ADD", "register:40f0:8", ["const:b2fa84:8", "const:4:8"]]
- 00b2fa84 ["CALL", null, ["callee:00b3cf24:8"]]
+ 00b30a78 ["INT_ADD", "register:40f0:8", ["const:b30a78:8", "const:4:8"]]
+ 00b30a78 ["CALL", null, ["callee:00b3cf24:8"]]
~~~


<a id="compare-2fdf88ab2ebb09ce1b4d7b83e6182977"></a>

### [`00b2fddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2fddc.md) → [`00b30dd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b30dd0.md) FUN_00b30dd0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b2faa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2faa8.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00b308b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b30/00b308b4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00b30a9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b30a9c.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00b318a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b31/00b318a8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2fe38 ["INT_ADD", "register:40f0:8", ["const:b2fe38:8", "const:4:8"]]
- 00b2fe38 ["CALL", null, ["callee:0043be80:8"]]
+ 00b30e2c ["INT_ADD", "register:40f0:8", ["const:b30e2c:8", "const:4:8"]]
+ 00b30e2c ["CALL", null, ["callee:0043be80:8"]]
- 00b2fe4c ["INT_ADD", "register:40f0:8", ["const:b2fe4c:8", "const:4:8"]]
- 00b2fe4c ["CALL", null, ["callee:0043be80:8"]]
+ 00b30e40 ["INT_ADD", "register:40f0:8", ["const:b30e40:8", "const:4:8"]]
+ 00b30e40 ["CALL", null, ["callee:0043be80:8"]]
- 00b2fe80 ["INT_ADD", "register:40f0:8", ["const:b2fe80:8", "const:4:8"]]
- 00b2fe80 ["CALL", null, ["callee:00b318a8:8"]]
+ 00b30e74 ["INT_ADD", "register:40f0:8", ["const:b30e74:8", "const:4:8"]]
+ 00b30e74 ["CALL", null, ["callee:00b318a8:8"]]
~~~


<a id="compare-053c43cc7aa7212b1bf2cec50d868bb4"></a>

### [`00b30678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b30/00b30678.md) → [`00b3166c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b31/00b3166c.md) FUN_00b3166c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b2ff14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2ff14.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00b319b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b31/00b319b4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00b30f08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b30f08.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00b329a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b32/00b329a8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b306e0 ["INT_ADD", "register:40f0:8", ["const:b306e0:8", "const:4:8"]]
- 00b306e0 ["CALL", null, ["callee:0043be80:8"]]
+ 00b316d4 ["INT_ADD", "register:40f0:8", ["const:b316d4:8", "const:4:8"]]
+ 00b316d4 ["CALL", null, ["callee:0043be80:8"]]
- 00b30708 ["INT_ADD", "register:40f0:8", ["const:b30708:8", "const:4:8"]]
- 00b30708 ["CALL", null, ["callee:0043be80:8"]]
+ 00b316fc ["INT_ADD", "register:40f0:8", ["const:b316fc:8", "const:4:8"]]
+ 00b316fc ["CALL", null, ["callee:0043be80:8"]]
- 00b30734 ["INT_ADD", "register:40f0:8", ["const:b30734:8", "const:4:8"]]
- 00b30734 ["CALL", null, ["callee:0043be80:8"]]
+ 00b31728 ["INT_ADD", "register:40f0:8", ["const:b31728:8", "const:4:8"]]
+ 00b31728 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-2a006ddfa3bc8850e49a428f0a98152c"></a>

### [`00b319b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b31/00b319b4.md) → [`00b329a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b32/00b329a8.md) FUN_00b329a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b30678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b30/00b30678.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00b31bf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b31/00b31bf4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00b3166c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b31/00b3166c.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00b32be8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b32/00b32be8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b31a1c ["INT_ADD", "register:40f0:8", ["const:b31a1c:8", "const:4:8"]]
- 00b31a1c ["CALL", null, ["callee:0043be80:8"]]
+ 00b32a10 ["INT_ADD", "register:40f0:8", ["const:b32a10:8", "const:4:8"]]
+ 00b32a10 ["CALL", null, ["callee:0043be80:8"]]
- 00b31a44 ["INT_ADD", "register:40f0:8", ["const:b31a44:8", "const:4:8"]]
- 00b31a44 ["CALL", null, ["callee:0043be80:8"]]
+ 00b32a38 ["INT_ADD", "register:40f0:8", ["const:b32a38:8", "const:4:8"]]
+ 00b32a38 ["CALL", null, ["callee:0043be80:8"]]
- 00b31a70 ["INT_ADD", "register:40f0:8", ["const:b31a70:8", "const:4:8"]]
- 00b31a70 ["CALL", null, ["callee:0043be80:8"]]
+ 00b32a64 ["INT_ADD", "register:40f0:8", ["const:b32a64:8", "const:4:8"]]
+ 00b32a64 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-f3097dd30715f12749c33b64e79a2672"></a>

### [`00b3479c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b3479c.md) → [`00b35790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b35/00b35790.md) FUN_00b35790

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b347b8 ["INT_ADD", "register:40f0:8", ["const:b347b8:8", "const:4:8"]]
- 00b347b8 ["CALL", null, ["callee:0046d7f0:8"]]
+ 00b357ac ["INT_ADD", "register:40f0:8", ["const:b357ac:8", "const:4:8"]]
+ 00b357ac ["CALL", null, ["callee:0046d7f0:8"]]
- 00b347f4 ["INT_ADD", "register:40f0:8", ["const:b347f4:8", "const:4:8"]]
- 00b347f4 ["CALL", null, ["callee:00c58f50:8"]]
+ 00b357e8 ["INT_ADD", "register:40f0:8", ["const:b357e8:8", "const:4:8"]]
+ 00b357e8 ["CALL", null, ["callee:00c58f50:8"]]
- 00b34804 ["INT_ADD", "register:40f0:8", ["const:b34804:8", "const:4:8"]]
- 00b34804 ["CALL", null, ["callee:00c58f50:8"]]
+ 00b357f8 ["INT_ADD", "register:40f0:8", ["const:b357f8:8", "const:4:8"]]
+ 00b357f8 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-58ca9de5082318b3d4da6d7bcf818149"></a>

### [`00b34834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b34834.md) → [`00b35828`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b35/00b35828.md) FUN_00b35828

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00b3431c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b3431c.md) [`00b36a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b36a90.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`00b35310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b35/00b35310.md) [`00b37a84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b37/00b37a84.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b348a0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b348a0 ["INT_ADD", "register:40f0:8", ["const:b348a0:8", "const:4:8"]]
- 00b348a0 ["CALLIND", null, ["register:0:8"]]
+ 00b35894 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b35894 ["INT_ADD", "register:40f0:8", ["const:b35894:8", "const:4:8"]]
+ 00b35894 ["CALLIND", null, ["register:0:8"]]
- 00b348b0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b348b0 ["INT_ADD", "register:40f0:8", ["const:b348b0:8", "const:4:8"]]
- 00b348b0 ["CALLIND", null, ["register:0:8"]]
+ 00b358a4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b358a4 ["INT_ADD", "register:40f0:8", ["const:b358a4:8", "const:4:8"]]
+ 00b358a4 ["CALLIND", null, ["register:0:8"]]
- 00b348d0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b348d0 ["INT_ADD", "register:40f0:8", ["const:b348d0:8", "const:4:8"]]
- 00b348d0 ["CALLIND", null, ["register:0:8"]]
+ 00b358c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b358c4 ["INT_ADD", "register:40f0:8", ["const:b358c4:8", "const:4:8"]]
+ 00b358c4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b974f51ef8e7720108a6380eb1af5a6e"></a>

### [`00b3499c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b3499c.md) → [`00b35990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b35/00b35990.md) FUN_00b35990

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00b343e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b343e4.md) [`00b36b58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b36b58.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`00b353d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b35/00b353d8.md) [`00b37b4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b37/00b37b4c.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b34a08 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b34a08 ["INT_ADD", "register:40f0:8", ["const:b34a08:8", "const:4:8"]]
- 00b34a08 ["CALLIND", null, ["register:0:8"]]
+ 00b359fc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b359fc ["INT_ADD", "register:40f0:8", ["const:b359fc:8", "const:4:8"]]
+ 00b359fc ["CALLIND", null, ["register:0:8"]]
- 00b34a18 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b34a18 ["INT_ADD", "register:40f0:8", ["const:b34a18:8", "const:4:8"]]
- 00b34a18 ["CALLIND", null, ["register:0:8"]]
+ 00b35a0c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b35a0c ["INT_ADD", "register:40f0:8", ["const:b35a0c:8", "const:4:8"]]
+ 00b35a0c ["CALLIND", null, ["register:0:8"]]
- 00b34a38 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b34a38 ["INT_ADD", "register:40f0:8", ["const:b34a38:8", "const:4:8"]]
- 00b34a38 ["CALLIND", null, ["register:0:8"]]
+ 00b35a2c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b35a2c ["INT_ADD", "register:40f0:8", ["const:b35a2c:8", "const:4:8"]]
+ 00b35a2c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-48829d77841ebcfa4070b85684354ee4"></a>

### [`00b34b04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b34b04.md) → [`00b35af8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b35/00b35af8.md) FUN_00b35af8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b344ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b344ac.md) · 呼出先 9件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00440f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f9c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00b354a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b35/00b354a0.md) · 呼出先 9件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004412bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412bc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b34ba4 ["INT_ADD", "register:40f0:8", ["const:b34ba4:8", "const:4:8"]]
- 00b34ba4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b35b98 ["INT_ADD", "register:40f0:8", ["const:b35b98:8", "const:4:8"]]
+ 00b35b98 ["CALL", null, ["callee:00c58f30:8"]]
- 00b34bc8 ["INT_ADD", "register:40f0:8", ["const:b34bc8:8", "const:4:8"]]
- 00b34bc8 ["CALL", null, ["callee:00c59080:8"]]
+ 00b35bbc ["INT_ADD", "register:40f0:8", ["const:b35bbc:8", "const:4:8"]]
+ 00b35bbc ["CALL", null, ["callee:00c59080:8"]]
- 00b34c0c ["INT_ADD", "register:40f0:8", ["const:b34c0c:8", "const:4:8"]]
- 00b34c0c ["CALL", null, ["callee:00c58f30:8"]]
+ 00b35c00 ["INT_ADD", "register:40f0:8", ["const:b35c00:8", "const:4:8"]]
+ 00b35c00 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-2b56a749ea1b46bd9fcde3da5cabbd2c"></a>

### [`00b34d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b34d00.md) → [`00b35cf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b35/00b35cf4.md) FUN_00b35cf4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b344ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b344ac.md) · 呼出先 9件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00440f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f9c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00b354a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b35/00b354a0.md) · 呼出先 9件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004412bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412bc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b34da0 ["INT_ADD", "register:40f0:8", ["const:b34da0:8", "const:4:8"]]
- 00b34da0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b35d94 ["INT_ADD", "register:40f0:8", ["const:b35d94:8", "const:4:8"]]
+ 00b35d94 ["CALL", null, ["callee:00c58f30:8"]]
- 00b34dc4 ["INT_ADD", "register:40f0:8", ["const:b34dc4:8", "const:4:8"]]
- 00b34dc4 ["CALL", null, ["callee:00c59080:8"]]
+ 00b35db8 ["INT_ADD", "register:40f0:8", ["const:b35db8:8", "const:4:8"]]
+ 00b35db8 ["CALL", null, ["callee:00c59080:8"]]
- 00b34e08 ["INT_ADD", "register:40f0:8", ["const:b34e08:8", "const:4:8"]]
- 00b34e08 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b35dfc ["INT_ADD", "register:40f0:8", ["const:b35dfc:8", "const:4:8"]]
+ 00b35dfc ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-e9e9d761c8f27ecca4396f2543486355"></a>

### [`00b35f14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b35f14.md) → [`00b36f08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b36/00b36f08.md) FUN_00b36f08

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00b35da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b35da0.md) [`00b35f14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b35f14.md) · 呼出先 2件 [`00b35f14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b35f14.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`00b36d94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b36/00b36d94.md) [`00b36f08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b36/00b36f08.md) · 呼出先 2件 [`00b36f08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b36/00b36f08.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b35f30 ["INT_ADD", "register:40f0:8", ["const:b35f30:8", "const:4:8"]]
- 00b35f30 ["CALL", null, ["local:b0:8"]]
+ 00b36f24 ["INT_ADD", "register:40f0:8", ["const:b36f24:8", "const:4:8"]]
+ 00b36f24 ["CALL", null, ["local:b0:8"]]
- 00b35f3c ["INT_ADD", "register:40f0:8", ["const:b35f3c:8", "const:4:8"]]
- 00b35f3c ["CALL", null, ["local:b0:8"]]
+ 00b36f30 ["INT_ADD", "register:40f0:8", ["const:b36f30:8", "const:4:8"]]
+ 00b36f30 ["CALL", null, ["local:b0:8"]]
- 00b35f70 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b35f70 ["INT_ADD", "register:40f0:8", ["const:b35f70:8", "const:4:8"]]
- 00b35f70 ["CALLIND", null, ["register:0:8"]]
+ 00b36f64 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b36f64 ["INT_ADD", "register:40f0:8", ["const:b36f64:8", "const:4:8"]]
+ 00b36f64 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a947b611ab2ac09cb043677baa416b4c"></a>

### [`00b35f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b35f94.md) → [`00b36f88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b36/00b36f88.md) FUN_00b36f88

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b35da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b35da8.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00b36d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b36/00b36d9c.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b36018 ["INT_ADD", "register:40f0:8", ["const:b36018:8", "const:4:8"]]
- 00b36018 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b3700c ["INT_ADD", "register:40f0:8", ["const:b3700c:8", "const:4:8"]]
+ 00b3700c ["CALL", null, ["callee:00c590f0:8"]]
- 00b36044 ["INT_ADD", "register:40f0:8", ["const:b36044:8", "const:4:8"]]
- 00b36044 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b37038 ["INT_ADD", "register:40f0:8", ["const:b37038:8", "const:4:8"]]
+ 00b37038 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-2dda2c396eb297779fac80d60505cb32"></a>

### [`00b37394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37394.md) → [`00b38388`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b38/00b38388.md) FUN_00b38388

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00b38f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b38/00b38f24.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00b39f18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b39/00b39f18.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b373d0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b373d0 ["INT_ADD", "register:40f0:8", ["const:b373d0:8", "const:4:8"]]
- 00b373d0 ["CALLIND", null, ["register:0:8"]]
+ 00b383c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b383c4 ["INT_ADD", "register:40f0:8", ["const:b383c4:8", "const:4:8"]]
+ 00b383c4 ["CALLIND", null, ["register:0:8"]]
- 00b37400 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b37400 ["INT_ADD", "register:40f0:8", ["const:b37400:8", "const:4:8"]]
- 00b37400 ["CALLIND", null, ["register:0:8"]]
+ 00b383f4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b383f4 ["INT_ADD", "register:40f0:8", ["const:b383f4:8", "const:4:8"]]
+ 00b383f4 ["CALLIND", null, ["register:0:8"]]
- 00b37430 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b37430 ["INT_ADD", "register:40f0:8", ["const:b37430:8", "const:4:8"]]
- 00b37430 ["CALLIND", null, ["register:0:8"]]
+ 00b38424 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b38424 ["INT_ADD", "register:40f0:8", ["const:b38424:8", "const:4:8"]]
+ 00b38424 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6a44280eae4458efbdde24463a996d9e"></a>

### [`00b38338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b38/00b38338.md) → [`00b3932c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b39/00b3932c.md) FUN_00b3932c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00b37e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37e64.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00b38e58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b38/00b38e58.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b38380 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b38380 ["INT_ADD", "register:40f0:8", ["const:b38380:8", "const:4:8"]]
- 00b38380 ["CALLIND", null, ["register:0:8"]]
+ 00b39374 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b39374 ["INT_ADD", "register:40f0:8", ["const:b39374:8", "const:4:8"]]
+ 00b39374 ["CALLIND", null, ["register:0:8"]]
- 00b383c0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b383c0 ["INT_ADD", "register:40f0:8", ["const:b383c0:8", "const:4:8"]]
- 00b383c0 ["CALLIND", null, ["register:0:8"]]
+ 00b393b4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b393b4 ["INT_ADD", "register:40f0:8", ["const:b393b4:8", "const:4:8"]]
+ 00b393b4 ["CALLIND", null, ["register:0:8"]]
- 00b383f8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b383f8 ["INT_ADD", "register:40f0:8", ["const:b383f8:8", "const:4:8"]]
- 00b383f8 ["CALLIND", null, ["register:0:8"]]
+ 00b393ec ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b393ec ["INT_ADD", "register:40f0:8", ["const:b393ec:8", "const:4:8"]]
+ 00b393ec ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-299a9290f67cc6e76af41d3d8058057f"></a>

### [`00b39d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b39/00b39d98.md) → [`00b3ad8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3a/00b3ad8c.md) FUN_00b3ad8c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00b39a00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b39/00b39a00.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00b3a9f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3a/00b3a9f4.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b39de0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b39de0 ["INT_ADD", "register:40f0:8", ["const:b39de0:8", "const:4:8"]]
- 00b39de0 ["CALLIND", null, ["register:0:8"]]
+ 00b3add4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b3add4 ["INT_ADD", "register:40f0:8", ["const:b3add4:8", "const:4:8"]]
+ 00b3add4 ["CALLIND", null, ["register:0:8"]]
- 00b39e20 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b39e20 ["INT_ADD", "register:40f0:8", ["const:b39e20:8", "const:4:8"]]
- 00b39e20 ["CALLIND", null, ["register:0:8"]]
+ 00b3ae14 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b3ae14 ["INT_ADD", "register:40f0:8", ["const:b3ae14:8", "const:4:8"]]
+ 00b3ae14 ["CALLIND", null, ["register:0:8"]]
- 00b39e58 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b39e58 ["INT_ADD", "register:40f0:8", ["const:b39e58:8", "const:4:8"]]
- 00b39e58 ["CALLIND", null, ["register:0:8"]]
+ 00b3ae4c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b3ae4c ["INT_ADD", "register:40f0:8", ["const:b3ae4c:8", "const:4:8"]]
+ 00b3ae4c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c7010d0416728bcaae5b52ca5e6c7dd4"></a>

### [`00b3afb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3afb8.md) → [`00b3bfac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3b/00b3bfac.md) FUN_00b3bfac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00b38fa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b38/00b38fa4.md) [`00b3afb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3afb8.md) · 呼出先 2件 [`00b3afb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3afb8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`00b39f98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b39/00b39f98.md) [`00b3bfac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3b/00b3bfac.md) · 呼出先 2件 [`00b3bfac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3b/00b3bfac.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b3afd4 ["INT_ADD", "register:40f0:8", ["const:b3afd4:8", "const:4:8"]]
- 00b3afd4 ["CALL", null, ["local:b0:8"]]
+ 00b3bfc8 ["INT_ADD", "register:40f0:8", ["const:b3bfc8:8", "const:4:8"]]
+ 00b3bfc8 ["CALL", null, ["local:b0:8"]]
- 00b3afe0 ["INT_ADD", "register:40f0:8", ["const:b3afe0:8", "const:4:8"]]
- 00b3afe0 ["CALL", null, ["local:b0:8"]]
+ 00b3bfd4 ["INT_ADD", "register:40f0:8", ["const:b3bfd4:8", "const:4:8"]]
+ 00b3bfd4 ["CALL", null, ["local:b0:8"]]
- 00b3b014 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b3b014 ["INT_ADD", "register:40f0:8", ["const:b3b014:8", "const:4:8"]]
- 00b3b014 ["CALLIND", null, ["register:0:8"]]
+ 00b3c008 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b3c008 ["INT_ADD", "register:40f0:8", ["const:b3c008:8", "const:4:8"]]
+ 00b3c008 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-61557a05b5504e0cfb0961d346762b45"></a>

### [`00b3b098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b098.md) → [`00b3c08c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3c08c.md) FUN_00b3c08c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00b38fac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b38/00b38fac.md) [`00b3b098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b098.md) · 呼出先 2件 [`00b3b098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b098.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`00b39fa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b39/00b39fa0.md) [`00b3c08c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3c08c.md) · 呼出先 2件 [`00b3c08c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3c08c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b3b0b4 ["INT_ADD", "register:40f0:8", ["const:b3b0b4:8", "const:4:8"]]
- 00b3b0b4 ["CALL", null, ["local:b0:8"]]
+ 00b3c0a8 ["INT_ADD", "register:40f0:8", ["const:b3c0a8:8", "const:4:8"]]
+ 00b3c0a8 ["CALL", null, ["local:b0:8"]]
- 00b3b0c0 ["INT_ADD", "register:40f0:8", ["const:b3b0c0:8", "const:4:8"]]
- 00b3b0c0 ["CALL", null, ["local:b0:8"]]
+ 00b3c0b4 ["INT_ADD", "register:40f0:8", ["const:b3c0b4:8", "const:4:8"]]
+ 00b3c0b4 ["CALL", null, ["local:b0:8"]]
- 00b3b0f8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b3b0f8 ["INT_ADD", "register:40f0:8", ["const:b3b0f8:8", "const:4:8"]]
- 00b3b0f8 ["CALLIND", null, ["register:0:8"]]
+ 00b3c0ec ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b3c0ec ["INT_ADD", "register:40f0:8", ["const:b3c0ec:8", "const:4:8"]]
+ 00b3c0ec ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5616283b01aa71a9c4403e1cb9f9f3e8"></a>

### [`00b3b148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b148.md) → [`00b3c13c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3c13c.md) FUN_00b3c13c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b39a00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b39/00b39a00.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00b3b28c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b28c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00b3a9f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3a/00b3a9f4.md) · 呼出先 5件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00b3c280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3c280.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b3b17c ["INT_ADD", "register:40f0:8", ["const:b3b17c:8", "const:4:8"]]
- 00b3b17c ["CALL", null, ["callee:00b3c280:8"]]
+ 00b3c170 ["INT_ADD", "register:40f0:8", ["const:b3c170:8", "const:4:8"]]
+ 00b3c170 ["CALL", null, ["callee:00b3c280:8"]]
- 00b3b19c ["INT_ADD", "register:40f0:8", ["const:b3b19c:8", "const:4:8"]]
- 00b3b19c ["CALL", null, ["callee:00c58f30:8"]]
+ 00b3c190 ["INT_ADD", "register:40f0:8", ["const:b3c190:8", "const:4:8"]]
+ 00b3c190 ["CALL", null, ["callee:00c58f30:8"]]
- 00b3b1d8 ["INT_ADD", "register:40f0:8", ["const:b3b1d8:8", "const:4:8"]]
- 00b3b1d8 ["CALL", null, ["callee:0043be80:8"]]
+ 00b3c1cc ["INT_ADD", "register:40f0:8", ["const:b3c1cc:8", "const:4:8"]]
+ 00b3c1cc ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-870106cec313e201cc852d26246217fe"></a>

### [`00b3b28c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b28c.md) → [`00b3c280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3c280.md) FUN_00b3c280

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b3b148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b148.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00b3c13c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3c13c.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b3b310 ["INT_ADD", "register:40f0:8", ["const:b3b310:8", "const:4:8"]]
- 00b3b310 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b3c304 ["INT_ADD", "register:40f0:8", ["const:b3c304:8", "const:4:8"]]
+ 00b3c304 ["CALL", null, ["callee:00c590f0:8"]]
- 00b3b33c ["INT_ADD", "register:40f0:8", ["const:b3b33c:8", "const:4:8"]]
- 00b3b33c ["CALL", null, ["callee:00c590f0:8"]]
+ 00b3c330 ["INT_ADD", "register:40f0:8", ["const:b3c330:8", "const:4:8"]]
+ 00b3c330 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-c5476bcceade8f53da87ebfa4973e885"></a>

### [`00b3b390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b390.md) → [`00b3c384`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3c384.md) FUN_00b3c384

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b3b3e8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b3b3e8 ["INT_ADD", "register:40f0:8", ["const:b3b3e8:8", "const:4:8"]]
- 00b3b3e8 ["CALLIND", null, ["register:0:8"]]
+ 00b3c3dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b3c3dc ["INT_ADD", "register:40f0:8", ["const:b3c3dc:8", "const:4:8"]]
+ 00b3c3dc ["CALLIND", null, ["register:0:8"]]
- 00b3b41c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b3b41c ["INT_ADD", "register:40f0:8", ["const:b3b41c:8", "const:4:8"]]
- 00b3b41c ["CALLIND", null, ["register:0:8"]]
+ 00b3c410 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b3c410 ["INT_ADD", "register:40f0:8", ["const:b3c410:8", "const:4:8"]]
+ 00b3c410 ["CALLIND", null, ["register:0:8"]]
- 00b3b448 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b3b448 ["INT_ADD", "register:40f0:8", ["const:b3b448:8", "const:4:8"]]
- 00b3b448 ["CALLIND", null, ["register:0:8"]]
+ 00b3c43c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b3c43c ["INT_ADD", "register:40f0:8", ["const:b3c43c:8", "const:4:8"]]
+ 00b3c43c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-009bdef99ba843cedea9c11f6a536641"></a>

### [`00b3b46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b46c.md) → [`00b3c460`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3c460.md) FUN_00b3c460

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b39ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b39/00b39ff0.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00b3b5a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b5a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00b3afe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3a/00b3afe4.md) · 呼出先 5件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00b3c598`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3c598.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b3b4a0 ["INT_ADD", "register:40f0:8", ["const:b3b4a0:8", "const:4:8"]]
- 00b3b4a0 ["CALL", null, ["callee:00b3c598:8"]]
+ 00b3c494 ["INT_ADD", "register:40f0:8", ["const:b3c494:8", "const:4:8"]]
+ 00b3c494 ["CALL", null, ["callee:00b3c598:8"]]
- 00b3b4c0 ["INT_ADD", "register:40f0:8", ["const:b3b4c0:8", "const:4:8"]]
- 00b3b4c0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b3c4b4 ["INT_ADD", "register:40f0:8", ["const:b3c4b4:8", "const:4:8"]]
+ 00b3c4b4 ["CALL", null, ["callee:00c58f30:8"]]
- 00b3b4fc ["INT_ADD", "register:40f0:8", ["const:b3b4fc:8", "const:4:8"]]
- 00b3b4fc ["CALL", null, ["callee:0043be80:8"]]
+ 00b3c4f0 ["INT_ADD", "register:40f0:8", ["const:b3c4f0:8", "const:4:8"]]
+ 00b3c4f0 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-0600896aaf1244737be3ee79cd4fb789"></a>

### [`00b3b5a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b5a4.md) → [`00b3c598`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3c598.md) FUN_00b3c598

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b3b46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b46c.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`00b3c460`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3c460.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b3b628 ["INT_ADD", "register:40f0:8", ["const:b3b628:8", "const:4:8"]]
- 00b3b628 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b3c61c ["INT_ADD", "register:40f0:8", ["const:b3c61c:8", "const:4:8"]]
+ 00b3c61c ["CALL", null, ["callee:00c590f0:8"]]
- 00b3b654 ["INT_ADD", "register:40f0:8", ["const:b3b654:8", "const:4:8"]]
- 00b3b654 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b3c648 ["INT_ADD", "register:40f0:8", ["const:b3c648:8", "const:4:8"]]
+ 00b3c648 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-b993494212dd6bda1181dfb5f919b2e5"></a>

### [`00b3b6a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b6a8.md) → [`00b3c69c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3c69c.md) FUN_00b3c69c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b3b704 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b3b704 ["INT_ADD", "register:40f0:8", ["const:b3b704:8", "const:4:8"]]
- 00b3b704 ["CALLIND", null, ["register:0:8"]]
+ 00b3c6f8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b3c6f8 ["INT_ADD", "register:40f0:8", ["const:b3c6f8:8", "const:4:8"]]
+ 00b3c6f8 ["CALLIND", null, ["register:0:8"]]
- 00b3b730 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b3b730 ["INT_ADD", "register:40f0:8", ["const:b3b730:8", "const:4:8"]]
- 00b3b730 ["CALLIND", null, ["register:0:8"]]
+ 00b3c724 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b3c724 ["INT_ADD", "register:40f0:8", ["const:b3c724:8", "const:4:8"]]
+ 00b3c724 ["CALLIND", null, ["register:0:8"]]
- 00b3b740 ["INT_ADD", "register:40f0:8", ["const:b3b740:8", "const:4:8"]]
- 00b3b740 ["CALL", null, ["callee:00c58f50:8"]]
+ 00b3c734 ["INT_ADD", "register:40f0:8", ["const:b3c734:8", "const:4:8"]]
+ 00b3c734 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-bf0466b7457393249dd4cdad1f38f9e1"></a>

### [`00b3b754`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b754.md) → [`00b3c748`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3c748.md) FUN_00b3c748

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00b3a48c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3a48c.md) [`00b3a654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3a654.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`00b3b480`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3b/00b3b480.md) [`00b3b648`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3b/00b3b648.md) · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b3b7c0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b3b7c0 ["INT_ADD", "register:40f0:8", ["const:b3b7c0:8", "const:4:8"]]
- 00b3b7c0 ["CALLIND", null, ["register:0:8"]]
+ 00b3c7b4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b3c7b4 ["INT_ADD", "register:40f0:8", ["const:b3c7b4:8", "const:4:8"]]
+ 00b3c7b4 ["CALLIND", null, ["register:0:8"]]
- 00b3b7d0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b3b7d0 ["INT_ADD", "register:40f0:8", ["const:b3b7d0:8", "const:4:8"]]
- 00b3b7d0 ["CALLIND", null, ["register:0:8"]]
+ 00b3c7c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b3c7c4 ["INT_ADD", "register:40f0:8", ["const:b3c7c4:8", "const:4:8"]]
+ 00b3c7c4 ["CALLIND", null, ["register:0:8"]]
- 00b3b7f0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b3b7f0 ["INT_ADD", "register:40f0:8", ["const:b3b7f0:8", "const:4:8"]]
- 00b3b7f0 ["CALLIND", null, ["register:0:8"]]
+ 00b3c7e4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b3c7e4 ["INT_ADD", "register:40f0:8", ["const:b3c7e4:8", "const:4:8"]]
+ 00b3c7e4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-36a0643429722b1d8ad1d706eed18b19"></a>

### [`00b3b8bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b8bc.md) → [`00b3c8b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3c8b0.md) FUN_00b3c8b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00b3aba8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3aba8.md) [`00b3ac68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3ac68.md) [`00b3ad74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3ad74.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 3件 [`00b3bb9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3b/00b3bb9c.md) [`00b3bc5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3b/00b3bc5c.md) [`00b3bd68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3b/00b3bd68.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b3b928 ["INT_ADD", "register:40f0:8", ["const:b3b928:8", "const:4:8"]]
- 00b3b928 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b3c91c ["INT_ADD", "register:40f0:8", ["const:b3c91c:8", "const:4:8"]]
+ 00b3c91c ["CALL", null, ["callee:00c590f0:8"]]
- 00b3b984 ["INT_ADD", "register:40f0:8", ["const:b3b984:8", "const:4:8"]]
- 00b3b984 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b3c978 ["INT_ADD", "register:40f0:8", ["const:b3c978:8", "const:4:8"]]
+ 00b3c978 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-d4df1bdaa88345056becdecd28b06af8"></a>

### [`00b3b9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b9c0.md) → [`00b3c9b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3c9b4.md) FUN_00b3c9b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00b3ae34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3ae34.md) [`00b3aef4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3aef4.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 2件 [`00b3be28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3b/00b3be28.md) [`00b3bee8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3b/00b3bee8.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b3ba2c ["INT_ADD", "register:40f0:8", ["const:b3ba2c:8", "const:4:8"]]
- 00b3ba2c ["CALL", null, ["callee:00c590f0:8"]]
+ 00b3ca20 ["INT_ADD", "register:40f0:8", ["const:b3ca20:8", "const:4:8"]]
+ 00b3ca20 ["CALL", null, ["callee:00c590f0:8"]]
- 00b3ba88 ["INT_ADD", "register:40f0:8", ["const:b3ba88:8", "const:4:8"]]
- 00b3ba88 ["CALL", null, ["callee:00c590f0:8"]]
+ 00b3ca7c ["INT_ADD", "register:40f0:8", ["const:b3ca7c:8", "const:4:8"]]
+ 00b3ca7c ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-430fa269e9b0981959647967eecacdd2"></a>

### [`00b3bf04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bf04.md) → [`00b3cef8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3cef8.md) FUN_00b3cef8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) [`00846560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00846/00846560.md) · 呼出先 1件 [`005e81d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e81d8.md)
- 新版 呼出元 2件 [`00840888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00840/00840888.md) [`0084750c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00847/0084750c.md) · 呼出先 1件 [`005e8588`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e8/005e8588.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b3bf18 ["INT_ADD", "register:40f0:8", ["const:b3bf18:8", "const:4:8"]]
- 00b3bf18 ["CALL", null, ["callee:005e8588:8"]]
+ 00b3cf0c ["INT_ADD", "register:40f0:8", ["const:b3cf0c:8", "const:4:8"]]
+ 00b3cf0c ["CALL", null, ["callee:005e8588:8"]]
~~~


