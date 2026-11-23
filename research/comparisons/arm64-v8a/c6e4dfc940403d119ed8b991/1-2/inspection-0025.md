# v16.0.2 → v16.0.3 · 要調査の変更候補 (25)

[一覧の目次](README.md)

<a id="compare-1b5956775efe1d03fedde46baa5ddc10"></a>

### [`009ac8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac8e4.md) → [`009ad890`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009ad890.md) FUN_009ad890

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009af9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009af9dc.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009b0988`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b0/009b0988.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ac930 ["INT_ADD", "register:40f0:8", ["const:9ac930:8", "const:4:8"]]
- 009ac930 ["CALL", null, ["callee:00c54d90:8"]]
+ 009ad8dc ["INT_ADD", "register:40f0:8", ["const:9ad8dc:8", "const:4:8"]]
+ 009ad8dc ["CALL", null, ["callee:00c54d90:8"]]
- 009ac944 ["COPY", "register:0:8", ["register:4040:8"]]
- 009ac944 ["INT_ADD", "register:40f0:8", ["const:9ac944:8", "const:4:8"]]
- 009ac944 ["CALLIND", null, ["register:0:8"]]
+ 009ad8f0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009ad8f0 ["INT_ADD", "register:40f0:8", ["const:9ad8f0:8", "const:4:8"]]
+ 009ad8f0 ["CALLIND", null, ["register:0:8"]]
- 009ac94c ["INT_ADD", "register:40f0:8", ["const:9ac94c:8", "const:4:8"]]
- 009ac94c ["CALL", null, ["callee:00c58f20:8"]]
+ 009ad8f8 ["INT_ADD", "register:40f0:8", ["const:9ad8f8:8", "const:4:8"]]
+ 009ad8f8 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-56e9f706da261b2e413450d20588df4c"></a>

### [`009ac97c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac97c.md) → [`009ad928`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009ad928.md) FUN_009ad928

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 6件 [`00480b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480b78.md) [`009b5bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5bcc.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`00a2c310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a2c/00a2c310.md) · 呼出先 6件 [`00480e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480e98.md) [`009b6b78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6b78.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ac9bc ["INT_ADD", "register:40f0:8", ["const:9ac9bc:8", "const:4:8"]]
- 009ac9bc ["CALL", null, ["callee:00480e98:8"]]
+ 009ad968 ["INT_ADD", "register:40f0:8", ["const:9ad968:8", "const:4:8"]]
+ 009ad968 ["CALL", null, ["callee:00480e98:8"]]
- 009ac9e8 ["INT_ADD", "register:40f0:8", ["const:9ac9e8:8", "const:4:8"]]
- 009ac9e8 ["CALL", null, ["callee:00c54d60:8"]]
+ 009ad994 ["INT_ADD", "register:40f0:8", ["const:9ad994:8", "const:4:8"]]
+ 009ad994 ["CALL", null, ["callee:00c54d60:8"]]
- 009ac9f4 ["INT_ADD", "register:40f0:8", ["const:9ac9f4:8", "const:4:8"]]
- 009ac9f4 ["CALL", null, ["callee:009b6b78:8"]]
+ 009ad9a0 ["INT_ADD", "register:40f0:8", ["const:9ad9a0:8", "const:4:8"]]
+ 009ad9a0 ["CALL", null, ["callee:009b6b78:8"]]
~~~


<a id="compare-8b820d63bf435698630f9ce6930e16d6"></a>

### [`009aca78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009aca78.md) → [`009ada24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009ada24.md) FUN_009ada24

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009af9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009af9dc.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`009b0988`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b0/009b0988.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009aca94 ["INT_ADD", "register:40f0:8", ["const:9aca94:8", "const:4:8"]]
- 009aca94 ["CALL", null, ["callee:00c54d90:8"]]
+ 009ada40 ["INT_ADD", "register:40f0:8", ["const:9ada40:8", "const:4:8"]]
+ 009ada40 ["CALL", null, ["callee:00c54d90:8"]]
- 009acab4 ["COPY", "register:0:8", ["register:4040:8"]]
- 009acab4 ["INT_ADD", "register:40f0:8", ["const:9acab4:8", "const:4:8"]]
- 009acab4 ["CALLIND", null, ["register:0:8"]]
+ 009ada60 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009ada60 ["INT_ADD", "register:40f0:8", ["const:9ada60:8", "const:4:8"]]
+ 009ada60 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-20bc1e1ad6d3b2e4bf6c19168ee120ec"></a>

### [`009acf4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009acf4c.md) → [`009adef8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009adef8.md) FUN_009adef8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`0084f5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084f/0084f5a0.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009acf84 ["INT_ADD", "register:40f0:8", ["const:9acf84:8", "const:4:8"]]
- 009acf84 ["CALL", null, ["callee:00c54d90:8"]]
+ 009adf30 ["INT_ADD", "register:40f0:8", ["const:9adf30:8", "const:4:8"]]
+ 009adf30 ["CALL", null, ["callee:00c54d90:8"]]
- 009acf98 ["COPY", "register:0:8", ["register:4040:8"]]
- 009acf98 ["INT_ADD", "register:40f0:8", ["const:9acf98:8", "const:4:8"]]
- 009acf98 ["CALLIND", null, ["register:0:8"]]
+ 009adf44 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009adf44 ["INT_ADD", "register:40f0:8", ["const:9adf44:8", "const:4:8"]]
+ 009adf44 ["CALLIND", null, ["register:0:8"]]
- 009acfa0 ["INT_ADD", "register:40f0:8", ["const:9acfa0:8", "const:4:8"]]
- 009acfa0 ["CALL", null, ["callee:00c58f20:8"]]
+ 009adf4c ["INT_ADD", "register:40f0:8", ["const:9adf4c:8", "const:4:8"]]
+ 009adf4c ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-9272e7907da4a27ba98f79e428c52c88"></a>

### [`009acfbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009acfbc.md) → [`009adf68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009adf68.md) FUN_009adf68

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 18件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006b8c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8c9c.md) [`0080666c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00806/0080666c.md) [`009b0c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0c3c.md) [`009b0d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0d98.md)
- 新版 呼出元 1件 [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) · 呼出先 18件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`006b904c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b9/006b904c.md) [`008075d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00807/008075d0.md) [`009b1be8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b1/009b1be8.md) [`009b1d44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b1/009b1d44.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ad030 ["INT_ADD", "register:40f0:8", ["const:9ad030:8", "const:4:8"]]
- 009ad030 ["CALL", null, ["callee:00c54d60:8"]]
+ 009adfdc ["INT_ADD", "register:40f0:8", ["const:9adfdc:8", "const:4:8"]]
+ 009adfdc ["CALL", null, ["callee:00c54d60:8"]]
- 009ad04c ["INT_ADD", "register:40f0:8", ["const:9ad04c:8", "const:4:8"]]
- 009ad04c ["CALL", null, ["callee:009b5154:8"]]
+ 009adff8 ["INT_ADD", "register:40f0:8", ["const:9adff8:8", "const:4:8"]]
+ 009adff8 ["CALL", null, ["callee:009b5154:8"]]
- 009ad068 ["INT_ADD", "register:40f0:8", ["const:9ad068:8", "const:4:8"]]
- 009ad068 ["CALL", null, ["callee:009b6ca4:8"]]
+ 009ae014 ["INT_ADD", "register:40f0:8", ["const:9ae014:8", "const:4:8"]]
+ 009ae014 ["CALL", null, ["callee:009b6ca4:8"]]
~~~


<a id="compare-60d6e806870d6f88125ee57ade3ae411"></a>

### [`009ad7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009ad7a4.md) → [`009ae750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ae/009ae750.md) FUN_009ae750

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0076453c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/0076453c.md) · 呼出先 3件 [`009b41a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b41a8.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`00764918`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00764/00764918.md) · 呼出先 3件 [`009b5154`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b5/009b5154.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ad7d8 ["INT_ADD", "register:40f0:8", ["const:9ad7d8:8", "const:4:8"]]
- 009ad7d8 ["CALL", null, ["callee:009b5154:8"]]
+ 009ae784 ["INT_ADD", "register:40f0:8", ["const:9ae784:8", "const:4:8"]]
+ 009ae784 ["CALL", null, ["callee:009b5154:8"]]
- 009ad840 ["INT_ADD", "register:40f0:8", ["const:9ad840:8", "const:4:8"]]
- 009ad840 ["CALL", null, ["callee:00c54d90:8"]]
+ 009ae7ec ["INT_ADD", "register:40f0:8", ["const:9ae7ec:8", "const:4:8"]]
+ 009ae7ec ["CALL", null, ["callee:00c54d90:8"]]
- 009ad854 ["COPY", "register:0:8", ["register:4040:8"]]
- 009ad854 ["INT_ADD", "register:40f0:8", ["const:9ad854:8", "const:4:8"]]
- 009ad854 ["CALLIND", null, ["register:0:8"]]
+ 009ae800 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009ae800 ["INT_ADD", "register:40f0:8", ["const:9ae800:8", "const:4:8"]]
+ 009ae800 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-df913d7d403b5fbd857fc02d4719d68d"></a>

### [`009ad8d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009ad8d0.md) → [`009ae87c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ae/009ae87c.md) FUN_009ae87c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0043c298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043c/0043c298.md) · 呼出先 7件 [`009b46f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b46f4.md) [`009b5cf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5cf8.md) [`009b5da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5da8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`0043c5b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043c/0043c5b8.md) · 呼出先 7件 [`009b56a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b5/009b56a0.md) [`009b6ca4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6ca4.md) [`009b6d54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6d54.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ad91c ["INT_ADD", "register:40f0:8", ["const:9ad91c:8", "const:4:8"]]
- 009ad91c ["CALL", null, ["callee:00c54d60:8"]]
+ 009ae8c8 ["INT_ADD", "register:40f0:8", ["const:9ae8c8:8", "const:4:8"]]
+ 009ae8c8 ["CALL", null, ["callee:00c54d60:8"]]
- 009ad924 ["INT_ADD", "register:40f0:8", ["const:9ad924:8", "const:4:8"]]
- 009ad924 ["CALL", null, ["callee:009b6ca4:8"]]
+ 009ae8d0 ["INT_ADD", "register:40f0:8", ["const:9ae8d0:8", "const:4:8"]]
+ 009ae8d0 ["CALL", null, ["callee:009b6ca4:8"]]
- 009ad938 ["INT_ADD", "register:40f0:8", ["const:9ad938:8", "const:4:8"]]
- 009ad938 ["CALL", null, ["callee:009b56a0:8"]]
+ 009ae8e4 ["INT_ADD", "register:40f0:8", ["const:9ae8e4:8", "const:4:8"]]
+ 009ae8e4 ["CALL", null, ["callee:009b56a0:8"]]
~~~


<a id="compare-0cbd6031139b85fe396dc70573787597"></a>

### [`009ad9d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009ad9d4.md) → [`009ae980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ae/009ae980.md) FUN_009ae980

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 11件 [`0076453c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/0076453c.md) [`00792a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00792/00792a20.md) [`0085d54c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085d/0085d54c.md) [`009afefc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009afefc.md) [`009b8ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b8ba4.md) · 呼出先 9件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`009b1ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b1/009b1ee4.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 11件 [`00764918`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00764/00764918.md) [`00792dfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00792/00792dfc.md) [`0085e4f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085e/0085e4f8.md) [`009b0ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b0/009b0ea8.md) [`009b9b50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b9/009b9b50.md) · 呼出先 9件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`009b2e90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b2/009b2e90.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ada70 ["INT_ADD", "register:40f0:8", ["const:9ada70:8", "const:4:8"]]
- 009ada70 ["CALL", null, ["callee:00c54d60:8"]]
+ 009aea1c ["INT_ADD", "register:40f0:8", ["const:9aea1c:8", "const:4:8"]]
+ 009aea1c ["CALL", null, ["callee:00c54d60:8"]]
- 009adad4 ["INT_ADD", "register:40f0:8", ["const:9adad4:8", "const:4:8"]]
- 009adad4 ["CALL", null, ["callee:00c58f30:8"]]
+ 009aea80 ["INT_ADD", "register:40f0:8", ["const:9aea80:8", "const:4:8"]]
+ 009aea80 ["CALL", null, ["callee:00c58f30:8"]]
- 009adafc ["INT_ADD", "register:40f0:8", ["const:9adafc:8", "const:4:8"]]
- 009adafc ["CALL", null, ["callee:00c590a0:8"]]
+ 009aeaa8 ["INT_ADD", "register:40f0:8", ["const:9aeaa8:8", "const:4:8"]]
+ 009aeaa8 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-e25ae1c35c5ebcf815a68c8e25748880"></a>

### [`009adbcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009adbcc.md) → [`009aeb78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ae/009aeb78.md) FUN_009aeb78

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0072b1f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072b/0072b1f8.md) [`00793960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00793/00793960.md) · 呼出先 5件 [`009b5ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5ce8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`0072b5a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072b/0072b5a8.md) [`00793d3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00793/00793d3c.md) · 呼出先 5件 [`009b6c94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6c94.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009adc1c ["INT_ADD", "register:40f0:8", ["const:9adc1c:8", "const:4:8"]]
- 009adc1c ["CALL", null, ["callee:00c54d60:8"]]
+ 009aebc8 ["INT_ADD", "register:40f0:8", ["const:9aebc8:8", "const:4:8"]]
+ 009aebc8 ["CALL", null, ["callee:00c54d60:8"]]
- 009adc24 ["INT_ADD", "register:40f0:8", ["const:9adc24:8", "const:4:8"]]
- 009adc24 ["CALL", null, ["callee:009b6c94:8"]]
+ 009aebd0 ["INT_ADD", "register:40f0:8", ["const:9aebd0:8", "const:4:8"]]
+ 009aebd0 ["CALL", null, ["callee:009b6c94:8"]]
- 009adc44 ["INT_ADD", "register:40f0:8", ["const:9adc44:8", "const:4:8"]]
- 009adc44 ["CALL", null, ["callee:00c54d90:8"]]
+ 009aebf0 ["INT_ADD", "register:40f0:8", ["const:9aebf0:8", "const:4:8"]]
+ 009aebf0 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-60a074aab7ead8c3cf9fff25a8bd75f7"></a>

### [`009adcd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009adcd8.md) → [`009aec84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ae/009aec84.md) FUN_009aec84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0061308c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00613/0061308c.md) [`00613ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00613/00613ca4.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 6件 [`009aad74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aad74.md) [`009b5ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5ce8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 3件 [`0061343c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00613/0061343c.md) [`00614054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00614/00614054.md) [`007e00a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007e0/007e00a4.md) · 呼出先 6件 [`009abd20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ab/009abd20.md) [`009b6c94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6c94.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009add28 ["INT_ADD", "register:40f0:8", ["const:9add28:8", "const:4:8"]]
- 009add28 ["CALL", null, ["callee:00c54d60:8"]]
+ 009aecd4 ["INT_ADD", "register:40f0:8", ["const:9aecd4:8", "const:4:8"]]
+ 009aecd4 ["CALL", null, ["callee:00c54d60:8"]]
- 009add30 ["INT_ADD", "register:40f0:8", ["const:9add30:8", "const:4:8"]]
- 009add30 ["CALL", null, ["callee:009b6c94:8"]]
+ 009aecdc ["INT_ADD", "register:40f0:8", ["const:9aecdc:8", "const:4:8"]]
+ 009aecdc ["CALL", null, ["callee:009b6c94:8"]]
- 009add50 ["INT_ADD", "register:40f0:8", ["const:9add50:8", "const:4:8"]]
- 009add50 ["CALL", null, ["callee:00c54d90:8"]]
+ 009aecfc ["INT_ADD", "register:40f0:8", ["const:9aecfc:8", "const:4:8"]]
+ 009aecfc ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-3fbf14fd21da1fd6e826b932ff9404d7"></a>

### [`009ade10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009ade10.md) → [`009aedbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ae/009aedbc.md) FUN_009aedbc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0061308c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00613/0061308c.md) · 呼出先 6件 [`009b5ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5ce8.md) [`009b5d28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5d28.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`0061343c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00613/0061343c.md) · 呼出先 6件 [`009b6c94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6c94.md) [`009b6cd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6cd4.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ade60 ["INT_ADD", "register:40f0:8", ["const:9ade60:8", "const:4:8"]]
- 009ade60 ["CALL", null, ["callee:00c54d60:8"]]
+ 009aee0c ["INT_ADD", "register:40f0:8", ["const:9aee0c:8", "const:4:8"]]
+ 009aee0c ["CALL", null, ["callee:00c54d60:8"]]
- 009ade68 ["INT_ADD", "register:40f0:8", ["const:9ade68:8", "const:4:8"]]
- 009ade68 ["CALL", null, ["callee:009b6c94:8"]]
+ 009aee14 ["INT_ADD", "register:40f0:8", ["const:9aee14:8", "const:4:8"]]
+ 009aee14 ["CALL", null, ["callee:009b6c94:8"]]
- 009ade7c ["INT_ADD", "register:40f0:8", ["const:9ade7c:8", "const:4:8"]]
- 009ade7c ["CALL", null, ["callee:00c54d90:8"]]
+ 009aee28 ["INT_ADD", "register:40f0:8", ["const:9aee28:8", "const:4:8"]]
+ 009aee28 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-c019f88e038d4629ce2f64dc5378a843"></a>

### [`009adf3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009adf3c.md) → [`009aeee8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ae/009aeee8.md) FUN_009aeee8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`00605294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/00605294.md) [`00613ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00613/00613ca4.md) [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 6件 [`009b5ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5ce8.md) [`009b5d08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5d08.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 4件 [`00605644`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00605/00605644.md) [`00614054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00614/00614054.md) [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`007e00a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007e0/007e00a4.md) · 呼出先 6件 [`009b6c94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6c94.md) [`009b6cb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6cb4.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009adf88 ["INT_ADD", "register:40f0:8", ["const:9adf88:8", "const:4:8"]]
- 009adf88 ["CALL", null, ["callee:00c54d60:8"]]
+ 009aef34 ["INT_ADD", "register:40f0:8", ["const:9aef34:8", "const:4:8"]]
+ 009aef34 ["CALL", null, ["callee:00c54d60:8"]]
- 009adf90 ["INT_ADD", "register:40f0:8", ["const:9adf90:8", "const:4:8"]]
- 009adf90 ["CALL", null, ["callee:009b6c94:8"]]
+ 009aef3c ["INT_ADD", "register:40f0:8", ["const:9aef3c:8", "const:4:8"]]
+ 009aef3c ["CALL", null, ["callee:009b6c94:8"]]
- 009adfa4 ["INT_ADD", "register:40f0:8", ["const:9adfa4:8", "const:4:8"]]
- 009adfa4 ["CALL", null, ["callee:00c54d90:8"]]
+ 009aef50 ["INT_ADD", "register:40f0:8", ["const:9aef50:8", "const:4:8"]]
+ 009aef50 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-758613b619ea718b46666939be260001"></a>

### [`009ae060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ae/009ae060.md) → [`009af00c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009af/009af00c.md) FUN_009af00c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0061308c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00613/0061308c.md) · 呼出先 6件 [`009b5ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5ce8.md) [`009b5cf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5cf8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`0061343c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00613/0061343c.md) · 呼出先 6件 [`009b6c94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6c94.md) [`009b6ca4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6ca4.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ae0ac ["INT_ADD", "register:40f0:8", ["const:9ae0ac:8", "const:4:8"]]
- 009ae0ac ["CALL", null, ["callee:00c54d60:8"]]
+ 009af058 ["INT_ADD", "register:40f0:8", ["const:9af058:8", "const:4:8"]]
+ 009af058 ["CALL", null, ["callee:00c54d60:8"]]
- 009ae0b4 ["INT_ADD", "register:40f0:8", ["const:9ae0b4:8", "const:4:8"]]
- 009ae0b4 ["CALL", null, ["callee:009b6c94:8"]]
+ 009af060 ["INT_ADD", "register:40f0:8", ["const:9af060:8", "const:4:8"]]
+ 009af060 ["CALL", null, ["callee:009b6c94:8"]]
- 009ae0c8 ["INT_ADD", "register:40f0:8", ["const:9ae0c8:8", "const:4:8"]]
- 009ae0c8 ["CALL", null, ["callee:00c54d90:8"]]
+ 009af074 ["INT_ADD", "register:40f0:8", ["const:9af074:8", "const:4:8"]]
+ 009af074 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-9fad4bb94ddcb96dbb250022c7c4807a"></a>

### [`009ae184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ae/009ae184.md) → [`009af130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009af/009af130.md) FUN_009af130

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0061308c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00613/0061308c.md) · 呼出先 6件 [`009b3bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b3/009b3bbc.md) [`009b5ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5ce8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`0061343c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00613/0061343c.md) · 呼出先 6件 [`009b4b68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b4/009b4b68.md) [`009b6c94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6c94.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ae1dc ["INT_ADD", "register:40f0:8", ["const:9ae1dc:8", "const:4:8"]]
- 009ae1dc ["CALL", null, ["callee:00c54d60:8"]]
+ 009af188 ["INT_ADD", "register:40f0:8", ["const:9af188:8", "const:4:8"]]
+ 009af188 ["CALL", null, ["callee:00c54d60:8"]]
- 009ae1e4 ["INT_ADD", "register:40f0:8", ["const:9ae1e4:8", "const:4:8"]]
- 009ae1e4 ["CALL", null, ["callee:009b6c94:8"]]
+ 009af190 ["INT_ADD", "register:40f0:8", ["const:9af190:8", "const:4:8"]]
+ 009af190 ["CALL", null, ["callee:009b6c94:8"]]
- 009ae1f8 ["INT_ADD", "register:40f0:8", ["const:9ae1f8:8", "const:4:8"]]
- 009ae1f8 ["CALL", null, ["callee:00c54d90:8"]]
+ 009af1a4 ["INT_ADD", "register:40f0:8", ["const:9af1a4:8", "const:4:8"]]
+ 009af1a4 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-b640c10339c5bab9532c2a2bace48c3c"></a>

### [`009ae958`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ae/009ae958.md) → [`009af904`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009af/009af904.md) FUN_009af904

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ae978 ["INT_ADD", "register:40f0:8", ["const:9ae978:8", "const:4:8"]]
- 009ae978 ["CALL", null, ["callee:00c54d90:8"]]
+ 009af924 ["INT_ADD", "register:40f0:8", ["const:9af924:8", "const:4:8"]]
+ 009af924 ["CALL", null, ["callee:00c54d90:8"]]
- 009ae98c ["COPY", "register:0:8", ["register:4040:8"]]
- 009ae98c ["INT_ADD", "register:40f0:8", ["const:9ae98c:8", "const:4:8"]]
- 009ae98c ["CALLIND", null, ["register:0:8"]]
+ 009af938 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009af938 ["INT_ADD", "register:40f0:8", ["const:9af938:8", "const:4:8"]]
+ 009af938 ["CALLIND", null, ["register:0:8"]]
- 009ae994 ["INT_ADD", "register:40f0:8", ["const:9ae994:8", "const:4:8"]]
- 009ae994 ["CALL", null, ["callee:00c58f20:8"]]
+ 009af940 ["INT_ADD", "register:40f0:8", ["const:9af940:8", "const:4:8"]]
+ 009af940 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-7d4292c6858dca3c8673f77cccc631b0"></a>

### [`009aeb80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ae/009aeb80.md) → [`009afb2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009af/009afb2c.md) FUN_009afb2c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`0075916c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00759/0075916c.md) [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`007738ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00773/007738ec.md) · 呼出先 5件 [`009b5cf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5cf8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 4件 [`0075951c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00759/0075951c.md) [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) [`00773cc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00773/00773cc8.md) · 呼出先 5件 [`009b6ca4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6ca4.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009aebc4 ["INT_ADD", "register:40f0:8", ["const:9aebc4:8", "const:4:8"]]
- 009aebc4 ["CALL", null, ["callee:00c54d60:8"]]
+ 009afb70 ["INT_ADD", "register:40f0:8", ["const:9afb70:8", "const:4:8"]]
+ 009afb70 ["CALL", null, ["callee:00c54d60:8"]]
- 009aebcc ["INT_ADD", "register:40f0:8", ["const:9aebcc:8", "const:4:8"]]
- 009aebcc ["CALL", null, ["callee:009b6ca4:8"]]
+ 009afb78 ["INT_ADD", "register:40f0:8", ["const:9afb78:8", "const:4:8"]]
+ 009afb78 ["CALL", null, ["callee:009b6ca4:8"]]
- 009aebe8 ["INT_ADD", "register:40f0:8", ["const:9aebe8:8", "const:4:8"]]
- 009aebe8 ["CALL", null, ["callee:00c54d90:8"]]
+ 009afb94 ["INT_ADD", "register:40f0:8", ["const:9afb94:8", "const:4:8"]]
+ 009afb94 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-d890e2761bfd955033a96af34db1c223"></a>

### [`009aec74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ae/009aec74.md) → [`009afc20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009af/009afc20.md) FUN_009afc20

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 5件 [`009b5d84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5d84.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) · 呼出先 5件 [`009b6d30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6d30.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009aecdc ["INT_ADD", "register:40f0:8", ["const:9aecdc:8", "const:4:8"]]
- 009aecdc ["CALL", null, ["callee:00c54d60:8"]]
+ 009afc88 ["INT_ADD", "register:40f0:8", ["const:9afc88:8", "const:4:8"]]
+ 009afc88 ["CALL", null, ["callee:00c54d60:8"]]
- 009aece8 ["INT_ADD", "register:40f0:8", ["const:9aece8:8", "const:4:8"]]
- 009aece8 ["CALL", null, ["callee:009b6d30:8"]]
+ 009afc94 ["INT_ADD", "register:40f0:8", ["const:9afc94:8", "const:4:8"]]
+ 009afc94 ["CALL", null, ["callee:009b6d30:8"]]
- 009aecfc ["INT_ADD", "register:40f0:8", ["const:9aecfc:8", "const:4:8"]]
- 009aecfc ["CALL", null, ["callee:00c54d90:8"]]
+ 009afca8 ["INT_ADD", "register:40f0:8", ["const:9afca8:8", "const:4:8"]]
+ 009afca8 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-06d98bfbc40232158a8ca06d372c084e"></a>

### [`009af020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009af020.md) → [`009affcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009af/009affcc.md) FUN_009affcc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 6件 [`009b5cf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5cf8.md) [`009b5d3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5d3c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) · 呼出先 6件 [`009b6ca4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6ca4.md) [`009b6ce8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6ce8.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009af08c ["INT_ADD", "register:40f0:8", ["const:9af08c:8", "const:4:8"]]
- 009af08c ["CALL", null, ["callee:00c54d60:8"]]
+ 009b0038 ["INT_ADD", "register:40f0:8", ["const:9b0038:8", "const:4:8"]]
+ 009b0038 ["CALL", null, ["callee:00c54d60:8"]]
- 009af09c ["INT_ADD", "register:40f0:8", ["const:9af09c:8", "const:4:8"]]
- 009af09c ["CALL", null, ["callee:009b6ca4:8"]]
+ 009b0048 ["INT_ADD", "register:40f0:8", ["const:9b0048:8", "const:4:8"]]
+ 009b0048 ["CALL", null, ["callee:009b6ca4:8"]]
- 009af0ac ["INT_ADD", "register:40f0:8", ["const:9af0ac:8", "const:4:8"]]
- 009af0ac ["CALL", null, ["callee:009b6ce8:8"]]
+ 009b0058 ["INT_ADD", "register:40f0:8", ["const:9b0058:8", "const:4:8"]]
+ 009b0058 ["CALL", null, ["callee:009b6ce8:8"]]
~~~


<a id="compare-d2005da8859a2350f82730f2bd5a2532"></a>

### [`009af178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009af178.md) → [`009b0124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b0/009b0124.md) FUN_009b0124

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 5件 [`009b5d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5d4c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) · 呼出先 5件 [`009b6cf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6cf8.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009af1c8 ["INT_ADD", "register:40f0:8", ["const:9af1c8:8", "const:4:8"]]
- 009af1c8 ["CALL", null, ["callee:00c54d60:8"]]
+ 009b0174 ["INT_ADD", "register:40f0:8", ["const:9b0174:8", "const:4:8"]]
+ 009b0174 ["CALL", null, ["callee:00c54d60:8"]]
- 009af1d8 ["INT_ADD", "register:40f0:8", ["const:9af1d8:8", "const:4:8"]]
- 009af1d8 ["CALL", null, ["callee:009b6cf8:8"]]
+ 009b0184 ["INT_ADD", "register:40f0:8", ["const:9b0184:8", "const:4:8"]]
+ 009b0184 ["CALL", null, ["callee:009b6cf8:8"]]
- 009af1e8 ["INT_ADD", "register:40f0:8", ["const:9af1e8:8", "const:4:8"]]
- 009af1e8 ["CALL", null, ["callee:00c54d90:8"]]
+ 009b0194 ["INT_ADD", "register:40f0:8", ["const:9b0194:8", "const:4:8"]]
+ 009b0194 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-8c59a101c4d035988fcc64bc2639622e"></a>

### [`009af518`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009af518.md) → [`009b04c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b0/009b04c4.md) FUN_009b04c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 6件 [`009aadc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aadc0.md) [`009b5ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5ce8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) · 呼出先 6件 [`009abd6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ab/009abd6c.md) [`009b6c94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6c94.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009af568 ["INT_ADD", "register:40f0:8", ["const:9af568:8", "const:4:8"]]
- 009af568 ["CALL", null, ["callee:00c54d60:8"]]
+ 009b0514 ["INT_ADD", "register:40f0:8", ["const:9b0514:8", "const:4:8"]]
+ 009b0514 ["CALL", null, ["callee:00c54d60:8"]]
- 009af570 ["INT_ADD", "register:40f0:8", ["const:9af570:8", "const:4:8"]]
- 009af570 ["CALL", null, ["callee:009b6c94:8"]]
+ 009b051c ["INT_ADD", "register:40f0:8", ["const:9b051c:8", "const:4:8"]]
+ 009b051c ["CALL", null, ["callee:009b6c94:8"]]
- 009af590 ["INT_ADD", "register:40f0:8", ["const:9af590:8", "const:4:8"]]
- 009af590 ["CALL", null, ["callee:00c54d90:8"]]
+ 009b053c ["INT_ADD", "register:40f0:8", ["const:9b053c:8", "const:4:8"]]
+ 009b053c ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-510ce1db6771fb38f81176f83f363737"></a>

### [`009af650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009af650.md) → [`009b05fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b0/009b05fc.md) FUN_009b05fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 2件 [`009b5ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5ce8.md) [`009b5d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5d70.md)
- 新版 呼出元 1件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) · 呼出先 2件 [`009b6c94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6c94.md) [`009b6d1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6d1c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009af678 ["INT_ADD", "register:40f0:8", ["const:9af678:8", "const:4:8"]]
- 009af678 ["CALL", null, ["callee:009b6c94:8"]]
+ 009b0624 ["INT_ADD", "register:40f0:8", ["const:9b0624:8", "const:4:8"]]
+ 009b0624 ["CALL", null, ["callee:009b6c94:8"]]
~~~


<a id="compare-dc3ab88550f661ce93619f56785444f3"></a>

### [`009af6b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009af6b8.md) → [`009b0664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b0/009b0664.md) FUN_009b0664

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0072b1f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072b/0072b1f8.md) · 呼出先 9件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`009b41a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b41a8.md) [`009b5db8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5db8.md) [`009b5dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5dc8.md) [`00a33c70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a33/00a33c70.md)
- 新版 呼出元 1件 [`0072b5a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072b/0072b5a8.md) · 呼出先 9件 [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`009b5154`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b5/009b5154.md) [`009b6d64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6d64.md) [`009b6d74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6d74.md) [`00a34c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a34/00a34c64.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009af718 ["INT_ADD", "register:40f0:8", ["const:9af718:8", "const:4:8"]]
- 009af718 ["CALL", null, ["callee:00c54d60:8"]]
+ 009b06c4 ["INT_ADD", "register:40f0:8", ["const:9b06c4:8", "const:4:8"]]
+ 009b06c4 ["CALL", null, ["callee:00c54d60:8"]]
- 009af720 ["INT_ADD", "register:40f0:8", ["const:9af720:8", "const:4:8"]]
- 009af720 ["CALL", null, ["callee:009b5154:8"]]
+ 009b06cc ["INT_ADD", "register:40f0:8", ["const:9b06cc:8", "const:4:8"]]
+ 009b06cc ["CALL", null, ["callee:009b5154:8"]]
- 009af738 ["INT_ADD", "register:40f0:8", ["const:9af738:8", "const:4:8"]]
- 009af738 ["CALL", null, ["callee:00c54d90:8"]]
+ 009b06e4 ["INT_ADD", "register:40f0:8", ["const:9b06e4:8", "const:4:8"]]
+ 009b06e4 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-2cb16141c629cb25167511df437b7906"></a>

### [`009af8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009af8e0.md) → [`009b088c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b0/009b088c.md) FUN_009b088c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a9c760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9c/00a9c760.md) · 呼出先 6件 [`0080666c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00806/0080666c.md) [`009b5ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5ce8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`00a9d754`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9d/00a9d754.md) · 呼出先 6件 [`008075d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00807/008075d0.md) [`009b6c94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6c94.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009af968 ["INT_ADD", "register:40f0:8", ["const:9af968:8", "const:4:8"]]
- 009af968 ["CALL", null, ["callee:00c54d60:8"]]
+ 009b0914 ["INT_ADD", "register:40f0:8", ["const:9b0914:8", "const:4:8"]]
+ 009b0914 ["CALL", null, ["callee:00c54d60:8"]]
- 009af970 ["INT_ADD", "register:40f0:8", ["const:9af970:8", "const:4:8"]]
- 009af970 ["CALL", null, ["callee:009b6c94:8"]]
+ 009b091c ["INT_ADD", "register:40f0:8", ["const:9b091c:8", "const:4:8"]]
+ 009b091c ["CALL", null, ["callee:009b6c94:8"]]
- 009af97c ["INT_ADD", "register:40f0:8", ["const:9af97c:8", "const:4:8"]]
- 009af97c ["CALL", null, ["callee:008075d0:8"]]
+ 009b0928 ["INT_ADD", "register:40f0:8", ["const:9b0928:8", "const:4:8"]]
+ 009b0928 ["CALL", null, ["callee:008075d0:8"]]
~~~


<a id="compare-72a2509f5f9285ece62302fcec2e91c8"></a>

### [`009afe78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009afe78.md) → [`009b0e24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b0/009b0e24.md) FUN_009b0e24

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009af9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009af9dc.md) · 呼出先 0件 
- 新版 呼出元 1件 [`009b0988`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b0/009b0988.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009afeb4 ["COPY", "register:0:8", ["register:4040:8"]]
- 009afeb4 ["INT_ADD", "register:40f0:8", ["const:9afeb4:8", "const:4:8"]]
- 009afeb4 ["CALLIND", null, ["register:0:8"]]
+ 009b0e60 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b0e60 ["INT_ADD", "register:40f0:8", ["const:9b0e60:8", "const:4:8"]]
+ 009b0e60 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-469bd8f967e9efb27368d29e211ce36a"></a>

### [`009b0528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0528.md) → [`009b14d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b1/009b14d4.md) FUN_009b14d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00869f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869f4c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0086aef8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086aef8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b0540 ["INT_ADD", "register:40f0:8", ["const:9b0540:8", "const:4:8"]]
- 009b0540 ["CALL", null, ["callee:0086aef8:8"]]
+ 009b14ec ["INT_ADD", "register:40f0:8", ["const:9b14ec:8", "const:4:8"]]
+ 009b14ec ["CALL", null, ["callee:0086aef8:8"]]
~~~


<a id="compare-244e1921a7eb5c9cbfcce639ed1881ed"></a>

### [`009b0c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0c3c.md) → [`009b1be8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b1/009b1be8.md) FUN_009b1be8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`009acac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009acac8.md) [`009acc84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009acc84.md) [`009acfbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009acfbc.md) [`009ad4f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009ad4f8.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`009b0d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0d98.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 4件 [`009ada74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009ada74.md) [`009adc30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009adc30.md) [`009adf68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009adf68.md) [`009ae4a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ae/009ae4a4.md) · 呼出先 7件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`009b1d44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b1/009b1d44.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b0ca8 ["INT_ADD", "register:40f0:8", ["const:9b0ca8:8", "const:4:8"]]
- 009b0ca8 ["CALL", null, ["callee:00c58f30:8"]]
+ 009b1c54 ["INT_ADD", "register:40f0:8", ["const:9b1c54:8", "const:4:8"]]
+ 009b1c54 ["CALL", null, ["callee:00c58f30:8"]]
- 009b0cd4 ["INT_ADD", "register:40f0:8", ["const:9b0cd4:8", "const:4:8"]]
- 009b0cd4 ["CALL", null, ["callee:00c54d60:8"]]
+ 009b1c80 ["INT_ADD", "register:40f0:8", ["const:9b1c80:8", "const:4:8"]]
+ 009b1c80 ["CALL", null, ["callee:00c54d60:8"]]
- 009b0d34 ["INT_ADD", "register:40f0:8", ["const:9b0d34:8", "const:4:8"]]
- 009b0d34 ["CALL", null, ["callee:00c54d90:8"]]
+ 009b1ce0 ["INT_ADD", "register:40f0:8", ["const:9b1ce0:8", "const:4:8"]]
+ 009b1ce0 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-d4cc484ff8e519f31e97591a96b343a0"></a>

### [`009b0dac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0dac.md) → [`009b1d58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b1/009b1d58.md) FUN_009b1d58

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`009acfbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009acfbc.md) [`009b0dac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0dac.md) · 呼出先 3件 [`009b0dac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0dac.md) [`009b1968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b1/009b1968.md) [`009b1cb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b1/009b1cb8.md)
- 新版 呼出元 2件 [`009adf68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009adf68.md) [`009b1d58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b1/009b1d58.md) · 呼出先 3件 [`009b1d58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b1/009b1d58.md) [`009b2914`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b2/009b2914.md) [`009b2c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b2/009b2c64.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b141c ["INT_ADD", "register:40f0:8", ["const:9b141c:8", "const:4:8"]]
- 009b141c ["CALL", null, ["callee:009b2914:8"]]
+ 009b23c8 ["INT_ADD", "register:40f0:8", ["const:9b23c8:8", "const:4:8"]]
+ 009b23c8 ["CALL", null, ["callee:009b2914:8"]]
- 009b1434 ["INT_ADD", "register:40f0:8", ["const:9b1434:8", "const:4:8"]]
- 009b1434 ["CALL", null, ["callee:009b2914:8"]]
+ 009b23e0 ["INT_ADD", "register:40f0:8", ["const:9b23e0:8", "const:4:8"]]
+ 009b23e0 ["CALL", null, ["callee:009b2914:8"]]
- 009b1474 ["INT_ADD", "register:40f0:8", ["const:9b1474:8", "const:4:8"]]
- 009b1474 ["CALL", null, ["local:b0:8"]]
+ 009b2420 ["INT_ADD", "register:40f0:8", ["const:9b2420:8", "const:4:8"]]
+ 009b2420 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-30f6cd5912805fa07560f1d449cc497b"></a>

### [`009b1968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b1/009b1968.md) → [`009b2914`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b2/009b2914.md) FUN_009b2914

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009b0dac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0dac.md) · 呼出先 1件 [`009b1cb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b1/009b1cb8.md)
- 新版 呼出元 1件 [`009b1d58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b1/009b1d58.md) · 呼出先 1件 [`009b2c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b2/009b2c64.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b19fc ["INT_ADD", "register:40f0:8", ["const:9b19fc:8", "const:4:8"]]
- 009b19fc ["CALL", null, ["callee:009b2c64:8"]]
+ 009b29a8 ["INT_ADD", "register:40f0:8", ["const:9b29a8:8", "const:4:8"]]
+ 009b29a8 ["CALL", null, ["callee:009b2c64:8"]]
- 009b1b18 ["INT_ADD", "register:40f0:8", ["const:9b1b18:8", "const:4:8"]]
- 009b1b18 ["CALL", null, ["callee:009b2c64:8"]]
+ 009b2ac4 ["INT_ADD", "register:40f0:8", ["const:9b2ac4:8", "const:4:8"]]
+ 009b2ac4 ["CALL", null, ["callee:009b2c64:8"]]
~~~


<a id="compare-dc83bbaacaa01ed08b0a034c35e46bdd"></a>

### [`009b1e30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b1/009b1e30.md) → [`009b2ddc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b2/009b2ddc.md) FUN_009b2ddc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009acfbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009acfbc.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009adf68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009adf68.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b1ea0 ["INT_ADD", "register:40f0:8", ["const:9b1ea0:8", "const:4:8"]]
- 009b1ea0 ["CALL", null, ["callee:00c54d90:8"]]
+ 009b2e4c ["INT_ADD", "register:40f0:8", ["const:9b2e4c:8", "const:4:8"]]
+ 009b2e4c ["CALL", null, ["callee:00c54d90:8"]]
- 009b1eb4 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b1eb4 ["INT_ADD", "register:40f0:8", ["const:9b1eb4:8", "const:4:8"]]
- 009b1eb4 ["CALLIND", null, ["register:0:8"]]
+ 009b2e60 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b2e60 ["INT_ADD", "register:40f0:8", ["const:9b2e60:8", "const:4:8"]]
+ 009b2e60 ["CALLIND", null, ["register:0:8"]]
- 009b1ebc ["INT_ADD", "register:40f0:8", ["const:9b1ebc:8", "const:4:8"]]
- 009b1ebc ["CALL", null, ["callee:00c58f20:8"]]
+ 009b2e68 ["INT_ADD", "register:40f0:8", ["const:9b2e68:8", "const:4:8"]]
+ 009b2e68 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-69dc0dbd2a921f6e4ee3c5fb880a18cb"></a>

### [`009b2160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2160.md) → [`009b310c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b3/009b310c.md) FUN_009b310c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b2180 ["INT_ADD", "register:40f0:8", ["const:9b2180:8", "const:4:8"]]
- 009b2180 ["CALL", null, ["callee:00c54d90:8"]]
+ 009b312c ["INT_ADD", "register:40f0:8", ["const:9b312c:8", "const:4:8"]]
+ 009b312c ["CALL", null, ["callee:00c54d90:8"]]
- 009b2194 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b2194 ["INT_ADD", "register:40f0:8", ["const:9b2194:8", "const:4:8"]]
- 009b2194 ["CALLIND", null, ["register:0:8"]]
+ 009b3140 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b3140 ["INT_ADD", "register:40f0:8", ["const:9b3140:8", "const:4:8"]]
+ 009b3140 ["CALLIND", null, ["register:0:8"]]
- 009b219c ["INT_ADD", "register:40f0:8", ["const:9b219c:8", "const:4:8"]]
- 009b219c ["CALL", null, ["callee:00c58f20:8"]]
+ 009b3148 ["INT_ADD", "register:40f0:8", ["const:9b3148:8", "const:4:8"]]
+ 009b3148 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-bbec1fde7caf868a1c54bcda4db98a2c"></a>

### [`009b21e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b21e4.md) → [`009b3190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b3/009b3190.md) FUN_009b3190

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ae2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ae/009ae2c0.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009af26c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009af/009af26c.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b2204 ["INT_ADD", "register:40f0:8", ["const:9b2204:8", "const:4:8"]]
- 009b2204 ["CALL", null, ["callee:00c54d90:8"]]
+ 009b31b0 ["INT_ADD", "register:40f0:8", ["const:9b31b0:8", "const:4:8"]]
+ 009b31b0 ["CALL", null, ["callee:00c54d90:8"]]
- 009b2218 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b2218 ["INT_ADD", "register:40f0:8", ["const:9b2218:8", "const:4:8"]]
- 009b2218 ["CALLIND", null, ["register:0:8"]]
+ 009b31c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b31c4 ["INT_ADD", "register:40f0:8", ["const:9b31c4:8", "const:4:8"]]
+ 009b31c4 ["CALLIND", null, ["register:0:8"]]
- 009b2220 ["INT_ADD", "register:40f0:8", ["const:9b2220:8", "const:4:8"]]
- 009b2220 ["CALL", null, ["callee:00c58f20:8"]]
+ 009b31cc ["INT_ADD", "register:40f0:8", ["const:9b31cc:8", "const:4:8"]]
+ 009b31cc ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-dbcadf518ecdbee7c0f519fe407c363b"></a>

### [`009b2264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2264.md) → [`009b3210`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b3/009b3210.md) FUN_009b3210

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`005aa1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa1b0.md) [`009aa034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aa034.md) [`009ae2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ae/009ae2c0.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`005aa560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa560.md) [`009aafe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009aa/009aafe0.md) [`009af26c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009af/009af26c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b22fc ["INT_ADD", "register:40f0:8", ["const:9b22fc:8", "const:4:8"]]
- 009b22fc ["CALL", null, ["callee:0043be80:8"]]
+ 009b32a8 ["INT_ADD", "register:40f0:8", ["const:9b32a8:8", "const:4:8"]]
+ 009b32a8 ["CALL", null, ["callee:0043be80:8"]]
- 009b2358 ["INT_ADD", "register:40f0:8", ["const:9b2358:8", "const:4:8"]]
- 009b2358 ["CALL", null, ["callee:009aafe0:8"]]
+ 009b3304 ["INT_ADD", "register:40f0:8", ["const:9b3304:8", "const:4:8"]]
+ 009b3304 ["CALL", null, ["callee:009aafe0:8"]]
- 009b236c ["INT_ADD", "register:40f0:8", ["const:9b236c:8", "const:4:8"]]
- 009b236c ["CALL", null, ["callee:009af26c:8"]]
+ 009b3318 ["INT_ADD", "register:40f0:8", ["const:9b3318:8", "const:4:8"]]
+ 009b3318 ["CALL", null, ["callee:009af26c:8"]]
~~~


<a id="compare-4c0432760d99b5d445878a9d9945a262"></a>

### [`009b2608`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2608.md) → [`009b35b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b3/009b35b4.md) FUN_009b35b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ae2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ae/009ae2c0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009af26c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009af/009af26c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b2644 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b2644 ["INT_ADD", "register:40f0:8", ["const:9b2644:8", "const:4:8"]]
- 009b2644 ["CALLIND", null, ["register:0:8"]]
+ 009b35f0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b35f0 ["INT_ADD", "register:40f0:8", ["const:9b35f0:8", "const:4:8"]]
+ 009b35f0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-37cbcf70a38aa5e04410d49526d14174"></a>

### [`009b2658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2658.md) → [`009b3604`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b3/009b3604.md) FUN_009b3604

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b2690 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b2690 ["INT_ADD", "register:40f0:8", ["const:9b2690:8", "const:4:8"]]
- 009b2690 ["CALLIND", null, ["register:0:8"]]
+ 009b363c ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b363c ["INT_ADD", "register:40f0:8", ["const:9b363c:8", "const:4:8"]]
+ 009b363c ["CALLIND", null, ["register:0:8"]]
- 009b26c4 ["INT_ADD", "register:40f0:8", ["const:9b26c4:8", "const:4:8"]]
- 009b26c4 ["CALL", null, ["callee:0045a0d4:8"]]
+ 009b3670 ["INT_ADD", "register:40f0:8", ["const:9b3670:8", "const:4:8"]]
+ 009b3670 ["CALL", null, ["callee:0045a0d4:8"]]
- 009b26c8 ["INT_ADD", "register:40f0:8", ["const:9b26c8:8", "const:4:8"]]
- 009b26c8 ["CALL", null, ["callee:00c58f80:8"]]
+ 009b3674 ["INT_ADD", "register:40f0:8", ["const:9b3674:8", "const:4:8"]]
+ 009b3674 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-f6a976046f0b03e4e8b1793cc43dc8c9"></a>

### [`009b2c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2c9c.md) → [`009b3c48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b3/009b3c48.md) FUN_009b3c48

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009af9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009af9dc.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009b0988`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b0/009b0988.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b2cdc ["COPY", "register:0:8", ["register:4040:8"]]
- 009b2cdc ["INT_ADD", "register:40f0:8", ["const:9b2cdc:8", "const:4:8"]]
- 009b2cdc ["CALLIND", null, ["register:0:8"]]
+ 009b3c88 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b3c88 ["INT_ADD", "register:40f0:8", ["const:9b3c88:8", "const:4:8"]]
+ 009b3c88 ["CALLIND", null, ["register:0:8"]]
- 009b2d08 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b2d08 ["INT_ADD", "register:40f0:8", ["const:9b2d08:8", "const:4:8"]]
- 009b2d08 ["CALLIND", null, ["register:0:8"]]
+ 009b3cb4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b3cb4 ["INT_ADD", "register:40f0:8", ["const:9b3cb4:8", "const:4:8"]]
+ 009b3cb4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-af78d37b89957acfbf4280924d42aec8"></a>

### [`009b2d1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2d1c.md) → [`009b3cc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b3/009b3cc8.md) FUN_009b3cc8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b2d64 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b2d64 ["INT_ADD", "register:40f0:8", ["const:9b2d64:8", "const:4:8"]]
- 009b2d64 ["CALLIND", null, ["register:0:8"]]
+ 009b3d10 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b3d10 ["INT_ADD", "register:40f0:8", ["const:9b3d10:8", "const:4:8"]]
+ 009b3d10 ["CALLIND", null, ["register:0:8"]]
- 009b2dc8 ["INT_ADD", "register:40f0:8", ["const:9b2dc8:8", "const:4:8"]]
- 009b2dc8 ["CALL", null, ["callee:0045a0d4:8"]]
+ 009b3d74 ["INT_ADD", "register:40f0:8", ["const:9b3d74:8", "const:4:8"]]
+ 009b3d74 ["CALL", null, ["callee:0045a0d4:8"]]
- 009b2dcc ["INT_ADD", "register:40f0:8", ["const:9b2dcc:8", "const:4:8"]]
- 009b2dcc ["CALL", null, ["callee:00c58f80:8"]]
+ 009b3d78 ["INT_ADD", "register:40f0:8", ["const:9b3d78:8", "const:4:8"]]
+ 009b3d78 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-e3e65e064cb40155f3dc831c63e40dfe"></a>

### [`009b3b5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b3/009b3b5c.md) → [`009b4b08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b4/009b4b08.md) FUN_009b4b08

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0084938c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/0084938c.md) [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) [`009b0c30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0c30.md) · 呼出先 2件 [`00869f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869f4c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084a338`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084a338.md) [`0084f5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084f/0084f5a0.md) [`009b1bdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b1/009b1bdc.md) · 呼出先 2件 [`0086aef8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086aef8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b3b84 ["INT_ADD", "register:40f0:8", ["const:9b3b84:8", "const:4:8"]]
- 009b3b84 ["CALL", null, ["callee:0086aef8:8"]]
+ 009b4b30 ["INT_ADD", "register:40f0:8", ["const:9b4b30:8", "const:4:8"]]
+ 009b4b30 ["CALL", null, ["callee:0086aef8:8"]]
- 009b3b8c ["INT_ADD", "register:40f0:8", ["const:9b3b8c:8", "const:4:8"]]
- 009b3b8c ["CALL", null, ["callee:00c58f50:8"]]
+ 009b4b38 ["INT_ADD", "register:40f0:8", ["const:9b4b38:8", "const:4:8"]]
+ 009b4b38 ["CALL", null, ["callee:00c58f50:8"]]
- 009b3b9c ["INT_ADD", "register:40f0:8", ["const:9b3b9c:8", "const:4:8"]]
- 009b3b9c ["CALL", null, ["callee:00c58f50:8"]]
+ 009b4b48 ["INT_ADD", "register:40f0:8", ["const:9b4b48:8", "const:4:8"]]
+ 009b4b48 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-e231f455c303103c07c490dda60e760b"></a>

### [`009b593c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b593c.md) → [`009b68e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b68e8.md) FUN_009b68e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009acc84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009acc84.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00869f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869f4c.md) [`009ac30c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac30c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009adc30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009adc30.md) · 呼出先 5件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0086aef8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086aef8.md) [`009ad2b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009ad2b8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b5964 ["INT_ADD", "register:40f0:8", ["const:9b5964:8", "const:4:8"]]
- 009b5964 ["CALL", null, ["callee:00c58f30:8"]]
+ 009b6910 ["INT_ADD", "register:40f0:8", ["const:9b6910:8", "const:4:8"]]
+ 009b6910 ["CALL", null, ["callee:00c58f30:8"]]
- 009b59a4 ["INT_ADD", "register:40f0:8", ["const:9b59a4:8", "const:4:8"]]
- 009b59a4 ["CALL", null, ["callee:0043be80:8"]]
+ 009b6950 ["INT_ADD", "register:40f0:8", ["const:9b6950:8", "const:4:8"]]
+ 009b6950 ["CALL", null, ["callee:0043be80:8"]]
- 009b59e4 ["INT_ADD", "register:40f0:8", ["const:9b59e4:8", "const:4:8"]]
- 009b59e4 ["CALL", null, ["callee:009ad2b8:8"]]
+ 009b6990 ["INT_ADD", "register:40f0:8", ["const:9b6990:8", "const:4:8"]]
+ 009b6990 ["CALL", null, ["callee:009ad2b8:8"]]
~~~


<a id="compare-c183fe13a8d9372d18e3cb3d78a2df85"></a>

### [`009b5bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5bcc.md) → [`009b6b78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6b78.md) FUN_009b6b78

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009ac97c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac97c.md) · 呼出先 2件 [`009a93b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a93b8.md) [`009a9608`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a9608.md)
- 新版 呼出元 1件 [`009ad928`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009ad928.md) · 呼出先 2件 [`009aa364`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009aa/009aa364.md) [`009aa5b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009aa/009aa5b4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b5be8 ["INT_ADD", "register:40f0:8", ["const:9b5be8:8", "const:4:8"]]
- 009b5be8 ["CALL", null, ["callee:009aa364:8"]]
+ 009b6b94 ["INT_ADD", "register:40f0:8", ["const:9b6b94:8", "const:4:8"]]
+ 009b6b94 ["CALL", null, ["callee:009aa364:8"]]
~~~


<a id="compare-2acdb5480564a46cc988fa6c96ba9cb9"></a>

### [`009b5c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5c0c.md) → [`009b6bb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6bb8.md) FUN_009b6bb8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009acac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009acac8.md) · 呼出先 4件 [`009a9354`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a9354.md) [`009a9498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a9498.md) [`009a9618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a9618.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`009ada74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009ada74.md) · 呼出先 4件 [`009aa300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009aa/009aa300.md) [`009aa444`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009aa/009aa444.md) [`009aa5c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009aa/009aa5c4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b5c34 ["INT_ADD", "register:40f0:8", ["const:9b5c34:8", "const:4:8"]]
- 009b5c34 ["CALL", null, ["callee:00c58f30:8"]]
+ 009b6be0 ["INT_ADD", "register:40f0:8", ["const:9b6be0:8", "const:4:8"]]
+ 009b6be0 ["CALL", null, ["callee:00c58f30:8"]]
- 009b5c54 ["INT_ADD", "register:40f0:8", ["const:9b5c54:8", "const:4:8"]]
- 009b5c54 ["CALL", null, ["callee:009aa300:8"]]
+ 009b6c00 ["INT_ADD", "register:40f0:8", ["const:9b6c00:8", "const:4:8"]]
+ 009b6c00 ["CALL", null, ["callee:009aa300:8"]]
- 009b5c64 ["INT_ADD", "register:40f0:8", ["const:9b5c64:8", "const:4:8"]]
- 009b5c64 ["CALL", null, ["callee:009aa444:8"]]
+ 009b6c10 ["INT_ADD", "register:40f0:8", ["const:9b6c10:8", "const:4:8"]]
+ 009b6c10 ["CALL", null, ["callee:009aa444:8"]]
~~~


<a id="compare-1a03fdb23117fffe36bec73c7dec5c63"></a>

### [`009b5c80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5c80.md) → [`009b6c2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6c2c.md) FUN_009b6c2c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009ad4f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009ad4f8.md) · 呼出先 3件 [`009a9354`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a9354.md) [`009a9644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a9644.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`009ae4a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ae/009ae4a4.md) · 呼出先 3件 [`009aa300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009aa/009aa300.md) [`009aa5f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009aa/009aa5f0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b5ca8 ["INT_ADD", "register:40f0:8", ["const:9b5ca8:8", "const:4:8"]]
- 009b5ca8 ["CALL", null, ["callee:00c58f30:8"]]
+ 009b6c54 ["INT_ADD", "register:40f0:8", ["const:9b6c54:8", "const:4:8"]]
+ 009b6c54 ["CALL", null, ["callee:00c58f30:8"]]
- 009b5cc8 ["INT_ADD", "register:40f0:8", ["const:9b5cc8:8", "const:4:8"]]
- 009b5cc8 ["CALL", null, ["callee:009aa300:8"]]
+ 009b6c74 ["INT_ADD", "register:40f0:8", ["const:9b6c74:8", "const:4:8"]]
+ 009b6c74 ["CALL", null, ["callee:009aa300:8"]]
~~~


<a id="compare-7a15029008cf9d99d215c50140480ad3"></a>

### [`009b5dd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5dd8.md) → [`009b6d84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6d84.md) FUN_009b6d84

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009b3188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b3/009b3188.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`005a9f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9f24.md) [`005a9f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9f94.md) [`005aa1c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa1c4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`009b4134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b4/009b4134.md) · 呼出先 7件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`005aa2d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa2d4.md) [`005aa344`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa344.md) [`005aa574`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa574.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b5e7c ["INT_ADD", "register:40f0:8", ["const:9b5e7c:8", "const:4:8"]]
- 009b5e7c ["CALL", null, ["callee:00c58f30:8"]]
+ 009b6e28 ["INT_ADD", "register:40f0:8", ["const:9b6e28:8", "const:4:8"]]
+ 009b6e28 ["CALL", null, ["callee:00c58f30:8"]]
- 009b5ea4 ["INT_ADD", "register:40f0:8", ["const:9b5ea4:8", "const:4:8"]]
- 009b5ea4 ["CALL", null, ["callee:005aa344:8"]]
+ 009b6e50 ["INT_ADD", "register:40f0:8", ["const:9b6e50:8", "const:4:8"]]
+ 009b6e50 ["CALL", null, ["callee:005aa344:8"]]
- 009b5f74 ["INT_ADD", "register:40f0:8", ["const:9b5f74:8", "const:4:8"]]
- 009b5f74 ["CALL", null, ["callee:005aa574:8"]]
+ 009b6f20 ["INT_ADD", "register:40f0:8", ["const:9b6f20:8", "const:4:8"]]
+ 009b6f20 ["CALL", null, ["callee:005aa574:8"]]
~~~


<a id="compare-d9389036e4fb65b2f8b36b718024ada0"></a>

### [`009b6024`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6024.md) → [`009b6fd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b6fd0.md) FUN_009b6fd0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005aa1c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa1c4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005aa574`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa574.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b604c ["INT_ADD", "register:40f0:8", ["const:9b604c:8", "const:4:8"]]
- 009b604c ["CALL", null, ["callee:005aa574:8"]]
+ 009b6ff8 ["INT_ADD", "register:40f0:8", ["const:9b6ff8:8", "const:4:8"]]
+ 009b6ff8 ["CALL", null, ["callee:005aa574:8"]]
~~~


<a id="compare-75aa85633889f5cdff8082b101640621"></a>

### [`009b6274`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6274.md) → [`009b7220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b7/009b7220.md) FUN_009b7220

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009b3bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b3/009b3bbc.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009b4b68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b4/009b4b68.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b62b0 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b62b0 ["INT_ADD", "register:40f0:8", ["const:9b62b0:8", "const:4:8"]]
- 009b62b0 ["CALLIND", null, ["register:0:8"]]
+ 009b725c ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b725c ["INT_ADD", "register:40f0:8", ["const:9b725c:8", "const:4:8"]]
+ 009b725c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ba67db26df78952d2402eaf404787691"></a>

### [`009b62c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b62c4.md) → [`009b7270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b7/009b7270.md) FUN_009b7270

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`005aa1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa1b0.md) [`009aa034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aa034.md) [`009aa0b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aa0b8.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`005aa560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa560.md) [`009aafe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009aa/009aafe0.md) [`009ab064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ab/009ab064.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b6324 ["INT_ADD", "register:40f0:8", ["const:9b6324:8", "const:4:8"]]
- 009b6324 ["CALL", null, ["callee:009ab064:8"]]
+ 009b72d0 ["INT_ADD", "register:40f0:8", ["const:9b72d0:8", "const:4:8"]]
+ 009b72d0 ["CALL", null, ["callee:009ab064:8"]]
- 009b6350 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b6350 ["INT_ADD", "register:40f0:8", ["const:9b6350:8", "const:4:8"]]
- 009b6350 ["CALLIND", null, ["register:0:8"]]
+ 009b72fc ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b72fc ["INT_ADD", "register:40f0:8", ["const:9b72fc:8", "const:4:8"]]
+ 009b72fc ["CALLIND", null, ["register:0:8"]]
- 009b6360 ["INT_ADD", "register:40f0:8", ["const:9b6360:8", "const:4:8"]]
- 009b6360 ["CALL", null, ["callee:0043be80:8"]]
+ 009b730c ["INT_ADD", "register:40f0:8", ["const:9b730c:8", "const:4:8"]]
+ 009b730c ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-270abadeea181d6f18ec0a30da6cc90c"></a>

### [`009b66c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b66c8.md) → [`009b7674`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b7/009b7674.md) FUN_009b7674

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009b3bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b3/009b3bbc.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009b4b68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b4/009b4b68.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b6704 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b6704 ["INT_ADD", "register:40f0:8", ["const:9b6704:8", "const:4:8"]]
- 009b6704 ["CALLIND", null, ["register:0:8"]]
+ 009b76b0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b76b0 ["INT_ADD", "register:40f0:8", ["const:9b76b0:8", "const:4:8"]]
+ 009b76b0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-dd4727c887594f1566662d77806c44f2"></a>

### [`009b6718`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6718.md) → [`009b76c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b7/009b76c4.md) FUN_009b76c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`009aa0b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aa0b8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`009ab064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ab/009ab064.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b6748 ["INT_ADD", "register:40f0:8", ["const:9b6748:8", "const:4:8"]]
- 009b6748 ["CALL", null, ["callee:009ab064:8"]]
+ 009b76f4 ["INT_ADD", "register:40f0:8", ["const:9b76f4:8", "const:4:8"]]
+ 009b76f4 ["CALL", null, ["callee:009ab064:8"]]
- 009b6774 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b6774 ["INT_ADD", "register:40f0:8", ["const:9b6774:8", "const:4:8"]]
- 009b6774 ["CALLIND", null, ["register:0:8"]]
+ 009b7720 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b7720 ["INT_ADD", "register:40f0:8", ["const:9b7720:8", "const:4:8"]]
+ 009b7720 ["CALLIND", null, ["register:0:8"]]
- 009b67ac ["INT_ADD", "register:40f0:8", ["const:9b67ac:8", "const:4:8"]]
- 009b67ac ["CALL", null, ["callee:0045a0d4:8"]]
+ 009b7758 ["INT_ADD", "register:40f0:8", ["const:9b7758:8", "const:4:8"]]
+ 009b7758 ["CALL", null, ["callee:0045a0d4:8"]]
~~~


<a id="compare-0bcef53fd8a3014c6ff472afd2201a0b"></a>

### [`009b689c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b689c.md) → [`009b7848`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b7/009b7848.md) FUN_009b7848

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`005aa1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa1b0.md) [`009aa034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aa034.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`005aa560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa560.md) [`009aafe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009aa/009aafe0.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b68f4 ["INT_ADD", "register:40f0:8", ["const:9b68f4:8", "const:4:8"]]
- 009b68f4 ["CALL", null, ["callee:0043be80:8"]]
+ 009b78a0 ["INT_ADD", "register:40f0:8", ["const:9b78a0:8", "const:4:8"]]
+ 009b78a0 ["CALL", null, ["callee:0043be80:8"]]
- 009b694c ["INT_ADD", "register:40f0:8", ["const:9b694c:8", "const:4:8"]]
- 009b694c ["CALL", null, ["callee:009aafe0:8"]]
+ 009b78f8 ["INT_ADD", "register:40f0:8", ["const:9b78f8:8", "const:4:8"]]
+ 009b78f8 ["CALL", null, ["callee:009aafe0:8"]]
- 009b695c ["INT_ADD", "register:40f0:8", ["const:9b695c:8", "const:4:8"]]
- 009b695c ["CALL", null, ["callee:00c58f50:8"]]
+ 009b7908 ["INT_ADD", "register:40f0:8", ["const:9b7908:8", "const:4:8"]]
+ 009b7908 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-e5f8bf023c7a3a2ed10c3f3992992119"></a>

### [`009b6c5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6c5c.md) → [`009b7c08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b7/009b7c08.md) FUN_009b7c08

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009b4e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b4e80.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009b5e2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b5/009b5e2c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b6c98 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b6c98 ["INT_ADD", "register:40f0:8", ["const:9b6c98:8", "const:4:8"]]
- 009b6c98 ["CALLIND", null, ["register:0:8"]]
+ 009b7c44 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b7c44 ["INT_ADD", "register:40f0:8", ["const:9b7c44:8", "const:4:8"]]
+ 009b7c44 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-0d614bca31dbd6d42b7e8c01cf524e5a"></a>

### [`009b6cac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6cac.md) → [`009b7c58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b7/009b7c58.md) FUN_009b7c58

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`005a9d64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9d64.md) [`005aa1c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa1c4.md) [`009aa678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aa678.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`005aa114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa114.md) [`005aa574`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa574.md) [`009ab624`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ab/009ab624.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b6d0c ["INT_ADD", "register:40f0:8", ["const:9b6d0c:8", "const:4:8"]]
- 009b6d0c ["CALL", null, ["callee:005aa114:8"]]
+ 009b7cb8 ["INT_ADD", "register:40f0:8", ["const:9b7cb8:8", "const:4:8"]]
+ 009b7cb8 ["CALL", null, ["callee:005aa114:8"]]
- 009b6d1c ["INT_ADD", "register:40f0:8", ["const:9b6d1c:8", "const:4:8"]]
- 009b6d1c ["CALL", null, ["callee:009ab624:8"]]
+ 009b7cc8 ["INT_ADD", "register:40f0:8", ["const:9b7cc8:8", "const:4:8"]]
+ 009b7cc8 ["CALL", null, ["callee:009ab624:8"]]
- 009b6d48 ["INT_ADD", "register:40f0:8", ["const:9b6d48:8", "const:4:8"]]
- 009b6d48 ["CALL", null, ["callee:005aa574:8"]]
+ 009b7cf4 ["INT_ADD", "register:40f0:8", ["const:9b7cf4:8", "const:4:8"]]
+ 009b7cf4 ["CALL", null, ["callee:005aa574:8"]]
~~~


<a id="compare-755a8dac631ecc1c9b166f69fc832e2d"></a>

### [`009b6ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6ffc.md) → [`009b7fa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b7/009b7fa8.md) FUN_009b7fa8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009b4e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b4e80.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009b5e2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b5/009b5e2c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b7038 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b7038 ["INT_ADD", "register:40f0:8", ["const:9b7038:8", "const:4:8"]]
- 009b7038 ["CALLIND", null, ["register:0:8"]]
+ 009b7fe4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b7fe4 ["INT_ADD", "register:40f0:8", ["const:9b7fe4:8", "const:4:8"]]
+ 009b7fe4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-aa4b4aec7486fc2e0ff3a3b7f77c2ae2"></a>

### [`009b704c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b704c.md) → [`009b7ff8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b7/009b7ff8.md) FUN_009b7ff8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b708c ["COPY", "register:0:8", ["register:4040:8"]]
- 009b708c ["INT_ADD", "register:40f0:8", ["const:9b708c:8", "const:4:8"]]
- 009b708c ["CALLIND", null, ["register:0:8"]]
+ 009b8038 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b8038 ["INT_ADD", "register:40f0:8", ["const:9b8038:8", "const:4:8"]]
+ 009b8038 ["CALLIND", null, ["register:0:8"]]
- 009b70c0 ["INT_ADD", "register:40f0:8", ["const:9b70c0:8", "const:4:8"]]
- 009b70c0 ["CALL", null, ["callee:0045a0d4:8"]]
+ 009b806c ["INT_ADD", "register:40f0:8", ["const:9b806c:8", "const:4:8"]]
+ 009b806c ["CALL", null, ["callee:0045a0d4:8"]]
- 009b70c4 ["INT_ADD", "register:40f0:8", ["const:9b70c4:8", "const:4:8"]]
- 009b70c4 ["CALL", null, ["callee:00c58f80:8"]]
+ 009b8070 ["INT_ADD", "register:40f0:8", ["const:9b8070:8", "const:4:8"]]
+ 009b8070 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-b6ac5ffccc3d9469da1f7f114d2cd8cc"></a>

### [`009b743c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b743c.md) → [`009b83e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b8/009b83e8.md) FUN_009b83e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009b5410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5410.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009b63bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b63bc.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b7478 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b7478 ["INT_ADD", "register:40f0:8", ["const:9b7478:8", "const:4:8"]]
- 009b7478 ["CALLIND", null, ["register:0:8"]]
+ 009b8424 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b8424 ["INT_ADD", "register:40f0:8", ["const:9b8424:8", "const:4:8"]]
+ 009b8424 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b29f684268685ca4abcb72d3050ae512"></a>

### [`009b748c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b748c.md) → [`009b8438`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b8/009b8438.md) FUN_009b8438

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b74c4 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b74c4 ["INT_ADD", "register:40f0:8", ["const:9b74c4:8", "const:4:8"]]
- 009b74c4 ["CALLIND", null, ["register:0:8"]]
+ 009b8470 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b8470 ["INT_ADD", "register:40f0:8", ["const:9b8470:8", "const:4:8"]]
+ 009b8470 ["CALLIND", null, ["register:0:8"]]
- 009b74f8 ["INT_ADD", "register:40f0:8", ["const:9b74f8:8", "const:4:8"]]
- 009b74f8 ["CALL", null, ["callee:0045a0d4:8"]]
+ 009b84a4 ["INT_ADD", "register:40f0:8", ["const:9b84a4:8", "const:4:8"]]
+ 009b84a4 ["CALL", null, ["callee:0045a0d4:8"]]
- 009b74fc ["INT_ADD", "register:40f0:8", ["const:9b74fc:8", "const:4:8"]]
- 009b74fc ["CALL", null, ["callee:00c58f80:8"]]
+ 009b84a8 ["INT_ADD", "register:40f0:8", ["const:9b84a8:8", "const:4:8"]]
+ 009b84a8 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-2baa50ce22badfe6d486f0ac4057abc1"></a>

### [`009b76fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b76fc.md) → [`009b86a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b8/009b86a8.md) FUN_009b86a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009b5410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5410.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009b63bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b6/009b63bc.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b7738 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b7738 ["INT_ADD", "register:40f0:8", ["const:9b7738:8", "const:4:8"]]
- 009b7738 ["CALLIND", null, ["register:0:8"]]
+ 009b86e4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b86e4 ["INT_ADD", "register:40f0:8", ["const:9b86e4:8", "const:4:8"]]
+ 009b86e4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6d90080bba12a658278522b9ee06b6ab"></a>

### [`009b774c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b774c.md) → [`009b86f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b8/009b86f8.md) FUN_009b86f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b7768 ["INT_ADD", "register:40f0:8", ["const:9b7768:8", "const:4:8"]]
- 009b7768 ["CALL", null, ["callee:0045a0d4:8"]]
+ 009b8714 ["INT_ADD", "register:40f0:8", ["const:9b8714:8", "const:4:8"]]
+ 009b8714 ["CALL", null, ["callee:0045a0d4:8"]]
~~~


<a id="compare-a1b71786c9c4f94de68fcc2b2ef9415e"></a>

### [`009b7ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7ae0.md) → [`009b8a8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b8/009b8a8c.md) FUN_009b8a8c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009b4954`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b4954.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009b5900`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b5/009b5900.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b7b1c ["COPY", "register:0:8", ["register:4040:8"]]
- 009b7b1c ["INT_ADD", "register:40f0:8", ["const:9b7b1c:8", "const:4:8"]]
- 009b7b1c ["CALLIND", null, ["register:0:8"]]
+ 009b8ac8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b8ac8 ["INT_ADD", "register:40f0:8", ["const:9b8ac8:8", "const:4:8"]]
+ 009b8ac8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-42d5294de552d66324e409fda925cdf3"></a>

### [`009b7b30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7b30.md) → [`009b8adc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b8/009b8adc.md) FUN_009b8adc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b7b68 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b7b68 ["INT_ADD", "register:40f0:8", ["const:9b7b68:8", "const:4:8"]]
- 009b7b68 ["CALLIND", null, ["register:0:8"]]
+ 009b8b14 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b8b14 ["INT_ADD", "register:40f0:8", ["const:9b8b14:8", "const:4:8"]]
+ 009b8b14 ["CALLIND", null, ["register:0:8"]]
- 009b7b9c ["INT_ADD", "register:40f0:8", ["const:9b7b9c:8", "const:4:8"]]
- 009b7b9c ["CALL", null, ["callee:0045a0d4:8"]]
+ 009b8b48 ["INT_ADD", "register:40f0:8", ["const:9b8b48:8", "const:4:8"]]
+ 009b8b48 ["CALL", null, ["callee:0045a0d4:8"]]
- 009b7ba0 ["INT_ADD", "register:40f0:8", ["const:9b7ba0:8", "const:4:8"]]
- 009b7ba0 ["CALL", null, ["callee:00c58f80:8"]]
+ 009b8b4c ["INT_ADD", "register:40f0:8", ["const:9b8b4c:8", "const:4:8"]]
+ 009b8b4c ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-98cea78f896364e4296f4f07b50d9712"></a>

### [`009b7da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7da0.md) → [`009b8d4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b8/009b8d4c.md) FUN_009b8d4c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009b4954`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b4954.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009b5900`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b5/009b5900.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b7ddc ["COPY", "register:0:8", ["register:4040:8"]]
- 009b7ddc ["INT_ADD", "register:40f0:8", ["const:9b7ddc:8", "const:4:8"]]
- 009b7ddc ["CALLIND", null, ["register:0:8"]]
+ 009b8d88 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b8d88 ["INT_ADD", "register:40f0:8", ["const:9b8d88:8", "const:4:8"]]
+ 009b8d88 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2d831b5f7a7e1596a9ef4211f8870d17"></a>

### [`009b7df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7df0.md) → [`009b8d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b8/009b8d9c.md) FUN_009b8d9c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b7e0c ["INT_ADD", "register:40f0:8", ["const:9b7e0c:8", "const:4:8"]]
- 009b7e0c ["CALL", null, ["callee:0045a0d4:8"]]
+ 009b8db8 ["INT_ADD", "register:40f0:8", ["const:9b8db8:8", "const:4:8"]]
+ 009b8db8 ["CALL", null, ["callee:0045a0d4:8"]]
~~~


<a id="compare-612f5a84cb01f6422d495d584d6c3506"></a>

### [`009b8184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b8184.md) → [`009b9130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b9/009b9130.md) FUN_009b9130

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009b41b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b41b8.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009b5164`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b5/009b5164.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b81c0 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b81c0 ["INT_ADD", "register:40f0:8", ["const:9b81c0:8", "const:4:8"]]
- 009b81c0 ["CALLIND", null, ["register:0:8"]]
+ 009b916c ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b916c ["INT_ADD", "register:40f0:8", ["const:9b916c:8", "const:4:8"]]
+ 009b916c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-fa03e85ef339cc1f6db6d2d0b886263b"></a>

### [`009b81d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b81d4.md) → [`009b9180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b9/009b9180.md) FUN_009b9180

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b820c ["COPY", "register:0:8", ["register:4040:8"]]
- 009b820c ["INT_ADD", "register:40f0:8", ["const:9b820c:8", "const:4:8"]]
- 009b820c ["CALLIND", null, ["register:0:8"]]
+ 009b91b8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b91b8 ["INT_ADD", "register:40f0:8", ["const:9b91b8:8", "const:4:8"]]
+ 009b91b8 ["CALLIND", null, ["register:0:8"]]
- 009b8240 ["INT_ADD", "register:40f0:8", ["const:9b8240:8", "const:4:8"]]
- 009b8240 ["CALL", null, ["callee:0045a0d4:8"]]
+ 009b91ec ["INT_ADD", "register:40f0:8", ["const:9b91ec:8", "const:4:8"]]
+ 009b91ec ["CALL", null, ["callee:0045a0d4:8"]]
- 009b8244 ["INT_ADD", "register:40f0:8", ["const:9b8244:8", "const:4:8"]]
- 009b8244 ["CALL", null, ["callee:00c58f80:8"]]
+ 009b91f0 ["INT_ADD", "register:40f0:8", ["const:9b91f0:8", "const:4:8"]]
+ 009b91f0 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-4fdbcff0c327c67391280985665178dc"></a>

### [`009b8444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b8444.md) → [`009b93f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b9/009b93f0.md) FUN_009b93f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009b41b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b41b8.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009b5164`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b5/009b5164.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b8480 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b8480 ["INT_ADD", "register:40f0:8", ["const:9b8480:8", "const:4:8"]]
- 009b8480 ["CALLIND", null, ["register:0:8"]]
+ 009b942c ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b942c ["INT_ADD", "register:40f0:8", ["const:9b942c:8", "const:4:8"]]
+ 009b942c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-3ab2edf19b17cd6d1f327617222c3b9c"></a>

### [`009b8494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b8494.md) → [`009b9440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b9/009b9440.md) FUN_009b9440

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b84b0 ["INT_ADD", "register:40f0:8", ["const:9b84b0:8", "const:4:8"]]
- 009b84b0 ["CALL", null, ["callee:0045a0d4:8"]]
+ 009b945c ["INT_ADD", "register:40f0:8", ["const:9b945c:8", "const:4:8"]]
+ 009b945c ["CALL", null, ["callee:0045a0d4:8"]]
~~~


<a id="compare-220dd8db123b0eca794dce20ea6082a8"></a>

### [`009b886c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b886c.md) → [`009b9818`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b9/009b9818.md) FUN_009b9818

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 2件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 1件 [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) · 呼出先 2件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b8884 ["INT_ADD", "register:40f0:8", ["const:9b8884:8", "const:4:8"]]
- 009b8884 ["CALL", null, ["callee:0046cd24:8"]]
+ 009b9830 ["INT_ADD", "register:40f0:8", ["const:9b9830:8", "const:4:8"]]
+ 009b9830 ["CALL", null, ["callee:0046cd24:8"]]
- 009b88ac ["INT_ADD", "register:40f0:8", ["const:9b88ac:8", "const:4:8"]]
- 009b88ac ["CALL", null, ["callee:00c54d60:8"]]
+ 009b9858 ["INT_ADD", "register:40f0:8", ["const:9b9858:8", "const:4:8"]]
+ 009b9858 ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-a335998e821b9ba914308e163c349596"></a>

### [`009b88c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b88c0.md) → [`009b986c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b9/009b986c.md) FUN_009b986c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`008487e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/008487e4.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 3件 [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`00849790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/00849790.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b88e4 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b88e4 ["INT_ADD", "register:40f0:8", ["const:9b88e4:8", "const:4:8"]]
- 009b88e4 ["CALLIND", null, ["register:0:8"]]
+ 009b9890 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b9890 ["INT_ADD", "register:40f0:8", ["const:9b9890:8", "const:4:8"]]
+ 009b9890 ["CALLIND", null, ["register:0:8"]]
- 009b88f8 ["INT_ADD", "register:40f0:8", ["const:9b88f8:8", "const:4:8"]]
- 009b88f8 ["CALL", null, ["callee:00c54d90:8"]]
+ 009b98a4 ["INT_ADD", "register:40f0:8", ["const:9b98a4:8", "const:4:8"]]
+ 009b98a4 ["CALL", null, ["callee:00c54d90:8"]]
- 009b8918 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b8918 ["INT_ADD", "register:40f0:8", ["const:9b8918:8", "const:4:8"]]
- 009b8918 ["CALLIND", null, ["register:0:8"]]
+ 009b98c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b98c4 ["INT_ADD", "register:40f0:8", ["const:9b98c4:8", "const:4:8"]]
+ 009b98c4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-69c5b3424d861837b126efa1d5fa72d1"></a>

### [`009b94e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b9/009b94e0.md) → [`009ba48c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ba/009ba48c.md) FUN_009ba48c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009ba3d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009ba3d0.md) · 呼出先 4件 [`00935e88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00935/00935e88.md) [`009ad9d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009ad9d4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`009bb37c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bb/009bb37c.md) · 呼出先 4件 [`00936e34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00936/00936e34.md) [`009ae980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ae/009ae980.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b9510 ["INT_ADD", "register:40f0:8", ["const:9b9510:8", "const:4:8"]]
- 009b9510 ["CALL", null, ["callee:009ae980:8"]]
+ 009ba4bc ["INT_ADD", "register:40f0:8", ["const:9ba4bc:8", "const:4:8"]]
+ 009ba4bc ["CALL", null, ["callee:009ae980:8"]]
- 009b9568 ["INT_ADD", "register:40f0:8", ["const:9b9568:8", "const:4:8"]]
- 009b9568 ["CALL", null, ["callee:00936e34:8"]]
+ 009ba514 ["INT_ADD", "register:40f0:8", ["const:9ba514:8", "const:4:8"]]
+ 009ba514 ["CALL", null, ["callee:00936e34:8"]]
- 009b9578 ["INT_ADD", "register:40f0:8", ["const:9b9578:8", "const:4:8"]]
- 009b9578 ["CALL", null, ["callee:00c58f50:8"]]
+ 009ba524 ["INT_ADD", "register:40f0:8", ["const:9ba524:8", "const:4:8"]]
+ 009ba524 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-68e106679398eed7c15440d2def64ce0"></a>

### [`009b95d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b9/009b95d4.md) → [`009ba580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ba/009ba580.md) FUN_009ba580

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 6件 [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md) [`008b6f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f98.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md) [`009ad9d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009ad9d4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) · 呼出先 6件 [`008b7f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f1c.md) [`008b7f44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f44.md) [`008b89cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b89cc.md) [`009ae980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ae/009ae980.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b9608 ["INT_ADD", "register:40f0:8", ["const:9b9608:8", "const:4:8"]]
- 009b9608 ["CALL", null, ["callee:009ae980:8"]]
+ 009ba5b4 ["INT_ADD", "register:40f0:8", ["const:9ba5b4:8", "const:4:8"]]
+ 009ba5b4 ["CALL", null, ["callee:009ae980:8"]]
- 009b9628 ["INT_ADD", "register:40f0:8", ["const:9b9628:8", "const:4:8"]]
- 009b9628 ["CALL", null, ["callee:008b89cc:8"]]
+ 009ba5d4 ["INT_ADD", "register:40f0:8", ["const:9ba5d4:8", "const:4:8"]]
+ 009ba5d4 ["CALL", null, ["callee:008b89cc:8"]]
- 009b963c ["INT_ADD", "register:40f0:8", ["const:9b963c:8", "const:4:8"]]
- 009b963c ["CALL", null, ["callee:008b7f44:8"]]
+ 009ba5e8 ["INT_ADD", "register:40f0:8", ["const:9ba5e8:8", "const:4:8"]]
+ 009ba5e8 ["CALL", null, ["callee:008b7f44:8"]]
~~~


<a id="compare-8cb9b13cac2ff88f466c6d5bc01d03bc"></a>

### [`009b9738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b9/009b9738.md) → [`009ba6e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ba/009ba6e4.md) FUN_009ba6e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 2件 [`009adbbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009adbbc.md) [`00acbf9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00acb/00acbf9c.md)
- 新版 呼出元 1件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) · 呼出先 2件 [`009aeb68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ae/009aeb68.md) [`00accf90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00acc/00accf90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b975c ["INT_ADD", "register:40f0:8", ["const:9b975c:8", "const:4:8"]]
- 009b975c ["CALL", null, ["callee:009aeb68:8"]]
+ 009ba708 ["INT_ADD", "register:40f0:8", ["const:9ba708:8", "const:4:8"]]
+ 009ba708 ["CALL", null, ["callee:009aeb68:8"]]
- 009b9770 ["INT_ADD", "register:40f0:8", ["const:9b9770:8", "const:4:8"]]
- 009b9770 ["CALL", null, ["callee:00accf90:8"]]
+ 009ba71c ["INT_ADD", "register:40f0:8", ["const:9ba71c:8", "const:4:8"]]
+ 009ba71c ["CALL", null, ["callee:00accf90:8"]]
~~~


<a id="compare-87a7e5a4cab593c9ddc95184b094ce9b"></a>

### [`009b9794`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b9/009b9794.md) → [`009ba740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ba/009ba740.md) FUN_009ba740

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007738ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00773/007738ec.md) · 呼出先 24件 [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md) [`00468ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468ca8.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046969c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/0046969c.md)
- 新版 呼出元 1件 [`00773cc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00773/00773cc8.md) · 呼出先 24件 [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`00468b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468b64.md) [`00468fc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468fc8.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`004699bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004699bc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b97e0 ["INT_ADD", "register:40f0:8", ["const:9b97e0:8", "const:4:8"]]
- 009b97e0 ["CALL", null, ["callee:009ae980:8"]]
+ 009ba78c ["INT_ADD", "register:40f0:8", ["const:9ba78c:8", "const:4:8"]]
+ 009ba78c ["CALL", null, ["callee:009ae980:8"]]
- 009b97f8 ["INT_ADD", "register:40f0:8", ["const:9b97f8:8", "const:4:8"]]
- 009b97f8 ["CALL", null, ["callee:009aeb68:8"]]
+ 009ba7a4 ["INT_ADD", "register:40f0:8", ["const:9ba7a4:8", "const:4:8"]]
+ 009ba7a4 ["CALL", null, ["callee:009aeb68:8"]]
- 009b982c ["COPY", "register:0:8", ["register:4040:8"]]
- 009b982c ["INT_ADD", "register:40f0:8", ["const:9b982c:8", "const:4:8"]]
- 009b982c ["CALLIND", null, ["register:0:8"]]
+ 009ba7d8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009ba7d8 ["INT_ADD", "register:40f0:8", ["const:9ba7d8:8", "const:4:8"]]
+ 009ba7d8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2227e5e37e9cd26d943d1afb7f18d71c"></a>

### [`009b9e54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b9/009b9e54.md) → [`009bae00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ba/009bae00.md) FUN_009bae00

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009b9794`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b9/009b9794.md) · 呼出先 6件 [`00468f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468f8c.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046af4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af4c.md) [`0046da9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046da9c.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md)
- 新版 呼出元 1件 [`009ba740`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ba/009ba740.md) · 呼出先 6件 [`004692ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692ac.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`0046b26c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046b/0046b26c.md) [`0046ddbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046ddbc.md) [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b9eac ["INT_ADD", "register:40f0:8", ["const:9b9eac:8", "const:4:8"]]
- 009b9eac ["CALL", null, ["callee:004692e8:8"]]
+ 009bae58 ["INT_ADD", "register:40f0:8", ["const:9bae58:8", "const:4:8"]]
+ 009bae58 ["CALL", null, ["callee:004692e8:8"]]
- 009b9ef8 ["INT_ADD", "register:40f0:8", ["const:9b9ef8:8", "const:4:8"]]
- 009b9ef8 ["CALL", null, ["callee:0048a2ac:8"]]
+ 009baea4 ["INT_ADD", "register:40f0:8", ["const:9baea4:8", "const:4:8"]]
+ 009baea4 ["CALL", null, ["callee:0048a2ac:8"]]
- 009b9f08 ["INT_ADD", "register:40f0:8", ["const:9b9f08:8", "const:4:8"]]
- 009b9f08 ["CALL", null, ["callee:0048a2ac:8"]]
+ 009baeb4 ["INT_ADD", "register:40f0:8", ["const:9baeb4:8", "const:4:8"]]
+ 009baeb4 ["CALL", null, ["callee:0048a2ac:8"]]
~~~


<a id="compare-6cde195634bb40313e7d38851fcc5f7f"></a>

### [`009ba090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009ba090.md) → [`009bb03c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bb/009bb03c.md) FUN_009bb03c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 1件 [`009adbbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009adbbc.md)
- 新版 呼出元 2件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) · 呼出先 1件 [`009aeb68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ae/009aeb68.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ba0a4 ["INT_ADD", "register:40f0:8", ["const:9ba0a4:8", "const:4:8"]]
- 009ba0a4 ["CALL", null, ["callee:009aeb68:8"]]
+ 009bb050 ["INT_ADD", "register:40f0:8", ["const:9bb050:8", "const:4:8"]]
+ 009bb050 ["CALL", null, ["callee:009aeb68:8"]]
~~~


<a id="compare-bf460e56a94096d27dab445ad8320cdb"></a>

### [`009ba218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009ba218.md) → [`009bb1c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bb/009bb1c4.md) FUN_009bb1c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`009b8ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b8ba4.md) [`00a9fa94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9f/00a9fa94.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0063678c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/0063678c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 2件 [`009b9b50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b9/009b9b50.md) [`00aa0a88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aa0/00aa0a88.md) · 呼出先 7件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00636b3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/00636b3c.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ba284 ["INT_ADD", "register:40f0:8", ["const:9ba284:8", "const:4:8"]]
- 009ba284 ["CALL", null, ["callee:00c58f30:8"]]
+ 009bb230 ["INT_ADD", "register:40f0:8", ["const:9bb230:8", "const:4:8"]]
+ 009bb230 ["CALL", null, ["callee:00c58f30:8"]]
- 009ba2b0 ["INT_ADD", "register:40f0:8", ["const:9ba2b0:8", "const:4:8"]]
- 009ba2b0 ["CALL", null, ["callee:00c54d60:8"]]
+ 009bb25c ["INT_ADD", "register:40f0:8", ["const:9bb25c:8", "const:4:8"]]
+ 009bb25c ["CALL", null, ["callee:00c54d60:8"]]
- 009ba310 ["INT_ADD", "register:40f0:8", ["const:9ba310:8", "const:4:8"]]
- 009ba310 ["CALL", null, ["callee:00c54d90:8"]]
+ 009bb2bc ["INT_ADD", "register:40f0:8", ["const:9bb2bc:8", "const:4:8"]]
+ 009bb2bc ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-e67e34b06fe85f655211e4b00674eafb"></a>

### [`009bcdac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bc/009bcdac.md) → [`009bdd58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bd/009bdd58.md) FUN_009bdd58

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`009bdb8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bdb8c.md) [`009bdcd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bdcd4.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 2件 [`009beb38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009be/009beb38.md) [`009bec80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009be/009bec80.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009bcdd0 ["INT_ADD", "register:40f0:8", ["const:9bcdd0:8", "const:4:8"]]
- 009bcdd0 ["CALL", null, ["callee:00c54d90:8"]]
+ 009bdd7c ["INT_ADD", "register:40f0:8", ["const:9bdd7c:8", "const:4:8"]]
+ 009bdd7c ["CALL", null, ["callee:00c54d90:8"]]
- 009bcde4 ["COPY", "register:0:8", ["register:4040:8"]]
- 009bcde4 ["INT_ADD", "register:40f0:8", ["const:9bcde4:8", "const:4:8"]]
- 009bcde4 ["CALLIND", null, ["register:0:8"]]
+ 009bdd90 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009bdd90 ["INT_ADD", "register:40f0:8", ["const:9bdd90:8", "const:4:8"]]
+ 009bdd90 ["CALLIND", null, ["register:0:8"]]
- 009bcdec ["INT_ADD", "register:40f0:8", ["const:9bcdec:8", "const:4:8"]]
- 009bcdec ["CALL", null, ["callee:00c58f20:8"]]
+ 009bdd98 ["INT_ADD", "register:40f0:8", ["const:9bdd98:8", "const:4:8"]]
+ 009bdd98 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-70bb04bb5f67e87df4457568e73af91b"></a>

### [`009bdcd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bdcd4.md) → [`009bec80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009be/009bec80.md) FUN_009bec80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009be850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009be/009be850.md) · 呼出先 5件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`009bcdac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bc/009bcdac.md) [`00a832d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a832d0.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`009bf7fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bf/009bf7fc.md) · 呼出先 5件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`009bdd58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bd/009bdd58.md) [`00a842c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a84/00a842c4.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009bdd14 ["INT_ADD", "register:40f0:8", ["const:9bdd14:8", "const:4:8"]]
- 009bdd14 ["CALL", null, ["callee:009bdd58:8"]]
+ 009becc0 ["INT_ADD", "register:40f0:8", ["const:9becc0:8", "const:4:8"]]
+ 009becc0 ["CALL", null, ["callee:009bdd58:8"]]
- 009bdd4c ["INT_ADD", "register:40f0:8", ["const:9bdd4c:8", "const:4:8"]]
- 009bdd4c ["CALL", null, ["callee:00c54d90:8"]]
+ 009becf8 ["INT_ADD", "register:40f0:8", ["const:9becf8:8", "const:4:8"]]
+ 009becf8 ["CALL", null, ["callee:00c54d90:8"]]
- 009bdd60 ["COPY", "register:0:8", ["register:4040:8"]]
- 009bdd60 ["INT_ADD", "register:40f0:8", ["const:9bdd60:8", "const:4:8"]]
- 009bdd60 ["CALLIND", null, ["register:0:8"]]
+ 009bed0c ["COPY", "register:0:8", ["register:4040:8"]]
+ 009bed0c ["INT_ADD", "register:40f0:8", ["const:9bed0c:8", "const:4:8"]]
+ 009bed0c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-142948400e2e4a732e77016b823d64d1"></a>

### [`009be334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009be/009be334.md) → [`009bf2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bf/009bf2e0.md) FUN_009bf2e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009bee20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009be/009bee20.md) · 呼出先 7件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0048ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab70.md)
- 新版 呼出元 1件 [`009bfdcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bf/009bfdcc.md) · 呼出先 7件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`00468b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468b64.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0048ae90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048ae90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009be37c ["INT_ADD", "register:40f0:8", ["const:9be37c:8", "const:4:8"]]
- 009be37c ["CALL", null, ["callee:009be260:8"]]
+ 009bf328 ["INT_ADD", "register:40f0:8", ["const:9bf328:8", "const:4:8"]]
+ 009bf328 ["CALL", null, ["callee:009be260:8"]]
- 009be3d0 ["INT_ADD", "register:40f0:8", ["const:9be3d0:8", "const:4:8"]]
- 009be3d0 ["CALL", null, ["callee:00467bc0:8"]]
+ 009bf37c ["INT_ADD", "register:40f0:8", ["const:9bf37c:8", "const:4:8"]]
+ 009bf37c ["CALL", null, ["callee:00467bc0:8"]]
- 009be3e4 ["INT_ADD", "register:40f0:8", ["const:9be3e4:8", "const:4:8"]]
- 009be3e4 ["CALL", null, ["callee:00467e8c:8"]]
+ 009bf390 ["INT_ADD", "register:40f0:8", ["const:9bf390:8", "const:4:8"]]
+ 009bf390 ["CALL", null, ["callee:00467e8c:8"]]
~~~


<a id="compare-aab58c791af2f1218973186709dc370d"></a>

### [`009bf268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bf/009bf268.md) → [`009c0214`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c0/009c0214.md) FUN_009c0214

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009bced4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bc/009bced4.md) · 呼出先 8件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00461a58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00461/00461a58.md) [`00461a6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00461/00461a6c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`009bde80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bd/009bde80.md) · 呼出先 8件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00461d78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00461/00461d78.md) [`00461d8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00461/00461d8c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009bf2f8 ["INT_ADD", "register:40f0:8", ["const:9bf2f8:8", "const:4:8"]]
- 009bf2f8 ["CALL", null, ["callee:00c58f50:8"]]
+ 009c02a4 ["INT_ADD", "register:40f0:8", ["const:9c02a4:8", "const:4:8"]]
+ 009c02a4 ["CALL", null, ["callee:00c58f50:8"]]
- 009bf33c ["INT_ADD", "register:40f0:8", ["const:9bf33c:8", "const:4:8"]]
- 009bf33c ["CALL", null, ["callee:00c594d0:8"]]
+ 009c02e8 ["INT_ADD", "register:40f0:8", ["const:9c02e8:8", "const:4:8"]]
+ 009c02e8 ["CALL", null, ["callee:00c594d0:8"]]
- 009bf3c8 ["INT_ADD", "register:40f0:8", ["const:9bf3c8:8", "const:4:8"]]
- 009bf3c8 ["CALL", null, ["callee:0043be80:8"]]
+ 009c0374 ["INT_ADD", "register:40f0:8", ["const:9c0374:8", "const:4:8"]]
+ 009c0374 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-6a736d4856e8a3663d80c769e209db12"></a>

### [`009c0dcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0dcc.md) → [`009c1d78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c1d78.md) FUN_009c1d78

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009c05e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c05e0.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`009c0f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0f54.md) [`009c108c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c108c.md) [`009c10a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c10a0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`009c158c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c158c.md) · 呼出先 7件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`009c1f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c1f00.md) [`009c2038`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c2/009c2038.md) [`009c204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c2/009c204c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009c0e6c ["INT_ADD", "register:40f0:8", ["const:9c0e6c:8", "const:4:8"]]
- 009c0e6c ["CALL", null, ["callee:00c58f30:8"]]
+ 009c1e18 ["INT_ADD", "register:40f0:8", ["const:9c1e18:8", "const:4:8"]]
+ 009c1e18 ["CALL", null, ["callee:00c58f30:8"]]
- 009c0e94 ["INT_ADD", "register:40f0:8", ["const:9c0e94:8", "const:4:8"]]
- 009c0e94 ["CALL", null, ["callee:009c1f00:8"]]
+ 009c1e40 ["INT_ADD", "register:40f0:8", ["const:9c1e40:8", "const:4:8"]]
+ 009c1e40 ["CALL", null, ["callee:009c1f00:8"]]
- 009c0eb8 ["INT_ADD", "register:40f0:8", ["const:9c0eb8:8", "const:4:8"]]
- 009c0eb8 ["CALL", null, ["callee:009c204c:8"]]
+ 009c1e64 ["INT_ADD", "register:40f0:8", ["const:9c1e64:8", "const:4:8"]]
+ 009c1e64 ["CALL", null, ["callee:009c204c:8"]]
~~~


<a id="compare-b15f09a3258f78daad78b47c772f1f8f"></a>

### [`009c0f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0f54.md) → [`009c1f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c1f00.md) FUN_009c1f00

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`009c05e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c05e0.md) [`009c0dcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0dcc.md) · 呼出先 3件 [`00461710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00461/00461710.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 2件 [`009c158c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c158c.md) [`009c1d78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c1d78.md) · 呼出先 3件 [`00461a30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00461/00461a30.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009c0f7c ["INT_ADD", "register:40f0:8", ["const:9c0f7c:8", "const:4:8"]]
- 009c0f7c ["CALL", null, ["callee:00c54d60:8"]]
+ 009c1f28 ["INT_ADD", "register:40f0:8", ["const:9c1f28:8", "const:4:8"]]
+ 009c1f28 ["CALL", null, ["callee:00c54d60:8"]]
- 009c0f94 ["INT_ADD", "register:40f0:8", ["const:9c0f94:8", "const:4:8"]]
- 009c0f94 ["CALL", null, ["callee:00c54d60:8"]]
+ 009c1f40 ["INT_ADD", "register:40f0:8", ["const:9c1f40:8", "const:4:8"]]
+ 009c1f40 ["CALL", null, ["callee:00c54d60:8"]]
- 009c0fac ["INT_ADD", "register:40f0:8", ["const:9c0fac:8", "const:4:8"]]
- 009c0fac ["CALL", null, ["callee:00c54d60:8"]]
+ 009c1f58 ["INT_ADD", "register:40f0:8", ["const:9c1f58:8", "const:4:8"]]
+ 009c1f58 ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-cdf6e6351cde6d6b03c0dfcedf37b475"></a>

### [`009c1038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c1038.md) → [`009c1fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c1fe4.md) FUN_009c1fe4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00869820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869820.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0086a7cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a7cc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009c105c ["INT_ADD", "register:40f0:8", ["const:9c105c:8", "const:4:8"]]
- 009c105c ["CALL", null, ["callee:0086a7cc:8"]]
+ 009c2008 ["INT_ADD", "register:40f0:8", ["const:9c2008:8", "const:4:8"]]
+ 009c2008 ["CALL", null, ["callee:0086a7cc:8"]]
~~~


<a id="compare-82873516ebecb339fa736477ac33b3ad"></a>

### [`009c10a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c10a0.md) → [`009c204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c2/009c204c.md) FUN_009c204c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009c0dcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0dcc.md) · 呼出先 2件 [`00869820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869820.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`009c1d78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c1/009c1d78.md) · 呼出先 2件 [`0086a7cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a7cc.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009c1188 ["INT_ADD", "register:40f0:8", ["const:9c1188:8", "const:4:8"]]
- 009c1188 ["CALL", null, ["callee:00c590a0:8"]]
+ 009c2134 ["INT_ADD", "register:40f0:8", ["const:9c2134:8", "const:4:8"]]
+ 009c2134 ["CALL", null, ["callee:00c590a0:8"]]
- 009c11a4 ["INT_ADD", "register:40f0:8", ["const:9c11a4:8", "const:4:8"]]
- 009c11a4 ["CALL", null, ["callee:0086a7cc:8"]]
+ 009c2150 ["INT_ADD", "register:40f0:8", ["const:9c2150:8", "const:4:8"]]
+ 009c2150 ["CALL", null, ["callee:0086a7cc:8"]]
~~~


<a id="compare-cccdb01ee0e2b2889334018484892134"></a>

### [`009c156c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c156c.md) → [`009c2518`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c2/009c2518.md) FUN_009c2518

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b92e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92e8.md) [`008b92f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92f0.md) [`00a835f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a835f8.md)
- 新版 呼出元 0件  · 呼出先 4件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba294.md) [`008ba29c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba29c.md) [`00a845ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a84/00a845ec.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009c1580 ["INT_ADD", "register:40f0:8", ["const:9c1580:8", "const:4:8"]]
- 009c1580 ["CALL", null, ["callee:008ba294:8"]]
+ 009c252c ["INT_ADD", "register:40f0:8", ["const:9c252c:8", "const:4:8"]]
+ 009c252c ["CALL", null, ["callee:008ba294:8"]]
- 009c1588 ["INT_ADD", "register:40f0:8", ["const:9c1588:8", "const:4:8"]]
- 009c1588 ["CALL", null, ["callee:008524fc:8"]]
+ 009c2534 ["INT_ADD", "register:40f0:8", ["const:9c2534:8", "const:4:8"]]
+ 009c2534 ["CALL", null, ["callee:008524fc:8"]]
- 009c15d0 ["INT_ADD", "register:40f0:8", ["const:9c15d0:8", "const:4:8"]]
- 009c15d0 ["CALL", null, ["callee:008524fc:8"]]
+ 009c257c ["INT_ADD", "register:40f0:8", ["const:9c257c:8", "const:4:8"]]
+ 009c257c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-40152000ef8e6ac260a8655ef014ce5f"></a>

### [`009c2770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c2/009c2770.md) → [`009c371c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c3/009c371c.md) FUN_009c371c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`009c267c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c2/009c267c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`009c3628`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c3/009c3628.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009c2780 ["INT_ADD", "register:40f0:8", ["const:9c2780:8", "const:4:8"]]
- 009c2780 ["CALL", null, ["callee:009c3628:8"]]
+ 009c372c ["INT_ADD", "register:40f0:8", ["const:9c372c:8", "const:4:8"]]
+ 009c372c ["CALL", null, ["callee:009c3628:8"]]
~~~


<a id="compare-f792ee2da5f284fc0077f7f2ed121109"></a>

### [`009c33a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c3/009c33a4.md) → [`009c4350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c4/009c4350.md) FUN_009c4350

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) · 呼出先 3件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`0086a8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a8e0.md) [`0086bbac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bbac.md)
- 新版 呼出元 1件 [`0084f5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084f/0084f5a0.md) · 呼出先 3件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`0086b88c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b88c.md) [`0086cb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086c/0086cb58.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009c33dc ["INT_ADD", "register:40f0:8", ["const:9c33dc:8", "const:4:8"]]
- 009c33dc ["CALL", null, ["callee:005c1b8c:8"]]
+ 009c4388 ["INT_ADD", "register:40f0:8", ["const:9c4388:8", "const:4:8"]]
+ 009c4388 ["CALL", null, ["callee:005c1b8c:8"]]
- 009c33f8 ["INT_ADD", "register:40f0:8", ["const:9c33f8:8", "const:4:8"]]
- 009c33f8 ["CALL", null, ["callee:0086cb58:8"]]
+ 009c43a4 ["INT_ADD", "register:40f0:8", ["const:9c43a4:8", "const:4:8"]]
+ 009c43a4 ["CALL", null, ["callee:0086cb58:8"]]
- 009c3410 ["INT_ADD", "register:40f0:8", ["const:9c3410:8", "const:4:8"]]
- 009c3410 ["CALL", null, ["callee:0086b88c:8"]]
+ 009c43bc ["INT_ADD", "register:40f0:8", ["const:9c43bc:8", "const:4:8"]]
+ 009c43bc ["CALL", null, ["callee:0086b88c:8"]]
~~~


<a id="compare-20075be2273bff130b80027cae100ce7"></a>

### [`009c77d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c7/009c77d8.md) → [`009c8784`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c8/009c8784.md) FUN_009c8784

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) [`009a3254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3254.md) · 呼出先 1件 [`009c7820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c7/009c7820.md)
- 新版 呼出元 2件 [`00986418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00986/00986418.md) [`009a4200`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a4/009a4200.md) · 呼出先 1件 [`009c87cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c8/009c87cc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009c77f0 ["INT_ADD", "register:40f0:8", ["const:9c77f0:8", "const:4:8"]]
- 009c77f0 ["CALL", null, ["callee:009c87cc:8"]]
+ 009c879c ["INT_ADD", "register:40f0:8", ["const:9c879c:8", "const:4:8"]]
+ 009c879c ["CALL", null, ["callee:009c87cc:8"]]
~~~


<a id="compare-62f1340a6a0cef0cb1db74f356bb0def"></a>

### [`009c7bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c7/009c7bfc.md) → [`009c8ba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c8/009c8ba8.md) FUN_009c8ba8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`00996970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00996/00996970.md) [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) [`0099bac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0099b/0099bac4.md) [`009c7820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c7/009c7820.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 4件 [`0099791c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00997/0099791c.md) [`0099803c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00998/0099803c.md) [`0099ca70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0099c/0099ca70.md) [`009c87cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c8/009c87cc.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009c7ca8 ["INT_ADD", "register:40f0:8", ["const:9c7ca8:8", "const:4:8"]]
- 009c7ca8 ["CALL", null, ["callee:00c58f30:8"]]
+ 009c8c54 ["INT_ADD", "register:40f0:8", ["const:9c8c54:8", "const:4:8"]]
+ 009c8c54 ["CALL", null, ["callee:00c58f30:8"]]
- 009c7ce4 ["INT_ADD", "register:40f0:8", ["const:9c7ce4:8", "const:4:8"]]
- 009c7ce4 ["CALL", null, ["callee:0043bf04:8"]]
+ 009c8c90 ["INT_ADD", "register:40f0:8", ["const:9c8c90:8", "const:4:8"]]
+ 009c8c90 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-e84c36238eb84121a3467697e2aff139"></a>

### [`009c7d04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c7/009c7d04.md) → [`009c8cb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c8/009c8cb0.md) FUN_009c8cb0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) [`009a2e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a2/009a2e60.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`00986418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00986/00986418.md) [`009a3e0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a3/009a3e0c.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009c7db0 ["INT_ADD", "register:40f0:8", ["const:9c7db0:8", "const:4:8"]]
- 009c7db0 ["CALL", null, ["callee:00c58f30:8"]]
+ 009c8d5c ["INT_ADD", "register:40f0:8", ["const:9c8d5c:8", "const:4:8"]]
+ 009c8d5c ["CALL", null, ["callee:00c58f30:8"]]
- 009c7df0 ["INT_ADD", "register:40f0:8", ["const:9c7df0:8", "const:4:8"]]
- 009c7df0 ["CALL", null, ["callee:0043bf04:8"]]
+ 009c8d9c ["INT_ADD", "register:40f0:8", ["const:9c8d9c:8", "const:4:8"]]
+ 009c8d9c ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-243ea316a18b3fc199bd9a5a517cca1c"></a>

### [`009c7e10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c7/009c7e10.md) → [`009c8dbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c8/009c8dbc.md) FUN_009c8dbc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 13件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00480158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480158.md) [`004801b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/004801b8.md)
- 新版 呼出元 1件 [`00a271bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a27/00a271bc.md) · 呼出先 13件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00480478`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480478.md) [`004804d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/004804d8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009c7e44 ["INT_ADD", "register:40f0:8", ["const:9c7e44:8", "const:4:8"]]
- 009c7e44 ["CALL", null, ["callee:004804d8:8"]]
+ 009c8df0 ["INT_ADD", "register:40f0:8", ["const:9c8df0:8", "const:4:8"]]
+ 009c8df0 ["CALL", null, ["callee:004804d8:8"]]
- 009c7e74 ["INT_ADD", "register:40f0:8", ["const:9c7e74:8", "const:4:8"]]
- 009c7e74 ["CALL", null, ["callee:004804d8:8"]]
+ 009c8e20 ["INT_ADD", "register:40f0:8", ["const:9c8e20:8", "const:4:8"]]
+ 009c8e20 ["CALL", null, ["callee:004804d8:8"]]
- 009c7ec8 ["INT_ADD", "register:40f0:8", ["const:9c7ec8:8", "const:4:8"]]
- 009c7ec8 ["CALL", null, ["callee:00c58f30:8"]]
+ 009c8e74 ["INT_ADD", "register:40f0:8", ["const:9c8e74:8", "const:4:8"]]
+ 009c8e74 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-0319305c272b177c9bcc33f655609f60"></a>

### [`009c88b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c8/009c88b4.md) → [`009c9860`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c9/009c9860.md) FUN_009c9860

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 3件 [`00480b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480b78.md) [`00480bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480bd0.md) [`00480c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480c28.md)
- 新版 呼出元 1件 [`00a2c310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a2c/00a2c310.md) · 呼出先 3件 [`00480e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480e98.md) [`00480ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480ef0.md) [`00480f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480f48.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009c88e4 ["INT_ADD", "register:40f0:8", ["const:9c88e4:8", "const:4:8"]]
- 009c88e4 ["CALL", null, ["callee:00480ef0:8"]]
+ 009c9890 ["INT_ADD", "register:40f0:8", ["const:9c9890:8", "const:4:8"]]
+ 009c9890 ["CALL", null, ["callee:00480ef0:8"]]
- 009c88fc ["INT_ADD", "register:40f0:8", ["const:9c88fc:8", "const:4:8"]]
- 009c88fc ["CALL", null, ["callee:00480ef0:8"]]
+ 009c98a8 ["INT_ADD", "register:40f0:8", ["const:9c98a8:8", "const:4:8"]]
+ 009c98a8 ["CALL", null, ["callee:00480ef0:8"]]
- 009c8918 ["INT_ADD", "register:40f0:8", ["const:9c8918:8", "const:4:8"]]
- 009c8918 ["CALL", null, ["callee:00480ef0:8"]]
+ 009c98c4 ["INT_ADD", "register:40f0:8", ["const:9c98c4:8", "const:4:8"]]
+ 009c98c4 ["CALL", null, ["callee:00480ef0:8"]]
~~~


<a id="compare-85e1058f06b7b6c9c124b091ec7745d1"></a>

### [`009c8b30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c8/009c8b30.md) → [`009c9adc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c9/009c9adc.md) FUN_009c9adc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009c3a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c3/009c3a64.md) · 呼出先 2件 [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009c4a10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c4/009c4a10.md) · 呼出先 2件 [`00494970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00494/00494970.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009c8be0 ["INT_ADD", "register:40f0:8", ["const:9c8be0:8", "const:4:8"]]
- 009c8be0 ["CALL", null, ["callee:00494970:8"]]
+ 009c9b8c ["INT_ADD", "register:40f0:8", ["const:9c9b8c:8", "const:4:8"]]
+ 009c9b8c ["CALL", null, ["callee:00494970:8"]]
- 009c8bf0 ["INT_ADD", "register:40f0:8", ["const:9c8bf0:8", "const:4:8"]]
- 009c8bf0 ["CALL", null, ["callee:00c58f50:8"]]
+ 009c9b9c ["INT_ADD", "register:40f0:8", ["const:9c9b9c:8", "const:4:8"]]
+ 009c9b9c ["CALL", null, ["callee:00c58f50:8"]]
- 009c8bf8 ["INT_ADD", "register:40f0:8", ["const:9c8bf8:8", "const:4:8"]]
- 009c8bf8 ["CALL", null, ["callee:00c58f50:8"]]
+ 009c9ba4 ["INT_ADD", "register:40f0:8", ["const:9c9ba4:8", "const:4:8"]]
+ 009c9ba4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-57dc26ed852f57029f124a1990e1bf6b"></a>

### [`009c9c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c9/009c9c0c.md) → [`009cabb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ca/009cabb8.md) FUN_009cabb8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`009c3a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c3/009c3a64.md) [`009c9c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c9/009c9c0c.md) [`009ca0a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009ca0a8.md) · 呼出先 4件 [`009c9c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c9/009c9c0c.md) [`009c9f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c9/009c9f34.md) [`009ca0a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009ca0a8.md) [`009ca38c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009ca38c.md)
- 新版 呼出元 3件 [`009c4a10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c4/009c4a10.md) [`009cabb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ca/009cabb8.md) [`009cb054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cb/009cb054.md) · 呼出先 4件 [`009cabb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ca/009cabb8.md) [`009caee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ca/009caee0.md) [`009cb054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cb/009cb054.md) [`009cb338`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cb/009cb338.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009c9c60 ["INT_ADD", "register:40f0:8", ["const:9c9c60:8", "const:4:8"]]
- 009c9c60 ["CALL", null, ["callee:009caee0:8"]]
+ 009cac0c ["INT_ADD", "register:40f0:8", ["const:9cac0c:8", "const:4:8"]]
+ 009cac0c ["CALL", null, ["callee:009caee0:8"]]
- 009c9cd0 ["INT_ADD", "register:40f0:8", ["const:9c9cd0:8", "const:4:8"]]
- 009c9cd0 ["CALL", null, ["callee:009caee0:8"]]
+ 009cac7c ["INT_ADD", "register:40f0:8", ["const:9cac7c:8", "const:4:8"]]
+ 009cac7c ["CALL", null, ["callee:009caee0:8"]]
- 009c9cfc ["INT_ADD", "register:40f0:8", ["const:9c9cfc:8", "const:4:8"]]
- 009c9cfc ["CALL", null, ["callee:009caee0:8"]]
+ 009caca8 ["INT_ADD", "register:40f0:8", ["const:9caca8:8", "const:4:8"]]
+ 009caca8 ["CALL", null, ["callee:009caee0:8"]]
~~~


<a id="compare-0df979d5ee3a5308f88aba8dca0cacb7"></a>

### [`009c9f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c9/009c9f34.md) → [`009caee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ca/009caee0.md) FUN_009caee0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`009c9c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c9/009c9c0c.md) [`009ca0a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009ca0a8.md) [`009ca38c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009ca38c.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 3件 [`009cabb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ca/009cabb8.md) [`009cb054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cb/009cb054.md) [`009cb338`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cb/009cb338.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009c9fa8 ["INT_ADD", "register:40f0:8", ["const:9c9fa8:8", "const:4:8"]]
- 009c9fa8 ["CALL", null, ["callee:00c58f30:8"]]
+ 009caf54 ["INT_ADD", "register:40f0:8", ["const:9caf54:8", "const:4:8"]]
+ 009caf54 ["CALL", null, ["callee:00c58f30:8"]]
- 009c9fe4 ["INT_ADD", "register:40f0:8", ["const:9c9fe4:8", "const:4:8"]]
- 009c9fe4 ["CALL", null, ["callee:0043bf04:8"]]
+ 009caf90 ["INT_ADD", "register:40f0:8", ["const:9caf90:8", "const:4:8"]]
+ 009caf90 ["CALL", null, ["callee:0043bf04:8"]]
- 009ca038 ["INT_ADD", "register:40f0:8", ["const:9ca038:8", "const:4:8"]]
- 009ca038 ["CALL", null, ["callee:00c58f30:8"]]
+ 009cafe4 ["INT_ADD", "register:40f0:8", ["const:9cafe4:8", "const:4:8"]]
+ 009cafe4 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-4de9141400415694e420a2cdad2782fc"></a>

### [`009ca0a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009ca0a8.md) → [`009cb054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cb/009cb054.md) FUN_009cb054

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009c9c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c9/009c9c0c.md) · 呼出先 2件 [`009c9c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c9/009c9c0c.md) [`009c9f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c9/009c9f34.md)
- 新版 呼出元 1件 [`009cabb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ca/009cabb8.md) · 呼出先 2件 [`009cabb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ca/009cabb8.md) [`009caee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ca/009caee0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ca0f4 ["INT_ADD", "register:40f0:8", ["const:9ca0f4:8", "const:4:8"]]
- 009ca0f4 ["CALL", null, ["callee:009caee0:8"]]
+ 009cb0a0 ["INT_ADD", "register:40f0:8", ["const:9cb0a0:8", "const:4:8"]]
+ 009cb0a0 ["CALL", null, ["callee:009caee0:8"]]
- 009ca184 ["INT_ADD", "register:40f0:8", ["const:9ca184:8", "const:4:8"]]
- 009ca184 ["CALL", null, ["callee:009caee0:8"]]
+ 009cb130 ["INT_ADD", "register:40f0:8", ["const:9cb130:8", "const:4:8"]]
+ 009cb130 ["CALL", null, ["callee:009caee0:8"]]
- 009ca1b8 ["INT_ADD", "register:40f0:8", ["const:9ca1b8:8", "const:4:8"]]
- 009ca1b8 ["CALL", null, ["callee:009caee0:8"]]
+ 009cb164 ["INT_ADD", "register:40f0:8", ["const:9cb164:8", "const:4:8"]]
+ 009cb164 ["CALL", null, ["callee:009caee0:8"]]
~~~


<a id="compare-90917401e0278659a349121e29d3c686"></a>

### [`009ca38c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009ca38c.md) → [`009cb338`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cb/009cb338.md) FUN_009cb338

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`009c9c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c9/009c9c0c.md) [`009ca38c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009ca38c.md) · 呼出先 4件 [`009c9f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c9/009c9f34.md) [`009ca38c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009ca38c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 2件 [`009cabb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ca/009cabb8.md) [`009cb338`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cb/009cb338.md) · 呼出先 4件 [`009caee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ca/009caee0.md) [`009cb338`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cb/009cb338.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ca404 ["INT_ADD", "register:40f0:8", ["const:9ca404:8", "const:4:8"]]
- 009ca404 ["CALL", null, ["callee:009caee0:8"]]
+ 009cb3b0 ["INT_ADD", "register:40f0:8", ["const:9cb3b0:8", "const:4:8"]]
+ 009cb3b0 ["CALL", null, ["callee:009caee0:8"]]
- 009ca47c ["INT_ADD", "register:40f0:8", ["const:9ca47c:8", "const:4:8"]]
- 009ca47c ["CALL", null, ["callee:009caee0:8"]]
+ 009cb428 ["INT_ADD", "register:40f0:8", ["const:9cb428:8", "const:4:8"]]
+ 009cb428 ["CALL", null, ["callee:009caee0:8"]]
- 009ca574 ["INT_ADD", "register:40f0:8", ["const:9ca574:8", "const:4:8"]]
- 009ca574 ["CALL", null, ["callee:009caee0:8"]]
+ 009cb520 ["INT_ADD", "register:40f0:8", ["const:9cb520:8", "const:4:8"]]
+ 009cb520 ["CALL", null, ["callee:009caee0:8"]]
~~~


<a id="compare-224493f70c24af26bf468acf52412d06"></a>

### [`009cc69c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009cc69c.md) → [`009cd648`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cd/009cd648.md) FUN_009cd648

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00802f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802f94.md) · 呼出先 6件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`0087eb78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eb78.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 2件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`00803ef8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803ef8.md) · 呼出先 6件 [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`0087fb24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087fb24.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009cc6d0 ["INT_ADD", "register:40f0:8", ["const:9cc6d0:8", "const:4:8"]]
- 009cc6d0 ["CALL", null, ["callee:0087fb24:8"]]
+ 009cd67c ["INT_ADD", "register:40f0:8", ["const:9cd67c:8", "const:4:8"]]
+ 009cd67c ["CALL", null, ["callee:0087fb24:8"]]
- 009cc6e8 ["INT_ADD", "register:40f0:8", ["const:9cc6e8:8", "const:4:8"]]
- 009cc6e8 ["CALL", null, ["callee:00c54d60:8"]]
+ 009cd694 ["INT_ADD", "register:40f0:8", ["const:9cd694:8", "const:4:8"]]
+ 009cd694 ["CALL", null, ["callee:00c54d60:8"]]
- 009cc6fc ["INT_ADD", "register:40f0:8", ["const:9cc6fc:8", "const:4:8"]]
- 009cc6fc ["CALL", null, ["callee:00c54d90:8"]]
+ 009cd6a8 ["INT_ADD", "register:40f0:8", ["const:9cd6a8:8", "const:4:8"]]
+ 009cd6a8 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-0d2de53c5c7b3ea5340b8e66529b7540"></a>

### [`009d35f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d3/009d35f8.md) → [`009d45a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d4/009d45a4.md) FUN_009d45a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`009d1320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d1/009d1320.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009d3660 ["INT_ADD", "register:40f0:8", ["const:9d3660:8", "const:4:8"]]
- 009d3660 ["CALL", null, ["callee:00c58f30:8"]]
+ 009d460c ["INT_ADD", "register:40f0:8", ["const:9d460c:8", "const:4:8"]]
+ 009d460c ["CALL", null, ["callee:00c58f30:8"]]
- 009d3698 ["INT_ADD", "register:40f0:8", ["const:9d3698:8", "const:4:8"]]
- 009d3698 ["CALL", null, ["callee:0043bf04:8"]]
+ 009d4644 ["INT_ADD", "register:40f0:8", ["const:9d4644:8", "const:4:8"]]
+ 009d4644 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-4b9687b71493c3f21bf484ab53296dc8"></a>

### [`009d36c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d3/009d36c0.md) → [`009d466c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d4/009d466c.md) FUN_009d466c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`009d1320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d1/009d1320.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009d3728 ["INT_ADD", "register:40f0:8", ["const:9d3728:8", "const:4:8"]]
- 009d3728 ["CALL", null, ["callee:00c58f30:8"]]
+ 009d46d4 ["INT_ADD", "register:40f0:8", ["const:9d46d4:8", "const:4:8"]]
+ 009d46d4 ["CALL", null, ["callee:00c58f30:8"]]
- 009d3760 ["INT_ADD", "register:40f0:8", ["const:9d3760:8", "const:4:8"]]
- 009d3760 ["CALL", null, ["callee:0043bf04:8"]]
+ 009d470c ["INT_ADD", "register:40f0:8", ["const:9d470c:8", "const:4:8"]]
+ 009d470c ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-81730a9b4a476d04a88e3e7aac4aa845"></a>

### [`009d3788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d3/009d3788.md) → [`009d4734`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d4/009d4734.md) FUN_009d4734

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`009d1320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d1/009d1320.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009d37cc ["INT_ADD", "register:40f0:8", ["const:9d37cc:8", "const:4:8"]]
- 009d37cc ["CALL", null, ["callee:00c590f0:8"]]
+ 009d4778 ["INT_ADD", "register:40f0:8", ["const:9d4778:8", "const:4:8"]]
+ 009d4778 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-bd498aa67a69ea9d62cb084c3dcf9936"></a>

### [`009d37f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d3/009d37f0.md) → [`009d479c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d4/009d479c.md) FUN_009d479c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`009d1320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d1/009d1320.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009d3858 ["INT_ADD", "register:40f0:8", ["const:9d3858:8", "const:4:8"]]
- 009d3858 ["CALL", null, ["callee:00c58f30:8"]]
+ 009d4804 ["INT_ADD", "register:40f0:8", ["const:9d4804:8", "const:4:8"]]
+ 009d4804 ["CALL", null, ["callee:00c58f30:8"]]
- 009d3894 ["INT_ADD", "register:40f0:8", ["const:9d3894:8", "const:4:8"]]
- 009d3894 ["CALL", null, ["callee:0043bf04:8"]]
+ 009d4840 ["INT_ADD", "register:40f0:8", ["const:9d4840:8", "const:4:8"]]
+ 009d4840 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-eaa9af62fb73ca8a520cdca01b0f8b0e"></a>

### [`009d38bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d3/009d38bc.md) → [`009d4868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d4/009d4868.md) FUN_009d4868

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) · 呼出先 2件 [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009d1320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d1/009d1320.md) · 呼出先 2件 [`00494970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00494/00494970.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009d3968 ["INT_ADD", "register:40f0:8", ["const:9d3968:8", "const:4:8"]]
- 009d3968 ["CALL", null, ["callee:00494970:8"]]
+ 009d4914 ["INT_ADD", "register:40f0:8", ["const:9d4914:8", "const:4:8"]]
+ 009d4914 ["CALL", null, ["callee:00494970:8"]]
- 009d3970 ["INT_ADD", "register:40f0:8", ["const:9d3970:8", "const:4:8"]]
- 009d3970 ["CALL", null, ["callee:00c58f50:8"]]
+ 009d491c ["INT_ADD", "register:40f0:8", ["const:9d491c:8", "const:4:8"]]
+ 009d491c ["CALL", null, ["callee:00c58f50:8"]]
~~~


