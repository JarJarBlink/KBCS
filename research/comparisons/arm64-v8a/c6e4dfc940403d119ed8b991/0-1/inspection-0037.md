# v16.0.1 → v16.0.2 · 要調査の変更候補 (37)

[一覧の目次](README.md)

<a id="compare-596f7b4f149d4142d425ed23eab5256f"></a>

### [`00afc1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afc1a0.md) → [`00afc23c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc23c.md) FUN_00afc23c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afc1b4 ["INT_ADD", "register:40f0:8", ["const:afc1b4:8", "const:4:8"]]
- 00afc1b4 ["CALL", null, ["callee:00851550:8"]]
+ 00afc250 ["INT_ADD", "register:40f0:8", ["const:afc250:8", "const:4:8"]]
+ 00afc250 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-d880e7adccd95169399fb88ef272a1f5"></a>

### [`00afc3a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afc3a0.md) → [`00afc43c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc43c.md) FUN_00afc43c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`00716b80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716b80.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00716bd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716bd8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afc3b4 ["INT_ADD", "register:40f0:8", ["const:afc3b4:8", "const:4:8"]]
- 00afc3b4 ["CALL", null, ["callee:00851550:8"]]
+ 00afc450 ["INT_ADD", "register:40f0:8", ["const:afc450:8", "const:4:8"]]
+ 00afc450 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-a1cdc6c49bd8447399a3fb722566a53e"></a>

### [`00afc5c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afc5c8.md) → [`00afc664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc664.md) FUN_00afc664

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afc5dc ["INT_ADD", "register:40f0:8", ["const:afc5dc:8", "const:4:8"]]
- 00afc5dc ["CALL", null, ["callee:00851550:8"]]
+ 00afc678 ["INT_ADD", "register:40f0:8", ["const:afc678:8", "const:4:8"]]
+ 00afc678 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-416c7eb7cadd7301ff248f83724779af"></a>

### [`00afc610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afc610.md) → [`00afc6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc6ac.md) FUN_00afc6ac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 6件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`0070ea5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070ea5c.md) [`007119f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) [`00715500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00715/00715500.md) [`00716d90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 6件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afc62c ["INT_ADD", "register:40f0:8", ["const:afc62c:8", "const:4:8"]]
- 00afc62c ["CALL", null, ["callee:00851550:8"]]
+ 00afc6c8 ["INT_ADD", "register:40f0:8", ["const:afc6c8:8", "const:4:8"]]
+ 00afc6c8 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-73ad382df741a67b508d59819dcc5772"></a>

### [`00afc81c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afc81c.md) → [`00afc8b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc8b8.md) FUN_00afc8b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afc830 ["INT_ADD", "register:40f0:8", ["const:afc830:8", "const:4:8"]]
- 00afc830 ["CALL", null, ["callee:00851550:8"]]
+ 00afc8cc ["INT_ADD", "register:40f0:8", ["const:afc8cc:8", "const:4:8"]]
+ 00afc8cc ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-d5f19f533448f8f75096074aadaaf906"></a>

### [`00afc864`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afc864.md) → [`00afc900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afc900.md) FUN_00afc900

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`007119f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) [`00715500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00715/00715500.md) [`00716d90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 5件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afc880 ["INT_ADD", "register:40f0:8", ["const:afc880:8", "const:4:8"]]
- 00afc880 ["CALL", null, ["callee:00851550:8"]]
+ 00afc91c ["INT_ADD", "register:40f0:8", ["const:afc91c:8", "const:4:8"]]
+ 00afc91c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-9743d769ccda63f30ff7d802941f27ef"></a>

### [`00afccf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afccf4.md) → [`00afcd90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afcd90.md) FUN_00afcd90

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afcd08 ["INT_ADD", "register:40f0:8", ["const:afcd08:8", "const:4:8"]]
- 00afcd08 ["CALL", null, ["callee:00851550:8"]]
+ 00afcda4 ["INT_ADD", "register:40f0:8", ["const:afcda4:8", "const:4:8"]]
+ 00afcda4 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-d47211f6b6c8683d1eaa051612a4d3e0"></a>

### [`00afcd3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afcd3c.md) → [`00afcdd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afcdd8.md) FUN_00afcdd8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`0070ea5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070ea5c.md) [`00715500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00715/00715500.md) [`00716d90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 5件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afcd58 ["INT_ADD", "register:40f0:8", ["const:afcd58:8", "const:4:8"]]
- 00afcd58 ["CALL", null, ["callee:00851550:8"]]
+ 00afcdf4 ["INT_ADD", "register:40f0:8", ["const:afcdf4:8", "const:4:8"]]
+ 00afcdf4 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-e04106c47ef1dbe6719d61a02fcfb87d"></a>

### [`00afcd88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afcd88.md) → [`00afce24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afce24.md) FUN_00afce24

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`005f2d68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f2/005f2d68.md) [`00707ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/00707ee0.md) [`007119f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`005f2da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2da8.md) [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afcd9c ["INT_ADD", "register:40f0:8", ["const:afcd9c:8", "const:4:8"]]
- 00afcd9c ["CALL", null, ["callee:00851550:8"]]
+ 00afce38 ["INT_ADD", "register:40f0:8", ["const:afce38:8", "const:4:8"]]
+ 00afce38 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-0b2f4f11694a649ef220892b5852491a"></a>

### [`00afcdc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afcdc8.md) → [`00afce64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afce64.md) FUN_00afce64

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007119f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afcde4 ["INT_ADD", "register:40f0:8", ["const:afcde4:8", "const:4:8"]]
- 00afcde4 ["CALL", null, ["callee:00851550:8"]]
+ 00afce80 ["INT_ADD", "register:40f0:8", ["const:afce80:8", "const:4:8"]]
+ 00afce80 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-de97b1cf44a23c6e1e4ec3bd3414a34e"></a>

### [`00afce14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afce14.md) → [`00afceb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afceb0.md) FUN_00afceb0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005f2d68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005f2/005f2d68.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`005f2da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f2/005f2da8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afce30 ["INT_ADD", "register:40f0:8", ["const:afce30:8", "const:4:8"]]
- 00afce30 ["CALL", null, ["callee:00851550:8"]]
+ 00afcecc ["INT_ADD", "register:40f0:8", ["const:afcecc:8", "const:4:8"]]
+ 00afcecc ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-f6d17fad050a84c228129029255dee3e"></a>

### [`00afce68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afce68.md) → [`00afcf04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afcf04.md) FUN_00afcf04

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afce7c ["INT_ADD", "register:40f0:8", ["const:afce7c:8", "const:4:8"]]
- 00afce7c ["CALL", null, ["callee:00851550:8"]]
+ 00afcf18 ["INT_ADD", "register:40f0:8", ["const:afcf18:8", "const:4:8"]]
+ 00afcf18 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-69b5ceba34329ff2fce26d7da1293a20"></a>

### [`00afcea8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afcea8.md) → [`00afcf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afcf44.md) FUN_00afcf44

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`00715500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00715/00715500.md) [`00716d90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 4件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afcec4 ["INT_ADD", "register:40f0:8", ["const:afcec4:8", "const:4:8"]]
- 00afcec4 ["CALL", null, ["callee:00851550:8"]]
+ 00afcf60 ["INT_ADD", "register:40f0:8", ["const:afcf60:8", "const:4:8"]]
+ 00afcf60 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-95346d9e288c46f77f8b3d39a9fddc8a"></a>

### [`00afcef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afcef4.md) → [`00afcf90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afcf90.md) FUN_00afcf90

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007102d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afcf10 ["INT_ADD", "register:40f0:8", ["const:afcf10:8", "const:4:8"]]
- 00afcf10 ["CALL", null, ["callee:00851550:8"]]
+ 00afcfac ["INT_ADD", "register:40f0:8", ["const:afcfac:8", "const:4:8"]]
+ 00afcfac ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-aca541b8721ac23deac61cd15c5dbcac"></a>

### [`00afcf48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afcf48.md) → [`00afcfe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afc/00afcfe4.md) FUN_00afcfe4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 2件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afcf5c ["INT_ADD", "register:40f0:8", ["const:afcf5c:8", "const:4:8"]]
- 00afcf5c ["CALL", null, ["callee:00851550:8"]]
+ 00afcff8 ["INT_ADD", "register:40f0:8", ["const:afcff8:8", "const:4:8"]]
+ 00afcff8 ["CALL", null, ["callee:00851550:8"]]
- 00afcf70 ["INT_ADD", "register:40f0:8", ["const:afcf70:8", "const:4:8"]]
- 00afcf70 ["CALL", null, ["callee:005e7460:8"]]
+ 00afd00c ["INT_ADD", "register:40f0:8", ["const:afd00c:8", "const:4:8"]]
+ 00afd00c ["CALL", null, ["callee:005e7460:8"]]
- 00afcf7c ["INT_ADD", "register:40f0:8", ["const:afcf7c:8", "const:4:8"]]
- 00afcf7c ["CALL", null, ["callee:00851550:8"]]
+ 00afd018 ["INT_ADD", "register:40f0:8", ["const:afd018:8", "const:4:8"]]
+ 00afd018 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-dce81baa449ba771588bbb58658b0e61"></a>

### [`00afcfb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afc/00afcfb0.md) → [`00afd04c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afd04c.md) FUN_00afd04c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 2件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afcfcc ["INT_ADD", "register:40f0:8", ["const:afcfcc:8", "const:4:8"]]
- 00afcfcc ["CALL", null, ["callee:00851550:8"]]
+ 00afd068 ["INT_ADD", "register:40f0:8", ["const:afd068:8", "const:4:8"]]
+ 00afd068 ["CALL", null, ["callee:00851550:8"]]
- 00afcfe0 ["INT_ADD", "register:40f0:8", ["const:afcfe0:8", "const:4:8"]]
- 00afcfe0 ["CALL", null, ["callee:005e7460:8"]]
+ 00afd07c ["INT_ADD", "register:40f0:8", ["const:afd07c:8", "const:4:8"]]
+ 00afd07c ["CALL", null, ["callee:005e7460:8"]]
- 00afcfec ["INT_ADD", "register:40f0:8", ["const:afcfec:8", "const:4:8"]]
- 00afcfec ["CALL", null, ["callee:00851550:8"]]
+ 00afd088 ["INT_ADD", "register:40f0:8", ["const:afd088:8", "const:4:8"]]
+ 00afd088 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-f16e30781842536d574d67fb28bb8293"></a>

### [`00afd1a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afd1a4.md) → [`00afd240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afd240.md) FUN_00afd240

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00716d90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) · 呼出先 2件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afd1c0 ["INT_ADD", "register:40f0:8", ["const:afd1c0:8", "const:4:8"]]
- 00afd1c0 ["CALL", null, ["callee:00851550:8"]]
+ 00afd25c ["INT_ADD", "register:40f0:8", ["const:afd25c:8", "const:4:8"]]
+ 00afd25c ["CALL", null, ["callee:00851550:8"]]
- 00afd1d8 ["INT_ADD", "register:40f0:8", ["const:afd1d8:8", "const:4:8"]]
- 00afd1d8 ["CALL", null, ["callee:005e7460:8"]]
+ 00afd274 ["INT_ADD", "register:40f0:8", ["const:afd274:8", "const:4:8"]]
+ 00afd274 ["CALL", null, ["callee:005e7460:8"]]
- 00afd1e0 ["INT_ADD", "register:40f0:8", ["const:afd1e0:8", "const:4:8"]]
- 00afd1e0 ["CALL", null, ["callee:00851550:8"]]
+ 00afd27c ["INT_ADD", "register:40f0:8", ["const:afd27c:8", "const:4:8"]]
+ 00afd27c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-63b7a54eb662443e490b8d0f1ea83da8"></a>

### [`00afd258`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afd258.md) → [`00afd2f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afd2f4.md) FUN_00afd2f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00716d90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 2件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afd274 ["INT_ADD", "register:40f0:8", ["const:afd274:8", "const:4:8"]]
- 00afd274 ["CALL", null, ["callee:00851550:8"]]
+ 00afd310 ["INT_ADD", "register:40f0:8", ["const:afd310:8", "const:4:8"]]
+ 00afd310 ["CALL", null, ["callee:00851550:8"]]
- 00afd288 ["INT_ADD", "register:40f0:8", ["const:afd288:8", "const:4:8"]]
- 00afd288 ["CALL", null, ["callee:005e7460:8"]]
+ 00afd324 ["INT_ADD", "register:40f0:8", ["const:afd324:8", "const:4:8"]]
+ 00afd324 ["CALL", null, ["callee:005e7460:8"]]
- 00afd294 ["INT_ADD", "register:40f0:8", ["const:afd294:8", "const:4:8"]]
- 00afd294 ["CALL", null, ["callee:00851550:8"]]
+ 00afd330 ["INT_ADD", "register:40f0:8", ["const:afd330:8", "const:4:8"]]
+ 00afd330 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-681c75b38204d8fe62fdf30556f25a34"></a>

### [`00afd2c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afd2c4.md) → [`00afd360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afd360.md) FUN_00afd360

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00716d90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) · 呼出先 2件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afd2e0 ["INT_ADD", "register:40f0:8", ["const:afd2e0:8", "const:4:8"]]
- 00afd2e0 ["CALL", null, ["callee:00851550:8"]]
+ 00afd37c ["INT_ADD", "register:40f0:8", ["const:afd37c:8", "const:4:8"]]
+ 00afd37c ["CALL", null, ["callee:00851550:8"]]
- 00afd2f4 ["INT_ADD", "register:40f0:8", ["const:afd2f4:8", "const:4:8"]]
- 00afd2f4 ["CALL", null, ["callee:005e7460:8"]]
+ 00afd390 ["INT_ADD", "register:40f0:8", ["const:afd390:8", "const:4:8"]]
+ 00afd390 ["CALL", null, ["callee:005e7460:8"]]
- 00afd300 ["INT_ADD", "register:40f0:8", ["const:afd300:8", "const:4:8"]]
- 00afd300 ["CALL", null, ["callee:00851550:8"]]
+ 00afd39c ["INT_ADD", "register:40f0:8", ["const:afd39c:8", "const:4:8"]]
+ 00afd39c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-fa618336df5ed16804f9244d20e0a57e"></a>

### [`00afd338`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afd338.md) → [`00afd3d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afd3d4.md) FUN_00afd3d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00716d90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) · 呼出先 2件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afd34c ["INT_ADD", "register:40f0:8", ["const:afd34c:8", "const:4:8"]]
- 00afd34c ["CALL", null, ["callee:00851550:8"]]
+ 00afd3e8 ["INT_ADD", "register:40f0:8", ["const:afd3e8:8", "const:4:8"]]
+ 00afd3e8 ["CALL", null, ["callee:00851550:8"]]
- 00afd360 ["INT_ADD", "register:40f0:8", ["const:afd360:8", "const:4:8"]]
- 00afd360 ["CALL", null, ["callee:005e7460:8"]]
+ 00afd3fc ["INT_ADD", "register:40f0:8", ["const:afd3fc:8", "const:4:8"]]
+ 00afd3fc ["CALL", null, ["callee:005e7460:8"]]
- 00afd36c ["INT_ADD", "register:40f0:8", ["const:afd36c:8", "const:4:8"]]
- 00afd36c ["CALL", null, ["callee:00851550:8"]]
+ 00afd408 ["INT_ADD", "register:40f0:8", ["const:afd408:8", "const:4:8"]]
+ 00afd408 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-7ec08f48c4c1d195410f94df2b899772"></a>

### [`00afd474`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afd474.md) → [`00afd510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afd510.md) FUN_00afd510

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 2件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afd490 ["INT_ADD", "register:40f0:8", ["const:afd490:8", "const:4:8"]]
- 00afd490 ["CALL", null, ["callee:00851550:8"]]
+ 00afd52c ["INT_ADD", "register:40f0:8", ["const:afd52c:8", "const:4:8"]]
+ 00afd52c ["CALL", null, ["callee:00851550:8"]]
- 00afd4a4 ["INT_ADD", "register:40f0:8", ["const:afd4a4:8", "const:4:8"]]
- 00afd4a4 ["CALL", null, ["callee:005e7460:8"]]
+ 00afd540 ["INT_ADD", "register:40f0:8", ["const:afd540:8", "const:4:8"]]
+ 00afd540 ["CALL", null, ["callee:005e7460:8"]]
- 00afd4b0 ["INT_ADD", "register:40f0:8", ["const:afd4b0:8", "const:4:8"]]
- 00afd4b0 ["CALL", null, ["callee:00851550:8"]]
+ 00afd54c ["INT_ADD", "register:40f0:8", ["const:afd54c:8", "const:4:8"]]
+ 00afd54c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-e2c64db369976af60dbcbc82804cf10c"></a>

### [`00afd5b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afd5b4.md) → [`00afd650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afd650.md) FUN_00afd650

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00716d90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) · 呼出先 2件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afd5c8 ["INT_ADD", "register:40f0:8", ["const:afd5c8:8", "const:4:8"]]
- 00afd5c8 ["CALL", null, ["callee:00851550:8"]]
+ 00afd664 ["INT_ADD", "register:40f0:8", ["const:afd664:8", "const:4:8"]]
+ 00afd664 ["CALL", null, ["callee:00851550:8"]]
- 00afd5dc ["INT_ADD", "register:40f0:8", ["const:afd5dc:8", "const:4:8"]]
- 00afd5dc ["CALL", null, ["callee:005e7460:8"]]
+ 00afd678 ["INT_ADD", "register:40f0:8", ["const:afd678:8", "const:4:8"]]
+ 00afd678 ["CALL", null, ["callee:005e7460:8"]]
- 00afd5e8 ["INT_ADD", "register:40f0:8", ["const:afd5e8:8", "const:4:8"]]
- 00afd5e8 ["CALL", null, ["callee:00851550:8"]]
+ 00afd684 ["INT_ADD", "register:40f0:8", ["const:afd684:8", "const:4:8"]]
+ 00afd684 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-acfd405180e176abef319671cb690743"></a>

### [`00afd61c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afd61c.md) → [`00afd6b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afd6b8.md) FUN_00afd6b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 2件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afd638 ["INT_ADD", "register:40f0:8", ["const:afd638:8", "const:4:8"]]
- 00afd638 ["CALL", null, ["callee:00851550:8"]]
+ 00afd6d4 ["INT_ADD", "register:40f0:8", ["const:afd6d4:8", "const:4:8"]]
+ 00afd6d4 ["CALL", null, ["callee:00851550:8"]]
- 00afd64c ["INT_ADD", "register:40f0:8", ["const:afd64c:8", "const:4:8"]]
- 00afd64c ["CALL", null, ["callee:005e7460:8"]]
+ 00afd6e8 ["INT_ADD", "register:40f0:8", ["const:afd6e8:8", "const:4:8"]]
+ 00afd6e8 ["CALL", null, ["callee:005e7460:8"]]
- 00afd658 ["INT_ADD", "register:40f0:8", ["const:afd658:8", "const:4:8"]]
- 00afd658 ["CALL", null, ["callee:00851550:8"]]
+ 00afd6f4 ["INT_ADD", "register:40f0:8", ["const:afd6f4:8", "const:4:8"]]
+ 00afd6f4 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-76ab2b3bce368d0fdd3ad0037e15400c"></a>

### [`00afd688`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afd688.md) → [`00afd724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afd724.md) FUN_00afd724

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 2件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afd69c ["INT_ADD", "register:40f0:8", ["const:afd69c:8", "const:4:8"]]
- 00afd69c ["CALL", null, ["callee:00851550:8"]]
+ 00afd738 ["INT_ADD", "register:40f0:8", ["const:afd738:8", "const:4:8"]]
+ 00afd738 ["CALL", null, ["callee:00851550:8"]]
- 00afd6b0 ["INT_ADD", "register:40f0:8", ["const:afd6b0:8", "const:4:8"]]
- 00afd6b0 ["CALL", null, ["callee:005e7460:8"]]
+ 00afd74c ["INT_ADD", "register:40f0:8", ["const:afd74c:8", "const:4:8"]]
+ 00afd74c ["CALL", null, ["callee:005e7460:8"]]
- 00afd6bc ["INT_ADD", "register:40f0:8", ["const:afd6bc:8", "const:4:8"]]
- 00afd6bc ["CALL", null, ["callee:00851550:8"]]
+ 00afd758 ["INT_ADD", "register:40f0:8", ["const:afd758:8", "const:4:8"]]
+ 00afd758 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-d98e825eb1a3b7f6f7126e347a511ca5"></a>

### [`00afd6f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afd6f8.md) → [`00afd794`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afd794.md) FUN_00afd794

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`005fb93c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fb/005fb93c.md) [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`0070ea5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070ea5c.md) [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 2件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 4件 [`005fb97c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fb/005fb97c.md) [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afd714 ["INT_ADD", "register:40f0:8", ["const:afd714:8", "const:4:8"]]
- 00afd714 ["CALL", null, ["callee:00851550:8"]]
+ 00afd7b0 ["INT_ADD", "register:40f0:8", ["const:afd7b0:8", "const:4:8"]]
+ 00afd7b0 ["CALL", null, ["callee:00851550:8"]]
- 00afd728 ["INT_ADD", "register:40f0:8", ["const:afd728:8", "const:4:8"]]
- 00afd728 ["CALL", null, ["callee:005e7460:8"]]
+ 00afd7c4 ["INT_ADD", "register:40f0:8", ["const:afd7c4:8", "const:4:8"]]
+ 00afd7c4 ["CALL", null, ["callee:005e7460:8"]]
- 00afd738 ["INT_ADD", "register:40f0:8", ["const:afd738:8", "const:4:8"]]
- 00afd738 ["CALL", null, ["callee:00851550:8"]]
+ 00afd7d4 ["INT_ADD", "register:40f0:8", ["const:afd7d4:8", "const:4:8"]]
+ 00afd7d4 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-2513f29c2f542bc433b29a21f1d9d092"></a>

### [`00afd768`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afd768.md) → [`00afd804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afd804.md) FUN_00afd804

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00716d90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) · 呼出先 2件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afd77c ["INT_ADD", "register:40f0:8", ["const:afd77c:8", "const:4:8"]]
- 00afd77c ["CALL", null, ["callee:00851550:8"]]
+ 00afd818 ["INT_ADD", "register:40f0:8", ["const:afd818:8", "const:4:8"]]
+ 00afd818 ["CALL", null, ["callee:00851550:8"]]
- 00afd790 ["INT_ADD", "register:40f0:8", ["const:afd790:8", "const:4:8"]]
- 00afd790 ["CALL", null, ["callee:005e7460:8"]]
+ 00afd82c ["INT_ADD", "register:40f0:8", ["const:afd82c:8", "const:4:8"]]
+ 00afd82c ["CALL", null, ["callee:005e7460:8"]]
- 00afd79c ["INT_ADD", "register:40f0:8", ["const:afd79c:8", "const:4:8"]]
- 00afd79c ["CALL", null, ["callee:00851550:8"]]
+ 00afd838 ["INT_ADD", "register:40f0:8", ["const:afd838:8", "const:4:8"]]
+ 00afd838 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-741c241a17b088deffa8124c26011102"></a>

### [`00afd7d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afd7d8.md) → [`00afd874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afd874.md) FUN_00afd874

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 2件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afd7f4 ["INT_ADD", "register:40f0:8", ["const:afd7f4:8", "const:4:8"]]
- 00afd7f4 ["CALL", null, ["callee:00851550:8"]]
+ 00afd890 ["INT_ADD", "register:40f0:8", ["const:afd890:8", "const:4:8"]]
+ 00afd890 ["CALL", null, ["callee:00851550:8"]]
- 00afd808 ["INT_ADD", "register:40f0:8", ["const:afd808:8", "const:4:8"]]
- 00afd808 ["CALL", null, ["callee:005e7460:8"]]
+ 00afd8a4 ["INT_ADD", "register:40f0:8", ["const:afd8a4:8", "const:4:8"]]
+ 00afd8a4 ["CALL", null, ["callee:005e7460:8"]]
- 00afd818 ["INT_ADD", "register:40f0:8", ["const:afd818:8", "const:4:8"]]
- 00afd818 ["CALL", null, ["callee:00851550:8"]]
+ 00afd8b4 ["INT_ADD", "register:40f0:8", ["const:afd8b4:8", "const:4:8"]]
+ 00afd8b4 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-4caa2891b76548aa2efcb9aa8d7cf471"></a>

### [`00afd848`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afd848.md) → [`00afd8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afd8e4.md) FUN_00afd8e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007102d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afd85c ["INT_ADD", "register:40f0:8", ["const:afd85c:8", "const:4:8"]]
- 00afd85c ["CALL", null, ["callee:00851550:8"]]
+ 00afd8f8 ["INT_ADD", "register:40f0:8", ["const:afd8f8:8", "const:4:8"]]
+ 00afd8f8 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-b0123868dbae1f2a36a48fc032b7bab0"></a>

### [`00afd888`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afd888.md) → [`00afd924`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afd924.md) FUN_00afd924

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afd8a4 ["INT_ADD", "register:40f0:8", ["const:afd8a4:8", "const:4:8"]]
- 00afd8a4 ["CALL", null, ["callee:00851550:8"]]
+ 00afd940 ["INT_ADD", "register:40f0:8", ["const:afd940:8", "const:4:8"]]
+ 00afd940 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-0a1526fd2919c164a9668bd881af0395"></a>

### [`00afd8d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afd8d4.md) → [`00afd970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afd970.md) FUN_00afd970

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007102d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afd8e8 ["INT_ADD", "register:40f0:8", ["const:afd8e8:8", "const:4:8"]]
- 00afd8e8 ["CALL", null, ["callee:00851550:8"]]
+ 00afd984 ["INT_ADD", "register:40f0:8", ["const:afd984:8", "const:4:8"]]
+ 00afd984 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-e4a25e16684317d82526f7a848b9b9de"></a>

### [`00afd914`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afd914.md) → [`00afd9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afd9b0.md) FUN_00afd9b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afd930 ["INT_ADD", "register:40f0:8", ["const:afd930:8", "const:4:8"]]
- 00afd930 ["CALL", null, ["callee:00851550:8"]]
+ 00afd9cc ["INT_ADD", "register:40f0:8", ["const:afd9cc:8", "const:4:8"]]
+ 00afd9cc ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-e547cc05d75d2249b74997db7de725cc"></a>

### [`00afd960`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afd960.md) → [`00afd9fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afd9fc.md) FUN_00afd9fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007102d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afd974 ["INT_ADD", "register:40f0:8", ["const:afd974:8", "const:4:8"]]
- 00afd974 ["CALL", null, ["callee:00851550:8"]]
+ 00afda10 ["INT_ADD", "register:40f0:8", ["const:afda10:8", "const:4:8"]]
+ 00afda10 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-02c035d4a21749ff75e998c27d03da69"></a>

### [`00afd9a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afd9a0.md) → [`00afda3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afda3c.md) FUN_00afda3c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afd9bc ["INT_ADD", "register:40f0:8", ["const:afd9bc:8", "const:4:8"]]
- 00afd9bc ["CALL", null, ["callee:00851550:8"]]
+ 00afda58 ["INT_ADD", "register:40f0:8", ["const:afda58:8", "const:4:8"]]
+ 00afda58 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-b1f5b82a9c1af62795bb4b176694aa7e"></a>

### [`00afd9ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afd9ec.md) → [`00afda88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afda88.md) FUN_00afda88

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00715500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00715/00715500.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afda00 ["INT_ADD", "register:40f0:8", ["const:afda00:8", "const:4:8"]]
- 00afda00 ["CALL", null, ["callee:00851550:8"]]
+ 00afda9c ["INT_ADD", "register:40f0:8", ["const:afda9c:8", "const:4:8"]]
+ 00afda9c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-3df0b04bd6e1c67b8a1443591c543190"></a>

### [`00afda2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afda2c.md) → [`00afdac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afdac8.md) FUN_00afdac8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afda48 ["INT_ADD", "register:40f0:8", ["const:afda48:8", "const:4:8"]]
- 00afda48 ["CALL", null, ["callee:00851550:8"]]
+ 00afdae4 ["INT_ADD", "register:40f0:8", ["const:afdae4:8", "const:4:8"]]
+ 00afdae4 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-2205723da7d202ccdec0845a50dd2c49"></a>

### [`00afda78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afda78.md) → [`00afdb14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afdb14.md) FUN_00afdb14

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007119f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afda8c ["INT_ADD", "register:40f0:8", ["const:afda8c:8", "const:4:8"]]
- 00afda8c ["CALL", null, ["callee:00851550:8"]]
+ 00afdb28 ["INT_ADD", "register:40f0:8", ["const:afdb28:8", "const:4:8"]]
+ 00afdb28 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-f304fbb7679459f8b9096639f5d4ba27"></a>

### [`00afdab8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afdab8.md) → [`00afdb54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afdb54.md) FUN_00afdb54

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afdad4 ["INT_ADD", "register:40f0:8", ["const:afdad4:8", "const:4:8"]]
- 00afdad4 ["CALL", null, ["callee:00851550:8"]]
+ 00afdb70 ["INT_ADD", "register:40f0:8", ["const:afdb70:8", "const:4:8"]]
+ 00afdb70 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-4c8deea3321c15cedefd300d855c049f"></a>

### [`00afdb04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afdb04.md) → [`00afdba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afdba0.md) FUN_00afdba0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007102d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afdb18 ["INT_ADD", "register:40f0:8", ["const:afdb18:8", "const:4:8"]]
- 00afdb18 ["CALL", null, ["callee:00851550:8"]]
+ 00afdbb4 ["INT_ADD", "register:40f0:8", ["const:afdbb4:8", "const:4:8"]]
+ 00afdbb4 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-9b1858445428926afb6fbdcf0822fb8d"></a>

### [`00afdb44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afdb44.md) → [`00afdbe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afdbe0.md) FUN_00afdbe0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afdb60 ["INT_ADD", "register:40f0:8", ["const:afdb60:8", "const:4:8"]]
- 00afdb60 ["CALL", null, ["callee:00851550:8"]]
+ 00afdbfc ["INT_ADD", "register:40f0:8", ["const:afdbfc:8", "const:4:8"]]
+ 00afdbfc ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-021b591b71d794983eae5e31290b8903"></a>

### [`00afdb90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afdb90.md) → [`00afdc2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afdc2c.md) FUN_00afdc2c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007102d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afdba4 ["INT_ADD", "register:40f0:8", ["const:afdba4:8", "const:4:8"]]
- 00afdba4 ["CALL", null, ["callee:00851550:8"]]
+ 00afdc40 ["INT_ADD", "register:40f0:8", ["const:afdc40:8", "const:4:8"]]
+ 00afdc40 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-56cd78178b6daac8cfd08197949c39c7"></a>

### [`00afdbd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afdbd0.md) → [`00afdc6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afdc6c.md) FUN_00afdc6c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afdbec ["INT_ADD", "register:40f0:8", ["const:afdbec:8", "const:4:8"]]
- 00afdbec ["CALL", null, ["callee:00851550:8"]]
+ 00afdc88 ["INT_ADD", "register:40f0:8", ["const:afdc88:8", "const:4:8"]]
+ 00afdc88 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-eb98a5f1a150b89d01b5232c85beb943"></a>

### [`00afdc1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afdc1c.md) → [`00afdcb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afdcb8.md) FUN_00afdcb8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007119f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afdc30 ["INT_ADD", "register:40f0:8", ["const:afdc30:8", "const:4:8"]]
- 00afdc30 ["CALL", null, ["callee:00851550:8"]]
+ 00afdccc ["INT_ADD", "register:40f0:8", ["const:afdccc:8", "const:4:8"]]
+ 00afdccc ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-904ee35cd375e3aa7c2455188d17c921"></a>

### [`00afdc5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afdc5c.md) → [`00afdcf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afdcf8.md) FUN_00afdcf8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afdc78 ["INT_ADD", "register:40f0:8", ["const:afdc78:8", "const:4:8"]]
- 00afdc78 ["CALL", null, ["callee:00851550:8"]]
+ 00afdd14 ["INT_ADD", "register:40f0:8", ["const:afdd14:8", "const:4:8"]]
+ 00afdd14 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-fcdfb9030159db792253b142303de743"></a>

### [`00afdca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afdca8.md) → [`00afdd44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afdd44.md) FUN_00afdd44

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007119f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afdcbc ["INT_ADD", "register:40f0:8", ["const:afdcbc:8", "const:4:8"]]
- 00afdcbc ["CALL", null, ["callee:00851550:8"]]
+ 00afdd58 ["INT_ADD", "register:40f0:8", ["const:afdd58:8", "const:4:8"]]
+ 00afdd58 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-c729991fd52fa2204696ee25abc12e3a"></a>

### [`00afdce8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afdce8.md) → [`00afdd84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afdd84.md) FUN_00afdd84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afdd04 ["INT_ADD", "register:40f0:8", ["const:afdd04:8", "const:4:8"]]
- 00afdd04 ["CALL", null, ["callee:00851550:8"]]
+ 00afdda0 ["INT_ADD", "register:40f0:8", ["const:afdda0:8", "const:4:8"]]
+ 00afdda0 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-d024d6d433f15978c64b066571e0b283"></a>

### [`00afdd34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afdd34.md) → [`00afddd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afddd0.md) FUN_00afddd0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007119f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afdd48 ["INT_ADD", "register:40f0:8", ["const:afdd48:8", "const:4:8"]]
- 00afdd48 ["CALL", null, ["callee:00851550:8"]]
+ 00afdde4 ["INT_ADD", "register:40f0:8", ["const:afdde4:8", "const:4:8"]]
+ 00afdde4 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-c42d9a670c43b38f53b0f38d18ff8cf8"></a>

### [`00afdd74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afdd74.md) → [`00afde10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afde10.md) FUN_00afde10

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afdd90 ["INT_ADD", "register:40f0:8", ["const:afdd90:8", "const:4:8"]]
- 00afdd90 ["CALL", null, ["callee:00851550:8"]]
+ 00afde2c ["INT_ADD", "register:40f0:8", ["const:afde2c:8", "const:4:8"]]
+ 00afde2c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-988a4ab765e7ef844937991ade179b88"></a>

### [`00afddc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afddc0.md) → [`00afde5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afde5c.md) FUN_00afde5c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007119f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afddd4 ["INT_ADD", "register:40f0:8", ["const:afddd4:8", "const:4:8"]]
- 00afddd4 ["CALL", null, ["callee:00851550:8"]]
+ 00afde70 ["INT_ADD", "register:40f0:8", ["const:afde70:8", "const:4:8"]]
+ 00afde70 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-d71435dc70974a3ac66f7e9893041c27"></a>

### [`00afde00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afde00.md) → [`00afde9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afde9c.md) FUN_00afde9c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afde1c ["INT_ADD", "register:40f0:8", ["const:afde1c:8", "const:4:8"]]
- 00afde1c ["CALL", null, ["callee:00851550:8"]]
+ 00afdeb8 ["INT_ADD", "register:40f0:8", ["const:afdeb8:8", "const:4:8"]]
+ 00afdeb8 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-2dfc3ff0b91dcce4907e10e22d31526e"></a>

### [`00afde4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afde4c.md) → [`00afdee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afdee8.md) FUN_00afdee8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007119f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afde60 ["INT_ADD", "register:40f0:8", ["const:afde60:8", "const:4:8"]]
- 00afde60 ["CALL", null, ["callee:00851550:8"]]
+ 00afdefc ["INT_ADD", "register:40f0:8", ["const:afdefc:8", "const:4:8"]]
+ 00afdefc ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-69f319b39aaa8a107f906cdb1c876056"></a>

### [`00afde8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afde8c.md) → [`00afdf28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afdf28.md) FUN_00afdf28

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afdea8 ["INT_ADD", "register:40f0:8", ["const:afdea8:8", "const:4:8"]]
- 00afdea8 ["CALL", null, ["callee:00851550:8"]]
+ 00afdf44 ["INT_ADD", "register:40f0:8", ["const:afdf44:8", "const:4:8"]]
+ 00afdf44 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-0352960801a71f50f63675093b1982f4"></a>

### [`00afded8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afded8.md) → [`00afdf74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afdf74.md) FUN_00afdf74

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00715500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00715/00715500.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afdeec ["INT_ADD", "register:40f0:8", ["const:afdeec:8", "const:4:8"]]
- 00afdeec ["CALL", null, ["callee:00851550:8"]]
+ 00afdf88 ["INT_ADD", "register:40f0:8", ["const:afdf88:8", "const:4:8"]]
+ 00afdf88 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-5c4fc0f8547e68db0dd8374368253505"></a>

### [`00afdf18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afdf18.md) → [`00afdfb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afd/00afdfb4.md) FUN_00afdfb4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afdf34 ["INT_ADD", "register:40f0:8", ["const:afdf34:8", "const:4:8"]]
- 00afdf34 ["CALL", null, ["callee:00851550:8"]]
+ 00afdfd0 ["INT_ADD", "register:40f0:8", ["const:afdfd0:8", "const:4:8"]]
+ 00afdfd0 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-fe077a3a19351dbeaa7dec9d08fa5ef0"></a>

### [`00afdf64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afdf64.md) → [`00afe000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afe000.md) FUN_00afe000

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00715500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00715/00715500.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00715558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00715/00715558.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afdf78 ["INT_ADD", "register:40f0:8", ["const:afdf78:8", "const:4:8"]]
- 00afdf78 ["CALL", null, ["callee:00851550:8"]]
+ 00afe014 ["INT_ADD", "register:40f0:8", ["const:afe014:8", "const:4:8"]]
+ 00afe014 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-00fa697bf36592cda18df7ecf5df8665"></a>

### [`00afdfa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afdfa4.md) → [`00afe040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afe040.md) FUN_00afe040

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) [`00a51fc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a51/00a51fc4.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00a52034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a52/00a52034.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afdfc0 ["INT_ADD", "register:40f0:8", ["const:afdfc0:8", "const:4:8"]]
- 00afdfc0 ["CALL", null, ["callee:00851550:8"]]
+ 00afe05c ["INT_ADD", "register:40f0:8", ["const:afe05c:8", "const:4:8"]]
+ 00afe05c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-ab745235cded410524daea49c8a0af39"></a>

### [`00afdff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afd/00afdff0.md) → [`00afe08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afe08c.md) FUN_00afe08c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00716d90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afe004 ["INT_ADD", "register:40f0:8", ["const:afe004:8", "const:4:8"]]
- 00afe004 ["CALL", null, ["callee:00851550:8"]]
+ 00afe0a0 ["INT_ADD", "register:40f0:8", ["const:afe0a0:8", "const:4:8"]]
+ 00afe0a0 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-6f27d02e84353036c51ac4407e9fcecd"></a>

### [`00afe030`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afe/00afe030.md) → [`00afe0cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afe0cc.md) FUN_00afe0cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00716d90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00716/00716d90.md) [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`00716de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00716/00716de8.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afe04c ["INT_ADD", "register:40f0:8", ["const:afe04c:8", "const:4:8"]]
- 00afe04c ["CALL", null, ["callee:00851550:8"]]
+ 00afe0e8 ["INT_ADD", "register:40f0:8", ["const:afe0e8:8", "const:4:8"]]
+ 00afe0e8 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-da539712ff0444be8461baf9ddca5b6e"></a>

### [`00afff64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aff/00afff64.md) → [`00b00000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00000.md) FUN_00b00000

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0098c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098c/0098c9c4.md) [`00b00054`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b00/00b00054.md) · 呼出先 4件 [`0046dabc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046dabc.md) [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00afeae8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afe/00afeae8.md)
- 新版 呼出元 2件 [`0098ca18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098c/0098ca18.md) [`00b000f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b000f0.md) · 呼出先 4件 [`0046dafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046dafc.md) [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00afeb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afeb84.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00afff84 ["INT_ADD", "register:40f0:8", ["const:afff84:8", "const:4:8"]]
- 00afff84 ["CALL", null, ["callee:00851550:8"]]
+ 00b00020 ["INT_ADD", "register:40f0:8", ["const:b00020:8", "const:4:8"]]
+ 00b00020 ["CALL", null, ["callee:00851550:8"]]
- 00afff98 ["INT_ADD", "register:40f0:8", ["const:afff98:8", "const:4:8"]]
- 00afff98 ["CALL", null, ["callee:005e7460:8"]]
+ 00b00034 ["INT_ADD", "register:40f0:8", ["const:b00034:8", "const:4:8"]]
+ 00b00034 ["CALL", null, ["callee:005e7460:8"]]
- 00afffa8 ["INT_ADD", "register:40f0:8", ["const:afffa8:8", "const:4:8"]]
- 00afffa8 ["CALL", null, ["callee:00851550:8"]]
+ 00b00044 ["INT_ADD", "register:40f0:8", ["const:b00044:8", "const:4:8"]]
+ 00b00044 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-0e34aacf022dc5f36f2b0b6a82d08a36"></a>

### [`00b0037c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b00/00b0037c.md) → [`00b00418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00418.md) FUN_00b00418

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005b06cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b0/005b06cc.md) · 呼出先 4件 [`0046dabc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046dabc.md) [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00afeae8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afe/00afeae8.md)
- 新版 呼出元 1件 [`005b070c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b0/005b070c.md) · 呼出先 4件 [`0046dafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046dafc.md) [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00afeb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afeb84.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b00398 ["INT_ADD", "register:40f0:8", ["const:b00398:8", "const:4:8"]]
- 00b00398 ["CALL", null, ["callee:00851550:8"]]
+ 00b00434 ["INT_ADD", "register:40f0:8", ["const:b00434:8", "const:4:8"]]
+ 00b00434 ["CALL", null, ["callee:00851550:8"]]
- 00b003ac ["INT_ADD", "register:40f0:8", ["const:b003ac:8", "const:4:8"]]
- 00b003ac ["CALL", null, ["callee:005e7460:8"]]
+ 00b00448 ["INT_ADD", "register:40f0:8", ["const:b00448:8", "const:4:8"]]
+ 00b00448 ["CALL", null, ["callee:005e7460:8"]]
- 00b003bc ["INT_ADD", "register:40f0:8", ["const:b003bc:8", "const:4:8"]]
- 00b003bc ["CALL", null, ["callee:00851550:8"]]
+ 00b00458 ["INT_ADD", "register:40f0:8", ["const:b00458:8", "const:4:8"]]
+ 00b00458 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-24025bbf16805147499513434933a50b"></a>

### [`00b01534`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b01/00b01534.md) → [`00b015d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b01/00b015d0.md) FUN_00b015d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`00685588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00685/00685588.md) [`006c6e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c6/006c6e10.md) [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) [`00b009dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b00/00b009dc.md) · 呼出先 3件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00b0272c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b02/00b0272c.md)
- 新版 呼出元 4件 [`006855c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00685/006855c8.md) [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00b00a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00a78.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b027c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b02/00b027c8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b01550 ["INT_ADD", "register:40f0:8", ["const:b01550:8", "const:4:8"]]
- 00b01550 ["CALL", null, ["callee:00851550:8"]]
+ 00b015ec ["INT_ADD", "register:40f0:8", ["const:b015ec:8", "const:4:8"]]
+ 00b015ec ["CALL", null, ["callee:00851550:8"]]
- 00b01564 ["INT_ADD", "register:40f0:8", ["const:b01564:8", "const:4:8"]]
- 00b01564 ["CALL", null, ["callee:005e7460:8"]]
+ 00b01600 ["INT_ADD", "register:40f0:8", ["const:b01600:8", "const:4:8"]]
+ 00b01600 ["CALL", null, ["callee:005e7460:8"]]
- 00b01574 ["INT_ADD", "register:40f0:8", ["const:b01574:8", "const:4:8"]]
- 00b01574 ["CALL", null, ["callee:00851550:8"]]
+ 00b01610 ["INT_ADD", "register:40f0:8", ["const:b01610:8", "const:4:8"]]
+ 00b01610 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-8e38bdb075fd3227820d6070ea0cf378"></a>

### [`00b015cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b01/00b015cc.md) → [`00b01668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b01/00b01668.md) FUN_00b01668

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`00685588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00685/00685588.md) [`006c6e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c6/006c6e10.md) [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) [`00b009dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b00/00b009dc.md) · 呼出先 3件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00b0272c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b02/00b0272c.md)
- 新版 呼出元 4件 [`006855c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00685/006855c8.md) [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00b00a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00a78.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b027c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b02/00b027c8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b015e8 ["INT_ADD", "register:40f0:8", ["const:b015e8:8", "const:4:8"]]
- 00b015e8 ["CALL", null, ["callee:00851550:8"]]
+ 00b01684 ["INT_ADD", "register:40f0:8", ["const:b01684:8", "const:4:8"]]
+ 00b01684 ["CALL", null, ["callee:00851550:8"]]
- 00b015fc ["INT_ADD", "register:40f0:8", ["const:b015fc:8", "const:4:8"]]
- 00b015fc ["CALL", null, ["callee:005e7460:8"]]
+ 00b01698 ["INT_ADD", "register:40f0:8", ["const:b01698:8", "const:4:8"]]
+ 00b01698 ["CALL", null, ["callee:005e7460:8"]]
- 00b0160c ["INT_ADD", "register:40f0:8", ["const:b0160c:8", "const:4:8"]]
- 00b0160c ["CALL", null, ["callee:00851550:8"]]
+ 00b016a8 ["INT_ADD", "register:40f0:8", ["const:b016a8:8", "const:4:8"]]
+ 00b016a8 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-f55ff9cd79d25be4fe3738f06dc41306"></a>

### [`00b0223c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b02/00b0223c.md) → [`00b022d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b02/00b022d8.md) FUN_00b022d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`006c6e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c6/006c6e10.md) [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) [`00b009dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b00/00b009dc.md) · 呼出先 2件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00b00a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00a78.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b02258 ["INT_ADD", "register:40f0:8", ["const:b02258:8", "const:4:8"]]
- 00b02258 ["CALL", null, ["callee:00851550:8"]]
+ 00b022f4 ["INT_ADD", "register:40f0:8", ["const:b022f4:8", "const:4:8"]]
+ 00b022f4 ["CALL", null, ["callee:00851550:8"]]
- 00b0226c ["INT_ADD", "register:40f0:8", ["const:b0226c:8", "const:4:8"]]
- 00b0226c ["CALL", null, ["callee:005e7460:8"]]
+ 00b02308 ["INT_ADD", "register:40f0:8", ["const:b02308:8", "const:4:8"]]
+ 00b02308 ["CALL", null, ["callee:005e7460:8"]]
- 00b0227c ["INT_ADD", "register:40f0:8", ["const:b0227c:8", "const:4:8"]]
- 00b0227c ["CALL", null, ["callee:00851550:8"]]
+ 00b02318 ["INT_ADD", "register:40f0:8", ["const:b02318:8", "const:4:8"]]
+ 00b02318 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-03b54fb26a2ce3ec06b7eff2fefbc207"></a>

### [`00b022b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b02/00b022b4.md) → [`00b02350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b02/00b02350.md) FUN_00b02350

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`006c6e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c6/006c6e10.md) [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) [`00b009dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b00/00b009dc.md) · 呼出先 3件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00b0272c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b02/00b0272c.md)
- 新版 呼出元 3件 [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00b00a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00a78.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b027c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b02/00b027c8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b022d0 ["INT_ADD", "register:40f0:8", ["const:b022d0:8", "const:4:8"]]
- 00b022d0 ["CALL", null, ["callee:00851550:8"]]
+ 00b0236c ["INT_ADD", "register:40f0:8", ["const:b0236c:8", "const:4:8"]]
+ 00b0236c ["CALL", null, ["callee:00851550:8"]]
- 00b022e4 ["INT_ADD", "register:40f0:8", ["const:b022e4:8", "const:4:8"]]
- 00b022e4 ["CALL", null, ["callee:005e7460:8"]]
+ 00b02380 ["INT_ADD", "register:40f0:8", ["const:b02380:8", "const:4:8"]]
+ 00b02380 ["CALL", null, ["callee:005e7460:8"]]
- 00b022f4 ["INT_ADD", "register:40f0:8", ["const:b022f4:8", "const:4:8"]]
- 00b022f4 ["CALL", null, ["callee:00851550:8"]]
+ 00b02390 ["INT_ADD", "register:40f0:8", ["const:b02390:8", "const:4:8"]]
+ 00b02390 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-5134bdde56358efb594094af481f1199"></a>

### [`00b02408`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b02/00b02408.md) → [`00b024a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b02/00b024a4.md) FUN_00b024a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`006c6e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c6/006c6e10.md) [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) [`00b009dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b00/00b009dc.md) · 呼出先 3件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00afeae8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afe/00afeae8.md)
- 新版 呼出元 3件 [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00b00a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00a78.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00afeb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afeb84.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b02424 ["INT_ADD", "register:40f0:8", ["const:b02424:8", "const:4:8"]]
- 00b02424 ["CALL", null, ["callee:00851550:8"]]
+ 00b024c0 ["INT_ADD", "register:40f0:8", ["const:b024c0:8", "const:4:8"]]
+ 00b024c0 ["CALL", null, ["callee:00851550:8"]]
- 00b02438 ["INT_ADD", "register:40f0:8", ["const:b02438:8", "const:4:8"]]
- 00b02438 ["CALL", null, ["callee:005e7460:8"]]
+ 00b024d4 ["INT_ADD", "register:40f0:8", ["const:b024d4:8", "const:4:8"]]
+ 00b024d4 ["CALL", null, ["callee:005e7460:8"]]
- 00b02448 ["INT_ADD", "register:40f0:8", ["const:b02448:8", "const:4:8"]]
- 00b02448 ["CALL", null, ["callee:00851550:8"]]
+ 00b024e4 ["INT_ADD", "register:40f0:8", ["const:b024e4:8", "const:4:8"]]
+ 00b024e4 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-c0b89a30821a29c26f55db8b05a116f2"></a>

### [`00b02550`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b02/00b02550.md) → [`00b025ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b02/00b025ec.md) FUN_00b025ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`006c6e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c6/006c6e10.md) [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) [`00b009dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b00/00b009dc.md) · 呼出先 2件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00b00a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00a78.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0256c ["INT_ADD", "register:40f0:8", ["const:b0256c:8", "const:4:8"]]
- 00b0256c ["CALL", null, ["callee:00851550:8"]]
+ 00b02608 ["INT_ADD", "register:40f0:8", ["const:b02608:8", "const:4:8"]]
+ 00b02608 ["CALL", null, ["callee:00851550:8"]]
- 00b02580 ["INT_ADD", "register:40f0:8", ["const:b02580:8", "const:4:8"]]
- 00b02580 ["CALL", null, ["callee:005e7460:8"]]
+ 00b0261c ["INT_ADD", "register:40f0:8", ["const:b0261c:8", "const:4:8"]]
+ 00b0261c ["CALL", null, ["callee:005e7460:8"]]
- 00b02590 ["INT_ADD", "register:40f0:8", ["const:b02590:8", "const:4:8"]]
- 00b02590 ["CALL", null, ["callee:00851550:8"]]
+ 00b0262c ["INT_ADD", "register:40f0:8", ["const:b0262c:8", "const:4:8"]]
+ 00b0262c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-59cef03b176921f3ce999bf2b0e3e7fc"></a>

### [`00b037b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b03/00b037b4.md) → [`00b03850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b03/00b03850.md) FUN_00b03850

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`006c6e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c6/006c6e10.md) [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) [`00b009dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b00/00b009dc.md) · 呼出先 3件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00afeae8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afe/00afeae8.md)
- 新版 呼出元 3件 [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00b00a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00a78.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00afeb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afeb84.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b037d0 ["INT_ADD", "register:40f0:8", ["const:b037d0:8", "const:4:8"]]
- 00b037d0 ["CALL", null, ["callee:00851550:8"]]
+ 00b0386c ["INT_ADD", "register:40f0:8", ["const:b0386c:8", "const:4:8"]]
+ 00b0386c ["CALL", null, ["callee:00851550:8"]]
- 00b037e4 ["INT_ADD", "register:40f0:8", ["const:b037e4:8", "const:4:8"]]
- 00b037e4 ["CALL", null, ["callee:005e7460:8"]]
+ 00b03880 ["INT_ADD", "register:40f0:8", ["const:b03880:8", "const:4:8"]]
+ 00b03880 ["CALL", null, ["callee:005e7460:8"]]
- 00b037f4 ["INT_ADD", "register:40f0:8", ["const:b037f4:8", "const:4:8"]]
- 00b037f4 ["CALL", null, ["callee:00851550:8"]]
+ 00b03890 ["INT_ADD", "register:40f0:8", ["const:b03890:8", "const:4:8"]]
+ 00b03890 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-39593f37368448a4ef801129037dd162"></a>

### [`00b03910`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b03/00b03910.md) → [`00b039ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b03/00b039ac.md) FUN_00b039ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`006c6e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c6/006c6e10.md) [`006cb1d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006cb/006cb1d0.md) [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) [`00b009dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b00/00b009dc.md) · 呼出先 3件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00b0272c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b02/00b0272c.md)
- 新版 呼出元 4件 [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`006cb228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cb/006cb228.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00b00a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00a78.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b027c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b02/00b027c8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0392c ["INT_ADD", "register:40f0:8", ["const:b0392c:8", "const:4:8"]]
- 00b0392c ["CALL", null, ["callee:00851550:8"]]
+ 00b039c8 ["INT_ADD", "register:40f0:8", ["const:b039c8:8", "const:4:8"]]
+ 00b039c8 ["CALL", null, ["callee:00851550:8"]]
- 00b03940 ["INT_ADD", "register:40f0:8", ["const:b03940:8", "const:4:8"]]
- 00b03940 ["CALL", null, ["callee:005e7460:8"]]
+ 00b039dc ["INT_ADD", "register:40f0:8", ["const:b039dc:8", "const:4:8"]]
+ 00b039dc ["CALL", null, ["callee:005e7460:8"]]
- 00b03950 ["INT_ADD", "register:40f0:8", ["const:b03950:8", "const:4:8"]]
- 00b03950 ["CALL", null, ["callee:00851550:8"]]
+ 00b039ec ["INT_ADD", "register:40f0:8", ["const:b039ec:8", "const:4:8"]]
+ 00b039ec ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-77916503083539967e2472f8b4e73a6c"></a>

### [`00b039a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b03/00b039a8.md) → [`00b03a44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b03/00b03a44.md) FUN_00b03a44

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`006c6e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c6/006c6e10.md) [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) [`00b009dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b00/00b009dc.md) · 呼出先 3件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00b0272c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b02/00b0272c.md)
- 新版 呼出元 3件 [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00b00a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00a78.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b027c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b02/00b027c8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b039c4 ["INT_ADD", "register:40f0:8", ["const:b039c4:8", "const:4:8"]]
- 00b039c4 ["CALL", null, ["callee:00851550:8"]]
+ 00b03a60 ["INT_ADD", "register:40f0:8", ["const:b03a60:8", "const:4:8"]]
+ 00b03a60 ["CALL", null, ["callee:00851550:8"]]
- 00b039d8 ["INT_ADD", "register:40f0:8", ["const:b039d8:8", "const:4:8"]]
- 00b039d8 ["CALL", null, ["callee:005e7460:8"]]
+ 00b03a74 ["INT_ADD", "register:40f0:8", ["const:b03a74:8", "const:4:8"]]
+ 00b03a74 ["CALL", null, ["callee:005e7460:8"]]
- 00b039e8 ["INT_ADD", "register:40f0:8", ["const:b039e8:8", "const:4:8"]]
- 00b039e8 ["CALL", null, ["callee:00851550:8"]]
+ 00b03a84 ["INT_ADD", "register:40f0:8", ["const:b03a84:8", "const:4:8"]]
+ 00b03a84 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-20a278b9ab1b55396df932e3182b6761"></a>

### [`00b03a40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b03/00b03a40.md) → [`00b03adc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b03/00b03adc.md) FUN_00b03adc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`006c6e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c6/006c6e10.md) [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) [`00b009dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b00/00b009dc.md) · 呼出先 3件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00b0272c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b02/00b0272c.md)
- 新版 呼出元 3件 [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00b00a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00a78.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b027c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b02/00b027c8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b03a5c ["INT_ADD", "register:40f0:8", ["const:b03a5c:8", "const:4:8"]]
- 00b03a5c ["CALL", null, ["callee:00851550:8"]]
+ 00b03af8 ["INT_ADD", "register:40f0:8", ["const:b03af8:8", "const:4:8"]]
+ 00b03af8 ["CALL", null, ["callee:00851550:8"]]
- 00b03a70 ["INT_ADD", "register:40f0:8", ["const:b03a70:8", "const:4:8"]]
- 00b03a70 ["CALL", null, ["callee:005e7460:8"]]
+ 00b03b0c ["INT_ADD", "register:40f0:8", ["const:b03b0c:8", "const:4:8"]]
+ 00b03b0c ["CALL", null, ["callee:005e7460:8"]]
- 00b03a80 ["INT_ADD", "register:40f0:8", ["const:b03a80:8", "const:4:8"]]
- 00b03a80 ["CALL", null, ["callee:00851550:8"]]
+ 00b03b1c ["INT_ADD", "register:40f0:8", ["const:b03b1c:8", "const:4:8"]]
+ 00b03b1c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-51b1f021bc54e57ac47d429d0bd5124c"></a>

### [`00b03c18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b03/00b03c18.md) → [`00b03cb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b03/00b03cb4.md) FUN_00b03cb4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`006c6e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c6/006c6e10.md) [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) [`00b009dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b00/00b009dc.md) · 呼出先 3件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00b0272c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b02/00b0272c.md)
- 新版 呼出元 3件 [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00b00a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00a78.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b027c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b02/00b027c8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b03c34 ["INT_ADD", "register:40f0:8", ["const:b03c34:8", "const:4:8"]]
- 00b03c34 ["CALL", null, ["callee:00851550:8"]]
+ 00b03cd0 ["INT_ADD", "register:40f0:8", ["const:b03cd0:8", "const:4:8"]]
+ 00b03cd0 ["CALL", null, ["callee:00851550:8"]]
- 00b03c48 ["INT_ADD", "register:40f0:8", ["const:b03c48:8", "const:4:8"]]
- 00b03c48 ["CALL", null, ["callee:005e7460:8"]]
+ 00b03ce4 ["INT_ADD", "register:40f0:8", ["const:b03ce4:8", "const:4:8"]]
+ 00b03ce4 ["CALL", null, ["callee:005e7460:8"]]
- 00b03c58 ["INT_ADD", "register:40f0:8", ["const:b03c58:8", "const:4:8"]]
- 00b03c58 ["CALL", null, ["callee:00851550:8"]]
+ 00b03cf4 ["INT_ADD", "register:40f0:8", ["const:b03cf4:8", "const:4:8"]]
+ 00b03cf4 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-e25d4662461dba758a7b560110874884"></a>

### [`00b03cb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b03/00b03cb0.md) → [`00b03d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b03/00b03d4c.md) FUN_00b03d4c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`006c6e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c6/006c6e10.md) [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) [`00b009dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b00/00b009dc.md) · 呼出先 2件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) [`00b00a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00a78.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b03ccc ["INT_ADD", "register:40f0:8", ["const:b03ccc:8", "const:4:8"]]
- 00b03ccc ["CALL", null, ["callee:00851550:8"]]
+ 00b03d68 ["INT_ADD", "register:40f0:8", ["const:b03d68:8", "const:4:8"]]
+ 00b03d68 ["CALL", null, ["callee:00851550:8"]]
- 00b03ce0 ["INT_ADD", "register:40f0:8", ["const:b03ce0:8", "const:4:8"]]
- 00b03ce0 ["CALL", null, ["callee:005e7460:8"]]
+ 00b03d7c ["INT_ADD", "register:40f0:8", ["const:b03d7c:8", "const:4:8"]]
+ 00b03d7c ["CALL", null, ["callee:005e7460:8"]]
- 00b03cf0 ["INT_ADD", "register:40f0:8", ["const:b03cf0:8", "const:4:8"]]
- 00b03cf0 ["CALL", null, ["callee:00851550:8"]]
+ 00b03d8c ["INT_ADD", "register:40f0:8", ["const:b03d8c:8", "const:4:8"]]
+ 00b03d8c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-bf946de9b224f0d9215f078243dfdeab"></a>

### [`00b06334`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b06/00b06334.md) → [`00b063d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b06/00b063d0.md) FUN_00b063d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 3件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00afeae8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afe/00afeae8.md)
- 新版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00afeb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afeb84.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b06350 ["INT_ADD", "register:40f0:8", ["const:b06350:8", "const:4:8"]]
- 00b06350 ["CALL", null, ["callee:00851550:8"]]
+ 00b063ec ["INT_ADD", "register:40f0:8", ["const:b063ec:8", "const:4:8"]]
+ 00b063ec ["CALL", null, ["callee:00851550:8"]]
- 00b06364 ["INT_ADD", "register:40f0:8", ["const:b06364:8", "const:4:8"]]
- 00b06364 ["CALL", null, ["callee:005e7460:8"]]
+ 00b06400 ["INT_ADD", "register:40f0:8", ["const:b06400:8", "const:4:8"]]
+ 00b06400 ["CALL", null, ["callee:005e7460:8"]]
- 00b06374 ["INT_ADD", "register:40f0:8", ["const:b06374:8", "const:4:8"]]
- 00b06374 ["CALL", null, ["callee:00851550:8"]]
+ 00b06410 ["INT_ADD", "register:40f0:8", ["const:b06410:8", "const:4:8"]]
+ 00b06410 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-c21e304e7a4d93cd403d5bc85a38b619"></a>

### [`00b063c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b06/00b063c0.md) → [`00b0645c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b06/00b0645c.md) FUN_00b0645c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 3件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00afeae8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afe/00afeae8.md)
- 新版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00afeb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afeb84.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b063dc ["INT_ADD", "register:40f0:8", ["const:b063dc:8", "const:4:8"]]
- 00b063dc ["CALL", null, ["callee:00851550:8"]]
+ 00b06478 ["INT_ADD", "register:40f0:8", ["const:b06478:8", "const:4:8"]]
+ 00b06478 ["CALL", null, ["callee:00851550:8"]]
- 00b063f0 ["INT_ADD", "register:40f0:8", ["const:b063f0:8", "const:4:8"]]
- 00b063f0 ["CALL", null, ["callee:005e7460:8"]]
+ 00b0648c ["INT_ADD", "register:40f0:8", ["const:b0648c:8", "const:4:8"]]
+ 00b0648c ["CALL", null, ["callee:005e7460:8"]]
- 00b06400 ["INT_ADD", "register:40f0:8", ["const:b06400:8", "const:4:8"]]
- 00b06400 ["CALL", null, ["callee:00851550:8"]]
+ 00b0649c ["INT_ADD", "register:40f0:8", ["const:b0649c:8", "const:4:8"]]
+ 00b0649c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-67f9cffd5a15b6ee15abd4f7e67f3c52"></a>

### [`00b06504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b06/00b06504.md) → [`00b065a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b06/00b065a0.md) FUN_00b065a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 2件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b06520 ["INT_ADD", "register:40f0:8", ["const:b06520:8", "const:4:8"]]
- 00b06520 ["CALL", null, ["callee:00851550:8"]]
+ 00b065bc ["INT_ADD", "register:40f0:8", ["const:b065bc:8", "const:4:8"]]
+ 00b065bc ["CALL", null, ["callee:00851550:8"]]
- 00b06534 ["INT_ADD", "register:40f0:8", ["const:b06534:8", "const:4:8"]]
- 00b06534 ["CALL", null, ["callee:005e7460:8"]]
+ 00b065d0 ["INT_ADD", "register:40f0:8", ["const:b065d0:8", "const:4:8"]]
+ 00b065d0 ["CALL", null, ["callee:005e7460:8"]]
- 00b06544 ["INT_ADD", "register:40f0:8", ["const:b06544:8", "const:4:8"]]
- 00b06544 ["CALL", null, ["callee:00851550:8"]]
+ 00b065e0 ["INT_ADD", "register:40f0:8", ["const:b065e0:8", "const:4:8"]]
+ 00b065e0 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-a77aab68e5b4ef0298501a2a304380e1"></a>

### [`00b0657c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b06/00b0657c.md) → [`00b06618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b06/00b06618.md) FUN_00b06618

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`006c6e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c6/006c6e10.md) [`00a4f3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a4f/00a4f3b4.md) · 呼出先 2件 [`005e7420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e7/005e7420.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b06598 ["INT_ADD", "register:40f0:8", ["const:b06598:8", "const:4:8"]]
- 00b06598 ["CALL", null, ["callee:00851550:8"]]
+ 00b06634 ["INT_ADD", "register:40f0:8", ["const:b06634:8", "const:4:8"]]
+ 00b06634 ["CALL", null, ["callee:00851550:8"]]
- 00b065ac ["INT_ADD", "register:40f0:8", ["const:b065ac:8", "const:4:8"]]
- 00b065ac ["CALL", null, ["callee:005e7460:8"]]
+ 00b06648 ["INT_ADD", "register:40f0:8", ["const:b06648:8", "const:4:8"]]
+ 00b06648 ["CALL", null, ["callee:005e7460:8"]]
- 00b065bc ["INT_ADD", "register:40f0:8", ["const:b065bc:8", "const:4:8"]]
- 00b065bc ["CALL", null, ["callee:00851550:8"]]
+ 00b06658 ["INT_ADD", "register:40f0:8", ["const:b06658:8", "const:4:8"]]
+ 00b06658 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-54872ec2a048be67681eee2eece7df1a"></a>

### [`00b06888`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b06/00b06888.md) → [`00b06924`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b06/00b06924.md) FUN_00b06924

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b04c7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b04/00b04c7c.md) · 呼出先 3件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58090.md)
- 新版 呼出元 1件 [`00b04d18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b04/00b04d18.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b068f0 ["INT_ADD", "register:40f0:8", ["const:b068f0:8", "const:4:8"]]
- 00b068f0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b0698c ["INT_ADD", "register:40f0:8", ["const:b0698c:8", "const:4:8"]]
+ 00b0698c ["CALL", null, ["callee:00c57f60:8"]]
- 00b06908 ["INT_ADD", "register:40f0:8", ["const:b06908:8", "const:4:8"]]
- 00b06908 ["CALL", null, ["callee:00c58160:8"]]
+ 00b069a4 ["INT_ADD", "register:40f0:8", ["const:b069a4:8", "const:4:8"]]
+ 00b069a4 ["CALL", null, ["callee:00c58160:8"]]
- 00b06934 ["INT_ADD", "register:40f0:8", ["const:b06934:8", "const:4:8"]]
- 00b06934 ["CALL", null, ["callee:0043bbe4:8"]]
+ 00b069d0 ["INT_ADD", "register:40f0:8", ["const:b069d0:8", "const:4:8"]]
+ 00b069d0 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-f509f8867d76c60f5da155ab004d4579"></a>

### [`00b070d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b07/00b070d0.md) → [`00b0716c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b07/00b0716c.md) FUN_00b0716c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b04c7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b04/00b04c7c.md) · 呼出先 4件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00b073ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b07/00b073ec.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00b04d18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b04/00b04d18.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00b07488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b07/00b07488.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0711c ["INT_ADD", "register:40f0:8", ["const:b0711c:8", "const:4:8"]]
- 00b0711c ["CALL", null, ["callee:0043bbe4:8"]]
+ 00b071b8 ["INT_ADD", "register:40f0:8", ["const:b071b8:8", "const:4:8"]]
+ 00b071b8 ["CALL", null, ["callee:0043bbe4:8"]]
- 00b0714c ["INT_ADD", "register:40f0:8", ["const:b0714c:8", "const:4:8"]]
- 00b0714c ["CALL", null, ["callee:00b07488:8"]]
+ 00b071e8 ["INT_ADD", "register:40f0:8", ["const:b071e8:8", "const:4:8"]]
+ 00b071e8 ["CALL", null, ["callee:00b07488:8"]]
- 00b07160 ["INT_ADD", "register:40f0:8", ["const:b07160:8", "const:4:8"]]
- 00b07160 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b071fc ["INT_ADD", "register:40f0:8", ["const:b071fc:8", "const:4:8"]]
+ 00b071fc ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-c824bd08a4d54bc5b574f1dbf8023c9f"></a>

### [`00b07594`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b07/00b07594.md) → [`00b07630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b07/00b07630.md) FUN_00b07630

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00b04c7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b04/00b04c7c.md) [`00b07594`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b07/00b07594.md) · 呼出先 2件 [`00b07594`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b07/00b07594.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`00b04d18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b04/00b04d18.md) [`00b07630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b07/00b07630.md) · 呼出先 2件 [`00b07630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b07/00b07630.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b075b4 ["INT_ADD", "register:40f0:8", ["const:b075b4:8", "const:4:8"]]
- 00b075b4 ["CALL", null, ["local:b0:8"]]
+ 00b07650 ["INT_ADD", "register:40f0:8", ["const:b07650:8", "const:4:8"]]
+ 00b07650 ["CALL", null, ["local:b0:8"]]
- 00b075c0 ["INT_ADD", "register:40f0:8", ["const:b075c0:8", "const:4:8"]]
- 00b075c0 ["CALL", null, ["local:b0:8"]]
+ 00b0765c ["INT_ADD", "register:40f0:8", ["const:b0765c:8", "const:4:8"]]
+ 00b0765c ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-7f7d1c845980e2ff77aebd3c19105c2f"></a>

### [`00b07968`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b07/00b07968.md) → [`00b07a04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b07/00b07a04.md) FUN_00b07a04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0084e59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0084e/0084e59c.md) · 呼出先 2件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b07980 ["INT_ADD", "register:40f0:8", ["const:b07980:8", "const:4:8"]]
- 00b07980 ["CALL", null, ["callee:005c17dc:8"]]
+ 00b07a1c ["INT_ADD", "register:40f0:8", ["const:b07a1c:8", "const:4:8"]]
+ 00b07a1c ["CALL", null, ["callee:005c17dc:8"]]
- 00b0798c ["INT_ADD", "register:40f0:8", ["const:b0798c:8", "const:4:8"]]
- 00b0798c ["CALL", null, ["callee:00851550:8"]]
+ 00b07a28 ["INT_ADD", "register:40f0:8", ["const:b07a28:8", "const:4:8"]]
+ 00b07a28 ["CALL", null, ["callee:00851550:8"]]
- 00b07998 ["INT_ADD", "register:40f0:8", ["const:b07998:8", "const:4:8"]]
- 00b07998 ["CALL", null, ["callee:00851550:8"]]
+ 00b07a34 ["INT_ADD", "register:40f0:8", ["const:b07a34:8", "const:4:8"]]
+ 00b07a34 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-294a92b1c9e9549fa11837e63e497420"></a>

### [`00b08d1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b08/00b08d1c.md) → [`00b08db8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b08/00b08db8.md) FUN_00b08db8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b08d40 ["INT_ADD", "register:40f0:8", ["const:b08d40:8", "const:4:8"]]
- 00b08d40 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b08ddc ["INT_ADD", "register:40f0:8", ["const:b08ddc:8", "const:4:8"]]
+ 00b08ddc ["CALL", null, ["callee:00c57f80:8"]]
- 00b08d50 ["INT_ADD", "register:40f0:8", ["const:b08d50:8", "const:4:8"]]
- 00b08d50 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b08dec ["INT_ADD", "register:40f0:8", ["const:b08dec:8", "const:4:8"]]
+ 00b08dec ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-18cf829ce6327c081e95b1f524d9b1d6"></a>

### [`00b08d70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b08/00b08d70.md) → [`00b08e0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b08/00b08e0c.md) FUN_00b08e0c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00a06d9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a06d9c.md) [`00b3d618`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3d/00b3d618.md) · 呼出先 7件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0049f3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0049f/0049f3f0.md) [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00b0911c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b09/00b0911c.md)
- 新版 呼出元 2件 [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) [`00b3d6b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3d/00b3d6b4.md) · 呼出先 7件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b091b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b09/00b091b8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b08d9c ["INT_ADD", "register:40f0:8", ["const:b08d9c:8", "const:4:8"]]
- 00b08d9c ["CALL", null, ["callee:005c17dc:8"]]
+ 00b08e38 ["INT_ADD", "register:40f0:8", ["const:b08e38:8", "const:4:8"]]
+ 00b08e38 ["CALL", null, ["callee:005c17dc:8"]]
- 00b08dac ["INT_ADD", "register:40f0:8", ["const:b08dac:8", "const:4:8"]]
- 00b08dac ["CALL", null, ["callee:00851550:8"]]
+ 00b08e48 ["INT_ADD", "register:40f0:8", ["const:b08e48:8", "const:4:8"]]
+ 00b08e48 ["CALL", null, ["callee:00851550:8"]]
- 00b08db8 ["INT_ADD", "register:40f0:8", ["const:b08db8:8", "const:4:8"]]
- 00b08db8 ["CALL", null, ["callee:00851550:8"]]
+ 00b08e54 ["INT_ADD", "register:40f0:8", ["const:b08e54:8", "const:4:8"]]
+ 00b08e54 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-b1259c85b19c039a8688dcf27f49954a"></a>

### [`00b0911c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b09/00b0911c.md) → [`00b091b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b09/00b091b8.md) FUN_00b091b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b08d70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b08/00b08d70.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00b08e0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b08/00b08e0c.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b09144 ["INT_ADD", "register:40f0:8", ["const:b09144:8", "const:4:8"]]
- 00b09144 ["CALL", null, ["callee:00851550:8"]]
+ 00b091e0 ["INT_ADD", "register:40f0:8", ["const:b091e0:8", "const:4:8"]]
+ 00b091e0 ["CALL", null, ["callee:00851550:8"]]
- 00b0915c ["INT_ADD", "register:40f0:8", ["const:b0915c:8", "const:4:8"]]
- 00b0915c ["CALL", null, ["callee:00851550:8"]]
+ 00b091f8 ["INT_ADD", "register:40f0:8", ["const:b091f8:8", "const:4:8"]]
+ 00b091f8 ["CALL", null, ["callee:00851550:8"]]
- 00b09174 ["INT_ADD", "register:40f0:8", ["const:b09174:8", "const:4:8"]]
- 00b09174 ["CALL", null, ["callee:00851550:8"]]
+ 00b09210 ["INT_ADD", "register:40f0:8", ["const:b09210:8", "const:4:8"]]
+ 00b09210 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-d5ecef88e4b57b0f6ce0a480ff32681b"></a>

### [`00b09604`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b09/00b09604.md) → [`00b096a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b09/00b096a0.md) FUN_00b096a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0084e59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0084e/0084e59c.md) · 呼出先 2件 [`0086a7a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a7a4.md) [`0086a838`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a838.md)
- 新版 呼出元 1件 [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) · 呼出先 2件 [`0086a7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a7fc.md) [`0086a890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a890.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b09620 ["INT_ADD", "register:40f0:8", ["const:b09620:8", "const:4:8"]]
- 00b09620 ["CALL", null, ["callee:0086a890:8"]]
+ 00b096bc ["INT_ADD", "register:40f0:8", ["const:b096bc:8", "const:4:8"]]
+ 00b096bc ["CALL", null, ["callee:0086a890:8"]]
- 00b0963c ["INT_ADD", "register:40f0:8", ["const:b0963c:8", "const:4:8"]]
- 00b0963c ["CALL", null, ["callee:0086a7fc:8"]]
+ 00b096d8 ["INT_ADD", "register:40f0:8", ["const:b096d8:8", "const:4:8"]]
+ 00b096d8 ["CALL", null, ["callee:0086a7fc:8"]]
~~~


<a id="compare-5f3fb251106bd1734b11a2c38ec219d8"></a>

### [`00b09708`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b09/00b09708.md) → [`00b097a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b09/00b097a4.md) FUN_00b097a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a261bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a26/00a261bc.md) · 呼出先 14件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00480118`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480118.md) [`00480178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480178.md) [`004801d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004801d8.md)
- 新版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 14件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00480158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480158.md) [`004801b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/004801b8.md) [`00480218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480218.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0973c ["INT_ADD", "register:40f0:8", ["const:b0973c:8", "const:4:8"]]
- 00b0973c ["CALL", null, ["callee:0086a890:8"]]
+ 00b097d8 ["INT_ADD", "register:40f0:8", ["const:b097d8:8", "const:4:8"]]
+ 00b097d8 ["CALL", null, ["callee:0086a890:8"]]
- 00b09758 ["INT_ADD", "register:40f0:8", ["const:b09758:8", "const:4:8"]]
- 00b09758 ["CALL", null, ["callee:0086a7fc:8"]]
+ 00b097f4 ["INT_ADD", "register:40f0:8", ["const:b097f4:8", "const:4:8"]]
+ 00b097f4 ["CALL", null, ["callee:0086a7fc:8"]]
- 00b09774 ["INT_ADD", "register:40f0:8", ["const:b09774:8", "const:4:8"]]
- 00b09774 ["CALL", null, ["callee:004801b8:8"]]
+ 00b09810 ["INT_ADD", "register:40f0:8", ["const:b09810:8", "const:4:8"]]
+ 00b09810 ["CALL", null, ["callee:004801b8:8"]]
~~~


<a id="compare-5e3737000a5891f9bd6bb1c80128ea84"></a>

### [`00b09eac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b09/00b09eac.md) → [`00b09f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b09/00b09f48.md) FUN_00b09f48

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a2b2e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2b/00a2b2e8.md) · 呼出先 3件 [`00480b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480b38.md) [`00480b90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480b90.md) [`00480be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480be8.md)
- 新版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 3件 [`00480b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480b78.md) [`00480bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480bd0.md) [`00480c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480c28.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b09ed8 ["INT_ADD", "register:40f0:8", ["const:b09ed8:8", "const:4:8"]]
- 00b09ed8 ["CALL", null, ["callee:00480bd0:8"]]
+ 00b09f74 ["INT_ADD", "register:40f0:8", ["const:b09f74:8", "const:4:8"]]
+ 00b09f74 ["CALL", null, ["callee:00480bd0:8"]]
- 00b09ef4 ["INT_ADD", "register:40f0:8", ["const:b09ef4:8", "const:4:8"]]
- 00b09ef4 ["CALL", null, ["callee:00480bd0:8"]]
+ 00b09f90 ["INT_ADD", "register:40f0:8", ["const:b09f90:8", "const:4:8"]]
+ 00b09f90 ["CALL", null, ["callee:00480bd0:8"]]
- 00b09f28 ["INT_ADD", "register:40f0:8", ["const:b09f28:8", "const:4:8"]]
- 00b09f28 ["CALL", null, ["callee:00480c28:8"]]
+ 00b09fc4 ["INT_ADD", "register:40f0:8", ["const:b09fc4:8", "const:4:8"]]
+ 00b09fc4 ["CALL", null, ["callee:00480c28:8"]]
~~~


<a id="compare-7d8a8100cec3ed44185d80434b8072cd"></a>

### [`00b0a5b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0a/00b0a5b8.md) → [`00b0a654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0a/00b0a654.md) FUN_00b0a654

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00b0a088`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0a/00b0a088.md) [`00b0ad58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0a/00b0ad58.md) [`00b0c254`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0c/00b0c254.md) · 呼出先 9件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00802b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802b58.md) [`00802ca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802ca8.md)
- 新版 呼出元 3件 [`00b0a124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0a/00b0a124.md) [`00b0adf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0a/00b0adf4.md) [`00b0c2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0c/00b0c2f0.md) · 呼出先 9件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md) [`00802d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802d00.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0a5e8 ["INT_ADD", "register:40f0:8", ["const:b0a5e8:8", "const:4:8"]]
- 00b0a5e8 ["CALL", null, ["callee:00802bb0:8"]]
+ 00b0a684 ["INT_ADD", "register:40f0:8", ["const:b0a684:8", "const:4:8"]]
+ 00b0a684 ["CALL", null, ["callee:00802bb0:8"]]
- 00b0a5f0 ["INT_ADD", "register:40f0:8", ["const:b0a5f0:8", "const:4:8"]]
- 00b0a5f0 ["CALL", null, ["callee:00802d00:8"]]
+ 00b0a68c ["INT_ADD", "register:40f0:8", ["const:b0a68c:8", "const:4:8"]]
+ 00b0a68c ["CALL", null, ["callee:00802d00:8"]]
- 00b0a5f8 ["INT_ADD", "register:40f0:8", ["const:b0a5f8:8", "const:4:8"]]
- 00b0a5f8 ["CALL", null, ["callee:00802f38:8"]]
+ 00b0a694 ["INT_ADD", "register:40f0:8", ["const:b0a694:8", "const:4:8"]]
+ 00b0a694 ["CALL", null, ["callee:00802f38:8"]]
~~~


<a id="compare-1070ed8d8db3addc349ff96d28245132"></a>

### [`00b0a7f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0a/00b0a7f4.md) → [`00b0a890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0a/00b0a890.md) FUN_00b0a890

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00ae0b68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ae0/00ae0b68.md) [`00aed778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aed/00aed778.md) · 呼出先 13件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`006623ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00662/006623ec.md) [`00662490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00662/00662490.md) [`00662534`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00662/00662534.md)
- 新版 呼出元 2件 [`00ae0c04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ae0/00ae0c04.md) [`00aed814`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aed/00aed814.md) · 呼出先 13件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0066242c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/0066242c.md) [`006624d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/006624d0.md) [`00662574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/00662574.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0a824 ["INT_ADD", "register:40f0:8", ["const:b0a824:8", "const:4:8"]]
- 00b0a824 ["CALL", null, ["callee:00802bb0:8"]]
+ 00b0a8c0 ["INT_ADD", "register:40f0:8", ["const:b0a8c0:8", "const:4:8"]]
+ 00b0a8c0 ["CALL", null, ["callee:00802bb0:8"]]
- 00b0a82c ["INT_ADD", "register:40f0:8", ["const:b0a82c:8", "const:4:8"]]
- 00b0a82c ["CALL", null, ["callee:00802d00:8"]]
+ 00b0a8c8 ["INT_ADD", "register:40f0:8", ["const:b0a8c8:8", "const:4:8"]]
+ 00b0a8c8 ["CALL", null, ["callee:00802d00:8"]]
- 00b0a830 ["INT_ADD", "register:40f0:8", ["const:b0a830:8", "const:4:8"]]
- 00b0a830 ["CALL", null, ["callee:00802f38:8"]]
+ 00b0a8cc ["INT_ADD", "register:40f0:8", ["const:b0a8cc:8", "const:4:8"]]
+ 00b0a8cc ["CALL", null, ["callee:00802f38:8"]]
~~~


<a id="compare-1cf35635d48359626ff136af01ae012f"></a>

### [`00b0ad14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0a/00b0ad14.md) → [`00b0adb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0a/00b0adb0.md) FUN_00b0adb0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 8件 [`005bc7cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005bc/005bc7cc.md) [`00ad0958`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ad0/00ad0958.md) [`00ad6a88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ad6/00ad6a88.md) [`00ad6f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ad6/00ad6f4c.md) [`00adf090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00adf/00adf090.md) · 呼出先 1件 [`00c58450`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58450.md)
- 新版 呼出元 8件 [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) [`00ad09c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad0/00ad09c8.md) [`00ad6af8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad6/00ad6af8.md) [`00ad6fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad6/00ad6fbc.md) [`00adf100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00adf/00adf100.md) · 呼出先 1件 [`00c58520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58520.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0ad34 ["INT_ADD", "register:40f0:8", ["const:b0ad34:8", "const:4:8"]]
- 00b0ad34 ["CALL", null, ["callee:00c58520:8"]]
+ 00b0add0 ["INT_ADD", "register:40f0:8", ["const:b0add0:8", "const:4:8"]]
+ 00b0add0 ["CALL", null, ["callee:00c58520:8"]]
~~~


<a id="compare-ab04362e52a6b3fd9410722af39ea19a"></a>

### [`00b0ad58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0a/00b0ad58.md) → [`00b0adf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0a/00b0adf4.md) FUN_00b0adf4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) [`00ad0958`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ad0/00ad0958.md) · 呼出先 6件 [`00802b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802b58.md) [`00802ca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802ca8.md) [`00802ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802ee0.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00b0a5b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0a/00b0a5b8.md)
- 新版 呼出元 2件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`00ad09c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad0/00ad09c8.md) · 呼出先 6件 [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md) [`00802d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802d00.md) [`00802f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802f38.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b0a654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0a/00b0a654.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0ad78 ["INT_ADD", "register:40f0:8", ["const:b0ad78:8", "const:4:8"]]
- 00b0ad78 ["CALL", null, ["callee:00802bb0:8"]]
+ 00b0ae14 ["INT_ADD", "register:40f0:8", ["const:b0ae14:8", "const:4:8"]]
+ 00b0ae14 ["CALL", null, ["callee:00802bb0:8"]]
- 00b0ad80 ["INT_ADD", "register:40f0:8", ["const:b0ad80:8", "const:4:8"]]
- 00b0ad80 ["CALL", null, ["callee:00802d00:8"]]
+ 00b0ae1c ["INT_ADD", "register:40f0:8", ["const:b0ae1c:8", "const:4:8"]]
+ 00b0ae1c ["CALL", null, ["callee:00802d00:8"]]
- 00b0ad88 ["INT_ADD", "register:40f0:8", ["const:b0ad88:8", "const:4:8"]]
- 00b0ad88 ["CALL", null, ["callee:00802f38:8"]]
+ 00b0ae24 ["INT_ADD", "register:40f0:8", ["const:b0ae24:8", "const:4:8"]]
+ 00b0ae24 ["CALL", null, ["callee:00802f38:8"]]
~~~


<a id="compare-d9c50b650a33e09ceb369b3893ea8c51"></a>

### [`00b0aea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0a/00b0aea0.md) → [`00b0af3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0a/00b0af3c.md) FUN_00b0af3c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) · 呼出先 12件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00802b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802b58.md) [`00802ca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802ca8.md) [`00802ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802ee0.md)
- 新版 呼出元 1件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) · 呼出先 12件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md) [`00802d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802d00.md) [`00802f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802f38.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0aee8 ["INT_ADD", "register:40f0:8", ["const:b0aee8:8", "const:4:8"]]
- 00b0aee8 ["CALL", null, ["callee:00802bb0:8"]]
+ 00b0af84 ["INT_ADD", "register:40f0:8", ["const:b0af84:8", "const:4:8"]]
+ 00b0af84 ["CALL", null, ["callee:00802bb0:8"]]
- 00b0aef0 ["INT_ADD", "register:40f0:8", ["const:b0aef0:8", "const:4:8"]]
- 00b0aef0 ["CALL", null, ["callee:00802d00:8"]]
+ 00b0af8c ["INT_ADD", "register:40f0:8", ["const:b0af8c:8", "const:4:8"]]
+ 00b0af8c ["CALL", null, ["callee:00802d00:8"]]
- 00b0aef8 ["INT_ADD", "register:40f0:8", ["const:b0aef8:8", "const:4:8"]]
- 00b0aef8 ["CALL", null, ["callee:00802f38:8"]]
+ 00b0af94 ["INT_ADD", "register:40f0:8", ["const:b0af94:8", "const:4:8"]]
+ 00b0af94 ["CALL", null, ["callee:00802f38:8"]]
~~~


<a id="compare-7a4125e2845c7ba8a4f84d3f043b722c"></a>

### [`00b0b384`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0b/00b0b384.md) → [`00b0b420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0b/00b0b420.md) FUN_00b0b420

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 8件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) [`007df0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007df/007df0e8.md) [`00ad0958`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ad0/00ad0958.md) [`00ad6f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ad6/00ad6f4c.md) · 呼出先 5件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00802b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802b58.md) [`00802ca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802ca8.md) [`00802ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802ee0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 8件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) [`00ad09c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad0/00ad09c8.md) [`00ad6fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad6/00ad6fbc.md) · 呼出先 5件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md) [`00802d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802d00.md) [`00802f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802f38.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0b3bc ["INT_ADD", "register:40f0:8", ["const:b0b3bc:8", "const:4:8"]]
- 00b0b3bc ["CALL", null, ["callee:00802bb0:8"]]
+ 00b0b458 ["INT_ADD", "register:40f0:8", ["const:b0b458:8", "const:4:8"]]
+ 00b0b458 ["CALL", null, ["callee:00802bb0:8"]]
- 00b0b3c4 ["INT_ADD", "register:40f0:8", ["const:b0b3c4:8", "const:4:8"]]
- 00b0b3c4 ["CALL", null, ["callee:00802d00:8"]]
+ 00b0b460 ["INT_ADD", "register:40f0:8", ["const:b0b460:8", "const:4:8"]]
+ 00b0b460 ["CALL", null, ["callee:00802d00:8"]]
- 00b0b3cc ["INT_ADD", "register:40f0:8", ["const:b0b3cc:8", "const:4:8"]]
- 00b0b3cc ["CALL", null, ["callee:00802f38:8"]]
+ 00b0b468 ["INT_ADD", "register:40f0:8", ["const:b0b468:8", "const:4:8"]]
+ 00b0b468 ["CALL", null, ["callee:00802f38:8"]]
~~~


<a id="compare-07d0eb2a00217eeced1d6df4261b04ca"></a>

### [`00b0b4dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0b/00b0b4dc.md) → [`00b0b578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0b/00b0b578.md) FUN_00b0b578

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00b0b640`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0b/00b0b640.md) [`00b0bd00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0b/00b0bd00.md) · 呼出先 5件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00802b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802b58.md) [`00802ca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802ca8.md) [`00802ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802ee0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 2件 [`00b0b6dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0b/00b0b6dc.md) [`00b0bd9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0b/00b0bd9c.md) · 呼出先 5件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md) [`00802d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802d00.md) [`00802f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802f38.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0b518 ["INT_ADD", "register:40f0:8", ["const:b0b518:8", "const:4:8"]]
- 00b0b518 ["CALL", null, ["callee:00802bb0:8"]]
+ 00b0b5b4 ["INT_ADD", "register:40f0:8", ["const:b0b5b4:8", "const:4:8"]]
+ 00b0b5b4 ["CALL", null, ["callee:00802bb0:8"]]
- 00b0b520 ["INT_ADD", "register:40f0:8", ["const:b0b520:8", "const:4:8"]]
- 00b0b520 ["CALL", null, ["callee:00802d00:8"]]
+ 00b0b5bc ["INT_ADD", "register:40f0:8", ["const:b0b5bc:8", "const:4:8"]]
+ 00b0b5bc ["CALL", null, ["callee:00802d00:8"]]
- 00b0b528 ["INT_ADD", "register:40f0:8", ["const:b0b528:8", "const:4:8"]]
- 00b0b528 ["CALL", null, ["callee:00802f38:8"]]
+ 00b0b5c4 ["INT_ADD", "register:40f0:8", ["const:b0b5c4:8", "const:4:8"]]
+ 00b0b5c4 ["CALL", null, ["callee:00802f38:8"]]
~~~


<a id="compare-ce9c854e47bdb674a88b6c792aeb27fc"></a>

### [`00b0c81c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0c/00b0c81c.md) → [`00b0c8b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0c/00b0c8b8.md) FUN_00b0c8b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b09708`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b09/00b09708.md) · 呼出先 5件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00b0ca28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0c/00b0ca28.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58090.md)
- 新版 呼出元 1件 [`00b097a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b09/00b097a4.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00b0cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0c/00b0cac4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0c8c8 ["INT_ADD", "register:40f0:8", ["const:b0c8c8:8", "const:4:8"]]
- 00b0c8c8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b0c964 ["INT_ADD", "register:40f0:8", ["const:b0c964:8", "const:4:8"]]
+ 00b0c964 ["CALL", null, ["callee:00c57f60:8"]]
- 00b0c90c ["INT_ADD", "register:40f0:8", ["const:b0c90c:8", "const:4:8"]]
- 00b0c90c ["CALL", null, ["callee:00c58160:8"]]
+ 00b0c9a8 ["INT_ADD", "register:40f0:8", ["const:b0c9a8:8", "const:4:8"]]
+ 00b0c9a8 ["CALL", null, ["callee:00c58160:8"]]
- 00b0c950 ["INT_ADD", "register:40f0:8", ["const:b0c950:8", "const:4:8"]]
- 00b0c950 ["CALL", null, ["callee:00c58160:8"]]
+ 00b0c9ec ["INT_ADD", "register:40f0:8", ["const:b0c9ec:8", "const:4:8"]]
+ 00b0c9ec ["CALL", null, ["callee:00c58160:8"]]
~~~


<a id="compare-3f4bc19a21260a66c6800b50304b5823"></a>

### [`00b0ca50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0c/00b0ca50.md) → [`00b0caec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0c/00b0caec.md) FUN_00b0caec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b0aea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0a/00b0aea0.md) · 呼出先 4件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00b0ca28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0c/00b0ca28.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00b0af3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0a/00b0af3c.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00b0cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0c/00b0cac4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0cadc ["INT_ADD", "register:40f0:8", ["const:b0cadc:8", "const:4:8"]]
- 00b0cadc ["CALL", null, ["callee:00c57f60:8"]]
+ 00b0cb78 ["INT_ADD", "register:40f0:8", ["const:b0cb78:8", "const:4:8"]]
+ 00b0cb78 ["CALL", null, ["callee:00c57f60:8"]]
- 00b0cb94 ["INT_ADD", "register:40f0:8", ["const:b0cb94:8", "const:4:8"]]
- 00b0cb94 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b0cc30 ["INT_ADD", "register:40f0:8", ["const:b0cc30:8", "const:4:8"]]
+ 00b0cc30 ["CALL", null, ["callee:00c57f80:8"]]
- 00b0cbb0 ["INT_ADD", "register:40f0:8", ["const:b0cbb0:8", "const:4:8"]]
- 00b0cbb0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b0cc4c ["INT_ADD", "register:40f0:8", ["const:b0cc4c:8", "const:4:8"]]
+ 00b0cc4c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-b6c65c3a899ad01c9fc5a1f2323c5e16"></a>

### [`00b0d2f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0d/00b0d2f4.md) → [`00b0d390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0d390.md) FUN_00b0d390

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b6a5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6a5c.md) [`008b79c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b79c8.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6ab4.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0d300 ["INT_ADD", "register:40f0:8", ["const:b0d300:8", "const:4:8"]]
- 00b0d300 ["CALL", null, ["callee:00851550:8"]]
+ 00b0d39c ["INT_ADD", "register:40f0:8", ["const:b0d39c:8", "const:4:8"]]
+ 00b0d39c ["CALL", null, ["callee:00851550:8"]]
- 00b0d310 ["INT_ADD", "register:40f0:8", ["const:b0d310:8", "const:4:8"]]
- 00b0d310 ["CALL", null, ["callee:008b7a20:8"]]
+ 00b0d3ac ["INT_ADD", "register:40f0:8", ["const:b0d3ac:8", "const:4:8"]]
+ 00b0d3ac ["CALL", null, ["callee:008b7a20:8"]]
- 00b0d318 ["INT_ADD", "register:40f0:8", ["const:b0d318:8", "const:4:8"]]
- 00b0d318 ["CALL", null, ["callee:008b6ab4:8"]]
+ 00b0d3b4 ["INT_ADD", "register:40f0:8", ["const:b0d3b4:8", "const:4:8"]]
+ 00b0d3b4 ["CALL", null, ["callee:008b6ab4:8"]]
~~~


<a id="compare-5ed35760a0ee952788038ee2e836b6e7"></a>

### [`00b0d3d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0d/00b0d3d0.md) → [`00b0d46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0d46c.md) FUN_00b0d46c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 13件 [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md) [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 13件 [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0d3fc ["INT_ADD", "register:40f0:8", ["const:b0d3fc:8", "const:4:8"]]
- 00b0d3fc ["CALL", null, ["callee:008b92e8:8"]]
+ 00b0d498 ["INT_ADD", "register:40f0:8", ["const:b0d498:8", "const:4:8"]]
+ 00b0d498 ["CALL", null, ["callee:008b92e8:8"]]
- 00b0d41c ["INT_ADD", "register:40f0:8", ["const:b0d41c:8", "const:4:8"]]
- 00b0d41c ["CALL", null, ["callee:008b92f0:8"]]
+ 00b0d4b8 ["INT_ADD", "register:40f0:8", ["const:b0d4b8:8", "const:4:8"]]
+ 00b0d4b8 ["CALL", null, ["callee:008b92f0:8"]]
- 00b0d428 ["INT_ADD", "register:40f0:8", ["const:b0d428:8", "const:4:8"]]
- 00b0d428 ["CALL", null, ["callee:008b92f0:8"]]
+ 00b0d4c4 ["INT_ADD", "register:40f0:8", ["const:b0d4c4:8", "const:4:8"]]
+ 00b0d4c4 ["CALL", null, ["callee:008b92f0:8"]]
~~~


<a id="compare-c70a7e7578215bae6de8b92d1b13a6ba"></a>

### [`00b0daa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0d/00b0daa0.md) → [`00b0db3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0db3c.md) FUN_00b0db3c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b0c254`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0c/00b0c254.md) · 呼出先 2件 [`00494610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00494/00494610.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00b0c2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0c/00b0c2f0.md) · 呼出先 2件 [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0db08 ["INT_ADD", "register:40f0:8", ["const:b0db08:8", "const:4:8"]]
- 00b0db08 ["CALL", null, ["callee:00494650:8"]]
+ 00b0dba4 ["INT_ADD", "register:40f0:8", ["const:b0dba4:8", "const:4:8"]]
+ 00b0dba4 ["CALL", null, ["callee:00494650:8"]]
- 00b0db44 ["INT_ADD", "register:40f0:8", ["const:b0db44:8", "const:4:8"]]
- 00b0db44 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b0dbe0 ["INT_ADD", "register:40f0:8", ["const:b0dbe0:8", "const:4:8"]]
+ 00b0dbe0 ["CALL", null, ["callee:00c57f80:8"]]
- 00b0db54 ["INT_ADD", "register:40f0:8", ["const:b0db54:8", "const:4:8"]]
- 00b0db54 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b0dbf0 ["INT_ADD", "register:40f0:8", ["const:b0dbf0:8", "const:4:8"]]
+ 00b0dbf0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-0d8233a1056290d8f956f5e9bef4dbab"></a>

### [`00b0edbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0e/00b0edbc.md) → [`00b0ee58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0e/00b0ee58.md) FUN_00b0ee58

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a1a750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a1a/00a1a750.md) · 呼出先 2件 [`004802f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004802f8.md) [`004803f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004803f0.md)
- 新版 呼出元 1件 [`00a1a7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a7a4.md) · 呼出先 2件 [`00480338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480338.md) [`00480430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480430.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0eddc ["INT_ADD", "register:40f0:8", ["const:b0eddc:8", "const:4:8"]]
- 00b0eddc ["CALL", null, ["callee:00480430:8"]]
+ 00b0ee78 ["INT_ADD", "register:40f0:8", ["const:b0ee78:8", "const:4:8"]]
+ 00b0ee78 ["CALL", null, ["callee:00480430:8"]]
- 00b0ede8 ["INT_ADD", "register:40f0:8", ["const:b0ede8:8", "const:4:8"]]
- 00b0ede8 ["CALL", null, ["callee:00480430:8"]]
+ 00b0ee84 ["INT_ADD", "register:40f0:8", ["const:b0ee84:8", "const:4:8"]]
+ 00b0ee84 ["CALL", null, ["callee:00480430:8"]]
- 00b0edf4 ["INT_ADD", "register:40f0:8", ["const:b0edf4:8", "const:4:8"]]
- 00b0edf4 ["CALL", null, ["callee:00480430:8"]]
+ 00b0ee90 ["INT_ADD", "register:40f0:8", ["const:b0ee90:8", "const:4:8"]]
+ 00b0ee90 ["CALL", null, ["callee:00480430:8"]]
~~~


<a id="compare-e316d0bdb8209f2614bee64e23a813e1"></a>

### [`00b0eedc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0e/00b0eedc.md) → [`00b0ef78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0e/00b0ef78.md) FUN_00b0ef78

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a223d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a22/00a223d0.md) · 呼出先 2件 [`00480d48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480d48.md) [`00480e28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480e28.md)
- 新版 呼出元 1件 [`00a22424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a22/00a22424.md) · 呼出先 2件 [`00480d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480d88.md) [`00480e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480e68.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0eefc ["INT_ADD", "register:40f0:8", ["const:b0eefc:8", "const:4:8"]]
- 00b0eefc ["CALL", null, ["callee:00480e68:8"]]
+ 00b0ef98 ["INT_ADD", "register:40f0:8", ["const:b0ef98:8", "const:4:8"]]
+ 00b0ef98 ["CALL", null, ["callee:00480e68:8"]]
- 00b0ef08 ["INT_ADD", "register:40f0:8", ["const:b0ef08:8", "const:4:8"]]
- 00b0ef08 ["CALL", null, ["callee:00480e68:8"]]
+ 00b0efa4 ["INT_ADD", "register:40f0:8", ["const:b0efa4:8", "const:4:8"]]
+ 00b0efa4 ["CALL", null, ["callee:00480e68:8"]]
- 00b0ef14 ["INT_ADD", "register:40f0:8", ["const:b0ef14:8", "const:4:8"]]
- 00b0ef14 ["CALL", null, ["callee:00480e68:8"]]
+ 00b0efb0 ["INT_ADD", "register:40f0:8", ["const:b0efb0:8", "const:4:8"]]
+ 00b0efb0 ["CALL", null, ["callee:00480e68:8"]]
~~~


<a id="compare-a4968e1c1b26bc23ee29c46b0ac93b56"></a>

### [`00b0efa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0e/00b0efa0.md) → [`00b0f03c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0f/00b0f03c.md) FUN_00b0f03c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a1a750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a1a/00a1a750.md) · 呼出先 1件 [`004803f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004803f0.md)
- 新版 呼出元 1件 [`00a1a7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a7a4.md) · 呼出先 1件 [`00480430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480430.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0efb8 ["INT_ADD", "register:40f0:8", ["const:b0efb8:8", "const:4:8"]]
- 00b0efb8 ["CALL", null, ["callee:00480430:8"]]
+ 00b0f054 ["INT_ADD", "register:40f0:8", ["const:b0f054:8", "const:4:8"]]
+ 00b0f054 ["CALL", null, ["callee:00480430:8"]]
- 00b0efc4 ["INT_ADD", "register:40f0:8", ["const:b0efc4:8", "const:4:8"]]
- 00b0efc4 ["CALL", null, ["callee:00480430:8"]]
+ 00b0f060 ["INT_ADD", "register:40f0:8", ["const:b0f060:8", "const:4:8"]]
+ 00b0f060 ["CALL", null, ["callee:00480430:8"]]
~~~


