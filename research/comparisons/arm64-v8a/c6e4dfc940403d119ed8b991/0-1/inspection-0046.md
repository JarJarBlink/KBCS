# v16.0.1 → v16.0.2 · 要調査の変更候補 (46)

[一覧の目次](README.md)

<a id="compare-8697b9e9168b091d0c97f4eb565cfe9e"></a>

### [`00c44de4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c44/00c44de4.md) → [`00c44e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c44/00c44e80.md) FUN_00c44e80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c45144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c45/00c45144.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c451e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c451e0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c44e34 ["INT_ADD", "register:40f0:8", ["const:c44e34:8", "const:4:8"]]
- 00c44e34 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c44ed0 ["INT_ADD", "register:40f0:8", ["const:c44ed0:8", "const:4:8"]]
+ 00c44ed0 ["CALL", null, ["callee:00c5a170:8"]]
- 00c44e80 ["INT_ADD", "register:40f0:8", ["const:c44e80:8", "const:4:8"]]
- 00c44e80 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c44f1c ["INT_ADD", "register:40f0:8", ["const:c44f1c:8", "const:4:8"]]
+ 00c44f1c ["CALL", null, ["callee:00c5a170:8"]]
- 00c44ee0 ["INT_ADD", "register:40f0:8", ["const:c44ee0:8", "const:4:8"]]
- 00c44ee0 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c44f7c ["INT_ADD", "register:40f0:8", ["const:c44f7c:8", "const:4:8"]]
+ 00c44f7c ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-944345ec5ca3abc315d4912c46f58224"></a>

### [`00c45144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c45/00c45144.md) → [`00c451e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c451e0.md) FUN_00c451e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 15件 [`00c44de4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c44/00c44de4.md) [`00c4554c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c45/00c4554c.md) [`00c45678`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c45/00c45678.md) [`00c48a70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c48/00c48a70.md) [`00c48ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c48/00c48ec0.md) · 呼出先 2件 [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 15件 [`00c44e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c44/00c44e80.md) [`00c455e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c455e8.md) [`00c45714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c45714.md) [`00c48b0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c48/00c48b0c.md) [`00c48f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c48/00c48f5c.md) · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c451d4 ["INT_ADD", "register:40f0:8", ["const:c451d4:8", "const:4:8"]]
- 00c451d4 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c45270 ["INT_ADD", "register:40f0:8", ["const:c45270:8", "const:4:8"]]
+ 00c45270 ["CALL", null, ["callee:00c5a170:8"]]
- 00c45224 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c45224 ["INT_ADD", "register:40f0:8", ["const:c45224:8", "const:4:8"]]
- 00c45224 ["CALLIND", null, ["register:0:8"]]
+ 00c452c0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c452c0 ["INT_ADD", "register:40f0:8", ["const:c452c0:8", "const:4:8"]]
+ 00c452c0 ["CALLIND", null, ["register:0:8"]]
- 00c45248 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c45248 ["INT_ADD", "register:40f0:8", ["const:c45248:8", "const:4:8"]]
- 00c45248 ["CALLIND", null, ["register:0:8"]]
+ 00c452e4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c452e4 ["INT_ADD", "register:40f0:8", ["const:c452e4:8", "const:4:8"]]
+ 00c452e4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-49119d4286a99d946e6581bf71bafb68"></a>

### [`00c45374`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c45/00c45374.md) → [`00c45410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c45410.md) FUN_00c45410

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c453c0 ["INT_ADD", "register:40f0:8", ["const:c453c0:8", "const:4:8"]]
- 00c453c0 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4545c ["INT_ADD", "register:40f0:8", ["const:c4545c:8", "const:4:8"]]
+ 00c4545c ["CALL", null, ["callee:00c5a170:8"]]
- 00c4540c ["INT_ADD", "register:40f0:8", ["const:c4540c:8", "const:4:8"]]
- 00c4540c ["CALL", null, ["callee:00c5a170:8"]]
+ 00c454a8 ["INT_ADD", "register:40f0:8", ["const:c454a8:8", "const:4:8"]]
+ 00c454a8 ["CALL", null, ["callee:00c5a170:8"]]
- 00c45470 ["INT_ADD", "register:40f0:8", ["const:c45470:8", "const:4:8"]]
- 00c45470 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4550c ["INT_ADD", "register:40f0:8", ["const:c4550c:8", "const:4:8"]]
+ 00c4550c ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-f9994d76a8571d6124fbdbcba2e2df45"></a>

### [`00c4554c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c45/00c4554c.md) → [`00c455e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c455e8.md) FUN_00c455e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c45144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c45/00c45144.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c451e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c451e0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c45578 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c45578 ["INT_ADD", "register:40f0:8", ["const:c45578:8", "const:4:8"]]
- 00c45578 ["CALLIND", null, ["register:0:8"]]
+ 00c45614 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c45614 ["INT_ADD", "register:40f0:8", ["const:c45614:8", "const:4:8"]]
+ 00c45614 ["CALLIND", null, ["register:0:8"]]
- 00c4559c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4559c ["INT_ADD", "register:40f0:8", ["const:c4559c:8", "const:4:8"]]
- 00c4559c ["CALLIND", null, ["register:0:8"]]
+ 00c45638 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c45638 ["INT_ADD", "register:40f0:8", ["const:c45638:8", "const:4:8"]]
+ 00c45638 ["CALLIND", null, ["register:0:8"]]
- 00c455d4 ["INT_ADD", "register:40f0:8", ["const:c455d4:8", "const:4:8"]]
- 00c455d4 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c45670 ["INT_ADD", "register:40f0:8", ["const:c45670:8", "const:4:8"]]
+ 00c45670 ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-a52cbca70da0d79c2c87605072edebfb"></a>

### [`00c45678`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c45/00c45678.md) → [`00c45714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c45714.md) FUN_00c45714

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c45144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c45/00c45144.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c451e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c451e0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c456c8 ["INT_ADD", "register:40f0:8", ["const:c456c8:8", "const:4:8"]]
- 00c456c8 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c45764 ["INT_ADD", "register:40f0:8", ["const:c45764:8", "const:4:8"]]
+ 00c45764 ["CALL", null, ["callee:00c5a170:8"]]
- 00c456fc ["COPY", "register:0:8", ["register:4040:8"]]
- 00c456fc ["INT_ADD", "register:40f0:8", ["const:c456fc:8", "const:4:8"]]
- 00c456fc ["CALLIND", null, ["register:0:8"]]
+ 00c45798 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c45798 ["INT_ADD", "register:40f0:8", ["const:c45798:8", "const:4:8"]]
+ 00c45798 ["CALLIND", null, ["register:0:8"]]
- 00c45720 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c45720 ["INT_ADD", "register:40f0:8", ["const:c45720:8", "const:4:8"]]
- 00c45720 ["CALLIND", null, ["register:0:8"]]
+ 00c457bc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c457bc ["INT_ADD", "register:40f0:8", ["const:c457bc:8", "const:4:8"]]
+ 00c457bc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-1f81ea0478c3ff1ac8b8223e6a1bfdd8"></a>

### [`00c45858`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c45/00c45858.md) → [`00c458f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c458f4.md) FUN_00c458f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c458a0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c458a0 ["INT_ADD", "register:40f0:8", ["const:c458a0:8", "const:4:8"]]
- 00c458a0 ["CALLIND", null, ["register:0:8"]]
+ 00c4593c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4593c ["INT_ADD", "register:40f0:8", ["const:c4593c:8", "const:4:8"]]
+ 00c4593c ["CALLIND", null, ["register:0:8"]]
- 00c458c4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c458c4 ["INT_ADD", "register:40f0:8", ["const:c458c4:8", "const:4:8"]]
- 00c458c4 ["CALLIND", null, ["register:0:8"]]
+ 00c45960 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c45960 ["INT_ADD", "register:40f0:8", ["const:c45960:8", "const:4:8"]]
+ 00c45960 ["CALLIND", null, ["register:0:8"]]
- 00c45900 ["INT_ADD", "register:40f0:8", ["const:c45900:8", "const:4:8"]]
- 00c45900 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4599c ["INT_ADD", "register:40f0:8", ["const:c4599c:8", "const:4:8"]]
+ 00c4599c ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-70f3411b93ab8c9e2952b27e23fcf549"></a>

### [`00c45d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c45/00c45d04.md) → [`00c45da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c45da0.md) FUN_00c45da0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c45d58 ["INT_ADD", "register:40f0:8", ["const:c45d58:8", "const:4:8"]]
- 00c45d58 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c45df4 ["INT_ADD", "register:40f0:8", ["const:c45df4:8", "const:4:8"]]
+ 00c45df4 ["CALL", null, ["callee:00c5a170:8"]]
- 00c45d74 ["INT_ADD", "register:40f0:8", ["const:c45d74:8", "const:4:8"]]
- 00c45d74 ["CALL", null, ["callee:00c580d0:8"]]
+ 00c45e10 ["INT_ADD", "register:40f0:8", ["const:c45e10:8", "const:4:8"]]
+ 00c45e10 ["CALL", null, ["callee:00c580d0:8"]]
- 00c45db4 ["INT_ADD", "register:40f0:8", ["const:c45db4:8", "const:4:8"]]
- 00c45db4 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c45e50 ["INT_ADD", "register:40f0:8", ["const:c45e50:8", "const:4:8"]]
+ 00c45e50 ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-619f76db6fc04708d24c11b5f68eca73"></a>

### [`00c46048`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c46/00c46048.md) → [`00c460e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c46/00c460e4.md) FUN_00c460e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4609c ["INT_ADD", "register:40f0:8", ["const:c4609c:8", "const:4:8"]]
- 00c4609c ["CALL", null, ["callee:00c5a170:8"]]
+ 00c46138 ["INT_ADD", "register:40f0:8", ["const:c46138:8", "const:4:8"]]
+ 00c46138 ["CALL", null, ["callee:00c5a170:8"]]
- 00c460b8 ["INT_ADD", "register:40f0:8", ["const:c460b8:8", "const:4:8"]]
- 00c460b8 ["CALL", null, ["callee:00c580d0:8"]]
+ 00c46154 ["INT_ADD", "register:40f0:8", ["const:c46154:8", "const:4:8"]]
+ 00c46154 ["CALL", null, ["callee:00c580d0:8"]]
- 00c460fc ["INT_ADD", "register:40f0:8", ["const:c460fc:8", "const:4:8"]]
- 00c460fc ["CALL", null, ["callee:00c5a170:8"]]
+ 00c46198 ["INT_ADD", "register:40f0:8", ["const:c46198:8", "const:4:8"]]
+ 00c46198 ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-f8d7ed646c9811a0ae4a2421284587d5"></a>

### [`00c46dec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c46/00c46dec.md) → [`00c46e88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c46/00c46e88.md) FUN_00c46e88

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c46e4c ["INT_ADD", "register:40f0:8", ["const:c46e4c:8", "const:4:8"]]
- 00c46e4c ["CALL", null, ["callee:00c5a170:8"]]
+ 00c46ee8 ["INT_ADD", "register:40f0:8", ["const:c46ee8:8", "const:4:8"]]
+ 00c46ee8 ["CALL", null, ["callee:00c5a170:8"]]
- 00c46ea4 ["INT_ADD", "register:40f0:8", ["const:c46ea4:8", "const:4:8"]]
- 00c46ea4 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c46f40 ["INT_ADD", "register:40f0:8", ["const:c46f40:8", "const:4:8"]]
+ 00c46f40 ["CALL", null, ["callee:00c5a170:8"]]
- 00c46ec0 ["INT_ADD", "register:40f0:8", ["const:c46ec0:8", "const:4:8"]]
- 00c46ec0 ["CALL", null, ["callee:00c580d0:8"]]
+ 00c46f5c ["INT_ADD", "register:40f0:8", ["const:c46f5c:8", "const:4:8"]]
+ 00c46f5c ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-54367543f6bcdc6321950befda5bb06b"></a>

### [`00c47720`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c47/00c47720.md) → [`00c477bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c47/00c477bc.md) FUN_00c477bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c47764 ["INT_ADD", "register:40f0:8", ["const:c47764:8", "const:4:8"]]
- 00c47764 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c47800 ["INT_ADD", "register:40f0:8", ["const:c47800:8", "const:4:8"]]
+ 00c47800 ["CALL", null, ["callee:00c5a170:8"]]
- 00c477a0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c477a0 ["INT_ADD", "register:40f0:8", ["const:c477a0:8", "const:4:8"]]
- 00c477a0 ["CALLIND", null, ["register:0:8"]]
+ 00c4783c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4783c ["INT_ADD", "register:40f0:8", ["const:c4783c:8", "const:4:8"]]
+ 00c4783c ["CALLIND", null, ["register:0:8"]]
- 00c477c4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c477c4 ["INT_ADD", "register:40f0:8", ["const:c477c4:8", "const:4:8"]]
- 00c477c4 ["CALLIND", null, ["register:0:8"]]
+ 00c47860 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c47860 ["INT_ADD", "register:40f0:8", ["const:c47860:8", "const:4:8"]]
+ 00c47860 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-3fb3c5d768db51bda3f926b221543275"></a>

### [`00c482fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c48/00c482fc.md) → [`00c48398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c48/00c48398.md) FUN_00c48398

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c48344 ["INT_ADD", "register:40f0:8", ["const:c48344:8", "const:4:8"]]
- 00c48344 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c483e0 ["INT_ADD", "register:40f0:8", ["const:c483e0:8", "const:4:8"]]
+ 00c483e0 ["CALL", null, ["callee:00c5a170:8"]]
- 00c483ac ["INT_ADD", "register:40f0:8", ["const:c483ac:8", "const:4:8"]]
- 00c483ac ["CALL", null, ["callee:00c5a170:8"]]
+ 00c48448 ["INT_ADD", "register:40f0:8", ["const:c48448:8", "const:4:8"]]
+ 00c48448 ["CALL", null, ["callee:00c5a170:8"]]
- 00c483c8 ["INT_ADD", "register:40f0:8", ["const:c483c8:8", "const:4:8"]]
- 00c483c8 ["CALL", null, ["callee:00c580d0:8"]]
+ 00c48464 ["INT_ADD", "register:40f0:8", ["const:c48464:8", "const:4:8"]]
+ 00c48464 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-715f6605313453ade4a2aaf93d9f66a2"></a>

### [`00c484ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c48/00c484ec.md) → [`00c48588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c48/00c48588.md) FUN_00c48588

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c48558 ["INT_ADD", "register:40f0:8", ["const:c48558:8", "const:4:8"]]
- 00c48558 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c485f4 ["INT_ADD", "register:40f0:8", ["const:c485f4:8", "const:4:8"]]
+ 00c485f4 ["CALL", null, ["callee:00c5a170:8"]]
- 00c485b0 ["INT_ADD", "register:40f0:8", ["const:c485b0:8", "const:4:8"]]
- 00c485b0 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4864c ["INT_ADD", "register:40f0:8", ["const:c4864c:8", "const:4:8"]]
+ 00c4864c ["CALL", null, ["callee:00c5a170:8"]]
- 00c48610 ["INT_ADD", "register:40f0:8", ["const:c48610:8", "const:4:8"]]
- 00c48610 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c486ac ["INT_ADD", "register:40f0:8", ["const:c486ac:8", "const:4:8"]]
+ 00c486ac ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-ced5ece7bdd68fc3eea16a2771f29e64"></a>

### [`00c487a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c48/00c487a8.md) → [`00c48844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c48/00c48844.md) FUN_00c48844

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c487cc ["COPY", "register:0:8", ["register:4040:8"]]
- 00c487cc ["INT_ADD", "register:40f0:8", ["const:c487cc:8", "const:4:8"]]
- 00c487cc ["CALLIND", null, ["register:0:8"]]
+ 00c48868 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c48868 ["INT_ADD", "register:40f0:8", ["const:c48868:8", "const:4:8"]]
+ 00c48868 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-0ad2b124dc66ceaeaba43551fed8a501"></a>

### [`00c48818`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c48/00c48818.md) → [`00c488b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c48/00c488b4.md) FUN_00c488b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4883c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4883c ["INT_ADD", "register:40f0:8", ["const:c4883c:8", "const:4:8"]]
- 00c4883c ["CALLIND", null, ["register:0:8"]]
+ 00c488d8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c488d8 ["INT_ADD", "register:40f0:8", ["const:c488d8:8", "const:4:8"]]
+ 00c488d8 ["CALLIND", null, ["register:0:8"]]
- 00c48860 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c48860 ["INT_ADD", "register:40f0:8", ["const:c48860:8", "const:4:8"]]
- 00c48860 ["CALLIND", null, ["register:0:8"]]
+ 00c488fc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c488fc ["INT_ADD", "register:40f0:8", ["const:c488fc:8", "const:4:8"]]
+ 00c488fc ["CALLIND", null, ["register:0:8"]]
- 00c4888c ["INT_ADD", "register:40f0:8", ["const:c4888c:8", "const:4:8"]]
- 00c4888c ["CALL", null, ["callee:00c5a170:8"]]
+ 00c48928 ["INT_ADD", "register:40f0:8", ["const:c48928:8", "const:4:8"]]
+ 00c48928 ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-11284d55afd353a16b7163c0c4fcae0b"></a>

### [`00c48934`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c48/00c48934.md) → [`00c489d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c48/00c489d0.md) FUN_00c489d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c48958 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c48958 ["INT_ADD", "register:40f0:8", ["const:c48958:8", "const:4:8"]]
- 00c48958 ["CALLIND", null, ["register:0:8"]]
+ 00c489f4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c489f4 ["INT_ADD", "register:40f0:8", ["const:c489f4:8", "const:4:8"]]
+ 00c489f4 ["CALLIND", null, ["register:0:8"]]
- 00c4897c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4897c ["INT_ADD", "register:40f0:8", ["const:c4897c:8", "const:4:8"]]
- 00c4897c ["CALLIND", null, ["register:0:8"]]
+ 00c48a18 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c48a18 ["INT_ADD", "register:40f0:8", ["const:c48a18:8", "const:4:8"]]
+ 00c48a18 ["CALLIND", null, ["register:0:8"]]
- 00c489b8 ["INT_ADD", "register:40f0:8", ["const:c489b8:8", "const:4:8"]]
- 00c489b8 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c48a54 ["INT_ADD", "register:40f0:8", ["const:c48a54:8", "const:4:8"]]
+ 00c48a54 ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-6925e0ab2ba83813cadaf5ca233d6d87"></a>

### [`00c489f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c48/00c489f0.md) → [`00c48a8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c48/00c48a8c.md) FUN_00c48a8c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c48a1c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c48a1c ["INT_ADD", "register:40f0:8", ["const:c48a1c:8", "const:4:8"]]
- 00c48a1c ["CALLIND", null, ["register:0:8"]]
+ 00c48ab8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c48ab8 ["INT_ADD", "register:40f0:8", ["const:c48ab8:8", "const:4:8"]]
+ 00c48ab8 ["CALLIND", null, ["register:0:8"]]
- 00c48a40 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c48a40 ["INT_ADD", "register:40f0:8", ["const:c48a40:8", "const:4:8"]]
- 00c48a40 ["CALLIND", null, ["register:0:8"]]
+ 00c48adc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c48adc ["INT_ADD", "register:40f0:8", ["const:c48adc:8", "const:4:8"]]
+ 00c48adc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2cd8041cf804ff4d08ac278bbdf5df77"></a>

### [`00c48cb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c48/00c48cb4.md) → [`00c48d50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c48/00c48d50.md) FUN_00c48d50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c48cd4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c48cd4 ["INT_ADD", "register:40f0:8", ["const:c48cd4:8", "const:4:8"]]
- 00c48cd4 ["CALLIND", null, ["register:0:8"]]
+ 00c48d70 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c48d70 ["INT_ADD", "register:40f0:8", ["const:c48d70:8", "const:4:8"]]
+ 00c48d70 ["CALLIND", null, ["register:0:8"]]
- 00c48d00 ["INT_ADD", "register:40f0:8", ["const:c48d00:8", "const:4:8"]]
- 00c48d00 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c48d9c ["INT_ADD", "register:40f0:8", ["const:c48d9c:8", "const:4:8"]]
+ 00c48d9c ["CALL", null, ["callee:00c5a170:8"]]
- 00c48d40 ["INT_ADD", "register:40f0:8", ["const:c48d40:8", "const:4:8"]]
- 00c48d40 ["CALL", null, ["callee:00c5b210:8"]]
+ 00c48ddc ["INT_ADD", "register:40f0:8", ["const:c48ddc:8", "const:4:8"]]
+ 00c48ddc ["CALL", null, ["callee:00c5b210:8"]]
~~~


<a id="compare-168a3efaf36b5b827507cf2f4550c42d"></a>

### [`00c48d60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c48/00c48d60.md) → [`00c48dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c48/00c48dfc.md) FUN_00c48dfc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c48ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c48/00c48ec0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c48f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c48/00c48f5c.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c48da8 ["INT_ADD", "register:40f0:8", ["const:c48da8:8", "const:4:8"]]
- 00c48da8 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c48e44 ["INT_ADD", "register:40f0:8", ["const:c48e44:8", "const:4:8"]]
+ 00c48e44 ["CALL", null, ["callee:00c5a170:8"]]
- 00c48e18 ["INT_ADD", "register:40f0:8", ["const:c48e18:8", "const:4:8"]]
- 00c48e18 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c48eb4 ["INT_ADD", "register:40f0:8", ["const:c48eb4:8", "const:4:8"]]
+ 00c48eb4 ["CALL", null, ["callee:00c5a170:8"]]
- 00c48e34 ["INT_ADD", "register:40f0:8", ["const:c48e34:8", "const:4:8"]]
- 00c48e34 ["CALL", null, ["callee:00c580d0:8"]]
+ 00c48ed0 ["INT_ADD", "register:40f0:8", ["const:c48ed0:8", "const:4:8"]]
+ 00c48ed0 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-b38a6af8f4061285bd7811e3db80cbef"></a>

### [`00c49220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c49/00c49220.md) → [`00c492bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c49/00c492bc.md) FUN_00c492bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c48ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c48/00c48ec0.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c48f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c48/00c48f5c.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c49264 ["INT_ADD", "register:40f0:8", ["const:c49264:8", "const:4:8"]]
- 00c49264 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c49300 ["INT_ADD", "register:40f0:8", ["const:c49300:8", "const:4:8"]]
+ 00c49300 ["CALL", null, ["callee:00c5a170:8"]]
- 00c492a0 ["INT_ADD", "register:40f0:8", ["const:c492a0:8", "const:4:8"]]
- 00c492a0 ["CALL", null, ["callee:00c48f5c:8"]]
+ 00c4933c ["INT_ADD", "register:40f0:8", ["const:c4933c:8", "const:4:8"]]
+ 00c4933c ["CALL", null, ["callee:00c48f5c:8"]]
- 00c492d0 ["INT_ADD", "register:40f0:8", ["const:c492d0:8", "const:4:8"]]
- 00c492d0 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4936c ["INT_ADD", "register:40f0:8", ["const:c4936c:8", "const:4:8"]]
+ 00c4936c ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-65c8df224c8c76fa3ba9bf7a8b709dad"></a>

### [`00c49324`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c49/00c49324.md) → [`00c493c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c49/00c493c0.md) FUN_00c493c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c49374 ["INT_ADD", "register:40f0:8", ["const:c49374:8", "const:4:8"]]
- 00c49374 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c49410 ["INT_ADD", "register:40f0:8", ["const:c49410:8", "const:4:8"]]
+ 00c49410 ["CALL", null, ["callee:00c5a170:8"]]
- 00c493a8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c493a8 ["INT_ADD", "register:40f0:8", ["const:c493a8:8", "const:4:8"]]
- 00c493a8 ["CALLIND", null, ["register:0:8"]]
+ 00c49444 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c49444 ["INT_ADD", "register:40f0:8", ["const:c49444:8", "const:4:8"]]
+ 00c49444 ["CALLIND", null, ["register:0:8"]]
- 00c493cc ["COPY", "register:0:8", ["register:4040:8"]]
- 00c493cc ["INT_ADD", "register:40f0:8", ["const:c493cc:8", "const:4:8"]]
- 00c493cc ["CALLIND", null, ["register:0:8"]]
+ 00c49468 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c49468 ["INT_ADD", "register:40f0:8", ["const:c49468:8", "const:4:8"]]
+ 00c49468 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8db3c132a47ac458130ae0a52c6f369e"></a>

### [`00c495fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c49/00c495fc.md) → [`00c49698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c49/00c49698.md) FUN_00c49698

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c49644 ["INT_ADD", "register:40f0:8", ["const:c49644:8", "const:4:8"]]
- 00c49644 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c496e0 ["INT_ADD", "register:40f0:8", ["const:c496e0:8", "const:4:8"]]
+ 00c496e0 ["CALL", null, ["callee:00c5a170:8"]]
- 00c496a0 ["INT_ADD", "register:40f0:8", ["const:c496a0:8", "const:4:8"]]
- 00c496a0 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4973c ["INT_ADD", "register:40f0:8", ["const:c4973c:8", "const:4:8"]]
+ 00c4973c ["CALL", null, ["callee:00c5a170:8"]]
- 00c496bc ["INT_ADD", "register:40f0:8", ["const:c496bc:8", "const:4:8"]]
- 00c496bc ["CALL", null, ["callee:00c580d0:8"]]
+ 00c49758 ["INT_ADD", "register:40f0:8", ["const:c49758:8", "const:4:8"]]
+ 00c49758 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-7c9eead384c325ece5439146a83c5781"></a>

### [`00c49e74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c49/00c49e74.md) → [`00c49f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c49/00c49f10.md) FUN_00c49f10

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c496f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c49/00c496f0.md) [`00c4b3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4b/00c4b3b4.md) · 呼出先 2件 [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 2件 [`00c4978c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c49/00c4978c.md) [`00c4b450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4b/00c4b450.md) · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c49eb8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c49eb8 ["INT_ADD", "register:40f0:8", ["const:c49eb8:8", "const:4:8"]]
- 00c49eb8 ["CALLIND", null, ["register:0:8"]]
+ 00c49f54 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c49f54 ["INT_ADD", "register:40f0:8", ["const:c49f54:8", "const:4:8"]]
+ 00c49f54 ["CALLIND", null, ["register:0:8"]]
- 00c49edc ["COPY", "register:0:8", ["register:4040:8"]]
- 00c49edc ["INT_ADD", "register:40f0:8", ["const:c49edc:8", "const:4:8"]]
- 00c49edc ["CALLIND", null, ["register:0:8"]]
+ 00c49f78 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c49f78 ["INT_ADD", "register:40f0:8", ["const:c49f78:8", "const:4:8"]]
+ 00c49f78 ["CALLIND", null, ["register:0:8"]]
- 00c49f38 ["INT_ADD", "register:40f0:8", ["const:c49f38:8", "const:4:8"]]
- 00c49f38 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c49fd4 ["INT_ADD", "register:40f0:8", ["const:c49fd4:8", "const:4:8"]]
+ 00c49fd4 ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-53f156e1db61857d5fd9bf6f9875f2e2"></a>

### [`00c4a034`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4a/00c4a034.md) → [`00c4a0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4a/00c4a0d0.md) FUN_00c4a0d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4a080 ["INT_ADD", "register:40f0:8", ["const:c4a080:8", "const:4:8"]]
- 00c4a080 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4a11c ["INT_ADD", "register:40f0:8", ["const:c4a11c:8", "const:4:8"]]
+ 00c4a11c ["CALL", null, ["callee:00c5a170:8"]]
- 00c4a0b4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4a0b4 ["INT_ADD", "register:40f0:8", ["const:c4a0b4:8", "const:4:8"]]
- 00c4a0b4 ["CALLIND", null, ["register:0:8"]]
+ 00c4a150 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4a150 ["INT_ADD", "register:40f0:8", ["const:c4a150:8", "const:4:8"]]
+ 00c4a150 ["CALLIND", null, ["register:0:8"]]
- 00c4a0d8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4a0d8 ["INT_ADD", "register:40f0:8", ["const:c4a0d8:8", "const:4:8"]]
- 00c4a0d8 ["CALLIND", null, ["register:0:8"]]
+ 00c4a174 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4a174 ["INT_ADD", "register:40f0:8", ["const:c4a174:8", "const:4:8"]]
+ 00c4a174 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7467b604fe94ece0dbb7fa1a27f8a12d"></a>

### [`00c4a280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4a/00c4a280.md) → [`00c4a31c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4a/00c4a31c.md) FUN_00c4a31c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4a2c8 ["INT_ADD", "register:40f0:8", ["const:c4a2c8:8", "const:4:8"]]
- 00c4a2c8 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4a364 ["INT_ADD", "register:40f0:8", ["const:c4a364:8", "const:4:8"]]
+ 00c4a364 ["CALL", null, ["callee:00c5a170:8"]]
- 00c4a300 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4a300 ["INT_ADD", "register:40f0:8", ["const:c4a300:8", "const:4:8"]]
- 00c4a300 ["CALLIND", null, ["register:0:8"]]
+ 00c4a39c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4a39c ["INT_ADD", "register:40f0:8", ["const:c4a39c:8", "const:4:8"]]
+ 00c4a39c ["CALLIND", null, ["register:0:8"]]
- 00c4a324 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4a324 ["INT_ADD", "register:40f0:8", ["const:c4a324:8", "const:4:8"]]
- 00c4a324 ["CALLIND", null, ["register:0:8"]]
+ 00c4a3c0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4a3c0 ["INT_ADD", "register:40f0:8", ["const:c4a3c0:8", "const:4:8"]]
+ 00c4a3c0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2cf3b19de33d68399973801a2024c3e5"></a>

### [`00c4a4ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4a/00c4a4ec.md) → [`00c4a588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4a/00c4a588.md) FUN_00c4a588

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c45144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c45/00c45144.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c451e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c451e0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4a520 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4a520 ["INT_ADD", "register:40f0:8", ["const:c4a520:8", "const:4:8"]]
- 00c4a520 ["CALLIND", null, ["register:0:8"]]
+ 00c4a5bc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4a5bc ["INT_ADD", "register:40f0:8", ["const:c4a5bc:8", "const:4:8"]]
+ 00c4a5bc ["CALLIND", null, ["register:0:8"]]
- 00c4a544 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4a544 ["INT_ADD", "register:40f0:8", ["const:c4a544:8", "const:4:8"]]
- 00c4a544 ["CALLIND", null, ["register:0:8"]]
+ 00c4a5e0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4a5e0 ["INT_ADD", "register:40f0:8", ["const:c4a5e0:8", "const:4:8"]]
+ 00c4a5e0 ["CALLIND", null, ["register:0:8"]]
- 00c4a570 ["INT_ADD", "register:40f0:8", ["const:c4a570:8", "const:4:8"]]
- 00c4a570 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4a60c ["INT_ADD", "register:40f0:8", ["const:c4a60c:8", "const:4:8"]]
+ 00c4a60c ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-5a70314d005740deca58bb58a0fb7b42"></a>

### [`00c4a608`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4a/00c4a608.md) → [`00c4a6a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4a/00c4a6a4.md) FUN_00c4a6a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4a658 ["INT_ADD", "register:40f0:8", ["const:c4a658:8", "const:4:8"]]
- 00c4a658 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4a6f4 ["INT_ADD", "register:40f0:8", ["const:c4a6f4:8", "const:4:8"]]
+ 00c4a6f4 ["CALL", null, ["callee:00c5a170:8"]]
- 00c4a68c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4a68c ["INT_ADD", "register:40f0:8", ["const:c4a68c:8", "const:4:8"]]
- 00c4a68c ["CALLIND", null, ["register:0:8"]]
+ 00c4a728 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4a728 ["INT_ADD", "register:40f0:8", ["const:c4a728:8", "const:4:8"]]
+ 00c4a728 ["CALLIND", null, ["register:0:8"]]
- 00c4a6b0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4a6b0 ["INT_ADD", "register:40f0:8", ["const:c4a6b0:8", "const:4:8"]]
- 00c4a6b0 ["CALLIND", null, ["register:0:8"]]
+ 00c4a74c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4a74c ["INT_ADD", "register:40f0:8", ["const:c4a74c:8", "const:4:8"]]
+ 00c4a74c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9078735e091c7d97b034ee08a4226664"></a>

### [`00c4ad4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4a/00c4ad4c.md) → [`00c4ade8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4a/00c4ade8.md) FUN_00c4ade8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c45144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c45/00c45144.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c451e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c451e0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4ad94 ["INT_ADD", "register:40f0:8", ["const:c4ad94:8", "const:4:8"]]
- 00c4ad94 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4ae30 ["INT_ADD", "register:40f0:8", ["const:c4ae30:8", "const:4:8"]]
+ 00c4ae30 ["CALL", null, ["callee:00c5a170:8"]]
- 00c4adf8 ["INT_ADD", "register:40f0:8", ["const:c4adf8:8", "const:4:8"]]
- 00c4adf8 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4ae94 ["INT_ADD", "register:40f0:8", ["const:c4ae94:8", "const:4:8"]]
+ 00c4ae94 ["CALL", null, ["callee:00c5a170:8"]]
- 00c4ae4c ["INT_ADD", "register:40f0:8", ["const:c4ae4c:8", "const:4:8"]]
- 00c4ae4c ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4aee8 ["INT_ADD", "register:40f0:8", ["const:c4aee8:8", "const:4:8"]]
+ 00c4aee8 ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-44554712741b58371c7f9b430ce6b929"></a>

### [`00c4b548`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4b/00c4b548.md) → [`00c4b5e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4b/00c4b5e4.md) FUN_00c4b5e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4b58c ["INT_ADD", "register:40f0:8", ["const:c4b58c:8", "const:4:8"]]
- 00c4b58c ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4b628 ["INT_ADD", "register:40f0:8", ["const:c4b628:8", "const:4:8"]]
+ 00c4b628 ["CALL", null, ["callee:00c5a170:8"]]
- 00c4b5d8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4b5d8 ["INT_ADD", "register:40f0:8", ["const:c4b5d8:8", "const:4:8"]]
- 00c4b5d8 ["CALLIND", null, ["register:0:8"]]
+ 00c4b674 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4b674 ["INT_ADD", "register:40f0:8", ["const:c4b674:8", "const:4:8"]]
+ 00c4b674 ["CALLIND", null, ["register:0:8"]]
- 00c4b61c ["INT_ADD", "register:40f0:8", ["const:c4b61c:8", "const:4:8"]]
- 00c4b61c ["CALL", null, ["callee:00c5b210:8"]]
+ 00c4b6b8 ["INT_ADD", "register:40f0:8", ["const:c4b6b8:8", "const:4:8"]]
+ 00c4b6b8 ["CALL", null, ["callee:00c5b210:8"]]
~~~


<a id="compare-b04a26207d4004fedcecb2f4e54bac01"></a>

### [`00c4b628`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4b/00c4b628.md) → [`00c4b6c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4b/00c4b6c4.md) FUN_00c4b6c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00c4366c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c43/00c4366c.md) [`00c4b7ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4b/00c4b7ac.md) · 呼出先 8件 [`00c3eb3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3e/00c3eb3c.md) [`00c3ef00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3e/00c3ef00.md) [`00c3f034`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3f/00c3f034.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 2件 [`00c43708`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c43/00c43708.md) [`00c4b848`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4b/00c4b848.md) · 呼出先 8件 [`00c3ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3e/00c3ebd8.md) [`00c3ef9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3e/00c3ef9c.md) [`00c3f0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3f/00c3f0d0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4b664 ["INT_ADD", "register:40f0:8", ["const:c4b664:8", "const:4:8"]]
- 00c4b664 ["CALL", null, ["callee:00c3ebd8:8"]]
+ 00c4b700 ["INT_ADD", "register:40f0:8", ["const:c4b700:8", "const:4:8"]]
+ 00c4b700 ["CALL", null, ["callee:00c3ebd8:8"]]
- 00c4b698 ["INT_ADD", "register:40f0:8", ["const:c4b698:8", "const:4:8"]]
- 00c4b698 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4b734 ["INT_ADD", "register:40f0:8", ["const:c4b734:8", "const:4:8"]]
+ 00c4b734 ["CALL", null, ["callee:00c5a170:8"]]
- 00c4b6a8 ["INT_ADD", "register:40f0:8", ["const:c4b6a8:8", "const:4:8"]]
- 00c4b6a8 ["CALL", null, ["callee:00c5b210:8"]]
+ 00c4b744 ["INT_ADD", "register:40f0:8", ["const:c4b744:8", "const:4:8"]]
+ 00c4b744 ["CALL", null, ["callee:00c5b210:8"]]
~~~


<a id="compare-0873b05ff4b3c0a80ae895bf093964d9"></a>

### [`00c4ba3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4b/00c4ba3c.md) → [`00c4bad8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4b/00c4bad8.md) FUN_00c4bad8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4ba68 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4ba68 ["INT_ADD", "register:40f0:8", ["const:c4ba68:8", "const:4:8"]]
- 00c4ba68 ["CALLIND", null, ["register:0:8"]]
+ 00c4bb04 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4bb04 ["INT_ADD", "register:40f0:8", ["const:c4bb04:8", "const:4:8"]]
+ 00c4bb04 ["CALLIND", null, ["register:0:8"]]
- 00c4ba8c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4ba8c ["INT_ADD", "register:40f0:8", ["const:c4ba8c:8", "const:4:8"]]
- 00c4ba8c ["CALLIND", null, ["register:0:8"]]
+ 00c4bb28 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4bb28 ["INT_ADD", "register:40f0:8", ["const:c4bb28:8", "const:4:8"]]
+ 00c4bb28 ["CALLIND", null, ["register:0:8"]]
- 00c4bab8 ["INT_ADD", "register:40f0:8", ["const:c4bab8:8", "const:4:8"]]
- 00c4bab8 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4bb54 ["INT_ADD", "register:40f0:8", ["const:c4bb54:8", "const:4:8"]]
+ 00c4bb54 ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-c9f69236ada7c286e4b9d51dd30e9ed7"></a>

### [`00c4bedc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4b/00c4bedc.md) → [`00c4bf78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4b/00c4bf78.md) FUN_00c4bf78

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4bf24 ["INT_ADD", "register:40f0:8", ["const:c4bf24:8", "const:4:8"]]
- 00c4bf24 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4bfc0 ["INT_ADD", "register:40f0:8", ["const:c4bfc0:8", "const:4:8"]]
+ 00c4bfc0 ["CALL", null, ["callee:00c5a170:8"]]
- 00c4bf6c ["INT_ADD", "register:40f0:8", ["const:c4bf6c:8", "const:4:8"]]
- 00c4bf6c ["CALL", null, ["callee:00c5b210:8"]]
+ 00c4c008 ["INT_ADD", "register:40f0:8", ["const:c4c008:8", "const:4:8"]]
+ 00c4c008 ["CALL", null, ["callee:00c5b210:8"]]
~~~


<a id="compare-4a9bb448617eb059e7cba39f474910de"></a>

### [`00c4c144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4c/00c4c144.md) → [`00c4c1e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4c/00c4c1e0.md) FUN_00c4c1e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4c188 ["INT_ADD", "register:40f0:8", ["const:c4c188:8", "const:4:8"]]
- 00c4c188 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4c224 ["INT_ADD", "register:40f0:8", ["const:c4c224:8", "const:4:8"]]
+ 00c4c224 ["CALL", null, ["callee:00c5a170:8"]]
- 00c4c1c4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4c1c4 ["INT_ADD", "register:40f0:8", ["const:c4c1c4:8", "const:4:8"]]
- 00c4c1c4 ["CALLIND", null, ["register:0:8"]]
+ 00c4c260 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4c260 ["INT_ADD", "register:40f0:8", ["const:c4c260:8", "const:4:8"]]
+ 00c4c260 ["CALLIND", null, ["register:0:8"]]
- 00c4c208 ["INT_ADD", "register:40f0:8", ["const:c4c208:8", "const:4:8"]]
- 00c4c208 ["CALL", null, ["callee:00c5b210:8"]]
+ 00c4c2a4 ["INT_ADD", "register:40f0:8", ["const:c4c2a4:8", "const:4:8"]]
+ 00c4c2a4 ["CALL", null, ["callee:00c5b210:8"]]
~~~


<a id="compare-0087929f2437ad270e5781506560f7e8"></a>

### [`00c4c840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4c/00c4c840.md) → [`00c4c8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4c/00c4c8dc.md) FUN_00c4c8dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c4c228`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4c/00c4c228.md) · 呼出先 1件 [`00c3e15c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c3e/00c3e15c.md)
- 新版 呼出元 1件 [`00c4c2c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4c/00c4c2c4.md) · 呼出先 1件 [`00c3e1f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c3e/00c3e1f8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4c85c ["INT_ADD", "register:40f0:8", ["const:c4c85c:8", "const:4:8"]]
- 00c4c85c ["CALL", null, ["callee:00c3e1f8:8"]]
+ 00c4c8f8 ["INT_ADD", "register:40f0:8", ["const:c4c8f8:8", "const:4:8"]]
+ 00c4c8f8 ["CALL", null, ["callee:00c3e1f8:8"]]
~~~


<a id="compare-496619aba23328494fa4529f49fe3177"></a>

### [`00c4c8a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4c/00c4c8a8.md) → [`00c4c944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4c/00c4c944.md) FUN_00c4c944

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4c8d0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4c8d0 ["INT_ADD", "register:40f0:8", ["const:c4c8d0:8", "const:4:8"]]
- 00c4c8d0 ["CALLIND", null, ["register:0:8"]]
+ 00c4c96c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4c96c ["INT_ADD", "register:40f0:8", ["const:c4c96c:8", "const:4:8"]]
+ 00c4c96c ["CALLIND", null, ["register:0:8"]]
- 00c4c8fc ["INT_ADD", "register:40f0:8", ["const:c4c8fc:8", "const:4:8"]]
- 00c4c8fc ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4c998 ["INT_ADD", "register:40f0:8", ["const:c4c998:8", "const:4:8"]]
+ 00c4c998 ["CALL", null, ["callee:00c5a170:8"]]
- 00c4c964 ["INT_ADD", "register:40f0:8", ["const:c4c964:8", "const:4:8"]]
- 00c4c964 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4ca00 ["INT_ADD", "register:40f0:8", ["const:c4ca00:8", "const:4:8"]]
+ 00c4ca00 ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-e866a6e1a1c274ea5d8913c4cd5e00ee"></a>

### [`00c4ca18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4c/00c4ca18.md) → [`00c4cab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4c/00c4cab4.md) FUN_00c4cab4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c45144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c45/00c45144.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c451e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c451e0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4ca64 ["INT_ADD", "register:40f0:8", ["const:c4ca64:8", "const:4:8"]]
- 00c4ca64 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4cb00 ["INT_ADD", "register:40f0:8", ["const:c4cb00:8", "const:4:8"]]
+ 00c4cb00 ["CALL", null, ["callee:00c5a170:8"]]
- 00c4ca8c ["INT_ADD", "register:40f0:8", ["const:c4ca8c:8", "const:4:8"]]
- 00c4ca8c ["CALL", null, ["callee:00c451e0:8"]]
+ 00c4cb28 ["INT_ADD", "register:40f0:8", ["const:c4cb28:8", "const:4:8"]]
+ 00c4cb28 ["CALL", null, ["callee:00c451e0:8"]]
- 00c4cac4 ["INT_ADD", "register:40f0:8", ["const:c4cac4:8", "const:4:8"]]
- 00c4cac4 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4cb60 ["INT_ADD", "register:40f0:8", ["const:c4cb60:8", "const:4:8"]]
+ 00c4cb60 ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-81975305527865dbac588495f64c4c0d"></a>

### [`00c4cbc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4c/00c4cbc4.md) → [`00c4cc60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4c/00c4cc60.md) FUN_00c4cc60

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4cc14 ["INT_ADD", "register:40f0:8", ["const:c4cc14:8", "const:4:8"]]
- 00c4cc14 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4ccb0 ["INT_ADD", "register:40f0:8", ["const:c4ccb0:8", "const:4:8"]]
+ 00c4ccb0 ["CALL", null, ["callee:00c5a170:8"]]
- 00c4cc48 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4cc48 ["INT_ADD", "register:40f0:8", ["const:c4cc48:8", "const:4:8"]]
- 00c4cc48 ["CALLIND", null, ["register:0:8"]]
+ 00c4cce4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4cce4 ["INT_ADD", "register:40f0:8", ["const:c4cce4:8", "const:4:8"]]
+ 00c4cce4 ["CALLIND", null, ["register:0:8"]]
- 00c4cc80 ["INT_ADD", "register:40f0:8", ["const:c4cc80:8", "const:4:8"]]
- 00c4cc80 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4cd1c ["INT_ADD", "register:40f0:8", ["const:c4cd1c:8", "const:4:8"]]
+ 00c4cd1c ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-cea9eaf174aab2c4a0b9977adc396ce5"></a>

### [`00c4ccd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4c/00c4ccd0.md) → [`00c4cd6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4c/00c4cd6c.md) FUN_00c4cd6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4ccfc ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4ccfc ["INT_ADD", "register:40f0:8", ["const:c4ccfc:8", "const:4:8"]]
- 00c4ccfc ["CALLIND", null, ["register:0:8"]]
+ 00c4cd98 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4cd98 ["INT_ADD", "register:40f0:8", ["const:c4cd98:8", "const:4:8"]]
+ 00c4cd98 ["CALLIND", null, ["register:0:8"]]
- 00c4cd20 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4cd20 ["INT_ADD", "register:40f0:8", ["const:c4cd20:8", "const:4:8"]]
- 00c4cd20 ["CALLIND", null, ["register:0:8"]]
+ 00c4cdbc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4cdbc ["INT_ADD", "register:40f0:8", ["const:c4cdbc:8", "const:4:8"]]
+ 00c4cdbc ["CALLIND", null, ["register:0:8"]]
- 00c4cd4c ["INT_ADD", "register:40f0:8", ["const:c4cd4c:8", "const:4:8"]]
- 00c4cd4c ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4cde8 ["INT_ADD", "register:40f0:8", ["const:c4cde8:8", "const:4:8"]]
+ 00c4cde8 ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-4d7e1b71af743535e016c3280cc3f9f0"></a>

### [`00c4cf20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4c/00c4cf20.md) → [`00c4cfbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4c/00c4cfbc.md) FUN_00c4cfbc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4cf4c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4cf4c ["INT_ADD", "register:40f0:8", ["const:c4cf4c:8", "const:4:8"]]
- 00c4cf4c ["CALLIND", null, ["register:0:8"]]
+ 00c4cfe8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4cfe8 ["INT_ADD", "register:40f0:8", ["const:c4cfe8:8", "const:4:8"]]
+ 00c4cfe8 ["CALLIND", null, ["register:0:8"]]
- 00c4cf70 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4cf70 ["INT_ADD", "register:40f0:8", ["const:c4cf70:8", "const:4:8"]]
- 00c4cf70 ["CALLIND", null, ["register:0:8"]]
+ 00c4d00c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4d00c ["INT_ADD", "register:40f0:8", ["const:c4d00c:8", "const:4:8"]]
+ 00c4d00c ["CALLIND", null, ["register:0:8"]]
- 00c4cf9c ["INT_ADD", "register:40f0:8", ["const:c4cf9c:8", "const:4:8"]]
- 00c4cf9c ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4d038 ["INT_ADD", "register:40f0:8", ["const:c4d038:8", "const:4:8"]]
+ 00c4d038 ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-580454ed0b403702c0df36d409b764d4"></a>

### [`00c4d244`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4d/00c4d244.md) → [`00c4d2e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4d/00c4d2e0.md) FUN_00c4d2e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4d270 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4d270 ["INT_ADD", "register:40f0:8", ["const:c4d270:8", "const:4:8"]]
- 00c4d270 ["CALLIND", null, ["register:0:8"]]
+ 00c4d30c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4d30c ["INT_ADD", "register:40f0:8", ["const:c4d30c:8", "const:4:8"]]
+ 00c4d30c ["CALLIND", null, ["register:0:8"]]
- 00c4d294 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4d294 ["INT_ADD", "register:40f0:8", ["const:c4d294:8", "const:4:8"]]
- 00c4d294 ["CALLIND", null, ["register:0:8"]]
+ 00c4d330 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4d330 ["INT_ADD", "register:40f0:8", ["const:c4d330:8", "const:4:8"]]
+ 00c4d330 ["CALLIND", null, ["register:0:8"]]
- 00c4d2c0 ["INT_ADD", "register:40f0:8", ["const:c4d2c0:8", "const:4:8"]]
- 00c4d2c0 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4d35c ["INT_ADD", "register:40f0:8", ["const:c4d35c:8", "const:4:8"]]
+ 00c4d35c ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-c07ad437f4d80c6445ee85d8aebafbca"></a>

### [`00c4d580`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4d/00c4d580.md) → [`00c4d61c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4d/00c4d61c.md) FUN_00c4d61c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c45144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c45/00c45144.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c451e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c451e0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4d5cc ["INT_ADD", "register:40f0:8", ["const:c4d5cc:8", "const:4:8"]]
- 00c4d5cc ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4d668 ["INT_ADD", "register:40f0:8", ["const:c4d668:8", "const:4:8"]]
+ 00c4d668 ["CALL", null, ["callee:00c5a170:8"]]
- 00c4d5f8 ["INT_ADD", "register:40f0:8", ["const:c4d5f8:8", "const:4:8"]]
- 00c4d5f8 ["CALL", null, ["callee:00c451e0:8"]]
+ 00c4d694 ["INT_ADD", "register:40f0:8", ["const:c4d694:8", "const:4:8"]]
+ 00c4d694 ["CALL", null, ["callee:00c451e0:8"]]
- 00c4d624 ["INT_ADD", "register:40f0:8", ["const:c4d624:8", "const:4:8"]]
- 00c4d624 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4d6c0 ["INT_ADD", "register:40f0:8", ["const:c4d6c0:8", "const:4:8"]]
+ 00c4d6c0 ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-8eee8d6373b1259ab445b5ba67aee68a"></a>

### [`00c4d678`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4d/00c4d678.md) → [`00c4d714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4d/00c4d714.md) FUN_00c4d714

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4d6a4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4d6a4 ["INT_ADD", "register:40f0:8", ["const:c4d6a4:8", "const:4:8"]]
- 00c4d6a4 ["CALLIND", null, ["register:0:8"]]
+ 00c4d740 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4d740 ["INT_ADD", "register:40f0:8", ["const:c4d740:8", "const:4:8"]]
+ 00c4d740 ["CALLIND", null, ["register:0:8"]]
- 00c4d6c8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4d6c8 ["INT_ADD", "register:40f0:8", ["const:c4d6c8:8", "const:4:8"]]
- 00c4d6c8 ["CALLIND", null, ["register:0:8"]]
+ 00c4d764 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4d764 ["INT_ADD", "register:40f0:8", ["const:c4d764:8", "const:4:8"]]
+ 00c4d764 ["CALLIND", null, ["register:0:8"]]
- 00c4d6e0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4d6e0 ["INT_ADD", "register:40f0:8", ["const:c4d6e0:8", "const:4:8"]]
- 00c4d6e0 ["CALLIND", null, ["register:0:8"]]
+ 00c4d77c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4d77c ["INT_ADD", "register:40f0:8", ["const:c4d77c:8", "const:4:8"]]
+ 00c4d77c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-fc133d02f817f124912e54fbbbf71baa"></a>

### [`00c4d8c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4d/00c4d8c4.md) → [`00c4d960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4d/00c4d960.md) FUN_00c4d960

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4d908 ["INT_ADD", "register:40f0:8", ["const:c4d908:8", "const:4:8"]]
- 00c4d908 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4d9a4 ["INT_ADD", "register:40f0:8", ["const:c4d9a4:8", "const:4:8"]]
+ 00c4d9a4 ["CALL", null, ["callee:00c5a170:8"]]
- 00c4d954 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4d954 ["INT_ADD", "register:40f0:8", ["const:c4d954:8", "const:4:8"]]
- 00c4d954 ["CALLIND", null, ["register:0:8"]]
+ 00c4d9f0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4d9f0 ["INT_ADD", "register:40f0:8", ["const:c4d9f0:8", "const:4:8"]]
+ 00c4d9f0 ["CALLIND", null, ["register:0:8"]]
- 00c4d998 ["INT_ADD", "register:40f0:8", ["const:c4d998:8", "const:4:8"]]
- 00c4d998 ["CALL", null, ["callee:00c5b210:8"]]
+ 00c4da34 ["INT_ADD", "register:40f0:8", ["const:c4da34:8", "const:4:8"]]
+ 00c4da34 ["CALL", null, ["callee:00c5b210:8"]]
~~~


<a id="compare-cf7f15aa901fac2ca313899d048f79e3"></a>

### [`00c4d9bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4d/00c4d9bc.md) → [`00c4da58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4d/00c4da58.md) FUN_00c4da58

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4d9e8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4d9e8 ["INT_ADD", "register:40f0:8", ["const:c4d9e8:8", "const:4:8"]]
- 00c4d9e8 ["CALLIND", null, ["register:0:8"]]
+ 00c4da84 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4da84 ["INT_ADD", "register:40f0:8", ["const:c4da84:8", "const:4:8"]]
+ 00c4da84 ["CALLIND", null, ["register:0:8"]]
- 00c4da0c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4da0c ["INT_ADD", "register:40f0:8", ["const:c4da0c:8", "const:4:8"]]
- 00c4da0c ["CALLIND", null, ["register:0:8"]]
+ 00c4daa8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4daa8 ["INT_ADD", "register:40f0:8", ["const:c4daa8:8", "const:4:8"]]
+ 00c4daa8 ["CALLIND", null, ["register:0:8"]]
- 00c4da48 ["INT_ADD", "register:40f0:8", ["const:c4da48:8", "const:4:8"]]
- 00c4da48 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4dae4 ["INT_ADD", "register:40f0:8", ["const:c4dae4:8", "const:4:8"]]
+ 00c4dae4 ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-b1c59125ea0502b98a9f12b4fe5cea8f"></a>

### [`00c4decc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4d/00c4decc.md) → [`00c4df68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4d/00c4df68.md) FUN_00c4df68

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4def8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4def8 ["INT_ADD", "register:40f0:8", ["const:c4def8:8", "const:4:8"]]
- 00c4def8 ["CALLIND", null, ["register:0:8"]]
+ 00c4df94 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4df94 ["INT_ADD", "register:40f0:8", ["const:c4df94:8", "const:4:8"]]
+ 00c4df94 ["CALLIND", null, ["register:0:8"]]
- 00c4df1c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4df1c ["INT_ADD", "register:40f0:8", ["const:c4df1c:8", "const:4:8"]]
- 00c4df1c ["CALLIND", null, ["register:0:8"]]
+ 00c4dfb8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4dfb8 ["INT_ADD", "register:40f0:8", ["const:c4dfb8:8", "const:4:8"]]
+ 00c4dfb8 ["CALLIND", null, ["register:0:8"]]
- 00c4df48 ["INT_ADD", "register:40f0:8", ["const:c4df48:8", "const:4:8"]]
- 00c4df48 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4dfe4 ["INT_ADD", "register:40f0:8", ["const:c4dfe4:8", "const:4:8"]]
+ 00c4dfe4 ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-93f4eb9d6d8be4dc23bd78b3d2fab615"></a>

### [`00c4f53c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4f/00c4f53c.md) → [`00c4f5d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4f/00c4f5d8.md) FUN_00c4f5d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4f580 ["INT_ADD", "register:40f0:8", ["const:c4f580:8", "const:4:8"]]
- 00c4f580 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4f61c ["INT_ADD", "register:40f0:8", ["const:c4f61c:8", "const:4:8"]]
+ 00c4f61c ["CALL", null, ["callee:00c5a170:8"]]
- 00c4f5e4 ["INT_ADD", "register:40f0:8", ["const:c4f5e4:8", "const:4:8"]]
- 00c4f5e4 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4f680 ["INT_ADD", "register:40f0:8", ["const:c4f680:8", "const:4:8"]]
+ 00c4f680 ["CALL", null, ["callee:00c5a170:8"]]
- 00c4f628 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4f628 ["INT_ADD", "register:40f0:8", ["const:c4f628:8", "const:4:8"]]
- 00c4f628 ["CALLIND", null, ["register:0:8"]]
+ 00c4f6c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4f6c4 ["INT_ADD", "register:40f0:8", ["const:c4f6c4:8", "const:4:8"]]
+ 00c4f6c4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ba1fa3c5d7fbfa8880daf44f718c06af"></a>

### [`00c4f7b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4f/00c4f7b4.md) → [`00c4f850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4f/00c4f850.md) FUN_00c4f850

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c45144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c45/00c45144.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c451e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c45/00c451e0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4f7f8 ["INT_ADD", "register:40f0:8", ["const:c4f7f8:8", "const:4:8"]]
- 00c4f7f8 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4f894 ["INT_ADD", "register:40f0:8", ["const:c4f894:8", "const:4:8"]]
+ 00c4f894 ["CALL", null, ["callee:00c5a170:8"]]
- 00c4f860 ["INT_ADD", "register:40f0:8", ["const:c4f860:8", "const:4:8"]]
- 00c4f860 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4f8fc ["INT_ADD", "register:40f0:8", ["const:c4f8fc:8", "const:4:8"]]
+ 00c4f8fc ["CALL", null, ["callee:00c5a170:8"]]
- 00c4f888 ["INT_ADD", "register:40f0:8", ["const:c4f888:8", "const:4:8"]]
- 00c4f888 ["CALL", null, ["callee:00c451e0:8"]]
+ 00c4f924 ["INT_ADD", "register:40f0:8", ["const:c4f924:8", "const:4:8"]]
+ 00c4f924 ["CALL", null, ["callee:00c451e0:8"]]
~~~


<a id="compare-148bcb204a63077e28ed31f3bd5c2998"></a>

### [`00c4f91c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4f/00c4f91c.md) → [`00c4f9b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4f/00c4f9b8.md) FUN_00c4f9b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4f93c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4f93c ["INT_ADD", "register:40f0:8", ["const:c4f93c:8", "const:4:8"]]
- 00c4f93c ["CALLIND", null, ["register:0:8"]]
+ 00c4f9d8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4f9d8 ["INT_ADD", "register:40f0:8", ["const:c4f9d8:8", "const:4:8"]]
+ 00c4f9d8 ["CALLIND", null, ["register:0:8"]]
- 00c4f968 ["INT_ADD", "register:40f0:8", ["const:c4f968:8", "const:4:8"]]
- 00c4f968 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4fa04 ["INT_ADD", "register:40f0:8", ["const:c4fa04:8", "const:4:8"]]
+ 00c4fa04 ["CALL", null, ["callee:00c5a170:8"]]
- 00c4f99c ["INT_ADD", "register:40f0:8", ["const:c4f99c:8", "const:4:8"]]
- 00c4f99c ["CALL", null, ["callee:00c5b210:8"]]
+ 00c4fa38 ["INT_ADD", "register:40f0:8", ["const:c4fa38:8", "const:4:8"]]
+ 00c4fa38 ["CALL", null, ["callee:00c5b210:8"]]
~~~


<a id="compare-1dc5a1d5f6c0042a60f002e1749b41a6"></a>

### [`00c4fd3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4f/00c4fd3c.md) → [`00c4fdd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4f/00c4fdd8.md) FUN_00c4fdd8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4fd68 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4fd68 ["INT_ADD", "register:40f0:8", ["const:c4fd68:8", "const:4:8"]]
- 00c4fd68 ["CALLIND", null, ["register:0:8"]]
+ 00c4fe04 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4fe04 ["INT_ADD", "register:40f0:8", ["const:c4fe04:8", "const:4:8"]]
+ 00c4fe04 ["CALLIND", null, ["register:0:8"]]
- 00c4fd8c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4fd8c ["INT_ADD", "register:40f0:8", ["const:c4fd8c:8", "const:4:8"]]
- 00c4fd8c ["CALLIND", null, ["register:0:8"]]
+ 00c4fe28 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4fe28 ["INT_ADD", "register:40f0:8", ["const:c4fe28:8", "const:4:8"]]
+ 00c4fe28 ["CALLIND", null, ["register:0:8"]]
- 00c4fdb8 ["INT_ADD", "register:40f0:8", ["const:c4fdb8:8", "const:4:8"]]
- 00c4fdb8 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4fe54 ["INT_ADD", "register:40f0:8", ["const:c4fe54:8", "const:4:8"]]
+ 00c4fe54 ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-d58f590b573b93bd491c91dbce4aa694"></a>

### [`00c4feb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c4f/00c4feb0.md) → [`00c4ff4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c4f/00c4ff4c.md) FUN_00c4ff4c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c4fedc ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4fedc ["INT_ADD", "register:40f0:8", ["const:c4fedc:8", "const:4:8"]]
- 00c4fedc ["CALLIND", null, ["register:0:8"]]
+ 00c4ff78 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4ff78 ["INT_ADD", "register:40f0:8", ["const:c4ff78:8", "const:4:8"]]
+ 00c4ff78 ["CALLIND", null, ["register:0:8"]]
- 00c4ff00 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c4ff00 ["INT_ADD", "register:40f0:8", ["const:c4ff00:8", "const:4:8"]]
- 00c4ff00 ["CALLIND", null, ["register:0:8"]]
+ 00c4ff9c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c4ff9c ["INT_ADD", "register:40f0:8", ["const:c4ff9c:8", "const:4:8"]]
+ 00c4ff9c ["CALLIND", null, ["register:0:8"]]
- 00c4ff2c ["INT_ADD", "register:40f0:8", ["const:c4ff2c:8", "const:4:8"]]
- 00c4ff2c ["CALL", null, ["callee:00c5a170:8"]]
+ 00c4ffc8 ["INT_ADD", "register:40f0:8", ["const:c4ffc8:8", "const:4:8"]]
+ 00c4ffc8 ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-2169d6691b79640d8ca570d6d1227704"></a>

### [`00c50248`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c50/00c50248.md) → [`00c502e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c50/00c502e4.md) FUN_00c502e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c5029c ["INT_ADD", "register:40f0:8", ["const:c5029c:8", "const:4:8"]]
- 00c5029c ["CALL", null, ["callee:00c5a170:8"]]
+ 00c50338 ["INT_ADD", "register:40f0:8", ["const:c50338:8", "const:4:8"]]
+ 00c50338 ["CALL", null, ["callee:00c5a170:8"]]
- 00c502b8 ["INT_ADD", "register:40f0:8", ["const:c502b8:8", "const:4:8"]]
- 00c502b8 ["CALL", null, ["callee:00c580d0:8"]]
+ 00c50354 ["INT_ADD", "register:40f0:8", ["const:c50354:8", "const:4:8"]]
+ 00c50354 ["CALL", null, ["callee:00c580d0:8"]]
- 00c502f0 ["INT_ADD", "register:40f0:8", ["const:c502f0:8", "const:4:8"]]
- 00c502f0 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c5038c ["INT_ADD", "register:40f0:8", ["const:c5038c:8", "const:4:8"]]
+ 00c5038c ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-eff9e4f066cb4e9b6363fa94ddd470d8"></a>

### [`00c503bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c50/00c503bc.md) → [`00c50458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c50/00c50458.md) FUN_00c50458

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c50400 ["INT_ADD", "register:40f0:8", ["const:c50400:8", "const:4:8"]]
- 00c50400 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c5049c ["INT_ADD", "register:40f0:8", ["const:c5049c:8", "const:4:8"]]
+ 00c5049c ["CALL", null, ["callee:00c5a170:8"]]
- 00c5044c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c5044c ["INT_ADD", "register:40f0:8", ["const:c5044c:8", "const:4:8"]]
- 00c5044c ["CALLIND", null, ["register:0:8"]]
+ 00c504e8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c504e8 ["INT_ADD", "register:40f0:8", ["const:c504e8:8", "const:4:8"]]
+ 00c504e8 ["CALLIND", null, ["register:0:8"]]
- 00c50490 ["INT_ADD", "register:40f0:8", ["const:c50490:8", "const:4:8"]]
- 00c50490 ["CALL", null, ["callee:00c5b210:8"]]
+ 00c5052c ["INT_ADD", "register:40f0:8", ["const:c5052c:8", "const:4:8"]]
+ 00c5052c ["CALL", null, ["callee:00c5b210:8"]]
~~~


<a id="compare-cd7254cdbc39f3503d7bb80d060ff9a8"></a>

### [`00c50784`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c50/00c50784.md) → [`00c50820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c50/00c50820.md) FUN_00c50820

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c507ac ["COPY", "register:0:8", ["register:4040:8"]]
- 00c507ac ["INT_ADD", "register:40f0:8", ["const:c507ac:8", "const:4:8"]]
- 00c507ac ["CALLIND", null, ["register:0:8"]]
+ 00c50848 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c50848 ["INT_ADD", "register:40f0:8", ["const:c50848:8", "const:4:8"]]
+ 00c50848 ["CALLIND", null, ["register:0:8"]]
- 00c507e4 ["INT_ADD", "register:40f0:8", ["const:c507e4:8", "const:4:8"]]
- 00c507e4 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c50880 ["INT_ADD", "register:40f0:8", ["const:c50880:8", "const:4:8"]]
+ 00c50880 ["CALL", null, ["callee:00c5a170:8"]]
- 00c50800 ["INT_ADD", "register:40f0:8", ["const:c50800:8", "const:4:8"]]
- 00c50800 ["CALL", null, ["callee:00c580d0:8"]]
+ 00c5089c ["INT_ADD", "register:40f0:8", ["const:c5089c:8", "const:4:8"]]
+ 00c5089c ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-f74ff6cb95ec14d5673d7759e1585c15"></a>

### [`00c50aa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c50/00c50aa0.md) → [`00c50b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c50/00c50b3c.md) FUN_00c50b3c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c50acc ["COPY", "register:0:8", ["register:4040:8"]]
- 00c50acc ["INT_ADD", "register:40f0:8", ["const:c50acc:8", "const:4:8"]]
- 00c50acc ["CALLIND", null, ["register:0:8"]]
+ 00c50b68 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c50b68 ["INT_ADD", "register:40f0:8", ["const:c50b68:8", "const:4:8"]]
+ 00c50b68 ["CALLIND", null, ["register:0:8"]]
- 00c50af0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c50af0 ["INT_ADD", "register:40f0:8", ["const:c50af0:8", "const:4:8"]]
- 00c50af0 ["CALLIND", null, ["register:0:8"]]
+ 00c50b8c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c50b8c ["INT_ADD", "register:40f0:8", ["const:c50b8c:8", "const:4:8"]]
+ 00c50b8c ["CALLIND", null, ["register:0:8"]]
- 00c50b1c ["INT_ADD", "register:40f0:8", ["const:c50b1c:8", "const:4:8"]]
- 00c50b1c ["CALL", null, ["callee:00c5a170:8"]]
+ 00c50bb8 ["INT_ADD", "register:40f0:8", ["const:c50bb8:8", "const:4:8"]]
+ 00c50bb8 ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-076fc3d94bedb0019ddbe482acde5ad6"></a>

### [`00c50f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c50/00c50f5c.md) → [`00c50ff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c50/00c50ff8.md) FUN_00c50ff8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c50f80 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c50f80 ["INT_ADD", "register:40f0:8", ["const:c50f80:8", "const:4:8"]]
- 00c50f80 ["CALLIND", null, ["register:0:8"]]
+ 00c5101c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c5101c ["INT_ADD", "register:40f0:8", ["const:c5101c:8", "const:4:8"]]
+ 00c5101c ["CALLIND", null, ["register:0:8"]]
- 00c50fa8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c50fa8 ["INT_ADD", "register:40f0:8", ["const:c50fa8:8", "const:4:8"]]
- 00c50fa8 ["CALLIND", null, ["register:0:8"]]
+ 00c51044 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c51044 ["INT_ADD", "register:40f0:8", ["const:c51044:8", "const:4:8"]]
+ 00c51044 ["CALLIND", null, ["register:0:8"]]
- 00c50fd8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c50fd8 ["INT_ADD", "register:40f0:8", ["const:c50fd8:8", "const:4:8"]]
- 00c50fd8 ["CALLIND", null, ["register:0:8"]]
+ 00c51074 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c51074 ["INT_ADD", "register:40f0:8", ["const:c51074:8", "const:4:8"]]
+ 00c51074 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-48e8e57009852cb70d033272aae0d84e"></a>

### [`00c5111c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c51/00c5111c.md) → [`00c511b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c51/00c511b8.md) FUN_00c511b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c51158 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c51158 ["INT_ADD", "register:40f0:8", ["const:c51158:8", "const:4:8"]]
- 00c51158 ["CALLIND", null, ["register:0:8"]]
+ 00c511f4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c511f4 ["INT_ADD", "register:40f0:8", ["const:c511f4:8", "const:4:8"]]
+ 00c511f4 ["CALLIND", null, ["register:0:8"]]
- 00c51188 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c51188 ["INT_ADD", "register:40f0:8", ["const:c51188:8", "const:4:8"]]
- 00c51188 ["CALLIND", null, ["register:0:8"]]
+ 00c51224 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c51224 ["INT_ADD", "register:40f0:8", ["const:c51224:8", "const:4:8"]]
+ 00c51224 ["CALLIND", null, ["register:0:8"]]
- 00c511b8 ["INT_ADD", "register:40f0:8", ["const:c511b8:8", "const:4:8"]]
- 00c511b8 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c51254 ["INT_ADD", "register:40f0:8", ["const:c51254:8", "const:4:8"]]
+ 00c51254 ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-6c2de1b3ac1b547301a4141a0dd8e769"></a>

### [`00c51208`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c51/00c51208.md) → [`00c512a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c51/00c512a4.md) FUN_00c512a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c5125c ["INT_ADD", "register:40f0:8", ["const:c5125c:8", "const:4:8"]]
- 00c5125c ["CALL", null, ["callee:00c5a170:8"]]
+ 00c512f8 ["INT_ADD", "register:40f0:8", ["const:c512f8:8", "const:4:8"]]
+ 00c512f8 ["CALL", null, ["callee:00c5a170:8"]]
- 00c51278 ["INT_ADD", "register:40f0:8", ["const:c51278:8", "const:4:8"]]
- 00c51278 ["CALL", null, ["callee:00c580d0:8"]]
+ 00c51314 ["INT_ADD", "register:40f0:8", ["const:c51314:8", "const:4:8"]]
+ 00c51314 ["CALL", null, ["callee:00c580d0:8"]]
- 00c512b0 ["INT_ADD", "register:40f0:8", ["const:c512b0:8", "const:4:8"]]
- 00c512b0 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c5134c ["INT_ADD", "register:40f0:8", ["const:c5134c:8", "const:4:8"]]
+ 00c5134c ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-1868002f0db9ac569050298eac4234b5"></a>

### [`00c51370`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c51/00c51370.md) → [`00c5140c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c51/00c5140c.md) FUN_00c5140c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c513fc ["COPY", "register:0:8", ["register:4040:8"]]
- 00c513fc ["INT_ADD", "register:40f0:8", ["const:c513fc:8", "const:4:8"]]
- 00c513fc ["CALLIND", null, ["register:0:8"]]
+ 00c51498 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c51498 ["INT_ADD", "register:40f0:8", ["const:c51498:8", "const:4:8"]]
+ 00c51498 ["CALLIND", null, ["register:0:8"]]
- 00c51424 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c51424 ["INT_ADD", "register:40f0:8", ["const:c51424:8", "const:4:8"]]
- 00c51424 ["CALLIND", null, ["register:0:8"]]
+ 00c514c0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c514c0 ["INT_ADD", "register:40f0:8", ["const:c514c0:8", "const:4:8"]]
+ 00c514c0 ["CALLIND", null, ["register:0:8"]]
- 00c51454 ["INT_ADD", "register:40f0:8", ["const:c51454:8", "const:4:8"]]
- 00c51454 ["CALL", null, ["callee:00c5a170:8"]]
+ 00c514f0 ["INT_ADD", "register:40f0:8", ["const:c514f0:8", "const:4:8"]]
+ 00c514f0 ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-c0f5e05ffe977bb656deafde7a804224"></a>

### [`00c516b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c51/00c516b0.md) → [`00c5174c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c51/00c5174c.md) FUN_00c5174c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c5174c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c5174c ["INT_ADD", "register:40f0:8", ["const:c5174c:8", "const:4:8"]]
- 00c5174c ["CALLIND", null, ["register:0:8"]]
+ 00c517e8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c517e8 ["INT_ADD", "register:40f0:8", ["const:c517e8:8", "const:4:8"]]
+ 00c517e8 ["CALLIND", null, ["register:0:8"]]
- 00c5177c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c5177c ["INT_ADD", "register:40f0:8", ["const:c5177c:8", "const:4:8"]]
- 00c5177c ["CALLIND", null, ["register:0:8"]]
+ 00c51818 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c51818 ["INT_ADD", "register:40f0:8", ["const:c51818:8", "const:4:8"]]
+ 00c51818 ["CALLIND", null, ["register:0:8"]]
- 00c517ac ["INT_ADD", "register:40f0:8", ["const:c517ac:8", "const:4:8"]]
- 00c517ac ["CALL", null, ["callee:00c5a170:8"]]
+ 00c51848 ["INT_ADD", "register:40f0:8", ["const:c51848:8", "const:4:8"]]
+ 00c51848 ["CALL", null, ["callee:00c5a170:8"]]
~~~


<a id="compare-9aad642d4beb93e2f7d53d1a9bb68d43"></a>

### [`00c51a4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c51/00c51a4c.md) → [`00c51ae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c51/00c51ae8.md) FUN_00c51ae8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c51b74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c51/00c51b74.md) [`00c5a0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0a0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c51c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c51/00c51c10.md) [`00c5a170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a170.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c51a78 ["INT_ADD", "register:40f0:8", ["const:c51a78:8", "const:4:8"]]
- 00c51a78 ["CALL", null, ["callee:00c51c10:8"]]
+ 00c51b14 ["INT_ADD", "register:40f0:8", ["const:c51b14:8", "const:4:8"]]
+ 00c51b14 ["CALL", null, ["callee:00c51c10:8"]]
- 00c51aa8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c51aa8 ["INT_ADD", "register:40f0:8", ["const:c51aa8:8", "const:4:8"]]
- 00c51aa8 ["CALLIND", null, ["register:0:8"]]
+ 00c51b44 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c51b44 ["INT_ADD", "register:40f0:8", ["const:c51b44:8", "const:4:8"]]
+ 00c51b44 ["CALLIND", null, ["register:0:8"]]
- 00c51ad8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c51ad8 ["INT_ADD", "register:40f0:8", ["const:c51ad8:8", "const:4:8"]]
- 00c51ad8 ["CALLIND", null, ["register:0:8"]]
+ 00c51b74 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c51b74 ["INT_ADD", "register:40f0:8", ["const:c51b74:8", "const:4:8"]]
+ 00c51b74 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e9d6fe28175f7a774e97a6989316a8e6"></a>

### [`00c51d20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c51/00c51d20.md) → [`00c51dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c51/00c51dbc.md) _ZnwmRKSt9nothrow_t

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5a850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a850.md) · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`00c5a920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a920.md) · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c51d2c ["INT_ADD", "register:40f0:8", ["const:c51d2c:8", "const:4:8"]]
- 00c51d2c ["CALL", null, ["callee:00c57f60:8"]]
+ 00c51dc8 ["INT_ADD", "register:40f0:8", ["const:c51dc8:8", "const:4:8"]]
+ 00c51dc8 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-390462c02aaae0275beee2b83f14e6da"></a>

### [`00c51d50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c51/00c51d50.md) → [`00c51dec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c51/00c51dec.md) _ZnamRKSt9nothrow_t

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5be50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be50.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bf20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c51d5c ["INT_ADD", "register:40f0:8", ["const:c51d5c:8", "const:4:8"]]
- 00c51d5c ["CALL", null, ["callee:00c5bf20:8"]]
+ 00c51df8 ["INT_ADD", "register:40f0:8", ["const:c51df8:8", "const:4:8"]]
+ 00c51df8 ["CALL", null, ["callee:00c5bf20:8"]]
~~~


<a id="compare-60467e674d466b40367f4da8d4af4080"></a>

### [`00c51db0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c51/00c51db0.md) → [`00c51e4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c51/00c51e4c.md) _ZnwmSt11align_val_tRKSt9nothrow_t

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5eec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5eec0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5ef90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ef90.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c51dbc ["INT_ADD", "register:40f0:8", ["const:c51dbc:8", "const:4:8"]]
- 00c51dbc ["CALL", null, ["callee:00c5ef90:8"]]
+ 00c51e58 ["INT_ADD", "register:40f0:8", ["const:c51e58:8", "const:4:8"]]
+ 00c51e58 ["CALL", null, ["callee:00c5ef90:8"]]
~~~


<a id="compare-a95f03041329cbf5cc235a62e9089792"></a>

### [`00c51de0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c51/00c51de0.md) → [`00c51e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c51/00c51e7c.md) _ZnamSt11align_val_tRKSt9nothrow_t

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5eee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5eee0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5efb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5efb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c51dec ["INT_ADD", "register:40f0:8", ["const:c51dec:8", "const:4:8"]]
- 00c51dec ["CALL", null, ["callee:00c5efb0:8"]]
+ 00c51e88 ["INT_ADD", "register:40f0:8", ["const:c51e88:8", "const:4:8"]]
+ 00c51e88 ["CALL", null, ["callee:00c5efb0:8"]]
~~~


<a id="compare-32be5d2e8044d073998b9423f4056901"></a>

### [`00c51e78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c51/00c51e78.md) → [`00c51f14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c51/00c51f14.md) __cxa_allocate_exception

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) · 呼出先 3件 [`00c52644`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c52644.md) [`00c58020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58020.md) [`00c58090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58090.md)
- 新版 呼出元 1件 [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) · 呼出先 3件 [`00c526e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c526e0.md) [`00c580f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580f0.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c51e90 ["INT_ADD", "register:40f0:8", ["const:c51e90:8", "const:4:8"]]
- 00c51e90 ["CALL", null, ["callee:00c526e0:8"]]
+ 00c51f2c ["INT_ADD", "register:40f0:8", ["const:c51f2c:8", "const:4:8"]]
+ 00c51f2c ["CALL", null, ["callee:00c526e0:8"]]
- 00c51ea8 ["INT_ADD", "register:40f0:8", ["const:c51ea8:8", "const:4:8"]]
- 00c51ea8 ["CALL", null, ["callee:00c58160:8"]]
+ 00c51f44 ["INT_ADD", "register:40f0:8", ["const:c51f44:8", "const:4:8"]]
+ 00c51f44 ["CALL", null, ["callee:00c58160:8"]]
- 00c51ec0 ["INT_ADD", "register:40f0:8", ["const:c51ec0:8", "const:4:8"]]
- 00c51ec0 ["CALL", null, ["callee:00c580f0:8"]]
+ 00c51f5c ["INT_ADD", "register:40f0:8", ["const:c51f5c:8", "const:4:8"]]
+ 00c51f5c ["CALL", null, ["callee:00c580f0:8"]]
~~~


<a id="compare-5b83628ff3c96dca93431454fbee192d"></a>

### [`00c51ec8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c51/00c51ec8.md) → [`00c51f64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c51/00c51f64.md) __cxa_begin_catch

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58010`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58010.md) · 呼出先 2件 [`00c58020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58020.md) [`00c5ed90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5ed90.md)
- 新版 呼出元 1件 [`00c580e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580e0.md) · 呼出先 2件 [`00c580f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580f0.md) [`00c5ee60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ee60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c51edc ["INT_ADD", "register:40f0:8", ["const:c51edc:8", "const:4:8"]]
- 00c51edc ["CALL", null, ["callee:00c5ee60:8"]]
+ 00c51f78 ["INT_ADD", "register:40f0:8", ["const:c51f78:8", "const:4:8"]]
+ 00c51f78 ["CALL", null, ["callee:00c5ee60:8"]]
- 00c51f5c ["INT_ADD", "register:40f0:8", ["const:c51f5c:8", "const:4:8"]]
- 00c51f5c ["CALL", null, ["callee:00c580f0:8"]]
+ 00c51ff8 ["INT_ADD", "register:40f0:8", ["const:c51ff8:8", "const:4:8"]]
+ 00c51ff8 ["CALL", null, ["callee:00c580f0:8"]]
~~~


<a id="compare-94187534f4f14ac0cd064c0ca7a946d4"></a>

### [`00c52060`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c52060.md) → [`00c520fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c520fc.md) __cxa_allocate_dependent_exception

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c52644`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c52644.md) [`00c58020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58020.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c526e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c526e0.md) [`00c580f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c52070 ["INT_ADD", "register:40f0:8", ["const:c52070:8", "const:4:8"]]
- 00c52070 ["CALL", null, ["callee:00c526e0:8"]]
+ 00c5210c ["INT_ADD", "register:40f0:8", ["const:c5210c:8", "const:4:8"]]
+ 00c5210c ["CALL", null, ["callee:00c526e0:8"]]
- 00c52098 ["INT_ADD", "register:40f0:8", ["const:c52098:8", "const:4:8"]]
- 00c52098 ["CALL", null, ["callee:00c580f0:8"]]
+ 00c52134 ["INT_ADD", "register:40f0:8", ["const:c52134:8", "const:4:8"]]
+ 00c52134 ["CALL", null, ["callee:00c580f0:8"]]
~~~


<a id="compare-a7735d7aca3c41db146f13132f0e7835"></a>

### [`00c520a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c520a4.md) → [`00c52140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c52140.md) __cxa_throw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) · 呼出先 4件 [`00c52100`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c52100.md) [`00c53d30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d30.md) [`00c58330`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58330.md) [`00c5ed90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5ed90.md)
- 新版 呼出元 1件 [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) · 呼出先 4件 [`00c5219c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c5219c.md) [`00c53dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53dd0.md) [`00c58400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58400.md) [`00c5ee60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ee60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c520c4 ["INT_ADD", "register:40f0:8", ["const:c520c4:8", "const:4:8"]]
- 00c520c4 ["CALL", null, ["callee:00c5ee60:8"]]
+ 00c52160 ["INT_ADD", "register:40f0:8", ["const:c52160:8", "const:4:8"]]
+ 00c52160 ["CALL", null, ["callee:00c5ee60:8"]]
- 00c520e0 ["INT_ADD", "register:40f0:8", ["const:c520e0:8", "const:4:8"]]
- 00c520e0 ["CALL", null, ["callee:00c58400:8"]]
+ 00c5217c ["INT_ADD", "register:40f0:8", ["const:c5217c:8", "const:4:8"]]
+ 00c5217c ["CALL", null, ["callee:00c58400:8"]]
- 00c520f4 ["INT_ADD", "register:40f0:8", ["const:c520f4:8", "const:4:8"]]
- 00c520f4 ["CALL", null, ["callee:00c53dd0:8"]]
+ 00c52190 ["INT_ADD", "register:40f0:8", ["const:c52190:8", "const:4:8"]]
+ 00c52190 ["CALL", null, ["callee:00c53dd0:8"]]
~~~


<a id="compare-003d421ce1a86598ab91ecb5b788630e"></a>

### [`00c52100`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c52100.md) → [`00c5219c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c5219c.md) FUN_00c5219c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c520a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c520a4.md) · 呼出先 2件 [`00c378e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c378e0.md) [`00c58010`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`00c52140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c52140.md) · 呼出先 2件 [`00c3797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c3797c.md) [`00c580e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c52118 ["INT_ADD", "register:40f0:8", ["const:c52118:8", "const:4:8"]]
- 00c52118 ["CALL", null, ["callee:00c580e0:8"]]
+ 00c521b4 ["INT_ADD", "register:40f0:8", ["const:c521b4:8", "const:4:8"]]
+ 00c521b4 ["CALL", null, ["callee:00c580e0:8"]]
- 00c52120 ["INT_ADD", "register:40f0:8", ["const:c52120:8", "const:4:8"]]
- 00c52120 ["CALL", null, ["callee:00c3797c:8"]]
+ 00c521bc ["INT_ADD", "register:40f0:8", ["const:c521bc:8", "const:4:8"]]
+ 00c521bc ["CALL", null, ["callee:00c3797c:8"]]
~~~


<a id="compare-c92a1d03823d8161e3e9ec37e4c0020c"></a>

### [`00c52278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c52278.md) → [`00c52314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c52314.md) __cxa_current_exception_type

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5eda0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5eda0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5ee70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ee70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c52284 ["INT_ADD", "register:40f0:8", ["const:c52284:8", "const:4:8"]]
- 00c52284 ["CALL", null, ["callee:00c5ee70:8"]]
+ 00c52320 ["INT_ADD", "register:40f0:8", ["const:c52320:8", "const:4:8"]]
+ 00c52320 ["CALL", null, ["callee:00c5ee70:8"]]
~~~


<a id="compare-cd9b35db3a154c771354e0e9fc91d47f"></a>

### [`00c522c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c522c8.md) → [`00c52364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c52364.md) __cxa_rethrow

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58500.md) · 呼出先 5件 [`00440c3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440c3c.md) [`00c378e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c378e0.md) [`00c53d30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d30.md) [`00c58020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58020.md) [`00c5ed90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5ed90.md)
- 新版 呼出元 1件 [`00c585d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c585d0.md) · 呼出先 5件 [`00440c7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440c7c.md) [`00c3797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c3797c.md) [`00c53dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53dd0.md) [`00c580f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580f0.md) [`00c5ee60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ee60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c522dc ["INT_ADD", "register:40f0:8", ["const:c522dc:8", "const:4:8"]]
- 00c522dc ["CALL", null, ["callee:00c5ee60:8"]]
+ 00c52378 ["INT_ADD", "register:40f0:8", ["const:c52378:8", "const:4:8"]]
+ 00c52378 ["CALL", null, ["callee:00c5ee60:8"]]
- 00c522e8 ["INT_ADD", "register:40f0:8", ["const:c522e8:8", "const:4:8"]]
- 00c522e8 ["CALL", null, ["callee:00c580f0:8"]]
+ 00c52384 ["INT_ADD", "register:40f0:8", ["const:c52384:8", "const:4:8"]]
+ 00c52384 ["CALL", null, ["callee:00c580f0:8"]]
- 00c52334 ["INT_ADD", "register:40f0:8", ["const:c52334:8", "const:4:8"]]
- 00c52334 ["CALL", null, ["callee:00c53dd0:8"]]
+ 00c523d0 ["INT_ADD", "register:40f0:8", ["const:c523d0:8", "const:4:8"]]
+ 00c523d0 ["CALL", null, ["callee:00c53dd0:8"]]
~~~


<a id="compare-7dda405882d1cdff4355c208dca059c3"></a>

### [`00c523ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c523ac.md) → [`00c52448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c52448.md) __cxa_increment_exception_refcount

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5df20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5df20.md) · 呼出先 1件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00c5dff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dff0.md) · 呼出先 1件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c523c8 ["INT_ADD", "register:40f0:8", ["const:c523c8:8", "const:4:8"]]
- 00c523c8 ["CALL", null, ["callee:00c53da0:8"]]
+ 00c52464 ["INT_ADD", "register:40f0:8", ["const:c52464:8", "const:4:8"]]
+ 00c52464 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-a556650aeda7bb2e5d0ea4fd7c663df8"></a>

### [`00c523d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c523d8.md) → [`00c52474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c52474.md) __cxa_current_primary_exception

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5df40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5df40.md) · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c5eda0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5eda0.md)
- 新版 呼出元 1件 [`00c5e010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e010.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c5ee70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ee70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c523e8 ["INT_ADD", "register:40f0:8", ["const:c523e8:8", "const:4:8"]]
- 00c523e8 ["CALL", null, ["callee:00c5ee70:8"]]
+ 00c52484 ["INT_ADD", "register:40f0:8", ["const:c52484:8", "const:4:8"]]
+ 00c52484 ["CALL", null, ["callee:00c5ee70:8"]]
- 00c52434 ["INT_ADD", "register:40f0:8", ["const:c52434:8", "const:4:8"]]
- 00c52434 ["CALL", null, ["callee:00c53da0:8"]]
+ 00c524d0 ["INT_ADD", "register:40f0:8", ["const:c524d0:8", "const:4:8"]]
+ 00c524d0 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-769566a7e64732118d41a3bebd89e6eb"></a>

### [`00c525ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c525ec.md) → [`00c52688`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c52688.md) __cxa_uncaught_exception

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5eda0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5eda0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5ee70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ee70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c525f8 ["INT_ADD", "register:40f0:8", ["const:c525f8:8", "const:4:8"]]
- 00c525f8 ["CALL", null, ["callee:00c5ee70:8"]]
+ 00c52694 ["INT_ADD", "register:40f0:8", ["const:c52694:8", "const:4:8"]]
+ 00c52694 ["CALL", null, ["callee:00c5ee70:8"]]
~~~


<a id="compare-8b33df2e4421a1298a282e5bd740964c"></a>

### [`00c5261c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c5261c.md) → [`00c526b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c526b8.md) __cxa_uncaught_exceptions

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5df00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5df00.md) · 呼出先 1件 [`00c5eda0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5eda0.md)
- 新版 呼出元 1件 [`00c5dfd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfd0.md) · 呼出先 1件 [`00c5ee70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5ee70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c52628 ["INT_ADD", "register:40f0:8", ["const:c52628:8", "const:4:8"]]
- 00c52628 ["CALL", null, ["callee:00c5ee70:8"]]
+ 00c526c4 ["INT_ADD", "register:40f0:8", ["const:c526c4:8", "const:4:8"]]
+ 00c526c4 ["CALL", null, ["callee:00c5ee70:8"]]
~~~


<a id="compare-3e6e6f10b5518eb144c2ad89d8521a01"></a>

### [`00c52644`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c52644.md) → [`00c526e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c526e0.md) FUN_00c526e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00c51e78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c51/00c51e78.md) [`00c52060`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c52060.md) [`00c52458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c52458.md) · 呼出先 2件 [`00c52690`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c52690.md) [`00c5eed0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5eed0.md)
- 新版 呼出元 3件 [`00c51f14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c51/00c51f14.md) [`00c520fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c520fc.md) [`00c524f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c524f4.md) · 呼出先 2件 [`00c5272c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c5272c.md) [`00c5efa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5efa0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c5266c ["INT_ADD", "register:40f0:8", ["const:c5266c:8", "const:4:8"]]
- 00c5266c ["CALL", null, ["callee:00c5efa0:8"]]
+ 00c52708 ["INT_ADD", "register:40f0:8", ["const:c52708:8", "const:4:8"]]
+ 00c52708 ["CALL", null, ["callee:00c5efa0:8"]]
- 00c5267c ["INT_ADD", "register:40f0:8", ["const:c5267c:8", "const:4:8"]]
- 00c5267c ["CALL", null, ["callee:00c5272c:8"]]
+ 00c52718 ["INT_ADD", "register:40f0:8", ["const:c52718:8", "const:4:8"]]
+ 00c52718 ["CALL", null, ["callee:00c5272c:8"]]
~~~


<a id="compare-ac444373b3284855b50f00e7cf38dffb"></a>

### [`00c53100`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53100.md) → [`00c5319c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c5319c.md) FUN_00c5319c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00c52948`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c52948.md) [`00c52ee4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c52ee4.md) [`00c532a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c532a8.md) · 呼出先 1件 [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 3件 [`00c529e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c529e4.md) [`00c52f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c52f80.md) [`00c53344`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53344.md) · 呼出先 1件 [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c532a0 ["INT_ADD", "register:40f0:8", ["const:c532a0:8", "const:4:8"]]
- 00c532a0 ["CALL", null, ["callee:00c5b210:8"]]
+ 00c5333c ["INT_ADD", "register:40f0:8", ["const:c5333c:8", "const:4:8"]]
+ 00c5333c ["CALL", null, ["callee:00c5b210:8"]]
- 00c532a4 ["INT_ADD", "register:40f0:8", ["const:c532a4:8", "const:4:8"]]
- 00c532a4 ["CALL", null, ["callee:00c5b210:8"]]
+ 00c53340 ["INT_ADD", "register:40f0:8", ["const:c53340:8", "const:4:8"]]
+ 00c53340 ["CALL", null, ["callee:00c5b210:8"]]
~~~


<a id="compare-1044d68ec0d978e41c4019aece749670"></a>

### [`00c53d30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d30.md) → [`00c53dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53dd0.md) FUN_00c53dd0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`00c520a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c520a4.md) [`00c522c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c522c8.md) [`00c52458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c52458.md) · 呼出先 6件 [`00c53e28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53e28.md) [`00c541a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c541a0.md) [`00c54248`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c54248.md) [`00c543b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c543b0.md) [`00c543d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c543d8.md)
- 新版 呼出元 3件 [`00c52140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c52140.md) [`00c52364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c52364.md) [`00c524f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c524f4.md) · 呼出先 6件 [`00c53ec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ec8.md) [`00c54240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54240.md) [`00c542e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c542e8.md) [`00c54450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54450.md) [`00c54478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54478.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c53d4c ["INT_ADD", "register:40f0:8", ["const:c53d4c:8", "const:4:8"]]
- 00c53d4c ["CALL", null, ["callee:00c57ce8:8"]]
+ 00c53dec ["INT_ADD", "register:40f0:8", ["const:c53dec:8", "const:4:8"]]
+ 00c53dec ["CALL", null, ["callee:00c57ce8:8"]]
- 00c53d5c ["INT_ADD", "register:40f0:8", ["const:c53d5c:8", "const:4:8"]]
- 00c53d5c ["CALL", null, ["callee:00c54240:8"]]
+ 00c53dfc ["INT_ADD", "register:40f0:8", ["const:c53dfc:8", "const:4:8"]]
+ 00c53dfc ["CALL", null, ["callee:00c54240:8"]]
- 00c53d64 ["INT_ADD", "register:40f0:8", ["const:c53d64:8", "const:4:8"]]
- 00c53d64 ["CALL", null, ["callee:00c54450:8"]]
+ 00c53e04 ["INT_ADD", "register:40f0:8", ["const:c53e04:8", "const:4:8"]]
+ 00c53e04 ["CALL", null, ["callee:00c54450:8"]]
~~~


<a id="compare-ae6a5f560b3eac19a91329b76c0f544f"></a>

### [`00c53fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53fe0.md) → [`00c54080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54080.md) FUN_00c54080

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) · 呼出先 4件 [`00c541a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c541a0.md) [`00c543c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c543c4.md) [`00c543d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c543d8.md) [`00c54418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c54418.md)
- 新版 呼出元 1件 [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) · 呼出先 4件 [`00c54240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54240.md) [`00c54464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54464.md) [`00c54478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54478.md) [`00c544b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c544b8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c54010 ["INT_ADD", "register:40f0:8", ["const:c54010:8", "const:4:8"]]
- 00c54010 ["CALL", null, ["callee:00c54240:8"]]
+ 00c540b0 ["INT_ADD", "register:40f0:8", ["const:c540b0:8", "const:4:8"]]
+ 00c540b0 ["CALL", null, ["callee:00c54240:8"]]
- 00c54018 ["INT_ADD", "register:40f0:8", ["const:c54018:8", "const:4:8"]]
- 00c54018 ["CALL", null, ["callee:00c54464:8"]]
+ 00c540b8 ["INT_ADD", "register:40f0:8", ["const:c540b8:8", "const:4:8"]]
+ 00c540b8 ["CALL", null, ["callee:00c54464:8"]]
- 00c5403c ["COPY", "register:0:8", ["register:4098:8"]]
- 00c5403c ["INT_ADD", "register:40f0:8", ["const:c5403c:8", "const:4:8"]]
- 00c5403c ["CALLIND", null, ["register:0:8"]]
+ 00c540dc ["COPY", "register:0:8", ["register:4098:8"]]
+ 00c540dc ["INT_ADD", "register:40f0:8", ["const:c540dc:8", "const:4:8"]]
+ 00c540dc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-76a7549ddba4a2fba86f351fce970cb1"></a>

### [`00c540d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c540d4.md) → [`00c54174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54174.md) FUN_00c54174

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c52948`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c52948.md) · 呼出先 1件 [`00c543d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c543d8.md)
- 新版 呼出元 1件 [`00c529e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c529e4.md) · 呼出先 1件 [`00c54478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54478.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c540e8 ["INT_ADD", "register:40f0:8", ["const:c540e8:8", "const:4:8"]]
- 00c540e8 ["CALL", null, ["callee:00c54478:8"]]
+ 00c54188 ["INT_ADD", "register:40f0:8", ["const:c54188:8", "const:4:8"]]
+ 00c54188 ["CALL", null, ["callee:00c54478:8"]]
~~~


<a id="compare-427117de3b3de875a146e573f2c5f0b6"></a>

### [`00c54108`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c54108.md) → [`00c541a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c541a8.md) FUN_00c541a8

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c52948`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c52948.md) · 呼出先 1件 [`00c543d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c543d8.md)
- 新版 呼出元 1件 [`00c529e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c529e4.md) · 呼出先 1件 [`00c54478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54478.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c5411c ["INT_ADD", "register:40f0:8", ["const:c5411c:8", "const:4:8"]]
- 00c5411c ["CALL", null, ["callee:00c54478:8"]]
+ 00c541bc ["INT_ADD", "register:40f0:8", ["const:c541bc:8", "const:4:8"]]
+ 00c541bc ["CALL", null, ["callee:00c54478:8"]]
~~~


<a id="compare-0c6ee6b3e8513b421cd6e8c14c05b579"></a>

### [`00c54160`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c54160.md) → [`00c54200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54200.md) FUN_00c54200

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c52948`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c52/00c52948.md) · 呼出先 1件 [`00c54248`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c54248.md)
- 新版 呼出元 1件 [`00c529e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c52/00c529e4.md) · 呼出先 1件 [`00c542e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c542e8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c54178 ["INT_ADD", "register:40f0:8", ["const:c54178:8", "const:4:8"]]
- 00c54178 ["CALL", null, ["callee:00c542e8:8"]]
+ 00c54218 ["INT_ADD", "register:40f0:8", ["const:c54218:8", "const:4:8"]]
+ 00c54218 ["CALL", null, ["callee:00c542e8:8"]]
~~~


<a id="compare-e54c3cc1e5af9352e1e29cdd31ba0a4d"></a>

### [`00c54248`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c54248.md) → [`00c542e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c542e8.md) FUN_00c542e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`00c53d30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d30.md) [`00c53e28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53e28.md) [`00c54160`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c54160.md) · 呼出先 0件 
- 新版 呼出元 3件 [`00c53dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53dd0.md) [`00c53ec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ec8.md) [`00c54200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54200.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c54270 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c54270 ["INT_ADD", "register:40f0:8", ["const:c54270:8", "const:4:8"]]
- 00c54270 ["CALLIND", null, ["register:0:8"]]
+ 00c54310 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c54310 ["INT_ADD", "register:40f0:8", ["const:c54310:8", "const:4:8"]]
+ 00c54310 ["CALLIND", null, ["register:0:8"]]
- 00c54288 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c54288 ["INT_ADD", "register:40f0:8", ["const:c54288:8", "const:4:8"]]
- 00c54288 ["CALLIND", null, ["register:0:8"]]
+ 00c54328 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c54328 ["INT_ADD", "register:40f0:8", ["const:c54328:8", "const:4:8"]]
+ 00c54328 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-1979dafff0a93663805771dd3439ef36"></a>

### [`00c542c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c542c4.md) → [`00c54364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54364.md) FUN_00c54364

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c54158`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c54158.md) [`00c54190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c54190.md) · 呼出先 0件 
- 新版 呼出元 2件 [`00c541f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c541f8.md) [`00c54230`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54230.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c542f0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c542f0 ["INT_ADD", "register:40f0:8", ["const:c542f0:8", "const:4:8"]]
- 00c542f0 ["CALLIND", null, ["register:0:8"]]
+ 00c54390 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c54390 ["INT_ADD", "register:40f0:8", ["const:c54390:8", "const:4:8"]]
+ 00c54390 ["CALLIND", null, ["register:0:8"]]
- 00c5430c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c5430c ["INT_ADD", "register:40f0:8", ["const:c5430c:8", "const:4:8"]]
- 00c5430c ["CALLIND", null, ["register:0:8"]]
+ 00c543ac ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c543ac ["INT_ADD", "register:40f0:8", ["const:c543ac:8", "const:4:8"]]
+ 00c543ac ["CALLIND", null, ["register:0:8"]]
- 00c54328 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c54328 ["INT_ADD", "register:40f0:8", ["const:c54328:8", "const:4:8"]]
- 00c54328 ["CALLIND", null, ["register:0:8"]]
+ 00c543c8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c543c8 ["INT_ADD", "register:40f0:8", ["const:c543c8:8", "const:4:8"]]
+ 00c543c8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8258338ae72076b8aeca38ec13b960c5"></a>

### [`00c543d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c543d8.md) → [`00c54478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54478.md) FUN_00c54478

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 5件 [`00c53d30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d30.md) [`00c53e28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53e28.md) [`00c53fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53fe0.md) [`00c540d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c540d4.md) [`00c54108`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c54108.md) · 呼出先 0件 
- 新版 呼出元 5件 [`00c53dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53dd0.md) [`00c53ec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ec8.md) [`00c54080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54080.md) [`00c54174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54174.md) [`00c541a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c541a8.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c543f4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c543f4 ["INT_ADD", "register:40f0:8", ["const:c543f4:8", "const:4:8"]]
- 00c543f4 ["CALLIND", null, ["register:0:8"]]
+ 00c54494 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c54494 ["INT_ADD", "register:40f0:8", ["const:c54494:8", "const:4:8"]]
+ 00c54494 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-14498d10055dbd008a8cab5b7123b541"></a>

### [`00c54418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c54418.md) → [`00c544b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c544b8.md) FUN_00c544b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c53e28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53e28.md) [`00c53fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53fe0.md) · 呼出先 0件 
- 新版 呼出元 2件 [`00c53ec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ec8.md) [`00c54080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54080.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c5442c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c5442c ["INT_ADD", "register:40f0:8", ["const:c5442c:8", "const:4:8"]]
- 00c5442c ["CALLIND", null, ["register:0:8"]]
+ 00c544cc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c544cc ["INT_ADD", "register:40f0:8", ["const:c544cc:8", "const:4:8"]]
+ 00c544cc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e03f98c8863b677831898106428d16d9"></a>

### [`00c54af0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c54af0.md) → [`00c54b90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54b90.md) FUN_00c54b90

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c54eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c54eb0.md) [`00c54fd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c54fd0.md) [`00c58090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58090.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54f50.md) [`00c55070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c55/00c55070.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c54b34 ["INT_ADD", "register:40f0:8", ["const:c54b34:8", "const:4:8"]]
- 00c54b34 ["CALL", null, ["callee:00c58160:8"]]
+ 00c54bd4 ["INT_ADD", "register:40f0:8", ["const:c54bd4:8", "const:4:8"]]
+ 00c54bd4 ["CALL", null, ["callee:00c58160:8"]]
- 00c54b40 ["INT_ADD", "register:40f0:8", ["const:c54b40:8", "const:4:8"]]
- 00c54b40 ["CALL", null, ["callee:00c54f50:8"]]
+ 00c54be0 ["INT_ADD", "register:40f0:8", ["const:c54be0:8", "const:4:8"]]
+ 00c54be0 ["CALL", null, ["callee:00c54f50:8"]]
- 00c54b78 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c54b78 ["INT_ADD", "register:40f0:8", ["const:c54b78:8", "const:4:8"]]
- 00c54b78 ["CALLIND", null, ["register:0:8"]]
+ 00c54c18 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c54c18 ["INT_ADD", "register:40f0:8", ["const:c54c18:8", "const:4:8"]]
+ 00c54c18 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7e5076697fa2b03aa00cdf37132e82ee"></a>

### [`00c5750c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c5750c.md) → [`00c575ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c575ac.md) FUN_00c575ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c54c68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c54c68.md) · 呼出先 1件 [`00c5763c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c5763c.md)
- 新版 呼出元 1件 [`00c54d08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54d08.md) · 呼出先 1件 [`00c576dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c576dc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c5761c ["INT_ADD", "register:40f0:8", ["const:c5761c:8", "const:4:8"]]
- 00c5761c ["CALL", null, ["callee:00c576dc:8"]]
+ 00c576bc ["INT_ADD", "register:40f0:8", ["const:c576bc:8", "const:4:8"]]
+ 00c576bc ["CALL", null, ["callee:00c576dc:8"]]
~~~


<a id="compare-e2bd4dafc9f477f7856a4dc175bfca2b"></a>

### [`00c5775c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c5775c.md) → [`00c577fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c577fc.md) FUN_00c577fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c57238`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57238.md) · 呼出先 3件 [`00c545d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c545d0.md) [`00c56320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c56/00c56320.md) [`00c566ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c56/00c566ac.md)
- 新版 呼出元 1件 [`00c572d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c572d8.md) · 呼出先 3件 [`00c54670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c54670.md) [`00c563c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c56/00c563c0.md) [`00c5674c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c56/00c5674c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c57814 ["INT_ADD", "register:40f0:8", ["const:c57814:8", "const:4:8"]]
- 00c57814 ["CALL", null, ["callee:00c54670:8"]]
+ 00c578b4 ["INT_ADD", "register:40f0:8", ["const:c578b4:8", "const:4:8"]]
+ 00c578b4 ["CALL", null, ["callee:00c54670:8"]]
- 00c5783c ["INT_ADD", "register:40f0:8", ["const:c5783c:8", "const:4:8"]]
- 00c5783c ["CALL", null, ["callee:00c563c0:8"]]
+ 00c578dc ["INT_ADD", "register:40f0:8", ["const:c578dc:8", "const:4:8"]]
+ 00c578dc ["CALL", null, ["callee:00c563c0:8"]]
- 00c5785c ["INT_ADD", "register:40f0:8", ["const:c5785c:8", "const:4:8"]]
- 00c5785c ["CALL", null, ["callee:00c563c0:8"]]
+ 00c578fc ["INT_ADD", "register:40f0:8", ["const:c578fc:8", "const:4:8"]]
+ 00c578fc ["CALL", null, ["callee:00c563c0:8"]]
~~~


<a id="compare-e12ed4f1a790ace8b2a2ce95c4301f8a"></a>

### [`00c57924`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57924.md) → [`00c579c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c579c4.md) FUN_00c579c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c57238`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57238.md) · 呼出先 4件 [`00c54440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c54/00c54440.md) [`00c56320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c56/00c56320.md) [`00c5763c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c5763c.md) [`00c57a8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57a8c.md)
- 新版 呼出元 1件 [`00c572d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c572d8.md) · 呼出先 4件 [`00c544e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c54/00c544e0.md) [`00c563c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c56/00c563c0.md) [`00c576dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c576dc.md) [`00c57b2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57b2c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c5796c ["INT_ADD", "register:40f0:8", ["const:c5796c:8", "const:4:8"]]
- 00c5796c ["CALL", null, ["callee:00c576dc:8"]]
+ 00c57a0c ["INT_ADD", "register:40f0:8", ["const:c57a0c:8", "const:4:8"]]
+ 00c57a0c ["CALL", null, ["callee:00c576dc:8"]]
- 00c57984 ["INT_ADD", "register:40f0:8", ["const:c57984:8", "const:4:8"]]
- 00c57984 ["CALL", null, ["callee:00c57b2c:8"]]
+ 00c57a24 ["INT_ADD", "register:40f0:8", ["const:c57a24:8", "const:4:8"]]
+ 00c57a24 ["CALL", null, ["callee:00c57b2c:8"]]
- 00c579c8 ["INT_ADD", "register:40f0:8", ["const:c579c8:8", "const:4:8"]]
- 00c579c8 ["CALL", null, ["callee:00c563c0:8"]]
+ 00c57a68 ["INT_ADD", "register:40f0:8", ["const:c57a68:8", "const:4:8"]]
+ 00c57a68 ["CALL", null, ["callee:00c563c0:8"]]
~~~


