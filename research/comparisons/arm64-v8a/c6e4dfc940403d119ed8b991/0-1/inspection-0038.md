# v16.0.1 → v16.0.2 · 要調査の変更候補 (38)

[一覧の目次](README.md)

<a id="compare-cf2d91665c70941efdd0e046b8e02cca"></a>

### [`00b0efd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0e/00b0efd8.md) → [`00b0f074`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0f/00b0f074.md) FUN_00b0f074

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a223d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a22/00a223d0.md) · 呼出先 1件 [`00480e28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480e28.md)
- 新版 呼出元 1件 [`00a22424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a22/00a22424.md) · 呼出先 1件 [`00480e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480e68.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0eff8 ["INT_ADD", "register:40f0:8", ["const:b0eff8:8", "const:4:8"]]
- 00b0eff8 ["CALL", null, ["callee:00480e68:8"]]
+ 00b0f094 ["INT_ADD", "register:40f0:8", ["const:b0f094:8", "const:4:8"]]
+ 00b0f094 ["CALL", null, ["callee:00480e68:8"]]
~~~


<a id="compare-fb66cc46c8d66ca90e128904f6462b8b"></a>

### [`00b0f40c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0f/00b0f40c.md) → [`00b0f4a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0f/00b0f4a8.md) FUN_00b0f4a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00b0f5f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0f/00b0f5f4.md) · 呼出先 7件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00b10d34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b10/00b10d34.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`00b0f690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0f/00b0f690.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00b10dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b10/00b10dd0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b0f44c ["INT_ADD", "register:40f0:8", ["const:b0f44c:8", "const:4:8"]]
- 00b0f44c ["CALL", null, ["callee:0048797c:8"]]
+ 00b0f4e8 ["INT_ADD", "register:40f0:8", ["const:b0f4e8:8", "const:4:8"]]
+ 00b0f4e8 ["CALL", null, ["callee:0048797c:8"]]
- 00b0f45c ["INT_ADD", "register:40f0:8", ["const:b0f45c:8", "const:4:8"]]
- 00b0f45c ["CALL", null, ["callee:0048797c:8"]]
+ 00b0f4f8 ["INT_ADD", "register:40f0:8", ["const:b0f4f8:8", "const:4:8"]]
+ 00b0f4f8 ["CALL", null, ["callee:0048797c:8"]]
- 00b0f484 ["INT_ADD", "register:40f0:8", ["const:b0f484:8", "const:4:8"]]
- 00b0f484 ["CALL", null, ["callee:0048795c:8"]]
+ 00b0f520 ["INT_ADD", "register:40f0:8", ["const:b0f520:8", "const:4:8"]]
+ 00b0f520 ["CALL", null, ["callee:0048795c:8"]]
~~~


<a id="compare-b3ab92c51b8ff9cee432e0facb446aff"></a>

### [`00b1ee84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b1e/00b1ee84.md) → [`00b1ef20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1e/00b1ef20.md) FUN_00b1ef20

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b1e088`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b1e/00b1e088.md) · 呼出先 3件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00b1e124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1e/00b1e124.md) · 呼出先 3件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b1eee4 ["INT_ADD", "register:40f0:8", ["const:b1eee4:8", "const:4:8"]]
- 00b1eee4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b1ef80 ["INT_ADD", "register:40f0:8", ["const:b1ef80:8", "const:4:8"]]
+ 00b1ef80 ["CALL", null, ["callee:00c57f60:8"]]
- 00b1ef3c ["INT_ADD", "register:40f0:8", ["const:b1ef3c:8", "const:4:8"]]
- 00b1ef3c ["CALL", null, ["callee:00c57f80:8"]]
+ 00b1efd8 ["INT_ADD", "register:40f0:8", ["const:b1efd8:8", "const:4:8"]]
+ 00b1efd8 ["CALL", null, ["callee:00c57f80:8"]]
- 00b1ef74 ["INT_ADD", "register:40f0:8", ["const:b1ef74:8", "const:4:8"]]
- 00b1ef74 ["CALL", null, ["callee:00440f00:8"]]
+ 00b1f010 ["INT_ADD", "register:40f0:8", ["const:b1f010:8", "const:4:8"]]
+ 00b1f010 ["CALL", null, ["callee:00440f00:8"]]
~~~


<a id="compare-3f690a4d51b526a5cdf12bbe1e674cb0"></a>

### [`00b28e0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b28/00b28e0c.md) → [`00b28ea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ea8.md) FUN_00b28ea8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b1f428`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b1f/00b1f428.md) · 呼出先 1件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md)
- 新版 呼出元 1件 [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b28e68 ["INT_ADD", "register:40f0:8", ["const:b28e68:8", "const:4:8"]]
- 00b28e68 ["CALL", null, ["callee:0043bb60:8"]]
+ 00b28f04 ["INT_ADD", "register:40f0:8", ["const:b28f04:8", "const:4:8"]]
+ 00b28f04 ["CALL", null, ["callee:0043bb60:8"]]
- 00b28e90 ["INT_ADD", "register:40f0:8", ["const:b28e90:8", "const:4:8"]]
- 00b28e90 ["CALL", null, ["callee:0043bb60:8"]]
+ 00b28f2c ["INT_ADD", "register:40f0:8", ["const:b28f2c:8", "const:4:8"]]
+ 00b28f2c ["CALL", null, ["callee:0043bb60:8"]]
~~~


<a id="compare-61acbd982751e9776e485e805a087be3"></a>

### [`00b28ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b28/00b28ef0.md) → [`00b28f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28f8c.md) FUN_00b28f8c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b28f2c ["INT_ADD", "register:40f0:8", ["const:b28f2c:8", "const:4:8"]]
- 00b28f2c ["CALL", null, ["callee:00c57f80:8"]]
+ 00b28fc8 ["INT_ADD", "register:40f0:8", ["const:b28fc8:8", "const:4:8"]]
+ 00b28fc8 ["CALL", null, ["callee:00c57f80:8"]]
- 00b28f3c ["INT_ADD", "register:40f0:8", ["const:b28f3c:8", "const:4:8"]]
- 00b28f3c ["CALL", null, ["callee:00c57f80:8"]]
+ 00b28fd8 ["INT_ADD", "register:40f0:8", ["const:b28fd8:8", "const:4:8"]]
+ 00b28fd8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-1909b75d1867d962f77421dee59e5a3a"></a>

### [`00b29cd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b29/00b29cd8.md) → [`00b29d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b29/00b29d74.md) FUN_00b29d74

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b132fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b13/00b132fc.md) · 呼出先 6件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00b29e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b29/00b29e6c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00b13398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b13/00b13398.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00b29f08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b29/00b29f08.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b29d80 ["INT_ADD", "register:40f0:8", ["const:b29d80:8", "const:4:8"]]
- 00b29d80 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b29e1c ["INT_ADD", "register:40f0:8", ["const:b29e1c:8", "const:4:8"]]
+ 00b29e1c ["CALL", null, ["callee:00c57f60:8"]]
- 00b29dc0 ["INT_ADD", "register:40f0:8", ["const:b29dc0:8", "const:4:8"]]
- 00b29dc0 ["CALL", null, ["callee:00c58160:8"]]
+ 00b29e5c ["INT_ADD", "register:40f0:8", ["const:b29e5c:8", "const:4:8"]]
+ 00b29e5c ["CALL", null, ["callee:00c58160:8"]]
- 00b29e04 ["INT_ADD", "register:40f0:8", ["const:b29e04:8", "const:4:8"]]
- 00b29e04 ["CALL", null, ["callee:00c58160:8"]]
+ 00b29ea0 ["INT_ADD", "register:40f0:8", ["const:b29ea0:8", "const:4:8"]]
+ 00b29ea0 ["CALL", null, ["callee:00c58160:8"]]
~~~


<a id="compare-789d79951baf51333fcc01ccbb57c123"></a>

### [`00b29e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b29/00b29e80.md) → [`00b29f1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b29/00b29f1c.md) FUN_00b29f1c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b132fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b13/00b132fc.md) · 呼出先 6件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00b2a010`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2a/00b2a010.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00b13398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b13/00b13398.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00b2a0ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a0ac.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b29f24 ["INT_ADD", "register:40f0:8", ["const:b29f24:8", "const:4:8"]]
- 00b29f24 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b29fc0 ["INT_ADD", "register:40f0:8", ["const:b29fc0:8", "const:4:8"]]
+ 00b29fc0 ["CALL", null, ["callee:00c57f60:8"]]
- 00b29f64 ["INT_ADD", "register:40f0:8", ["const:b29f64:8", "const:4:8"]]
- 00b29f64 ["CALL", null, ["callee:00c58160:8"]]
+ 00b2a000 ["INT_ADD", "register:40f0:8", ["const:b2a000:8", "const:4:8"]]
+ 00b2a000 ["CALL", null, ["callee:00c58160:8"]]
- 00b29fb0 ["INT_ADD", "register:40f0:8", ["const:b29fb0:8", "const:4:8"]]
- 00b29fb0 ["CALL", null, ["callee:00c58160:8"]]
+ 00b2a04c ["INT_ADD", "register:40f0:8", ["const:b2a04c:8", "const:4:8"]]
+ 00b2a04c ["CALL", null, ["callee:00c58160:8"]]
~~~


<a id="compare-5f0010c0ec2ff66a10691f11b721ae65"></a>

### [`00b2a024`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2a/00b2a024.md) → [`00b2a0c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a0c0.md) FUN_00b2a0c0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b132fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b13/00b132fc.md) · 呼出先 6件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00b2a150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2a/00b2a150.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00b13398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b13/00b13398.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00b2a1ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a1ec.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2a09c ["INT_ADD", "register:40f0:8", ["const:b2a09c:8", "const:4:8"]]
- 00b2a09c ["CALL", null, ["callee:00c57f60:8"]]
+ 00b2a138 ["INT_ADD", "register:40f0:8", ["const:b2a138:8", "const:4:8"]]
+ 00b2a138 ["CALL", null, ["callee:00c57f60:8"]]
- 00b2a0c0 ["INT_ADD", "register:40f0:8", ["const:b2a0c0:8", "const:4:8"]]
- 00b2a0c0 ["CALL", null, ["callee:00c58160:8"]]
+ 00b2a15c ["INT_ADD", "register:40f0:8", ["const:b2a15c:8", "const:4:8"]]
+ 00b2a15c ["CALL", null, ["callee:00c58160:8"]]
- 00b2a0ec ["INT_ADD", "register:40f0:8", ["const:b2a0ec:8", "const:4:8"]]
- 00b2a0ec ["CALL", null, ["callee:00c58160:8"]]
+ 00b2a188 ["INT_ADD", "register:40f0:8", ["const:b2a188:8", "const:4:8"]]
+ 00b2a188 ["CALL", null, ["callee:00c58160:8"]]
~~~


<a id="compare-13788baf7ec36c6ab89b6c0c7754d1f8"></a>

### [`00b2a164`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2a/00b2a164.md) → [`00b2a200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a200.md) FUN_00b2a200

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b132fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b13/00b132fc.md) · 呼出先 6件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00b2a2f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2a/00b2a2f8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00b13398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b13/00b13398.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00b2a394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a394.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2a20c ["INT_ADD", "register:40f0:8", ["const:b2a20c:8", "const:4:8"]]
- 00b2a20c ["CALL", null, ["callee:00c57f60:8"]]
+ 00b2a2a8 ["INT_ADD", "register:40f0:8", ["const:b2a2a8:8", "const:4:8"]]
+ 00b2a2a8 ["CALL", null, ["callee:00c57f60:8"]]
- 00b2a24c ["INT_ADD", "register:40f0:8", ["const:b2a24c:8", "const:4:8"]]
- 00b2a24c ["CALL", null, ["callee:00c58160:8"]]
+ 00b2a2e8 ["INT_ADD", "register:40f0:8", ["const:b2a2e8:8", "const:4:8"]]
+ 00b2a2e8 ["CALL", null, ["callee:00c58160:8"]]
- 00b2a290 ["INT_ADD", "register:40f0:8", ["const:b2a290:8", "const:4:8"]]
- 00b2a290 ["CALL", null, ["callee:00c58160:8"]]
+ 00b2a32c ["INT_ADD", "register:40f0:8", ["const:b2a32c:8", "const:4:8"]]
+ 00b2a32c ["CALL", null, ["callee:00c58160:8"]]
~~~


<a id="compare-e09ab9e48a6914eecffada46d0f21dfb"></a>

### [`00b2a30c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2a/00b2a30c.md) → [`00b2a3a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a3a8.md) FUN_00b2a3a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b132fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b13/00b132fc.md) · 呼出先 6件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00b2a49c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2a/00b2a49c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00b13398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b13/00b13398.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00b2a538`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a538.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2a3b0 ["INT_ADD", "register:40f0:8", ["const:b2a3b0:8", "const:4:8"]]
- 00b2a3b0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b2a44c ["INT_ADD", "register:40f0:8", ["const:b2a44c:8", "const:4:8"]]
+ 00b2a44c ["CALL", null, ["callee:00c57f60:8"]]
- 00b2a3f0 ["INT_ADD", "register:40f0:8", ["const:b2a3f0:8", "const:4:8"]]
- 00b2a3f0 ["CALL", null, ["callee:00c58160:8"]]
+ 00b2a48c ["INT_ADD", "register:40f0:8", ["const:b2a48c:8", "const:4:8"]]
+ 00b2a48c ["CALL", null, ["callee:00c58160:8"]]
- 00b2a43c ["INT_ADD", "register:40f0:8", ["const:b2a43c:8", "const:4:8"]]
- 00b2a43c ["CALL", null, ["callee:00c58160:8"]]
+ 00b2a4d8 ["INT_ADD", "register:40f0:8", ["const:b2a4d8:8", "const:4:8"]]
+ 00b2a4d8 ["CALL", null, ["callee:00c58160:8"]]
~~~


<a id="compare-5c5617fda52dbb5238b0bb8b7eb4b791"></a>

### [`00b2a4c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2a/00b2a4c4.md) → [`00b2a560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a560.md) FUN_00b2a560

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b132fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b13/00b132fc.md) · 呼出先 6件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00b2a5f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2a/00b2a5f0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00b13398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b13/00b13398.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00b2a68c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a68c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2a53c ["INT_ADD", "register:40f0:8", ["const:b2a53c:8", "const:4:8"]]
- 00b2a53c ["CALL", null, ["callee:00c57f60:8"]]
+ 00b2a5d8 ["INT_ADD", "register:40f0:8", ["const:b2a5d8:8", "const:4:8"]]
+ 00b2a5d8 ["CALL", null, ["callee:00c57f60:8"]]
- 00b2a560 ["INT_ADD", "register:40f0:8", ["const:b2a560:8", "const:4:8"]]
- 00b2a560 ["CALL", null, ["callee:00c58160:8"]]
+ 00b2a5fc ["INT_ADD", "register:40f0:8", ["const:b2a5fc:8", "const:4:8"]]
+ 00b2a5fc ["CALL", null, ["callee:00c58160:8"]]
- 00b2a58c ["INT_ADD", "register:40f0:8", ["const:b2a58c:8", "const:4:8"]]
- 00b2a58c ["CALL", null, ["callee:00c58160:8"]]
+ 00b2a628 ["INT_ADD", "register:40f0:8", ["const:b2a628:8", "const:4:8"]]
+ 00b2a628 ["CALL", null, ["callee:00c58160:8"]]
~~~


<a id="compare-5996beab3c40aef06a6fb706597a1b3f"></a>

### [`00b2a83c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2a/00b2a83c.md) → [`00b2a8d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a8d8.md) FUN_00b2a8d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b1f428`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b1f/00b1f428.md) · 呼出先 6件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00b2aab0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2a/00b2aab0.md) [`00b2aac4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2a/00b2aac4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00b2ab4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2ab4c.md) [`00b2ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2ab60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2a8dc ["INT_ADD", "register:40f0:8", ["const:b2a8dc:8", "const:4:8"]]
- 00b2a8dc ["CALL", null, ["callee:00c57f60:8"]]
+ 00b2a978 ["INT_ADD", "register:40f0:8", ["const:b2a978:8", "const:4:8"]]
+ 00b2a978 ["CALL", null, ["callee:00c57f60:8"]]
- 00b2a96c ["INT_ADD", "register:40f0:8", ["const:b2a96c:8", "const:4:8"]]
- 00b2a96c ["CALL", null, ["callee:00b2ab60:8"]]
+ 00b2aa08 ["INT_ADD", "register:40f0:8", ["const:b2aa08:8", "const:4:8"]]
+ 00b2aa08 ["CALL", null, ["callee:00b2ab60:8"]]
- 00b2a988 ["INT_ADD", "register:40f0:8", ["const:b2a988:8", "const:4:8"]]
- 00b2a988 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b2aa24 ["INT_ADD", "register:40f0:8", ["const:b2aa24:8", "const:4:8"]]
+ 00b2aa24 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-f0b4b7bc6318714843adb94cb4b4d223"></a>

### [`00b2aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2a/00b2aa10.md) → [`00b2aaac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2aaac.md) FUN_00b2aaac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2aa60 ["INT_ADD", "register:40f0:8", ["const:b2aa60:8", "const:4:8"]]
- 00b2aa60 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b2aafc ["INT_ADD", "register:40f0:8", ["const:b2aafc:8", "const:4:8"]]
+ 00b2aafc ["CALL", null, ["callee:00c57f80:8"]]
- 00b2aa70 ["INT_ADD", "register:40f0:8", ["const:b2aa70:8", "const:4:8"]]
- 00b2aa70 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b2ab0c ["INT_ADD", "register:40f0:8", ["const:b2ab0c:8", "const:4:8"]]
+ 00b2ab0c ["CALL", null, ["callee:00c57f80:8"]]
- 00b2aa80 ["INT_ADD", "register:40f0:8", ["const:b2aa80:8", "const:4:8"]]
- 00b2aa80 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b2ab1c ["INT_ADD", "register:40f0:8", ["const:b2ab1c:8", "const:4:8"]]
+ 00b2ab1c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-336cd127b9adeb6d47962f6e19dbd297"></a>

### [`00b2aac4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2a/00b2aac4.md) → [`00b2ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2ab60.md) FUN_00b2ab60

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b2a83c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2a/00b2a83c.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00b2a8d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a8d8.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2ab84 ["INT_ADD", "register:40f0:8", ["const:b2ab84:8", "const:4:8"]]
- 00b2ab84 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b2ac20 ["INT_ADD", "register:40f0:8", ["const:b2ac20:8", "const:4:8"]]
+ 00b2ac20 ["CALL", null, ["callee:00c57f80:8"]]
- 00b2ab94 ["INT_ADD", "register:40f0:8", ["const:b2ab94:8", "const:4:8"]]
- 00b2ab94 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b2ac30 ["INT_ADD", "register:40f0:8", ["const:b2ac30:8", "const:4:8"]]
+ 00b2ac30 ["CALL", null, ["callee:00c57f80:8"]]
- 00b2aba4 ["INT_ADD", "register:40f0:8", ["const:b2aba4:8", "const:4:8"]]
- 00b2aba4 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b2ac40 ["INT_ADD", "register:40f0:8", ["const:b2ac40:8", "const:4:8"]]
+ 00b2ac40 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-0ba0518c28c856d25c826b33acdca748"></a>

### [`00b2abcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2a/00b2abcc.md) → [`00b2ac68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2ac68.md) FUN_00b2ac68

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b1f428`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b1f/00b1f428.md) · 呼出先 7件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0054075c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00540/0054075c.md) [`00794b6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00794/00794b6c.md) [`0080da5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0080d/0080da5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0054079c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/0054079c.md) [`00794bc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00794/00794bc4.md) [`0080dab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080d/0080dab4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2ac70 ["INT_ADD", "register:40f0:8", ["const:b2ac70:8", "const:4:8"]]
- 00b2ac70 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b2ad0c ["INT_ADD", "register:40f0:8", ["const:b2ad0c:8", "const:4:8"]]
+ 00b2ad0c ["CALL", null, ["callee:00c57f60:8"]]
- 00b2acb8 ["INT_ADD", "register:40f0:8", ["const:b2acb8:8", "const:4:8"]]
- 00b2acb8 ["CALL", null, ["callee:0054079c:8"]]
+ 00b2ad54 ["INT_ADD", "register:40f0:8", ["const:b2ad54:8", "const:4:8"]]
+ 00b2ad54 ["CALL", null, ["callee:0054079c:8"]]
- 00b2acd0 ["INT_ADD", "register:40f0:8", ["const:b2acd0:8", "const:4:8"]]
- 00b2acd0 ["CALL", null, ["callee:0080dab4:8"]]
+ 00b2ad6c ["INT_ADD", "register:40f0:8", ["const:b2ad6c:8", "const:4:8"]]
+ 00b2ad6c ["CALL", null, ["callee:0080dab4:8"]]
~~~


<a id="compare-c0754a2be9b35a614cd559b2af860bd0"></a>

### [`00b2addc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2a/00b2addc.md) → [`00b2ae78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2ae78.md) FUN_00b2ae78

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b1f428`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b1f/00b1f428.md) · 呼出先 4件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`005e8198`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e8/005e8198.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`005e81d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e81d8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2ae5c ["INT_ADD", "register:40f0:8", ["const:b2ae5c:8", "const:4:8"]]
- 00b2ae5c ["CALL", null, ["callee:00c57f60:8"]]
+ 00b2aef8 ["INT_ADD", "register:40f0:8", ["const:b2aef8:8", "const:4:8"]]
+ 00b2aef8 ["CALL", null, ["callee:00c57f60:8"]]
- 00b2ae90 ["INT_ADD", "register:40f0:8", ["const:b2ae90:8", "const:4:8"]]
- 00b2ae90 ["CALL", null, ["callee:005e81d8:8"]]
+ 00b2af2c ["INT_ADD", "register:40f0:8", ["const:b2af2c:8", "const:4:8"]]
+ 00b2af2c ["CALL", null, ["callee:005e81d8:8"]]
- 00b2ae9c ["INT_ADD", "register:40f0:8", ["const:b2ae9c:8", "const:4:8"]]
- 00b2ae9c ["CALL", null, ["callee:005e81d8:8"]]
+ 00b2af38 ["INT_ADD", "register:40f0:8", ["const:b2af38:8", "const:4:8"]]
+ 00b2af38 ["CALL", null, ["callee:005e81d8:8"]]
~~~


<a id="compare-29b5e8fd9be7abcf72c16d47a7baa98d"></a>

### [`00b2af48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2a/00b2af48.md) → [`00b2afe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2afe4.md) FUN_00b2afe4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b1f428`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b1f/00b1f428.md) · 呼出先 6件 [`00615ecc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00615/00615ecc.md) [`006524c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00652/006524c0.md) [`0065254c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00652/0065254c.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 6件 [`00615f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00615/00615f0c.md) [`00652500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652500.md) [`0065258c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/0065258c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2afc0 ["INT_ADD", "register:40f0:8", ["const:b2afc0:8", "const:4:8"]]
- 00b2afc0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b2b05c ["INT_ADD", "register:40f0:8", ["const:b2b05c:8", "const:4:8"]]
+ 00b2b05c ["CALL", null, ["callee:00c57f60:8"]]
- 00b2afe4 ["INT_ADD", "register:40f0:8", ["const:b2afe4:8", "const:4:8"]]
- 00b2afe4 ["CALL", null, ["callee:0065258c:8"]]
+ 00b2b080 ["INT_ADD", "register:40f0:8", ["const:b2b080:8", "const:4:8"]]
+ 00b2b080 ["CALL", null, ["callee:0065258c:8"]]
- 00b2b034 ["INT_ADD", "register:40f0:8", ["const:b2b034:8", "const:4:8"]]
- 00b2b034 ["CALL", null, ["callee:00615f0c:8"]]
+ 00b2b0d0 ["INT_ADD", "register:40f0:8", ["const:b2b0d0:8", "const:4:8"]]
+ 00b2b0d0 ["CALL", null, ["callee:00615f0c:8"]]
~~~


<a id="compare-50e97a7e2de068af7653b5eeffd95d40"></a>

### [`00b2b2f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2b/00b2b2f4.md) → [`00b2b390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2b/00b2b390.md) FUN_00b2b390

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b2b070`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2b/00b2b070.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00b2b10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2b/00b2b10c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2b370 ["INT_ADD", "register:40f0:8", ["const:b2b370:8", "const:4:8"]]
- 00b2b370 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b2b40c ["INT_ADD", "register:40f0:8", ["const:b2b40c:8", "const:4:8"]]
+ 00b2b40c ["CALL", null, ["callee:00c57f80:8"]]
- 00b2b3b8 ["INT_ADD", "register:40f0:8", ["const:b2b3b8:8", "const:4:8"]]
- 00b2b3b8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b2b454 ["INT_ADD", "register:40f0:8", ["const:b2b454:8", "const:4:8"]]
+ 00b2b454 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-1421151b73533b21c1a6b9f67a47f9d1"></a>

### [`00b2b410`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2b/00b2b410.md) → [`00b2b4ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2b/00b2b4ac.md) FUN_00b2b4ac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b2b070`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2b/00b2b070.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00b2b10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2b/00b2b10c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2b444 ["INT_ADD", "register:40f0:8", ["const:b2b444:8", "const:4:8"]]
- 00b2b444 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b2b4e0 ["INT_ADD", "register:40f0:8", ["const:b2b4e0:8", "const:4:8"]]
+ 00b2b4e0 ["CALL", null, ["callee:00c57f80:8"]]
- 00b2b494 ["INT_ADD", "register:40f0:8", ["const:b2b494:8", "const:4:8"]]
- 00b2b494 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b2b530 ["INT_ADD", "register:40f0:8", ["const:b2b530:8", "const:4:8"]]
+ 00b2b530 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-d14324d9d9d8ea65f9eb49a9c0b601b6"></a>

### [`00b2bbcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2b/00b2bbcc.md) → [`00b2bc68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2b/00b2bc68.md) FUN_00b2bc68

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0043b5a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b5a8.md) [`0043b658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b658.md) · 呼出先 4件 [`0046caa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046caa4.md) [`0046cabc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046cabc.md) [`0046cac8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046cac8.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`0043b5e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b5e8.md) [`0043b698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b698.md) · 呼出先 4件 [`0046cae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cae4.md) [`0046cafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cafc.md) [`0046cb08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cb08.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2bbdc ["INT_ADD", "register:40f0:8", ["const:b2bbdc:8", "const:4:8"]]
- 00b2bbdc ["CALL", null, ["callee:00851550:8"]]
+ 00b2bc78 ["INT_ADD", "register:40f0:8", ["const:b2bc78:8", "const:4:8"]]
+ 00b2bc78 ["CALL", null, ["callee:00851550:8"]]
- 00b2bbe4 ["INT_ADD", "register:40f0:8", ["const:b2bbe4:8", "const:4:8"]]
- 00b2bbe4 ["CALL", null, ["callee:0046cafc:8"]]
+ 00b2bc80 ["INT_ADD", "register:40f0:8", ["const:b2bc80:8", "const:4:8"]]
+ 00b2bc80 ["CALL", null, ["callee:0046cafc:8"]]
- 00b2bbec ["INT_ADD", "register:40f0:8", ["const:b2bbec:8", "const:4:8"]]
- 00b2bbec ["CALL", null, ["callee:00851550:8"]]
+ 00b2bc88 ["INT_ADD", "register:40f0:8", ["const:b2bc88:8", "const:4:8"]]
+ 00b2bc88 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-132d1067d1e4ac8ada49868339314148"></a>

### [`00b2bc34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2b/00b2bc34.md) → [`00b2bcd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2b/00b2bcd0.md) FUN_00b2bcd0

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0043b428`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b428.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`0043b468`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b468.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2bc44 ["INT_ADD", "register:40f0:8", ["const:b2bc44:8", "const:4:8"]]
- 00b2bc44 ["CALL", null, ["callee:00851550:8"]]
+ 00b2bce0 ["INT_ADD", "register:40f0:8", ["const:b2bce0:8", "const:4:8"]]
+ 00b2bce0 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-2d2541974b9497af995dd96bde22ee62"></a>

### [`00b2d25c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2d/00b2d25c.md) → [`00b2d2f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d2f8.md) FUN_00b2d2f8

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0043b368`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b368.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`0043b3a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b3a8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2d278 ["INT_ADD", "register:40f0:8", ["const:b2d278:8", "const:4:8"]]
- 00b2d278 ["CALL", null, ["callee:00851550:8"]]
+ 00b2d314 ["INT_ADD", "register:40f0:8", ["const:b2d314:8", "const:4:8"]]
+ 00b2d314 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-8cb382db91b39a5738d8df368fbca7d8"></a>

### [`00b2d2a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2d/00b2d2a4.md) → [`00b2d340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d340.md) FUN_00b2d340

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0043b368`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b368.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`0043b3a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b3a8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2d2c0 ["INT_ADD", "register:40f0:8", ["const:b2d2c0:8", "const:4:8"]]
- 00b2d2c0 ["CALL", null, ["callee:00851550:8"]]
+ 00b2d35c ["INT_ADD", "register:40f0:8", ["const:b2d35c:8", "const:4:8"]]
+ 00b2d35c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-a191113179284e3dff96991f0ec73619"></a>

### [`00b2d2ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2d/00b2d2ec.md) → [`00b2d388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d388.md) FUN_00b2d388

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0043b368`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b368.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`0043b3a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b3a8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2d308 ["INT_ADD", "register:40f0:8", ["const:b2d308:8", "const:4:8"]]
- 00b2d308 ["CALL", null, ["callee:00851550:8"]]
+ 00b2d3a4 ["INT_ADD", "register:40f0:8", ["const:b2d3a4:8", "const:4:8"]]
+ 00b2d3a4 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-b1b5da0900bf65e3efdc293e8ec138c6"></a>

### [`00b2d414`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2d/00b2d414.md) → [`00b2d4b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d4b0.md) FUN_00b2d4b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2d41c ["INT_ADD", "register:40f0:8", ["const:b2d41c:8", "const:4:8"]]
- 00b2d41c ["CALL", null, ["callee:00851550:8"]]
+ 00b2d4b8 ["INT_ADD", "register:40f0:8", ["const:b2d4b8:8", "const:4:8"]]
+ 00b2d4b8 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-5712cb91d0a6dee67131764f77688e81"></a>

### [`00b2d498`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2d/00b2d498.md) → [`00b2d534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d534.md) FUN_00b2d534

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2d4a0 ["INT_ADD", "register:40f0:8", ["const:b2d4a0:8", "const:4:8"]]
- 00b2d4a0 ["CALL", null, ["callee:00851550:8"]]
+ 00b2d53c ["INT_ADD", "register:40f0:8", ["const:b2d53c:8", "const:4:8"]]
+ 00b2d53c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-172e1ad389ff7e361e83967018ebd284"></a>

### [`00b2d824`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2d/00b2d824.md) → [`00b2d8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d8c0.md) FUN_00b2d8c0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b2c450`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2c/00b2c450.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00b2c4ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2c/00b2c4ec.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2d844 ["INT_ADD", "register:40f0:8", ["const:b2d844:8", "const:4:8"]]
- 00b2d844 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b2d8e0 ["INT_ADD", "register:40f0:8", ["const:b2d8e0:8", "const:4:8"]]
+ 00b2d8e0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-6f8487b240e3e5214d85acd0b86f8c66"></a>

### [`00b2f880`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2f/00b2f880.md) → [`00b2f91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2f91c.md) FUN_00b2f91c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 19件 [`0060a8a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0060a/0060a8a0.md) [`00664a8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00664/00664a8c.md) [`00664bcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00664/00664bcc.md) [`00664c28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00664/00664c28.md) [`00665110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00665/00665110.md) · 呼出先 1件 [`00b3be94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3be94.md)
- 新版 呼出元 19件 [`0060a8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060a/0060a8e0.md) [`00664acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664acc.md) [`00664c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664c0c.md) [`00664c68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664c68.md) [`00665150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00665/00665150.md) · 呼出先 1件 [`00b3bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bf30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2f888 ["INT_ADD", "register:40f0:8", ["const:b2f888:8", "const:4:8"]]
- 00b2f888 ["CALL", null, ["callee:00b3bf30:8"]]
+ 00b2f924 ["INT_ADD", "register:40f0:8", ["const:b2f924:8", "const:4:8"]]
+ 00b2f924 ["CALL", null, ["callee:00b3bf30:8"]]
~~~


<a id="compare-195c0928bbb0d2308a446923a1ba64df"></a>

### [`00b2f9b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2f/00b2f9b8.md) → [`00b2fa54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2fa54.md) FUN_00b2fa54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 32件 [`005afc78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005af/005afc78.md) [`005fdc58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fd/005fdc58.md) [`0063d914`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0063d/0063d914.md) [`0064a530`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064a/0064a530.md) [`006535a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00653/006535a0.md) · 呼出先 1件 [`00b3be94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3be94.md)
- 新版 呼出元 32件 [`005afcb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005af/005afcb8.md) [`005fdc98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fd/005fdc98.md) [`0063d954`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063d/0063d954.md) [`0064a570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064a/0064a570.md) [`006535e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/006535e0.md) · 呼出先 1件 [`00b3bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bf30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b2f9cc ["INT_ADD", "register:40f0:8", ["const:b2f9cc:8", "const:4:8"]]
- 00b2f9cc ["CALL", null, ["callee:00b3bf30:8"]]
+ 00b2fa68 ["INT_ADD", "register:40f0:8", ["const:b2fa68:8", "const:4:8"]]
+ 00b2fa68 ["CALL", null, ["callee:00b3bf30:8"]]
- 00b2f9e8 ["INT_ADD", "register:40f0:8", ["const:b2f9e8:8", "const:4:8"]]
- 00b2f9e8 ["CALL", null, ["callee:00b3bf30:8"]]
+ 00b2fa84 ["INT_ADD", "register:40f0:8", ["const:b2fa84:8", "const:4:8"]]
+ 00b2fa84 ["CALL", null, ["callee:00b3bf30:8"]]
~~~


<a id="compare-2558602a8d8f89e7bb28679a719b660b"></a>

### [`00b34700`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b34/00b34700.md) → [`00b3479c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b3479c.md) FUN_00b3479c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b3471c ["INT_ADD", "register:40f0:8", ["const:b3471c:8", "const:4:8"]]
- 00b3471c ["CALL", null, ["callee:0046d4d0:8"]]
+ 00b347b8 ["INT_ADD", "register:40f0:8", ["const:b347b8:8", "const:4:8"]]
+ 00b347b8 ["CALL", null, ["callee:0046d4d0:8"]]
- 00b34758 ["INT_ADD", "register:40f0:8", ["const:b34758:8", "const:4:8"]]
- 00b34758 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b347f4 ["INT_ADD", "register:40f0:8", ["const:b347f4:8", "const:4:8"]]
+ 00b347f4 ["CALL", null, ["callee:00c57f80:8"]]
- 00b34768 ["INT_ADD", "register:40f0:8", ["const:b34768:8", "const:4:8"]]
- 00b34768 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b34804 ["INT_ADD", "register:40f0:8", ["const:b34804:8", "const:4:8"]]
+ 00b34804 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-40ff3a9a7cc51d1e3d19299b11646cb7"></a>

### [`00b34798`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b34/00b34798.md) → [`00b34834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b34834.md) FUN_00b34834

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00b34280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b34/00b34280.md) [`00b369f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b36/00b369f4.md) · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 2件 [`00b3431c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b3431c.md) [`00b36a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b36a90.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b34804 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b34804 ["INT_ADD", "register:40f0:8", ["const:b34804:8", "const:4:8"]]
- 00b34804 ["CALLIND", null, ["register:0:8"]]
+ 00b348a0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b348a0 ["INT_ADD", "register:40f0:8", ["const:b348a0:8", "const:4:8"]]
+ 00b348a0 ["CALLIND", null, ["register:0:8"]]
- 00b34814 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b34814 ["INT_ADD", "register:40f0:8", ["const:b34814:8", "const:4:8"]]
- 00b34814 ["CALLIND", null, ["register:0:8"]]
+ 00b348b0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b348b0 ["INT_ADD", "register:40f0:8", ["const:b348b0:8", "const:4:8"]]
+ 00b348b0 ["CALLIND", null, ["register:0:8"]]
- 00b34834 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b34834 ["INT_ADD", "register:40f0:8", ["const:b34834:8", "const:4:8"]]
- 00b34834 ["CALLIND", null, ["register:0:8"]]
+ 00b348d0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b348d0 ["INT_ADD", "register:40f0:8", ["const:b348d0:8", "const:4:8"]]
+ 00b348d0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-19ca1d86005e22656abe29c05055fd59"></a>

### [`00b34900`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b34/00b34900.md) → [`00b3499c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b3499c.md) FUN_00b3499c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00b34348`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b34/00b34348.md) [`00b36abc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b36/00b36abc.md) · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 2件 [`00b343e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b343e4.md) [`00b36b58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b36b58.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b3496c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b3496c ["INT_ADD", "register:40f0:8", ["const:b3496c:8", "const:4:8"]]
- 00b3496c ["CALLIND", null, ["register:0:8"]]
+ 00b34a08 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b34a08 ["INT_ADD", "register:40f0:8", ["const:b34a08:8", "const:4:8"]]
+ 00b34a08 ["CALLIND", null, ["register:0:8"]]
- 00b3497c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b3497c ["INT_ADD", "register:40f0:8", ["const:b3497c:8", "const:4:8"]]
- 00b3497c ["CALLIND", null, ["register:0:8"]]
+ 00b34a18 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b34a18 ["INT_ADD", "register:40f0:8", ["const:b34a18:8", "const:4:8"]]
+ 00b34a18 ["CALLIND", null, ["register:0:8"]]
- 00b3499c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b3499c ["INT_ADD", "register:40f0:8", ["const:b3499c:8", "const:4:8"]]
- 00b3499c ["CALLIND", null, ["register:0:8"]]
+ 00b34a38 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b34a38 ["INT_ADD", "register:40f0:8", ["const:b34a38:8", "const:4:8"]]
+ 00b34a38 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9d9eafe8d0ef2c3021e4d854e107077e"></a>

### [`00b34a68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b34/00b34a68.md) → [`00b34b04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b34b04.md) FUN_00b34b04

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b34410`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b34/00b34410.md) · 呼出先 9件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00440f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00b344ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b344ac.md) · 呼出先 9件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00440f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f9c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b34b08 ["INT_ADD", "register:40f0:8", ["const:b34b08:8", "const:4:8"]]
- 00b34b08 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b34ba4 ["INT_ADD", "register:40f0:8", ["const:b34ba4:8", "const:4:8"]]
+ 00b34ba4 ["CALL", null, ["callee:00c57f60:8"]]
- 00b34b2c ["INT_ADD", "register:40f0:8", ["const:b34b2c:8", "const:4:8"]]
- 00b34b2c ["CALL", null, ["callee:00c580b0:8"]]
+ 00b34bc8 ["INT_ADD", "register:40f0:8", ["const:b34bc8:8", "const:4:8"]]
+ 00b34bc8 ["CALL", null, ["callee:00c580b0:8"]]
- 00b34b70 ["INT_ADD", "register:40f0:8", ["const:b34b70:8", "const:4:8"]]
- 00b34b70 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b34c0c ["INT_ADD", "register:40f0:8", ["const:b34c0c:8", "const:4:8"]]
+ 00b34c0c ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-7e3b1a4c826976315956aa01b050e464"></a>

### [`00b34c64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b34/00b34c64.md) → [`00b34d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b34d00.md) FUN_00b34d00

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b34410`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b34/00b34410.md) · 呼出先 9件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00440f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00b344ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b344ac.md) · 呼出先 9件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00440f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f9c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b34d04 ["INT_ADD", "register:40f0:8", ["const:b34d04:8", "const:4:8"]]
- 00b34d04 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b34da0 ["INT_ADD", "register:40f0:8", ["const:b34da0:8", "const:4:8"]]
+ 00b34da0 ["CALL", null, ["callee:00c57f60:8"]]
- 00b34d28 ["INT_ADD", "register:40f0:8", ["const:b34d28:8", "const:4:8"]]
- 00b34d28 ["CALL", null, ["callee:00c580b0:8"]]
+ 00b34dc4 ["INT_ADD", "register:40f0:8", ["const:b34dc4:8", "const:4:8"]]
+ 00b34dc4 ["CALL", null, ["callee:00c580b0:8"]]
- 00b34d6c ["INT_ADD", "register:40f0:8", ["const:b34d6c:8", "const:4:8"]]
- 00b34d6c ["CALL", null, ["callee:00c57f60:8"]]
+ 00b34e08 ["INT_ADD", "register:40f0:8", ["const:b34e08:8", "const:4:8"]]
+ 00b34e08 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-79029bf78ea4cc3f0976ef3a86b10db6"></a>

### [`00b35e78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b35/00b35e78.md) → [`00b35f14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b35f14.md) FUN_00b35f14

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00b35d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b35/00b35d04.md) [`00b35e78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b35/00b35e78.md) · 呼出先 2件 [`00b35e78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b35/00b35e78.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`00b35da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b35da0.md) [`00b35f14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b35f14.md) · 呼出先 2件 [`00b35f14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b35f14.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b35e94 ["INT_ADD", "register:40f0:8", ["const:b35e94:8", "const:4:8"]]
- 00b35e94 ["CALL", null, ["local:b0:8"]]
+ 00b35f30 ["INT_ADD", "register:40f0:8", ["const:b35f30:8", "const:4:8"]]
+ 00b35f30 ["CALL", null, ["local:b0:8"]]
- 00b35ea0 ["INT_ADD", "register:40f0:8", ["const:b35ea0:8", "const:4:8"]]
- 00b35ea0 ["CALL", null, ["local:b0:8"]]
+ 00b35f3c ["INT_ADD", "register:40f0:8", ["const:b35f3c:8", "const:4:8"]]
+ 00b35f3c ["CALL", null, ["local:b0:8"]]
- 00b35ed4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b35ed4 ["INT_ADD", "register:40f0:8", ["const:b35ed4:8", "const:4:8"]]
- 00b35ed4 ["CALLIND", null, ["register:0:8"]]
+ 00b35f70 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b35f70 ["INT_ADD", "register:40f0:8", ["const:b35f70:8", "const:4:8"]]
+ 00b35f70 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6444fd0b5c00418b3f694827967bb753"></a>

### [`00b372f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b37/00b372f8.md) → [`00b37394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37394.md) FUN_00b37394

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00b38e88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b38/00b38e88.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00b38f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b38/00b38f24.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b37334 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b37334 ["INT_ADD", "register:40f0:8", ["const:b37334:8", "const:4:8"]]
- 00b37334 ["CALLIND", null, ["register:0:8"]]
+ 00b373d0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b373d0 ["INT_ADD", "register:40f0:8", ["const:b373d0:8", "const:4:8"]]
+ 00b373d0 ["CALLIND", null, ["register:0:8"]]
- 00b37364 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b37364 ["INT_ADD", "register:40f0:8", ["const:b37364:8", "const:4:8"]]
- 00b37364 ["CALLIND", null, ["register:0:8"]]
+ 00b37400 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b37400 ["INT_ADD", "register:40f0:8", ["const:b37400:8", "const:4:8"]]
+ 00b37400 ["CALLIND", null, ["register:0:8"]]
- 00b37394 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b37394 ["INT_ADD", "register:40f0:8", ["const:b37394:8", "const:4:8"]]
- 00b37394 ["CALLIND", null, ["register:0:8"]]
+ 00b37430 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b37430 ["INT_ADD", "register:40f0:8", ["const:b37430:8", "const:4:8"]]
+ 00b37430 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-83147957698a9aeff9bade0f56d35e09"></a>

### [`00b39cfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b39/00b39cfc.md) → [`00b39d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b39/00b39d98.md) FUN_00b39d98

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00b39964`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b39/00b39964.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00b39a00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b39/00b39a00.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b39d44 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b39d44 ["INT_ADD", "register:40f0:8", ["const:b39d44:8", "const:4:8"]]
- 00b39d44 ["CALLIND", null, ["register:0:8"]]
+ 00b39de0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b39de0 ["INT_ADD", "register:40f0:8", ["const:b39de0:8", "const:4:8"]]
+ 00b39de0 ["CALLIND", null, ["register:0:8"]]
- 00b39d84 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b39d84 ["INT_ADD", "register:40f0:8", ["const:b39d84:8", "const:4:8"]]
- 00b39d84 ["CALLIND", null, ["register:0:8"]]
+ 00b39e20 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b39e20 ["INT_ADD", "register:40f0:8", ["const:b39e20:8", "const:4:8"]]
+ 00b39e20 ["CALLIND", null, ["register:0:8"]]
- 00b39dbc ["COPY", "register:0:8", ["register:4040:8"]]
- 00b39dbc ["INT_ADD", "register:40f0:8", ["const:b39dbc:8", "const:4:8"]]
- 00b39dbc ["CALLIND", null, ["register:0:8"]]
+ 00b39e58 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b39e58 ["INT_ADD", "register:40f0:8", ["const:b39e58:8", "const:4:8"]]
+ 00b39e58 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-102be877ce665bd8a5e3ca6c98d66316"></a>

### [`00b3b3d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3b3d0.md) → [`00b3b46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b46c.md) FUN_00b3b46c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b39f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b39/00b39f54.md) · 呼出先 5件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00b3b508`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3b508.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00b39ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b39/00b39ff0.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00b3b5a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b5a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b3b404 ["INT_ADD", "register:40f0:8", ["const:b3b404:8", "const:4:8"]]
- 00b3b404 ["CALL", null, ["callee:00b3b5a4:8"]]
+ 00b3b4a0 ["INT_ADD", "register:40f0:8", ["const:b3b4a0:8", "const:4:8"]]
+ 00b3b4a0 ["CALL", null, ["callee:00b3b5a4:8"]]
- 00b3b424 ["INT_ADD", "register:40f0:8", ["const:b3b424:8", "const:4:8"]]
- 00b3b424 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b3b4c0 ["INT_ADD", "register:40f0:8", ["const:b3b4c0:8", "const:4:8"]]
+ 00b3b4c0 ["CALL", null, ["callee:00c57f60:8"]]
- 00b3b460 ["INT_ADD", "register:40f0:8", ["const:b3b460:8", "const:4:8"]]
- 00b3b460 ["CALL", null, ["callee:0043bb60:8"]]
+ 00b3b4fc ["INT_ADD", "register:40f0:8", ["const:b3b4fc:8", "const:4:8"]]
+ 00b3b4fc ["CALL", null, ["callee:0043bb60:8"]]
~~~


<a id="compare-912192f2449b33804dca4c041266fc76"></a>

### [`00b3be68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3b/00b3be68.md) → [`00b3bf04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bf04.md) FUN_00b3bf04

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0083f884`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083f/0083f884.md) [`00846508`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00846/00846508.md) · 呼出先 1件 [`005e8198`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e8/005e8198.md)
- 新版 呼出元 2件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) [`00846560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00846/00846560.md) · 呼出先 1件 [`005e81d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e81d8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b3be7c ["INT_ADD", "register:40f0:8", ["const:b3be7c:8", "const:4:8"]]
- 00b3be7c ["CALL", null, ["callee:005e81d8:8"]]
+ 00b3bf18 ["INT_ADD", "register:40f0:8", ["const:b3bf18:8", "const:4:8"]]
+ 00b3bf18 ["CALL", null, ["callee:005e81d8:8"]]
~~~


<a id="compare-9c7570801705a216e072b0f3a470885c"></a>

### [`00b3d4b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3d/00b3d4b8.md) → [`00b3d554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3d/00b3d554.md) FUN_00b3d554

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 1件 [`00b3e53c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3e/00b3e53c.md) · 呼出先 1件 [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md)
- 新版 呼出元 1件 [`00b3e5d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3e/00b3e5d8.md) · 呼出先 1件 [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 97.73% / 新版 97.73%

アドレスに依存する影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b3d4dc",
      "incomplete_value": true,
      "site": "00b3d4e4",
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
    "new": {
      "definition_site": "00b3d5c0",
      "incomplete_value": true,
      "site": "00b3d5c8",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b3d5e0",
      "incomplete_value": true,
      "site": "00b3d5e8",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
    "ordinal": 7,
    "slot": 1
  }
]
~~~


~~~diff
- 00b3d4e4 ["INT_ADD", "register:40f0:8", ["const:b3d4e4:8", "const:4:8"]]
- 00b3d4e4 ["CALL", null, ["callee:0048797c:8"]]
+ 00b3d580 ["INT_ADD", "register:40f0:8", ["const:b3d580:8", "const:4:8"]]
+ 00b3d580 ["CALL", null, ["callee:0048797c:8"]]
- 00b3d52c ["INT_ADD", "register:40f0:8", ["const:b3d52c:8", "const:4:8"]]
- 00b3d52c ["CALL", null, ["callee:0048797c:8"]]
+ 00b3d5c8 ["INT_ADD", "register:40f0:8", ["const:b3d5c8:8", "const:4:8"]]
+ 00b3d5c8 ["CALL", null, ["callee:0048797c:8"]]
- 00b3d54c ["INT_ADD", "register:40f0:8", ["const:b3d54c:8", "const:4:8"]]
- 00b3d54c ["CALL", null, ["callee:0048797c:8"]]
+ 00b3d5e8 ["INT_ADD", "register:40f0:8", ["const:b3d5e8:8", "const:4:8"]]
+ 00b3d5e8 ["CALL", null, ["callee:0048797c:8"]]
~~~


<a id="compare-2839cd0c517818ee397eca7912259e3f"></a>

### [`00b3fea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3f/00b3fea4.md) → [`00b3ff40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3ff40.md) FUN_00b3ff40

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b403ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b403ac.md) · 呼出先 2件 [`00c5a940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a940.md) [`00c5ac60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac60.md)
- 新版 呼出元 1件 [`00b40448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40448.md) · 呼出先 2件 [`00c5aa10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aa10.md) [`00c5ad30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b3feb4 ["INT_ADD", "register:40f0:8", ["const:b3feb4:8", "const:4:8"]]
- 00b3feb4 ["CALL", null, ["callee:00c5ad30:8"]]
+ 00b3ff50 ["INT_ADD", "register:40f0:8", ["const:b3ff50:8", "const:4:8"]]
+ 00b3ff50 ["CALL", null, ["callee:00c5ad30:8"]]
~~~


<a id="compare-a6887ff53db4b13735c2d3268ece889d"></a>

### [`00b44120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b44120.md) → [`00b441bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b441bc.md) FUN_00b441bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00b44150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b44150.md) [`00b4464c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b4464c.md) [`00b44678`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b44678.md) · 呼出先 2件 [`00b446c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b446c0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 3件 [`00b441ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b441ec.md) [`00b446e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b446e8.md) [`00b44714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44714.md) · 呼出先 2件 [`00b4475c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b4475c.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b44134 ["INT_ADD", "register:40f0:8", ["const:b44134:8", "const:4:8"]]
- 00b44134 ["CALL", null, ["callee:00b4475c:8"]]
+ 00b441d0 ["INT_ADD", "register:40f0:8", ["const:b441d0:8", "const:4:8"]]
+ 00b441d0 ["CALL", null, ["callee:00b4475c:8"]]
- 00b4414c ["INT_ADD", "register:40f0:8", ["const:b4414c:8", "const:4:8"]]
- 00b4414c ["CALL", null, ["callee:00c5b210:8"]]
+ 00b441e8 ["INT_ADD", "register:40f0:8", ["const:b441e8:8", "const:4:8"]]
+ 00b441e8 ["CALL", null, ["callee:00c5b210:8"]]
~~~


<a id="compare-c4efc423fee9a2bcdc471636419fc17b"></a>

### [`00b443cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b443cc.md) → [`00b44468`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44468.md) _ZN8firebase10LogWarningEPKcz

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ade0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ade0.md) · 呼出先 2件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5b120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b120.md)
- 新版 呼出元 1件 [`00c5aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aeb0.md) · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b1f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b1f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b44448 ["INT_ADD", "register:40f0:8", ["const:b44448:8", "const:4:8"]]
- 00b44448 ["CALL", null, ["callee:00c5b1f0:8"]]
+ 00b444e4 ["INT_ADD", "register:40f0:8", ["const:b444e4:8", "const:4:8"]]
+ 00b444e4 ["CALL", null, ["callee:00c5b1f0:8"]]
- 00b4446c ["INT_ADD", "register:40f0:8", ["const:b4446c:8", "const:4:8"]]
- 00b4446c ["CALL", null, ["callee:00c57fb0:8"]]
+ 00b44508 ["INT_ADD", "register:40f0:8", ["const:b44508:8", "const:4:8"]]
+ 00b44508 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-d335eabe0b9f12ce7a0b741021bfc6e3"></a>

### [`00b517a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b51/00b517a0.md) → [`00b5183c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b51/00b5183c.md) FUN_00b5183c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00b44d44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b44/00b44d44.md) [`00b4505c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b45/00b4505c.md) · 呼出先 2件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5b150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b150.md)
- 新版 呼出元 2件 [`00b44de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44de0.md) [`00b450f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b450f8.md) · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b220.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b51810 ["INT_ADD", "register:40f0:8", ["const:b51810:8", "const:4:8"]]
- 00b51810 ["CALL", null, ["callee:00c5b220:8"]]
+ 00b518ac ["INT_ADD", "register:40f0:8", ["const:b518ac:8", "const:4:8"]]
+ 00b518ac ["CALL", null, ["callee:00c5b220:8"]]
- 00b51834 ["INT_ADD", "register:40f0:8", ["const:b51834:8", "const:4:8"]]
- 00b51834 ["CALL", null, ["callee:00c57fb0:8"]]
+ 00b518d0 ["INT_ADD", "register:40f0:8", ["const:b518d0:8", "const:4:8"]]
+ 00b518d0 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-961928220be6ae6e6b3c8934371c174f"></a>

### [`00b54430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b54/00b54430.md) → [`00b544cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b544cc.md) _ZN7_JNIEnv16CallDoubleMethodEP8_jobjectP10_jmethodIDz

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b230`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b230.md) · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00c5b300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b300.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b544a4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b544a4 ["INT_ADD", "register:40f0:8", ["const:b544a4:8", "const:4:8"]]
- 00b544a4 ["CALLIND", null, ["register:0:8"]]
+ 00b54540 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b54540 ["INT_ADD", "register:40f0:8", ["const:b54540:8", "const:4:8"]]
+ 00b54540 ["CALLIND", null, ["register:0:8"]]
- 00b544c8 ["INT_ADD", "register:40f0:8", ["const:b544c8:8", "const:4:8"]]
- 00b544c8 ["CALL", null, ["callee:00c57fb0:8"]]
+ 00b54564 ["INT_ADD", "register:40f0:8", ["const:b54564:8", "const:4:8"]]
+ 00b54564 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-a9bde79a9523efeb11b92637f1f2fbc3"></a>

### [`00b5488c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b54/00b5488c.md) → [`00b54928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b54/00b54928.md) _ZN8firebase4util22JBooleanArrayToVariantEP7_JNIEnvP14_jbooleanArray

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b4b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b4b0.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a840.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5b580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b580.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b548cc ["COPY", "register:0:8", ["register:4048:8"]]
- 00b548cc ["INT_ADD", "register:40f0:8", ["const:b548cc:8", "const:4:8"]]
- 00b548cc ["CALLIND", null, ["register:0:8"]]
+ 00b54968 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b54968 ["INT_ADD", "register:40f0:8", ["const:b54968:8", "const:4:8"]]
+ 00b54968 ["CALLIND", null, ["register:0:8"]]
- 00b548e8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b548e8 ["INT_ADD", "register:40f0:8", ["const:b548e8:8", "const:4:8"]]
- 00b548e8 ["CALLIND", null, ["register:0:8"]]
+ 00b54984 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b54984 ["INT_ADD", "register:40f0:8", ["const:b54984:8", "const:4:8"]]
+ 00b54984 ["CALLIND", null, ["register:0:8"]]
- 00b548f4 ["INT_ADD", "register:40f0:8", ["const:b548f4:8", "const:4:8"]]
- 00b548f4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b54990 ["INT_ADD", "register:40f0:8", ["const:b54990:8", "const:4:8"]]
+ 00b54990 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-f97ce712871a934f189cc821fe9a6df0"></a>

### [`00b579bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b57/00b579bc.md) → [`00b57a58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b57/00b57a58.md) _ZN8firebase4util16GetJNIEnvFromAppEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b340`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b340.md) · 呼出先 3件 [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md) [`00c5b250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b250.md) [`00c5b260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b260.md)
- 新版 呼出元 1件 [`00c5b410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b410.md) · 呼出先 3件 [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b320.md) [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b579c4 ["INT_ADD", "register:40f0:8", ["const:b579c4:8", "const:4:8"]]
- 00b579c4 ["CALL", null, ["callee:00c5b320:8"]]
+ 00b57a60 ["INT_ADD", "register:40f0:8", ["const:b57a60:8", "const:4:8"]]
+ 00b57a60 ["CALL", null, ["callee:00c5b320:8"]]
- 00b579cc ["INT_ADD", "register:40f0:8", ["const:b579cc:8", "const:4:8"]]
- 00b579cc ["CALL", null, ["callee:00c5b330:8"]]
+ 00b57a68 ["INT_ADD", "register:40f0:8", ["const:b57a68:8", "const:4:8"]]
+ 00b57a68 ["CALL", null, ["callee:00c5b330:8"]]
~~~


<a id="compare-bb8b3a3acdbf78653ea00e2c5bfea9c7"></a>

### [`00b5ac9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5a/00b5ac9c.md) → [`00b5ad38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5a/00b5ad38.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_mmRKS4_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b7f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b7f0.md) · 呼出先 3件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5b8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b8c0.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5ad1c ["INT_ADD", "register:40f0:8", ["const:b5ad1c:8", "const:4:8"]]
- 00b5ad1c ["CALL", null, ["callee:00c57f60:8"]]
+ 00b5adb8 ["INT_ADD", "register:40f0:8", ["const:b5adb8:8", "const:4:8"]]
+ 00b5adb8 ["CALL", null, ["callee:00c57f60:8"]]
- 00b5ad3c ["INT_ADD", "register:40f0:8", ["const:b5ad3c:8", "const:4:8"]]
- 00b5ad3c ["CALL", null, ["callee:00c580d0:8"]]
+ 00b5add8 ["INT_ADD", "register:40f0:8", ["const:b5add8:8", "const:4:8"]]
+ 00b5add8 ["CALL", null, ["callee:00c580d0:8"]]
- 00b5ad58 ["INT_ADD", "register:40f0:8", ["const:b5ad58:8", "const:4:8"]]
- 00b5ad58 ["CALL", null, ["callee:00c5b210:8"]]
+ 00b5adf4 ["INT_ADD", "register:40f0:8", ["const:b5adf4:8", "const:4:8"]]
+ 00b5adf4 ["CALL", null, ["callee:00c5b210:8"]]
~~~


<a id="compare-1283e512890d09436a939b4b8869deba"></a>

### [`00b5ad5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5a/00b5ad5c.md) → [`00b5adf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5a/00b5adf8.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_10unique_ptrIN8firebase10app_common7AppDa

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b800`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b800.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5b8d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b8d0.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5adf8 ["INT_ADD", "register:40f0:8", ["const:b5adf8:8", "const:4:8"]]
- 00b5adf8 ["CALL", null, ["callee:00c58120:8"]]
+ 00b5ae94 ["INT_ADD", "register:40f0:8", ["const:b5ae94:8", "const:4:8"]]
+ 00b5ae94 ["CALL", null, ["callee:00c58120:8"]]
- 00b5ae38 ["INT_ADD", "register:40f0:8", ["const:b5ae38:8", "const:4:8"]]
- 00b5ae38 ["CALL", null, ["callee:00c58120:8"]]
+ 00b5aed4 ["INT_ADD", "register:40f0:8", ["const:b5aed4:8", "const:4:8"]]
+ 00b5aed4 ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-b71697edd61a77bca393d355f672671e"></a>

### [`00b5ae7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5a/00b5ae7c.md) → [`00b5af18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5a/00b5af18.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_10unique_ptrIN8firebase10app_common7AppDa

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b810`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b810.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5b8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b8e0.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5af14 ["INT_ADD", "register:40f0:8", ["const:b5af14:8", "const:4:8"]]
- 00b5af14 ["CALL", null, ["callee:00c58120:8"]]
+ 00b5afb0 ["INT_ADD", "register:40f0:8", ["const:b5afb0:8", "const:4:8"]]
+ 00b5afb0 ["CALL", null, ["callee:00c58120:8"]]
- 00b5af5c ["INT_ADD", "register:40f0:8", ["const:b5af5c:8", "const:4:8"]]
- 00b5af5c ["CALL", null, ["callee:00c58120:8"]]
+ 00b5aff8 ["INT_ADD", "register:40f0:8", ["const:b5aff8:8", "const:4:8"]]
+ 00b5aff8 ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-e806e7beab1d75e5e5ff50937d3a29f8"></a>

### [`00b5af90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5a/00b5af90.md) → [`00b5b02c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b02c.md) _ZNSt6__ndk16vectorIPN8firebase3AppENS_9allocatorIS3_EEE21__push_back_slow_pathIRKS3_EEvOT_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b840.md) · 呼出先 4件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5b910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b910.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5aff4 ["INT_ADD", "register:40f0:8", ["const:b5aff4:8", "const:4:8"]]
- 00b5aff4 ["CALL", null, ["callee:00c5b210:8"]]
+ 00b5b090 ["INT_ADD", "register:40f0:8", ["const:b5b090:8", "const:4:8"]]
+ 00b5b090 ["CALL", null, ["callee:00c5b210:8"]]
- 00b5b000 ["INT_ADD", "register:40f0:8", ["const:b5b000:8", "const:4:8"]]
- 00b5b000 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b5b09c ["INT_ADD", "register:40f0:8", ["const:b5b09c:8", "const:4:8"]]
+ 00b5b09c ["CALL", null, ["callee:00c57f60:8"]]
- 00b5b02c ["INT_ADD", "register:40f0:8", ["const:b5b02c:8", "const:4:8"]]
- 00b5b02c ["CALL", null, ["callee:00c580d0:8"]]
+ 00b5b0c8 ["INT_ADD", "register:40f0:8", ["const:b5b0c8:8", "const:4:8"]]
+ 00b5b0c8 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-9cb44f5a843498de79e094d13b7d4446"></a>

### [`00b5b078`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5b/00b5b078.md) → [`00b5b114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b114.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_10unique_ptrIN8firebase10app_common7AppDa

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b820`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b820.md) · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5ac30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac30.md) [`00c5b160`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b160.md) [`00c5b5d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5d0.md)
- 新版 呼出元 1件 [`00c5b8f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b8f0.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ad00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad00.md) [`00c5b230`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b230.md) [`00c5b6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5b0f4 ["INT_ADD", "register:40f0:8", ["const:b5b0f4:8", "const:4:8"]]
- 00b5b0f4 ["CALL", null, ["callee:00c5b6a0:8"]]
+ 00b5b190 ["INT_ADD", "register:40f0:8", ["const:b5b190:8", "const:4:8"]]
+ 00b5b190 ["CALL", null, ["callee:00c5b6a0:8"]]
- 00b5b108 ["INT_ADD", "register:40f0:8", ["const:b5b108:8", "const:4:8"]]
- 00b5b108 ["CALL", null, ["callee:00c5b230:8"]]
+ 00b5b1a4 ["INT_ADD", "register:40f0:8", ["const:b5b1a4:8", "const:4:8"]]
+ 00b5b1a4 ["CALL", null, ["callee:00c5b230:8"]]
- 00b5b110 ["INT_ADD", "register:40f0:8", ["const:b5b110:8", "const:4:8"]]
- 00b5b110 ["CALL", null, ["callee:00c5ad00:8"]]
+ 00b5b1ac ["INT_ADD", "register:40f0:8", ["const:b5b1ac:8", "const:4:8"]]
+ 00b5b1ac ["CALL", null, ["callee:00c5ad00:8"]]
~~~


<a id="compare-9ee0936b201373bae0e6735154ae42df"></a>

### [`00b5b148`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5b/00b5b148.md) → [`00b5b1e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b1e4.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_10unique_ptrIN8firebase10app_common7AppDa

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b830.md) · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5ac30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac30.md) [`00c5b160`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b160.md) [`00c5b830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b830.md)
- 新版 呼出元 1件 [`00c5b900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b900.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ad00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad00.md) [`00c5b230`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b230.md) [`00c5b900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b900.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5b164 ["INT_ADD", "register:40f0:8", ["const:b5b164:8", "const:4:8"]]
- 00b5b164 ["CALL", null, ["callee:00c5b900:8"]]
+ 00b5b200 ["INT_ADD", "register:40f0:8", ["const:b5b200:8", "const:4:8"]]
+ 00b5b200 ["CALL", null, ["callee:00c5b900:8"]]
- 00b5b170 ["INT_ADD", "register:40f0:8", ["const:b5b170:8", "const:4:8"]]
- 00b5b170 ["CALL", null, ["callee:00c5b900:8"]]
+ 00b5b20c ["INT_ADD", "register:40f0:8", ["const:b5b20c:8", "const:4:8"]]
+ 00b5b20c ["CALL", null, ["callee:00c5b900:8"]]
- 00b5b184 ["INT_ADD", "register:40f0:8", ["const:b5b184:8", "const:4:8"]]
- 00b5b184 ["CALL", null, ["callee:00c5b230:8"]]
+ 00b5b220 ["INT_ADD", "register:40f0:8", ["const:b5b220:8", "const:4:8"]]
+ 00b5b220 ["CALL", null, ["callee:00c5b230:8"]]
~~~


<a id="compare-93ea42d1cc74353b1395b86f67139c7d"></a>

### [`00b5b214`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5b/00b5b214.md) → [`00b5b2b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b2b0.md) _ZNK8firebase10LoggerBase8LogDebugEPKcz

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5b28c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5b28c ["INT_ADD", "register:40f0:8", ["const:b5b28c:8", "const:4:8"]]
- 00b5b28c ["CALLIND", null, ["register:0:8"]]
+ 00b5b328 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5b328 ["INT_ADD", "register:40f0:8", ["const:b5b328:8", "const:4:8"]]
+ 00b5b328 ["CALLIND", null, ["register:0:8"]]
- 00b5b2b8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5b2b8 ["INT_ADD", "register:40f0:8", ["const:b5b2b8:8", "const:4:8"]]
- 00b5b2b8 ["CALLIND", null, ["register:0:8"]]
+ 00b5b354 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5b354 ["INT_ADD", "register:40f0:8", ["const:b5b354:8", "const:4:8"]]
+ 00b5b354 ["CALLIND", null, ["register:0:8"]]
- 00b5b2e0 ["INT_ADD", "register:40f0:8", ["const:b5b2e0:8", "const:4:8"]]
- 00b5b2e0 ["CALL", null, ["callee:00c57fb0:8"]]
+ 00b5b37c ["INT_ADD", "register:40f0:8", ["const:b5b37c:8", "const:4:8"]]
+ 00b5b37c ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-9b0031676817d7eb77a5d2ae80876b32"></a>

### [`00b5b5ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5b/00b5b5ec.md) → [`00b5b688`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b688.md) _ZNK8firebase10LoggerBase9LogAssertEPKcz

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5b664 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5b664 ["INT_ADD", "register:40f0:8", ["const:b5b664:8", "const:4:8"]]
- 00b5b664 ["CALLIND", null, ["register:0:8"]]
+ 00b5b700 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5b700 ["INT_ADD", "register:40f0:8", ["const:b5b700:8", "const:4:8"]]
+ 00b5b700 ["CALLIND", null, ["register:0:8"]]
- 00b5b690 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5b690 ["INT_ADD", "register:40f0:8", ["const:b5b690:8", "const:4:8"]]
- 00b5b690 ["CALLIND", null, ["register:0:8"]]
+ 00b5b72c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5b72c ["INT_ADD", "register:40f0:8", ["const:b5b72c:8", "const:4:8"]]
+ 00b5b72c ["CALLIND", null, ["register:0:8"]]
- 00b5b6b8 ["INT_ADD", "register:40f0:8", ["const:b5b6b8:8", "const:4:8"]]
- 00b5b6b8 ["CALL", null, ["callee:00c57fb0:8"]]
+ 00b5b754 ["INT_ADD", "register:40f0:8", ["const:b5b754:8", "const:4:8"]]
+ 00b5b754 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-c513366622bd49fbc9b0cafb8f47ae33"></a>

### [`00b5b6bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5b/00b5b6bc.md) → [`00b5b758`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b758.md) _ZNK8firebase10LoggerBase10LogMessageENS_8LogLevelEPKcz

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5b73c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5b73c ["INT_ADD", "register:40f0:8", ["const:b5b73c:8", "const:4:8"]]
- 00b5b73c ["CALLIND", null, ["register:0:8"]]
+ 00b5b7d8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5b7d8 ["INT_ADD", "register:40f0:8", ["const:b5b7d8:8", "const:4:8"]]
+ 00b5b7d8 ["CALLIND", null, ["register:0:8"]]
- 00b5b768 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5b768 ["INT_ADD", "register:40f0:8", ["const:b5b768:8", "const:4:8"]]
- 00b5b768 ["CALLIND", null, ["register:0:8"]]
+ 00b5b804 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5b804 ["INT_ADD", "register:40f0:8", ["const:b5b804:8", "const:4:8"]]
+ 00b5b804 ["CALLIND", null, ["register:0:8"]]
- 00b5b794 ["INT_ADD", "register:40f0:8", ["const:b5b794:8", "const:4:8"]]
- 00b5b794 ["CALL", null, ["callee:00c57fb0:8"]]
+ 00b5b830 ["INT_ADD", "register:40f0:8", ["const:b5b830:8", "const:4:8"]]
+ 00b5b830 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-a971237126b0b7d80502b5ac9b75f6cd"></a>

### [`00b5b798`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5b/00b5b798.md) → [`00b5b834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b834.md) _ZNK8firebase10LoggerBase11LogMessageVENS_8LogLevelEPKcSt9__va_list

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5b7d4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5b7d4 ["INT_ADD", "register:40f0:8", ["const:b5b7d4:8", "const:4:8"]]
- 00b5b7d4 ["CALLIND", null, ["register:0:8"]]
+ 00b5b870 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5b870 ["INT_ADD", "register:40f0:8", ["const:b5b870:8", "const:4:8"]]
+ 00b5b870 ["CALLIND", null, ["register:0:8"]]
- 00b5b800 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5b800 ["INT_ADD", "register:40f0:8", ["const:b5b800:8", "const:4:8"]]
- 00b5b800 ["CALLIND", null, ["register:0:8"]]
+ 00b5b89c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5b89c ["INT_ADD", "register:40f0:8", ["const:b5b89c:8", "const:4:8"]]
+ 00b5b89c ["CALLIND", null, ["register:0:8"]]
- 00b5b828 ["INT_ADD", "register:40f0:8", ["const:b5b828:8", "const:4:8"]]
- 00b5b828 ["CALL", null, ["callee:00c57fb0:8"]]
+ 00b5b8c4 ["INT_ADD", "register:40f0:8", ["const:b5b8c4:8", "const:4:8"]]
+ 00b5b8c4 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-e2269212fb2b29cfb0ec2328e33bb411"></a>

### [`00b5b83c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5b/00b5b83c.md) → [`00b5b8d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b8d8.md) _ZNK8firebase12SystemLogger15LogMessageImplVENS_8LogLevelEPKcSt9__va_list

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5b120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b120.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b1f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b1f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5b870 ["INT_ADD", "register:40f0:8", ["const:b5b870:8", "const:4:8"]]
- 00b5b870 ["CALL", null, ["callee:00c5b1f0:8"]]
+ 00b5b90c ["INT_ADD", "register:40f0:8", ["const:b5b90c:8", "const:4:8"]]
+ 00b5b90c ["CALL", null, ["callee:00c5b1f0:8"]]
- 00b5b894 ["INT_ADD", "register:40f0:8", ["const:b5b894:8", "const:4:8"]]
- 00b5b894 ["CALL", null, ["callee:00c57fb0:8"]]
+ 00b5b930 ["INT_ADD", "register:40f0:8", ["const:b5b930:8", "const:4:8"]]
+ 00b5b930 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-66f6f0301b38772b7569d0d8c9fcad0a"></a>

### [`00b5b8ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5b/00b5b8ac.md) → [`00b5b948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5b948.md) _ZNK8firebase6Logger15LogMessageImplVENS_8LogLevelEPKcSt9__va_list

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5b8ec ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5b8ec ["INT_ADD", "register:40f0:8", ["const:b5b8ec:8", "const:4:8"]]
- 00b5b8ec ["CALLIND", null, ["register:0:8"]]
+ 00b5b988 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5b988 ["INT_ADD", "register:40f0:8", ["const:b5b988:8", "const:4:8"]]
+ 00b5b988 ["CALLIND", null, ["register:0:8"]]
- 00b5b918 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5b918 ["INT_ADD", "register:40f0:8", ["const:b5b918:8", "const:4:8"]]
- 00b5b918 ["CALLIND", null, ["register:0:8"]]
+ 00b5b9b4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5b9b4 ["INT_ADD", "register:40f0:8", ["const:b5b9b4:8", "const:4:8"]]
+ 00b5b9b4 ["CALLIND", null, ["register:0:8"]]
- 00b5b940 ["INT_ADD", "register:40f0:8", ["const:b5b940:8", "const:4:8"]]
- 00b5b940 ["CALL", null, ["callee:00c57fb0:8"]]
+ 00b5b9dc ["INT_ADD", "register:40f0:8", ["const:b5b9dc:8", "const:4:8"]]
+ 00b5b9dc ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-9bc17f07f8d7c9608fc6b407177988ce"></a>

### [`00b5ba2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5b/00b5ba2c.md) → [`00b5bac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5b/00b5bac8.md) _ZN8firebase8callback18CallbackDispatcher14FlushCallbacksEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bb20.md) · 呼出先 4件 [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 1件 [`00c5bbf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bbf0.md) · 呼出先 4件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5ba4c ["INT_ADD", "register:40f0:8", ["const:b5ba4c:8", "const:4:8"]]
- 00b5ba4c ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5bae8 ["INT_ADD", "register:40f0:8", ["const:b5bae8:8", "const:4:8"]]
+ 00b5bae8 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5ba64 ["INT_ADD", "register:40f0:8", ["const:b5ba64:8", "const:4:8"]]
- 00b5ba64 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b5bb00 ["INT_ADD", "register:40f0:8", ["const:b5bb00:8", "const:4:8"]]
+ 00b5bb00 ["CALL", null, ["callee:00c57f80:8"]]
- 00b5baa8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5baa8 ["INT_ADD", "register:40f0:8", ["const:b5baa8:8", "const:4:8"]]
- 00b5baa8 ["CALLIND", null, ["register:0:8"]]
+ 00b5bb44 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5bb44 ["INT_ADD", "register:40f0:8", ["const:b5bb44:8", "const:4:8"]]
+ 00b5bb44 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a47710160bf815126c560ade5f3792cd"></a>

### [`00b5c124`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5c/00b5c124.md) → [`00b5c1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5c/00b5c1c0.md) _ZN8firebase8callback18CallbackDispatcher17DispatchCallbacksEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5bb30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bb30.md) · 呼出先 5件 [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5bb00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bb00.md)
- 新版 呼出元 1件 [`00c5bc00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bc00.md) · 呼出先 5件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5bbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bbd0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5c148 ["INT_ADD", "register:40f0:8", ["const:b5c148:8", "const:4:8"]]
- 00b5c148 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5c1e4 ["INT_ADD", "register:40f0:8", ["const:b5c1e4:8", "const:4:8"]]
+ 00b5c1e4 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5c1cc ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5c1cc ["INT_ADD", "register:40f0:8", ["const:b5c1cc:8", "const:4:8"]]
- 00b5c1cc ["CALLIND", null, ["register:0:8"]]
+ 00b5c268 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5c268 ["INT_ADD", "register:40f0:8", ["const:b5c268:8", "const:4:8"]]
+ 00b5c268 ["CALLIND", null, ["register:0:8"]]
- 00b5c1d4 ["INT_ADD", "register:40f0:8", ["const:b5c1d4:8", "const:4:8"]]
- 00b5c1d4 ["CALL", null, ["callee:00c57f50:8"]]
+ 00b5c270 ["INT_ADD", "register:40f0:8", ["const:b5c270:8", "const:4:8"]]
+ 00b5c270 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-865817368083f95d494a8cf28049fd56"></a>

### [`00b5dd1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5d/00b5dd1c.md) → [`00b5ddb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5ddb8.md) _ZNK8firebase4Path14FrontDirectoryEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5bbf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bbf0.md) [`00c5bc00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bc00.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5bcc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bcc0.md) [`00c5bcd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bcd0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5dd54 ["INT_ADD", "register:40f0:8", ["const:b5dd54:8", "const:4:8"]]
- 00b5dd54 ["CALL", null, ["callee:00c5bcd0:8"]]
+ 00b5ddf0 ["INT_ADD", "register:40f0:8", ["const:b5ddf0:8", "const:4:8"]]
+ 00b5ddf0 ["CALL", null, ["callee:00c5bcd0:8"]]
- 00b5dd60 ["INT_ADD", "register:40f0:8", ["const:b5dd60:8", "const:4:8"]]
- 00b5dd60 ["CALL", null, ["callee:00c5bcc0:8"]]
+ 00b5ddfc ["INT_ADD", "register:40f0:8", ["const:b5ddfc:8", "const:4:8"]]
+ 00b5ddfc ["CALL", null, ["callee:00c5bcc0:8"]]
- 00b5dd9c ["INT_ADD", "register:40f0:8", ["const:b5dd9c:8", "const:4:8"]]
- 00b5dd9c ["CALL", null, ["callee:00c57f80:8"]]
+ 00b5de38 ["INT_ADD", "register:40f0:8", ["const:b5de38:8", "const:4:8"]]
+ 00b5de38 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-ee714a2de09137ced4f241606ed76008"></a>

### [`00b5ddf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5d/00b5ddf4.md) → [`00b5de90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5de90.md) _ZNK8firebase4Path17PopFrontDirectoryEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`00b5d458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5d/00b5d458.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5bbf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bbf0.md) [`00c5bc00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bc00.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00b5d4f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5d4f4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5bcc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bcc0.md) [`00c5bcd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bcd0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5de2c ["INT_ADD", "register:40f0:8", ["const:b5de2c:8", "const:4:8"]]
- 00b5de2c ["CALL", null, ["callee:00c5bcd0:8"]]
+ 00b5dec8 ["INT_ADD", "register:40f0:8", ["const:b5dec8:8", "const:4:8"]]
+ 00b5dec8 ["CALL", null, ["callee:00c5bcd0:8"]]
- 00b5de3c ["INT_ADD", "register:40f0:8", ["const:b5de3c:8", "const:4:8"]]
- 00b5de3c ["CALL", null, ["callee:00b5d4f4:8"]]
+ 00b5ded8 ["INT_ADD", "register:40f0:8", ["const:b5ded8:8", "const:4:8"]]
+ 00b5ded8 ["CALL", null, ["callee:00b5d4f4:8"]]
- 00b5de48 ["INT_ADD", "register:40f0:8", ["const:b5de48:8", "const:4:8"]]
- 00b5de48 ["CALL", null, ["callee:00c5bcc0:8"]]
+ 00b5dee4 ["INT_ADD", "register:40f0:8", ["const:b5dee4:8", "const:4:8"]]
+ 00b5dee4 ["CALL", null, ["callee:00c5bcc0:8"]]
~~~


<a id="compare-7ad541359170d1da9bc586cc24894822"></a>

### [`00b5deec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5d/00b5deec.md) → [`00b5df88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5df88.md) _ZN8firebase4Path11GetRelativeERKS0_S2_PS0_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5b0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0b0.md) [`00c5bbe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bbe0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md) [`00c5bcb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bcb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5df18 ["INT_ADD", "register:40f0:8", ["const:b5df18:8", "const:4:8"]]
- 00b5df18 ["CALL", null, ["callee:00c5bcb0:8"]]
+ 00b5dfb4 ["INT_ADD", "register:40f0:8", ["const:b5dfb4:8", "const:4:8"]]
+ 00b5dfb4 ["CALL", null, ["callee:00c5bcb0:8"]]
- 00b5df50 ["INT_ADD", "register:40f0:8", ["const:b5df50:8", "const:4:8"]]
- 00b5df50 ["CALL", null, ["callee:00c5b180:8"]]
+ 00b5dfec ["INT_ADD", "register:40f0:8", ["const:b5dfec:8", "const:4:8"]]
+ 00b5dfec ["CALL", null, ["callee:00c5b180:8"]]
- 00b5df68 ["INT_ADD", "register:40f0:8", ["const:b5df68:8", "const:4:8"]]
- 00b5df68 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b5e004 ["INT_ADD", "register:40f0:8", ["const:b5e004:8", "const:4:8"]]
+ 00b5e004 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-9ea8ad66cd04c0c0a6b6f257539b2e75"></a>

### [`00b5dfa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5d/00b5dfa4.md) → [`00b5e040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5e/00b5e040.md) _ZN8firebase4Path11GetRelativeERKS0_S2_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5bbe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bbe0.md) · 呼出先 6件 [`00b5d458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5d/00b5d458.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5b0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0b0.md)
- 新版 呼出元 1件 [`00c5bcb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bcb0.md) · 呼出先 6件 [`00b5d4f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5d/00b5d4f4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5dfd8 ["INT_ADD", "register:40f0:8", ["const:b5dfd8:8", "const:4:8"]]
- 00b5dfd8 ["CALL", null, ["callee:00c5bcd0:8"]]
+ 00b5e074 ["INT_ADD", "register:40f0:8", ["const:b5e074:8", "const:4:8"]]
+ 00b5e074 ["CALL", null, ["callee:00c5bcd0:8"]]
- 00b5dfe4 ["INT_ADD", "register:40f0:8", ["const:b5dfe4:8", "const:4:8"]]
- 00b5dfe4 ["CALL", null, ["callee:00c5bcd0:8"]]
+ 00b5e080 ["INT_ADD", "register:40f0:8", ["const:b5e080:8", "const:4:8"]]
+ 00b5e080 ["CALL", null, ["callee:00c5bcd0:8"]]
- 00b5e0a0 ["INT_ADD", "register:40f0:8", ["const:b5e0a0:8", "const:4:8"]]
- 00b5e0a0 ["CALL", null, ["callee:00c58120:8"]]
+ 00b5e13c ["INT_ADD", "register:40f0:8", ["const:b5e13c:8", "const:4:8"]]
+ 00b5e13c ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-de058a448a723ebd191a8ae87c0ce921"></a>

### [`00b5e65c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5e/00b5e65c.md) → [`00b5e6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5e/00b5e6f8.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6insertIPKcEENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr38__li

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5bc20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bc20.md) · 呼出先 7件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c5a8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8e0.md)
- 新版 呼出元 1件 [`00c5bcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bcf0.md) · 呼出先 7件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5a9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5e76c ["INT_ADD", "register:40f0:8", ["const:b5e76c:8", "const:4:8"]]
- 00b5e76c ["CALL", null, ["callee:00c5a9b0:8"]]
+ 00b5e808 ["INT_ADD", "register:40f0:8", ["const:b5e808:8", "const:4:8"]]
+ 00b5e808 ["CALL", null, ["callee:00c5a9b0:8"]]
- 00b5e798 ["INT_ADD", "register:40f0:8", ["const:b5e798:8", "const:4:8"]]
- 00b5e798 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b5e834 ["INT_ADD", "register:40f0:8", ["const:b5e834:8", "const:4:8"]]
+ 00b5e834 ["CALL", null, ["callee:00c57f60:8"]]
- 00b5e828 ["INT_ADD", "register:40f0:8", ["const:b5e828:8", "const:4:8"]]
- 00b5e828 ["CALL", null, ["callee:00c5bcf0:8"]]
+ 00b5e8c4 ["INT_ADD", "register:40f0:8", ["const:b5e8c4:8", "const:4:8"]]
+ 00b5e8c4 ["CALL", null, ["callee:00c5bcf0:8"]]
~~~


<a id="compare-bb7262771a5f5f231ddc7715519b6df3"></a>

### [`00b5ebd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5e/00b5ebd4.md) → [`00b5ec70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5e/00b5ec70.md) _ZN8firebase17FutureBackingData22ClearExistingCallbacksEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5bc80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bc80.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00c5bd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bd50.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5ec00 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5ec00 ["INT_ADD", "register:40f0:8", ["const:b5ec00:8", "const:4:8"]]
- 00b5ec00 ["CALLIND", null, ["register:0:8"]]
+ 00b5ec9c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5ec9c ["INT_ADD", "register:40f0:8", ["const:b5ec9c:8", "const:4:8"]]
+ 00b5ec9c ["CALLIND", null, ["register:0:8"]]
- 00b5ec1c ["INT_ADD", "register:40f0:8", ["const:b5ec1c:8", "const:4:8"]]
- 00b5ec1c ["CALL", null, ["callee:00c57f80:8"]]
+ 00b5ecb8 ["INT_ADD", "register:40f0:8", ["const:b5ecb8:8", "const:4:8"]]
+ 00b5ecb8 ["CALL", null, ["callee:00c57f80:8"]]
- 00b5ec78 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5ec78 ["INT_ADD", "register:40f0:8", ["const:b5ec78:8", "const:4:8"]]
- 00b5ec78 ["CALLIND", null, ["register:0:8"]]
+ 00b5ed14 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5ed14 ["INT_ADD", "register:40f0:8", ["const:b5ed14:8", "const:4:8"]]
+ 00b5ed14 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-876873d61703f77779b2bdb8775d80b6"></a>

### [`00b5eec8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5e/00b5eec8.md) → [`00b5ef64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5e/00b5ef64.md) _ZN8firebase26ReferenceCountedFutureImplD0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5bcd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bcd0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bda0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bda0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5eed8 ["INT_ADD", "register:40f0:8", ["const:b5eed8:8", "const:4:8"]]
- 00b5eed8 ["CALL", null, ["callee:00c5bda0:8"]]
+ 00b5ef74 ["INT_ADD", "register:40f0:8", ["const:b5ef74:8", "const:4:8"]]
+ 00b5ef74 ["CALL", null, ["callee:00c5bda0:8"]]
~~~


<a id="compare-f6c3f5eb8031c0387be268aab89a45dd"></a>

### [`00b5f59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5f/00b5f59c.md) → [`00b5f638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5f/00b5f638.md) _ZN8firebase26ReferenceCountedFutureImpl17BackingFromHandleEm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ae80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae80.md) · 呼出先 2件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 1件 [`00c5af50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af50.md) · 呼出先 2件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5f5bc ["INT_ADD", "register:40f0:8", ["const:b5f5bc:8", "const:4:8"]]
- 00b5f5bc ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5f658 ["INT_ADD", "register:40f0:8", ["const:b5f658:8", "const:4:8"]]
+ 00b5f658 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5f608 ["INT_ADD", "register:40f0:8", ["const:b5f608:8", "const:4:8"]]
- 00b5f608 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00b5f6a4 ["INT_ADD", "register:40f0:8", ["const:b5f6a4:8", "const:4:8"]]
+ 00b5f6a4 ["CALL", null, ["callee:00c5aae0:8"]]
~~~


<a id="compare-496c9d85e425bb6228ce7f2880baf31d"></a>

### [`00b5f9b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5f/00b5f9b8.md) → [`00b5fa54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5f/00b5fa54.md) _ZNK8firebase26ReferenceCountedFutureImpl11is_orphanedEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b070`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b070.md) · 呼出先 2件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 1件 [`00c5b140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b140.md) · 呼出先 2件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5f9d0 ["INT_ADD", "register:40f0:8", ["const:b5f9d0:8", "const:4:8"]]
- 00b5f9d0 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5fa6c ["INT_ADD", "register:40f0:8", ["const:b5fa6c:8", "const:4:8"]]
+ 00b5fa6c ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5f9dc ["INT_ADD", "register:40f0:8", ["const:b5f9dc:8", "const:4:8"]]
- 00b5f9dc ["CALL", null, ["callee:00c5aae0:8"]]
+ 00b5fa78 ["INT_ADD", "register:40f0:8", ["const:b5fa78:8", "const:4:8"]]
+ 00b5fa78 ["CALL", null, ["callee:00c5aae0:8"]]
~~~


<a id="compare-d9b13bda7da3f5f9e71273bfe48dad8b"></a>

### [`00b5fa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5f/00b5fa00.md) → [`00b5fa9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5f/00b5fa9c.md) FUN_00b5fa9c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00b5f9f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5f/00b5f9f0.md) · 呼出先 2件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 1件 [`00b5fa8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5f/00b5fa8c.md) · 呼出先 2件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5fa10 ["INT_ADD", "register:40f0:8", ["const:b5fa10:8", "const:4:8"]]
- 00b5fa10 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5faac ["INT_ADD", "register:40f0:8", ["const:b5faac:8", "const:4:8"]]
+ 00b5faac ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5fa28 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5fa28 ["INT_ADD", "register:40f0:8", ["const:b5fa28:8", "const:4:8"]]
- 00b5fa28 ["CALLIND", null, ["register:0:8"]]
+ 00b5fac4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5fac4 ["INT_ADD", "register:40f0:8", ["const:b5fac4:8", "const:4:8"]]
+ 00b5fac4 ["CALLIND", null, ["register:0:8"]]
- 00b5fa3c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b5fa3c ["INT_ADD", "register:40f0:8", ["const:b5fa3c:8", "const:4:8"]]
- 00b5fa3c ["CALLIND", null, ["register:0:8"]]
+ 00b5fad8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b5fad8 ["INT_ADD", "register:40f0:8", ["const:b5fad8:8", "const:4:8"]]
+ 00b5fad8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-896aef138702581a75b6a227fb4a6acc"></a>

### [`00b5fc1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5f/00b5fc1c.md) → [`00b5fcb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5f/00b5fcb8.md) _ZNK8firebase26ReferenceCountedFutureImpl15GetFutureStatusERKNS_12FutureHandleE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b5fc3c ["INT_ADD", "register:40f0:8", ["const:b5fc3c:8", "const:4:8"]]
- 00b5fc3c ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5fcd8 ["INT_ADD", "register:40f0:8", ["const:b5fcd8:8", "const:4:8"]]
+ 00b5fcd8 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5fc48 ["INT_ADD", "register:40f0:8", ["const:b5fc48:8", "const:4:8"]]
- 00b5fc48 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b5fce4 ["INT_ADD", "register:40f0:8", ["const:b5fce4:8", "const:4:8"]]
+ 00b5fce4 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b5fc88 ["INT_ADD", "register:40f0:8", ["const:b5fc88:8", "const:4:8"]]
- 00b5fc88 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00b5fd24 ["INT_ADD", "register:40f0:8", ["const:b5fd24:8", "const:4:8"]]
+ 00b5fd24 ["CALL", null, ["callee:00c5aae0:8"]]
~~~


<a id="compare-0be7fd2d46a091cb35fe6004ddc52d5b"></a>

### [`00b60090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60090.md) → [`00b6012c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b6012c.md) _ZN8firebase26ReferenceCountedFutureImpl24RemoveCompletionCallbackERKNS_12FutureHandleENS_6detail24CompletionCallbackHandleE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b600c8 ["INT_ADD", "register:40f0:8", ["const:b600c8:8", "const:4:8"]]
- 00b600c8 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b60164 ["INT_ADD", "register:40f0:8", ["const:b60164:8", "const:4:8"]]
+ 00b60164 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b600d4 ["INT_ADD", "register:40f0:8", ["const:b600d4:8", "const:4:8"]]
- 00b600d4 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b60170 ["INT_ADD", "register:40f0:8", ["const:b60170:8", "const:4:8"]]
+ 00b60170 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b60114 ["INT_ADD", "register:40f0:8", ["const:b60114:8", "const:4:8"]]
- 00b60114 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00b601b0 ["INT_ADD", "register:40f0:8", ["const:b601b0:8", "const:4:8"]]
+ 00b601b0 ["CALL", null, ["callee:00c5aae0:8"]]
~~~


<a id="compare-1d09b5a25abc8e0950fc83bbe39e7ac3"></a>

### [`00b60494`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60494.md) → [`00b60530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60530.md) FUN_00b60530

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00b60284`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60284.md) · 呼出先 1件 [`00b6112c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b6112c.md)
- 新版 呼出元 1件 [`00b60320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60320.md) · 呼出先 1件 [`00b611c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b611c8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b604c8 ["INT_ADD", "register:40f0:8", ["const:b604c8:8", "const:4:8"]]
- 00b604c8 ["CALL", null, ["callee:00b611c8:8"]]
+ 00b60564 ["INT_ADD", "register:40f0:8", ["const:b60564:8", "const:4:8"]]
+ 00b60564 ["CALL", null, ["callee:00b611c8:8"]]
~~~


<a id="compare-fc07c7e6f8bdc70fd84e5e0be1d3766c"></a>

### [`00b604cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b604cc.md) → [`00b60568`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60568.md) FUN_00b60568

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00b60284`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b60284.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00b60320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60320.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b60508 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b60508 ["INT_ADD", "register:40f0:8", ["const:b60508:8", "const:4:8"]]
- 00b60508 ["CALLIND", null, ["register:0:8"]]
+ 00b605a4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b605a4 ["INT_ADD", "register:40f0:8", ["const:b605a4:8", "const:4:8"]]
+ 00b605a4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-49be804d428decddfc7a4982f9edf3c6"></a>

### [`00b6051c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b6051c.md) → [`00b605b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b605b8.md) _ZNK8firebase26ReferenceCountedFutureImpl14IsSafeToDeleteEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5bce0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bce0.md) · 呼出先 2件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 1件 [`00c5bdb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bdb0.md) · 呼出先 2件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b60534 ["INT_ADD", "register:40f0:8", ["const:b60534:8", "const:4:8"]]
- 00b60534 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b605d0 ["INT_ADD", "register:40f0:8", ["const:b605d0:8", "const:4:8"]]
+ 00b605d0 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b605c8 ["INT_ADD", "register:40f0:8", ["const:b605c8:8", "const:4:8"]]
- 00b605c8 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00b60664 ["INT_ADD", "register:40f0:8", ["const:b60664:8", "const:4:8"]]
+ 00b60664 ["CALL", null, ["callee:00c5aae0:8"]]
~~~


<a id="compare-da7a9a09b9711f3ffb8d578cca562845"></a>

### [`00b605dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b60/00b605dc.md) → [`00b60678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b60/00b60678.md) _ZNK8firebase26ReferenceCountedFutureImpl17IsRunningCallbackEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b605f4 ["INT_ADD", "register:40f0:8", ["const:b605f4:8", "const:4:8"]]
- 00b605f4 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00b60690 ["INT_ADD", "register:40f0:8", ["const:b60690:8", "const:4:8"]]
+ 00b60690 ["CALL", null, ["callee:00c5aad0:8"]]
- 00b60600 ["INT_ADD", "register:40f0:8", ["const:b60600:8", "const:4:8"]]
- 00b60600 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00b6069c ["INT_ADD", "register:40f0:8", ["const:b6069c:8", "const:4:8"]]
+ 00b6069c ["CALL", null, ["callee:00c5aae0:8"]]
~~~


<a id="compare-910739ebe56b3632ee87c42553e5248b"></a>

### [`00b610e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b610e4.md) → [`00b61180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b61180.md) _ZN8firebase12FutureHandle6DetachEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5adf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5adf0.md) · 呼出先 1件 [`00c5ac10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac10.md)
- 新版 呼出元 1件 [`00c5aec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aec0.md) · 呼出先 1件 [`00c5ace0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ace0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b61104 ["INT_ADD", "register:40f0:8", ["const:b61104:8", "const:4:8"]]
- 00b61104 ["CALL", null, ["callee:00c5ace0:8"]]
+ 00b611a0 ["INT_ADD", "register:40f0:8", ["const:b611a0:8", "const:4:8"]]
+ 00b611a0 ["CALL", null, ["callee:00c5ace0:8"]]
- 00b61118 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b61118 ["INT_ADD", "register:40f0:8", ["const:b61118:8", "const:4:8"]]
- 00b61118 ["CALLIND", null, ["register:0:8"]]
+ 00b611b4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b611b4 ["INT_ADD", "register:40f0:8", ["const:b611b4:8", "const:4:8"]]
+ 00b611b4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-534681310095c2d4b76d5ea51bfda294"></a>

### [`00b62a5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b62/00b62a5c.md) → [`00b62af8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b62af8.md) _ZNSt6__ndk16vectorIPFN8firebase10InitResultEPNS1_3AppEPvENS_9allocatorIS7_EEE21__push_back_slow_pathIRKS7_EEvOT_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5bdb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bdb0.md) · 呼出先 4件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5be80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5be80.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b62ac0 ["INT_ADD", "register:40f0:8", ["const:b62ac0:8", "const:4:8"]]
- 00b62ac0 ["CALL", null, ["callee:00c5b210:8"]]
+ 00b62b5c ["INT_ADD", "register:40f0:8", ["const:b62b5c:8", "const:4:8"]]
+ 00b62b5c ["CALL", null, ["callee:00c5b210:8"]]
- 00b62acc ["INT_ADD", "register:40f0:8", ["const:b62acc:8", "const:4:8"]]
- 00b62acc ["CALL", null, ["callee:00c57f60:8"]]
+ 00b62b68 ["INT_ADD", "register:40f0:8", ["const:b62b68:8", "const:4:8"]]
+ 00b62b68 ["CALL", null, ["callee:00c57f60:8"]]
- 00b62af8 ["INT_ADD", "register:40f0:8", ["const:b62af8:8", "const:4:8"]]
- 00b62af8 ["CALL", null, ["callee:00c580d0:8"]]
+ 00b62b94 ["INT_ADD", "register:40f0:8", ["const:b62b94:8", "const:4:8"]]
+ 00b62b94 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-2bed4c9c98b7a89bafab1e6b4fae7e93"></a>

### [`00b62b44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b62/00b62b44.md) → [`00b62be0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b62be0.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEN8firebase10InitResultEEENS_19__map_value_co

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5bd80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bd80.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5bd80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bd80.md)
- 新版 呼出元 1件 [`00c5be50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5be50.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5be50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5be50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b62b60 ["INT_ADD", "register:40f0:8", ["const:b62b60:8", "const:4:8"]]
- 00b62b60 ["CALL", null, ["callee:00c5be50:8"]]
+ 00b62bfc ["INT_ADD", "register:40f0:8", ["const:b62bfc:8", "const:4:8"]]
+ 00b62bfc ["CALL", null, ["callee:00c5be50:8"]]
- 00b62b6c ["INT_ADD", "register:40f0:8", ["const:b62b6c:8", "const:4:8"]]
- 00b62b6c ["CALL", null, ["callee:00c5be50:8"]]
+ 00b62c08 ["INT_ADD", "register:40f0:8", ["const:b62c08:8", "const:4:8"]]
+ 00b62c08 ["CALL", null, ["callee:00c5be50:8"]]
- 00b62b7c ["INT_ADD", "register:40f0:8", ["const:b62b7c:8", "const:4:8"]]
- 00b62b7c ["CALL", null, ["callee:00c57f80:8"]]
+ 00b62c18 ["INT_ADD", "register:40f0:8", ["const:b62c18:8", "const:4:8"]]
+ 00b62c18 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-c3dd8b910f2ad320c3cadf2eb4bf74c7"></a>

### [`00b62dc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b62/00b62dc8.md) → [`00b62e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b62/00b62e64.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN8firebase11AppCallbackEEENS_19__map_value_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5bd90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bd90.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5be60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5be60.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b62e64 ["INT_ADD", "register:40f0:8", ["const:b62e64:8", "const:4:8"]]
- 00b62e64 ["CALL", null, ["callee:00c58120:8"]]
+ 00b62f00 ["INT_ADD", "register:40f0:8", ["const:b62f00:8", "const:4:8"]]
+ 00b62f00 ["CALL", null, ["callee:00c58120:8"]]
- 00b62ea4 ["INT_ADD", "register:40f0:8", ["const:b62ea4:8", "const:4:8"]]
- 00b62ea4 ["CALL", null, ["callee:00c58120:8"]]
+ 00b62f40 ["INT_ADD", "register:40f0:8", ["const:b62f40:8", "const:4:8"]]
+ 00b62f40 ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-ce27915db98874cb457932e73083d4c2"></a>

### [`00b648f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b64/00b648f4.md) → [`00b64990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b64/00b64990.md) FUN_00b64990

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b64750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b64/00b64750.md) · 呼出先 2件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5b150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b150.md)
- 新版 呼出元 1件 [`00b647ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b64/00b647ec.md) · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b220.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b64964 ["INT_ADD", "register:40f0:8", ["const:b64964:8", "const:4:8"]]
- 00b64964 ["CALL", null, ["callee:00c5b220:8"]]
+ 00b64a00 ["INT_ADD", "register:40f0:8", ["const:b64a00:8", "const:4:8"]]
+ 00b64a00 ["CALL", null, ["callee:00c5b220:8"]]
- 00b64988 ["INT_ADD", "register:40f0:8", ["const:b64988:8", "const:4:8"]]
- 00b64988 ["CALL", null, ["callee:00c57fb0:8"]]
+ 00b64a24 ["INT_ADD", "register:40f0:8", ["const:b64a24:8", "const:4:8"]]
+ 00b64a24 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-57167cc46801818d3c3961d8419aeafb"></a>

### [`00b6531c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b6531c.md) → [`00b653b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b653b8.md) _ZNSt6__ndk16__treeINS_12__value_typeIN8firebase7VariantES3_EENS_19__map_value_compareIS3_S4_NS_4lessIS3_EELb1EEENS_9allocatorIS4_EEE7destro

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5be20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be20.md) · 呼出先 3件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5be20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be20.md)
- 新版 呼出元 1件 [`00c5bef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bef0.md) · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5bef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bef0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b65330",
      "incomplete_value": true,
      "site": "00b65338",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "live",
            "register:4008:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 2
  }
]
~~~


~~~diff
- 00b65338 ["INT_ADD", "register:40f0:8", ["const:b65338:8", "const:4:8"]]
- 00b65338 ["CALL", null, ["callee:00c5bef0:8"]]
+ 00b653d4 ["INT_ADD", "register:40f0:8", ["const:b653d4:8", "const:4:8"]]
+ 00b653d4 ["CALL", null, ["callee:00c5bef0:8"]]
- 00b65344 ["INT_ADD", "register:40f0:8", ["const:b65344:8", "const:4:8"]]
- 00b65344 ["CALL", null, ["callee:00c5bef0:8"]]
+ 00b653e0 ["INT_ADD", "register:40f0:8", ["const:b653e0:8", "const:4:8"]]
+ 00b653e0 ["CALL", null, ["callee:00c5bef0:8"]]
- 00b65354 ["INT_ADD", "register:40f0:8", ["const:b65354:8", "const:4:8"]]
- 00b65354 ["CALL", null, ["callee:00c5a900:8"]]
+ 00b653f0 ["INT_ADD", "register:40f0:8", ["const:b653f0:8", "const:4:8"]]
+ 00b653f0 ["CALL", null, ["callee:00c5a900:8"]]
~~~


<a id="compare-8e9db58b5bcf0dc65ac8a78f71602599"></a>

### [`00b65378`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65378.md) → [`00b65414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65414.md) _ZNSt6__ndk16__treeINS_12__value_typeIN8firebase7VariantES3_EENS_19__map_value_compareIS3_S4_NS_4lessIS3_EELb1EEENS_9allocatorIS4_EEE15__emp

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5be10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be10.md) · 呼出先 4件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5a8f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8f0.md) [`00c5b5a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5a0.md) [`00c5b5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5e0.md)
- 新版 呼出元 1件 [`00c5bee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bee0.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5a9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9c0.md) [`00c5b670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b670.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b65394 ["INT_ADD", "register:40f0:8", ["const:b65394:8", "const:4:8"]]
- 00b65394 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b65430 ["INT_ADD", "register:40f0:8", ["const:b65430:8", "const:4:8"]]
+ 00b65430 ["CALL", null, ["callee:00c57f60:8"]]
- 00b653ac ["INT_ADD", "register:40f0:8", ["const:b653ac:8", "const:4:8"]]
- 00b653ac ["CALL", null, ["callee:00c5a9c0:8"]]
+ 00b65448 ["INT_ADD", "register:40f0:8", ["const:b65448:8", "const:4:8"]]
+ 00b65448 ["CALL", null, ["callee:00c5a9c0:8"]]
- 00b653bc ["INT_ADD", "register:40f0:8", ["const:b653bc:8", "const:4:8"]]
- 00b653bc ["CALL", null, ["callee:00c5a9c0:8"]]
+ 00b65458 ["INT_ADD", "register:40f0:8", ["const:b65458:8", "const:4:8"]]
+ 00b65458 ["CALL", null, ["callee:00c5a9c0:8"]]
~~~


<a id="compare-80a38c127d95c463845a800cae294ca3"></a>

### [`00b66bf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b66bf8.md) → [`00b66c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66c94.md) _ZN8firebase3AppD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b7c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b7c0.md) · 呼出先 7件 [`00879c88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/00879c88.md) [`00b66a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b66a48.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5b1c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b1c0.md) [`00c5b3c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b3c0.md)
- 新版 呼出元 1件 [`00c5b890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b890.md) · 呼出先 7件 [`00879ce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/00879ce0.md) [`00b66ae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66ae4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b290.md) [`00c5b490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b490.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b66c0c ["INT_ADD", "register:40f0:8", ["const:b66c0c:8", "const:4:8"]]
- 00b66c0c ["CALL", null, ["callee:00c5b830:8"]]
+ 00b66ca8 ["INT_ADD", "register:40f0:8", ["const:b66ca8:8", "const:4:8"]]
+ 00b66ca8 ["CALL", null, ["callee:00c5b830:8"]]
- 00b66c18 ["INT_ADD", "register:40f0:8", ["const:b66c18:8", "const:4:8"]]
- 00b66c18 ["CALL", null, ["callee:00c5b490:8"]]
+ 00b66cb4 ["INT_ADD", "register:40f0:8", ["const:b66cb4:8", "const:4:8"]]
+ 00b66cb4 ["CALL", null, ["callee:00c5b490:8"]]
- 00b66c2c ["INT_ADD", "register:40f0:8", ["const:b66c2c:8", "const:4:8"]]
- 00b66c2c ["CALL", null, ["callee:00c5b290:8"]]
+ 00b66cc8 ["INT_ADD", "register:40f0:8", ["const:b66cc8:8", "const:4:8"]]
+ 00b66cc8 ["CALL", null, ["callee:00c5b290:8"]]
~~~


<a id="compare-5de38c49cc32b0b51ec598be2a0fa0c2"></a>

### [`00b68240`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b68/00b68240.md) → [`00b682dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b68/00b682dc.md) _ZN8firebase28CallAfterEnsureMethodsCachedEP7_JNIEnvP8_jobjectNSt6__ndk18functionIFvvEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00b6112c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b61/00b6112c.md) [`00b66454`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b66454.md) [`00b66a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b66a48.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00b611c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b61/00b611c8.md) [`00b664f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b664f0.md) [`00b66ae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66ae4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b68254 ["INT_ADD", "register:40f0:8", ["const:b68254:8", "const:4:8"]]
- 00b68254 ["CALL", null, ["callee:00b664f0:8"]]
+ 00b682f0 ["INT_ADD", "register:40f0:8", ["const:b682f0:8", "const:4:8"]]
+ 00b682f0 ["CALL", null, ["callee:00b664f0:8"]]
- 00b6826c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b6826c ["INT_ADD", "register:40f0:8", ["const:b6826c:8", "const:4:8"]]
- 00b6826c ["CALLIND", null, ["register:0:8"]]
+ 00b68308 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b68308 ["INT_ADD", "register:40f0:8", ["const:b68308:8", "const:4:8"]]
+ 00b68308 ["CALLIND", null, ["register:0:8"]]
- 00b6828c ["INT_ADD", "register:40f0:8", ["const:b6828c:8", "const:4:8"]]
- 00b6828c ["CALL", null, ["callee:00b611c8:8"]]
+ 00b68328 ["INT_ADD", "register:40f0:8", ["const:b68328:8", "const:4:8"]]
+ 00b68328 ["CALL", null, ["callee:00b611c8:8"]]
~~~


<a id="compare-162c1997fce92001da887e31562b9fdf"></a>

### [`00b6d7f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6d/00b6d7f4.md) → [`00b6d890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6d/00b6d890.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_3setIN11flatbuffers12IncludedFileENS_4les

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ba20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba20.md) · 呼出先 3件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5ba00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba00.md) [`00c5ba20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba20.md)
- 新版 呼出元 1件 [`00c5baf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5baf0.md) · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bad0.md) [`00c5baf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5baf0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b6d810 ["INT_ADD", "register:40f0:8", ["const:b6d810:8", "const:4:8"]]
- 00b6d810 ["CALL", null, ["callee:00c5baf0:8"]]
+ 00b6d8ac ["INT_ADD", "register:40f0:8", ["const:b6d8ac:8", "const:4:8"]]
+ 00b6d8ac ["CALL", null, ["callee:00c5baf0:8"]]
- 00b6d81c ["INT_ADD", "register:40f0:8", ["const:b6d81c:8", "const:4:8"]]
- 00b6d81c ["CALL", null, ["callee:00c5baf0:8"]]
+ 00b6d8b8 ["INT_ADD", "register:40f0:8", ["const:b6d8b8:8", "const:4:8"]]
+ 00b6d8b8 ["CALL", null, ["callee:00c5baf0:8"]]
- 00b6d828 ["INT_ADD", "register:40f0:8", ["const:b6d828:8", "const:4:8"]]
- 00b6d828 ["CALL", null, ["callee:00c5bad0:8"]]
+ 00b6d8c4 ["INT_ADD", "register:40f0:8", ["const:b6d8c4:8", "const:4:8"]]
+ 00b6d8c4 ["CALL", null, ["callee:00c5bad0:8"]]
~~~


<a id="compare-634ce2e447828d732644d9c32b8afaa7"></a>

### [`00b6d850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6d/00b6d850.md) → [`00b6d8ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6d/00b6d8ec.md) _ZNSt6__ndk16__treeIN11flatbuffers12IncludedFileENS_4lessIS2_EENS_9allocatorIS2_EEE7destroyEPNS_11__tree_nodeIS2_PvEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ba00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba00.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5ba00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba00.md)
- 新版 呼出元 1件 [`00c5bad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bad0.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bad0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b6d86c ["INT_ADD", "register:40f0:8", ["const:b6d86c:8", "const:4:8"]]
- 00b6d86c ["CALL", null, ["callee:00c5bad0:8"]]
+ 00b6d908 ["INT_ADD", "register:40f0:8", ["const:b6d908:8", "const:4:8"]]
+ 00b6d908 ["CALL", null, ["callee:00c5bad0:8"]]
- 00b6d878 ["INT_ADD", "register:40f0:8", ["const:b6d878:8", "const:4:8"]]
- 00b6d878 ["CALL", null, ["callee:00c5bad0:8"]]
+ 00b6d914 ["INT_ADD", "register:40f0:8", ["const:b6d914:8", "const:4:8"]]
+ 00b6d914 ["CALL", null, ["callee:00c5bad0:8"]]
- 00b6d888 ["INT_ADD", "register:40f0:8", ["const:b6d888:8", "const:4:8"]]
- 00b6d888 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b6d924 ["INT_ADD", "register:40f0:8", ["const:b6d924:8", "const:4:8"]]
+ 00b6d924 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-39a84d2497f5ced7c70782b6ddb5d7c0"></a>

### [`00b6d8b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6d/00b6d8b0.md) → [`00b6d94c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6d/00b6d94c.md) _ZNSt6__ndk16__treeINS_12__value_typeImNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareImS8_NS_4lessImEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5bab0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bab0.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5bab0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bab0.md)
- 新版 呼出元 1件 [`00c5bb80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bb80.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bb80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bb80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b6d8cc ["INT_ADD", "register:40f0:8", ["const:b6d8cc:8", "const:4:8"]]
- 00b6d8cc ["CALL", null, ["callee:00c5bb80:8"]]
+ 00b6d968 ["INT_ADD", "register:40f0:8", ["const:b6d968:8", "const:4:8"]]
+ 00b6d968 ["CALL", null, ["callee:00c5bb80:8"]]
- 00b6d8d8 ["INT_ADD", "register:40f0:8", ["const:b6d8d8:8", "const:4:8"]]
- 00b6d8d8 ["CALL", null, ["callee:00c5bb80:8"]]
+ 00b6d974 ["INT_ADD", "register:40f0:8", ["const:b6d974:8", "const:4:8"]]
+ 00b6d974 ["CALL", null, ["callee:00c5bb80:8"]]
- 00b6d8e8 ["INT_ADD", "register:40f0:8", ["const:b6d8e8:8", "const:4:8"]]
- 00b6d8e8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b6d984 ["INT_ADD", "register:40f0:8", ["const:b6d984:8", "const:4:8"]]
+ 00b6d984 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-e30d130e3ac8fb5aaa264a8688fa6ac2"></a>

### [`00b6d900`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6d/00b6d900.md) → [`00b6d99c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6d/00b6d99c.md) _ZNSt6__ndk16__treeINS_4pairImmEEN11flexbuffers7Builder19StringOffsetCompareENS_9allocatorIS2_EEE7destroyEPNS_11__tree_nodeIS2_PvEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5bac0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bac0.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5bac0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bac0.md)
- 新版 呼出元 1件 [`00c5bb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bb90.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bb90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b6d91c ["INT_ADD", "register:40f0:8", ["const:b6d91c:8", "const:4:8"]]
- 00b6d91c ["CALL", null, ["callee:00c5bb90:8"]]
+ 00b6d9b8 ["INT_ADD", "register:40f0:8", ["const:b6d9b8:8", "const:4:8"]]
+ 00b6d9b8 ["CALL", null, ["callee:00c5bb90:8"]]
- 00b6d928 ["INT_ADD", "register:40f0:8", ["const:b6d928:8", "const:4:8"]]
- 00b6d928 ["CALL", null, ["callee:00c5bb90:8"]]
+ 00b6d9c4 ["INT_ADD", "register:40f0:8", ["const:b6d9c4:8", "const:4:8"]]
+ 00b6d9c4 ["CALL", null, ["callee:00c5bb90:8"]]
~~~


<a id="compare-a90418edfb34a8f6343ec757b2a36dd7"></a>

### [`00b6d940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6d/00b6d940.md) → [`00b6d9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6d/00b6d9dc.md) _ZNSt6__ndk16__treeImN11flexbuffers7Builder16KeyOffsetCompareENS_9allocatorImEEE7destroyEPNS_11__tree_nodeImPvEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5bad0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bad0.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5bad0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bad0.md)
- 新版 呼出元 1件 [`00c5bba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bba0.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bba0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b6d95c ["INT_ADD", "register:40f0:8", ["const:b6d95c:8", "const:4:8"]]
- 00b6d95c ["CALL", null, ["callee:00c5bba0:8"]]
+ 00b6d9f8 ["INT_ADD", "register:40f0:8", ["const:b6d9f8:8", "const:4:8"]]
+ 00b6d9f8 ["CALL", null, ["callee:00c5bba0:8"]]
- 00b6d968 ["INT_ADD", "register:40f0:8", ["const:b6d968:8", "const:4:8"]]
- 00b6d968 ["CALL", null, ["callee:00c5bba0:8"]]
+ 00b6da04 ["INT_ADD", "register:40f0:8", ["const:b6da04:8", "const:4:8"]]
+ 00b6da04 ["CALL", null, ["callee:00c5bba0:8"]]
~~~


<a id="compare-b701989c0649d5634869843842857f6a"></a>

### [`00b6d980`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6d/00b6d980.md) → [`00b6da1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6d/00b6da1c.md) _ZNSt6__ndk16__treeIN11flatbuffers6OffsetINS1_6StringEEENS1_21FlatBufferBuilderImplILb0EE19StringOffsetCompareENS_9allocatorIS4_EEE7destroyE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ba10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba10.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5ba10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba10.md)
- 新版 呼出元 1件 [`00c5bae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bae0.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bae0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b6d99c ["INT_ADD", "register:40f0:8", ["const:b6d99c:8", "const:4:8"]]
- 00b6d99c ["CALL", null, ["callee:00c5bae0:8"]]
+ 00b6da38 ["INT_ADD", "register:40f0:8", ["const:b6da38:8", "const:4:8"]]
+ 00b6da38 ["CALL", null, ["callee:00c5bae0:8"]]
- 00b6d9a8 ["INT_ADD", "register:40f0:8", ["const:b6d9a8:8", "const:4:8"]]
- 00b6d9a8 ["CALL", null, ["callee:00c5bae0:8"]]
+ 00b6da44 ["INT_ADD", "register:40f0:8", ["const:b6da44:8", "const:4:8"]]
+ 00b6da44 ["CALL", null, ["callee:00c5bae0:8"]]
~~~


<a id="compare-596b1c424a46995a1dc6557667def7c0"></a>

### [`00b6d9c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6d/00b6d9c0.md) → [`00b6da5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6d/00b6da5c.md) _ZN11flatbuffers10DefinitionD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b870.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5ba50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba50.md)
- 新版 呼出元 1件 [`00c5b940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b940.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bb20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bb20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b6d9ec ["INT_ADD", "register:40f0:8", ["const:b6d9ec:8", "const:4:8"]]
- 00b6d9ec ["CALL", null, ["callee:00c57f80:8"]]
+ 00b6da88 ["INT_ADD", "register:40f0:8", ["const:b6da88:8", "const:4:8"]]
+ 00b6da88 ["CALL", null, ["callee:00c57f80:8"]]
- 00b6d9f8 ["INT_ADD", "register:40f0:8", ["const:b6d9f8:8", "const:4:8"]]
- 00b6d9f8 ["CALL", null, ["callee:00c5bb20:8"]]
+ 00b6da94 ["INT_ADD", "register:40f0:8", ["const:b6da94:8", "const:4:8"]]
+ 00b6da94 ["CALL", null, ["callee:00c5bb20:8"]]
- 00b6da34 ["INT_ADD", "register:40f0:8", ["const:b6da34:8", "const:4:8"]]
- 00b6da34 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b6dad0 ["INT_ADD", "register:40f0:8", ["const:b6dad0:8", "const:4:8"]]
+ 00b6dad0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-8881619325c68e1e6c90a927a1bcd268"></a>

### [`00b6dad4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6d/00b6dad4.md) → [`00b6db70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6d/00b6db70.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers7RPCCallEEENS_19__map_value_c

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ba80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba80.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5ba80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba80.md)
- 新版 呼出元 1件 [`00c5bb50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bb50.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bb50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bb50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b6daf0 ["INT_ADD", "register:40f0:8", ["const:b6daf0:8", "const:4:8"]]
- 00b6daf0 ["CALL", null, ["callee:00c5bb50:8"]]
+ 00b6db8c ["INT_ADD", "register:40f0:8", ["const:b6db8c:8", "const:4:8"]]
+ 00b6db8c ["CALL", null, ["callee:00c5bb50:8"]]
- 00b6dafc ["INT_ADD", "register:40f0:8", ["const:b6dafc:8", "const:4:8"]]
- 00b6dafc ["CALL", null, ["callee:00c5bb50:8"]]
+ 00b6db98 ["INT_ADD", "register:40f0:8", ["const:b6db98:8", "const:4:8"]]
+ 00b6db98 ["CALL", null, ["callee:00c5bb50:8"]]
- 00b6db0c ["INT_ADD", "register:40f0:8", ["const:b6db0c:8", "const:4:8"]]
- 00b6db0c ["CALL", null, ["callee:00c57f80:8"]]
+ 00b6dba8 ["INT_ADD", "register:40f0:8", ["const:b6dba8:8", "const:4:8"]]
+ 00b6dba8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-63e57e5da19504bb8db40a4ba7cca546"></a>

### [`00b6dd60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6d/00b6dd60.md) → [`00b6ddfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6d/00b6ddfc.md) _ZN11flatbuffers11SymbolTableINS_8FieldDefEED2Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5b8d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b8d0.md) · 呼出先 3件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5b870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b870.md) [`00c5ba90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba90.md)
- 新版 呼出元 1件 [`00c5b9a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b9a0.md) · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b940.md) [`00c5bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bb60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b6dd8c ["INT_ADD", "register:40f0:8", ["const:b6dd8c:8", "const:4:8"]]
- 00b6dd8c ["CALL", null, ["callee:00c57f80:8"]]
+ 00b6de28 ["INT_ADD", "register:40f0:8", ["const:b6de28:8", "const:4:8"]]
+ 00b6de28 ["CALL", null, ["callee:00c57f80:8"]]
- 00b6ddac ["INT_ADD", "register:40f0:8", ["const:b6ddac:8", "const:4:8"]]
- 00b6ddac ["CALL", null, ["callee:00c5b940:8"]]
+ 00b6de48 ["INT_ADD", "register:40f0:8", ["const:b6de48:8", "const:4:8"]]
+ 00b6de48 ["CALL", null, ["callee:00c5b940:8"]]
- 00b6ddb4 ["INT_ADD", "register:40f0:8", ["const:b6ddb4:8", "const:4:8"]]
- 00b6ddb4 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b6de50 ["INT_ADD", "register:40f0:8", ["const:b6de50:8", "const:4:8"]]
+ 00b6de50 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-2f8da8a492e9abc55e460fab40d08b12"></a>

### [`00b6ddf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6d/00b6ddf0.md) → [`00b6de8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6d/00b6de8c.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers8FieldDefEEENS_19__map_value_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ba90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba90.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5ba90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba90.md)
- 新版 呼出元 1件 [`00c5bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bb60.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bb60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b6de0c ["INT_ADD", "register:40f0:8", ["const:b6de0c:8", "const:4:8"]]
- 00b6de0c ["CALL", null, ["callee:00c5bb60:8"]]
+ 00b6dea8 ["INT_ADD", "register:40f0:8", ["const:b6dea8:8", "const:4:8"]]
+ 00b6dea8 ["CALL", null, ["callee:00c5bb60:8"]]
- 00b6de18 ["INT_ADD", "register:40f0:8", ["const:b6de18:8", "const:4:8"]]
- 00b6de18 ["CALL", null, ["callee:00c5bb60:8"]]
+ 00b6deb4 ["INT_ADD", "register:40f0:8", ["const:b6deb4:8", "const:4:8"]]
+ 00b6deb4 ["CALL", null, ["callee:00c5bb60:8"]]
- 00b6de28 ["INT_ADD", "register:40f0:8", ["const:b6de28:8", "const:4:8"]]
- 00b6de28 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b6dec4 ["INT_ADD", "register:40f0:8", ["const:b6dec4:8", "const:4:8"]]
+ 00b6dec4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-a15cb9725d104cffe35658aba0225658"></a>

### [`00b6de40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6d/00b6de40.md) → [`00b6dedc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6d/00b6dedc.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers9StructDefEEENS_19__map_value

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5baa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5baa0.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5baa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5baa0.md)
- 新版 呼出元 1件 [`00c5bb70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bb70.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bb70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bb70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b6de5c ["INT_ADD", "register:40f0:8", ["const:b6de5c:8", "const:4:8"]]
- 00b6de5c ["CALL", null, ["callee:00c5bb70:8"]]
+ 00b6def8 ["INT_ADD", "register:40f0:8", ["const:b6def8:8", "const:4:8"]]
+ 00b6def8 ["CALL", null, ["callee:00c5bb70:8"]]
- 00b6de68 ["INT_ADD", "register:40f0:8", ["const:b6de68:8", "const:4:8"]]
- 00b6de68 ["CALL", null, ["callee:00c5bb70:8"]]
+ 00b6df04 ["INT_ADD", "register:40f0:8", ["const:b6df04:8", "const:4:8"]]
+ 00b6df04 ["CALL", null, ["callee:00c5bb70:8"]]
- 00b6de78 ["INT_ADD", "register:40f0:8", ["const:b6de78:8", "const:4:8"]]
- 00b6de78 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b6df14 ["INT_ADD", "register:40f0:8", ["const:b6df14:8", "const:4:8"]]
+ 00b6df14 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-2c72b2f6b3fbd2c7dd07e06b73124f9e"></a>

### [`00b6de90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6d/00b6de90.md) → [`00b6df2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6d/00b6df2c.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers4TypeEEENS_19__map_value_comp

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ba40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba40.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5ba40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba40.md)
- 新版 呼出元 1件 [`00c5bb10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bb10.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bb10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bb10.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b6deac ["INT_ADD", "register:40f0:8", ["const:b6deac:8", "const:4:8"]]
- 00b6deac ["CALL", null, ["callee:00c5bb10:8"]]
+ 00b6df48 ["INT_ADD", "register:40f0:8", ["const:b6df48:8", "const:4:8"]]
+ 00b6df48 ["CALL", null, ["callee:00c5bb10:8"]]
- 00b6deb8 ["INT_ADD", "register:40f0:8", ["const:b6deb8:8", "const:4:8"]]
- 00b6deb8 ["CALL", null, ["callee:00c5bb10:8"]]
+ 00b6df54 ["INT_ADD", "register:40f0:8", ["const:b6df54:8", "const:4:8"]]
+ 00b6df54 ["CALL", null, ["callee:00c5bb10:8"]]
- 00b6dec8 ["INT_ADD", "register:40f0:8", ["const:b6dec8:8", "const:4:8"]]
- 00b6dec8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b6df64 ["INT_ADD", "register:40f0:8", ["const:b6df64:8", "const:4:8"]]
+ 00b6df64 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-c5a11bd72d0b8a0f2e6fe568ef5d23cb"></a>

### [`00b6e634`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6e/00b6e634.md) → [`00b6e6d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6e/00b6e6d0.md) _ZN7_JNIEnv23CallStaticBooleanMethodEP7_jclassP10_jmethodIDz

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5bf40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bf40.md) · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00c5c010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c010.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b6e6a8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b6e6a8 ["INT_ADD", "register:40f0:8", ["const:b6e6a8:8", "const:4:8"]]
- 00b6e6a8 ["CALLIND", null, ["register:0:8"]]
+ 00b6e744 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b6e744 ["INT_ADD", "register:40f0:8", ["const:b6e744:8", "const:4:8"]]
+ 00b6e744 ["CALLIND", null, ["register:0:8"]]
- 00b6e6cc ["INT_ADD", "register:40f0:8", ["const:b6e6cc:8", "const:4:8"]]
- 00b6e6cc ["CALL", null, ["callee:00c57fb0:8"]]
+ 00b6e768 ["INT_ADD", "register:40f0:8", ["const:b6e768:8", "const:4:8"]]
+ 00b6e768 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-5f8977d24a191d8adc3a1f680136597f"></a>

### [`00b6efcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6e/00b6efcc.md) → [`00b6f068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6f/00b6f068.md) _ZNSt6__ndk1plIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_12basic_stringIT_T0_T1_EEPKS6_RKS9_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b6eff8 ["INT_ADD", "register:40f0:8", ["const:b6eff8:8", "const:4:8"]]
- 00b6eff8 ["CALL", null, ["callee:00c580b0:8"]]
+ 00b6f094 ["INT_ADD", "register:40f0:8", ["const:b6f094:8", "const:4:8"]]
+ 00b6f094 ["CALL", null, ["callee:00c580b0:8"]]
- 00b6f04c ["INT_ADD", "register:40f0:8", ["const:b6f04c:8", "const:4:8"]]
- 00b6f04c ["CALL", null, ["callee:00c57f60:8"]]
+ 00b6f0e8 ["INT_ADD", "register:40f0:8", ["const:b6f0e8:8", "const:4:8"]]
+ 00b6f0e8 ["CALL", null, ["callee:00c57f60:8"]]
- 00b6f074 ["INT_ADD", "register:40f0:8", ["const:b6f074:8", "const:4:8"]]
- 00b6f074 ["CALL", null, ["callee:00c580d0:8"]]
+ 00b6f110 ["INT_ADD", "register:40f0:8", ["const:b6f110:8", "const:4:8"]]
+ 00b6f110 ["CALL", null, ["callee:00c580d0:8"]]
~~~


