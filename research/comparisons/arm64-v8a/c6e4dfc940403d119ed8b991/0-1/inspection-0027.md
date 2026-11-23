# v16.0.1 → v16.0.2 · 要調査の変更候補 (27)

[一覧の目次](README.md)

<a id="compare-c8661029b211fb78fa1b59b05099d6f1"></a>

### [`00868d4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/00868d4c.md) → [`00868da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868da4.md) FUN_00868da4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0084729c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00847/0084729c.md) · 呼出先 7件 [`0046e8a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e8a4.md) [`0046efdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046efdc.md) [`00672748`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00672/00672748.md) [`00676a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/00676a60.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`008472f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/008472f4.md) · 呼出先 7件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`00672788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672788.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00868d6c ["INT_ADD", "register:40f0:8", ["const:868d6c:8", "const:4:8"]]
- 00868d6c ["CALL", null, ["callee:00c53da0:8"]]
+ 00868dc4 ["INT_ADD", "register:40f0:8", ["const:868dc4:8", "const:4:8"]]
+ 00868dc4 ["CALL", null, ["callee:00c53da0:8"]]
- 00868d80 ["COPY", "register:0:8", ["register:4040:8"]]
- 00868d80 ["INT_ADD", "register:40f0:8", ["const:868d80:8", "const:4:8"]]
- 00868d80 ["CALLIND", null, ["register:0:8"]]
+ 00868dd8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00868dd8 ["INT_ADD", "register:40f0:8", ["const:868dd8:8", "const:4:8"]]
+ 00868dd8 ["CALLIND", null, ["register:0:8"]]
- 00868d88 ["INT_ADD", "register:40f0:8", ["const:868d88:8", "const:4:8"]]
- 00868d88 ["CALL", null, ["callee:00c57f50:8"]]
+ 00868de0 ["INT_ADD", "register:40f0:8", ["const:868de0:8", "const:4:8"]]
+ 00868de0 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-aac67ef95d1c3ba547169052f4a7a4fc"></a>

### [`00868fac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/00868fac.md) → [`00869004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869004.md) FUN_00869004

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00868c64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/00868c64.md) [`00868fac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/00868fac.md) [`008f53b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f5/008f53b0.md) · 呼出先 3件 [`00868fac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/00868fac.md) [`00868ff8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/00868ff8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`00868cbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868cbc.md) [`00869004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869004.md) [`008f5404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f5/008f5404.md) · 呼出先 3件 [`00869004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869004.md) [`00869050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869050.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00868fcc ["INT_ADD", "register:40f0:8", ["const:868fcc:8", "const:4:8"]]
- 00868fcc ["CALL", null, ["local:b0:8"]]
+ 00869024 ["INT_ADD", "register:40f0:8", ["const:869024:8", "const:4:8"]]
+ 00869024 ["CALL", null, ["local:b0:8"]]
- 00868fd8 ["INT_ADD", "register:40f0:8", ["const:868fd8:8", "const:4:8"]]
- 00868fd8 ["CALL", null, ["local:b0:8"]]
+ 00869030 ["INT_ADD", "register:40f0:8", ["const:869030:8", "const:4:8"]]
+ 00869030 ["CALL", null, ["local:b0:8"]]
- 00868fe0 ["INT_ADD", "register:40f0:8", ["const:868fe0:8", "const:4:8"]]
- 00868fe0 ["CALL", null, ["callee:00869050:8"]]
+ 00869038 ["INT_ADD", "register:40f0:8", ["const:869038:8", "const:4:8"]]
+ 00869038 ["CALL", null, ["callee:00869050:8"]]
~~~


<a id="compare-f1bd45c71ed1a56e6ac6602c5ee09906"></a>

### [`00868ff8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/00868ff8.md) → [`00869050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869050.md) FUN_00869050

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00868fac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/00868fac.md) [`008f53b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f5/008f53b0.md) · 呼出先 3件 [`00676a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/00676a60.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 2件 [`00869004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869004.md) [`008f5404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f5/008f5404.md) · 呼出先 3件 [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00869010 ["INT_ADD", "register:40f0:8", ["const:869010:8", "const:4:8"]]
- 00869010 ["CALL", null, ["callee:00676aa0:8"]]
+ 00869068 ["INT_ADD", "register:40f0:8", ["const:869068:8", "const:4:8"]]
+ 00869068 ["CALL", null, ["callee:00676aa0:8"]]
- 0086901c ["INT_ADD", "register:40f0:8", ["const:86901c:8", "const:4:8"]]
- 0086901c ["CALL", null, ["callee:00676aa0:8"]]
+ 00869074 ["INT_ADD", "register:40f0:8", ["const:869074:8", "const:4:8"]]
+ 00869074 ["CALL", null, ["callee:00676aa0:8"]]
- 00869028 ["INT_ADD", "register:40f0:8", ["const:869028:8", "const:4:8"]]
- 00869028 ["CALL", null, ["callee:00676aa0:8"]]
+ 00869080 ["INT_ADD", "register:40f0:8", ["const:869080:8", "const:4:8"]]
+ 00869080 ["CALL", null, ["callee:00676aa0:8"]]
~~~


<a id="compare-d9619aa296458027d10cfca343b6245c"></a>

### [`008690e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/008690e8.md) → [`00869140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869140.md) FUN_00869140

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`008690e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/008690e8.md) [`00a64f38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a64/00a64f38.md) · 呼出先 3件 [`008690e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/008690e8.md) [`00869138`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869138.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00869140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869140.md) [`00a64fa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a64/00a64fa8.md) · 呼出先 3件 [`00869140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869140.md) [`00869190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869190.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00869108 ["INT_ADD", "register:40f0:8", ["const:869108:8", "const:4:8"]]
- 00869108 ["CALL", null, ["local:b0:8"]]
+ 00869160 ["INT_ADD", "register:40f0:8", ["const:869160:8", "const:4:8"]]
+ 00869160 ["CALL", null, ["local:b0:8"]]
- 00869114 ["INT_ADD", "register:40f0:8", ["const:869114:8", "const:4:8"]]
- 00869114 ["CALL", null, ["local:b0:8"]]
+ 0086916c ["INT_ADD", "register:40f0:8", ["const:86916c:8", "const:4:8"]]
+ 0086916c ["CALL", null, ["local:b0:8"]]
- 00869120 ["INT_ADD", "register:40f0:8", ["const:869120:8", "const:4:8"]]
- 00869120 ["CALL", null, ["callee:00869190:8"]]
+ 00869178 ["INT_ADD", "register:40f0:8", ["const:869178:8", "const:4:8"]]
+ 00869178 ["CALL", null, ["callee:00869190:8"]]
~~~


<a id="compare-b151c995444e92e49eff93675b04bc6a"></a>

### [`00869138`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869138.md) → [`00869190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869190.md) FUN_00869190

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`008690e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/008690e8.md) [`00869138`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869138.md) [`00a64f38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a64/00a64f38.md) [`00a67c80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a67/00a67c80.md) [`00a68014`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a68/00a68014.md) · 呼出先 2件 [`00869138`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869138.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 5件 [`00869140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869140.md) [`00869190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869190.md) [`00a64fa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a64/00a64fa8.md) [`00a67cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a67/00a67cf0.md) [`00a68084`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a68/00a68084.md) · 呼出先 2件 [`00869190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869190.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00869154 ["INT_ADD", "register:40f0:8", ["const:869154:8", "const:4:8"]]
- 00869154 ["CALL", null, ["local:b0:8"]]
+ 008691ac ["INT_ADD", "register:40f0:8", ["const:8691ac:8", "const:4:8"]]
+ 008691ac ["CALL", null, ["local:b0:8"]]
- 00869160 ["INT_ADD", "register:40f0:8", ["const:869160:8", "const:4:8"]]
- 00869160 ["CALL", null, ["local:b0:8"]]
+ 008691b8 ["INT_ADD", "register:40f0:8", ["const:8691b8:8", "const:4:8"]]
+ 008691b8 ["CALL", null, ["local:b0:8"]]
- 00869170 ["INT_ADD", "register:40f0:8", ["const:869170:8", "const:4:8"]]
- 00869170 ["CALL", null, ["callee:00c57f80:8"]]
+ 008691c8 ["INT_ADD", "register:40f0:8", ["const:8691c8:8", "const:4:8"]]
+ 008691c8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-9d730fa769a0a092922362f4f5d41e54"></a>

### [`00869188`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869188.md) → [`008691e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008691e0.md) FUN_008691e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 6件 [`008473e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00847/008473e4.md) [`00a37ff8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a37/00a37ff8.md) [`00a38108`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a38/00a38108.md) [`00a3a018`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3a/00a3a018.md) [`00a3a268`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3a/00a3a268.md) · 呼出先 2件 [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 6件 [`0084743c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/0084743c.md) [`00a3804c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a3804c.md) [`00a3815c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a3815c.md) [`00a3a06c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3a/00a3a06c.md) [`00a3a2bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3a/00a3a2bc.md) · 呼出先 2件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008691a4 ["INT_ADD", "register:40f0:8", ["const:8691a4:8", "const:4:8"]]
- 008691a4 ["CALL", null, ["callee:0046d4d0:8"]]
+ 008691fc ["INT_ADD", "register:40f0:8", ["const:8691fc:8", "const:4:8"]]
+ 008691fc ["CALL", null, ["callee:0046d4d0:8"]]
- 008691b0 ["INT_ADD", "register:40f0:8", ["const:8691b0:8", "const:4:8"]]
- 008691b0 ["CALL", null, ["callee:0046d4d0:8"]]
+ 00869208 ["INT_ADD", "register:40f0:8", ["const:869208:8", "const:4:8"]]
+ 00869208 ["CALL", null, ["callee:0046d4d0:8"]]
- 008691e8 ["INT_ADD", "register:40f0:8", ["const:8691e8:8", "const:4:8"]]
- 008691e8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00869240 ["INT_ADD", "register:40f0:8", ["const:869240:8", "const:4:8"]]
+ 00869240 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-d4f628ad70aadf5780921841688a4c22"></a>

### [`00869228`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869228.md) → [`00869280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869280.md) FUN_00869280

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`008473e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00847/008473e4.md) [`00a38064`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a38/00a38064.md) [`00a38108`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a38/00a38108.md) [`00a39dd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a39dd8.md) · 呼出先 2件 [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 4件 [`0084743c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/0084743c.md) [`00a380b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a380b8.md) [`00a3815c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a3815c.md) [`00a39e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39e2c.md) · 呼出先 2件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00869260 ["INT_ADD", "register:40f0:8", ["const:869260:8", "const:4:8"]]
- 00869260 ["CALL", null, ["callee:0046d4d0:8"]]
+ 008692b8 ["INT_ADD", "register:40f0:8", ["const:8692b8:8", "const:4:8"]]
+ 008692b8 ["CALL", null, ["callee:0046d4d0:8"]]
- 0086926c ["INT_ADD", "register:40f0:8", ["const:86926c:8", "const:4:8"]]
- 0086926c ["CALL", null, ["callee:0046d4d0:8"]]
+ 008692c4 ["INT_ADD", "register:40f0:8", ["const:8692c4:8", "const:4:8"]]
+ 008692c4 ["CALL", null, ["callee:0046d4d0:8"]]
- 00869278 ["INT_ADD", "register:40f0:8", ["const:869278:8", "const:4:8"]]
- 00869278 ["CALL", null, ["callee:0046d4d0:8"]]
+ 008692d0 ["INT_ADD", "register:40f0:8", ["const:8692d0:8", "const:4:8"]]
+ 008692d0 ["CALL", null, ["callee:0046d4d0:8"]]
~~~


<a id="compare-57a2d330ee44517d50ed873090a464e3"></a>

### [`0086930c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/0086930c.md) → [`00869364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869364.md) FUN_00869364

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`008473e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00847/008473e4.md) [`00a380cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a38/00a380cc.md) [`00a38108`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a38/00a38108.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`0084743c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/0084743c.md) [`00a38120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a38120.md) [`00a3815c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a3815c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00869354 ["INT_ADD", "register:40f0:8", ["const:869354:8", "const:4:8"]]
- 00869354 ["CALL", null, ["callee:00c57f80:8"]]
+ 008693ac ["INT_ADD", "register:40f0:8", ["const:8693ac:8", "const:4:8"]]
+ 008693ac ["CALL", null, ["callee:00c57f80:8"]]
- 00869370 ["INT_ADD", "register:40f0:8", ["const:869370:8", "const:4:8"]]
- 00869370 ["CALL", null, ["callee:00c57f80:8"]]
+ 008693c8 ["INT_ADD", "register:40f0:8", ["const:8693c8:8", "const:4:8"]]
+ 008693c8 ["CALL", null, ["callee:00c57f80:8"]]
- 008693a8 ["INT_ADD", "register:40f0:8", ["const:8693a8:8", "const:4:8"]]
- 008693a8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00869400 ["INT_ADD", "register:40f0:8", ["const:869400:8", "const:4:8"]]
+ 00869400 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-619ea4e15c09e92db042e5f2ab632729"></a>

### [`008693c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/008693c0.md) → [`00869418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869418.md) FUN_00869418

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`008474b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00847/008474b0.md) [`008693c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/008693c0.md) · 呼出先 2件 [`008693c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/008693c0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00847508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/00847508.md) [`00869418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869418.md) · 呼出先 2件 [`00869418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869418.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008693dc ["INT_ADD", "register:40f0:8", ["const:8693dc:8", "const:4:8"]]
- 008693dc ["CALL", null, ["local:b0:8"]]
+ 00869434 ["INT_ADD", "register:40f0:8", ["const:869434:8", "const:4:8"]]
+ 00869434 ["CALL", null, ["local:b0:8"]]
- 008693e8 ["INT_ADD", "register:40f0:8", ["const:8693e8:8", "const:4:8"]]
- 008693e8 ["CALL", null, ["local:b0:8"]]
+ 00869440 ["INT_ADD", "register:40f0:8", ["const:869440:8", "const:4:8"]]
+ 00869440 ["CALL", null, ["local:b0:8"]]
- 008693f8 ["INT_ADD", "register:40f0:8", ["const:8693f8:8", "const:4:8"]]
- 008693f8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00869450 ["INT_ADD", "register:40f0:8", ["const:869450:8", "const:4:8"]]
+ 00869450 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-0d1d41ce182fb59672abe5c15e3cfaf9"></a>

### [`00869420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869420.md) → [`00869478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869478.md) FUN_00869478

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`008474b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00847/008474b0.md) [`00869420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869420.md) · 呼出先 2件 [`00869420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869420.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00847508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/00847508.md) [`00869478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869478.md) · 呼出先 2件 [`00869478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869478.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00869440 ["INT_ADD", "register:40f0:8", ["const:869440:8", "const:4:8"]]
- 00869440 ["CALL", null, ["local:b0:8"]]
+ 00869498 ["INT_ADD", "register:40f0:8", ["const:869498:8", "const:4:8"]]
+ 00869498 ["CALL", null, ["local:b0:8"]]
- 0086944c ["INT_ADD", "register:40f0:8", ["const:86944c:8", "const:4:8"]]
- 0086944c ["CALL", null, ["local:b0:8"]]
+ 008694a4 ["INT_ADD", "register:40f0:8", ["const:8694a4:8", "const:4:8"]]
+ 008694a4 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-d4ffd9cff78afeaee5c033513000b52f"></a>

### [`00869464`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869464.md) → [`008694bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008694bc.md) FUN_008694bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00869464`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869464.md) · 呼出先 2件 [`00869464`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869464.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`008694bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008694bc.md) · 呼出先 2件 [`008694bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008694bc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00869480 ["INT_ADD", "register:40f0:8", ["const:869480:8", "const:4:8"]]
- 00869480 ["CALL", null, ["local:b0:8"]]
+ 008694d8 ["INT_ADD", "register:40f0:8", ["const:8694d8:8", "const:4:8"]]
+ 008694d8 ["CALL", null, ["local:b0:8"]]
- 0086948c ["INT_ADD", "register:40f0:8", ["const:86948c:8", "const:4:8"]]
- 0086948c ["CALL", null, ["local:b0:8"]]
+ 008694e4 ["INT_ADD", "register:40f0:8", ["const:8694e4:8", "const:4:8"]]
+ 008694e4 ["CALL", null, ["local:b0:8"]]
- 0086949c ["INT_ADD", "register:40f0:8", ["const:86949c:8", "const:4:8"]]
- 0086949c ["CALL", null, ["callee:00c57f80:8"]]
+ 008694f4 ["INT_ADD", "register:40f0:8", ["const:8694f4:8", "const:4:8"]]
+ 008694f4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-4b51e5ad257233c56d6f9533cb6faafb"></a>

### [`008694b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/008694b4.md) → [`0086950c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/0086950c.md) FUN_0086950c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 6件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`008476ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00847/008476ac.md) [`008694b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/008694b4.md) [`00aafa34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aaf/00aafa34.md) [`00ab09f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ab0/00ab09f4.md) · 呼出先 2件 [`008694b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/008694b4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 6件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00847704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/00847704.md) [`0086950c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/0086950c.md) [`00aafaa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aaf/00aafaa4.md) [`00ab0a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ab0/00ab0a64.md) · 呼出先 2件 [`0086950c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/0086950c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008694d0 ["INT_ADD", "register:40f0:8", ["const:8694d0:8", "const:4:8"]]
- 008694d0 ["CALL", null, ["local:b0:8"]]
+ 00869528 ["INT_ADD", "register:40f0:8", ["const:869528:8", "const:4:8"]]
+ 00869528 ["CALL", null, ["local:b0:8"]]
- 008694dc ["INT_ADD", "register:40f0:8", ["const:8694dc:8", "const:4:8"]]
- 008694dc ["CALL", null, ["local:b0:8"]]
+ 00869534 ["INT_ADD", "register:40f0:8", ["const:869534:8", "const:4:8"]]
+ 00869534 ["CALL", null, ["local:b0:8"]]
- 008694ec ["INT_ADD", "register:40f0:8", ["const:8694ec:8", "const:4:8"]]
- 008694ec ["CALL", null, ["callee:00c57f80:8"]]
+ 00869544 ["INT_ADD", "register:40f0:8", ["const:869544:8", "const:4:8"]]
+ 00869544 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-52ed88cda6ac836a8a4467d7c8d702ab"></a>

### [`00869504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869504.md) → [`0086955c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/0086955c.md) FUN_0086955c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00847860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00847/00847860.md) [`0084e59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0084e/0084e59c.md) [`00869504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869504.md) · 呼出先 2件 [`00869504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869504.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`008478b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/008478b8.md) [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) [`0086955c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/0086955c.md) · 呼出先 2件 [`0086955c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/0086955c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00869524 ["INT_ADD", "register:40f0:8", ["const:869524:8", "const:4:8"]]
- 00869524 ["CALL", null, ["local:b0:8"]]
+ 0086957c ["INT_ADD", "register:40f0:8", ["const:86957c:8", "const:4:8"]]
+ 0086957c ["CALL", null, ["local:b0:8"]]
- 00869530 ["INT_ADD", "register:40f0:8", ["const:869530:8", "const:4:8"]]
- 00869530 ["CALL", null, ["local:b0:8"]]
+ 00869588 ["INT_ADD", "register:40f0:8", ["const:869588:8", "const:4:8"]]
+ 00869588 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-cad39fc329caaba634019afc18a8fffa"></a>

### [`00869548`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869548.md) → [`008695a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008695a0.md) FUN_008695a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00847af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00847/00847af8.md) · 呼出先 6件 [`0046e8a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e8a4.md) [`0046efdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046efdc.md) [`0078dcac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078d/0078dcac.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 2件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00847b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/00847b50.md) · 呼出先 6件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`0078dd04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078dd04.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00869594 ["INT_ADD", "register:40f0:8", ["const:869594:8", "const:4:8"]]
- 00869594 ["CALL", null, ["callee:00c57f80:8"]]
+ 008695ec ["INT_ADD", "register:40f0:8", ["const:8695ec:8", "const:4:8"]]
+ 008695ec ["CALL", null, ["callee:00c57f80:8"]]
- 008695a4 ["INT_ADD", "register:40f0:8", ["const:8695a4:8", "const:4:8"]]
- 008695a4 ["CALL", null, ["callee:00c57f80:8"]]
+ 008695fc ["INT_ADD", "register:40f0:8", ["const:8695fc:8", "const:4:8"]]
+ 008695fc ["CALL", null, ["callee:00c57f80:8"]]
- 008695b4 ["INT_ADD", "register:40f0:8", ["const:8695b4:8", "const:4:8"]]
- 008695b4 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086960c ["INT_ADD", "register:40f0:8", ["const:86960c:8", "const:4:8"]]
+ 0086960c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-d6c167031e9b70ebd16c22678466ab7b"></a>

### [`00869784`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869784.md) → [`008697dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008697dc.md) FUN_008697dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00847af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00847/00847af8.md) [`0084e59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0084e/0084e59c.md) [`00869784`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869784.md) · 呼出先 2件 [`00869784`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869784.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00847b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/00847b50.md) [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) [`008697dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008697dc.md) · 呼出先 2件 [`008697dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008697dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008697a4 ["INT_ADD", "register:40f0:8", ["const:8697a4:8", "const:4:8"]]
- 008697a4 ["CALL", null, ["local:b0:8"]]
+ 008697fc ["INT_ADD", "register:40f0:8", ["const:8697fc:8", "const:4:8"]]
+ 008697fc ["CALL", null, ["local:b0:8"]]
- 008697b0 ["INT_ADD", "register:40f0:8", ["const:8697b0:8", "const:4:8"]]
- 008697b0 ["CALL", null, ["local:b0:8"]]
+ 00869808 ["INT_ADD", "register:40f0:8", ["const:869808:8", "const:4:8"]]
+ 00869808 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-277b7eb0f38ed92523fbfa5e48cb2e0c"></a>

### [`008697c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/008697c8.md) → [`00869820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869820.md) FUN_00869820

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 6件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00847b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00847/00847b38.md) [`009bdd38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bd/009bdd38.md) [`009c058c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c058c.md) [`009c0fe4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c0fe4.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 6件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00847b90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/00847b90.md) [`009bdd8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bdd8c.md) [`009c05e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c05e0.md) [`009c1038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c1038.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00869810 ["INT_ADD", "register:40f0:8", ["const:869810:8", "const:4:8"]]
- 00869810 ["CALL", null, ["callee:00c57f80:8"]]
+ 00869868 ["INT_ADD", "register:40f0:8", ["const:869868:8", "const:4:8"]]
+ 00869868 ["CALL", null, ["callee:00c57f80:8"]]
- 00869820 ["INT_ADD", "register:40f0:8", ["const:869820:8", "const:4:8"]]
- 00869820 ["CALL", null, ["callee:00c57f80:8"]]
+ 00869878 ["INT_ADD", "register:40f0:8", ["const:869878:8", "const:4:8"]]
+ 00869878 ["CALL", null, ["callee:00c57f80:8"]]
- 0086984c ["INT_ADD", "register:40f0:8", ["const:86984c:8", "const:4:8"]]
- 0086984c ["CALL", null, ["callee:00c57f80:8"]]
+ 008698a4 ["INT_ADD", "register:40f0:8", ["const:8698a4:8", "const:4:8"]]
+ 008698a4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-6482b6932fabcc6ae807f15dacd79ed3"></a>

### [`00869988`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869988.md) → [`008699e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008699e0.md) FUN_008699e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00869988`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869988.md) [`00a82f2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a82/00a82f2c.md) · 呼出先 4件 [`00869988`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869988.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`008699e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008699e0.md) [`00a82f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a82/00a82f9c.md) · 呼出先 4件 [`008699e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008699e0.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008699ac ["INT_ADD", "register:40f0:8", ["const:8699ac:8", "const:4:8"]]
- 008699ac ["CALL", null, ["local:b0:8"]]
+ 00869a04 ["INT_ADD", "register:40f0:8", ["const:869a04:8", "const:4:8"]]
+ 00869a04 ["CALL", null, ["local:b0:8"]]
- 008699b8 ["INT_ADD", "register:40f0:8", ["const:8699b8:8", "const:4:8"]]
- 008699b8 ["CALL", null, ["local:b0:8"]]
+ 00869a10 ["INT_ADD", "register:40f0:8", ["const:869a10:8", "const:4:8"]]
+ 00869a10 ["CALL", null, ["local:b0:8"]]
- 008699e0 ["INT_ADD", "register:40f0:8", ["const:8699e0:8", "const:4:8"]]
- 008699e0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00869a38 ["INT_ADD", "register:40f0:8", ["const:869a38:8", "const:4:8"]]
+ 00869a38 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-f657a875d556fa8d6ac75b06cc532967"></a>

### [`00869b3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869b3c.md) → [`00869b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869b94.md) FUN_00869b94

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 5件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00848250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848250.md) [`008bac8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ba/008bac8c.md) [`008bb53c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bb/008bb53c.md) [`008bba60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bb/008bba60.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 5件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`008482a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/008482a8.md) [`008bace4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008bace4.md) [`008bb594`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bb594.md) [`008bbab8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bbab8.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00869b80 ["COPY", "register:0:8", ["register:4040:8"]]
- 00869b80 ["INT_ADD", "register:40f0:8", ["const:869b80:8", "const:4:8"]]
- 00869b80 ["CALLIND", null, ["register:0:8"]]
+ 00869bd8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00869bd8 ["INT_ADD", "register:40f0:8", ["const:869bd8:8", "const:4:8"]]
+ 00869bd8 ["CALLIND", null, ["register:0:8"]]
- 00869bb0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00869bb0 ["INT_ADD", "register:40f0:8", ["const:869bb0:8", "const:4:8"]]
- 00869bb0 ["CALLIND", null, ["register:0:8"]]
+ 00869c08 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00869c08 ["INT_ADD", "register:40f0:8", ["const:869c08:8", "const:4:8"]]
+ 00869c08 ["CALLIND", null, ["register:0:8"]]
- 00869be0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00869be0 ["INT_ADD", "register:40f0:8", ["const:869be0:8", "const:4:8"]]
- 00869be0 ["CALLIND", null, ["register:0:8"]]
+ 00869c38 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00869c38 ["INT_ADD", "register:40f0:8", ["const:869c38:8", "const:4:8"]]
+ 00869c38 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f598ed38e39498fe9b8267eb9d748ca6"></a>

### [`00869ca4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869ca4.md) → [`00869cfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869cfc.md) FUN_00869cfc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00869ce8 ["INT_ADD", "register:40f0:8", ["const:869ce8:8", "const:4:8"]]
- 00869ce8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00869d40 ["INT_ADD", "register:40f0:8", ["const:869d40:8", "const:4:8"]]
+ 00869d40 ["CALL", null, ["callee:00c57f80:8"]]
- 00869cf0 ["INT_ADD", "register:40f0:8", ["const:869cf0:8", "const:4:8"]]
- 00869cf0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00869d48 ["INT_ADD", "register:40f0:8", ["const:869d48:8", "const:4:8"]]
+ 00869d48 ["CALL", null, ["callee:00c57f80:8"]]
- 00869d38 ["INT_ADD", "register:40f0:8", ["const:869d38:8", "const:4:8"]]
- 00869d38 ["CALL", null, ["callee:00c57f80:8"]]
+ 00869d90 ["INT_ADD", "register:40f0:8", ["const:869d90:8", "const:4:8"]]
+ 00869d90 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-4f41072ebda7234f28d0eeaca76f1f5b"></a>

### [`00869d7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869d7c.md) → [`00869dd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869dd4.md) FUN_00869dd4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`008484f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/008484f8.md) [`00869d7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869d7c.md) · 呼出先 2件 [`00869d7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869d7c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00848550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848550.md) [`00869dd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869dd4.md) · 呼出先 2件 [`00869dd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869dd4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00869d9c ["INT_ADD", "register:40f0:8", ["const:869d9c:8", "const:4:8"]]
- 00869d9c ["CALL", null, ["local:b0:8"]]
+ 00869df4 ["INT_ADD", "register:40f0:8", ["const:869df4:8", "const:4:8"]]
+ 00869df4 ["CALL", null, ["local:b0:8"]]
- 00869da8 ["INT_ADD", "register:40f0:8", ["const:869da8:8", "const:4:8"]]
- 00869da8 ["CALL", null, ["local:b0:8"]]
+ 00869e00 ["INT_ADD", "register:40f0:8", ["const:869e00:8", "const:4:8"]]
+ 00869e00 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-ea0eb0082327c8a976bfc247b1e7c169"></a>

### [`00869dc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869dc0.md) → [`00869e18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869e18.md) FUN_00869e18

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00869dc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869dc0.md) · 呼出先 3件 [`00869dc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869dc0.md) [`00869e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869e10.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00869e18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869e18.md) · 呼出先 3件 [`00869e18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869e18.md) [`00869e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869e68.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00869de0 ["INT_ADD", "register:40f0:8", ["const:869de0:8", "const:4:8"]]
- 00869de0 ["CALL", null, ["local:b0:8"]]
+ 00869e38 ["INT_ADD", "register:40f0:8", ["const:869e38:8", "const:4:8"]]
+ 00869e38 ["CALL", null, ["local:b0:8"]]
- 00869dec ["INT_ADD", "register:40f0:8", ["const:869dec:8", "const:4:8"]]
- 00869dec ["CALL", null, ["local:b0:8"]]
+ 00869e44 ["INT_ADD", "register:40f0:8", ["const:869e44:8", "const:4:8"]]
+ 00869e44 ["CALL", null, ["local:b0:8"]]
- 00869df8 ["INT_ADD", "register:40f0:8", ["const:869df8:8", "const:4:8"]]
- 00869df8 ["CALL", null, ["callee:00869e68:8"]]
+ 00869e50 ["INT_ADD", "register:40f0:8", ["const:869e50:8", "const:4:8"]]
+ 00869e50 ["CALL", null, ["callee:00869e68:8"]]
~~~


<a id="compare-d739c04dde38530e78c4ea8460a34f6a"></a>

### [`00869e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869e10.md) → [`00869e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869e68.md) FUN_00869e68

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00869dc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869dc0.md) [`00869e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869e10.md) · 呼出先 2件 [`00869e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869e10.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`00869e18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869e18.md) [`00869e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869e68.md) · 呼出先 2件 [`00869e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869e68.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00869e30 ["INT_ADD", "register:40f0:8", ["const:869e30:8", "const:4:8"]]
- 00869e30 ["CALL", null, ["local:b0:8"]]
+ 00869e88 ["INT_ADD", "register:40f0:8", ["const:869e88:8", "const:4:8"]]
+ 00869e88 ["CALL", null, ["local:b0:8"]]
- 00869e3c ["INT_ADD", "register:40f0:8", ["const:869e3c:8", "const:4:8"]]
- 00869e3c ["CALL", null, ["local:b0:8"]]
+ 00869e94 ["INT_ADD", "register:40f0:8", ["const:869e94:8", "const:4:8"]]
+ 00869e94 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-caa48075121b4f7715ff4317fe58bc4d"></a>

### [`00869e54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869e54.md) → [`00869eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869eac.md) FUN_00869eac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00869e54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869e54.md) [`00a2f62c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2f/00a2f62c.md) · 呼出先 2件 [`00869e54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869e54.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00869eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869eac.md) [`00a2f680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2f/00a2f680.md) · 呼出先 2件 [`00869eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869eac.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00869e70 ["INT_ADD", "register:40f0:8", ["const:869e70:8", "const:4:8"]]
- 00869e70 ["CALL", null, ["local:b0:8"]]
+ 00869ec8 ["INT_ADD", "register:40f0:8", ["const:869ec8:8", "const:4:8"]]
+ 00869ec8 ["CALL", null, ["local:b0:8"]]
- 00869e7c ["INT_ADD", "register:40f0:8", ["const:869e7c:8", "const:4:8"]]
- 00869e7c ["CALL", null, ["local:b0:8"]]
+ 00869ed4 ["INT_ADD", "register:40f0:8", ["const:869ed4:8", "const:4:8"]]
+ 00869ed4 ["CALL", null, ["local:b0:8"]]
- 00869e8c ["INT_ADD", "register:40f0:8", ["const:869e8c:8", "const:4:8"]]
- 00869e8c ["CALL", null, ["callee:00c57f80:8"]]
+ 00869ee4 ["INT_ADD", "register:40f0:8", ["const:869ee4:8", "const:4:8"]]
+ 00869ee4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-3a921dd5243d6125cbc432261da3f19a"></a>

### [`00869ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869ea4.md) → [`00869efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869efc.md) FUN_00869efc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00869ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869ea4.md) [`00a62f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a62/00a62f4c.md) · 呼出先 3件 [`005c17e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c17e0.md) [`00869ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869ea4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00869efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869efc.md) [`00a62fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a62/00a62fbc.md) · 呼出先 3件 [`005c1820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1820.md) [`00869efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869efc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00869ec4 ["INT_ADD", "register:40f0:8", ["const:869ec4:8", "const:4:8"]]
- 00869ec4 ["CALL", null, ["local:b0:8"]]
+ 00869f1c ["INT_ADD", "register:40f0:8", ["const:869f1c:8", "const:4:8"]]
+ 00869f1c ["CALL", null, ["local:b0:8"]]
- 00869ed0 ["INT_ADD", "register:40f0:8", ["const:869ed0:8", "const:4:8"]]
- 00869ed0 ["CALL", null, ["local:b0:8"]]
+ 00869f28 ["INT_ADD", "register:40f0:8", ["const:869f28:8", "const:4:8"]]
+ 00869f28 ["CALL", null, ["local:b0:8"]]
- 00869edc ["INT_ADD", "register:40f0:8", ["const:869edc:8", "const:4:8"]]
- 00869edc ["CALL", null, ["callee:005c1820:8"]]
+ 00869f34 ["INT_ADD", "register:40f0:8", ["const:869f34:8", "const:4:8"]]
+ 00869f34 ["CALL", null, ["callee:005c1820:8"]]
~~~


<a id="compare-440d22a87b72ddd195dd93f988f560dd"></a>

### [`00869ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869ef4.md) → [`00869f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869f4c.md) FUN_00869f4c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 10件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`008487c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/008487c8.md) [`009aa61c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009aa/009aa61c.md) [`009ac400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009ac400.md) [`009acc30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009acc30.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 10件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00848820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848820.md) [`009aa670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aa670.md) [`009ac454`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac454.md) [`009acc84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009acc84.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00869f78 ["INT_ADD", "register:40f0:8", ["const:869f78:8", "const:4:8"]]
- 00869f78 ["CALL", null, ["callee:00c57f80:8"]]
+ 00869fd0 ["INT_ADD", "register:40f0:8", ["const:869fd0:8", "const:4:8"]]
+ 00869fd0 ["CALL", null, ["callee:00c57f80:8"]]
- 00869f88 ["INT_ADD", "register:40f0:8", ["const:869f88:8", "const:4:8"]]
- 00869f88 ["CALL", null, ["callee:00c57f80:8"]]
+ 00869fe0 ["INT_ADD", "register:40f0:8", ["const:869fe0:8", "const:4:8"]]
+ 00869fe0 ["CALL", null, ["callee:00c57f80:8"]]
- 00869f98 ["INT_ADD", "register:40f0:8", ["const:869f98:8", "const:4:8"]]
- 00869f98 ["CALL", null, ["callee:00c57f80:8"]]
+ 00869ff0 ["INT_ADD", "register:40f0:8", ["const:869ff0:8", "const:4:8"]]
+ 00869ff0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-6805e505b3f409895d27b398224bdbac"></a>

### [`00869fb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869fb0.md) → [`0086a008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a008.md) FUN_0086a008

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 5件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00848818`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848818.md) [`008dd0f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008dd/008dd0f4.md) [`008e05f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e0/008e05f4.md) [`008e09d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e0/008e09d8.md) · 呼出先 3件 [`00676a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/00676a60.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 5件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00848870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848870.md) [`008dd148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008dd148.md) [`008e0648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e0/008e0648.md) [`008e0a2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e0/008e0a2c.md) · 呼出先 3件 [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00869fc8 ["INT_ADD", "register:40f0:8", ["const:869fc8:8", "const:4:8"]]
- 00869fc8 ["CALL", null, ["callee:00676aa0:8"]]
+ 0086a020 ["INT_ADD", "register:40f0:8", ["const:86a020:8", "const:4:8"]]
+ 0086a020 ["CALL", null, ["callee:00676aa0:8"]]
- 00869fd4 ["INT_ADD", "register:40f0:8", ["const:869fd4:8", "const:4:8"]]
- 00869fd4 ["CALL", null, ["callee:00676aa0:8"]]
+ 0086a02c ["INT_ADD", "register:40f0:8", ["const:86a02c:8", "const:4:8"]]
+ 0086a02c ["CALL", null, ["callee:00676aa0:8"]]
- 00869fe0 ["INT_ADD", "register:40f0:8", ["const:869fe0:8", "const:4:8"]]
- 00869fe0 ["CALL", null, ["callee:00676aa0:8"]]
+ 0086a038 ["INT_ADD", "register:40f0:8", ["const:86a038:8", "const:4:8"]]
+ 0086a038 ["CALL", null, ["callee:00676aa0:8"]]
~~~


<a id="compare-ce834094fd5716eee86fb95b5e843b74"></a>

### [`0086a064`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a064.md) → [`0086a0bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a0bc.md) FUN_0086a0bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`008488dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/008488dc.md) [`0086a064`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a064.md) [`008d71f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d7/008d71f4.md) · 呼出先 2件 [`0086a064`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a064.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00848934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848934.md) [`0086a0bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a0bc.md) [`008d7248`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d7/008d7248.md) · 呼出先 2件 [`0086a0bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a0bc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086a080 ["INT_ADD", "register:40f0:8", ["const:86a080:8", "const:4:8"]]
- 0086a080 ["CALL", null, ["local:b0:8"]]
+ 0086a0d8 ["INT_ADD", "register:40f0:8", ["const:86a0d8:8", "const:4:8"]]
+ 0086a0d8 ["CALL", null, ["local:b0:8"]]
- 0086a08c ["INT_ADD", "register:40f0:8", ["const:86a08c:8", "const:4:8"]]
- 0086a08c ["CALL", null, ["local:b0:8"]]
+ 0086a0e4 ["INT_ADD", "register:40f0:8", ["const:86a0e4:8", "const:4:8"]]
+ 0086a0e4 ["CALL", null, ["local:b0:8"]]
- 0086a09c ["INT_ADD", "register:40f0:8", ["const:86a09c:8", "const:4:8"]]
- 0086a09c ["CALL", null, ["callee:00c57f80:8"]]
+ 0086a0f4 ["INT_ADD", "register:40f0:8", ["const:86a0f4:8", "const:4:8"]]
+ 0086a0f4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-d726e0ba5120ea856cee0f8f64a33a37"></a>

### [`0086a0b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a0b4.md) → [`0086a10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a10c.md) FUN_0086a10c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00848a2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848a2c.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00848a84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848a84.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086a104 ["INT_ADD", "register:40f0:8", ["const:86a104:8", "const:4:8"]]
- 0086a104 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086a15c ["INT_ADD", "register:40f0:8", ["const:86a15c:8", "const:4:8"]]
+ 0086a15c ["CALL", null, ["callee:00c57f80:8"]]
- 0086a114 ["INT_ADD", "register:40f0:8", ["const:86a114:8", "const:4:8"]]
- 0086a114 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086a16c ["INT_ADD", "register:40f0:8", ["const:86a16c:8", "const:4:8"]]
+ 0086a16c ["CALL", null, ["callee:00c57f80:8"]]
- 0086a128 ["INT_ADD", "register:40f0:8", ["const:86a128:8", "const:4:8"]]
- 0086a128 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086a180 ["INT_ADD", "register:40f0:8", ["const:86a180:8", "const:4:8"]]
+ 0086a180 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-f162d226fbddf417b0623db898f4c26a"></a>

### [`0086a164`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a164.md) → [`0086a1bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a1bc.md) FUN_0086a1bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 6件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00848b20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848b20.md) [`0086a164`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a164.md) [`008fc5f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fc/008fc5f0.md) [`008fd054`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fd/008fd054.md) · 呼出先 2件 [`0086a164`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a164.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 6件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00848b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848b78.md) [`0086a1bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a1bc.md) [`008fc644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fc/008fc644.md) [`008fd0a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fd/008fd0a8.md) · 呼出先 2件 [`0086a1bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a1bc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086a184 ["INT_ADD", "register:40f0:8", ["const:86a184:8", "const:4:8"]]
- 0086a184 ["CALL", null, ["local:b0:8"]]
+ 0086a1dc ["INT_ADD", "register:40f0:8", ["const:86a1dc:8", "const:4:8"]]
+ 0086a1dc ["CALL", null, ["local:b0:8"]]
- 0086a190 ["INT_ADD", "register:40f0:8", ["const:86a190:8", "const:4:8"]]
- 0086a190 ["CALL", null, ["local:b0:8"]]
+ 0086a1e8 ["INT_ADD", "register:40f0:8", ["const:86a1e8:8", "const:4:8"]]
+ 0086a1e8 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-39c436e5afde2ce06f639cede43cfba1"></a>

### [`0086a1a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a1a8.md) → [`0086a200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a200.md) FUN_0086a200

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 6件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00848b98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848b98.md) [`0086a1a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a1a8.md) [`00a3aac8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3a/00a3aac8.md) [`00a3b884`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3b/00a3b884.md) · 呼出先 2件 [`0086a1a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a1a8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 6件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00848bf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848bf0.md) [`0086a200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a200.md) [`00a3ab1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3a/00a3ab1c.md) [`00a3b8d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3b/00a3b8d8.md) · 呼出先 2件 [`0086a200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a200.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086a1c8 ["INT_ADD", "register:40f0:8", ["const:86a1c8:8", "const:4:8"]]
- 0086a1c8 ["CALL", null, ["local:b0:8"]]
+ 0086a220 ["INT_ADD", "register:40f0:8", ["const:86a220:8", "const:4:8"]]
+ 0086a220 ["CALL", null, ["local:b0:8"]]
- 0086a1d4 ["INT_ADD", "register:40f0:8", ["const:86a1d4:8", "const:4:8"]]
- 0086a1d4 ["CALL", null, ["local:b0:8"]]
+ 0086a22c ["INT_ADD", "register:40f0:8", ["const:86a22c:8", "const:4:8"]]
+ 0086a22c ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-f1bae8bb10399d35a2de34da76a982c5"></a>

### [`0086a1ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a1ec.md) → [`0086a244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a244.md) FUN_0086a244

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00848c20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848c20.md) [`00abd86c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00abd/00abd86c.md) [`00abd8ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00abd/00abd8ec.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`00848c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848c78.md) [`00abd8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00abd/00abd8dc.md) [`00abd95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00abd/00abd95c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086a21c ["INT_ADD", "register:40f0:8", ["const:86a21c:8", "const:4:8"]]
- 0086a21c ["CALL", null, ["callee:00c57f80:8"]]
+ 0086a274 ["INT_ADD", "register:40f0:8", ["const:86a274:8", "const:4:8"]]
+ 0086a274 ["CALL", null, ["callee:00c57f80:8"]]
- 0086a22c ["INT_ADD", "register:40f0:8", ["const:86a22c:8", "const:4:8"]]
- 0086a22c ["CALL", null, ["callee:00c57f80:8"]]
+ 0086a284 ["INT_ADD", "register:40f0:8", ["const:86a284:8", "const:4:8"]]
+ 0086a284 ["CALL", null, ["callee:00c57f80:8"]]
- 0086a23c ["INT_ADD", "register:40f0:8", ["const:86a23c:8", "const:4:8"]]
- 0086a23c ["CALL", null, ["callee:00c57f80:8"]]
+ 0086a294 ["INT_ADD", "register:40f0:8", ["const:86a294:8", "const:4:8"]]
+ 0086a294 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-e4a82a5cb321af6178faa60aec69dbdb"></a>

### [`0086a278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a278.md) → [`0086a2d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a2d0.md) FUN_0086a2d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00848cfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848cfc.md) [`0086a278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a278.md) [`00928318`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00928/00928318.md) · 呼出先 2件 [`0086a278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a278.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00848d54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848d54.md) [`0086a2d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a2d0.md) [`0092836c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00928/0092836c.md) · 呼出先 2件 [`0086a2d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a2d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086a294 ["INT_ADD", "register:40f0:8", ["const:86a294:8", "const:4:8"]]
- 0086a294 ["CALL", null, ["local:b0:8"]]
+ 0086a2ec ["INT_ADD", "register:40f0:8", ["const:86a2ec:8", "const:4:8"]]
+ 0086a2ec ["CALL", null, ["local:b0:8"]]
- 0086a2a0 ["INT_ADD", "register:40f0:8", ["const:86a2a0:8", "const:4:8"]]
- 0086a2a0 ["CALL", null, ["local:b0:8"]]
+ 0086a2f8 ["INT_ADD", "register:40f0:8", ["const:86a2f8:8", "const:4:8"]]
+ 0086a2f8 ["CALL", null, ["local:b0:8"]]
- 0086a2b0 ["INT_ADD", "register:40f0:8", ["const:86a2b0:8", "const:4:8"]]
- 0086a2b0 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086a308 ["INT_ADD", "register:40f0:8", ["const:86a308:8", "const:4:8"]]
+ 0086a308 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-750200491033de42ffc6922d50d18405"></a>

### [`0086a2d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a2d8.md) → [`0086a330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a330.md) FUN_0086a330

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00848f94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848f94.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00848fec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848fec.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086a328 ["INT_ADD", "register:40f0:8", ["const:86a328:8", "const:4:8"]]
- 0086a328 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086a380 ["INT_ADD", "register:40f0:8", ["const:86a380:8", "const:4:8"]]
+ 0086a380 ["CALL", null, ["callee:00c57f80:8"]]
- 0086a338 ["INT_ADD", "register:40f0:8", ["const:86a338:8", "const:4:8"]]
- 0086a338 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086a390 ["INT_ADD", "register:40f0:8", ["const:86a390:8", "const:4:8"]]
+ 0086a390 ["CALL", null, ["callee:00c57f80:8"]]
- 0086a34c ["INT_ADD", "register:40f0:8", ["const:86a34c:8", "const:4:8"]]
- 0086a34c ["CALL", null, ["callee:00c57f80:8"]]
+ 0086a3a4 ["INT_ADD", "register:40f0:8", ["const:86a3a4:8", "const:4:8"]]
+ 0086a3a4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-176424e7ca52561b02b10834ecdb1202"></a>

### [`0086a388`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a388.md) → [`0086a3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a3e0.md) FUN_0086a3e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`008492d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/008492d4.md) [`0086a388`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a388.md) [`00aa25e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa2/00aa25e8.md) · 呼出先 2件 [`0086a388`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a388.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0084932c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/0084932c.md) [`0086a3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a3e0.md) [`00aa2658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa2/00aa2658.md) · 呼出先 2件 [`0086a3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a3e0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086a3a4 ["INT_ADD", "register:40f0:8", ["const:86a3a4:8", "const:4:8"]]
- 0086a3a4 ["CALL", null, ["local:b0:8"]]
+ 0086a3fc ["INT_ADD", "register:40f0:8", ["const:86a3fc:8", "const:4:8"]]
+ 0086a3fc ["CALL", null, ["local:b0:8"]]
- 0086a3b0 ["INT_ADD", "register:40f0:8", ["const:86a3b0:8", "const:4:8"]]
- 0086a3b0 ["CALL", null, ["local:b0:8"]]
+ 0086a408 ["INT_ADD", "register:40f0:8", ["const:86a408:8", "const:4:8"]]
+ 0086a408 ["CALL", null, ["local:b0:8"]]
- 0086a3cc ["INT_ADD", "register:40f0:8", ["const:86a3cc:8", "const:4:8"]]
- 0086a3cc ["CALL", null, ["callee:00c57f80:8"]]
+ 0086a424 ["INT_ADD", "register:40f0:8", ["const:86a424:8", "const:4:8"]]
+ 0086a424 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-285c18b0cd490b677802c9bb9d9066d8"></a>

### [`0086a3ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a3ec.md) → [`0086a444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a444.md) FUN_0086a444

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00849304`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849304.md) [`0086a3ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a3ec.md) [`00b079c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b07/00b079c8.md) · 呼出先 2件 [`0086a3ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a3ec.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0084935c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/0084935c.md) [`0086a444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a444.md) [`00b07a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b07/00b07a64.md) · 呼出先 2件 [`0086a444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a444.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086a408 ["INT_ADD", "register:40f0:8", ["const:86a408:8", "const:4:8"]]
- 0086a408 ["CALL", null, ["local:b0:8"]]
+ 0086a460 ["INT_ADD", "register:40f0:8", ["const:86a460:8", "const:4:8"]]
+ 0086a460 ["CALL", null, ["local:b0:8"]]
- 0086a414 ["INT_ADD", "register:40f0:8", ["const:86a414:8", "const:4:8"]]
- 0086a414 ["CALL", null, ["local:b0:8"]]
+ 0086a46c ["INT_ADD", "register:40f0:8", ["const:86a46c:8", "const:4:8"]]
+ 0086a46c ["CALL", null, ["local:b0:8"]]
- 0086a430 ["INT_ADD", "register:40f0:8", ["const:86a430:8", "const:4:8"]]
- 0086a430 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086a488 ["INT_ADD", "register:40f0:8", ["const:86a488:8", "const:4:8"]]
+ 0086a488 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-adab601324a1249f47515c07cdb1e778"></a>

### [`0086a460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a460.md) → [`0086a4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a4b8.md) FUN_0086a4b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 8件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00849400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849400.md) [`0086a460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a460.md) [`0097fb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097f/0097fb20.md) [`00981440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00981/00981440.md) · 呼出先 2件 [`0086a460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a460.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 8件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849458.md) [`0086a4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a4b8.md) [`0097fb74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097f/0097fb74.md) [`00981494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/00981494.md) · 呼出先 2件 [`0086a4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a4b8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086a47c ["INT_ADD", "register:40f0:8", ["const:86a47c:8", "const:4:8"]]
- 0086a47c ["CALL", null, ["local:b0:8"]]
+ 0086a4d4 ["INT_ADD", "register:40f0:8", ["const:86a4d4:8", "const:4:8"]]
+ 0086a4d4 ["CALL", null, ["local:b0:8"]]
- 0086a488 ["INT_ADD", "register:40f0:8", ["const:86a488:8", "const:4:8"]]
- 0086a488 ["CALL", null, ["local:b0:8"]]
+ 0086a4e0 ["INT_ADD", "register:40f0:8", ["const:86a4e0:8", "const:4:8"]]
+ 0086a4e0 ["CALL", null, ["local:b0:8"]]
- 0086a498 ["INT_ADD", "register:40f0:8", ["const:86a498:8", "const:4:8"]]
- 0086a498 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086a4f0 ["INT_ADD", "register:40f0:8", ["const:86a4f0:8", "const:4:8"]]
+ 0086a4f0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-aefdb9b5f0f0c3b5632233b6d68e6ae4"></a>

### [`0086a4b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a4b0.md) → [`0086a508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a508.md) FUN_0086a508

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00849400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849400.md) [`0086a4b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a4b0.md) [`009816cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00981/009816cc.md) · 呼出先 2件 [`0086a4b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a4b0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849458.md) [`0086a508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a508.md) [`00981720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/00981720.md) · 呼出先 2件 [`0086a508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a508.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086a4d0 ["INT_ADD", "register:40f0:8", ["const:86a4d0:8", "const:4:8"]]
- 0086a4d0 ["CALL", null, ["local:b0:8"]]
+ 0086a528 ["INT_ADD", "register:40f0:8", ["const:86a528:8", "const:4:8"]]
+ 0086a528 ["CALL", null, ["local:b0:8"]]
- 0086a4dc ["INT_ADD", "register:40f0:8", ["const:86a4dc:8", "const:4:8"]]
- 0086a4dc ["CALL", null, ["local:b0:8"]]
+ 0086a534 ["INT_ADD", "register:40f0:8", ["const:86a534:8", "const:4:8"]]
+ 0086a534 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-130b38a70ddf354258cbb2b823082242"></a>

### [`0086a4f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a4f4.md) → [`0086a54c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a54c.md) FUN_0086a54c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00849400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849400.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849458.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086a544 ["INT_ADD", "register:40f0:8", ["const:86a544:8", "const:4:8"]]
- 0086a544 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086a59c ["INT_ADD", "register:40f0:8", ["const:86a59c:8", "const:4:8"]]
+ 0086a59c ["CALL", null, ["callee:00c57f80:8"]]
- 0086a554 ["INT_ADD", "register:40f0:8", ["const:86a554:8", "const:4:8"]]
- 0086a554 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086a5ac ["INT_ADD", "register:40f0:8", ["const:86a5ac:8", "const:4:8"]]
+ 0086a5ac ["CALL", null, ["callee:00c57f80:8"]]
- 0086a568 ["INT_ADD", "register:40f0:8", ["const:86a568:8", "const:4:8"]]
- 0086a568 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086a5c0 ["INT_ADD", "register:40f0:8", ["const:86a5c0:8", "const:4:8"]]
+ 0086a5c0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-b92d4530e3e09708e8eb72fd90225743"></a>

### [`0086a5a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a5a4.md) → [`0086a5fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a5fc.md) FUN_0086a5fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00849778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849778.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`008497d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/008497d0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086a5f4 ["INT_ADD", "register:40f0:8", ["const:86a5f4:8", "const:4:8"]]
- 0086a5f4 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086a64c ["INT_ADD", "register:40f0:8", ["const:86a64c:8", "const:4:8"]]
+ 0086a64c ["CALL", null, ["callee:00c57f80:8"]]
- 0086a604 ["INT_ADD", "register:40f0:8", ["const:86a604:8", "const:4:8"]]
- 0086a604 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086a65c ["INT_ADD", "register:40f0:8", ["const:86a65c:8", "const:4:8"]]
+ 0086a65c ["CALL", null, ["callee:00c57f80:8"]]
- 0086a618 ["INT_ADD", "register:40f0:8", ["const:86a618:8", "const:4:8"]]
- 0086a618 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086a670 ["INT_ADD", "register:40f0:8", ["const:86a670:8", "const:4:8"]]
+ 0086a670 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-430057e23ad784ae6a3047b6fd7b1dc1"></a>

### [`0086a654`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a654.md) → [`0086a6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a6ac.md) FUN_0086a6ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`0084987c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/0084987c.md) [`0086a654`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a654.md) · 呼出先 2件 [`0086a654`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a654.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`008498d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/008498d4.md) [`0086a6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a6ac.md) · 呼出先 2件 [`0086a6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a6ac.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086a670 ["INT_ADD", "register:40f0:8", ["const:86a670:8", "const:4:8"]]
- 0086a670 ["CALL", null, ["local:b0:8"]]
+ 0086a6c8 ["INT_ADD", "register:40f0:8", ["const:86a6c8:8", "const:4:8"]]
+ 0086a6c8 ["CALL", null, ["local:b0:8"]]
- 0086a67c ["INT_ADD", "register:40f0:8", ["const:86a67c:8", "const:4:8"]]
- 0086a67c ["CALL", null, ["local:b0:8"]]
+ 0086a6d4 ["INT_ADD", "register:40f0:8", ["const:86a6d4:8", "const:4:8"]]
+ 0086a6d4 ["CALL", null, ["local:b0:8"]]
- 0086a68c ["INT_ADD", "register:40f0:8", ["const:86a68c:8", "const:4:8"]]
- 0086a68c ["CALL", null, ["callee:00c57f80:8"]]
+ 0086a6e4 ["INT_ADD", "register:40f0:8", ["const:86a6e4:8", "const:4:8"]]
+ 0086a6e4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-9578515ba2d3de06f0738131fb4aa704"></a>

### [`0086a6a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a6a4.md) → [`0086a6fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a6fc.md) FUN_0086a6fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`0086a6a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a6a4.md) [`00a30fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a30/00a30fe0.md) · 呼出先 3件 [`0086a6a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a6a4.md) [`0086a710`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a710.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0086a6fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a6fc.md) [`00a31034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a31/00a31034.md) · 呼出先 3件 [`0086a6fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a6fc.md) [`0086a768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a768.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086a6c0 ["INT_ADD", "register:40f0:8", ["const:86a6c0:8", "const:4:8"]]
- 0086a6c0 ["CALL", null, ["local:b0:8"]]
+ 0086a718 ["INT_ADD", "register:40f0:8", ["const:86a718:8", "const:4:8"]]
+ 0086a718 ["CALL", null, ["local:b0:8"]]
- 0086a6cc ["INT_ADD", "register:40f0:8", ["const:86a6cc:8", "const:4:8"]]
- 0086a6cc ["CALL", null, ["local:b0:8"]]
+ 0086a724 ["INT_ADD", "register:40f0:8", ["const:86a724:8", "const:4:8"]]
+ 0086a724 ["CALL", null, ["local:b0:8"]]
- 0086a6d8 ["INT_ADD", "register:40f0:8", ["const:86a6d8:8", "const:4:8"]]
- 0086a6d8 ["CALL", null, ["callee:0086a768:8"]]
+ 0086a730 ["INT_ADD", "register:40f0:8", ["const:86a730:8", "const:4:8"]]
+ 0086a730 ["CALL", null, ["callee:0086a768:8"]]
~~~


<a id="compare-00d152d5ddd94ec090f808ac1be2599e"></a>

### [`0086a710`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a710.md) → [`0086a768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a768.md) FUN_0086a768

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0086a6a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a6a4.md) [`0086a710`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a710.md) · 呼出先 2件 [`0086a710`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a710.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`0086a6fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a6fc.md) [`0086a768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a768.md) · 呼出先 2件 [`0086a768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a768.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086a72c ["INT_ADD", "register:40f0:8", ["const:86a72c:8", "const:4:8"]]
- 0086a72c ["CALL", null, ["local:b0:8"]]
+ 0086a784 ["INT_ADD", "register:40f0:8", ["const:86a784:8", "const:4:8"]]
+ 0086a784 ["CALL", null, ["local:b0:8"]]
- 0086a738 ["INT_ADD", "register:40f0:8", ["const:86a738:8", "const:4:8"]]
- 0086a738 ["CALL", null, ["local:b0:8"]]
+ 0086a790 ["INT_ADD", "register:40f0:8", ["const:86a790:8", "const:4:8"]]
+ 0086a790 ["CALL", null, ["local:b0:8"]]
- 0086a748 ["INT_ADD", "register:40f0:8", ["const:86a748:8", "const:4:8"]]
- 0086a748 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086a7a0 ["INT_ADD", "register:40f0:8", ["const:86a7a0:8", "const:4:8"]]
+ 0086a7a0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-49087f4d90d3642d28a3b59721952866"></a>

### [`0086a760`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a760.md) → [`0086a7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a7b8.md) FUN_0086a7b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00849a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849a48.md) [`0086a760`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a760.md) · 呼出先 2件 [`0086a760`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a760.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849aa0.md) [`0086a7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a7b8.md) · 呼出先 2件 [`0086a7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a7b8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086a780 ["INT_ADD", "register:40f0:8", ["const:86a780:8", "const:4:8"]]
- 0086a780 ["CALL", null, ["local:b0:8"]]
+ 0086a7d8 ["INT_ADD", "register:40f0:8", ["const:86a7d8:8", "const:4:8"]]
+ 0086a7d8 ["CALL", null, ["local:b0:8"]]
- 0086a78c ["INT_ADD", "register:40f0:8", ["const:86a78c:8", "const:4:8"]]
- 0086a78c ["CALL", null, ["local:b0:8"]]
+ 0086a7e4 ["INT_ADD", "register:40f0:8", ["const:86a7e4:8", "const:4:8"]]
+ 0086a7e4 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-0925e44a7f32142cbfc9e22c18fa7f22"></a>

### [`0086a7a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a7a4.md) → [`0086a7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a7fc.md) FUN_0086a7fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00849aa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849aa4.md) [`0086a7a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a7a4.md) [`00b09604`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b09/00b09604.md) [`00b09708`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b09/00b09708.md) · 呼出先 2件 [`0086a7a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a7a4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 5件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849afc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849afc.md) [`0086a7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a7fc.md) [`00b096a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b09/00b096a0.md) [`00b097a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b09/00b097a4.md) · 呼出先 2件 [`0086a7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a7fc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086a7c4 ["INT_ADD", "register:40f0:8", ["const:86a7c4:8", "const:4:8"]]
- 0086a7c4 ["CALL", null, ["local:b0:8"]]
+ 0086a81c ["INT_ADD", "register:40f0:8", ["const:86a81c:8", "const:4:8"]]
+ 0086a81c ["CALL", null, ["local:b0:8"]]
- 0086a7d0 ["INT_ADD", "register:40f0:8", ["const:86a7d0:8", "const:4:8"]]
- 0086a7d0 ["CALL", null, ["local:b0:8"]]
+ 0086a828 ["INT_ADD", "register:40f0:8", ["const:86a828:8", "const:4:8"]]
+ 0086a828 ["CALL", null, ["local:b0:8"]]
- 0086a80c ["INT_ADD", "register:40f0:8", ["const:86a80c:8", "const:4:8"]]
- 0086a80c ["CALL", null, ["callee:00c57f80:8"]]
+ 0086a864 ["INT_ADD", "register:40f0:8", ["const:86a864:8", "const:4:8"]]
+ 0086a864 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-4410dab70ddb77ceb0dc62a6f9c47767"></a>

### [`0086a838`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a838.md) → [`0086a890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a890.md) FUN_0086a890

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00849aa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849aa4.md) [`0086a838`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a838.md) [`00b09604`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b09/00b09604.md) [`00b09708`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b09/00b09708.md) · 呼出先 2件 [`0086a838`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a838.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 5件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849afc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849afc.md) [`0086a890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a890.md) [`00b096a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b09/00b096a0.md) [`00b097a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b09/00b097a4.md) · 呼出先 2件 [`0086a890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a890.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086a854 ["INT_ADD", "register:40f0:8", ["const:86a854:8", "const:4:8"]]
- 0086a854 ["CALL", null, ["local:b0:8"]]
+ 0086a8ac ["INT_ADD", "register:40f0:8", ["const:86a8ac:8", "const:4:8"]]
+ 0086a8ac ["CALL", null, ["local:b0:8"]]
- 0086a860 ["INT_ADD", "register:40f0:8", ["const:86a860:8", "const:4:8"]]
- 0086a860 ["CALL", null, ["local:b0:8"]]
+ 0086a8b8 ["INT_ADD", "register:40f0:8", ["const:86a8b8:8", "const:4:8"]]
+ 0086a8b8 ["CALL", null, ["local:b0:8"]]
- 0086a870 ["INT_ADD", "register:40f0:8", ["const:86a870:8", "const:4:8"]]
- 0086a870 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086a8c8 ["INT_ADD", "register:40f0:8", ["const:86a8c8:8", "const:4:8"]]
+ 0086a8c8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-ea3c0a2ffa8772771cac85c7ec4f2d3c"></a>

### [`0086a888`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a888.md) → [`0086a8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a8e0.md) FUN_0086a8e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00849ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849ae4.md) [`0086a888`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a888.md) [`009c3350`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c3/009c3350.md) [`009c7dbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c7/009c7dbc.md) · 呼出先 2件 [`0086a888`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a888.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 5件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849b3c.md) [`0086a8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a8e0.md) [`009c33a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c3/009c33a4.md) [`009c7e10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c7/009c7e10.md) · 呼出先 2件 [`0086a8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a8e0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086a8a4 ["INT_ADD", "register:40f0:8", ["const:86a8a4:8", "const:4:8"]]
- 0086a8a4 ["CALL", null, ["local:b0:8"]]
+ 0086a8fc ["INT_ADD", "register:40f0:8", ["const:86a8fc:8", "const:4:8"]]
+ 0086a8fc ["CALL", null, ["local:b0:8"]]
- 0086a8b0 ["INT_ADD", "register:40f0:8", ["const:86a8b0:8", "const:4:8"]]
- 0086a8b0 ["CALL", null, ["local:b0:8"]]
+ 0086a908 ["INT_ADD", "register:40f0:8", ["const:86a908:8", "const:4:8"]]
+ 0086a908 ["CALL", null, ["local:b0:8"]]
- 0086a8c0 ["INT_ADD", "register:40f0:8", ["const:86a8c0:8", "const:4:8"]]
- 0086a8c0 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086a918 ["INT_ADD", "register:40f0:8", ["const:86a918:8", "const:4:8"]]
+ 0086a918 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-27cc3dafaf1913999d9d32531112ffc1"></a>

### [`0086a8d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a8d8.md) → [`0086a930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a930.md) FUN_0086a930

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00849ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849ae4.md) [`0086a8d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a8d8.md) [`009c33dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c3/009c33dc.md) · 呼出先 2件 [`0086a8d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a8d8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849b3c.md) [`0086a930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a930.md) [`009c3430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c3/009c3430.md) · 呼出先 2件 [`0086a930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a930.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086a8f8 ["INT_ADD", "register:40f0:8", ["const:86a8f8:8", "const:4:8"]]
- 0086a8f8 ["CALL", null, ["local:b0:8"]]
+ 0086a950 ["INT_ADD", "register:40f0:8", ["const:86a950:8", "const:4:8"]]
+ 0086a950 ["CALL", null, ["local:b0:8"]]
- 0086a904 ["INT_ADD", "register:40f0:8", ["const:86a904:8", "const:4:8"]]
- 0086a904 ["CALL", null, ["local:b0:8"]]
+ 0086a95c ["INT_ADD", "register:40f0:8", ["const:86a95c:8", "const:4:8"]]
+ 0086a95c ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-cc2f578a958c84386a5d0bd91f9c647b"></a>

### [`0086a91c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a91c.md) → [`0086a974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a974.md) FUN_0086a974

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00849b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849b58.md) [`0086a91c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a91c.md) [`00936cb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00936/00936cb4.md) · 呼出先 3件 [`0086a91c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a91c.md) [`0086a968`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a968.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849bb0.md) [`0086a974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a974.md) [`00936d08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00936/00936d08.md) · 呼出先 3件 [`0086a974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a974.md) [`0086a9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a9c0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086a93c ["INT_ADD", "register:40f0:8", ["const:86a93c:8", "const:4:8"]]
- 0086a93c ["CALL", null, ["local:b0:8"]]
+ 0086a994 ["INT_ADD", "register:40f0:8", ["const:86a994:8", "const:4:8"]]
+ 0086a994 ["CALL", null, ["local:b0:8"]]
- 0086a948 ["INT_ADD", "register:40f0:8", ["const:86a948:8", "const:4:8"]]
- 0086a948 ["CALL", null, ["local:b0:8"]]
+ 0086a9a0 ["INT_ADD", "register:40f0:8", ["const:86a9a0:8", "const:4:8"]]
+ 0086a9a0 ["CALL", null, ["local:b0:8"]]
- 0086a950 ["INT_ADD", "register:40f0:8", ["const:86a950:8", "const:4:8"]]
- 0086a950 ["CALL", null, ["callee:0086a9c0:8"]]
+ 0086a9a8 ["INT_ADD", "register:40f0:8", ["const:86a9a8:8", "const:4:8"]]
+ 0086a9a8 ["CALL", null, ["callee:0086a9c0:8"]]
~~~


<a id="compare-82bcacb03fdd1a02cba677fccbfd8124"></a>

### [`0086a968`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a968.md) → [`0086a9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a9c0.md) FUN_0086a9c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0086a91c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a91c.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0086a974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a974.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086a99c ["INT_ADD", "register:40f0:8", ["const:86a99c:8", "const:4:8"]]
- 0086a99c ["CALL", null, ["callee:00c57f80:8"]]
+ 0086a9f4 ["INT_ADD", "register:40f0:8", ["const:86a9f4:8", "const:4:8"]]
+ 0086a9f4 ["CALL", null, ["callee:00c57f80:8"]]
- 0086a9bc ["INT_ADD", "register:40f0:8", ["const:86a9bc:8", "const:4:8"]]
- 0086a9bc ["CALL", null, ["callee:00c57f80:8"]]
+ 0086aa14 ["INT_ADD", "register:40f0:8", ["const:86aa14:8", "const:4:8"]]
+ 0086aa14 ["CALL", null, ["callee:00c57f80:8"]]
- 0086a9cc ["INT_ADD", "register:40f0:8", ["const:86a9cc:8", "const:4:8"]]
- 0086a9cc ["CALL", null, ["callee:00c57f80:8"]]
+ 0086aa24 ["INT_ADD", "register:40f0:8", ["const:86aa24:8", "const:4:8"]]
+ 0086aa24 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-46593588d28875baea43d5e64783405f"></a>

### [`0086a9f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a9f8.md) → [`0086aa50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086aa50.md) FUN_0086aa50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00849b98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849b98.md) [`0086a9f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a9f8.md) [`009390b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00939/009390b4.md) · 呼出先 2件 [`0086a9f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a9f8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849bf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849bf0.md) [`0086aa50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086aa50.md) [`00939108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00939/00939108.md) · 呼出先 2件 [`0086aa50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086aa50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086aa18 ["INT_ADD", "register:40f0:8", ["const:86aa18:8", "const:4:8"]]
- 0086aa18 ["CALL", null, ["local:b0:8"]]
+ 0086aa70 ["INT_ADD", "register:40f0:8", ["const:86aa70:8", "const:4:8"]]
+ 0086aa70 ["CALL", null, ["local:b0:8"]]
- 0086aa24 ["INT_ADD", "register:40f0:8", ["const:86aa24:8", "const:4:8"]]
- 0086aa24 ["CALL", null, ["local:b0:8"]]
+ 0086aa7c ["INT_ADD", "register:40f0:8", ["const:86aa7c:8", "const:4:8"]]
+ 0086aa7c ["CALL", null, ["local:b0:8"]]
- 0086aa5c ["INT_ADD", "register:40f0:8", ["const:86aa5c:8", "const:4:8"]]
- 0086aa5c ["CALL", null, ["callee:00c57f80:8"]]
+ 0086aab4 ["INT_ADD", "register:40f0:8", ["const:86aab4:8", "const:4:8"]]
+ 0086aab4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-9c10b01993e25d62134185e811318535"></a>

### [`0086aa98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086aa98.md) → [`0086aaf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086aaf0.md) FUN_0086aaf0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`0086aa98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086aa98.md) [`00ab9f1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ab9/00ab9f1c.md) · 呼出先 2件 [`0086aa98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086aa98.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0086aaf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086aaf0.md) [`00ab9f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ab9/00ab9f8c.md) · 呼出先 2件 [`0086aaf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086aaf0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086aab8 ["INT_ADD", "register:40f0:8", ["const:86aab8:8", "const:4:8"]]
- 0086aab8 ["CALL", null, ["local:b0:8"]]
+ 0086ab10 ["INT_ADD", "register:40f0:8", ["const:86ab10:8", "const:4:8"]]
+ 0086ab10 ["CALL", null, ["local:b0:8"]]
- 0086aac4 ["INT_ADD", "register:40f0:8", ["const:86aac4:8", "const:4:8"]]
- 0086aac4 ["CALL", null, ["local:b0:8"]]
+ 0086ab1c ["INT_ADD", "register:40f0:8", ["const:86ab1c:8", "const:4:8"]]
+ 0086ab1c ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-60814f0128f8f1d5858ebd869fad17e3"></a>

### [`0086aadc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086aadc.md) → [`0086ab34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ab34.md) FUN_0086ab34

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00849c10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849c10.md) [`0086aadc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086aadc.md) [`009e01d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e0/009e01d4.md) [`009e0d78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e0/009e0d78.md) · 呼出先 3件 [`0086aadc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086aadc.md) [`0086ab38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086ab38.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 5件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849c68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849c68.md) [`0086ab34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ab34.md) [`009e0228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e0/009e0228.md) [`009e0dcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e0/009e0dcc.md) · 呼出先 3件 [`0086ab34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ab34.md) [`0086ab90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ab90.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086aaf8 ["INT_ADD", "register:40f0:8", ["const:86aaf8:8", "const:4:8"]]
- 0086aaf8 ["CALL", null, ["local:b0:8"]]
+ 0086ab50 ["INT_ADD", "register:40f0:8", ["const:86ab50:8", "const:4:8"]]
+ 0086ab50 ["CALL", null, ["local:b0:8"]]
- 0086ab04 ["INT_ADD", "register:40f0:8", ["const:86ab04:8", "const:4:8"]]
- 0086ab04 ["CALL", null, ["local:b0:8"]]
+ 0086ab5c ["INT_ADD", "register:40f0:8", ["const:86ab5c:8", "const:4:8"]]
+ 0086ab5c ["CALL", null, ["local:b0:8"]]
- 0086ab14 ["INT_ADD", "register:40f0:8", ["const:86ab14:8", "const:4:8"]]
- 0086ab14 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086ab6c ["INT_ADD", "register:40f0:8", ["const:86ab6c:8", "const:4:8"]]
+ 0086ab6c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-e21de3d2fb7ca78aaf08dae8681a6a50"></a>

### [`0086ab38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086ab38.md) → [`0086ab90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ab90.md) FUN_0086ab90

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0086aadc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086aadc.md) [`0086ab38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086ab38.md) [`009dfe0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009df/009dfe0c.md) [`009e891c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e8/009e891c.md) · 呼出先 3件 [`0086ab38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086ab38.md) [`0086abb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086abb0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 4件 [`0086ab34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ab34.md) [`0086ab90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ab90.md) [`009dfe60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009df/009dfe60.md) [`009e8970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8970.md) · 呼出先 3件 [`0086ab90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ab90.md) [`0086ac08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ac08.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086ab54 ["INT_ADD", "register:40f0:8", ["const:86ab54:8", "const:4:8"]]
- 0086ab54 ["CALL", null, ["local:b0:8"]]
+ 0086abac ["INT_ADD", "register:40f0:8", ["const:86abac:8", "const:4:8"]]
+ 0086abac ["CALL", null, ["local:b0:8"]]
- 0086ab60 ["INT_ADD", "register:40f0:8", ["const:86ab60:8", "const:4:8"]]
- 0086ab60 ["CALL", null, ["local:b0:8"]]
+ 0086abb8 ["INT_ADD", "register:40f0:8", ["const:86abb8:8", "const:4:8"]]
+ 0086abb8 ["CALL", null, ["local:b0:8"]]
- 0086ab70 ["INT_ADD", "register:40f0:8", ["const:86ab70:8", "const:4:8"]]
- 0086ab70 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086abc8 ["INT_ADD", "register:40f0:8", ["const:86abc8:8", "const:4:8"]]
+ 0086abc8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-4485c113c20420aed3ad9f5562e29d23"></a>

### [`0086abb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086abb0.md) → [`0086ac08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ac08.md) FUN_0086ac08

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0086ab38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086ab38.md) [`009e1278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e1/009e1278.md) [`009e238c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e2/009e238c.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`0086ab90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ab90.md) [`009e12cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e1/009e12cc.md) [`009e23e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e2/009e23e0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086ac54 ["INT_ADD", "register:40f0:8", ["const:86ac54:8", "const:4:8"]]
- 0086ac54 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086acac ["INT_ADD", "register:40f0:8", ["const:86acac:8", "const:4:8"]]
+ 0086acac ["CALL", null, ["callee:00c57f80:8"]]
- 0086aca0 ["INT_ADD", "register:40f0:8", ["const:86aca0:8", "const:4:8"]]
- 0086aca0 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086acf8 ["INT_ADD", "register:40f0:8", ["const:86acf8:8", "const:4:8"]]
+ 0086acf8 ["CALL", null, ["callee:00c57f80:8"]]
- 0086acec ["INT_ADD", "register:40f0:8", ["const:86acec:8", "const:4:8"]]
- 0086acec ["CALL", null, ["callee:00c57f80:8"]]
+ 0086ad44 ["INT_ADD", "register:40f0:8", ["const:86ad44:8", "const:4:8"]]
+ 0086ad44 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-eaa4be114aa6c14c8aafc58f2468073d"></a>

### [`0086ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086ad50.md) → [`0086ada8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ada8.md) FUN_0086ada8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00849c10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849c10.md) [`0086ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086ad50.md) [`009e037c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e0/009e037c.md) · 呼出先 2件 [`0086ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086ad50.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849c68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849c68.md) [`0086ada8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ada8.md) [`009e03d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e0/009e03d0.md) · 呼出先 2件 [`0086ada8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ada8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086ad70 ["INT_ADD", "register:40f0:8", ["const:86ad70:8", "const:4:8"]]
- 0086ad70 ["CALL", null, ["local:b0:8"]]
+ 0086adc8 ["INT_ADD", "register:40f0:8", ["const:86adc8:8", "const:4:8"]]
+ 0086adc8 ["CALL", null, ["local:b0:8"]]
- 0086ad7c ["INT_ADD", "register:40f0:8", ["const:86ad7c:8", "const:4:8"]]
- 0086ad7c ["CALL", null, ["local:b0:8"]]
+ 0086add4 ["INT_ADD", "register:40f0:8", ["const:86add4:8", "const:4:8"]]
+ 0086add4 ["CALL", null, ["local:b0:8"]]
- 0086adb4 ["INT_ADD", "register:40f0:8", ["const:86adb4:8", "const:4:8"]]
- 0086adb4 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086ae0c ["INT_ADD", "register:40f0:8", ["const:86ae0c:8", "const:4:8"]]
+ 0086ae0c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-c13c1879773f4b80ee91a3f739d24035"></a>

### [`0086aef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086aef4.md) → [`0086af4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086af4c.md) FUN_0086af4c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008536a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00853/008536a0.md) · 呼出先 2件 [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`008536f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/008536f8.md) · 呼出先 2件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086af10 ["INT_ADD", "register:40f0:8", ["const:86af10:8", "const:4:8"]]
- 0086af10 ["CALL", null, ["callee:00c57f50:8"]]
+ 0086af68 ["INT_ADD", "register:40f0:8", ["const:86af68:8", "const:4:8"]]
+ 0086af68 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-5e0817c8105a9ccb13dc0fa2878ea2bd"></a>

### [`0086b174`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086b174.md) → [`0086b1cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b1cc.md) FUN_0086b1cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008536a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00853/008536a0.md) · 呼出先 2件 [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`008536f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/008536f8.md) · 呼出先 2件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086b190 ["INT_ADD", "register:40f0:8", ["const:86b190:8", "const:4:8"]]
- 0086b190 ["CALL", null, ["callee:00c57f50:8"]]
+ 0086b1e8 ["INT_ADD", "register:40f0:8", ["const:86b1e8:8", "const:4:8"]]
+ 0086b1e8 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-006f7ecade25f35900ca43c75cd65879"></a>

### [`0086b1d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086b1d4.md) → [`0086b22c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b22c.md) FUN_0086b22c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0086b1a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086b1a4.md) · 呼出先 7件 [`0048aa50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048a/0048aa50.md) [`004986e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00498/004986e4.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`0086b1fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b1fc.md) · 呼出先 7件 [`0048aa90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048aa90.md) [`00498724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00498/00498724.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086b208 ["INT_ADD", "register:40f0:8", ["const:86b208:8", "const:4:8"]]
- 0086b208 ["CALL", null, ["callee:00c585c0:8"]]
+ 0086b260 ["INT_ADD", "register:40f0:8", ["const:86b260:8", "const:4:8"]]
+ 0086b260 ["CALL", null, ["callee:00c585c0:8"]]
- 0086b228 ["INT_ADD", "register:40f0:8", ["const:86b228:8", "const:4:8"]]
- 0086b228 ["CALL", null, ["callee:0048aa90:8"]]
+ 0086b280 ["INT_ADD", "register:40f0:8", ["const:86b280:8", "const:4:8"]]
+ 0086b280 ["CALL", null, ["callee:0048aa90:8"]]
- 0086b238 ["INT_ADD", "register:40f0:8", ["const:86b238:8", "const:4:8"]]
- 0086b238 ["CALL", null, ["callee:00c53d70:8"]]
+ 0086b290 ["INT_ADD", "register:40f0:8", ["const:86b290:8", "const:4:8"]]
+ 0086b290 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-b3a2fc59168fb4cb7a7cdb09298ef21d"></a>

### [`0086b56c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086b56c.md) → [`0086b5c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b5c4.md) FUN_0086b5c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`0049887c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00498/0049887c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`004988bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00498/004988bc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086b580 ["INT_ADD", "register:40f0:8", ["const:86b580:8", "const:4:8"]]
- 0086b580 ["CALL", null, ["callee:004988bc:8"]]
+ 0086b5d8 ["INT_ADD", "register:40f0:8", ["const:86b5d8:8", "const:4:8"]]
+ 0086b5d8 ["CALL", null, ["callee:004988bc:8"]]
~~~


<a id="compare-5355ad288f4e9b379ede74a74c6996b4"></a>

### [`0086b5a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086b5a8.md) → [`0086b600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b600.md) FUN_0086b600

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`004981d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00498/004981d0.md) [`00498804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00498/00498804.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00498210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00498/00498210.md) [`00498844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00498/00498844.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086b5bc ["INT_ADD", "register:40f0:8", ["const:86b5bc:8", "const:4:8"]]
- 0086b5bc ["CALL", null, ["callee:00498210:8"]]
+ 0086b614 ["INT_ADD", "register:40f0:8", ["const:86b614:8", "const:4:8"]]
+ 0086b614 ["CALL", null, ["callee:00498210:8"]]
~~~


<a id="compare-47c65fb1ba689e9ecb56c86542468dc5"></a>

### [`0086b5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086b5e0.md) → [`0086b638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b638.md) FUN_0086b638

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0085c14c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085c/0085c14c.md) · 呼出先 5件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0054075c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00540/0054075c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`0085c1a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085c/0085c1a4.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0054079c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/0054079c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086b624 ["INT_ADD", "register:40f0:8", ["const:86b624:8", "const:4:8"]]
- 0086b624 ["CALL", null, ["callee:0054079c:8"]]
+ 0086b67c ["INT_ADD", "register:40f0:8", ["const:86b67c:8", "const:4:8"]]
+ 0086b67c ["CALL", null, ["callee:0054079c:8"]]
- 0086b648 ["INT_ADD", "register:40f0:8", ["const:86b648:8", "const:4:8"]]
- 0086b648 ["CALL", null, ["callee:00c57f60:8"]]
+ 0086b6a0 ["INT_ADD", "register:40f0:8", ["const:86b6a0:8", "const:4:8"]]
+ 0086b6a0 ["CALL", null, ["callee:00c57f60:8"]]
- 0086b660 ["INT_ADD", "register:40f0:8", ["const:86b660:8", "const:4:8"]]
- 0086b660 ["CALL", null, ["callee:00c580d0:8"]]
+ 0086b6b8 ["INT_ADD", "register:40f0:8", ["const:86b6b8:8", "const:4:8"]]
+ 0086b6b8 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-f34294eaccbba5921a457de1ebd44a73"></a>

### [`0086b9d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086b9d0.md) → [`0086ba28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086ba28.md) FUN_0086ba28

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0085c14c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085c/0085c14c.md) [`0086c040`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c040.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`0085c1a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085c/0085c1a4.md) [`0086c098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c098.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086b9f0 ["INT_ADD", "register:40f0:8", ["const:86b9f0:8", "const:4:8"]]
- 0086b9f0 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086ba48 ["INT_ADD", "register:40f0:8", ["const:86ba48:8", "const:4:8"]]
+ 0086ba48 ["CALL", null, ["callee:00c57f80:8"]]
- 0086ba00 ["INT_ADD", "register:40f0:8", ["const:86ba00:8", "const:4:8"]]
- 0086ba00 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086ba58 ["INT_ADD", "register:40f0:8", ["const:86ba58:8", "const:4:8"]]
+ 0086ba58 ["CALL", null, ["callee:00c57f80:8"]]
- 0086ba38 ["INT_ADD", "register:40f0:8", ["const:86ba38:8", "const:4:8"]]
- 0086ba38 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086ba90 ["INT_ADD", "register:40f0:8", ["const:86ba90:8", "const:4:8"]]
+ 0086ba90 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-f41f1b75c07477ae3ba307dfecabcd5f"></a>

### [`0086bb08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bb08.md) → [`0086bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bb60.md) FUN_0086bb60

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`0084e59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0084e/0084e59c.md) [`0086bb08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bb08.md) [`00a261bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a26/00a261bc.md) · 呼出先 2件 [`0086bb08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bb08.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) [`0086bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bb60.md) [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 2件 [`0086bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bb60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086bb24 ["INT_ADD", "register:40f0:8", ["const:86bb24:8", "const:4:8"]]
- 0086bb24 ["CALL", null, ["local:b0:8"]]
+ 0086bb7c ["INT_ADD", "register:40f0:8", ["const:86bb7c:8", "const:4:8"]]
+ 0086bb7c ["CALL", null, ["local:b0:8"]]
- 0086bb30 ["INT_ADD", "register:40f0:8", ["const:86bb30:8", "const:4:8"]]
- 0086bb30 ["CALL", null, ["local:b0:8"]]
+ 0086bb88 ["INT_ADD", "register:40f0:8", ["const:86bb88:8", "const:4:8"]]
+ 0086bb88 ["CALL", null, ["local:b0:8"]]
- 0086bb3c ["INT_ADD", "register:40f0:8", ["const:86bb3c:8", "const:4:8"]]
- 0086bb3c ["CALL", null, ["callee:00c57f80:8"]]
+ 0086bb94 ["INT_ADD", "register:40f0:8", ["const:86bb94:8", "const:4:8"]]
+ 0086bb94 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-03970be9e2fd2a9c098ac68a781083e7"></a>

### [`0086bb54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bb54.md) → [`0086bbac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bbac.md) FUN_0086bbac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 7件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00849ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849ae4.md) [`0084e59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0084e/0084e59c.md) [`0086bb54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bb54.md) [`009c3350`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c3/009c3350.md) · 呼出先 2件 [`0086bb54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bb54.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 7件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849b3c.md) [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) [`0086bbac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bbac.md) [`009c33a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c3/009c33a4.md) · 呼出先 2件 [`0086bbac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bbac.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086bb74 ["INT_ADD", "register:40f0:8", ["const:86bb74:8", "const:4:8"]]
- 0086bb74 ["CALL", null, ["local:b0:8"]]
+ 0086bbcc ["INT_ADD", "register:40f0:8", ["const:86bbcc:8", "const:4:8"]]
+ 0086bbcc ["CALL", null, ["local:b0:8"]]
- 0086bb80 ["INT_ADD", "register:40f0:8", ["const:86bb80:8", "const:4:8"]]
- 0086bb80 ["CALL", null, ["local:b0:8"]]
+ 0086bbd8 ["INT_ADD", "register:40f0:8", ["const:86bbd8:8", "const:4:8"]]
+ 0086bbd8 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-e26ef31dea96d6dd3ff8905e1d7b231f"></a>

### [`0086bb98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bb98.md) → [`0086bbf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bbf0.md) FUN_0086bbf0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00849818`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849818.md) [`00851504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851504.md) [`0086bb98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bb98.md) · 呼出先 3件 [`0086bb98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bb98.md) [`0086bbf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bbf8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849870.md) [`0085155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/0085155c.md) [`0086bbf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bbf0.md) · 呼出先 3件 [`0086bbf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bbf0.md) [`0086bc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bc50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086bbb4 ["INT_ADD", "register:40f0:8", ["const:86bbb4:8", "const:4:8"]]
- 0086bbb4 ["CALL", null, ["local:b0:8"]]
+ 0086bc0c ["INT_ADD", "register:40f0:8", ["const:86bc0c:8", "const:4:8"]]
+ 0086bc0c ["CALL", null, ["local:b0:8"]]
- 0086bbc0 ["INT_ADD", "register:40f0:8", ["const:86bbc0:8", "const:4:8"]]
- 0086bbc0 ["CALL", null, ["local:b0:8"]]
+ 0086bc18 ["INT_ADD", "register:40f0:8", ["const:86bc18:8", "const:4:8"]]
+ 0086bc18 ["CALL", null, ["local:b0:8"]]
- 0086bbd8 ["INT_ADD", "register:40f0:8", ["const:86bbd8:8", "const:4:8"]]
- 0086bbd8 ["CALL", null, ["callee:0086bc50:8"]]
+ 0086bc30 ["INT_ADD", "register:40f0:8", ["const:86bc30:8", "const:4:8"]]
+ 0086bc30 ["CALL", null, ["callee:0086bc50:8"]]
~~~


<a id="compare-116f2171e8dddfc8d5a143e91623f871"></a>

### [`0086bbf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bbf8.md) → [`0086bc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bc50.md) FUN_0086bc50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0086bb98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bb98.md) [`0086bbf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bbf8.md) [`00a6a2a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a6a/00a6a2a0.md) [`00a6a660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a6a/00a6a660.md) · 呼出先 3件 [`0086bbf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bbf8.md) [`0086bc54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bc54.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 4件 [`0086bbf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bbf0.md) [`0086bc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bc50.md) [`00a6a310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6a/00a6a310.md) [`00a6a6d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6a/00a6a6d0.md) · 呼出先 3件 [`0086bc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bc50.md) [`0086bcac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bcac.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086bc14 ["INT_ADD", "register:40f0:8", ["const:86bc14:8", "const:4:8"]]
- 0086bc14 ["CALL", null, ["local:b0:8"]]
+ 0086bc6c ["INT_ADD", "register:40f0:8", ["const:86bc6c:8", "const:4:8"]]
+ 0086bc6c ["CALL", null, ["local:b0:8"]]
- 0086bc20 ["INT_ADD", "register:40f0:8", ["const:86bc20:8", "const:4:8"]]
- 0086bc20 ["CALL", null, ["local:b0:8"]]
+ 0086bc78 ["INT_ADD", "register:40f0:8", ["const:86bc78:8", "const:4:8"]]
+ 0086bc78 ["CALL", null, ["local:b0:8"]]
- 0086bc34 ["INT_ADD", "register:40f0:8", ["const:86bc34:8", "const:4:8"]]
- 0086bc34 ["CALL", null, ["callee:0086bcac:8"]]
+ 0086bc8c ["INT_ADD", "register:40f0:8", ["const:86bc8c:8", "const:4:8"]]
+ 0086bc8c ["CALL", null, ["callee:0086bcac:8"]]
~~~


<a id="compare-b1248158c70c89a649ca3b1597680c08"></a>

### [`0086bc54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bc54.md) → [`0086bcac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bcac.md) FUN_0086bcac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0086bbf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bbf8.md) [`00a6c218`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a6c/00a6c218.md) [`00a6c44c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a6c/00a6c44c.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`0086bc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bc50.md) [`00a6c288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6c/00a6c288.md) [`00a6c4bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6c/00a6c4bc.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086bc78 ["INT_ADD", "register:40f0:8", ["const:86bc78:8", "const:4:8"]]
- 0086bc78 ["CALL", null, ["callee:00c53da0:8"]]
+ 0086bcd0 ["INT_ADD", "register:40f0:8", ["const:86bcd0:8", "const:4:8"]]
+ 0086bcd0 ["CALL", null, ["callee:00c53da0:8"]]
- 0086bc8c ["COPY", "register:0:8", ["register:4040:8"]]
- 0086bc8c ["INT_ADD", "register:40f0:8", ["const:86bc8c:8", "const:4:8"]]
- 0086bc8c ["CALLIND", null, ["register:0:8"]]
+ 0086bce4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0086bce4 ["INT_ADD", "register:40f0:8", ["const:86bce4:8", "const:4:8"]]
+ 0086bce4 ["CALLIND", null, ["register:0:8"]]
- 0086bc94 ["INT_ADD", "register:40f0:8", ["const:86bc94:8", "const:4:8"]]
- 0086bc94 ["CALL", null, ["callee:00c57f50:8"]]
+ 0086bcec ["INT_ADD", "register:40f0:8", ["const:86bcec:8", "const:4:8"]]
+ 0086bcec ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-a99d9593aa611c8ede0b7446ad2344c7"></a>

### [`0086bdb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bdb8.md) → [`0086be10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086be10.md) FUN_0086be10

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 6件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00849818`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849818.md) [`00851504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851504.md) [`0086bdb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bdb8.md) [`00a69154`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a69/00a69154.md) · 呼出先 4件 [`0086bdb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bdb8.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 6件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849870.md) [`0085155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/0085155c.md) [`0086be10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086be10.md) [`00a691c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a69/00a691c4.md) · 呼出先 4件 [`0086be10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086be10.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086bdd4 ["INT_ADD", "register:40f0:8", ["const:86bdd4:8", "const:4:8"]]
- 0086bdd4 ["CALL", null, ["local:b0:8"]]
+ 0086be2c ["INT_ADD", "register:40f0:8", ["const:86be2c:8", "const:4:8"]]
+ 0086be2c ["CALL", null, ["local:b0:8"]]
- 0086bde0 ["INT_ADD", "register:40f0:8", ["const:86bde0:8", "const:4:8"]]
- 0086bde0 ["CALL", null, ["local:b0:8"]]
+ 0086be38 ["INT_ADD", "register:40f0:8", ["const:86be38:8", "const:4:8"]]
+ 0086be38 ["CALL", null, ["local:b0:8"]]
- 0086bdf4 ["INT_ADD", "register:40f0:8", ["const:86bdf4:8", "const:4:8"]]
- 0086bdf4 ["CALL", null, ["callee:00c53da0:8"]]
+ 0086be4c ["INT_ADD", "register:40f0:8", ["const:86be4c:8", "const:4:8"]]
+ 0086be4c ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-938d55966f22382bc7cf448dd157323e"></a>

### [`0086be28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086be28.md) → [`0086be80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086be80.md) FUN_0086be80

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`0084e59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0084e/0084e59c.md) [`0086be28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086be28.md) [`00a261bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a26/00a261bc.md) · 呼出先 2件 [`0086be28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086be28.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) [`0086be80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086be80.md) [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 2件 [`0086be80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086be80.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086be48 ["INT_ADD", "register:40f0:8", ["const:86be48:8", "const:4:8"]]
- 0086be48 ["CALL", null, ["local:b0:8"]]
+ 0086bea0 ["INT_ADD", "register:40f0:8", ["const:86bea0:8", "const:4:8"]]
+ 0086bea0 ["CALL", null, ["local:b0:8"]]
- 0086be54 ["INT_ADD", "register:40f0:8", ["const:86be54:8", "const:4:8"]]
- 0086be54 ["CALL", null, ["local:b0:8"]]
+ 0086beac ["INT_ADD", "register:40f0:8", ["const:86beac:8", "const:4:8"]]
+ 0086beac ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-17517ceee5f3a009015728e770e4e71e"></a>

### [`0086be6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086be6c.md) → [`0086bec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bec4.md) FUN_0086bec4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 6件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`008492d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/008492d4.md) [`0086be6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086be6c.md) [`00a75dac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a75/00a75dac.md) [`00aa2a18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa2/00aa2a18.md) · 呼出先 2件 [`0086be6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086be6c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 6件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0084932c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/0084932c.md) [`0086bec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bec4.md) [`00a75e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a75/00a75e1c.md) [`00aa2a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa2/00aa2a88.md) · 呼出先 2件 [`0086bec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bec4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086be8c ["INT_ADD", "register:40f0:8", ["const:86be8c:8", "const:4:8"]]
- 0086be8c ["CALL", null, ["local:b0:8"]]
+ 0086bee4 ["INT_ADD", "register:40f0:8", ["const:86bee4:8", "const:4:8"]]
+ 0086bee4 ["CALL", null, ["local:b0:8"]]
- 0086be98 ["INT_ADD", "register:40f0:8", ["const:86be98:8", "const:4:8"]]
- 0086be98 ["CALL", null, ["local:b0:8"]]
+ 0086bef0 ["INT_ADD", "register:40f0:8", ["const:86bef0:8", "const:4:8"]]
+ 0086bef0 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-69cbdd54e962544324e4b6ebcb55f863"></a>

### [`0086beb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086beb0.md) → [`0086bf08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bf08.md) FUN_0086bf08

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`0086beb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086beb0.md) · 呼出先 2件 [`0086beb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086beb0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0086bf08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bf08.md) · 呼出先 2件 [`0086bf08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bf08.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086becc ["INT_ADD", "register:40f0:8", ["const:86becc:8", "const:4:8"]]
- 0086becc ["CALL", null, ["local:b0:8"]]
+ 0086bf24 ["INT_ADD", "register:40f0:8", ["const:86bf24:8", "const:4:8"]]
+ 0086bf24 ["CALL", null, ["local:b0:8"]]
- 0086bed8 ["INT_ADD", "register:40f0:8", ["const:86bed8:8", "const:4:8"]]
- 0086bed8 ["CALL", null, ["local:b0:8"]]
+ 0086bf30 ["INT_ADD", "register:40f0:8", ["const:86bf30:8", "const:4:8"]]
+ 0086bf30 ["CALL", null, ["local:b0:8"]]
- 0086bee8 ["INT_ADD", "register:40f0:8", ["const:86bee8:8", "const:4:8"]]
- 0086bee8 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086bf40 ["INT_ADD", "register:40f0:8", ["const:86bf40:8", "const:4:8"]]
+ 0086bf40 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-203db205bfb20a4b0d54c2a61fc06fa2"></a>

### [`0086bf00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bf00.md) → [`0086bf58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bf58.md) FUN_0086bf58

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`0086bf00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bf00.md) [`00b1f428`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b1f/00b1f428.md) · 呼出先 2件 [`0086bf00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bf00.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0086bf58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bf58.md) [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 2件 [`0086bf58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bf58.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086bf1c ["INT_ADD", "register:40f0:8", ["const:86bf1c:8", "const:4:8"]]
- 0086bf1c ["CALL", null, ["local:b0:8"]]
+ 0086bf74 ["INT_ADD", "register:40f0:8", ["const:86bf74:8", "const:4:8"]]
+ 0086bf74 ["CALL", null, ["local:b0:8"]]
- 0086bf28 ["INT_ADD", "register:40f0:8", ["const:86bf28:8", "const:4:8"]]
- 0086bf28 ["CALL", null, ["local:b0:8"]]
+ 0086bf80 ["INT_ADD", "register:40f0:8", ["const:86bf80:8", "const:4:8"]]
+ 0086bf80 ["CALL", null, ["local:b0:8"]]
- 0086bf38 ["INT_ADD", "register:40f0:8", ["const:86bf38:8", "const:4:8"]]
- 0086bf38 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086bf90 ["INT_ADD", "register:40f0:8", ["const:86bf90:8", "const:4:8"]]
+ 0086bf90 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-5eff6454d8258421bbb3204545542802"></a>

### [`0086bf50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bf50.md) → [`0086bfa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bfa8.md) FUN_0086bfa8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`0086bf50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bf50.md) · 呼出先 3件 [`0086bf50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bf50.md) [`0086bf9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bf9c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0086bfa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bfa8.md) · 呼出先 3件 [`0086bfa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bfa8.md) [`0086bff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bff4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086bf70 ["INT_ADD", "register:40f0:8", ["const:86bf70:8", "const:4:8"]]
- 0086bf70 ["CALL", null, ["local:b0:8"]]
+ 0086bfc8 ["INT_ADD", "register:40f0:8", ["const:86bfc8:8", "const:4:8"]]
+ 0086bfc8 ["CALL", null, ["local:b0:8"]]
- 0086bf7c ["INT_ADD", "register:40f0:8", ["const:86bf7c:8", "const:4:8"]]
- 0086bf7c ["CALL", null, ["local:b0:8"]]
+ 0086bfd4 ["INT_ADD", "register:40f0:8", ["const:86bfd4:8", "const:4:8"]]
+ 0086bfd4 ["CALL", null, ["local:b0:8"]]
- 0086bf84 ["INT_ADD", "register:40f0:8", ["const:86bf84:8", "const:4:8"]]
- 0086bf84 ["CALL", null, ["callee:0086bff4:8"]]
+ 0086bfdc ["INT_ADD", "register:40f0:8", ["const:86bfdc:8", "const:4:8"]]
+ 0086bfdc ["CALL", null, ["callee:0086bff4:8"]]
~~~


<a id="compare-8e81f6c79ea146315aea4a6d38c684d9"></a>

### [`0086bf9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bf9c.md) → [`0086bff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bff4.md) FUN_0086bff4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0086bf50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bf50.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0086bfa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bfa8.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086bfe8 ["INT_ADD", "register:40f0:8", ["const:86bfe8:8", "const:4:8"]]
- 0086bfe8 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086c040 ["INT_ADD", "register:40f0:8", ["const:86c040:8", "const:4:8"]]
+ 0086c040 ["CALL", null, ["callee:00c57f80:8"]]
- 0086bff8 ["INT_ADD", "register:40f0:8", ["const:86bff8:8", "const:4:8"]]
- 0086bff8 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086c050 ["INT_ADD", "register:40f0:8", ["const:86c050:8", "const:4:8"]]
+ 0086c050 ["CALL", null, ["callee:00c57f80:8"]]
- 0086c004 ["INT_ADD", "register:40f0:8", ["const:86c004:8", "const:4:8"]]
- 0086c004 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086c05c ["INT_ADD", "register:40f0:8", ["const:86c05c:8", "const:4:8"]]
+ 0086c05c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-09eeaac08e696c956a9198416ebe06ab"></a>

### [`0086c040`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c040.md) → [`0086c098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c098.md) FUN_0086c098

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`0086c040`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c040.md) [`00b1f428`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b1f/00b1f428.md) · 呼出先 3件 [`0086b9d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086b9d0.md) [`0086c040`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c040.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0086c098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c098.md) [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 3件 [`0086ba28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086ba28.md) [`0086c098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c098.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c060 ["INT_ADD", "register:40f0:8", ["const:86c060:8", "const:4:8"]]
- 0086c060 ["CALL", null, ["local:b0:8"]]
+ 0086c0b8 ["INT_ADD", "register:40f0:8", ["const:86c0b8:8", "const:4:8"]]
+ 0086c0b8 ["CALL", null, ["local:b0:8"]]
- 0086c06c ["INT_ADD", "register:40f0:8", ["const:86c06c:8", "const:4:8"]]
- 0086c06c ["CALL", null, ["local:b0:8"]]
+ 0086c0c4 ["INT_ADD", "register:40f0:8", ["const:86c0c4:8", "const:4:8"]]
+ 0086c0c4 ["CALL", null, ["local:b0:8"]]
- 0086c074 ["INT_ADD", "register:40f0:8", ["const:86c074:8", "const:4:8"]]
- 0086c074 ["CALL", null, ["callee:0086ba28:8"]]
+ 0086c0cc ["INT_ADD", "register:40f0:8", ["const:86c0cc:8", "const:4:8"]]
+ 0086c0cc ["CALL", null, ["callee:0086ba28:8"]]
~~~


<a id="compare-5008523d82426acaaa36a304e5c769eb"></a>

### [`0086c08c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c08c.md) → [`0086c0e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c0e4.md) FUN_0086c0e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`0086c08c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c08c.md) · 呼出先 4件 [`0086c08c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c08c.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0086c0e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c0e4.md) · 呼出先 4件 [`0086c0e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c0e4.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c0ac ["INT_ADD", "register:40f0:8", ["const:86c0ac:8", "const:4:8"]]
- 0086c0ac ["CALL", null, ["local:b0:8"]]
+ 0086c104 ["INT_ADD", "register:40f0:8", ["const:86c104:8", "const:4:8"]]
+ 0086c104 ["CALL", null, ["local:b0:8"]]
- 0086c0b8 ["INT_ADD", "register:40f0:8", ["const:86c0b8:8", "const:4:8"]]
- 0086c0b8 ["CALL", null, ["local:b0:8"]]
+ 0086c110 ["INT_ADD", "register:40f0:8", ["const:86c110:8", "const:4:8"]]
+ 0086c110 ["CALL", null, ["local:b0:8"]]
- 0086c0f4 ["INT_ADD", "register:40f0:8", ["const:86c0f4:8", "const:4:8"]]
- 0086c0f4 ["CALL", null, ["callee:00c53da0:8"]]
+ 0086c14c ["INT_ADD", "register:40f0:8", ["const:86c14c:8", "const:4:8"]]
+ 0086c14c ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-ad2b54704c5e4c3966c1ebdcc8d6ea04"></a>

### [`0086c13c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c13c.md) → [`0086c194`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c194.md) FUN_0086c194

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`0084e59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0084e/0084e59c.md) [`0086c13c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c13c.md) · 呼出先 2件 [`0086c13c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c13c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) [`0086c194`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c194.md) · 呼出先 2件 [`0086c194`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c194.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c15c ["INT_ADD", "register:40f0:8", ["const:86c15c:8", "const:4:8"]]
- 0086c15c ["CALL", null, ["local:b0:8"]]
+ 0086c1b4 ["INT_ADD", "register:40f0:8", ["const:86c1b4:8", "const:4:8"]]
+ 0086c1b4 ["CALL", null, ["local:b0:8"]]
- 0086c168 ["INT_ADD", "register:40f0:8", ["const:86c168:8", "const:4:8"]]
- 0086c168 ["CALL", null, ["local:b0:8"]]
+ 0086c1c0 ["INT_ADD", "register:40f0:8", ["const:86c1c0:8", "const:4:8"]]
+ 0086c1c0 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-346819a04e16b11cb77095d5be86611a"></a>

### [`0086c180`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c180.md) → [`0086c1d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c1d8.md) FUN_0086c1d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`0084e59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0084e/0084e59c.md) [`0086c180`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c180.md) · 呼出先 2件 [`0086c180`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c180.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) [`0086c1d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c1d8.md) · 呼出先 2件 [`0086c1d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c1d8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c19c ["INT_ADD", "register:40f0:8", ["const:86c19c:8", "const:4:8"]]
- 0086c19c ["CALL", null, ["local:b0:8"]]
+ 0086c1f4 ["INT_ADD", "register:40f0:8", ["const:86c1f4:8", "const:4:8"]]
+ 0086c1f4 ["CALL", null, ["local:b0:8"]]
- 0086c1a8 ["INT_ADD", "register:40f0:8", ["const:86c1a8:8", "const:4:8"]]
- 0086c1a8 ["CALL", null, ["local:b0:8"]]
+ 0086c200 ["INT_ADD", "register:40f0:8", ["const:86c200:8", "const:4:8"]]
+ 0086c200 ["CALL", null, ["local:b0:8"]]
- 0086c1b8 ["INT_ADD", "register:40f0:8", ["const:86c1b8:8", "const:4:8"]]
- 0086c1b8 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086c210 ["INT_ADD", "register:40f0:8", ["const:86c210:8", "const:4:8"]]
+ 0086c210 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-4eef1fcd85e6527d9a6520e32c2da4f2"></a>

### [`0086c1d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c1d0.md) → [`0086c228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c228.md) FUN_0086c228

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`0086155c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00861/0086155c.md) [`0086c1d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c1d0.md) · 呼出先 2件 [`0086c1d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c1d0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`008615b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00861/008615b4.md) [`0086c228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c228.md) · 呼出先 2件 [`0086c228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c228.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c1f0 ["INT_ADD", "register:40f0:8", ["const:86c1f0:8", "const:4:8"]]
- 0086c1f0 ["CALL", null, ["local:b0:8"]]
+ 0086c248 ["INT_ADD", "register:40f0:8", ["const:86c248:8", "const:4:8"]]
+ 0086c248 ["CALL", null, ["local:b0:8"]]
- 0086c1fc ["INT_ADD", "register:40f0:8", ["const:86c1fc:8", "const:4:8"]]
- 0086c1fc ["CALL", null, ["local:b0:8"]]
+ 0086c254 ["INT_ADD", "register:40f0:8", ["const:86c254:8", "const:4:8"]]
+ 0086c254 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-19c646c5f775115dd48f2feae9db13c6"></a>

### [`0086c214`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c214.md) → [`0086c26c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c26c.md) FUN_0086c26c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`0086c214`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c214.md) [`00b132fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b13/00b132fc.md) · 呼出先 2件 [`0086c214`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c214.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0086c26c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c26c.md) [`00b13398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b13/00b13398.md) · 呼出先 2件 [`0086c26c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c26c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c230 ["INT_ADD", "register:40f0:8", ["const:86c230:8", "const:4:8"]]
- 0086c230 ["CALL", null, ["local:b0:8"]]
+ 0086c288 ["INT_ADD", "register:40f0:8", ["const:86c288:8", "const:4:8"]]
+ 0086c288 ["CALL", null, ["local:b0:8"]]
- 0086c23c ["INT_ADD", "register:40f0:8", ["const:86c23c:8", "const:4:8"]]
- 0086c23c ["CALL", null, ["local:b0:8"]]
+ 0086c294 ["INT_ADD", "register:40f0:8", ["const:86c294:8", "const:4:8"]]
+ 0086c294 ["CALL", null, ["local:b0:8"]]
- 0086c24c ["INT_ADD", "register:40f0:8", ["const:86c24c:8", "const:4:8"]]
- 0086c24c ["CALL", null, ["callee:00c57f80:8"]]
+ 0086c2a4 ["INT_ADD", "register:40f0:8", ["const:86c2a4:8", "const:4:8"]]
+ 0086c2a4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-8a6c015593c4a51a17ed44284a6f18ec"></a>

### [`0086c264`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c264.md) → [`0086c2bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c2bc.md) FUN_0086c2bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`0084e59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0084e/0084e59c.md) [`008609ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00860/008609ec.md) [`0086c264`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c264.md) [`00a06d9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a06d9c.md) · 呼出先 3件 [`00676a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/00676a60.md) [`0086c264`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c264.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 5件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) [`00860a44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00860/00860a44.md) [`0086c2bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c2bc.md) [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) · 呼出先 3件 [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`0086c2bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c2bc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c284 ["INT_ADD", "register:40f0:8", ["const:86c284:8", "const:4:8"]]
- 0086c284 ["CALL", null, ["local:b0:8"]]
+ 0086c2dc ["INT_ADD", "register:40f0:8", ["const:86c2dc:8", "const:4:8"]]
+ 0086c2dc ["CALL", null, ["local:b0:8"]]
- 0086c290 ["INT_ADD", "register:40f0:8", ["const:86c290:8", "const:4:8"]]
- 0086c290 ["CALL", null, ["local:b0:8"]]
+ 0086c2e8 ["INT_ADD", "register:40f0:8", ["const:86c2e8:8", "const:4:8"]]
+ 0086c2e8 ["CALL", null, ["local:b0:8"]]
- 0086c29c ["INT_ADD", "register:40f0:8", ["const:86c29c:8", "const:4:8"]]
- 0086c29c ["CALL", null, ["callee:00676aa0:8"]]
+ 0086c2f4 ["INT_ADD", "register:40f0:8", ["const:86c2f4:8", "const:4:8"]]
+ 0086c2f4 ["CALL", null, ["callee:00676aa0:8"]]
~~~


<a id="compare-f97eda9b59aa9799295c99474450fb16"></a>

### [`0086c2b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c2b4.md) → [`0086c30c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c30c.md) FUN_0086c30c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 7件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`008507d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00850/008507d8.md) [`0086c2b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c2b4.md) [`0086c2f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c2f8.md) [`00a261bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a26/00a261bc.md) · 呼出先 2件 [`0086c2b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c2b4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 7件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00850830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00850/00850830.md) [`0086c30c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c30c.md) [`0086c350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c350.md) [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 2件 [`0086c30c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c30c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c2d4 ["INT_ADD", "register:40f0:8", ["const:86c2d4:8", "const:4:8"]]
- 0086c2d4 ["CALL", null, ["local:b0:8"]]
+ 0086c32c ["INT_ADD", "register:40f0:8", ["const:86c32c:8", "const:4:8"]]
+ 0086c32c ["CALL", null, ["local:b0:8"]]
- 0086c2e0 ["INT_ADD", "register:40f0:8", ["const:86c2e0:8", "const:4:8"]]
- 0086c2e0 ["CALL", null, ["local:b0:8"]]
+ 0086c338 ["INT_ADD", "register:40f0:8", ["const:86c338:8", "const:4:8"]]
+ 0086c338 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-558a0791706423078b098e25b4bd692e"></a>

### [`0086c2f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c2f8.md) → [`0086c350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c350.md) FUN_0086c350

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`008507d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00850/008507d8.md) [`0086c2f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c2f8.md) [`00a261bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a26/00a261bc.md) · 呼出先 3件 [`0086c2b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c2b4.md) [`0086c2f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c2f8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00850830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00850/00850830.md) [`0086c350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c350.md) [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 3件 [`0086c30c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c30c.md) [`0086c350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c350.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c318 ["INT_ADD", "register:40f0:8", ["const:86c318:8", "const:4:8"]]
- 0086c318 ["CALL", null, ["local:b0:8"]]
+ 0086c370 ["INT_ADD", "register:40f0:8", ["const:86c370:8", "const:4:8"]]
+ 0086c370 ["CALL", null, ["local:b0:8"]]
- 0086c324 ["INT_ADD", "register:40f0:8", ["const:86c324:8", "const:4:8"]]
- 0086c324 ["CALL", null, ["local:b0:8"]]
+ 0086c37c ["INT_ADD", "register:40f0:8", ["const:86c37c:8", "const:4:8"]]
+ 0086c37c ["CALL", null, ["local:b0:8"]]
- 0086c330 ["INT_ADD", "register:40f0:8", ["const:86c330:8", "const:4:8"]]
- 0086c330 ["CALL", null, ["callee:0086c30c:8"]]
+ 0086c388 ["INT_ADD", "register:40f0:8", ["const:86c388:8", "const:4:8"]]
+ 0086c388 ["CALL", null, ["callee:0086c30c:8"]]
~~~


<a id="compare-ce6a25f7e83a9189b25789d456dca6a9"></a>

### [`0086c348`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c348.md) → [`0086c3a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c3a0.md) FUN_0086c3a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`0086c348`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c348.md) · 呼出先 2件 [`0086c348`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c348.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0086c3a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c3a0.md) · 呼出先 2件 [`0086c3a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c3a0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c368 ["INT_ADD", "register:40f0:8", ["const:86c368:8", "const:4:8"]]
- 0086c368 ["CALL", null, ["local:b0:8"]]
+ 0086c3c0 ["INT_ADD", "register:40f0:8", ["const:86c3c0:8", "const:4:8"]]
+ 0086c3c0 ["CALL", null, ["local:b0:8"]]
- 0086c374 ["INT_ADD", "register:40f0:8", ["const:86c374:8", "const:4:8"]]
- 0086c374 ["CALL", null, ["local:b0:8"]]
+ 0086c3cc ["INT_ADD", "register:40f0:8", ["const:86c3cc:8", "const:4:8"]]
+ 0086c3cc ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-dfe519418dee0c5f3fc59d7189b0eb65"></a>

### [`0086c38c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c38c.md) → [`0086c3e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c3e4.md) FUN_0086c3e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`0086c38c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c38c.md) · 呼出先 2件 [`0086c38c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c38c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0086c3e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c3e4.md) · 呼出先 2件 [`0086c3e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c3e4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c3ac ["INT_ADD", "register:40f0:8", ["const:86c3ac:8", "const:4:8"]]
- 0086c3ac ["CALL", null, ["local:b0:8"]]
+ 0086c404 ["INT_ADD", "register:40f0:8", ["const:86c404:8", "const:4:8"]]
+ 0086c404 ["CALL", null, ["local:b0:8"]]
- 0086c3b8 ["INT_ADD", "register:40f0:8", ["const:86c3b8:8", "const:4:8"]]
- 0086c3b8 ["CALL", null, ["local:b0:8"]]
+ 0086c410 ["INT_ADD", "register:40f0:8", ["const:86c410:8", "const:4:8"]]
+ 0086c410 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-f8d78298032809b43437001c33e9d291"></a>

### [`0086c3d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c3d0.md) → [`0086c428`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c428.md) FUN_0086c428

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`0086c3d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c3d0.md) [`00a261bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a26/00a261bc.md) · 呼出先 3件 [`0086c3d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c3d0.md) [`0086c420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c420.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0086c428`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c428.md) [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 3件 [`0086c428`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c428.md) [`0086c478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c478.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c3f0 ["INT_ADD", "register:40f0:8", ["const:86c3f0:8", "const:4:8"]]
- 0086c3f0 ["CALL", null, ["local:b0:8"]]
+ 0086c448 ["INT_ADD", "register:40f0:8", ["const:86c448:8", "const:4:8"]]
+ 0086c448 ["CALL", null, ["local:b0:8"]]
- 0086c3fc ["INT_ADD", "register:40f0:8", ["const:86c3fc:8", "const:4:8"]]
- 0086c3fc ["CALL", null, ["local:b0:8"]]
+ 0086c454 ["INT_ADD", "register:40f0:8", ["const:86c454:8", "const:4:8"]]
+ 0086c454 ["CALL", null, ["local:b0:8"]]
- 0086c408 ["INT_ADD", "register:40f0:8", ["const:86c408:8", "const:4:8"]]
- 0086c408 ["CALL", null, ["callee:0086c478:8"]]
+ 0086c460 ["INT_ADD", "register:40f0:8", ["const:86c460:8", "const:4:8"]]
+ 0086c460 ["CALL", null, ["callee:0086c478:8"]]
~~~


<a id="compare-b09bfd56b756c42a2fffe108e5019d0d"></a>

### [`0086c420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c420.md) → [`0086c478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c478.md) FUN_0086c478

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0086c3d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c3d0.md) [`0086c420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c420.md) [`00a2b2e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2b/00a2b2e8.md) · 呼出先 2件 [`0086c420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c420.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`0086c428`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c428.md) [`0086c478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c478.md) [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 2件 [`0086c478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c478.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c440 ["INT_ADD", "register:40f0:8", ["const:86c440:8", "const:4:8"]]
- 0086c440 ["CALL", null, ["local:b0:8"]]
+ 0086c498 ["INT_ADD", "register:40f0:8", ["const:86c498:8", "const:4:8"]]
+ 0086c498 ["CALL", null, ["local:b0:8"]]
- 0086c44c ["INT_ADD", "register:40f0:8", ["const:86c44c:8", "const:4:8"]]
- 0086c44c ["CALL", null, ["local:b0:8"]]
+ 0086c4a4 ["INT_ADD", "register:40f0:8", ["const:86c4a4:8", "const:4:8"]]
+ 0086c4a4 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-fcc79d465807a1d1432887f4dfa324f2"></a>

### [`0086c464`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c464.md) → [`0086c4bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c4bc.md) FUN_0086c4bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c4c4 ["INT_ADD", "register:40f0:8", ["const:86c4c4:8", "const:4:8"]]
- 0086c4c4 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086c51c ["INT_ADD", "register:40f0:8", ["const:86c51c:8", "const:4:8"]]
+ 0086c51c ["CALL", null, ["callee:00c57f80:8"]]
- 0086c4d4 ["INT_ADD", "register:40f0:8", ["const:86c4d4:8", "const:4:8"]]
- 0086c4d4 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086c52c ["INT_ADD", "register:40f0:8", ["const:86c52c:8", "const:4:8"]]
+ 0086c52c ["CALL", null, ["callee:00c57f80:8"]]
- 0086c4e4 ["INT_ADD", "register:40f0:8", ["const:86c4e4:8", "const:4:8"]]
- 0086c4e4 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086c53c ["INT_ADD", "register:40f0:8", ["const:86c53c:8", "const:4:8"]]
+ 0086c53c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-da54b9845c939c7640906a756961c508"></a>

### [`0086c518`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c518.md) → [`0086c570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c570.md) FUN_0086c570

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`0086c518`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c518.md) · 呼出先 2件 [`0086c518`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c518.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0086c570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c570.md) · 呼出先 2件 [`0086c570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c570.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086c534 ["INT_ADD", "register:40f0:8", ["const:86c534:8", "const:4:8"]]
- 0086c534 ["CALL", null, ["local:b0:8"]]
+ 0086c58c ["INT_ADD", "register:40f0:8", ["const:86c58c:8", "const:4:8"]]
+ 0086c58c ["CALL", null, ["local:b0:8"]]
- 0086c540 ["INT_ADD", "register:40f0:8", ["const:86c540:8", "const:4:8"]]
- 0086c540 ["CALL", null, ["local:b0:8"]]
+ 0086c598 ["INT_ADD", "register:40f0:8", ["const:86c598:8", "const:4:8"]]
+ 0086c598 ["CALL", null, ["local:b0:8"]]
- 0086c560 ["INT_ADD", "register:40f0:8", ["const:86c560:8", "const:4:8"]]
- 0086c560 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086c5b8 ["INT_ADD", "register:40f0:8", ["const:86c5b8:8", "const:4:8"]]
+ 0086c5b8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-4d4f99163dd03c009678c504b961e018"></a>

### [`0086ddd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086ddd4.md) → [`0086de2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086de2c.md) FUN_0086de2c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0086d71c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086d71c.md) · 呼出先 2件 [`0046479c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00464/0046479c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0086d774`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d774.md) · 呼出先 2件 [`004647dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00464/004647dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086ddf0 ["INT_ADD", "register:40f0:8", ["const:86ddf0:8", "const:4:8"]]
- 0086ddf0 ["CALL", null, ["callee:004647dc:8"]]
+ 0086de48 ["INT_ADD", "register:40f0:8", ["const:86de48:8", "const:4:8"]]
+ 0086de48 ["CALL", null, ["callee:004647dc:8"]]
~~~


<a id="compare-f94cf68d160f190338fdcc4d91a22dd4"></a>

### [`00870cbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00870/00870cbc.md) → [`00870d14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870d14.md) FUN_00870d14

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0085d4f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085d/0085d4f4.md) [`00870cbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00870/00870cbc.md) [`00870fbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00870/00870fbc.md) · 呼出先 4件 [`00870cbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00870/00870cbc.md) [`00870fbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00870/00870fbc.md) [`00871254`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00871/00871254.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 3件 [`0085d54c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085d/0085d54c.md) [`00870d14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870d14.md) [`00871014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/00871014.md) · 呼出先 4件 [`00870d14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870d14.md) [`00871014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/00871014.md) [`008712ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/008712ac.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00870d40 ["COPY", "register:0:8", ["register:4040:8"]]
- 00870d40 ["INT_ADD", "register:40f0:8", ["const:870d40:8", "const:4:8"]]
- 00870d40 ["CALLIND", null, ["register:0:8"]]
+ 00870d98 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00870d98 ["INT_ADD", "register:40f0:8", ["const:870d98:8", "const:4:8"]]
+ 00870d98 ["CALLIND", null, ["register:0:8"]]
- 00870dc8 ["COPY", "register:0:8", ["register:4048:8"]]
- 00870dc8 ["INT_ADD", "register:40f0:8", ["const:870dc8:8", "const:4:8"]]
- 00870dc8 ["CALLIND", null, ["register:0:8"]]
+ 00870e20 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00870e20 ["INT_ADD", "register:40f0:8", ["const:870e20:8", "const:4:8"]]
+ 00870e20 ["CALLIND", null, ["register:0:8"]]
- 00870e0c ["COPY", "register:0:8", ["register:4040:8"]]
- 00870e0c ["INT_ADD", "register:40f0:8", ["const:870e0c:8", "const:4:8"]]
- 00870e0c ["CALLIND", null, ["register:0:8"]]
+ 00870e64 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00870e64 ["INT_ADD", "register:40f0:8", ["const:870e64:8", "const:4:8"]]
+ 00870e64 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-4bd8a0ac1187676e341acd919356c69c"></a>

### [`00870fbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00870/00870fbc.md) → [`00871014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/00871014.md) FUN_00871014

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00870cbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00870/00870cbc.md) · 呼出先 1件 [`00870cbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00870/00870cbc.md)
- 新版 呼出元 1件 [`00870d14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870d14.md) · 呼出先 1件 [`00870d14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870d14.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00871020 ["COPY", "register:0:8", ["register:4040:8"]]
- 00871020 ["INT_ADD", "register:40f0:8", ["const:871020:8", "const:4:8"]]
- 00871020 ["CALLIND", null, ["register:0:8"]]
+ 00871078 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00871078 ["INT_ADD", "register:40f0:8", ["const:871078:8", "const:4:8"]]
+ 00871078 ["CALLIND", null, ["register:0:8"]]
- 008710ac ["COPY", "register:0:8", ["register:4040:8"]]
- 008710ac ["INT_ADD", "register:40f0:8", ["const:8710ac:8", "const:4:8"]]
- 008710ac ["CALLIND", null, ["register:0:8"]]
+ 00871104 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00871104 ["INT_ADD", "register:40f0:8", ["const:871104:8", "const:4:8"]]
+ 00871104 ["CALLIND", null, ["register:0:8"]]
- 008710ec ["COPY", "register:0:8", ["register:4040:8"]]
- 008710ec ["INT_ADD", "register:40f0:8", ["const:8710ec:8", "const:4:8"]]
- 008710ec ["CALLIND", null, ["register:0:8"]]
+ 00871144 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00871144 ["INT_ADD", "register:40f0:8", ["const:871144:8", "const:4:8"]]
+ 00871144 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b7333e1bc8d41f40c67142af332d6041"></a>

### [`00871254`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00871/00871254.md) → [`008712ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/008712ac.md) FUN_008712ac

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00870cbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00870/00870cbc.md) [`00871254`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00871/00871254.md) · 呼出先 4件 [`00871254`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00871/00871254.md) [`0087170c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00871/0087170c.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 2件 [`00870d14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870d14.md) [`008712ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/008712ac.md) · 呼出先 4件 [`008712ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/008712ac.md) [`00871764`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/00871764.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008712d4 ["COPY", "register:0:8", ["register:4040:8"]]
- 008712d4 ["INT_ADD", "register:40f0:8", ["const:8712d4:8", "const:4:8"]]
- 008712d4 ["CALLIND", null, ["register:0:8"]]
+ 0087132c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087132c ["INT_ADD", "register:40f0:8", ["const:87132c:8", "const:4:8"]]
+ 0087132c ["CALLIND", null, ["register:0:8"]]
- 00871360 ["COPY", "register:0:8", ["register:4040:8"]]
- 00871360 ["INT_ADD", "register:40f0:8", ["const:871360:8", "const:4:8"]]
- 00871360 ["CALLIND", null, ["register:0:8"]]
+ 008713b8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008713b8 ["INT_ADD", "register:40f0:8", ["const:8713b8:8", "const:4:8"]]
+ 008713b8 ["CALLIND", null, ["register:0:8"]]
- 0087140c ["COPY", "register:0:8", ["register:40c8:8"]]
- 0087140c ["INT_ADD", "register:40f0:8", ["const:87140c:8", "const:4:8"]]
- 0087140c ["CALLIND", null, ["register:0:8"]]
+ 00871464 ["COPY", "register:0:8", ["register:40c8:8"]]
+ 00871464 ["INT_ADD", "register:40f0:8", ["const:871464:8", "const:4:8"]]
+ 00871464 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-84b74893643bf130020c60b2fc92eff6"></a>

### [`0087170c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00871/0087170c.md) → [`00871764`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/00871764.md) FUN_00871764

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00871254`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00871/00871254.md) · 呼出先 2件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 1件 [`008712ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/008712ac.md) · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008717f0 ["INT_ADD", "register:40f0:8", ["const:8717f0:8", "const:4:8"]]
- 008717f0 ["CALL", null, ["callee:00c58010:8"]]
+ 00871848 ["INT_ADD", "register:40f0:8", ["const:871848:8", "const:4:8"]]
+ 00871848 ["CALL", null, ["callee:00c58010:8"]]
- 00871848 ["INT_ADD", "register:40f0:8", ["const:871848:8", "const:4:8"]]
- 00871848 ["CALL", null, ["callee:00c58010:8"]]
+ 008718a0 ["INT_ADD", "register:40f0:8", ["const:8718a0:8", "const:4:8"]]
+ 008718a0 ["CALL", null, ["callee:00c58010:8"]]
- 0087192c ["INT_ADD", "register:40f0:8", ["const:87192c:8", "const:4:8"]]
- 0087192c ["CALL", null, ["callee:00c57fb0:8"]]
+ 00871984 ["INT_ADD", "register:40f0:8", ["const:871984:8", "const:4:8"]]
+ 00871984 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-6fd3199c8bc92cd69e75a88edc478e40"></a>

### [`00871bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00871/00871bb8.md) → [`00871c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/00871c10.md) FUN_00871c10

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`0086155c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00861/0086155c.md) [`008c5208`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c5/008c5208.md) [`008fc5f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fc/008fc5f0.md) [`00a06d9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a06d9c.md) [`00a3aac8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3a/00a3aac8.md) · 呼出先 3件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 5件 [`008615b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00861/008615b4.md) [`008c525c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c525c.md) [`008fc644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fc/008fc644.md) [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) [`00a3ab1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3a/00a3ab1c.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00871cf8 ["INT_ADD", "register:40f0:8", ["const:871cf8:8", "const:4:8"]]
- 00871cf8 ["CALL", null, ["callee:0043bbe4:8"]]
+ 00871d50 ["INT_ADD", "register:40f0:8", ["const:871d50:8", "const:4:8"]]
+ 00871d50 ["CALL", null, ["callee:0043bbe4:8"]]
- 00871db4 ["INT_ADD", "register:40f0:8", ["const:871db4:8", "const:4:8"]]
- 00871db4 ["CALL", null, ["callee:005c17dc:8"]]
+ 00871e0c ["INT_ADD", "register:40f0:8", ["const:871e0c:8", "const:4:8"]]
+ 00871e0c ["CALL", null, ["callee:005c17dc:8"]]
- 00871dd8 ["INT_ADD", "register:40f0:8", ["const:871dd8:8", "const:4:8"]]
- 00871dd8 ["CALL", null, ["callee:005c17dc:8"]]
+ 00871e30 ["INT_ADD", "register:40f0:8", ["const:871e30:8", "const:4:8"]]
+ 00871e30 ["CALL", null, ["callee:005c17dc:8"]]
~~~


<a id="compare-a6d52af49e06e04bacad49fa788f3a2a"></a>

### [`00871fec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00871/00871fec.md) → [`00872044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/00872044.md) FUN_00872044

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00865110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00865/00865110.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00865168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865168.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087200c ["INT_ADD", "register:40f0:8", ["const:87200c:8", "const:4:8"]]
- 0087200c ["CALL", null, ["callee:00c57f80:8"]]
+ 00872064 ["INT_ADD", "register:40f0:8", ["const:872064:8", "const:4:8"]]
+ 00872064 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-54ccabd3875d7eae6167aa9ebdfe0794"></a>

### [`0087221c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00872/0087221c.md) → [`00872274`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/00872274.md) FUN_00872274

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00865110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00865/00865110.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00865168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865168.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087223c ["INT_ADD", "register:40f0:8", ["const:87223c:8", "const:4:8"]]
- 0087223c ["CALL", null, ["callee:00c57f80:8"]]
+ 00872294 ["INT_ADD", "register:40f0:8", ["const:872294:8", "const:4:8"]]
+ 00872294 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-62c74bd60df6e7d38306797033769971"></a>

### [`008729ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00872/008729ec.md) → [`00872a44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/00872a44.md) FUN_00872a44

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`008725a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00872/008725a0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`008725f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/008725f8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008729fc ["INT_ADD", "register:40f0:8", ["const:8729fc:8", "const:4:8"]]
- 008729fc ["CALL", null, ["callee:008725f8:8"]]
+ 00872a54 ["INT_ADD", "register:40f0:8", ["const:872a54:8", "const:4:8"]]
+ 00872a54 ["CALL", null, ["callee:008725f8:8"]]
~~~


<a id="compare-135e9cdde6f2f10ac7ffba5c9bc4eea3"></a>

### [`0087438c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/0087438c.md) → [`008743e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/008743e4.md) FUN_008743e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008743a8 ["INT_ADD", "register:40f0:8", ["const:8743a8:8", "const:4:8"]]
- 008743a8 ["CALL", null, ["callee:00c53da0:8"]]
+ 00874400 ["INT_ADD", "register:40f0:8", ["const:874400:8", "const:4:8"]]
+ 00874400 ["CALL", null, ["callee:00c53da0:8"]]
- 008743c8 ["COPY", "register:0:8", ["register:4040:8"]]
- 008743c8 ["INT_ADD", "register:40f0:8", ["const:8743c8:8", "const:4:8"]]
- 008743c8 ["CALLIND", null, ["register:0:8"]]
+ 00874420 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00874420 ["INT_ADD", "register:40f0:8", ["const:874420:8", "const:4:8"]]
+ 00874420 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2a33729f6c0f651cc073ac9fc257223c"></a>

### [`008743dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/008743dc.md) → [`00874434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874434.md) FUN_00874434

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008743f8 ["INT_ADD", "register:40f0:8", ["const:8743f8:8", "const:4:8"]]
- 008743f8 ["CALL", null, ["callee:00c53da0:8"]]
+ 00874450 ["INT_ADD", "register:40f0:8", ["const:874450:8", "const:4:8"]]
+ 00874450 ["CALL", null, ["callee:00c53da0:8"]]
- 00874418 ["COPY", "register:0:8", ["register:4040:8"]]
- 00874418 ["INT_ADD", "register:40f0:8", ["const:874418:8", "const:4:8"]]
- 00874418 ["CALLIND", null, ["register:0:8"]]
+ 00874470 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00874470 ["INT_ADD", "register:40f0:8", ["const:874470:8", "const:4:8"]]
+ 00874470 ["CALLIND", null, ["register:0:8"]]
~~~


