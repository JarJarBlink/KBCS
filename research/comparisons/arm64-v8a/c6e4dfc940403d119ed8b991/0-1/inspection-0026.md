# v16.0.1 → v16.0.2 · 要調査の変更候補 (26)

[一覧の目次](README.md)

<a id="compare-44aa674d8c42a42baaf8f67dfd113749"></a>

### [`00848358`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848358.md) → [`008483b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/008483b0.md) FUN_008483b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`0046efdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046efdc.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0084836c ["INT_ADD", "register:40f0:8", ["const:84836c:8", "const:4:8"]]
- 0084836c ["CALL", null, ["callee:0046f01c:8"]]
+ 008483c4 ["INT_ADD", "register:40f0:8", ["const:8483c4:8", "const:4:8"]]
+ 008483c4 ["CALL", null, ["callee:0046f01c:8"]]
- 00848374 ["INT_ADD", "register:40f0:8", ["const:848374:8", "const:4:8"]]
- 00848374 ["CALL", null, ["callee:0046f01c:8"]]
+ 008483cc ["INT_ADD", "register:40f0:8", ["const:8483cc:8", "const:4:8"]]
+ 008483cc ["CALL", null, ["callee:0046f01c:8"]]
- 0084837c ["INT_ADD", "register:40f0:8", ["const:84837c:8", "const:4:8"]]
- 0084837c ["CALL", null, ["callee:0046f01c:8"]]
+ 008483d4 ["INT_ADD", "register:40f0:8", ["const:8483d4:8", "const:4:8"]]
+ 008483d4 ["CALL", null, ["callee:0046f01c:8"]]
~~~


<a id="compare-c49ff1597fa34dd7220c5a634dec14dd"></a>

### [`00848390`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848390.md) → [`008483e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/008483e8.md) FUN_008483e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00810ae8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00810/00810ae8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00810b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00810/00810b40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008483a8 ["INT_ADD", "register:40f0:8", ["const:8483a8:8", "const:4:8"]]
- 008483a8 ["CALL", null, ["callee:00810b40:8"]]
+ 00848400 ["INT_ADD", "register:40f0:8", ["const:848400:8", "const:4:8"]]
+ 00848400 ["CALL", null, ["callee:00810b40:8"]]
- 008483b8 ["INT_ADD", "register:40f0:8", ["const:8483b8:8", "const:4:8"]]
- 008483b8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00848410 ["INT_ADD", "register:40f0:8", ["const:848410:8", "const:4:8"]]
+ 00848410 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-f345b63d24a4392ae0fc9227247e8ca2"></a>

### [`008483e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/008483e0.md) → [`00848438`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848438.md) FUN_00848438

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848420 ["COPY", "register:0:8", ["register:4040:8"]]
- 00848420 ["INT_ADD", "register:40f0:8", ["const:848420:8", "const:4:8"]]
- 00848420 ["CALLIND", null, ["register:0:8"]]
+ 00848478 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00848478 ["INT_ADD", "register:40f0:8", ["const:848478:8", "const:4:8"]]
+ 00848478 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d41c7dae1bd23360615ca707aeb6b72e"></a>

### [`00848470`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848470.md) → [`008484c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/008484c8.md) FUN_008484c8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008484b8 ["INT_ADD", "register:40f0:8", ["const:8484b8:8", "const:4:8"]]
- 008484b8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00848510 ["INT_ADD", "register:40f0:8", ["const:848510:8", "const:4:8"]]
+ 00848510 ["CALL", null, ["callee:00c57f80:8"]]
- 008484c8 ["INT_ADD", "register:40f0:8", ["const:8484c8:8", "const:4:8"]]
- 008484c8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00848520 ["INT_ADD", "register:40f0:8", ["const:848520:8", "const:4:8"]]
+ 00848520 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-5a5d1ba2e8e7ce606d701b9dcd8afc62"></a>

### [`008484f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/008484f8.md) → [`00848550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848550.md) FUN_00848550

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00869d7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869d7c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00869dd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869dd4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848510 ["INT_ADD", "register:40f0:8", ["const:848510:8", "const:4:8"]]
- 00848510 ["CALL", null, ["callee:00869dd4:8"]]
+ 00848568 ["INT_ADD", "register:40f0:8", ["const:848568:8", "const:4:8"]]
+ 00848568 ["CALL", null, ["callee:00869dd4:8"]]
~~~


<a id="compare-05eca9909dc3dfcb57a45f2e14813e4a"></a>

### [`00848538`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848538.md) → [`00848590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848590.md) FUN_00848590

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`009a4e58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a4/009a4e58.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`009a4eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a4/009a4eac.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848554 ["INT_ADD", "register:40f0:8", ["const:848554:8", "const:4:8"]]
- 00848554 ["CALL", null, ["callee:009a4eac:8"]]
+ 008485ac ["INT_ADD", "register:40f0:8", ["const:8485ac:8", "const:4:8"]]
+ 008485ac ["CALL", null, ["callee:009a4eac:8"]]
~~~


<a id="compare-c46ddcb1991adbd495d423f73589c26a"></a>

### [`00848574`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848574.md) → [`008485cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/008485cc.md) FUN_008485cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`007ab37c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ab/007ab37c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`007ab3d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ab/007ab3d4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848590 ["INT_ADD", "register:40f0:8", ["const:848590:8", "const:4:8"]]
- 00848590 ["CALL", null, ["callee:007ab3d4:8"]]
+ 008485e8 ["INT_ADD", "register:40f0:8", ["const:8485e8:8", "const:4:8"]]
+ 008485e8 ["CALL", null, ["callee:007ab3d4:8"]]
~~~


<a id="compare-e2d33b5d3c39faa5c1a95b7be08ff437"></a>

### [`008485b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/008485b0.md) → [`00848608`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848608.md) FUN_00848608

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00797ad8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00797/00797ad8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00797b30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00797/00797b30.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008485cc ["INT_ADD", "register:40f0:8", ["const:8485cc:8", "const:4:8"]]
- 008485cc ["CALL", null, ["callee:00797b30:8"]]
+ 00848624 ["INT_ADD", "register:40f0:8", ["const:848624:8", "const:4:8"]]
+ 00848624 ["CALL", null, ["callee:00797b30:8"]]
~~~


<a id="compare-dbb1c127d0c8639d85c53caca6eb0a74"></a>

### [`008485ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/008485ec.md) → [`00848644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848644.md) FUN_00848644

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005b13a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b1/005b13a8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005b13e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b13e8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848608 ["INT_ADD", "register:40f0:8", ["const:848608:8", "const:4:8"]]
- 00848608 ["CALL", null, ["callee:005b13e8:8"]]
+ 00848660 ["INT_ADD", "register:40f0:8", ["const:848660:8", "const:4:8"]]
+ 00848660 ["CALL", null, ["callee:005b13e8:8"]]
~~~


<a id="compare-532b7592fc4bb31d74404b8b870e1c7c"></a>

### [`00848628`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848628.md) → [`00848680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848680.md) FUN_00848680

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0066299c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00662/0066299c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`006629dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/006629dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848648 ["INT_ADD", "register:40f0:8", ["const:848648:8", "const:4:8"]]
- 00848648 ["CALL", null, ["callee:00c57f80:8"]]
+ 008486a0 ["INT_ADD", "register:40f0:8", ["const:8486a0:8", "const:4:8"]]
+ 008486a0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-f5d4315846a439c3ab62d29861479192"></a>

### [`00848660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848660.md) → [`008486b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/008486b8.md) FUN_008486b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0087e6d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087e6d0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0087e728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087e728.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0084867c ["INT_ADD", "register:40f0:8", ["const:84867c:8", "const:4:8"]]
- 0084867c ["CALL", null, ["callee:0087e728:8"]]
+ 008486d4 ["INT_ADD", "register:40f0:8", ["const:8486d4:8", "const:4:8"]]
+ 008486d4 ["CALL", null, ["callee:0087e728:8"]]
~~~


<a id="compare-9b430b19fc93983fe4dd3a1c49c46086"></a>

### [`0084869c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/0084869c.md) → [`008486f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/008486f4.md) FUN_008486f4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0087d508`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087d/0087d508.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0087d560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087d560.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008486b8 ["INT_ADD", "register:40f0:8", ["const:8486b8:8", "const:4:8"]]
- 008486b8 ["CALL", null, ["callee:0087d560:8"]]
+ 00848710 ["INT_ADD", "register:40f0:8", ["const:848710:8", "const:4:8"]]
+ 00848710 ["CALL", null, ["callee:0087d560:8"]]
~~~


<a id="compare-c421396edb701557027019eee329314f"></a>

### [`008486d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/008486d8.md) → [`00848730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848730.md) FUN_00848730

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0087822c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00878/0087822c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00878284`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/00878284.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008486f4 ["INT_ADD", "register:40f0:8", ["const:8486f4:8", "const:4:8"]]
- 008486f4 ["CALL", null, ["callee:00878284:8"]]
+ 0084874c ["INT_ADD", "register:40f0:8", ["const:84874c:8", "const:4:8"]]
+ 0084874c ["CALL", null, ["callee:00878284:8"]]
~~~


<a id="compare-4881480956d6f37bacfe3a8bdf31a79c"></a>

### [`00848714`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848714.md) → [`0084876c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/0084876c.md) FUN_0084876c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00890fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00890/00890fe0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00891038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891038.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848730 ["INT_ADD", "register:40f0:8", ["const:848730:8", "const:4:8"]]
- 00848730 ["CALL", null, ["callee:00891038:8"]]
+ 00848788 ["INT_ADD", "register:40f0:8", ["const:848788:8", "const:4:8"]]
+ 00848788 ["CALL", null, ["callee:00891038:8"]]
~~~


<a id="compare-15f6012f373e48f39ca2ff7992b88d3c"></a>

### [`00848750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848750.md) → [`008487a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/008487a8.md) FUN_008487a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00887724`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/00887724.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0088777c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/0088777c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0084876c ["INT_ADD", "register:40f0:8", ["const:84876c:8", "const:4:8"]]
- 0084876c ["CALL", null, ["callee:0088777c:8"]]
+ 008487c4 ["INT_ADD", "register:40f0:8", ["const:8487c4:8", "const:4:8"]]
+ 008487c4 ["CALL", null, ["callee:0088777c:8"]]
~~~


<a id="compare-cd3fc6e187b6c82c4480544f0799ec68"></a>

### [`0084878c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/0084878c.md) → [`008487e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/008487e4.md) FUN_008487e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`009b886c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b8/009b886c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`009b88c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b88c0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008487a8 ["INT_ADD", "register:40f0:8", ["const:8487a8:8", "const:4:8"]]
- 008487a8 ["CALL", null, ["callee:009b88c0:8"]]
+ 00848800 ["INT_ADD", "register:40f0:8", ["const:848800:8", "const:4:8"]]
+ 00848800 ["CALL", null, ["callee:009b88c0:8"]]
~~~


<a id="compare-b7996ab1946eff3661e34839bb3575d4"></a>

### [`008487c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/008487c8.md) → [`00848820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848820.md) FUN_00848820

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00869ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869ef4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00869f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869f4c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008487e8 ["INT_ADD", "register:40f0:8", ["const:8487e8:8", "const:4:8"]]
- 008487e8 ["CALL", null, ["callee:00869f4c:8"]]
+ 00848840 ["INT_ADD", "register:40f0:8", ["const:848840:8", "const:4:8"]]
+ 00848840 ["CALL", null, ["callee:00869f4c:8"]]
- 008487f0 ["INT_ADD", "register:40f0:8", ["const:8487f0:8", "const:4:8"]]
- 008487f0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00848848 ["INT_ADD", "register:40f0:8", ["const:848848:8", "const:4:8"]]
+ 00848848 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-f15dcb5c611402a31c21c901499a4e9a"></a>

### [`00848818`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848818.md) → [`00848870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848870.md) FUN_00848870

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00869fb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869fb0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0086a008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a008.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848864 ["INT_ADD", "register:40f0:8", ["const:848864:8", "const:4:8"]]
- 00848864 ["CALL", null, ["callee:00c57f80:8"]]
+ 008488bc ["INT_ADD", "register:40f0:8", ["const:8488bc:8", "const:4:8"]]
+ 008488bc ["CALL", null, ["callee:00c57f80:8"]]
- 00848874 ["INT_ADD", "register:40f0:8", ["const:848874:8", "const:4:8"]]
- 00848874 ["CALL", null, ["callee:00c57f80:8"]]
+ 008488cc ["INT_ADD", "register:40f0:8", ["const:8488cc:8", "const:4:8"]]
+ 008488cc ["CALL", null, ["callee:00c57f80:8"]]
- 00848884 ["INT_ADD", "register:40f0:8", ["const:848884:8", "const:4:8"]]
- 00848884 ["CALL", null, ["callee:00c57f80:8"]]
+ 008488dc ["INT_ADD", "register:40f0:8", ["const:8488dc:8", "const:4:8"]]
+ 008488dc ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-376aae627165fdbd65fede083b6f5ff4"></a>

### [`008488dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/008488dc.md) → [`00848934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848934.md) FUN_00848934

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`0086a064`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a064.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`0086a0bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a0bc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008488f4 ["INT_ADD", "register:40f0:8", ["const:8488f4:8", "const:4:8"]]
- 008488f4 ["CALL", null, ["callee:005c17dc:8"]]
+ 0084894c ["INT_ADD", "register:40f0:8", ["const:84894c:8", "const:4:8"]]
+ 0084894c ["CALL", null, ["callee:005c17dc:8"]]
~~~


<a id="compare-40ecbae4dd77e7cb8ecd0f3d80895d2f"></a>

### [`0084890c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/0084890c.md) → [`00848964`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848964.md) FUN_00848964

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848928 ["INT_ADD", "register:40f0:8", ["const:848928:8", "const:4:8"]]
- 00848928 ["CALL", null, ["callee:00c57f80:8"]]
+ 00848980 ["INT_ADD", "register:40f0:8", ["const:848980:8", "const:4:8"]]
+ 00848980 ["CALL", null, ["callee:00c57f80:8"]]
- 00848938 ["INT_ADD", "register:40f0:8", ["const:848938:8", "const:4:8"]]
- 00848938 ["CALL", null, ["callee:00c57f80:8"]]
+ 00848990 ["INT_ADD", "register:40f0:8", ["const:848990:8", "const:4:8"]]
+ 00848990 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-054be78261d6d94df470e4481089b4ff"></a>

### [`00848960`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848960.md) → [`008489b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/008489b8.md) FUN_008489b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) · 呼出先 4件 [`005b9ee4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b9/005b9ee4.md) [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`005ec060`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ec/005ec060.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) · 呼出先 4件 [`005b9f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9f24.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`005ec0a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ec/005ec0a0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0084897c ["INT_ADD", "register:40f0:8", ["const:84897c:8", "const:4:8"]]
- 0084897c ["CALL", null, ["callee:005b9f24:8"]]
+ 008489d4 ["INT_ADD", "register:40f0:8", ["const:8489d4:8", "const:4:8"]]
+ 008489d4 ["CALL", null, ["callee:005b9f24:8"]]
- 00848988 ["INT_ADD", "register:40f0:8", ["const:848988:8", "const:4:8"]]
- 00848988 ["CALL", null, ["callee:005b9f24:8"]]
+ 008489e0 ["INT_ADD", "register:40f0:8", ["const:8489e0:8", "const:4:8"]]
+ 008489e0 ["CALL", null, ["callee:005b9f24:8"]]
- 00848994 ["INT_ADD", "register:40f0:8", ["const:848994:8", "const:4:8"]]
- 00848994 ["CALL", null, ["callee:005b9f24:8"]]
+ 008489ec ["INT_ADD", "register:40f0:8", ["const:8489ec:8", "const:4:8"]]
+ 008489ec ["CALL", null, ["callee:005b9f24:8"]]
~~~


<a id="compare-c1f9d13ebc37db289c25b01226fe39eb"></a>

### [`00848a2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848a2c.md) → [`00848a84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848a84.md) FUN_00848a84

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) · 呼出先 7件 [`006a0244`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a0/006a0244.md) [`006a14a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a1/006a14a8.md) [`006a2b78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2b78.md) [`0086a0b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a0b4.md) [`00c57e60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e60.md)
- 新版 呼出元 1件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) · 呼出先 7件 [`006a029c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a0/006a029c.md) [`006a1500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a1/006a1500.md) [`006a2bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2bd0.md) [`0086a10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a10c.md) [`00c57f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848a60 ["INT_ADD", "register:40f0:8", ["const:848a60:8", "const:4:8"]]
- 00848a60 ["CALL", null, ["callee:006a2bd0:8"]]
+ 00848ab8 ["INT_ADD", "register:40f0:8", ["const:848ab8:8", "const:4:8"]]
+ 00848ab8 ["CALL", null, ["callee:006a2bd0:8"]]
- 00848a68 ["INT_ADD", "register:40f0:8", ["const:848a68:8", "const:4:8"]]
- 00848a68 ["CALL", null, ["callee:00c57f80:8"]]
+ 00848ac0 ["INT_ADD", "register:40f0:8", ["const:848ac0:8", "const:4:8"]]
+ 00848ac0 ["CALL", null, ["callee:00c57f80:8"]]
- 00848aa4 ["INT_ADD", "register:40f0:8", ["const:848aa4:8", "const:4:8"]]
- 00848aa4 ["CALL", null, ["callee:00c57f80:8"]]
+ 00848afc ["INT_ADD", "register:40f0:8", ["const:848afc:8", "const:4:8"]]
+ 00848afc ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-9b9b64e1ec38ce5a972087f286160f3f"></a>

### [`00848b20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848b20.md) → [`00848b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848b78.md) FUN_00848b78

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`0086a164`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a164.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`0086a1bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a1bc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848b38 ["INT_ADD", "register:40f0:8", ["const:848b38:8", "const:4:8"]]
- 00848b38 ["CALL", null, ["callee:005c17dc:8"]]
+ 00848b90 ["INT_ADD", "register:40f0:8", ["const:848b90:8", "const:4:8"]]
+ 00848b90 ["CALL", null, ["callee:005c17dc:8"]]
- 00848b44 ["INT_ADD", "register:40f0:8", ["const:848b44:8", "const:4:8"]]
- 00848b44 ["CALL", null, ["callee:005c17dc:8"]]
+ 00848b9c ["INT_ADD", "register:40f0:8", ["const:848b9c:8", "const:4:8"]]
+ 00848b9c ["CALL", null, ["callee:005c17dc:8"]]
~~~


<a id="compare-ce379ad2c13ccb67638ddf19f902a52b"></a>

### [`00848b5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848b5c.md) → [`00848bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848bb4.md) FUN_00848bb4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`005c17e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c17e0.md) [`00676a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/00676a60.md)
- 新版 呼出元 0件  · 呼出先 3件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`005c1820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1820.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848b74 ["INT_ADD", "register:40f0:8", ["const:848b74:8", "const:4:8"]]
- 00848b74 ["CALL", null, ["callee:005c1820:8"]]
+ 00848bcc ["INT_ADD", "register:40f0:8", ["const:848bcc:8", "const:4:8"]]
+ 00848bcc ["CALL", null, ["callee:005c1820:8"]]
- 00848b80 ["INT_ADD", "register:40f0:8", ["const:848b80:8", "const:4:8"]]
- 00848b80 ["CALL", null, ["callee:00676aa0:8"]]
+ 00848bd8 ["INT_ADD", "register:40f0:8", ["const:848bd8:8", "const:4:8"]]
+ 00848bd8 ["CALL", null, ["callee:00676aa0:8"]]
~~~


<a id="compare-1464ec2d732627e3f20914d118b9d90d"></a>

### [`00848b98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848b98.md) → [`00848bf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848bf0.md) FUN_00848bf0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`0086a1a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a1a8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`0086a200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a200.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848bb0 ["INT_ADD", "register:40f0:8", ["const:848bb0:8", "const:4:8"]]
- 00848bb0 ["CALL", null, ["callee:005c17dc:8"]]
+ 00848c08 ["INT_ADD", "register:40f0:8", ["const:848c08:8", "const:4:8"]]
+ 00848c08 ["CALL", null, ["callee:005c17dc:8"]]
- 00848bbc ["INT_ADD", "register:40f0:8", ["const:848bbc:8", "const:4:8"]]
- 00848bbc ["CALL", null, ["callee:005c17dc:8"]]
+ 00848c14 ["INT_ADD", "register:40f0:8", ["const:848c14:8", "const:4:8"]]
+ 00848c14 ["CALL", null, ["callee:005c17dc:8"]]
- 00848bcc ["INT_ADD", "register:40f0:8", ["const:848bcc:8", "const:4:8"]]
- 00848bcc ["CALL", null, ["callee:00c57f80:8"]]
+ 00848c24 ["INT_ADD", "register:40f0:8", ["const:848c24:8", "const:4:8"]]
+ 00848c24 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-27a4bf5a87d7c622e966d313e829233a"></a>

### [`00848be4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848be4.md) → [`00848c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848c3c.md) FUN_00848c3c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`005c17e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c17e0.md) [`00676a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/00676a60.md)
- 新版 呼出元 0件  · 呼出先 3件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`005c1820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1820.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848bfc ["INT_ADD", "register:40f0:8", ["const:848bfc:8", "const:4:8"]]
- 00848bfc ["CALL", null, ["callee:005c1820:8"]]
+ 00848c54 ["INT_ADD", "register:40f0:8", ["const:848c54:8", "const:4:8"]]
+ 00848c54 ["CALL", null, ["callee:005c1820:8"]]
- 00848c08 ["INT_ADD", "register:40f0:8", ["const:848c08:8", "const:4:8"]]
- 00848c08 ["CALL", null, ["callee:00676aa0:8"]]
+ 00848c60 ["INT_ADD", "register:40f0:8", ["const:848c60:8", "const:4:8"]]
+ 00848c60 ["CALL", null, ["callee:00676aa0:8"]]
~~~


<a id="compare-cb38121b49305d244c622c9b59d15539"></a>

### [`00848c20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848c20.md) → [`00848c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848c78.md) FUN_00848c78

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) · 呼出先 5件 [`0046e8a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e8a4.md) [`0046efdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046efdc.md) [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`0086a1ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a1ec.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) · 呼出先 5件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`0086a244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a244.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848c38 ["INT_ADD", "register:40f0:8", ["const:848c38:8", "const:4:8"]]
- 00848c38 ["CALL", null, ["callee:0046e8e4:8"]]
+ 00848c90 ["INT_ADD", "register:40f0:8", ["const:848c90:8", "const:4:8"]]
+ 00848c90 ["CALL", null, ["callee:0046e8e4:8"]]
- 00848c40 ["INT_ADD", "register:40f0:8", ["const:848c40:8", "const:4:8"]]
- 00848c40 ["CALL", null, ["callee:0046f01c:8"]]
+ 00848c98 ["INT_ADD", "register:40f0:8", ["const:848c98:8", "const:4:8"]]
+ 00848c98 ["CALL", null, ["callee:0046f01c:8"]]
- 00848c50 ["INT_ADD", "register:40f0:8", ["const:848c50:8", "const:4:8"]]
- 00848c50 ["CALL", null, ["callee:00c57f80:8"]]
+ 00848ca8 ["INT_ADD", "register:40f0:8", ["const:848ca8:8", "const:4:8"]]
+ 00848ca8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-3f28e1e62b424d56a5fe6a202fdf63c4"></a>

### [`00848cfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848cfc.md) → [`00848d54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848d54.md) FUN_00848d54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`006a2b78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2b78.md) [`0086a278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a278.md) [`00c57e60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e60.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`006a2bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2bd0.md) [`0086a2d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a2d0.md) [`00c57f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f30.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848d1c ["INT_ADD", "register:40f0:8", ["const:848d1c:8", "const:4:8"]]
- 00848d1c ["CALL", null, ["callee:006a2bd0:8"]]
+ 00848d74 ["INT_ADD", "register:40f0:8", ["const:848d74:8", "const:4:8"]]
+ 00848d74 ["CALL", null, ["callee:006a2bd0:8"]]
- 00848d24 ["INT_ADD", "register:40f0:8", ["const:848d24:8", "const:4:8"]]
- 00848d24 ["CALL", null, ["callee:00c57f80:8"]]
+ 00848d7c ["INT_ADD", "register:40f0:8", ["const:848d7c:8", "const:4:8"]]
+ 00848d7c ["CALL", null, ["callee:00c57f80:8"]]
- 00848d2c ["INT_ADD", "register:40f0:8", ["const:848d2c:8", "const:4:8"]]
- 00848d2c ["CALL", null, ["callee:00c57f30:8"]]
+ 00848d84 ["INT_ADD", "register:40f0:8", ["const:848d84:8", "const:4:8"]]
+ 00848d84 ["CALL", null, ["callee:00c57f30:8"]]
~~~


<a id="compare-1d19fadf1df2b3ecf6deb7a287373254"></a>

### [`00848d44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848d44.md) → [`00848d9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848d9c.md) FUN_00848d9c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) · 呼出先 3件 [`007319a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00731/007319a8.md) [`00731a80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00731/00731a80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) · 呼出先 3件 [`00731a00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00731/00731a00.md) [`00731ad8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00731/00731ad8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848d60 ["INT_ADD", "register:40f0:8", ["const:848d60:8", "const:4:8"]]
- 00848d60 ["CALL", null, ["callee:00731ad8:8"]]
+ 00848db8 ["INT_ADD", "register:40f0:8", ["const:848db8:8", "const:4:8"]]
+ 00848db8 ["CALL", null, ["callee:00731ad8:8"]]
- 00848d94 ["INT_ADD", "register:40f0:8", ["const:848d94:8", "const:4:8"]]
- 00848d94 ["CALL", null, ["callee:00c57f80:8"]]
+ 00848dec ["INT_ADD", "register:40f0:8", ["const:848dec:8", "const:4:8"]]
+ 00848dec ["CALL", null, ["callee:00c57f80:8"]]
- 00848da4 ["INT_ADD", "register:40f0:8", ["const:848da4:8", "const:4:8"]]
- 00848da4 ["CALL", null, ["callee:00c57f80:8"]]
+ 00848dfc ["INT_ADD", "register:40f0:8", ["const:848dfc:8", "const:4:8"]]
+ 00848dfc ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-ba988123ef16b3490d9b6f06c0640d1a"></a>

### [`00848f28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848f28.md) → [`00848f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848f80.md) FUN_00848f80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0078dcac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078d/0078dcac.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0078dd04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078dd04.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848f44 ["INT_ADD", "register:40f0:8", ["const:848f44:8", "const:4:8"]]
- 00848f44 ["CALL", null, ["callee:00c57f80:8"]]
+ 00848f9c ["INT_ADD", "register:40f0:8", ["const:848f9c:8", "const:4:8"]]
+ 00848f9c ["CALL", null, ["callee:00c57f80:8"]]
- 00848f54 ["INT_ADD", "register:40f0:8", ["const:848f54:8", "const:4:8"]]
- 00848f54 ["CALL", null, ["callee:00c57f80:8"]]
+ 00848fac ["INT_ADD", "register:40f0:8", ["const:848fac:8", "const:4:8"]]
+ 00848fac ["CALL", null, ["callee:00c57f80:8"]]
- 00848f64 ["INT_ADD", "register:40f0:8", ["const:848f64:8", "const:4:8"]]
- 00848f64 ["CALL", null, ["callee:00c57f80:8"]]
+ 00848fbc ["INT_ADD", "register:40f0:8", ["const:848fbc:8", "const:4:8"]]
+ 00848fbc ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-b7b07ddaf84f363eb1095baf8c1a0c75"></a>

### [`00848f94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848f94.md) → [`00848fec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848fec.md) FUN_00848fec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) · 呼出先 5件 [`00692430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/00692430.md) [`00692480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00692/00692480.md) [`0086a2d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a2d8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) · 呼出先 5件 [`00692488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/00692488.md) [`006924d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00692/006924d8.md) [`0086a330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a330.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00848fc4 ["INT_ADD", "register:40f0:8", ["const:848fc4:8", "const:4:8"]]
- 00848fc4 ["CALL", null, ["callee:006924d8:8"]]
+ 0084901c ["INT_ADD", "register:40f0:8", ["const:84901c:8", "const:4:8"]]
+ 0084901c ["CALL", null, ["callee:006924d8:8"]]
- 00848fd0 ["INT_ADD", "register:40f0:8", ["const:848fd0:8", "const:4:8"]]
- 00848fd0 ["CALL", null, ["callee:00692488:8"]]
+ 00849028 ["INT_ADD", "register:40f0:8", ["const:849028:8", "const:4:8"]]
+ 00849028 ["CALL", null, ["callee:00692488:8"]]
- 00848fe0 ["INT_ADD", "register:40f0:8", ["const:848fe0:8", "const:4:8"]]
- 00848fe0 ["CALL", null, ["callee:0086a330:8"]]
+ 00849038 ["INT_ADD", "register:40f0:8", ["const:849038:8", "const:4:8"]]
+ 00849038 ["CALL", null, ["callee:0086a330:8"]]
~~~


<a id="compare-9f8303bcfd4a48a95841fe203b0c80ae"></a>

### [`0084912c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/0084912c.md) → [`00849184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849184.md) FUN_00849184

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00849174 ["INT_ADD", "register:40f0:8", ["const:849174:8", "const:4:8"]]
- 00849174 ["CALL", null, ["callee:00c57f80:8"]]
+ 008491cc ["INT_ADD", "register:40f0:8", ["const:8491cc:8", "const:4:8"]]
+ 008491cc ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-cd0b737608b3e54199a82a6d5b4b4885"></a>

### [`008491a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/008491a4.md) → [`008491fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/008491fc.md) FUN_008491fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`0080b324`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0080b/0080b324.md) [`0080b368`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0080b/0080b368.md)
- 新版 呼出元 0件  · 呼出先 3件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`0080b37c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080b/0080b37c.md) [`0080b3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080b/0080b3c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008491bc ["INT_ADD", "register:40f0:8", ["const:8491bc:8", "const:4:8"]]
- 008491bc ["CALL", null, ["callee:005c17dc:8"]]
+ 00849214 ["INT_ADD", "register:40f0:8", ["const:849214:8", "const:4:8"]]
+ 00849214 ["CALL", null, ["callee:005c17dc:8"]]
- 008491c8 ["INT_ADD", "register:40f0:8", ["const:8491c8:8", "const:4:8"]]
- 008491c8 ["CALL", null, ["callee:0080b37c:8"]]
+ 00849220 ["INT_ADD", "register:40f0:8", ["const:849220:8", "const:4:8"]]
+ 00849220 ["CALL", null, ["callee:0080b37c:8"]]
~~~


<a id="compare-69ff067f0a8a165cebf68c2c4eb101e8"></a>

### [`008491e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/008491e0.md) → [`00849238`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849238.md) FUN_00849238

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`005c1bf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c1bf0.md) [`005c3e7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c3/005c3e7c.md) [`00676ab8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/00676ab8.md)
- 新版 呼出元 0件  · 呼出先 3件 [`005c1c30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1c30.md) [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md) [`00676af8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676af8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008491f8 ["INT_ADD", "register:40f0:8", ["const:8491f8:8", "const:4:8"]]
- 008491f8 ["CALL", null, ["callee:005c1c30:8"]]
+ 00849250 ["INT_ADD", "register:40f0:8", ["const:849250:8", "const:4:8"]]
+ 00849250 ["CALL", null, ["callee:005c1c30:8"]]
- 00849204 ["INT_ADD", "register:40f0:8", ["const:849204:8", "const:4:8"]]
- 00849204 ["CALL", null, ["callee:005c3ebc:8"]]
+ 0084925c ["INT_ADD", "register:40f0:8", ["const:84925c:8", "const:4:8"]]
+ 0084925c ["CALL", null, ["callee:005c3ebc:8"]]
~~~


<a id="compare-b4a74bb5fffa0c9225e9fb0b197f4390"></a>

### [`0084921c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/0084921c.md) → [`00849274`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849274.md) FUN_00849274

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`00676a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/00676a60.md) [`0067766c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00677/0067766c.md)
- 新版 呼出元 0件  · 呼出先 3件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`006776ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00677/006776ac.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00849234 ["INT_ADD", "register:40f0:8", ["const:849234:8", "const:4:8"]]
- 00849234 ["CALL", null, ["callee:00676aa0:8"]]
+ 0084928c ["INT_ADD", "register:40f0:8", ["const:84928c:8", "const:4:8"]]
+ 0084928c ["CALL", null, ["callee:00676aa0:8"]]
- 00849240 ["INT_ADD", "register:40f0:8", ["const:849240:8", "const:4:8"]]
- 00849240 ["CALL", null, ["callee:005c17dc:8"]]
+ 00849298 ["INT_ADD", "register:40f0:8", ["const:849298:8", "const:4:8"]]
+ 00849298 ["CALL", null, ["callee:005c17dc:8"]]
- 0084924c ["INT_ADD", "register:40f0:8", ["const:84924c:8", "const:4:8"]]
- 0084924c ["CALL", null, ["callee:005c17dc:8"]]
+ 008492a4 ["INT_ADD", "register:40f0:8", ["const:8492a4:8", "const:4:8"]]
+ 008492a4 ["CALL", null, ["callee:005c17dc:8"]]
~~~


<a id="compare-587009398e1624310e4f3dfa75506f44"></a>

### [`00849264`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849264.md) → [`008492bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/008492bc.md) FUN_008492bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0067c7a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0067c/0067c7a0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0067c7e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067c/0067c7e0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008492a8 ["INT_ADD", "register:40f0:8", ["const:8492a8:8", "const:4:8"]]
- 008492a8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00849300 ["INT_ADD", "register:40f0:8", ["const:849300:8", "const:4:8"]]
+ 00849300 ["CALL", null, ["callee:00c57f80:8"]]
- 008492b8 ["INT_ADD", "register:40f0:8", ["const:8492b8:8", "const:4:8"]]
- 008492b8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00849310 ["INT_ADD", "register:40f0:8", ["const:849310:8", "const:4:8"]]
+ 00849310 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-6c6e4862cf7c418045041db2bdc5fc06"></a>

### [`008492d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/008492d4.md) → [`0084932c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/0084932c.md) FUN_0084932c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0086a388`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a388.md) [`0086be6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086be6c.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0086a3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a3e0.md) [`0086bec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bec4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008492ec ["INT_ADD", "register:40f0:8", ["const:8492ec:8", "const:4:8"]]
- 008492ec ["CALL", null, ["callee:0086bec4:8"]]
+ 00849344 ["INT_ADD", "register:40f0:8", ["const:849344:8", "const:4:8"]]
+ 00849344 ["CALL", null, ["callee:0086bec4:8"]]
~~~


<a id="compare-ec8f2086d4d321400ddcf966b02280cb"></a>

### [`00849304`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849304.md) → [`0084935c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/0084935c.md) FUN_0084935c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`0086a3ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a3ec.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`0086a444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a444.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0084931c ["INT_ADD", "register:40f0:8", ["const:84931c:8", "const:4:8"]]
- 0084931c ["CALL", null, ["callee:005c17dc:8"]]
+ 00849374 ["INT_ADD", "register:40f0:8", ["const:849374:8", "const:4:8"]]
+ 00849374 ["CALL", null, ["callee:005c17dc:8"]]
~~~


<a id="compare-5870aef74d31afeae665ff2d0f9bb3c1"></a>

### [`00849334`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849334.md) → [`0084938c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/0084938c.md) FUN_0084938c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`009b3b08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b3/009b3b08.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`009b3b5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b3/009b3b5c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00849350 ["INT_ADD", "register:40f0:8", ["const:849350:8", "const:4:8"]]
- 00849350 ["CALL", null, ["callee:009b3b5c:8"]]
+ 008493a8 ["INT_ADD", "register:40f0:8", ["const:8493a8:8", "const:4:8"]]
+ 008493a8 ["CALL", null, ["callee:009b3b5c:8"]]
~~~


<a id="compare-3f819c67d942dc4dc403e6585ee4425b"></a>

### [`00849370`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849370.md) → [`008493c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/008493c8.md) FUN_008493c8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00676a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/00676a60.md) [`00747804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00747/00747804.md) [`00748b30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/00748b30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`0074785c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/0074785c.md) [`00748b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748b88.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008493a8 ["INT_ADD", "register:40f0:8", ["const:8493a8:8", "const:4:8"]]
- 008493a8 ["CALL", null, ["callee:00748b88:8"]]
+ 00849400 ["INT_ADD", "register:40f0:8", ["const:849400:8", "const:4:8"]]
+ 00849400 ["CALL", null, ["callee:00748b88:8"]]
- 008493bc ["INT_ADD", "register:40f0:8", ["const:8493bc:8", "const:4:8"]]
- 008493bc ["CALL", null, ["callee:00c57f80:8"]]
+ 00849414 ["INT_ADD", "register:40f0:8", ["const:849414:8", "const:4:8"]]
+ 00849414 ["CALL", null, ["callee:00c57f80:8"]]
- 008493c8 ["INT_ADD", "register:40f0:8", ["const:8493c8:8", "const:4:8"]]
- 008493c8 ["CALL", null, ["callee:00676aa0:8"]]
+ 00849420 ["INT_ADD", "register:40f0:8", ["const:849420:8", "const:4:8"]]
+ 00849420 ["CALL", null, ["callee:00676aa0:8"]]
~~~


<a id="compare-a1243a04119e8e77773e5299aa79ca62"></a>

### [`00849400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849400.md) → [`00849458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849458.md) FUN_00849458

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`0086a460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a460.md) [`0086a4b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a4b0.md) [`0086a4f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a4f4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0086a4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a4b8.md) [`0086a508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a508.md) [`0086a54c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a54c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00849430 ["INT_ADD", "register:40f0:8", ["const:849430:8", "const:4:8"]]
- 00849430 ["CALL", null, ["callee:00c57f80:8"]]
+ 00849488 ["INT_ADD", "register:40f0:8", ["const:849488:8", "const:4:8"]]
+ 00849488 ["CALL", null, ["callee:00c57f80:8"]]
- 0084943c ["INT_ADD", "register:40f0:8", ["const:84943c:8", "const:4:8"]]
- 0084943c ["CALL", null, ["callee:0086a4b8:8"]]
+ 00849494 ["INT_ADD", "register:40f0:8", ["const:849494:8", "const:4:8"]]
+ 00849494 ["CALL", null, ["callee:0086a4b8:8"]]
- 00849448 ["INT_ADD", "register:40f0:8", ["const:849448:8", "const:4:8"]]
- 00849448 ["CALL", null, ["callee:0086a508:8"]]
+ 008494a0 ["INT_ADD", "register:40f0:8", ["const:8494a0:8", "const:4:8"]]
+ 008494a0 ["CALL", null, ["callee:0086a508:8"]]
~~~


<a id="compare-80cd16d210b61d5583092d6fd97a2b09"></a>

### [`008494d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/008494d0.md) → [`00849528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849528.md) FUN_00849528

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008494f4 ["INT_ADD", "register:40f0:8", ["const:8494f4:8", "const:4:8"]]
- 008494f4 ["CALL", null, ["callee:00c57f80:8"]]
+ 0084954c ["INT_ADD", "register:40f0:8", ["const:84954c:8", "const:4:8"]]
+ 0084954c ["CALL", null, ["callee:00c57f80:8"]]
- 00849504 ["INT_ADD", "register:40f0:8", ["const:849504:8", "const:4:8"]]
- 00849504 ["CALL", null, ["callee:00c57f80:8"]]
+ 0084955c ["INT_ADD", "register:40f0:8", ["const:84955c:8", "const:4:8"]]
+ 0084955c ["CALL", null, ["callee:00c57f80:8"]]
- 00849510 ["INT_ADD", "register:40f0:8", ["const:849510:8", "const:4:8"]]
- 00849510 ["CALL", null, ["callee:00c57f80:8"]]
+ 00849568 ["INT_ADD", "register:40f0:8", ["const:849568:8", "const:4:8"]]
+ 00849568 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-d041f9288cc71b8b0f388628f62db2d5"></a>

### [`00849734`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849734.md) → [`0084978c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/0084978c.md) FUN_0084978c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00849750 ["INT_ADD", "register:40f0:8", ["const:849750:8", "const:4:8"]]
- 00849750 ["CALL", null, ["callee:00c57f80:8"]]
+ 008497a8 ["INT_ADD", "register:40f0:8", ["const:8497a8:8", "const:4:8"]]
+ 008497a8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-e5bba50480f9fce05620063fcd44c585"></a>

### [`00849778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849778.md) → [`008497d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/008497d0.md) FUN_008497d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`0073a304`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073a/0073a304.md) [`0086a5a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a5a4.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0073a35c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073a35c.md) [`0086a5fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a5fc.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008497a0 ["INT_ADD", "register:40f0:8", ["const:8497a0:8", "const:4:8"]]
- 008497a0 ["CALL", null, ["callee:0073a35c:8"]]
+ 008497f8 ["INT_ADD", "register:40f0:8", ["const:8497f8:8", "const:4:8"]]
+ 008497f8 ["CALL", null, ["callee:0073a35c:8"]]
- 008497ac ["INT_ADD", "register:40f0:8", ["const:8497ac:8", "const:4:8"]]
- 008497ac ["CALL", null, ["callee:0086a5fc:8"]]
+ 00849804 ["INT_ADD", "register:40f0:8", ["const:849804:8", "const:4:8"]]
+ 00849804 ["CALL", null, ["callee:0086a5fc:8"]]
- 008497d0 ["INT_ADD", "register:40f0:8", ["const:8497d0:8", "const:4:8"]]
- 008497d0 ["CALL", null, ["callee:00c57fb0:8"]]
+ 00849828 ["INT_ADD", "register:40f0:8", ["const:849828:8", "const:4:8"]]
+ 00849828 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-b0916f08df13db108ce29b5f9197c17a"></a>

### [`008497d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/008497d4.md) → [`0084982c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/0084982c.md) FUN_0084982c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008497f0 ["INT_ADD", "register:40f0:8", ["const:8497f0:8", "const:4:8"]]
- 008497f0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00849848 ["INT_ADD", "register:40f0:8", ["const:849848:8", "const:4:8"]]
+ 00849848 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-4acd72674d6c180e4292922a26423d4c"></a>

### [`00849818`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849818.md) → [`00849870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849870.md) FUN_00849870

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`005c3e7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c3/005c3e7c.md) [`0086bb98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bb98.md) [`0086bdb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bdb8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md) [`0086bbf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bbf0.md) [`0086be10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086be10.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00849838 ["INT_ADD", "register:40f0:8", ["const:849838:8", "const:4:8"]]
- 00849838 ["CALL", null, ["callee:005c17dc:8"]]
+ 00849890 ["INT_ADD", "register:40f0:8", ["const:849890:8", "const:4:8"]]
+ 00849890 ["CALL", null, ["callee:005c17dc:8"]]
- 00849844 ["INT_ADD", "register:40f0:8", ["const:849844:8", "const:4:8"]]
- 00849844 ["CALL", null, ["callee:0086bbf0:8"]]
+ 0084989c ["INT_ADD", "register:40f0:8", ["const:84989c:8", "const:4:8"]]
+ 0084989c ["CALL", null, ["callee:0086bbf0:8"]]
- 00849850 ["INT_ADD", "register:40f0:8", ["const:849850:8", "const:4:8"]]
- 00849850 ["CALL", null, ["callee:005c3ebc:8"]]
+ 008498a8 ["INT_ADD", "register:40f0:8", ["const:8498a8:8", "const:4:8"]]
+ 008498a8 ["CALL", null, ["callee:005c3ebc:8"]]
~~~


<a id="compare-ceda45803d0c89d990fbc51cbc834585"></a>

### [`0084987c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/0084987c.md) → [`008498d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/008498d4.md) FUN_008498d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`0066b9dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0066b/0066b9dc.md) [`0066baa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0066b/0066baa4.md) [`0086a654`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a654.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0066ba1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066ba1c.md) [`0066bae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066b/0066bae4.md) [`0086a6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a6ac.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00849898 ["INT_ADD", "register:40f0:8", ["const:849898:8", "const:4:8"]]
- 00849898 ["CALL", null, ["callee:00c57f80:8"]]
+ 008498f0 ["INT_ADD", "register:40f0:8", ["const:8498f0:8", "const:4:8"]]
+ 008498f0 ["CALL", null, ["callee:00c57f80:8"]]
- 008498a4 ["INT_ADD", "register:40f0:8", ["const:8498a4:8", "const:4:8"]]
- 008498a4 ["CALL", null, ["callee:0086a6ac:8"]]
+ 008498fc ["INT_ADD", "register:40f0:8", ["const:8498fc:8", "const:4:8"]]
+ 008498fc ["CALL", null, ["callee:0086a6ac:8"]]
- 008498b0 ["INT_ADD", "register:40f0:8", ["const:8498b0:8", "const:4:8"]]
- 008498b0 ["CALL", null, ["callee:0066bae4:8"]]
+ 00849908 ["INT_ADD", "register:40f0:8", ["const:849908:8", "const:4:8"]]
+ 00849908 ["CALL", null, ["callee:0066bae4:8"]]
~~~


<a id="compare-1a4269bc66509573c0725439b618add5"></a>

### [`008498c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/008498c8.md) → [`00849920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849920.md) FUN_00849920

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`006a60d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a6/006a60d8.md) [`006a6128`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a6/006a6128.md)
- 新版 呼出元 0件  · 呼出先 2件 [`006a6130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6130.md) [`006a6180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6180.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008498e0 ["INT_ADD", "register:40f0:8", ["const:8498e0:8", "const:4:8"]]
- 008498e0 ["CALL", null, ["callee:006a6130:8"]]
+ 00849938 ["INT_ADD", "register:40f0:8", ["const:849938:8", "const:4:8"]]
+ 00849938 ["CALL", null, ["callee:006a6130:8"]]
~~~


<a id="compare-67b2d07e877993180225e7666371f4e9"></a>

### [`008498f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/008498f8.md) → [`00849950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849950.md) FUN_00849950

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) · 呼出先 2件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00849940 ["INT_ADD", "register:40f0:8", ["const:849940:8", "const:4:8"]]
- 00849940 ["CALL", null, ["callee:00c57f80:8"]]
+ 00849998 ["INT_ADD", "register:40f0:8", ["const:849998:8", "const:4:8"]]
+ 00849998 ["CALL", null, ["callee:00c57f80:8"]]
- 00849950 ["INT_ADD", "register:40f0:8", ["const:849950:8", "const:4:8"]]
- 00849950 ["CALL", null, ["callee:00c57f80:8"]]
+ 008499a8 ["INT_ADD", "register:40f0:8", ["const:8499a8:8", "const:4:8"]]
+ 008499a8 ["CALL", null, ["callee:00c57f80:8"]]
- 0084995c ["INT_ADD", "register:40f0:8", ["const:84995c:8", "const:4:8"]]
- 0084995c ["CALL", null, ["callee:005c17dc:8"]]
+ 008499b4 ["INT_ADD", "register:40f0:8", ["const:8499b4:8", "const:4:8"]]
+ 008499b4 ["CALL", null, ["callee:005c17dc:8"]]
~~~


<a id="compare-bb416875cadb553d00dbe96f3df091f0"></a>

### [`008499e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/008499e0.md) → [`00849a38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849a38.md) FUN_00849a38

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`005c3e7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c3/005c3e7c.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008499f8 ["INT_ADD", "register:40f0:8", ["const:8499f8:8", "const:4:8"]]
- 008499f8 ["CALL", null, ["callee:005c3ebc:8"]]
+ 00849a50 ["INT_ADD", "register:40f0:8", ["const:849a50:8", "const:4:8"]]
+ 00849a50 ["CALL", null, ["callee:005c3ebc:8"]]
~~~


<a id="compare-961bbde718a833b995ab2dd39399eae3"></a>

### [`00849a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849a10.md) → [`00849a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849a68.md) FUN_00849a68

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005c3e7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c3/005c3e7c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00849a30 ["INT_ADD", "register:40f0:8", ["const:849a30:8", "const:4:8"]]
- 00849a30 ["CALL", null, ["callee:00c57f80:8"]]
+ 00849a88 ["INT_ADD", "register:40f0:8", ["const:849a88:8", "const:4:8"]]
+ 00849a88 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-b1822da5dfe5fcd519ad16abe25f839a"></a>

### [`00849a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849a48.md) → [`00849aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849aa0.md) FUN_00849aa0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`005c17e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c17e0.md) [`0086a760`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a760.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`005c1820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1820.md) [`0086a7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a7b8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00849a60 ["INT_ADD", "register:40f0:8", ["const:849a60:8", "const:4:8"]]
- 00849a60 ["CALL", null, ["callee:005c17dc:8"]]
+ 00849ab8 ["INT_ADD", "register:40f0:8", ["const:849ab8:8", "const:4:8"]]
+ 00849ab8 ["CALL", null, ["callee:005c17dc:8"]]
- 00849a70 ["INT_ADD", "register:40f0:8", ["const:849a70:8", "const:4:8"]]
- 00849a70 ["CALL", null, ["callee:00c57f80:8"]]
+ 00849ac8 ["INT_ADD", "register:40f0:8", ["const:849ac8:8", "const:4:8"]]
+ 00849ac8 ["CALL", null, ["callee:00c57f80:8"]]
- 00849a80 ["INT_ADD", "register:40f0:8", ["const:849a80:8", "const:4:8"]]
- 00849a80 ["CALL", null, ["callee:00c57f80:8"]]
+ 00849ad8 ["INT_ADD", "register:40f0:8", ["const:849ad8:8", "const:4:8"]]
+ 00849ad8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-61ca0c612967e267e740eb601f9a0a7a"></a>

### [`00849aa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849aa4.md) → [`00849afc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849afc.md) FUN_00849afc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`0086a7a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a7a4.md) [`0086a838`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a838.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0086a7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a7fc.md) [`0086a890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a890.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00849ac0 ["INT_ADD", "register:40f0:8", ["const:849ac0:8", "const:4:8"]]
- 00849ac0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00849b18 ["INT_ADD", "register:40f0:8", ["const:849b18:8", "const:4:8"]]
+ 00849b18 ["CALL", null, ["callee:00c57f80:8"]]
- 00849acc ["INT_ADD", "register:40f0:8", ["const:849acc:8", "const:4:8"]]
- 00849acc ["CALL", null, ["callee:0086a7fc:8"]]
+ 00849b24 ["INT_ADD", "register:40f0:8", ["const:849b24:8", "const:4:8"]]
+ 00849b24 ["CALL", null, ["callee:0086a7fc:8"]]
~~~


<a id="compare-d3aed6710a380ad8a760b4310f3ad17d"></a>

### [`00849ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849ae4.md) → [`00849b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849b3c.md) FUN_00849b3c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`0086a888`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a888.md) [`0086a8d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a8d8.md) [`0086bb54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bb54.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`0086a8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a8e0.md) [`0086a930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a930.md) [`0086bbac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bbac.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00849afc ["INT_ADD", "register:40f0:8", ["const:849afc:8", "const:4:8"]]
- 00849afc ["CALL", null, ["callee:0086a8e0:8"]]
+ 00849b54 ["INT_ADD", "register:40f0:8", ["const:849b54:8", "const:4:8"]]
+ 00849b54 ["CALL", null, ["callee:0086a8e0:8"]]
- 00849b08 ["INT_ADD", "register:40f0:8", ["const:849b08:8", "const:4:8"]]
- 00849b08 ["CALL", null, ["callee:0086bbac:8"]]
+ 00849b60 ["INT_ADD", "register:40f0:8", ["const:849b60:8", "const:4:8"]]
+ 00849b60 ["CALL", null, ["callee:0086bbac:8"]]
- 00849b14 ["INT_ADD", "register:40f0:8", ["const:849b14:8", "const:4:8"]]
- 00849b14 ["CALL", null, ["callee:005c17dc:8"]]
+ 00849b6c ["INT_ADD", "register:40f0:8", ["const:849b6c:8", "const:4:8"]]
+ 00849b6c ["CALL", null, ["callee:005c17dc:8"]]
~~~


<a id="compare-5a863ceede006a5c047d02e8d9d285e2"></a>

### [`00849b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849b58.md) → [`00849bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849bb0.md) FUN_00849bb0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`005c3e7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c3/005c3e7c.md) [`0086a91c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a91c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md) [`0086a974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a974.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00849b70 ["INT_ADD", "register:40f0:8", ["const:849b70:8", "const:4:8"]]
- 00849b70 ["CALL", null, ["callee:005c3ebc:8"]]
+ 00849bc8 ["INT_ADD", "register:40f0:8", ["const:849bc8:8", "const:4:8"]]
+ 00849bc8 ["CALL", null, ["callee:005c3ebc:8"]]
- 00849b80 ["INT_ADD", "register:40f0:8", ["const:849b80:8", "const:4:8"]]
- 00849b80 ["CALL", null, ["callee:00c57f80:8"]]
+ 00849bd8 ["INT_ADD", "register:40f0:8", ["const:849bd8:8", "const:4:8"]]
+ 00849bd8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-d03bfa829b296e0c16a872e4dcf0dadd"></a>

### [`00849b98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849b98.md) → [`00849bf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849bf0.md) FUN_00849bf0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`005c3e7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c3/005c3e7c.md) [`00676a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/00676a60.md) [`0086a9f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a9f8.md)
- 新版 呼出元 0件  · 呼出先 3件 [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`0086aa50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086aa50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00849bb0 ["INT_ADD", "register:40f0:8", ["const:849bb0:8", "const:4:8"]]
- 00849bb0 ["CALL", null, ["callee:00676aa0:8"]]
+ 00849c08 ["INT_ADD", "register:40f0:8", ["const:849c08:8", "const:4:8"]]
+ 00849c08 ["CALL", null, ["callee:00676aa0:8"]]
- 00849bbc ["INT_ADD", "register:40f0:8", ["const:849bbc:8", "const:4:8"]]
- 00849bbc ["CALL", null, ["callee:005c3ebc:8"]]
+ 00849c14 ["INT_ADD", "register:40f0:8", ["const:849c14:8", "const:4:8"]]
+ 00849c14 ["CALL", null, ["callee:005c3ebc:8"]]
~~~


<a id="compare-eda03f1d836d75ce261e8977d5bc1f25"></a>

### [`00849bd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849bd4.md) → [`00849c2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849c2c.md) FUN_00849c2c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`00676a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/00676a60.md) [`00726390`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00726/00726390.md)
- 新版 呼出元 0件  · 呼出先 3件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`007263e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00726/007263e8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00849bec ["INT_ADD", "register:40f0:8", ["const:849bec:8", "const:4:8"]]
- 00849bec ["CALL", null, ["callee:00676aa0:8"]]
+ 00849c44 ["INT_ADD", "register:40f0:8", ["const:849c44:8", "const:4:8"]]
+ 00849c44 ["CALL", null, ["callee:00676aa0:8"]]
- 00849bf8 ["INT_ADD", "register:40f0:8", ["const:849bf8:8", "const:4:8"]]
- 00849bf8 ["CALL", null, ["callee:005c17dc:8"]]
+ 00849c50 ["INT_ADD", "register:40f0:8", ["const:849c50:8", "const:4:8"]]
+ 00849c50 ["CALL", null, ["callee:005c17dc:8"]]
~~~


<a id="compare-30e042ec6df4619cbf7d4ee9919f9448"></a>

### [`00849c10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849c10.md) → [`00849c68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849c68.md) FUN_00849c68

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`0086aadc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086aadc.md) [`0086ad50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086ad50.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 6件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`0086ab34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ab34.md) [`0086ada8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ada8.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00849c30 ["INT_ADD", "register:40f0:8", ["const:849c30:8", "const:4:8"]]
- 00849c30 ["CALL", null, ["callee:00c53da0:8"]]
+ 00849c88 ["INT_ADD", "register:40f0:8", ["const:849c88:8", "const:4:8"]]
+ 00849c88 ["CALL", null, ["callee:00c53da0:8"]]
- 00849c44 ["COPY", "register:0:8", ["register:4040:8"]]
- 00849c44 ["INT_ADD", "register:40f0:8", ["const:849c44:8", "const:4:8"]]
- 00849c44 ["CALLIND", null, ["register:0:8"]]
+ 00849c9c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00849c9c ["INT_ADD", "register:40f0:8", ["const:849c9c:8", "const:4:8"]]
+ 00849c9c ["CALLIND", null, ["register:0:8"]]
- 00849c4c ["INT_ADD", "register:40f0:8", ["const:849c4c:8", "const:4:8"]]
- 00849c4c ["CALL", null, ["callee:00c57f50:8"]]
+ 00849ca4 ["INT_ADD", "register:40f0:8", ["const:849ca4:8", "const:4:8"]]
+ 00849ca4 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-fed78a9ece6cfbf76e1ace8dd3e7f644"></a>

### [`00849c98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849c98.md) → [`00849cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849cf0.md) FUN_00849cf0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`0080e740`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0080e/0080e740.md) [`0080e8a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0080e/0080e8a0.md) [`0080ea00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0080e/0080ea00.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0080e798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e798.md) [`0080e8f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080e8f8.md) [`0080ea58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080e/0080ea58.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00849cb0 ["INT_ADD", "register:40f0:8", ["const:849cb0:8", "const:4:8"]]
- 00849cb0 ["CALL", null, ["callee:0080ea58:8"]]
+ 00849d08 ["INT_ADD", "register:40f0:8", ["const:849d08:8", "const:4:8"]]
+ 00849d08 ["CALL", null, ["callee:0080ea58:8"]]
- 00849cbc ["INT_ADD", "register:40f0:8", ["const:849cbc:8", "const:4:8"]]
- 00849cbc ["CALL", null, ["callee:0080e8f8:8"]]
+ 00849d14 ["INT_ADD", "register:40f0:8", ["const:849d14:8", "const:4:8"]]
+ 00849d14 ["CALL", null, ["callee:0080e8f8:8"]]
~~~


<a id="compare-78682d4c07c1747fe81ded112da448d7"></a>

### [`00856cf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856cf0.md) → [`00856d48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856d48.md) FUN_00856d48

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008548ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00854/008548ec.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00854944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00854/00854944.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00856d30 ["INT_ADD", "register:40f0:8", ["const:856d30:8", "const:4:8"]]
- 00856d30 ["CALL", null, ["callee:00c57f80:8"]]
+ 00856d88 ["INT_ADD", "register:40f0:8", ["const:856d88:8", "const:4:8"]]
+ 00856d88 ["CALL", null, ["callee:00c57f80:8"]]
- 00856d98 ["INT_ADD", "register:40f0:8", ["const:856d98:8", "const:4:8"]]
- 00856d98 ["CALL", null, ["callee:00c57f80:8"]]
+ 00856df0 ["INT_ADD", "register:40f0:8", ["const:856df0:8", "const:4:8"]]
+ 00856df0 ["CALL", null, ["callee:00c57f80:8"]]
- 00856dbc ["INT_ADD", "register:40f0:8", ["const:856dbc:8", "const:4:8"]]
- 00856dbc ["CALL", null, ["callee:00c57f80:8"]]
+ 00856e14 ["INT_ADD", "register:40f0:8", ["const:856e14:8", "const:4:8"]]
+ 00856e14 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-00afba4ddad417ae91475948efc12729"></a>

### [`00859a90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859a90.md) → [`00859ae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859ae8.md) FUN_00859ae8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 3件 [`00764ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/00764ee0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 3件 [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00859ab0 ["INT_ADD", "register:40f0:8", ["const:859ab0:8", "const:4:8"]]
- 00859ab0 ["CALL", null, ["callee:00764f38:8"]]
+ 00859b08 ["INT_ADD", "register:40f0:8", ["const:859b08:8", "const:4:8"]]
+ 00859b08 ["CALL", null, ["callee:00764f38:8"]]
- 00859ac8 ["INT_ADD", "register:40f0:8", ["const:859ac8:8", "const:4:8"]]
- 00859ac8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00859b20 ["INT_ADD", "register:40f0:8", ["const:859b20:8", "const:4:8"]]
+ 00859b20 ["CALL", null, ["callee:00c57f80:8"]]
- 00859af4 ["INT_ADD", "register:40f0:8", ["const:859af4:8", "const:4:8"]]
- 00859af4 ["CALL", null, ["callee:00c57fb0:8"]]
+ 00859b4c ["INT_ADD", "register:40f0:8", ["const:859b4c:8", "const:4:8"]]
+ 00859b4c ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-368ef7b206bd6dd4b767900656badfaa"></a>

### [`00859af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859af8.md) → [`00859b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859b50.md) FUN_00859b50

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00859b18 ["INT_ADD", "register:40f0:8", ["const:859b18:8", "const:4:8"]]
- 00859b18 ["CALL", null, ["callee:00c53da0:8"]]
+ 00859b70 ["INT_ADD", "register:40f0:8", ["const:859b70:8", "const:4:8"]]
+ 00859b70 ["CALL", null, ["callee:00c53da0:8"]]
- 00859b38 ["COPY", "register:0:8", ["register:4040:8"]]
- 00859b38 ["INT_ADD", "register:40f0:8", ["const:859b38:8", "const:4:8"]]
- 00859b38 ["CALLIND", null, ["register:0:8"]]
+ 00859b90 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00859b90 ["INT_ADD", "register:40f0:8", ["const:859b90:8", "const:4:8"]]
+ 00859b90 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c4125ae5a65c13b3ec011944d0b01933"></a>

### [`0085ada0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085a/0085ada0.md) → [`0085adf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085a/0085adf8.md) FUN_0085adf8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`006bf88c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006bf/006bf88c.md) · 呼出先 2件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467a88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467a88.md)
- 新版 呼出元 1件 [`006bf8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bf/006bf8e4.md) · 呼出先 2件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ac8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0085adbc ["INT_ADD", "register:40f0:8", ["const:85adbc:8", "const:4:8"]]
- 0085adbc ["CALL", null, ["callee:004678a0:8"]]
+ 0085ae14 ["INT_ADD", "register:40f0:8", ["const:85ae14:8", "const:4:8"]]
+ 0085ae14 ["CALL", null, ["callee:004678a0:8"]]
~~~


<a id="compare-e62e5fa58ae34006def3d08c82b30db3"></a>

### [`0085b2f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b2f8.md) → [`0085b350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b350.md) FUN_0085b350

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00851a0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851a0c.md) · 呼出先 4件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0086dea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086dea4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00851a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851a64.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0086defc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086defc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0085b354 ["INT_ADD", "register:40f0:8", ["const:85b354:8", "const:4:8"]]
- 0085b354 ["CALL", null, ["callee:0043bb60:8"]]
+ 0085b3ac ["INT_ADD", "register:40f0:8", ["const:85b3ac:8", "const:4:8"]]
+ 0085b3ac ["CALL", null, ["callee:0043bb60:8"]]
- 0085b368 ["INT_ADD", "register:40f0:8", ["const:85b368:8", "const:4:8"]]
- 0085b368 ["CALL", null, ["callee:0043bb60:8"]]
+ 0085b3c0 ["INT_ADD", "register:40f0:8", ["const:85b3c0:8", "const:4:8"]]
+ 0085b3c0 ["CALL", null, ["callee:0043bb60:8"]]
- 0085b39c ["INT_ADD", "register:40f0:8", ["const:85b39c:8", "const:4:8"]]
- 0085b39c ["CALL", null, ["callee:0086defc:8"]]
+ 0085b3f4 ["INT_ADD", "register:40f0:8", ["const:85b3f4:8", "const:4:8"]]
+ 0085b3f4 ["CALL", null, ["callee:0086defc:8"]]
~~~


<a id="compare-a63ecc20947696a4ea3422ee9336ddc3"></a>

### [`0085bf08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085bf08.md) → [`0085bf60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085bf60.md) FUN_0085bf60

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 7件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`006bbc98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006bb/006bbc98.md) [`0087f368`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087f/0087f368.md) [`00a47f00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a47/00a47f00.md) [`00a957c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a95/00a957c8.md) · 呼出先 3件 [`00ab91b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ab9/00ab91b8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 7件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`0087f3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f3c0.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) [`00a95838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a95/00a95838.md) · 呼出先 3件 [`00ab9228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ab9/00ab9228.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0085bfd0 ["INT_ADD", "register:40f0:8", ["const:85bfd0:8", "const:4:8"]]
- 0085bfd0 ["CALL", null, ["callee:00ab9228:8"]]
+ 0085c028 ["INT_ADD", "register:40f0:8", ["const:85c028:8", "const:4:8"]]
+ 0085c028 ["CALL", null, ["callee:00ab9228:8"]]
- 0085bfe0 ["INT_ADD", "register:40f0:8", ["const:85bfe0:8", "const:4:8"]]
- 0085bfe0 ["CALL", null, ["callee:00c57f80:8"]]
+ 0085c038 ["INT_ADD", "register:40f0:8", ["const:85c038:8", "const:4:8"]]
+ 0085c038 ["CALL", null, ["callee:00c57f80:8"]]
- 0085bffc ["INT_ADD", "register:40f0:8", ["const:85bffc:8", "const:4:8"]]
- 0085bffc ["CALL", null, ["callee:00ab9228:8"]]
+ 0085c054 ["INT_ADD", "register:40f0:8", ["const:85c054:8", "const:4:8"]]
+ 0085c054 ["CALL", null, ["callee:00ab9228:8"]]
~~~


<a id="compare-6dabbc4ec276754582ab4e77db42aa43"></a>

### [`008614b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00861/008614b0.md) → [`00861508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00861/00861508.md) FUN_00861508

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 19件 [`0062a23c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0062a/0062a23c.md) [`006706ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00670/006706ec.md) [`00680e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00680/00680e08.md) [`006acf5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ac/006acf5c.md) [`006b5404`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b5/006b5404.md) · 呼出先 4件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md)
- 新版 呼出元 19件 [`0062a27c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0062a/0062a27c.md) [`0067072c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00670/0067072c.md) [`00680e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00680/00680e48.md) [`006acfb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ac/006acfb4.md) [`006b545c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b5/006b545c.md) · 呼出先 4件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008614d4 ["INT_ADD", "register:40f0:8", ["const:8614d4:8", "const:4:8"]]
- 008614d4 ["CALL", null, ["callee:004678a0:8"]]
+ 0086152c ["INT_ADD", "register:40f0:8", ["const:86152c:8", "const:4:8"]]
+ 0086152c ["CALL", null, ["callee:004678a0:8"]]
- 008614e0 ["INT_ADD", "register:40f0:8", ["const:8614e0:8", "const:4:8"]]
- 008614e0 ["CALL", null, ["callee:0046ca04:8"]]
+ 00861538 ["INT_ADD", "register:40f0:8", ["const:861538:8", "const:4:8"]]
+ 00861538 ["CALL", null, ["callee:0046ca04:8"]]
- 00861508 ["INT_ADD", "register:40f0:8", ["const:861508:8", "const:4:8"]]
- 00861508 ["CALL", null, ["callee:00468fc8:8"]]
+ 00861560 ["INT_ADD", "register:40f0:8", ["const:861560:8", "const:4:8"]]
+ 00861560 ["CALL", null, ["callee:00468fc8:8"]]
~~~


<a id="compare-07a5a08b2c145e6ed20d9fe1b5861491"></a>

### [`00865608`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00865/00865608.md) → [`00865660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865660.md) FUN_00865660

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00865624 ["INT_ADD", "register:40f0:8", ["const:865624:8", "const:4:8"]]
- 00865624 ["CALL", null, ["callee:00c53da0:8"]]
+ 0086567c ["INT_ADD", "register:40f0:8", ["const:86567c:8", "const:4:8"]]
+ 0086567c ["CALL", null, ["callee:00c53da0:8"]]
- 00865644 ["COPY", "register:0:8", ["register:4040:8"]]
- 00865644 ["INT_ADD", "register:40f0:8", ["const:865644:8", "const:4:8"]]
- 00865644 ["CALLIND", null, ["register:0:8"]]
+ 0086569c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0086569c ["INT_ADD", "register:40f0:8", ["const:86569c:8", "const:4:8"]]
+ 0086569c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-51d9ca4ee5243e873b5a5e3200523c7b"></a>

### [`00865658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00865/00865658.md) → [`008656b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/008656b0.md) FUN_008656b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00865674 ["INT_ADD", "register:40f0:8", ["const:865674:8", "const:4:8"]]
- 00865674 ["CALL", null, ["callee:00c53da0:8"]]
+ 008656cc ["INT_ADD", "register:40f0:8", ["const:8656cc:8", "const:4:8"]]
+ 008656cc ["CALL", null, ["callee:00c53da0:8"]]
- 00865694 ["COPY", "register:0:8", ["register:4040:8"]]
- 00865694 ["INT_ADD", "register:40f0:8", ["const:865694:8", "const:4:8"]]
- 00865694 ["CALLIND", null, ["register:0:8"]]
+ 008656ec ["COPY", "register:0:8", ["register:4040:8"]]
+ 008656ec ["INT_ADD", "register:40f0:8", ["const:8656ec:8", "const:4:8"]]
+ 008656ec ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9bfd63bc3f3437b1a27a5c3a2bddb94d"></a>

### [`00865a84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00865/00865a84.md) → [`00865adc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865adc.md) FUN_00865adc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00865a84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00865/00865a84.md) [`00985418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00985/00985418.md) [`00ad0958`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ad0/00ad0958.md) · 呼出先 2件 [`00865a84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00865/00865a84.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00865adc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865adc.md) [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) [`00ad09c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad0/00ad09c8.md) · 呼出先 2件 [`00865adc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865adc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00865aa0 ["INT_ADD", "register:40f0:8", ["const:865aa0:8", "const:4:8"]]
- 00865aa0 ["CALL", null, ["local:b0:8"]]
+ 00865af8 ["INT_ADD", "register:40f0:8", ["const:865af8:8", "const:4:8"]]
+ 00865af8 ["CALL", null, ["local:b0:8"]]
- 00865aac ["INT_ADD", "register:40f0:8", ["const:865aac:8", "const:4:8"]]
- 00865aac ["CALL", null, ["local:b0:8"]]
+ 00865b04 ["INT_ADD", "register:40f0:8", ["const:865b04:8", "const:4:8"]]
+ 00865b04 ["CALL", null, ["local:b0:8"]]
- 00865abc ["INT_ADD", "register:40f0:8", ["const:865abc:8", "const:4:8"]]
- 00865abc ["CALL", null, ["callee:00c57f80:8"]]
+ 00865b14 ["INT_ADD", "register:40f0:8", ["const:865b14:8", "const:4:8"]]
+ 00865b14 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-9e3ea56e12e08406596af7793e3e968f"></a>

### [`00865ca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00865/00865ca8.md) → [`00865d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865d00.md) FUN_00865d00

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00847af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00847/00847af8.md) · 呼出先 5件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`00630ba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00630/00630ba4.md) [`00652ccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00652/00652ccc.md) [`00676a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/00676a60.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00847b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/00847b50.md) · 呼出先 5件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00630be4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00630/00630be4.md) [`00652d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652d0c.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00865cc8 ["INT_ADD", "register:40f0:8", ["const:865cc8:8", "const:4:8"]]
- 00865cc8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00865d20 ["INT_ADD", "register:40f0:8", ["const:865d20:8", "const:4:8"]]
+ 00865d20 ["CALL", null, ["callee:00c57f80:8"]]
- 00865cd4 ["INT_ADD", "register:40f0:8", ["const:865cd4:8", "const:4:8"]]
- 00865cd4 ["CALL", null, ["callee:00630be4:8"]]
+ 00865d2c ["INT_ADD", "register:40f0:8", ["const:865d2c:8", "const:4:8"]]
+ 00865d2c ["CALL", null, ["callee:00630be4:8"]]
- 00865d10 ["INT_ADD", "register:40f0:8", ["const:865d10:8", "const:4:8"]]
- 00865d10 ["CALL", null, ["callee:00c57f80:8"]]
+ 00865d68 ["INT_ADD", "register:40f0:8", ["const:865d68:8", "const:4:8"]]
+ 00865d68 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-50b0946cfa880941ada6bb319cebaf09"></a>

### [`00865da4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00865/00865da4.md) → [`00865dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865dfc.md) FUN_00865dfc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00865dec ["INT_ADD", "register:40f0:8", ["const:865dec:8", "const:4:8"]]
- 00865dec ["CALL", null, ["callee:00c57f80:8"]]
+ 00865e44 ["INT_ADD", "register:40f0:8", ["const:865e44:8", "const:4:8"]]
+ 00865e44 ["CALL", null, ["callee:00c57f80:8"]]
- 00865dfc ["INT_ADD", "register:40f0:8", ["const:865dfc:8", "const:4:8"]]
- 00865dfc ["CALL", null, ["callee:00c57f80:8"]]
+ 00865e54 ["INT_ADD", "register:40f0:8", ["const:865e54:8", "const:4:8"]]
+ 00865e54 ["CALL", null, ["callee:00c57f80:8"]]
- 00865e0c ["INT_ADD", "register:40f0:8", ["const:865e0c:8", "const:4:8"]]
- 00865e0c ["CALL", null, ["callee:00c57f80:8"]]
+ 00865e64 ["INT_ADD", "register:40f0:8", ["const:865e64:8", "const:4:8"]]
+ 00865e64 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-69b577aecf575266dcc53b7ffd2f5470"></a>

### [`00865e3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00865/00865e3c.md) → [`00865e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865e94.md) FUN_00865e94

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0083f884`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083f/0083f884.md) · 呼出先 2件 [`0046e7c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e7c4.md) [`0046eef8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046eef8.md)
- 新版 呼出元 1件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) · 呼出先 2件 [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) [`0046ef38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ef38.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00865eb0 ["INT_ADD", "register:40f0:8", ["const:865eb0:8", "const:4:8"]]
- 00865eb0 ["CALL", null, ["callee:0046ef38:8"]]
+ 00865f08 ["INT_ADD", "register:40f0:8", ["const:865f08:8", "const:4:8"]]
+ 00865f08 ["CALL", null, ["callee:0046ef38:8"]]
- 00865eb8 ["INT_ADD", "register:40f0:8", ["const:865eb8:8", "const:4:8"]]
- 00865eb8 ["CALL", null, ["callee:0046e804:8"]]
+ 00865f10 ["INT_ADD", "register:40f0:8", ["const:865f10:8", "const:4:8"]]
+ 00865f10 ["CALL", null, ["callee:0046e804:8"]]
- 00865ec4 ["INT_ADD", "register:40f0:8", ["const:865ec4:8", "const:4:8"]]
- 00865ec4 ["CALL", null, ["callee:0046e804:8"]]
+ 00865f1c ["INT_ADD", "register:40f0:8", ["const:865f1c:8", "const:4:8"]]
+ 00865f1c ["CALL", null, ["callee:0046e804:8"]]
~~~


<a id="compare-936a6e32e560a424d4fae41359cb4bff"></a>

### [`00865fd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00865/00865fd4.md) → [`0086602c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/0086602c.md) FUN_0086602c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`0046e8a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e8a4.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00865fe8 ["INT_ADD", "register:40f0:8", ["const:865fe8:8", "const:4:8"]]
- 00865fe8 ["CALL", null, ["callee:0046e8e4:8"]]
+ 00866040 ["INT_ADD", "register:40f0:8", ["const:866040:8", "const:4:8"]]
+ 00866040 ["CALL", null, ["callee:0046e8e4:8"]]
- 00865ff0 ["INT_ADD", "register:40f0:8", ["const:865ff0:8", "const:4:8"]]
- 00865ff0 ["CALL", null, ["callee:0046e8e4:8"]]
+ 00866048 ["INT_ADD", "register:40f0:8", ["const:866048:8", "const:4:8"]]
+ 00866048 ["CALL", null, ["callee:0046e8e4:8"]]
- 00865ff8 ["INT_ADD", "register:40f0:8", ["const:865ff8:8", "const:4:8"]]
- 00865ff8 ["CALL", null, ["callee:0046e8e4:8"]]
+ 00866050 ["INT_ADD", "register:40f0:8", ["const:866050:8", "const:4:8"]]
+ 00866050 ["CALL", null, ["callee:0046e8e4:8"]]
~~~


<a id="compare-bb452418aebe98d9b4237028a1508ade"></a>

### [`0086600c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00866/0086600c.md) → [`00866064`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866064.md) FUN_00866064

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086602c ["INT_ADD", "register:40f0:8", ["const:86602c:8", "const:4:8"]]
- 0086602c ["CALL", null, ["callee:00c53da0:8"]]
+ 00866084 ["INT_ADD", "register:40f0:8", ["const:866084:8", "const:4:8"]]
+ 00866084 ["CALL", null, ["callee:00c53da0:8"]]
- 00866040 ["COPY", "register:0:8", ["register:4040:8"]]
- 00866040 ["INT_ADD", "register:40f0:8", ["const:866040:8", "const:4:8"]]
- 00866040 ["CALLIND", null, ["register:0:8"]]
+ 00866098 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00866098 ["INT_ADD", "register:40f0:8", ["const:866098:8", "const:4:8"]]
+ 00866098 ["CALLIND", null, ["register:0:8"]]
- 00866048 ["INT_ADD", "register:40f0:8", ["const:866048:8", "const:4:8"]]
- 00866048 ["CALL", null, ["callee:00c57f50:8"]]
+ 008660a0 ["INT_ADD", "register:40f0:8", ["const:8660a0:8", "const:4:8"]]
+ 008660a0 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-332da808196f374116df118154f20b4d"></a>

### [`008660fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00866/008660fc.md) → [`00866154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866154.md) FUN_00866154

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0083f884`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083f/0083f884.md) · 呼出先 5件 [`0046e7c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e7c4.md) [`0046eef8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046eef8.md) [`00867714`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00867/00867714.md) [`008678ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00867/008678ec.md) [`00867a08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00867/00867a08.md)
- 新版 呼出元 1件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) · 呼出先 5件 [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) [`0046ef38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ef38.md) [`0086776c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/0086776c.md) [`00867944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867944.md) [`00867a60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867a60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086615c ["INT_ADD", "register:40f0:8", ["const:86615c:8", "const:4:8"]]
- 0086615c ["CALL", null, ["callee:0046ef38:8"]]
+ 008661b4 ["INT_ADD", "register:40f0:8", ["const:8661b4:8", "const:4:8"]]
+ 008661b4 ["CALL", null, ["callee:0046ef38:8"]]
- 00866168 ["INT_ADD", "register:40f0:8", ["const:866168:8", "const:4:8"]]
- 00866168 ["CALL", null, ["callee:0046ef38:8"]]
+ 008661c0 ["INT_ADD", "register:40f0:8", ["const:8661c0:8", "const:4:8"]]
+ 008661c0 ["CALL", null, ["callee:0046ef38:8"]]
- 00866174 ["INT_ADD", "register:40f0:8", ["const:866174:8", "const:4:8"]]
- 00866174 ["CALL", null, ["callee:0046ef38:8"]]
+ 008661cc ["INT_ADD", "register:40f0:8", ["const:8661cc:8", "const:4:8"]]
+ 008661cc ["CALL", null, ["callee:0046ef38:8"]]
~~~


<a id="compare-4c7ff9dbeefe3bdbad32725dbc4efb18"></a>

### [`00866a6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00866/00866a6c.md) → [`00866ac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866ac4.md) FUN_00866ac4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0083f884`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083f/0083f884.md) · 呼出先 4件 [`0046e7c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e7c4.md) [`0046eef8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046eef8.md) [`00867714`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00867/00867714.md) [`00867f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00867/00867f5c.md)
- 新版 呼出元 1件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) · 呼出先 4件 [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) [`0046ef38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ef38.md) [`0086776c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/0086776c.md) [`00867fb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867fb4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00866aec ["INT_ADD", "register:40f0:8", ["const:866aec:8", "const:4:8"]]
- 00866aec ["CALL", null, ["callee:0086776c:8"]]
+ 00866b44 ["INT_ADD", "register:40f0:8", ["const:866b44:8", "const:4:8"]]
+ 00866b44 ["CALL", null, ["callee:0086776c:8"]]
- 00866af4 ["INT_ADD", "register:40f0:8", ["const:866af4:8", "const:4:8"]]
- 00866af4 ["CALL", null, ["callee:00867fb4:8"]]
+ 00866b4c ["INT_ADD", "register:40f0:8", ["const:866b4c:8", "const:4:8"]]
+ 00866b4c ["CALL", null, ["callee:00867fb4:8"]]
- 00866bf4 ["INT_ADD", "register:40f0:8", ["const:866bf4:8", "const:4:8"]]
- 00866bf4 ["CALL", null, ["callee:0046ef38:8"]]
+ 00866c4c ["INT_ADD", "register:40f0:8", ["const:866c4c:8", "const:4:8"]]
+ 00866c4c ["CALL", null, ["callee:0046ef38:8"]]
~~~


<a id="compare-50e08ab05c44e36bae2d5983828558b9"></a>

### [`00866d48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00866/00866d48.md) → [`00866da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866da0.md) FUN_00866da0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00846c50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00846/00846c50.md) · 呼出先 17件 [`0046e8a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e8a4.md) [`0046efdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046efdc.md) [`005b9ee4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b9/005b9ee4.md) [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`005c3e7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c3/005c3e7c.md)
- 新版 呼出元 1件 [`00846ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00846/00846ca8.md) · 呼出先 17件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`005b9f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9f24.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00866d68 ["INT_ADD", "register:40f0:8", ["const:866d68:8", "const:4:8"]]
- 00866d68 ["CALL", null, ["callee:005c3ebc:8"]]
+ 00866dc0 ["INT_ADD", "register:40f0:8", ["const:866dc0:8", "const:4:8"]]
+ 00866dc0 ["CALL", null, ["callee:005c3ebc:8"]]
- 00866d7c ["INT_ADD", "register:40f0:8", ["const:866d7c:8", "const:4:8"]]
- 00866d7c ["CALL", null, ["callee:00c53da0:8"]]
+ 00866dd4 ["INT_ADD", "register:40f0:8", ["const:866dd4:8", "const:4:8"]]
+ 00866dd4 ["CALL", null, ["callee:00c53da0:8"]]
- 00866d90 ["COPY", "register:0:8", ["register:4040:8"]]
- 00866d90 ["INT_ADD", "register:40f0:8", ["const:866d90:8", "const:4:8"]]
- 00866d90 ["CALLIND", null, ["register:0:8"]]
+ 00866de8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00866de8 ["INT_ADD", "register:40f0:8", ["const:866de8:8", "const:4:8"]]
+ 00866de8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e82501593ac36f0e1a76081b4b618285"></a>

### [`00867068`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00867/00867068.md) → [`008670c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/008670c0.md) FUN_008670c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00846c50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00846/00846c50.md) · 呼出先 17件 [`0046e8a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e8a4.md) [`0046efdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046efdc.md) [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`005c1bf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c1bf0.md) [`00676a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/00676a60.md)
- 新版 呼出元 1件 [`00846ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00846/00846ca8.md) · 呼出先 17件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`005c1c30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1c30.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00867088 ["INT_ADD", "register:40f0:8", ["const:867088:8", "const:4:8"]]
- 00867088 ["CALL", null, ["callee:00c57f80:8"]]
+ 008670e0 ["INT_ADD", "register:40f0:8", ["const:8670e0:8", "const:4:8"]]
+ 008670e0 ["CALL", null, ["callee:00c57f80:8"]]
- 008670a0 ["INT_ADD", "register:40f0:8", ["const:8670a0:8", "const:4:8"]]
- 008670a0 ["CALL", null, ["callee:00c53da0:8"]]
+ 008670f8 ["INT_ADD", "register:40f0:8", ["const:8670f8:8", "const:4:8"]]
+ 008670f8 ["CALL", null, ["callee:00c53da0:8"]]
- 008670b4 ["COPY", "register:0:8", ["register:4040:8"]]
- 008670b4 ["INT_ADD", "register:40f0:8", ["const:8670b4:8", "const:4:8"]]
- 008670b4 ["CALLIND", null, ["register:0:8"]]
+ 0086710c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0086710c ["INT_ADD", "register:40f0:8", ["const:86710c:8", "const:4:8"]]
+ 0086710c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-74f1e4c9250b84573bc7414b426f6535"></a>

### [`00867714`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00867/00867714.md) → [`0086776c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/0086776c.md) FUN_0086776c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`008660fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00866/008660fc.md) [`00866a6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00866/00866a6c.md) · 呼出先 2件 [`0046e7c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e7c4.md) [`0046eef8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046eef8.md)
- 新版 呼出元 2件 [`00866154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866154.md) [`00866ac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866ac4.md) · 呼出先 2件 [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) [`0046ef38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ef38.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00867740 ["INT_ADD", "register:40f0:8", ["const:867740:8", "const:4:8"]]
- 00867740 ["CALL", null, ["callee:0046ef38:8"]]
+ 00867798 ["INT_ADD", "register:40f0:8", ["const:867798:8", "const:4:8"]]
+ 00867798 ["CALL", null, ["callee:0046ef38:8"]]
- 00867748 ["INT_ADD", "register:40f0:8", ["const:867748:8", "const:4:8"]]
- 00867748 ["CALL", null, ["callee:0046e804:8"]]
+ 008677a0 ["INT_ADD", "register:40f0:8", ["const:8677a0:8", "const:4:8"]]
+ 008677a0 ["CALL", null, ["callee:0046e804:8"]]
- 00867754 ["INT_ADD", "register:40f0:8", ["const:867754:8", "const:4:8"]]
- 00867754 ["CALL", null, ["callee:0046e804:8"]]
+ 008677ac ["INT_ADD", "register:40f0:8", ["const:8677ac:8", "const:4:8"]]
+ 008677ac ["CALL", null, ["callee:0046e804:8"]]
~~~


<a id="compare-fe805dfe07aabc9eace16cbc5c27bb71"></a>

### [`008678ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00867/008678ec.md) → [`00867944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867944.md) FUN_00867944

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`008660fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00866/008660fc.md) [`00867a08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00867/00867a08.md) · 呼出先 2件 [`0046e7c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e7c4.md) [`0046eef8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046eef8.md)
- 新版 呼出元 2件 [`00866154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866154.md) [`00867a60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867a60.md) · 呼出先 2件 [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) [`0046ef38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ef38.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00867918 ["INT_ADD", "register:40f0:8", ["const:867918:8", "const:4:8"]]
- 00867918 ["CALL", null, ["callee:0046ef38:8"]]
+ 00867970 ["INT_ADD", "register:40f0:8", ["const:867970:8", "const:4:8"]]
+ 00867970 ["CALL", null, ["callee:0046ef38:8"]]
- 00867920 ["INT_ADD", "register:40f0:8", ["const:867920:8", "const:4:8"]]
- 00867920 ["CALL", null, ["callee:0046e804:8"]]
+ 00867978 ["INT_ADD", "register:40f0:8", ["const:867978:8", "const:4:8"]]
+ 00867978 ["CALL", null, ["callee:0046e804:8"]]
- 0086792c ["INT_ADD", "register:40f0:8", ["const:86792c:8", "const:4:8"]]
- 0086792c ["CALL", null, ["callee:0046e804:8"]]
+ 00867984 ["INT_ADD", "register:40f0:8", ["const:867984:8", "const:4:8"]]
+ 00867984 ["CALL", null, ["callee:0046e804:8"]]
~~~


<a id="compare-90ed02c6ba3d57447f299ab7cdfca85a"></a>

### [`00867a08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00867/00867a08.md) → [`00867a60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867a60.md) FUN_00867a60

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008660fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00866/008660fc.md) · 呼出先 3件 [`0046e7c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e7c4.md) [`0046eef8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046eef8.md) [`008678ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00867/008678ec.md)
- 新版 呼出元 1件 [`00866154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866154.md) · 呼出先 3件 [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) [`0046ef38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ef38.md) [`00867944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867944.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00867a20 ["INT_ADD", "register:40f0:8", ["const:867a20:8", "const:4:8"]]
- 00867a20 ["CALL", null, ["callee:00867944:8"]]
+ 00867a78 ["INT_ADD", "register:40f0:8", ["const:867a78:8", "const:4:8"]]
+ 00867a78 ["CALL", null, ["callee:00867944:8"]]
- 00867a38 ["INT_ADD", "register:40f0:8", ["const:867a38:8", "const:4:8"]]
- 00867a38 ["CALL", null, ["callee:0046ef38:8"]]
+ 00867a90 ["INT_ADD", "register:40f0:8", ["const:867a90:8", "const:4:8"]]
+ 00867a90 ["CALL", null, ["callee:0046ef38:8"]]
- 00867a40 ["INT_ADD", "register:40f0:8", ["const:867a40:8", "const:4:8"]]
- 00867a40 ["CALL", null, ["callee:0046e804:8"]]
+ 00867a98 ["INT_ADD", "register:40f0:8", ["const:867a98:8", "const:4:8"]]
+ 00867a98 ["CALL", null, ["callee:0046e804:8"]]
~~~


<a id="compare-c0f35746fd8a50035b17fdd724943c1a"></a>

### [`00867b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00867/00867b58.md) → [`00867bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867bb0.md) FUN_00867bb0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00867068`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00867/00867068.md) · 呼出先 3件 [`0067e5e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0067e/0067e5e8.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`008670c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/008670c0.md) · 呼出先 3件 [`0067e628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067e/0067e628.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00867b94 ["COPY", "register:0:8", ["register:4040:8"]]
- 00867b94 ["INT_ADD", "register:40f0:8", ["const:867b94:8", "const:4:8"]]
- 00867b94 ["CALLIND", null, ["register:0:8"]]
+ 00867bec ["COPY", "register:0:8", ["register:4040:8"]]
+ 00867bec ["INT_ADD", "register:40f0:8", ["const:867bec:8", "const:4:8"]]
+ 00867bec ["CALLIND", null, ["register:0:8"]]
- 00867b9c ["INT_ADD", "register:40f0:8", ["const:867b9c:8", "const:4:8"]]
- 00867b9c ["CALL", null, ["callee:0067e628:8"]]
+ 00867bf4 ["INT_ADD", "register:40f0:8", ["const:867bf4:8", "const:4:8"]]
+ 00867bf4 ["CALL", null, ["callee:0067e628:8"]]
- 00867bcc ["COPY", "register:0:8", ["register:4040:8"]]
- 00867bcc ["INT_ADD", "register:40f0:8", ["const:867bcc:8", "const:4:8"]]
- 00867bcc ["CALLIND", null, ["register:0:8"]]
+ 00867c24 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00867c24 ["INT_ADD", "register:40f0:8", ["const:867c24:8", "const:4:8"]]
+ 00867c24 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c7047df9857798755c241aa087429174"></a>

### [`00867c8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00867/00867c8c.md) → [`00867ce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867ce4.md) FUN_00867ce4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00867068`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00867/00867068.md) · 呼出先 6件 [`0046e8a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e8a4.md) [`0046efdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046efdc.md) [`00867df8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00867/00867df8.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`008670c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/008670c0.md) · 呼出先 6件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`00867e50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867e50.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00867cc0 ["INT_ADD", "register:40f0:8", ["const:867cc0:8", "const:4:8"]]
- 00867cc0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00867d18 ["INT_ADD", "register:40f0:8", ["const:867d18:8", "const:4:8"]]
+ 00867d18 ["CALL", null, ["callee:00c57f80:8"]]
- 00867cc8 ["INT_ADD", "register:40f0:8", ["const:867cc8:8", "const:4:8"]]
- 00867cc8 ["CALL", null, ["callee:0046e8e4:8"]]
+ 00867d20 ["INT_ADD", "register:40f0:8", ["const:867d20:8", "const:4:8"]]
+ 00867d20 ["CALL", null, ["callee:0046e8e4:8"]]
- 00867cd0 ["INT_ADD", "register:40f0:8", ["const:867cd0:8", "const:4:8"]]
- 00867cd0 ["CALL", null, ["callee:0046e8e4:8"]]
+ 00867d28 ["INT_ADD", "register:40f0:8", ["const:867d28:8", "const:4:8"]]
+ 00867d28 ["CALL", null, ["callee:0046e8e4:8"]]
~~~


<a id="compare-ba93508e50444539a11432bdd1277fcc"></a>

### [`00867df8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00867/00867df8.md) → [`00867e50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867e50.md) FUN_00867e50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00867068`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00867/00867068.md) [`00867c8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00867/00867c8c.md) · 呼出先 4件 [`0046e8a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e8a4.md) [`0046efdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046efdc.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 2件 [`008670c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/008670c0.md) [`00867ce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867ce4.md) · 呼出先 4件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00867e0c ["INT_ADD", "register:40f0:8", ["const:867e0c:8", "const:4:8"]]
- 00867e0c ["CALL", null, ["callee:0046e8e4:8"]]
+ 00867e64 ["INT_ADD", "register:40f0:8", ["const:867e64:8", "const:4:8"]]
+ 00867e64 ["CALL", null, ["callee:0046e8e4:8"]]
- 00867e14 ["INT_ADD", "register:40f0:8", ["const:867e14:8", "const:4:8"]]
- 00867e14 ["CALL", null, ["callee:0046e8e4:8"]]
+ 00867e6c ["INT_ADD", "register:40f0:8", ["const:867e6c:8", "const:4:8"]]
+ 00867e6c ["CALL", null, ["callee:0046e8e4:8"]]
- 00867e1c ["INT_ADD", "register:40f0:8", ["const:867e1c:8", "const:4:8"]]
- 00867e1c ["CALL", null, ["callee:0046e8e4:8"]]
+ 00867e74 ["INT_ADD", "register:40f0:8", ["const:867e74:8", "const:4:8"]]
+ 00867e74 ["CALL", null, ["callee:0046e8e4:8"]]
~~~


<a id="compare-bc518bd1639c1f7f1bc20beb4850ec03"></a>

### [`00867f18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00867/00867f18.md) → [`00867f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867f70.md) FUN_00867f70

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00867068`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00867/00867068.md) [`00867f18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00867/00867f18.md) [`00b13030`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b13/00b13030.md) · 呼出先 2件 [`00867f18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00867/00867f18.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`008670c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/008670c0.md) [`00867f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867f70.md) [`00b130cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b13/00b130cc.md) · 呼出先 2件 [`00867f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00867f38 ["INT_ADD", "register:40f0:8", ["const:867f38:8", "const:4:8"]]
- 00867f38 ["CALL", null, ["local:b0:8"]]
+ 00867f90 ["INT_ADD", "register:40f0:8", ["const:867f90:8", "const:4:8"]]
+ 00867f90 ["CALL", null, ["local:b0:8"]]
- 00867f44 ["INT_ADD", "register:40f0:8", ["const:867f44:8", "const:4:8"]]
- 00867f44 ["CALL", null, ["local:b0:8"]]
+ 00867f9c ["INT_ADD", "register:40f0:8", ["const:867f9c:8", "const:4:8"]]
+ 00867f9c ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-6a79a21c7dfcc11d967616205a18cf1a"></a>

### [`00867f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00867/00867f5c.md) → [`00867fb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/00867fb4.md) FUN_00867fb4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00866a6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00866/00866a6c.md) · 呼出先 3件 [`0046e7c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e7c4.md) [`0046eef8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046eef8.md) [`005e8198`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e8/005e8198.md)
- 新版 呼出元 1件 [`00866ac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866ac4.md) · 呼出先 3件 [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) [`0046ef38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ef38.md) [`005e81d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e81d8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00867f84 ["INT_ADD", "register:40f0:8", ["const:867f84:8", "const:4:8"]]
- 00867f84 ["CALL", null, ["callee:005e81d8:8"]]
+ 00867fdc ["INT_ADD", "register:40f0:8", ["const:867fdc:8", "const:4:8"]]
+ 00867fdc ["CALL", null, ["callee:005e81d8:8"]]
- 00867f9c ["INT_ADD", "register:40f0:8", ["const:867f9c:8", "const:4:8"]]
- 00867f9c ["CALL", null, ["callee:0046ef38:8"]]
+ 00867ff4 ["INT_ADD", "register:40f0:8", ["const:867ff4:8", "const:4:8"]]
+ 00867ff4 ["CALL", null, ["callee:0046ef38:8"]]
- 00867fa4 ["INT_ADD", "register:40f0:8", ["const:867fa4:8", "const:4:8"]]
- 00867fa4 ["CALL", null, ["callee:0046e804:8"]]
+ 00867ffc ["INT_ADD", "register:40f0:8", ["const:867ffc:8", "const:4:8"]]
+ 00867ffc ["CALL", null, ["callee:0046e804:8"]]
~~~


<a id="compare-6edf60b1877df5e1cf188b6ccde97082"></a>

### [`008680c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/008680c4.md) → [`0086811c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/0086811c.md) FUN_0086811c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00866d48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00866/00866d48.md) · 呼出先 3件 [`0067e5e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0067e/0067e5e8.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`00866da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866da0.md) · 呼出先 3件 [`0067e628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067e/0067e628.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00868100 ["COPY", "register:0:8", ["register:4040:8"]]
- 00868100 ["INT_ADD", "register:40f0:8", ["const:868100:8", "const:4:8"]]
- 00868100 ["CALLIND", null, ["register:0:8"]]
+ 00868158 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00868158 ["INT_ADD", "register:40f0:8", ["const:868158:8", "const:4:8"]]
+ 00868158 ["CALLIND", null, ["register:0:8"]]
- 00868108 ["INT_ADD", "register:40f0:8", ["const:868108:8", "const:4:8"]]
- 00868108 ["CALL", null, ["callee:0067e628:8"]]
+ 00868160 ["INT_ADD", "register:40f0:8", ["const:868160:8", "const:4:8"]]
+ 00868160 ["CALL", null, ["callee:0067e628:8"]]
- 00868138 ["COPY", "register:0:8", ["register:4040:8"]]
- 00868138 ["INT_ADD", "register:40f0:8", ["const:868138:8", "const:4:8"]]
- 00868138 ["CALLIND", null, ["register:0:8"]]
+ 00868190 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00868190 ["INT_ADD", "register:40f0:8", ["const:868190:8", "const:4:8"]]
+ 00868190 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7d20ebb872fb84927cf8688c6a574662"></a>

### [`00868234`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/00868234.md) → [`0086828c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/0086828c.md) FUN_0086828c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00866d48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00866/00866d48.md) · 呼出先 3件 [`008686d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/008686d8.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`00866da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866da0.md) · 呼出先 3件 [`00868730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868730.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00868254 ["INT_ADD", "register:40f0:8", ["const:868254:8", "const:4:8"]]
- 00868254 ["CALL", null, ["callee:00c53da0:8"]]
+ 008682ac ["INT_ADD", "register:40f0:8", ["const:8682ac:8", "const:4:8"]]
+ 008682ac ["CALL", null, ["callee:00c53da0:8"]]
- 00868268 ["COPY", "register:0:8", ["register:4040:8"]]
- 00868268 ["INT_ADD", "register:40f0:8", ["const:868268:8", "const:4:8"]]
- 00868268 ["CALLIND", null, ["register:0:8"]]
+ 008682c0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008682c0 ["INT_ADD", "register:40f0:8", ["const:8682c0:8", "const:4:8"]]
+ 008682c0 ["CALLIND", null, ["register:0:8"]]
- 00868270 ["INT_ADD", "register:40f0:8", ["const:868270:8", "const:4:8"]]
- 00868270 ["CALL", null, ["callee:00c57f50:8"]]
+ 008682c8 ["INT_ADD", "register:40f0:8", ["const:8682c8:8", "const:4:8"]]
+ 008682c8 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-5d6375cfcf976206d6c13df410b4c8ac"></a>

### [`008683bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/008683bc.md) → [`00868414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868414.md) FUN_00868414

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00866d48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00866/00866d48.md) · 呼出先 5件 [`0046e8a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e8a4.md) [`0046efdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046efdc.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00866da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866da0.md) · 呼出先 5件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008683d0 ["INT_ADD", "register:40f0:8", ["const:8683d0:8", "const:4:8"]]
- 008683d0 ["CALL", null, ["callee:0046e8e4:8"]]
+ 00868428 ["INT_ADD", "register:40f0:8", ["const:868428:8", "const:4:8"]]
+ 00868428 ["CALL", null, ["callee:0046e8e4:8"]]
- 008683d8 ["INT_ADD", "register:40f0:8", ["const:8683d8:8", "const:4:8"]]
- 008683d8 ["CALL", null, ["callee:0046e8e4:8"]]
+ 00868430 ["INT_ADD", "register:40f0:8", ["const:868430:8", "const:4:8"]]
+ 00868430 ["CALL", null, ["callee:0046e8e4:8"]]
- 008683e0 ["INT_ADD", "register:40f0:8", ["const:8683e0:8", "const:4:8"]]
- 008683e0 ["CALL", null, ["callee:0046e8e4:8"]]
+ 00868438 ["INT_ADD", "register:40f0:8", ["const:868438:8", "const:4:8"]]
+ 00868438 ["CALL", null, ["callee:0046e8e4:8"]]
~~~


<a id="compare-11f3922003cf0098ab4897db4091db14"></a>

### [`008684f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/008684f0.md) → [`00868548`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868548.md) FUN_00868548

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00866d48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00866/00866d48.md) [`00867068`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00867/00867068.md) · 呼出先 4件 [`0046e8a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e8a4.md) [`0046efdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046efdc.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 2件 [`00866da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866da0.md) [`008670c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/008670c0.md) · 呼出先 4件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00868504 ["INT_ADD", "register:40f0:8", ["const:868504:8", "const:4:8"]]
- 00868504 ["CALL", null, ["callee:0046e8e4:8"]]
+ 0086855c ["INT_ADD", "register:40f0:8", ["const:86855c:8", "const:4:8"]]
+ 0086855c ["CALL", null, ["callee:0046e8e4:8"]]
- 0086850c ["INT_ADD", "register:40f0:8", ["const:86850c:8", "const:4:8"]]
- 0086850c ["CALL", null, ["callee:0046f01c:8"]]
+ 00868564 ["INT_ADD", "register:40f0:8", ["const:868564:8", "const:4:8"]]
+ 00868564 ["CALL", null, ["callee:0046f01c:8"]]
- 00868520 ["INT_ADD", "register:40f0:8", ["const:868520:8", "const:4:8"]]
- 00868520 ["CALL", null, ["callee:00c53da0:8"]]
+ 00868578 ["INT_ADD", "register:40f0:8", ["const:868578:8", "const:4:8"]]
+ 00868578 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-6ed36103a736a788dbf704640d47322d"></a>

### [`00868660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/00868660.md) → [`008686b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/008686b8.md) FUN_008686b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008686a8 ["INT_ADD", "register:40f0:8", ["const:8686a8:8", "const:4:8"]]
- 008686a8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00868700 ["INT_ADD", "register:40f0:8", ["const:868700:8", "const:4:8"]]
+ 00868700 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-5da66a3183ec4f6b0f25e82dc0098aa5"></a>

### [`008686d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/008686d8.md) → [`00868730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868730.md) FUN_00868730

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00868234`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/00868234.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0086828c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/0086828c.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00868724 ["INT_ADD", "register:40f0:8", ["const:868724:8", "const:4:8"]]
- 00868724 ["CALL", null, ["callee:00c53da0:8"]]
+ 0086877c ["INT_ADD", "register:40f0:8", ["const:86877c:8", "const:4:8"]]
+ 0086877c ["CALL", null, ["callee:00c53da0:8"]]
- 00868738 ["COPY", "register:0:8", ["register:4040:8"]]
- 00868738 ["INT_ADD", "register:40f0:8", ["const:868738:8", "const:4:8"]]
- 00868738 ["CALLIND", null, ["register:0:8"]]
+ 00868790 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00868790 ["INT_ADD", "register:40f0:8", ["const:868790:8", "const:4:8"]]
+ 00868790 ["CALLIND", null, ["register:0:8"]]
- 00868740 ["INT_ADD", "register:40f0:8", ["const:868740:8", "const:4:8"]]
- 00868740 ["CALL", null, ["callee:00c57f50:8"]]
+ 00868798 ["INT_ADD", "register:40f0:8", ["const:868798:8", "const:4:8"]]
+ 00868798 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-9df677fbbd2070bd812bb3a125e1d67d"></a>

### [`00868840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/00868840.md) → [`00868898`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868898.md) FUN_00868898

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00866d48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00866/00866d48.md) [`00868840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/00868840.md) · 呼出先 2件 [`00868840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/00868840.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`00866da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866da0.md) [`00868898`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868898.md) · 呼出先 2件 [`00868898`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868898.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00868860 ["INT_ADD", "register:40f0:8", ["const:868860:8", "const:4:8"]]
- 00868860 ["CALL", null, ["local:b0:8"]]
+ 008688b8 ["INT_ADD", "register:40f0:8", ["const:8688b8:8", "const:4:8"]]
+ 008688b8 ["CALL", null, ["local:b0:8"]]
- 0086886c ["INT_ADD", "register:40f0:8", ["const:86886c:8", "const:4:8"]]
- 0086886c ["CALL", null, ["local:b0:8"]]
+ 008688c4 ["INT_ADD", "register:40f0:8", ["const:8688c4:8", "const:4:8"]]
+ 008688c4 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-f1869a5b5527a3cdf3d6d21661b1a691"></a>

### [`00868884`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/00868884.md) → [`008688dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/008688dc.md) FUN_008688dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00867068`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00867/00867068.md) [`00868884`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/00868884.md) · 呼出先 2件 [`00868884`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/00868884.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`008670c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/008670c0.md) [`008688dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/008688dc.md) · 呼出先 2件 [`008688dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/008688dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008688a4 ["INT_ADD", "register:40f0:8", ["const:8688a4:8", "const:4:8"]]
- 008688a4 ["CALL", null, ["local:b0:8"]]
+ 008688fc ["INT_ADD", "register:40f0:8", ["const:8688fc:8", "const:4:8"]]
+ 008688fc ["CALL", null, ["local:b0:8"]]
- 008688b0 ["INT_ADD", "register:40f0:8", ["const:8688b0:8", "const:4:8"]]
- 008688b0 ["CALL", null, ["local:b0:8"]]
+ 00868908 ["INT_ADD", "register:40f0:8", ["const:868908:8", "const:4:8"]]
+ 00868908 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-72691c02f7ee8263e5f623f553a0a46d"></a>

### [`008688c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/008688c8.md) → [`00868920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868920.md) FUN_00868920

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00868914 ["INT_ADD", "register:40f0:8", ["const:868914:8", "const:4:8"]]
- 00868914 ["CALL", null, ["callee:00c53da0:8"]]
+ 0086896c ["INT_ADD", "register:40f0:8", ["const:86896c:8", "const:4:8"]]
+ 0086896c ["CALL", null, ["callee:00c53da0:8"]]
- 00868928 ["COPY", "register:0:8", ["register:4040:8"]]
- 00868928 ["INT_ADD", "register:40f0:8", ["const:868928:8", "const:4:8"]]
- 00868928 ["CALLIND", null, ["register:0:8"]]
+ 00868980 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00868980 ["INT_ADD", "register:40f0:8", ["const:868980:8", "const:4:8"]]
+ 00868980 ["CALLIND", null, ["register:0:8"]]
- 00868930 ["INT_ADD", "register:40f0:8", ["const:868930:8", "const:4:8"]]
- 00868930 ["CALL", null, ["callee:00c57f50:8"]]
+ 00868988 ["INT_ADD", "register:40f0:8", ["const:868988:8", "const:4:8"]]
+ 00868988 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-d6691a1a5d4c56a3c514302b612351a5"></a>

### [`00868960`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/00868960.md) → [`008689b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/008689b8.md) FUN_008689b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008469a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00846/008469a4.md) · 呼出先 7件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`005c3e7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c3/005c3e7c.md) [`00676a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/00676a60.md) [`006fb074`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fb/006fb074.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`008469fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00846/008469fc.md) · 呼出先 7件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`006fb0cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fb0cc.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0086897c ["INT_ADD", "register:40f0:8", ["const:86897c:8", "const:4:8"]]
- 0086897c ["CALL", null, ["callee:00c57f80:8"]]
+ 008689d4 ["INT_ADD", "register:40f0:8", ["const:8689d4:8", "const:4:8"]]
+ 008689d4 ["CALL", null, ["callee:00c57f80:8"]]
- 0086898c ["INT_ADD", "register:40f0:8", ["const:86898c:8", "const:4:8"]]
- 0086898c ["CALL", null, ["callee:00c57f80:8"]]
+ 008689e4 ["INT_ADD", "register:40f0:8", ["const:8689e4:8", "const:4:8"]]
+ 008689e4 ["CALL", null, ["callee:00c57f80:8"]]
- 00868998 ["INT_ADD", "register:40f0:8", ["const:868998:8", "const:4:8"]]
- 00868998 ["CALL", null, ["callee:006fb0cc:8"]]
+ 008689f0 ["INT_ADD", "register:40f0:8", ["const:8689f0:8", "const:4:8"]]
+ 008689f0 ["CALL", null, ["callee:006fb0cc:8"]]
~~~


<a id="compare-7549acdd1672114914ea397734539dc9"></a>

### [`008689f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/008689f8.md) → [`00868a50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868a50.md) FUN_00868a50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00846c50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00846/00846c50.md) · 呼出先 8件 [`0046e8a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e8a4.md) [`0046efdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046efdc.md) [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`00868ac0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/00868ac0.md) [`00868c20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/00868c20.md)
- 新版 呼出元 1件 [`00846ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00846/00846ca8.md) · 呼出先 8件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00868b18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868b18.md) [`00868c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868c78.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00868a14 ["INT_ADD", "register:40f0:8", ["const:868a14:8", "const:4:8"]]
- 00868a14 ["CALL", null, ["callee:00c57f80:8"]]
+ 00868a6c ["INT_ADD", "register:40f0:8", ["const:868a6c:8", "const:4:8"]]
+ 00868a6c ["CALL", null, ["callee:00c57f80:8"]]
- 00868a1c ["INT_ADD", "register:40f0:8", ["const:868a1c:8", "const:4:8"]]
- 00868a1c ["CALL", null, ["callee:00868b18:8"]]
+ 00868a74 ["INT_ADD", "register:40f0:8", ["const:868a74:8", "const:4:8"]]
+ 00868a74 ["CALL", null, ["callee:00868b18:8"]]
- 00868a30 ["INT_ADD", "register:40f0:8", ["const:868a30:8", "const:4:8"]]
- 00868a30 ["CALL", null, ["callee:00c53da0:8"]]
+ 00868a88 ["INT_ADD", "register:40f0:8", ["const:868a88:8", "const:4:8"]]
+ 00868a88 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-aae5991247eaa6a35245f64a1351e9f1"></a>

### [`00868ac0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/00868ac0.md) → [`00868b18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868b18.md) FUN_00868b18

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`008689f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/008689f8.md) [`008e3d50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e3/008e3d50.md) [`008e95c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e9/008e95c0.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`00868a50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868a50.md) [`008e3da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e3/008e3da4.md) [`008e9614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e9/008e9614.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00868b08 ["INT_ADD", "register:40f0:8", ["const:868b08:8", "const:4:8"]]
- 00868b08 ["CALL", null, ["callee:00c57f80:8"]]
+ 00868b60 ["INT_ADD", "register:40f0:8", ["const:868b60:8", "const:4:8"]]
+ 00868b60 ["CALL", null, ["callee:00c57f80:8"]]
- 00868b18 ["INT_ADD", "register:40f0:8", ["const:868b18:8", "const:4:8"]]
- 00868b18 ["CALL", null, ["callee:00c57f80:8"]]
+ 00868b70 ["INT_ADD", "register:40f0:8", ["const:868b70:8", "const:4:8"]]
+ 00868b70 ["CALL", null, ["callee:00c57f80:8"]]
- 00868b50 ["INT_ADD", "register:40f0:8", ["const:868b50:8", "const:4:8"]]
- 00868b50 ["CALL", null, ["callee:00c57f80:8"]]
+ 00868ba8 ["INT_ADD", "register:40f0:8", ["const:868ba8:8", "const:4:8"]]
+ 00868ba8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-57a1210f1a916a82483b2035999fe9d9"></a>

### [`00868c20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/00868c20.md) → [`00868c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868c78.md) FUN_00868c78

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`008689f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/008689f8.md) [`00868c20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/00868c20.md) [`008e1d44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e1/008e1d44.md) [`008e4560`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e4/008e4560.md) · 呼出先 2件 [`00868c20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/00868c20.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 4件 [`00868a50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868a50.md) [`00868c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868c78.md) [`008e1d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e1/008e1d98.md) [`008e45b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e4/008e45b4.md) · 呼出先 2件 [`00868c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868c78.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00868c40 ["INT_ADD", "register:40f0:8", ["const:868c40:8", "const:4:8"]]
- 00868c40 ["CALL", null, ["local:b0:8"]]
+ 00868c98 ["INT_ADD", "register:40f0:8", ["const:868c98:8", "const:4:8"]]
+ 00868c98 ["CALL", null, ["local:b0:8"]]
- 00868c4c ["INT_ADD", "register:40f0:8", ["const:868c4c:8", "const:4:8"]]
- 00868c4c ["CALL", null, ["local:b0:8"]]
+ 00868ca4 ["INT_ADD", "register:40f0:8", ["const:868ca4:8", "const:4:8"]]
+ 00868ca4 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-3a32dd9bc438aa537fb571e320387ded"></a>

### [`00868c64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/00868c64.md) → [`00868cbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00868/00868cbc.md) FUN_00868cbc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0084729c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00847/0084729c.md) · 呼出先 5件 [`00676a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/00676a60.md) [`00868fac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00868/00868fac.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`008472f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00847/008472f4.md) · 呼出先 5件 [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`00869004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869004.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00868c88 ["INT_ADD", "register:40f0:8", ["const:868c88:8", "const:4:8"]]
- 00868c88 ["CALL", null, ["callee:00c53da0:8"]]
+ 00868ce0 ["INT_ADD", "register:40f0:8", ["const:868ce0:8", "const:4:8"]]
+ 00868ce0 ["CALL", null, ["callee:00c53da0:8"]]
- 00868c9c ["COPY", "register:0:8", ["register:4040:8"]]
- 00868c9c ["INT_ADD", "register:40f0:8", ["const:868c9c:8", "const:4:8"]]
- 00868c9c ["CALLIND", null, ["register:0:8"]]
+ 00868cf4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00868cf4 ["INT_ADD", "register:40f0:8", ["const:868cf4:8", "const:4:8"]]
+ 00868cf4 ["CALLIND", null, ["register:0:8"]]
- 00868ca4 ["INT_ADD", "register:40f0:8", ["const:868ca4:8", "const:4:8"]]
- 00868ca4 ["CALL", null, ["callee:00c57f50:8"]]
+ 00868cfc ["INT_ADD", "register:40f0:8", ["const:868cfc:8", "const:4:8"]]
+ 00868cfc ["CALL", null, ["callee:00c57f50:8"]]
~~~


