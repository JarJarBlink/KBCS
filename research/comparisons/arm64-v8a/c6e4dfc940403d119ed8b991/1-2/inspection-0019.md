# v16.0.2 → v16.0.3 · 要調査の変更候補 (19)

[一覧の目次](README.md)

<a id="compare-3a6d70d1d3adc2ece284de0c46fc9c95"></a>

### [`0073767c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00737/0073767c.md) → [`00737a2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00737/00737a2c.md) FUN_00737a2c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 4件 [`00732f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00732/00732f24.md) [`00733760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00733/00733760.md) [`0073af8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073af8c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) · 呼出先 4件 [`007332d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00733/007332d4.md) [`00733b10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00733/00733b10.md) [`0073b33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b33c.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007376dc ["INT_ADD", "register:40f0:8", ["const:7376dc:8", "const:4:8"]]
- 007376dc ["CALL", null, ["callee:007332d4:8"]]
+ 00737a8c ["INT_ADD", "register:40f0:8", ["const:737a8c:8", "const:4:8"]]
+ 00737a8c ["CALL", null, ["callee:007332d4:8"]]
- 007376f4 ["INT_ADD", "register:40f0:8", ["const:7376f4:8", "const:4:8"]]
- 007376f4 ["CALL", null, ["callee:008524fc:8"]]
+ 00737aa4 ["INT_ADD", "register:40f0:8", ["const:737aa4:8", "const:4:8"]]
+ 00737aa4 ["CALL", null, ["callee:008524fc:8"]]
- 00737700 ["INT_ADD", "register:40f0:8", ["const:737700:8", "const:4:8"]]
- 00737700 ["CALL", null, ["callee:00733b10:8"]]
+ 00737ab0 ["INT_ADD", "register:40f0:8", ["const:737ab0:8", "const:4:8"]]
+ 00737ab0 ["CALL", null, ["callee:00733b10:8"]]
~~~


<a id="compare-e313adf09a9d6e2e5e8de6f2f68579fc"></a>

### [`0073776c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00737/0073776c.md) → [`00737b1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00737/00737b1c.md) FUN_00737b1c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007377e8 ["INT_ADD", "register:40f0:8", ["const:7377e8:8", "const:4:8"]]
- 007377e8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00737b98 ["INT_ADD", "register:40f0:8", ["const:737b98:8", "const:4:8"]]
+ 00737b98 ["CALL", null, ["callee:00c58f30:8"]]
- 00737820 ["INT_ADD", "register:40f0:8", ["const:737820:8", "const:4:8"]]
- 00737820 ["CALL", null, ["callee:0043bf04:8"]]
+ 00737bd0 ["INT_ADD", "register:40f0:8", ["const:737bd0:8", "const:4:8"]]
+ 00737bd0 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-d021091e6ed3a99c4ed5fada271cf38c"></a>

### [`00737850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00737/00737850.md) → [`00737c00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00737/00737c00.md) FUN_00737c00

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007378d0 ["INT_ADD", "register:40f0:8", ["const:7378d0:8", "const:4:8"]]
- 007378d0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00737c80 ["INT_ADD", "register:40f0:8", ["const:737c80:8", "const:4:8"]]
+ 00737c80 ["CALL", null, ["callee:00c58f30:8"]]
- 00737908 ["INT_ADD", "register:40f0:8", ["const:737908:8", "const:4:8"]]
- 00737908 ["CALL", null, ["callee:0043bf04:8"]]
+ 00737cb8 ["INT_ADD", "register:40f0:8", ["const:737cb8:8", "const:4:8"]]
+ 00737cb8 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-79673dd48e219f94d06ff25c495ab1cd"></a>

### [`00737930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00737/00737930.md) → [`00737ce0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00737/00737ce0.md) FUN_00737ce0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00440f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f9c.md) [`007340c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00734/007340c8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`0088d874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088d/0088d874.md) [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) · 呼出先 8件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004412bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412bc.md) [`00734478`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00734/00734478.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00737970 ["INT_ADD", "register:40f0:8", ["const:737970:8", "const:4:8"]]
- 00737970 ["CALL", null, ["callee:008524fc:8"]]
+ 00737d20 ["INT_ADD", "register:40f0:8", ["const:737d20:8", "const:4:8"]]
+ 00737d20 ["CALL", null, ["callee:008524fc:8"]]
- 007379bc ["INT_ADD", "register:40f0:8", ["const:7379bc:8", "const:4:8"]]
- 007379bc ["CALL", null, ["callee:00734478:8"]]
+ 00737d6c ["INT_ADD", "register:40f0:8", ["const:737d6c:8", "const:4:8"]]
+ 00737d6c ["CALL", null, ["callee:00734478:8"]]
- 00737a48 ["INT_ADD", "register:40f0:8", ["const:737a48:8", "const:4:8"]]
- 00737a48 ["CALL", null, ["callee:00c58f30:8"]]
+ 00737df8 ["INT_ADD", "register:40f0:8", ["const:737df8:8", "const:4:8"]]
+ 00737df8 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-c23509ff2c24008b6c028152b1d4fa69"></a>

### [`00737bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00737/00737bbc.md) → [`00737f6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00737/00737f6c.md) FUN_00737f6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00733ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00733/00733ebc.md) [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) · 呼出先 5件 [`004939d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/004939d8.md) [`007340c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00734/007340c8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`0073426c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00734/0073426c.md) [`0088d874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088d/0088d874.md) · 呼出先 5件 [`00493cf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493cf8.md) [`00734478`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00734/00734478.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00737be4 ["INT_ADD", "register:40f0:8", ["const:737be4:8", "const:4:8"]]
- 00737be4 ["CALL", null, ["callee:008524fc:8"]]
+ 00737f94 ["INT_ADD", "register:40f0:8", ["const:737f94:8", "const:4:8"]]
+ 00737f94 ["CALL", null, ["callee:008524fc:8"]]
- 00737c44 ["INT_ADD", "register:40f0:8", ["const:737c44:8", "const:4:8"]]
- 00737c44 ["CALL", null, ["callee:00734478:8"]]
+ 00737ff4 ["INT_ADD", "register:40f0:8", ["const:737ff4:8", "const:4:8"]]
+ 00737ff4 ["CALL", null, ["callee:00734478:8"]]
- 00737c50 ["INT_ADD", "register:40f0:8", ["const:737c50:8", "const:4:8"]]
- 00737c50 ["CALL", null, ["callee:00493cf8:8"]]
+ 00738000 ["INT_ADD", "register:40f0:8", ["const:738000:8", "const:4:8"]]
+ 00738000 ["CALL", null, ["callee:00493cf8:8"]]
~~~


<a id="compare-13db8ff9aa7f9a5fb750e30c4a5a5412"></a>

### [`00737db8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00737/00737db8.md) → [`00738168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00738/00738168.md) FUN_00738168

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00737e84 ["INT_ADD", "register:40f0:8", ["const:737e84:8", "const:4:8"]]
- 00737e84 ["CALL", null, ["callee:00c58f30:8"]]
+ 00738234 ["INT_ADD", "register:40f0:8", ["const:738234:8", "const:4:8"]]
+ 00738234 ["CALL", null, ["callee:00c58f30:8"]]
- 00737ebc ["INT_ADD", "register:40f0:8", ["const:737ebc:8", "const:4:8"]]
- 00737ebc ["CALL", null, ["callee:0043bf04:8"]]
+ 0073826c ["INT_ADD", "register:40f0:8", ["const:73826c:8", "const:4:8"]]
+ 0073826c ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-75f142fb6ae46d9b306a0d8fac561a6a"></a>

### [`00737ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00737/00737ee4.md) → [`00738294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00738/00738294.md) FUN_00738294

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a14de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a14/00a14de0.md) · 呼出先 8件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00480d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480d88.md) [`00480e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480e68.md) [`00481168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481168.md) [`00739f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/00739f94.md)
- 新版 呼出元 1件 [`00a15d8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a15/00a15d8c.md) · 呼出先 8件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`004810a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/004810a8.md) [`00481188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/00481188.md) [`00481488`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/00481488.md) [`0073a344`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073a/0073a344.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00737f20 ["INT_ADD", "register:40f0:8", ["const:737f20:8", "const:4:8"]]
- 00737f20 ["CALL", null, ["callee:00481188:8"]]
+ 007382d0 ["INT_ADD", "register:40f0:8", ["const:7382d0:8", "const:4:8"]]
+ 007382d0 ["CALL", null, ["callee:00481188:8"]]
- 00737f8c ["INT_ADD", "register:40f0:8", ["const:737f8c:8", "const:4:8"]]
- 00737f8c ["CALL", null, ["callee:0073a344:8"]]
+ 0073833c ["INT_ADD", "register:40f0:8", ["const:73833c:8", "const:4:8"]]
+ 0073833c ["CALL", null, ["callee:0073a344:8"]]
- 00737fc8 ["INT_ADD", "register:40f0:8", ["const:737fc8:8", "const:4:8"]]
- 00737fc8 ["CALL", null, ["callee:00481188:8"]]
+ 00738378 ["INT_ADD", "register:40f0:8", ["const:738378:8", "const:4:8"]]
+ 00738378 ["CALL", null, ["callee:00481188:8"]]
~~~


<a id="compare-5c190b08eb6707c747d7e8cd9c5dcc0d"></a>

### [`00738360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00738/00738360.md) → [`00738710`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00738/00738710.md) FUN_00738710

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a14de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a14/00a14de0.md) · 呼出先 1件 [`00480e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480e68.md)
- 新版 呼出元 1件 [`00a15d8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a15/00a15d8c.md) · 呼出先 1件 [`00481188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/00481188.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00738378 ["INT_ADD", "register:40f0:8", ["const:738378:8", "const:4:8"]]
- 00738378 ["CALL", null, ["callee:00481188:8"]]
+ 00738728 ["INT_ADD", "register:40f0:8", ["const:738728:8", "const:4:8"]]
+ 00738728 ["CALL", null, ["callee:00481188:8"]]
- 00738384 ["INT_ADD", "register:40f0:8", ["const:738384:8", "const:4:8"]]
- 00738384 ["CALL", null, ["callee:00481188:8"]]
+ 00738734 ["INT_ADD", "register:40f0:8", ["const:738734:8", "const:4:8"]]
+ 00738734 ["CALL", null, ["callee:00481188:8"]]
~~~


<a id="compare-148141841f188c9034bf80cbee231911"></a>

### [`0073839c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00738/0073839c.md) → [`0073874c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00738/0073874c.md) FUN_0073874c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) · 呼出先 1件 [`00480430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480430.md)
- 新版 呼出元 1件 [`00a07d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07d9c.md) · 呼出先 1件 [`00480750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480750.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007383b0 ["INT_ADD", "register:40f0:8", ["const:7383b0:8", "const:4:8"]]
- 007383b0 ["CALL", null, ["callee:00480750:8"]]
+ 00738760 ["INT_ADD", "register:40f0:8", ["const:738760:8", "const:4:8"]]
+ 00738760 ["CALL", null, ["callee:00480750:8"]]
- 007383b8 ["INT_ADD", "register:40f0:8", ["const:7383b8:8", "const:4:8"]]
- 007383b8 ["CALL", null, ["callee:00480750:8"]]
+ 00738768 ["INT_ADD", "register:40f0:8", ["const:738768:8", "const:4:8"]]
+ 00738768 ["CALL", null, ["callee:00480750:8"]]
~~~


<a id="compare-1c5e63c232533efa9821e640f6372488"></a>

### [`007383cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00738/007383cc.md) → [`0073877c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00738/0073877c.md) FUN_0073877c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a14de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a14/00a14de0.md) · 呼出先 2件 [`00480d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480d88.md) [`00480e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480e68.md)
- 新版 呼出元 1件 [`00a15d8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a15/00a15d8c.md) · 呼出先 2件 [`004810a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/004810a8.md) [`00481188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/00481188.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007383f0 ["INT_ADD", "register:40f0:8", ["const:7383f0:8", "const:4:8"]]
- 007383f0 ["CALL", null, ["callee:00481188:8"]]
+ 007387a0 ["INT_ADD", "register:40f0:8", ["const:7387a0:8", "const:4:8"]]
+ 007387a0 ["CALL", null, ["callee:00481188:8"]]
- 0073842c ["INT_ADD", "register:40f0:8", ["const:73842c:8", "const:4:8"]]
- 0073842c ["CALL", null, ["callee:00481188:8"]]
+ 007387dc ["INT_ADD", "register:40f0:8", ["const:7387dc:8", "const:4:8"]]
+ 007387dc ["CALL", null, ["callee:00481188:8"]]
- 00738438 ["INT_ADD", "register:40f0:8", ["const:738438:8", "const:4:8"]]
- 00738438 ["CALL", null, ["callee:004810a8:8"]]
+ 007387e8 ["INT_ADD", "register:40f0:8", ["const:7387e8:8", "const:4:8"]]
+ 007387e8 ["CALL", null, ["callee:004810a8:8"]]
~~~


<a id="compare-563562a27dae3682aa63a2c2bcb03bf8"></a>

### [`0073846c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00738/0073846c.md) → [`0073881c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00738/0073881c.md) FUN_0073881c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) · 呼出先 5件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00480338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480338.md) [`00480430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480430.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`00a07d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07d9c.md) · 呼出先 5件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00480658`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480658.md) [`00480750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480750.md) [`00676e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676e50.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007384a4 ["INT_ADD", "register:40f0:8", ["const:7384a4:8", "const:4:8"]]
- 007384a4 ["CALL", null, ["callee:00676e50:8"]]
+ 00738854 ["INT_ADD", "register:40f0:8", ["const:738854:8", "const:4:8"]]
+ 00738854 ["CALL", null, ["callee:00676e50:8"]]
- 007384b4 ["INT_ADD", "register:40f0:8", ["const:7384b4:8", "const:4:8"]]
- 007384b4 ["CALL", null, ["callee:00480750:8"]]
+ 00738864 ["INT_ADD", "register:40f0:8", ["const:738864:8", "const:4:8"]]
+ 00738864 ["CALL", null, ["callee:00480750:8"]]
- 007384d0 ["INT_ADD", "register:40f0:8", ["const:7384d0:8", "const:4:8"]]
- 007384d0 ["CALL", null, ["callee:0043bf04:8"]]
+ 00738880 ["INT_ADD", "register:40f0:8", ["const:738880:8", "const:4:8"]]
+ 00738880 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-63a6506e9acb5941e272066d20103b22"></a>

### [`007385b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00738/007385b4.md) → [`00738964`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00738/00738964.md) FUN_00738964

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a14de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a14/00a14de0.md) · 呼出先 2件 [`00480d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480d88.md) [`004810d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/004810d8.md)
- 新版 呼出元 1件 [`00a15d8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a15/00a15d8c.md) · 呼出先 2件 [`004810a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/004810a8.md) [`004813f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/004813f8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007385d4 ["INT_ADD", "register:40f0:8", ["const:7385d4:8", "const:4:8"]]
- 007385d4 ["CALL", null, ["callee:004810a8:8"]]
+ 00738984 ["INT_ADD", "register:40f0:8", ["const:738984:8", "const:4:8"]]
+ 00738984 ["CALL", null, ["callee:004810a8:8"]]
~~~


<a id="compare-c73f40931ccfd22db18155a6e3b43b9d"></a>

### [`007385ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00738/007385ec.md) → [`0073899c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00738/0073899c.md) FUN_0073899c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) · 呼出先 2件 [`00480338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480338.md) [`00480784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480784.md)
- 新版 呼出元 1件 [`00a07d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07d9c.md) · 呼出先 2件 [`00480658`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480658.md) [`00480aa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480aa4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00738604 ["INT_ADD", "register:40f0:8", ["const:738604:8", "const:4:8"]]
- 00738604 ["CALL", null, ["callee:00480658:8"]]
+ 007389b4 ["INT_ADD", "register:40f0:8", ["const:7389b4:8", "const:4:8"]]
+ 007389b4 ["CALL", null, ["callee:00480658:8"]]
- 00738614 ["INT_ADD", "register:40f0:8", ["const:738614:8", "const:4:8"]]
- 00738614 ["CALL", null, ["callee:00480aa4:8"]]
+ 007389c4 ["INT_ADD", "register:40f0:8", ["const:7389c4:8", "const:4:8"]]
+ 007389c4 ["CALL", null, ["callee:00480aa4:8"]]
~~~


<a id="compare-35e76af3a5994ea9190154511b4d1040"></a>

### [`00738628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00738/00738628.md) → [`007389d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00738/007389d8.md) FUN_007389d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 7件 [`00480b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480b78.md) [`00480bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480bd0.md) [`00480c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480c28.md) [`00480d30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480d30.md) [`00480d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480d88.md)
- 新版 呼出元 1件 [`00a2c310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a2c/00a2c310.md) · 呼出先 7件 [`00480e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480e98.md) [`00480ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480ef0.md) [`00480f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480f48.md) [`00481050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/00481050.md) [`004810a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/004810a8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0073864c ["INT_ADD", "register:40f0:8", ["const:73864c:8", "const:4:8"]]
- 0073864c ["CALL", null, ["callee:004810a8:8"]]
+ 007389fc ["INT_ADD", "register:40f0:8", ["const:7389fc:8", "const:4:8"]]
+ 007389fc ["CALL", null, ["callee:004810a8:8"]]
- 00738658 ["INT_ADD", "register:40f0:8", ["const:738658:8", "const:4:8"]]
- 00738658 ["CALL", null, ["callee:004813f8:8"]]
+ 00738a08 ["INT_ADD", "register:40f0:8", ["const:738a08:8", "const:4:8"]]
+ 00738a08 ["CALL", null, ["callee:004813f8:8"]]
- 00738664 ["INT_ADD", "register:40f0:8", ["const:738664:8", "const:4:8"]]
- 00738664 ["CALL", null, ["callee:004813f8:8"]]
+ 00738a14 ["INT_ADD", "register:40f0:8", ["const:738a14:8", "const:4:8"]]
+ 00738a14 ["CALL", null, ["callee:004813f8:8"]]
~~~


<a id="compare-8cff9ce229899787769aea7fe0d65b2f"></a>

### [`00738804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00738/00738804.md) → [`00738bb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00738/00738bb4.md) FUN_00738bb4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 10件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00480158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480158.md) [`004801b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/004801b8.md) [`00480218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480218.md) [`00480338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480338.md)
- 新版 呼出元 1件 [`00a271bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a27/00a271bc.md) · 呼出先 10件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00480478`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480478.md) [`004804d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/004804d8.md) [`00480538`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480538.md) [`00480658`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480658.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00738834 ["INT_ADD", "register:40f0:8", ["const:738834:8", "const:4:8"]]
- 00738834 ["CALL", null, ["callee:00480658:8"]]
+ 00738be4 ["INT_ADD", "register:40f0:8", ["const:738be4:8", "const:4:8"]]
+ 00738be4 ["CALL", null, ["callee:00480658:8"]]
- 00738844 ["INT_ADD", "register:40f0:8", ["const:738844:8", "const:4:8"]]
- 00738844 ["CALL", null, ["callee:00480aa4:8"]]
+ 00738bf4 ["INT_ADD", "register:40f0:8", ["const:738bf4:8", "const:4:8"]]
+ 00738bf4 ["CALL", null, ["callee:00480aa4:8"]]
- 00738850 ["INT_ADD", "register:40f0:8", ["const:738850:8", "const:4:8"]]
- 00738850 ["CALL", null, ["callee:00480aa4:8"]]
+ 00738c00 ["INT_ADD", "register:40f0:8", ["const:738c00:8", "const:4:8"]]
+ 00738c00 ["CALL", null, ["callee:00480aa4:8"]]
~~~


<a id="compare-46fdcbd051847bf077e4c73dbf1dcf34"></a>

### [`00738be0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00738/00738be0.md) → [`00738f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00738/00738f90.md) FUN_00738f90

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00a95838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a95/00a95838.md) · 呼出先 5件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00736c74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00736/00736c74.md) [`0073a35c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073a35c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`00a9682c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a96/00a9682c.md) · 呼出先 5件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`00737024`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00737/00737024.md) [`0073a70c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073a/0073a70c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00738c00 ["INT_ADD", "register:40f0:8", ["const:738c00:8", "const:4:8"]]
- 00738c00 ["CALL", null, ["callee:0048d1e4:8"]]
+ 00738fb0 ["INT_ADD", "register:40f0:8", ["const:738fb0:8", "const:4:8"]]
+ 00738fb0 ["CALL", null, ["callee:0048d1e4:8"]]
- 00738c68 ["INT_ADD", "register:40f0:8", ["const:738c68:8", "const:4:8"]]
- 00738c68 ["CALL", null, ["callee:00c58f30:8"]]
+ 00739018 ["INT_ADD", "register:40f0:8", ["const:739018:8", "const:4:8"]]
+ 00739018 ["CALL", null, ["callee:00c58f30:8"]]
- 00738ca4 ["INT_ADD", "register:40f0:8", ["const:738ca4:8", "const:4:8"]]
- 00738ca4 ["CALL", null, ["callee:0043bf04:8"]]
+ 00739054 ["INT_ADD", "register:40f0:8", ["const:739054:8", "const:4:8"]]
+ 00739054 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-29458ee39dcb72305413acfff59276ea"></a>

### [`00739050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/00739050.md) → [`00739400`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00739/00739400.md) FUN_00739400

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md)
- 新版 呼出元 0件  · 呼出先 1件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00739068 ["INT_ADD", "register:40f0:8", ["const:739068:8", "const:4:8"]]
- 00739068 ["CALL", null, ["callee:005c1b8c:8"]]
+ 00739418 ["INT_ADD", "register:40f0:8", ["const:739418:8", "const:4:8"]]
+ 00739418 ["CALL", null, ["callee:005c1b8c:8"]]
~~~


<a id="compare-c8ccfd69dbab909a85b513e1390f8f3d"></a>

### [`007393c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/007393c8.md) → [`00739778`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00739/00739778.md) FUN_00739778

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0073939c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/0073939c.md) · 呼出先 1件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md)
- 新版 呼出元 1件 [`0073974c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00739/0073974c.md) · 呼出先 1件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00739430 ["INT_ADD", "register:40f0:8", ["const:739430:8", "const:4:8"]]
- 00739430 ["CALL", null, ["callee:005c1b8c:8"]]
+ 007397e0 ["INT_ADD", "register:40f0:8", ["const:7397e0:8", "const:4:8"]]
+ 007397e0 ["CALL", null, ["callee:005c1b8c:8"]]
- 00739474 ["INT_ADD", "register:40f0:8", ["const:739474:8", "const:4:8"]]
- 00739474 ["CALL", null, ["callee:005c1b8c:8"]]
+ 00739824 ["INT_ADD", "register:40f0:8", ["const:739824:8", "const:4:8"]]
+ 00739824 ["CALL", null, ["callee:005c1b8c:8"]]
- 007394c0 ["INT_ADD", "register:40f0:8", ["const:7394c0:8", "const:4:8"]]
- 007394c0 ["CALL", null, ["callee:005c1b8c:8"]]
+ 00739870 ["INT_ADD", "register:40f0:8", ["const:739870:8", "const:4:8"]]
+ 00739870 ["CALL", null, ["callee:005c1b8c:8"]]
~~~


<a id="compare-3a12611b0f86a576478401a971b7938e"></a>

### [`00739e9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/00739e9c.md) → [`0073a24c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073a/0073a24c.md) FUN_0073a24c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00605294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/00605294.md) · 呼出先 1件 [`00727d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00727/00727d74.md)
- 新版 呼出元 1件 [`00605644`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00605/00605644.md) · 呼出先 1件 [`00728124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00728/00728124.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00739eb8 ["INT_ADD", "register:40f0:8", ["const:739eb8:8", "const:4:8"]]
- 00739eb8 ["CALL", null, ["callee:00728124:8"]]
+ 0073a268 ["INT_ADD", "register:40f0:8", ["const:73a268:8", "const:4:8"]]
+ 0073a268 ["CALL", null, ["callee:00728124:8"]]
~~~


<a id="compare-b465d95181d31c42c16bdfec27b9e4ba"></a>

### [`00739f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/00739f94.md) → [`0073a344`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073a/0073a344.md) FUN_0073a344

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00737ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00737/00737ee4.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0073a0c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073a0c0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00738294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00738/00738294.md) · 呼出先 5件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0073a470`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073a/0073a470.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00739fcc ["INT_ADD", "register:40f0:8", ["const:739fcc:8", "const:4:8"]]
- 00739fcc ["CALL", null, ["callee:0073a470:8"]]
+ 0073a37c ["INT_ADD", "register:40f0:8", ["const:73a37c:8", "const:4:8"]]
+ 0073a37c ["CALL", null, ["callee:0073a470:8"]]
- 00739fec ["INT_ADD", "register:40f0:8", ["const:739fec:8", "const:4:8"]]
- 00739fec ["CALL", null, ["callee:00c58f30:8"]]
+ 0073a39c ["INT_ADD", "register:40f0:8", ["const:73a39c:8", "const:4:8"]]
+ 0073a39c ["CALL", null, ["callee:00c58f30:8"]]
- 0073a020 ["INT_ADD", "register:40f0:8", ["const:73a020:8", "const:4:8"]]
- 0073a020 ["CALL", null, ["callee:0043be80:8"]]
+ 0073a3d0 ["INT_ADD", "register:40f0:8", ["const:73a3d0:8", "const:4:8"]]
+ 0073a3d0 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-2d9a8f51cb88462fba472d4901f3fd1c"></a>

### [`0073a0c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073a0c0.md) → [`0073a470`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073a/0073a470.md) FUN_0073a470

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00739f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/00739f94.md) · 呼出先 2件 [`006394fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/006394fc.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`0073a344`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073a/0073a344.md) · 呼出先 2件 [`006398ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/006398ac.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0073a148 ["INT_ADD", "register:40f0:8", ["const:73a148:8", "const:4:8"]]
- 0073a148 ["CALL", null, ["callee:00c590f0:8"]]
+ 0073a4f8 ["INT_ADD", "register:40f0:8", ["const:73a4f8:8", "const:4:8"]]
+ 0073a4f8 ["CALL", null, ["callee:00c590f0:8"]]
- 0073a19c ["INT_ADD", "register:40f0:8", ["const:73a19c:8", "const:4:8"]]
- 0073a19c ["CALL", null, ["callee:00c590f0:8"]]
+ 0073a54c ["INT_ADD", "register:40f0:8", ["const:73a54c:8", "const:4:8"]]
+ 0073a54c ["CALL", null, ["callee:00c590f0:8"]]
- 0073a238 ["INT_ADD", "register:40f0:8", ["const:73a238:8", "const:4:8"]]
- 0073a238 ["CALL", null, ["callee:00c590f0:8"]]
+ 0073a5e8 ["INT_ADD", "register:40f0:8", ["const:73a5e8:8", "const:4:8"]]
+ 0073a5e8 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-0847a355ecf0160612a377ead66ec02d"></a>

### [`0073a35c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073a35c.md) → [`0073a70c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073a/0073a70c.md) FUN_0073a70c

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 10件 [`00737ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00737/00737ee4.md) [`00738be0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00738/00738be0.md) [`007394fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/007394fc.md) [`0073a35c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073a35c.md) [`0073aea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073aea0.md) · 呼出先 2件 [`0073a35c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073a35c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 10件 [`00738294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00738/00738294.md) [`00738f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00738/00738f90.md) [`007398ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00739/007398ac.md) [`0073a70c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073a/0073a70c.md) [`0073b250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b250.md) · 呼出先 2件 [`0073a70c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073a/0073a70c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0073a378 ["INT_ADD", "register:40f0:8", ["const:73a378:8", "const:4:8"]]
- 0073a378 ["CALL", null, ["local:b0:8"]]
+ 0073a728 ["INT_ADD", "register:40f0:8", ["const:73a728:8", "const:4:8"]]
+ 0073a728 ["CALL", null, ["local:b0:8"]]
- 0073a384 ["INT_ADD", "register:40f0:8", ["const:73a384:8", "const:4:8"]]
- 0073a384 ["CALL", null, ["local:b0:8"]]
+ 0073a734 ["INT_ADD", "register:40f0:8", ["const:73a734:8", "const:4:8"]]
+ 0073a734 ["CALL", null, ["local:b0:8"]]
- 0073a394 ["INT_ADD", "register:40f0:8", ["const:73a394:8", "const:4:8"]]
- 0073a394 ["CALL", null, ["callee:00c58f50:8"]]
+ 0073a744 ["INT_ADD", "register:40f0:8", ["const:73a744:8", "const:4:8"]]
+ 0073a744 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-96dd1d99de7bbdc662e9fdefc6b3f6ca"></a>

### [`0073aea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073aea0.md) → [`0073b250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b250.md) FUN_0073b250

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`007342f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00734/007342f8.md) [`0073813c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00738/0073813c.md) [`0073aea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073aea0.md) [`00848180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848180.md) · 呼出先 3件 [`0073a35c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073a35c.md) [`0073aea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073aea0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`007346a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00734/007346a8.md) [`007384ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00738/007384ec.md) [`0073b250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b250.md) [`0084912c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/0084912c.md) · 呼出先 3件 [`0073a70c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073a/0073a70c.md) [`0073b250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b250.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0073aec0 ["INT_ADD", "register:40f0:8", ["const:73aec0:8", "const:4:8"]]
- 0073aec0 ["CALL", null, ["local:b0:8"]]
+ 0073b270 ["INT_ADD", "register:40f0:8", ["const:73b270:8", "const:4:8"]]
+ 0073b270 ["CALL", null, ["local:b0:8"]]
- 0073aecc ["INT_ADD", "register:40f0:8", ["const:73aecc:8", "const:4:8"]]
- 0073aecc ["CALL", null, ["local:b0:8"]]
+ 0073b27c ["INT_ADD", "register:40f0:8", ["const:73b27c:8", "const:4:8"]]
+ 0073b27c ["CALL", null, ["local:b0:8"]]
- 0073aed8 ["INT_ADD", "register:40f0:8", ["const:73aed8:8", "const:4:8"]]
- 0073aed8 ["CALL", null, ["callee:0073a70c:8"]]
+ 0073b288 ["INT_ADD", "register:40f0:8", ["const:73b288:8", "const:4:8"]]
+ 0073b288 ["CALL", null, ["callee:0073a70c:8"]]
~~~


<a id="compare-67e10ba872c03bd8dd65007323726ba1"></a>

### [`0073aef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073aef0.md) → [`0073b2a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b2a0.md) FUN_0073b2a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`007342f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00734/007342f8.md) [`00738804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00738/00738804.md) [`0073aef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073aef0.md) [`00848180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848180.md) · 呼出先 2件 [`0073aef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073aef0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`007346a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00734/007346a8.md) [`00738bb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00738/00738bb4.md) [`0073b2a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b2a0.md) [`0084912c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/0084912c.md) · 呼出先 2件 [`0073b2a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b2a0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0073af10 ["INT_ADD", "register:40f0:8", ["const:73af10:8", "const:4:8"]]
- 0073af10 ["CALL", null, ["local:b0:8"]]
+ 0073b2c0 ["INT_ADD", "register:40f0:8", ["const:73b2c0:8", "const:4:8"]]
+ 0073b2c0 ["CALL", null, ["local:b0:8"]]
- 0073af1c ["INT_ADD", "register:40f0:8", ["const:73af1c:8", "const:4:8"]]
- 0073af1c ["CALL", null, ["local:b0:8"]]
+ 0073b2cc ["INT_ADD", "register:40f0:8", ["const:73b2cc:8", "const:4:8"]]
+ 0073b2cc ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-06c6f08d597e6c7ead573b89d94db8d6"></a>

### [`0073af34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073af34.md) → [`0073b2e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b2e4.md) FUN_0073b2e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0073514c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00735/0073514c.md) [`0073af34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073af34.md) [`00848180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848180.md) · 呼出先 2件 [`0073af34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073af34.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`007354fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00735/007354fc.md) [`0073b2e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b2e4.md) [`0084912c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00849/0084912c.md) · 呼出先 2件 [`0073b2e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b2e4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0073af54 ["INT_ADD", "register:40f0:8", ["const:73af54:8", "const:4:8"]]
- 0073af54 ["CALL", null, ["local:b0:8"]]
+ 0073b304 ["INT_ADD", "register:40f0:8", ["const:73b304:8", "const:4:8"]]
+ 0073b304 ["CALL", null, ["local:b0:8"]]
- 0073af60 ["INT_ADD", "register:40f0:8", ["const:73af60:8", "const:4:8"]]
- 0073af60 ["CALL", null, ["local:b0:8"]]
+ 0073b310 ["INT_ADD", "register:40f0:8", ["const:73b310:8", "const:4:8"]]
+ 0073b310 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-202f7f1321a3211561d0d56691c200ab"></a>

### [`0073afb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073afb4.md) → [`0073b364`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b364.md) FUN_0073b364

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0073675c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00736/0073675c.md) [`00736c74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00736/00736c74.md) · 呼出先 3件 [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`0073a35c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073a35c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`00736b0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00736/00736b0c.md) [`00737024`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00737/00737024.md) · 呼出先 3件 [`00494970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00494/00494970.md) [`0073a70c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073a/0073a70c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0073b064 ["INT_ADD", "register:40f0:8", ["const:73b064:8", "const:4:8"]]
- 0073b064 ["CALL", null, ["callee:00494970:8"]]
+ 0073b414 ["INT_ADD", "register:40f0:8", ["const:73b414:8", "const:4:8"]]
+ 0073b414 ["CALL", null, ["callee:00494970:8"]]
- 0073b070 ["INT_ADD", "register:40f0:8", ["const:73b070:8", "const:4:8"]]
- 0073b070 ["CALL", null, ["callee:0073a70c:8"]]
+ 0073b420 ["INT_ADD", "register:40f0:8", ["const:73b420:8", "const:4:8"]]
+ 0073b420 ["CALL", null, ["callee:0073a70c:8"]]
- 0073b078 ["INT_ADD", "register:40f0:8", ["const:73b078:8", "const:4:8"]]
- 0073b078 ["CALL", null, ["callee:00c58f50:8"]]
+ 0073b428 ["INT_ADD", "register:40f0:8", ["const:73b428:8", "const:4:8"]]
+ 0073b428 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-14be2732fe7b636027b96e242391901a"></a>

### [`0073b08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073b/0073b08c.md) → [`0073b43c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b43c.md) FUN_0073b43c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00738db8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00738/00738db8.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`0073b2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073b/0073b2c0.md) [`0073b480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073b/0073b480.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`00739168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00739/00739168.md) · 呼出先 7件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`0073b670`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b670.md) [`0073b830`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b830.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0073b144 ["INT_ADD", "register:40f0:8", ["const:73b144:8", "const:4:8"]]
- 0073b144 ["CALL", null, ["callee:00c58f30:8"]]
+ 0073b4f4 ["INT_ADD", "register:40f0:8", ["const:73b4f4:8", "const:4:8"]]
+ 0073b4f4 ["CALL", null, ["callee:00c58f30:8"]]
- 0073b1f4 ["INT_ADD", "register:40f0:8", ["const:73b1f4:8", "const:4:8"]]
- 0073b1f4 ["CALL", null, ["callee:0073b670:8"]]
+ 0073b5a4 ["INT_ADD", "register:40f0:8", ["const:73b5a4:8", "const:4:8"]]
+ 0073b5a4 ["CALL", null, ["callee:0073b670:8"]]
- 0073b218 ["INT_ADD", "register:40f0:8", ["const:73b218:8", "const:4:8"]]
- 0073b218 ["CALL", null, ["callee:005c1b8c:8"]]
+ 0073b5c8 ["INT_ADD", "register:40f0:8", ["const:73b5c8:8", "const:4:8"]]
+ 0073b5c8 ["CALL", null, ["callee:005c1b8c:8"]]
~~~


<a id="compare-a77b38a38e1adfce2423d2754f998a6e"></a>

### [`0073b2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073b/0073b2c0.md) → [`0073b670`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b670.md) FUN_0073b670

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0073b08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073b/0073b08c.md) · 呼出先 1件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md)
- 新版 呼出元 1件 [`0073b43c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b43c.md) · 呼出先 1件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0073b3a0 ["INT_ADD", "register:40f0:8", ["const:73b3a0:8", "const:4:8"]]
- 0073b3a0 ["CALL", null, ["callee:005c1b8c:8"]]
+ 0073b750 ["INT_ADD", "register:40f0:8", ["const:73b750:8", "const:4:8"]]
+ 0073b750 ["CALL", null, ["callee:005c1b8c:8"]]
- 0073b3ac ["INT_ADD", "register:40f0:8", ["const:73b3ac:8", "const:4:8"]]
- 0073b3ac ["CALL", null, ["callee:005c1b8c:8"]]
+ 0073b75c ["INT_ADD", "register:40f0:8", ["const:73b75c:8", "const:4:8"]]
+ 0073b75c ["CALL", null, ["callee:005c1b8c:8"]]
~~~


<a id="compare-18e9854607e618f2807cc5ee7a3b7567"></a>

### [`0073b40c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073b/0073b40c.md) → [`0073b7bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b7bc.md) FUN_0073b7bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0073b43c ["INT_ADD", "register:40f0:8", ["const:73b43c:8", "const:4:8"]]
- 0073b43c ["CALL", null, ["callee:005c1b8c:8"]]
+ 0073b7ec ["INT_ADD", "register:40f0:8", ["const:73b7ec:8", "const:4:8"]]
+ 0073b7ec ["CALL", null, ["callee:005c1b8c:8"]]
- 0073b448 ["INT_ADD", "register:40f0:8", ["const:73b448:8", "const:4:8"]]
- 0073b448 ["CALL", null, ["callee:005c1b8c:8"]]
+ 0073b7f8 ["INT_ADD", "register:40f0:8", ["const:73b7f8:8", "const:4:8"]]
+ 0073b7f8 ["CALL", null, ["callee:005c1b8c:8"]]
~~~


<a id="compare-6ca7b3c27ecc69f5e11b21a0ecee2d33"></a>

### [`0073b494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073b/0073b494.md) → [`0073b844`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b844.md) FUN_0073b844

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md)
- 新版 呼出元 0件  · 呼出先 1件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0073b4cc ["INT_ADD", "register:40f0:8", ["const:73b4cc:8", "const:4:8"]]
- 0073b4cc ["CALL", null, ["callee:005c1b8c:8"]]
+ 0073b87c ["INT_ADD", "register:40f0:8", ["const:73b87c:8", "const:4:8"]]
+ 0073b87c ["CALL", null, ["callee:005c1b8c:8"]]
- 0073b4d8 ["INT_ADD", "register:40f0:8", ["const:73b4d8:8", "const:4:8"]]
- 0073b4d8 ["CALL", null, ["callee:005c1b8c:8"]]
+ 0073b888 ["INT_ADD", "register:40f0:8", ["const:73b888:8", "const:4:8"]]
+ 0073b888 ["CALL", null, ["callee:005c1b8c:8"]]
~~~


<a id="compare-643bd0c4c17e8c0361d440719f851748"></a>

### [`0073b4f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073b/0073b4f8.md) → [`0073b8a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b8a8.md) FUN_0073b8a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00739248`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/00739248.md) · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`007395f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00739/007395f8.md) · 呼出先 2件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0073b54c ["INT_ADD", "register:40f0:8", ["const:73b54c:8", "const:4:8"]]
- 0073b54c ["CALL", null, ["callee:005c1b8c:8"]]
+ 0073b8fc ["INT_ADD", "register:40f0:8", ["const:73b8fc:8", "const:4:8"]]
+ 0073b8fc ["CALL", null, ["callee:005c1b8c:8"]]
- 0073b558 ["INT_ADD", "register:40f0:8", ["const:73b558:8", "const:4:8"]]
- 0073b558 ["CALL", null, ["callee:005c1b8c:8"]]
+ 0073b908 ["INT_ADD", "register:40f0:8", ["const:73b908:8", "const:4:8"]]
+ 0073b908 ["CALL", null, ["callee:005c1b8c:8"]]
~~~


<a id="compare-310afee6ad9b85ad521506280892b0b7"></a>

### [`0073b58c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073b/0073b58c.md) → [`0073b93c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073b/0073b93c.md) FUN_0073b93c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00739248`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/00739248.md) · 呼出先 2件 [`00691858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00691/00691858.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`007395f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00739/007395f8.md) · 呼出先 2件 [`00691c08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00691/00691c08.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0073b60c ["INT_ADD", "register:40f0:8", ["const:73b60c:8", "const:4:8"]]
- 0073b60c ["CALL", null, ["callee:00691c08:8"]]
+ 0073b9bc ["INT_ADD", "register:40f0:8", ["const:73b9bc:8", "const:4:8"]]
+ 0073b9bc ["CALL", null, ["callee:00691c08:8"]]
- 0073b62c ["INT_ADD", "register:40f0:8", ["const:73b62c:8", "const:4:8"]]
- 0073b62c ["CALL", null, ["callee:00691c08:8"]]
+ 0073b9dc ["INT_ADD", "register:40f0:8", ["const:73b9dc:8", "const:4:8"]]
+ 0073b9dc ["CALL", null, ["callee:00691c08:8"]]
- 0073b6c0 ["INT_ADD", "register:40f0:8", ["const:73b6c0:8", "const:4:8"]]
- 0073b6c0 ["CALL", null, ["callee:00c58f80:8"]]
+ 0073ba70 ["INT_ADD", "register:40f0:8", ["const:73ba70:8", "const:4:8"]]
+ 0073ba70 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-06c95b16d290937d82fbc9506bcd5c7a"></a>

### [`0073c8d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073c/0073c8d0.md) → [`0073cc80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073c/0073cc80.md) FUN_0073cc80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0073c8f0 ["INT_ADD", "register:40f0:8", ["const:73c8f0:8", "const:4:8"]]
- 0073c8f0 ["CALL", null, ["callee:00c54d90:8"]]
+ 0073cca0 ["INT_ADD", "register:40f0:8", ["const:73cca0:8", "const:4:8"]]
+ 0073cca0 ["CALL", null, ["callee:00c54d90:8"]]
- 0073c904 ["COPY", "register:0:8", ["register:4040:8"]]
- 0073c904 ["INT_ADD", "register:40f0:8", ["const:73c904:8", "const:4:8"]]
- 0073c904 ["CALLIND", null, ["register:0:8"]]
+ 0073ccb4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0073ccb4 ["INT_ADD", "register:40f0:8", ["const:73ccb4:8", "const:4:8"]]
+ 0073ccb4 ["CALLIND", null, ["register:0:8"]]
- 0073c90c ["INT_ADD", "register:40f0:8", ["const:73c90c:8", "const:4:8"]]
- 0073c90c ["CALL", null, ["callee:00c58f20:8"]]
+ 0073ccbc ["INT_ADD", "register:40f0:8", ["const:73ccbc:8", "const:4:8"]]
+ 0073ccbc ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-26a30178cc420bde9d8f848e913149c4"></a>

### [`0073edc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073e/0073edc4.md) → [`0073f174`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073f/0073f174.md) FUN_0073f174

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0073d7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073d/0073d7fc.md) · 呼出先 4件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)
- 新版 呼出元 1件 [`0073dbac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073d/0073dbac.md) · 呼出先 4件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0073ede8 ["INT_ADD", "register:40f0:8", ["const:73ede8:8", "const:4:8"]]
- 0073ede8 ["CALL", null, ["callee:00c59080:8"]]
+ 0073f198 ["INT_ADD", "register:40f0:8", ["const:73f198:8", "const:4:8"]]
+ 0073f198 ["CALL", null, ["callee:00c59080:8"]]
- 0073ee30 ["INT_ADD", "register:40f0:8", ["const:73ee30:8", "const:4:8"]]
- 0073ee30 ["CALL", null, ["callee:00c58f30:8"]]
+ 0073f1e0 ["INT_ADD", "register:40f0:8", ["const:73f1e0:8", "const:4:8"]]
+ 0073f1e0 ["CALL", null, ["callee:00c58f30:8"]]
- 0073ee50 ["INT_ADD", "register:40f0:8", ["const:73ee50:8", "const:4:8"]]
- 0073ee50 ["CALL", null, ["callee:00c58fe0:8"]]
+ 0073f200 ["INT_ADD", "register:40f0:8", ["const:73f200:8", "const:4:8"]]
+ 0073f200 ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-ba1a91cbbbf23b3256bb51d2c1615f57"></a>

### [`00741058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741058.md) → [`00741408`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00741/00741408.md) FUN_00741408

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00740ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00740/00740ec0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00741270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00741/00741270.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00741068 ["INT_ADD", "register:40f0:8", ["const:741068:8", "const:4:8"]]
- 00741068 ["CALL", null, ["callee:00741270:8"]]
+ 00741418 ["INT_ADD", "register:40f0:8", ["const:741418:8", "const:4:8"]]
+ 00741418 ["CALL", null, ["callee:00741270:8"]]
~~~


<a id="compare-c11d77352758b9e1020b864dc932a2af"></a>

### [`0074107c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/0074107c.md) → [`0074142c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00741/0074142c.md) FUN_0074142c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 8件 [`0073c990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073c/0073c990.md) [`0073d7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073d/0073d7fc.md) [`0073ee8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073e/0073ee8c.md) [`00741628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/00741628.md) [`00742090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00742/00742090.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`005e81d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e81d8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 8件 [`0073cd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073c/0073cd40.md) [`0073dbac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073d/0073dbac.md) [`0073f23c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073f/0073f23c.md) [`007419d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00741/007419d8.md) [`00742440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00742/00742440.md) · 呼出先 4件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`005e8588`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e8/005e8588.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007410fc ["INT_ADD", "register:40f0:8", ["const:7410fc:8", "const:4:8"]]
- 007410fc ["CALL", null, ["callee:00c58f30:8"]]
+ 007414ac ["INT_ADD", "register:40f0:8", ["const:7414ac:8", "const:4:8"]]
+ 007414ac ["CALL", null, ["callee:00c58f30:8"]]
- 00741130 ["INT_ADD", "register:40f0:8", ["const:741130:8", "const:4:8"]]
- 00741130 ["CALL", null, ["callee:005e8588:8"]]
+ 007414e0 ["INT_ADD", "register:40f0:8", ["const:7414e0:8", "const:4:8"]]
+ 007414e0 ["CALL", null, ["callee:005e8588:8"]]
- 0074113c ["INT_ADD", "register:40f0:8", ["const:74113c:8", "const:4:8"]]
- 0074113c ["CALL", null, ["callee:005e8588:8"]]
+ 007414ec ["INT_ADD", "register:40f0:8", ["const:7414ec:8", "const:4:8"]]
+ 007414ec ["CALL", null, ["callee:005e8588:8"]]
~~~


<a id="compare-3ce3d259f025522d67db2a0a0f2fbfdf"></a>

### [`007411e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/007411e8.md) → [`00741598`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00741/00741598.md) FUN_00741598

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00741220 ["INT_ADD", "register:40f0:8", ["const:741220:8", "const:4:8"]]
- 00741220 ["CALL", null, ["callee:00c58f50:8"]]
+ 007415d0 ["INT_ADD", "register:40f0:8", ["const:7415d0:8", "const:4:8"]]
+ 007415d0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-38fcfd93ea73f6cb1efab965e14b104c"></a>

### [`007412d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/007412d0.md) → [`00741680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00741/00741680.md) FUN_00741680

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0073c990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073c/0073c990.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0063678c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/0063678c.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`0073cd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073c/0073cd40.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00636b3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/00636b3c.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0074133c ["INT_ADD", "register:40f0:8", ["const:74133c:8", "const:4:8"]]
- 0074133c ["CALL", null, ["callee:00c58f30:8"]]
+ 007416ec ["INT_ADD", "register:40f0:8", ["const:7416ec:8", "const:4:8"]]
+ 007416ec ["CALL", null, ["callee:00c58f30:8"]]
- 007413ac ["INT_ADD", "register:40f0:8", ["const:7413ac:8", "const:4:8"]]
- 007413ac ["CALL", null, ["callee:00c54d90:8"]]
+ 0074175c ["INT_ADD", "register:40f0:8", ["const:74175c:8", "const:4:8"]]
+ 0074175c ["CALL", null, ["callee:00c54d90:8"]]
- 007413c0 ["COPY", "register:0:8", ["register:4040:8"]]
- 007413c0 ["INT_ADD", "register:40f0:8", ["const:7413c0:8", "const:4:8"]]
- 007413c0 ["CALLIND", null, ["register:0:8"]]
+ 00741770 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00741770 ["INT_ADD", "register:40f0:8", ["const:741770:8", "const:4:8"]]
+ 00741770 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d84792598660f1f94a21f1b13274fb98"></a>

### [`00742a38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00742/00742a38.md) → [`00742de8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00742/00742de8.md) FUN_00742de8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00742808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00742/00742808.md) [`007fa1a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa1a0.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`00742bb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00742/00742bb8.md) [`007fb104`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fb/007fb104.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00742adc ["INT_ADD", "register:40f0:8", ["const:742adc:8", "const:4:8"]]
- 00742adc ["CALL", null, ["callee:00c58f30:8"]]
+ 00742e8c ["INT_ADD", "register:40f0:8", ["const:742e8c:8", "const:4:8"]]
+ 00742e8c ["CALL", null, ["callee:00c58f30:8"]]
- 00742b14 ["INT_ADD", "register:40f0:8", ["const:742b14:8", "const:4:8"]]
- 00742b14 ["CALL", null, ["callee:0043bf04:8"]]
+ 00742ec4 ["INT_ADD", "register:40f0:8", ["const:742ec4:8", "const:4:8"]]
+ 00742ec4 ["CALL", null, ["callee:0043bf04:8"]]
- 00742b74 ["INT_ADD", "register:40f0:8", ["const:742b74:8", "const:4:8"]]
- 00742b74 ["CALL", null, ["callee:00c58f30:8"]]
+ 00742f24 ["INT_ADD", "register:40f0:8", ["const:742f24:8", "const:4:8"]]
+ 00742f24 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-af8a8832bec875eb1a849874b63498ec"></a>

### [`00743de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00743/00743de8.md) → [`00744198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00744/00744198.md) FUN_00744198

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 14件 [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) [`005c0ecc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c0/005c0ecc.md) [`00759634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00759/00759634.md) [`0075a470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075a/0075a470.md) [`007fa1a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa1a0.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 14件 [`005bcbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bcbbc.md) [`005c127c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c127c.md) [`007599e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00759/007599e4.md) [`0075a820`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075a/0075a820.md) [`007fb104`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fb/007fb104.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00743e4c ["INT_ADD", "register:40f0:8", ["const:743e4c:8", "const:4:8"]]
- 00743e4c ["CALL", null, ["callee:00c58f30:8"]]
+ 007441fc ["INT_ADD", "register:40f0:8", ["const:7441fc:8", "const:4:8"]]
+ 007441fc ["CALL", null, ["callee:00c58f30:8"]]
- 00743e84 ["INT_ADD", "register:40f0:8", ["const:743e84:8", "const:4:8"]]
- 00743e84 ["CALL", null, ["callee:0043bf04:8"]]
+ 00744234 ["INT_ADD", "register:40f0:8", ["const:744234:8", "const:4:8"]]
+ 00744234 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-725ae4e7370bfdcba569aef3150478dc"></a>

### [`00743eb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00743/00743eb4.md) → [`00744264`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00744/00744264.md) FUN_00744264

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007fa9e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa9e8.md) [`007fbe60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fb/007fbe60.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`007fb94c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fb/007fb94c.md) [`007fcdc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fc/007fcdc4.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00743f1c ["INT_ADD", "register:40f0:8", ["const:743f1c:8", "const:4:8"]]
- 00743f1c ["CALL", null, ["callee:00c58f30:8"]]
+ 007442cc ["INT_ADD", "register:40f0:8", ["const:7442cc:8", "const:4:8"]]
+ 007442cc ["CALL", null, ["callee:00c58f30:8"]]
- 00743f54 ["INT_ADD", "register:40f0:8", ["const:743f54:8", "const:4:8"]]
- 00743f54 ["CALL", null, ["callee:0043bf04:8"]]
+ 00744304 ["INT_ADD", "register:40f0:8", ["const:744304:8", "const:4:8"]]
+ 00744304 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-3ad040292a9d15bf331a75b1f3dc418d"></a>

### [`00743f84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00743/00743f84.md) → [`00744334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00744/00744334.md) FUN_00744334

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 8件 [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) [`005c0ecc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c0/005c0ecc.md) [`00ad6af8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad6/00ad6af8.md) [`00ad6fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad6/00ad6fbc.md) [`00adf100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00adf/00adf100.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 8件 [`005bcbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bcbbc.md) [`005c127c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c127c.md) [`00ad7aec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ad7/00ad7aec.md) [`00ad7fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ad7/00ad7fb0.md) [`00ae00f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ae0/00ae00f4.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00743fe8 ["INT_ADD", "register:40f0:8", ["const:743fe8:8", "const:4:8"]]
- 00743fe8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00744398 ["INT_ADD", "register:40f0:8", ["const:744398:8", "const:4:8"]]
+ 00744398 ["CALL", null, ["callee:00c58f30:8"]]
- 00744020 ["INT_ADD", "register:40f0:8", ["const:744020:8", "const:4:8"]]
- 00744020 ["CALL", null, ["callee:0043bf04:8"]]
+ 007443d0 ["INT_ADD", "register:40f0:8", ["const:7443d0:8", "const:4:8"]]
+ 007443d0 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-c38875d9f785492ae424bcc2b6671a09"></a>

### [`00744048`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/00744048.md) → [`007443f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00744/007443f8.md) FUN_007443f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`00ad09c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad0/00ad09c8.md) [`00aea3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aea/00aea3f0.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 3件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`00ad19bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ad1/00ad19bc.md) [`00aeb3e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aeb/00aeb3e4.md) · 呼出先 3件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00744074 ["INT_ADD", "register:40f0:8", ["const:744074:8", "const:4:8"]]
- 00744074 ["CALL", null, ["callee:008524fc:8"]]
+ 00744424 ["INT_ADD", "register:40f0:8", ["const:744424:8", "const:4:8"]]
+ 00744424 ["CALL", null, ["callee:008524fc:8"]]
- 00744110 ["INT_ADD", "register:40f0:8", ["const:744110:8", "const:4:8"]]
- 00744110 ["CALL", null, ["callee:00c58f30:8"]]
+ 007444c0 ["INT_ADD", "register:40f0:8", ["const:7444c0:8", "const:4:8"]]
+ 007444c0 ["CALL", null, ["callee:00c58f30:8"]]
- 00744148 ["INT_ADD", "register:40f0:8", ["const:744148:8", "const:4:8"]]
- 00744148 ["CALL", null, ["callee:0043bf04:8"]]
+ 007444f8 ["INT_ADD", "register:40f0:8", ["const:7444f8:8", "const:4:8"]]
+ 007444f8 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-7b60b8bd42cc3b2be0b3615b9672f2c7"></a>

### [`007441f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/007441f0.md) → [`007445a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00744/007445a0.md) FUN_007445a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 8件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`007fa9e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007fa9e8.md) [`007faf94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fa/007faf94.md) [`007fb288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fb/007fb288.md) [`00ad6fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad6/00ad6fbc.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 8件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`007fb94c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fb/007fb94c.md) [`007fbef8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fb/007fbef8.md) [`007fc1ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fc/007fc1ec.md) [`00ad7fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ad7/00ad7fb0.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00744200 ["INT_ADD", "register:40f0:8", ["const:744200:8", "const:4:8"]]
- 00744200 ["CALL", null, ["callee:008524fc:8"]]
+ 007445b0 ["INT_ADD", "register:40f0:8", ["const:7445b0:8", "const:4:8"]]
+ 007445b0 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-f92cb99e70854cc9ba5a01544bd558cd"></a>

### [`00744260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/00744260.md) → [`00744610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00744/00744610.md) FUN_00744610

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 60件 [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) [`005c0ecc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c0/005c0ecc.md) [`005e4720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4720.md) [`005e4824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4824.md) [`005e4888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4888.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 60件 [`005bcbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bcbbc.md) [`005c127c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c127c.md) [`005e4ad0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e4/005e4ad0.md) [`005e4bd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e4/005e4bd4.md) [`005e4c38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e4/005e4c38.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00744270 ["INT_ADD", "register:40f0:8", ["const:744270:8", "const:4:8"]]
- 00744270 ["CALL", null, ["callee:008524fc:8"]]
+ 00744620 ["INT_ADD", "register:40f0:8", ["const:744620:8", "const:4:8"]]
+ 00744620 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-bbeecb68c9e77223ddf1ad9f57341acd"></a>

### [`00744294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/00744294.md) → [`00744644`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00744/00744644.md) FUN_00744644

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 8件 [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`006beae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006be/006beae0.md) [`0078e2d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e2d8.md) [`00a8a488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8a/00a8a488.md) [`00a91618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a91/00a91618.md) · 呼出先 2件 [`007442d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/007442d0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 8件 [`006bc0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006bc/006bc0a0.md) [`006bee90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006be/006bee90.md) [`0078e6b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e6b4.md) [`00a8b47c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8b/00a8b47c.md) [`00a9260c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a92/00a9260c.md) · 呼出先 2件 [`00744680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00744/00744680.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007442ac ["INT_ADD", "register:40f0:8", ["const:7442ac:8", "const:4:8"]]
- 007442ac ["CALL", null, ["callee:008524fc:8"]]
+ 0074465c ["INT_ADD", "register:40f0:8", ["const:74465c:8", "const:4:8"]]
+ 0074465c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-8fdcaa25696d60afe6adc66eddb5a678"></a>

### [`00744db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/00744db4.md) → [`00745164`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00745/00745164.md) FUN_00745164

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) · 呼出先 3件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00744dec ["INT_ADD", "register:40f0:8", ["const:744dec:8", "const:4:8"]]
- 00744dec ["CALL", null, ["callee:0043bf04:8"]]
+ 0074519c ["INT_ADD", "register:40f0:8", ["const:74519c:8", "const:4:8"]]
+ 0074519c ["CALL", null, ["callee:0043bf04:8"]]
- 00744e0c ["INT_ADD", "register:40f0:8", ["const:744e0c:8", "const:4:8"]]
- 00744e0c ["CALL", null, ["callee:008524fc:8"]]
+ 007451bc ["INT_ADD", "register:40f0:8", ["const:7451bc:8", "const:4:8"]]
+ 007451bc ["CALL", null, ["callee:008524fc:8"]]
- 00744ea4 ["INT_ADD", "register:40f0:8", ["const:744ea4:8", "const:4:8"]]
- 00744ea4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00745254 ["INT_ADD", "register:40f0:8", ["const:745254:8", "const:4:8"]]
+ 00745254 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-69002751ff0d8cde6209738d8af04281"></a>

### [`00744fe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/00744fe4.md) → [`00745394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00745/00745394.md) FUN_00745394

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 12件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00480158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480158.md) [`004801b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/004801b8.md)
- 新版 呼出元 1件 [`00a271bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a27/00a271bc.md) · 呼出先 12件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00480478`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480478.md) [`004804d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/004804d8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0074500c ["INT_ADD", "register:40f0:8", ["const:74500c:8", "const:4:8"]]
- 0074500c ["CALL", null, ["callee:00480538:8"]]
+ 007453bc ["INT_ADD", "register:40f0:8", ["const:7453bc:8", "const:4:8"]]
+ 007453bc ["CALL", null, ["callee:00480538:8"]]
- 00745018 ["INT_ADD", "register:40f0:8", ["const:745018:8", "const:4:8"]]
- 00745018 ["CALL", null, ["callee:004804d8:8"]]
+ 007453c8 ["INT_ADD", "register:40f0:8", ["const:7453c8:8", "const:4:8"]]
+ 007453c8 ["CALL", null, ["callee:004804d8:8"]]
- 00745028 ["INT_ADD", "register:40f0:8", ["const:745028:8", "const:4:8"]]
- 00745028 ["CALL", null, ["callee:00480478:8"]]
+ 007453d8 ["INT_ADD", "register:40f0:8", ["const:7453d8:8", "const:4:8"]]
+ 007453d8 ["CALL", null, ["callee:00480478:8"]]
~~~


<a id="compare-ed0bc2a9afa19699c24b81c93a97dc37"></a>

### [`0074548c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00745/0074548c.md) → [`0074583c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00745/0074583c.md) FUN_0074583c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 4件 [`00480b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480b78.md) [`00480bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480bd0.md) [`00480c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480c28.md) [`00480d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480d88.md)
- 新版 呼出元 1件 [`00a2c310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a2c/00a2c310.md) · 呼出先 4件 [`00480e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480e98.md) [`00480ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480ef0.md) [`00480f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480f48.md) [`004810a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/004810a8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007454b0 ["INT_ADD", "register:40f0:8", ["const:7454b0:8", "const:4:8"]]
- 007454b0 ["CALL", null, ["callee:00480f48:8"]]
+ 00745860 ["INT_ADD", "register:40f0:8", ["const:745860:8", "const:4:8"]]
+ 00745860 ["CALL", null, ["callee:00480f48:8"]]
- 007454bc ["INT_ADD", "register:40f0:8", ["const:7454bc:8", "const:4:8"]]
- 007454bc ["CALL", null, ["callee:00480ef0:8"]]
+ 0074586c ["INT_ADD", "register:40f0:8", ["const:74586c:8", "const:4:8"]]
+ 0074586c ["CALL", null, ["callee:00480ef0:8"]]
- 007454c8 ["INT_ADD", "register:40f0:8", ["const:7454c8:8", "const:4:8"]]
- 007454c8 ["CALL", null, ["callee:00480e98:8"]]
+ 00745878 ["INT_ADD", "register:40f0:8", ["const:745878:8", "const:4:8"]]
+ 00745878 ["CALL", null, ["callee:00480e98:8"]]
~~~


<a id="compare-426bb7b3ba167711f28644c184dce5af"></a>

### [`00745824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00745/00745824.md) → [`00745bd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00745/00745bd4.md) FUN_00745bd4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00747438`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747438.md) · 呼出先 9件 [`00742808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00742/00742808.md) [`00743648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00743/00743648.md) [`00745988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00745/00745988.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00a34698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a34/00a34698.md)
- 新版 呼出元 1件 [`007477e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00747/007477e8.md) · 呼出先 9件 [`00742bb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00742/00742bb8.md) [`007439f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00743/007439f8.md) [`00745d38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00745/00745d38.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00a3568c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a35/00a3568c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00745848 ["INT_ADD", "register:40f0:8", ["const:745848:8", "const:4:8"]]
- 00745848 ["CALL", null, ["callee:00a3568c:8"]]
+ 00745bf8 ["INT_ADD", "register:40f0:8", ["const:745bf8:8", "const:4:8"]]
+ 00745bf8 ["CALL", null, ["callee:00a3568c:8"]]
- 0074585c ["INT_ADD", "register:40f0:8", ["const:74585c:8", "const:4:8"]]
- 0074585c ["CALL", null, ["callee:00a3568c:8"]]
+ 00745c0c ["INT_ADD", "register:40f0:8", ["const:745c0c:8", "const:4:8"]]
+ 00745c0c ["CALL", null, ["callee:00a3568c:8"]]
- 00745870 ["INT_ADD", "register:40f0:8", ["const:745870:8", "const:4:8"]]
- 00745870 ["CALL", null, ["callee:00a3568c:8"]]
+ 00745c20 ["INT_ADD", "register:40f0:8", ["const:745c20:8", "const:4:8"]]
+ 00745c20 ["CALL", null, ["callee:00a3568c:8"]]
~~~


<a id="compare-085a180359efb84a27759f94e7923913"></a>

### [`00745988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00745/00745988.md) → [`00745d38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00745/00745d38.md) FUN_00745d38

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00745824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00745/00745824.md) [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 2件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00a33c70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a33/00a33c70.md)
- 新版 呼出元 2件 [`00745bd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00745/00745bd4.md) [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) · 呼出先 2件 [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`00a34c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a34/00a34c64.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0074599c ["INT_ADD", "register:40f0:8", ["const:74599c:8", "const:4:8"]]
- 0074599c ["CALL", null, ["callee:0048d1e4:8"]]
+ 00745d4c ["INT_ADD", "register:40f0:8", ["const:745d4c:8", "const:4:8"]]
+ 00745d4c ["CALL", null, ["callee:0048d1e4:8"]]
- 007459a8 ["INT_ADD", "register:40f0:8", ["const:7459a8:8", "const:4:8"]]
- 007459a8 ["CALL", null, ["callee:00a34c64:8"]]
+ 00745d58 ["INT_ADD", "register:40f0:8", ["const:745d58:8", "const:4:8"]]
+ 00745d58 ["CALL", null, ["callee:00a34c64:8"]]
- 007459b4 ["INT_ADD", "register:40f0:8", ["const:7459b4:8", "const:4:8"]]
- 007459b4 ["CALL", null, ["callee:0048d1e4:8"]]
+ 00745d64 ["INT_ADD", "register:40f0:8", ["const:745d64:8", "const:4:8"]]
+ 00745d64 ["CALL", null, ["callee:0048d1e4:8"]]
~~~


<a id="compare-1099ba0061b1f94578899cb7c0f22956"></a>

### [`00746944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00746/00746944.md) → [`00746cf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00746/00746cf4.md) FUN_00746cf4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) [`00ae1328`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ae1/00ae1328.md) · 呼出先 6件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00664800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664800.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 4件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`00606ed4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00606/00606ed4.md) [`007e00a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007e0/007e00a4.md) [`00ae231c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ae2/00ae231c.md) · 呼出先 6件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00664bb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664bb0.md) [`00676e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676e50.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007469a0 ["INT_ADD", "register:40f0:8", ["const:7469a0:8", "const:4:8"]]
- 007469a0 ["CALL", null, ["callee:0043bf04:8"]]
+ 00746d50 ["INT_ADD", "register:40f0:8", ["const:746d50:8", "const:4:8"]]
+ 00746d50 ["CALL", null, ["callee:0043bf04:8"]]
- 007469c0 ["INT_ADD", "register:40f0:8", ["const:7469c0:8", "const:4:8"]]
- 007469c0 ["CALL", null, ["callee:008524fc:8"]]
+ 00746d70 ["INT_ADD", "register:40f0:8", ["const:746d70:8", "const:4:8"]]
+ 00746d70 ["CALL", null, ["callee:008524fc:8"]]
- 00746a18 ["INT_ADD", "register:40f0:8", ["const:746a18:8", "const:4:8"]]
- 00746a18 ["CALL", null, ["callee:008524fc:8"]]
+ 00746dc8 ["INT_ADD", "register:40f0:8", ["const:746dc8:8", "const:4:8"]]
+ 00746dc8 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-18a8d07ba3ac296c94f3fe8df0c18ad3"></a>

### [`007472b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/007472b4.md) → [`00747664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00747/00747664.md) FUN_00747664

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 6件 [`00748fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748fa0.md) [`0074a6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074a/0074a6ac.md) [`0074a72c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074a/0074a72c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) · 呼出先 6件 [`00749350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00749/00749350.md) [`0074aa5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074a/0074aa5c.md) [`0074aadc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074a/0074aadc.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00747338 ["INT_ADD", "register:40f0:8", ["const:747338:8", "const:4:8"]]
- 00747338 ["CALL", null, ["callee:00c58f30:8"]]
+ 007476e8 ["INT_ADD", "register:40f0:8", ["const:7476e8:8", "const:4:8"]]
+ 007476e8 ["CALL", null, ["callee:00c58f30:8"]]
- 0074735c ["INT_ADD", "register:40f0:8", ["const:74735c:8", "const:4:8"]]
- 0074735c ["CALL", null, ["callee:0074aadc:8"]]
+ 0074770c ["INT_ADD", "register:40f0:8", ["const:74770c:8", "const:4:8"]]
+ 0074770c ["CALL", null, ["callee:0074aadc:8"]]
- 007473a4 ["INT_ADD", "register:40f0:8", ["const:7473a4:8", "const:4:8"]]
- 007473a4 ["CALL", null, ["callee:00749350:8"]]
+ 00747754 ["INT_ADD", "register:40f0:8", ["const:747754:8", "const:4:8"]]
+ 00747754 ["CALL", null, ["callee:00749350:8"]]
~~~


<a id="compare-6cfc227f1aefcf15bc0d16952a7a7b30"></a>

### [`00747438`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747438.md) → [`007477e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00747/007477e8.md) FUN_007477e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) [`00a8a488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8a/00a8a488.md) · 呼出先 17件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00742808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00742/00742808.md) [`00745824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00745/00745824.md) [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) [`00a33c70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a33/00a33c70.md)
- 新版 呼出元 2件 [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) [`00a8b47c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8b/00a8b47c.md) · 呼出先 17件 [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`00742bb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00742/00742bb8.md) [`00745bd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00745/00745bd4.md) [`00801334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/00801334.md) [`00a34c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a34/00a34c64.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00747468 ["INT_ADD", "register:40f0:8", ["const:747468:8", "const:4:8"]]
- 00747468 ["CALL", null, ["callee:0048d1e4:8"]]
+ 00747818 ["INT_ADD", "register:40f0:8", ["const:747818:8", "const:4:8"]]
+ 00747818 ["CALL", null, ["callee:0048d1e4:8"]]
- 00747470 ["INT_ADD", "register:40f0:8", ["const:747470:8", "const:4:8"]]
- 00747470 ["CALL", null, ["callee:00a36be0:8"]]
+ 00747820 ["INT_ADD", "register:40f0:8", ["const:747820:8", "const:4:8"]]
+ 00747820 ["CALL", null, ["callee:00a36be0:8"]]
- 00747474 ["INT_ADD", "register:40f0:8", ["const:747474:8", "const:4:8"]]
- 00747474 ["CALL", null, ["callee:00a39c04:8"]]
+ 00747824 ["INT_ADD", "register:40f0:8", ["const:747824:8", "const:4:8"]]
+ 00747824 ["CALL", null, ["callee:00a39c04:8"]]
~~~


<a id="compare-9b0ac8ff62cf1bd0f96c85ec17d89c9b"></a>

### [`00747648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747648.md) → [`007479f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00747/007479f8.md) FUN_007479f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0060eb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060e/0060eb90.md) [`007738ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00773/007738ec.md) · 呼出先 9件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00468f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468f8c.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046af4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af4c.md) [`0046da9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046da9c.md)
- 新版 呼出元 2件 [`0060ef40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0060e/0060ef40.md) [`00773cc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00773/00773cc8.md) · 呼出先 9件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`004692ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692ac.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`0046b26c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046b/0046b26c.md) [`0046ddbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046ddbc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00747694 ["INT_ADD", "register:40f0:8", ["const:747694:8", "const:4:8"]]
- 00747694 ["CALL", null, ["callee:00467bc0:8"]]
+ 00747a44 ["INT_ADD", "register:40f0:8", ["const:747a44:8", "const:4:8"]]
+ 00747a44 ["CALL", null, ["callee:00467bc0:8"]]
- 007476ac ["INT_ADD", "register:40f0:8", ["const:7476ac:8", "const:4:8"]]
- 007476ac ["CALL", null, ["callee:004692e8:8"]]
+ 00747a5c ["INT_ADD", "register:40f0:8", ["const:747a5c:8", "const:4:8"]]
+ 00747a5c ["CALL", null, ["callee:004692e8:8"]]
- 007476bc ["INT_ADD", "register:40f0:8", ["const:7476bc:8", "const:4:8"]]
- 007476bc ["CALL", null, ["callee:008015e8:8"]]
+ 00747a6c ["INT_ADD", "register:40f0:8", ["const:747a6c:8", "const:4:8"]]
+ 00747a6c ["CALL", null, ["callee:008015e8:8"]]
~~~


<a id="compare-2121158e83e5a865a71c7aff9be0898f"></a>

### [`0074785c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/0074785c.md) → [`00747c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00747/00747c0c.md) FUN_00747c0c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`00742c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00742/00742c10.md) [`0074785c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/0074785c.md) [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`008493c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/008493c8.md) · 呼出先 2件 [`0074785c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/0074785c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`00742fc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00742/00742fc0.md) [`00747c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00747/00747c0c.md) [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084a374`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084a374.md) · 呼出先 2件 [`00747c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00747/00747c0c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00747878 ["INT_ADD", "register:40f0:8", ["const:747878:8", "const:4:8"]]
- 00747878 ["CALL", null, ["local:b0:8"]]
+ 00747c28 ["INT_ADD", "register:40f0:8", ["const:747c28:8", "const:4:8"]]
+ 00747c28 ["CALL", null, ["local:b0:8"]]
- 00747884 ["INT_ADD", "register:40f0:8", ["const:747884:8", "const:4:8"]]
- 00747884 ["CALL", null, ["local:b0:8"]]
+ 00747c34 ["INT_ADD", "register:40f0:8", ["const:747c34:8", "const:4:8"]]
+ 00747c34 ["CALL", null, ["local:b0:8"]]
- 00747894 ["INT_ADD", "register:40f0:8", ["const:747894:8", "const:4:8"]]
- 00747894 ["CALL", null, ["callee:00c58f50:8"]]
+ 00747c44 ["INT_ADD", "register:40f0:8", ["const:747c44:8", "const:4:8"]]
+ 00747c44 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-151efb45c25fb31b18e465b368e982a6"></a>

### [`00747ab8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747ab8.md) → [`00747e68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00747/00747e68.md) FUN_00747e68

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00745a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00745/00745a7c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00745e2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00745/00745e2c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00747af4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00747af4 ["INT_ADD", "register:40f0:8", ["const:747af4:8", "const:4:8"]]
- 00747af4 ["CALLIND", null, ["register:0:8"]]
+ 00747ea4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00747ea4 ["INT_ADD", "register:40f0:8", ["const:747ea4:8", "const:4:8"]]
+ 00747ea4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6334a4edf8a86c3fd18d8b8d1337b31f"></a>

### [`00747b08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747b08.md) → [`00747eb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00747/00747eb8.md) FUN_00747eb8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`005aa1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa1b0.md) [`0071d18c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071d/0071d18c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`005aa560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa560.md) [`0071d53c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071d/0071d53c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00747b84 ["INT_ADD", "register:40f0:8", ["const:747b84:8", "const:4:8"]]
- 00747b84 ["CALL", null, ["callee:00c58f30:8"]]
+ 00747f34 ["INT_ADD", "register:40f0:8", ["const:747f34:8", "const:4:8"]]
+ 00747f34 ["CALL", null, ["callee:00c58f30:8"]]
- 00747b98 ["INT_ADD", "register:40f0:8", ["const:747b98:8", "const:4:8"]]
- 00747b98 ["CALL", null, ["callee:00c590a0:8"]]
+ 00747f48 ["INT_ADD", "register:40f0:8", ["const:747f48:8", "const:4:8"]]
+ 00747f48 ["CALL", null, ["callee:00c590a0:8"]]
- 00747c08 ["INT_ADD", "register:40f0:8", ["const:747c08:8", "const:4:8"]]
- 00747c08 ["CALL", null, ["callee:0071d53c:8"]]
+ 00747fb8 ["INT_ADD", "register:40f0:8", ["const:747fb8:8", "const:4:8"]]
+ 00747fb8 ["CALL", null, ["callee:0071d53c:8"]]
~~~


<a id="compare-538a525f71cb85f7b5b22d5c72b4db18"></a>

### [`00747f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747f34.md) → [`007482e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/007482e4.md) FUN_007482e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00745a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00745/00745a7c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00745e2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00745/00745e2c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00747f70 ["COPY", "register:0:8", ["register:4040:8"]]
- 00747f70 ["INT_ADD", "register:40f0:8", ["const:747f70:8", "const:4:8"]]
- 00747f70 ["CALLIND", null, ["register:0:8"]]
+ 00748320 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00748320 ["INT_ADD", "register:40f0:8", ["const:748320:8", "const:4:8"]]
+ 00748320 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8d2a7f3bae31de72182b2f8f2bf391ac"></a>

### [`00747f84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747f84.md) → [`00748334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748334.md) FUN_00748334

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00747fbc ["COPY", "register:0:8", ["register:4040:8"]]
- 00747fbc ["INT_ADD", "register:40f0:8", ["const:747fbc:8", "const:4:8"]]
- 00747fbc ["CALLIND", null, ["register:0:8"]]
+ 0074836c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0074836c ["INT_ADD", "register:40f0:8", ["const:74836c:8", "const:4:8"]]
+ 0074836c ["CALLIND", null, ["register:0:8"]]
- 00747ff0 ["INT_ADD", "register:40f0:8", ["const:747ff0:8", "const:4:8"]]
- 00747ff0 ["CALL", null, ["callee:0045a0d4:8"]]
+ 007483a0 ["INT_ADD", "register:40f0:8", ["const:7483a0:8", "const:4:8"]]
+ 007483a0 ["CALL", null, ["callee:0045a0d4:8"]]
- 00747ff4 ["INT_ADD", "register:40f0:8", ["const:747ff4:8", "const:4:8"]]
- 00747ff4 ["CALL", null, ["callee:00c58f80:8"]]
+ 007483a4 ["INT_ADD", "register:40f0:8", ["const:7483a4:8", "const:4:8"]]
+ 007483a4 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-2cc580999973ab2b3e3599b9e8e88472"></a>

### [`00748214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748214.md) → [`007485c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/007485c4.md) FUN_007485c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0074600c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00746/0074600c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`007463bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00746/007463bc.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00748250 ["COPY", "register:0:8", ["register:4040:8"]]
- 00748250 ["INT_ADD", "register:40f0:8", ["const:748250:8", "const:4:8"]]
- 00748250 ["CALLIND", null, ["register:0:8"]]
+ 00748600 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00748600 ["INT_ADD", "register:40f0:8", ["const:748600:8", "const:4:8"]]
+ 00748600 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d6fe81ea9524b20e0100b89309a0ebf6"></a>

### [`00748264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748264.md) → [`00748614`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748614.md) FUN_00748614

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`005aa1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa1b0.md) [`0071d18c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071d/0071d18c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`005aa560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa560.md) [`0071d53c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071d/0071d53c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00748330 ["INT_ADD", "register:40f0:8", ["const:748330:8", "const:4:8"]]
- 00748330 ["CALL", null, ["callee:00c58f30:8"]]
+ 007486e0 ["INT_ADD", "register:40f0:8", ["const:7486e0:8", "const:4:8"]]
+ 007486e0 ["CALL", null, ["callee:00c58f30:8"]]
- 00748340 ["INT_ADD", "register:40f0:8", ["const:748340:8", "const:4:8"]]
- 00748340 ["CALL", null, ["callee:00c590a0:8"]]
+ 007486f0 ["INT_ADD", "register:40f0:8", ["const:7486f0:8", "const:4:8"]]
+ 007486f0 ["CALL", null, ["callee:00c590a0:8"]]
- 00748354 ["INT_ADD", "register:40f0:8", ["const:748354:8", "const:4:8"]]
- 00748354 ["CALL", null, ["callee:0071d53c:8"]]
+ 00748704 ["INT_ADD", "register:40f0:8", ["const:748704:8", "const:4:8"]]
+ 00748704 ["CALL", null, ["callee:0071d53c:8"]]
~~~


<a id="compare-d8d130b822fdb31d1f1b7a468fe25761"></a>

### [`007486d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/007486d0.md) → [`00748a80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748a80.md) FUN_00748a80

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0074600c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00746/0074600c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`007463bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00746/007463bc.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0074870c ["COPY", "register:0:8", ["register:4040:8"]]
- 0074870c ["INT_ADD", "register:40f0:8", ["const:74870c:8", "const:4:8"]]
- 0074870c ["CALLIND", null, ["register:0:8"]]
+ 00748abc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00748abc ["INT_ADD", "register:40f0:8", ["const:748abc:8", "const:4:8"]]
+ 00748abc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-3e66506db1f9d6a55dc5480069cf10e8"></a>

### [`00748720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748720.md) → [`00748ad0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748ad0.md) FUN_00748ad0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00748760 ["COPY", "register:0:8", ["register:4040:8"]]
- 00748760 ["INT_ADD", "register:40f0:8", ["const:748760:8", "const:4:8"]]
- 00748760 ["CALLIND", null, ["register:0:8"]]
+ 00748b10 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00748b10 ["INT_ADD", "register:40f0:8", ["const:748b10:8", "const:4:8"]]
+ 00748b10 ["CALLIND", null, ["register:0:8"]]
- 00748794 ["INT_ADD", "register:40f0:8", ["const:748794:8", "const:4:8"]]
- 00748794 ["CALL", null, ["callee:0045a0d4:8"]]
+ 00748b44 ["INT_ADD", "register:40f0:8", ["const:748b44:8", "const:4:8"]]
+ 00748b44 ["CALL", null, ["callee:0045a0d4:8"]]
- 00748798 ["INT_ADD", "register:40f0:8", ["const:748798:8", "const:4:8"]]
- 00748798 ["CALL", null, ["callee:00c58f80:8"]]
+ 00748b48 ["INT_ADD", "register:40f0:8", ["const:748b48:8", "const:4:8"]]
+ 00748b48 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-449ac7ee6f24784495a1835cb8bb89be"></a>

### [`007488f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/007488f4.md) → [`00748ca4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748ca4.md) FUN_00748ca4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 7件 [`005aa1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa1b0.md) [`0071d18c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071d/0071d18c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 7件 [`005aa560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005aa/005aa560.md) [`0071d53c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071d/0071d53c.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0074896c ["INT_ADD", "register:40f0:8", ["const:74896c:8", "const:4:8"]]
- 0074896c ["CALL", null, ["callee:00c58f30:8"]]
+ 00748d1c ["INT_ADD", "register:40f0:8", ["const:748d1c:8", "const:4:8"]]
+ 00748d1c ["CALL", null, ["callee:00c58f30:8"]]
- 00748980 ["INT_ADD", "register:40f0:8", ["const:748980:8", "const:4:8"]]
- 00748980 ["CALL", null, ["callee:00c590a0:8"]]
+ 00748d30 ["INT_ADD", "register:40f0:8", ["const:748d30:8", "const:4:8"]]
+ 00748d30 ["CALL", null, ["callee:00c590a0:8"]]
- 007489f0 ["INT_ADD", "register:40f0:8", ["const:7489f0:8", "const:4:8"]]
- 007489f0 ["CALL", null, ["callee:0071d53c:8"]]
+ 00748da0 ["INT_ADD", "register:40f0:8", ["const:748da0:8", "const:4:8"]]
+ 00748da0 ["CALL", null, ["callee:0071d53c:8"]]
~~~


<a id="compare-80bb4920dac2a8921c765be7f5027d94"></a>

### [`00748b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748b88.md) → [`00748f38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748f38.md) FUN_00748f38

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 7件 [`00746d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00746/00746d44.md) [`00748d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748d7c.md) [`00748fb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748fb4.md) [`0074a6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074a/0074a6ac.md) [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 7件 [`007470f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00747/007470f4.md) [`0074912c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00749/0074912c.md) [`00749364`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00749/00749364.md) [`0074aa5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074a/0074aa5c.md) [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00748ba8 ["INT_ADD", "register:40f0:8", ["const:748ba8:8", "const:4:8"]]
- 00748ba8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00748f58 ["INT_ADD", "register:40f0:8", ["const:748f58:8", "const:4:8"]]
+ 00748f58 ["CALL", null, ["callee:00c58f50:8"]]
- 00748be4 ["INT_ADD", "register:40f0:8", ["const:748be4:8", "const:4:8"]]
- 00748be4 ["CALL", null, ["callee:00c58f50:8"]]
+ 00748f94 ["INT_ADD", "register:40f0:8", ["const:748f94:8", "const:4:8"]]
+ 00748f94 ["CALL", null, ["callee:00c58f50:8"]]
- 00748bf4 ["INT_ADD", "register:40f0:8", ["const:748bf4:8", "const:4:8"]]
- 00748bf4 ["CALL", null, ["callee:00c58f50:8"]]
+ 00748fa4 ["INT_ADD", "register:40f0:8", ["const:748fa4:8", "const:4:8"]]
+ 00748fa4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-18ede36b353e26c834229e9b452b24f4"></a>

### [`00748c34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748c34.md) → [`00748fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748fe4.md) FUN_00748fe4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00748c54 ["INT_ADD", "register:40f0:8", ["const:748c54:8", "const:4:8"]]
- 00748c54 ["CALL", null, ["callee:00c58f50:8"]]
+ 00749004 ["INT_ADD", "register:40f0:8", ["const:749004:8", "const:4:8"]]
+ 00749004 ["CALL", null, ["callee:00c58f50:8"]]
- 00748c90 ["INT_ADD", "register:40f0:8", ["const:748c90:8", "const:4:8"]]
- 00748c90 ["CALL", null, ["callee:00c58f50:8"]]
+ 00749040 ["INT_ADD", "register:40f0:8", ["const:749040:8", "const:4:8"]]
+ 00749040 ["CALL", null, ["callee:00c58f50:8"]]
- 00748ca0 ["INT_ADD", "register:40f0:8", ["const:748ca0:8", "const:4:8"]]
- 00748ca0 ["CALL", null, ["callee:00c58f50:8"]]
+ 00749050 ["INT_ADD", "register:40f0:8", ["const:749050:8", "const:4:8"]]
+ 00749050 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-ab9241b1de2eb4d3dbe2be8dd7f4cfcb"></a>

### [`00748ce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748ce0.md) → [`00749090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00749/00749090.md) FUN_00749090

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009aa678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aa678.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009ab624`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ab/009ab624.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00748d2c ["INT_ADD", "register:40f0:8", ["const:748d2c:8", "const:4:8"]]
- 00748d2c ["CALL", null, ["callee:00c58f50:8"]]
+ 007490dc ["INT_ADD", "register:40f0:8", ["const:7490dc:8", "const:4:8"]]
+ 007490dc ["CALL", null, ["callee:00c58f50:8"]]
- 00748d3c ["INT_ADD", "register:40f0:8", ["const:748d3c:8", "const:4:8"]]
- 00748d3c ["CALL", null, ["callee:00c58f50:8"]]
+ 007490ec ["INT_ADD", "register:40f0:8", ["const:7490ec:8", "const:4:8"]]
+ 007490ec ["CALL", null, ["callee:00c58f50:8"]]
- 00748d4c ["INT_ADD", "register:40f0:8", ["const:748d4c:8", "const:4:8"]]
- 00748d4c ["CALL", null, ["callee:00c58f50:8"]]
+ 007490fc ["INT_ADD", "register:40f0:8", ["const:7490fc:8", "const:4:8"]]
+ 007490fc ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-e670b2d08aba9a4e55165e965a04912f"></a>

### [`00748d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748d7c.md) → [`0074912c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00749/0074912c.md) FUN_0074912c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00749a2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00749/00749a2c.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00748b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748b88.md) [`00748fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748fa0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00749ddc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00749/00749ddc.md) · 呼出先 5件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00748f38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748f38.md) [`00749350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00749/00749350.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00748e1c ["INT_ADD", "register:40f0:8", ["const:748e1c:8", "const:4:8"]]
- 00748e1c ["CALL", null, ["callee:00c58f30:8"]]
+ 007491cc ["INT_ADD", "register:40f0:8", ["const:7491cc:8", "const:4:8"]]
+ 007491cc ["CALL", null, ["callee:00c58f30:8"]]
- 00748f54 ["INT_ADD", "register:40f0:8", ["const:748f54:8", "const:4:8"]]
- 00748f54 ["CALL", null, ["callee:00748f38:8"]]
+ 00749304 ["INT_ADD", "register:40f0:8", ["const:749304:8", "const:4:8"]]
+ 00749304 ["CALL", null, ["callee:00748f38:8"]]
- 00748f78 ["INT_ADD", "register:40f0:8", ["const:748f78:8", "const:4:8"]]
- 00748f78 ["CALL", null, ["callee:00c58f50:8"]]
+ 00749328 ["INT_ADD", "register:40f0:8", ["const:749328:8", "const:4:8"]]
+ 00749328 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-edee447b518bcd2aefc24253db6dd9fe"></a>

### [`00748fb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748fb4.md) → [`00749364`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00749/00749364.md) FUN_00749364

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00748b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748b88.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00748f38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748f38.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00748ff4 ["INT_ADD", "register:40f0:8", ["const:748ff4:8", "const:4:8"]]
- 00748ff4 ["CALL", null, ["callee:00748f38:8"]]
+ 007493a4 ["INT_ADD", "register:40f0:8", ["const:7493a4:8", "const:4:8"]]
+ 007493a4 ["CALL", null, ["callee:00748f38:8"]]
~~~


<a id="compare-7a42cbf2e37e9900f4089443fbab748b"></a>

### [`007499dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00749/007499dc.md) → [`00749d8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00749/00749d8c.md) FUN_00749d8c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00746d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00746/00746d44.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`007470f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00747/007470f4.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00749a18 ["COPY", "register:0:8", ["register:4040:8"]]
- 00749a18 ["INT_ADD", "register:40f0:8", ["const:749a18:8", "const:4:8"]]
- 00749a18 ["CALLIND", null, ["register:0:8"]]
+ 00749dc8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00749dc8 ["INT_ADD", "register:40f0:8", ["const:749dc8:8", "const:4:8"]]
+ 00749dc8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-bd6820978cc013e80b595cc3ff46e2ec"></a>

### [`0074a370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074a/0074a370.md) → [`0074a720`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074a/0074a720.md) FUN_0074a720

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009aa678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aa678.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009ab624`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ab/009ab624.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0074a3a4 ["INT_ADD", "register:40f0:8", ["const:74a3a4:8", "const:4:8"]]
- 0074a3a4 ["CALL", null, ["callee:00c58f50:8"]]
+ 0074a754 ["INT_ADD", "register:40f0:8", ["const:74a754:8", "const:4:8"]]
+ 0074a754 ["CALL", null, ["callee:00c58f50:8"]]
- 0074a3c0 ["INT_ADD", "register:40f0:8", ["const:74a3c0:8", "const:4:8"]]
- 0074a3c0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0074a770 ["INT_ADD", "register:40f0:8", ["const:74a770:8", "const:4:8"]]
+ 0074a770 ["CALL", null, ["callee:00c58f50:8"]]
- 0074a3d0 ["INT_ADD", "register:40f0:8", ["const:74a3d0:8", "const:4:8"]]
- 0074a3d0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0074a780 ["INT_ADD", "register:40f0:8", ["const:74a780:8", "const:4:8"]]
+ 0074a780 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-e162a117ed11165fc7e19d292254ae20"></a>

### [`0074a5d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074a/0074a5d4.md) → [`0074a984`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074a/0074a984.md) FUN_0074a984

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00746d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00746/00746d44.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`007470f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00747/007470f4.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0074a610 ["COPY", "register:0:8", ["register:4040:8"]]
- 0074a610 ["INT_ADD", "register:40f0:8", ["const:74a610:8", "const:4:8"]]
- 0074a610 ["CALLIND", null, ["register:0:8"]]
+ 0074a9c0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0074a9c0 ["INT_ADD", "register:40f0:8", ["const:74a9c0:8", "const:4:8"]]
+ 0074a9c0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-bfeaca5428b4209c9cf4415081763530"></a>

### [`0074a624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074a/0074a624.md) → [`0074a9d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074a/0074a9d4.md) FUN_0074a9d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0074a65c ["COPY", "register:0:8", ["register:4040:8"]]
- 0074a65c ["INT_ADD", "register:40f0:8", ["const:74a65c:8", "const:4:8"]]
- 0074a65c ["CALLIND", null, ["register:0:8"]]
+ 0074aa0c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0074aa0c ["INT_ADD", "register:40f0:8", ["const:74aa0c:8", "const:4:8"]]
+ 0074aa0c ["CALLIND", null, ["register:0:8"]]
- 0074a680 ["INT_ADD", "register:40f0:8", ["const:74a680:8", "const:4:8"]]
- 0074a680 ["CALL", null, ["callee:00c58f80:8"]]
+ 0074aa30 ["INT_ADD", "register:40f0:8", ["const:74aa30:8", "const:4:8"]]
+ 0074aa30 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-19e3e3c554953c3afc1958781d7c1076"></a>

### [`0074a6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074a/0074a6ac.md) → [`0074aa5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074a/0074aa5c.md) FUN_0074aa5c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007472b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/007472b4.md) · 呼出先 2件 [`00748b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748b88.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00747664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00747/00747664.md) · 呼出先 2件 [`00748f38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00748/00748f38.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0074a700 ["INT_ADD", "register:40f0:8", ["const:74a700:8", "const:4:8"]]
- 0074a700 ["CALL", null, ["callee:00748f38:8"]]
+ 0074aab0 ["INT_ADD", "register:40f0:8", ["const:74aab0:8", "const:4:8"]]
+ 0074aab0 ["CALL", null, ["callee:00748f38:8"]]
~~~


<a id="compare-136b116fa8d9bd70d1030b1c834aa62d"></a>

### [`0074a72c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074a/0074a72c.md) → [`0074aadc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074a/0074aadc.md) FUN_0074aadc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007472b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/007472b4.md) · 呼出先 3件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0074a82c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074a/0074a82c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00747664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00747/00747664.md) · 呼出先 3件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0074abdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074a/0074abdc.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0074a7ac ["INT_ADD", "register:40f0:8", ["const:74a7ac:8", "const:4:8"]]
- 0074a7ac ["CALL", null, ["callee:0074abdc:8"]]
+ 0074ab5c ["INT_ADD", "register:40f0:8", ["const:74ab5c:8", "const:4:8"]]
+ 0074ab5c ["CALL", null, ["callee:0074abdc:8"]]
- 0074a7c4 ["INT_ADD", "register:40f0:8", ["const:74a7c4:8", "const:4:8"]]
- 0074a7c4 ["CALL", null, ["callee:0043be80:8"]]
+ 0074ab74 ["INT_ADD", "register:40f0:8", ["const:74ab74:8", "const:4:8"]]
+ 0074ab74 ["CALL", null, ["callee:0043be80:8"]]
- 0074a828 ["INT_ADD", "register:40f0:8", ["const:74a828:8", "const:4:8"]]
- 0074a828 ["CALL", null, ["callee:00c58f80:8"]]
+ 0074abd8 ["INT_ADD", "register:40f0:8", ["const:74abd8:8", "const:4:8"]]
+ 0074abd8 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-bbdb5195730c8a64fbe9c8c14db1aaa8"></a>

### [`0074a82c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074a/0074a82c.md) → [`0074abdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074a/0074abdc.md) FUN_0074abdc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`0074a72c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074a/0074a72c.md) [`008a3cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a3/008a3cf0.md) [`009aae54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aae54.md) [`009ac30c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac30c.md) [`009afefc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009afefc.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0054079c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/0054079c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 5件 [`0074aadc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074a/0074aadc.md) [`008a4c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a4/008a4c9c.md) [`009abe00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ab/009abe00.md) [`009ad2b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ad/009ad2b8.md) [`009b0ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009b0/009b0ea8.md) · 呼出先 5件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00540abc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00540/00540abc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0074a880 ["INT_ADD", "register:40f0:8", ["const:74a880:8", "const:4:8"]]
- 0074a880 ["CALL", null, ["callee:0043be80:8"]]
+ 0074ac30 ["INT_ADD", "register:40f0:8", ["const:74ac30:8", "const:4:8"]]
+ 0074ac30 ["CALL", null, ["callee:0043be80:8"]]
- 0074a8ac ["INT_ADD", "register:40f0:8", ["const:74a8ac:8", "const:4:8"]]
- 0074a8ac ["CALL", null, ["callee:00c58f30:8"]]
+ 0074ac5c ["INT_ADD", "register:40f0:8", ["const:74ac5c:8", "const:4:8"]]
+ 0074ac5c ["CALL", null, ["callee:00c58f30:8"]]
- 0074a8c4 ["INT_ADD", "register:40f0:8", ["const:74a8c4:8", "const:4:8"]]
- 0074a8c4 ["CALL", null, ["callee:00c590a0:8"]]
+ 0074ac74 ["INT_ADD", "register:40f0:8", ["const:74ac74:8", "const:4:8"]]
+ 0074ac74 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-1f2501223947db39da0e3d03e47ecd6a"></a>

### [`0074adf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074a/0074adf0.md) → [`0074b1a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074b/0074b1a0.md) FUN_0074b1a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`006f8a60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f8/006f8a60.md) · 呼出先 4件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`006f8e10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f8/006f8e10.md) · 呼出先 4件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0074ae04 ["INT_ADD", "register:40f0:8", ["const:74ae04:8", "const:4:8"]]
- 0074ae04 ["CALL", null, ["callee:008524fc:8"]]
+ 0074b1b4 ["INT_ADD", "register:40f0:8", ["const:74b1b4:8", "const:4:8"]]
+ 0074b1b4 ["CALL", null, ["callee:008524fc:8"]]
- 0074ae0c ["INT_ADD", "register:40f0:8", ["const:74ae0c:8", "const:4:8"]]
- 0074ae0c ["CALL", null, ["callee:00467bc0:8"]]
+ 0074b1bc ["INT_ADD", "register:40f0:8", ["const:74b1bc:8", "const:4:8"]]
+ 0074b1bc ["CALL", null, ["callee:00467bc0:8"]]
- 0074ae24 ["INT_ADD", "register:40f0:8", ["const:74ae24:8", "const:4:8"]]
- 0074ae24 ["CALL", null, ["callee:008524fc:8"]]
+ 0074b1d4 ["INT_ADD", "register:40f0:8", ["const:74b1d4:8", "const:4:8"]]
+ 0074b1d4 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-d7e8fe82b19fb505004fcb98ea90606e"></a>

### [`0074bba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074b/0074bba4.md) → [`0074bf54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074b/0074bf54.md) FUN_0074bf54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00651ae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00651/00651ae4.md) · 呼出先 4件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00651e94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00651/00651e94.md) · 呼出先 4件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0074bbc0 ["INT_ADD", "register:40f0:8", ["const:74bbc0:8", "const:4:8"]]
- 0074bbc0 ["CALL", null, ["callee:00467bc0:8"]]
+ 0074bf70 ["INT_ADD", "register:40f0:8", ["const:74bf70:8", "const:4:8"]]
+ 0074bf70 ["CALL", null, ["callee:00467bc0:8"]]
- 0074bbd0 ["INT_ADD", "register:40f0:8", ["const:74bbd0:8", "const:4:8"]]
- 0074bbd0 ["CALL", null, ["callee:008524fc:8"]]
+ 0074bf80 ["INT_ADD", "register:40f0:8", ["const:74bf80:8", "const:4:8"]]
+ 0074bf80 ["CALL", null, ["callee:008524fc:8"]]
- 0074bbd4 ["INT_ADD", "register:40f0:8", ["const:74bbd4:8", "const:4:8"]]
- 0074bbd4 ["CALL", null, ["callee:0046cd24:8"]]
+ 0074bf84 ["INT_ADD", "register:40f0:8", ["const:74bf84:8", "const:4:8"]]
+ 0074bf84 ["CALL", null, ["callee:0046cd24:8"]]
~~~


<a id="compare-be9cf84190745e67740ccd72bff9c13b"></a>

### [`0074e008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074e/0074e008.md) → [`0074e3b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0074e/0074e3b8.md) FUN_0074e3b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0091abcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0091a/0091abcc.md) · 呼出先 4件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0091bb78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0091b/0091bb78.md) · 呼出先 4件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0074e054 ["INT_ADD", "register:40f0:8", ["const:74e054:8", "const:4:8"]]
- 0074e054 ["CALL", null, ["callee:00467bc0:8"]]
+ 0074e404 ["INT_ADD", "register:40f0:8", ["const:74e404:8", "const:4:8"]]
+ 0074e404 ["CALL", null, ["callee:00467bc0:8"]]
- 0074e05c ["INT_ADD", "register:40f0:8", ["const:74e05c:8", "const:4:8"]]
- 0074e05c ["CALL", null, ["callee:008524fc:8"]]
+ 0074e40c ["INT_ADD", "register:40f0:8", ["const:74e40c:8", "const:4:8"]]
+ 0074e40c ["CALL", null, ["callee:008524fc:8"]]
- 0074e060 ["INT_ADD", "register:40f0:8", ["const:74e060:8", "const:4:8"]]
- 0074e060 ["CALL", null, ["callee:0046cd24:8"]]
+ 0074e410 ["INT_ADD", "register:40f0:8", ["const:74e410:8", "const:4:8"]]
+ 0074e410 ["CALL", null, ["callee:0046cd24:8"]]
~~~


<a id="compare-5346f58b16f7946508ccf1bbc88c2861"></a>

### [`00755bb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00755/00755bb8.md) → [`00755f68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00755/00755f68.md) FUN_00755f68

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00755ac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00755/00755ac0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00755e70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00755/00755e70.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00755bc8 ["INT_ADD", "register:40f0:8", ["const:755bc8:8", "const:4:8"]]
- 00755bc8 ["CALL", null, ["callee:00755e70:8"]]
+ 00755f78 ["INT_ADD", "register:40f0:8", ["const:755f78:8", "const:4:8"]]
+ 00755f78 ["CALL", null, ["callee:00755e70:8"]]
~~~


<a id="compare-835935d8e4631502c40f887c989ad568"></a>

### [`0075843c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00758/0075843c.md) → [`007587ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00758/007587ec.md) FUN_007587ec

根拠 `relaxed_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) [`007bbe74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bb/007bbe74.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) [`007bcdd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007bc/007bcdd8.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007584a4 ["INT_ADD", "register:40f0:8", ["const:7584a4:8", "const:4:8"]]
- 007584a4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00758854 ["INT_ADD", "register:40f0:8", ["const:758854:8", "const:4:8"]]
+ 00758854 ["CALL", null, ["callee:00c58f30:8"]]
- 00758528 ["INT_ADD", "register:40f0:8", ["const:758528:8", "const:4:8"]]
- 00758528 ["CALL", null, ["callee:0043bf04:8"]]
+ 007588d8 ["INT_ADD", "register:40f0:8", ["const:7588d8:8", "const:4:8"]]
+ 007588d8 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-dfd2bfe512f75b6159aae9b8c84526b8"></a>

### [`00758550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00758/00758550.md) → [`00758900`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00758/00758900.md) FUN_00758900

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0077bc18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0077b/0077bc18.md) [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 2件 [`0077bff4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0077b/0077bff4.md) [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00758570 ["INT_ADD", "register:40f0:8", ["const:758570:8", "const:4:8"]]
- 00758570 ["CALL", null, ["callee:00c54d90:8"]]
+ 00758920 ["INT_ADD", "register:40f0:8", ["const:758920:8", "const:4:8"]]
+ 00758920 ["CALL", null, ["callee:00c54d90:8"]]
- 00758584 ["COPY", "register:0:8", ["register:4040:8"]]
- 00758584 ["INT_ADD", "register:40f0:8", ["const:758584:8", "const:4:8"]]
- 00758584 ["CALLIND", null, ["register:0:8"]]
+ 00758934 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00758934 ["INT_ADD", "register:40f0:8", ["const:758934:8", "const:4:8"]]
+ 00758934 ["CALLIND", null, ["register:0:8"]]
- 0075858c ["INT_ADD", "register:40f0:8", ["const:75858c:8", "const:4:8"]]
- 0075858c ["CALL", null, ["callee:00c58f20:8"]]
+ 0075893c ["INT_ADD", "register:40f0:8", ["const:75893c:8", "const:4:8"]]
+ 0075893c ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-73eac63dacfaaf89a3b24a305d6c0dc2"></a>

### [`0075b928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075b/0075b928.md) → [`0075bcd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075b/0075bcd8.md) FUN_0075bcd8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0075b944 ["INT_ADD", "register:40f0:8", ["const:75b944:8", "const:4:8"]]
- 0075b944 ["CALL", null, ["callee:00c58f50:8"]]
+ 0075bcf4 ["INT_ADD", "register:40f0:8", ["const:75bcf4:8", "const:4:8"]]
+ 0075bcf4 ["CALL", null, ["callee:00c58f50:8"]]
- 0075b954 ["INT_ADD", "register:40f0:8", ["const:75b954:8", "const:4:8"]]
- 0075b954 ["CALL", null, ["callee:00c58f50:8"]]
+ 0075bd04 ["INT_ADD", "register:40f0:8", ["const:75bd04:8", "const:4:8"]]
+ 0075bd04 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-df6a2d80839017a5b88ea63ef69e9ecc"></a>

### [`0075d5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075d/0075d5e0.md) → [`0075d990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075d/0075d990.md) FUN_0075d990

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 12件 [`00664b00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664b00.md) [`00664b9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664b9c.md) [`00664c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664c0c.md) [`00664e50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664e50.md) [`00665078`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00665/00665078.md)
- 新版 呼出元 1件 [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) · 呼出先 12件 [`00664eb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664eb0.md) [`00664f4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664f4c.md) [`00664fbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664fbc.md) [`00665200`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00665/00665200.md) [`00665428`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00665/00665428.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0075d630 ["INT_ADD", "register:40f0:8", ["const:75d630:8", "const:4:8"]]
- 0075d630 ["CALL", null, ["callee:00b30910:8"]]
+ 0075d9e0 ["INT_ADD", "register:40f0:8", ["const:75d9e0:8", "const:4:8"]]
+ 0075d9e0 ["CALL", null, ["callee:00b30910:8"]]
- 0075d63c ["INT_ADD", "register:40f0:8", ["const:75d63c:8", "const:4:8"]]
- 0075d63c ["CALL", null, ["callee:00664eb0:8"]]
+ 0075d9ec ["INT_ADD", "register:40f0:8", ["const:75d9ec:8", "const:4:8"]]
+ 0075d9ec ["CALL", null, ["callee:00664eb0:8"]]
- 0075d64c ["INT_ADD", "register:40f0:8", ["const:75d64c:8", "const:4:8"]]
- 0075d64c ["CALL", null, ["callee:00664eb0:8"]]
+ 0075d9fc ["INT_ADD", "register:40f0:8", ["const:75d9fc:8", "const:4:8"]]
+ 0075d9fc ["CALL", null, ["callee:00664eb0:8"]]
~~~


<a id="compare-514f3a4b1d7397df20c39e34c3c16554"></a>

### [`0075e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075e91c.md) → [`0075eccc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075eccc.md) FUN_0075eccc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0075e5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075e5e0.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0077c968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0077c/0077c968.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0075e990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075e990.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0077cd44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0077c/0077cd44.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0075e994 ["INT_ADD", "register:40f0:8", ["const:75e994:8", "const:4:8"]]
- 0075e994 ["CALL", null, ["callee:0043be80:8"]]
+ 0075ed44 ["INT_ADD", "register:40f0:8", ["const:75ed44:8", "const:4:8"]]
+ 0075ed44 ["CALL", null, ["callee:0043be80:8"]]
- 0075e9a8 ["INT_ADD", "register:40f0:8", ["const:75e9a8:8", "const:4:8"]]
- 0075e9a8 ["CALL", null, ["callee:0043be80:8"]]
+ 0075ed58 ["INT_ADD", "register:40f0:8", ["const:75ed58:8", "const:4:8"]]
+ 0075ed58 ["CALL", null, ["callee:0043be80:8"]]
- 0075ea00 ["INT_ADD", "register:40f0:8", ["const:75ea00:8", "const:4:8"]]
- 0075ea00 ["CALL", null, ["callee:0077cd44:8"]]
+ 0075edb0 ["INT_ADD", "register:40f0:8", ["const:75edb0:8", "const:4:8"]]
+ 0075edb0 ["CALL", null, ["callee:0077cd44:8"]]
~~~


<a id="compare-7780ee5d1b14e63253898219296da99e"></a>

### [`00763ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00763/00763ce8.md) → [`007640c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00764/007640c4.md) FUN_007640c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) [`00a8e624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8e/00a8e624.md) · 呼出先 5件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0066d0d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d0d4.md) [`00b35884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b35884.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) [`00a8f618`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8f/00a8f618.md) · 呼出先 5件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0066d484`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066d/0066d484.md) [`00b36878`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b36/00b36878.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00763d0c ["INT_ADD", "register:40f0:8", ["const:763d0c:8", "const:4:8"]]
- 00763d0c ["CALL", null, ["callee:0066d484:8"]]
+ 007640e8 ["INT_ADD", "register:40f0:8", ["const:7640e8:8", "const:4:8"]]
+ 007640e8 ["CALL", null, ["callee:0066d484:8"]]
- 00763d20 ["INT_ADD", "register:40f0:8", ["const:763d20:8", "const:4:8"]]
- 00763d20 ["CALL", null, ["callee:00448254:8"]]
+ 007640fc ["INT_ADD", "register:40f0:8", ["const:7640fc:8", "const:4:8"]]
+ 007640fc ["CALL", null, ["callee:00448254:8"]]
- 00763d30 ["INT_ADD", "register:40f0:8", ["const:763d30:8", "const:4:8"]]
- 00763d30 ["CALL", null, ["callee:00c58f50:8"]]
+ 0076410c ["INT_ADD", "register:40f0:8", ["const:76410c:8", "const:4:8"]]
+ 0076410c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-4b13be3d3b0d9255aacaf14ea84754aa"></a>

### [`0077b2b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0077b/0077b2b0.md) → [`0077b68c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0077b/0077b68c.md) FUN_0077b68c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) · 呼出先 2件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0077b2e8 ["INT_ADD", "register:40f0:8", ["const:77b2e8:8", "const:4:8"]]
- 0077b2e8 ["CALL", null, ["callee:005c1b8c:8"]]
+ 0077b6c4 ["INT_ADD", "register:40f0:8", ["const:77b6c4:8", "const:4:8"]]
+ 0077b6c4 ["CALL", null, ["callee:005c1b8c:8"]]
- 0077b2f4 ["INT_ADD", "register:40f0:8", ["const:77b2f4:8", "const:4:8"]]
- 0077b2f4 ["CALL", null, ["callee:005c1b8c:8"]]
+ 0077b6d0 ["INT_ADD", "register:40f0:8", ["const:77b6d0:8", "const:4:8"]]
+ 0077b6d0 ["CALL", null, ["callee:005c1b8c:8"]]
~~~


<a id="compare-427f2e341838709a5a8a08b38a900492"></a>

### [`0077c5b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0077c/0077c5b4.md) → [`0077c990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0077c/0077c990.md) FUN_0077c990

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0077c1e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0077c/0077c1e8.md) · 呼出先 5件 [`007262b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00726/007262b8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`0077c5c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0077c/0077c5c4.md) · 呼出先 5件 [`00726668`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00726/00726668.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0077c608 ["INT_ADD", "register:40f0:8", ["const:77c608:8", "const:4:8"]]
- 0077c608 ["CALL", null, ["callee:00c58f50:8"]]
+ 0077c9e4 ["INT_ADD", "register:40f0:8", ["const:77c9e4:8", "const:4:8"]]
+ 0077c9e4 ["CALL", null, ["callee:00c58f50:8"]]
- 0077c66c ["INT_ADD", "register:40f0:8", ["const:77c66c:8", "const:4:8"]]
- 0077c66c ["CALL", null, ["callee:00c58f30:8"]]
+ 0077ca48 ["INT_ADD", "register:40f0:8", ["const:77ca48:8", "const:4:8"]]
+ 0077ca48 ["CALL", null, ["callee:00c58f30:8"]]
- 0077c694 ["INT_ADD", "register:40f0:8", ["const:77c694:8", "const:4:8"]]
- 0077c694 ["CALL", null, ["callee:00c590a0:8"]]
+ 0077ca70 ["INT_ADD", "register:40f0:8", ["const:77ca70:8", "const:4:8"]]
+ 0077ca70 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-80bf211fe7dce16c866a1473e070dd6f"></a>

### [`0077c718`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0077c/0077c718.md) → [`0077caf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0077c/0077caf4.md) FUN_0077caf4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00768c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768c40.md) · 呼出先 5件 [`004499f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00449/004499f8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`0076901c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00769/0076901c.md) · 呼出先 5件 [`00449d18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00449/00449d18.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0077c75c ["INT_ADD", "register:40f0:8", ["const:77c75c:8", "const:4:8"]]
- 0077c75c ["CALL", null, ["callee:00c58f50:8"]]
+ 0077cb38 ["INT_ADD", "register:40f0:8", ["const:77cb38:8", "const:4:8"]]
+ 0077cb38 ["CALL", null, ["callee:00c58f50:8"]]
- 0077c794 ["INT_ADD", "register:40f0:8", ["const:77c794:8", "const:4:8"]]
- 0077c794 ["CALL", null, ["callee:00c58f30:8"]]
+ 0077cb70 ["INT_ADD", "register:40f0:8", ["const:77cb70:8", "const:4:8"]]
+ 0077cb70 ["CALL", null, ["callee:00c58f30:8"]]
- 0077c7bc ["INT_ADD", "register:40f0:8", ["const:77c7bc:8", "const:4:8"]]
- 0077c7bc ["CALL", null, ["callee:00c590a0:8"]]
+ 0077cb98 ["INT_ADD", "register:40f0:8", ["const:77cb98:8", "const:4:8"]]
+ 0077cb98 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-aa6888c1bf4afdd05e6fed2ac6b8c7c7"></a>

### [`0077c8b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0077c/0077c8b8.md) → [`0077cc94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0077c/0077cc94.md) FUN_0077cc94

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0075b97c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075b/0075b97c.md) · 呼出先 2件 [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0075bd2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075b/0075bd2c.md) · 呼出先 2件 [`00494970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00494/00494970.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0077c91c ["INT_ADD", "register:40f0:8", ["const:77c91c:8", "const:4:8"]]
- 0077c91c ["CALL", null, ["callee:00494970:8"]]
+ 0077ccf8 ["INT_ADD", "register:40f0:8", ["const:77ccf8:8", "const:4:8"]]
+ 0077ccf8 ["CALL", null, ["callee:00494970:8"]]
- 0077c92c ["INT_ADD", "register:40f0:8", ["const:77c92c:8", "const:4:8"]]
- 0077c92c ["CALL", null, ["callee:00c58f50:8"]]
+ 0077cd08 ["INT_ADD", "register:40f0:8", ["const:77cd08:8", "const:4:8"]]
+ 0077cd08 ["CALL", null, ["callee:00c58f50:8"]]
- 0077c93c ["INT_ADD", "register:40f0:8", ["const:77c93c:8", "const:4:8"]]
- 0077c93c ["CALL", null, ["callee:00c58f50:8"]]
+ 0077cd18 ["INT_ADD", "register:40f0:8", ["const:77cd18:8", "const:4:8"]]
+ 0077cd18 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-4b52b81303dbb5caa04feade651028dd"></a>

### [`00782b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00782/00782b78.md) → [`00782f54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00782/00782f54.md) FUN_00782f54

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00782b94 ["INT_ADD", "register:40f0:8", ["const:782b94:8", "const:4:8"]]
- 00782b94 ["CALL", null, ["callee:00c54d90:8"]]
+ 00782f70 ["INT_ADD", "register:40f0:8", ["const:782f70:8", "const:4:8"]]
+ 00782f70 ["CALL", null, ["callee:00c54d90:8"]]
- 00782bb4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00782bb4 ["INT_ADD", "register:40f0:8", ["const:782bb4:8", "const:4:8"]]
- 00782bb4 ["CALLIND", null, ["register:0:8"]]
+ 00782f90 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00782f90 ["INT_ADD", "register:40f0:8", ["const:782f90:8", "const:4:8"]]
+ 00782f90 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b23e71d2780b5830685d05931c8b0340"></a>

### [`00787e0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787e0c.md) → [`007881e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00788/007881e8.md) FUN_007881e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00787c58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787c58.md) · 呼出先 6件 [`00468ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468ca0.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046a928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046a928.md) [`00729afc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00729/00729afc.md)
- 新版 呼出元 1件 [`00788034`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00788/00788034.md) · 呼出先 6件 [`00468fc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468fc0.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md) [`0046ac48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046a/0046ac48.md) [`00729eac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00729/00729eac.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00787e4c ["INT_ADD", "register:40f0:8", ["const:787e4c:8", "const:4:8"]]
- 00787e4c ["CALL", null, ["callee:00729eac:8"]]
+ 00788228 ["INT_ADD", "register:40f0:8", ["const:788228:8", "const:4:8"]]
+ 00788228 ["CALL", null, ["callee:00729eac:8"]]
- 00787e6c ["INT_ADD", "register:40f0:8", ["const:787e6c:8", "const:4:8"]]
- 00787e6c ["CALL", null, ["callee:0046ac48:8"]]
+ 00788248 ["INT_ADD", "register:40f0:8", ["const:788248:8", "const:4:8"]]
+ 00788248 ["CALL", null, ["callee:0046ac48:8"]]
- 00787ea8 ["INT_ADD", "register:40f0:8", ["const:787ea8:8", "const:4:8"]]
- 00787ea8 ["CALL", null, ["callee:00469f64:8"]]
+ 00788284 ["INT_ADD", "register:40f0:8", ["const:788284:8", "const:4:8"]]
+ 00788284 ["CALL", null, ["callee:00469f64:8"]]
~~~


<a id="compare-f2fed5d239bfc5599e404807b51ba54e"></a>

### [`00787f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787f5c.md) → [`00788338`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00788/00788338.md) FUN_00788338

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 1件 [`00787e0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787e0c.md) · 呼出先 3件 [`00467b30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b30.md) [`00468c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468c1c.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md)
- 新版 呼出元 1件 [`007881e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00788/007881e8.md) · 呼出先 3件 [`00467e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e50.md) [`00468f3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468f3c.md) [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md)

変更の種類 call_argument_candidate, constant, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 97.53% / 新版 97.53%

アドレスに依存する影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00788020",
      "incomplete_value": true,
      "site": "00788028",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "00788024",
      "incomplete_value": false,
      "site": "00788028",
      "value": [
        "leaf",
        "const:1:8"
      ]
    },
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00788420",
      "incomplete_value": true,
      "site": "00788440",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
    "ordinal": 3,
    "slot": 1
  }
]
~~~


~~~diff
- 00788028 ["INT_ADD", "register:40f0:8", ["const:788028:8", "const:4:8"]]
- 00788028 ["CALL", null, ["callee:00467e50:8"]]
+ 00788404 ["INT_ADD", "register:40f0:8", ["const:788404:8", "const:4:8"]]
+ 00788404 ["CALL", null, ["callee:00467e50:8"]]
- 00788064 ["INT_ADD", "register:40f0:8", ["const:788064:8", "const:4:8"]]
- 00788064 ["CALL", null, ["callee:00469f64:8"]]
+ 00788440 ["INT_ADD", "register:40f0:8", ["const:788440:8", "const:4:8"]]
+ 00788440 ["CALL", null, ["callee:00469f64:8"]]
- 0078800c ["INT_ADD", "register:40f0:8", ["const:78800c:8", "const:4:8"]]
- 0078800c ["CALL", null, ["callee:00469f64:8"]]
+ 007883e8 ["INT_ADD", "register:40f0:8", ["const:7883e8:8", "const:4:8"]]
+ 007883e8 ["CALL", null, ["callee:00469f64:8"]]
~~~


<a id="compare-62a2809f7b9a4d91287da1991222fd73"></a>

### [`0078e640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e640.md) → [`0078ea1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078ea1c.md) FUN_0078ea1c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0049f750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f750.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0078e67c ["INT_ADD", "register:40f0:8", ["const:78e67c:8", "const:4:8"]]
- 0078e67c ["CALL", null, ["callee:0049f750:8"]]
+ 0078ea58 ["INT_ADD", "register:40f0:8", ["const:78ea58:8", "const:4:8"]]
+ 0078ea58 ["CALL", null, ["callee:0049f750:8"]]
~~~


<a id="compare-fb182f1e28dbd87e0f80f3e7886a6249"></a>

### [`007918a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00791/007918a8.md) → [`00791c84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00791/00791c84.md) FUN_00791c84

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007918e8 ["INT_ADD", "register:40f0:8", ["const:7918e8:8", "const:4:8"]]
- 007918e8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00791cc4 ["INT_ADD", "register:40f0:8", ["const:791cc4:8", "const:4:8"]]
+ 00791cc4 ["CALL", null, ["callee:00c58f50:8"]]
- 00791930 ["INT_ADD", "register:40f0:8", ["const:791930:8", "const:4:8"]]
- 00791930 ["CALL", null, ["callee:00c58f50:8"]]
+ 00791d0c ["INT_ADD", "register:40f0:8", ["const:791d0c:8", "const:4:8"]]
+ 00791d0c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-021b929e57ab5ccb1c769aa5466e405b"></a>

### [`00791968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00791/00791968.md) → [`00791d44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00791/00791d44.md) FUN_00791d44

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007906b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00790/007906b4.md) · 呼出先 10件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0072b19c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072b/0072b19c.md) [`0079422c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00794/0079422c.md)
- 新版 呼出元 1件 [`00790a90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00790/00790a90.md) · 呼出先 10件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`0072b54c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072b/0072b54c.md) [`00794608`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00794/00794608.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007919e8 ["INT_ADD", "register:40f0:8", ["const:7919e8:8", "const:4:8"]]
- 007919e8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00791dc4 ["INT_ADD", "register:40f0:8", ["const:791dc4:8", "const:4:8"]]
+ 00791dc4 ["CALL", null, ["callee:00c58f30:8"]]
- 00791a00 ["INT_ADD", "register:40f0:8", ["const:791a00:8", "const:4:8"]]
- 00791a00 ["CALL", null, ["callee:00c590a0:8"]]
+ 00791ddc ["INT_ADD", "register:40f0:8", ["const:791ddc:8", "const:4:8"]]
+ 00791ddc ["CALL", null, ["callee:00c590a0:8"]]
- 00791a1c ["INT_ADD", "register:40f0:8", ["const:791a1c:8", "const:4:8"]]
- 00791a1c ["CALL", null, ["callee:0072b54c:8"]]
+ 00791df8 ["INT_ADD", "register:40f0:8", ["const:791df8:8", "const:4:8"]]
+ 00791df8 ["CALL", null, ["callee:0072b54c:8"]]
~~~


<a id="compare-64edbcf58773775c6b1d4a5ce681255a"></a>

### [`007924dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00792/007924dc.md) → [`007928b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00792/007928b8.md) FUN_007928b8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007906b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00790/007906b4.md) · 呼出先 10件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0072ae38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072a/0072ae38.md) [`0079422c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00794/0079422c.md)
- 新版 呼出元 1件 [`00790a90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00790/00790a90.md) · 呼出先 10件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`0072b1e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072b/0072b1e8.md) [`00794608`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00794/00794608.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00792558 ["INT_ADD", "register:40f0:8", ["const:792558:8", "const:4:8"]]
- 00792558 ["CALL", null, ["callee:00c58f30:8"]]
+ 00792934 ["INT_ADD", "register:40f0:8", ["const:792934:8", "const:4:8"]]
+ 00792934 ["CALL", null, ["callee:00c58f30:8"]]
- 00792570 ["INT_ADD", "register:40f0:8", ["const:792570:8", "const:4:8"]]
- 00792570 ["CALL", null, ["callee:00c590a0:8"]]
+ 0079294c ["INT_ADD", "register:40f0:8", ["const:79294c:8", "const:4:8"]]
+ 0079294c ["CALL", null, ["callee:00c590a0:8"]]
- 00792584 ["INT_ADD", "register:40f0:8", ["const:792584:8", "const:4:8"]]
- 00792584 ["CALL", null, ["callee:0072b1e8:8"]]
+ 00792960 ["INT_ADD", "register:40f0:8", ["const:792960:8", "const:4:8"]]
+ 00792960 ["CALL", null, ["callee:0072b1e8:8"]]
~~~


<a id="compare-2170142bf2e322ab2e45c94ca2a30d43"></a>

### [`00792a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00792/00792a20.md) → [`00792dfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00792/00792dfc.md) FUN_00792dfc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 8件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`005c1c30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1c30.md) [`00794c80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00794/00794c80.md) [`009a97bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a97bc.md) [`009ad9d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009ad9d4.md)
- 新版 呼出元 1件 [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) · 呼出先 8件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`005c1fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1fe0.md) [`0079505c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00795/0079505c.md) [`009aa768`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009aa/009aa768.md) [`009ae980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ae/009ae980.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00792a80 ["INT_ADD", "register:40f0:8", ["const:792a80:8", "const:4:8"]]
- 00792a80 ["CALL", null, ["callee:0079505c:8"]]
+ 00792e5c ["INT_ADD", "register:40f0:8", ["const:792e5c:8", "const:4:8"]]
+ 00792e5c ["CALL", null, ["callee:0079505c:8"]]
- 00792a8c ["INT_ADD", "register:40f0:8", ["const:792a8c:8", "const:4:8"]]
- 00792a8c ["CALL", null, ["callee:005c1fe0:8"]]
+ 00792e68 ["INT_ADD", "register:40f0:8", ["const:792e68:8", "const:4:8"]]
+ 00792e68 ["CALL", null, ["callee:005c1fe0:8"]]
- 00792aa0 ["INT_ADD", "register:40f0:8", ["const:792aa0:8", "const:4:8"]]
- 00792aa0 ["CALL", null, ["callee:009ae980:8"]]
+ 00792e7c ["INT_ADD", "register:40f0:8", ["const:792e7c:8", "const:4:8"]]
+ 00792e7c ["CALL", null, ["callee:009ae980:8"]]
~~~


<a id="compare-38bc62781da7943a9aa62c80b13d7d9e"></a>

### [`00792d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00792/00792d2c.md) → [`00793108`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00793/00793108.md) FUN_00793108

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 3件 [`008b6f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f68.md) [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md)
- 新版 呼出元 1件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) · 呼出先 3件 [`008b7f14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f14.md) [`008b7f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f1c.md) [`008b89cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b89cc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00792d54 ["INT_ADD", "register:40f0:8", ["const:792d54:8", "const:4:8"]]
- 00792d54 ["CALL", null, ["callee:008b89cc:8"]]
+ 00793130 ["INT_ADD", "register:40f0:8", ["const:793130:8", "const:4:8"]]
+ 00793130 ["CALL", null, ["callee:008b89cc:8"]]
- 00792d64 ["INT_ADD", "register:40f0:8", ["const:792d64:8", "const:4:8"]]
- 00792d64 ["CALL", null, ["callee:008b7f14:8"]]
+ 00793140 ["INT_ADD", "register:40f0:8", ["const:793140:8", "const:4:8"]]
+ 00793140 ["CALL", null, ["callee:008b7f14:8"]]
- 00792d70 ["INT_ADD", "register:40f0:8", ["const:792d70:8", "const:4:8"]]
- 00792d70 ["CALL", null, ["callee:008b7f1c:8"]]
+ 0079314c ["INT_ADD", "register:40f0:8", ["const:79314c:8", "const:4:8"]]
+ 0079314c ["CALL", null, ["callee:008b7f1c:8"]]
~~~


