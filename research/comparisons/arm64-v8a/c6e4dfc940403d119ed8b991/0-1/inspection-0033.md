# v16.0.1 → v16.0.2 · 要調査の変更候補 (33)

[一覧の目次](README.md)

<a id="compare-38f7d05ed46a3f40db179a680d993dd9"></a>

### [`009f45a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f4/009f45a4.md) → [`009f45f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f45f8.md) FUN_009f45f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009f42e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f4/009f42e0.md) · 呼出先 6件 [`009f2de4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f2/009f2de4.md) [`009f3718`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f3718.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009f4334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f4334.md) · 呼出先 6件 [`009f2e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2e38.md) [`009f376c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f376c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009f45c8 ["INT_ADD", "register:40f0:8", ["const:9f45c8:8", "const:4:8"]]
- 009f45c8 ["CALL", null, ["callee:00c57f60:8"]]
+ 009f461c ["INT_ADD", "register:40f0:8", ["const:9f461c:8", "const:4:8"]]
+ 009f461c ["CALL", null, ["callee:00c57f60:8"]]
- 009f4600 ["INT_ADD", "register:40f0:8", ["const:9f4600:8", "const:4:8"]]
- 009f4600 ["CALL", null, ["callee:00c57f60:8"]]
+ 009f4654 ["INT_ADD", "register:40f0:8", ["const:9f4654:8", "const:4:8"]]
+ 009f4654 ["CALL", null, ["callee:00c57f60:8"]]
- 009f4618 ["INT_ADD", "register:40f0:8", ["const:9f4618:8", "const:4:8"]]
- 009f4618 ["CALL", null, ["callee:00c580d0:8"]]
+ 009f466c ["INT_ADD", "register:40f0:8", ["const:9f466c:8", "const:4:8"]]
+ 009f466c ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-366bbdcbf993b2df49bcb30696c9a052"></a>

### [`009f466c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f4/009f466c.md) → [`009f46c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f46c0.md) FUN_009f46c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`009f0d34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f0/009f0d34.md) [`009f1e4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f1/009f1e4c.md) [`009f41f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f4/009f41f8.md) · 呼出先 5件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`009f42e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f4/009f42e0.md) [`009f47a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f4/009f47a8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 3件 [`009f0d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f0/009f0d88.md) [`009f1ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f1/009f1ea0.md) [`009f424c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f424c.md) · 呼出先 5件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`009f4334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f4334.md) [`009f47fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f47fc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009f46a8 ["INT_ADD", "register:40f0:8", ["const:9f46a8:8", "const:4:8"]]
- 009f46a8 ["CALL", null, ["callee:009f47fc:8"]]
+ 009f46fc ["INT_ADD", "register:40f0:8", ["const:9f46fc:8", "const:4:8"]]
+ 009f46fc ["CALL", null, ["callee:009f47fc:8"]]
- 009f46c8 ["INT_ADD", "register:40f0:8", ["const:9f46c8:8", "const:4:8"]]
- 009f46c8 ["CALL", null, ["callee:00c57f60:8"]]
+ 009f471c ["INT_ADD", "register:40f0:8", ["const:9f471c:8", "const:4:8"]]
+ 009f471c ["CALL", null, ["callee:00c57f60:8"]]
- 009f4700 ["INT_ADD", "register:40f0:8", ["const:9f4700:8", "const:4:8"]]
- 009f4700 ["CALL", null, ["callee:009f4334:8"]]
+ 009f4754 ["INT_ADD", "register:40f0:8", ["const:9f4754:8", "const:4:8"]]
+ 009f4754 ["CALL", null, ["callee:009f4334:8"]]
~~~


<a id="compare-638bb5d40bb8dd6806b29d18bd279d84"></a>

### [`009f4950`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f4/009f4950.md) → [`009f49a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f49a4.md) FUN_009f49a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009f1200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f1/009f1200.md) · 呼出先 4件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`009f3c58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f3c58.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009f1254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f1/009f1254.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`009f3cac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3cac.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009f49dc ["INT_ADD", "register:40f0:8", ["const:9f49dc:8", "const:4:8"]]
- 009f49dc ["CALL", null, ["callee:00c57f60:8"]]
+ 009f4a30 ["INT_ADD", "register:40f0:8", ["const:9f4a30:8", "const:4:8"]]
+ 009f4a30 ["CALL", null, ["callee:00c57f60:8"]]
- 009f4a94 ["INT_ADD", "register:40f0:8", ["const:9f4a94:8", "const:4:8"]]
- 009f4a94 ["CALL", null, ["callee:00c57f80:8"]]
+ 009f4ae8 ["INT_ADD", "register:40f0:8", ["const:9f4ae8:8", "const:4:8"]]
+ 009f4ae8 ["CALL", null, ["callee:00c57f80:8"]]
- 009f4ab0 ["INT_ADD", "register:40f0:8", ["const:9f4ab0:8", "const:4:8"]]
- 009f4ab0 ["CALL", null, ["callee:00c57f80:8"]]
+ 009f4b04 ["INT_ADD", "register:40f0:8", ["const:9f4b04:8", "const:4:8"]]
+ 009f4b04 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-700199923b16b8960917113cb15f089f"></a>

### [`009f9d10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f9/009f9d10.md) → [`009f9d64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f9/009f9d64.md) FUN_009f9d64

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ff40c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ff/009ff40c.md) · 呼出先 6件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`009df8c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009df/009df8c4.md) [`009e2f94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e2/009e2f94.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`009ff460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ff/009ff460.md) · 呼出先 6件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`009df918`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009df/009df918.md) [`009e2fe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e2/009e2fe8.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009f9d3c ["INT_ADD", "register:40f0:8", ["const:9f9d3c:8", "const:4:8"]]
- 009f9d3c ["CALL", null, ["callee:00851550:8"]]
+ 009f9d90 ["INT_ADD", "register:40f0:8", ["const:9f9d90:8", "const:4:8"]]
+ 009f9d90 ["CALL", null, ["callee:00851550:8"]]
- 009f9d4c ["INT_ADD", "register:40f0:8", ["const:9f9d4c:8", "const:4:8"]]
- 009f9d4c ["CALL", null, ["callee:009e2fe8:8"]]
+ 009f9da0 ["INT_ADD", "register:40f0:8", ["const:9f9da0:8", "const:4:8"]]
+ 009f9da0 ["CALL", null, ["callee:009e2fe8:8"]]
- 009f9d68 ["COPY", "register:0:8", ["register:4040:8"]]
- 009f9d68 ["INT_ADD", "register:40f0:8", ["const:9f9d68:8", "const:4:8"]]
- 009f9d68 ["CALLIND", null, ["register:0:8"]]
+ 009f9dbc ["COPY", "register:0:8", ["register:4040:8"]]
+ 009f9dbc ["INT_ADD", "register:40f0:8", ["const:9f9dbc:8", "const:4:8"]]
+ 009f9dbc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-70d1107edf12d1f0b64491ab09815a35"></a>

### [`009fcd04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fc/009fcd04.md) → [`009fcd58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fc/009fcd58.md) FUN_009fcd58

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009fcd40 ["COPY", "register:0:8", ["register:4040:8"]]
- 009fcd40 ["INT_ADD", "register:40f0:8", ["const:9fcd40:8", "const:4:8"]]
- 009fcd40 ["CALLIND", null, ["register:0:8"]]
+ 009fcd94 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009fcd94 ["INT_ADD", "register:40f0:8", ["const:9fcd94:8", "const:4:8"]]
+ 009fcd94 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e8f6e3a1dce2349b82182d2f8f085910"></a>

### [`009fcdf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fc/009fcdf8.md) → [`009fce4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fc/009fce4c.md) FUN_009fce4c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009f6214`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f6/009f6214.md) · 呼出先 4件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`009fcf14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fc/009fcf14.md) [`009fd0bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fd/009fd0bc.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`009f6268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f6/009f6268.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`009fcf68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fc/009fcf68.md) [`009fd110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fd110.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009fce54 ["INT_ADD", "register:40f0:8", ["const:9fce54:8", "const:4:8"]]
- 009fce54 ["CALL", null, ["callee:009fcf68:8"]]
+ 009fcea8 ["INT_ADD", "register:40f0:8", ["const:9fcea8:8", "const:4:8"]]
+ 009fcea8 ["CALL", null, ["callee:009fcf68:8"]]
- 009fce7c ["INT_ADD", "register:40f0:8", ["const:9fce7c:8", "const:4:8"]]
- 009fce7c ["CALL", null, ["callee:009fd110:8"]]
+ 009fced0 ["INT_ADD", "register:40f0:8", ["const:9fced0:8", "const:4:8"]]
+ 009fced0 ["CALL", null, ["callee:009fd110:8"]]
- 009fcea8 ["INT_ADD", "register:40f0:8", ["const:9fcea8:8", "const:4:8"]]
- 009fcea8 ["CALL", null, ["callee:0043bbe4:8"]]
+ 009fcefc ["INT_ADD", "register:40f0:8", ["const:9fcefc:8", "const:4:8"]]
+ 009fcefc ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-62dd3de4e43c38f4eb906128b4bcc90f"></a>

### [`009fd0bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fd/009fd0bc.md) → [`009fd110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fd110.md) FUN_009fd110

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009fcdf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fc/009fcdf8.md) · 呼出先 3件 [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`009fce4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fc/009fce4c.md) · 呼出先 3件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009fd0e0 ["INT_ADD", "register:40f0:8", ["const:9fd0e0:8", "const:4:8"]]
- 009fd0e0 ["CALL", null, ["callee:00c57f60:8"]]
+ 009fd134 ["INT_ADD", "register:40f0:8", ["const:9fd134:8", "const:4:8"]]
+ 009fd134 ["CALL", null, ["callee:00c57f60:8"]]
- 009fd118 ["INT_ADD", "register:40f0:8", ["const:9fd118:8", "const:4:8"]]
- 009fd118 ["CALL", null, ["callee:00c57f60:8"]]
+ 009fd16c ["INT_ADD", "register:40f0:8", ["const:9fd16c:8", "const:4:8"]]
+ 009fd16c ["CALL", null, ["callee:00c57f60:8"]]
- 009fd130 ["INT_ADD", "register:40f0:8", ["const:9fd130:8", "const:4:8"]]
- 009fd130 ["CALL", null, ["callee:00c580d0:8"]]
+ 009fd184 ["INT_ADD", "register:40f0:8", ["const:9fd184:8", "const:4:8"]]
+ 009fd184 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-02e5a659bb9be9f54626f2ea5f3cc0cc"></a>

### [`009fd1c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fd/009fd1c4.md) → [`009fd218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fd218.md) FUN_009fd218

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b7948`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7948.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b79a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b79a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009fd1dc ["INT_ADD", "register:40f0:8", ["const:9fd1dc:8", "const:4:8"]]
- 009fd1dc ["CALL", null, ["callee:00851550:8"]]
+ 009fd230 ["INT_ADD", "register:40f0:8", ["const:9fd230:8", "const:4:8"]]
+ 009fd230 ["CALL", null, ["callee:00851550:8"]]
- 009fd1ec ["INT_ADD", "register:40f0:8", ["const:9fd1ec:8", "const:4:8"]]
- 009fd1ec ["CALL", null, ["callee:008b79a0:8"]]
+ 009fd240 ["INT_ADD", "register:40f0:8", ["const:9fd240:8", "const:4:8"]]
+ 009fd240 ["CALL", null, ["callee:008b79a0:8"]]
- 009fd1f0 ["INT_ADD", "register:40f0:8", ["const:9fd1f0:8", "const:4:8"]]
- 009fd1f0 ["CALL", null, ["callee:00851550:8"]]
+ 009fd244 ["INT_ADD", "register:40f0:8", ["const:9fd244:8", "const:4:8"]]
+ 009fd244 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-109623109a0a290626ce693ceaa2e4d8"></a>

### [`009fdccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fd/009fdccc.md) → [`009fdd20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdd20.md) FUN_009fdd20

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`009f92c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f9/009f92c8.md) [`009fdccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fd/009fdccc.md) [`009fdf94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fd/009fdf94.md) · 呼出先 4件 [`009fdccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fd/009fdccc.md) [`009fdf94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fd/009fdf94.md) [`009fe20c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fe/009fe20c.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 3件 [`009f931c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f9/009f931c.md) [`009fdd20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdd20.md) [`009fdfe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdfe8.md) · 呼出先 4件 [`009fdd20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdd20.md) [`009fdfe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdfe8.md) [`009fe260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fe260.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009fde38 ["INT_ADD", "register:40f0:8", ["const:9fde38:8", "const:4:8"]]
- 009fde38 ["CALL", null, ["local:b0:8"]]
+ 009fde8c ["INT_ADD", "register:40f0:8", ["const:9fde8c:8", "const:4:8"]]
+ 009fde8c ["CALL", null, ["local:b0:8"]]
- 009fde58 ["INT_ADD", "register:40f0:8", ["const:9fde58:8", "const:4:8"]]
- 009fde58 ["CALL", null, ["local:b0:8"]]
+ 009fdeac ["INT_ADD", "register:40f0:8", ["const:9fdeac:8", "const:4:8"]]
+ 009fdeac ["CALL", null, ["local:b0:8"]]
- 009fdeb4 ["INT_ADD", "register:40f0:8", ["const:9fdeb4:8", "const:4:8"]]
- 009fdeb4 ["CALL", null, ["callee:009fdfe8:8"]]
+ 009fdf08 ["INT_ADD", "register:40f0:8", ["const:9fdf08:8", "const:4:8"]]
+ 009fdf08 ["CALL", null, ["callee:009fdfe8:8"]]
~~~


<a id="compare-295904bc1fae1245904747cea99baa26"></a>

### [`009fdf94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fd/009fdf94.md) → [`009fdfe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdfe8.md) FUN_009fdfe8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009fdccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fd/009fdccc.md) · 呼出先 1件 [`009fdccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fd/009fdccc.md)
- 新版 呼出元 1件 [`009fdd20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdd20.md) · 呼出先 1件 [`009fdd20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdd20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009fe124 ["INT_ADD", "register:40f0:8", ["const:9fe124:8", "const:4:8"]]
- 009fe124 ["CALL", null, ["callee:009fdd20:8"]]
+ 009fe178 ["INT_ADD", "register:40f0:8", ["const:9fe178:8", "const:4:8"]]
+ 009fe178 ["CALL", null, ["callee:009fdd20:8"]]
- 009fe13c ["INT_ADD", "register:40f0:8", ["const:9fe13c:8", "const:4:8"]]
- 009fe13c ["CALL", null, ["callee:009fdd20:8"]]
+ 009fe190 ["INT_ADD", "register:40f0:8", ["const:9fe190:8", "const:4:8"]]
+ 009fe190 ["CALL", null, ["callee:009fdd20:8"]]
~~~


<a id="compare-dc4a14532ea7b6f64f38a1c0d0facfe0"></a>

### [`009fe20c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fe/009fe20c.md) → [`009fe260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fe260.md) FUN_009fe260

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`009fdccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fd/009fdccc.md) [`009fe20c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fe/009fe20c.md) · 呼出先 4件 [`009fe20c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fe/009fe20c.md) [`009fe630`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fe/009fe630.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 2件 [`009fdd20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdd20.md) [`009fe260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fe260.md) · 呼出先 4件 [`009fe260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fe260.md) [`009fe684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fe684.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009fe3a0 ["INT_ADD", "register:40f0:8", ["const:9fe3a0:8", "const:4:8"]]
- 009fe3a0 ["CALL", null, ["callee:009fe684:8"]]
+ 009fe3f4 ["INT_ADD", "register:40f0:8", ["const:9fe3f4:8", "const:4:8"]]
+ 009fe3f4 ["CALL", null, ["callee:009fe684:8"]]
- 009fe3e0 ["INT_ADD", "register:40f0:8", ["const:9fe3e0:8", "const:4:8"]]
- 009fe3e0 ["CALL", null, ["local:b0:8"]]
+ 009fe434 ["INT_ADD", "register:40f0:8", ["const:9fe434:8", "const:4:8"]]
+ 009fe434 ["CALL", null, ["local:b0:8"]]
- 009fe41c ["INT_ADD", "register:40f0:8", ["const:9fe41c:8", "const:4:8"]]
- 009fe41c ["CALL", null, ["local:b0:8"]]
+ 009fe470 ["INT_ADD", "register:40f0:8", ["const:9fe470:8", "const:4:8"]]
+ 009fe470 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-7b1acc83227189719e8c4e3496e9147e"></a>

### [`009fe630`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fe/009fe630.md) → [`009fe684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fe684.md) FUN_009fe684

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`009fe20c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fe/009fe20c.md) [`009fed94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fe/009fed94.md) · 呼出先 2件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 2件 [`009fe260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fe260.md) [`009fede8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fede8.md) · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009fe714 ["INT_ADD", "register:40f0:8", ["const:9fe714:8", "const:4:8"]]
- 009fe714 ["CALL", null, ["callee:00c58010:8"]]
+ 009fe768 ["INT_ADD", "register:40f0:8", ["const:9fe768:8", "const:4:8"]]
+ 009fe768 ["CALL", null, ["callee:00c58010:8"]]
- 009fe76c ["INT_ADD", "register:40f0:8", ["const:9fe76c:8", "const:4:8"]]
- 009fe76c ["CALL", null, ["callee:00c58010:8"]]
+ 009fe7c0 ["INT_ADD", "register:40f0:8", ["const:9fe7c0:8", "const:4:8"]]
+ 009fe7c0 ["CALL", null, ["callee:00c58010:8"]]
- 009fe850 ["INT_ADD", "register:40f0:8", ["const:9fe850:8", "const:4:8"]]
- 009fe850 ["CALL", null, ["callee:00c57fb0:8"]]
+ 009fe8a4 ["INT_ADD", "register:40f0:8", ["const:9fe8a4:8", "const:4:8"]]
+ 009fe8a4 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-ebaa58088339a47860a6fcce3b530e48"></a>

### [`009fe854`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fe/009fe854.md) → [`009fe8a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fe8a8.md) FUN_009fe8a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`009f981c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f9/009f981c.md) [`009fe854`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fe/009fe854.md) [`009feb1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fe/009feb1c.md) · 呼出先 4件 [`009fe854`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fe/009fe854.md) [`009feb1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fe/009feb1c.md) [`009fed94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fe/009fed94.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 3件 [`009f9870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f9/009f9870.md) [`009fe8a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fe8a8.md) [`009feb70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009feb70.md) · 呼出先 4件 [`009fe8a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fe8a8.md) [`009feb70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009feb70.md) [`009fede8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fede8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009fe9c0 ["INT_ADD", "register:40f0:8", ["const:9fe9c0:8", "const:4:8"]]
- 009fe9c0 ["CALL", null, ["local:b0:8"]]
+ 009fea14 ["INT_ADD", "register:40f0:8", ["const:9fea14:8", "const:4:8"]]
+ 009fea14 ["CALL", null, ["local:b0:8"]]
- 009fe9e0 ["INT_ADD", "register:40f0:8", ["const:9fe9e0:8", "const:4:8"]]
- 009fe9e0 ["CALL", null, ["local:b0:8"]]
+ 009fea34 ["INT_ADD", "register:40f0:8", ["const:9fea34:8", "const:4:8"]]
+ 009fea34 ["CALL", null, ["local:b0:8"]]
- 009fea3c ["INT_ADD", "register:40f0:8", ["const:9fea3c:8", "const:4:8"]]
- 009fea3c ["CALL", null, ["callee:009feb70:8"]]
+ 009fea90 ["INT_ADD", "register:40f0:8", ["const:9fea90:8", "const:4:8"]]
+ 009fea90 ["CALL", null, ["callee:009feb70:8"]]
~~~


<a id="compare-1085c0a6e9a83dbc81db848bfd999a8e"></a>

### [`009feb1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fe/009feb1c.md) → [`009feb70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009feb70.md) FUN_009feb70

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009fe854`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fe/009fe854.md) · 呼出先 1件 [`009fe854`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fe/009fe854.md)
- 新版 呼出元 1件 [`009fe8a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fe8a8.md) · 呼出先 1件 [`009fe8a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fe8a8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009fecac ["INT_ADD", "register:40f0:8", ["const:9fecac:8", "const:4:8"]]
- 009fecac ["CALL", null, ["callee:009fe8a8:8"]]
+ 009fed00 ["INT_ADD", "register:40f0:8", ["const:9fed00:8", "const:4:8"]]
+ 009fed00 ["CALL", null, ["callee:009fe8a8:8"]]
- 009fecc4 ["INT_ADD", "register:40f0:8", ["const:9fecc4:8", "const:4:8"]]
- 009fecc4 ["CALL", null, ["callee:009fe8a8:8"]]
+ 009fed18 ["INT_ADD", "register:40f0:8", ["const:9fed18:8", "const:4:8"]]
+ 009fed18 ["CALL", null, ["callee:009fe8a8:8"]]
~~~


<a id="compare-ba87ed5cbb6992e85e68506e1bbe1d6e"></a>

### [`009fed94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fe/009fed94.md) → [`009fede8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fede8.md) FUN_009fede8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`009fe854`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fe/009fe854.md) [`009fed94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fe/009fed94.md) · 呼出先 4件 [`009fe630`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fe/009fe630.md) [`009fed94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fe/009fed94.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 2件 [`009fe8a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fe8a8.md) [`009fede8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fede8.md) · 呼出先 4件 [`009fe684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fe684.md) [`009fede8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fe/009fede8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009fef28 ["INT_ADD", "register:40f0:8", ["const:9fef28:8", "const:4:8"]]
- 009fef28 ["CALL", null, ["callee:009fe684:8"]]
+ 009fef7c ["INT_ADD", "register:40f0:8", ["const:9fef7c:8", "const:4:8"]]
+ 009fef7c ["CALL", null, ["callee:009fe684:8"]]
- 009fef68 ["INT_ADD", "register:40f0:8", ["const:9fef68:8", "const:4:8"]]
- 009fef68 ["CALL", null, ["local:b0:8"]]
+ 009fefbc ["INT_ADD", "register:40f0:8", ["const:9fefbc:8", "const:4:8"]]
+ 009fefbc ["CALL", null, ["local:b0:8"]]
- 009fefa4 ["INT_ADD", "register:40f0:8", ["const:9fefa4:8", "const:4:8"]]
- 009fefa4 ["CALL", null, ["local:b0:8"]]
+ 009feff8 ["INT_ADD", "register:40f0:8", ["const:9feff8:8", "const:4:8"]]
+ 009feff8 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-f14f70f9f28ef108eb07956565a72ed7"></a>

### [`009ff3bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ff/009ff3bc.md) → [`009ff410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ff/009ff410.md) FUN_009ff410

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009f9ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f9/009f9ee0.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009f9f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f9/009f9f34.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ff3f8 ["COPY", "register:0:8", ["register:4040:8"]]
- 009ff3f8 ["INT_ADD", "register:40f0:8", ["const:9ff3f8:8", "const:4:8"]]
- 009ff3f8 ["CALLIND", null, ["register:0:8"]]
+ 009ff44c ["COPY", "register:0:8", ["register:4040:8"]]
+ 009ff44c ["INT_ADD", "register:40f0:8", ["const:9ff44c:8", "const:4:8"]]
+ 009ff44c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-494c12fcb8f6b92f07ac8105e0e32f27"></a>

### [`009fffa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ff/009fffa4.md) → [`009ffff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ff/009ffff8.md) FUN_009ffff8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ff40c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ff/009ff40c.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009ff460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ff/009ff460.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009fffe0 ["COPY", "register:0:8", ["register:4040:8"]]
- 009fffe0 ["INT_ADD", "register:40f0:8", ["const:9fffe0:8", "const:4:8"]]
- 009fffe0 ["CALLIND", null, ["register:0:8"]]
+ 00a00034 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a00034 ["INT_ADD", "register:40f0:8", ["const:a00034:8", "const:4:8"]]
+ 00a00034 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c038d0dad4ff9eefc54b43a096ec7b78"></a>

### [`00a001a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a00/00a001a0.md) → [`00a001f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a00/00a001f4.md) FUN_00a001f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9290.md) [`008b9298`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9298.md) [`00a83588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a83/00a83588.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b92e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92e8.md) [`008b92f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92f0.md) [`00a835f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a835f8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a001c4 ["INT_ADD", "register:40f0:8", ["const:a001c4:8", "const:4:8"]]
- 00a001c4 ["CALL", null, ["callee:008b92e8:8"]]
+ 00a00218 ["INT_ADD", "register:40f0:8", ["const:a00218:8", "const:4:8"]]
+ 00a00218 ["CALL", null, ["callee:008b92e8:8"]]
- 00a001d4 ["INT_ADD", "register:40f0:8", ["const:a001d4:8", "const:4:8"]]
- 00a001d4 ["CALL", null, ["callee:008b92e8:8"]]
+ 00a00228 ["INT_ADD", "register:40f0:8", ["const:a00228:8", "const:4:8"]]
+ 00a00228 ["CALL", null, ["callee:008b92e8:8"]]
- 00a001e4 ["INT_ADD", "register:40f0:8", ["const:a001e4:8", "const:4:8"]]
- 00a001e4 ["CALL", null, ["callee:008b92f0:8"]]
+ 00a00238 ["INT_ADD", "register:40f0:8", ["const:a00238:8", "const:4:8"]]
+ 00a00238 ["CALL", null, ["callee:008b92f0:8"]]
~~~


<a id="compare-a4fefb22f6ff33f23fe7935b73e96fad"></a>

### [`00a02ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a02/00a02ae4.md) → [`00a02b38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a02b38.md) FUN_00a02b38

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a02b20 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a02b20 ["INT_ADD", "register:40f0:8", ["const:a02b20:8", "const:4:8"]]
- 00a02b20 ["CALLIND", null, ["register:0:8"]]
+ 00a02b74 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a02b74 ["INT_ADD", "register:40f0:8", ["const:a02b74:8", "const:4:8"]]
+ 00a02b74 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-fd4859a9b0d5ee558e44f9818081a24e"></a>

### [`00a02b68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a02/00a02b68.md) → [`00a02bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a02bbc.md) FUN_00a02bbc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009fb44c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fb/009fb44c.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009fb4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fb/009fb4a0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a02ba4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a02ba4 ["INT_ADD", "register:40f0:8", ["const:a02ba4:8", "const:4:8"]]
- 00a02ba4 ["CALLIND", null, ["register:0:8"]]
+ 00a02bf8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a02bf8 ["INT_ADD", "register:40f0:8", ["const:a02bf8:8", "const:4:8"]]
+ 00a02bf8 ["CALLIND", null, ["register:0:8"]]
- 00a02bd4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a02bd4 ["INT_ADD", "register:40f0:8", ["const:a02bd4:8", "const:4:8"]]
- 00a02bd4 ["CALLIND", null, ["register:0:8"]]
+ 00a02c28 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a02c28 ["INT_ADD", "register:40f0:8", ["const:a02c28:8", "const:4:8"]]
+ 00a02c28 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-298cf22e71b05d460df7e5009164e616"></a>

### [`00a03974`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a03/00a03974.md) → [`00a039c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a039c8.md) FUN_00a039c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a02be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a02/00a02be8.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00a02c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a02c3c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a039b0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a039b0 ["INT_ADD", "register:40f0:8", ["const:a039b0:8", "const:4:8"]]
- 00a039b0 ["CALLIND", null, ["register:0:8"]]
+ 00a03a04 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a03a04 ["INT_ADD", "register:40f0:8", ["const:a03a04:8", "const:4:8"]]
+ 00a03a04 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-bb860755d4b0e2231ce49d30e6c82afe"></a>

### [`00a03cb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a03/00a03cb4.md) → [`00a03d08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a03d08.md) FUN_00a03d08

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a02be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a02/00a02be8.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00a02c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a02c3c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a03cf0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a03cf0 ["INT_ADD", "register:40f0:8", ["const:a03cf0:8", "const:4:8"]]
- 00a03cf0 ["CALLIND", null, ["register:0:8"]]
+ 00a03d44 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a03d44 ["INT_ADD", "register:40f0:8", ["const:a03d44:8", "const:4:8"]]
+ 00a03d44 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8aacdff8df31f8b642ac6863c84f12dc"></a>

### [`00a04e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a04/00a04e2c.md) → [`00a04e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a04/00a04e80.md) FUN_00a04e80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`008b97a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b97a0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`008b97f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b97f8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a04e50 ["INT_ADD", "register:40f0:8", ["const:a04e50:8", "const:4:8"]]
- 00a04e50 ["CALL", null, ["callee:008b97f8:8"]]
+ 00a04ea4 ["INT_ADD", "register:40f0:8", ["const:a04ea4:8", "const:4:8"]]
+ 00a04ea4 ["CALL", null, ["callee:008b97f8:8"]]
~~~


<a id="compare-584e4671ed33705415cf7c4a5c5be973"></a>

### [`00a06274`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a06274.md) → [`00a062c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a062c8.md) FUN_00a062c8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 8件 [`0059765c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/0059765c.md) [`00597778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597778.md) [`00597a4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a4c.md) [`00597a58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a58.md) [`00597a64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a64.md)
- 新版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 8件 [`0059769c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/0059769c.md) [`005977b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/005977b8.md) [`00597a8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597a8c.md) [`00597a98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597a98.md) [`00597aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597aa4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a0629c ["INT_ADD", "register:40f0:8", ["const:a0629c:8", "const:4:8"]]
- 00a0629c ["CALL", null, ["callee:00a06428:8"]]
+ 00a062f0 ["INT_ADD", "register:40f0:8", ["const:a062f0:8", "const:4:8"]]
+ 00a062f0 ["CALL", null, ["callee:00a06428:8"]]
- 00a06308 ["INT_ADD", "register:40f0:8", ["const:a06308:8", "const:4:8"]]
- 00a06308 ["CALL", null, ["callee:005977b8:8"]]
+ 00a0635c ["INT_ADD", "register:40f0:8", ["const:a0635c:8", "const:4:8"]]
+ 00a0635c ["CALL", null, ["callee:005977b8:8"]]
- 00a06310 ["INT_ADD", "register:40f0:8", ["const:a06310:8", "const:4:8"]]
- 00a06310 ["CALL", null, ["callee:0059769c:8"]]
+ 00a06364 ["INT_ADD", "register:40f0:8", ["const:a06364:8", "const:4:8"]]
+ 00a06364 ["CALL", null, ["callee:0059769c:8"]]
~~~


<a id="compare-359a6850900d9cdfd38973c25b4a5272"></a>

### [`00a063d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a063d4.md) → [`00a06428`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06428.md) FUN_00a06428

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) [`00a06274`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a06274.md) · 呼出先 9件 [`0059765c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/0059765c.md) [`00597778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597778.md) [`00597a4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a4c.md) [`00597a58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a58.md) [`00597a64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a64.md)
- 新版 呼出元 2件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`00a062c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a062c8.md) · 呼出先 9件 [`0059769c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/0059769c.md) [`005977b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/005977b8.md) [`00597a8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597a8c.md) [`00597a98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597a98.md) [`00597aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597aa4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a063f8 ["INT_ADD", "register:40f0:8", ["const:a063f8:8", "const:4:8"]]
- 00a063f8 ["CALL", null, ["callee:00851550:8"]]
+ 00a0644c ["INT_ADD", "register:40f0:8", ["const:a0644c:8", "const:4:8"]]
+ 00a0644c ["CALL", null, ["callee:00851550:8"]]
- 00a06404 ["INT_ADD", "register:40f0:8", ["const:a06404:8", "const:4:8"]]
- 00a06404 ["CALL", null, ["callee:00a871c0:8"]]
+ 00a06458 ["INT_ADD", "register:40f0:8", ["const:a06458:8", "const:4:8"]]
+ 00a06458 ["CALL", null, ["callee:00a871c0:8"]]
- 00a0647c ["INT_ADD", "register:40f0:8", ["const:a0647c:8", "const:4:8"]]
- 00a0647c ["CALL", null, ["callee:005977b8:8"]]
+ 00a064d0 ["INT_ADD", "register:40f0:8", ["const:a064d0:8", "const:4:8"]]
+ 00a064d0 ["CALL", null, ["callee:005977b8:8"]]
~~~


<a id="compare-d8ff1e8cd3ae67aa90fda0c0cf22439f"></a>

### [`00a06510`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a06510.md) → [`00a06564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06564.md) FUN_00a06564

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007efca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ef/007efca8.md) · 呼出先 4件 [`0071c460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071c/0071c460.md) [`00732c84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00732/00732c84.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008d35ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d3/008d35ac.md)
- 新版 呼出元 1件 [`007efd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efd00.md) · 呼出先 4件 [`0071c4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071c/0071c4b8.md) [`00732cdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00732/00732cdc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008d3600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d3/008d3600.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a06520 ["INT_ADD", "register:40f0:8", ["const:a06520:8", "const:4:8"]]
- 00a06520 ["CALL", null, ["callee:00851550:8"]]
+ 00a06574 ["INT_ADD", "register:40f0:8", ["const:a06574:8", "const:4:8"]]
+ 00a06574 ["CALL", null, ["callee:00851550:8"]]
- 00a06530 ["INT_ADD", "register:40f0:8", ["const:a06530:8", "const:4:8"]]
- 00a06530 ["CALL", null, ["callee:00732cdc:8"]]
+ 00a06584 ["INT_ADD", "register:40f0:8", ["const:a06584:8", "const:4:8"]]
+ 00a06584 ["CALL", null, ["callee:00732cdc:8"]]
- 00a06538 ["INT_ADD", "register:40f0:8", ["const:a06538:8", "const:4:8"]]
- 00a06538 ["CALL", null, ["callee:00851550:8"]]
+ 00a0658c ["INT_ADD", "register:40f0:8", ["const:a0658c:8", "const:4:8"]]
+ 00a0658c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-cde4e96b073a48d7c62b0fdd92981cf1"></a>

### [`00a065dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a065dc.md) → [`00a06630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06630.md) FUN_00a06630

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 2件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008d35ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d3/008d35ac.md)
- 新版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 2件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008d3600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d3/008d3600.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a065ec ["INT_ADD", "register:40f0:8", ["const:a065ec:8", "const:4:8"]]
- 00a065ec ["CALL", null, ["callee:00851550:8"]]
+ 00a06640 ["INT_ADD", "register:40f0:8", ["const:a06640:8", "const:4:8"]]
+ 00a06640 ["CALL", null, ["callee:00851550:8"]]
- 00a065f8 ["INT_ADD", "register:40f0:8", ["const:a065f8:8", "const:4:8"]]
- 00a065f8 ["CALL", null, ["callee:008d3600:8"]]
+ 00a0664c ["INT_ADD", "register:40f0:8", ["const:a0664c:8", "const:4:8"]]
+ 00a0664c ["CALL", null, ["callee:008d3600:8"]]
- 00a0660c ["INT_ADD", "register:40f0:8", ["const:a0660c:8", "const:4:8"]]
- 00a0660c ["CALL", null, ["callee:00851550:8"]]
+ 00a06660 ["INT_ADD", "register:40f0:8", ["const:a06660:8", "const:4:8"]]
+ 00a06660 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-2c4f7c3e8200ff8a82d6416c08f57079"></a>

### [`00a06674`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a06674.md) → [`00a066c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a066c8.md) FUN_00a066c8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) [`007ef320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ef/007ef320.md) · 呼出先 2件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008d35ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d3/008d35ac.md)
- 新版 呼出元 2件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`007ef378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007ef378.md) · 呼出先 2件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008d3600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d3/008d3600.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a06684 ["INT_ADD", "register:40f0:8", ["const:a06684:8", "const:4:8"]]
- 00a06684 ["CALL", null, ["callee:00851550:8"]]
+ 00a066d8 ["INT_ADD", "register:40f0:8", ["const:a066d8:8", "const:4:8"]]
+ 00a066d8 ["CALL", null, ["callee:00851550:8"]]
- 00a06690 ["INT_ADD", "register:40f0:8", ["const:a06690:8", "const:4:8"]]
- 00a06690 ["CALL", null, ["callee:008d3600:8"]]
+ 00a066e4 ["INT_ADD", "register:40f0:8", ["const:a066e4:8", "const:4:8"]]
+ 00a066e4 ["CALL", null, ["callee:008d3600:8"]]
- 00a066a4 ["INT_ADD", "register:40f0:8", ["const:a066a4:8", "const:4:8"]]
- 00a066a4 ["CALL", null, ["callee:00851550:8"]]
+ 00a066f8 ["INT_ADD", "register:40f0:8", ["const:a066f8:8", "const:4:8"]]
+ 00a066f8 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-0f48a1d77c525a8c0d36d4c06d3b3ae9"></a>

### [`00a0672c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a0672c.md) → [`00a06780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06780.md) FUN_00a06780

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) [`007ef320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ef/007ef320.md) · 呼出先 11件 [`00800378`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00800/00800378.md) [`00802cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802cec.md) [`00802d4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802d4c.md) [`00802d78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802d78.md) [`00802e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802e6c.md)
- 新版 呼出元 2件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`007ef378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007ef378.md) · 呼出先 11件 [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) [`00802d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802d44.md) [`00802da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802da4.md) [`00802dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802dd0.md) [`00802ec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802ec4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a06748 ["INT_ADD", "register:40f0:8", ["const:a06748:8", "const:4:8"]]
- 00a06748 ["CALL", null, ["callee:00851550:8"]]
+ 00a0679c ["INT_ADD", "register:40f0:8", ["const:a0679c:8", "const:4:8"]]
+ 00a0679c ["CALL", null, ["callee:00851550:8"]]
- 00a06758 ["INT_ADD", "register:40f0:8", ["const:a06758:8", "const:4:8"]]
- 00a06758 ["CALL", null, ["callee:00b3e4ac:8"]]
+ 00a067ac ["INT_ADD", "register:40f0:8", ["const:a067ac:8", "const:4:8"]]
+ 00a067ac ["CALL", null, ["callee:00b3e4ac:8"]]
- 00a06760 ["INT_ADD", "register:40f0:8", ["const:a06760:8", "const:4:8"]]
- 00a06760 ["CALL", null, ["callee:00802d44:8"]]
+ 00a067b4 ["INT_ADD", "register:40f0:8", ["const:a067b4:8", "const:4:8"]]
+ 00a067b4 ["CALL", null, ["callee:00802d44:8"]]
~~~


<a id="compare-fab0c1e87f8655bdf648f9658afa1fed"></a>

### [`00a06830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a06830.md) → [`00a06884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06884.md) FUN_00a06884

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) [`007df0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007df/007df0e8.md) · 呼出先 2件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00b3e410`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3e/00b3e410.md)
- 新版 呼出元 2件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 2件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b3e4ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3e/00b3e4ac.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a06838 ["INT_ADD", "register:40f0:8", ["const:a06838:8", "const:4:8"]]
- 00a06838 ["CALL", null, ["callee:00851550:8"]]
+ 00a0688c ["INT_ADD", "register:40f0:8", ["const:a0688c:8", "const:4:8"]]
+ 00a0688c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-9a6a4bc96b94d94985ce12d57e2b020f"></a>

### [`00a06850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a06850.md) → [`00a068a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a068a4.md) FUN_00a068a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a86e9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a86/00a86e9c.md) · 呼出先 7件 [`005976e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/005976e8.md) [`00597778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597778.md) [`00597a4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a4c.md) [`00597a58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a58.md) [`00597a64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a64.md)
- 新版 呼出元 1件 [`00a86f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a86/00a86f0c.md) · 呼出先 7件 [`00597728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597728.md) [`005977b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/005977b8.md) [`00597a8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597a8c.md) [`00597a98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597a98.md) [`00597aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597aa4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a068e0 ["INT_ADD", "register:40f0:8", ["const:a068e0:8", "const:4:8"]]
- 00a068e0 ["CALL", null, ["callee:005977b8:8"]]
+ 00a06934 ["INT_ADD", "register:40f0:8", ["const:a06934:8", "const:4:8"]]
+ 00a06934 ["CALL", null, ["callee:005977b8:8"]]
- 00a068e8 ["INT_ADD", "register:40f0:8", ["const:a068e8:8", "const:4:8"]]
- 00a068e8 ["CALL", null, ["callee:00597acc:8"]]
+ 00a0693c ["INT_ADD", "register:40f0:8", ["const:a0693c:8", "const:4:8"]]
+ 00a0693c ["CALL", null, ["callee:00597acc:8"]]
- 00a06914 ["INT_ADD", "register:40f0:8", ["const:a06914:8", "const:4:8"]]
- 00a06914 ["CALL", null, ["callee:00597728:8"]]
+ 00a06968 ["INT_ADD", "register:40f0:8", ["const:a06968:8", "const:4:8"]]
+ 00a06968 ["CALL", null, ["callee:00597728:8"]]
~~~


<a id="compare-1b29379b00b049ff8a5e80fe28bf1f9a"></a>

### [`00a06970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a06970.md) → [`00a069c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a069c4.md) FUN_00a069c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a2b2e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2b/00a2b2e8.md) · 呼出先 2件 [`00480b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480b38.md) [`00480be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480be8.md)
- 新版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 2件 [`00480b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480b78.md) [`00480c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480c28.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a06990 ["INT_ADD", "register:40f0:8", ["const:a06990:8", "const:4:8"]]
- 00a06990 ["CALL", null, ["callee:00480c28:8"]]
+ 00a069e4 ["INT_ADD", "register:40f0:8", ["const:a069e4:8", "const:4:8"]]
+ 00a069e4 ["CALL", null, ["callee:00480c28:8"]]
~~~


<a id="compare-c1835875c519f9feaf0ebc4bc69ed4ad"></a>

### [`00a069a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a069a8.md) → [`00a069fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a069fc.md) FUN_00a069fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a261bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a26/00a261bc.md) · 呼出先 2件 [`00480118`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480118.md) [`004801d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004801d8.md)
- 新版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 2件 [`00480158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480158.md) [`00480218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480218.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a069c0 ["INT_ADD", "register:40f0:8", ["const:a069c0:8", "const:4:8"]]
- 00a069c0 ["CALL", null, ["callee:00480218:8"]]
+ 00a06a14 ["INT_ADD", "register:40f0:8", ["const:a06a14:8", "const:4:8"]]
+ 00a06a14 ["CALL", null, ["callee:00480218:8"]]
- 00a069cc ["INT_ADD", "register:40f0:8", ["const:a069cc:8", "const:4:8"]]
- 00a069cc ["CALL", null, ["callee:00480158:8"]]
+ 00a06a20 ["INT_ADD", "register:40f0:8", ["const:a06a20:8", "const:4:8"]]
+ 00a06a20 ["CALL", null, ["callee:00480158:8"]]
~~~


<a id="compare-c11dcc73e97312b12eb0de91e867e391"></a>

### [`00a2a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2a/00a2a830.md) → [`00a2a884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2a/00a2a884.md) FUN_00a2a884

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a261bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a26/00a261bc.md) · 呼出先 14件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00480178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480178.md) [`004802f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004802f8.md) [`004803f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004803f0.md) [`00480744`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480744.md)
- 新版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 14件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004801b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/004801b8.md) [`00480338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480338.md) [`00480430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480430.md) [`00480784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480784.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a2a870 ["INT_ADD", "register:40f0:8", ["const:a2a870:8", "const:4:8"]]
- 00a2a870 ["CALL", null, ["callee:004801b8:8"]]
+ 00a2a8c4 ["INT_ADD", "register:40f0:8", ["const:a2a8c4:8", "const:4:8"]]
+ 00a2a8c4 ["CALL", null, ["callee:004801b8:8"]]
- 00a2a888 ["INT_ADD", "register:40f0:8", ["const:a2a888:8", "const:4:8"]]
- 00a2a888 ["CALL", null, ["callee:00676aa0:8"]]
+ 00a2a8dc ["INT_ADD", "register:40f0:8", ["const:a2a8dc:8", "const:4:8"]]
+ 00a2a8dc ["CALL", null, ["callee:00676aa0:8"]]
- 00a2a8b0 ["INT_ADD", "register:40f0:8", ["const:a2a8b0:8", "const:4:8"]]
- 00a2a8b0 ["CALL", null, ["callee:0043bbe4:8"]]
+ 00a2a904 ["INT_ADD", "register:40f0:8", ["const:a2a904:8", "const:4:8"]]
+ 00a2a904 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-e8dca1ef6d92300e0f643f865c20689a"></a>

### [`00a2ad8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2a/00a2ad8c.md) → [`00a2ade0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2a/00a2ade0.md) FUN_00a2ade0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a261bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a26/00a261bc.md) · 呼出先 14件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00480178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480178.md) [`004802f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004802f8.md) [`004803f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004803f0.md) [`00480744`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480744.md)
- 新版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 14件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004801b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/004801b8.md) [`00480338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480338.md) [`00480430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480430.md) [`00480784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480784.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a2adcc ["INT_ADD", "register:40f0:8", ["const:a2adcc:8", "const:4:8"]]
- 00a2adcc ["CALL", null, ["callee:004801b8:8"]]
+ 00a2ae20 ["INT_ADD", "register:40f0:8", ["const:a2ae20:8", "const:4:8"]]
+ 00a2ae20 ["CALL", null, ["callee:004801b8:8"]]
- 00a2ade4 ["INT_ADD", "register:40f0:8", ["const:a2ade4:8", "const:4:8"]]
- 00a2ade4 ["CALL", null, ["callee:00676aa0:8"]]
+ 00a2ae38 ["INT_ADD", "register:40f0:8", ["const:a2ae38:8", "const:4:8"]]
+ 00a2ae38 ["CALL", null, ["callee:00676aa0:8"]]
- 00a2ae0c ["INT_ADD", "register:40f0:8", ["const:a2ae0c:8", "const:4:8"]]
- 00a2ae0c ["CALL", null, ["callee:0043bbe4:8"]]
+ 00a2ae60 ["INT_ADD", "register:40f0:8", ["const:a2ae60:8", "const:4:8"]]
+ 00a2ae60 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-81b162bb2e227b293f9f8ce1541942ec"></a>

### [`00a2db54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2d/00a2db54.md) → [`00a2dba8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2d/00a2dba8.md) FUN_00a2dba8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a2b2e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2b/00a2b2e8.md) · 呼出先 6件 [`00480b90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480b90.md) [`00480d48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480d48.md) [`00480e28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480e28.md) [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`00691800`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00691/00691800.md)
- 新版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 6件 [`00480bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480bd0.md) [`00480d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480d88.md) [`00480e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480e68.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00691858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00691/00691858.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a2db94 ["INT_ADD", "register:40f0:8", ["const:a2db94:8", "const:4:8"]]
- 00a2db94 ["CALL", null, ["callee:00480bd0:8"]]
+ 00a2dbe8 ["INT_ADD", "register:40f0:8", ["const:a2dbe8:8", "const:4:8"]]
+ 00a2dbe8 ["CALL", null, ["callee:00480bd0:8"]]
- 00a2dbb0 ["INT_ADD", "register:40f0:8", ["const:a2dbb0:8", "const:4:8"]]
- 00a2dbb0 ["CALL", null, ["callee:00480bd0:8"]]
+ 00a2dc04 ["INT_ADD", "register:40f0:8", ["const:a2dc04:8", "const:4:8"]]
+ 00a2dc04 ["CALL", null, ["callee:00480bd0:8"]]
- 00a2dbe8 ["INT_ADD", "register:40f0:8", ["const:a2dbe8:8", "const:4:8"]]
- 00a2dbe8 ["CALL", null, ["callee:00480bd0:8"]]
+ 00a2dc3c ["INT_ADD", "register:40f0:8", ["const:a2dc3c:8", "const:4:8"]]
+ 00a2dc3c ["CALL", null, ["callee:00480bd0:8"]]
~~~


<a id="compare-16beb2983aaccc4037da6913bfdc603f"></a>

### [`00a2dddc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2d/00a2dddc.md) → [`00a2de30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2d/00a2de30.md) FUN_00a2de30

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a2b2e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2b/00a2b2e8.md) · 呼出先 6件 [`00480b90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480b90.md) [`00480d48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480d48.md) [`00480e28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480e28.md) [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`00691800`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00691/00691800.md)
- 新版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 6件 [`00480bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480bd0.md) [`00480d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480d88.md) [`00480e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480e68.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00691858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00691/00691858.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a2de1c ["INT_ADD", "register:40f0:8", ["const:a2de1c:8", "const:4:8"]]
- 00a2de1c ["CALL", null, ["callee:00480bd0:8"]]
+ 00a2de70 ["INT_ADD", "register:40f0:8", ["const:a2de70:8", "const:4:8"]]
+ 00a2de70 ["CALL", null, ["callee:00480bd0:8"]]
- 00a2de38 ["INT_ADD", "register:40f0:8", ["const:a2de38:8", "const:4:8"]]
- 00a2de38 ["CALL", null, ["callee:00480bd0:8"]]
+ 00a2de8c ["INT_ADD", "register:40f0:8", ["const:a2de8c:8", "const:4:8"]]
+ 00a2de8c ["CALL", null, ["callee:00480bd0:8"]]
- 00a2de70 ["INT_ADD", "register:40f0:8", ["const:a2de70:8", "const:4:8"]]
- 00a2de70 ["CALL", null, ["callee:00480bd0:8"]]
+ 00a2dec4 ["INT_ADD", "register:40f0:8", ["const:a2dec4:8", "const:4:8"]]
+ 00a2dec4 ["CALL", null, ["callee:00480bd0:8"]]
~~~


<a id="compare-668943f435e240f0477bf5fdbff2d0f5"></a>

### [`00a2e9c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2e/00a2e9c8.md) → [`00a2ea1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2e/00a2ea1c.md) FUN_00a2ea1c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a2b2e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2b/00a2b2e8.md) · 呼出先 4件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00a2eaf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2e/00a2eaf4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00a2eb48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2e/00a2eb48.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a2ea24 ["INT_ADD", "register:40f0:8", ["const:a2ea24:8", "const:4:8"]]
- 00a2ea24 ["CALL", null, ["callee:00a2eb48:8"]]
+ 00a2ea78 ["INT_ADD", "register:40f0:8", ["const:a2ea78:8", "const:4:8"]]
+ 00a2ea78 ["CALL", null, ["callee:00a2eb48:8"]]
- 00a2ea44 ["INT_ADD", "register:40f0:8", ["const:a2ea44:8", "const:4:8"]]
- 00a2ea44 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a2ea98 ["INT_ADD", "register:40f0:8", ["const:a2ea98:8", "const:4:8"]]
+ 00a2ea98 ["CALL", null, ["callee:00c57f60:8"]]
- 00a2ea88 ["INT_ADD", "register:40f0:8", ["const:a2ea88:8", "const:4:8"]]
- 00a2ea88 ["CALL", null, ["callee:0043bbe4:8"]]
+ 00a2eadc ["INT_ADD", "register:40f0:8", ["const:a2eadc:8", "const:4:8"]]
+ 00a2eadc ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-98df26d6e1b083c24c76081ca382d977"></a>

### [`00a2ec9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2e/00a2ec9c.md) → [`00a2ecf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2e/00a2ecf0.md) FUN_00a2ecf0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a2b2e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2b/00a2b2e8.md) · 呼出先 4件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00a2edc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2e/00a2edc0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00a2ee14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2e/00a2ee14.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a2ecf8 ["INT_ADD", "register:40f0:8", ["const:a2ecf8:8", "const:4:8"]]
- 00a2ecf8 ["CALL", null, ["callee:00a2ee14:8"]]
+ 00a2ed4c ["INT_ADD", "register:40f0:8", ["const:a2ed4c:8", "const:4:8"]]
+ 00a2ed4c ["CALL", null, ["callee:00a2ee14:8"]]
- 00a2ed18 ["INT_ADD", "register:40f0:8", ["const:a2ed18:8", "const:4:8"]]
- 00a2ed18 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a2ed6c ["INT_ADD", "register:40f0:8", ["const:a2ed6c:8", "const:4:8"]]
+ 00a2ed6c ["CALL", null, ["callee:00c57f60:8"]]
- 00a2ed54 ["INT_ADD", "register:40f0:8", ["const:a2ed54:8", "const:4:8"]]
- 00a2ed54 ["CALL", null, ["callee:0043bbe4:8"]]
+ 00a2eda8 ["INT_ADD", "register:40f0:8", ["const:a2eda8:8", "const:4:8"]]
+ 00a2eda8 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-1701b3be728696da75682c36c311019f"></a>

### [`00a2ef68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2e/00a2ef68.md) → [`00a2efbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2e/00a2efbc.md) FUN_00a2efbc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a261bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a26/00a261bc.md) · 呼出先 3件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0086c2b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c2b4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0086c30c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c30c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a2f0a8 ["INT_ADD", "register:40f0:8", ["const:a2f0a8:8", "const:4:8"]]
- 00a2f0a8 ["CALL", null, ["callee:0043bbe4:8"]]
+ 00a2f0fc ["INT_ADD", "register:40f0:8", ["const:a2f0fc:8", "const:4:8"]]
+ 00a2f0fc ["CALL", null, ["callee:0043bbe4:8"]]
- 00a2f164 ["INT_ADD", "register:40f0:8", ["const:a2f164:8", "const:4:8"]]
- 00a2f164 ["CALL", null, ["callee:0086c30c:8"]]
+ 00a2f1b8 ["INT_ADD", "register:40f0:8", ["const:a2f1b8:8", "const:4:8"]]
+ 00a2f1b8 ["CALL", null, ["callee:0086c30c:8"]]
- 00a2f188 ["INT_ADD", "register:40f0:8", ["const:a2f188:8", "const:4:8"]]
- 00a2f188 ["CALL", null, ["callee:0086c30c:8"]]
+ 00a2f1dc ["INT_ADD", "register:40f0:8", ["const:a2f1dc:8", "const:4:8"]]
+ 00a2f1dc ["CALL", null, ["callee:0086c30c:8"]]
~~~


<a id="compare-85e461ff16d62ee897e9dafcf291c384"></a>

### [`00a30430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a30/00a30430.md) → [`00a30484`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a30/00a30484.md) FUN_00a30484

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`008959d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00895/008959d0.md) [`0089bc8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089b/0089bc8c.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`00895a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00895/00895a28.md) [`0089bce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089bce4.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a30438 ["INT_ADD", "register:40f0:8", ["const:a30438:8", "const:4:8"]]
- 00a30438 ["CALL", null, ["callee:00851550:8"]]
+ 00a3048c ["INT_ADD", "register:40f0:8", ["const:a3048c:8", "const:4:8"]]
+ 00a3048c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-43f1f63577f16b4d524fdb745623843f"></a>

### [`00a31b1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a31/00a31b1c.md) → [`00a31b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a31/00a31b70.md) FUN_00a31b70

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 11件 [`005e0ea8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e0/005e0ea8.md) [`00605254`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00605/00605254.md) [`00626a34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00626/00626a34.md) [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`007102d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) · 呼出先 1件 [`00802b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802b58.md)
- 新版 呼出元 11件 [`005e0ee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0ee8.md) [`00605294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/00605294.md) [`00626a74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00626/00626a74.md) [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) · 呼出先 1件 [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a31b30 ["INT_ADD", "register:40f0:8", ["const:a31b30:8", "const:4:8"]]
- 00a31b30 ["CALL", null, ["callee:00802bb0:8"]]
+ 00a31b84 ["INT_ADD", "register:40f0:8", ["const:a31b84:8", "const:4:8"]]
+ 00a31b84 ["CALL", null, ["callee:00802bb0:8"]]
~~~


<a id="compare-ce8763e896c7b52fe0a3beef8f8e32eb"></a>

### [`00a31b78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a31/00a31b78.md) → [`00a31bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a31/00a31bcc.md) FUN_00a31bcc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007ca06c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ca/007ca06c.md) [`00a9edec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9e/00a9edec.md) · 呼出先 3件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00802b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802b58.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 2件 [`007ca0c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ca/007ca0c4.md) [`00a9ee5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9e/00a9ee5c.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a31ba8 ["INT_ADD", "register:40f0:8", ["const:a31ba8:8", "const:4:8"]]
- 00a31ba8 ["CALL", null, ["callee:00802bb0:8"]]
+ 00a31bfc ["INT_ADD", "register:40f0:8", ["const:a31bfc:8", "const:4:8"]]
+ 00a31bfc ["CALL", null, ["callee:00802bb0:8"]]
- 00a31c2c ["INT_ADD", "register:40f0:8", ["const:a31c2c:8", "const:4:8"]]
- 00a31c2c ["CALL", null, ["callee:00c57f60:8"]]
+ 00a31c80 ["INT_ADD", "register:40f0:8", ["const:a31c80:8", "const:4:8"]]
+ 00a31c80 ["CALL", null, ["callee:00c57f60:8"]]
- 00a31c80 ["INT_ADD", "register:40f0:8", ["const:a31c80:8", "const:4:8"]]
- 00a31c80 ["CALL", null, ["callee:0043bbe4:8"]]
+ 00a31cd4 ["INT_ADD", "register:40f0:8", ["const:a31cd4:8", "const:4:8"]]
+ 00a31cd4 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-a70fda94954f6096121cb8e42d28be0b"></a>

### [`00a31cb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a31/00a31cb0.md) → [`00a31d04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a31/00a31d04.md) FUN_00a31d04

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a31f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a31/00a31f54.md) · 呼出先 3件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00802b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802b58.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`00a31fa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a31/00a31fa8.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a31cd4 ["INT_ADD", "register:40f0:8", ["const:a31cd4:8", "const:4:8"]]
- 00a31cd4 ["CALL", null, ["callee:00802bb0:8"]]
+ 00a31d28 ["INT_ADD", "register:40f0:8", ["const:a31d28:8", "const:4:8"]]
+ 00a31d28 ["CALL", null, ["callee:00802bb0:8"]]
- 00a31d50 ["INT_ADD", "register:40f0:8", ["const:a31d50:8", "const:4:8"]]
- 00a31d50 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a31da4 ["INT_ADD", "register:40f0:8", ["const:a31da4:8", "const:4:8"]]
+ 00a31da4 ["CALL", null, ["callee:00c57f60:8"]]
- 00a31da4 ["INT_ADD", "register:40f0:8", ["const:a31da4:8", "const:4:8"]]
- 00a31da4 ["CALL", null, ["callee:0043bbe4:8"]]
+ 00a31df8 ["INT_ADD", "register:40f0:8", ["const:a31df8:8", "const:4:8"]]
+ 00a31df8 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-9ffc5945d2ff6a7fd7a770bb83d2c3a5"></a>

### [`00a31f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a31/00a31f54.md) → [`00a31fa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a31/00a31fa8.md) FUN_00a31fa8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0070ea5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0070e/0070ea5c.md) [`007102d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00710/007102d8.md) [`007119f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00711/007119f0.md) · 呼出先 1件 [`00a31cb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a31/00a31cb0.md)
- 新版 呼出元 3件 [`0070eab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070eab4.md) [`00710330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00710/00710330.md) [`00711a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00711/00711a48.md) · 呼出先 1件 [`00a31d04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a31/00a31d04.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a31f64 ["INT_ADD", "register:40f0:8", ["const:a31f64:8", "const:4:8"]]
- 00a31f64 ["CALL", null, ["callee:00a31d04:8"]]
+ 00a31fb8 ["INT_ADD", "register:40f0:8", ["const:a31fb8:8", "const:4:8"]]
+ 00a31fb8 ["CALL", null, ["callee:00a31d04:8"]]
~~~


<a id="compare-6f48a186bc1fd858e89dd45824565bef"></a>

### [`00a31f98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a31/00a31f98.md) → [`00a31fec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a31/00a31fec.md) FUN_00a31fec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a261bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a26/00a261bc.md) · 呼出先 1件 [`004802f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004802f8.md)
- 新版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 1件 [`00480338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480338.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a31fac ["INT_ADD", "register:40f0:8", ["const:a31fac:8", "const:4:8"]]
- 00a31fac ["CALL", null, ["callee:00480338:8"]]
+ 00a32000 ["INT_ADD", "register:40f0:8", ["const:a32000:8", "const:4:8"]]
+ 00a32000 ["CALL", null, ["callee:00480338:8"]]
~~~


<a id="compare-699081bbc5b45c136f78ababe230cdbd"></a>

### [`00a32364`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a32/00a32364.md) → [`00a323b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a32/00a323b8.md) FUN_00a323b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0084e59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0084e/0084e59c.md) · 呼出先 1件 [`005c3e7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c3/005c3e7c.md)
- 新版 呼出元 1件 [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) · 呼出先 1件 [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a32380 ["INT_ADD", "register:40f0:8", ["const:a32380:8", "const:4:8"]]
- 00a32380 ["CALL", null, ["callee:005c3ebc:8"]]
+ 00a323d4 ["INT_ADD", "register:40f0:8", ["const:a323d4:8", "const:4:8"]]
+ 00a323d4 ["CALL", null, ["callee:005c3ebc:8"]]
~~~


<a id="compare-aafc48131038534b1afc11a88b56ec0d"></a>

### [`00a323a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a32/00a323a0.md) → [`00a323f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a32/00a323f4.md) FUN_00a323f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0066ae50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0066a/0066ae50.md) · 呼出先 2件 [`00719738`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00719/00719738.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`0066ae90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066ae90.md) · 呼出先 2件 [`00719790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00719/00719790.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a32400 ["INT_ADD", "register:40f0:8", ["const:a32400:8", "const:4:8"]]
- 00a32400 ["CALL", null, ["callee:00719790:8"]]
+ 00a32454 ["INT_ADD", "register:40f0:8", ["const:a32454:8", "const:4:8"]]
+ 00a32454 ["CALL", null, ["callee:00719790:8"]]
- 00a32448 ["INT_ADD", "register:40f0:8", ["const:a32448:8", "const:4:8"]]
- 00a32448 ["CALL", null, ["callee:00719790:8"]]
+ 00a3249c ["INT_ADD", "register:40f0:8", ["const:a3249c:8", "const:4:8"]]
+ 00a3249c ["CALL", null, ["callee:00719790:8"]]
- 00a32474 ["INT_ADD", "register:40f0:8", ["const:a32474:8", "const:4:8"]]
- 00a32474 ["CALL", null, ["callee:00c57fb0:8"]]
+ 00a324c8 ["INT_ADD", "register:40f0:8", ["const:a324c8:8", "const:4:8"]]
+ 00a324c8 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-6da218b52db30600fa2d246c356662e3"></a>

### [`00a32478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a32/00a32478.md) → [`00a324cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a32/00a324cc.md) FUN_00a324cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009d0320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d0/009d0320.md) · 呼出先 2件 [`00719738`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00719/00719738.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) · 呼出先 2件 [`00719790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00719/00719790.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a324d0 ["INT_ADD", "register:40f0:8", ["const:a324d0:8", "const:4:8"]]
- 00a324d0 ["CALL", null, ["callee:00719790:8"]]
+ 00a32524 ["INT_ADD", "register:40f0:8", ["const:a32524:8", "const:4:8"]]
+ 00a32524 ["CALL", null, ["callee:00719790:8"]]
- 00a324fc ["INT_ADD", "register:40f0:8", ["const:a324fc:8", "const:4:8"]]
- 00a324fc ["CALL", null, ["callee:00c57fb0:8"]]
+ 00a32550 ["INT_ADD", "register:40f0:8", ["const:a32550:8", "const:4:8"]]
+ 00a32550 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-b5ecc01af5fb8870f101f8301ce241c8"></a>

### [`00a32a04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a32/00a32a04.md) → [`00a32a58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a32/00a32a58.md) FUN_00a32a58

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 12件 [`006bed5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006be/006bed5c.md) [`00773894`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00773/00773894.md) [`007cb5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cb/007cb5e0.md) [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) [`007df0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007df/007df0e8.md) · 呼出先 5件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00802b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802b58.md) [`00802ca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802ca8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58450`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58450.md)
- 新版 呼出元 12件 [`006bedb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006be/006bedb4.md) [`007738ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00773/007738ec.md) [`007cb638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cb/007cb638.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 5件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md) [`00802d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802d00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58520.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a32ae0 ["INT_ADD", "register:40f0:8", ["const:a32ae0:8", "const:4:8"]]
- 00a32ae0 ["CALL", null, ["callee:00802bb0:8"]]
+ 00a32b34 ["INT_ADD", "register:40f0:8", ["const:a32b34:8", "const:4:8"]]
+ 00a32b34 ["CALL", null, ["callee:00802bb0:8"]]
- 00a32af4 ["INT_ADD", "register:40f0:8", ["const:a32af4:8", "const:4:8"]]
- 00a32af4 ["CALL", null, ["callee:00802d00:8"]]
+ 00a32b48 ["INT_ADD", "register:40f0:8", ["const:a32b48:8", "const:4:8"]]
+ 00a32b48 ["CALL", null, ["callee:00802d00:8"]]
- 00a32b48 ["INT_ADD", "register:40f0:8", ["const:a32b48:8", "const:4:8"]]
- 00a32b48 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a32b9c ["INT_ADD", "register:40f0:8", ["const:a32b9c:8", "const:4:8"]]
+ 00a32b9c ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-4cad789a7e910f5fec24fef662598fd0"></a>

### [`00a32d94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a32/00a32d94.md) → [`00a32de8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a32/00a32de8.md) FUN_00a32de8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007bda44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bda44.md) [`007df0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007df/007df0e8.md) · 呼出先 1件 [`00802b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802b58.md)
- 新版 呼出元 2件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 1件 [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a32dbc ["INT_ADD", "register:40f0:8", ["const:a32dbc:8", "const:4:8"]]
- 00a32dbc ["CALL", null, ["callee:00802bb0:8"]]
+ 00a32e10 ["INT_ADD", "register:40f0:8", ["const:a32e10:8", "const:4:8"]]
+ 00a32e10 ["CALL", null, ["callee:00802bb0:8"]]
~~~


<a id="compare-d5f1fafe27e4eae5d9885e50c7bc071c"></a>

### [`00a32e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a32/00a32e08.md) → [`00a32e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a32/00a32e5c.md) FUN_00a32e5c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 7件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`00611e60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00611/00611e60.md) [`007efbb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ef/007efbb0.md) [`00934078`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00934/00934078.md) [`00a47f00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a47/00a47f00.md) · 呼出先 1件 [`00802b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802b58.md)
- 新版 呼出元 7件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00611ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00611/00611ea0.md) [`007efc08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efc08.md) [`009340cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/009340cc.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 1件 [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a32e1c ["INT_ADD", "register:40f0:8", ["const:a32e1c:8", "const:4:8"]]
- 00a32e1c ["CALL", null, ["callee:00802bb0:8"]]
+ 00a32e70 ["INT_ADD", "register:40f0:8", ["const:a32e70:8", "const:4:8"]]
+ 00a32e70 ["CALL", null, ["callee:00802bb0:8"]]
~~~


<a id="compare-5ebe037e58fddf3cd6bc79e7b02dac89"></a>

### [`00a32e98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a32/00a32e98.md) → [`00a32eec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a32/00a32eec.md) FUN_00a32eec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 8件 [`007cb5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cb/007cb5e0.md) [`007df0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007df/007df0e8.md) [`007ef684`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ef/007ef684.md) [`00802d78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802d78.md) [`009d992c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d9/009d992c.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 8件 [`007cb638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cb/007cb638.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) [`007ef6dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007ef6dc.md) [`00802dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802dd0.md) [`009d9980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d9/009d9980.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a32f30 ["INT_ADD", "register:40f0:8", ["const:a32f30:8", "const:4:8"]]
- 00a32f30 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a32f84 ["INT_ADD", "register:40f0:8", ["const:a32f84:8", "const:4:8"]]
+ 00a32f84 ["CALL", null, ["callee:00c57f60:8"]]
- 00a32f64 ["INT_ADD", "register:40f0:8", ["const:a32f64:8", "const:4:8"]]
- 00a32f64 ["CALL", null, ["callee:0043bbe4:8"]]
+ 00a32fb8 ["INT_ADD", "register:40f0:8", ["const:a32fb8:8", "const:4:8"]]
+ 00a32fb8 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-41f226873f9474000671ed17486f1744"></a>

### [`00a333d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a33/00a333d4.md) → [`00a33428`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a33/00a33428.md) FUN_00a33428

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a261bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a26/00a261bc.md) · 呼出先 11件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00480118`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480118.md) [`004801d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004801d8.md)
- 新版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 11件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00480158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480158.md) [`00480218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480218.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a33400 ["INT_ADD", "register:40f0:8", ["const:a33400:8", "const:4:8"]]
- 00a33400 ["CALL", null, ["callee:00480218:8"]]
+ 00a33454 ["INT_ADD", "register:40f0:8", ["const:a33454:8", "const:4:8"]]
+ 00a33454 ["CALL", null, ["callee:00480218:8"]]
- 00a3340c ["INT_ADD", "register:40f0:8", ["const:a3340c:8", "const:4:8"]]
- 00a3340c ["CALL", null, ["callee:00480784:8"]]
+ 00a33460 ["INT_ADD", "register:40f0:8", ["const:a33460:8", "const:4:8"]]
+ 00a33460 ["CALL", null, ["callee:00480784:8"]]
- 00a33418 ["INT_ADD", "register:40f0:8", ["const:a33418:8", "const:4:8"]]
- 00a33418 ["CALL", null, ["callee:00480338:8"]]
+ 00a3346c ["INT_ADD", "register:40f0:8", ["const:a3346c:8", "const:4:8"]]
+ 00a3346c ["CALL", null, ["callee:00480338:8"]]
~~~


<a id="compare-95ad2269ce279359f5dd61e16b34f6e8"></a>

### [`00a3362c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a33/00a3362c.md) → [`00a33680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a33/00a33680.md) FUN_00a33680

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a2b2e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2b/00a2b2e8.md) · 呼出先 9件 [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00480b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480b38.md) [`00480be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480be8.md) [`00480d48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480d48.md) [`00481098`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00481/00481098.md)
- 新版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 9件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00480b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480b78.md) [`00480c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480c28.md) [`00480d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480d88.md) [`004810d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/004810d8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a3366c ["INT_ADD", "register:40f0:8", ["const:a3366c:8", "const:4:8"]]
- 00a3366c ["CALL", null, ["callee:00480c28:8"]]
+ 00a336c0 ["INT_ADD", "register:40f0:8", ["const:a336c0:8", "const:4:8"]]
+ 00a336c0 ["CALL", null, ["callee:00480c28:8"]]
- 00a33678 ["INT_ADD", "register:40f0:8", ["const:a33678:8", "const:4:8"]]
- 00a33678 ["CALL", null, ["callee:004810d8:8"]]
+ 00a336cc ["INT_ADD", "register:40f0:8", ["const:a336cc:8", "const:4:8"]]
+ 00a336cc ["CALL", null, ["callee:004810d8:8"]]
- 00a33684 ["INT_ADD", "register:40f0:8", ["const:a33684:8", "const:4:8"]]
- 00a33684 ["CALL", null, ["callee:00480d88:8"]]
+ 00a336d8 ["INT_ADD", "register:40f0:8", ["const:a336d8:8", "const:4:8"]]
+ 00a336d8 ["CALL", null, ["callee:00480d88:8"]]
~~~


<a id="compare-646c36c504ac6f7cf7e9876cc8295618"></a>

### [`00a33c1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a33/00a33c1c.md) → [`00a33c70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a33/00a33c70.md) FUN_00a33c70

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 12件 [`0062c0c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0062c/0062c0c0.md) [`0069a504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069a/0069a504.md) [`00732cf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00732/00732cf8.md) [`00745930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00745/00745930.md) [`007473e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00747/007473e0.md) · 呼出先 3件 [`00597778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597778.md) [`00597a8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a8c.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 12件 [`0062c100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0062c/0062c100.md) [`0069a55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a55c.md) [`00732d50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00732/00732d50.md) [`00745988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00745/00745988.md) [`00747438`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00747/00747438.md) · 呼出先 3件 [`005977b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/005977b8.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a33c50 ["INT_ADD", "register:40f0:8", ["const:a33c50:8", "const:4:8"]]
- 00a33c50 ["CALL", null, ["callee:005977b8:8"]]
+ 00a33ca4 ["INT_ADD", "register:40f0:8", ["const:a33ca4:8", "const:4:8"]]
+ 00a33ca4 ["CALL", null, ["callee:005977b8:8"]]
- 00a33c58 ["INT_ADD", "register:40f0:8", ["const:a33c58:8", "const:4:8"]]
- 00a33c58 ["CALL", null, ["callee:00597acc:8"]]
+ 00a33cac ["INT_ADD", "register:40f0:8", ["const:a33cac:8", "const:4:8"]]
+ 00a33cac ["CALL", null, ["callee:00597acc:8"]]
- 00a33c80 ["INT_ADD", "register:40f0:8", ["const:a33c80:8", "const:4:8"]]
- 00a33c80 ["CALL", null, ["callee:00c57fb0:8"]]
+ 00a33cd4 ["INT_ADD", "register:40f0:8", ["const:a33cd4:8", "const:4:8"]]
+ 00a33cd4 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-1fc40f0b40bd17a28479ad8b71b2b140"></a>

### [`00a33cac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a33/00a33cac.md) → [`00a33d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a33/00a33d00.md) FUN_00a33d00

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a33f7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a33/00a33f7c.md) · 呼出先 2件 [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00a38cc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a38/00a38cc4.md)
- 新版 呼出元 1件 [`00a33fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a33/00a33fd0.md) · 呼出先 2件 [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00a38d18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a38d18.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a33ce0 ["INT_ADD", "register:40f0:8", ["const:a33ce0:8", "const:4:8"]]
- 00a33ce0 ["CALL", null, ["callee:0048797c:8"]]
+ 00a33d34 ["INT_ADD", "register:40f0:8", ["const:a33d34:8", "const:4:8"]]
+ 00a33d34 ["CALL", null, ["callee:0048797c:8"]]
- 00a33cfc ["INT_ADD", "register:40f0:8", ["const:a33cfc:8", "const:4:8"]]
- 00a33cfc ["CALL", null, ["callee:0048797c:8"]]
+ 00a33d50 ["INT_ADD", "register:40f0:8", ["const:a33d50:8", "const:4:8"]]
+ 00a33d50 ["CALL", null, ["callee:0048797c:8"]]
- 00a33d2c ["INT_ADD", "register:40f0:8", ["const:a33d2c:8", "const:4:8"]]
- 00a33d2c ["CALL", null, ["callee:0048797c:8"]]
+ 00a33d80 ["INT_ADD", "register:40f0:8", ["const:a33d80:8", "const:4:8"]]
+ 00a33d80 ["CALL", null, ["callee:0048797c:8"]]
~~~


<a id="compare-8e04a8eae1a0b4e87e0bc8c343fe8777"></a>

### [`00a33f7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a33/00a33f7c.md) → [`00a33fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a33/00a33fd0.md) FUN_00a33fd0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00a35594`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a35/00a35594.md) [`00a3611c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a36/00a3611c.md) [`00a36b18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a36/00a36b18.md) · 呼出先 4件 [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00a33cac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a33/00a33cac.md) [`00a38e58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a38/00a38e58.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`00a355e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a35/00a355e8.md) [`00a36170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a36/00a36170.md) [`00a36b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a36/00a36b6c.md) · 呼出先 4件 [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00a33d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a33/00a33d00.md) [`00a38eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a38eac.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a33fa8 ["INT_ADD", "register:40f0:8", ["const:a33fa8:8", "const:4:8"]]
- 00a33fa8 ["CALL", null, ["callee:0048797c:8"]]
+ 00a33ffc ["INT_ADD", "register:40f0:8", ["const:a33ffc:8", "const:4:8"]]
+ 00a33ffc ["CALL", null, ["callee:0048797c:8"]]
- 00a34010 ["INT_ADD", "register:40f0:8", ["const:a34010:8", "const:4:8"]]
- 00a34010 ["CALL", null, ["callee:0048797c:8"]]
+ 00a34064 ["INT_ADD", "register:40f0:8", ["const:a34064:8", "const:4:8"]]
+ 00a34064 ["CALL", null, ["callee:0048797c:8"]]
- 00a3403c ["INT_ADD", "register:40f0:8", ["const:a3403c:8", "const:4:8"]]
- 00a3403c ["CALL", null, ["callee:0048797c:8"]]
+ 00a34090 ["INT_ADD", "register:40f0:8", ["const:a34090:8", "const:4:8"]]
+ 00a34090 ["CALL", null, ["callee:0048797c:8"]]
~~~


<a id="compare-6db015afb968f0cab41b0996a89701ee"></a>

### [`00a34694`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a34/00a34694.md) → [`00a346e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a34/00a346e8.md) FUN_00a346e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0086588c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00865/0086588c.md) · 呼出先 3件 [`00597778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597778.md) [`00597a8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a8c.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`008658e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/008658e4.md) · 呼出先 3件 [`005977b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/005977b8.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a346d4 ["INT_ADD", "register:40f0:8", ["const:a346d4:8", "const:4:8"]]
- 00a346d4 ["CALL", null, ["callee:005977b8:8"]]
+ 00a34728 ["INT_ADD", "register:40f0:8", ["const:a34728:8", "const:4:8"]]
+ 00a34728 ["CALL", null, ["callee:005977b8:8"]]
- 00a346dc ["INT_ADD", "register:40f0:8", ["const:a346dc:8", "const:4:8"]]
- 00a346dc ["CALL", null, ["callee:00597acc:8"]]
+ 00a34730 ["INT_ADD", "register:40f0:8", ["const:a34730:8", "const:4:8"]]
+ 00a34730 ["CALL", null, ["callee:00597acc:8"]]
- 00a34708 ["INT_ADD", "register:40f0:8", ["const:a34708:8", "const:4:8"]]
- 00a34708 ["CALL", null, ["callee:005977b8:8"]]
+ 00a3475c ["INT_ADD", "register:40f0:8", ["const:a3475c:8", "const:4:8"]]
+ 00a3475c ["CALL", null, ["callee:005977b8:8"]]
~~~


<a id="compare-082d81bfd3c8d15c3918d7fe29a44be1"></a>

### [`00a34750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a34/00a34750.md) → [`00a347a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a34/00a347a4.md) FUN_00a347a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`009d0320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d0/009d0320.md) [`009d3420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d3/009d3420.md) [`009d3930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d3/009d3930.md) [`009d3af4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d3/009d3af4.md) · 呼出先 10件 [`005976e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/005976e8.md) [`00597778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597778.md) [`00597a4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a4c.md) [`00597a58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a58.md) [`00597a64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a64.md)
- 新版 呼出元 4件 [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) [`009d3474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d3/009d3474.md) [`009d3984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d3/009d3984.md) [`009d3b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d3/009d3b48.md) · 呼出先 10件 [`00597728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597728.md) [`005977b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/005977b8.md) [`00597a8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597a8c.md) [`00597a98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597a98.md) [`00597aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597aa4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a34798 ["INT_ADD", "register:40f0:8", ["const:a34798:8", "const:4:8"]]
- 00a34798 ["CALL", null, ["callee:00597728:8"]]
+ 00a347ec ["INT_ADD", "register:40f0:8", ["const:a347ec:8", "const:4:8"]]
+ 00a347ec ["CALL", null, ["callee:00597728:8"]]
- 00a347b4 ["INT_ADD", "register:40f0:8", ["const:a347b4:8", "const:4:8"]]
- 00a347b4 ["CALL", null, ["callee:005977b8:8"]]
+ 00a34808 ["INT_ADD", "register:40f0:8", ["const:a34808:8", "const:4:8"]]
+ 00a34808 ["CALL", null, ["callee:005977b8:8"]]
- 00a347bc ["INT_ADD", "register:40f0:8", ["const:a347bc:8", "const:4:8"]]
- 00a347bc ["CALL", null, ["callee:00597acc:8"]]
+ 00a34810 ["INT_ADD", "register:40f0:8", ["const:a34810:8", "const:4:8"]]
+ 00a34810 ["CALL", null, ["callee:00597acc:8"]]
~~~


<a id="compare-62aedab89190655c0d442f231d49fb63"></a>

### [`00a34e14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a34/00a34e14.md) → [`00a34e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a34/00a34e68.md) FUN_00a34e68

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009d0320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d0/009d0320.md) · 呼出先 10件 [`005976e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/005976e8.md) [`00597778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597778.md) [`00597a4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a4c.md) [`00597a58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a58.md) [`00597a64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a64.md)
- 新版 呼出元 1件 [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) · 呼出先 10件 [`00597728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597728.md) [`005977b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/005977b8.md) [`00597a8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597a8c.md) [`00597a98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597a98.md) [`00597aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597aa4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a34e5c ["INT_ADD", "register:40f0:8", ["const:a34e5c:8", "const:4:8"]]
- 00a34e5c ["CALL", null, ["callee:00597728:8"]]
+ 00a34eb0 ["INT_ADD", "register:40f0:8", ["const:a34eb0:8", "const:4:8"]]
+ 00a34eb0 ["CALL", null, ["callee:00597728:8"]]
- 00a34e78 ["INT_ADD", "register:40f0:8", ["const:a34e78:8", "const:4:8"]]
- 00a34e78 ["CALL", null, ["callee:005977b8:8"]]
+ 00a34ecc ["INT_ADD", "register:40f0:8", ["const:a34ecc:8", "const:4:8"]]
+ 00a34ecc ["CALL", null, ["callee:005977b8:8"]]
- 00a34e80 ["INT_ADD", "register:40f0:8", ["const:a34e80:8", "const:4:8"]]
- 00a34e80 ["CALL", null, ["callee:00597acc:8"]]
+ 00a34ed4 ["INT_ADD", "register:40f0:8", ["const:a34ed4:8", "const:4:8"]]
+ 00a34ed4 ["CALL", null, ["callee:00597acc:8"]]
~~~


<a id="compare-3f7a8b956ebc9aaa46c8992248796aee"></a>

### [`00a35594`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a35/00a35594.md) → [`00a355e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a35/00a355e8.md) FUN_00a355e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a38108`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a38/00a38108.md) · 呼出先 6件 [`00470714`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470714.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487a64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487a64.md) [`00a33f7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a33/00a33f7c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00a3815c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a3815c.md) · 呼出先 6件 [`00470754`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470754.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md) [`00a33fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a33/00a33fd0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a355c0 ["INT_ADD", "register:40f0:8", ["const:a355c0:8", "const:4:8"]]
- 00a355c0 ["CALL", null, ["callee:00a33fd0:8"]]
+ 00a35614 ["INT_ADD", "register:40f0:8", ["const:a35614:8", "const:4:8"]]
+ 00a35614 ["CALL", null, ["callee:00a33fd0:8"]]
- 00a355d4 ["INT_ADD", "register:40f0:8", ["const:a355d4:8", "const:4:8"]]
- 00a355d4 ["CALL", null, ["callee:0048797c:8"]]
+ 00a35628 ["INT_ADD", "register:40f0:8", ["const:a35628:8", "const:4:8"]]
+ 00a35628 ["CALL", null, ["callee:0048797c:8"]]
- 00a355f4 ["INT_ADD", "register:40f0:8", ["const:a355f4:8", "const:4:8"]]
- 00a355f4 ["CALL", null, ["callee:00470754:8"]]
+ 00a35648 ["INT_ADD", "register:40f0:8", ["const:a35648:8", "const:4:8"]]
+ 00a35648 ["CALL", null, ["callee:00470754:8"]]
~~~


<a id="compare-0dab96d114b27bd104b649028a350960"></a>

### [`00a356f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a35/00a356f8.md) → [`00a3574c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a35/00a3574c.md) FUN_00a3574c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009d3af4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d3/009d3af4.md) · 呼出先 4件 [`007279d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00727/007279d0.md) [`00727d1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00727/00727d1c.md) [`00727e68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00727/00727e68.md) [`00727fb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00727/00727fb4.md)
- 新版 呼出元 1件 [`009d3b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d3/009d3b48.md) · 呼出先 4件 [`00727a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00727/00727a28.md) [`00727d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00727/00727d74.md) [`00727ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00727/00727ec0.md) [`0072800c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00728/0072800c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a3571c ["INT_ADD", "register:40f0:8", ["const:a3571c:8", "const:4:8"]]
- 00a3571c ["CALL", null, ["callee:00727d74:8"]]
+ 00a35770 ["INT_ADD", "register:40f0:8", ["const:a35770:8", "const:4:8"]]
+ 00a35770 ["CALL", null, ["callee:00727d74:8"]]
- 00a35758 ["INT_ADD", "register:40f0:8", ["const:a35758:8", "const:4:8"]]
- 00a35758 ["CALL", null, ["callee:00727ec0:8"]]
+ 00a357ac ["INT_ADD", "register:40f0:8", ["const:a357ac:8", "const:4:8"]]
+ 00a357ac ["CALL", null, ["callee:00727ec0:8"]]
- 00a35794 ["INT_ADD", "register:40f0:8", ["const:a35794:8", "const:4:8"]]
- 00a35794 ["CALL", null, ["callee:0072800c:8"]]
+ 00a357e8 ["INT_ADD", "register:40f0:8", ["const:a357e8:8", "const:4:8"]]
+ 00a357e8 ["CALL", null, ["callee:0072800c:8"]]
~~~


<a id="compare-55cd473ffa93f6c453a69cc18068a8ba"></a>

### [`00a37e04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a37/00a37e04.md) → [`00a37e58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a37/00a37e58.md) FUN_00a37e58

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`006312f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00631/006312f4.md) [`0075b9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075b/0075b9c4.md) · 呼出先 4件 [`005626f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00562/005626f4.md) [`00a37b48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a37/00a37b48.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 2件 [`00631334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00631/00631334.md) [`0075ba1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075b/0075ba1c.md) · 呼出先 4件 [`00562734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00562/00562734.md) [`00a37b9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a37/00a37b9c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a37e28 ["INT_ADD", "register:40f0:8", ["const:a37e28:8", "const:4:8"]]
- 00a37e28 ["CALL", null, ["callee:00a37b9c:8"]]
+ 00a37e7c ["INT_ADD", "register:40f0:8", ["const:a37e7c:8", "const:4:8"]]
+ 00a37e7c ["CALL", null, ["callee:00a37b9c:8"]]
- 00a37e50 ["INT_ADD", "register:40f0:8", ["const:a37e50:8", "const:4:8"]]
- 00a37e50 ["CALL", null, ["callee:00562734:8"]]
+ 00a37ea4 ["INT_ADD", "register:40f0:8", ["const:a37ea4:8", "const:4:8"]]
+ 00a37ea4 ["CALL", null, ["callee:00562734:8"]]
- 00a37e60 ["INT_ADD", "register:40f0:8", ["const:a37e60:8", "const:4:8"]]
- 00a37e60 ["CALL", null, ["callee:00c57f80:8"]]
+ 00a37eb4 ["INT_ADD", "register:40f0:8", ["const:a37eb4:8", "const:4:8"]]
+ 00a37eb4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-15bf47463ee8288f42b1ad2d1aabf8a1"></a>

### [`00a37ff8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a37/00a37ff8.md) → [`00a3804c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a3804c.md) FUN_00a3804c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00869188`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869188.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`008691e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008691e0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a38030 ["INT_ADD", "register:40f0:8", ["const:a38030:8", "const:4:8"]]
- 00a38030 ["CALL", null, ["callee:008691e0:8"]]
+ 00a38084 ["INT_ADD", "register:40f0:8", ["const:a38084:8", "const:4:8"]]
+ 00a38084 ["CALL", null, ["callee:008691e0:8"]]
~~~


<a id="compare-36f062f925f74b9781e0ddd21083ae57"></a>

### [`00a38064`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a38/00a38064.md) → [`00a380b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a380b8.md) FUN_00a380b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00869228`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869228.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00869280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869280.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a38098 ["INT_ADD", "register:40f0:8", ["const:a38098:8", "const:4:8"]]
- 00a38098 ["CALL", null, ["callee:00869280:8"]]
+ 00a380ec ["INT_ADD", "register:40f0:8", ["const:a380ec:8", "const:4:8"]]
+ 00a380ec ["CALL", null, ["callee:00869280:8"]]
~~~


<a id="compare-35e27edeea3f24bb7dc34d9df1b15139"></a>

### [`00a380cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a38/00a380cc.md) → [`00a38120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a38120.md) FUN_00a38120

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0086930c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/0086930c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00869364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869364.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a380e4 ["INT_ADD", "register:40f0:8", ["const:a380e4:8", "const:4:8"]]
- 00a380e4 ["CALL", null, ["callee:00869364:8"]]
+ 00a38138 ["INT_ADD", "register:40f0:8", ["const:a38138:8", "const:4:8"]]
+ 00a38138 ["CALL", null, ["callee:00869364:8"]]
~~~


<a id="compare-fa1276270eb6da31505941973fa38cf4"></a>

### [`00a38cc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a38/00a38cc4.md) → [`00a38d18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a38d18.md) FUN_00a38d18

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a33cac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a33/00a33cac.md) · 呼出先 6件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00726260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00726/00726260.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00a33d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a33/00a33d00.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`007262b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00726/007262b8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a38d6c ["INT_ADD", "register:40f0:8", ["const:a38d6c:8", "const:4:8"]]
- 00a38d6c ["CALL", null, ["callee:00c57f60:8"]]
+ 00a38dc0 ["INT_ADD", "register:40f0:8", ["const:a38dc0:8", "const:4:8"]]
+ 00a38dc0 ["CALL", null, ["callee:00c57f60:8"]]
- 00a38dac ["INT_ADD", "register:40f0:8", ["const:a38dac:8", "const:4:8"]]
- 00a38dac ["CALL", null, ["callee:00c58160:8"]]
+ 00a38e00 ["INT_ADD", "register:40f0:8", ["const:a38e00:8", "const:4:8"]]
+ 00a38e00 ["CALL", null, ["callee:00c58160:8"]]
- 00a38df0 ["INT_ADD", "register:40f0:8", ["const:a38df0:8", "const:4:8"]]
- 00a38df0 ["CALL", null, ["callee:00c58160:8"]]
+ 00a38e44 ["INT_ADD", "register:40f0:8", ["const:a38e44:8", "const:4:8"]]
+ 00a38e44 ["CALL", null, ["callee:00c58160:8"]]
~~~


<a id="compare-490536d753ee52d1725239a6265ac369"></a>

### [`00a38e58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a38/00a38e58.md) → [`00a38eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a38eac.md) FUN_00a38eac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a33f7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a33/00a33f7c.md) · 呼出先 7件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0072608c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00726/0072608c.md) [`00a39078`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a39078.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00a33fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a33/00a33fd0.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`007260e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00726/007260e4.md) [`00a390cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a390cc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a38f18 ["INT_ADD", "register:40f0:8", ["const:a38f18:8", "const:4:8"]]
- 00a38f18 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a38f6c ["INT_ADD", "register:40f0:8", ["const:a38f6c:8", "const:4:8"]]
+ 00a38f6c ["CALL", null, ["callee:00c57f60:8"]]
- 00a38f50 ["INT_ADD", "register:40f0:8", ["const:a38f50:8", "const:4:8"]]
- 00a38f50 ["CALL", null, ["callee:00c58160:8"]]
+ 00a38fa4 ["INT_ADD", "register:40f0:8", ["const:a38fa4:8", "const:4:8"]]
+ 00a38fa4 ["CALL", null, ["callee:00c58160:8"]]
- 00a38f9c ["INT_ADD", "register:40f0:8", ["const:a38f9c:8", "const:4:8"]]
- 00a38f9c ["CALL", null, ["callee:00c58160:8"]]
+ 00a38ff0 ["INT_ADD", "register:40f0:8", ["const:a38ff0:8", "const:4:8"]]
+ 00a38ff0 ["CALL", null, ["callee:00c58160:8"]]
~~~


<a id="compare-1ee7ae8a644afc26c69258e70b06a87b"></a>

### [`00a39078`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a39078.md) → [`00a390cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a390cc.md) FUN_00a390cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a38e58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a38/00a38e58.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00a38eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a38eac.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a3913c ["INT_ADD", "register:40f0:8", ["const:a3913c:8", "const:4:8"]]
- 00a3913c ["CALL", null, ["callee:00c57f80:8"]]
+ 00a39190 ["INT_ADD", "register:40f0:8", ["const:a39190:8", "const:4:8"]]
+ 00a39190 ["CALL", null, ["callee:00c57f80:8"]]
- 00a3914c ["INT_ADD", "register:40f0:8", ["const:a3914c:8", "const:4:8"]]
- 00a3914c ["CALL", null, ["callee:00c57f80:8"]]
+ 00a391a0 ["INT_ADD", "register:40f0:8", ["const:a391a0:8", "const:4:8"]]
+ 00a391a0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-bb27bb1026e05aeafc802f4f70b31276"></a>

### [`00a391a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a391a0.md) → [`00a391f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a391f4.md) FUN_00a391f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a391dc ["INT_ADD", "register:40f0:8", ["const:a391dc:8", "const:4:8"]]
- 00a391dc ["CALL", null, ["callee:00c57f80:8"]]
+ 00a39230 ["INT_ADD", "register:40f0:8", ["const:a39230:8", "const:4:8"]]
+ 00a39230 ["CALL", null, ["callee:00c57f80:8"]]
- 00a391ec ["INT_ADD", "register:40f0:8", ["const:a391ec:8", "const:4:8"]]
- 00a391ec ["CALL", null, ["callee:00c57f80:8"]]
+ 00a39240 ["INT_ADD", "register:40f0:8", ["const:a39240:8", "const:4:8"]]
+ 00a39240 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-8e08d42b2eee33433d64fadf783d5c1c"></a>

### [`00a3921c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a3921c.md) → [`00a39270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39270.md) FUN_00a39270

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a3611c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a36/00a3611c.md) · 呼出先 8件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00a39400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a39400.md) [`00a39528`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a39528.md) [`00a396d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a396d0.md) [`00a396e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a396e4.md)
- 新版 呼出元 1件 [`00a36170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a36/00a36170.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00a39454`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39454.md) [`00a3957c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a3957c.md) [`00a39724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39724.md) [`00a39738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39738.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a392ec ["INT_ADD", "register:40f0:8", ["const:a392ec:8", "const:4:8"]]
- 00a392ec ["CALL", null, ["callee:00c57f60:8"]]
+ 00a39340 ["INT_ADD", "register:40f0:8", ["const:a39340:8", "const:4:8"]]
+ 00a39340 ["CALL", null, ["callee:00c57f60:8"]]
- 00a39340 ["INT_ADD", "register:40f0:8", ["const:a39340:8", "const:4:8"]]
- 00a39340 ["CALL", null, ["callee:00a3957c:8"]]
+ 00a39394 ["INT_ADD", "register:40f0:8", ["const:a39394:8", "const:4:8"]]
+ 00a39394 ["CALL", null, ["callee:00a3957c:8"]]
- 00a3935c ["INT_ADD", "register:40f0:8", ["const:a3935c:8", "const:4:8"]]
- 00a3935c ["CALL", null, ["callee:00a39738:8"]]
+ 00a393b0 ["INT_ADD", "register:40f0:8", ["const:a393b0:8", "const:4:8"]]
+ 00a393b0 ["CALL", null, ["callee:00a39738:8"]]
~~~


<a id="compare-933393b44cc09c349f9e390cc58684e0"></a>

### [`00a39400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a39400.md) → [`00a39454`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39454.md) FUN_00a39454

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a3921c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a3921c.md) · 呼出先 1件 [`0086cd64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086cd64.md)
- 新版 呼出元 1件 [`00a39270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39270.md) · 呼出先 1件 [`0086cdbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086cdbc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a39474 ["INT_ADD", "register:40f0:8", ["const:a39474:8", "const:4:8"]]
- 00a39474 ["CALL", null, ["callee:0086cdbc:8"]]
+ 00a394c8 ["INT_ADD", "register:40f0:8", ["const:a394c8:8", "const:4:8"]]
+ 00a394c8 ["CALL", null, ["callee:0086cdbc:8"]]
- 00a394a4 ["INT_ADD", "register:40f0:8", ["const:a394a4:8", "const:4:8"]]
- 00a394a4 ["CALL", null, ["callee:0086cdbc:8"]]
+ 00a394f8 ["INT_ADD", "register:40f0:8", ["const:a394f8:8", "const:4:8"]]
+ 00a394f8 ["CALL", null, ["callee:0086cdbc:8"]]
~~~


<a id="compare-0ed418cb2872f5f85b47f00a793a99da"></a>

### [`00a39528`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a39528.md) → [`00a3957c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a3957c.md) FUN_00a3957c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a3921c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a3921c.md) · 呼出先 1件 [`0086cd64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086cd64.md)
- 新版 呼出元 1件 [`00a39270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39270.md) · 呼出先 1件 [`0086cdbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086cdbc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a3959c ["INT_ADD", "register:40f0:8", ["const:a3959c:8", "const:4:8"]]
- 00a3959c ["CALL", null, ["callee:0086cdbc:8"]]
+ 00a395f0 ["INT_ADD", "register:40f0:8", ["const:a395f0:8", "const:4:8"]]
+ 00a395f0 ["CALL", null, ["callee:0086cdbc:8"]]
- 00a395cc ["INT_ADD", "register:40f0:8", ["const:a395cc:8", "const:4:8"]]
- 00a395cc ["CALL", null, ["callee:0086cdbc:8"]]
+ 00a39620 ["INT_ADD", "register:40f0:8", ["const:a39620:8", "const:4:8"]]
+ 00a39620 ["CALL", null, ["callee:0086cdbc:8"]]
~~~


<a id="compare-6b3918dc2e80815dc471d71a8a5dca2c"></a>

### [`00a39650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a39650.md) → [`00a396a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a396a4.md) FUN_00a396a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a39680 ["INT_ADD", "register:40f0:8", ["const:a39680:8", "const:4:8"]]
- 00a39680 ["CALL", null, ["callee:0046d4d0:8"]]
+ 00a396d4 ["INT_ADD", "register:40f0:8", ["const:a396d4:8", "const:4:8"]]
+ 00a396d4 ["CALL", null, ["callee:0046d4d0:8"]]
- 00a3968c ["INT_ADD", "register:40f0:8", ["const:a3968c:8", "const:4:8"]]
- 00a3968c ["CALL", null, ["callee:0046d4d0:8"]]
+ 00a396e0 ["INT_ADD", "register:40f0:8", ["const:a396e0:8", "const:4:8"]]
+ 00a396e0 ["CALL", null, ["callee:0046d4d0:8"]]
- 00a39698 ["INT_ADD", "register:40f0:8", ["const:a39698:8", "const:4:8"]]
- 00a39698 ["CALL", null, ["callee:0046d4d0:8"]]
+ 00a396ec ["INT_ADD", "register:40f0:8", ["const:a396ec:8", "const:4:8"]]
+ 00a396ec ["CALL", null, ["callee:0046d4d0:8"]]
~~~


<a id="compare-ebf188f2ea01af226ebaf0f7abe4b0ab"></a>

### [`00a396e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a396e4.md) → [`00a39738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39738.md) FUN_00a39738

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a3921c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a3921c.md) · 呼出先 1件 [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md)
- 新版 呼出元 1件 [`00a39270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39270.md) · 呼出先 1件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a39808 ["INT_ADD", "register:40f0:8", ["const:a39808:8", "const:4:8"]]
- 00a39808 ["CALL", null, ["callee:0046d4d0:8"]]
+ 00a3985c ["INT_ADD", "register:40f0:8", ["const:a3985c:8", "const:4:8"]]
+ 00a3985c ["CALL", null, ["callee:0046d4d0:8"]]
- 00a39814 ["INT_ADD", "register:40f0:8", ["const:a39814:8", "const:4:8"]]
- 00a39814 ["CALL", null, ["callee:0046d4d0:8"]]
+ 00a39868 ["INT_ADD", "register:40f0:8", ["const:a39868:8", "const:4:8"]]
+ 00a39868 ["CALL", null, ["callee:0046d4d0:8"]]
- 00a39820 ["INT_ADD", "register:40f0:8", ["const:a39820:8", "const:4:8"]]
- 00a39820 ["CALL", null, ["callee:0046d4d0:8"]]
+ 00a39874 ["INT_ADD", "register:40f0:8", ["const:a39874:8", "const:4:8"]]
+ 00a39874 ["CALL", null, ["callee:0046d4d0:8"]]
~~~


<a id="compare-a3913a26dd4d0896d2b0cb458a75b56a"></a>

### [`00a39840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a39840.md) → [`00a39894`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39894.md) FUN_00a39894

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a38108`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a38/00a38108.md) · 呼出先 8件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00a399d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a399d0.md) [`00a39b80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a39b80.md) [`00a39d1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a39d1c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`00a3815c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a3815c.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00a39a24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39a24.md) [`00a39bd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39bd4.md) [`00a39d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a398d0 ["INT_ADD", "register:40f0:8", ["const:a398d0:8", "const:4:8"]]
- 00a398d0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a39924 ["INT_ADD", "register:40f0:8", ["const:a39924:8", "const:4:8"]]
+ 00a39924 ["CALL", null, ["callee:00c57f60:8"]]
- 00a398f0 ["INT_ADD", "register:40f0:8", ["const:a398f0:8", "const:4:8"]]
- 00a398f0 ["CALL", null, ["callee:00c58160:8"]]
+ 00a39944 ["INT_ADD", "register:40f0:8", ["const:a39944:8", "const:4:8"]]
+ 00a39944 ["CALL", null, ["callee:00c58160:8"]]
- 00a39924 ["INT_ADD", "register:40f0:8", ["const:a39924:8", "const:4:8"]]
- 00a39924 ["CALL", null, ["callee:00c58160:8"]]
+ 00a39978 ["INT_ADD", "register:40f0:8", ["const:a39978:8", "const:4:8"]]
+ 00a39978 ["CALL", null, ["callee:00c58160:8"]]
~~~


<a id="compare-00b546a23337ffbb7d9ae7250ef0b6ad"></a>

### [`00a399d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a399d0.md) → [`00a39a24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39a24.md) FUN_00a39a24

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a39840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a39840.md) · 呼出先 2件 [`00a39b94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a39b94.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00a39894`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39894.md) · 呼出先 2件 [`00a39be8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39be8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a39ab8 ["INT_ADD", "register:40f0:8", ["const:a39ab8:8", "const:4:8"]]
- 00a39ab8 ["CALL", null, ["callee:00a39be8:8"]]
+ 00a39b0c ["INT_ADD", "register:40f0:8", ["const:a39b0c:8", "const:4:8"]]
+ 00a39b0c ["CALL", null, ["callee:00a39be8:8"]]
- 00a39b44 ["INT_ADD", "register:40f0:8", ["const:a39b44:8", "const:4:8"]]
- 00a39b44 ["CALL", null, ["callee:00c57fb0:8"]]
+ 00a39b98 ["INT_ADD", "register:40f0:8", ["const:a39b98:8", "const:4:8"]]
+ 00a39b98 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-f43395ea9c415212eb5edb3a71de20f1"></a>

### [`00a39b48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a39b48.md) → [`00a39b9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39b9c.md) FUN_00a39b9c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00a39d1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a39d1c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00a39d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39d70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a39b5c ["INT_ADD", "register:40f0:8", ["const:a39b5c:8", "const:4:8"]]
- 00a39b5c ["CALL", null, ["callee:00a39d70:8"]]
+ 00a39bb0 ["INT_ADD", "register:40f0:8", ["const:a39bb0:8", "const:4:8"]]
+ 00a39bb0 ["CALL", null, ["callee:00a39d70:8"]]
~~~


<a id="compare-e91d0311f15d4a03325dd1cd86ae1479"></a>

### [`00a39b94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a39b94.md) → [`00a39be8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39be8.md) FUN_00a39be8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a399d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a399d0.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00a39a24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39a24.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a39bc0 ["INT_ADD", "register:40f0:8", ["const:a39bc0:8", "const:4:8"]]
- 00a39bc0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00a39c14 ["INT_ADD", "register:40f0:8", ["const:a39c14:8", "const:4:8"]]
+ 00a39c14 ["CALL", null, ["callee:00c57f80:8"]]
- 00a39bdc ["INT_ADD", "register:40f0:8", ["const:a39bdc:8", "const:4:8"]]
- 00a39bdc ["CALL", null, ["callee:00c57f80:8"]]
+ 00a39c30 ["INT_ADD", "register:40f0:8", ["const:a39c30:8", "const:4:8"]]
+ 00a39c30 ["CALL", null, ["callee:00c57f80:8"]]
- 00a39c14 ["INT_ADD", "register:40f0:8", ["const:a39c14:8", "const:4:8"]]
- 00a39c14 ["CALL", null, ["callee:00c57f80:8"]]
+ 00a39c68 ["INT_ADD", "register:40f0:8", ["const:a39c68:8", "const:4:8"]]
+ 00a39c68 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-25252de104764c4cf5d01bc993bd775a"></a>

### [`00a39c3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a39c3c.md) → [`00a39c90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39c90.md) FUN_00a39c90

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00a39c74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a39c74.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00a39cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39cc8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a39c64 ["INT_ADD", "register:40f0:8", ["const:a39c64:8", "const:4:8"]]
- 00a39c64 ["CALL", null, ["callee:00a39cc8:8"]]
+ 00a39cb8 ["INT_ADD", "register:40f0:8", ["const:a39cb8:8", "const:4:8"]]
+ 00a39cb8 ["CALL", null, ["callee:00a39cc8:8"]]
~~~


<a id="compare-4c5f1728353aefab40dda943dd65593b"></a>

### [`00a39c74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a39c74.md) → [`00a39cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39cc8.md) FUN_00a39cc8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a39c3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a39c3c.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00a39c90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39c90.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a39ca0 ["INT_ADD", "register:40f0:8", ["const:a39ca0:8", "const:4:8"]]
- 00a39ca0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00a39cf4 ["INT_ADD", "register:40f0:8", ["const:a39cf4:8", "const:4:8"]]
+ 00a39cf4 ["CALL", null, ["callee:00c57f80:8"]]
- 00a39cbc ["INT_ADD", "register:40f0:8", ["const:a39cbc:8", "const:4:8"]]
- 00a39cbc ["CALL", null, ["callee:00c57f80:8"]]
+ 00a39d10 ["INT_ADD", "register:40f0:8", ["const:a39d10:8", "const:4:8"]]
+ 00a39d10 ["CALL", null, ["callee:00c57f80:8"]]
- 00a39cf4 ["INT_ADD", "register:40f0:8", ["const:a39cf4:8", "const:4:8"]]
- 00a39cf4 ["CALL", null, ["callee:00c57f80:8"]]
+ 00a39d48 ["INT_ADD", "register:40f0:8", ["const:a39d48:8", "const:4:8"]]
+ 00a39d48 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-607a269c7c071c79c575509d198ddbfd"></a>

### [`00a39d1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a39d1c.md) → [`00a39d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39d70.md) FUN_00a39d70

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00a39840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a39840.md) [`00a39b48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a39b48.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`00a39894`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39894.md) [`00a39b9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39b9c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a39d50 ["INT_ADD", "register:40f0:8", ["const:a39d50:8", "const:4:8"]]
- 00a39d50 ["CALL", null, ["callee:00c57f80:8"]]
+ 00a39da4 ["INT_ADD", "register:40f0:8", ["const:a39da4:8", "const:4:8"]]
+ 00a39da4 ["CALL", null, ["callee:00c57f80:8"]]
- 00a39d74 ["INT_ADD", "register:40f0:8", ["const:a39d74:8", "const:4:8"]]
- 00a39d74 ["CALL", null, ["callee:00c57f80:8"]]
+ 00a39dc8 ["INT_ADD", "register:40f0:8", ["const:a39dc8:8", "const:4:8"]]
+ 00a39dc8 ["CALL", null, ["callee:00c57f80:8"]]
- 00a39dac ["INT_ADD", "register:40f0:8", ["const:a39dac:8", "const:4:8"]]
- 00a39dac ["CALL", null, ["callee:00c57f80:8"]]
+ 00a39e00 ["INT_ADD", "register:40f0:8", ["const:a39e00:8", "const:4:8"]]
+ 00a39e00 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-faf21714be0a795c6c07fad282621c5a"></a>

### [`00a39dd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a39dd8.md) → [`00a39e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39e2c.md) FUN_00a39e2c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a38108`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a38/00a38108.md) · 呼出先 6件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00869228`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869228.md) [`00a3a004`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3a/00a3a004.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00a3815c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a3815c.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00869280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869280.md) [`00a3a058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3a/00a3a058.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a39e80 ["INT_ADD", "register:40f0:8", ["const:a39e80:8", "const:4:8"]]
- 00a39e80 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a39ed4 ["INT_ADD", "register:40f0:8", ["const:a39ed4:8", "const:4:8"]]
+ 00a39ed4 ["CALL", null, ["callee:00c57f60:8"]]
- 00a39ec0 ["INT_ADD", "register:40f0:8", ["const:a39ec0:8", "const:4:8"]]
- 00a39ec0 ["CALL", null, ["callee:00c58160:8"]]
+ 00a39f14 ["INT_ADD", "register:40f0:8", ["const:a39f14:8", "const:4:8"]]
+ 00a39f14 ["CALL", null, ["callee:00c58160:8"]]
- 00a39f0c ["INT_ADD", "register:40f0:8", ["const:a39f0c:8", "const:4:8"]]
- 00a39f0c ["CALL", null, ["callee:00c58160:8"]]
+ 00a39f60 ["INT_ADD", "register:40f0:8", ["const:a39f60:8", "const:4:8"]]
+ 00a39f60 ["CALL", null, ["callee:00c58160:8"]]
~~~


<a id="compare-23caa4b2bdca9264d885200c4a7ddff7"></a>

### [`00a3a018`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3a/00a3a018.md) → [`00a3a06c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3a/00a3a06c.md) FUN_00a3a06c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a38108`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a38/00a38108.md) · 呼出先 7件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00869188`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869188.md) [`00a3a268`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3a/00a3a268.md) [`00a3a460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3a/00a3a460.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`00a3815c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a38/00a3815c.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`008691e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008691e0.md) [`00a3a2bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3a/00a3a2bc.md) [`00a3a4b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3a/00a3a4b4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a3a0e8 ["INT_ADD", "register:40f0:8", ["const:a3a0e8:8", "const:4:8"]]
- 00a3a0e8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a3a13c ["INT_ADD", "register:40f0:8", ["const:a3a13c:8", "const:4:8"]]
+ 00a3a13c ["CALL", null, ["callee:00c57f60:8"]]
- 00a3a1b8 ["INT_ADD", "register:40f0:8", ["const:a3a1b8:8", "const:4:8"]]
- 00a3a1b8 ["CALL", null, ["callee:00a3a2bc:8"]]
+ 00a3a20c ["INT_ADD", "register:40f0:8", ["const:a3a20c:8", "const:4:8"]]
+ 00a3a20c ["CALL", null, ["callee:00a3a2bc:8"]]
- 00a3a1d8 ["INT_ADD", "register:40f0:8", ["const:a3a1d8:8", "const:4:8"]]
- 00a3a1d8 ["CALL", null, ["callee:008691e0:8"]]
+ 00a3a22c ["INT_ADD", "register:40f0:8", ["const:a3a22c:8", "const:4:8"]]
+ 00a3a22c ["CALL", null, ["callee:008691e0:8"]]
~~~


<a id="compare-4f353ecdeb4e7337daad4979a0408e68"></a>

### [`00a3a268`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3a/00a3a268.md) → [`00a3a2bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3a/00a3a2bc.md) FUN_00a3a2bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a3a018`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3a/00a3a018.md) · 呼出先 1件 [`00869188`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869188.md)
- 新版 呼出元 1件 [`00a3a06c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3a/00a3a06c.md) · 呼出先 1件 [`008691e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008691e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a3a3ac ["INT_ADD", "register:40f0:8", ["const:a3a3ac:8", "const:4:8"]]
- 00a3a3ac ["CALL", null, ["callee:008691e0:8"]]
+ 00a3a400 ["INT_ADD", "register:40f0:8", ["const:a3a400:8", "const:4:8"]]
+ 00a3a400 ["CALL", null, ["callee:008691e0:8"]]
~~~


<a id="compare-d7cd16da69704363b9789e98885eed77"></a>

### [`00a3a408`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3a/00a3a408.md) → [`00a3a45c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3a/00a3a45c.md) FUN_00a3a45c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00869188`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869188.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`008691e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008691e0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a3a430 ["INT_ADD", "register:40f0:8", ["const:a3a430:8", "const:4:8"]]
- 00a3a430 ["CALL", null, ["callee:008691e0:8"]]
+ 00a3a484 ["INT_ADD", "register:40f0:8", ["const:a3a484:8", "const:4:8"]]
+ 00a3a484 ["CALL", null, ["callee:008691e0:8"]]
~~~


<a id="compare-a2c4118386c895953dbb8a05738797d9"></a>

### [`00a3a804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3a/00a3a804.md) → [`00a3a858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3a/00a3a858.md) FUN_00a3a858

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009d0320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d0/009d0320.md) · 呼出先 3件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00a3a938`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3a/00a3a938.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00a3a98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3a/00a3a98c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a3a8ac ["INT_ADD", "register:40f0:8", ["const:a3a8ac:8", "const:4:8"]]
- 00a3a8ac ["CALL", null, ["callee:00c57f60:8"]]
+ 00a3a900 ["INT_ADD", "register:40f0:8", ["const:a3a900:8", "const:4:8"]]
+ 00a3a900 ["CALL", null, ["callee:00c57f60:8"]]
- 00a3a8e0 ["INT_ADD", "register:40f0:8", ["const:a3a8e0:8", "const:4:8"]]
- 00a3a8e0 ["CALL", null, ["callee:0043bbe4:8"]]
+ 00a3a934 ["INT_ADD", "register:40f0:8", ["const:a3a934:8", "const:4:8"]]
+ 00a3a934 ["CALL", null, ["callee:0043bbe4:8"]]
- 00a3a92c ["INT_ADD", "register:40f0:8", ["const:a3a92c:8", "const:4:8"]]
- 00a3a92c ["CALL", null, ["callee:00a3a98c:8"]]
+ 00a3a980 ["INT_ADD", "register:40f0:8", ["const:a3a980:8", "const:4:8"]]
+ 00a3a980 ["CALL", null, ["callee:00a3a98c:8"]]
~~~


<a id="compare-dbdc05f6df89f160d0a695f0005ca6ef"></a>

### [`00a3a938`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3a/00a3a938.md) → [`00a3a98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3a/00a3a98c.md) FUN_00a3a98c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a3a804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3a/00a3a804.md) · 呼出先 3件 [`00494610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00494/00494610.md) [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00a3a858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3a/00a3a858.md) · 呼出先 3件 [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a3a9e8 ["INT_ADD", "register:40f0:8", ["const:a3a9e8:8", "const:4:8"]]
- 00a3a9e8 ["CALL", null, ["callee:00494650:8"]]
+ 00a3aa3c ["INT_ADD", "register:40f0:8", ["const:a3aa3c:8", "const:4:8"]]
+ 00a3aa3c ["CALL", null, ["callee:00494650:8"]]
- 00a3a9f0 ["INT_ADD", "register:40f0:8", ["const:a3a9f0:8", "const:4:8"]]
- 00a3a9f0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00a3aa44 ["INT_ADD", "register:40f0:8", ["const:a3aa44:8", "const:4:8"]]
+ 00a3aa44 ["CALL", null, ["callee:00c57f80:8"]]
- 00a3aaa4 ["INT_ADD", "register:40f0:8", ["const:a3aaa4:8", "const:4:8"]]
- 00a3aaa4 ["CALL", null, ["callee:00494650:8"]]
+ 00a3aaf8 ["INT_ADD", "register:40f0:8", ["const:a3aaf8:8", "const:4:8"]]
+ 00a3aaf8 ["CALL", null, ["callee:00494650:8"]]
~~~


<a id="compare-0afd936b9fa48c0ca912a7838332818a"></a>

### [`00a3b884`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3b/00a3b884.md) → [`00a3b8d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3b/00a3b8d8.md) FUN_00a3b8d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a3aac8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3a/00a3aac8.md) · 呼出先 3件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`0086a1a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a1a8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00a3ab1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3a/00a3ab1c.md) · 呼出先 3件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`0086a200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a200.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a3b89c ["INT_ADD", "register:40f0:8", ["const:a3b89c:8", "const:4:8"]]
- 00a3b89c ["CALL", null, ["callee:005c17dc:8"]]
+ 00a3b8f0 ["INT_ADD", "register:40f0:8", ["const:a3b8f0:8", "const:4:8"]]
+ 00a3b8f0 ["CALL", null, ["callee:005c17dc:8"]]
- 00a3b8ac ["INT_ADD", "register:40f0:8", ["const:a3b8ac:8", "const:4:8"]]
- 00a3b8ac ["CALL", null, ["callee:00c57f80:8"]]
+ 00a3b900 ["INT_ADD", "register:40f0:8", ["const:a3b900:8", "const:4:8"]]
+ 00a3b900 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-771dacae4b85ff9e78d303063080697f"></a>

### [`00a3b8c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3b/00a3b8c4.md) → [`00a3b918`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3b/00a3b918.md) FUN_00a3b918

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a3aac8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3a/00a3aac8.md) · 呼出先 3件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0046d7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d7b0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`00a3ab1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3a/00a3ab1c.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a3b918 ["INT_ADD", "register:40f0:8", ["const:a3b918:8", "const:4:8"]]
- 00a3b918 ["CALL", null, ["callee:0046d7f0:8"]]
+ 00a3b96c ["INT_ADD", "register:40f0:8", ["const:a3b96c:8", "const:4:8"]]
+ 00a3b96c ["CALL", null, ["callee:0046d7f0:8"]]
- 00a3b96c ["INT_ADD", "register:40f0:8", ["const:a3b96c:8", "const:4:8"]]
- 00a3b96c ["CALL", null, ["callee:00c57f60:8"]]
+ 00a3b9c0 ["INT_ADD", "register:40f0:8", ["const:a3b9c0:8", "const:4:8"]]
+ 00a3b9c0 ["CALL", null, ["callee:00c57f60:8"]]
- 00a3b9a0 ["INT_ADD", "register:40f0:8", ["const:a3b9a0:8", "const:4:8"]]
- 00a3b9a0 ["CALL", null, ["callee:0043bbe4:8"]]
+ 00a3b9f4 ["INT_ADD", "register:40f0:8", ["const:a3b9f4:8", "const:4:8"]]
+ 00a3b9f4 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-04ca4396f6a4cb1377c84442d8b3e4e9"></a>

### [`00a3d9f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3d/00a3d9f4.md) → [`00a3da48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3d/00a3da48.md) FUN_00a3da48

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a3ce18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3c/00a3ce18.md) · 呼出先 2件 [`008ab968`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ab/008ab968.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00a3ce6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3c/00a3ce6c.md) · 呼出先 2件 [`008ab9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008ab9c0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a3da18 ["INT_ADD", "register:40f0:8", ["const:a3da18:8", "const:4:8"]]
- 00a3da18 ["CALL", null, ["callee:008ab9c0:8"]]
+ 00a3da6c ["INT_ADD", "register:40f0:8", ["const:a3da6c:8", "const:4:8"]]
+ 00a3da6c ["CALL", null, ["callee:008ab9c0:8"]]
- 00a3da50 ["INT_ADD", "register:40f0:8", ["const:a3da50:8", "const:4:8"]]
- 00a3da50 ["CALL", null, ["callee:00c57fb0:8"]]
+ 00a3daa4 ["INT_ADD", "register:40f0:8", ["const:a3daa4:8", "const:4:8"]]
+ 00a3daa4 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-43474b47294365218a0f36f4f4d1e083"></a>

### [`00a3da54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3d/00a3da54.md) → [`00a3daa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3d/00a3daa8.md) FUN_00a3daa8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a3da6c ["INT_ADD", "register:40f0:8", ["const:a3da6c:8", "const:4:8"]]
- 00a3da6c ["CALL", null, ["callee:005c17dc:8"]]
+ 00a3dac0 ["INT_ADD", "register:40f0:8", ["const:a3dac0:8", "const:4:8"]]
+ 00a3dac0 ["CALL", null, ["callee:005c17dc:8"]]
- 00a3da78 ["INT_ADD", "register:40f0:8", ["const:a3da78:8", "const:4:8"]]
- 00a3da78 ["CALL", null, ["callee:005c17dc:8"]]
+ 00a3dacc ["INT_ADD", "register:40f0:8", ["const:a3dacc:8", "const:4:8"]]
+ 00a3dacc ["CALL", null, ["callee:005c17dc:8"]]
~~~


<a id="compare-3e8717b6820c7b8c0fc33833706ddb47"></a>

### [`00a3e690`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3e/00a3e690.md) → [`00a3e6e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3e/00a3e6e4.md) FUN_00a3e6e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a3b0bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3b/00a3b0bc.md) · 呼出先 1件 [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md)
- 新版 呼出元 1件 [`00a3b110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3b/00a3b110.md) · 呼出先 1件 [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a3e6bc ["INT_ADD", "register:40f0:8", ["const:a3e6bc:8", "const:4:8"]]
- 00a3e6bc ["CALL", null, ["callee:0048797c:8"]]
+ 00a3e710 ["INT_ADD", "register:40f0:8", ["const:a3e710:8", "const:4:8"]]
+ 00a3e710 ["CALL", null, ["callee:0048797c:8"]]
- 00a3e6cc ["INT_ADD", "register:40f0:8", ["const:a3e6cc:8", "const:4:8"]]
- 00a3e6cc ["CALL", null, ["callee:0048797c:8"]]
+ 00a3e720 ["INT_ADD", "register:40f0:8", ["const:a3e720:8", "const:4:8"]]
+ 00a3e720 ["CALL", null, ["callee:0048797c:8"]]
- 00a3e6dc ["INT_ADD", "register:40f0:8", ["const:a3e6dc:8", "const:4:8"]]
- 00a3e6dc ["CALL", null, ["callee:0048797c:8"]]
+ 00a3e730 ["INT_ADD", "register:40f0:8", ["const:a3e730:8", "const:4:8"]]
+ 00a3e730 ["CALL", null, ["callee:0048797c:8"]]
~~~


<a id="compare-cee4fdc25ea1f6edf2b3abffcf740eff"></a>

### [`00a3e93c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3e/00a3e93c.md) → [`00a3e990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3e/00a3e990.md) FUN_00a3e990

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a3e954 ["INT_ADD", "register:40f0:8", ["const:a3e954:8", "const:4:8"]]
- 00a3e954 ["CALL", null, ["callee:005c17dc:8"]]
+ 00a3e9a8 ["INT_ADD", "register:40f0:8", ["const:a3e9a8:8", "const:4:8"]]
+ 00a3e9a8 ["CALL", null, ["callee:005c17dc:8"]]
- 00a3e960 ["INT_ADD", "register:40f0:8", ["const:a3e960:8", "const:4:8"]]
- 00a3e960 ["CALL", null, ["callee:005c17dc:8"]]
+ 00a3e9b4 ["INT_ADD", "register:40f0:8", ["const:a3e9b4:8", "const:4:8"]]
+ 00a3e9b4 ["CALL", null, ["callee:005c17dc:8"]]
~~~


<a id="compare-b83514c3a91bfabde0983024011cfdb7"></a>

### [`00a3e988`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3e/00a3e988.md) → [`00a3e9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3e/00a3e9dc.md) FUN_00a3e9dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a3ce18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3c/00a3ce18.md) · 呼出先 2件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00a3ce6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3c/00a3ce6c.md) · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a3e9a0 ["INT_ADD", "register:40f0:8", ["const:a3e9a0:8", "const:4:8"]]
- 00a3e9a0 ["CALL", null, ["callee:005c17dc:8"]]
+ 00a3e9f4 ["INT_ADD", "register:40f0:8", ["const:a3e9f4:8", "const:4:8"]]
+ 00a3e9f4 ["CALL", null, ["callee:005c17dc:8"]]
- 00a3e9ac ["INT_ADD", "register:40f0:8", ["const:a3e9ac:8", "const:4:8"]]
- 00a3e9ac ["CALL", null, ["callee:005c17dc:8"]]
+ 00a3ea00 ["INT_ADD", "register:40f0:8", ["const:a3ea00:8", "const:4:8"]]
+ 00a3ea00 ["CALL", null, ["callee:005c17dc:8"]]
- 00a3e9bc ["INT_ADD", "register:40f0:8", ["const:a3e9bc:8", "const:4:8"]]
- 00a3e9bc ["CALL", null, ["callee:00c57f80:8"]]
+ 00a3ea10 ["INT_ADD", "register:40f0:8", ["const:a3ea10:8", "const:4:8"]]
+ 00a3ea10 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-04124a8d62625454c22058bf68fd0be1"></a>

### [`00a3ec64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3e/00a3ec64.md) → [`00a3ecb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3e/00a3ecb8.md) FUN_00a3ecb8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00a3e8cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3e/00a3e8cc.md) [`00a3e920`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3e/00a3e920.md) · 呼出先 2件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00691800`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00691/00691800.md)
- 新版 呼出元 2件 [`00a3e920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3e/00a3e920.md) [`00a3e974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3e/00a3e974.md) · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00691858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00691/00691858.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a3ecb8 ["INT_ADD", "register:40f0:8", ["const:a3ecb8:8", "const:4:8"]]
- 00a3ecb8 ["CALL", null, ["callee:0043bb60:8"]]
+ 00a3ed0c ["INT_ADD", "register:40f0:8", ["const:a3ed0c:8", "const:4:8"]]
+ 00a3ed0c ["CALL", null, ["callee:0043bb60:8"]]
- 00a3ecdc ["INT_ADD", "register:40f0:8", ["const:a3ecdc:8", "const:4:8"]]
- 00a3ecdc ["CALL", null, ["callee:00691858:8"]]
+ 00a3ed30 ["INT_ADD", "register:40f0:8", ["const:a3ed30:8", "const:4:8"]]
+ 00a3ed30 ["CALL", null, ["callee:00691858:8"]]
- 00a3ed00 ["INT_ADD", "register:40f0:8", ["const:a3ed00:8", "const:4:8"]]
- 00a3ed00 ["CALL", null, ["callee:00691858:8"]]
+ 00a3ed54 ["INT_ADD", "register:40f0:8", ["const:a3ed54:8", "const:4:8"]]
+ 00a3ed54 ["CALL", null, ["callee:00691858:8"]]
~~~


<a id="compare-857e42a00fe8bb91c4e8c287a5cb9f3f"></a>

### [`00a3ed58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3e/00a3ed58.md) → [`00a3edac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3e/00a3edac.md) FUN_00a3edac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a3ed70 ["INT_ADD", "register:40f0:8", ["const:a3ed70:8", "const:4:8"]]
- 00a3ed70 ["CALL", null, ["callee:005c17dc:8"]]
+ 00a3edc4 ["INT_ADD", "register:40f0:8", ["const:a3edc4:8", "const:4:8"]]
+ 00a3edc4 ["CALL", null, ["callee:005c17dc:8"]]
~~~


<a id="compare-b74378806ff738f872e5086fbabc85fc"></a>

### [`00a3ef78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3e/00a3ef78.md) → [`00a3efcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3e/00a3efcc.md) FUN_00a3efcc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a3ef90 ["INT_ADD", "register:40f0:8", ["const:a3ef90:8", "const:4:8"]]
- 00a3ef90 ["CALL", null, ["callee:005c17dc:8"]]
+ 00a3efe4 ["INT_ADD", "register:40f0:8", ["const:a3efe4:8", "const:4:8"]]
+ 00a3efe4 ["CALL", null, ["callee:005c17dc:8"]]
~~~


<a id="compare-45e1c215b356c8fe88d737e673eeb8f7"></a>

### [`00a3efa8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3e/00a3efa8.md) → [`00a3effc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3e/00a3effc.md) FUN_00a3effc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a3e9d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3e/00a3e9d0.md) · 呼出先 2件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00a3ea24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3e/00a3ea24.md) · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a3efc0 ["INT_ADD", "register:40f0:8", ["const:a3efc0:8", "const:4:8"]]
- 00a3efc0 ["CALL", null, ["callee:005c17dc:8"]]
+ 00a3f014 ["INT_ADD", "register:40f0:8", ["const:a3f014:8", "const:4:8"]]
+ 00a3f014 ["CALL", null, ["callee:005c17dc:8"]]
- 00a3efcc ["INT_ADD", "register:40f0:8", ["const:a3efcc:8", "const:4:8"]]
- 00a3efcc ["CALL", null, ["callee:005c17dc:8"]]
+ 00a3f020 ["INT_ADD", "register:40f0:8", ["const:a3f020:8", "const:4:8"]]
+ 00a3f020 ["CALL", null, ["callee:005c17dc:8"]]
~~~


