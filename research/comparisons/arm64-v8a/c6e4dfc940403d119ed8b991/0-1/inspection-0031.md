# v16.0.1 → v16.0.2 · 要調査の変更候補 (31)

[一覧の目次](README.md)

<a id="compare-bfad16f6210ae25bc1e8492866a561ae"></a>

### [`00935cf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00935/00935cf8.md) → [`00935d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00935/00935d4c.md) FUN_00935d4c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`007320c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00732/007320c8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00732120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00732/00732120.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00935d54 ["INT_ADD", "register:40f0:8", ["const:935d54:8", "const:4:8"]]
- 00935d54 ["CALL", null, ["callee:00c53d70:8"]]
+ 00935da8 ["INT_ADD", "register:40f0:8", ["const:935da8:8", "const:4:8"]]
+ 00935da8 ["CALL", null, ["callee:00c53d70:8"]]
- 00935db8 ["INT_ADD", "register:40f0:8", ["const:935db8:8", "const:4:8"]]
- 00935db8 ["CALL", null, ["callee:00732120:8"]]
+ 00935e0c ["INT_ADD", "register:40f0:8", ["const:935e0c:8", "const:4:8"]]
+ 00935e0c ["CALL", null, ["callee:00732120:8"]]
- 00935dc8 ["INT_ADD", "register:40f0:8", ["const:935dc8:8", "const:4:8"]]
- 00935dc8 ["CALL", null, ["callee:00c53da0:8"]]
+ 00935e1c ["INT_ADD", "register:40f0:8", ["const:935e1c:8", "const:4:8"]]
+ 00935e1c ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-cd64dd0ae83af4cf3a6767835210c147"></a>

### [`00935e3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00935/00935e3c.md) → [`00935e90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00935/00935e90.md) FUN_00935e90

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009b88d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b8/009b88d8.md) · 呼出先 2件 [`0057c654`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0057c/0057c654.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`009b892c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b892c.md) · 呼出先 2件 [`0057c694`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0057c/0057c694.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00935e78 ["COPY", "register:0:8", ["register:4048:8"]]
- 00935e78 ["INT_ADD", "register:40f0:8", ["const:935e78:8", "const:4:8"]]
- 00935e78 ["CALLIND", null, ["register:0:8"]]
+ 00935ecc ["COPY", "register:0:8", ["register:4048:8"]]
+ 00935ecc ["INT_ADD", "register:40f0:8", ["const:935ecc:8", "const:4:8"]]
+ 00935ecc ["CALLIND", null, ["register:0:8"]]
- 00935ea4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00935ea4 ["INT_ADD", "register:40f0:8", ["const:935ea4:8", "const:4:8"]]
- 00935ea4 ["CALLIND", null, ["register:0:8"]]
+ 00935ef8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00935ef8 ["INT_ADD", "register:40f0:8", ["const:935ef8:8", "const:4:8"]]
+ 00935ef8 ["CALLIND", null, ["register:0:8"]]
- 00935eb4 ["INT_ADD", "register:40f0:8", ["const:935eb4:8", "const:4:8"]]
- 00935eb4 ["CALL", null, ["callee:0057c694:8"]]
+ 00935f08 ["INT_ADD", "register:40f0:8", ["const:935f08:8", "const:4:8"]]
+ 00935f08 ["CALL", null, ["callee:0057c694:8"]]
~~~


<a id="compare-baadf55aa535feb54a7ff60e31c619e0"></a>

### [`00937fe4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00937/00937fe4.md) → [`00938038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00938/00938038.md) FUN_00938038

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a2b2e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2b/00a2b2e8.md) · 呼出先 2件 [`00480b90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480b90.md) [`00480be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480be8.md)
- 新版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 2件 [`00480bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480bd0.md) [`00480c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480c28.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093800c ["INT_ADD", "register:40f0:8", ["const:93800c:8", "const:4:8"]]
- 0093800c ["CALL", null, ["callee:00480bd0:8"]]
+ 00938060 ["INT_ADD", "register:40f0:8", ["const:938060:8", "const:4:8"]]
+ 00938060 ["CALL", null, ["callee:00480bd0:8"]]
- 00938048 ["INT_ADD", "register:40f0:8", ["const:938048:8", "const:4:8"]]
- 00938048 ["CALL", null, ["callee:00480c28:8"]]
+ 0093809c ["INT_ADD", "register:40f0:8", ["const:93809c:8", "const:4:8"]]
+ 0093809c ["CALL", null, ["callee:00480c28:8"]]
- 0093805c ["INT_ADD", "register:40f0:8", ["const:93805c:8", "const:4:8"]]
- 0093805c ["CALL", null, ["callee:00480bd0:8"]]
+ 009380b0 ["INT_ADD", "register:40f0:8", ["const:9380b0:8", "const:4:8"]]
+ 009380b0 ["CALL", null, ["callee:00480bd0:8"]]
~~~


<a id="compare-a1e04a717906ec122e4881a397a69725"></a>

### [`00938500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00938/00938500.md) → [`00938554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00938/00938554.md) FUN_00938554

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`009380b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00938/009380b0.md) [`00938774`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00938/00938774.md) · 呼出先 3件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58450`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58450.md)
- 新版 呼出元 2件 [`00938104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00938/00938104.md) [`009387c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00938/009387c8.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58520.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009385a0 ["INT_ADD", "register:40f0:8", ["const:9385a0:8", "const:4:8"]]
- 009385a0 ["CALL", null, ["callee:00c57f60:8"]]
+ 009385f4 ["INT_ADD", "register:40f0:8", ["const:9385f4:8", "const:4:8"]]
+ 009385f4 ["CALL", null, ["callee:00c57f60:8"]]
- 009385dc ["INT_ADD", "register:40f0:8", ["const:9385dc:8", "const:4:8"]]
- 009385dc ["CALL", null, ["callee:0043bbe4:8"]]
+ 00938630 ["INT_ADD", "register:40f0:8", ["const:938630:8", "const:4:8"]]
+ 00938630 ["CALL", null, ["callee:0043bbe4:8"]]
- 00938644 ["INT_ADD", "register:40f0:8", ["const:938644:8", "const:4:8"]]
- 00938644 ["CALL", null, ["callee:00c57f60:8"]]
+ 00938698 ["INT_ADD", "register:40f0:8", ["const:938698:8", "const:4:8"]]
+ 00938698 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-f6c6316e1131f9e037ce023e871b3d7a"></a>

### [`0093a178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093a/0093a178.md) → [`0093a1cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093a/0093a1cc.md) FUN_0093a1cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093a194 ["INT_ADD", "register:40f0:8", ["const:93a194:8", "const:4:8"]]
- 0093a194 ["CALL", null, ["callee:00c57f80:8"]]
+ 0093a1e8 ["INT_ADD", "register:40f0:8", ["const:93a1e8:8", "const:4:8"]]
+ 0093a1e8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-43d2f0ee85a15c870b6dab8f5699d43c"></a>

### [`0093a1bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093a/0093a1bc.md) → [`0093a210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093a/0093a210.md) FUN_0093a210

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0084e59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0084e/0084e59c.md) · 呼出先 2件 [`005c3e7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c3/005c3e7c.md) [`00676a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/00676a60.md)
- 新版 呼出元 1件 [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) · 呼出先 2件 [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093a1d8 ["INT_ADD", "register:40f0:8", ["const:93a1d8:8", "const:4:8"]]
- 0093a1d8 ["CALL", null, ["callee:005c3ebc:8"]]
+ 0093a22c ["INT_ADD", "register:40f0:8", ["const:93a22c:8", "const:4:8"]]
+ 0093a22c ["CALL", null, ["callee:005c3ebc:8"]]
- 0093a1f0 ["INT_ADD", "register:40f0:8", ["const:93a1f0:8", "const:4:8"]]
- 0093a1f0 ["CALL", null, ["callee:00676aa0:8"]]
+ 0093a244 ["INT_ADD", "register:40f0:8", ["const:93a244:8", "const:4:8"]]
+ 0093a244 ["CALL", null, ["callee:00676aa0:8"]]
~~~


<a id="compare-da8e3024789d0b9a9d1ab0a793fd3dee"></a>

### [`0093a208`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093a/0093a208.md) → [`0093a25c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093a/0093a25c.md) FUN_0093a25c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a261bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a26/00a261bc.md) · 呼出先 9件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`004801d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004801d8.md) [`005c3e7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c3/005c3e7c.md)
- 新版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 9件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00480218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480218.md) [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093a240 ["INT_ADD", "register:40f0:8", ["const:93a240:8", "const:4:8"]]
- 0093a240 ["CALL", null, ["callee:005c3ebc:8"]]
+ 0093a294 ["INT_ADD", "register:40f0:8", ["const:93a294:8", "const:4:8"]]
+ 0093a294 ["CALL", null, ["callee:005c3ebc:8"]]
- 0093a250 ["INT_ADD", "register:40f0:8", ["const:93a250:8", "const:4:8"]]
- 0093a250 ["CALL", null, ["callee:00480218:8"]]
+ 0093a2a4 ["INT_ADD", "register:40f0:8", ["const:93a2a4:8", "const:4:8"]]
+ 0093a2a4 ["CALL", null, ["callee:00480218:8"]]
- 0093a284 ["INT_ADD", "register:40f0:8", ["const:93a284:8", "const:4:8"]]
- 0093a284 ["CALL", null, ["callee:00480218:8"]]
+ 0093a2d8 ["INT_ADD", "register:40f0:8", ["const:93a2d8:8", "const:4:8"]]
+ 0093a2d8 ["CALL", null, ["callee:00480218:8"]]
~~~


<a id="compare-509c8b0d791038ae7f060a5a39c295ad"></a>

### [`0093a540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093a/0093a540.md) → [`0093a594`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093a/0093a594.md) FUN_0093a594

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a2b2e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2b/00a2b2e8.md) · 呼出先 6件 [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00480be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480be8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 6件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00480c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480c28.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093a584 ["INT_ADD", "register:40f0:8", ["const:93a584:8", "const:4:8"]]
- 0093a584 ["CALL", null, ["callee:00480c28:8"]]
+ 0093a5d8 ["INT_ADD", "register:40f0:8", ["const:93a5d8:8", "const:4:8"]]
+ 0093a5d8 ["CALL", null, ["callee:00480c28:8"]]
- 0093a5d0 ["INT_ADD", "register:40f0:8", ["const:93a5d0:8", "const:4:8"]]
- 0093a5d0 ["CALL", null, ["callee:00c57f60:8"]]
+ 0093a624 ["INT_ADD", "register:40f0:8", ["const:93a624:8", "const:4:8"]]
+ 0093a624 ["CALL", null, ["callee:00c57f60:8"]]
- 0093a5e4 ["INT_ADD", "register:40f0:8", ["const:93a5e4:8", "const:4:8"]]
- 0093a5e4 ["CALL", null, ["callee:00c580d0:8"]]
+ 0093a638 ["INT_ADD", "register:40f0:8", ["const:93a638:8", "const:4:8"]]
+ 0093a638 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-cf7acc20c5e32a5b136a9e801c40ee24"></a>

### [`0093a7d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093a/0093a7d8.md) → [`0093a82c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093a/0093a82c.md) FUN_0093a82c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`00605254`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00605/00605254.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 2件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00605294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/00605294.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093a870 ["INT_ADD", "register:40f0:8", ["const:93a870:8", "const:4:8"]]
- 0093a870 ["CALL", null, ["callee:00c57f60:8"]]
+ 0093a8c4 ["INT_ADD", "register:40f0:8", ["const:93a8c4:8", "const:4:8"]]
+ 0093a8c4 ["CALL", null, ["callee:00c57f60:8"]]
- 0093a8b0 ["INT_ADD", "register:40f0:8", ["const:93a8b0:8", "const:4:8"]]
- 0093a8b0 ["CALL", null, ["callee:0043bbe4:8"]]
+ 0093a904 ["INT_ADD", "register:40f0:8", ["const:93a904:8", "const:4:8"]]
+ 0093a904 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-668b6d7c63f977bcd826191b70844baa"></a>

### [`0093a8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093a/0093a8e0.md) → [`0093a934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093a/0093a934.md) FUN_0093a934

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00606ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00606/00606ae4.md) [`0061452c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00614/0061452c.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 2件 [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`0061456c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00614/0061456c.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093a958 ["INT_ADD", "register:40f0:8", ["const:93a958:8", "const:4:8"]]
- 0093a958 ["CALL", null, ["callee:0043bbe4:8"]]
+ 0093a9ac ["INT_ADD", "register:40f0:8", ["const:93a9ac:8", "const:4:8"]]
+ 0093a9ac ["CALL", null, ["callee:0043bbe4:8"]]
- 0093a9cc ["INT_ADD", "register:40f0:8", ["const:93a9cc:8", "const:4:8"]]
- 0093a9cc ["CALL", null, ["callee:00c57f60:8"]]
+ 0093aa20 ["INT_ADD", "register:40f0:8", ["const:93aa20:8", "const:4:8"]]
+ 0093aa20 ["CALL", null, ["callee:00c57f60:8"]]
- 0093aa0c ["INT_ADD", "register:40f0:8", ["const:93aa0c:8", "const:4:8"]]
- 0093aa0c ["CALL", null, ["callee:0043bbe4:8"]]
+ 0093aa60 ["INT_ADD", "register:40f0:8", ["const:93aa60:8", "const:4:8"]]
+ 0093aa60 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-91ea6a0d823142690a0e6775f3d2d4ac"></a>

### [`0093ab84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093a/0093ab84.md) → [`0093abd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093a/0093abd8.md) FUN_0093abd8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`00605254`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00605/00605254.md) [`0093b770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093b/0093b770.md) · 呼出先 3件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58450`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58450.md)
- 新版 呼出元 3件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00605294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/00605294.md) [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58520.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093ac24 ["INT_ADD", "register:40f0:8", ["const:93ac24:8", "const:4:8"]]
- 0093ac24 ["CALL", null, ["callee:00c57f60:8"]]
+ 0093ac78 ["INT_ADD", "register:40f0:8", ["const:93ac78:8", "const:4:8"]]
+ 0093ac78 ["CALL", null, ["callee:00c57f60:8"]]
- 0093ac60 ["INT_ADD", "register:40f0:8", ["const:93ac60:8", "const:4:8"]]
- 0093ac60 ["CALL", null, ["callee:0043bbe4:8"]]
+ 0093acb4 ["INT_ADD", "register:40f0:8", ["const:93acb4:8", "const:4:8"]]
+ 0093acb4 ["CALL", null, ["callee:0043bbe4:8"]]
- 0093acc8 ["INT_ADD", "register:40f0:8", ["const:93acc8:8", "const:4:8"]]
- 0093acc8 ["CALL", null, ["callee:00c57f60:8"]]
+ 0093ad1c ["INT_ADD", "register:40f0:8", ["const:93ad1c:8", "const:4:8"]]
+ 0093ad1c ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-83033be1400549f73c4aba5cccdccf4d"></a>

### [`0093adf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093a/0093adf0.md) → [`0093ae44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093a/0093ae44.md) FUN_0093ae44

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`00605254`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00605/00605254.md) · 呼出先 8件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00605294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/00605294.md) · 呼出先 8件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093ae6c ["INT_ADD", "register:40f0:8", ["const:93ae6c:8", "const:4:8"]]
- 0093ae6c ["CALL", null, ["callee:00c57f60:8"]]
+ 0093aec0 ["INT_ADD", "register:40f0:8", ["const:93aec0:8", "const:4:8"]]
+ 0093aec0 ["CALL", null, ["callee:00c57f60:8"]]
- 0093aea8 ["INT_ADD", "register:40f0:8", ["const:93aea8:8", "const:4:8"]]
- 0093aea8 ["CALL", null, ["callee:0043bbe4:8"]]
+ 0093aefc ["INT_ADD", "register:40f0:8", ["const:93aefc:8", "const:4:8"]]
+ 0093aefc ["CALL", null, ["callee:0043bbe4:8"]]
- 0093af00 ["INT_ADD", "register:40f0:8", ["const:93af00:8", "const:4:8"]]
- 0093af00 ["CALL", null, ["callee:00c57f60:8"]]
+ 0093af54 ["INT_ADD", "register:40f0:8", ["const:93af54:8", "const:4:8"]]
+ 0093af54 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-2c4ef4fe0e6878f0449770748295bda5"></a>

### [`0093b460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093b/0093b460.md) → [`0093b4b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b4b4.md) FUN_0093b4b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009d0320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d0/009d0320.md) · 呼出先 6件 [`00494610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00494/00494610.md) [`00719738`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00719/00719738.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00a694b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a69/00a694b0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) · 呼出先 6件 [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`00719790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00719/00719790.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00a69520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a69/00a69520.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093b4d0 ["INT_ADD", "register:40f0:8", ["const:93b4d0:8", "const:4:8"]]
- 0093b4d0 ["CALL", null, ["callee:00719790:8"]]
+ 0093b524 ["INT_ADD", "register:40f0:8", ["const:93b524:8", "const:4:8"]]
+ 0093b524 ["CALL", null, ["callee:00719790:8"]]
- 0093b564 ["INT_ADD", "register:40f0:8", ["const:93b564:8", "const:4:8"]]
- 0093b564 ["CALL", null, ["callee:00494650:8"]]
+ 0093b5b8 ["INT_ADD", "register:40f0:8", ["const:93b5b8:8", "const:4:8"]]
+ 0093b5b8 ["CALL", null, ["callee:00494650:8"]]
- 0093b56c ["INT_ADD", "register:40f0:8", ["const:93b56c:8", "const:4:8"]]
- 0093b56c ["CALL", null, ["callee:00c57f80:8"]]
+ 0093b5c0 ["INT_ADD", "register:40f0:8", ["const:93b5c0:8", "const:4:8"]]
+ 0093b5c0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-eb99b49706990ad2035cb7f77b17e0ad"></a>

### [`0093b5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093b/0093b5e0.md) → [`0093b634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b634.md) FUN_0093b634

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093b644 ["INT_ADD", "register:40f0:8", ["const:93b644:8", "const:4:8"]]
- 0093b644 ["CALL", null, ["callee:00c57f60:8"]]
+ 0093b698 ["INT_ADD", "register:40f0:8", ["const:93b698:8", "const:4:8"]]
+ 0093b698 ["CALL", null, ["callee:00c57f60:8"]]
- 0093b67c ["INT_ADD", "register:40f0:8", ["const:93b67c:8", "const:4:8"]]
- 0093b67c ["CALL", null, ["callee:0043bbe4:8"]]
+ 0093b6d0 ["INT_ADD", "register:40f0:8", ["const:93b6d0:8", "const:4:8"]]
+ 0093b6d0 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-93bfee2b63477f8a69d75cc7328771c5"></a>

### [`0093b6a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093b/0093b6a4.md) → [`0093b6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b6f8.md) FUN_0093b6f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093b70c ["INT_ADD", "register:40f0:8", ["const:93b70c:8", "const:4:8"]]
- 0093b70c ["CALL", null, ["callee:00c57f60:8"]]
+ 0093b760 ["INT_ADD", "register:40f0:8", ["const:93b760:8", "const:4:8"]]
+ 0093b760 ["CALL", null, ["callee:00c57f60:8"]]
- 0093b744 ["INT_ADD", "register:40f0:8", ["const:93b744:8", "const:4:8"]]
- 0093b744 ["CALL", null, ["callee:0043bbe4:8"]]
+ 0093b798 ["INT_ADD", "register:40f0:8", ["const:93b798:8", "const:4:8"]]
+ 0093b798 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-4ea0b1a6a6fbe304ef3ba8c66312094f"></a>

### [`0093ee40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093e/0093ee40.md) → [`0093ee94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093e/0093ee94.md) FUN_0093ee94

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0093b770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093b/0093b770.md) [`00ab4d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ab4/00ab4d00.md) · 呼出先 5件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md)
- 新版 呼出元 2件 [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) [`00ab4d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ab4/00ab4d70.md) · 呼出先 5件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093ee64 ["INT_ADD", "register:40f0:8", ["const:93ee64:8", "const:4:8"]]
- 0093ee64 ["CALL", null, ["callee:00c580b0:8"]]
+ 0093eeb8 ["INT_ADD", "register:40f0:8", ["const:93eeb8:8", "const:4:8"]]
+ 0093eeb8 ["CALL", null, ["callee:00c580b0:8"]]
- 0093eeac ["INT_ADD", "register:40f0:8", ["const:93eeac:8", "const:4:8"]]
- 0093eeac ["CALL", null, ["callee:00c57f60:8"]]
+ 0093ef00 ["INT_ADD", "register:40f0:8", ["const:93ef00:8", "const:4:8"]]
+ 0093ef00 ["CALL", null, ["callee:00c57f60:8"]]
- 0093eecc ["INT_ADD", "register:40f0:8", ["const:93eecc:8", "const:4:8"]]
- 0093eecc ["CALL", null, ["callee:00c58010:8"]]
+ 0093ef20 ["INT_ADD", "register:40f0:8", ["const:93ef20:8", "const:4:8"]]
+ 0093ef20 ["CALL", null, ["callee:00c58010:8"]]
~~~


<a id="compare-9551df7adb20c16f46bb0c682841f937"></a>

### [`0093ef34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093e/0093ef34.md) → [`0093ef88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093e/0093ef88.md) FUN_0093ef88

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0093b770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093b/0093b770.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093efac ["INT_ADD", "register:40f0:8", ["const:93efac:8", "const:4:8"]]
- 0093efac ["CALL", null, ["callee:00c57f80:8"]]
+ 0093f000 ["INT_ADD", "register:40f0:8", ["const:93f000:8", "const:4:8"]]
+ 0093f000 ["CALL", null, ["callee:00c57f80:8"]]
- 0093efbc ["INT_ADD", "register:40f0:8", ["const:93efbc:8", "const:4:8"]]
- 0093efbc ["CALL", null, ["callee:00c57f80:8"]]
+ 0093f010 ["INT_ADD", "register:40f0:8", ["const:93f010:8", "const:4:8"]]
+ 0093f010 ["CALL", null, ["callee:00c57f80:8"]]
- 0093efd0 ["INT_ADD", "register:40f0:8", ["const:93efd0:8", "const:4:8"]]
- 0093efd0 ["CALL", null, ["callee:00c57f80:8"]]
+ 0093f024 ["INT_ADD", "register:40f0:8", ["const:93f024:8", "const:4:8"]]
+ 0093f024 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-70507a09fb83229af44c395671bf5be2"></a>

### [`0093f01c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093f/0093f01c.md) → [`0093f070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f070.md) FUN_0093f070

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093f064 ["INT_ADD", "register:40f0:8", ["const:93f064:8", "const:4:8"]]
- 0093f064 ["CALL", null, ["callee:00c57f80:8"]]
+ 0093f0b8 ["INT_ADD", "register:40f0:8", ["const:93f0b8:8", "const:4:8"]]
+ 0093f0b8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-a6c4b141cc3d1d6bc68b942fd9e19305"></a>

### [`0093f094`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093f/0093f094.md) → [`0093f0e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f0e8.md) FUN_0093f0e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0093b770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093b/0093b770.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093f0e0 ["INT_ADD", "register:40f0:8", ["const:93f0e0:8", "const:4:8"]]
- 0093f0e0 ["CALL", null, ["callee:00c57f80:8"]]
+ 0093f134 ["INT_ADD", "register:40f0:8", ["const:93f134:8", "const:4:8"]]
+ 0093f134 ["CALL", null, ["callee:00c57f80:8"]]
- 0093f0f0 ["INT_ADD", "register:40f0:8", ["const:93f0f0:8", "const:4:8"]]
- 0093f0f0 ["CALL", null, ["callee:00c57f80:8"]]
+ 0093f144 ["INT_ADD", "register:40f0:8", ["const:93f144:8", "const:4:8"]]
+ 0093f144 ["CALL", null, ["callee:00c57f80:8"]]
- 0093f100 ["INT_ADD", "register:40f0:8", ["const:93f100:8", "const:4:8"]]
- 0093f100 ["CALL", null, ["callee:00c57f80:8"]]
+ 0093f154 ["INT_ADD", "register:40f0:8", ["const:93f154:8", "const:4:8"]]
+ 0093f154 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-8675cb16fef6eafde49e0e29c268acc8"></a>

### [`0093f1d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093f/0093f1d8.md) → [`0093f22c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f22c.md) FUN_0093f22c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009390b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00939/009390b4.md) · 呼出先 4件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0093f3b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093f/0093f3b0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00939108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00939/00939108.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0093f404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f404.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0093f278 ["INT_ADD", "register:40f0:8", ["const:93f278:8", "const:4:8"]]
- 0093f278 ["CALL", null, ["callee:00c57f60:8"]]
+ 0093f2cc ["INT_ADD", "register:40f0:8", ["const:93f2cc:8", "const:4:8"]]
+ 0093f2cc ["CALL", null, ["callee:00c57f60:8"]]
- 0093f35c ["INT_ADD", "register:40f0:8", ["const:93f35c:8", "const:4:8"]]
- 0093f35c ["CALL", null, ["callee:00c57f80:8"]]
+ 0093f3b0 ["INT_ADD", "register:40f0:8", ["const:93f3b0:8", "const:4:8"]]
+ 0093f3b0 ["CALL", null, ["callee:00c57f80:8"]]
- 0093f36c ["INT_ADD", "register:40f0:8", ["const:93f36c:8", "const:4:8"]]
- 0093f36c ["CALL", null, ["callee:00c57f80:8"]]
+ 0093f3c0 ["INT_ADD", "register:40f0:8", ["const:93f3c0:8", "const:4:8"]]
+ 0093f3c0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-7290667d65f808c0b2b95e5bec9f8a6a"></a>

### [`00943998`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00943/00943998.md) → [`009439ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00943/009439ec.md) FUN_009439ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 1件 [`0093f3c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093f/0093f3c4.md) · 呼出先 7件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0094270c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00942/0094270c.md) [`0094288c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00942/0094288c.md) [`00942f94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00942/00942f94.md) [`00944178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00944/00944178.md)
- 新版 呼出元 1件 [`0093f418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f418.md) · 呼出先 7件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00942760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/00942760.md) [`009428e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/009428e0.md) [`00942fe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/00942fe8.md) [`009441cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00944/009441cc.md)

変更の種類 constant, local_def_use, operands_and_dependencies, store_value

命令の説明率　旧版 99.78% / 新版 99.78%

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00943fc8",
      "incomplete_value": true,
      "site": "00943fc8",
      "value": [
        "live",
        "register:4048:8"
      ]
    },
    "old": {
      "definition_site": "00943f74",
      "incomplete_value": true,
      "site": "00943f74",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:4048:8"
              ],
              [
                "leaf",
                "const:10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 80,
    "slot": 2
  }
]
~~~


~~~diff
- 00943a28 ["INT_ADD", "register:40f0:8", ["const:943a28:8", "const:4:8"]]
- 00943a28 ["CALL", null, ["callee:009428e0:8"]]
+ 00943a7c ["INT_ADD", "register:40f0:8", ["const:943a7c:8", "const:4:8"]]
+ 00943a7c ["CALL", null, ["callee:009428e0:8"]]
- 00943a84 ["INT_ADD", "register:40f0:8", ["const:943a84:8", "const:4:8"]]
- 00943a84 ["CALL", null, ["callee:00942fe8:8"]]
+ 00943ad8 ["INT_ADD", "register:40f0:8", ["const:943ad8:8", "const:4:8"]]
+ 00943ad8 ["CALL", null, ["callee:00942fe8:8"]]
- 00943aa4 ["INT_ADD", "register:40f0:8", ["const:943aa4:8", "const:4:8"]]
- 00943aa4 ["CALL", null, ["callee:00942fe8:8"]]
+ 00943af8 ["INT_ADD", "register:40f0:8", ["const:943af8:8", "const:4:8"]]
+ 00943af8 ["CALL", null, ["callee:00942fe8:8"]]
~~~


<a id="compare-a6fcbc19a6d9d166eb30c998719339be"></a>

### [`00944178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00944/00944178.md) → [`009441cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00944/009441cc.md) FUN_009441cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0093f3c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093f/0093f3c4.md) [`0094288c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00942/0094288c.md) [`00943998`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00943/00943998.md) · 呼出先 5件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0094270c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00942/0094270c.md) [`00942f94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00942/00942f94.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 3件 [`0093f418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f418.md) [`009428e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/009428e0.md) [`009439ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00943/009439ec.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00942760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/00942760.md) [`00942fe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/00942fe8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009441b0 ["INT_ADD", "register:40f0:8", ["const:9441b0:8", "const:4:8"]]
- 009441b0 ["CALL", null, ["callee:00942fe8:8"]]
+ 00944204 ["INT_ADD", "register:40f0:8", ["const:944204:8", "const:4:8"]]
+ 00944204 ["CALL", null, ["callee:00942fe8:8"]]
- 009441f0 ["INT_ADD", "register:40f0:8", ["const:9441f0:8", "const:4:8"]]
- 009441f0 ["CALL", null, ["callee:0043bb60:8"]]
+ 00944244 ["INT_ADD", "register:40f0:8", ["const:944244:8", "const:4:8"]]
+ 00944244 ["CALL", null, ["callee:0043bb60:8"]]
- 00944220 ["INT_ADD", "register:40f0:8", ["const:944220:8", "const:4:8"]]
- 00944220 ["CALL", null, ["callee:0043bb60:8"]]
+ 00944274 ["INT_ADD", "register:40f0:8", ["const:944274:8", "const:4:8"]]
+ 00944274 ["CALL", null, ["callee:0043bb60:8"]]
~~~


<a id="compare-417a06735830b9f150549f18cd648845"></a>

### [`009446d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00944/009446d8.md) → [`0094472c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00944/0094472c.md) FUN_0094472c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0093b770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093b/0093b770.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00944744 ["INT_ADD", "register:40f0:8", ["const:944744:8", "const:4:8"]]
- 00944744 ["CALL", null, ["callee:00c57f80:8"]]
+ 00944798 ["INT_ADD", "register:40f0:8", ["const:944798:8", "const:4:8"]]
+ 00944798 ["CALL", null, ["callee:00c57f80:8"]]
- 00944754 ["INT_ADD", "register:40f0:8", ["const:944754:8", "const:4:8"]]
- 00944754 ["CALL", null, ["callee:00c57f80:8"]]
+ 009447a8 ["INT_ADD", "register:40f0:8", ["const:9447a8:8", "const:4:8"]]
+ 009447a8 ["CALL", null, ["callee:00c57f80:8"]]
- 00944764 ["INT_ADD", "register:40f0:8", ["const:944764:8", "const:4:8"]]
- 00944764 ["CALL", null, ["callee:00c57f80:8"]]
+ 009447b8 ["INT_ADD", "register:40f0:8", ["const:9447b8:8", "const:4:8"]]
+ 009447b8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-340b52f38920ac5aca3fb309d7dc8549"></a>

### [`00944fb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00944/00944fb4.md) → [`00945008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00945/00945008.md) FUN_00945008

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0093b770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093b/0093b770.md) · 呼出先 6件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0046d5a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d5a8.md) [`0053bcb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0053b/0053bcb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) · 呼出先 6件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0046d5e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d5e8.md) [`0053bcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053b/0053bcf0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0094508c ["INT_ADD", "register:40f0:8", ["const:94508c:8", "const:4:8"]]
- 0094508c ["CALL", null, ["callee:0046d5e8:8"]]
+ 009450e0 ["INT_ADD", "register:40f0:8", ["const:9450e0:8", "const:4:8"]]
+ 009450e0 ["CALL", null, ["callee:0046d5e8:8"]]
- 009450a4 ["INT_ADD", "register:40f0:8", ["const:9450a4:8", "const:4:8"]]
- 009450a4 ["CALL", null, ["callee:00c58500:8"]]
+ 009450f8 ["INT_ADD", "register:40f0:8", ["const:9450f8:8", "const:4:8"]]
+ 009450f8 ["CALL", null, ["callee:00c58500:8"]]
- 009450b0 ["INT_ADD", "register:40f0:8", ["const:9450b0:8", "const:4:8"]]
- 009450b0 ["CALL", null, ["callee:00c58500:8"]]
+ 00945104 ["INT_ADD", "register:40f0:8", ["const:945104:8", "const:4:8"]]
+ 00945104 ["CALL", null, ["callee:00c58500:8"]]
~~~


<a id="compare-299520ae921156f2c666a958a2e1b1cf"></a>

### [`00945288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00945/00945288.md) → [`009452dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00945/009452dc.md) FUN_009452dc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0093b770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093b/0093b770.md) [`00945288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00945/00945288.md) · 呼出先 7件 [`00945288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00945/00945288.md) [`00946288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00946/00946288.md) [`009465c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00946/009465c4.md) [`0094691c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00946/0094691c.md) [`00946c50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00946/00946c50.md)
- 新版 呼出元 2件 [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) [`009452dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00945/009452dc.md) · 呼出先 7件 [`009452dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00945/009452dc.md) [`009462dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/009462dc.md) [`00946618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946618.md) [`00946970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946970.md) [`00946ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946ca4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00945360 ["INT_ADD", "register:40f0:8", ["const:945360:8", "const:4:8"]]
- 00945360 ["CALL", null, ["callee:00946618:8"]]
+ 009453b4 ["INT_ADD", "register:40f0:8", ["const:9453b4:8", "const:4:8"]]
+ 009453b4 ["CALL", null, ["callee:00946618:8"]]
- 00945384 ["INT_ADD", "register:40f0:8", ["const:945384:8", "const:4:8"]]
- 00945384 ["CALL", null, ["callee:00946618:8"]]
+ 009453d8 ["INT_ADD", "register:40f0:8", ["const:9453d8:8", "const:4:8"]]
+ 009453d8 ["CALL", null, ["callee:00946618:8"]]
- 00945394 ["INT_ADD", "register:40f0:8", ["const:945394:8", "const:4:8"]]
- 00945394 ["CALL", null, ["callee:00946618:8"]]
+ 009453e8 ["INT_ADD", "register:40f0:8", ["const:9453e8:8", "const:4:8"]]
+ 009453e8 ["CALL", null, ["callee:00946618:8"]]
~~~


<a id="compare-9fa8c4be956420e4b06f5370ba4df473"></a>

### [`00946288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00946/00946288.md) → [`009462dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/009462dc.md) FUN_009462dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00945288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00945/00945288.md) [`0094691c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00946/0094691c.md) · 呼出先 3件 [`00946c50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00946/00946c50.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 2件 [`009452dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00945/009452dc.md) [`00946970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946970.md) · 呼出先 3件 [`00946ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946ca4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009462c8 ["INT_ADD", "register:40f0:8", ["const:9462c8:8", "const:4:8"]]
- 009462c8 ["CALL", null, ["callee:00946ca4:8"]]
+ 0094631c ["INT_ADD", "register:40f0:8", ["const:94631c:8", "const:4:8"]]
+ 0094631c ["CALL", null, ["callee:00946ca4:8"]]
- 0094635c ["INT_ADD", "register:40f0:8", ["const:94635c:8", "const:4:8"]]
- 0094635c ["CALL", null, ["callee:00c57f80:8"]]
+ 009463b0 ["INT_ADD", "register:40f0:8", ["const:9463b0:8", "const:4:8"]]
+ 009463b0 ["CALL", null, ["callee:00c57f80:8"]]
- 0094640c ["INT_ADD", "register:40f0:8", ["const:94640c:8", "const:4:8"]]
- 0094640c ["CALL", null, ["callee:00c57f80:8"]]
+ 00946460 ["INT_ADD", "register:40f0:8", ["const:946460:8", "const:4:8"]]
+ 00946460 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-50ae24efb18a45a2d217e743b40b62c9"></a>

### [`0094691c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00946/0094691c.md) → [`00946970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946970.md) FUN_00946970

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00945288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00945/00945288.md) · 呼出先 5件 [`00946288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00946/00946288.md) [`009465c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00946/009465c4.md) [`00946c50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00946/00946c50.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`009452dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00945/009452dc.md) · 呼出先 5件 [`009462dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/009462dc.md) [`00946618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946618.md) [`00946ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946ca4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009469a4 ["INT_ADD", "register:40f0:8", ["const:9469a4:8", "const:4:8"]]
- 009469a4 ["CALL", null, ["callee:009462dc:8"]]
+ 009469f8 ["INT_ADD", "register:40f0:8", ["const:9469f8:8", "const:4:8"]]
+ 009469f8 ["CALL", null, ["callee:009462dc:8"]]
- 00946a3c ["INT_ADD", "register:40f0:8", ["const:946a3c:8", "const:4:8"]]
- 00946a3c ["CALL", null, ["callee:00c57f80:8"]]
+ 00946a90 ["INT_ADD", "register:40f0:8", ["const:946a90:8", "const:4:8"]]
+ 00946a90 ["CALL", null, ["callee:00c57f80:8"]]
- 00946a70 ["INT_ADD", "register:40f0:8", ["const:946a70:8", "const:4:8"]]
- 00946a70 ["CALL", null, ["callee:00946618:8"]]
+ 00946ac4 ["INT_ADD", "register:40f0:8", ["const:946ac4:8", "const:4:8"]]
+ 00946ac4 ["CALL", null, ["callee:00946618:8"]]
~~~


<a id="compare-35143005e4554822cd7fd3bf85ca745a"></a>

### [`00946c50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00946/00946c50.md) → [`00946ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946ca4.md) FUN_00946ca4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`00945288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00945/00945288.md) [`00946288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00946/00946288.md) [`0094691c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00946/0094691c.md) · 呼出先 3件 [`009465c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00946/009465c4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 3件 [`009452dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00945/009452dc.md) [`009462dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/009462dc.md) [`00946970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946970.md) · 呼出先 3件 [`00946618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946618.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00946c8c ["INT_ADD", "register:40f0:8", ["const:946c8c:8", "const:4:8"]]
- 00946c8c ["CALL", null, ["callee:00946618:8"]]
+ 00946ce0 ["INT_ADD", "register:40f0:8", ["const:946ce0:8", "const:4:8"]]
+ 00946ce0 ["CALL", null, ["callee:00946618:8"]]
- 00946d20 ["INT_ADD", "register:40f0:8", ["const:946d20:8", "const:4:8"]]
- 00946d20 ["CALL", null, ["callee:00c57f80:8"]]
+ 00946d74 ["INT_ADD", "register:40f0:8", ["const:946d74:8", "const:4:8"]]
+ 00946d74 ["CALL", null, ["callee:00c57f80:8"]]
- 00946dd4 ["INT_ADD", "register:40f0:8", ["const:946dd4:8", "const:4:8"]]
- 00946dd4 ["CALL", null, ["callee:00c57f80:8"]]
+ 00946e28 ["INT_ADD", "register:40f0:8", ["const:946e28:8", "const:4:8"]]
+ 00946e28 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-213e8e0a92d0ccc412064bfc4d32085c"></a>

### [`00961734`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00961/00961734.md) → [`00961788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00961/00961788.md) FUN_00961788

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0094726c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00947/0094726c.md) [`009617a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00961/009617a0.md) [`0098dc08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098d/0098dc08.md) · 呼出先 1件 [`005e8198`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e8/005e8198.md)
- 新版 呼出元 3件 [`009472c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00947/009472c0.md) [`009617f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00961/009617f4.md) [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 1件 [`005e81d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e81d8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0096178c ["INT_ADD", "register:40f0:8", ["const:96178c:8", "const:4:8"]]
- 0096178c ["CALL", null, ["callee:005e81d8:8"]]
+ 009617e0 ["INT_ADD", "register:40f0:8", ["const:9617e0:8", "const:4:8"]]
+ 009617e0 ["CALL", null, ["callee:005e81d8:8"]]
~~~


<a id="compare-9d2011efb2f5ffefd811e5f4d98f1edb"></a>

### [`00963f2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00963/00963f2c.md) → [`00963f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00963/00963f80.md) FUN_00963f80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00963f7c ["INT_ADD", "register:40f0:8", ["const:963f7c:8", "const:4:8"]]
- 00963f7c ["CALL", null, ["callee:00c57f80:8"]]
+ 00963fd0 ["INT_ADD", "register:40f0:8", ["const:963fd0:8", "const:4:8"]]
+ 00963fd0 ["CALL", null, ["callee:00c57f80:8"]]
- 00963f8c ["INT_ADD", "register:40f0:8", ["const:963f8c:8", "const:4:8"]]
- 00963f8c ["CALL", null, ["callee:00c57f80:8"]]
+ 00963fe0 ["INT_ADD", "register:40f0:8", ["const:963fe0:8", "const:4:8"]]
+ 00963fe0 ["CALL", null, ["callee:00c57f80:8"]]
- 00963f9c ["INT_ADD", "register:40f0:8", ["const:963f9c:8", "const:4:8"]]
- 00963f9c ["CALL", null, ["callee:00c57f80:8"]]
+ 00963ff0 ["INT_ADD", "register:40f0:8", ["const:963ff0:8", "const:4:8"]]
+ 00963ff0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-2225bd66252fd6c3ff17401c37806aaa"></a>

### [`0098079c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00980/0098079c.md) → [`009807f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/009807f0.md) FUN_009807f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009807b8 ["INT_ADD", "register:40f0:8", ["const:9807b8:8", "const:4:8"]]
- 009807b8 ["CALL", null, ["callee:00c57f80:8"]]
+ 0098080c ["INT_ADD", "register:40f0:8", ["const:98080c:8", "const:4:8"]]
+ 0098080c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-7275fc9846c239368e682aea242814ea"></a>

### [`009816cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00981/009816cc.md) → [`00981720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/00981720.md) FUN_00981720

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0084e59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0084e/0084e59c.md) · 呼出先 2件 [`0086a460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a460.md) [`0086a4b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a4b0.md)
- 新版 呼出元 1件 [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) · 呼出先 2件 [`0086a4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a4b8.md) [`0086a508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a508.md)

変更の種類 constant, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 95.24% / 新版 95.24%

~~~diff
- 009816e8 ["INT_ADD", "register:40f0:8", ["const:9816e8:8", "const:4:8"]]
- 009816e8 ["CALL", null, ["callee:0086a4b8:8"]]
+ 0098173c ["INT_ADD", "register:40f0:8", ["const:98173c:8", "const:4:8"]]
+ 0098173c ["CALL", null, ["callee:0086a4b8:8"]]
- 009816f4 ["INT_SUB", "register:4000:8", ["register:4098:8", "const:8:8"]]
- 00981700 ["INT_ADD", "register:40f0:8", ["const:981700:8", "const:4:8"]]
- 00981700 ["CALL", null, ["callee:0086a508:8"]]
+ 00981754 ["INT_ADD", "register:40f0:8", ["const:981754:8", "const:4:8"]]
+ 00981754 ["CALL", null, ["callee:0086a508:8"]]
~~~


<a id="compare-3bb0660f7e3538c3ecc03f9e029f4acd"></a>

### [`00982118`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00982/00982118.md) → [`0098216c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/0098216c.md) FUN_0098216c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00982168 ["INT_ADD", "register:40f0:8", ["const:982168:8", "const:4:8"]]
- 00982168 ["CALL", null, ["callee:00c57f80:8"]]
+ 009821bc ["INT_ADD", "register:40f0:8", ["const:9821bc:8", "const:4:8"]]
+ 009821bc ["CALL", null, ["callee:00c57f80:8"]]
- 00982178 ["INT_ADD", "register:40f0:8", ["const:982178:8", "const:4:8"]]
- 00982178 ["CALL", null, ["callee:00c57f80:8"]]
+ 009821cc ["INT_ADD", "register:40f0:8", ["const:9821cc:8", "const:4:8"]]
+ 009821cc ["CALL", null, ["callee:00c57f80:8"]]
- 00982188 ["INT_ADD", "register:40f0:8", ["const:982188:8", "const:4:8"]]
- 00982188 ["CALL", null, ["callee:00c57f80:8"]]
+ 009821dc ["INT_ADD", "register:40f0:8", ["const:9821dc:8", "const:4:8"]]
+ 009821dc ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-2aacf599b48b7135c7712d428371a9cf"></a>

### [`009821cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00982/009821cc.md) → [`00982220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982220.md) FUN_00982220

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`0097fb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097f/0097fb20.md) [`00980e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00980/00980e10.md) [`00981440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00981/00981440.md) · 呼出先 5件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`009822fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00982/009822fc.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 3件 [`0097fb74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097f/0097fb74.md) [`00980e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/00980e64.md) [`00981494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/00981494.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00982350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982350.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00982200 ["INT_ADD", "register:40f0:8", ["const:982200:8", "const:4:8"]]
- 00982200 ["CALL", null, ["callee:00982350:8"]]
+ 00982254 ["INT_ADD", "register:40f0:8", ["const:982254:8", "const:4:8"]]
+ 00982254 ["CALL", null, ["callee:00982350:8"]]
- 00982220 ["INT_ADD", "register:40f0:8", ["const:982220:8", "const:4:8"]]
- 00982220 ["CALL", null, ["callee:00c57f60:8"]]
+ 00982274 ["INT_ADD", "register:40f0:8", ["const:982274:8", "const:4:8"]]
+ 00982274 ["CALL", null, ["callee:00c57f60:8"]]
- 0098225c ["INT_ADD", "register:40f0:8", ["const:98225c:8", "const:4:8"]]
- 0098225c ["CALL", null, ["callee:0043bb60:8"]]
+ 009822b0 ["INT_ADD", "register:40f0:8", ["const:9822b0:8", "const:4:8"]]
+ 009822b0 ["CALL", null, ["callee:0043bb60:8"]]
~~~


<a id="compare-a11681cd2a2e17a60e84b895569439e8"></a>

### [`0098c954`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098c/0098c954.md) → [`0098c9a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098c/0098c9a8.md) FUN_0098c9a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0099703c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00997/0099703c.md) [`00ae128c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ae1/00ae128c.md) · 呼出先 1件 [`00676a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/00676a60.md)
- 新版 呼出元 2件 [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) [`00ae1328`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ae1/00ae1328.md) · 呼出先 1件 [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0098c978 ["INT_ADD", "register:40f0:8", ["const:98c978:8", "const:4:8"]]
- 0098c978 ["CALL", null, ["callee:00676aa0:8"]]
+ 0098c9cc ["INT_ADD", "register:40f0:8", ["const:98c9cc:8", "const:4:8"]]
+ 0098c9cc ["CALL", null, ["callee:00676aa0:8"]]
~~~


<a id="compare-c1144967afb714219de5e52d5bc147d4"></a>

### [`009a67d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a67d4.md) → [`009a6828`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6828.md) FUN_009a6828

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009a67f0 ["INT_ADD", "register:40f0:8", ["const:9a67f0:8", "const:4:8"]]
- 009a67f0 ["CALL", null, ["callee:00c53da0:8"]]
+ 009a6844 ["INT_ADD", "register:40f0:8", ["const:9a6844:8", "const:4:8"]]
+ 009a6844 ["CALL", null, ["callee:00c53da0:8"]]
- 009a6810 ["COPY", "register:0:8", ["register:4040:8"]]
- 009a6810 ["INT_ADD", "register:40f0:8", ["const:9a6810:8", "const:4:8"]]
- 009a6810 ["CALLIND", null, ["register:0:8"]]
+ 009a6864 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009a6864 ["INT_ADD", "register:40f0:8", ["const:9a6864:8", "const:4:8"]]
+ 009a6864 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-128fabfac1785b7655d4debec5f7646d"></a>

### [`009a8548`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a8/009a8548.md) → [`009a859c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a8/009a859c.md) FUN_009a859c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009a50c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a5/009a50c0.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009a5114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a5114.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009a8588 ["COPY", "register:0:8", ["register:4040:8"]]
- 009a8588 ["INT_ADD", "register:40f0:8", ["const:9a8588:8", "const:4:8"]]
- 009a8588 ["CALLIND", null, ["register:0:8"]]
+ 009a85dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 009a85dc ["INT_ADD", "register:40f0:8", ["const:9a85dc:8", "const:4:8"]]
+ 009a85dc ["CALLIND", null, ["register:0:8"]]
- 009a85b4 ["COPY", "register:0:8", ["register:4040:8"]]
- 009a85b4 ["INT_ADD", "register:40f0:8", ["const:9a85b4:8", "const:4:8"]]
- 009a85b4 ["CALLIND", null, ["register:0:8"]]
+ 009a8608 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009a8608 ["INT_ADD", "register:40f0:8", ["const:9a8608:8", "const:4:8"]]
+ 009a8608 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-92d0899b3aadc84649f415f42b1125d5"></a>

### [`009a9364`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a9/009a9364.md) → [`009a93b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a93b8.md) FUN_009a93b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 2件 [`009b5b78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5b78.md) [`00a14d8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a14/00a14d8c.md) · 呼出先 3件 [`00480d48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480d48.md) [`00480e28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480e28.md) [`00481128`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00481/00481128.md)
- 新版 呼出元 2件 [`009b5bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5bcc.md) [`00a14de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a14/00a14de0.md) · 呼出先 3件 [`00480d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480d88.md) [`00480e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480e68.md) [`00481168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481168.md)

変更の種類 call_argument_candidate, constant, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 98.21% / 新版 98.21%

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009a93d8",
      "incomplete_value": true,
      "site": "009a93dc",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_ADD",
            "4",
            [
              [
                "live",
                "register:4040:4"
              ],
              [
                "live",
                "register:4048:4"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 2
  }
]
~~~


~~~diff
- 009a9388 ["INT_ADD", "register:40f0:8", ["const:9a9388:8", "const:4:8"]]
- 009a9388 ["CALL", null, ["callee:00480e68:8"]]
+ 009a93dc ["INT_ADD", "register:40f0:8", ["const:9a93dc:8", "const:4:8"]]
+ 009a93dc ["CALL", null, ["callee:00480e68:8"]]
- 009a93dc ["INT_ADD", "register:40f0:8", ["const:9a93dc:8", "const:4:8"]]
- 009a93dc ["CALL", null, ["callee:00480e68:8"]]
+ 009a9430 ["INT_ADD", "register:40f0:8", ["const:9a9430:8", "const:4:8"]]
+ 009a9430 ["CALL", null, ["callee:00480e68:8"]]
- 009a9370 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-85afd0efd60a1ebea895640a602ad416"></a>

### [`009a95c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a9/009a95c4.md) → [`009a9618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a9618.md) FUN_009a9618

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`009b5bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5bb8.md) [`00a06d9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a06d9c.md) · 呼出先 1件 [`004802f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004802f8.md)
- 新版 呼出元 2件 [`009b5c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5c0c.md) [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) · 呼出先 1件 [`00480338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480338.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009a95d8 ["INT_ADD", "register:40f0:8", ["const:9a95d8:8", "const:4:8"]]
- 009a95d8 ["CALL", null, ["callee:00480338:8"]]
+ 009a962c ["INT_ADD", "register:40f0:8", ["const:9a962c:8", "const:4:8"]]
+ 009a962c ["CALL", null, ["callee:00480338:8"]]
~~~


<a id="compare-3ab79572a6e90436e3ea4eb5157dba30"></a>

### [`009ac10c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009ac10c.md) → [`009ac160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac160.md) FUN_009ac160

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`009ac144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009ac144.md)
- 新版 呼出元 0件  · 呼出先 1件 [`009ac198`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac198.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ac134 ["INT_ADD", "register:40f0:8", ["const:9ac134:8", "const:4:8"]]
- 009ac134 ["CALL", null, ["callee:009ac198:8"]]
+ 009ac188 ["INT_ADD", "register:40f0:8", ["const:9ac188:8", "const:4:8"]]
+ 009ac188 ["CALL", null, ["callee:009ac198:8"]]
~~~


<a id="compare-308776ebb949bb58b88f95ba53f7c705"></a>

### [`009ac7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009ac7f8.md) → [`009ac84c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac84c.md) FUN_009ac84c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0086d244`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086d244.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0086d29c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d29c.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ac844 ["INT_ADD", "register:40f0:8", ["const:9ac844:8", "const:4:8"]]
- 009ac844 ["CALL", null, ["callee:00c53da0:8"]]
+ 009ac898 ["INT_ADD", "register:40f0:8", ["const:9ac898:8", "const:4:8"]]
+ 009ac898 ["CALL", null, ["callee:00c53da0:8"]]
- 009ac858 ["COPY", "register:0:8", ["register:4040:8"]]
- 009ac858 ["INT_ADD", "register:40f0:8", ["const:9ac858:8", "const:4:8"]]
- 009ac858 ["CALLIND", null, ["register:0:8"]]
+ 009ac8ac ["COPY", "register:0:8", ["register:4040:8"]]
+ 009ac8ac ["INT_ADD", "register:40f0:8", ["const:9ac8ac:8", "const:4:8"]]
+ 009ac8ac ["CALLIND", null, ["register:0:8"]]
- 009ac860 ["INT_ADD", "register:40f0:8", ["const:9ac860:8", "const:4:8"]]
- 009ac860 ["CALL", null, ["callee:00c57f50:8"]]
+ 009ac8b4 ["INT_ADD", "register:40f0:8", ["const:9ac8b4:8", "const:4:8"]]
+ 009ac8b4 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-22286fb66ade07a6cb8c992bae309ea8"></a>

### [`009ac928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009ac928.md) → [`009ac97c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac97c.md) FUN_009ac97c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a2b2e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2b/00a2b2e8.md) · 呼出先 6件 [`00480b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480b38.md) [`009b5b78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5b78.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 6件 [`00480b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480b78.md) [`009b5bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5bcc.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ac968 ["INT_ADD", "register:40f0:8", ["const:9ac968:8", "const:4:8"]]
- 009ac968 ["CALL", null, ["callee:00480b78:8"]]
+ 009ac9bc ["INT_ADD", "register:40f0:8", ["const:9ac9bc:8", "const:4:8"]]
+ 009ac9bc ["CALL", null, ["callee:00480b78:8"]]
- 009ac994 ["INT_ADD", "register:40f0:8", ["const:9ac994:8", "const:4:8"]]
- 009ac994 ["CALL", null, ["callee:00c53d70:8"]]
+ 009ac9e8 ["INT_ADD", "register:40f0:8", ["const:9ac9e8:8", "const:4:8"]]
+ 009ac9e8 ["CALL", null, ["callee:00c53d70:8"]]
- 009ac9a0 ["INT_ADD", "register:40f0:8", ["const:9ac9a0:8", "const:4:8"]]
- 009ac9a0 ["CALL", null, ["callee:009b5bcc:8"]]
+ 009ac9f4 ["INT_ADD", "register:40f0:8", ["const:9ac9f4:8", "const:4:8"]]
+ 009ac9f4 ["CALL", null, ["callee:009b5bcc:8"]]
~~~


<a id="compare-9be169fe1c38b486e19aa0f1da865d9f"></a>

### [`009aca24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009aca24.md) → [`009aca78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009aca78.md) FUN_009aca78

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009af988`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009af/009af988.md) · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`009af9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009af9dc.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009aca40 ["INT_ADD", "register:40f0:8", ["const:9aca40:8", "const:4:8"]]
- 009aca40 ["CALL", null, ["callee:00c53da0:8"]]
+ 009aca94 ["INT_ADD", "register:40f0:8", ["const:9aca94:8", "const:4:8"]]
+ 009aca94 ["CALL", null, ["callee:00c53da0:8"]]
- 009aca60 ["COPY", "register:0:8", ["register:4040:8"]]
- 009aca60 ["INT_ADD", "register:40f0:8", ["const:9aca60:8", "const:4:8"]]
- 009aca60 ["CALLIND", null, ["register:0:8"]]
+ 009acab4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009acab4 ["INT_ADD", "register:40f0:8", ["const:9acab4:8", "const:4:8"]]
+ 009acab4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-38b9d7fe26e6789658732a56c44f7afe"></a>

### [`009adee8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ad/009adee8.md) → [`009adf3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009adf3c.md) FUN_009adf3c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`00605254`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00605/00605254.md) [`00613c64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00613/00613c64.md) [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`007df0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007df/007df0e8.md) · 呼出先 6件 [`009b5c94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5c94.md) [`009b5cb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5cb4.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 4件 [`00605294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/00605294.md) [`00613ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00613/00613ca4.md) [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 6件 [`009b5ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5ce8.md) [`009b5d08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5d08.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009adf34 ["INT_ADD", "register:40f0:8", ["const:9adf34:8", "const:4:8"]]
- 009adf34 ["CALL", null, ["callee:00c53d70:8"]]
+ 009adf88 ["INT_ADD", "register:40f0:8", ["const:9adf88:8", "const:4:8"]]
+ 009adf88 ["CALL", null, ["callee:00c53d70:8"]]
- 009adf3c ["INT_ADD", "register:40f0:8", ["const:9adf3c:8", "const:4:8"]]
- 009adf3c ["CALL", null, ["callee:009b5ce8:8"]]
+ 009adf90 ["INT_ADD", "register:40f0:8", ["const:9adf90:8", "const:4:8"]]
+ 009adf90 ["CALL", null, ["callee:009b5ce8:8"]]
- 009adf50 ["INT_ADD", "register:40f0:8", ["const:9adf50:8", "const:4:8"]]
- 009adf50 ["CALL", null, ["callee:00c53da0:8"]]
+ 009adfa4 ["INT_ADD", "register:40f0:8", ["const:9adfa4:8", "const:4:8"]]
+ 009adfa4 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-cf75e3e3a57ea0b50efc4ba82f914dd1"></a>

### [`009ae904`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ae/009ae904.md) → [`009ae958`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ae/009ae958.md) FUN_009ae958

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ae924 ["INT_ADD", "register:40f0:8", ["const:9ae924:8", "const:4:8"]]
- 009ae924 ["CALL", null, ["callee:00c53da0:8"]]
+ 009ae978 ["INT_ADD", "register:40f0:8", ["const:9ae978:8", "const:4:8"]]
+ 009ae978 ["CALL", null, ["callee:00c53da0:8"]]
- 009ae938 ["COPY", "register:0:8", ["register:4040:8"]]
- 009ae938 ["INT_ADD", "register:40f0:8", ["const:9ae938:8", "const:4:8"]]
- 009ae938 ["CALLIND", null, ["register:0:8"]]
+ 009ae98c ["COPY", "register:0:8", ["register:4040:8"]]
+ 009ae98c ["INT_ADD", "register:40f0:8", ["const:9ae98c:8", "const:4:8"]]
+ 009ae98c ["CALLIND", null, ["register:0:8"]]
- 009ae940 ["INT_ADD", "register:40f0:8", ["const:9ae940:8", "const:4:8"]]
- 009ae940 ["CALL", null, ["callee:00c57f50:8"]]
+ 009ae994 ["INT_ADD", "register:40f0:8", ["const:9ae994:8", "const:4:8"]]
+ 009ae994 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-648a0ce155c64f79c66524c5d1bc37c7"></a>

### [`009af124`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009af/009af124.md) → [`009af178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009af178.md) FUN_009af178

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) · 呼出先 5件 [`009b5cf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5cf8.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 5件 [`009b5d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5d4c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009af174 ["INT_ADD", "register:40f0:8", ["const:9af174:8", "const:4:8"]]
- 009af174 ["CALL", null, ["callee:00c53d70:8"]]
+ 009af1c8 ["INT_ADD", "register:40f0:8", ["const:9af1c8:8", "const:4:8"]]
+ 009af1c8 ["CALL", null, ["callee:00c53d70:8"]]
- 009af184 ["INT_ADD", "register:40f0:8", ["const:9af184:8", "const:4:8"]]
- 009af184 ["CALL", null, ["callee:009b5d4c:8"]]
+ 009af1d8 ["INT_ADD", "register:40f0:8", ["const:9af1d8:8", "const:4:8"]]
+ 009af1d8 ["CALL", null, ["callee:009b5d4c:8"]]
- 009af194 ["INT_ADD", "register:40f0:8", ["const:9af194:8", "const:4:8"]]
- 009af194 ["CALL", null, ["callee:00c53da0:8"]]
+ 009af1e8 ["INT_ADD", "register:40f0:8", ["const:9af1e8:8", "const:4:8"]]
+ 009af1e8 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-fb0ade78d4fd0f87bdeecbf6c932f9e9"></a>

### [`009b3b08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b3/009b3b08.md) → [`009b3b5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b3/009b3b5c.md) FUN_009b3b5c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00849334`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00849/00849334.md) [`0084e59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0084e/0084e59c.md) [`009b0bdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b0/009b0bdc.md) · 呼出先 2件 [`00869ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869ef4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0084938c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/0084938c.md) [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) [`009b0c30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0c30.md) · 呼出先 2件 [`00869f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869f4c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b3b30 ["INT_ADD", "register:40f0:8", ["const:9b3b30:8", "const:4:8"]]
- 009b3b30 ["CALL", null, ["callee:00869f4c:8"]]
+ 009b3b84 ["INT_ADD", "register:40f0:8", ["const:9b3b84:8", "const:4:8"]]
+ 009b3b84 ["CALL", null, ["callee:00869f4c:8"]]
- 009b3b38 ["INT_ADD", "register:40f0:8", ["const:9b3b38:8", "const:4:8"]]
- 009b3b38 ["CALL", null, ["callee:00c57f80:8"]]
+ 009b3b8c ["INT_ADD", "register:40f0:8", ["const:9b3b8c:8", "const:4:8"]]
+ 009b3b8c ["CALL", null, ["callee:00c57f80:8"]]
- 009b3b48 ["INT_ADD", "register:40f0:8", ["const:9b3b48:8", "const:4:8"]]
- 009b3b48 ["CALL", null, ["callee:00c57f80:8"]]
+ 009b3b9c ["INT_ADD", "register:40f0:8", ["const:9b3b9c:8", "const:4:8"]]
+ 009b3b9c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-6ca614e790a1a346f41541f4a15fc8c2"></a>

### [`009b5c2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5c2c.md) → [`009b5c80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5c80.md) FUN_009b5c80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009ad4a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ad/009ad4a4.md) · 呼出先 3件 [`009a9300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a9/009a9300.md) [`009a95f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a9/009a95f0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`009ad4f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009ad4f8.md) · 呼出先 3件 [`009a9354`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a9354.md) [`009a9644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a9644.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b5c54 ["INT_ADD", "register:40f0:8", ["const:9b5c54:8", "const:4:8"]]
- 009b5c54 ["CALL", null, ["callee:00c57f60:8"]]
+ 009b5ca8 ["INT_ADD", "register:40f0:8", ["const:9b5ca8:8", "const:4:8"]]
+ 009b5ca8 ["CALL", null, ["callee:00c57f60:8"]]
- 009b5c74 ["INT_ADD", "register:40f0:8", ["const:9b5c74:8", "const:4:8"]]
- 009b5c74 ["CALL", null, ["callee:009a9354:8"]]
+ 009b5cc8 ["INT_ADD", "register:40f0:8", ["const:9b5cc8:8", "const:4:8"]]
+ 009b5cc8 ["CALL", null, ["callee:009a9354:8"]]
~~~


<a id="compare-99ba017937dc34612dd4b855d24155c0"></a>

### [`009b66c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b66c4.md) → [`009b6718`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6718.md) FUN_009b6718

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`009aa064`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009aa/009aa064.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`009aa0b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aa0b8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b66f4 ["INT_ADD", "register:40f0:8", ["const:9b66f4:8", "const:4:8"]]
- 009b66f4 ["CALL", null, ["callee:009aa0b8:8"]]
+ 009b6748 ["INT_ADD", "register:40f0:8", ["const:9b6748:8", "const:4:8"]]
+ 009b6748 ["CALL", null, ["callee:009aa0b8:8"]]
- 009b6720 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b6720 ["INT_ADD", "register:40f0:8", ["const:9b6720:8", "const:4:8"]]
- 009b6720 ["CALLIND", null, ["register:0:8"]]
+ 009b6774 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b6774 ["INT_ADD", "register:40f0:8", ["const:9b6774:8", "const:4:8"]]
+ 009b6774 ["CALLIND", null, ["register:0:8"]]
- 009b6758 ["INT_ADD", "register:40f0:8", ["const:9b6758:8", "const:4:8"]]
- 009b6758 ["CALL", null, ["callee:00459db4:8"]]
+ 009b67ac ["INT_ADD", "register:40f0:8", ["const:9b67ac:8", "const:4:8"]]
+ 009b67ac ["CALL", null, ["callee:00459db4:8"]]
~~~


<a id="compare-0b15649d962fe0477d3b397670b97d70"></a>

### [`009b6848`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b6848.md) → [`009b689c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b689c.md) FUN_009b689c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`005aa170`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005aa/005aa170.md) [`009a9fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a9/009a9fe0.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`005aa1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa1b0.md) [`009aa034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aa034.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b68a0 ["INT_ADD", "register:40f0:8", ["const:9b68a0:8", "const:4:8"]]
- 009b68a0 ["CALL", null, ["callee:0043bb60:8"]]
+ 009b68f4 ["INT_ADD", "register:40f0:8", ["const:9b68f4:8", "const:4:8"]]
+ 009b68f4 ["CALL", null, ["callee:0043bb60:8"]]
- 009b68f8 ["INT_ADD", "register:40f0:8", ["const:9b68f8:8", "const:4:8"]]
- 009b68f8 ["CALL", null, ["callee:009aa034:8"]]
+ 009b694c ["INT_ADD", "register:40f0:8", ["const:9b694c:8", "const:4:8"]]
+ 009b694c ["CALL", null, ["callee:009aa034:8"]]
- 009b6908 ["INT_ADD", "register:40f0:8", ["const:9b6908:8", "const:4:8"]]
- 009b6908 ["CALL", null, ["callee:00c57f80:8"]]
+ 009b695c ["INT_ADD", "register:40f0:8", ["const:9b695c:8", "const:4:8"]]
+ 009b695c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-34cb8e4814bc1eaaacd66995976acd3f"></a>

### [`009b6c08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b6c08.md) → [`009b6c5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6c5c.md) FUN_009b6c5c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009b4e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b4/009b4e2c.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009b4e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b4e80.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b6c44 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b6c44 ["INT_ADD", "register:40f0:8", ["const:9b6c44:8", "const:4:8"]]
- 009b6c44 ["CALLIND", null, ["register:0:8"]]
+ 009b6c98 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b6c98 ["INT_ADD", "register:40f0:8", ["const:9b6c98:8", "const:4:8"]]
+ 009b6c98 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b1da5a060399f5f885ec0585f3be30a4"></a>

### [`009b6c58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b6c58.md) → [`009b6cac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6cac.md) FUN_009b6cac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`005a9d24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a9/005a9d24.md) [`005aa184`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005aa/005aa184.md) [`009aa624`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009aa/009aa624.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`005a9d64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9d64.md) [`005aa1c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa1c4.md) [`009aa678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aa678.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b6cb8 ["INT_ADD", "register:40f0:8", ["const:9b6cb8:8", "const:4:8"]]
- 009b6cb8 ["CALL", null, ["callee:005a9d64:8"]]
+ 009b6d0c ["INT_ADD", "register:40f0:8", ["const:9b6d0c:8", "const:4:8"]]
+ 009b6d0c ["CALL", null, ["callee:005a9d64:8"]]
- 009b6cc8 ["INT_ADD", "register:40f0:8", ["const:9b6cc8:8", "const:4:8"]]
- 009b6cc8 ["CALL", null, ["callee:009aa678:8"]]
+ 009b6d1c ["INT_ADD", "register:40f0:8", ["const:9b6d1c:8", "const:4:8"]]
+ 009b6d1c ["CALL", null, ["callee:009aa678:8"]]
- 009b6cf4 ["INT_ADD", "register:40f0:8", ["const:9b6cf4:8", "const:4:8"]]
- 009b6cf4 ["CALL", null, ["callee:005aa1c4:8"]]
+ 009b6d48 ["INT_ADD", "register:40f0:8", ["const:9b6d48:8", "const:4:8"]]
+ 009b6d48 ["CALL", null, ["callee:005aa1c4:8"]]
~~~


<a id="compare-0ebab81e86a0a87564530197642cf5b8"></a>

### [`009b6fa8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b6fa8.md) → [`009b6ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6ffc.md) FUN_009b6ffc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009b4e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b4/009b4e2c.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009b4e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b4e80.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b6fe4 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b6fe4 ["INT_ADD", "register:40f0:8", ["const:9b6fe4:8", "const:4:8"]]
- 009b6fe4 ["CALLIND", null, ["register:0:8"]]
+ 009b7038 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b7038 ["INT_ADD", "register:40f0:8", ["const:9b7038:8", "const:4:8"]]
+ 009b7038 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7699bd18278e48288bb7d48f61a2d325"></a>

### [`009b6ff8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b6ff8.md) → [`009b704c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b704c.md) FUN_009b704c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b7038 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b7038 ["INT_ADD", "register:40f0:8", ["const:9b7038:8", "const:4:8"]]
- 009b7038 ["CALLIND", null, ["register:0:8"]]
+ 009b708c ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b708c ["INT_ADD", "register:40f0:8", ["const:9b708c:8", "const:4:8"]]
+ 009b708c ["CALLIND", null, ["register:0:8"]]
- 009b706c ["INT_ADD", "register:40f0:8", ["const:9b706c:8", "const:4:8"]]
- 009b706c ["CALL", null, ["callee:00459db4:8"]]
+ 009b70c0 ["INT_ADD", "register:40f0:8", ["const:9b70c0:8", "const:4:8"]]
+ 009b70c0 ["CALL", null, ["callee:00459db4:8"]]
- 009b7070 ["INT_ADD", "register:40f0:8", ["const:9b7070:8", "const:4:8"]]
- 009b7070 ["CALL", null, ["callee:00c57fb0:8"]]
+ 009b70c4 ["INT_ADD", "register:40f0:8", ["const:9b70c4:8", "const:4:8"]]
+ 009b70c4 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-9a377b23804ebc7bb48bb35d9bb329f9"></a>

### [`009b73e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b73e8.md) → [`009b743c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b743c.md) FUN_009b743c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009b53bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b53bc.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009b5410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5410.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b7424 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b7424 ["INT_ADD", "register:40f0:8", ["const:9b7424:8", "const:4:8"]]
- 009b7424 ["CALLIND", null, ["register:0:8"]]
+ 009b7478 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b7478 ["INT_ADD", "register:40f0:8", ["const:9b7478:8", "const:4:8"]]
+ 009b7478 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-1822e22b4fe9366e09118fa2f349731d"></a>

### [`009b76a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b76a8.md) → [`009b76fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b76fc.md) FUN_009b76fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009b53bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b53bc.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009b5410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5410.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b76e4 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b76e4 ["INT_ADD", "register:40f0:8", ["const:9b76e4:8", "const:4:8"]]
- 009b76e4 ["CALLIND", null, ["register:0:8"]]
+ 009b7738 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b7738 ["INT_ADD", "register:40f0:8", ["const:9b7738:8", "const:4:8"]]
+ 009b7738 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b7a0bb20e8220562bb85f7797f75b71c"></a>

### [`009b76f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b76f8.md) → [`009b774c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b774c.md) FUN_009b774c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b7714 ["INT_ADD", "register:40f0:8", ["const:9b7714:8", "const:4:8"]]
- 009b7714 ["CALL", null, ["callee:00459db4:8"]]
+ 009b7768 ["INT_ADD", "register:40f0:8", ["const:9b7768:8", "const:4:8"]]
+ 009b7768 ["CALL", null, ["callee:00459db4:8"]]
~~~


<a id="compare-dec8a948c32b4ae66a78001b02cfde71"></a>

### [`009b7a8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b7a8c.md) → [`009b7ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7ae0.md) FUN_009b7ae0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009b4900`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b4/009b4900.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009b4954`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b4954.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b7ac8 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b7ac8 ["INT_ADD", "register:40f0:8", ["const:9b7ac8:8", "const:4:8"]]
- 009b7ac8 ["CALLIND", null, ["register:0:8"]]
+ 009b7b1c ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b7b1c ["INT_ADD", "register:40f0:8", ["const:9b7b1c:8", "const:4:8"]]
+ 009b7b1c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7e2bbd7ab259cf8ff8118993e5bbd0e4"></a>

### [`009b7d4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b7d4c.md) → [`009b7da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7da0.md) FUN_009b7da0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009b4900`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b4/009b4900.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009b4954`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b4954.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b7d88 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b7d88 ["INT_ADD", "register:40f0:8", ["const:9b7d88:8", "const:4:8"]]
- 009b7d88 ["CALLIND", null, ["register:0:8"]]
+ 009b7ddc ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b7ddc ["INT_ADD", "register:40f0:8", ["const:9b7ddc:8", "const:4:8"]]
+ 009b7ddc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6cd206dbe2955669abcfaa6139d20572"></a>

### [`009b7d9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b7/009b7d9c.md) → [`009b7df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b7/009b7df0.md) FUN_009b7df0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b7db8 ["INT_ADD", "register:40f0:8", ["const:9b7db8:8", "const:4:8"]]
- 009b7db8 ["CALL", null, ["callee:00459db4:8"]]
+ 009b7e0c ["INT_ADD", "register:40f0:8", ["const:9b7e0c:8", "const:4:8"]]
+ 009b7e0c ["CALL", null, ["callee:00459db4:8"]]
~~~


<a id="compare-59362ecb1a6e85362a4dbf63166ba87d"></a>

### [`009b8180`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b8/009b8180.md) → [`009b81d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b81d4.md) FUN_009b81d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b81b8 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b81b8 ["INT_ADD", "register:40f0:8", ["const:9b81b8:8", "const:4:8"]]
- 009b81b8 ["CALLIND", null, ["register:0:8"]]
+ 009b820c ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b820c ["INT_ADD", "register:40f0:8", ["const:9b820c:8", "const:4:8"]]
+ 009b820c ["CALLIND", null, ["register:0:8"]]
- 009b81ec ["INT_ADD", "register:40f0:8", ["const:9b81ec:8", "const:4:8"]]
- 009b81ec ["CALL", null, ["callee:00459db4:8"]]
+ 009b8240 ["INT_ADD", "register:40f0:8", ["const:9b8240:8", "const:4:8"]]
+ 009b8240 ["CALL", null, ["callee:00459db4:8"]]
- 009b81f0 ["INT_ADD", "register:40f0:8", ["const:9b81f0:8", "const:4:8"]]
- 009b81f0 ["CALL", null, ["callee:00c57fb0:8"]]
+ 009b8244 ["INT_ADD", "register:40f0:8", ["const:9b8244:8", "const:4:8"]]
+ 009b8244 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-37dcd5fea1ab70e0338d02ffec28afec"></a>

### [`009b83f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b8/009b83f0.md) → [`009b8444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b8444.md) FUN_009b8444

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009b4164`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b4/009b4164.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009b41b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b41b8.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b842c ["COPY", "register:0:8", ["register:4040:8"]]
- 009b842c ["INT_ADD", "register:40f0:8", ["const:9b842c:8", "const:4:8"]]
- 009b842c ["CALLIND", null, ["register:0:8"]]
+ 009b8480 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b8480 ["INT_ADD", "register:40f0:8", ["const:9b8480:8", "const:4:8"]]
+ 009b8480 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-da1d71a7cd5ed49d4e1c0059dd86787b"></a>

### [`009b8440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b8/009b8440.md) → [`009b8494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b8494.md) FUN_009b8494

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b845c ["INT_ADD", "register:40f0:8", ["const:9b845c:8", "const:4:8"]]
- 009b845c ["CALL", null, ["callee:00459db4:8"]]
+ 009b84b0 ["INT_ADD", "register:40f0:8", ["const:9b84b0:8", "const:4:8"]]
+ 009b84b0 ["CALL", null, ["callee:00459db4:8"]]
~~~


<a id="compare-46fdfb01c7c91499c175ee4c1360beae"></a>

### [`009b8818`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b8/009b8818.md) → [`009b886c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b886c.md) FUN_009b886c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0075eb80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075e/0075eb80.md) · 呼出先 2件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 1件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 2件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b8830 ["INT_ADD", "register:40f0:8", ["const:9b8830:8", "const:4:8"]]
- 009b8830 ["CALL", null, ["callee:0046ca04:8"]]
+ 009b8884 ["INT_ADD", "register:40f0:8", ["const:9b8884:8", "const:4:8"]]
+ 009b8884 ["CALL", null, ["callee:0046ca04:8"]]
- 009b8858 ["INT_ADD", "register:40f0:8", ["const:9b8858:8", "const:4:8"]]
- 009b8858 ["CALL", null, ["callee:00c53d70:8"]]
+ 009b88ac ["INT_ADD", "register:40f0:8", ["const:9b88ac:8", "const:4:8"]]
+ 009b88ac ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-260daff239f255ee21cf32c5ff7bd05e"></a>

### [`009b886c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b8/009b886c.md) → [`009b88c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b88c0.md) FUN_009b88c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0075eb80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075e/0075eb80.md) [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`0084878c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/0084878c.md) · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 3件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`008487e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/008487e4.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b8890 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b8890 ["INT_ADD", "register:40f0:8", ["const:9b8890:8", "const:4:8"]]
- 009b8890 ["CALLIND", null, ["register:0:8"]]
+ 009b88e4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b88e4 ["INT_ADD", "register:40f0:8", ["const:9b88e4:8", "const:4:8"]]
+ 009b88e4 ["CALLIND", null, ["register:0:8"]]
- 009b88a4 ["INT_ADD", "register:40f0:8", ["const:9b88a4:8", "const:4:8"]]
- 009b88a4 ["CALL", null, ["callee:00c53da0:8"]]
+ 009b88f8 ["INT_ADD", "register:40f0:8", ["const:9b88f8:8", "const:4:8"]]
+ 009b88f8 ["CALL", null, ["callee:00c53da0:8"]]
- 009b88c4 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b88c4 ["INT_ADD", "register:40f0:8", ["const:9b88c4:8", "const:4:8"]]
- 009b88c4 ["CALLIND", null, ["register:0:8"]]
+ 009b8918 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b8918 ["INT_ADD", "register:40f0:8", ["const:9b8918:8", "const:4:8"]]
+ 009b8918 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-084bc2a21effa20a4f903a193283fbb6"></a>

### [`009b948c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b9/009b948c.md) → [`009b94e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b9/009b94e0.md) FUN_009b94e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009ba37c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ba/009ba37c.md) · 呼出先 4件 [`00935e34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00935/00935e34.md) [`009ad980`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ad/009ad980.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`009ba3d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009ba3d0.md) · 呼出先 4件 [`00935e88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00935/00935e88.md) [`009ad9d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009ad9d4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b94bc ["INT_ADD", "register:40f0:8", ["const:9b94bc:8", "const:4:8"]]
- 009b94bc ["CALL", null, ["callee:009ad9d4:8"]]
+ 009b9510 ["INT_ADD", "register:40f0:8", ["const:9b9510:8", "const:4:8"]]
+ 009b9510 ["CALL", null, ["callee:009ad9d4:8"]]
- 009b9514 ["INT_ADD", "register:40f0:8", ["const:9b9514:8", "const:4:8"]]
- 009b9514 ["CALL", null, ["callee:00935e88:8"]]
+ 009b9568 ["INT_ADD", "register:40f0:8", ["const:9b9568:8", "const:4:8"]]
+ 009b9568 ["CALL", null, ["callee:00935e88:8"]]
- 009b9524 ["INT_ADD", "register:40f0:8", ["const:9b9524:8", "const:4:8"]]
- 009b9524 ["CALL", null, ["callee:00c57f80:8"]]
+ 009b9578 ["INT_ADD", "register:40f0:8", ["const:9b9578:8", "const:4:8"]]
+ 009b9578 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-139d8e2cf68c892d2ce293fe55cd1100"></a>

### [`009b9580`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b9/009b9580.md) → [`009b95d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b9/009b95d4.md) FUN_009b95d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) · 呼出先 6件 [`008b6f18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f18.md) [`008b6f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f40.md) [`008b79c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b79c8.md) [`009ad980`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ad/009ad980.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 6件 [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md) [`008b6f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f98.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md) [`009ad9d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009ad9d4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b95b4 ["INT_ADD", "register:40f0:8", ["const:9b95b4:8", "const:4:8"]]
- 009b95b4 ["CALL", null, ["callee:009ad9d4:8"]]
+ 009b9608 ["INT_ADD", "register:40f0:8", ["const:9b9608:8", "const:4:8"]]
+ 009b9608 ["CALL", null, ["callee:009ad9d4:8"]]
- 009b95d4 ["INT_ADD", "register:40f0:8", ["const:9b95d4:8", "const:4:8"]]
- 009b95d4 ["CALL", null, ["callee:008b7a20:8"]]
+ 009b9628 ["INT_ADD", "register:40f0:8", ["const:9b9628:8", "const:4:8"]]
+ 009b9628 ["CALL", null, ["callee:008b7a20:8"]]
- 009b95e8 ["INT_ADD", "register:40f0:8", ["const:9b95e8:8", "const:4:8"]]
- 009b95e8 ["CALL", null, ["callee:008b6f98:8"]]
+ 009b963c ["INT_ADD", "register:40f0:8", ["const:9b963c:8", "const:4:8"]]
+ 009b963c ["CALL", null, ["callee:008b6f98:8"]]
~~~


<a id="compare-c6340e997066697cbc08a537eb99c767"></a>

### [`009b96e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b9/009b96e4.md) → [`009b9738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b9/009b9738.md) FUN_009b9738

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) · 呼出先 2件 [`009adb68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ad/009adb68.md) [`00acbf2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00acb/00acbf2c.md)
- 新版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 2件 [`009adbbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009adbbc.md) [`00acbf9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00acb/00acbf9c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b9708 ["INT_ADD", "register:40f0:8", ["const:9b9708:8", "const:4:8"]]
- 009b9708 ["CALL", null, ["callee:009adbbc:8"]]
+ 009b975c ["INT_ADD", "register:40f0:8", ["const:9b975c:8", "const:4:8"]]
+ 009b975c ["CALL", null, ["callee:009adbbc:8"]]
- 009b971c ["INT_ADD", "register:40f0:8", ["const:9b971c:8", "const:4:8"]]
- 009b971c ["CALL", null, ["callee:00acbf9c:8"]]
+ 009b9770 ["INT_ADD", "register:40f0:8", ["const:9b9770:8", "const:4:8"]]
+ 009b9770 ["CALL", null, ["callee:00acbf9c:8"]]
~~~


<a id="compare-ebe52c608f88dd616101eca46112d05d"></a>

### [`009b9740`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b9/009b9740.md) → [`009b9794`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b9/009b9794.md) FUN_009b9794

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00773894`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00773/00773894.md) · 呼出先 24件 [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00468804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468804.md) [`00468c68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468c68.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`0046965c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/0046965c.md)
- 新版 呼出元 1件 [`007738ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00773/007738ec.md) · 呼出先 24件 [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md) [`00468ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468ca8.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046969c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/0046969c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b978c ["INT_ADD", "register:40f0:8", ["const:9b978c:8", "const:4:8"]]
- 009b978c ["CALL", null, ["callee:009ad9d4:8"]]
+ 009b97e0 ["INT_ADD", "register:40f0:8", ["const:9b97e0:8", "const:4:8"]]
+ 009b97e0 ["CALL", null, ["callee:009ad9d4:8"]]
- 009b97a4 ["INT_ADD", "register:40f0:8", ["const:9b97a4:8", "const:4:8"]]
- 009b97a4 ["CALL", null, ["callee:009adbbc:8"]]
+ 009b97f8 ["INT_ADD", "register:40f0:8", ["const:9b97f8:8", "const:4:8"]]
+ 009b97f8 ["CALL", null, ["callee:009adbbc:8"]]
- 009b97d8 ["COPY", "register:0:8", ["register:4040:8"]]
- 009b97d8 ["INT_ADD", "register:40f0:8", ["const:9b97d8:8", "const:4:8"]]
- 009b97d8 ["CALLIND", null, ["register:0:8"]]
+ 009b982c ["COPY", "register:0:8", ["register:4040:8"]]
+ 009b982c ["INT_ADD", "register:40f0:8", ["const:9b982c:8", "const:4:8"]]
+ 009b982c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-11db416dde3d4df6eda83e524fe6b10c"></a>

### [`009b9e00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b9/009b9e00.md) → [`009b9e54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b9/009b9e54.md) FUN_009b9e54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009b9740`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b9/009b9740.md) · 呼出先 6件 [`00468f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f4c.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`0046af0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046af0c.md) [`0046da5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046da5c.md) [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md)
- 新版 呼出元 1件 [`009b9794`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b9/009b9794.md) · 呼出先 6件 [`00468f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468f8c.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046af4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af4c.md) [`0046da9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046da9c.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009b9e58 ["INT_ADD", "register:40f0:8", ["const:9b9e58:8", "const:4:8"]]
- 009b9e58 ["CALL", null, ["callee:00468fc8:8"]]
+ 009b9eac ["INT_ADD", "register:40f0:8", ["const:9b9eac:8", "const:4:8"]]
+ 009b9eac ["CALL", null, ["callee:00468fc8:8"]]
- 009b9ea4 ["INT_ADD", "register:40f0:8", ["const:9b9ea4:8", "const:4:8"]]
- 009b9ea4 ["CALL", null, ["callee:00489f8c:8"]]
+ 009b9ef8 ["INT_ADD", "register:40f0:8", ["const:9b9ef8:8", "const:4:8"]]
+ 009b9ef8 ["CALL", null, ["callee:00489f8c:8"]]
- 009b9eb4 ["INT_ADD", "register:40f0:8", ["const:9b9eb4:8", "const:4:8"]]
- 009b9eb4 ["CALL", null, ["callee:00489f8c:8"]]
+ 009b9f08 ["INT_ADD", "register:40f0:8", ["const:9b9f08:8", "const:4:8"]]
+ 009b9f08 ["CALL", null, ["callee:00489f8c:8"]]
~~~


<a id="compare-00f29779b0cd86811a14bc1c95fb44d3"></a>

### [`009ba03c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ba/009ba03c.md) → [`009ba090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009ba090.md) FUN_009ba090

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) [`0089e87c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089e/0089e87c.md) · 呼出先 1件 [`009adb68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ad/009adb68.md)
- 新版 呼出元 2件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 1件 [`009adbbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009adbbc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ba050 ["INT_ADD", "register:40f0:8", ["const:9ba050:8", "const:4:8"]]
- 009ba050 ["CALL", null, ["callee:009adbbc:8"]]
+ 009ba0a4 ["INT_ADD", "register:40f0:8", ["const:9ba0a4:8", "const:4:8"]]
+ 009ba0a4 ["CALL", null, ["callee:009adbbc:8"]]
~~~


<a id="compare-fd87fe52524d7cc58358e6254313c31f"></a>

### [`009bcd58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bc/009bcd58.md) → [`009bcdac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bc/009bcdac.md) FUN_009bcdac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`009bdb38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bd/009bdb38.md) [`009bdc80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bd/009bdc80.md) · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 2件 [`009bdb8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bdb8c.md) [`009bdcd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bdcd4.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

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
      "definition_site": "009bce24",
      "incomplete_value": true,
      "site": "009bce2c",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 10,
    "slot": 1
  }
]
~~~


~~~diff
- 009bce2c ["COPY", "register:0:8", ["register:4040:8"]]
- 009bce2c ["INT_ADD", "register:40f0:8", ["const:9bce2c:8", "const:4:8"]]
- 009bce2c ["CALLIND", null, ["register:0:8"]]
+ 009bce80 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009bce80 ["INT_ADD", "register:40f0:8", ["const:9bce80:8", "const:4:8"]]
+ 009bce80 ["CALLIND", null, ["register:0:8"]]
- 009bcd7c ["INT_ADD", "register:40f0:8", ["const:9bcd7c:8", "const:4:8"]]
- 009bcd7c ["CALL", null, ["callee:00c53da0:8"]]
+ 009bcdd0 ["INT_ADD", "register:40f0:8", ["const:9bcdd0:8", "const:4:8"]]
+ 009bcdd0 ["CALL", null, ["callee:00c53da0:8"]]
- 009bcd90 ["COPY", "register:0:8", ["register:4040:8"]]
- 009bcd90 ["INT_ADD", "register:40f0:8", ["const:9bcd90:8", "const:4:8"]]
- 009bcd90 ["CALLIND", null, ["register:0:8"]]
+ 009bcde4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009bcde4 ["INT_ADD", "register:40f0:8", ["const:9bcde4:8", "const:4:8"]]
+ 009bcde4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d80adc591fe8b8aacf7ff54a354955e5"></a>

### [`009be2e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009be/009be2e0.md) → [`009be334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009be/009be334.md) FUN_009be334

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009bedcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009be/009bedcc.md) · 呼出先 7件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00468804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468804.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0048ab30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048a/0048ab30.md)
- 新版 呼出元 1件 [`009bee20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009be/009bee20.md) · 呼出先 7件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0048ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009be328 ["INT_ADD", "register:40f0:8", ["const:9be328:8", "const:4:8"]]
- 009be328 ["CALL", null, ["callee:009bd2b4:8"]]
+ 009be37c ["INT_ADD", "register:40f0:8", ["const:9be37c:8", "const:4:8"]]
+ 009be37c ["CALL", null, ["callee:009bd2b4:8"]]
- 009be37c ["INT_ADD", "register:40f0:8", ["const:9be37c:8", "const:4:8"]]
- 009be37c ["CALL", null, ["callee:004678a0:8"]]
+ 009be3d0 ["INT_ADD", "register:40f0:8", ["const:9be3d0:8", "const:4:8"]]
+ 009be3d0 ["CALL", null, ["callee:004678a0:8"]]
- 009be390 ["INT_ADD", "register:40f0:8", ["const:9be390:8", "const:4:8"]]
- 009be390 ["CALL", null, ["callee:00467b6c:8"]]
+ 009be3e4 ["INT_ADD", "register:40f0:8", ["const:9be3e4:8", "const:4:8"]]
+ 009be3e4 ["CALL", null, ["callee:00467b6c:8"]]
~~~


<a id="compare-72291ee2412999bdf2b470956e6c5d32"></a>

### [`009c0f00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c0f00.md) → [`009c0f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0f54.md) FUN_009c0f54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`009c058c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c058c.md) [`009c0d78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c0d78.md) · 呼出先 3件 [`004616d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00461/004616d0.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 2件 [`009c05e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c05e0.md) [`009c0dcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0dcc.md) · 呼出先 3件 [`00461710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00461/00461710.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009c0f28 ["INT_ADD", "register:40f0:8", ["const:9c0f28:8", "const:4:8"]]
- 009c0f28 ["CALL", null, ["callee:00c53d70:8"]]
+ 009c0f7c ["INT_ADD", "register:40f0:8", ["const:9c0f7c:8", "const:4:8"]]
+ 009c0f7c ["CALL", null, ["callee:00c53d70:8"]]
- 009c0f40 ["INT_ADD", "register:40f0:8", ["const:9c0f40:8", "const:4:8"]]
- 009c0f40 ["CALL", null, ["callee:00c53d70:8"]]
+ 009c0f94 ["INT_ADD", "register:40f0:8", ["const:9c0f94:8", "const:4:8"]]
+ 009c0f94 ["CALL", null, ["callee:00c53d70:8"]]
- 009c0f58 ["INT_ADD", "register:40f0:8", ["const:9c0f58:8", "const:4:8"]]
- 009c0f58 ["CALL", null, ["callee:00c53d70:8"]]
+ 009c0fac ["INT_ADD", "register:40f0:8", ["const:9c0fac:8", "const:4:8"]]
+ 009c0fac ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-47d1d5d7208a997b4b8bf0f3c112fce8"></a>

### [`009c0fe4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c0fe4.md) → [`009c1038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c1038.md) FUN_009c1038

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`008697c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/008697c8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00869820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869820.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009c1008 ["INT_ADD", "register:40f0:8", ["const:9c1008:8", "const:4:8"]]
- 009c1008 ["CALL", null, ["callee:00869820:8"]]
+ 009c105c ["INT_ADD", "register:40f0:8", ["const:9c105c:8", "const:4:8"]]
+ 009c105c ["CALL", null, ["callee:00869820:8"]]
~~~


<a id="compare-c1472126f49684d9c9db5ff16d380cb4"></a>

### [`009c104c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c1/009c104c.md) → [`009c10a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c1/009c10a0.md) FUN_009c10a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal`

- 旧版 呼出元 1件 [`009c0d78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c0/009c0d78.md) · 呼出先 2件 [`008697c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/008697c8.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`009c0dcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c0/009c0dcc.md) · 呼出先 2件 [`00869820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869820.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, local_def_use, operands_and_dependencies, store_value

命令の説明率　旧版 98.63% / 新版 98.63%

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009c111c",
      "value": [
        "live",
        "register:5000:16"
      ]
    },
    "old": {
      "definition_site": "009c10bc",
      "incomplete_value": true,
      "site": "009c10c8",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:40b0:8"
              ],
              [
                "leaf",
                "const:50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 2
  }
]
~~~


~~~diff
- 009c1134 ["INT_ADD", "register:40f0:8", ["const:9c1134:8", "const:4:8"]]
- 009c1134 ["CALL", null, ["callee:00c580d0:8"]]
+ 009c1188 ["INT_ADD", "register:40f0:8", ["const:9c1188:8", "const:4:8"]]
+ 009c1188 ["CALL", null, ["callee:00c580d0:8"]]
- 009c1150 ["INT_ADD", "register:40f0:8", ["const:9c1150:8", "const:4:8"]]
- 009c1150 ["CALL", null, ["callee:00869820:8"]]
+ 009c11a4 ["INT_ADD", "register:40f0:8", ["const:9c11a4:8", "const:4:8"]]
+ 009c11a4 ["CALL", null, ["callee:00869820:8"]]
~~~


<a id="compare-0fbe9bde9288598389bc053f16fac92a"></a>

### [`009c271c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c2/009c271c.md) → [`009c2770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c2/009c2770.md) FUN_009c2770

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`009c2628`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c2/009c2628.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`009c267c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c2/009c267c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009c272c ["INT_ADD", "register:40f0:8", ["const:9c272c:8", "const:4:8"]]
- 009c272c ["CALL", null, ["callee:009c267c:8"]]
+ 009c2780 ["INT_ADD", "register:40f0:8", ["const:9c2780:8", "const:4:8"]]
+ 009c2780 ["CALL", null, ["callee:009c267c:8"]]
~~~


<a id="compare-98d6f961f7e7850e67a5ba4b67a3e4af"></a>

### [`009c3350`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c3/009c3350.md) → [`009c33a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c3/009c33a4.md) FUN_009c33a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0084e59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0084e/0084e59c.md) · 呼出先 3件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`0086a888`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a888.md) [`0086bb54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086bb54.md)
- 新版 呼出元 1件 [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) · 呼出先 3件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`0086a8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a8e0.md) [`0086bbac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bbac.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009c3388 ["INT_ADD", "register:40f0:8", ["const:9c3388:8", "const:4:8"]]
- 009c3388 ["CALL", null, ["callee:005c17dc:8"]]
+ 009c33dc ["INT_ADD", "register:40f0:8", ["const:9c33dc:8", "const:4:8"]]
+ 009c33dc ["CALL", null, ["callee:005c17dc:8"]]
- 009c33a4 ["INT_ADD", "register:40f0:8", ["const:9c33a4:8", "const:4:8"]]
- 009c33a4 ["CALL", null, ["callee:0086bbac:8"]]
+ 009c33f8 ["INT_ADD", "register:40f0:8", ["const:9c33f8:8", "const:4:8"]]
+ 009c33f8 ["CALL", null, ["callee:0086bbac:8"]]
- 009c33bc ["INT_ADD", "register:40f0:8", ["const:9c33bc:8", "const:4:8"]]
- 009c33bc ["CALL", null, ["callee:0086a8e0:8"]]
+ 009c3410 ["INT_ADD", "register:40f0:8", ["const:9c3410:8", "const:4:8"]]
+ 009c3410 ["CALL", null, ["callee:0086a8e0:8"]]
~~~


<a id="compare-3486fb9a38cb4bf4c198896ef32cfa50"></a>

### [`009c7784`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c7/009c7784.md) → [`009c77d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c7/009c77d8.md) FUN_009c77d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00985418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00985/00985418.md) [`009a3200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a3200.md) · 呼出先 1件 [`009c77cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c7/009c77cc.md)
- 新版 呼出元 2件 [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) [`009a3254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3254.md) · 呼出先 1件 [`009c7820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c7/009c7820.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009c779c ["INT_ADD", "register:40f0:8", ["const:9c779c:8", "const:4:8"]]
- 009c779c ["CALL", null, ["callee:009c7820:8"]]
+ 009c77f0 ["INT_ADD", "register:40f0:8", ["const:9c77f0:8", "const:4:8"]]
+ 009c77f0 ["CALL", null, ["callee:009c7820:8"]]
~~~


<a id="compare-fceaede4a85307ab3bbe8af40cfa3898"></a>

### [`009c7ba8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c7/009c7ba8.md) → [`009c7bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c7/009c7bfc.md) FUN_009c7bfc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`0099691c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00996/0099691c.md) [`0099703c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00997/0099703c.md) [`0099ba70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0099b/0099ba70.md) [`009c77cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c7/009c77cc.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 4件 [`00996970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00996/00996970.md) [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) [`0099bac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0099b/0099bac4.md) [`009c7820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c7/009c7820.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009c7c54 ["INT_ADD", "register:40f0:8", ["const:9c7c54:8", "const:4:8"]]
- 009c7c54 ["CALL", null, ["callee:00c57f60:8"]]
+ 009c7ca8 ["INT_ADD", "register:40f0:8", ["const:9c7ca8:8", "const:4:8"]]
+ 009c7ca8 ["CALL", null, ["callee:00c57f60:8"]]
- 009c7c90 ["INT_ADD", "register:40f0:8", ["const:9c7c90:8", "const:4:8"]]
- 009c7c90 ["CALL", null, ["callee:0043bbe4:8"]]
+ 009c7ce4 ["INT_ADD", "register:40f0:8", ["const:9c7ce4:8", "const:4:8"]]
+ 009c7ce4 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-1d2c246afad829a32a18d7a0f8e0da79"></a>

### [`009c7cb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c7/009c7cb0.md) → [`009c7d04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c7/009c7d04.md) FUN_009c7d04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00985418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00985/00985418.md) [`009a2e0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a2/009a2e0c.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 2件 [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) [`009a2e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a2/009a2e60.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009c7d5c ["INT_ADD", "register:40f0:8", ["const:9c7d5c:8", "const:4:8"]]
- 009c7d5c ["CALL", null, ["callee:00c57f60:8"]]
+ 009c7db0 ["INT_ADD", "register:40f0:8", ["const:9c7db0:8", "const:4:8"]]
+ 009c7db0 ["CALL", null, ["callee:00c57f60:8"]]
- 009c7d9c ["INT_ADD", "register:40f0:8", ["const:9c7d9c:8", "const:4:8"]]
- 009c7d9c ["CALL", null, ["callee:0043bbe4:8"]]
+ 009c7df0 ["INT_ADD", "register:40f0:8", ["const:9c7df0:8", "const:4:8"]]
+ 009c7df0 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-84f4e1da071ed6718dcd83c7ed79c507"></a>

### [`009c7dbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c7/009c7dbc.md) → [`009c7e10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c7/009c7e10.md) FUN_009c7e10

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a261bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a26/00a261bc.md) · 呼出先 13件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00480118`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480118.md) [`00480178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480178.md)
- 新版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 13件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00480158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480158.md) [`004801b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/004801b8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009c7df0 ["INT_ADD", "register:40f0:8", ["const:9c7df0:8", "const:4:8"]]
- 009c7df0 ["CALL", null, ["callee:004801b8:8"]]
+ 009c7e44 ["INT_ADD", "register:40f0:8", ["const:9c7e44:8", "const:4:8"]]
+ 009c7e44 ["CALL", null, ["callee:004801b8:8"]]
- 009c7e20 ["INT_ADD", "register:40f0:8", ["const:9c7e20:8", "const:4:8"]]
- 009c7e20 ["CALL", null, ["callee:004801b8:8"]]
+ 009c7e74 ["INT_ADD", "register:40f0:8", ["const:9c7e74:8", "const:4:8"]]
+ 009c7e74 ["CALL", null, ["callee:004801b8:8"]]
- 009c7e74 ["INT_ADD", "register:40f0:8", ["const:9c7e74:8", "const:4:8"]]
- 009c7e74 ["CALL", null, ["callee:00c57f60:8"]]
+ 009c7ec8 ["INT_ADD", "register:40f0:8", ["const:9c7ec8:8", "const:4:8"]]
+ 009c7ec8 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-fbf0fda39f863bfbc61b013a6254c948"></a>

### [`009c8860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c8/009c8860.md) → [`009c88b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c8/009c88b4.md) FUN_009c88b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00a2b2e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2b/00a2b2e8.md) · 呼出先 3件 [`00480b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480b38.md) [`00480b90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480b90.md) [`00480be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480be8.md)
- 新版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 3件 [`00480b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480b78.md) [`00480bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480bd0.md) [`00480c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480c28.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009c8890 ["INT_ADD", "register:40f0:8", ["const:9c8890:8", "const:4:8"]]
- 009c8890 ["CALL", null, ["callee:00480bd0:8"]]
+ 009c88e4 ["INT_ADD", "register:40f0:8", ["const:9c88e4:8", "const:4:8"]]
+ 009c88e4 ["CALL", null, ["callee:00480bd0:8"]]
- 009c88a8 ["INT_ADD", "register:40f0:8", ["const:9c88a8:8", "const:4:8"]]
- 009c88a8 ["CALL", null, ["callee:00480bd0:8"]]
+ 009c88fc ["INT_ADD", "register:40f0:8", ["const:9c88fc:8", "const:4:8"]]
+ 009c88fc ["CALL", null, ["callee:00480bd0:8"]]
- 009c88c4 ["INT_ADD", "register:40f0:8", ["const:9c88c4:8", "const:4:8"]]
- 009c88c4 ["CALL", null, ["callee:00480bd0:8"]]
+ 009c8918 ["INT_ADD", "register:40f0:8", ["const:9c8918:8", "const:4:8"]]
+ 009c8918 ["CALL", null, ["callee:00480bd0:8"]]
~~~


<a id="compare-00607cbea4e3788f83b1695943df6e03"></a>

### [`009c8adc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c8/009c8adc.md) → [`009c8b30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c8/009c8b30.md) FUN_009c8b30

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009c3a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c3/009c3a10.md) · 呼出先 2件 [`00494610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00494/00494610.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009c3a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c3/009c3a64.md) · 呼出先 2件 [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009c8b8c ["INT_ADD", "register:40f0:8", ["const:9c8b8c:8", "const:4:8"]]
- 009c8b8c ["CALL", null, ["callee:00494650:8"]]
+ 009c8be0 ["INT_ADD", "register:40f0:8", ["const:9c8be0:8", "const:4:8"]]
+ 009c8be0 ["CALL", null, ["callee:00494650:8"]]
- 009c8b9c ["INT_ADD", "register:40f0:8", ["const:9c8b9c:8", "const:4:8"]]
- 009c8b9c ["CALL", null, ["callee:00c57f80:8"]]
+ 009c8bf0 ["INT_ADD", "register:40f0:8", ["const:9c8bf0:8", "const:4:8"]]
+ 009c8bf0 ["CALL", null, ["callee:00c57f80:8"]]
- 009c8ba4 ["INT_ADD", "register:40f0:8", ["const:9c8ba4:8", "const:4:8"]]
- 009c8ba4 ["CALL", null, ["callee:00c57f80:8"]]
+ 009c8bf8 ["INT_ADD", "register:40f0:8", ["const:9c8bf8:8", "const:4:8"]]
+ 009c8bf8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-52214a17f2f48dcbe5130bab184564bf"></a>

### [`009c9bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c9/009c9bb8.md) → [`009c9c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c9/009c9c0c.md) FUN_009c9c0c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`009c3a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c3/009c3a10.md) [`009c9bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c9/009c9bb8.md) [`009ca054`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ca/009ca054.md) · 呼出先 4件 [`009c9bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c9/009c9bb8.md) [`009c9ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c9/009c9ee0.md) [`009ca054`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ca/009ca054.md) [`009ca338`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ca/009ca338.md)
- 新版 呼出元 3件 [`009c3a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c3/009c3a64.md) [`009c9c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c9/009c9c0c.md) [`009ca0a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009ca0a8.md) · 呼出先 4件 [`009c9c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c9/009c9c0c.md) [`009c9f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c9/009c9f34.md) [`009ca0a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009ca0a8.md) [`009ca38c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009ca38c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009c9c0c ["INT_ADD", "register:40f0:8", ["const:9c9c0c:8", "const:4:8"]]
- 009c9c0c ["CALL", null, ["callee:009c9f34:8"]]
+ 009c9c60 ["INT_ADD", "register:40f0:8", ["const:9c9c60:8", "const:4:8"]]
+ 009c9c60 ["CALL", null, ["callee:009c9f34:8"]]
- 009c9c7c ["INT_ADD", "register:40f0:8", ["const:9c9c7c:8", "const:4:8"]]
- 009c9c7c ["CALL", null, ["callee:009c9f34:8"]]
+ 009c9cd0 ["INT_ADD", "register:40f0:8", ["const:9c9cd0:8", "const:4:8"]]
+ 009c9cd0 ["CALL", null, ["callee:009c9f34:8"]]
- 009c9ca8 ["INT_ADD", "register:40f0:8", ["const:9c9ca8:8", "const:4:8"]]
- 009c9ca8 ["CALL", null, ["callee:009c9f34:8"]]
+ 009c9cfc ["INT_ADD", "register:40f0:8", ["const:9c9cfc:8", "const:4:8"]]
+ 009c9cfc ["CALL", null, ["callee:009c9f34:8"]]
~~~


<a id="compare-246b0e5020a28f82766d2769a3e32dcd"></a>

### [`009c9ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c9/009c9ee0.md) → [`009c9f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c9/009c9f34.md) FUN_009c9f34

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`009c9bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c9/009c9bb8.md) [`009ca054`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ca/009ca054.md) [`009ca338`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ca/009ca338.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 3件 [`009c9c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c9/009c9c0c.md) [`009ca0a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009ca0a8.md) [`009ca38c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009ca38c.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009c9f54 ["INT_ADD", "register:40f0:8", ["const:9c9f54:8", "const:4:8"]]
- 009c9f54 ["CALL", null, ["callee:00c57f60:8"]]
+ 009c9fa8 ["INT_ADD", "register:40f0:8", ["const:9c9fa8:8", "const:4:8"]]
+ 009c9fa8 ["CALL", null, ["callee:00c57f60:8"]]
- 009c9f90 ["INT_ADD", "register:40f0:8", ["const:9c9f90:8", "const:4:8"]]
- 009c9f90 ["CALL", null, ["callee:0043bbe4:8"]]
+ 009c9fe4 ["INT_ADD", "register:40f0:8", ["const:9c9fe4:8", "const:4:8"]]
+ 009c9fe4 ["CALL", null, ["callee:0043bbe4:8"]]
- 009c9fe4 ["INT_ADD", "register:40f0:8", ["const:9c9fe4:8", "const:4:8"]]
- 009c9fe4 ["CALL", null, ["callee:00c57f60:8"]]
+ 009ca038 ["INT_ADD", "register:40f0:8", ["const:9ca038:8", "const:4:8"]]
+ 009ca038 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-02bdc6ca4bb52128276f394e9bfcf19b"></a>

### [`009ca054`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ca/009ca054.md) → [`009ca0a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009ca0a8.md) FUN_009ca0a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009c9bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c9/009c9bb8.md) · 呼出先 2件 [`009c9bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c9/009c9bb8.md) [`009c9ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c9/009c9ee0.md)
- 新版 呼出元 1件 [`009c9c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c9/009c9c0c.md) · 呼出先 2件 [`009c9c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c9/009c9c0c.md) [`009c9f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c9/009c9f34.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ca0a0 ["INT_ADD", "register:40f0:8", ["const:9ca0a0:8", "const:4:8"]]
- 009ca0a0 ["CALL", null, ["callee:009c9f34:8"]]
+ 009ca0f4 ["INT_ADD", "register:40f0:8", ["const:9ca0f4:8", "const:4:8"]]
+ 009ca0f4 ["CALL", null, ["callee:009c9f34:8"]]
- 009ca130 ["INT_ADD", "register:40f0:8", ["const:9ca130:8", "const:4:8"]]
- 009ca130 ["CALL", null, ["callee:009c9f34:8"]]
+ 009ca184 ["INT_ADD", "register:40f0:8", ["const:9ca184:8", "const:4:8"]]
+ 009ca184 ["CALL", null, ["callee:009c9f34:8"]]
- 009ca164 ["INT_ADD", "register:40f0:8", ["const:9ca164:8", "const:4:8"]]
- 009ca164 ["CALL", null, ["callee:009c9f34:8"]]
+ 009ca1b8 ["INT_ADD", "register:40f0:8", ["const:9ca1b8:8", "const:4:8"]]
+ 009ca1b8 ["CALL", null, ["callee:009c9f34:8"]]
~~~


<a id="compare-d4274329d94bdf889194ffed292d20ad"></a>

### [`009ca338`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ca/009ca338.md) → [`009ca38c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009ca38c.md) FUN_009ca38c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`009c9bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c9/009c9bb8.md) [`009ca338`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ca/009ca338.md) · 呼出先 4件 [`009c9ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c9/009c9ee0.md) [`009ca338`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ca/009ca338.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 2件 [`009c9c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c9/009c9c0c.md) [`009ca38c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009ca38c.md) · 呼出先 4件 [`009c9f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c9/009c9f34.md) [`009ca38c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009ca38c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ca3b0 ["INT_ADD", "register:40f0:8", ["const:9ca3b0:8", "const:4:8"]]
- 009ca3b0 ["CALL", null, ["callee:009c9f34:8"]]
+ 009ca404 ["INT_ADD", "register:40f0:8", ["const:9ca404:8", "const:4:8"]]
+ 009ca404 ["CALL", null, ["callee:009c9f34:8"]]
- 009ca428 ["INT_ADD", "register:40f0:8", ["const:9ca428:8", "const:4:8"]]
- 009ca428 ["CALL", null, ["callee:009c9f34:8"]]
+ 009ca47c ["INT_ADD", "register:40f0:8", ["const:9ca47c:8", "const:4:8"]]
+ 009ca47c ["CALL", null, ["callee:009c9f34:8"]]
- 009ca520 ["INT_ADD", "register:40f0:8", ["const:9ca520:8", "const:4:8"]]
- 009ca520 ["CALL", null, ["callee:009c9f34:8"]]
+ 009ca574 ["INT_ADD", "register:40f0:8", ["const:9ca574:8", "const:4:8"]]
+ 009ca574 ["CALL", null, ["callee:009c9f34:8"]]
~~~


<a id="compare-414af3d99ded8b23ff924eb0055512cf"></a>

### [`009cc648`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009cc/009cc648.md) → [`009cc69c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009cc69c.md) FUN_009cc69c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`00802f3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802f3c.md) · 呼出先 6件 [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`0087eb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087e/0087eb20.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 2件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00802f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802f94.md) · 呼出先 6件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`0087eb78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087eb78.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009cc67c ["INT_ADD", "register:40f0:8", ["const:9cc67c:8", "const:4:8"]]
- 009cc67c ["CALL", null, ["callee:0087eb78:8"]]
+ 009cc6d0 ["INT_ADD", "register:40f0:8", ["const:9cc6d0:8", "const:4:8"]]
+ 009cc6d0 ["CALL", null, ["callee:0087eb78:8"]]
- 009cc694 ["INT_ADD", "register:40f0:8", ["const:9cc694:8", "const:4:8"]]
- 009cc694 ["CALL", null, ["callee:00c53d70:8"]]
+ 009cc6e8 ["INT_ADD", "register:40f0:8", ["const:9cc6e8:8", "const:4:8"]]
+ 009cc6e8 ["CALL", null, ["callee:00c53d70:8"]]
- 009cc6a8 ["INT_ADD", "register:40f0:8", ["const:9cc6a8:8", "const:4:8"]]
- 009cc6a8 ["CALL", null, ["callee:00c53da0:8"]]
+ 009cc6fc ["INT_ADD", "register:40f0:8", ["const:9cc6fc:8", "const:4:8"]]
+ 009cc6fc ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-1c36c39bb3e2fe403302a063cd533bb3"></a>

### [`009d35a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d3/009d35a4.md) → [`009d35f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d3/009d35f8.md) FUN_009d35f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009d0320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d0/009d0320.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009d360c ["INT_ADD", "register:40f0:8", ["const:9d360c:8", "const:4:8"]]
- 009d360c ["CALL", null, ["callee:00c57f60:8"]]
+ 009d3660 ["INT_ADD", "register:40f0:8", ["const:9d3660:8", "const:4:8"]]
+ 009d3660 ["CALL", null, ["callee:00c57f60:8"]]
- 009d3644 ["INT_ADD", "register:40f0:8", ["const:9d3644:8", "const:4:8"]]
- 009d3644 ["CALL", null, ["callee:0043bbe4:8"]]
+ 009d3698 ["INT_ADD", "register:40f0:8", ["const:9d3698:8", "const:4:8"]]
+ 009d3698 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-dd61cfafb075e2bb3639646d8f8937dd"></a>

### [`009d366c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d3/009d366c.md) → [`009d36c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d3/009d36c0.md) FUN_009d36c0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009d0320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d0/009d0320.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009d36d4 ["INT_ADD", "register:40f0:8", ["const:9d36d4:8", "const:4:8"]]
- 009d36d4 ["CALL", null, ["callee:00c57f60:8"]]
+ 009d3728 ["INT_ADD", "register:40f0:8", ["const:9d3728:8", "const:4:8"]]
+ 009d3728 ["CALL", null, ["callee:00c57f60:8"]]
- 009d370c ["INT_ADD", "register:40f0:8", ["const:9d370c:8", "const:4:8"]]
- 009d370c ["CALL", null, ["callee:0043bbe4:8"]]
+ 009d3760 ["INT_ADD", "register:40f0:8", ["const:9d3760:8", "const:4:8"]]
+ 009d3760 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-51c91224dd9e07de3c592795ed3805bc"></a>

### [`009d3734`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d3/009d3734.md) → [`009d3788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d3/009d3788.md) FUN_009d3788

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009d0320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d0/009d0320.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009d3778 ["INT_ADD", "register:40f0:8", ["const:9d3778:8", "const:4:8"]]
- 009d3778 ["CALL", null, ["callee:00c58120:8"]]
+ 009d37cc ["INT_ADD", "register:40f0:8", ["const:9d37cc:8", "const:4:8"]]
+ 009d37cc ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-9ebaf1fd67de27ecbf88ec56cd9aae7a"></a>

### [`009d379c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d3/009d379c.md) → [`009d37f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d3/009d37f0.md) FUN_009d37f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009d0320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d0/009d0320.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009d3804 ["INT_ADD", "register:40f0:8", ["const:9d3804:8", "const:4:8"]]
- 009d3804 ["CALL", null, ["callee:00c57f60:8"]]
+ 009d3858 ["INT_ADD", "register:40f0:8", ["const:9d3858:8", "const:4:8"]]
+ 009d3858 ["CALL", null, ["callee:00c57f60:8"]]
- 009d3840 ["INT_ADD", "register:40f0:8", ["const:9d3840:8", "const:4:8"]]
- 009d3840 ["CALL", null, ["callee:0043bbe4:8"]]
+ 009d3894 ["INT_ADD", "register:40f0:8", ["const:9d3894:8", "const:4:8"]]
+ 009d3894 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-560325af8370ee915dce450fe674ef91"></a>

### [`009d3868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d3/009d3868.md) → [`009d38bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d3/009d38bc.md) FUN_009d38bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009d0320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d0/009d0320.md) · 呼出先 2件 [`00494610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00494/00494610.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) · 呼出先 2件 [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009d3914 ["INT_ADD", "register:40f0:8", ["const:9d3914:8", "const:4:8"]]
- 009d3914 ["CALL", null, ["callee:00494650:8"]]
+ 009d3968 ["INT_ADD", "register:40f0:8", ["const:9d3968:8", "const:4:8"]]
+ 009d3968 ["CALL", null, ["callee:00494650:8"]]
- 009d391c ["INT_ADD", "register:40f0:8", ["const:9d391c:8", "const:4:8"]]
- 009d391c ["CALL", null, ["callee:00c57f80:8"]]
+ 009d3970 ["INT_ADD", "register:40f0:8", ["const:9d3970:8", "const:4:8"]]
+ 009d3970 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-e3b6a5aad8628914fac04ed4f12e0263"></a>

### [`009d3930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d3/009d3930.md) → [`009d3984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d3/009d3984.md) FUN_009d3984

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009d0320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d0/009d0320.md) · 呼出先 8件 [`00800378`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00800/00800378.md) [`00a34218`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a34/00a34218.md) [`00a34750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a34/00a34750.md) [`00a356d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a35/00a356d0.md) [`00a356e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a35/00a356e0.md)
- 新版 呼出元 1件 [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) · 呼出先 8件 [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) [`00a3426c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a34/00a3426c.md) [`00a347a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a34/00a347a4.md) [`00a35724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a35/00a35724.md) [`00a35734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a35/00a35734.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009d3974 ["INT_ADD", "register:40f0:8", ["const:9d3974:8", "const:4:8"]]
- 009d3974 ["CALL", null, ["callee:008003d0:8"]]
+ 009d39c8 ["INT_ADD", "register:40f0:8", ["const:9d39c8:8", "const:4:8"]]
+ 009d39c8 ["CALL", null, ["callee:008003d0:8"]]
- 009d397c ["INT_ADD", "register:40f0:8", ["const:9d397c:8", "const:4:8"]]
- 009d397c ["CALL", null, ["callee:00a35bec:8"]]
+ 009d39d0 ["INT_ADD", "register:40f0:8", ["const:9d39d0:8", "const:4:8"]]
+ 009d39d0 ["CALL", null, ["callee:00a35bec:8"]]
- 009d3980 ["INT_ADD", "register:40f0:8", ["const:9d3980:8", "const:4:8"]]
- 009d3980 ["CALL", null, ["callee:00a38bc0:8"]]
+ 009d39d4 ["INT_ADD", "register:40f0:8", ["const:9d39d4:8", "const:4:8"]]
+ 009d39d4 ["CALL", null, ["callee:00a38bc0:8"]]
~~~


<a id="compare-c05e74921708622e1955140ae9f40592"></a>

### [`009d5aa8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d5/009d5aa8.md) → [`009d5afc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d5/009d5afc.md) FUN_009d5afc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 22件 [`0066d6a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0066d/0066d6a0.md) [`00677a40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00677/00677a40.md) [`0067e7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0067e/0067e7f8.md) [`006b380c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b3/006b380c.md) [`006bbc98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006bb/006bbc98.md) · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 22件 [`0066d6e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d6e0.md) [`00677a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00677/00677a80.md) [`0067e838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067e/0067e838.md) [`006b3864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b3864.md) [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009d5ad4 ["INT_ADD", "register:40f0:8", ["const:9d5ad4:8", "const:4:8"]]
- 009d5ad4 ["CALL", null, ["callee:00c53da0:8"]]
+ 009d5b28 ["INT_ADD", "register:40f0:8", ["const:9d5b28:8", "const:4:8"]]
+ 009d5b28 ["CALL", null, ["callee:00c53da0:8"]]
- 009d5aec ["COPY", "register:0:8", ["register:4040:8"]]
- 009d5aec ["INT_ADD", "register:40f0:8", ["const:9d5aec:8", "const:4:8"]]
- 009d5aec ["CALLIND", null, ["register:0:8"]]
+ 009d5b40 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009d5b40 ["INT_ADD", "register:40f0:8", ["const:9d5b40:8", "const:4:8"]]
+ 009d5b40 ["CALLIND", null, ["register:0:8"]]
- 009d5af4 ["INT_ADD", "register:40f0:8", ["const:9d5af4:8", "const:4:8"]]
- 009d5af4 ["CALL", null, ["callee:00c57f50:8"]]
+ 009d5b48 ["INT_ADD", "register:40f0:8", ["const:9d5b48:8", "const:4:8"]]
+ 009d5b48 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-3184f19a0a3365fda492cd50d23e1804"></a>

### [`009d7a2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d7/009d7a2c.md) → [`009d7a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d7/009d7a80.md) FUN_009d7a80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`009d5cf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d5/009d5cf8.md) · 呼出先 5件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`009dd0f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009dd/009dd0f0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`009d5d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d5/009d5d4c.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`009dd144`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009dd/009dd144.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009d7af4 ["INT_ADD", "register:40f0:8", ["const:9d7af4:8", "const:4:8"]]
- 009d7af4 ["CALL", null, ["callee:00c57f60:8"]]
+ 009d7b48 ["INT_ADD", "register:40f0:8", ["const:9d7b48:8", "const:4:8"]]
+ 009d7b48 ["CALL", null, ["callee:00c57f60:8"]]
- 009d7b40 ["INT_ADD", "register:40f0:8", ["const:9d7b40:8", "const:4:8"]]
- 009d7b40 ["CALL", null, ["callee:00c580d0:8"]]
+ 009d7b94 ["INT_ADD", "register:40f0:8", ["const:9d7b94:8", "const:4:8"]]
+ 009d7b94 ["CALL", null, ["callee:00c580d0:8"]]
- 009d7b54 ["INT_ADD", "register:40f0:8", ["const:9d7b54:8", "const:4:8"]]
- 009d7b54 ["CALL", null, ["callee:00c57f80:8"]]
+ 009d7ba8 ["INT_ADD", "register:40f0:8", ["const:9d7ba8:8", "const:4:8"]]
+ 009d7ba8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-fb1694fea8dbbb02335d6bc31b28720e"></a>

### [`009d9544`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d9/009d9544.md) → [`009d9598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d9/009d9598.md) FUN_009d9598

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b28f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b28/00b28f54.md) · 呼出先 10件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`007f1eb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f1/007f1eb8.md) [`0080f128`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0080f/0080f128.md) [`0080fbcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0080f/0080fbcc.md)
- 新版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 10件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`007f1f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1f10.md) [`0080f180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080f/0080f180.md) [`0080fc24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080f/0080fc24.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009d95c8 ["INT_ADD", "register:40f0:8", ["const:9d95c8:8", "const:4:8"]]
- 009d95c8 ["CALL", null, ["callee:00c57f60:8"]]
+ 009d961c ["INT_ADD", "register:40f0:8", ["const:9d961c:8", "const:4:8"]]
+ 009d961c ["CALL", null, ["callee:00c57f60:8"]]
- 009d9620 ["INT_ADD", "register:40f0:8", ["const:9d9620:8", "const:4:8"]]
- 009d9620 ["CALL", null, ["callee:0043bbe4:8"]]
+ 009d9674 ["INT_ADD", "register:40f0:8", ["const:9d9674:8", "const:4:8"]]
+ 009d9674 ["CALL", null, ["callee:0043bbe4:8"]]
- 009d9638 ["INT_ADD", "register:40f0:8", ["const:9d9638:8", "const:4:8"]]
- 009d9638 ["CALL", null, ["callee:0080f180:8"]]
+ 009d968c ["INT_ADD", "register:40f0:8", ["const:9d968c:8", "const:4:8"]]
+ 009d968c ["CALL", null, ["callee:0080f180:8"]]
~~~


<a id="compare-d968166fa8dc8ed3c10636ada09f36bb"></a>

### [`009dbd58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009db/009dbd58.md) → [`009dbdac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009db/009dbdac.md) FUN_009dbdac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00707ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/00707ee0.md) · 呼出先 2件 [`0046bd54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046b/0046bd54.md) [`004700b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/004700b4.md)
- 新版 呼出元 1件 [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) · 呼出先 2件 [`0046bd94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046b/0046bd94.md) [`004700f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/004700f4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009dbda8 ["INT_ADD", "register:40f0:8", ["const:9dbda8:8", "const:4:8"]]
- 009dbda8 ["CALL", null, ["callee:004700f4:8"]]
+ 009dbdfc ["INT_ADD", "register:40f0:8", ["const:9dbdfc:8", "const:4:8"]]
+ 009dbdfc ["CALL", null, ["callee:004700f4:8"]]
~~~


<a id="compare-71af181dd2ebd30baf0a65470f47880b"></a>

### [`009dbdd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009db/009dbdd0.md) → [`009dbe24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009db/009dbe24.md) FUN_009dbe24

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00707ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/00707ee0.md) · 呼出先 2件 [`0046bd54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046b/0046bd54.md) [`004700b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/004700b4.md)
- 新版 呼出元 1件 [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) · 呼出先 2件 [`0046bd94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046b/0046bd94.md) [`004700f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/004700f4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009dbe20 ["INT_ADD", "register:40f0:8", ["const:9dbe20:8", "const:4:8"]]
- 009dbe20 ["CALL", null, ["callee:004700f4:8"]]
+ 009dbe74 ["INT_ADD", "register:40f0:8", ["const:9dbe74:8", "const:4:8"]]
+ 009dbe74 ["CALL", null, ["callee:004700f4:8"]]
~~~


