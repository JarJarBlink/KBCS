# v16.0.1 → v16.0.2 · 要調査の変更候補 (23)

[一覧の目次](README.md)

<a id="compare-faa580b5f06f231f97dde2abdd1e48d1"></a>

### [`0079e4a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079e/0079e4a4.md) → [`0079e4fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079e4fc.md) FUN_0079e4fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0079e4c0 ["INT_ADD", "register:40f0:8", ["const:79e4c0:8", "const:4:8"]]
- 0079e4c0 ["CALL", null, ["callee:00c53da0:8"]]
+ 0079e518 ["INT_ADD", "register:40f0:8", ["const:79e518:8", "const:4:8"]]
+ 0079e518 ["CALL", null, ["callee:00c53da0:8"]]
- 0079e4e0 ["COPY", "register:0:8", ["register:4040:8"]]
- 0079e4e0 ["INT_ADD", "register:40f0:8", ["const:79e4e0:8", "const:4:8"]]
- 0079e4e0 ["CALLIND", null, ["register:0:8"]]
+ 0079e538 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079e538 ["INT_ADD", "register:40f0:8", ["const:79e538:8", "const:4:8"]]
+ 0079e538 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-354cace02520f10f3893988d5b2704ed"></a>

### [`0079e6c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079e/0079e6c8.md) → [`0079e720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079e720.md) FUN_0079e720

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0079be08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079b/0079be08.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0079be60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079b/0079be60.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0079e704 ["COPY", "register:0:8", ["register:4040:8"]]
- 0079e704 ["INT_ADD", "register:40f0:8", ["const:79e704:8", "const:4:8"]]
- 0079e704 ["CALLIND", null, ["register:0:8"]]
+ 0079e75c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079e75c ["INT_ADD", "register:40f0:8", ["const:79e75c:8", "const:4:8"]]
+ 0079e75c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9853ddfcdae5ae9236ed4b72f71c2c1b"></a>

### [`0079e718`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079e/0079e718.md) → [`0079e770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079e770.md) FUN_0079e770

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0079e734 ["INT_ADD", "register:40f0:8", ["const:79e734:8", "const:4:8"]]
- 0079e734 ["CALL", null, ["callee:00459db4:8"]]
+ 0079e78c ["INT_ADD", "register:40f0:8", ["const:79e78c:8", "const:4:8"]]
+ 0079e78c ["CALL", null, ["callee:00459db4:8"]]
~~~


<a id="compare-9139de80f03f4722cc4d5a74f4c392fe"></a>

### [`0079ec8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079e/0079ec8c.md) → [`0079ece4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079ece4.md) FUN_0079ece4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0079a990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079a/0079a990.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0079a9e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079a/0079a9e8.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0079eccc ["COPY", "register:0:8", ["register:4040:8"]]
- 0079eccc ["INT_ADD", "register:40f0:8", ["const:79eccc:8", "const:4:8"]]
- 0079eccc ["CALLIND", null, ["register:0:8"]]
+ 0079ed24 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079ed24 ["INT_ADD", "register:40f0:8", ["const:79ed24:8", "const:4:8"]]
+ 0079ed24 ["CALLIND", null, ["register:0:8"]]
- 0079ecf8 ["COPY", "register:0:8", ["register:4040:8"]]
- 0079ecf8 ["INT_ADD", "register:40f0:8", ["const:79ecf8:8", "const:4:8"]]
- 0079ecf8 ["CALLIND", null, ["register:0:8"]]
+ 0079ed50 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079ed50 ["INT_ADD", "register:40f0:8", ["const:79ed50:8", "const:4:8"]]
+ 0079ed50 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b3d906609443dbb19497ba0d12c06155"></a>

### [`0079ed0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079e/0079ed0c.md) → [`0079ed64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079ed64.md) FUN_0079ed64

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0079ed44 ["INT_ADD", "register:40f0:8", ["const:79ed44:8", "const:4:8"]]
- 0079ed44 ["CALL", null, ["callee:00c53d70:8"]]
+ 0079ed9c ["INT_ADD", "register:40f0:8", ["const:79ed9c:8", "const:4:8"]]
+ 0079ed9c ["CALL", null, ["callee:00c53d70:8"]]
- 0079ed68 ["COPY", "register:0:8", ["register:4040:8"]]
- 0079ed68 ["INT_ADD", "register:40f0:8", ["const:79ed68:8", "const:4:8"]]
- 0079ed68 ["CALLIND", null, ["register:0:8"]]
+ 0079edc0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079edc0 ["INT_ADD", "register:40f0:8", ["const:79edc0:8", "const:4:8"]]
+ 0079edc0 ["CALLIND", null, ["register:0:8"]]
- 0079ed80 ["COPY", "register:0:8", ["register:4040:8"]]
- 0079ed80 ["INT_ADD", "register:40f0:8", ["const:79ed80:8", "const:4:8"]]
- 0079ed80 ["CALLIND", null, ["register:0:8"]]
+ 0079edd8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079edd8 ["INT_ADD", "register:40f0:8", ["const:79edd8:8", "const:4:8"]]
+ 0079edd8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a1a688ba9b2203ead38efbce93b9890f"></a>

### [`0079ee38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079e/0079ee38.md) → [`0079ee90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079ee90.md) FUN_0079ee90

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0079ee54 ["INT_ADD", "register:40f0:8", ["const:79ee54:8", "const:4:8"]]
- 0079ee54 ["CALL", null, ["callee:00c53da0:8"]]
+ 0079eeac ["INT_ADD", "register:40f0:8", ["const:79eeac:8", "const:4:8"]]
+ 0079eeac ["CALL", null, ["callee:00c53da0:8"]]
- 0079ee74 ["COPY", "register:0:8", ["register:4040:8"]]
- 0079ee74 ["INT_ADD", "register:40f0:8", ["const:79ee74:8", "const:4:8"]]
- 0079ee74 ["CALLIND", null, ["register:0:8"]]
+ 0079eecc ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079eecc ["INT_ADD", "register:40f0:8", ["const:79eecc:8", "const:4:8"]]
+ 0079eecc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ab265d32e19ee77de4267d4c62e0c5c1"></a>

### [`0079f05c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079f/0079f05c.md) → [`0079f0b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079f0b4.md) FUN_0079f0b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0079a990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079a/0079a990.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0079a9e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079a/0079a9e8.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0079f098 ["COPY", "register:0:8", ["register:4040:8"]]
- 0079f098 ["INT_ADD", "register:40f0:8", ["const:79f098:8", "const:4:8"]]
- 0079f098 ["CALLIND", null, ["register:0:8"]]
+ 0079f0f0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079f0f0 ["INT_ADD", "register:40f0:8", ["const:79f0f0:8", "const:4:8"]]
+ 0079f0f0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-121d04bd9085cade1154497680c4cb76"></a>

### [`0079f0ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079f/0079f0ac.md) → [`0079f104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079f104.md) FUN_0079f104

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0079f0c8 ["INT_ADD", "register:40f0:8", ["const:79f0c8:8", "const:4:8"]]
- 0079f0c8 ["CALL", null, ["callee:00459db4:8"]]
+ 0079f120 ["INT_ADD", "register:40f0:8", ["const:79f120:8", "const:4:8"]]
+ 0079f120 ["CALL", null, ["callee:00459db4:8"]]
~~~


<a id="compare-7084ec38a4f56f0318e482632c130c98"></a>

### [`0079f620`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079f/0079f620.md) → [`0079f678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079f678.md) FUN_0079f678

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0079b3cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079b/0079b3cc.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0079b424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079b/0079b424.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0079f660 ["COPY", "register:0:8", ["register:4040:8"]]
- 0079f660 ["INT_ADD", "register:40f0:8", ["const:79f660:8", "const:4:8"]]
- 0079f660 ["CALLIND", null, ["register:0:8"]]
+ 0079f6b8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079f6b8 ["INT_ADD", "register:40f0:8", ["const:79f6b8:8", "const:4:8"]]
+ 0079f6b8 ["CALLIND", null, ["register:0:8"]]
- 0079f68c ["COPY", "register:0:8", ["register:4040:8"]]
- 0079f68c ["INT_ADD", "register:40f0:8", ["const:79f68c:8", "const:4:8"]]
- 0079f68c ["CALLIND", null, ["register:0:8"]]
+ 0079f6e4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079f6e4 ["INT_ADD", "register:40f0:8", ["const:79f6e4:8", "const:4:8"]]
+ 0079f6e4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-90cfc234925b99c3bc2df8a627d8b54d"></a>

### [`0079f6a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079f/0079f6a0.md) → [`0079f6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079f6f8.md) FUN_0079f6f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0079f6d8 ["INT_ADD", "register:40f0:8", ["const:79f6d8:8", "const:4:8"]]
- 0079f6d8 ["CALL", null, ["callee:00c53d70:8"]]
+ 0079f730 ["INT_ADD", "register:40f0:8", ["const:79f730:8", "const:4:8"]]
+ 0079f730 ["CALL", null, ["callee:00c53d70:8"]]
- 0079f6f4 ["COPY", "register:0:8", ["register:4040:8"]]
- 0079f6f4 ["INT_ADD", "register:40f0:8", ["const:79f6f4:8", "const:4:8"]]
- 0079f6f4 ["CALLIND", null, ["register:0:8"]]
+ 0079f74c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079f74c ["INT_ADD", "register:40f0:8", ["const:79f74c:8", "const:4:8"]]
+ 0079f74c ["CALLIND", null, ["register:0:8"]]
- 0079f70c ["COPY", "register:0:8", ["register:4040:8"]]
- 0079f70c ["INT_ADD", "register:40f0:8", ["const:79f70c:8", "const:4:8"]]
- 0079f70c ["CALLIND", null, ["register:0:8"]]
+ 0079f764 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079f764 ["INT_ADD", "register:40f0:8", ["const:79f764:8", "const:4:8"]]
+ 0079f764 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f85c4e91590c430e4698c577cef267a6"></a>

### [`0079f7e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079f/0079f7e4.md) → [`0079f83c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079f83c.md) FUN_0079f83c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0079f800 ["INT_ADD", "register:40f0:8", ["const:79f800:8", "const:4:8"]]
- 0079f800 ["CALL", null, ["callee:00c53da0:8"]]
+ 0079f858 ["INT_ADD", "register:40f0:8", ["const:79f858:8", "const:4:8"]]
+ 0079f858 ["CALL", null, ["callee:00c53da0:8"]]
- 0079f820 ["COPY", "register:0:8", ["register:4040:8"]]
- 0079f820 ["INT_ADD", "register:40f0:8", ["const:79f820:8", "const:4:8"]]
- 0079f820 ["CALLIND", null, ["register:0:8"]]
+ 0079f878 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079f878 ["INT_ADD", "register:40f0:8", ["const:79f878:8", "const:4:8"]]
+ 0079f878 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5fb50bd1d4dcbab6d9c42e08447b5f6f"></a>

### [`0079fa08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079f/0079fa08.md) → [`0079fa60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079fa60.md) FUN_0079fa60

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0079b3cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079b/0079b3cc.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0079b424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079b/0079b424.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0079fa44 ["COPY", "register:0:8", ["register:4040:8"]]
- 0079fa44 ["INT_ADD", "register:40f0:8", ["const:79fa44:8", "const:4:8"]]
- 0079fa44 ["CALLIND", null, ["register:0:8"]]
+ 0079fa9c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079fa9c ["INT_ADD", "register:40f0:8", ["const:79fa9c:8", "const:4:8"]]
+ 0079fa9c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-75050254b00862f24bad848a9311572f"></a>

### [`0079fa58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079f/0079fa58.md) → [`0079fab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079fab0.md) FUN_0079fab0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0079fa74 ["INT_ADD", "register:40f0:8", ["const:79fa74:8", "const:4:8"]]
- 0079fa74 ["CALL", null, ["callee:00459db4:8"]]
+ 0079facc ["INT_ADD", "register:40f0:8", ["const:79facc:8", "const:4:8"]]
+ 0079facc ["CALL", null, ["callee:00459db4:8"]]
~~~


<a id="compare-f1409ed22f018cc2a52c26ca5987a388"></a>

### [`0079fe48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079f/0079fe48.md) → [`0079fea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079f/0079fea0.md) FUN_0079fea0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00797b74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00797/00797b74.md) · 呼出先 5件 [`00480b90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480b90.md) [`00480d48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480d48.md) [`00480e28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480e28.md) [`00481128`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00481/00481128.md) [`00481240`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00481/00481240.md)
- 新版 呼出元 1件 [`00797bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00797/00797bcc.md) · 呼出先 5件 [`00480bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480bd0.md) [`00480d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480d88.md) [`00480e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480e68.md) [`00481168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481168.md) [`00481280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481280.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0079fe88 ["INT_ADD", "register:40f0:8", ["const:79fe88:8", "const:4:8"]]
- 0079fe88 ["CALL", null, ["callee:00480bd0:8"]]
+ 0079fee0 ["INT_ADD", "register:40f0:8", ["const:79fee0:8", "const:4:8"]]
+ 0079fee0 ["CALL", null, ["callee:00480bd0:8"]]
- 0079feb8 ["INT_ADD", "register:40f0:8", ["const:79feb8:8", "const:4:8"]]
- 0079feb8 ["CALL", null, ["callee:00481168:8"]]
+ 0079ff10 ["INT_ADD", "register:40f0:8", ["const:79ff10:8", "const:4:8"]]
+ 0079ff10 ["CALL", null, ["callee:00481168:8"]]
- 0079fec4 ["INT_ADD", "register:40f0:8", ["const:79fec4:8", "const:4:8"]]
- 0079fec4 ["CALL", null, ["callee:00480e68:8"]]
+ 0079ff1c ["INT_ADD", "register:40f0:8", ["const:79ff1c:8", "const:4:8"]]
+ 0079ff1c ["CALL", null, ["callee:00480e68:8"]]
~~~


<a id="compare-28759137faaa904b934a950d74b3bc0a"></a>

### [`007a0034`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a0/007a0034.md) → [`007a008c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a008c.md) FUN_007a008c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00797b7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00797/00797b7c.md) · 呼出先 17件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00480178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480178.md) [`004802f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004802f8.md) [`004803f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004803f0.md) [`004807cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004807cc.md)
- 新版 呼出元 1件 [`00797bd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00797/00797bd4.md) · 呼出先 17件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004801b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/004801b8.md) [`00480338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480338.md) [`00480430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480430.md) [`0048080c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/0048080c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007a0074 ["INT_ADD", "register:40f0:8", ["const:7a0074:8", "const:4:8"]]
- 007a0074 ["CALL", null, ["callee:005a4548:8"]]
+ 007a00cc ["INT_ADD", "register:40f0:8", ["const:7a00cc:8", "const:4:8"]]
+ 007a00cc ["CALL", null, ["callee:005a4548:8"]]
- 007a00a8 ["INT_ADD", "register:40f0:8", ["const:7a00a8:8", "const:4:8"]]
- 007a00a8 ["CALL", null, ["callee:00c57f80:8"]]
+ 007a0100 ["INT_ADD", "register:40f0:8", ["const:7a0100:8", "const:4:8"]]
+ 007a0100 ["CALL", null, ["callee:00c57f80:8"]]
- 007a00b8 ["INT_ADD", "register:40f0:8", ["const:7a00b8:8", "const:4:8"]]
- 007a00b8 ["CALL", null, ["callee:00c57f80:8"]]
+ 007a0110 ["INT_ADD", "register:40f0:8", ["const:7a0110:8", "const:4:8"]]
+ 007a0110 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-2881ef69a02bdbb6181b821706358483"></a>

### [`007a0708`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a0/007a0708.md) → [`007a0760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a0760.md) FUN_007a0760

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 9件 [`007a2004`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a2/007a2004.md) [`007a3708`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a3/007a3708.md) [`007a41dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a4/007a41dc.md) [`007a5240`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a5/007a5240.md) [`007a6128`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a6/007a6128.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 9件 [`007a205c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a2/007a205c.md) [`007a3760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a3/007a3760.md) [`007a4234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a4/007a4234.md) [`007a5298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a5/007a5298.md) [`007a6180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a6/007a6180.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007a0724 ["INT_ADD", "register:40f0:8", ["const:7a0724:8", "const:4:8"]]
- 007a0724 ["CALL", null, ["callee:00c57f80:8"]]
+ 007a077c ["INT_ADD", "register:40f0:8", ["const:7a077c:8", "const:4:8"]]
+ 007a077c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-64dd72b8a829d22221c59e56edd4fcb0"></a>

### [`007a0784`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a0/007a0784.md) → [`007a07dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a07dc.md) FUN_007a07dc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00798060`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00798/00798060.md) [`00798214`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00798/00798214.md) · 呼出先 10件 [`005a4458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a4/005a4458.md) [`007a0ab0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a0/007a0ab0.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00b0df04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0d/00b0df04.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md)
- 新版 呼出元 2件 [`007980b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00798/007980b8.md) [`0079826c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00798/0079826c.md) · 呼出先 10件 [`005a4498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4498.md) [`007a0b08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a0b08.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b0dfa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0dfa0.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007a0848 ["INT_ADD", "register:40f0:8", ["const:7a0848:8", "const:4:8"]]
- 007a0848 ["CALL", null, ["callee:00c57f60:8"]]
+ 007a08a0 ["INT_ADD", "register:40f0:8", ["const:7a08a0:8", "const:4:8"]]
+ 007a08a0 ["CALL", null, ["callee:00c57f60:8"]]
- 007a0864 ["INT_ADD", "register:40f0:8", ["const:7a0864:8", "const:4:8"]]
- 007a0864 ["CALL", null, ["callee:00c580d0:8"]]
+ 007a08bc ["INT_ADD", "register:40f0:8", ["const:7a08bc:8", "const:4:8"]]
+ 007a08bc ["CALL", null, ["callee:00c580d0:8"]]
- 007a0884 ["INT_ADD", "register:40f0:8", ["const:7a0884:8", "const:4:8"]]
- 007a0884 ["CALL", null, ["callee:007a0b08:8"]]
+ 007a08dc ["INT_ADD", "register:40f0:8", ["const:7a08dc:8", "const:4:8"]]
+ 007a08dc ["CALL", null, ["callee:007a0b08:8"]]
~~~


<a id="compare-e5065f803c9b2b17fdad6ef296b5df77"></a>

### [`007a0ab0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a0/007a0ab0.md) → [`007a0b08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a0b08.md) FUN_007a0b08

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007a0784`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a0/007a0784.md) [`007a0ab0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a0/007a0ab0.md) · 呼出先 8件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`005a4458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a4/005a4458.md) [`00737c74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00737/00737c74.md) [`007a0ab0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a0/007a0ab0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 2件 [`007a07dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a07dc.md) [`007a0b08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a0b08.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`005a4498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4498.md) [`00737ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00737/00737ccc.md) [`007a0b08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a0b08.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007a0b54 ["INT_ADD", "register:40f0:8", ["const:7a0b54:8", "const:4:8"]]
- 007a0b54 ["CALL", null, ["callee:00737ccc:8"]]
+ 007a0bac ["INT_ADD", "register:40f0:8", ["const:7a0bac:8", "const:4:8"]]
+ 007a0bac ["CALL", null, ["callee:00737ccc:8"]]
- 007a0c20 ["INT_ADD", "register:40f0:8", ["const:7a0c20:8", "const:4:8"]]
- 007a0c20 ["CALL", null, ["callee:00c57f60:8"]]
+ 007a0c78 ["INT_ADD", "register:40f0:8", ["const:7a0c78:8", "const:4:8"]]
+ 007a0c78 ["CALL", null, ["callee:00c57f60:8"]]
- 007a0c54 ["INT_ADD", "register:40f0:8", ["const:7a0c54:8", "const:4:8"]]
- 007a0c54 ["CALL", null, ["callee:00c580d0:8"]]
+ 007a0cac ["INT_ADD", "register:40f0:8", ["const:7a0cac:8", "const:4:8"]]
+ 007a0cac ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-e786f06db1678a0c9418d56ef0ced181"></a>

### [`007a0fa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a0/007a0fa0.md) → [`007a0ff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a0ff8.md) FUN_007a0ff8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0079c3a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079c/0079c3a0.md) · 呼出先 8件 [`0059765c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/0059765c.md) [`00597e48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597e48.md) [`0079cf74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079c/0079cf74.md) [`007a1c44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a1/007a1c44.md) [`007a1e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a1/007a1e6c.md)
- 新版 呼出元 1件 [`0079c3f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079c/0079c3f8.md) · 呼出先 8件 [`0059769c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/0059769c.md) [`00597e88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597e88.md) [`0079cfcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079c/0079cfcc.md) [`007a1c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1c9c.md) [`007a1ec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1ec4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007a0fdc ["INT_ADD", "register:40f0:8", ["const:7a0fdc:8", "const:4:8"]]
- 007a0fdc ["CALL", null, ["callee:0059769c:8"]]
+ 007a1034 ["INT_ADD", "register:40f0:8", ["const:7a1034:8", "const:4:8"]]
+ 007a1034 ["CALL", null, ["callee:0059769c:8"]]
- 007a0ffc ["INT_ADD", "register:40f0:8", ["const:7a0ffc:8", "const:4:8"]]
- 007a0ffc ["CALL", null, ["callee:00597e88:8"]]
+ 007a1054 ["INT_ADD", "register:40f0:8", ["const:7a1054:8", "const:4:8"]]
+ 007a1054 ["CALL", null, ["callee:00597e88:8"]]
- 007a1020 ["INT_ADD", "register:40f0:8", ["const:7a1020:8", "const:4:8"]]
- 007a1020 ["CALL", null, ["callee:00c58500:8"]]
+ 007a1078 ["INT_ADD", "register:40f0:8", ["const:7a1078:8", "const:4:8"]]
+ 007a1078 ["CALL", null, ["callee:00c58500:8"]]
~~~


<a id="compare-e40aa6892607c3714a4f76d452eb8873"></a>

### [`007a1110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a1/007a1110.md) → [`007a1168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1168.md) FUN_007a1168

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00798ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00798/00798ea0.md) · 呼出先 13件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00597a8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a8c.md) [`00597e48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597e48.md) [`005a4458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a4/005a4458.md) [`007a1610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a1/007a1610.md)
- 新版 呼出元 1件 [`00798ef8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00798/00798ef8.md) · 呼出先 13件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`00597e88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597e88.md) [`005a4498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4498.md) [`007a1668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1668.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007a114c ["INT_ADD", "register:40f0:8", ["const:7a114c:8", "const:4:8"]]
- 007a114c ["CALL", null, ["callee:00597e88:8"]]
+ 007a11a4 ["INT_ADD", "register:40f0:8", ["const:7a11a4:8", "const:4:8"]]
+ 007a11a4 ["CALL", null, ["callee:00597e88:8"]]
- 007a1184 ["INT_ADD", "register:40f0:8", ["const:7a1184:8", "const:4:8"]]
- 007a1184 ["CALL", null, ["callee:007a205c:8"]]
+ 007a11dc ["INT_ADD", "register:40f0:8", ["const:7a11dc:8", "const:4:8"]]
+ 007a11dc ["CALL", null, ["callee:007a205c:8"]]
- 007a120c ["INT_ADD", "register:40f0:8", ["const:7a120c:8", "const:4:8"]]
- 007a120c ["CALL", null, ["callee:0043bb60:8"]]
+ 007a1264 ["INT_ADD", "register:40f0:8", ["const:7a1264:8", "const:4:8"]]
+ 007a1264 ["CALL", null, ["callee:0043bb60:8"]]
~~~


<a id="compare-cc7921ea8dd728b11790d6b92016bc38"></a>

### [`007a1610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a1/007a1610.md) → [`007a1668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1668.md) FUN_007a1668

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007a1110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a1/007a1110.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`007a1168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1168.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007a16d0 ["INT_ADD", "register:40f0:8", ["const:7a16d0:8", "const:4:8"]]
- 007a16d0 ["CALL", null, ["callee:00c57f80:8"]]
+ 007a1728 ["INT_ADD", "register:40f0:8", ["const:7a1728:8", "const:4:8"]]
+ 007a1728 ["CALL", null, ["callee:00c57f80:8"]]
- 007a16fc ["INT_ADD", "register:40f0:8", ["const:7a16fc:8", "const:4:8"]]
- 007a16fc ["CALL", null, ["callee:00c57f80:8"]]
+ 007a1754 ["INT_ADD", "register:40f0:8", ["const:7a1754:8", "const:4:8"]]
+ 007a1754 ["CALL", null, ["callee:00c57f80:8"]]
- 007a1738 ["INT_ADD", "register:40f0:8", ["const:7a1738:8", "const:4:8"]]
- 007a1738 ["CALL", null, ["callee:00c57f80:8"]]
+ 007a1790 ["INT_ADD", "register:40f0:8", ["const:7a1790:8", "const:4:8"]]
+ 007a1790 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-bc7f9242725c0dac63d72250f796d70a"></a>

### [`007a1774`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a1/007a1774.md) → [`007a17cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a17cc.md) FUN_007a17cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007a1110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a1/007a1110.md) · 呼出先 3件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`007a1168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1168.md) · 呼出先 3件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007a17d4 ["INT_ADD", "register:40f0:8", ["const:7a17d4:8", "const:4:8"]]
- 007a17d4 ["CALL", null, ["callee:00c57f60:8"]]
+ 007a182c ["INT_ADD", "register:40f0:8", ["const:7a182c:8", "const:4:8"]]
+ 007a182c ["CALL", null, ["callee:00c57f60:8"]]
- 007a1864 ["INT_ADD", "register:40f0:8", ["const:7a1864:8", "const:4:8"]]
- 007a1864 ["CALL", null, ["callee:00c57f80:8"]]
+ 007a18bc ["INT_ADD", "register:40f0:8", ["const:7a18bc:8", "const:4:8"]]
+ 007a18bc ["CALL", null, ["callee:00c57f80:8"]]
- 007a1874 ["INT_ADD", "register:40f0:8", ["const:7a1874:8", "const:4:8"]]
- 007a1874 ["CALL", null, ["callee:00c57f80:8"]]
+ 007a18cc ["INT_ADD", "register:40f0:8", ["const:7a18cc:8", "const:4:8"]]
+ 007a18cc ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-a30cb8185a34c1a08552f6569e8552c2"></a>

### [`007a18d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a1/007a18d0.md) → [`007a1928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1928.md) FUN_007a1928

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007a1110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a1/007a1110.md) · 呼出先 6件 [`007a1a18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a1/007a1a18.md) [`007a1ab0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a1/007a1ab0.md) [`007a1b28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a1/007a1b28.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`007a1168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1168.md) · 呼出先 6件 [`007a1a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1a70.md) [`007a1b08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1b08.md) [`007a1b80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1b80.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007a192c ["INT_ADD", "register:40f0:8", ["const:7a192c:8", "const:4:8"]]
- 007a192c ["CALL", null, ["callee:00c57f60:8"]]
+ 007a1984 ["INT_ADD", "register:40f0:8", ["const:7a1984:8", "const:4:8"]]
+ 007a1984 ["CALL", null, ["callee:00c57f60:8"]]
- 007a1974 ["INT_ADD", "register:40f0:8", ["const:7a1974:8", "const:4:8"]]
- 007a1974 ["CALL", null, ["callee:007a1b80:8"]]
+ 007a19cc ["INT_ADD", "register:40f0:8", ["const:7a19cc:8", "const:4:8"]]
+ 007a19cc ["CALL", null, ["callee:007a1b80:8"]]
- 007a19d8 ["INT_ADD", "register:40f0:8", ["const:7a19d8:8", "const:4:8"]]
- 007a19d8 ["CALL", null, ["callee:007a1b08:8"]]
+ 007a1a30 ["INT_ADD", "register:40f0:8", ["const:7a1a30:8", "const:4:8"]]
+ 007a1a30 ["CALL", null, ["callee:007a1b08:8"]]
~~~


<a id="compare-070fae10e636f03e805500733310f42a"></a>

### [`007a1a18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a1/007a1a18.md) → [`007a1a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1a70.md) FUN_007a1a70

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007a18d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a1/007a18d0.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`007a1928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1928.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007a1a7c ["INT_ADD", "register:40f0:8", ["const:7a1a7c:8", "const:4:8"]]
- 007a1a7c ["CALL", null, ["callee:00c57f80:8"]]
+ 007a1ad4 ["INT_ADD", "register:40f0:8", ["const:7a1ad4:8", "const:4:8"]]
+ 007a1ad4 ["CALL", null, ["callee:00c57f80:8"]]
- 007a1a8c ["INT_ADD", "register:40f0:8", ["const:7a1a8c:8", "const:4:8"]]
- 007a1a8c ["CALL", null, ["callee:00c57f80:8"]]
+ 007a1ae4 ["INT_ADD", "register:40f0:8", ["const:7a1ae4:8", "const:4:8"]]
+ 007a1ae4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-1b78b31b51f12e07e42fd12e8eaa0d0e"></a>

### [`007a1ac4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a1/007a1ac4.md) → [`007a1b1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1b1c.md) FUN_007a1b1c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007a1b04 ["INT_ADD", "register:40f0:8", ["const:7a1b04:8", "const:4:8"]]
- 007a1b04 ["CALL", null, ["callee:00c57f80:8"]]
+ 007a1b5c ["INT_ADD", "register:40f0:8", ["const:7a1b5c:8", "const:4:8"]]
+ 007a1b5c ["CALL", null, ["callee:00c57f80:8"]]
- 007a1b14 ["INT_ADD", "register:40f0:8", ["const:7a1b14:8", "const:4:8"]]
- 007a1b14 ["CALL", null, ["callee:00c57f80:8"]]
+ 007a1b6c ["INT_ADD", "register:40f0:8", ["const:7a1b6c:8", "const:4:8"]]
+ 007a1b6c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-492ecf1b32230842d6e5649282344c3f"></a>

### [`007a1b28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a1/007a1b28.md) → [`007a1b80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1b80.md) FUN_007a1b80

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007a18d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a1/007a18d0.md) · 呼出先 6件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`005a4458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a4/005a4458.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`007a1928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1928.md) · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`005a4498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4498.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007a1b88 ["INT_ADD", "register:40f0:8", ["const:7a1b88:8", "const:4:8"]]
- 007a1b88 ["CALL", null, ["callee:0043bb60:8"]]
+ 007a1be0 ["INT_ADD", "register:40f0:8", ["const:7a1be0:8", "const:4:8"]]
+ 007a1be0 ["CALL", null, ["callee:0043bb60:8"]]
- 007a1bcc ["INT_ADD", "register:40f0:8", ["const:7a1bcc:8", "const:4:8"]]
- 007a1bcc ["CALL", null, ["callee:00c57f60:8"]]
+ 007a1c24 ["INT_ADD", "register:40f0:8", ["const:7a1c24:8", "const:4:8"]]
+ 007a1c24 ["CALL", null, ["callee:00c57f60:8"]]
- 007a1be4 ["INT_ADD", "register:40f0:8", ["const:7a1be4:8", "const:4:8"]]
- 007a1be4 ["CALL", null, ["callee:00c580d0:8"]]
+ 007a1c3c ["INT_ADD", "register:40f0:8", ["const:7a1c3c:8", "const:4:8"]]
+ 007a1c3c ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-a97a9d3b1ee3c0f351479d3f60702f81"></a>

### [`007a1c44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a1/007a1c44.md) → [`007a1c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1c9c.md) FUN_007a1c9c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007a0034`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a0/007a0034.md) [`007a0fa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a0/007a0fa0.md) · 呼出先 6件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`007a1ab0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a1/007a1ab0.md) [`007a1e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a1/007a1e6c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`007a008c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a008c.md) [`007a0ff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a0ff8.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`007a1b08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1b08.md) [`007a1ec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1ec4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007a1ce4 ["INT_ADD", "register:40f0:8", ["const:7a1ce4:8", "const:4:8"]]
- 007a1ce4 ["CALL", null, ["callee:00c57f60:8"]]
+ 007a1d3c ["INT_ADD", "register:40f0:8", ["const:7a1d3c:8", "const:4:8"]]
+ 007a1d3c ["CALL", null, ["callee:00c57f60:8"]]
- 007a1d0c ["INT_ADD", "register:40f0:8", ["const:7a1d0c:8", "const:4:8"]]
- 007a1d0c ["CALL", null, ["callee:007a1ec4:8"]]
+ 007a1d64 ["INT_ADD", "register:40f0:8", ["const:7a1d64:8", "const:4:8"]]
+ 007a1d64 ["CALL", null, ["callee:007a1ec4:8"]]
- 007a1db8 ["INT_ADD", "register:40f0:8", ["const:7a1db8:8", "const:4:8"]]
- 007a1db8 ["CALL", null, ["callee:00c57f80:8"]]
+ 007a1e10 ["INT_ADD", "register:40f0:8", ["const:7a1e10:8", "const:4:8"]]
+ 007a1e10 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-0ccb15a74122adb45f9fdf7471ce49ba"></a>

### [`007a1e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a1/007a1e6c.md) → [`007a1ec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1ec4.md) FUN_007a1ec4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`007a0034`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a0/007a0034.md) [`007a0fa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a0/007a0fa0.md) [`007a1c44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a1/007a1c44.md) · 呼出先 6件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`005a4458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a4/005a4458.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`007a008c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a008c.md) [`007a0ff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a0ff8.md) [`007a1c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1c9c.md) · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`005a4498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4498.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007a1ecc ["INT_ADD", "register:40f0:8", ["const:7a1ecc:8", "const:4:8"]]
- 007a1ecc ["CALL", null, ["callee:0043bb60:8"]]
+ 007a1f24 ["INT_ADD", "register:40f0:8", ["const:7a1f24:8", "const:4:8"]]
+ 007a1f24 ["CALL", null, ["callee:0043bb60:8"]]
- 007a1f10 ["INT_ADD", "register:40f0:8", ["const:7a1f10:8", "const:4:8"]]
- 007a1f10 ["CALL", null, ["callee:00c57f60:8"]]
+ 007a1f68 ["INT_ADD", "register:40f0:8", ["const:7a1f68:8", "const:4:8"]]
+ 007a1f68 ["CALL", null, ["callee:00c57f60:8"]]
- 007a1f28 ["INT_ADD", "register:40f0:8", ["const:7a1f28:8", "const:4:8"]]
- 007a1f28 ["CALL", null, ["callee:00c580d0:8"]]
+ 007a1f80 ["INT_ADD", "register:40f0:8", ["const:7a1f80:8", "const:4:8"]]
+ 007a1f80 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-254247d4caed7ae9db39753943691cef"></a>

### [`007a1f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a1/007a1f88.md) → [`007a1fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1fe0.md) FUN_007a1fe0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007a1fc4 ["INT_ADD", "register:40f0:8", ["const:7a1fc4:8", "const:4:8"]]
- 007a1fc4 ["CALL", null, ["callee:00c57f80:8"]]
+ 007a201c ["INT_ADD", "register:40f0:8", ["const:7a201c:8", "const:4:8"]]
+ 007a201c ["CALL", null, ["callee:00c57f80:8"]]
- 007a1fd4 ["INT_ADD", "register:40f0:8", ["const:7a1fd4:8", "const:4:8"]]
- 007a1fd4 ["CALL", null, ["callee:00c57f80:8"]]
+ 007a202c ["INT_ADD", "register:40f0:8", ["const:7a202c:8", "const:4:8"]]
+ 007a202c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-6c75d3894f47a086df1f365997013828"></a>

### [`007a2004`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a2/007a2004.md) → [`007a205c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a2/007a205c.md) FUN_007a205c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007a1110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a1/007a1110.md) [`007a2004`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a2/007a2004.md) · 呼出先 19件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00597a8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a8c.md) [`005a4458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a4/005a4458.md) [`007a0708`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a0/007a0708.md) [`007a2004`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a2/007a2004.md)
- 新版 呼出元 2件 [`007a1168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a1/007a1168.md) [`007a205c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a2/007a205c.md) · 呼出先 19件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`005a4498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4498.md) [`007a0760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a0760.md) [`007a205c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a2/007a205c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007a20cc ["INT_ADD", "register:40f0:8", ["const:7a20cc:8", "const:4:8"]]
- 007a20cc ["CALL", null, ["callee:007a5298:8"]]
+ 007a2124 ["INT_ADD", "register:40f0:8", ["const:7a2124:8", "const:4:8"]]
+ 007a2124 ["CALL", null, ["callee:007a5298:8"]]
- 007a20f0 ["INT_ADD", "register:40f0:8", ["const:7a20f0:8", "const:4:8"]]
- 007a20f0 ["CALL", null, ["callee:007a5298:8"]]
+ 007a2148 ["INT_ADD", "register:40f0:8", ["const:7a2148:8", "const:4:8"]]
+ 007a2148 ["CALL", null, ["callee:007a5298:8"]]
- 007a2108 ["INT_ADD", "register:40f0:8", ["const:7a2108:8", "const:4:8"]]
- 007a2108 ["CALL", null, ["callee:007a5298:8"]]
+ 007a2160 ["INT_ADD", "register:40f0:8", ["const:7a2160:8", "const:4:8"]]
+ 007a2160 ["CALL", null, ["callee:007a5298:8"]]
~~~


<a id="compare-a90500c5abb243caee5b5081c16f22a2"></a>

### [`007a3578`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a3/007a3578.md) → [`007a35d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a3/007a35d0.md) FUN_007a35d0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 8件 [`007a2004`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a2/007a2004.md) [`007a3708`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a3/007a3708.md) [`007a41dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a4/007a41dc.md) [`007a5240`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a5/007a5240.md) [`007a6128`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a6/007a6128.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 8件 [`007a205c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a2/007a205c.md) [`007a3760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a3/007a3760.md) [`007a4234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a4/007a4234.md) [`007a5298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a5/007a5298.md) [`007a6180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a6/007a6180.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007a363c ["INT_ADD", "register:40f0:8", ["const:7a363c:8", "const:4:8"]]
- 007a363c ["CALL", null, ["callee:00c57f80:8"]]
+ 007a3694 ["INT_ADD", "register:40f0:8", ["const:7a3694:8", "const:4:8"]]
+ 007a3694 ["CALL", null, ["callee:00c57f80:8"]]
- 007a36a0 ["INT_ADD", "register:40f0:8", ["const:7a36a0:8", "const:4:8"]]
- 007a36a0 ["CALL", null, ["callee:00c57f80:8"]]
+ 007a36f8 ["INT_ADD", "register:40f0:8", ["const:7a36f8:8", "const:4:8"]]
+ 007a36f8 ["CALL", null, ["callee:00c57f80:8"]]
- 007a36c8 ["INT_ADD", "register:40f0:8", ["const:7a36c8:8", "const:4:8"]]
- 007a36c8 ["CALL", null, ["callee:00c57f80:8"]]
+ 007a3720 ["INT_ADD", "register:40f0:8", ["const:7a3720:8", "const:4:8"]]
+ 007a3720 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-a5d592a5033dd51ff171b5abec9f03fa"></a>

### [`007a3708`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a3/007a3708.md) → [`007a3760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a3/007a3760.md) FUN_007a3760

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007a2004`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a2/007a2004.md) [`007a8334`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a8/007a8334.md) · 呼出先 11件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00597a8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a8c.md) [`005a4458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a4/005a4458.md) [`007a0708`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a0/007a0708.md) [`007a3578`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a3/007a3578.md)
- 新版 呼出元 2件 [`007a205c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a2/007a205c.md) [`007a838c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a8/007a838c.md) · 呼出先 11件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`005a4498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4498.md) [`007a0760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a0760.md) [`007a35d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a3/007a35d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007a3744 ["INT_ADD", "register:40f0:8", ["const:7a3744:8", "const:4:8"]]
- 007a3744 ["CALL", null, ["callee:007a8ec4:8"]]
+ 007a379c ["INT_ADD", "register:40f0:8", ["const:7a379c:8", "const:4:8"]]
+ 007a379c ["CALL", null, ["callee:007a8ec4:8"]]
- 007a378c ["INT_ADD", "register:40f0:8", ["const:7a378c:8", "const:4:8"]]
- 007a378c ["CALL", null, ["callee:0043bb60:8"]]
+ 007a37e4 ["INT_ADD", "register:40f0:8", ["const:7a37e4:8", "const:4:8"]]
+ 007a37e4 ["CALL", null, ["callee:0043bb60:8"]]
- 007a37c8 ["INT_ADD", "register:40f0:8", ["const:7a37c8:8", "const:4:8"]]
- 007a37c8 ["CALL", null, ["callee:00c57f60:8"]]
+ 007a3820 ["INT_ADD", "register:40f0:8", ["const:7a3820:8", "const:4:8"]]
+ 007a3820 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-455c9fba648cda549c3b213e169bb588"></a>

### [`007a41dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a4/007a41dc.md) → [`007a4234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a4/007a4234.md) FUN_007a4234

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007a2004`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a2/007a2004.md) · 呼出先 11件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00597a8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a8c.md) [`005a4458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a4/005a4458.md) [`007a0708`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a0/007a0708.md) [`007a3578`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a3/007a3578.md)
- 新版 呼出元 1件 [`007a205c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a2/007a205c.md) · 呼出先 11件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`005a4498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4498.md) [`007a0760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a0760.md) [`007a35d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a3/007a35d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007a4260 ["INT_ADD", "register:40f0:8", ["const:7a4260:8", "const:4:8"]]
- 007a4260 ["CALL", null, ["callee:007a96f4:8"]]
+ 007a42b8 ["INT_ADD", "register:40f0:8", ["const:7a42b8:8", "const:4:8"]]
+ 007a42b8 ["CALL", null, ["callee:007a96f4:8"]]
- 007a42e8 ["INT_ADD", "register:40f0:8", ["const:7a42e8:8", "const:4:8"]]
- 007a42e8 ["CALL", null, ["callee:0043bb60:8"]]
+ 007a4340 ["INT_ADD", "register:40f0:8", ["const:7a4340:8", "const:4:8"]]
+ 007a4340 ["CALL", null, ["callee:0043bb60:8"]]
- 007a431c ["INT_ADD", "register:40f0:8", ["const:7a431c:8", "const:4:8"]]
- 007a431c ["CALL", null, ["callee:00c57f60:8"]]
+ 007a4374 ["INT_ADD", "register:40f0:8", ["const:7a4374:8", "const:4:8"]]
+ 007a4374 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-9cf4b6c14b812c49f288087f396fc8bb"></a>

### [`007a5240`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a5/007a5240.md) → [`007a5298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a5/007a5298.md) FUN_007a5298

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`007a2004`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a2/007a2004.md) [`007a8334`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a8/007a8334.md) [`007a8e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a8/007a8e6c.md) · 呼出先 10件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00597a8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a8c.md) [`005a4458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a4/005a4458.md) [`007a0708`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a0/007a0708.md) [`007a3578`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a3/007a3578.md)
- 新版 呼出元 3件 [`007a205c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a2/007a205c.md) [`007a838c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a8/007a838c.md) [`007a8ec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a8/007a8ec4.md) · 呼出先 10件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`005a4498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4498.md) [`007a0760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a0760.md) [`007a35d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a3/007a35d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007a52b4 ["INT_ADD", "register:40f0:8", ["const:7a52b4:8", "const:4:8"]]
- 007a52b4 ["CALL", null, ["callee:0043bb60:8"]]
+ 007a530c ["INT_ADD", "register:40f0:8", ["const:7a530c:8", "const:4:8"]]
+ 007a530c ["CALL", null, ["callee:0043bb60:8"]]
- 007a52f0 ["INT_ADD", "register:40f0:8", ["const:7a52f0:8", "const:4:8"]]
- 007a52f0 ["CALL", null, ["callee:00c57f60:8"]]
+ 007a5348 ["INT_ADD", "register:40f0:8", ["const:7a5348:8", "const:4:8"]]
+ 007a5348 ["CALL", null, ["callee:00c57f60:8"]]
- 007a5308 ["INT_ADD", "register:40f0:8", ["const:7a5308:8", "const:4:8"]]
- 007a5308 ["CALL", null, ["callee:00c580d0:8"]]
+ 007a5360 ["INT_ADD", "register:40f0:8", ["const:7a5360:8", "const:4:8"]]
+ 007a5360 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-b07e87e0bd3fa5817413a35d37bbcdbc"></a>

### [`007a5f98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a5/007a5f98.md) → [`007a5ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a5/007a5ff0.md) FUN_007a5ff0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007a2004`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a2/007a2004.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`007a205c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a2/007a205c.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007a605c ["INT_ADD", "register:40f0:8", ["const:7a605c:8", "const:4:8"]]
- 007a605c ["CALL", null, ["callee:00c57f80:8"]]
+ 007a60b4 ["INT_ADD", "register:40f0:8", ["const:7a60b4:8", "const:4:8"]]
+ 007a60b4 ["CALL", null, ["callee:00c57f80:8"]]
- 007a60c0 ["INT_ADD", "register:40f0:8", ["const:7a60c0:8", "const:4:8"]]
- 007a60c0 ["CALL", null, ["callee:00c57f80:8"]]
+ 007a6118 ["INT_ADD", "register:40f0:8", ["const:7a6118:8", "const:4:8"]]
+ 007a6118 ["CALL", null, ["callee:00c57f80:8"]]
- 007a60e8 ["INT_ADD", "register:40f0:8", ["const:7a60e8:8", "const:4:8"]]
- 007a60e8 ["CALL", null, ["callee:00c57f80:8"]]
+ 007a6140 ["INT_ADD", "register:40f0:8", ["const:7a6140:8", "const:4:8"]]
+ 007a6140 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-c1f3abde50de242473a92f9a7fd8fafd"></a>

### [`007a8334`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a8/007a8334.md) → [`007a838c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a8/007a838c.md) FUN_007a838c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007a2004`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a2/007a2004.md) · 呼出先 13件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00597a8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a8c.md) [`005a4458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a4/005a4458.md) [`007a0708`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a0/007a0708.md) [`007a3578`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a3/007a3578.md)
- 新版 呼出元 1件 [`007a205c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a2/007a205c.md) · 呼出先 13件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`005a4498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4498.md) [`007a0760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a0760.md) [`007a35d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a3/007a35d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007a83bc ["INT_ADD", "register:40f0:8", ["const:7a83bc:8", "const:4:8"]]
- 007a83bc ["CALL", null, ["callee:007a3760:8"]]
+ 007a8414 ["INT_ADD", "register:40f0:8", ["const:7a8414:8", "const:4:8"]]
+ 007a8414 ["CALL", null, ["callee:007a3760:8"]]
- 007a8428 ["INT_ADD", "register:40f0:8", ["const:7a8428:8", "const:4:8"]]
- 007a8428 ["CALL", null, ["callee:007a5298:8"]]
+ 007a8480 ["INT_ADD", "register:40f0:8", ["const:7a8480:8", "const:4:8"]]
+ 007a8480 ["CALL", null, ["callee:007a5298:8"]]
- 007a8448 ["INT_ADD", "register:40f0:8", ["const:7a8448:8", "const:4:8"]]
- 007a8448 ["CALL", null, ["callee:007a5298:8"]]
+ 007a84a0 ["INT_ADD", "register:40f0:8", ["const:7a84a0:8", "const:4:8"]]
+ 007a84a0 ["CALL", null, ["callee:007a5298:8"]]
~~~


<a id="compare-27c297733c5a623b78ffb3f54dbe00e6"></a>

### [`007a8e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a8/007a8e6c.md) → [`007a8ec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a8/007a8ec4.md) FUN_007a8ec4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`007a2004`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a2/007a2004.md) [`007a3708`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a3/007a3708.md) [`007a8334`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a8/007a8334.md) · 呼出先 11件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00597a8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a8c.md) [`005a4458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a4/005a4458.md) [`007a0708`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a0/007a0708.md) [`007a3578`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a3/007a3578.md)
- 新版 呼出元 3件 [`007a205c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a2/007a205c.md) [`007a3760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a3/007a3760.md) [`007a838c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a8/007a838c.md) · 呼出先 11件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`005a4498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4498.md) [`007a0760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a0760.md) [`007a35d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a3/007a35d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007a8ea4 ["INT_ADD", "register:40f0:8", ["const:7a8ea4:8", "const:4:8"]]
- 007a8ea4 ["CALL", null, ["callee:007a5298:8"]]
+ 007a8efc ["INT_ADD", "register:40f0:8", ["const:7a8efc:8", "const:4:8"]]
+ 007a8efc ["CALL", null, ["callee:007a5298:8"]]
- 007a8eec ["INT_ADD", "register:40f0:8", ["const:7a8eec:8", "const:4:8"]]
- 007a8eec ["CALL", null, ["callee:0043bb60:8"]]
+ 007a8f44 ["INT_ADD", "register:40f0:8", ["const:7a8f44:8", "const:4:8"]]
+ 007a8f44 ["CALL", null, ["callee:0043bb60:8"]]
- 007a8f28 ["INT_ADD", "register:40f0:8", ["const:7a8f28:8", "const:4:8"]]
- 007a8f28 ["CALL", null, ["callee:00c57f60:8"]]
+ 007a8f80 ["INT_ADD", "register:40f0:8", ["const:7a8f80:8", "const:4:8"]]
+ 007a8f80 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-5140296a32e238fee642148ab7a017f5"></a>

### [`007a969c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a9/007a969c.md) → [`007a96f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a9/007a96f4.md) FUN_007a96f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007a41dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a4/007a41dc.md) · 呼出先 9件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00597a8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a8c.md) [`005a4458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a4/005a4458.md) [`007a0708`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a0/007a0708.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md)
- 新版 呼出元 1件 [`007a4234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a4/007a4234.md) · 呼出先 9件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`005a4498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4498.md) [`007a0760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a0760.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007a9768 ["INT_ADD", "register:40f0:8", ["const:7a9768:8", "const:4:8"]]
- 007a9768 ["CALL", null, ["callee:0043bb60:8"]]
+ 007a97c0 ["INT_ADD", "register:40f0:8", ["const:7a97c0:8", "const:4:8"]]
+ 007a97c0 ["CALL", null, ["callee:0043bb60:8"]]
- 007a97a4 ["INT_ADD", "register:40f0:8", ["const:7a97a4:8", "const:4:8"]]
- 007a97a4 ["CALL", null, ["callee:00c57f60:8"]]
+ 007a97fc ["INT_ADD", "register:40f0:8", ["const:7a97fc:8", "const:4:8"]]
+ 007a97fc ["CALL", null, ["callee:00c57f60:8"]]
- 007a97bc ["INT_ADD", "register:40f0:8", ["const:7a97bc:8", "const:4:8"]]
- 007a97bc ["CALL", null, ["callee:00c580d0:8"]]
+ 007a9814 ["INT_ADD", "register:40f0:8", ["const:7a9814:8", "const:4:8"]]
+ 007a9814 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-c4f656967034456c74e294b40f7d21fc"></a>

### [`007aa778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007aa/007aa778.md) → [`007aa7d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007aa/007aa7d0.md) FUN_007aa7d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007abc24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ab/007abc24.md) · 呼出先 3件 [`00aa3460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa3/00aa3460.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`007abc7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ab/007abc7c.md) · 呼出先 3件 [`00aa34d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa34d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007aa7a4 ["INT_ADD", "register:40f0:8", ["const:7aa7a4:8", "const:4:8"]]
- 007aa7a4 ["CALL", null, ["callee:00aa34d0:8"]]
+ 007aa7fc ["INT_ADD", "register:40f0:8", ["const:7aa7fc:8", "const:4:8"]]
+ 007aa7fc ["CALL", null, ["callee:00aa34d0:8"]]
- 007aa7b4 ["INT_ADD", "register:40f0:8", ["const:7aa7b4:8", "const:4:8"]]
- 007aa7b4 ["CALL", null, ["callee:00c57f80:8"]]
+ 007aa80c ["INT_ADD", "register:40f0:8", ["const:7aa80c:8", "const:4:8"]]
+ 007aa80c ["CALL", null, ["callee:00c57f80:8"]]
- 007aa804 ["INT_ADD", "register:40f0:8", ["const:7aa804:8", "const:4:8"]]
- 007aa804 ["CALL", null, ["callee:00c57fb0:8"]]
+ 007aa85c ["INT_ADD", "register:40f0:8", ["const:7aa85c:8", "const:4:8"]]
+ 007aa85c ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-f29fdb4b3a9e8c16505ef9ce070fe24f"></a>

### [`007ab338`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ab/007ab338.md) → [`007ab390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ab/007ab390.md) FUN_007ab390

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00851504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851504.md) · 呼出先 2件 [`007b091c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007b0/007b091c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`0085155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/0085155c.md) · 呼出先 2件 [`007b0974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b0974.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007ab34c ["INT_ADD", "register:40f0:8", ["const:7ab34c:8", "const:4:8"]]
- 007ab34c ["CALL", null, ["callee:00c57f60:8"]]
+ 007ab3a4 ["INT_ADD", "register:40f0:8", ["const:7ab3a4:8", "const:4:8"]]
+ 007ab3a4 ["CALL", null, ["callee:00c57f60:8"]]
- 007ab354 ["INT_ADD", "register:40f0:8", ["const:7ab354:8", "const:4:8"]]
- 007ab354 ["CALL", null, ["callee:007b0974:8"]]
+ 007ab3ac ["INT_ADD", "register:40f0:8", ["const:7ab3ac:8", "const:4:8"]]
+ 007ab3ac ["CALL", null, ["callee:007b0974:8"]]
~~~


<a id="compare-3080ca43326868f5929513db62d0839e"></a>

### [`007ab37c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ab/007ab37c.md) → [`007ab3d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ab/007ab3d4.md) FUN_007ab3d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00848574`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848574.md) [`00851504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851504.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`008485cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/008485cc.md) [`0085155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/0085155c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007ab3a0 ["COPY", "register:0:8", ["register:4040:8"]]
- 007ab3a0 ["INT_ADD", "register:40f0:8", ["const:7ab3a0:8", "const:4:8"]]
- 007ab3a0 ["CALLIND", null, ["register:0:8"]]
+ 007ab3f8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007ab3f8 ["INT_ADD", "register:40f0:8", ["const:7ab3f8:8", "const:4:8"]]
+ 007ab3f8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8f3e067ab3238f8ecf2b3bb17ba518e1"></a>

### [`007ae774`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007ae774.md) → [`007ae7cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007ae7cc.md) FUN_007ae7cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007ab404`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ab/007ab404.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`007ab45c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ab/007ab45c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007ae7b0 ["COPY", "register:0:8", ["register:4040:8"]]
- 007ae7b0 ["INT_ADD", "register:40f0:8", ["const:7ae7b0:8", "const:4:8"]]
- 007ae7b0 ["CALLIND", null, ["register:0:8"]]
+ 007ae808 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007ae808 ["INT_ADD", "register:40f0:8", ["const:7ae808:8", "const:4:8"]]
+ 007ae808 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a87489edef6edf83fd5319a8e5ba7b1f"></a>

### [`007aef1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ae/007aef1c.md) → [`007aef74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ae/007aef74.md) FUN_007aef74

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007ad984`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ad/007ad984.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`007ad9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007ad9dc.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007aef3c ["INT_ADD", "register:40f0:8", ["const:7aef3c:8", "const:4:8"]]
- 007aef3c ["CALL", null, ["callee:00c57f80:8"]]
+ 007aef94 ["INT_ADD", "register:40f0:8", ["const:7aef94:8", "const:4:8"]]
+ 007aef94 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-962d9552ead1c414a244032a4186ecda"></a>

### [`007af47c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007af47c.md) → [`007af4d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af4d4.md) FUN_007af4d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007ab754`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ab/007ab754.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`007ab7ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ab/007ab7ac.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007af4b8 ["COPY", "register:0:8", ["register:4040:8"]]
- 007af4b8 ["INT_ADD", "register:40f0:8", ["const:7af4b8:8", "const:4:8"]]
- 007af4b8 ["CALLIND", null, ["register:0:8"]]
+ 007af510 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007af510 ["INT_ADD", "register:40f0:8", ["const:7af510:8", "const:4:8"]]
+ 007af510 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ac0fffa93ea9731e69b134a47f9c3896"></a>

### [`007af4cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007af4cc.md) → [`007af524`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af524.md) FUN_007af524

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007af504 ["INT_ADD", "register:40f0:8", ["const:7af504:8", "const:4:8"]]
- 007af504 ["CALL", null, ["callee:00c53d70:8"]]
+ 007af55c ["INT_ADD", "register:40f0:8", ["const:7af55c:8", "const:4:8"]]
+ 007af55c ["CALL", null, ["callee:00c53d70:8"]]
- 007af524 ["COPY", "register:0:8", ["register:4040:8"]]
- 007af524 ["INT_ADD", "register:40f0:8", ["const:7af524:8", "const:4:8"]]
- 007af524 ["CALLIND", null, ["register:0:8"]]
+ 007af57c ["COPY", "register:0:8", ["register:4040:8"]]
+ 007af57c ["INT_ADD", "register:40f0:8", ["const:7af57c:8", "const:4:8"]]
+ 007af57c ["CALLIND", null, ["register:0:8"]]
- 007af534 ["INT_ADD", "register:40f0:8", ["const:7af534:8", "const:4:8"]]
- 007af534 ["CALL", null, ["callee:00c53da0:8"]]
+ 007af58c ["INT_ADD", "register:40f0:8", ["const:7af58c:8", "const:4:8"]]
+ 007af58c ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-d3db9f560e4cc69442e82f72abfdb5db"></a>

### [`007af5dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007af5dc.md) → [`007af634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af634.md) FUN_007af634

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007af5f8 ["INT_ADD", "register:40f0:8", ["const:7af5f8:8", "const:4:8"]]
- 007af5f8 ["CALL", null, ["callee:00c53da0:8"]]
+ 007af650 ["INT_ADD", "register:40f0:8", ["const:7af650:8", "const:4:8"]]
+ 007af650 ["CALL", null, ["callee:00c53da0:8"]]
- 007af618 ["COPY", "register:0:8", ["register:4040:8"]]
- 007af618 ["INT_ADD", "register:40f0:8", ["const:7af618:8", "const:4:8"]]
- 007af618 ["CALLIND", null, ["register:0:8"]]
+ 007af670 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007af670 ["INT_ADD", "register:40f0:8", ["const:7af670:8", "const:4:8"]]
+ 007af670 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a8e0e3dd73b05f576fcc1eefedd3cbdb"></a>

### [`007af800`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007af800.md) → [`007af858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af858.md) FUN_007af858

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007ab754`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ab/007ab754.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`007ab7ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ab/007ab7ac.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007af83c ["COPY", "register:0:8", ["register:4040:8"]]
- 007af83c ["INT_ADD", "register:40f0:8", ["const:7af83c:8", "const:4:8"]]
- 007af83c ["CALLIND", null, ["register:0:8"]]
+ 007af894 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007af894 ["INT_ADD", "register:40f0:8", ["const:7af894:8", "const:4:8"]]
+ 007af894 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-988f1c7f9d6a0d97ba9213d1c7d83e25"></a>

### [`007af850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007af850.md) → [`007af8a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007af8a8.md) FUN_007af8a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007af86c ["INT_ADD", "register:40f0:8", ["const:7af86c:8", "const:4:8"]]
- 007af86c ["CALL", null, ["callee:00459db4:8"]]
+ 007af8c4 ["INT_ADD", "register:40f0:8", ["const:7af8c4:8", "const:4:8"]]
+ 007af8c4 ["CALL", null, ["callee:00459db4:8"]]
~~~


<a id="compare-12e2aeff2b6b85a5f0d35ee82bd9774a"></a>

### [`007afbe4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007afbe4.md) → [`007afc3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007afc3c.md) FUN_007afc3c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007ad324`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ad/007ad324.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`007ad37c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007ad37c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007afc20 ["COPY", "register:0:8", ["register:4040:8"]]
- 007afc20 ["INT_ADD", "register:40f0:8", ["const:7afc20:8", "const:4:8"]]
- 007afc20 ["CALLIND", null, ["register:0:8"]]
+ 007afc78 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007afc78 ["INT_ADD", "register:40f0:8", ["const:7afc78:8", "const:4:8"]]
+ 007afc78 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-fc29601a3c89fc5b668f8527ffe8d35a"></a>

### [`007afc34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007afc34.md) → [`007afc8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007afc8c.md) FUN_007afc8c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007afc50 ["INT_ADD", "register:40f0:8", ["const:7afc50:8", "const:4:8"]]
- 007afc50 ["CALL", null, ["callee:00459db4:8"]]
+ 007afca8 ["INT_ADD", "register:40f0:8", ["const:7afca8:8", "const:4:8"]]
+ 007afca8 ["CALL", null, ["callee:00459db4:8"]]
~~~


<a id="compare-dd7ea8a879e470a7ec5b80772a7ff149"></a>

### [`007afe50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007afe50.md) → [`007afea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007afea8.md) FUN_007afea8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007ad324`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ad/007ad324.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`007ad37c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007ad37c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007afe8c ["COPY", "register:0:8", ["register:4040:8"]]
- 007afe8c ["INT_ADD", "register:40f0:8", ["const:7afe8c:8", "const:4:8"]]
- 007afe8c ["CALLIND", null, ["register:0:8"]]
+ 007afee4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007afee4 ["INT_ADD", "register:40f0:8", ["const:7afee4:8", "const:4:8"]]
+ 007afee4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b5afa79d855cbe635f978ba80bba6516"></a>

### [`007afea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007af/007afea0.md) → [`007afef8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007af/007afef8.md) FUN_007afef8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007afed8 ["COPY", "register:0:8", ["register:4040:8"]]
- 007afed8 ["INT_ADD", "register:40f0:8", ["const:7afed8:8", "const:4:8"]]
- 007afed8 ["CALLIND", null, ["register:0:8"]]
+ 007aff30 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007aff30 ["INT_ADD", "register:40f0:8", ["const:7aff30:8", "const:4:8"]]
+ 007aff30 ["CALLIND", null, ["register:0:8"]]
- 007aff0c ["INT_ADD", "register:40f0:8", ["const:7aff0c:8", "const:4:8"]]
- 007aff0c ["CALL", null, ["callee:00459db4:8"]]
+ 007aff64 ["INT_ADD", "register:40f0:8", ["const:7aff64:8", "const:4:8"]]
+ 007aff64 ["CALL", null, ["callee:00459db4:8"]]
- 007aff10 ["INT_ADD", "register:40f0:8", ["const:7aff10:8", "const:4:8"]]
- 007aff10 ["CALL", null, ["callee:00c57fb0:8"]]
+ 007aff68 ["INT_ADD", "register:40f0:8", ["const:7aff68:8", "const:4:8"]]
+ 007aff68 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-03170c3a7e02dadc7368ff4a3f7ae8bc"></a>

### [`007b0288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007b0/007b0288.md) → [`007b02e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b02e0.md) FUN_007b02e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007adf1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ad/007adf1c.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`007adf74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007adf74.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007b02c4 ["COPY", "register:0:8", ["register:4040:8"]]
- 007b02c4 ["INT_ADD", "register:40f0:8", ["const:7b02c4:8", "const:4:8"]]
- 007b02c4 ["CALLIND", null, ["register:0:8"]]
+ 007b031c ["COPY", "register:0:8", ["register:4040:8"]]
+ 007b031c ["INT_ADD", "register:40f0:8", ["const:7b031c:8", "const:4:8"]]
+ 007b031c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5f5349632d1b1dd049b137640116e68b"></a>

### [`007b02d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007b0/007b02d8.md) → [`007b0330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b0330.md) FUN_007b0330

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007b02f4 ["INT_ADD", "register:40f0:8", ["const:7b02f4:8", "const:4:8"]]
- 007b02f4 ["CALL", null, ["callee:00459db4:8"]]
+ 007b034c ["INT_ADD", "register:40f0:8", ["const:7b034c:8", "const:4:8"]]
+ 007b034c ["CALL", null, ["callee:00459db4:8"]]
~~~


<a id="compare-9bf5b8490ca04d5d1f7930fedf07c0d9"></a>

### [`007b04f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007b0/007b04f4.md) → [`007b054c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b054c.md) FUN_007b054c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007adf1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ad/007adf1c.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`007adf74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007adf74.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007b0530 ["COPY", "register:0:8", ["register:4040:8"]]
- 007b0530 ["INT_ADD", "register:40f0:8", ["const:7b0530:8", "const:4:8"]]
- 007b0530 ["CALLIND", null, ["register:0:8"]]
+ 007b0588 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007b0588 ["INT_ADD", "register:40f0:8", ["const:7b0588:8", "const:4:8"]]
+ 007b0588 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e9b873b1ec2eda4da22b5914990cb196"></a>

### [`007b0544`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007b0/007b0544.md) → [`007b059c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b059c.md) FUN_007b059c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007b0560 ["INT_ADD", "register:40f0:8", ["const:7b0560:8", "const:4:8"]]
- 007b0560 ["CALL", null, ["callee:00459db4:8"]]
+ 007b05b8 ["INT_ADD", "register:40f0:8", ["const:7b05b8:8", "const:4:8"]]
+ 007b05b8 ["CALL", null, ["callee:00459db4:8"]]
~~~


<a id="compare-b4730428b7fd225170f1d49aafca66fc"></a>

### [`007b0928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007b0/007b0928.md) → [`007b0980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b0980.md) FUN_007b0980

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007ab3c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ab/007ab3c8.md) · 呼出先 1件 [`00480d48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480d48.md)
- 新版 呼出元 1件 [`007ab420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ab/007ab420.md) · 呼出先 1件 [`00480d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480d88.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007b0948 ["INT_ADD", "register:40f0:8", ["const:7b0948:8", "const:4:8"]]
- 007b0948 ["CALL", null, ["callee:00480d88:8"]]
+ 007b09a0 ["INT_ADD", "register:40f0:8", ["const:7b09a0:8", "const:4:8"]]
+ 007b09a0 ["CALL", null, ["callee:00480d88:8"]]
- 007b0954 ["INT_ADD", "register:40f0:8", ["const:7b0954:8", "const:4:8"]]
- 007b0954 ["CALL", null, ["callee:00480d88:8"]]
+ 007b09ac ["INT_ADD", "register:40f0:8", ["const:7b09ac:8", "const:4:8"]]
+ 007b09ac ["CALL", null, ["callee:00480d88:8"]]
~~~


<a id="compare-3fb565ef51a8859a12cffc82c8bbe7d6"></a>

### [`007b096c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007b0/007b096c.md) → [`007b09c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b09c4.md) FUN_007b09c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007ab3d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ab/007ab3d0.md) · 呼出先 1件 [`004802f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004802f8.md)
- 新版 呼出元 1件 [`007ab428`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ab/007ab428.md) · 呼出先 1件 [`00480338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480338.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007b0984 ["INT_ADD", "register:40f0:8", ["const:7b0984:8", "const:4:8"]]
- 007b0984 ["CALL", null, ["callee:00480338:8"]]
+ 007b09dc ["INT_ADD", "register:40f0:8", ["const:7b09dc:8", "const:4:8"]]
+ 007b09dc ["CALL", null, ["callee:00480338:8"]]
- 007b0994 ["INT_ADD", "register:40f0:8", ["const:7b0994:8", "const:4:8"]]
- 007b0994 ["CALL", null, ["callee:00480338:8"]]
+ 007b09ec ["INT_ADD", "register:40f0:8", ["const:7b09ec:8", "const:4:8"]]
+ 007b09ec ["CALL", null, ["callee:00480338:8"]]
- 007b09a4 ["INT_ADD", "register:40f0:8", ["const:7b09a4:8", "const:4:8"]]
- 007b09a4 ["CALL", null, ["callee:00480338:8"]]
+ 007b09fc ["INT_ADD", "register:40f0:8", ["const:7b09fc:8", "const:4:8"]]
+ 007b09fc ["CALL", null, ["callee:00480338:8"]]
~~~


<a id="compare-7bef165622ef96270fc6c7e3d493bb63"></a>

### [`007bba0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bb/007bba0c.md) → [`007bba64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bb/007bba64.md) FUN_007bba64

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`007bda44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bda44.md) [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) [`007df0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007df/007df0e8.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 3件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007bba74 ["INT_ADD", "register:40f0:8", ["const:7bba74:8", "const:4:8"]]
- 007bba74 ["CALL", null, ["callee:00c57f60:8"]]
+ 007bbacc ["INT_ADD", "register:40f0:8", ["const:7bbacc:8", "const:4:8"]]
+ 007bbacc ["CALL", null, ["callee:00c57f60:8"]]
- 007bbacc ["INT_ADD", "register:40f0:8", ["const:7bbacc:8", "const:4:8"]]
- 007bbacc ["CALL", null, ["callee:0043bbe4:8"]]
+ 007bbb24 ["INT_ADD", "register:40f0:8", ["const:7bbb24:8", "const:4:8"]]
+ 007bbb24 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-fceb28660664f5badd67b6aef213f30f"></a>

### [`007bbaf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bb/007bbaf4.md) → [`007bbb4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bb/007bbb4c.md) FUN_007bbb4c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007b0a18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007b0/007b0a18.md) [`00a52e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a52/00a52e30.md) · 呼出先 4件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`007f0c98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f0/007f0c98.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 2件 [`007b0a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b0a70.md) [`00a52ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a52/00a52ea0.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`007f0cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f0/007f0cf0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007bbb54 ["INT_ADD", "register:40f0:8", ["const:7bbb54:8", "const:4:8"]]
- 007bbb54 ["CALL", null, ["callee:0043bb60:8"]]
+ 007bbbac ["INT_ADD", "register:40f0:8", ["const:7bbbac:8", "const:4:8"]]
+ 007bbbac ["CALL", null, ["callee:0043bb60:8"]]
- 007bbb64 ["INT_ADD", "register:40f0:8", ["const:7bbb64:8", "const:4:8"]]
- 007bbb64 ["CALL", null, ["callee:0043bb60:8"]]
+ 007bbbbc ["INT_ADD", "register:40f0:8", ["const:7bbbbc:8", "const:4:8"]]
+ 007bbbbc ["CALL", null, ["callee:0043bb60:8"]]
- 007bbb98 ["INT_ADD", "register:40f0:8", ["const:7bbb98:8", "const:4:8"]]
- 007bbb98 ["CALL", null, ["callee:007f0cf0:8"]]
+ 007bbbf0 ["INT_ADD", "register:40f0:8", ["const:7bbbf0:8", "const:4:8"]]
+ 007bbbf0 ["CALL", null, ["callee:007f0cf0:8"]]
~~~


<a id="compare-c2c48929c0a04b05f835df47a25b02be"></a>

### [`007bbd48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bb/007bbd48.md) → [`007bbda0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bb/007bbda0.md) FUN_007bbda0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 13件 [`006bed5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006be/006bed5c.md) [`007b0a18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007b0/007b0a18.md) [`007bda44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bda44.md) [`007cb5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cb/007cb5e0.md) [`007df0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007df/007df0e8.md) · 呼出先 7件 [`008026b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/008026b8.md) [`00802b8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802b8c.md) [`00802ca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802ca8.md) [`00802ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802ee0.md) [`00805fe4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00805/00805fe4.md)
- 新版 呼出元 13件 [`006bedb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006be/006bedb4.md) [`007b0a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b0a70.md) [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007cb638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cb/007cb638.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 7件 [`00802710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802710.md) [`00802be4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802be4.md) [`00802d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802d00.md) [`00802f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802f38.md) [`0080603c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00806/0080603c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007bbd60 ["INT_ADD", "register:40f0:8", ["const:7bbd60:8", "const:4:8"]]
- 007bbd60 ["CALL", null, ["callee:00802710:8"]]
+ 007bbdb8 ["INT_ADD", "register:40f0:8", ["const:7bbdb8:8", "const:4:8"]]
+ 007bbdb8 ["CALL", null, ["callee:00802710:8"]]
- 007bbd74 ["INT_ADD", "register:40f0:8", ["const:7bbd74:8", "const:4:8"]]
- 007bbd74 ["CALL", null, ["callee:00802be4:8"]]
+ 007bbdcc ["INT_ADD", "register:40f0:8", ["const:7bbdcc:8", "const:4:8"]]
+ 007bbdcc ["CALL", null, ["callee:00802be4:8"]]
- 007bbd84 ["INT_ADD", "register:40f0:8", ["const:7bbd84:8", "const:4:8"]]
- 007bbd84 ["CALL", null, ["callee:00802f38:8"]]
+ 007bbddc ["INT_ADD", "register:40f0:8", ["const:7bbddc:8", "const:4:8"]]
+ 007bbddc ["CALL", null, ["callee:00802f38:8"]]
~~~


<a id="compare-88ec472a942b51e7a3d39b0b495b7bf1"></a>

### [`007bd6d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bd6d8.md) → [`007bd730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bd730.md) FUN_007bd730

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007df0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007df/007df0e8.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007bd740 ["INT_ADD", "register:40f0:8", ["const:7bd740:8", "const:4:8"]]
- 007bd740 ["CALL", null, ["callee:00c57f60:8"]]
+ 007bd798 ["INT_ADD", "register:40f0:8", ["const:7bd798:8", "const:4:8"]]
+ 007bd798 ["CALL", null, ["callee:00c57f60:8"]]
- 007bd778 ["INT_ADD", "register:40f0:8", ["const:7bd778:8", "const:4:8"]]
- 007bd778 ["CALL", null, ["callee:0043bbe4:8"]]
+ 007bd7d0 ["INT_ADD", "register:40f0:8", ["const:7bd7d0:8", "const:4:8"]]
+ 007bd7d0 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-8af16b53530283159251ad17db9524a0"></a>

### [`007bd7a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bd7a0.md) → [`007bd7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bd7f8.md) FUN_007bd7f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0046e8a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e8a4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007bd7d4 ["INT_ADD", "register:40f0:8", ["const:7bd7d4:8", "const:4:8"]]
- 007bd7d4 ["CALL", null, ["callee:0046e8e4:8"]]
+ 007bd82c ["INT_ADD", "register:40f0:8", ["const:7bd82c:8", "const:4:8"]]
+ 007bd82c ["CALL", null, ["callee:0046e8e4:8"]]
~~~


<a id="compare-f4390968ec8287e0786e7164888ff725"></a>

### [`007bd808`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bd808.md) → [`007bd860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bd860.md) FUN_007bd860

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007bd840 ["INT_ADD", "register:40f0:8", ["const:7bd840:8", "const:4:8"]]
- 007bd840 ["CALL", null, ["callee:00c53da0:8"]]
+ 007bd898 ["INT_ADD", "register:40f0:8", ["const:7bd898:8", "const:4:8"]]
+ 007bd898 ["CALL", null, ["callee:00c53da0:8"]]
- 007bd854 ["COPY", "register:0:8", ["register:4040:8"]]
- 007bd854 ["INT_ADD", "register:40f0:8", ["const:7bd854:8", "const:4:8"]]
- 007bd854 ["CALLIND", null, ["register:0:8"]]
+ 007bd8ac ["COPY", "register:0:8", ["register:4040:8"]]
+ 007bd8ac ["INT_ADD", "register:40f0:8", ["const:7bd8ac:8", "const:4:8"]]
+ 007bd8ac ["CALLIND", null, ["register:0:8"]]
- 007bd85c ["INT_ADD", "register:40f0:8", ["const:7bd85c:8", "const:4:8"]]
- 007bd85c ["CALL", null, ["callee:00c57f50:8"]]
+ 007bd8b4 ["INT_ADD", "register:40f0:8", ["const:7bd8b4:8", "const:4:8"]]
+ 007bd8b4 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-71928005c19e88dd2fb6656e2c1658cd"></a>

### [`007bd874`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bd874.md) → [`007bd8cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bd8cc.md) FUN_007bd8cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007bd8ac ["INT_ADD", "register:40f0:8", ["const:7bd8ac:8", "const:4:8"]]
- 007bd8ac ["CALL", null, ["callee:00c53da0:8"]]
+ 007bd904 ["INT_ADD", "register:40f0:8", ["const:7bd904:8", "const:4:8"]]
+ 007bd904 ["CALL", null, ["callee:00c53da0:8"]]
- 007bd8c0 ["COPY", "register:0:8", ["register:4040:8"]]
- 007bd8c0 ["INT_ADD", "register:40f0:8", ["const:7bd8c0:8", "const:4:8"]]
- 007bd8c0 ["CALLIND", null, ["register:0:8"]]
+ 007bd918 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007bd918 ["INT_ADD", "register:40f0:8", ["const:7bd918:8", "const:4:8"]]
+ 007bd918 ["CALLIND", null, ["register:0:8"]]
- 007bd8c8 ["INT_ADD", "register:40f0:8", ["const:7bd8c8:8", "const:4:8"]]
- 007bd8c8 ["CALL", null, ["callee:00c57f50:8"]]
+ 007bd920 ["INT_ADD", "register:40f0:8", ["const:7bd920:8", "const:4:8"]]
+ 007bd920 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-f086b7610ef68b34e4055cb71f5018a8"></a>

### [`007bd8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bd8e0.md) → [`007bd938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bd938.md) FUN_007bd938

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007bd8fc ["INT_ADD", "register:40f0:8", ["const:7bd8fc:8", "const:4:8"]]
- 007bd8fc ["CALL", null, ["callee:00c53da0:8"]]
+ 007bd954 ["INT_ADD", "register:40f0:8", ["const:7bd954:8", "const:4:8"]]
+ 007bd954 ["CALL", null, ["callee:00c53da0:8"]]
- 007bd91c ["COPY", "register:0:8", ["register:4040:8"]]
- 007bd91c ["INT_ADD", "register:40f0:8", ["const:7bd91c:8", "const:4:8"]]
- 007bd91c ["CALLIND", null, ["register:0:8"]]
+ 007bd974 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007bd974 ["INT_ADD", "register:40f0:8", ["const:7bd974:8", "const:4:8"]]
+ 007bd974 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6610c1299cb209fd8826dcc5e0847aec"></a>

### [`007bd930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bd930.md) → [`007bd988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bd988.md) FUN_007bd988

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007bd998 ["INT_ADD", "register:40f0:8", ["const:7bd998:8", "const:4:8"]]
- 007bd998 ["CALL", null, ["callee:00c57f60:8"]]
+ 007bd9f0 ["INT_ADD", "register:40f0:8", ["const:7bd9f0:8", "const:4:8"]]
+ 007bd9f0 ["CALL", null, ["callee:00c57f60:8"]]
- 007bda1c ["INT_ADD", "register:40f0:8", ["const:7bda1c:8", "const:4:8"]]
- 007bda1c ["CALL", null, ["callee:0043bbe4:8"]]
+ 007bda74 ["INT_ADD", "register:40f0:8", ["const:7bda74:8", "const:4:8"]]
+ 007bda74 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-f67f11481706c0ff44d0b2ea426ceb44"></a>

### [`007c77e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007c7/007c77e8.md) → [`007c7840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007c7/007c7840.md) FUN_007c7840

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) [`0094726c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00947/0094726c.md) · 呼出先 4件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md)
- 新版 呼出元 2件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`009472c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00947/009472c0.md) · 呼出先 4件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007c780c ["INT_ADD", "register:40f0:8", ["const:7c780c:8", "const:4:8"]]
- 007c780c ["CALL", null, ["callee:00c580b0:8"]]
+ 007c7864 ["INT_ADD", "register:40f0:8", ["const:7c7864:8", "const:4:8"]]
+ 007c7864 ["CALL", null, ["callee:00c580b0:8"]]
- 007c7854 ["INT_ADD", "register:40f0:8", ["const:7c7854:8", "const:4:8"]]
- 007c7854 ["CALL", null, ["callee:00c57f60:8"]]
+ 007c78ac ["INT_ADD", "register:40f0:8", ["const:7c78ac:8", "const:4:8"]]
+ 007c78ac ["CALL", null, ["callee:00c57f60:8"]]
- 007c7874 ["INT_ADD", "register:40f0:8", ["const:7c7874:8", "const:4:8"]]
- 007c7874 ["CALL", null, ["callee:00c58010:8"]]
+ 007c78cc ["INT_ADD", "register:40f0:8", ["const:7c78cc:8", "const:4:8"]]
+ 007c78cc ["CALL", null, ["callee:00c58010:8"]]
~~~


<a id="compare-338e3e6e72a0d1e5b3a89633a054c257"></a>

### [`007c78b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007c7/007c78b0.md) → [`007c7908`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007c7/007c7908.md) FUN_007c7908

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) [`009d0320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d0/009d0320.md) [`00ab31a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ab3/00ab31a4.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 3件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) [`00ab3214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ab3/00ab3214.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007c7918 ["INT_ADD", "register:40f0:8", ["const:7c7918:8", "const:4:8"]]
- 007c7918 ["CALL", null, ["callee:00c57f60:8"]]
+ 007c7970 ["INT_ADD", "register:40f0:8", ["const:7c7970:8", "const:4:8"]]
+ 007c7970 ["CALL", null, ["callee:00c57f60:8"]]
- 007c7950 ["INT_ADD", "register:40f0:8", ["const:7c7950:8", "const:4:8"]]
- 007c7950 ["CALL", null, ["callee:0043bbe4:8"]]
+ 007c79a8 ["INT_ADD", "register:40f0:8", ["const:7c79a8:8", "const:4:8"]]
+ 007c79a8 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-eeb293de4af6374f980a056eb815bc05"></a>

### [`007c7e68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007c7/007c7e68.md) → [`007c7ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007c7/007c7ec0.md) FUN_007c7ec0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007bda44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bda44.md) · 呼出先 5件 [`007f1eb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f1/007f1eb8.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) · 呼出先 5件 [`007f1f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1f10.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007c7e98 ["INT_ADD", "register:40f0:8", ["const:7c7e98:8", "const:4:8"]]
- 007c7e98 ["CALL", null, ["callee:00c57f60:8"]]
+ 007c7ef0 ["INT_ADD", "register:40f0:8", ["const:7c7ef0:8", "const:4:8"]]
+ 007c7ef0 ["CALL", null, ["callee:00c57f60:8"]]
- 007c7eb0 ["INT_ADD", "register:40f0:8", ["const:7c7eb0:8", "const:4:8"]]
- 007c7eb0 ["CALL", null, ["callee:00c580d0:8"]]
+ 007c7f08 ["INT_ADD", "register:40f0:8", ["const:7c7f08:8", "const:4:8"]]
+ 007c7f08 ["CALL", null, ["callee:00c580d0:8"]]
- 007c7ecc ["INT_ADD", "register:40f0:8", ["const:7c7ecc:8", "const:4:8"]]
- 007c7ecc ["CALL", null, ["callee:007f1f10:8"]]
+ 007c7f24 ["INT_ADD", "register:40f0:8", ["const:7c7f24:8", "const:4:8"]]
+ 007c7f24 ["CALL", null, ["callee:007f1f10:8"]]
~~~


<a id="compare-25bef0cb2ebc0046316b95eb448a034f"></a>

### [`007c7ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007c7/007c7ef0.md) → [`007c7f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007c7/007c7f48.md) FUN_007c7f48

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007bda44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bda44.md) [`007efca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ef/007efca8.md) · 呼出先 8件 [`005e46d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e4/005e46d8.md) [`005e46e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e4/005e46e0.md) [`005e48ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e4/005e48ac.md) [`005e4a34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e4/005e4a34.md) [`005e4a94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e4/005e4a94.md)
- 新版 呼出元 2件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007efd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efd00.md) · 呼出先 8件 [`005e4718`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4718.md) [`005e4720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4720.md) [`005e48ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e48ec.md) [`005e4a74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4a74.md) [`005e4ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4ad4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007c7f08 ["INT_ADD", "register:40f0:8", ["const:7c7f08:8", "const:4:8"]]
- 007c7f08 ["CALL", null, ["callee:005e4a74:8"]]
+ 007c7f60 ["INT_ADD", "register:40f0:8", ["const:7c7f60:8", "const:4:8"]]
+ 007c7f60 ["CALL", null, ["callee:005e4a74:8"]]
- 007c7f10 ["INT_ADD", "register:40f0:8", ["const:7c7f10:8", "const:4:8"]]
- 007c7f10 ["CALL", null, ["callee:005e4718:8"]]
+ 007c7f68 ["INT_ADD", "register:40f0:8", ["const:7c7f68:8", "const:4:8"]]
+ 007c7f68 ["CALL", null, ["callee:005e4718:8"]]
- 007c7f3c ["INT_ADD", "register:40f0:8", ["const:7c7f3c:8", "const:4:8"]]
- 007c7f3c ["CALL", null, ["callee:005e4b54:8"]]
+ 007c7f94 ["INT_ADD", "register:40f0:8", ["const:7c7f94:8", "const:4:8"]]
+ 007c7f94 ["CALL", null, ["callee:005e4b54:8"]]
~~~


<a id="compare-2d80dcb1a430bb0c12d1d803cea3f681"></a>

### [`007cb588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cb/007cb588.md) → [`007cb5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cb/007cb5e0.md) FUN_007cb5e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007cb5a8 ["COPY", "register:0:8", ["register:4040:8"]]
- 007cb5a8 ["INT_ADD", "register:40f0:8", ["const:7cb5a8:8", "const:4:8"]]
- 007cb5a8 ["CALLIND", null, ["register:0:8"]]
+ 007cb600 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007cb600 ["INT_ADD", "register:40f0:8", ["const:7cb600:8", "const:4:8"]]
+ 007cb600 ["CALLIND", null, ["register:0:8"]]
- 007cb5b8 ["INT_ADD", "register:40f0:8", ["const:7cb5b8:8", "const:4:8"]]
- 007cb5b8 ["CALL", null, ["callee:00c57f80:8"]]
+ 007cb610 ["INT_ADD", "register:40f0:8", ["const:7cb610:8", "const:4:8"]]
+ 007cb610 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-4b754d29052160c94e5fb6020e9b7b1c"></a>

### [`007dcf38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007dc/007dcf38.md) → [`007dcf90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007dc/007dcf90.md) FUN_007dcf90

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007dcf54 ["INT_ADD", "register:40f0:8", ["const:7dcf54:8", "const:4:8"]]
- 007dcf54 ["CALL", null, ["callee:00c53da0:8"]]
+ 007dcfac ["INT_ADD", "register:40f0:8", ["const:7dcfac:8", "const:4:8"]]
+ 007dcfac ["CALL", null, ["callee:00c53da0:8"]]
- 007dcf74 ["COPY", "register:0:8", ["register:4040:8"]]
- 007dcf74 ["INT_ADD", "register:40f0:8", ["const:7dcf74:8", "const:4:8"]]
- 007dcf74 ["CALLIND", null, ["register:0:8"]]
+ 007dcfcc ["COPY", "register:0:8", ["register:4040:8"]]
+ 007dcfcc ["INT_ADD", "register:40f0:8", ["const:7dcfcc:8", "const:4:8"]]
+ 007dcfcc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-91128f5cb1d036f3a03ab702117df0fb"></a>

### [`007dcf88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007dc/007dcf88.md) → [`007dcfe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007dc/007dcfe0.md) FUN_007dcfe0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) [`00914e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00914/00914e30.md) · 呼出先 4件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md)
- 新版 呼出元 2件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`00914e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00914/00914e84.md) · 呼出先 4件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007dcfac ["INT_ADD", "register:40f0:8", ["const:7dcfac:8", "const:4:8"]]
- 007dcfac ["CALL", null, ["callee:00c580b0:8"]]
+ 007dd004 ["INT_ADD", "register:40f0:8", ["const:7dd004:8", "const:4:8"]]
+ 007dd004 ["CALL", null, ["callee:00c580b0:8"]]
- 007dcff4 ["INT_ADD", "register:40f0:8", ["const:7dcff4:8", "const:4:8"]]
- 007dcff4 ["CALL", null, ["callee:00c57f60:8"]]
+ 007dd04c ["INT_ADD", "register:40f0:8", ["const:7dd04c:8", "const:4:8"]]
+ 007dd04c ["CALL", null, ["callee:00c57f60:8"]]
- 007dd014 ["INT_ADD", "register:40f0:8", ["const:7dd014:8", "const:4:8"]]
- 007dd014 ["CALL", null, ["callee:00c58010:8"]]
+ 007dd06c ["INT_ADD", "register:40f0:8", ["const:7dd06c:8", "const:4:8"]]
+ 007dd06c ["CALL", null, ["callee:00c58010:8"]]
~~~


<a id="compare-f9d6485e0cbbe5b4e2c6ef42c03ca0ea"></a>

### [`007dd050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007dd/007dd050.md) → [`007dd0a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007dd/007dd0a8.md) FUN_007dd0a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) [`007df0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007df/007df0e8.md) [`00a47f00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a47/00a47f00.md) · 呼出先 5件 [`005e4e74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e4/005e4e74.md) [`0066a408`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0066a/0066a408.md) [`008026b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/008026b8.md) [`00802b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802b58.md) [`00a68f48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a68/00a68f48.md)
- 新版 呼出元 3件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 5件 [`005e4eb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4eb4.md) [`0066a448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066a448.md) [`00802710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802710.md) [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md) [`00a68fb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a68/00a68fb8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007dd070 ["INT_ADD", "register:40f0:8", ["const:7dd070:8", "const:4:8"]]
- 007dd070 ["CALL", null, ["callee:00802bb0:8"]]
+ 007dd0c8 ["INT_ADD", "register:40f0:8", ["const:7dd0c8:8", "const:4:8"]]
+ 007dd0c8 ["CALL", null, ["callee:00802bb0:8"]]
- 007dd080 ["INT_ADD", "register:40f0:8", ["const:7dd080:8", "const:4:8"]]
- 007dd080 ["CALL", null, ["callee:0066a448:8"]]
+ 007dd0d8 ["INT_ADD", "register:40f0:8", ["const:7dd0d8:8", "const:4:8"]]
+ 007dd0d8 ["CALL", null, ["callee:0066a448:8"]]
- 007dd094 ["INT_ADD", "register:40f0:8", ["const:7dd094:8", "const:4:8"]]
- 007dd094 ["CALL", null, ["callee:00802710:8"]]
+ 007dd0ec ["INT_ADD", "register:40f0:8", ["const:7dd0ec:8", "const:4:8"]]
+ 007dd0ec ["CALL", null, ["callee:00802710:8"]]
~~~


<a id="compare-1ddcb7fc11f924fea8419d7abeead4e9"></a>

### [`007dd0f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007dd/007dd0f8.md) → [`007dd150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007dd/007dd150.md) FUN_007dd150

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 4件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md)
- 新版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 4件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007dd11c ["INT_ADD", "register:40f0:8", ["const:7dd11c:8", "const:4:8"]]
- 007dd11c ["CALL", null, ["callee:00c580b0:8"]]
+ 007dd174 ["INT_ADD", "register:40f0:8", ["const:7dd174:8", "const:4:8"]]
+ 007dd174 ["CALL", null, ["callee:00c580b0:8"]]
- 007dd164 ["INT_ADD", "register:40f0:8", ["const:7dd164:8", "const:4:8"]]
- 007dd164 ["CALL", null, ["callee:00c57f60:8"]]
+ 007dd1bc ["INT_ADD", "register:40f0:8", ["const:7dd1bc:8", "const:4:8"]]
+ 007dd1bc ["CALL", null, ["callee:00c57f60:8"]]
- 007dd184 ["INT_ADD", "register:40f0:8", ["const:7dd184:8", "const:4:8"]]
- 007dd184 ["CALL", null, ["callee:00c58010:8"]]
+ 007dd1dc ["INT_ADD", "register:40f0:8", ["const:7dd1dc:8", "const:4:8"]]
+ 007dd1dc ["CALL", null, ["callee:00c58010:8"]]
~~~


<a id="compare-366351642a37b76258d37790c9463306"></a>

### [`007dd1c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007dd/007dd1c0.md) → [`007dd218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007dd/007dd218.md) FUN_007dd218

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 4件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md)
- 新版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 4件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007dd1e4 ["INT_ADD", "register:40f0:8", ["const:7dd1e4:8", "const:4:8"]]
- 007dd1e4 ["CALL", null, ["callee:00c580b0:8"]]
+ 007dd23c ["INT_ADD", "register:40f0:8", ["const:7dd23c:8", "const:4:8"]]
+ 007dd23c ["CALL", null, ["callee:00c580b0:8"]]
- 007dd22c ["INT_ADD", "register:40f0:8", ["const:7dd22c:8", "const:4:8"]]
- 007dd22c ["CALL", null, ["callee:00c57f60:8"]]
+ 007dd284 ["INT_ADD", "register:40f0:8", ["const:7dd284:8", "const:4:8"]]
+ 007dd284 ["CALL", null, ["callee:00c57f60:8"]]
- 007dd24c ["INT_ADD", "register:40f0:8", ["const:7dd24c:8", "const:4:8"]]
- 007dd24c ["CALL", null, ["callee:00c58010:8"]]
+ 007dd2a4 ["INT_ADD", "register:40f0:8", ["const:7dd2a4:8", "const:4:8"]]
+ 007dd2a4 ["CALL", null, ["callee:00c58010:8"]]
~~~


<a id="compare-abada492e7e7fb15a98a4495b965844b"></a>

### [`007dd288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007dd/007dd288.md) → [`007dd2e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007dd/007dd2e0.md) FUN_007dd2e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007dd2f0 ["INT_ADD", "register:40f0:8", ["const:7dd2f0:8", "const:4:8"]]
- 007dd2f0 ["CALL", null, ["callee:00c57f60:8"]]
+ 007dd348 ["INT_ADD", "register:40f0:8", ["const:7dd348:8", "const:4:8"]]
+ 007dd348 ["CALL", null, ["callee:00c57f60:8"]]
- 007dd33c ["INT_ADD", "register:40f0:8", ["const:7dd33c:8", "const:4:8"]]
- 007dd33c ["CALL", null, ["callee:0043bbe4:8"]]
+ 007dd394 ["INT_ADD", "register:40f0:8", ["const:7dd394:8", "const:4:8"]]
+ 007dd394 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-70f8a146960b391c5dbc06d6fbba04fc"></a>

### [`007de528`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007de/007de528.md) → [`007de580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007de/007de580.md) FUN_007de580

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) [`007df0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007df/007df0e8.md) [`00a65dec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a65/00a65dec.md) [`00ab31a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ab3/00ab31a4.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 4件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) [`00a65e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a65/00a65e5c.md) [`00ab3214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ab3/00ab3214.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007de590 ["INT_ADD", "register:40f0:8", ["const:7de590:8", "const:4:8"]]
- 007de590 ["CALL", null, ["callee:00c57f60:8"]]
+ 007de5e8 ["INT_ADD", "register:40f0:8", ["const:7de5e8:8", "const:4:8"]]
+ 007de5e8 ["CALL", null, ["callee:00c57f60:8"]]
- 007de5d4 ["INT_ADD", "register:40f0:8", ["const:7de5d4:8", "const:4:8"]]
- 007de5d4 ["CALL", null, ["callee:0043bbe4:8"]]
+ 007de62c ["INT_ADD", "register:40f0:8", ["const:7de62c:8", "const:4:8"]]
+ 007de62c ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-3d9cb2fa964d503d09152baaa62a30a4"></a>

### [`007de860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007de/007de860.md) → [`007de8b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007de/007de8b8.md) FUN_007de8b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 2件 [`00903f44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00903/00903f44.md) [`009e0fc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e0/009e0fc0.md)
- 新版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 2件 [`00903f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00903/00903f98.md) [`009e1014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e1/009e1014.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007de890 ["INT_ADD", "register:40f0:8", ["const:7de890:8", "const:4:8"]]
- 007de890 ["CALL", null, ["callee:00903f98:8"]]
+ 007de8e8 ["INT_ADD", "register:40f0:8", ["const:7de8e8:8", "const:4:8"]]
+ 007de8e8 ["CALL", null, ["callee:00903f98:8"]]
~~~


<a id="compare-58b02f7d8fc8a04fbf9fa79a327836f9"></a>

### [`007df024`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007df/007df024.md) → [`007df07c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df07c.md) FUN_007df07c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) [`007f296c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f2/007f296c.md) · 呼出先 5件 [`00a43138`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a43/00a43138.md) [`00a83260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a83/00a83260.md) [`00a8344c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a83/00a8344c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 2件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`007f29c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f2/007f29c4.md) · 呼出先 5件 [`00a4318c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a43/00a4318c.md) [`00a832d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a832d0.md) [`00a834bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a834bc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007df054 ["INT_ADD", "register:40f0:8", ["const:7df054:8", "const:4:8"]]
- 007df054 ["CALL", null, ["callee:00a832d0:8"]]
+ 007df0ac ["INT_ADD", "register:40f0:8", ["const:7df0ac:8", "const:4:8"]]
+ 007df0ac ["CALL", null, ["callee:00a832d0:8"]]
- 007df068 ["INT_ADD", "register:40f0:8", ["const:7df068:8", "const:4:8"]]
- 007df068 ["CALL", null, ["callee:00a4318c:8"]]
+ 007df0c0 ["INT_ADD", "register:40f0:8", ["const:7df0c0:8", "const:4:8"]]
+ 007df0c0 ["CALL", null, ["callee:00a4318c:8"]]
- 007df080 ["INT_ADD", "register:40f0:8", ["const:7df080:8", "const:4:8"]]
- 007df080 ["CALL", null, ["callee:00a834bc:8"]]
+ 007df0d8 ["INT_ADD", "register:40f0:8", ["const:7df0d8:8", "const:4:8"]]
+ 007df0d8 ["CALL", null, ["callee:00a834bc:8"]]
~~~


<a id="compare-d4f3775ad386f18ecd0169e008d89813"></a>

### [`007ef320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ef/007ef320.md) → [`007ef378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007ef378.md) FUN_007ef378

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007df0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007df/007df0e8.md) · 呼出先 8件 [`005e4e74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e4/005e4e74.md) [`008026b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/008026b8.md) [`00802b8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802b8c.md) [`00802ca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802ca8.md) [`00a06674`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a06674.md)
- 新版 呼出元 1件 [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 8件 [`005e4eb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4eb4.md) [`00802710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802710.md) [`00802be4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802be4.md) [`00802d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802d00.md) [`00a066c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a066c8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007ef338 ["INT_ADD", "register:40f0:8", ["const:7ef338:8", "const:4:8"]]
- 007ef338 ["CALL", null, ["callee:00802710:8"]]
+ 007ef390 ["INT_ADD", "register:40f0:8", ["const:7ef390:8", "const:4:8"]]
+ 007ef390 ["CALL", null, ["callee:00802710:8"]]
- 007ef344 ["INT_ADD", "register:40f0:8", ["const:7ef344:8", "const:4:8"]]
- 007ef344 ["CALL", null, ["callee:00802be4:8"]]
+ 007ef39c ["INT_ADD", "register:40f0:8", ["const:7ef39c:8", "const:4:8"]]
+ 007ef39c ["CALL", null, ["callee:00802be4:8"]]
- 007ef34c ["INT_ADD", "register:40f0:8", ["const:7ef34c:8", "const:4:8"]]
- 007ef34c ["CALL", null, ["callee:00802d00:8"]]
+ 007ef3a4 ["INT_ADD", "register:40f0:8", ["const:7ef3a4:8", "const:4:8"]]
+ 007ef3a4 ["CALL", null, ["callee:00802d00:8"]]
~~~


<a id="compare-4f3b3feb03b79c888e9adc63603fab33"></a>

### [`007ef3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ef/007ef3f0.md) → [`007ef448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007ef448.md) FUN_007ef448

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007df0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007df/007df0e8.md) · 呼出先 5件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`007534d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00753/007534d0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00753528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00753/00753528.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007ef498 ["INT_ADD", "register:40f0:8", ["const:7ef498:8", "const:4:8"]]
- 007ef498 ["CALL", null, ["callee:00c57f60:8"]]
+ 007ef4f0 ["INT_ADD", "register:40f0:8", ["const:7ef4f0:8", "const:4:8"]]
+ 007ef4f0 ["CALL", null, ["callee:00c57f60:8"]]
- 007ef4dc ["INT_ADD", "register:40f0:8", ["const:7ef4dc:8", "const:4:8"]]
- 007ef4dc ["CALL", null, ["callee:00c580d0:8"]]
+ 007ef534 ["INT_ADD", "register:40f0:8", ["const:7ef534:8", "const:4:8"]]
+ 007ef534 ["CALL", null, ["callee:00c580d0:8"]]
- 007ef4f0 ["INT_ADD", "register:40f0:8", ["const:7ef4f0:8", "const:4:8"]]
- 007ef4f0 ["CALL", null, ["callee:00c57f80:8"]]
+ 007ef548 ["INT_ADD", "register:40f0:8", ["const:7ef548:8", "const:4:8"]]
+ 007ef548 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-d3a662e808d0bc7dad813b4b57b21a75"></a>

### [`007ef5dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ef/007ef5dc.md) → [`007ef634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007ef634.md) FUN_007ef634

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007df0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007df/007df0e8.md) · 呼出先 5件 [`007534d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00753/007534d0.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 5件 [`00753528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00753/00753528.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007ef62c ["INT_ADD", "register:40f0:8", ["const:7ef62c:8", "const:4:8"]]
- 007ef62c ["CALL", null, ["callee:00c57f60:8"]]
+ 007ef684 ["INT_ADD", "register:40f0:8", ["const:7ef684:8", "const:4:8"]]
+ 007ef684 ["CALL", null, ["callee:00c57f60:8"]]
- 007ef644 ["INT_ADD", "register:40f0:8", ["const:7ef644:8", "const:4:8"]]
- 007ef644 ["CALL", null, ["callee:00c580d0:8"]]
+ 007ef69c ["INT_ADD", "register:40f0:8", ["const:7ef69c:8", "const:4:8"]]
+ 007ef69c ["CALL", null, ["callee:00c580d0:8"]]
- 007ef660 ["INT_ADD", "register:40f0:8", ["const:7ef660:8", "const:4:8"]]
- 007ef660 ["CALL", null, ["callee:00753528:8"]]
+ 007ef6b8 ["INT_ADD", "register:40f0:8", ["const:7ef6b8:8", "const:4:8"]]
+ 007ef6b8 ["CALL", null, ["callee:00753528:8"]]
~~~


<a id="compare-d7f72547240a004b1a53b58920772a00"></a>

### [`007efa88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ef/007efa88.md) → [`007efae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efae0.md) FUN_007efae0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`007cb5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cb/007cb5e0.md) [`009e4a08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e4/009e4a08.md) [`00a60748`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a60/00a60748.md) [`00ab4d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ab4/00ab4d00.md) · 呼出先 5件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md)
- 新版 呼出元 4件 [`007cb638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cb/007cb638.md) [`009e4a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e4/009e4a5c.md) [`00a607b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a60/00a607b8.md) [`00ab4d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ab4/00ab4d70.md) · 呼出先 5件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007efaac ["INT_ADD", "register:40f0:8", ["const:7efaac:8", "const:4:8"]]
- 007efaac ["CALL", null, ["callee:00c580b0:8"]]
+ 007efb04 ["INT_ADD", "register:40f0:8", ["const:7efb04:8", "const:4:8"]]
+ 007efb04 ["CALL", null, ["callee:00c580b0:8"]]
- 007efaf4 ["INT_ADD", "register:40f0:8", ["const:7efaf4:8", "const:4:8"]]
- 007efaf4 ["CALL", null, ["callee:00c57f60:8"]]
+ 007efb4c ["INT_ADD", "register:40f0:8", ["const:7efb4c:8", "const:4:8"]]
+ 007efb4c ["CALL", null, ["callee:00c57f60:8"]]
- 007efb14 ["INT_ADD", "register:40f0:8", ["const:7efb14:8", "const:4:8"]]
- 007efb14 ["CALL", null, ["callee:00c58010:8"]]
+ 007efb6c ["INT_ADD", "register:40f0:8", ["const:7efb6c:8", "const:4:8"]]
+ 007efb6c ["CALL", null, ["callee:00c58010:8"]]
~~~


<a id="compare-d47ce30904cab5780c036db04199a6ee"></a>

### [`007efb7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ef/007efb7c.md) → [`007efbd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efbd4.md) FUN_007efbd4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`00934078`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00934/00934078.md) [`00a47f00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a47/00a47f00.md) [`00afe40c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00afe/00afe40c.md) [`00aff62c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aff/00aff62c.md) · 呼出先 2件 [`008026b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/008026b8.md) [`00802b8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802b8c.md)
- 新版 呼出元 4件 [`009340cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/009340cc.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) [`00afe4a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afe4a8.md) [`00aff6c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aff/00aff6c8.md) · 呼出先 2件 [`00802710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802710.md) [`00802be4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802be4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007efb88 ["INT_ADD", "register:40f0:8", ["const:7efb88:8", "const:4:8"]]
- 007efb88 ["CALL", null, ["callee:00802710:8"]]
+ 007efbe0 ["INT_ADD", "register:40f0:8", ["const:7efbe0:8", "const:4:8"]]
+ 007efbe0 ["CALL", null, ["callee:00802710:8"]]
- 007efb9c ["INT_ADD", "register:40f0:8", ["const:7efb9c:8", "const:4:8"]]
- 007efb9c ["CALL", null, ["callee:00802be4:8"]]
+ 007efbf4 ["INT_ADD", "register:40f0:8", ["const:7efbf4:8", "const:4:8"]]
+ 007efbf4 ["CALL", null, ["callee:00802be4:8"]]
~~~


<a id="compare-f1fc8f7cd7618a6d9145908f080ec8d6"></a>

### [`007f03d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f0/007f03d4.md) → [`007f042c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f0/007f042c.md) FUN_007f042c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007caac8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ca/007caac8.md) · 呼出先 5件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`007cab20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ca/007cab20.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007f0490 ["INT_ADD", "register:40f0:8", ["const:7f0490:8", "const:4:8"]]
- 007f0490 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f04e8 ["INT_ADD", "register:40f0:8", ["const:7f04e8:8", "const:4:8"]]
+ 007f04e8 ["CALL", null, ["callee:00c57f60:8"]]
- 007f04b8 ["INT_ADD", "register:40f0:8", ["const:7f04b8:8", "const:4:8"]]
- 007f04b8 ["CALL", null, ["callee:00c580d0:8"]]
+ 007f0510 ["INT_ADD", "register:40f0:8", ["const:7f0510:8", "const:4:8"]]
+ 007f0510 ["CALL", null, ["callee:00c580d0:8"]]
- 007f04cc ["INT_ADD", "register:40f0:8", ["const:7f04cc:8", "const:4:8"]]
- 007f04cc ["CALL", null, ["callee:00c57f80:8"]]
+ 007f0524 ["INT_ADD", "register:40f0:8", ["const:7f0524:8", "const:4:8"]]
+ 007f0524 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-18b17798a613b7d68dfc1196ea4c2f66"></a>

### [`007f0c74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f0/007f0c74.md) → [`007f0ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f0/007f0ccc.md) FUN_007f0ccc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`007f06f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f0/007f06f4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`007f074c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f0/007f074c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007f0c84 ["INT_ADD", "register:40f0:8", ["const:7f0c84:8", "const:4:8"]]
- 007f0c84 ["CALL", null, ["callee:007f074c:8"]]
+ 007f0cdc ["INT_ADD", "register:40f0:8", ["const:7f0cdc:8", "const:4:8"]]
+ 007f0cdc ["CALL", null, ["callee:007f074c:8"]]
~~~


<a id="compare-3c0b64eeae4a4dd021719cba27ecca7d"></a>

### [`007f0c98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f0/007f0c98.md) → [`007f0cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f0/007f0cf0.md) FUN_007f0cf0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007bbaf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bb/007bbaf4.md) · 呼出先 4件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`007f0dd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f0/007f0dd4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`007bbb4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bb/007bbb4c.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`007f0e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f0/007f0e2c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007f0cf8 ["INT_ADD", "register:40f0:8", ["const:7f0cf8:8", "const:4:8"]]
- 007f0cf8 ["CALL", null, ["callee:0043bb60:8"]]
+ 007f0d50 ["INT_ADD", "register:40f0:8", ["const:7f0d50:8", "const:4:8"]]
+ 007f0d50 ["CALL", null, ["callee:0043bb60:8"]]
- 007f0d08 ["INT_ADD", "register:40f0:8", ["const:7f0d08:8", "const:4:8"]]
- 007f0d08 ["CALL", null, ["callee:0043bb60:8"]]
+ 007f0d60 ["INT_ADD", "register:40f0:8", ["const:7f0d60:8", "const:4:8"]]
+ 007f0d60 ["CALL", null, ["callee:0043bb60:8"]]
- 007f0d40 ["INT_ADD", "register:40f0:8", ["const:7f0d40:8", "const:4:8"]]
- 007f0d40 ["CALL", null, ["callee:007f0e2c:8"]]
+ 007f0d98 ["INT_ADD", "register:40f0:8", ["const:7f0d98:8", "const:4:8"]]
+ 007f0d98 ["CALL", null, ["callee:007f0e2c:8"]]
~~~


<a id="compare-89b185afb99b8385b4ea68dc0a5c82ba"></a>

### [`007f1894`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f1/007f1894.md) → [`007f18ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f18ec.md) FUN_007f18ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007bbe1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bb/007bbe1c.md) · 呼出先 7件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0046e8a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e8a4.md) [`007f1ab8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f1/007f1ab8.md) [`007f1e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f1/007f1e90.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`007bbe74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bb/007bbe74.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`007f1b10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1b10.md) [`007f1ee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1ee8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007f1954 ["INT_ADD", "register:40f0:8", ["const:7f1954:8", "const:4:8"]]
- 007f1954 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f19ac ["INT_ADD", "register:40f0:8", ["const:7f19ac:8", "const:4:8"]]
+ 007f19ac ["CALL", null, ["callee:00c57f60:8"]]
- 007f197c ["INT_ADD", "register:40f0:8", ["const:7f197c:8", "const:4:8"]]
- 007f197c ["CALL", null, ["callee:007f1b10:8"]]
+ 007f19d4 ["INT_ADD", "register:40f0:8", ["const:7f19d4:8", "const:4:8"]]
+ 007f19d4 ["CALL", null, ["callee:007f1b10:8"]]
- 007f19c4 ["INT_ADD", "register:40f0:8", ["const:7f19c4:8", "const:4:8"]]
- 007f19c4 ["CALL", null, ["callee:007f1b10:8"]]
+ 007f1a1c ["INT_ADD", "register:40f0:8", ["const:7f1a1c:8", "const:4:8"]]
+ 007f1a1c ["CALL", null, ["callee:007f1b10:8"]]
~~~


<a id="compare-697255f2c35fafed2070ba79a086c135"></a>

### [`007f1ab8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f1/007f1ab8.md) → [`007f1b10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1b10.md) FUN_007f1b10

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`007f1894`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f1/007f1894.md) [`009012d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00901/009012d8.md) · 呼出先 7件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0046e82c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e82c.md) [`00470354`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470354.md) [`007f1cb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f1/007f1cb0.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md)
- 新版 呼出元 2件 [`007f18ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f18ec.md) [`0090132c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/0090132c.md) · 呼出先 7件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0046e86c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e86c.md) [`00470394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470394.md) [`007f1d08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1d08.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007f1b30 ["INT_ADD", "register:40f0:8", ["const:7f1b30:8", "const:4:8"]]
- 007f1b30 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f1b88 ["INT_ADD", "register:40f0:8", ["const:7f1b88:8", "const:4:8"]]
+ 007f1b88 ["CALL", null, ["callee:00c57f60:8"]]
- 007f1b54 ["INT_ADD", "register:40f0:8", ["const:7f1b54:8", "const:4:8"]]
- 007f1b54 ["CALL", null, ["callee:007f1d08:8"]]
+ 007f1bac ["INT_ADD", "register:40f0:8", ["const:7f1bac:8", "const:4:8"]]
+ 007f1bac ["CALL", null, ["callee:007f1d08:8"]]
- 007f1b9c ["INT_ADD", "register:40f0:8", ["const:7f1b9c:8", "const:4:8"]]
- 007f1b9c ["CALL", null, ["callee:0043bb60:8"]]
+ 007f1bf4 ["INT_ADD", "register:40f0:8", ["const:7f1bf4:8", "const:4:8"]]
+ 007f1bf4 ["CALL", null, ["callee:0043bb60:8"]]
~~~


<a id="compare-1dde471d7e22103c375de209611389f5"></a>

### [`007f1c28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f1/007f1c28.md) → [`007f1c80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1c80.md) FUN_007f1c80

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007f1c8c ["INT_ADD", "register:40f0:8", ["const:7f1c8c:8", "const:4:8"]]
- 007f1c8c ["CALL", null, ["callee:00c57f80:8"]]
+ 007f1ce4 ["INT_ADD", "register:40f0:8", ["const:7f1ce4:8", "const:4:8"]]
+ 007f1ce4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-e32ec4b7a6a5c3fba46ddb9e26f6038b"></a>

### [`007f1cb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f1/007f1cb0.md) → [`007f1d08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1d08.md) FUN_007f1d08

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`007bbe1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bb/007bbe1c.md) [`007f1ab8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f1/007f1ab8.md) [`008ff8cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ff/008ff8cc.md) [`00a3f34c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3f/00a3f34c.md) · 呼出先 7件 [`00470494`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470494.md) [`007f1de8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f1/007f1de8.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 4件 [`007bbe74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bb/007bbe74.md) [`007f1b10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1b10.md) [`008ff920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff920.md) [`00a3f3a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3f/00a3f3a0.md) · 呼出先 7件 [`004704d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/004704d4.md) [`007f1e40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1e40.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007f1d40 ["INT_ADD", "register:40f0:8", ["const:7f1d40:8", "const:4:8"]]
- 007f1d40 ["CALL", null, ["callee:00c57f60:8"]]
+ 007f1d98 ["INT_ADD", "register:40f0:8", ["const:7f1d98:8", "const:4:8"]]
+ 007f1d98 ["CALL", null, ["callee:00c57f60:8"]]
- 007f1d58 ["INT_ADD", "register:40f0:8", ["const:7f1d58:8", "const:4:8"]]
- 007f1d58 ["CALL", null, ["callee:00c580d0:8"]]
+ 007f1db0 ["INT_ADD", "register:40f0:8", ["const:7f1db0:8", "const:4:8"]]
+ 007f1db0 ["CALL", null, ["callee:00c580d0:8"]]
- 007f1da8 ["INT_ADD", "register:40f0:8", ["const:7f1da8:8", "const:4:8"]]
- 007f1da8 ["CALL", null, ["callee:004704d4:8"]]
+ 007f1e00 ["INT_ADD", "register:40f0:8", ["const:7f1e00:8", "const:4:8"]]
+ 007f1e00 ["CALL", null, ["callee:004704d4:8"]]
~~~


<a id="compare-1173d104c0415b221cf1b25f75945e38"></a>

### [`007f1de8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f1/007f1de8.md) → [`007f1e40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1e40.md) FUN_007f1e40

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007f1cb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f1/007f1cb0.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`007f1d08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1d08.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007f1e28 ["INT_ADD", "register:40f0:8", ["const:7f1e28:8", "const:4:8"]]
- 007f1e28 ["CALL", null, ["callee:00c57f80:8"]]
+ 007f1e80 ["INT_ADD", "register:40f0:8", ["const:7f1e80:8", "const:4:8"]]
+ 007f1e80 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-94233e89a29ff8c824468f5d3ee3eced"></a>

### [`007f1e3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f1/007f1e3c.md) → [`007f1e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1e94.md) FUN_007f1e94

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0046e8a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e8a4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007f1e60 ["INT_ADD", "register:40f0:8", ["const:7f1e60:8", "const:4:8"]]
- 007f1e60 ["CALL", null, ["callee:0046e8e4:8"]]
+ 007f1eb8 ["INT_ADD", "register:40f0:8", ["const:7f1eb8:8", "const:4:8"]]
+ 007f1eb8 ["CALL", null, ["callee:0046e8e4:8"]]
~~~


<a id="compare-7e0db53390e0820512eda2abec92991f"></a>

### [`007f3e68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f3/007f3e68.md) → [`007f3ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3ec0.md) FUN_007f3ec0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007bda44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bda44.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5a880`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a880.md)
- 新版 呼出元 1件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5a950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a950.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007f3e78 ["INT_ADD", "register:40f0:8", ["const:7f3e78:8", "const:4:8"]]
- 007f3e78 ["CALL", null, ["callee:00c5a950:8"]]
+ 007f3ed0 ["INT_ADD", "register:40f0:8", ["const:7f3ed0:8", "const:4:8"]]
+ 007f3ed0 ["CALL", null, ["callee:00c5a950:8"]]
~~~


<a id="compare-41d3e65552bf00ab50e5258b43fcb31c"></a>

### [`007f45f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f4/007f45f8.md) → [`007f4650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f4650.md) FUN_007f4650

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`008b6f18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f18.md) [`008b79c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b79c8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007f464c ["INT_ADD", "register:40f0:8", ["const:7f464c:8", "const:4:8"]]
- 007f464c ["CALL", null, ["callee:008b7a20:8"]]
+ 007f46a4 ["INT_ADD", "register:40f0:8", ["const:7f46a4:8", "const:4:8"]]
+ 007f46a4 ["CALL", null, ["callee:008b7a20:8"]]
- 007f465c ["INT_ADD", "register:40f0:8", ["const:7f465c:8", "const:4:8"]]
- 007f465c ["CALL", null, ["callee:008b7a20:8"]]
+ 007f46b4 ["INT_ADD", "register:40f0:8", ["const:7f46b4:8", "const:4:8"]]
+ 007f46b4 ["CALL", null, ["callee:008b7a20:8"]]
~~~


<a id="compare-7d4a7e53e864112db8daefe2c7e36000"></a>

### [`007f46f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f4/007f46f8.md) → [`007f4750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f4750.md) FUN_007f4750

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`008b6a5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6a5c.md) [`008b6f18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f18.md) [`008b79c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b79c8.md)
- 新版 呼出元 0件  · 呼出先 3件 [`008b6ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6ab4.md) [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007f4714 ["INT_ADD", "register:40f0:8", ["const:7f4714:8", "const:4:8"]]
- 007f4714 ["CALL", null, ["callee:008b7a20:8"]]
+ 007f476c ["INT_ADD", "register:40f0:8", ["const:7f476c:8", "const:4:8"]]
+ 007f476c ["CALL", null, ["callee:008b7a20:8"]]
- 007f4724 ["INT_ADD", "register:40f0:8", ["const:7f4724:8", "const:4:8"]]
- 007f4724 ["CALL", null, ["callee:008b7a20:8"]]
+ 007f477c ["INT_ADD", "register:40f0:8", ["const:7f477c:8", "const:4:8"]]
+ 007f477c ["CALL", null, ["callee:008b7a20:8"]]
- 007f4750 ["INT_ADD", "register:40f0:8", ["const:7f4750:8", "const:4:8"]]
- 007f4750 ["CALL", null, ["callee:008b6f70:8"]]
+ 007f47a8 ["INT_ADD", "register:40f0:8", ["const:7f47a8:8", "const:4:8"]]
+ 007f47a8 ["CALL", null, ["callee:008b6f70:8"]]
~~~


<a id="compare-f41284c8ef731a4c51d2149e4271d26a"></a>

### [`007f47e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f4/007f47e0.md) → [`007f4838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f4838.md) FUN_007f4838

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`008b6d9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6d9c.md) [`008b6f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f10.md) [`008b79c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b79c8.md) [`008b9290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9290.md)
- 新版 呼出元 0件  · 呼出先 4件 [`008b6df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6df4.md) [`008b6f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f68.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md) [`008b92e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92e8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007f4824 ["INT_ADD", "register:40f0:8", ["const:7f4824:8", "const:4:8"]]
- 007f4824 ["CALL", null, ["callee:008b7a20:8"]]
+ 007f487c ["INT_ADD", "register:40f0:8", ["const:7f487c:8", "const:4:8"]]
+ 007f487c ["CALL", null, ["callee:008b7a20:8"]]
- 007f4834 ["INT_ADD", "register:40f0:8", ["const:7f4834:8", "const:4:8"]]
- 007f4834 ["CALL", null, ["callee:008b7a20:8"]]
+ 007f488c ["INT_ADD", "register:40f0:8", ["const:7f488c:8", "const:4:8"]]
+ 007f488c ["CALL", null, ["callee:008b7a20:8"]]
- 007f4840 ["INT_ADD", "register:40f0:8", ["const:7f4840:8", "const:4:8"]]
- 007f4840 ["CALL", null, ["callee:008b92e8:8"]]
+ 007f4898 ["INT_ADD", "register:40f0:8", ["const:7f4898:8", "const:4:8"]]
+ 007f4898 ["CALL", null, ["callee:008b92e8:8"]]
~~~


<a id="compare-ed3d41ed382c25e8fecb39ccdf2a2f22"></a>

### [`007f7338`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f7/007f7338.md) → [`007f7390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f7390.md) FUN_007f7390

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`008b6d9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6d9c.md) [`008b79c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b79c8.md)
- 新版 呼出元 0件  · 呼出先 2件 [`008b6df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6df4.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 007f7350 ["INT_ADD", "register:40f0:8", ["const:7f7350:8", "const:4:8"]]
- 007f7350 ["CALL", null, ["callee:008b7a20:8"]]
+ 007f73a8 ["INT_ADD", "register:40f0:8", ["const:7f73a8:8", "const:4:8"]]
+ 007f73a8 ["CALL", null, ["callee:008b7a20:8"]]
~~~


