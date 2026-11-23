# v16.0.1 → v16.0.2 · 要調査の変更候補 (28)

[一覧の目次](README.md)

<a id="compare-b46d94c815720124cf53bac7396bf8fa"></a>

### [`00874578`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/00874578.md) → [`008745d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/008745d0.md) FUN_008745d0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00873aa8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/00873aa8.md) · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`00873b00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873b00.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00874594 ["INT_ADD", "register:40f0:8", ["const:874594:8", "const:4:8"]]
- 00874594 ["CALL", null, ["callee:00c53da0:8"]]
+ 008745ec ["INT_ADD", "register:40f0:8", ["const:8745ec:8", "const:4:8"]]
+ 008745ec ["CALL", null, ["callee:00c53da0:8"]]
- 008745b4 ["COPY", "register:0:8", ["register:4040:8"]]
- 008745b4 ["INT_ADD", "register:40f0:8", ["const:8745b4:8", "const:4:8"]]
- 008745b4 ["CALLIND", null, ["register:0:8"]]
+ 0087460c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087460c ["INT_ADD", "register:40f0:8", ["const:87460c:8", "const:4:8"]]
+ 0087460c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c4e47dd51601de215e00e2c6a68b1b08"></a>

### [`008745c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/008745c8.md) → [`00874620`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874620.md) FUN_00874620

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00873aa8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/00873aa8.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00873b00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873b00.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008745e8 ["INT_ADD", "register:40f0:8", ["const:8745e8:8", "const:4:8"]]
- 008745e8 ["CALL", null, ["callee:00c53da0:8"]]
+ 00874640 ["INT_ADD", "register:40f0:8", ["const:874640:8", "const:4:8"]]
+ 00874640 ["CALL", null, ["callee:00c53da0:8"]]
- 008745fc ["COPY", "register:0:8", ["register:4040:8"]]
- 008745fc ["INT_ADD", "register:40f0:8", ["const:8745fc:8", "const:4:8"]]
- 008745fc ["CALLIND", null, ["register:0:8"]]
+ 00874654 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00874654 ["INT_ADD", "register:40f0:8", ["const:874654:8", "const:4:8"]]
+ 00874654 ["CALLIND", null, ["register:0:8"]]
- 00874604 ["INT_ADD", "register:40f0:8", ["const:874604:8", "const:4:8"]]
- 00874604 ["CALL", null, ["callee:00c57f50:8"]]
+ 0087465c ["INT_ADD", "register:40f0:8", ["const:87465c:8", "const:4:8"]]
+ 0087465c ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-ede790dfb23909f3ed23952b8d10e208"></a>

### [`00874618`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/00874618.md) → [`00874670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874670.md) FUN_00874670

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`008746e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/008746e8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00874740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874740.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087465c ["INT_ADD", "register:40f0:8", ["const:87465c:8", "const:4:8"]]
- 0087465c ["CALL", null, ["callee:00874740:8"]]
+ 008746b4 ["INT_ADD", "register:40f0:8", ["const:8746b4:8", "const:4:8"]]
+ 008746b4 ["CALL", null, ["callee:00874740:8"]]
- 0087466c ["INT_ADD", "register:40f0:8", ["const:87466c:8", "const:4:8"]]
- 0087466c ["CALL", null, ["callee:00c57f80:8"]]
+ 008746c4 ["INT_ADD", "register:40f0:8", ["const:8746c4:8", "const:4:8"]]
+ 008746c4 ["CALL", null, ["callee:00c57f80:8"]]
- 008746bc ["INT_ADD", "register:40f0:8", ["const:8746bc:8", "const:4:8"]]
- 008746bc ["CALL", null, ["callee:00c57fb0:8"]]
+ 00874714 ["INT_ADD", "register:40f0:8", ["const:874714:8", "const:4:8"]]
+ 00874714 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-0cede8171f74487a6facf83c9453bab4"></a>

### [`00874898`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/00874898.md) → [`008748f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/008748f0.md) FUN_008748f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008748b4 ["INT_ADD", "register:40f0:8", ["const:8748b4:8", "const:4:8"]]
- 008748b4 ["CALL", null, ["callee:00c53da0:8"]]
+ 0087490c ["INT_ADD", "register:40f0:8", ["const:87490c:8", "const:4:8"]]
+ 0087490c ["CALL", null, ["callee:00c53da0:8"]]
- 008748d4 ["COPY", "register:0:8", ["register:4040:8"]]
- 008748d4 ["INT_ADD", "register:40f0:8", ["const:8748d4:8", "const:4:8"]]
- 008748d4 ["CALLIND", null, ["register:0:8"]]
+ 0087492c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087492c ["INT_ADD", "register:40f0:8", ["const:87492c:8", "const:4:8"]]
+ 0087492c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-72b9e8667c981e6ba7ecc7d23e130063"></a>

### [`00874a34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/00874a34.md) → [`00874a8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874a8c.md) FUN_00874a8c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008746e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/008746e8.md) · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`00874740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874740.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00874a50 ["INT_ADD", "register:40f0:8", ["const:874a50:8", "const:4:8"]]
- 00874a50 ["CALL", null, ["callee:00c53da0:8"]]
+ 00874aa8 ["INT_ADD", "register:40f0:8", ["const:874aa8:8", "const:4:8"]]
+ 00874aa8 ["CALL", null, ["callee:00c53da0:8"]]
- 00874a70 ["COPY", "register:0:8", ["register:4040:8"]]
- 00874a70 ["INT_ADD", "register:40f0:8", ["const:874a70:8", "const:4:8"]]
- 00874a70 ["CALLIND", null, ["register:0:8"]]
+ 00874ac8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00874ac8 ["INT_ADD", "register:40f0:8", ["const:874ac8:8", "const:4:8"]]
+ 00874ac8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5c0bdec45ee27121621b08b2dd77268a"></a>

### [`00874a84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/00874a84.md) → [`00874adc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874adc.md) FUN_00874adc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008746e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/008746e8.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00874740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874740.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00874aa4 ["INT_ADD", "register:40f0:8", ["const:874aa4:8", "const:4:8"]]
- 00874aa4 ["CALL", null, ["callee:00c53da0:8"]]
+ 00874afc ["INT_ADD", "register:40f0:8", ["const:874afc:8", "const:4:8"]]
+ 00874afc ["CALL", null, ["callee:00c53da0:8"]]
- 00874ab8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00874ab8 ["INT_ADD", "register:40f0:8", ["const:874ab8:8", "const:4:8"]]
- 00874ab8 ["CALLIND", null, ["register:0:8"]]
+ 00874b10 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00874b10 ["INT_ADD", "register:40f0:8", ["const:874b10:8", "const:4:8"]]
+ 00874b10 ["CALLIND", null, ["register:0:8"]]
- 00874ac0 ["INT_ADD", "register:40f0:8", ["const:874ac0:8", "const:4:8"]]
- 00874ac0 ["CALL", null, ["callee:00c57f50:8"]]
+ 00874b18 ["INT_ADD", "register:40f0:8", ["const:874b18:8", "const:4:8"]]
+ 00874b18 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-507e5aa4bf0393299c537b79e65e6800"></a>

### [`00874b0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/00874b0c.md) → [`00874b64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874b64.md) FUN_00874b64

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00874b28 ["INT_ADD", "register:40f0:8", ["const:874b28:8", "const:4:8"]]
- 00874b28 ["CALL", null, ["callee:00c53da0:8"]]
+ 00874b80 ["INT_ADD", "register:40f0:8", ["const:874b80:8", "const:4:8"]]
+ 00874b80 ["CALL", null, ["callee:00c53da0:8"]]
- 00874b48 ["COPY", "register:0:8", ["register:4040:8"]]
- 00874b48 ["INT_ADD", "register:40f0:8", ["const:874b48:8", "const:4:8"]]
- 00874b48 ["CALLIND", null, ["register:0:8"]]
+ 00874ba0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00874ba0 ["INT_ADD", "register:40f0:8", ["const:874ba0:8", "const:4:8"]]
+ 00874ba0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6f8993bda57093a200bafa71f08c32dd"></a>

### [`00874ca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/00874ca8.md) → [`00874d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874d00.md) FUN_00874d00

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00873c50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/00873c50.md) · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`00873ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873ca8.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00874cc4 ["INT_ADD", "register:40f0:8", ["const:874cc4:8", "const:4:8"]]
- 00874cc4 ["CALL", null, ["callee:00c53da0:8"]]
+ 00874d1c ["INT_ADD", "register:40f0:8", ["const:874d1c:8", "const:4:8"]]
+ 00874d1c ["CALL", null, ["callee:00c53da0:8"]]
- 00874ce4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00874ce4 ["INT_ADD", "register:40f0:8", ["const:874ce4:8", "const:4:8"]]
- 00874ce4 ["CALLIND", null, ["register:0:8"]]
+ 00874d3c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00874d3c ["INT_ADD", "register:40f0:8", ["const:874d3c:8", "const:4:8"]]
+ 00874d3c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6afb076b612c7ed8b76808ddbbda72a4"></a>

### [`00874cf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/00874cf8.md) → [`00874d50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874d50.md) FUN_00874d50

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00873c50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/00873c50.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00873ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873ca8.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00874d18 ["INT_ADD", "register:40f0:8", ["const:874d18:8", "const:4:8"]]
- 00874d18 ["CALL", null, ["callee:00c53da0:8"]]
+ 00874d70 ["INT_ADD", "register:40f0:8", ["const:874d70:8", "const:4:8"]]
+ 00874d70 ["CALL", null, ["callee:00c53da0:8"]]
- 00874d2c ["COPY", "register:0:8", ["register:4040:8"]]
- 00874d2c ["INT_ADD", "register:40f0:8", ["const:874d2c:8", "const:4:8"]]
- 00874d2c ["CALLIND", null, ["register:0:8"]]
+ 00874d84 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00874d84 ["INT_ADD", "register:40f0:8", ["const:874d84:8", "const:4:8"]]
+ 00874d84 ["CALLIND", null, ["register:0:8"]]
- 00874d34 ["INT_ADD", "register:40f0:8", ["const:874d34:8", "const:4:8"]]
- 00874d34 ["CALL", null, ["callee:00c57f50:8"]]
+ 00874d8c ["INT_ADD", "register:40f0:8", ["const:874d8c:8", "const:4:8"]]
+ 00874d8c ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-b2d44c3f4e91481857505905ae4decd9"></a>

### [`00874f44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00874/00874f44.md) → [`00874f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874f9c.md) FUN_00874f9c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00874f60 ["INT_ADD", "register:40f0:8", ["const:874f60:8", "const:4:8"]]
- 00874f60 ["CALL", null, ["callee:00c53da0:8"]]
+ 00874fb8 ["INT_ADD", "register:40f0:8", ["const:874fb8:8", "const:4:8"]]
+ 00874fb8 ["CALL", null, ["callee:00c53da0:8"]]
- 00874f80 ["COPY", "register:0:8", ["register:4040:8"]]
- 00874f80 ["INT_ADD", "register:40f0:8", ["const:874f80:8", "const:4:8"]]
- 00874f80 ["CALLIND", null, ["register:0:8"]]
+ 00874fd8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00874fd8 ["INT_ADD", "register:40f0:8", ["const:874fd8:8", "const:4:8"]]
+ 00874fd8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-4d64a97522c18c549709def4b5f6d7ec"></a>

### [`008750e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/008750e0.md) → [`00875138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875138.md) FUN_00875138

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00873dc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/00873dc8.md) · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`00873e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873e20.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008750fc ["INT_ADD", "register:40f0:8", ["const:8750fc:8", "const:4:8"]]
- 008750fc ["CALL", null, ["callee:00c53da0:8"]]
+ 00875154 ["INT_ADD", "register:40f0:8", ["const:875154:8", "const:4:8"]]
+ 00875154 ["CALL", null, ["callee:00c53da0:8"]]
- 0087511c ["COPY", "register:0:8", ["register:4040:8"]]
- 0087511c ["INT_ADD", "register:40f0:8", ["const:87511c:8", "const:4:8"]]
- 0087511c ["CALLIND", null, ["register:0:8"]]
+ 00875174 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00875174 ["INT_ADD", "register:40f0:8", ["const:875174:8", "const:4:8"]]
+ 00875174 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e02902d0a2a213c4ba4d9ff45ba7c6a4"></a>

### [`00875130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/00875130.md) → [`00875188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875188.md) FUN_00875188

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00873dc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/00873dc8.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00873e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873e20.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00875150 ["INT_ADD", "register:40f0:8", ["const:875150:8", "const:4:8"]]
- 00875150 ["CALL", null, ["callee:00c53da0:8"]]
+ 008751a8 ["INT_ADD", "register:40f0:8", ["const:8751a8:8", "const:4:8"]]
+ 008751a8 ["CALL", null, ["callee:00c53da0:8"]]
- 00875164 ["COPY", "register:0:8", ["register:4040:8"]]
- 00875164 ["INT_ADD", "register:40f0:8", ["const:875164:8", "const:4:8"]]
- 00875164 ["CALLIND", null, ["register:0:8"]]
+ 008751bc ["COPY", "register:0:8", ["register:4040:8"]]
+ 008751bc ["INT_ADD", "register:40f0:8", ["const:8751bc:8", "const:4:8"]]
+ 008751bc ["CALLIND", null, ["register:0:8"]]
- 0087516c ["INT_ADD", "register:40f0:8", ["const:87516c:8", "const:4:8"]]
- 0087516c ["CALL", null, ["callee:00c57f50:8"]]
+ 008751c4 ["INT_ADD", "register:40f0:8", ["const:8751c4:8", "const:4:8"]]
+ 008751c4 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-3148e9b706ab190fb9a18389cdecabda"></a>

### [`008753dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/008753dc.md) → [`00875434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875434.md) FUN_00875434

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00873f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/00873f40.md) · 呼出先 5件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0087561c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/0087561c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00873f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873f98.md) · 呼出先 5件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00875674`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875674.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087546c ["INT_ADD", "register:40f0:8", ["const:87546c:8", "const:4:8"]]
- 0087546c ["CALL", null, ["callee:00c58120:8"]]
+ 008754c4 ["INT_ADD", "register:40f0:8", ["const:8754c4:8", "const:4:8"]]
+ 008754c4 ["CALL", null, ["callee:00c58120:8"]]
- 008754c8 ["INT_ADD", "register:40f0:8", ["const:8754c8:8", "const:4:8"]]
- 008754c8 ["CALL", null, ["callee:00c58120:8"]]
+ 00875520 ["INT_ADD", "register:40f0:8", ["const:875520:8", "const:4:8"]]
+ 00875520 ["CALL", null, ["callee:00c58120:8"]]
- 00875518 ["INT_ADD", "register:40f0:8", ["const:875518:8", "const:4:8"]]
- 00875518 ["CALL", null, ["callee:00875674:8"]]
+ 00875570 ["INT_ADD", "register:40f0:8", ["const:875570:8", "const:4:8"]]
+ 00875570 ["CALL", null, ["callee:00875674:8"]]
~~~


<a id="compare-fe598d8b6cd68e0f6f3d1729fb515969"></a>

### [`008755cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/008755cc.md) → [`00875624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875624.md) FUN_00875624

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008755e8 ["INT_ADD", "register:40f0:8", ["const:8755e8:8", "const:4:8"]]
- 008755e8 ["CALL", null, ["callee:00c53da0:8"]]
+ 00875640 ["INT_ADD", "register:40f0:8", ["const:875640:8", "const:4:8"]]
+ 00875640 ["CALL", null, ["callee:00c53da0:8"]]
- 00875608 ["COPY", "register:0:8", ["register:4040:8"]]
- 00875608 ["INT_ADD", "register:40f0:8", ["const:875608:8", "const:4:8"]]
- 00875608 ["CALLIND", null, ["register:0:8"]]
+ 00875660 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00875660 ["INT_ADD", "register:40f0:8", ["const:875660:8", "const:4:8"]]
+ 00875660 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ca1c5d88c0149e1d2cf3bb775789e3e4"></a>

### [`0087561c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/0087561c.md) → [`00875674`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875674.md) FUN_00875674

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008753dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/008753dc.md) · 呼出先 2件 [`008758b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/008758b8.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00875434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875434.md) · 呼出先 2件 [`00875910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875910.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008756a4 ["INT_ADD", "register:40f0:8", ["const:8756a4:8", "const:4:8"]]
- 008756a4 ["CALL", null, ["callee:00c58120:8"]]
+ 008756fc ["INT_ADD", "register:40f0:8", ["const:8756fc:8", "const:4:8"]]
+ 008756fc ["CALL", null, ["callee:00c58120:8"]]
- 008756f8 ["INT_ADD", "register:40f0:8", ["const:8756f8:8", "const:4:8"]]
- 008756f8 ["CALL", null, ["callee:00c58120:8"]]
+ 00875750 ["INT_ADD", "register:40f0:8", ["const:875750:8", "const:4:8"]]
+ 00875750 ["CALL", null, ["callee:00c58120:8"]]
- 00875794 ["INT_ADD", "register:40f0:8", ["const:875794:8", "const:4:8"]]
- 00875794 ["CALL", null, ["callee:00c58120:8"]]
+ 008757ec ["INT_ADD", "register:40f0:8", ["const:8757ec:8", "const:4:8"]]
+ 008757ec ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-18a5a16da24ded3632d5c77222e4deca"></a>

### [`008758b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/008758b8.md) → [`00875910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875910.md) FUN_00875910

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0087561c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/0087561c.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00875674`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875674.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087593c ["INT_ADD", "register:40f0:8", ["const:87593c:8", "const:4:8"]]
- 0087593c ["CALL", null, ["callee:00c58120:8"]]
+ 00875994 ["INT_ADD", "register:40f0:8", ["const:875994:8", "const:4:8"]]
+ 00875994 ["CALL", null, ["callee:00c58120:8"]]
- 00875968 ["INT_ADD", "register:40f0:8", ["const:875968:8", "const:4:8"]]
- 00875968 ["CALL", null, ["callee:00c58120:8"]]
+ 008759c0 ["INT_ADD", "register:40f0:8", ["const:8759c0:8", "const:4:8"]]
+ 008759c0 ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-356575a96d280b3dfbb0961888f71fa8"></a>

### [`00875ba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/00875ba4.md) → [`00875bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875bfc.md) FUN_00875bfc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00873f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/00873f40.md) · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`00873f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873f98.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00875bc0 ["INT_ADD", "register:40f0:8", ["const:875bc0:8", "const:4:8"]]
- 00875bc0 ["CALL", null, ["callee:00c53da0:8"]]
+ 00875c18 ["INT_ADD", "register:40f0:8", ["const:875c18:8", "const:4:8"]]
+ 00875c18 ["CALL", null, ["callee:00c53da0:8"]]
- 00875be0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00875be0 ["INT_ADD", "register:40f0:8", ["const:875be0:8", "const:4:8"]]
- 00875be0 ["CALLIND", null, ["register:0:8"]]
+ 00875c38 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00875c38 ["INT_ADD", "register:40f0:8", ["const:875c38:8", "const:4:8"]]
+ 00875c38 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-15e9b62cf4268ea81caea82e53f46f77"></a>

### [`00875bf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/00875bf4.md) → [`00875c4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875c4c.md) FUN_00875c4c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00873f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/00873f40.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00873f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873f98.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00875c14 ["INT_ADD", "register:40f0:8", ["const:875c14:8", "const:4:8"]]
- 00875c14 ["CALL", null, ["callee:00c53da0:8"]]
+ 00875c6c ["INT_ADD", "register:40f0:8", ["const:875c6c:8", "const:4:8"]]
+ 00875c6c ["CALL", null, ["callee:00c53da0:8"]]
- 00875c28 ["COPY", "register:0:8", ["register:4040:8"]]
- 00875c28 ["INT_ADD", "register:40f0:8", ["const:875c28:8", "const:4:8"]]
- 00875c28 ["CALLIND", null, ["register:0:8"]]
+ 00875c80 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00875c80 ["INT_ADD", "register:40f0:8", ["const:875c80:8", "const:4:8"]]
+ 00875c80 ["CALLIND", null, ["register:0:8"]]
- 00875c30 ["INT_ADD", "register:40f0:8", ["const:875c30:8", "const:4:8"]]
- 00875c30 ["CALL", null, ["callee:00c57f50:8"]]
+ 00875c88 ["INT_ADD", "register:40f0:8", ["const:875c88:8", "const:4:8"]]
+ 00875c88 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-6f63ca1fecb317b62ed47c80f9b6d4d9"></a>

### [`00875e1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/00875e1c.md) → [`00875e74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875e74.md) FUN_00875e74

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00875e38 ["INT_ADD", "register:40f0:8", ["const:875e38:8", "const:4:8"]]
- 00875e38 ["CALL", null, ["callee:00c53da0:8"]]
+ 00875e90 ["INT_ADD", "register:40f0:8", ["const:875e90:8", "const:4:8"]]
+ 00875e90 ["CALL", null, ["callee:00c53da0:8"]]
- 00875e58 ["COPY", "register:0:8", ["register:4040:8"]]
- 00875e58 ["INT_ADD", "register:40f0:8", ["const:875e58:8", "const:4:8"]]
- 00875e58 ["CALLIND", null, ["register:0:8"]]
+ 00875eb0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00875eb0 ["INT_ADD", "register:40f0:8", ["const:875eb0:8", "const:4:8"]]
+ 00875eb0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-eb37a19ab0f1bbf2a1423478d3e9f878"></a>

### [`00875fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/00875fb8.md) → [`00876010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876010.md) FUN_00876010

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00875c78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/00875c78.md) · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`00875cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875cd0.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00875fd4 ["INT_ADD", "register:40f0:8", ["const:875fd4:8", "const:4:8"]]
- 00875fd4 ["CALL", null, ["callee:00c53da0:8"]]
+ 0087602c ["INT_ADD", "register:40f0:8", ["const:87602c:8", "const:4:8"]]
+ 0087602c ["CALL", null, ["callee:00c53da0:8"]]
- 00875ff4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00875ff4 ["INT_ADD", "register:40f0:8", ["const:875ff4:8", "const:4:8"]]
- 00875ff4 ["CALLIND", null, ["register:0:8"]]
+ 0087604c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087604c ["INT_ADD", "register:40f0:8", ["const:87604c:8", "const:4:8"]]
+ 0087604c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-55c67c3ae6d419ca8dc32823164620d7"></a>

### [`00876008`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00876/00876008.md) → [`00876060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876060.md) FUN_00876060

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00875c78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00875/00875c78.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00875cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875cd0.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00876028 ["INT_ADD", "register:40f0:8", ["const:876028:8", "const:4:8"]]
- 00876028 ["CALL", null, ["callee:00c53da0:8"]]
+ 00876080 ["INT_ADD", "register:40f0:8", ["const:876080:8", "const:4:8"]]
+ 00876080 ["CALL", null, ["callee:00c53da0:8"]]
- 0087603c ["COPY", "register:0:8", ["register:4040:8"]]
- 0087603c ["INT_ADD", "register:40f0:8", ["const:87603c:8", "const:4:8"]]
- 0087603c ["CALLIND", null, ["register:0:8"]]
+ 00876094 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00876094 ["INT_ADD", "register:40f0:8", ["const:876094:8", "const:4:8"]]
+ 00876094 ["CALLIND", null, ["register:0:8"]]
- 00876044 ["INT_ADD", "register:40f0:8", ["const:876044:8", "const:4:8"]]
- 00876044 ["CALL", null, ["callee:00c57f50:8"]]
+ 0087609c ["INT_ADD", "register:40f0:8", ["const:87609c:8", "const:4:8"]]
+ 0087609c ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-807bd99a9ef370108afa37e7c21a01ef"></a>

### [`00876090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00876/00876090.md) → [`008760e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/008760e8.md) FUN_008760e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00873f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/00873f40.md) [`00876090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00876/00876090.md) · 呼出先 2件 [`00876090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00876/00876090.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`00873f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873f98.md) [`008760e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/008760e8.md) · 呼出先 2件 [`008760e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/008760e8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008760ac ["INT_ADD", "register:40f0:8", ["const:8760ac:8", "const:4:8"]]
- 008760ac ["CALL", null, ["local:b0:8"]]
+ 00876104 ["INT_ADD", "register:40f0:8", ["const:876104:8", "const:4:8"]]
+ 00876104 ["CALL", null, ["local:b0:8"]]
- 008760b8 ["INT_ADD", "register:40f0:8", ["const:8760b8:8", "const:4:8"]]
- 008760b8 ["CALL", null, ["local:b0:8"]]
+ 00876110 ["INT_ADD", "register:40f0:8", ["const:876110:8", "const:4:8"]]
+ 00876110 ["CALL", null, ["local:b0:8"]]
- 008760c8 ["INT_ADD", "register:40f0:8", ["const:8760c8:8", "const:4:8"]]
- 008760c8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00876120 ["INT_ADD", "register:40f0:8", ["const:876120:8", "const:4:8"]]
+ 00876120 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-31cbc84d0380624ceea38f09d9191b97"></a>

### [`008778c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00877/008778c0.md) → [`00877918`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00877/00877918.md) FUN_00877918

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00876f04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00876/00876f04.md) · 呼出先 5件 [`00877c20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00877/00877c20.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c58430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58430.md)
- 新版 呼出元 1件 [`00876f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876f5c.md) · 呼出先 5件 [`00877c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00877/00877c78.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c58500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58500.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008778dc ["INT_ADD", "register:40f0:8", ["const:8778dc:8", "const:4:8"]]
- 008778dc ["CALL", null, ["callee:00c58500:8"]]
+ 00877934 ["INT_ADD", "register:40f0:8", ["const:877934:8", "const:4:8"]]
+ 00877934 ["CALL", null, ["callee:00c58500:8"]]
- 008778e8 ["INT_ADD", "register:40f0:8", ["const:8778e8:8", "const:4:8"]]
- 008778e8 ["CALL", null, ["callee:00c58500:8"]]
+ 00877940 ["INT_ADD", "register:40f0:8", ["const:877940:8", "const:4:8"]]
+ 00877940 ["CALL", null, ["callee:00c58500:8"]]
- 00877904 ["INT_ADD", "register:40f0:8", ["const:877904:8", "const:4:8"]]
- 00877904 ["CALL", null, ["callee:00c53d70:8"]]
+ 0087795c ["INT_ADD", "register:40f0:8", ["const:87795c:8", "const:4:8"]]
+ 0087795c ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-38a8746977974b9ec831985d2303211a"></a>

### [`00877a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00877/00877a10.md) → [`00877a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00877/00877a68.md) FUN_00877a68

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00876f04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00876/00876f04.md) · 呼出先 6件 [`00446a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00446/00446a48.md) [`00c57e60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e60.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c580d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580d0.md) [`00c58170`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58170.md)
- 新版 呼出元 1件 [`00876f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876f5c.md) · 呼出先 6件 [`00446a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00446/00446a88.md) [`00c57f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f30.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c581a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581a0.md) [`00c58240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58240.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00877a2c ["INT_ADD", "register:40f0:8", ["const:877a2c:8", "const:4:8"]]
- 00877a2c ["CALL", null, ["callee:00446a88:8"]]
+ 00877a84 ["INT_ADD", "register:40f0:8", ["const:877a84:8", "const:4:8"]]
+ 00877a84 ["CALL", null, ["callee:00446a88:8"]]
- 00877a34 ["INT_ADD", "register:40f0:8", ["const:877a34:8", "const:4:8"]]
- 00877a34 ["CALL", null, ["callee:00c58240:8"]]
+ 00877a8c ["INT_ADD", "register:40f0:8", ["const:877a8c:8", "const:4:8"]]
+ 00877a8c ["CALL", null, ["callee:00c58240:8"]]
- 00877a3c ["INT_ADD", "register:40f0:8", ["const:877a3c:8", "const:4:8"]]
- 00877a3c ["CALL", null, ["callee:00c58250:8"]]
+ 00877a94 ["INT_ADD", "register:40f0:8", ["const:877a94:8", "const:4:8"]]
+ 00877a94 ["CALL", null, ["callee:00c58250:8"]]
~~~


<a id="compare-93dcd7bcf025f61aa7f1c983ce1189e2"></a>

### [`00877c20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00877/00877c20.md) → [`00877c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00877/00877c78.md) FUN_00877c78

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008778c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00877/008778c0.md) · 呼出先 5件 [`0048b544`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048b/0048b544.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00877918`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00877/00877918.md) · 呼出先 5件 [`0048b584`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048b/0048b584.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00877c64 ["INT_ADD", "register:40f0:8", ["const:877c64:8", "const:4:8"]]
- 00877c64 ["CALL", null, ["callee:00c57f80:8"]]
+ 00877cbc ["INT_ADD", "register:40f0:8", ["const:877cbc:8", "const:4:8"]]
+ 00877cbc ["CALL", null, ["callee:00c57f80:8"]]
- 00877cac ["INT_ADD", "register:40f0:8", ["const:877cac:8", "const:4:8"]]
- 00877cac ["CALL", null, ["callee:00c57f60:8"]]
+ 00877d04 ["INT_ADD", "register:40f0:8", ["const:877d04:8", "const:4:8"]]
+ 00877d04 ["CALL", null, ["callee:00c57f60:8"]]
- 00877cd4 ["INT_ADD", "register:40f0:8", ["const:877cd4:8", "const:4:8"]]
- 00877cd4 ["CALL", null, ["callee:00c580d0:8"]]
+ 00877d2c ["INT_ADD", "register:40f0:8", ["const:877d2c:8", "const:4:8"]]
+ 00877d2c ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-c872aaf64ffdf7f0b784b3f8453356c8"></a>

### [`00877d50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00877/00877d50.md) → [`00877da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00877/00877da8.md) FUN_00877da8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00877a70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00877/00877a70.md) · 呼出先 9件 [`00597a8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a8c.md) [`00597e48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597e48.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0085b430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b430.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00877ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00877/00877ac8.md) · 呼出先 9件 [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`00597e88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597e88.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0085b488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b488.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00877d78 ["INT_ADD", "register:40f0:8", ["const:877d78:8", "const:4:8"]]
- 00877d78 ["CALL", null, ["callee:00c58200:8"]]
+ 00877dd0 ["INT_ADD", "register:40f0:8", ["const:877dd0:8", "const:4:8"]]
+ 00877dd0 ["CALL", null, ["callee:00c58200:8"]]
- 00877d88 ["INT_ADD", "register:40f0:8", ["const:877d88:8", "const:4:8"]]
- 00877d88 ["CALL", null, ["callee:00c58210:8"]]
+ 00877de0 ["INT_ADD", "register:40f0:8", ["const:877de0:8", "const:4:8"]]
+ 00877de0 ["CALL", null, ["callee:00c58210:8"]]
- 00877d94 ["INT_ADD", "register:40f0:8", ["const:877d94:8", "const:4:8"]]
- 00877d94 ["CALL", null, ["callee:00597e88:8"]]
+ 00877dec ["INT_ADD", "register:40f0:8", ["const:877dec:8", "const:4:8"]]
+ 00877dec ["CALL", null, ["callee:00597e88:8"]]
~~~


<a id="compare-8b3277c5aabb5ae04858c91ff08fc67d"></a>

### [`00877e48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00877/00877e48.md) → [`00877ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00877/00877ea0.md) FUN_00877ea0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58150.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58220.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00877e70 ["INT_ADD", "register:40f0:8", ["const:877e70:8", "const:4:8"]]
- 00877e70 ["CALL", null, ["callee:00c58220:8"]]
+ 00877ec8 ["INT_ADD", "register:40f0:8", ["const:877ec8:8", "const:4:8"]]
+ 00877ec8 ["CALL", null, ["callee:00c58220:8"]]
- 00877e78 ["INT_ADD", "register:40f0:8", ["const:877e78:8", "const:4:8"]]
- 00877e78 ["CALL", null, ["callee:00c57f80:8"]]
+ 00877ed0 ["INT_ADD", "register:40f0:8", ["const:877ed0:8", "const:4:8"]]
+ 00877ed0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-ec005178cd105e53ad55f5003015d9b9"></a>

### [`0087822c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00878/0087822c.md) → [`00878284`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/00878284.md) FUN_00878284

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`008486d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/008486d8.md) [`00851504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851504.md) [`008548ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00854/008548ec.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5a940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a940.md)
- 新版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00848730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/00848730.md) [`0085155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/0085155c.md) [`00854944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00854/00854944.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5aa10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aa10.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087823c ["INT_ADD", "register:40f0:8", ["const:87823c:8", "const:4:8"]]
- 0087823c ["CALL", null, ["callee:00c5aa10:8"]]
+ 00878294 ["INT_ADD", "register:40f0:8", ["const:878294:8", "const:4:8"]]
+ 00878294 ["CALL", null, ["callee:00c5aa10:8"]]
- 0087824c ["INT_ADD", "register:40f0:8", ["const:87824c:8", "const:4:8"]]
- 0087824c ["CALL", null, ["callee:00c57f80:8"]]
+ 008782a4 ["INT_ADD", "register:40f0:8", ["const:8782a4:8", "const:4:8"]]
+ 008782a4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-31d28c024cc0082ef466cf92ffaac2c1"></a>

### [`008782b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00878/008782b8.md) → [`00878310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/00878310.md) FUN_00878310

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`007681b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00768/007681b4.md) [`00851504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851504.md) [`0087f368`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087f/0087f368.md) [`00881d7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00881/00881d7c.md) · 呼出先 8件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00b3c6c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3c/00b3c6c4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 4件 [`0076820c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/0076820c.md) [`0085155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/0085155c.md) [`0087f3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f3c0.md) [`00881dd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00881/00881dd4.md) · 呼出先 8件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00b3c760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3c760.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008782e8 ["INT_ADD", "register:40f0:8", ["const:8782e8:8", "const:4:8"]]
- 008782e8 ["CALL", null, ["callee:00c580b0:8"]]
+ 00878340 ["INT_ADD", "register:40f0:8", ["const:878340:8", "const:4:8"]]
+ 00878340 ["CALL", null, ["callee:00c580b0:8"]]
- 00878334 ["INT_ADD", "register:40f0:8", ["const:878334:8", "const:4:8"]]
- 00878334 ["CALL", null, ["callee:00c57f60:8"]]
+ 0087838c ["INT_ADD", "register:40f0:8", ["const:87838c:8", "const:4:8"]]
+ 0087838c ["CALL", null, ["callee:00c57f60:8"]]
- 00878354 ["INT_ADD", "register:40f0:8", ["const:878354:8", "const:4:8"]]
- 00878354 ["CALL", null, ["callee:00c580d0:8"]]
+ 008783ac ["INT_ADD", "register:40f0:8", ["const:8783ac:8", "const:4:8"]]
+ 008783ac ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-abdf09443baf1c10e34033aa6f6bc535"></a>

### [`00879bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/00879bb8.md) → [`00879c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/00879c10.md) FUN_00879c10

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`005b1338`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b1/005b1338.md) · 呼出先 7件 [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md) [`00589850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589850.md) [`00879c88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/00879c88.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`005b1378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1378.md) · 呼出先 7件 [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589890.md) [`00879ce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/00879ce0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00879c00 ["INT_ADD", "register:40f0:8", ["const:879c00:8", "const:4:8"]]
- 00879c00 ["CALL", null, ["callee:00588eac:8"]]
+ 00879c58 ["INT_ADD", "register:40f0:8", ["const:879c58:8", "const:4:8"]]
+ 00879c58 ["CALL", null, ["callee:00588eac:8"]]
- 00879c08 ["INT_ADD", "register:40f0:8", ["const:879c08:8", "const:4:8"]]
- 00879c08 ["CALL", null, ["callee:0058919c:8"]]
+ 00879c60 ["INT_ADD", "register:40f0:8", ["const:879c60:8", "const:4:8"]]
+ 00879c60 ["CALL", null, ["callee:0058919c:8"]]
- 00879c0c ["INT_ADD", "register:40f0:8", ["const:879c0c:8", "const:4:8"]]
- 00879c0c ["CALL", null, ["callee:00589890:8"]]
+ 00879c64 ["INT_ADD", "register:40f0:8", ["const:879c64:8", "const:4:8"]]
+ 00879c64 ["CALL", null, ["callee:00589890:8"]]
~~~


<a id="compare-d09bfd51161e78508984ffa22145a51a"></a>

### [`00879c88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/00879c88.md) → [`00879ce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/00879ce0.md) FUN_00879ce0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 7件 [`00879bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/00879bb8.md) [`0087e5d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087e5d4.md) [`00b66bf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b66bf8.md) [`00b66cac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b66cac.md) [`00b66da4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b66da4.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 7件 [`00879c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/00879c10.md) [`0087e62c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087e62c.md) [`00b66c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66c94.md) [`00b66d48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66d48.md) [`00b66e40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66e40.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00879cf0 ["INT_ADD", "register:40f0:8", ["const:879cf0:8", "const:4:8"]]
- 00879cf0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00879d48 ["INT_ADD", "register:40f0:8", ["const:879d48:8", "const:4:8"]]
+ 00879d48 ["CALL", null, ["callee:00c57f80:8"]]
- 00879d00 ["INT_ADD", "register:40f0:8", ["const:879d00:8", "const:4:8"]]
- 00879d00 ["CALL", null, ["callee:00c57f80:8"]]
+ 00879d58 ["INT_ADD", "register:40f0:8", ["const:879d58:8", "const:4:8"]]
+ 00879d58 ["CALL", null, ["callee:00c57f80:8"]]
- 00879d10 ["INT_ADD", "register:40f0:8", ["const:879d10:8", "const:4:8"]]
- 00879d10 ["CALL", null, ["callee:00c57f80:8"]]
+ 00879d68 ["INT_ADD", "register:40f0:8", ["const:879d68:8", "const:4:8"]]
+ 00879d68 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-f8be59e6f03e867f8c3d45e5b208d900"></a>

### [`0087a550`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087a/0087a550.md) → [`0087a5a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087a5a8.md) FUN_0087a5a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087a58c ["COPY", "register:0:8", ["register:4040:8"]]
- 0087a58c ["INT_ADD", "register:40f0:8", ["const:87a58c:8", "const:4:8"]]
- 0087a58c ["CALLIND", null, ["register:0:8"]]
+ 0087a5e4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087a5e4 ["INT_ADD", "register:40f0:8", ["const:87a5e4:8", "const:4:8"]]
+ 0087a5e4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5c7f637861bd9b5de8b6b1ed5dfb6915"></a>

### [`0087b3bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087b3bc.md) → [`0087b414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b414.md) FUN_0087b414

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 8件 [`00879d88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/00879d88.md) [`0087a748`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087a/0087a748.md) [`0087ac58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087a/0087ac58.md) [`00b34410`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b34/00b34410.md) [`00b34ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b34/00b34ea4.md) · 呼出先 4件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md) [`00c5aaa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aaa0.md)
- 新版 呼出元 8件 [`00879de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/00879de0.md) [`0087a7a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087a7a0.md) [`0087acb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087acb0.md) [`00b344ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b344ac.md) [`00b34f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b34f40.md) · 呼出先 4件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087b3cc ["INT_ADD", "register:40f0:8", ["const:87b3cc:8", "const:4:8"]]
- 0087b3cc ["CALL", null, ["callee:00c5aad0:8"]]
+ 0087b424 ["INT_ADD", "register:40f0:8", ["const:87b424:8", "const:4:8"]]
+ 0087b424 ["CALL", null, ["callee:00c5aad0:8"]]
- 0087b3e4 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087b3e4 ["INT_ADD", "register:40f0:8", ["const:87b3e4:8", "const:4:8"]]
- 0087b3e4 ["CALLIND", null, ["register:0:8"]]
+ 0087b43c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087b43c ["INT_ADD", "register:40f0:8", ["const:87b43c:8", "const:4:8"]]
+ 0087b43c ["CALLIND", null, ["register:0:8"]]
- 0087b3f8 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087b3f8 ["INT_ADD", "register:40f0:8", ["const:87b3f8:8", "const:4:8"]]
- 0087b3f8 ["CALLIND", null, ["register:0:8"]]
+ 0087b450 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087b450 ["INT_ADD", "register:40f0:8", ["const:87b450:8", "const:4:8"]]
+ 0087b450 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-11dd35d5481a0ffe73bdcca2078fbe3d"></a>

### [`0087b448`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087b448.md) → [`0087b4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b4a0.md) FUN_0087b4a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0087a308`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087a/0087a308.md) [`0087aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087a/0087aa10.md) [`0087b0f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087b0f0.md) · 呼出先 3件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 3件 [`0087a360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087a360.md) [`0087aa68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087aa68.md) [`0087b148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b148.md) · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087b470 ["INT_ADD", "register:40f0:8", ["const:87b470:8", "const:4:8"]]
- 0087b470 ["CALL", null, ["callee:00c5aad0:8"]]
+ 0087b4c8 ["INT_ADD", "register:40f0:8", ["const:87b4c8:8", "const:4:8"]]
+ 0087b4c8 ["CALL", null, ["callee:00c5aad0:8"]]
- 0087b494 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087b494 ["INT_ADD", "register:40f0:8", ["const:87b494:8", "const:4:8"]]
- 0087b494 ["CALLIND", null, ["register:0:8"]]
+ 0087b4ec ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087b4ec ["INT_ADD", "register:40f0:8", ["const:87b4ec:8", "const:4:8"]]
+ 0087b4ec ["CALLIND", null, ["register:0:8"]]
- 0087b4b8 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087b4b8 ["INT_ADD", "register:40f0:8", ["const:87b4b8:8", "const:4:8"]]
- 0087b4b8 ["CALLIND", null, ["register:0:8"]]
+ 0087b510 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087b510 ["INT_ADD", "register:40f0:8", ["const:87b510:8", "const:4:8"]]
+ 0087b510 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-011fc2506783a05d14e308aca4ee7cdb"></a>

### [`0087b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087b778.md) → [`0087b7d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b7d0.md) FUN_0087b7d0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0087a308`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087a/0087a308.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0087a360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087a360.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087b7b4 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087b7b4 ["INT_ADD", "register:40f0:8", ["const:87b7b4:8", "const:4:8"]]
- 0087b7b4 ["CALLIND", null, ["register:0:8"]]
+ 0087b80c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087b80c ["INT_ADD", "register:40f0:8", ["const:87b80c:8", "const:4:8"]]
+ 0087b80c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d5bc5f90b8233db4e414aa7ee43732e4"></a>

### [`0087b7c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087b7c8.md) → [`0087b820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b820.md) FUN_0087b820

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087b7e4 ["INT_ADD", "register:40f0:8", ["const:87b7e4:8", "const:4:8"]]
- 0087b7e4 ["CALL", null, ["callee:00459db4:8"]]
+ 0087b83c ["INT_ADD", "register:40f0:8", ["const:87b83c:8", "const:4:8"]]
+ 0087b83c ["CALL", null, ["callee:00459db4:8"]]
~~~


<a id="compare-76cebc4b3ecf6fa1d668868df365fa34"></a>

### [`0087bb40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087bb40.md) → [`0087bb98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087bb98.md) FUN_0087bb98

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087bb80 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087bb80 ["INT_ADD", "register:40f0:8", ["const:87bb80:8", "const:4:8"]]
- 0087bb80 ["CALLIND", null, ["register:0:8"]]
+ 0087bbd8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087bbd8 ["INT_ADD", "register:40f0:8", ["const:87bbd8:8", "const:4:8"]]
+ 0087bbd8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6d98dc47a88032c2150d33b5615ae1a7"></a>

### [`0087bbc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087bbc4.md) → [`0087bc1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087bc1c.md) FUN_0087bc1c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00879d88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/00879d88.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00879de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/00879de0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087bc04 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087bc04 ["INT_ADD", "register:40f0:8", ["const:87bc04:8", "const:4:8"]]
- 0087bc04 ["CALLIND", null, ["register:0:8"]]
+ 0087bc5c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087bc5c ["INT_ADD", "register:40f0:8", ["const:87bc5c:8", "const:4:8"]]
+ 0087bc5c ["CALLIND", null, ["register:0:8"]]
- 0087bc30 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087bc30 ["INT_ADD", "register:40f0:8", ["const:87bc30:8", "const:4:8"]]
- 0087bc30 ["CALLIND", null, ["register:0:8"]]
+ 0087bc88 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087bc88 ["INT_ADD", "register:40f0:8", ["const:87bc88:8", "const:4:8"]]
+ 0087bc88 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7b5b7ee28796fd6239b01a78f614c083"></a>

### [`0087bf28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087bf28.md) → [`0087bf80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087bf80.md) FUN_0087bf80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087bf68 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087bf68 ["INT_ADD", "register:40f0:8", ["const:87bf68:8", "const:4:8"]]
- 0087bf68 ["CALLIND", null, ["register:0:8"]]
+ 0087bfc0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087bfc0 ["INT_ADD", "register:40f0:8", ["const:87bfc0:8", "const:4:8"]]
+ 0087bfc0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b4cce51d180086eccbb072c25e3c6057"></a>

### [`0087c178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087c/0087c178.md) → [`0087c1d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c1d0.md) FUN_0087c1d0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0087aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087a/0087aa10.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0087aa68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087aa68.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087c1b4 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087c1b4 ["INT_ADD", "register:40f0:8", ["const:87c1b4:8", "const:4:8"]]
- 0087c1b4 ["CALLIND", null, ["register:0:8"]]
+ 0087c20c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087c20c ["INT_ADD", "register:40f0:8", ["const:87c20c:8", "const:4:8"]]
+ 0087c20c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-939131df6e05d94ff572007feb94354f"></a>

### [`0087c1c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087c/0087c1c8.md) → [`0087c220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c220.md) FUN_0087c220

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087c1e4 ["INT_ADD", "register:40f0:8", ["const:87c1e4:8", "const:4:8"]]
- 0087c1e4 ["CALL", null, ["callee:00459db4:8"]]
+ 0087c23c ["INT_ADD", "register:40f0:8", ["const:87c23c:8", "const:4:8"]]
+ 0087c23c ["CALL", null, ["callee:00459db4:8"]]
~~~


<a id="compare-ba8f734b21f20d4c24f9aa447a8d295f"></a>

### [`0087c3e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087c/0087c3e4.md) → [`0087c43c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c43c.md) FUN_0087c43c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0087a748`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087a/0087a748.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0087a7a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087a7a0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087c420 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087c420 ["INT_ADD", "register:40f0:8", ["const:87c420:8", "const:4:8"]]
- 0087c420 ["CALLIND", null, ["register:0:8"]]
+ 0087c478 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087c478 ["INT_ADD", "register:40f0:8", ["const:87c478:8", "const:4:8"]]
+ 0087c478 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ebc148ab15d18a5066c4cbe3beca343b"></a>

### [`0087c434`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087c/0087c434.md) → [`0087c48c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c48c.md) FUN_0087c48c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087c464 ["INT_ADD", "register:40f0:8", ["const:87c464:8", "const:4:8"]]
- 0087c464 ["CALL", null, ["callee:00c5aad0:8"]]
+ 0087c4bc ["INT_ADD", "register:40f0:8", ["const:87c4bc:8", "const:4:8"]]
+ 0087c4bc ["CALL", null, ["callee:00c5aad0:8"]]
- 0087c47c ["COPY", "register:0:8", ["register:4040:8"]]
- 0087c47c ["INT_ADD", "register:40f0:8", ["const:87c47c:8", "const:4:8"]]
- 0087c47c ["CALLIND", null, ["register:0:8"]]
+ 0087c4d4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087c4d4 ["INT_ADD", "register:40f0:8", ["const:87c4d4:8", "const:4:8"]]
+ 0087c4d4 ["CALLIND", null, ["register:0:8"]]
- 0087c490 ["INT_ADD", "register:40f0:8", ["const:87c490:8", "const:4:8"]]
- 0087c490 ["CALL", null, ["callee:00c5aae0:8"]]
+ 0087c4e8 ["INT_ADD", "register:40f0:8", ["const:87c4e8:8", "const:4:8"]]
+ 0087c4e8 ["CALL", null, ["callee:00c5aae0:8"]]
~~~


<a id="compare-1053213c0b1616120b3e34f6c95f51a8"></a>

### [`0087c7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087c/0087c7e0.md) → [`0087c838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c838.md) FUN_0087c838

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0087b0f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087b/0087b0f0.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0087b148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b148.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087c81c ["COPY", "register:0:8", ["register:4040:8"]]
- 0087c81c ["INT_ADD", "register:40f0:8", ["const:87c81c:8", "const:4:8"]]
- 0087c81c ["CALLIND", null, ["register:0:8"]]
+ 0087c874 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087c874 ["INT_ADD", "register:40f0:8", ["const:87c874:8", "const:4:8"]]
+ 0087c874 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-271187723196c92b5583d069fdaaeca3"></a>

### [`0087c830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087c/0087c830.md) → [`0087c888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087c888.md) FUN_0087c888

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087c84c ["INT_ADD", "register:40f0:8", ["const:87c84c:8", "const:4:8"]]
- 0087c84c ["CALL", null, ["callee:00459db4:8"]]
+ 0087c8a4 ["INT_ADD", "register:40f0:8", ["const:87c8a4:8", "const:4:8"]]
+ 0087c8a4 ["CALL", null, ["callee:00459db4:8"]]
~~~


<a id="compare-75701d5a37b57648c51cbbebc24a3bd8"></a>

### [`0087cc2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087c/0087cc2c.md) → [`0087cc84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087c/0087cc84.md) FUN_0087cc84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0087ac58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087a/0087ac58.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0087acb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087acb0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087cc6c ["COPY", "register:0:8", ["register:4040:8"]]
- 0087cc6c ["INT_ADD", "register:40f0:8", ["const:87cc6c:8", "const:4:8"]]
- 0087cc6c ["CALLIND", null, ["register:0:8"]]
+ 0087ccc4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087ccc4 ["INT_ADD", "register:40f0:8", ["const:87ccc4:8", "const:4:8"]]
+ 0087ccc4 ["CALLIND", null, ["register:0:8"]]
- 0087cc98 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087cc98 ["INT_ADD", "register:40f0:8", ["const:87cc98:8", "const:4:8"]]
- 0087cc98 ["CALLIND", null, ["register:0:8"]]
+ 0087ccf0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087ccf0 ["INT_ADD", "register:40f0:8", ["const:87ccf0:8", "const:4:8"]]
+ 0087ccf0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-3a7bed810406f3ed830272e6246960be"></a>

### [`0087d27c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087d/0087d27c.md) → [`0087d2d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087d2d4.md) FUN_0087d2d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5aac0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aac0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ab90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087d28c ["INT_ADD", "register:40f0:8", ["const:87d28c:8", "const:4:8"]]
- 0087d28c ["CALL", null, ["callee:00c5ab90:8"]]
+ 0087d2e4 ["INT_ADD", "register:40f0:8", ["const:87d2e4:8", "const:4:8"]]
+ 0087d2e4 ["CALL", null, ["callee:00c5ab90:8"]]
~~~


<a id="compare-e407745158a7396becf399c6a8551c98"></a>

### [`0087d2a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087d/0087d2a0.md) → [`0087d2f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087d2f8.md) FUN_0087d2f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00493dc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00493/00493dc8.md) [`00575d14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00575/00575d14.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00493e08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493e08.md) [`00575d54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00575/00575d54.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087d2f8 ["INT_ADD", "register:40f0:8", ["const:87d2f8:8", "const:4:8"]]
- 0087d2f8 ["CALL", null, ["callee:00493e08:8"]]
+ 0087d350 ["INT_ADD", "register:40f0:8", ["const:87d350:8", "const:4:8"]]
+ 0087d350 ["CALL", null, ["callee:00493e08:8"]]
- 0087d30c ["INT_ADD", "register:40f0:8", ["const:87d30c:8", "const:4:8"]]
- 0087d30c ["CALL", null, ["callee:00c57f80:8"]]
+ 0087d364 ["INT_ADD", "register:40f0:8", ["const:87d364:8", "const:4:8"]]
+ 0087d364 ["CALL", null, ["callee:00c57f80:8"]]
- 0087d328 ["INT_ADD", "register:40f0:8", ["const:87d328:8", "const:4:8"]]
- 0087d328 ["CALL", null, ["callee:00575d54:8"]]
+ 0087d380 ["INT_ADD", "register:40f0:8", ["const:87d380:8", "const:4:8"]]
+ 0087d380 ["CALL", null, ["callee:00575d54:8"]]
~~~


<a id="compare-b82c1de75d1bc482bee15956f4f04644"></a>

### [`0087d380`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087d/0087d380.md) → [`0087d3d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087d3d8.md) FUN_0087d3d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00575ca4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00575/00575ca4.md) [`0058adc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0058a/0058adc8.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00575ce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00575/00575ce4.md) [`0058ae08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058a/0058ae08.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087d3ac ["INT_ADD", "register:40f0:8", ["const:87d3ac:8", "const:4:8"]]
- 0087d3ac ["CALL", null, ["callee:00c580b0:8"]]
+ 0087d404 ["INT_ADD", "register:40f0:8", ["const:87d404:8", "const:4:8"]]
+ 0087d404 ["CALL", null, ["callee:00c580b0:8"]]
- 0087d3f8 ["INT_ADD", "register:40f0:8", ["const:87d3f8:8", "const:4:8"]]
- 0087d3f8 ["CALL", null, ["callee:00c57f60:8"]]
+ 0087d450 ["INT_ADD", "register:40f0:8", ["const:87d450:8", "const:4:8"]]
+ 0087d450 ["CALL", null, ["callee:00c57f60:8"]]
- 0087d418 ["INT_ADD", "register:40f0:8", ["const:87d418:8", "const:4:8"]]
- 0087d418 ["CALL", null, ["callee:00c580d0:8"]]
+ 0087d470 ["INT_ADD", "register:40f0:8", ["const:87d470:8", "const:4:8"]]
+ 0087d470 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-471250f3330bccb19c2be89abc41c860"></a>

### [`0087d8f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087d/0087d8f0.md) → [`0087d948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087d948.md) FUN_0087d948

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0087eac0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087eac0.md) · 呼出先 5件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58230`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58230.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5aaf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aaf0.md) [`00c5ab00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ab00.md)
- 新版 呼出元 1件 [`0087eb18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eb18.md) · 呼出先 5件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58300.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5abc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5abc0.md) [`00c5abd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5abd0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087d928 ["INT_ADD", "register:40f0:8", ["const:87d928:8", "const:4:8"]]
- 0087d928 ["CALL", null, ["callee:00c5abc0:8"]]
+ 0087d980 ["INT_ADD", "register:40f0:8", ["const:87d980:8", "const:4:8"]]
+ 0087d980 ["CALL", null, ["callee:00c5abc0:8"]]
- 0087d934 ["INT_ADD", "register:40f0:8", ["const:87d934:8", "const:4:8"]]
- 0087d934 ["CALL", null, ["callee:00c5abd0:8"]]
+ 0087d98c ["INT_ADD", "register:40f0:8", ["const:87d98c:8", "const:4:8"]]
+ 0087d98c ["CALL", null, ["callee:00c5abd0:8"]]
- 0087d944 ["INT_ADD", "register:40f0:8", ["const:87d944:8", "const:4:8"]]
- 0087d944 ["CALL", null, ["callee:00c5a900:8"]]
+ 0087d99c ["INT_ADD", "register:40f0:8", ["const:87d99c:8", "const:4:8"]]
+ 0087d99c ["CALL", null, ["callee:00c5a900:8"]]
~~~


<a id="compare-e8c2f7664af36f7962387c417068126f"></a>

### [`0087d9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087d/0087d9c4.md) → [`0087da1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087da1c.md) FUN_0087da1c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0087eb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087eb20.md) · 呼出先 15件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00596d10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00596/00596d10.md) [`00597608`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597608.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`0087eb78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eb78.md) · 呼出先 15件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00596d50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596d50.md) [`00597648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597648.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087da04 ["INT_ADD", "register:40f0:8", ["const:87da04:8", "const:4:8"]]
- 0087da04 ["CALL", null, ["callee:00c5abe0:8"]]
+ 0087da5c ["INT_ADD", "register:40f0:8", ["const:87da5c:8", "const:4:8"]]
+ 0087da5c ["CALL", null, ["callee:00c5abe0:8"]]
- 0087da10 ["INT_ADD", "register:40f0:8", ["const:87da10:8", "const:4:8"]]
- 0087da10 ["CALL", null, ["callee:00c5abf0:8"]]
+ 0087da68 ["INT_ADD", "register:40f0:8", ["const:87da68:8", "const:4:8"]]
+ 0087da68 ["CALL", null, ["callee:00c5abf0:8"]]
- 0087da48 ["INT_ADD", "register:40f0:8", ["const:87da48:8", "const:4:8"]]
- 0087da48 ["CALL", null, ["callee:00c58500:8"]]
+ 0087daa0 ["INT_ADD", "register:40f0:8", ["const:87daa0:8", "const:4:8"]]
+ 0087daa0 ["CALL", null, ["callee:00c58500:8"]]
~~~


<a id="compare-4c6e6b17d40adb82d146115a6b21ee41"></a>

### [`0087e5d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087e5d4.md) → [`0087e62c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087e62c.md) FUN_0087e62c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00851504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851504.md) · 呼出先 7件 [`00588e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00588/00588e6c.md) [`0058915c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/0058915c.md) [`00589850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/00589850.md) [`00879c88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/00879c88.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`0085155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/0085155c.md) · 呼出先 7件 [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589890.md) [`00879ce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/00879ce0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087e634 ["INT_ADD", "register:40f0:8", ["const:87e634:8", "const:4:8"]]
- 0087e634 ["CALL", null, ["callee:00588eac:8"]]
+ 0087e68c ["INT_ADD", "register:40f0:8", ["const:87e68c:8", "const:4:8"]]
+ 0087e68c ["CALL", null, ["callee:00588eac:8"]]
- 0087e63c ["INT_ADD", "register:40f0:8", ["const:87e63c:8", "const:4:8"]]
- 0087e63c ["CALL", null, ["callee:0058919c:8"]]
+ 0087e694 ["INT_ADD", "register:40f0:8", ["const:87e694:8", "const:4:8"]]
+ 0087e694 ["CALL", null, ["callee:0058919c:8"]]
- 0087e640 ["INT_ADD", "register:40f0:8", ["const:87e640:8", "const:4:8"]]
- 0087e640 ["CALL", null, ["callee:00589890:8"]]
+ 0087e698 ["INT_ADD", "register:40f0:8", ["const:87e698:8", "const:4:8"]]
+ 0087e698 ["CALL", null, ["callee:00589890:8"]]
~~~


<a id="compare-16e812d59a9f7da701b12348b38daa77"></a>

### [`0087e6dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087e6dc.md) → [`0087e734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087e734.md) FUN_0087e734

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00851504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851504.md) · 呼出先 1件 [`0087ebbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087ebbc.md)
- 新版 呼出元 1件 [`0085155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/0085155c.md) · 呼出先 1件 [`0087ec14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087ec14.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087e6f4 ["INT_ADD", "register:40f0:8", ["const:87e6f4:8", "const:4:8"]]
- 0087e6f4 ["CALL", null, ["callee:0087ec14:8"]]
+ 0087e74c ["INT_ADD", "register:40f0:8", ["const:87e74c:8", "const:4:8"]]
+ 0087e74c ["CALL", null, ["callee:0087ec14:8"]]
~~~


<a id="compare-d9e8989cd38b85cd4df3b94c8c7c4538"></a>

### [`0087eac0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087eac0.md) → [`0087eb18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eb18.md) FUN_0087eb18

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 8件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`006103bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00610/006103bc.md) [`0075eb80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075e/0075eb80.md) [`00763d58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00763/00763d58.md) [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) · 呼出先 2件 [`0087d8f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087d/0087d8f0.md) [`0087ec48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087ec48.md)
- 新版 呼出元 8件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`006103fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00610/006103fc.md) [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) [`00763db0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00763/00763db0.md) [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 2件 [`0087d948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087d948.md) [`0087eca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eca0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087eae0 ["INT_ADD", "register:40f0:8", ["const:87eae0:8", "const:4:8"]]
- 0087eae0 ["CALL", null, ["callee:0087eca0:8"]]
+ 0087eb38 ["INT_ADD", "register:40f0:8", ["const:87eb38:8", "const:4:8"]]
+ 0087eb38 ["CALL", null, ["callee:0087eca0:8"]]
- 0087eaf4 ["INT_ADD", "register:40f0:8", ["const:87eaf4:8", "const:4:8"]]
- 0087eaf4 ["CALL", null, ["callee:0087d948:8"]]
+ 0087eb4c ["INT_ADD", "register:40f0:8", ["const:87eb4c:8", "const:4:8"]]
+ 0087eb4c ["CALL", null, ["callee:0087d948:8"]]
~~~


<a id="compare-65858f4dbfe0a82f31195c1bf9acc341"></a>

### [`0087eb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087eb20.md) → [`0087eb78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eb78.md) FUN_0087eb78

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009cc648`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009cc/009cc648.md) · 呼出先 2件 [`0087d9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087d/0087d9c4.md) [`0087ec48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087ec48.md)
- 新版 呼出元 1件 [`009cc69c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009cc69c.md) · 呼出先 2件 [`0087da1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087d/0087da1c.md) [`0087eca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eca0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087eb38 ["INT_ADD", "register:40f0:8", ["const:87eb38:8", "const:4:8"]]
- 0087eb38 ["CALL", null, ["callee:0087eca0:8"]]
+ 0087eb90 ["INT_ADD", "register:40f0:8", ["const:87eb90:8", "const:4:8"]]
+ 0087eb90 ["CALL", null, ["callee:0087eca0:8"]]
~~~


<a id="compare-1cd0ba73a09a653d76f9afdc8d16cd79"></a>

### [`0087eb6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087eb6c.md) → [`0087ebc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087ebc4.md) FUN_0087ebc4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087eb88 ["INT_ADD", "register:40f0:8", ["const:87eb88:8", "const:4:8"]]
- 0087eb88 ["CALL", null, ["callee:00c53da0:8"]]
+ 0087ebe0 ["INT_ADD", "register:40f0:8", ["const:87ebe0:8", "const:4:8"]]
+ 0087ebe0 ["CALL", null, ["callee:00c53da0:8"]]
- 0087eba8 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087eba8 ["INT_ADD", "register:40f0:8", ["const:87eba8:8", "const:4:8"]]
- 0087eba8 ["CALLIND", null, ["register:0:8"]]
+ 0087ec00 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087ec00 ["INT_ADD", "register:40f0:8", ["const:87ec00:8", "const:4:8"]]
+ 0087ec00 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-0958d85b37eb331cd91947c1912900b0"></a>

### [`0087ebbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087ebbc.md) → [`0087ec14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087ec14.md) FUN_0087ec14

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0087e6d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087e6d0.md) [`0087e6dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087e6dc.md) [`0087ebbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087ebbc.md) · 呼出先 4件 [`0087ebbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087ebbc.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`0087e728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087e728.md) [`0087e734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087e734.md) [`0087ec14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087ec14.md) · 呼出先 4件 [`0087ec14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087ec14.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087ebd8 ["INT_ADD", "register:40f0:8", ["const:87ebd8:8", "const:4:8"]]
- 0087ebd8 ["CALL", null, ["local:b0:8"]]
+ 0087ec30 ["INT_ADD", "register:40f0:8", ["const:87ec30:8", "const:4:8"]]
+ 0087ec30 ["CALL", null, ["local:b0:8"]]
- 0087ebe4 ["INT_ADD", "register:40f0:8", ["const:87ebe4:8", "const:4:8"]]
- 0087ebe4 ["CALL", null, ["local:b0:8"]]
+ 0087ec3c ["INT_ADD", "register:40f0:8", ["const:87ec3c:8", "const:4:8"]]
+ 0087ec3c ["CALL", null, ["local:b0:8"]]
- 0087ebf8 ["INT_ADD", "register:40f0:8", ["const:87ebf8:8", "const:4:8"]]
- 0087ebf8 ["CALL", null, ["callee:00c53da0:8"]]
+ 0087ec50 ["INT_ADD", "register:40f0:8", ["const:87ec50:8", "const:4:8"]]
+ 0087ec50 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-ed0ba0ba18f2a718c65a35a54aab8333"></a>

### [`0087ec48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087ec48.md) → [`0087eca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eca0.md) FUN_0087eca0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0087eac0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087eac0.md) [`0087eb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087eb20.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 2件 [`0087eb18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eb18.md) [`0087eb78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eb78.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087ecb4 ["INT_ADD", "register:40f0:8", ["const:87ecb4:8", "const:4:8"]]
- 0087ecb4 ["CALL", null, ["callee:00c58120:8"]]
+ 0087ed0c ["INT_ADD", "register:40f0:8", ["const:87ed0c:8", "const:4:8"]]
+ 0087ed0c ["CALL", null, ["callee:00c58120:8"]]
- 0087ed10 ["INT_ADD", "register:40f0:8", ["const:87ed10:8", "const:4:8"]]
- 0087ed10 ["CALL", null, ["callee:00c58120:8"]]
+ 0087ed68 ["INT_ADD", "register:40f0:8", ["const:87ed68:8", "const:4:8"]]
+ 0087ed68 ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-d6dbb1729eb99a0524974047354f0f69"></a>

### [`0087ed4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087ed4c.md) → [`0087eda4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eda4.md) FUN_0087eda4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0087e710`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087e710.md) · 呼出先 5件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0087ee78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087ee78.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`0087e768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087e768.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0087eed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eed0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087ed80 ["INT_ADD", "register:40f0:8", ["const:87ed80:8", "const:4:8"]]
- 0087ed80 ["CALL", null, ["callee:0087eed0:8"]]
+ 0087edd8 ["INT_ADD", "register:40f0:8", ["const:87edd8:8", "const:4:8"]]
+ 0087edd8 ["CALL", null, ["callee:0087eed0:8"]]
- 0087eda0 ["INT_ADD", "register:40f0:8", ["const:87eda0:8", "const:4:8"]]
- 0087eda0 ["CALL", null, ["callee:00c57f60:8"]]
+ 0087edf8 ["INT_ADD", "register:40f0:8", ["const:87edf8:8", "const:4:8"]]
+ 0087edf8 ["CALL", null, ["callee:00c57f60:8"]]
- 0087eddc ["INT_ADD", "register:40f0:8", ["const:87eddc:8", "const:4:8"]]
- 0087eddc ["CALL", null, ["callee:0043bb60:8"]]
+ 0087ee34 ["INT_ADD", "register:40f0:8", ["const:87ee34:8", "const:4:8"]]
+ 0087ee34 ["CALL", null, ["callee:0043bb60:8"]]
~~~


<a id="compare-074668bbfaeb58ae3f0048ebe996d313"></a>

### [`0087ee78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087ee78.md) → [`0087eed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eed0.md) FUN_0087eed0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0087ed4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087ed4c.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`0087eda4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eda4.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087eefc ["INT_ADD", "register:40f0:8", ["const:87eefc:8", "const:4:8"]]
- 0087eefc ["CALL", null, ["callee:00c58120:8"]]
+ 0087ef54 ["INT_ADD", "register:40f0:8", ["const:87ef54:8", "const:4:8"]]
+ 0087ef54 ["CALL", null, ["callee:00c58120:8"]]
- 0087ef28 ["INT_ADD", "register:40f0:8", ["const:87ef28:8", "const:4:8"]]
- 0087ef28 ["CALL", null, ["callee:00c58120:8"]]
+ 0087ef80 ["INT_ADD", "register:40f0:8", ["const:87ef80:8", "const:4:8"]]
+ 0087ef80 ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-c2b1b938624dd4086b55bc2702d2aaa5"></a>

### [`0087ef7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087ef7c.md) → [`0087efd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087efd4.md) FUN_0087efd4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087efac ["INT_ADD", "register:40f0:8", ["const:87efac:8", "const:4:8"]]
- 0087efac ["CALL", null, ["callee:00c53da0:8"]]
+ 0087f004 ["INT_ADD", "register:40f0:8", ["const:87f004:8", "const:4:8"]]
+ 0087f004 ["CALL", null, ["callee:00c53da0:8"]]
- 0087efc0 ["COPY", "register:0:8", ["register:4040:8"]]
- 0087efc0 ["INT_ADD", "register:40f0:8", ["const:87efc0:8", "const:4:8"]]
- 0087efc0 ["CALLIND", null, ["register:0:8"]]
+ 0087f018 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0087f018 ["INT_ADD", "register:40f0:8", ["const:87f018:8", "const:4:8"]]
+ 0087f018 ["CALLIND", null, ["register:0:8"]]
- 0087efc8 ["INT_ADD", "register:40f0:8", ["const:87efc8:8", "const:4:8"]]
- 0087efc8 ["CALL", null, ["callee:00c57f50:8"]]
+ 0087f020 ["INT_ADD", "register:40f0:8", ["const:87f020:8", "const:4:8"]]
+ 0087f020 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-fd96a5c7e67c4deff9776e114b34bb10"></a>

### [`0087f038`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087f/0087f038.md) → [`0087f090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f090.md) FUN_0087f090

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0087e710`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087e710.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md)
- 新版 呼出元 1件 [`0087e768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087e768.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087f054 ["INT_ADD", "register:40f0:8", ["const:87f054:8", "const:4:8"]]
- 0087f054 ["CALL", null, ["callee:00c57f80:8"]]
+ 0087f0ac ["INT_ADD", "register:40f0:8", ["const:87f0ac:8", "const:4:8"]]
+ 0087f0ac ["CALL", null, ["callee:00c57f80:8"]]
- 0087f06c ["INT_ADD", "register:40f0:8", ["const:87f06c:8", "const:4:8"]]
- 0087f06c ["CALL", null, ["callee:00c5a900:8"]]
+ 0087f0c4 ["INT_ADD", "register:40f0:8", ["const:87f0c4:8", "const:4:8"]]
+ 0087f0c4 ["CALL", null, ["callee:00c5a900:8"]]
- 0087f074 ["INT_ADD", "register:40f0:8", ["const:87f074:8", "const:4:8"]]
- 0087f074 ["CALL", null, ["callee:00c57f80:8"]]
+ 0087f0cc ["INT_ADD", "register:40f0:8", ["const:87f0cc:8", "const:4:8"]]
+ 0087f0cc ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-accdef8967ba5463160c131b78c4fcdd"></a>

### [`0087f0a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087f/0087f0a4.md) → [`0087f0fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f0fc.md) FUN_0087f0fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0087f0a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087f/0087f0a4.md) [`00bc89d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc8/00bc89d8.md) · 呼出先 3件 [`0087f0a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087f/0087f0a4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md)
- 新版 呼出元 2件 [`0087f0fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f0fc.md) [`00bc8a74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc8a74.md) · 呼出先 3件 [`0087f0fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f0fc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0087f0c0 ["INT_ADD", "register:40f0:8", ["const:87f0c0:8", "const:4:8"]]
- 0087f0c0 ["CALL", null, ["local:b0:8"]]
+ 0087f118 ["INT_ADD", "register:40f0:8", ["const:87f118:8", "const:4:8"]]
+ 0087f118 ["CALL", null, ["local:b0:8"]]
- 0087f0cc ["INT_ADD", "register:40f0:8", ["const:87f0cc:8", "const:4:8"]]
- 0087f0cc ["CALL", null, ["local:b0:8"]]
+ 0087f124 ["INT_ADD", "register:40f0:8", ["const:87f124:8", "const:4:8"]]
+ 0087f124 ["CALL", null, ["local:b0:8"]]
- 0087f0d8 ["INT_ADD", "register:40f0:8", ["const:87f0d8:8", "const:4:8"]]
- 0087f0d8 ["CALL", null, ["callee:00c5a900:8"]]
+ 0087f130 ["INT_ADD", "register:40f0:8", ["const:87f130:8", "const:4:8"]]
+ 0087f130 ["CALL", null, ["callee:00c5a900:8"]]
~~~


<a id="compare-9b2b57171c98aed4bbef2559393dc696"></a>

### [`00880bec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00880/00880bec.md) → [`00880c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880c44.md) FUN_00880c44

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00880c28 ["COPY", "register:0:8", ["register:4040:8"]]
- 00880c28 ["INT_ADD", "register:40f0:8", ["const:880c28:8", "const:4:8"]]
- 00880c28 ["CALLIND", null, ["register:0:8"]]
+ 00880c80 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00880c80 ["INT_ADD", "register:40f0:8", ["const:880c80:8", "const:4:8"]]
+ 00880c80 ["CALLIND", null, ["register:0:8"]]
- 00880c3c ["INT_ADD", "register:40f0:8", ["const:880c3c:8", "const:4:8"]]
- 00880c3c ["CALL", null, ["callee:00c53da0:8"]]
+ 00880c94 ["INT_ADD", "register:40f0:8", ["const:880c94:8", "const:4:8"]]
+ 00880c94 ["CALL", null, ["callee:00c53da0:8"]]
- 00880c5c ["COPY", "register:0:8", ["register:4040:8"]]
- 00880c5c ["INT_ADD", "register:40f0:8", ["const:880c5c:8", "const:4:8"]]
- 00880c5c ["CALLIND", null, ["register:0:8"]]
+ 00880cb4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00880cb4 ["INT_ADD", "register:40f0:8", ["const:880cb4:8", "const:4:8"]]
+ 00880cb4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-38057674f11d6088e8533e6a34634ebf"></a>

### [`00880c70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00880/00880c70.md) → [`00880cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880cc8.md) FUN_00880cc8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00880cac ["COPY", "register:0:8", ["register:4040:8"]]
- 00880cac ["INT_ADD", "register:40f0:8", ["const:880cac:8", "const:4:8"]]
- 00880cac ["CALLIND", null, ["register:0:8"]]
+ 00880d04 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00880d04 ["INT_ADD", "register:40f0:8", ["const:880d04:8", "const:4:8"]]
+ 00880d04 ["CALLIND", null, ["register:0:8"]]
- 00880cc0 ["INT_ADD", "register:40f0:8", ["const:880cc0:8", "const:4:8"]]
- 00880cc0 ["CALL", null, ["callee:00c53da0:8"]]
+ 00880d18 ["INT_ADD", "register:40f0:8", ["const:880d18:8", "const:4:8"]]
+ 00880d18 ["CALL", null, ["callee:00c53da0:8"]]
- 00880ce0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00880ce0 ["INT_ADD", "register:40f0:8", ["const:880ce0:8", "const:4:8"]]
- 00880ce0 ["CALLIND", null, ["register:0:8"]]
+ 00880d38 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00880d38 ["INT_ADD", "register:40f0:8", ["const:880d38:8", "const:4:8"]]
+ 00880d38 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-3f47aa529ee04489da6d8269494709e5"></a>

### [`00881014`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00881/00881014.md) → [`0088106c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00881/0088106c.md) FUN_0088106c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00881034 ["INT_ADD", "register:40f0:8", ["const:881034:8", "const:4:8"]]
- 00881034 ["CALL", null, ["callee:00c53da0:8"]]
+ 0088108c ["INT_ADD", "register:40f0:8", ["const:88108c:8", "const:4:8"]]
+ 0088108c ["CALL", null, ["callee:00c53da0:8"]]
- 00881048 ["COPY", "register:0:8", ["register:4040:8"]]
- 00881048 ["INT_ADD", "register:40f0:8", ["const:881048:8", "const:4:8"]]
- 00881048 ["CALLIND", null, ["register:0:8"]]
+ 008810a0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008810a0 ["INT_ADD", "register:40f0:8", ["const:8810a0:8", "const:4:8"]]
+ 008810a0 ["CALLIND", null, ["register:0:8"]]
- 00881050 ["INT_ADD", "register:40f0:8", ["const:881050:8", "const:4:8"]]
- 00881050 ["CALL", null, ["callee:00c57f50:8"]]
+ 008810a8 ["INT_ADD", "register:40f0:8", ["const:8810a8:8", "const:4:8"]]
+ 008810a8 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-5f69313fd21b2e2e9499e6e6cdfdee03"></a>

### [`0088134c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00881/0088134c.md) → [`008813a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00881/008813a4.md) FUN_008813a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00881388 ["COPY", "register:0:8", ["register:4040:8"]]
- 00881388 ["INT_ADD", "register:40f0:8", ["const:881388:8", "const:4:8"]]
- 00881388 ["CALLIND", null, ["register:0:8"]]
+ 008813e0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008813e0 ["INT_ADD", "register:40f0:8", ["const:8813e0:8", "const:4:8"]]
+ 008813e0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-24773972065087142527d2e0a021ff3b"></a>

### [`00881c2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00881/00881c2c.md) → [`00881c84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00881/00881c84.md) FUN_00881c84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00881c48 ["INT_ADD", "register:40f0:8", ["const:881c48:8", "const:4:8"]]
- 00881c48 ["CALL", null, ["callee:00c53da0:8"]]
+ 00881ca0 ["INT_ADD", "register:40f0:8", ["const:881ca0:8", "const:4:8"]]
+ 00881ca0 ["CALL", null, ["callee:00c53da0:8"]]
- 00881c68 ["COPY", "register:0:8", ["register:4040:8"]]
- 00881c68 ["INT_ADD", "register:40f0:8", ["const:881c68:8", "const:4:8"]]
- 00881c68 ["CALLIND", null, ["register:0:8"]]
+ 00881cc0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00881cc0 ["INT_ADD", "register:40f0:8", ["const:881cc0:8", "const:4:8"]]
+ 00881cc0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-cb53aff9489caa5a661c6567e7cc8435"></a>

### [`00882614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00882/00882614.md) → [`0088266c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/0088266c.md) FUN_0088266c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0088018c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00880/0088018c.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`008801e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/008801e4.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00882650 ["COPY", "register:0:8", ["register:4040:8"]]
- 00882650 ["INT_ADD", "register:40f0:8", ["const:882650:8", "const:4:8"]]
- 00882650 ["CALLIND", null, ["register:0:8"]]
+ 008826a8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008826a8 ["INT_ADD", "register:40f0:8", ["const:8826a8:8", "const:4:8"]]
+ 008826a8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-3bf71bec0ee43b03b435f8b5bc66061b"></a>

### [`00882d40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00882/00882d40.md) → [`00882d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/00882d98.md) FUN_00882d98

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0087f368`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087f/0087f368.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0087f3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f3c0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00882d60 ["INT_ADD", "register:40f0:8", ["const:882d60:8", "const:4:8"]]
- 00882d60 ["CALL", null, ["callee:00c57f80:8"]]
+ 00882db8 ["INT_ADD", "register:40f0:8", ["const:882db8:8", "const:4:8"]]
+ 00882db8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-0a071c83529c383cad3a5c2d2f05f075"></a>

### [`008839d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00883/008839d0.md) → [`00883a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/00883a28.md) FUN_00883a28

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00883a0c ["COPY", "register:0:8", ["register:4040:8"]]
- 00883a0c ["INT_ADD", "register:40f0:8", ["const:883a0c:8", "const:4:8"]]
- 00883a0c ["CALLIND", null, ["register:0:8"]]
+ 00883a64 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00883a64 ["INT_ADD", "register:40f0:8", ["const:883a64:8", "const:4:8"]]
+ 00883a64 ["CALLIND", null, ["register:0:8"]]
- 00883a20 ["INT_ADD", "register:40f0:8", ["const:883a20:8", "const:4:8"]]
- 00883a20 ["CALL", null, ["callee:00c53da0:8"]]
+ 00883a78 ["INT_ADD", "register:40f0:8", ["const:883a78:8", "const:4:8"]]
+ 00883a78 ["CALL", null, ["callee:00c53da0:8"]]
- 00883a40 ["COPY", "register:0:8", ["register:4040:8"]]
- 00883a40 ["INT_ADD", "register:40f0:8", ["const:883a40:8", "const:4:8"]]
- 00883a40 ["CALLIND", null, ["register:0:8"]]
+ 00883a98 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00883a98 ["INT_ADD", "register:40f0:8", ["const:883a98:8", "const:4:8"]]
+ 00883a98 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5142bfbe2b1902f37863e6e1d2b84b75"></a>

### [`00883a54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00883/00883a54.md) → [`00883aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/00883aac.md) FUN_00883aac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008806a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00880/008806a8.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00880700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880700.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00883a90 ["COPY", "register:0:8", ["register:4040:8"]]
- 00883a90 ["INT_ADD", "register:40f0:8", ["const:883a90:8", "const:4:8"]]
- 00883a90 ["CALLIND", null, ["register:0:8"]]
+ 00883ae8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00883ae8 ["INT_ADD", "register:40f0:8", ["const:883ae8:8", "const:4:8"]]
+ 00883ae8 ["CALLIND", null, ["register:0:8"]]
- 00883aa4 ["INT_ADD", "register:40f0:8", ["const:883aa4:8", "const:4:8"]]
- 00883aa4 ["CALL", null, ["callee:00c53da0:8"]]
+ 00883afc ["INT_ADD", "register:40f0:8", ["const:883afc:8", "const:4:8"]]
+ 00883afc ["CALL", null, ["callee:00c53da0:8"]]
- 00883ab8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00883ab8 ["INT_ADD", "register:40f0:8", ["const:883ab8:8", "const:4:8"]]
- 00883ab8 ["CALLIND", null, ["register:0:8"]]
+ 00883b10 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00883b10 ["INT_ADD", "register:40f0:8", ["const:883b10:8", "const:4:8"]]
+ 00883b10 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-de95c2e0c960141be80116a93f2c4158"></a>

### [`00883fa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00883/00883fa4.md) → [`00883ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/00883ffc.md) FUN_00883ffc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00883fe0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00883fe0 ["INT_ADD", "register:40f0:8", ["const:883fe0:8", "const:4:8"]]
- 00883fe0 ["CALLIND", null, ["register:0:8"]]
+ 00884038 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00884038 ["INT_ADD", "register:40f0:8", ["const:884038:8", "const:4:8"]]
+ 00884038 ["CALLIND", null, ["register:0:8"]]
- 00883ff4 ["INT_ADD", "register:40f0:8", ["const:883ff4:8", "const:4:8"]]
- 00883ff4 ["CALL", null, ["callee:00c53da0:8"]]
+ 0088404c ["INT_ADD", "register:40f0:8", ["const:88404c:8", "const:4:8"]]
+ 0088404c ["CALL", null, ["callee:00c53da0:8"]]
- 00884014 ["COPY", "register:0:8", ["register:4040:8"]]
- 00884014 ["INT_ADD", "register:40f0:8", ["const:884014:8", "const:4:8"]]
- 00884014 ["CALLIND", null, ["register:0:8"]]
+ 0088406c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088406c ["INT_ADD", "register:40f0:8", ["const:88406c:8", "const:4:8"]]
+ 0088406c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-4264e64c4a0462c261394809141766b4"></a>

### [`00884028`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00884/00884028.md) → [`00884080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/00884080.md) FUN_00884080

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00884064 ["COPY", "register:0:8", ["register:4040:8"]]
- 00884064 ["INT_ADD", "register:40f0:8", ["const:884064:8", "const:4:8"]]
- 00884064 ["CALLIND", null, ["register:0:8"]]
+ 008840bc ["COPY", "register:0:8", ["register:4040:8"]]
+ 008840bc ["INT_ADD", "register:40f0:8", ["const:8840bc:8", "const:4:8"]]
+ 008840bc ["CALLIND", null, ["register:0:8"]]
- 00884078 ["INT_ADD", "register:40f0:8", ["const:884078:8", "const:4:8"]]
- 00884078 ["CALL", null, ["callee:00c53da0:8"]]
+ 008840d0 ["INT_ADD", "register:40f0:8", ["const:8840d0:8", "const:4:8"]]
+ 008840d0 ["CALL", null, ["callee:00c53da0:8"]]
- 00884098 ["COPY", "register:0:8", ["register:4040:8"]]
- 00884098 ["INT_ADD", "register:40f0:8", ["const:884098:8", "const:4:8"]]
- 00884098 ["CALLIND", null, ["register:0:8"]]
+ 008840f0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008840f0 ["INT_ADD", "register:40f0:8", ["const:8840f0:8", "const:4:8"]]
+ 008840f0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b60d1813a6aeba4c62a50e66e4da773e"></a>

### [`00884318`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00884/00884318.md) → [`00884370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/00884370.md) FUN_00884370

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00884354 ["COPY", "register:0:8", ["register:4040:8"]]
- 00884354 ["INT_ADD", "register:40f0:8", ["const:884354:8", "const:4:8"]]
- 00884354 ["CALLIND", null, ["register:0:8"]]
+ 008843ac ["COPY", "register:0:8", ["register:4040:8"]]
+ 008843ac ["INT_ADD", "register:40f0:8", ["const:8843ac:8", "const:4:8"]]
+ 008843ac ["CALLIND", null, ["register:0:8"]]
- 00884368 ["INT_ADD", "register:40f0:8", ["const:884368:8", "const:4:8"]]
- 00884368 ["CALL", null, ["callee:00c53da0:8"]]
+ 008843c0 ["INT_ADD", "register:40f0:8", ["const:8843c0:8", "const:4:8"]]
+ 008843c0 ["CALL", null, ["callee:00c53da0:8"]]
- 00884388 ["COPY", "register:0:8", ["register:4040:8"]]
- 00884388 ["INT_ADD", "register:40f0:8", ["const:884388:8", "const:4:8"]]
- 00884388 ["CALLIND", null, ["register:0:8"]]
+ 008843e0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008843e0 ["INT_ADD", "register:40f0:8", ["const:8843e0:8", "const:4:8"]]
+ 008843e0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-01fc0135beb48c5ef24ba4b64a17d8c8"></a>

### [`0088439c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00884/0088439c.md) → [`008843f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/008843f4.md) FUN_008843f4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00883ad4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00883/00883ad4.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00883b2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00883/00883b2c.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008843d8 ["COPY", "register:0:8", ["register:4040:8"]]
- 008843d8 ["INT_ADD", "register:40f0:8", ["const:8843d8:8", "const:4:8"]]
- 008843d8 ["CALLIND", null, ["register:0:8"]]
+ 00884430 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00884430 ["INT_ADD", "register:40f0:8", ["const:884430:8", "const:4:8"]]
+ 00884430 ["CALLIND", null, ["register:0:8"]]
- 008843ec ["INT_ADD", "register:40f0:8", ["const:8843ec:8", "const:4:8"]]
- 008843ec ["CALL", null, ["callee:00c53da0:8"]]
+ 00884444 ["INT_ADD", "register:40f0:8", ["const:884444:8", "const:4:8"]]
+ 00884444 ["CALL", null, ["callee:00c53da0:8"]]
- 00884400 ["COPY", "register:0:8", ["register:4040:8"]]
- 00884400 ["INT_ADD", "register:40f0:8", ["const:884400:8", "const:4:8"]]
- 00884400 ["CALLIND", null, ["register:0:8"]]
+ 00884458 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00884458 ["INT_ADD", "register:40f0:8", ["const:884458:8", "const:4:8"]]
+ 00884458 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a37c316bd2a5822bc02eaea7f42fcbee"></a>

### [`008846c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00884/008846c4.md) → [`0088471c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/0088471c.md) FUN_0088471c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00884700 ["COPY", "register:0:8", ["register:4040:8"]]
- 00884700 ["INT_ADD", "register:40f0:8", ["const:884700:8", "const:4:8"]]
- 00884700 ["CALLIND", null, ["register:0:8"]]
+ 00884758 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00884758 ["INT_ADD", "register:40f0:8", ["const:884758:8", "const:4:8"]]
+ 00884758 ["CALLIND", null, ["register:0:8"]]
- 00884714 ["INT_ADD", "register:40f0:8", ["const:884714:8", "const:4:8"]]
- 00884714 ["CALL", null, ["callee:00c53da0:8"]]
+ 0088476c ["INT_ADD", "register:40f0:8", ["const:88476c:8", "const:4:8"]]
+ 0088476c ["CALL", null, ["callee:00c53da0:8"]]
- 00884734 ["COPY", "register:0:8", ["register:4040:8"]]
- 00884734 ["INT_ADD", "register:40f0:8", ["const:884734:8", "const:4:8"]]
- 00884734 ["CALLIND", null, ["register:0:8"]]
+ 0088478c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088478c ["INT_ADD", "register:40f0:8", ["const:88478c:8", "const:4:8"]]
+ 0088478c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-1f3b08bc112fe1f726ac9477581dfc39"></a>

### [`00884748`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00884/00884748.md) → [`008847a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/008847a0.md) FUN_008847a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00884784 ["COPY", "register:0:8", ["register:4040:8"]]
- 00884784 ["INT_ADD", "register:40f0:8", ["const:884784:8", "const:4:8"]]
- 00884784 ["CALLIND", null, ["register:0:8"]]
+ 008847dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 008847dc ["INT_ADD", "register:40f0:8", ["const:8847dc:8", "const:4:8"]]
+ 008847dc ["CALLIND", null, ["register:0:8"]]
- 00884798 ["INT_ADD", "register:40f0:8", ["const:884798:8", "const:4:8"]]
- 00884798 ["CALL", null, ["callee:00c53da0:8"]]
+ 008847f0 ["INT_ADD", "register:40f0:8", ["const:8847f0:8", "const:4:8"]]
+ 008847f0 ["CALL", null, ["callee:00c53da0:8"]]
- 008847ac ["COPY", "register:0:8", ["register:4040:8"]]
- 008847ac ["INT_ADD", "register:40f0:8", ["const:8847ac:8", "const:4:8"]]
- 008847ac ["CALLIND", null, ["register:0:8"]]
+ 00884804 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00884804 ["INT_ADD", "register:40f0:8", ["const:884804:8", "const:4:8"]]
+ 00884804 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7cddff3af3e9fb5d41bd17213c09160c"></a>

### [`00884a70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00884/00884a70.md) → [`00884ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/00884ac8.md) FUN_00884ac8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00884aac ["COPY", "register:0:8", ["register:4040:8"]]
- 00884aac ["INT_ADD", "register:40f0:8", ["const:884aac:8", "const:4:8"]]
- 00884aac ["CALLIND", null, ["register:0:8"]]
+ 00884b04 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00884b04 ["INT_ADD", "register:40f0:8", ["const:884b04:8", "const:4:8"]]
+ 00884b04 ["CALLIND", null, ["register:0:8"]]
- 00884ac0 ["INT_ADD", "register:40f0:8", ["const:884ac0:8", "const:4:8"]]
- 00884ac0 ["CALL", null, ["callee:00c53da0:8"]]
+ 00884b18 ["INT_ADD", "register:40f0:8", ["const:884b18:8", "const:4:8"]]
+ 00884b18 ["CALL", null, ["callee:00c53da0:8"]]
- 00884ae0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00884ae0 ["INT_ADD", "register:40f0:8", ["const:884ae0:8", "const:4:8"]]
- 00884ae0 ["CALLIND", null, ["register:0:8"]]
+ 00884b38 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00884b38 ["INT_ADD", "register:40f0:8", ["const:884b38:8", "const:4:8"]]
+ 00884b38 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a2ebfce64a3339c3cb0bcae9344ad8d1"></a>

### [`00884af4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00884/00884af4.md) → [`00884b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/00884b4c.md) FUN_00884b4c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008806a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00880/008806a8.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00880700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880700.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00884b30 ["COPY", "register:0:8", ["register:4040:8"]]
- 00884b30 ["INT_ADD", "register:40f0:8", ["const:884b30:8", "const:4:8"]]
- 00884b30 ["CALLIND", null, ["register:0:8"]]
+ 00884b88 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00884b88 ["INT_ADD", "register:40f0:8", ["const:884b88:8", "const:4:8"]]
+ 00884b88 ["CALLIND", null, ["register:0:8"]]
- 00884b44 ["INT_ADD", "register:40f0:8", ["const:884b44:8", "const:4:8"]]
- 00884b44 ["CALL", null, ["callee:00c53da0:8"]]
+ 00884b9c ["INT_ADD", "register:40f0:8", ["const:884b9c:8", "const:4:8"]]
+ 00884b9c ["CALL", null, ["callee:00c53da0:8"]]
- 00884b58 ["COPY", "register:0:8", ["register:4040:8"]]
- 00884b58 ["INT_ADD", "register:40f0:8", ["const:884b58:8", "const:4:8"]]
- 00884b58 ["CALLIND", null, ["register:0:8"]]
+ 00884bb0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00884bb0 ["INT_ADD", "register:40f0:8", ["const:884bb0:8", "const:4:8"]]
+ 00884bb0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f8f85773206cae49da6302e41122e423"></a>

### [`00884f74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00884/00884f74.md) → [`00884fcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/00884fcc.md) FUN_00884fcc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00884fb0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00884fb0 ["INT_ADD", "register:40f0:8", ["const:884fb0:8", "const:4:8"]]
- 00884fb0 ["CALLIND", null, ["register:0:8"]]
+ 00885008 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885008 ["INT_ADD", "register:40f0:8", ["const:885008:8", "const:4:8"]]
+ 00885008 ["CALLIND", null, ["register:0:8"]]
- 00884fc4 ["INT_ADD", "register:40f0:8", ["const:884fc4:8", "const:4:8"]]
- 00884fc4 ["CALL", null, ["callee:00c53da0:8"]]
+ 0088501c ["INT_ADD", "register:40f0:8", ["const:88501c:8", "const:4:8"]]
+ 0088501c ["CALL", null, ["callee:00c53da0:8"]]
- 00884fe4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00884fe4 ["INT_ADD", "register:40f0:8", ["const:884fe4:8", "const:4:8"]]
- 00884fe4 ["CALLIND", null, ["register:0:8"]]
+ 0088503c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088503c ["INT_ADD", "register:40f0:8", ["const:88503c:8", "const:4:8"]]
+ 0088503c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8fc1736bc59e16146146fab96720759d"></a>

### [`00885264`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00885/00885264.md) → [`008852bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/008852bc.md) FUN_008852bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008852a0 ["COPY", "register:0:8", ["register:4040:8"]]
- 008852a0 ["INT_ADD", "register:40f0:8", ["const:8852a0:8", "const:4:8"]]
- 008852a0 ["CALLIND", null, ["register:0:8"]]
+ 008852f8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008852f8 ["INT_ADD", "register:40f0:8", ["const:8852f8:8", "const:4:8"]]
+ 008852f8 ["CALLIND", null, ["register:0:8"]]
- 008852b4 ["INT_ADD", "register:40f0:8", ["const:8852b4:8", "const:4:8"]]
- 008852b4 ["CALL", null, ["callee:00c53da0:8"]]
+ 0088530c ["INT_ADD", "register:40f0:8", ["const:88530c:8", "const:4:8"]]
+ 0088530c ["CALL", null, ["callee:00c53da0:8"]]
- 008852d4 ["COPY", "register:0:8", ["register:4040:8"]]
- 008852d4 ["INT_ADD", "register:40f0:8", ["const:8852d4:8", "const:4:8"]]
- 008852d4 ["CALLIND", null, ["register:0:8"]]
+ 0088532c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088532c ["INT_ADD", "register:40f0:8", ["const:88532c:8", "const:4:8"]]
+ 0088532c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b0fd491ed7578e260862ee97c97bd317"></a>

### [`008852e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00885/008852e8.md) → [`00885340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/00885340.md) FUN_00885340

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00884b74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00884/00884b74.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00884bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00884/00884bcc.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00885324 ["COPY", "register:0:8", ["register:4040:8"]]
- 00885324 ["INT_ADD", "register:40f0:8", ["const:885324:8", "const:4:8"]]
- 00885324 ["CALLIND", null, ["register:0:8"]]
+ 0088537c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088537c ["INT_ADD", "register:40f0:8", ["const:88537c:8", "const:4:8"]]
+ 0088537c ["CALLIND", null, ["register:0:8"]]
- 00885338 ["INT_ADD", "register:40f0:8", ["const:885338:8", "const:4:8"]]
- 00885338 ["CALL", null, ["callee:00c53da0:8"]]
+ 00885390 ["INT_ADD", "register:40f0:8", ["const:885390:8", "const:4:8"]]
+ 00885390 ["CALL", null, ["callee:00c53da0:8"]]
- 0088534c ["COPY", "register:0:8", ["register:4040:8"]]
- 0088534c ["INT_ADD", "register:40f0:8", ["const:88534c:8", "const:4:8"]]
- 0088534c ["CALLIND", null, ["register:0:8"]]
+ 008853a4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008853a4 ["INT_ADD", "register:40f0:8", ["const:8853a4:8", "const:4:8"]]
+ 008853a4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-cfb78050443aff9a7af25bc30729cffb"></a>

### [`0088560c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00885/0088560c.md) → [`00885664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/00885664.md) FUN_00885664

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00885634 ["INT_ADD", "register:40f0:8", ["const:885634:8", "const:4:8"]]
- 00885634 ["CALL", null, ["callee:00c53da0:8"]]
+ 0088568c ["INT_ADD", "register:40f0:8", ["const:88568c:8", "const:4:8"]]
+ 0088568c ["CALL", null, ["callee:00c53da0:8"]]
- 00885648 ["COPY", "register:0:8", ["register:4040:8"]]
- 00885648 ["INT_ADD", "register:40f0:8", ["const:885648:8", "const:4:8"]]
- 00885648 ["CALLIND", null, ["register:0:8"]]
+ 008856a0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008856a0 ["INT_ADD", "register:40f0:8", ["const:8856a0:8", "const:4:8"]]
+ 008856a0 ["CALLIND", null, ["register:0:8"]]
- 00885650 ["INT_ADD", "register:40f0:8", ["const:885650:8", "const:4:8"]]
- 00885650 ["CALL", null, ["callee:00c57f50:8"]]
+ 008856a8 ["INT_ADD", "register:40f0:8", ["const:8856a8:8", "const:4:8"]]
+ 008856a8 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-8a09451a8eecae4dee36c0780ef9b6e3"></a>

### [`0088569c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00885/0088569c.md) → [`008856f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/008856f4.md) FUN_008856f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00880cf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00880/00880cf4.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00880d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880d4c.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008856c4 ["INT_ADD", "register:40f0:8", ["const:8856c4:8", "const:4:8"]]
- 008856c4 ["CALL", null, ["callee:00c53da0:8"]]
+ 0088571c ["INT_ADD", "register:40f0:8", ["const:88571c:8", "const:4:8"]]
+ 0088571c ["CALL", null, ["callee:00c53da0:8"]]
- 008856d8 ["COPY", "register:0:8", ["register:4040:8"]]
- 008856d8 ["INT_ADD", "register:40f0:8", ["const:8856d8:8", "const:4:8"]]
- 008856d8 ["CALLIND", null, ["register:0:8"]]
+ 00885730 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885730 ["INT_ADD", "register:40f0:8", ["const:885730:8", "const:4:8"]]
+ 00885730 ["CALLIND", null, ["register:0:8"]]
- 008856e0 ["INT_ADD", "register:40f0:8", ["const:8856e0:8", "const:4:8"]]
- 008856e0 ["CALL", null, ["callee:00c57f50:8"]]
+ 00885738 ["INT_ADD", "register:40f0:8", ["const:885738:8", "const:4:8"]]
+ 00885738 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-4d8a23d1840860e3b3814966b9ec5670"></a>

### [`00885a90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00885/00885a90.md) → [`00885ae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/00885ae8.md) FUN_00885ae8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00885acc ["COPY", "register:0:8", ["register:4040:8"]]
- 00885acc ["INT_ADD", "register:40f0:8", ["const:885acc:8", "const:4:8"]]
- 00885acc ["CALLIND", null, ["register:0:8"]]
+ 00885b24 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885b24 ["INT_ADD", "register:40f0:8", ["const:885b24:8", "const:4:8"]]
+ 00885b24 ["CALLIND", null, ["register:0:8"]]
- 00885ae0 ["INT_ADD", "register:40f0:8", ["const:885ae0:8", "const:4:8"]]
- 00885ae0 ["CALL", null, ["callee:00c53da0:8"]]
+ 00885b38 ["INT_ADD", "register:40f0:8", ["const:885b38:8", "const:4:8"]]
+ 00885b38 ["CALL", null, ["callee:00c53da0:8"]]
- 00885b00 ["COPY", "register:0:8", ["register:4040:8"]]
- 00885b00 ["INT_ADD", "register:40f0:8", ["const:885b00:8", "const:4:8"]]
- 00885b00 ["CALLIND", null, ["register:0:8"]]
+ 00885b58 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885b58 ["INT_ADD", "register:40f0:8", ["const:885b58:8", "const:4:8"]]
+ 00885b58 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a2a5f8686a05ba9ad2086847fa8a3c8f"></a>

### [`00885d80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00885/00885d80.md) → [`00885dd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/00885dd8.md) FUN_00885dd8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00885dbc ["COPY", "register:0:8", ["register:4040:8"]]
- 00885dbc ["INT_ADD", "register:40f0:8", ["const:885dbc:8", "const:4:8"]]
- 00885dbc ["CALLIND", null, ["register:0:8"]]
+ 00885e14 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885e14 ["INT_ADD", "register:40f0:8", ["const:885e14:8", "const:4:8"]]
+ 00885e14 ["CALLIND", null, ["register:0:8"]]
- 00885dd0 ["INT_ADD", "register:40f0:8", ["const:885dd0:8", "const:4:8"]]
- 00885dd0 ["CALL", null, ["callee:00c53da0:8"]]
+ 00885e28 ["INT_ADD", "register:40f0:8", ["const:885e28:8", "const:4:8"]]
+ 00885e28 ["CALL", null, ["callee:00c53da0:8"]]
- 00885df0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00885df0 ["INT_ADD", "register:40f0:8", ["const:885df0:8", "const:4:8"]]
- 00885df0 ["CALLIND", null, ["register:0:8"]]
+ 00885e48 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885e48 ["INT_ADD", "register:40f0:8", ["const:885e48:8", "const:4:8"]]
+ 00885e48 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c02a0da4e9e8ac8ea5e0e77b576ef27d"></a>

### [`00885e04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00885/00885e04.md) → [`00885e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/00885e5c.md) FUN_00885e5c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00885724`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00885/00885724.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0088577c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00885/0088577c.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00885e40 ["COPY", "register:0:8", ["register:4040:8"]]
- 00885e40 ["INT_ADD", "register:40f0:8", ["const:885e40:8", "const:4:8"]]
- 00885e40 ["CALLIND", null, ["register:0:8"]]
+ 00885e98 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885e98 ["INT_ADD", "register:40f0:8", ["const:885e98:8", "const:4:8"]]
+ 00885e98 ["CALLIND", null, ["register:0:8"]]
- 00885e54 ["INT_ADD", "register:40f0:8", ["const:885e54:8", "const:4:8"]]
- 00885e54 ["CALL", null, ["callee:00c53da0:8"]]
+ 00885eac ["INT_ADD", "register:40f0:8", ["const:885eac:8", "const:4:8"]]
+ 00885eac ["CALL", null, ["callee:00c53da0:8"]]
- 00885e68 ["COPY", "register:0:8", ["register:4040:8"]]
- 00885e68 ["INT_ADD", "register:40f0:8", ["const:885e68:8", "const:4:8"]]
- 00885e68 ["CALLIND", null, ["register:0:8"]]
+ 00885ec0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00885ec0 ["INT_ADD", "register:40f0:8", ["const:885ec0:8", "const:4:8"]]
+ 00885ec0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8d24de551408011fabc54583e5298611"></a>

### [`0088613c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00886/0088613c.md) → [`00886194`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886194.md) FUN_00886194

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00886178 ["COPY", "register:0:8", ["register:4040:8"]]
- 00886178 ["INT_ADD", "register:40f0:8", ["const:886178:8", "const:4:8"]]
- 00886178 ["CALLIND", null, ["register:0:8"]]
+ 008861d0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008861d0 ["INT_ADD", "register:40f0:8", ["const:8861d0:8", "const:4:8"]]
+ 008861d0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b0f179731f4ff204eb5d0d1776541e5b"></a>

### [`008861a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00886/008861a0.md) → [`008861f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/008861f8.md) FUN_008861f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00881098`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00881/00881098.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`008810f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00881/008810f0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008861dc ["COPY", "register:0:8", ["register:4040:8"]]
- 008861dc ["INT_ADD", "register:40f0:8", ["const:8861dc:8", "const:4:8"]]
- 008861dc ["CALLIND", null, ["register:0:8"]]
+ 00886234 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00886234 ["INT_ADD", "register:40f0:8", ["const:886234:8", "const:4:8"]]
+ 00886234 ["CALLIND", null, ["register:0:8"]]
- 008861ec ["INT_ADD", "register:40f0:8", ["const:8861ec:8", "const:4:8"]]
- 008861ec ["CALL", null, ["callee:00c57f80:8"]]
+ 00886244 ["INT_ADD", "register:40f0:8", ["const:886244:8", "const:4:8"]]
+ 00886244 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-0e522f3ead59d0342566ae6fdb682e31"></a>

### [`008866a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00886/008866a8.md) → [`00886700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886700.md) FUN_00886700

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00886200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00886/00886200.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00886258`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886258.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008866e4 ["COPY", "register:0:8", ["register:4040:8"]]
- 008866e4 ["INT_ADD", "register:40f0:8", ["const:8866e4:8", "const:4:8"]]
- 008866e4 ["CALLIND", null, ["register:0:8"]]
+ 0088673c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088673c ["INT_ADD", "register:40f0:8", ["const:88673c:8", "const:4:8"]]
+ 0088673c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-3885e0e342874c492ac0a121d19c0d7e"></a>

### [`008866f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00886/008866f8.md) → [`00886750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886750.md) FUN_00886750

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00886798 ["INT_ADD", "register:40f0:8", ["const:886798:8", "const:4:8"]]
- 00886798 ["CALL", null, ["callee:0043bb60:8"]]
+ 008867f0 ["INT_ADD", "register:40f0:8", ["const:8867f0:8", "const:4:8"]]
+ 008867f0 ["CALL", null, ["callee:0043bb60:8"]]
- 008867c0 ["COPY", "register:0:8", ["register:4040:8"]]
- 008867c0 ["INT_ADD", "register:40f0:8", ["const:8867c0:8", "const:4:8"]]
- 008867c0 ["CALLIND", null, ["register:0:8"]]
+ 00886818 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00886818 ["INT_ADD", "register:40f0:8", ["const:886818:8", "const:4:8"]]
+ 00886818 ["CALLIND", null, ["register:0:8"]]
- 008867d8 ["INT_ADD", "register:40f0:8", ["const:8867d8:8", "const:4:8"]]
- 008867d8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00886830 ["INT_ADD", "register:40f0:8", ["const:886830:8", "const:4:8"]]
+ 00886830 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-3a50a008fd7255d61e272ea3a5fe43e0"></a>

### [`00886a04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00886/00886a04.md) → [`00886a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886a5c.md) FUN_00886a5c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00881758`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00881/00881758.md) · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`008817b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00881/008817b0.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00886a20 ["INT_ADD", "register:40f0:8", ["const:886a20:8", "const:4:8"]]
- 00886a20 ["CALL", null, ["callee:00c53da0:8"]]
+ 00886a78 ["INT_ADD", "register:40f0:8", ["const:886a78:8", "const:4:8"]]
+ 00886a78 ["CALL", null, ["callee:00c53da0:8"]]
- 00886a40 ["COPY", "register:0:8", ["register:4040:8"]]
- 00886a40 ["INT_ADD", "register:40f0:8", ["const:886a40:8", "const:4:8"]]
- 00886a40 ["CALLIND", null, ["register:0:8"]]
+ 00886a98 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00886a98 ["INT_ADD", "register:40f0:8", ["const:886a98:8", "const:4:8"]]
+ 00886a98 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-55856188cbd19dca273674e92247782c"></a>

### [`00886a54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00886/00886a54.md) → [`00886aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886aac.md) FUN_00886aac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00881758`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00881/00881758.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`008817b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00881/008817b0.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00886a74 ["INT_ADD", "register:40f0:8", ["const:886a74:8", "const:4:8"]]
- 00886a74 ["CALL", null, ["callee:00c53da0:8"]]
+ 00886acc ["INT_ADD", "register:40f0:8", ["const:886acc:8", "const:4:8"]]
+ 00886acc ["CALL", null, ["callee:00c53da0:8"]]
- 00886a88 ["COPY", "register:0:8", ["register:4040:8"]]
- 00886a88 ["INT_ADD", "register:40f0:8", ["const:886a88:8", "const:4:8"]]
- 00886a88 ["CALLIND", null, ["register:0:8"]]
+ 00886ae0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00886ae0 ["INT_ADD", "register:40f0:8", ["const:886ae0:8", "const:4:8"]]
+ 00886ae0 ["CALLIND", null, ["register:0:8"]]
- 00886a90 ["INT_ADD", "register:40f0:8", ["const:886a90:8", "const:4:8"]]
- 00886a90 ["CALL", null, ["callee:00c57f50:8"]]
+ 00886ae8 ["INT_ADD", "register:40f0:8", ["const:886ae8:8", "const:4:8"]]
+ 00886ae8 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-b9f08ab9af544525c1727b8dc118b833"></a>

### [`00886f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00886/00886f10.md) → [`00886f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886f68.md) FUN_00886f68

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00886aa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00886/00886aa4.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00886afc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00886/00886afc.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00886f30 ["INT_ADD", "register:40f0:8", ["const:886f30:8", "const:4:8"]]
- 00886f30 ["CALL", null, ["callee:00c57f80:8"]]
+ 00886f88 ["INT_ADD", "register:40f0:8", ["const:886f88:8", "const:4:8"]]
+ 00886f88 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-c0fbc15b1005008a21a4b16cb02cb813"></a>

### [`00887724`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/00887724.md) → [`0088777c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/0088777c.md) FUN_0088777c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00848750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848750.md) [`00851504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851504.md) [`008548ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00854/008548ec.md) · 呼出先 4件 [`006a2b78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2b78.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`008487a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/008487a8.md) [`0085155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/0085155c.md) [`00854944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00854/00854944.md) · 呼出先 4件 [`006a2bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2bd0.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088774c ["INT_ADD", "register:40f0:8", ["const:88774c:8", "const:4:8"]]
- 0088774c ["CALL", null, ["callee:00c57f80:8"]]
+ 008877a4 ["INT_ADD", "register:40f0:8", ["const:8877a4:8", "const:4:8"]]
+ 008877a4 ["CALL", null, ["callee:00c57f80:8"]]
- 00887760 ["INT_ADD", "register:40f0:8", ["const:887760:8", "const:4:8"]]
- 00887760 ["CALL", null, ["callee:006a2bd0:8"]]
+ 008877b8 ["INT_ADD", "register:40f0:8", ["const:8877b8:8", "const:4:8"]]
+ 008877b8 ["CALL", null, ["callee:006a2bd0:8"]]
- 0088777c ["INT_ADD", "register:40f0:8", ["const:88777c:8", "const:4:8"]]
- 0088777c ["CALL", null, ["callee:00c57f80:8"]]
+ 008877d4 ["INT_ADD", "register:40f0:8", ["const:8877d4:8", "const:4:8"]]
+ 008877d4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-c7b0ad17840a183ab0cc51aba7108b0b"></a>

### [`0088802c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00888/0088802c.md) → [`00888084`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888084.md) FUN_00888084

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008878d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/008878d8.md) · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00888048 ["INT_ADD", "register:40f0:8", ["const:888048:8", "const:4:8"]]
- 00888048 ["CALL", null, ["callee:00c53da0:8"]]
+ 008880a0 ["INT_ADD", "register:40f0:8", ["const:8880a0:8", "const:4:8"]]
+ 008880a0 ["CALL", null, ["callee:00c53da0:8"]]
- 00888068 ["COPY", "register:0:8", ["register:4040:8"]]
- 00888068 ["INT_ADD", "register:40f0:8", ["const:888068:8", "const:4:8"]]
- 00888068 ["CALLIND", null, ["register:0:8"]]
+ 008880c0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008880c0 ["INT_ADD", "register:40f0:8", ["const:8880c0:8", "const:4:8"]]
+ 008880c0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e4b40b78f0d33b0d64836e6ec7ce874c"></a>

### [`0088807c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00888/0088807c.md) → [`008880d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/008880d4.md) FUN_008880d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00888098 ["INT_ADD", "register:40f0:8", ["const:888098:8", "const:4:8"]]
- 00888098 ["CALL", null, ["callee:00c53da0:8"]]
+ 008880f0 ["INT_ADD", "register:40f0:8", ["const:8880f0:8", "const:4:8"]]
+ 008880f0 ["CALL", null, ["callee:00c53da0:8"]]
- 008880b8 ["COPY", "register:0:8", ["register:4040:8"]]
- 008880b8 ["INT_ADD", "register:40f0:8", ["const:8880b8:8", "const:4:8"]]
- 008880b8 ["CALLIND", null, ["register:0:8"]]
+ 00888110 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00888110 ["INT_ADD", "register:40f0:8", ["const:888110:8", "const:4:8"]]
+ 00888110 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-da3e19d487d54da879db6238c2050e02"></a>

### [`008880cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00888/008880cc.md) → [`00888124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888124.md) FUN_00888124

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008880e8 ["INT_ADD", "register:40f0:8", ["const:8880e8:8", "const:4:8"]]
- 008880e8 ["CALL", null, ["callee:00c53da0:8"]]
+ 00888140 ["INT_ADD", "register:40f0:8", ["const:888140:8", "const:4:8"]]
+ 00888140 ["CALL", null, ["callee:00c53da0:8"]]
- 00888108 ["COPY", "register:0:8", ["register:4040:8"]]
- 00888108 ["INT_ADD", "register:40f0:8", ["const:888108:8", "const:4:8"]]
- 00888108 ["CALLIND", null, ["register:0:8"]]
+ 00888160 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00888160 ["INT_ADD", "register:40f0:8", ["const:888160:8", "const:4:8"]]
+ 00888160 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c6e84214c03ec41024871fd84f5fdcf6"></a>

### [`0088811c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00888/0088811c.md) → [`00888174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888174.md) FUN_00888174

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00888138 ["INT_ADD", "register:40f0:8", ["const:888138:8", "const:4:8"]]
- 00888138 ["CALL", null, ["callee:00c53da0:8"]]
+ 00888190 ["INT_ADD", "register:40f0:8", ["const:888190:8", "const:4:8"]]
+ 00888190 ["CALL", null, ["callee:00c53da0:8"]]
- 00888158 ["COPY", "register:0:8", ["register:4040:8"]]
- 00888158 ["INT_ADD", "register:40f0:8", ["const:888158:8", "const:4:8"]]
- 00888158 ["CALLIND", null, ["register:0:8"]]
+ 008881b0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008881b0 ["INT_ADD", "register:40f0:8", ["const:8881b0:8", "const:4:8"]]
+ 008881b0 ["CALLIND", null, ["register:0:8"]]
~~~


