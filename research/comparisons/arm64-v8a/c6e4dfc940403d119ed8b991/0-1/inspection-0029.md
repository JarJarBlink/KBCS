# v16.0.1 → v16.0.2 · 要調査の変更候補 (29)

[一覧の目次](README.md)

<a id="compare-82f59f9326adb6013026fb22124b76ae"></a>

### [`0088816c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00888/0088816c.md) → [`008881c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/008881c4.md) FUN_008881c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00888188 ["INT_ADD", "register:40f0:8", ["const:888188:8", "const:4:8"]]
- 00888188 ["CALL", null, ["callee:00c53da0:8"]]
+ 008881e0 ["INT_ADD", "register:40f0:8", ["const:8881e0:8", "const:4:8"]]
+ 008881e0 ["CALL", null, ["callee:00c53da0:8"]]
- 008881a8 ["COPY", "register:0:8", ["register:4040:8"]]
- 008881a8 ["INT_ADD", "register:40f0:8", ["const:8881a8:8", "const:4:8"]]
- 008881a8 ["CALLIND", null, ["register:0:8"]]
+ 00888200 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00888200 ["INT_ADD", "register:40f0:8", ["const:888200:8", "const:4:8"]]
+ 00888200 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-150a3295f21d1cee6fa9a688942687fe"></a>

### [`008881bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00888/008881bc.md) → [`00888214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888214.md) FUN_00888214

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008878d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/008878d8.md) · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008881d8 ["INT_ADD", "register:40f0:8", ["const:8881d8:8", "const:4:8"]]
- 008881d8 ["CALL", null, ["callee:00c53da0:8"]]
+ 00888230 ["INT_ADD", "register:40f0:8", ["const:888230:8", "const:4:8"]]
+ 00888230 ["CALL", null, ["callee:00c53da0:8"]]
- 008881f8 ["COPY", "register:0:8", ["register:4040:8"]]
- 008881f8 ["INT_ADD", "register:40f0:8", ["const:8881f8:8", "const:4:8"]]
- 008881f8 ["CALLIND", null, ["register:0:8"]]
+ 00888250 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00888250 ["INT_ADD", "register:40f0:8", ["const:888250:8", "const:4:8"]]
+ 00888250 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c637ed1b10d9738887870fea5e514d05"></a>

### [`0088820c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00888/0088820c.md) → [`00888264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888264.md) FUN_00888264

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008878d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/008878d8.md) · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00888228 ["INT_ADD", "register:40f0:8", ["const:888228:8", "const:4:8"]]
- 00888228 ["CALL", null, ["callee:00c53da0:8"]]
+ 00888280 ["INT_ADD", "register:40f0:8", ["const:888280:8", "const:4:8"]]
+ 00888280 ["CALL", null, ["callee:00c53da0:8"]]
- 00888248 ["COPY", "register:0:8", ["register:4040:8"]]
- 00888248 ["INT_ADD", "register:40f0:8", ["const:888248:8", "const:4:8"]]
- 00888248 ["CALLIND", null, ["register:0:8"]]
+ 008882a0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008882a0 ["INT_ADD", "register:40f0:8", ["const:8882a0:8", "const:4:8"]]
+ 008882a0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8f01d6b35dfc0ae37b2af055c28c1219"></a>

### [`0088825c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00888/0088825c.md) → [`008882b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/008882b4.md) FUN_008882b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008878d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/008878d8.md) · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00888278 ["INT_ADD", "register:40f0:8", ["const:888278:8", "const:4:8"]]
- 00888278 ["CALL", null, ["callee:00c53da0:8"]]
+ 008882d0 ["INT_ADD", "register:40f0:8", ["const:8882d0:8", "const:4:8"]]
+ 008882d0 ["CALL", null, ["callee:00c53da0:8"]]
- 00888298 ["COPY", "register:0:8", ["register:4040:8"]]
- 00888298 ["INT_ADD", "register:40f0:8", ["const:888298:8", "const:4:8"]]
- 00888298 ["CALLIND", null, ["register:0:8"]]
+ 008882f0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008882f0 ["INT_ADD", "register:40f0:8", ["const:8882f0:8", "const:4:8"]]
+ 008882f0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c3f43311ea666835f0235c3ebdec42a5"></a>

### [`008882ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00888/008882ac.md) → [`00888304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888304.md) FUN_00888304

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 10件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`006103bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00610/006103bc.md) [`00616950`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00616/00616950.md) [`006264c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00626/006264c4.md) [`006f24d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f2/006f24d4.md) · 呼出先 1件 [`00b37a18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b37/00b37a18.md)
- 新版 呼出元 10件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`006103fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00610/006103fc.md) [`00616990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/00616990.md) [`00626504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00626/00626504.md) [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) · 呼出先 1件 [`00b37ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37ab4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008883b8 ["COPY", "register:0:8", ["register:4040:8"]]
- 008883b8 ["INT_ADD", "register:40f0:8", ["const:8883b8:8", "const:4:8"]]
- 008883b8 ["CALLIND", null, ["register:0:8"]]
+ 00888410 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00888410 ["INT_ADD", "register:40f0:8", ["const:888410:8", "const:4:8"]]
+ 00888410 ["CALLIND", null, ["register:0:8"]]
- 008883c0 ["INT_ADD", "register:40f0:8", ["const:8883c0:8", "const:4:8"]]
- 008883c0 ["CALL", null, ["callee:00b37ab4:8"]]
+ 00888418 ["INT_ADD", "register:40f0:8", ["const:888418:8", "const:4:8"]]
+ 00888418 ["CALL", null, ["callee:00b37ab4:8"]]
~~~


<a id="compare-d382ad5b5ad9cbc3c9277df565691604"></a>

### [`008887c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00888/008887c0.md) → [`00888818`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888818.md) FUN_00888818

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00888848 ["COPY", "register:0:8", ["register:4040:8"]]
- 00888848 ["INT_ADD", "register:40f0:8", ["const:888848:8", "const:4:8"]]
- 00888848 ["CALLIND", null, ["register:0:8"]]
+ 008888a0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008888a0 ["INT_ADD", "register:40f0:8", ["const:8888a0:8", "const:4:8"]]
+ 008888a0 ["CALLIND", null, ["register:0:8"]]
- 00888850 ["INT_ADD", "register:40f0:8", ["const:888850:8", "const:4:8"]]
- 00888850 ["CALL", null, ["callee:00c57fb0:8"]]
+ 008888a8 ["INT_ADD", "register:40f0:8", ["const:8888a8:8", "const:4:8"]]
+ 008888a8 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-cf7ceee0c85fc517e269ae218258b550"></a>

### [`00888e7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00888/00888e7c.md) → [`00888ed4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888ed4.md) FUN_00888ed4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00887478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/00887478.md) · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`008874d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/008874d0.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00888ee8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00888ee8 ["INT_ADD", "register:40f0:8", ["const:888ee8:8", "const:4:8"]]
- 00888ee8 ["CALLIND", null, ["register:0:8"]]
+ 00888f40 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00888f40 ["INT_ADD", "register:40f0:8", ["const:888f40:8", "const:4:8"]]
+ 00888f40 ["CALLIND", null, ["register:0:8"]]
- 00888ef8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00888ef8 ["INT_ADD", "register:40f0:8", ["const:888ef8:8", "const:4:8"]]
- 00888ef8 ["CALLIND", null, ["register:0:8"]]
+ 00888f50 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00888f50 ["INT_ADD", "register:40f0:8", ["const:888f50:8", "const:4:8"]]
+ 00888f50 ["CALLIND", null, ["register:0:8"]]
- 00888f18 ["COPY", "register:0:8", ["register:4040:8"]]
- 00888f18 ["INT_ADD", "register:40f0:8", ["const:888f18:8", "const:4:8"]]
- 00888f18 ["CALLIND", null, ["register:0:8"]]
+ 00888f70 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00888f70 ["INT_ADD", "register:40f0:8", ["const:888f70:8", "const:4:8"]]
+ 00888f70 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5a808c05933acde4214df15047846ab5"></a>

### [`00889070`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00889/00889070.md) → [`008890c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/008890c8.md) FUN_008890c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00887478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/00887478.md) · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`008874d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/008874d0.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008890dc ["COPY", "register:0:8", ["register:4040:8"]]
- 008890dc ["INT_ADD", "register:40f0:8", ["const:8890dc:8", "const:4:8"]]
- 008890dc ["CALLIND", null, ["register:0:8"]]
+ 00889134 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00889134 ["INT_ADD", "register:40f0:8", ["const:889134:8", "const:4:8"]]
+ 00889134 ["CALLIND", null, ["register:0:8"]]
- 008890ec ["COPY", "register:0:8", ["register:4040:8"]]
- 008890ec ["INT_ADD", "register:40f0:8", ["const:8890ec:8", "const:4:8"]]
- 008890ec ["CALLIND", null, ["register:0:8"]]
+ 00889144 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00889144 ["INT_ADD", "register:40f0:8", ["const:889144:8", "const:4:8"]]
+ 00889144 ["CALLIND", null, ["register:0:8"]]
- 0088910c ["COPY", "register:0:8", ["register:4040:8"]]
- 0088910c ["INT_ADD", "register:40f0:8", ["const:88910c:8", "const:4:8"]]
- 0088910c ["CALLIND", null, ["register:0:8"]]
+ 00889164 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00889164 ["INT_ADD", "register:40f0:8", ["const:889164:8", "const:4:8"]]
+ 00889164 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5c96ecf8a5ba54e3a40697bfff943fba"></a>

### [`0088956c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00889/0088956c.md) → [`008895c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/008895c4.md) FUN_008895c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00887478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/00887478.md) [`00b37b88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b37/00b37b88.md) · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 2件 [`008874d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/008874d0.md) [`00b37c24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37c24.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008895d8 ["COPY", "register:0:8", ["register:4040:8"]]
- 008895d8 ["INT_ADD", "register:40f0:8", ["const:8895d8:8", "const:4:8"]]
- 008895d8 ["CALLIND", null, ["register:0:8"]]
+ 00889630 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00889630 ["INT_ADD", "register:40f0:8", ["const:889630:8", "const:4:8"]]
+ 00889630 ["CALLIND", null, ["register:0:8"]]
- 008895e8 ["COPY", "register:0:8", ["register:4040:8"]]
- 008895e8 ["INT_ADD", "register:40f0:8", ["const:8895e8:8", "const:4:8"]]
- 008895e8 ["CALLIND", null, ["register:0:8"]]
+ 00889640 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00889640 ["INT_ADD", "register:40f0:8", ["const:889640:8", "const:4:8"]]
+ 00889640 ["CALLIND", null, ["register:0:8"]]
- 00889608 ["COPY", "register:0:8", ["register:4040:8"]]
- 00889608 ["INT_ADD", "register:40f0:8", ["const:889608:8", "const:4:8"]]
- 00889608 ["CALLIND", null, ["register:0:8"]]
+ 00889660 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00889660 ["INT_ADD", "register:40f0:8", ["const:889660:8", "const:4:8"]]
+ 00889660 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-bc251e326478e064f9773bf7b7a7dae9"></a>

### [`0088a388`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088a388.md) → [`0088a3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a3e0.md) FUN_0088a3e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00b37b88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b37/00b37b88.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00b37c24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37c24.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088a3b8 ["INT_ADD", "register:40f0:8", ["const:88a3b8:8", "const:4:8"]]
- 0088a3b8 ["CALL", null, ["callee:00b37c24:8"]]
+ 0088a410 ["INT_ADD", "register:40f0:8", ["const:88a410:8", "const:4:8"]]
+ 0088a410 ["CALL", null, ["callee:00b37c24:8"]]
- 0088a3e4 ["COPY", "register:0:8", ["register:4040:8"]]
- 0088a3e4 ["INT_ADD", "register:40f0:8", ["const:88a3e4:8", "const:4:8"]]
- 0088a3e4 ["CALLIND", null, ["register:0:8"]]
+ 0088a43c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088a43c ["INT_ADD", "register:40f0:8", ["const:88a43c:8", "const:4:8"]]
+ 0088a43c ["CALLIND", null, ["register:0:8"]]
- 0088a414 ["COPY", "register:0:8", ["register:4040:8"]]
- 0088a414 ["INT_ADD", "register:40f0:8", ["const:88a414:8", "const:4:8"]]
- 0088a414 ["CALLIND", null, ["register:0:8"]]
+ 0088a46c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088a46c ["INT_ADD", "register:40f0:8", ["const:88a46c:8", "const:4:8"]]
+ 0088a46c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7c16bc1825e3dc7258291f46dbc119e4"></a>

### [`0088a4e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088a4e0.md) → [`0088a538`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a538.md) FUN_0088a538

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008878d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/008878d8.md) · 呼出先 5件 [`0088a630`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088a630.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 5件 [`0088a688`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a688.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088a5d4 ["INT_ADD", "register:40f0:8", ["const:88a5d4:8", "const:4:8"]]
- 0088a5d4 ["CALL", null, ["callee:0088a688:8"]]
+ 0088a62c ["INT_ADD", "register:40f0:8", ["const:88a62c:8", "const:4:8"]]
+ 0088a62c ["CALL", null, ["callee:0088a688:8"]]
- 0088a5fc ["INT_ADD", "register:40f0:8", ["const:88a5fc:8", "const:4:8"]]
- 0088a5fc ["CALL", null, ["callee:00c53da0:8"]]
+ 0088a654 ["INT_ADD", "register:40f0:8", ["const:88a654:8", "const:4:8"]]
+ 0088a654 ["CALL", null, ["callee:00c53da0:8"]]
- 0088a610 ["COPY", "register:0:8", ["register:4040:8"]]
- 0088a610 ["INT_ADD", "register:40f0:8", ["const:88a610:8", "const:4:8"]]
- 0088a610 ["CALLIND", null, ["register:0:8"]]
+ 0088a668 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088a668 ["INT_ADD", "register:40f0:8", ["const:88a668:8", "const:4:8"]]
+ 0088a668 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d19c1de7ef314d3921e78d39ff71c16a"></a>

### [`0088a764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088a764.md) → [`0088a7bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a7bc.md) FUN_0088a7bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088a794 ["INT_ADD", "register:40f0:8", ["const:88a794:8", "const:4:8"]]
- 0088a794 ["CALL", null, ["callee:00c53da0:8"]]
+ 0088a7ec ["INT_ADD", "register:40f0:8", ["const:88a7ec:8", "const:4:8"]]
+ 0088a7ec ["CALL", null, ["callee:00c53da0:8"]]
- 0088a7a8 ["COPY", "register:0:8", ["register:4040:8"]]
- 0088a7a8 ["INT_ADD", "register:40f0:8", ["const:88a7a8:8", "const:4:8"]]
- 0088a7a8 ["CALLIND", null, ["register:0:8"]]
+ 0088a800 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088a800 ["INT_ADD", "register:40f0:8", ["const:88a800:8", "const:4:8"]]
+ 0088a800 ["CALLIND", null, ["register:0:8"]]
- 0088a7b0 ["INT_ADD", "register:40f0:8", ["const:88a7b0:8", "const:4:8"]]
- 0088a7b0 ["CALL", null, ["callee:00c57f50:8"]]
+ 0088a808 ["INT_ADD", "register:40f0:8", ["const:88a808:8", "const:4:8"]]
+ 0088a808 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-acd875bdd072313838550db79423962c"></a>

### [`0088a8f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088a8f0.md) → [`0088a948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a948.md) FUN_0088a948

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008878d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/008878d8.md) · 呼出先 4件 [`0088ac0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088ac0c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a820`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a820.md)
- 新版 呼出元 1件 [`00887930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887930.md) · 呼出先 4件 [`0088ac64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088ac64.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a8f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088a9d4 ["INT_ADD", "register:40f0:8", ["const:88a9d4:8", "const:4:8"]]
- 0088a9d4 ["CALL", null, ["callee:00c57f60:8"]]
+ 0088aa2c ["INT_ADD", "register:40f0:8", ["const:88aa2c:8", "const:4:8"]]
+ 0088aa2c ["CALL", null, ["callee:00c57f60:8"]]
- 0088aa74 ["INT_ADD", "register:40f0:8", ["const:88aa74:8", "const:4:8"]]
- 0088aa74 ["CALL", null, ["callee:00c5a8f0:8"]]
+ 0088aacc ["INT_ADD", "register:40f0:8", ["const:88aacc:8", "const:4:8"]]
+ 0088aacc ["CALL", null, ["callee:00c5a8f0:8"]]
- 0088aa90 ["INT_ADD", "register:40f0:8", ["const:88aa90:8", "const:4:8"]]
- 0088aa90 ["CALL", null, ["callee:0088ac64:8"]]
+ 0088aae8 ["INT_ADD", "register:40f0:8", ["const:88aae8:8", "const:4:8"]]
+ 0088aae8 ["CALL", null, ["callee:0088ac64:8"]]
~~~


<a id="compare-9a1530d88caa2cdb25487d70ae6bb9d5"></a>

### [`0088ac0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088ac0c.md) → [`0088ac64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088ac64.md) FUN_0088ac64

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0088a8f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088a/0088a8f0.md) · 呼出先 3件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0088a948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a948.md) · 呼出先 3件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088ac30 ["INT_ADD", "register:40f0:8", ["const:88ac30:8", "const:4:8"]]
- 0088ac30 ["CALL", null, ["callee:00c57f60:8"]]
+ 0088ac88 ["INT_ADD", "register:40f0:8", ["const:88ac88:8", "const:4:8"]]
+ 0088ac88 ["CALL", null, ["callee:00c57f60:8"]]
- 0088ac44 ["INT_ADD", "register:40f0:8", ["const:88ac44:8", "const:4:8"]]
- 0088ac44 ["CALL", null, ["callee:00c57f80:8"]]
+ 0088ac9c ["INT_ADD", "register:40f0:8", ["const:88ac9c:8", "const:4:8"]]
+ 0088ac9c ["CALL", null, ["callee:00c57f80:8"]]
- 0088aca4 ["INT_ADD", "register:40f0:8", ["const:88aca4:8", "const:4:8"]]
- 0088aca4 ["CALL", null, ["callee:00c57f80:8"]]
+ 0088acfc ["INT_ADD", "register:40f0:8", ["const:88acfc:8", "const:4:8"]]
+ 0088acfc ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-bb2dfb520904888e2bb83a1b1b3b291e"></a>

### [`0088b940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088b940.md) → [`0088b998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088b998.md) FUN_0088b998

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088b994 ["COPY", "register:0:8", ["register:4040:8"]]
- 0088b994 ["INT_ADD", "register:40f0:8", ["const:88b994:8", "const:4:8"]]
- 0088b994 ["CALLIND", null, ["register:0:8"]]
+ 0088b9ec ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088b9ec ["INT_ADD", "register:40f0:8", ["const:88b9ec:8", "const:4:8"]]
+ 0088b9ec ["CALLIND", null, ["register:0:8"]]
- 0088b9c8 ["INT_ADD", "register:40f0:8", ["const:88b9c8:8", "const:4:8"]]
- 0088b9c8 ["CALL", null, ["callee:00459db4:8"]]
+ 0088ba20 ["INT_ADD", "register:40f0:8", ["const:88ba20:8", "const:4:8"]]
+ 0088ba20 ["CALL", null, ["callee:00459db4:8"]]
- 0088b9cc ["INT_ADD", "register:40f0:8", ["const:88b9cc:8", "const:4:8"]]
- 0088b9cc ["CALL", null, ["callee:00c57fb0:8"]]
+ 0088ba24 ["INT_ADD", "register:40f0:8", ["const:88ba24:8", "const:4:8"]]
+ 0088ba24 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-3bc299bbc73a56a414c1478552edc005"></a>

### [`0088ba50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088ba50.md) → [`0088baa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088baa8.md) FUN_0088baa8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088ba90 ["COPY", "register:0:8", ["register:4040:8"]]
- 0088ba90 ["INT_ADD", "register:40f0:8", ["const:88ba90:8", "const:4:8"]]
- 0088ba90 ["CALLIND", null, ["register:0:8"]]
+ 0088bae8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088bae8 ["INT_ADD", "register:40f0:8", ["const:88bae8:8", "const:4:8"]]
+ 0088bae8 ["CALLIND", null, ["register:0:8"]]
- 0088bac4 ["INT_ADD", "register:40f0:8", ["const:88bac4:8", "const:4:8"]]
- 0088bac4 ["CALL", null, ["callee:00459db4:8"]]
+ 0088bb1c ["INT_ADD", "register:40f0:8", ["const:88bb1c:8", "const:4:8"]]
+ 0088bb1c ["CALL", null, ["callee:00459db4:8"]]
- 0088bac8 ["INT_ADD", "register:40f0:8", ["const:88bac8:8", "const:4:8"]]
- 0088bac8 ["CALL", null, ["callee:00c57fb0:8"]]
+ 0088bb20 ["INT_ADD", "register:40f0:8", ["const:88bb20:8", "const:4:8"]]
+ 0088bb20 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-f69f0d4895376daea78d9272f3725889"></a>

### [`0088bb48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088bb48.md) → [`0088bba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088bba0.md) FUN_0088bba0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088bb6c ["INT_ADD", "register:40f0:8", ["const:88bb6c:8", "const:4:8"]]
- 0088bb6c ["CALL", null, ["callee:00459db4:8"]]
+ 0088bbc4 ["INT_ADD", "register:40f0:8", ["const:88bbc4:8", "const:4:8"]]
+ 0088bbc4 ["CALL", null, ["callee:00459db4:8"]]
~~~


<a id="compare-1acc550d86cd6dc16003b016287b4876"></a>

### [`0088bbec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088b/0088bbec.md) → [`0088bc44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088bc44.md) FUN_0088bc44

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00b37a18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b37/00b37a18.md) [`00b37b88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b37/00b37b88.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00b37ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37ab4.md) [`00b37c24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37c24.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088bc14 ["INT_ADD", "register:40f0:8", ["const:88bc14:8", "const:4:8"]]
- 0088bc14 ["CALL", null, ["callee:00b37ab4:8"]]
+ 0088bc6c ["INT_ADD", "register:40f0:8", ["const:88bc6c:8", "const:4:8"]]
+ 0088bc6c ["CALL", null, ["callee:00b37ab4:8"]]
- 0088bc30 ["INT_ADD", "register:40f0:8", ["const:88bc30:8", "const:4:8"]]
- 0088bc30 ["CALL", null, ["callee:00b37c24:8"]]
+ 0088bc88 ["INT_ADD", "register:40f0:8", ["const:88bc88:8", "const:4:8"]]
+ 0088bc88 ["CALL", null, ["callee:00b37c24:8"]]
- 0088bc5c ["COPY", "register:0:8", ["register:4040:8"]]
- 0088bc5c ["INT_ADD", "register:40f0:8", ["const:88bc5c:8", "const:4:8"]]
- 0088bc5c ["CALLIND", null, ["register:0:8"]]
+ 0088bcb4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088bcb4 ["INT_ADD", "register:40f0:8", ["const:88bcb4:8", "const:4:8"]]
+ 0088bcb4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-02c5ca5159409ea5cf75e72e07b266c1"></a>

### [`0088eec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088e/0088eec0.md) → [`0088ef18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088e/0088ef18.md) FUN_0088ef18

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0088c870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088c/0088c870.md) [`0089e87c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089e/0089e87c.md) · 呼出先 5件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00440f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 2件 [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 5件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00440f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f9c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088ef70 ["INT_ADD", "register:40f0:8", ["const:88ef70:8", "const:4:8"]]
- 0088ef70 ["CALL", null, ["callee:00c57f60:8"]]
+ 0088efc8 ["INT_ADD", "register:40f0:8", ["const:88efc8:8", "const:4:8"]]
+ 0088efc8 ["CALL", null, ["callee:00c57f60:8"]]
- 0088efc4 ["INT_ADD", "register:40f0:8", ["const:88efc4:8", "const:4:8"]]
- 0088efc4 ["CALL", null, ["callee:00c580d0:8"]]
+ 0088f01c ["INT_ADD", "register:40f0:8", ["const:88f01c:8", "const:4:8"]]
+ 0088f01c ["CALL", null, ["callee:00c580d0:8"]]
- 0088efd8 ["INT_ADD", "register:40f0:8", ["const:88efd8:8", "const:4:8"]]
- 0088efd8 ["CALL", null, ["callee:00c57f80:8"]]
+ 0088f030 ["INT_ADD", "register:40f0:8", ["const:88f030:8", "const:4:8"]]
+ 0088f030 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-230bd0c66609a1c6beb23d7063f09f74"></a>

### [`0088f000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088f000.md) → [`0088f058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f058.md) FUN_0088f058

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0088c870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088c/0088c870.md) [`008959d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00895/008959d0.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 2件 [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) [`00895a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00895/00895a28.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088f044 ["INT_ADD", "register:40f0:8", ["const:88f044:8", "const:4:8"]]
- 0088f044 ["CALL", null, ["callee:00c58120:8"]]
+ 0088f09c ["INT_ADD", "register:40f0:8", ["const:88f09c:8", "const:4:8"]]
+ 0088f09c ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-65e859d97b48756833f8738bdf19bc90"></a>

### [`0088f0c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088f0c0.md) → [`0088f118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f118.md) FUN_0088f118

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0088c870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088c/0088c870.md) · 呼出先 4件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`006394bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00639/006394bc.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`006394fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/006394fc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088f0f4 ["INT_ADD", "register:40f0:8", ["const:88f0f4:8", "const:4:8"]]
- 0088f0f4 ["CALL", null, ["callee:006394fc:8"]]
+ 0088f14c ["INT_ADD", "register:40f0:8", ["const:88f14c:8", "const:4:8"]]
+ 0088f14c ["CALL", null, ["callee:006394fc:8"]]
- 0088f108 ["INT_ADD", "register:40f0:8", ["const:88f108:8", "const:4:8"]]
- 0088f108 ["CALL", null, ["callee:00c57f60:8"]]
+ 0088f160 ["INT_ADD", "register:40f0:8", ["const:88f160:8", "const:4:8"]]
+ 0088f160 ["CALL", null, ["callee:00c57f60:8"]]
- 0088f158 ["INT_ADD", "register:40f0:8", ["const:88f158:8", "const:4:8"]]
- 0088f158 ["CALL", null, ["callee:0043bbe4:8"]]
+ 0088f1b0 ["INT_ADD", "register:40f0:8", ["const:88f1b0:8", "const:4:8"]]
+ 0088f1b0 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-fc5d443d01747be078a2f175d3605f78"></a>

### [`0088f198`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088f198.md) → [`0088f1f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f1f0.md) FUN_0088f1f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0088c870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088c/0088c870.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088f210 ["INT_ADD", "register:40f0:8", ["const:88f210:8", "const:4:8"]]
- 0088f210 ["CALL", null, ["callee:00c58120:8"]]
+ 0088f268 ["INT_ADD", "register:40f0:8", ["const:88f268:8", "const:4:8"]]
+ 0088f268 ["CALL", null, ["callee:00c58120:8"]]
- 0088f238 ["INT_ADD", "register:40f0:8", ["const:88f238:8", "const:4:8"]]
- 0088f238 ["CALL", null, ["callee:00c58120:8"]]
+ 0088f290 ["INT_ADD", "register:40f0:8", ["const:88f290:8", "const:4:8"]]
+ 0088f290 ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-106d4c46dfda1f7008078afb56fbd35a"></a>

### [`0088f2f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088f2f4.md) → [`0088f34c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f34c.md) FUN_0088f34c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0088c870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088c/0088c870.md) · 呼出先 2件 [`0046d6ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d6ac.md) [`005642e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00564/005642e0.md)
- 新版 呼出元 1件 [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) · 呼出先 2件 [`0046d6ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d6ec.md) [`00564320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00564/00564320.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088f304 ["INT_ADD", "register:40f0:8", ["const:88f304:8", "const:4:8"]]
- 0088f304 ["CALL", null, ["callee:0046d6ec:8"]]
+ 0088f35c ["INT_ADD", "register:40f0:8", ["const:88f35c:8", "const:4:8"]]
+ 0088f35c ["CALL", null, ["callee:0046d6ec:8"]]
- 0088f31c ["INT_ADD", "register:40f0:8", ["const:88f31c:8", "const:4:8"]]
- 0088f31c ["CALL", null, ["callee:00564320:8"]]
+ 0088f374 ["INT_ADD", "register:40f0:8", ["const:88f374:8", "const:4:8"]]
+ 0088f374 ["CALL", null, ["callee:00564320:8"]]
~~~


<a id="compare-f5c250524528c8991f6beb8227c9b348"></a>

### [`0088f338`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088f338.md) → [`0088f390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f390.md) FUN_0088f390

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0088c870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088c/0088c870.md) [`00aa3e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa3/00aa3e24.md) · 呼出先 1件 [`00c5a8f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8f0.md)
- 新版 呼出元 2件 [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) [`00aa3e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa3e94.md) · 呼出先 1件 [`00c5a9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088f35c ["INT_ADD", "register:40f0:8", ["const:88f35c:8", "const:4:8"]]
- 0088f35c ["CALL", null, ["callee:00c5a9c0:8"]]
+ 0088f3b4 ["INT_ADD", "register:40f0:8", ["const:88f3b4:8", "const:4:8"]]
+ 0088f3b4 ["CALL", null, ["callee:00c5a9c0:8"]]
~~~


<a id="compare-0d227dad1df02a51bd8553913330acb2"></a>

### [`0088f380`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088f380.md) → [`0088f3d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f3d8.md) FUN_0088f3d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0088c870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088c/0088c870.md) · 呼出先 3件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a840.md)
- 新版 呼出元 1件 [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088f3c4 ["INT_ADD", "register:40f0:8", ["const:88f3c4:8", "const:4:8"]]
- 0088f3c4 ["CALL", null, ["callee:00c5a900:8"]]
+ 0088f41c ["INT_ADD", "register:40f0:8", ["const:88f41c:8", "const:4:8"]]
+ 0088f41c ["CALL", null, ["callee:00c5a900:8"]]
- 0088f3d4 ["INT_ADD", "register:40f0:8", ["const:88f3d4:8", "const:4:8"]]
- 0088f3d4 ["CALL", null, ["callee:00c5a910:8"]]
+ 0088f42c ["INT_ADD", "register:40f0:8", ["const:88f42c:8", "const:4:8"]]
+ 0088f42c ["CALL", null, ["callee:00c5a910:8"]]
- 0088f3e0 ["INT_ADD", "register:40f0:8", ["const:88f3e0:8", "const:4:8"]]
- 0088f3e0 ["CALL", null, ["callee:00c5a900:8"]]
+ 0088f438 ["INT_ADD", "register:40f0:8", ["const:88f438:8", "const:4:8"]]
+ 0088f438 ["CALL", null, ["callee:00c5a900:8"]]
~~~


<a id="compare-ee02cace88c9a2e101bcad03de25de21"></a>

### [`0088f49c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088f49c.md) → [`0088f4f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f4f4.md) FUN_0088f4f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 8件 [`0054075c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00540/0054075c.md) [`00769260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769260.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0088c4ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088c/0088c4ac.md) [`009bd45c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bd/009bd45c.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0054079c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/0054079c.md) [`007692b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/007692b8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0088c504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c504.md) [`009bd4b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bd4b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088f4e0 ["INT_ADD", "register:40f0:8", ["const:88f4e0:8", "const:4:8"]]
- 0088f4e0 ["CALL", null, ["callee:009bd4b0:8"]]
+ 0088f538 ["INT_ADD", "register:40f0:8", ["const:88f538:8", "const:4:8"]]
+ 0088f538 ["CALL", null, ["callee:009bd4b0:8"]]
- 0088f4f0 ["INT_ADD", "register:40f0:8", ["const:88f4f0:8", "const:4:8"]]
- 0088f4f0 ["CALL", null, ["callee:00851550:8"]]
+ 0088f548 ["INT_ADD", "register:40f0:8", ["const:88f548:8", "const:4:8"]]
+ 0088f548 ["CALL", null, ["callee:00851550:8"]]
- 0088f4f4 ["INT_ADD", "register:40f0:8", ["const:88f4f4:8", "const:4:8"]]
- 0088f4f4 ["CALL", null, ["callee:00a1a6f8:8"]]
+ 0088f54c ["INT_ADD", "register:40f0:8", ["const:88f54c:8", "const:4:8"]]
+ 0088f54c ["CALL", null, ["callee:00a1a6f8:8"]]
~~~


<a id="compare-42404b2c2fc07db03d7b0542f559e348"></a>

### [`0088fad8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088fad8.md) → [`0088fb30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088fb30.md) FUN_0088fb30

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088faf4 ["INT_ADD", "register:40f0:8", ["const:88faf4:8", "const:4:8"]]
- 0088faf4 ["CALL", null, ["callee:00c53da0:8"]]
+ 0088fb4c ["INT_ADD", "register:40f0:8", ["const:88fb4c:8", "const:4:8"]]
+ 0088fb4c ["CALL", null, ["callee:00c53da0:8"]]
- 0088fb14 ["COPY", "register:0:8", ["register:4040:8"]]
- 0088fb14 ["INT_ADD", "register:40f0:8", ["const:88fb14:8", "const:4:8"]]
- 0088fb14 ["CALLIND", null, ["register:0:8"]]
+ 0088fb6c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088fb6c ["INT_ADD", "register:40f0:8", ["const:88fb6c:8", "const:4:8"]]
+ 0088fb6c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-3fc54638eaae1020d94595ce0f3c523f"></a>

### [`0088fc64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088fc64.md) → [`0088fcbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088fcbc.md) FUN_0088fcbc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0088f6e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088f6e0.md) · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`0088f738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f738.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088fc80 ["INT_ADD", "register:40f0:8", ["const:88fc80:8", "const:4:8"]]
- 0088fc80 ["CALL", null, ["callee:00c53da0:8"]]
+ 0088fcd8 ["INT_ADD", "register:40f0:8", ["const:88fcd8:8", "const:4:8"]]
+ 0088fcd8 ["CALL", null, ["callee:00c53da0:8"]]
- 0088fca0 ["COPY", "register:0:8", ["register:4040:8"]]
- 0088fca0 ["INT_ADD", "register:40f0:8", ["const:88fca0:8", "const:4:8"]]
- 0088fca0 ["CALLIND", null, ["register:0:8"]]
+ 0088fcf8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088fcf8 ["INT_ADD", "register:40f0:8", ["const:88fcf8:8", "const:4:8"]]
+ 0088fcf8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8c2d495efe3d94e99c1de1215544f9b1"></a>

### [`0088fcb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088fcb4.md) → [`0088fd0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088fd0c.md) FUN_0088fd0c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0088f6e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088f6e0.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0088f738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f738.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0088fcd4 ["INT_ADD", "register:40f0:8", ["const:88fcd4:8", "const:4:8"]]
- 0088fcd4 ["CALL", null, ["callee:00c53da0:8"]]
+ 0088fd2c ["INT_ADD", "register:40f0:8", ["const:88fd2c:8", "const:4:8"]]
+ 0088fd2c ["CALL", null, ["callee:00c53da0:8"]]
- 0088fce8 ["COPY", "register:0:8", ["register:4040:8"]]
- 0088fce8 ["INT_ADD", "register:40f0:8", ["const:88fce8:8", "const:4:8"]]
- 0088fce8 ["CALLIND", null, ["register:0:8"]]
+ 0088fd40 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0088fd40 ["INT_ADD", "register:40f0:8", ["const:88fd40:8", "const:4:8"]]
+ 0088fd40 ["CALLIND", null, ["register:0:8"]]
- 0088fcf0 ["INT_ADD", "register:40f0:8", ["const:88fcf0:8", "const:4:8"]]
- 0088fcf0 ["CALL", null, ["callee:00c57f50:8"]]
+ 0088fd48 ["INT_ADD", "register:40f0:8", ["const:88fd48:8", "const:4:8"]]
+ 0088fd48 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-ee9325ad68809d378ca7691535930125"></a>

### [`00890028`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00890/00890028.md) → [`00890080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/00890080.md) FUN_00890080

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00890044 ["INT_ADD", "register:40f0:8", ["const:890044:8", "const:4:8"]]
- 00890044 ["CALL", null, ["callee:00c53da0:8"]]
+ 0089009c ["INT_ADD", "register:40f0:8", ["const:89009c:8", "const:4:8"]]
+ 0089009c ["CALL", null, ["callee:00c53da0:8"]]
- 00890064 ["COPY", "register:0:8", ["register:4040:8"]]
- 00890064 ["INT_ADD", "register:40f0:8", ["const:890064:8", "const:4:8"]]
- 00890064 ["CALLIND", null, ["register:0:8"]]
+ 008900bc ["COPY", "register:0:8", ["register:4040:8"]]
+ 008900bc ["INT_ADD", "register:40f0:8", ["const:8900bc:8", "const:4:8"]]
+ 008900bc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-fa66152be8cdca2d9f5941bd45726fe2"></a>

### [`008901b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00890/008901b4.md) → [`0089020c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/0089020c.md) FUN_0089020c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0088fd9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088fd9c.md) · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`0088fdf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088fdf4.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008901d0 ["INT_ADD", "register:40f0:8", ["const:8901d0:8", "const:4:8"]]
- 008901d0 ["CALL", null, ["callee:00c53da0:8"]]
+ 00890228 ["INT_ADD", "register:40f0:8", ["const:890228:8", "const:4:8"]]
+ 00890228 ["CALL", null, ["callee:00c53da0:8"]]
- 008901f0 ["COPY", "register:0:8", ["register:4040:8"]]
- 008901f0 ["INT_ADD", "register:40f0:8", ["const:8901f0:8", "const:4:8"]]
- 008901f0 ["CALLIND", null, ["register:0:8"]]
+ 00890248 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00890248 ["INT_ADD", "register:40f0:8", ["const:890248:8", "const:4:8"]]
+ 00890248 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-409c1548d5719c4012ba7d5745888c20"></a>

### [`00890204`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00890/00890204.md) → [`0089025c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/0089025c.md) FUN_0089025c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0088fd9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088f/0088fd9c.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0088fdf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088fdf4.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00890224 ["INT_ADD", "register:40f0:8", ["const:890224:8", "const:4:8"]]
- 00890224 ["CALL", null, ["callee:00c53da0:8"]]
+ 0089027c ["INT_ADD", "register:40f0:8", ["const:89027c:8", "const:4:8"]]
+ 0089027c ["CALL", null, ["callee:00c53da0:8"]]
- 00890238 ["COPY", "register:0:8", ["register:4040:8"]]
- 00890238 ["INT_ADD", "register:40f0:8", ["const:890238:8", "const:4:8"]]
- 00890238 ["CALLIND", null, ["register:0:8"]]
+ 00890290 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00890290 ["INT_ADD", "register:40f0:8", ["const:890290:8", "const:4:8"]]
+ 00890290 ["CALLIND", null, ["register:0:8"]]
- 00890240 ["INT_ADD", "register:40f0:8", ["const:890240:8", "const:4:8"]]
- 00890240 ["CALL", null, ["callee:00c57f50:8"]]
+ 00890298 ["INT_ADD", "register:40f0:8", ["const:890298:8", "const:4:8"]]
+ 00890298 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-c05ac47fe2148f9e1ca587101ec87bf0"></a>

### [`00890610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00890/00890610.md) → [`00890668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/00890668.md) FUN_00890668

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00890bd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00890/00890bd0.md) [`00891dc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00891/00891dc8.md) · 呼出先 3件 [`0058f434`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0058f/0058f434.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58430.md)
- 新版 呼出元 2件 [`00890c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/00890c28.md) [`00891e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891e20.md) · 呼出先 3件 [`0058f474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f474.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58500.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00890648 ["INT_ADD", "register:40f0:8", ["const:890648:8", "const:4:8"]]
- 00890648 ["CALL", null, ["callee:00c58500:8"]]
+ 008906a0 ["INT_ADD", "register:40f0:8", ["const:8906a0:8", "const:4:8"]]
+ 008906a0 ["CALL", null, ["callee:00c58500:8"]]
- 0089066c ["COPY", "register:0:8", ["register:4040:8"]]
- 0089066c ["INT_ADD", "register:40f0:8", ["const:89066c:8", "const:4:8"]]
- 0089066c ["CALLIND", null, ["register:0:8"]]
+ 008906c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008906c4 ["INT_ADD", "register:40f0:8", ["const:8906c4:8", "const:4:8"]]
+ 008906c4 ["CALLIND", null, ["register:0:8"]]
- 00890690 ["COPY", "register:0:8", ["register:4040:8"]]
- 00890690 ["INT_ADD", "register:40f0:8", ["const:890690:8", "const:4:8"]]
- 00890690 ["CALLIND", null, ["register:0:8"]]
+ 008906e8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008906e8 ["INT_ADD", "register:40f0:8", ["const:8906e8:8", "const:4:8"]]
+ 008906e8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-305be5926bab30505fba0f2c0c272b15"></a>

### [`00890bd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00890/00890bd0.md) → [`00890c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/00890c28.md) FUN_00890c28

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00890754`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00890/00890754.md) · 呼出先 5件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00890610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00890/00890610.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`008907ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/008907ac.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00890668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/00890668.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00890bfc ["INT_ADD", "register:40f0:8", ["const:890bfc:8", "const:4:8"]]
- 00890bfc ["CALL", null, ["callee:00c57f60:8"]]
+ 00890c54 ["INT_ADD", "register:40f0:8", ["const:890c54:8", "const:4:8"]]
+ 00890c54 ["CALL", null, ["callee:00c57f60:8"]]
- 00890c28 ["INT_ADD", "register:40f0:8", ["const:890c28:8", "const:4:8"]]
- 00890c28 ["CALL", null, ["callee:0043bb60:8"]]
+ 00890c80 ["INT_ADD", "register:40f0:8", ["const:890c80:8", "const:4:8"]]
+ 00890c80 ["CALL", null, ["callee:0043bb60:8"]]
- 00890c40 ["INT_ADD", "register:40f0:8", ["const:890c40:8", "const:4:8"]]
- 00890c40 ["CALL", null, ["callee:00890668:8"]]
+ 00890c98 ["INT_ADD", "register:40f0:8", ["const:890c98:8", "const:4:8"]]
+ 00890c98 ["CALL", null, ["callee:00890668:8"]]
~~~


<a id="compare-ac67079e7b2db4ba268df5a0b76b4294"></a>

### [`00890d18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00890/00890d18.md) → [`00890d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/00890d70.md) FUN_00890d70

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00890d68 ["COPY", "register:0:8", ["register:4040:8"]]
- 00890d68 ["INT_ADD", "register:40f0:8", ["const:890d68:8", "const:4:8"]]
- 00890d68 ["CALLIND", null, ["register:0:8"]]
+ 00890dc0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00890dc0 ["INT_ADD", "register:40f0:8", ["const:890dc0:8", "const:4:8"]]
+ 00890dc0 ["CALLIND", null, ["register:0:8"]]
- 00890d78 ["INT_ADD", "register:40f0:8", ["const:890d78:8", "const:4:8"]]
- 00890d78 ["CALL", null, ["callee:00c57f80:8"]]
+ 00890dd0 ["INT_ADD", "register:40f0:8", ["const:890dd0:8", "const:4:8"]]
+ 00890dd0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-ab5971a60147a680a91ba23094c33951"></a>

### [`00890d8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00890/00890d8c.md) → [`00890de4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/00890de4.md) FUN_00890de4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00890754`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00890/00890754.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`008907ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/008907ac.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00890e2c ["INT_ADD", "register:40f0:8", ["const:890e2c:8", "const:4:8"]]
- 00890e2c ["CALL", null, ["callee:00c57f80:8"]]
+ 00890e84 ["INT_ADD", "register:40f0:8", ["const:890e84:8", "const:4:8"]]
+ 00890e84 ["CALL", null, ["callee:00c57f80:8"]]
- 00890e3c ["INT_ADD", "register:40f0:8", ["const:890e3c:8", "const:4:8"]]
- 00890e3c ["CALL", null, ["callee:00c57f80:8"]]
+ 00890e94 ["INT_ADD", "register:40f0:8", ["const:890e94:8", "const:4:8"]]
+ 00890e94 ["CALL", null, ["callee:00c57f80:8"]]
- 00890e4c ["INT_ADD", "register:40f0:8", ["const:890e4c:8", "const:4:8"]]
- 00890e4c ["CALL", null, ["callee:00c57f80:8"]]
+ 00890ea4 ["INT_ADD", "register:40f0:8", ["const:890ea4:8", "const:4:8"]]
+ 00890ea4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-676b31399312881eb6dbad2e815525d4"></a>

### [`00890f28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00890/00890f28.md) → [`00890f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/00890f80.md) FUN_00890f80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00890f5c ["INT_ADD", "register:40f0:8", ["const:890f5c:8", "const:4:8"]]
- 00890f5c ["CALL", null, ["callee:00c57f80:8"]]
+ 00890fb4 ["INT_ADD", "register:40f0:8", ["const:890fb4:8", "const:4:8"]]
+ 00890fb4 ["CALL", null, ["callee:00c57f80:8"]]
- 00890fa0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00890fa0 ["INT_ADD", "register:40f0:8", ["const:890fa0:8", "const:4:8"]]
- 00890fa0 ["CALLIND", null, ["register:0:8"]]
+ 00890ff8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00890ff8 ["INT_ADD", "register:40f0:8", ["const:890ff8:8", "const:4:8"]]
+ 00890ff8 ["CALLIND", null, ["register:0:8"]]
- 00890fb0 ["INT_ADD", "register:40f0:8", ["const:890fb0:8", "const:4:8"]]
- 00890fb0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00891008 ["INT_ADD", "register:40f0:8", ["const:891008:8", "const:4:8"]]
+ 00891008 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-b37cda050a73bc9fa3b750ea13311add"></a>

### [`00890fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00890/00890fe0.md) → [`00891038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891038.md) FUN_00891038

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00848714`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00848/00848714.md) [`00851504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851504.md) [`008548ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00854/008548ec.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 4件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`0084876c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00848/0084876c.md) [`0085155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/0085155c.md) [`00854944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00854/00854944.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00891018 ["INT_ADD", "register:40f0:8", ["const:891018:8", "const:4:8"]]
- 00891018 ["CALL", null, ["callee:00c57f80:8"]]
+ 00891070 ["INT_ADD", "register:40f0:8", ["const:891070:8", "const:4:8"]]
+ 00891070 ["CALL", null, ["callee:00c57f80:8"]]
- 0089105c ["COPY", "register:0:8", ["register:4040:8"]]
- 0089105c ["INT_ADD", "register:40f0:8", ["const:89105c:8", "const:4:8"]]
- 0089105c ["CALLIND", null, ["register:0:8"]]
+ 008910b4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008910b4 ["INT_ADD", "register:40f0:8", ["const:8910b4:8", "const:4:8"]]
+ 008910b4 ["CALLIND", null, ["register:0:8"]]
- 0089106c ["INT_ADD", "register:40f0:8", ["const:89106c:8", "const:4:8"]]
- 0089106c ["CALL", null, ["callee:00c57f80:8"]]
+ 008910c4 ["INT_ADD", "register:40f0:8", ["const:8910c4:8", "const:4:8"]]
+ 008910c4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-5b8db9d330f243c94bea0cb6d09baaed"></a>

### [`00891dc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00891/00891dc8.md) → [`00891e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891e20.md) FUN_00891e20

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00891304`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00891/00891304.md) · 呼出先 5件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00890610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00890/00890610.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`0089135c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/0089135c.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00890668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00890/00890668.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00891dfc ["INT_ADD", "register:40f0:8", ["const:891dfc:8", "const:4:8"]]
- 00891dfc ["CALL", null, ["callee:00c57f60:8"]]
+ 00891e54 ["INT_ADD", "register:40f0:8", ["const:891e54:8", "const:4:8"]]
+ 00891e54 ["CALL", null, ["callee:00c57f60:8"]]
- 00891e28 ["INT_ADD", "register:40f0:8", ["const:891e28:8", "const:4:8"]]
- 00891e28 ["CALL", null, ["callee:0043bb60:8"]]
+ 00891e80 ["INT_ADD", "register:40f0:8", ["const:891e80:8", "const:4:8"]]
+ 00891e80 ["CALL", null, ["callee:0043bb60:8"]]
- 00891e44 ["COPY", "register:0:8", ["register:4040:8"]]
- 00891e44 ["INT_ADD", "register:40f0:8", ["const:891e44:8", "const:4:8"]]
- 00891e44 ["CALLIND", null, ["register:0:8"]]
+ 00891e9c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00891e9c ["INT_ADD", "register:40f0:8", ["const:891e9c:8", "const:4:8"]]
+ 00891e9c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-12fe7ca0d74641d5ac1dc2c266e8a9ce"></a>

### [`0089243c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/0089243c.md) → [`00892494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892494.md) FUN_00892494

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 7件 [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00891b6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00891/00891b6c.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md) [`008bb510`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bb/008bb510.md)
- 新版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 7件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00891bc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891bc4.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`008bb568`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bb568.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008924b4 ["INT_ADD", "register:40f0:8", ["const:8924b4:8", "const:4:8"]]
- 008924b4 ["CALL", null, ["callee:0048cec4:8"]]
+ 0089250c ["INT_ADD", "register:40f0:8", ["const:89250c:8", "const:4:8"]]
+ 0089250c ["CALL", null, ["callee:0048cec4:8"]]
- 008924e8 ["COPY", "register:0:8", ["register:4040:8"]]
- 008924e8 ["INT_ADD", "register:40f0:8", ["const:8924e8:8", "const:4:8"]]
- 008924e8 ["CALLIND", null, ["register:0:8"]]
+ 00892540 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00892540 ["INT_ADD", "register:40f0:8", ["const:892540:8", "const:4:8"]]
+ 00892540 ["CALLIND", null, ["register:0:8"]]
- 0089251c ["INT_ADD", "register:40f0:8", ["const:89251c:8", "const:4:8"]]
- 0089251c ["CALL", null, ["callee:00851550:8"]]
+ 00892574 ["INT_ADD", "register:40f0:8", ["const:892574:8", "const:4:8"]]
+ 00892574 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-6af5b1fcf66d7e71e5bbb7a91e629e3f"></a>

### [`00892e78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892e78.md) → [`00892ed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892ed0.md) FUN_00892ed0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00891304`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00891/00891304.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0089135c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/0089135c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00892e98 ["INT_ADD", "register:40f0:8", ["const:892e98:8", "const:4:8"]]
- 00892e98 ["CALL", null, ["callee:00c57f80:8"]]
+ 00892ef0 ["INT_ADD", "register:40f0:8", ["const:892ef0:8", "const:4:8"]]
+ 00892ef0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-b23a40596060378b2c3f129805ca6d03"></a>

### [`00892eac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892eac.md) → [`00892f04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892f04.md) FUN_00892f04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00891f60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00891/00891f60.md) [`00892d08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892d08.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00891fb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891fb8.md) [`00892d60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892d60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00892f24 ["INT_ADD", "register:40f0:8", ["const:892f24:8", "const:4:8"]]
- 00892f24 ["CALL", null, ["callee:00c58120:8"]]
+ 00892f7c ["INT_ADD", "register:40f0:8", ["const:892f7c:8", "const:4:8"]]
+ 00892f7c ["CALL", null, ["callee:00c58120:8"]]
- 00892fc4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00892fc4 ["INT_ADD", "register:40f0:8", ["const:892fc4:8", "const:4:8"]]
- 00892fc4 ["CALLIND", null, ["register:0:8"]]
+ 0089301c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0089301c ["INT_ADD", "register:40f0:8", ["const:89301c:8", "const:4:8"]]
+ 0089301c ["CALLIND", null, ["register:0:8"]]
- 00892fec ["COPY", "register:0:8", ["register:4040:8"]]
- 00892fec ["INT_ADD", "register:40f0:8", ["const:892fec:8", "const:4:8"]]
- 00892fec ["CALLIND", null, ["register:0:8"]]
+ 00893044 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00893044 ["INT_ADD", "register:40f0:8", ["const:893044:8", "const:4:8"]]
+ 00893044 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b40c35cc2e01b48c7ace732929787239"></a>

### [`0089314c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/0089314c.md) → [`008931a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008931a4.md) FUN_008931a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 8件 [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00891b6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00891/00891b6c.md) [`00892d08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892d08.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00891bc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891bc4.md) [`00892d60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892d60.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0089316c ["INT_ADD", "register:40f0:8", ["const:89316c:8", "const:4:8"]]
- 0089316c ["CALL", null, ["callee:00b396b0:8"]]
+ 008931c4 ["INT_ADD", "register:40f0:8", ["const:8931c4:8", "const:4:8"]]
+ 008931c4 ["CALL", null, ["callee:00b396b0:8"]]
- 00893178 ["INT_ADD", "register:40f0:8", ["const:893178:8", "const:4:8"]]
- 00893178 ["CALL", null, ["callee:00b3988c:8"]]
+ 008931d0 ["INT_ADD", "register:40f0:8", ["const:8931d0:8", "const:4:8"]]
+ 008931d0 ["CALL", null, ["callee:00b3988c:8"]]
- 00893184 ["INT_ADD", "register:40f0:8", ["const:893184:8", "const:4:8"]]
- 00893184 ["CALL", null, ["callee:00851550:8"]]
+ 008931dc ["INT_ADD", "register:40f0:8", ["const:8931dc:8", "const:4:8"]]
+ 008931dc ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-5aaa83b31256f8412aaf33a30cd3b726"></a>

### [`0089329c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/0089329c.md) → [`008932f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008932f4.md) FUN_008932f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 7件 [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00891b6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00891/00891b6c.md) [`00892d08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892d08.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00891bc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891bc4.md) [`00892d60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892d60.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008932b4 ["INT_ADD", "register:40f0:8", ["const:8932b4:8", "const:4:8"]]
- 008932b4 ["CALL", null, ["callee:00b3988c:8"]]
+ 0089330c ["INT_ADD", "register:40f0:8", ["const:89330c:8", "const:4:8"]]
+ 0089330c ["CALL", null, ["callee:00b3988c:8"]]
- 008932c0 ["INT_ADD", "register:40f0:8", ["const:8932c0:8", "const:4:8"]]
- 008932c0 ["CALL", null, ["callee:00851550:8"]]
+ 00893318 ["INT_ADD", "register:40f0:8", ["const:893318:8", "const:4:8"]]
+ 00893318 ["CALL", null, ["callee:00851550:8"]]
- 008932cc ["INT_ADD", "register:40f0:8", ["const:8932cc:8", "const:4:8"]]
- 008932cc ["CALL", null, ["callee:008bb568:8"]]
+ 00893324 ["INT_ADD", "register:40f0:8", ["const:893324:8", "const:4:8"]]
+ 00893324 ["CALL", null, ["callee:008bb568:8"]]
~~~


<a id="compare-52f57eeeefc48f7a2af8d6fa44b06faf"></a>

### [`008933e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00893/008933e8.md) → [`00893440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/00893440.md) FUN_00893440

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00892d08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00892/00892d08.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md) [`008bb510`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bb/008bb510.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00892d60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892d60.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`008bb568`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bb568.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00893404 ["INT_ADD", "register:40f0:8", ["const:893404:8", "const:4:8"]]
- 00893404 ["CALL", null, ["callee:00851550:8"]]
+ 0089345c ["INT_ADD", "register:40f0:8", ["const:89345c:8", "const:4:8"]]
+ 0089345c ["CALL", null, ["callee:00851550:8"]]
- 00893410 ["INT_ADD", "register:40f0:8", ["const:893410:8", "const:4:8"]]
- 00893410 ["CALL", null, ["callee:008bb568:8"]]
+ 00893468 ["INT_ADD", "register:40f0:8", ["const:893468:8", "const:4:8"]]
+ 00893468 ["CALL", null, ["callee:008bb568:8"]]
- 00893418 ["INT_ADD", "register:40f0:8", ["const:893418:8", "const:4:8"]]
- 00893418 ["CALL", null, ["callee:00851550:8"]]
+ 00893470 ["INT_ADD", "register:40f0:8", ["const:893470:8", "const:4:8"]]
+ 00893470 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-8c0e151247392adc97b88dfc6839058e"></a>

### [`008976f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00897/008976f0.md) → [`00897748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00897/00897748.md) FUN_00897748

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008959d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00895/008959d0.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`00895a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00895/00895a28.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00897758 ["INT_ADD", "register:40f0:8", ["const:897758:8", "const:4:8"]]
- 00897758 ["CALL", null, ["callee:00c57f60:8"]]
+ 008977b0 ["INT_ADD", "register:40f0:8", ["const:8977b0:8", "const:4:8"]]
+ 008977b0 ["CALL", null, ["callee:00c57f60:8"]]
- 00897798 ["INT_ADD", "register:40f0:8", ["const:897798:8", "const:4:8"]]
- 00897798 ["CALL", null, ["callee:0043bbe4:8"]]
+ 008977f0 ["INT_ADD", "register:40f0:8", ["const:8977f0:8", "const:4:8"]]
+ 008977f0 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-fce3cf5694e4c6f5092b72e711857d21"></a>

### [`008977c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00897/008977c0.md) → [`00897818`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00897/00897818.md) FUN_00897818

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008959d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00895/008959d0.md) · 呼出先 2件 [`008a4108`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a4108.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00895a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00895/00895a28.md) · 呼出先 2件 [`008a4160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4160.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008977fc ["COPY", "register:0:8", ["register:4048:8"]]
- 008977fc ["INT_ADD", "register:40f0:8", ["const:8977fc:8", "const:4:8"]]
- 008977fc ["CALLIND", null, ["register:0:8"]]
+ 00897854 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00897854 ["INT_ADD", "register:40f0:8", ["const:897854:8", "const:4:8"]]
+ 00897854 ["CALLIND", null, ["register:0:8"]]
- 00897828 ["COPY", "register:0:8", ["register:4040:8"]]
- 00897828 ["INT_ADD", "register:40f0:8", ["const:897828:8", "const:4:8"]]
- 00897828 ["CALLIND", null, ["register:0:8"]]
+ 00897880 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00897880 ["INT_ADD", "register:40f0:8", ["const:897880:8", "const:4:8"]]
+ 00897880 ["CALLIND", null, ["register:0:8"]]
- 00897838 ["INT_ADD", "register:40f0:8", ["const:897838:8", "const:4:8"]]
- 00897838 ["CALL", null, ["callee:008a4160:8"]]
+ 00897890 ["INT_ADD", "register:40f0:8", ["const:897890:8", "const:4:8"]]
+ 00897890 ["CALL", null, ["callee:008a4160:8"]]
~~~


<a id="compare-9d09364d61323d0d14b895479ceaadbf"></a>

### [`0089a414`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089a/0089a414.md) → [`0089a46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089a/0089a46c.md) FUN_0089a46c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0089788c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00897/0089788c.md) · 呼出先 4件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`008a8cc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a8/008a8cc0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`008978e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00897/008978e4.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`008a8d18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a8/008a8d18.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0089a478 ["INT_ADD", "register:40f0:8", ["const:89a478:8", "const:4:8"]]
- 0089a478 ["CALL", null, ["callee:0043bb60:8"]]
+ 0089a4d0 ["INT_ADD", "register:40f0:8", ["const:89a4d0:8", "const:4:8"]]
+ 0089a4d0 ["CALL", null, ["callee:0043bb60:8"]]
- 0089a48c ["INT_ADD", "register:40f0:8", ["const:89a48c:8", "const:4:8"]]
- 0089a48c ["CALL", null, ["callee:0043bb60:8"]]
+ 0089a4e4 ["INT_ADD", "register:40f0:8", ["const:89a4e4:8", "const:4:8"]]
+ 0089a4e4 ["CALL", null, ["callee:0043bb60:8"]]
- 0089a4c0 ["INT_ADD", "register:40f0:8", ["const:89a4c0:8", "const:4:8"]]
- 0089a4c0 ["CALL", null, ["callee:008a8d18:8"]]
+ 0089a518 ["INT_ADD", "register:40f0:8", ["const:89a518:8", "const:4:8"]]
+ 0089a518 ["CALL", null, ["callee:008a8d18:8"]]
~~~


<a id="compare-f657e9091ce03fde68064f1582b6df4f"></a>

### [`008a3b64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a3/008a3b64.md) → [`008a3bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a3/008a3bbc.md) FUN_008a3bbc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0089e87c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089e/0089e87c.md) · 呼出先 4件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`008ade98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008ade98.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`008adef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008adef0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008a3bc0 ["INT_ADD", "register:40f0:8", ["const:8a3bc0:8", "const:4:8"]]
- 008a3bc0 ["CALL", null, ["callee:0043bb60:8"]]
+ 008a3c18 ["INT_ADD", "register:40f0:8", ["const:8a3c18:8", "const:4:8"]]
+ 008a3c18 ["CALL", null, ["callee:0043bb60:8"]]
- 008a3bd0 ["INT_ADD", "register:40f0:8", ["const:8a3bd0:8", "const:4:8"]]
- 008a3bd0 ["CALL", null, ["callee:0043bb60:8"]]
+ 008a3c28 ["INT_ADD", "register:40f0:8", ["const:8a3c28:8", "const:4:8"]]
+ 008a3c28 ["CALL", null, ["callee:0043bb60:8"]]
- 008a3c04 ["INT_ADD", "register:40f0:8", ["const:8a3c04:8", "const:4:8"]]
- 008a3c04 ["CALL", null, ["callee:008adef0:8"]]
+ 008a3c5c ["INT_ADD", "register:40f0:8", ["const:8a3c5c:8", "const:4:8"]]
+ 008a3c5c ["CALL", null, ["callee:008adef0:8"]]
~~~


<a id="compare-73f97019e6d1338476078a7fa6354bbc"></a>

### [`008a3c98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a3/008a3c98.md) → [`008a3cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a3/008a3cf0.md) FUN_008a3cf0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0089e87c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089e/0089e87c.md) · 呼出先 2件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0074a7d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0074a/0074a7d4.md)
- 新版 呼出元 1件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0074a82c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074a/0074a82c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008a3cac ["INT_ADD", "register:40f0:8", ["const:8a3cac:8", "const:4:8"]]
- 008a3cac ["CALL", null, ["callee:0074a82c:8"]]
+ 008a3d04 ["INT_ADD", "register:40f0:8", ["const:8a3d04:8", "const:4:8"]]
+ 008a3d04 ["CALL", null, ["callee:0074a82c:8"]]
- 008a3cd8 ["INT_ADD", "register:40f0:8", ["const:8a3cd8:8", "const:4:8"]]
- 008a3cd8 ["CALL", null, ["callee:0043bb60:8"]]
+ 008a3d30 ["INT_ADD", "register:40f0:8", ["const:8a3d30:8", "const:4:8"]]
+ 008a3d30 ["CALL", null, ["callee:0043bb60:8"]]
~~~


<a id="compare-facb6d7b826df6f9dfe00936b90cddaa"></a>

### [`008a3cfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a3/008a3cfc.md) → [`008a3d54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a3/008a3d54.md) FUN_008a3d54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0089e87c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089e/0089e87c.md) · 呼出先 2件 [`00748b30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/00748b30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 2件 [`00748b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00748/00748b88.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008a3d34 ["INT_ADD", "register:40f0:8", ["const:8a3d34:8", "const:4:8"]]
- 008a3d34 ["CALL", null, ["callee:00748b88:8"]]
+ 008a3d8c ["INT_ADD", "register:40f0:8", ["const:8a3d8c:8", "const:4:8"]]
+ 008a3d8c ["CALL", null, ["callee:00748b88:8"]]
~~~


<a id="compare-9490df520dd0f37a4e2cb46efd6c8d15"></a>

### [`008a3d68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a3/008a3d68.md) → [`008a3dc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a3/008a3dc0.md) FUN_008a3dc0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0089e87c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089e/0089e87c.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008a3dd0 ["INT_ADD", "register:40f0:8", ["const:8a3dd0:8", "const:4:8"]]
- 008a3dd0 ["CALL", null, ["callee:00c57f60:8"]]
+ 008a3e28 ["INT_ADD", "register:40f0:8", ["const:8a3e28:8", "const:4:8"]]
+ 008a3e28 ["CALL", null, ["callee:00c57f60:8"]]
- 008a3e0c ["INT_ADD", "register:40f0:8", ["const:8a3e0c:8", "const:4:8"]]
- 008a3e0c ["CALL", null, ["callee:0043bbe4:8"]]
+ 008a3e64 ["INT_ADD", "register:40f0:8", ["const:8a3e64:8", "const:4:8"]]
+ 008a3e64 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-73ac5abd322788ec2430aa5be2d018e7"></a>

### [`008a3e60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a3/008a3e60.md) → [`008a3eb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a3/008a3eb8.md) FUN_008a3eb8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0089e87c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089e/0089e87c.md) · 呼出先 4件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`008b0b98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b0/008b0b98.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`008b0bf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b0bf0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008a3ed4 ["INT_ADD", "register:40f0:8", ["const:8a3ed4:8", "const:4:8"]]
- 008a3ed4 ["CALL", null, ["callee:0043bb60:8"]]
+ 008a3f2c ["INT_ADD", "register:40f0:8", ["const:8a3f2c:8", "const:4:8"]]
+ 008a3f2c ["CALL", null, ["callee:0043bb60:8"]]
- 008a3ee4 ["INT_ADD", "register:40f0:8", ["const:8a3ee4:8", "const:4:8"]]
- 008a3ee4 ["CALL", null, ["callee:0043bb60:8"]]
+ 008a3f3c ["INT_ADD", "register:40f0:8", ["const:8a3f3c:8", "const:4:8"]]
+ 008a3f3c ["CALL", null, ["callee:0043bb60:8"]]
- 008a3f38 ["INT_ADD", "register:40f0:8", ["const:8a3f38:8", "const:4:8"]]
- 008a3f38 ["CALL", null, ["callee:008b0bf0:8"]]
+ 008a3f90 ["INT_ADD", "register:40f0:8", ["const:8a3f90:8", "const:4:8"]]
+ 008a3f90 ["CALL", null, ["callee:008b0bf0:8"]]
~~~


<a id="compare-0d4a693845cfd687be006339a3b72bd2"></a>

### [`008a3fd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a3/008a3fd4.md) → [`008a402c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a402c.md) FUN_008a402c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0089e87c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089e/0089e87c.md) · 呼出先 4件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`008b5290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b5/008b5290.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`008b52e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b5/008b52e8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008a4030 ["INT_ADD", "register:40f0:8", ["const:8a4030:8", "const:4:8"]]
- 008a4030 ["CALL", null, ["callee:0043bb60:8"]]
+ 008a4088 ["INT_ADD", "register:40f0:8", ["const:8a4088:8", "const:4:8"]]
+ 008a4088 ["CALL", null, ["callee:0043bb60:8"]]
- 008a4040 ["INT_ADD", "register:40f0:8", ["const:8a4040:8", "const:4:8"]]
- 008a4040 ["CALL", null, ["callee:0043bb60:8"]]
+ 008a4098 ["INT_ADD", "register:40f0:8", ["const:8a4098:8", "const:4:8"]]
+ 008a4098 ["CALL", null, ["callee:0043bb60:8"]]
- 008a4074 ["INT_ADD", "register:40f0:8", ["const:8a4074:8", "const:4:8"]]
- 008a4074 ["CALL", null, ["callee:008b52e8:8"]]
+ 008a40cc ["INT_ADD", "register:40f0:8", ["const:8a40cc:8", "const:4:8"]]
+ 008a40cc ["CALL", null, ["callee:008b52e8:8"]]
~~~


<a id="compare-a19859cccc2a04c6b948dc98f22eb946"></a>

### [`008a4108`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a4/008a4108.md) → [`008a4160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4160.md) FUN_008a4160

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008977c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00897/008977c0.md) · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00897818`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00897/00897818.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008a4174 ["COPY", "register:0:8", ["register:4040:8"]]
- 008a4174 ["INT_ADD", "register:40f0:8", ["const:8a4174:8", "const:4:8"]]
- 008a4174 ["CALLIND", null, ["register:0:8"]]
+ 008a41cc ["COPY", "register:0:8", ["register:4040:8"]]
+ 008a41cc ["INT_ADD", "register:40f0:8", ["const:8a41cc:8", "const:4:8"]]
+ 008a41cc ["CALLIND", null, ["register:0:8"]]
- 008a4184 ["COPY", "register:0:8", ["register:4040:8"]]
- 008a4184 ["INT_ADD", "register:40f0:8", ["const:8a4184:8", "const:4:8"]]
- 008a4184 ["CALLIND", null, ["register:0:8"]]
+ 008a41dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 008a41dc ["INT_ADD", "register:40f0:8", ["const:8a41dc:8", "const:4:8"]]
+ 008a41dc ["CALLIND", null, ["register:0:8"]]
- 008a41a4 ["COPY", "register:0:8", ["register:4040:8"]]
- 008a41a4 ["INT_ADD", "register:40f0:8", ["const:8a41a4:8", "const:4:8"]]
- 008a41a4 ["CALLIND", null, ["register:0:8"]]
+ 008a41fc ["COPY", "register:0:8", ["register:4040:8"]]
+ 008a41fc ["INT_ADD", "register:40f0:8", ["const:8a41fc:8", "const:4:8"]]
+ 008a41fc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ec84819a62e868233305318bb3f23164"></a>

### [`008a74a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a7/008a74a8.md) → [`008a7500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7500.md) FUN_008a7500

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0044f898`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044f/0044f898.md) [`0082eaf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0082e/0082eaf8.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0044f8d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f8d8.md) [`0082eb50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082e/0082eb50.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008a74b0 ["INT_ADD", "register:40f0:8", ["const:8a74b0:8", "const:4:8"]]
- 008a74b0 ["CALL", null, ["callee:00851550:8"]]
+ 008a7508 ["INT_ADD", "register:40f0:8", ["const:8a7508:8", "const:4:8"]]
+ 008a7508 ["CALL", null, ["callee:00851550:8"]]
- 008a74c4 ["INT_ADD", "register:40f0:8", ["const:8a74c4:8", "const:4:8"]]
- 008a74c4 ["CALL", null, ["callee:0082eb50:8"]]
+ 008a751c ["INT_ADD", "register:40f0:8", ["const:8a751c:8", "const:4:8"]]
+ 008a751c ["CALL", null, ["callee:0082eb50:8"]]
- 008a74c8 ["INT_ADD", "register:40f0:8", ["const:8a74c8:8", "const:4:8"]]
- 008a74c8 ["CALL", null, ["callee:0044f8d8:8"]]
+ 008a7520 ["INT_ADD", "register:40f0:8", ["const:8a7520:8", "const:4:8"]]
+ 008a7520 ["CALL", null, ["callee:0044f8d8:8"]]
~~~


<a id="compare-dc7eb3e19b8d7f3d4c28a86868aa263d"></a>

### [`008a7548`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a7/008a7548.md) → [`008a75a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a75a0.md) FUN_008a75a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`0044f898`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044f/0044f898.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0044f8d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f8d8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008a7550 ["INT_ADD", "register:40f0:8", ["const:8a7550:8", "const:4:8"]]
- 008a7550 ["CALL", null, ["callee:0044f8d8:8"]]
+ 008a75a8 ["INT_ADD", "register:40f0:8", ["const:8a75a8:8", "const:4:8"]]
+ 008a75a8 ["CALL", null, ["callee:0044f8d8:8"]]
~~~


<a id="compare-87feec95cd1aa1f6598fa06b71a95e30"></a>

### [`008a8cc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a8/008a8cc0.md) → [`008a8d18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a8/008a8d18.md) FUN_008a8d18

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`0089a414`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089a/0089a414.md) · 呼出先 4件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`008a8e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a8/008a8e08.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`0089a46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089a/0089a46c.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`008a8e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a8/008a8e60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008a8d24 ["INT_ADD", "register:40f0:8", ["const:8a8d24:8", "const:4:8"]]
- 008a8d24 ["CALL", null, ["callee:0043bb60:8"]]
+ 008a8d7c ["INT_ADD", "register:40f0:8", ["const:8a8d7c:8", "const:4:8"]]
+ 008a8d7c ["CALL", null, ["callee:0043bb60:8"]]
- 008a8d38 ["INT_ADD", "register:40f0:8", ["const:8a8d38:8", "const:4:8"]]
- 008a8d38 ["CALL", null, ["callee:0043bb60:8"]]
+ 008a8d90 ["INT_ADD", "register:40f0:8", ["const:8a8d90:8", "const:4:8"]]
+ 008a8d90 ["CALL", null, ["callee:0043bb60:8"]]
- 008a8d70 ["INT_ADD", "register:40f0:8", ["const:8a8d70:8", "const:4:8"]]
- 008a8d70 ["CALL", null, ["callee:008a8e60:8"]]
+ 008a8dc8 ["INT_ADD", "register:40f0:8", ["const:8a8dc8:8", "const:4:8"]]
+ 008a8dc8 ["CALL", null, ["callee:008a8e60:8"]]
~~~


<a id="compare-02d96cfd7031eeaba0f43c9ff9786d50"></a>

### [`008ab2b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ab/008ab2b8.md) → [`008ab310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008ab310.md) FUN_008ab310

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`008aac28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008aa/008aac28.md) [`00a3ba20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3b/00a3ba20.md) [`00a3ce18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3c/00a3ce18.md) · 呼出先 8件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`008ab968`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ab/008ab968.md) [`008abb70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ab/008abb70.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 3件 [`008aac80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008aa/008aac80.md) [`00a3ba74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3b/00a3ba74.md) [`00a3ce6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3c/00a3ce6c.md) · 呼出先 8件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`008ab9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008ab9c0.md) [`008abbc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008abbc8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008ab368 ["INT_ADD", "register:40f0:8", ["const:8ab368:8", "const:4:8"]]
- 008ab368 ["CALL", null, ["callee:008ab9c0:8"]]
+ 008ab3c0 ["INT_ADD", "register:40f0:8", ["const:8ab3c0:8", "const:4:8"]]
+ 008ab3c0 ["CALL", null, ["callee:008ab9c0:8"]]
- 008ab3f4 ["INT_ADD", "register:40f0:8", ["const:8ab3f4:8", "const:4:8"]]
- 008ab3f4 ["CALL", null, ["callee:00c57f60:8"]]
+ 008ab44c ["INT_ADD", "register:40f0:8", ["const:8ab44c:8", "const:4:8"]]
+ 008ab44c ["CALL", null, ["callee:00c57f60:8"]]
- 008ab434 ["INT_ADD", "register:40f0:8", ["const:8ab434:8", "const:4:8"]]
- 008ab434 ["CALL", null, ["callee:00c580d0:8"]]
+ 008ab48c ["INT_ADD", "register:40f0:8", ["const:8ab48c:8", "const:4:8"]]
+ 008ab48c ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-67c9612a1b2b29a4d8bf201253b5cf5d"></a>

### [`008ab85c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ab/008ab85c.md) → [`008ab8b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008ab8b4.md) FUN_008ab8b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008ab874 ["INT_ADD", "register:40f0:8", ["const:8ab874:8", "const:4:8"]]
- 008ab874 ["CALL", null, ["callee:005c17dc:8"]]
+ 008ab8cc ["INT_ADD", "register:40f0:8", ["const:8ab8cc:8", "const:4:8"]]
+ 008ab8cc ["CALL", null, ["callee:005c17dc:8"]]
~~~


<a id="compare-7055b18b654c05476cf0827801c56588"></a>

### [`008ab8e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ab/008ab8e8.md) → [`008ab940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008ab940.md) FUN_008ab940

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`0058fb80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0058f/0058fb80.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0058fbc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058fbc0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008ab908 ["INT_ADD", "register:40f0:8", ["const:8ab908:8", "const:4:8"]]
- 008ab908 ["CALL", null, ["callee:0058fbc0:8"]]
+ 008ab960 ["INT_ADD", "register:40f0:8", ["const:8ab960:8", "const:4:8"]]
+ 008ab960 ["CALL", null, ["callee:0058fbc0:8"]]
- 008ab90c ["INT_ADD", "register:40f0:8", ["const:8ab90c:8", "const:4:8"]]
- 008ab90c ["CALL", null, ["callee:00851550:8"]]
+ 008ab964 ["INT_ADD", "register:40f0:8", ["const:8ab964:8", "const:4:8"]]
+ 008ab964 ["CALL", null, ["callee:00851550:8"]]
- 008ab91c ["INT_ADD", "register:40f0:8", ["const:8ab91c:8", "const:4:8"]]
- 008ab91c ["CALL", null, ["callee:00851550:8"]]
+ 008ab974 ["INT_ADD", "register:40f0:8", ["const:8ab974:8", "const:4:8"]]
+ 008ab974 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-4ae04c2d99ec878bd3dd9cb246e939c3"></a>

### [`008ab968`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ab/008ab968.md) → [`008ab9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008ab9c0.md) FUN_008ab9c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 5件 [`008ab2b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ab/008ab2b8.md) [`00a3bd44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3b/00a3bd44.md) [`00a3ce18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3c/00a3ce18.md) [`00a3d9f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3d/00a3d9f4.md) [`00a3daa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a3d/00a3daa0.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 5件 [`008ab310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008ab310.md) [`00a3bd98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3b/00a3bd98.md) [`00a3ce6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3c/00a3ce6c.md) [`00a3da48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3d/00a3da48.md) [`00a3daf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3d/00a3daf4.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008aba0c ["INT_ADD", "register:40f0:8", ["const:8aba0c:8", "const:4:8"]]
- 008aba0c ["CALL", null, ["callee:00c57f60:8"]]
+ 008aba64 ["INT_ADD", "register:40f0:8", ["const:8aba64:8", "const:4:8"]]
+ 008aba64 ["CALL", null, ["callee:00c57f60:8"]]
- 008aba40 ["INT_ADD", "register:40f0:8", ["const:8aba40:8", "const:4:8"]]
- 008aba40 ["CALL", null, ["callee:0043bbe4:8"]]
+ 008aba98 ["INT_ADD", "register:40f0:8", ["const:8aba98:8", "const:4:8"]]
+ 008aba98 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-cb2e52195159b9e3dac746a48ad414a0"></a>

### [`008ac380`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ac/008ac380.md) → [`008ac3d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008ac3d8.md) FUN_008ac3d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`008abcf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ab/008abcf8.md) [`008fd1e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fd/008fd1e0.md) [`008fd500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fd/008fd500.md) · 呼出先 8件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`008ac9dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ac/008ac9dc.md) [`008acbe4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ac/008acbe4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 3件 [`008abd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008abd50.md) [`008fd234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fd/008fd234.md) [`008fd554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fd/008fd554.md) · 呼出先 8件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`008aca34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008aca34.md) [`008acc3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008acc3c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008ac420 ["INT_ADD", "register:40f0:8", ["const:8ac420:8", "const:4:8"]]
- 008ac420 ["CALL", null, ["callee:008aca34:8"]]
+ 008ac478 ["INT_ADD", "register:40f0:8", ["const:8ac478:8", "const:4:8"]]
+ 008ac478 ["CALL", null, ["callee:008aca34:8"]]
- 008ac4a4 ["INT_ADD", "register:40f0:8", ["const:8ac4a4:8", "const:4:8"]]
- 008ac4a4 ["CALL", null, ["callee:00c57f60:8"]]
+ 008ac4fc ["INT_ADD", "register:40f0:8", ["const:8ac4fc:8", "const:4:8"]]
+ 008ac4fc ["CALL", null, ["callee:00c57f60:8"]]
- 008ac4e0 ["INT_ADD", "register:40f0:8", ["const:8ac4e0:8", "const:4:8"]]
- 008ac4e0 ["CALL", null, ["callee:00c580d0:8"]]
+ 008ac538 ["INT_ADD", "register:40f0:8", ["const:8ac538:8", "const:4:8"]]
+ 008ac538 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-f87c633cb10204afe9272f8e7ed117d0"></a>

### [`008ac95c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ac/008ac95c.md) → [`008ac9b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008ac9b4.md) FUN_008ac9b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`0058fb80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0058f/0058fb80.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0058fbc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058fbc0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008ac97c ["INT_ADD", "register:40f0:8", ["const:8ac97c:8", "const:4:8"]]
- 008ac97c ["CALL", null, ["callee:0058fbc0:8"]]
+ 008ac9d4 ["INT_ADD", "register:40f0:8", ["const:8ac9d4:8", "const:4:8"]]
+ 008ac9d4 ["CALL", null, ["callee:0058fbc0:8"]]
- 008ac980 ["INT_ADD", "register:40f0:8", ["const:8ac980:8", "const:4:8"]]
- 008ac980 ["CALL", null, ["callee:00851550:8"]]
+ 008ac9d8 ["INT_ADD", "register:40f0:8", ["const:8ac9d8:8", "const:4:8"]]
+ 008ac9d8 ["CALL", null, ["callee:00851550:8"]]
- 008ac990 ["INT_ADD", "register:40f0:8", ["const:8ac990:8", "const:4:8"]]
- 008ac990 ["CALL", null, ["callee:00851550:8"]]
+ 008ac9e8 ["INT_ADD", "register:40f0:8", ["const:8ac9e8:8", "const:4:8"]]
+ 008ac9e8 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-fec4189858c1d8a430e93ad764da5f00"></a>

### [`008ac9dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ac/008ac9dc.md) → [`008aca34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008aca34.md) FUN_008aca34

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`008ac380`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ac/008ac380.md) [`008fd500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fd/008fd500.md) [`008fe584`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fe/008fe584.md) [`008fe630`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fe/008fe630.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 4件 [`008ac3d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008ac3d8.md) [`008fd554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fd/008fd554.md) [`008fe5d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fe/008fe5d8.md) [`008fe684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fe/008fe684.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008aca80 ["INT_ADD", "register:40f0:8", ["const:8aca80:8", "const:4:8"]]
- 008aca80 ["CALL", null, ["callee:00c57f60:8"]]
+ 008acad8 ["INT_ADD", "register:40f0:8", ["const:8acad8:8", "const:4:8"]]
+ 008acad8 ["CALL", null, ["callee:00c57f60:8"]]
- 008acab4 ["INT_ADD", "register:40f0:8", ["const:8acab4:8", "const:4:8"]]
- 008acab4 ["CALL", null, ["callee:0043bbe4:8"]]
+ 008acb0c ["INT_ADD", "register:40f0:8", ["const:8acb0c:8", "const:4:8"]]
+ 008acb0c ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-6d42c2004c148e61986e36b8cd89d4ad"></a>

### [`008b09d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b0/008b09d8.md) → [`008b0a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b0a30.md) FUN_008b0a30

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0089e87c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089e/0089e87c.md) [`008b09d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b0/008b09d8.md) · 呼出先 3件 [`008b09d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b0/008b09d8.md) [`008b0a28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b0/008b0a28.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) [`008b0a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b0a30.md) · 呼出先 3件 [`008b0a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b0a30.md) [`008b0a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b0a80.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b09f8 ["INT_ADD", "register:40f0:8", ["const:8b09f8:8", "const:4:8"]]
- 008b09f8 ["CALL", null, ["local:b0:8"]]
+ 008b0a50 ["INT_ADD", "register:40f0:8", ["const:8b0a50:8", "const:4:8"]]
+ 008b0a50 ["CALL", null, ["local:b0:8"]]
- 008b0a04 ["INT_ADD", "register:40f0:8", ["const:8b0a04:8", "const:4:8"]]
- 008b0a04 ["CALL", null, ["local:b0:8"]]
+ 008b0a5c ["INT_ADD", "register:40f0:8", ["const:8b0a5c:8", "const:4:8"]]
+ 008b0a5c ["CALL", null, ["local:b0:8"]]
- 008b0a10 ["INT_ADD", "register:40f0:8", ["const:8b0a10:8", "const:4:8"]]
- 008b0a10 ["CALL", null, ["callee:008b0a80:8"]]
+ 008b0a68 ["INT_ADD", "register:40f0:8", ["const:8b0a68:8", "const:4:8"]]
+ 008b0a68 ["CALL", null, ["callee:008b0a80:8"]]
~~~


<a id="compare-d11d2ae17cf8aa8f10bd372e8e7b742e"></a>

### [`008b0a28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b0/008b0a28.md) → [`008b0a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b0a80.md) FUN_008b0a80

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`008b09d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b0/008b09d8.md) [`008b0a28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b0/008b0a28.md) · 呼出先 2件 [`008b0a28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b0/008b0a28.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`008b0a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b0a30.md) [`008b0a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b0a80.md) · 呼出先 2件 [`008b0a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b0a80.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b0a48 ["INT_ADD", "register:40f0:8", ["const:8b0a48:8", "const:4:8"]]
- 008b0a48 ["CALL", null, ["local:b0:8"]]
+ 008b0aa0 ["INT_ADD", "register:40f0:8", ["const:8b0aa0:8", "const:4:8"]]
+ 008b0aa0 ["CALL", null, ["local:b0:8"]]
- 008b0a54 ["INT_ADD", "register:40f0:8", ["const:8b0a54:8", "const:4:8"]]
- 008b0a54 ["CALL", null, ["local:b0:8"]]
+ 008b0aac ["INT_ADD", "register:40f0:8", ["const:8b0aac:8", "const:4:8"]]
+ 008b0aac ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-4e97d3432d6ec08cb3237669b2f75975"></a>

### [`008b0a6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b0/008b0a6c.md) → [`008b0ac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b0/008b0ac4.md) FUN_008b0ac4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008a3e34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a3/008a3e34.md) · 呼出先 6件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`005dc300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005dc/005dc300.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`008a3e8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a3/008a3e8c.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`005dc340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc340.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b0ae4 ["INT_ADD", "register:40f0:8", ["const:8b0ae4:8", "const:4:8"]]
- 008b0ae4 ["CALL", null, ["callee:00c57f60:8"]]
+ 008b0b3c ["INT_ADD", "register:40f0:8", ["const:8b0b3c:8", "const:4:8"]]
+ 008b0b3c ["CALL", null, ["callee:00c57f60:8"]]
- 008b0b08 ["INT_ADD", "register:40f0:8", ["const:8b0b08:8", "const:4:8"]]
- 008b0b08 ["CALL", null, ["callee:00c58160:8"]]
+ 008b0b60 ["INT_ADD", "register:40f0:8", ["const:8b0b60:8", "const:4:8"]]
+ 008b0b60 ["CALL", null, ["callee:00c58160:8"]]
- 008b0b34 ["INT_ADD", "register:40f0:8", ["const:8b0b34:8", "const:4:8"]]
- 008b0b34 ["CALL", null, ["callee:00c58160:8"]]
+ 008b0b8c ["INT_ADD", "register:40f0:8", ["const:8b0b8c:8", "const:4:8"]]
+ 008b0b8c ["CALL", null, ["callee:00c58160:8"]]
~~~


<a id="compare-9255c0004d9ba8f79020f2bee7662844"></a>

### [`008b6d24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6d24.md) → [`008b6d7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6d7c.md) FUN_008b6d7c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008b6a5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6a5c.md) · 呼出先 2件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`008b6ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6ab4.md) · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b6d60 ["COPY", "register:0:8", ["register:4040:8"]]
- 008b6d60 ["INT_ADD", "register:40f0:8", ["const:8b6d60:8", "const:4:8"]]
- 008b6d60 ["CALLIND", null, ["register:0:8"]]
+ 008b6db8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008b6db8 ["INT_ADD", "register:40f0:8", ["const:8b6db8:8", "const:4:8"]]
+ 008b6db8 ["CALLIND", null, ["register:0:8"]]
- 008b6d94 ["INT_ADD", "register:40f0:8", ["const:8b6d94:8", "const:4:8"]]
- 008b6d94 ["CALL", null, ["callee:00459db4:8"]]
+ 008b6dec ["INT_ADD", "register:40f0:8", ["const:8b6dec:8", "const:4:8"]]
+ 008b6dec ["CALL", null, ["callee:00459db4:8"]]
- 008b6d98 ["INT_ADD", "register:40f0:8", ["const:8b6d98:8", "const:4:8"]]
- 008b6d98 ["CALL", null, ["callee:00c57fb0:8"]]
+ 008b6df0 ["INT_ADD", "register:40f0:8", ["const:8b6df0:8", "const:4:8"]]
+ 008b6df0 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-7e1bc44069711297d22b3019cc6feb4e"></a>

### [`008b6ec4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ec4.md) → [`008b6f1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f1c.md) FUN_008b6f1c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00786cd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00786/00786cd4.md) · 呼出先 1件 [`00813fd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00813/00813fd8.md)
- 新版 呼出元 1件 [`00786d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00786/00786d2c.md) · 呼出先 1件 [`00814030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00814/00814030.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b6efc ["INT_ADD", "register:40f0:8", ["const:8b6efc:8", "const:4:8"]]
- 008b6efc ["CALL", null, ["callee:00814030:8"]]
+ 008b6f54 ["INT_ADD", "register:40f0:8", ["const:8b6f54:8", "const:4:8"]]
+ 008b6f54 ["CALL", null, ["callee:00814030:8"]]
~~~


<a id="compare-f4363e0e48dac7319a2223e77f0c82d6"></a>

### [`008b6f58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f58.md) → [`008b6fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6fb0.md) FUN_008b6fb0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`006a9764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a9/006a9764.md) [`007f6ff4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f6/007f6ff4.md) · 呼出先 2件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 2件 [`006a97bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a9/006a97bc.md) [`007f704c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f7/007f704c.md) · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b6fb0 ["COPY", "register:0:8", ["register:4048:8"]]
- 008b6fb0 ["INT_ADD", "register:40f0:8", ["const:8b6fb0:8", "const:4:8"]]
- 008b6fb0 ["CALLIND", null, ["register:0:8"]]
+ 008b7008 ["COPY", "register:0:8", ["register:4048:8"]]
+ 008b7008 ["INT_ADD", "register:40f0:8", ["const:8b7008:8", "const:4:8"]]
+ 008b7008 ["CALLIND", null, ["register:0:8"]]
- 008b6fe4 ["INT_ADD", "register:40f0:8", ["const:8b6fe4:8", "const:4:8"]]
- 008b6fe4 ["CALL", null, ["callee:00459db4:8"]]
+ 008b703c ["INT_ADD", "register:40f0:8", ["const:8b703c:8", "const:4:8"]]
+ 008b703c ["CALL", null, ["callee:00459db4:8"]]
- 008b6fe8 ["INT_ADD", "register:40f0:8", ["const:8b6fe8:8", "const:4:8"]]
- 008b6fe8 ["CALL", null, ["callee:00c57fb0:8"]]
+ 008b7040 ["INT_ADD", "register:40f0:8", ["const:8b7040:8", "const:4:8"]]
+ 008b7040 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-ea6942db2893120e79410775f4ec5662"></a>

### [`008b7948`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7948.md) → [`008b79a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b79a0.md) FUN_008b79a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 27件 [`006583a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00658/006583a4.md) [`00659e9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00659/00659e9c.md) [`0065be2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065b/0065be2c.md) [`0068bad0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068b/0068bad0.md) [`00696e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00696/00696e24.md) · 呼出先 2件 [`008b7c4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7c4c.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 27件 [`006583e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00658/006583e4.md) [`00659edc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00659/00659edc.md) [`0065be6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065b/0065be6c.md) [`0068bb28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068b/0068bb28.md) [`00696e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696e7c.md) · 呼出先 2件 [`008b7ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7ca4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b796c ["INT_ADD", "register:40f0:8", ["const:8b796c:8", "const:4:8"]]
- 008b796c ["CALL", null, ["callee:008b7ca4:8"]]
+ 008b79c4 ["INT_ADD", "register:40f0:8", ["const:8b79c4:8", "const:4:8"]]
+ 008b79c4 ["CALL", null, ["callee:008b7ca4:8"]]
- 008b7990 ["INT_ADD", "register:40f0:8", ["const:8b7990:8", "const:4:8"]]
- 008b7990 ["CALL", null, ["callee:00c57fb0:8"]]
+ 008b79e8 ["INT_ADD", "register:40f0:8", ["const:8b79e8:8", "const:4:8"]]
+ 008b79e8 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-80ee9ab1693f9f06de4a6cc1c47d14f9"></a>

### [`008b7994`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7994.md) → [`008b79ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b79ec.md) FUN_008b79ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 14件 [`0067e7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0067e/0067e7f8.md) [`006b380c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b3/006b380c.md) [`006b3ba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b3/006b3ba4.md) [`0075eb80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075e/0075eb80.md) [`007bda44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bda44.md) · 呼出先 1件 [`00869a74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869a74.md)
- 新版 呼出元 14件 [`0067e838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067e/0067e838.md) [`006b3864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b3864.md) [`006b3bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b3bfc.md) [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) · 呼出先 1件 [`00869acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869acc.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b79ac ["INT_ADD", "register:40f0:8", ["const:8b79ac:8", "const:4:8"]]
- 008b79ac ["CALL", null, ["callee:00869acc:8"]]
+ 008b7a04 ["INT_ADD", "register:40f0:8", ["const:8b7a04:8", "const:4:8"]]
+ 008b7a04 ["CALL", null, ["callee:00869acc:8"]]
~~~


<a id="compare-f461e7c20bd1472a37d808585df6c09d"></a>

### [`008b7ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7ae4.md) → [`008b7b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7b3c.md) FUN_008b7b3c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008b68d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b68d8.md) · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`008b6930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6930.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b7b50 ["COPY", "register:0:8", ["register:4040:8"]]
- 008b7b50 ["INT_ADD", "register:40f0:8", ["const:8b7b50:8", "const:4:8"]]
- 008b7b50 ["CALLIND", null, ["register:0:8"]]
+ 008b7ba8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008b7ba8 ["INT_ADD", "register:40f0:8", ["const:8b7ba8:8", "const:4:8"]]
+ 008b7ba8 ["CALLIND", null, ["register:0:8"]]
- 008b7b60 ["COPY", "register:0:8", ["register:4040:8"]]
- 008b7b60 ["INT_ADD", "register:40f0:8", ["const:8b7b60:8", "const:4:8"]]
- 008b7b60 ["CALLIND", null, ["register:0:8"]]
+ 008b7bb8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008b7bb8 ["INT_ADD", "register:40f0:8", ["const:8b7bb8:8", "const:4:8"]]
+ 008b7bb8 ["CALLIND", null, ["register:0:8"]]
- 008b7b80 ["COPY", "register:0:8", ["register:4040:8"]]
- 008b7b80 ["INT_ADD", "register:40f0:8", ["const:8b7b80:8", "const:4:8"]]
- 008b7b80 ["CALLIND", null, ["register:0:8"]]
+ 008b7bd8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008b7bd8 ["INT_ADD", "register:40f0:8", ["const:8b7bd8:8", "const:4:8"]]
+ 008b7bd8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6a1f34b6b80c6def2fdb235bdab67ad7"></a>

### [`008b7c4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7c4c.md) → [`008b7ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7ca4.md) FUN_008b7ca4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008b7948`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7948.md) · 呼出先 3件 [`00494610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00494/00494610.md) [`008b73cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b73cc.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`008b79a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b79a0.md) · 呼出先 3件 [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`008b7424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7424.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b7cfc ["INT_ADD", "register:40f0:8", ["const:8b7cfc:8", "const:4:8"]]
- 008b7cfc ["CALL", null, ["callee:00494650:8"]]
+ 008b7d54 ["INT_ADD", "register:40f0:8", ["const:8b7d54:8", "const:4:8"]]
+ 008b7d54 ["CALL", null, ["callee:00494650:8"]]
- 008b7d04 ["INT_ADD", "register:40f0:8", ["const:8b7d04:8", "const:4:8"]]
- 008b7d04 ["CALL", null, ["callee:008b7424:8"]]
+ 008b7d5c ["INT_ADD", "register:40f0:8", ["const:8b7d5c:8", "const:4:8"]]
+ 008b7d5c ["CALL", null, ["callee:008b7424:8"]]
- 008b7d0c ["INT_ADD", "register:40f0:8", ["const:8b7d0c:8", "const:4:8"]]
- 008b7d0c ["CALL", null, ["callee:00c57f80:8"]]
+ 008b7d64 ["INT_ADD", "register:40f0:8", ["const:8b7d64:8", "const:4:8"]]
+ 008b7d64 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-f43274432dc62e5aa6c27d235bd59ffe"></a>

### [`008b8304`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b8/008b8304.md) → [`008b835c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b8/008b835c.md) FUN_008b835c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b8320 ["INT_ADD", "register:40f0:8", ["const:8b8320:8", "const:4:8"]]
- 008b8320 ["CALL", null, ["callee:00c53da0:8"]]
+ 008b8378 ["INT_ADD", "register:40f0:8", ["const:8b8378:8", "const:4:8"]]
+ 008b8378 ["CALL", null, ["callee:00c53da0:8"]]
- 008b8340 ["COPY", "register:0:8", ["register:4040:8"]]
- 008b8340 ["INT_ADD", "register:40f0:8", ["const:8b8340:8", "const:4:8"]]
- 008b8340 ["CALLIND", null, ["register:0:8"]]
+ 008b8398 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008b8398 ["INT_ADD", "register:40f0:8", ["const:8b8398:8", "const:4:8"]]
+ 008b8398 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-1e39ef5eac90a53716a5130cb53e8fc3"></a>

### [`008b90e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b90e0.md) → [`008b9138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b9138.md) FUN_008b9138

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b912c ["INT_ADD", "register:40f0:8", ["const:8b912c:8", "const:4:8"]]
- 008b912c ["CALL", null, ["callee:00c53da0:8"]]
+ 008b9184 ["INT_ADD", "register:40f0:8", ["const:8b9184:8", "const:4:8"]]
+ 008b9184 ["CALL", null, ["callee:00c53da0:8"]]
- 008b9140 ["COPY", "register:0:8", ["register:4040:8"]]
- 008b9140 ["INT_ADD", "register:40f0:8", ["const:8b9140:8", "const:4:8"]]
- 008b9140 ["CALLIND", null, ["register:0:8"]]
+ 008b9198 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008b9198 ["INT_ADD", "register:40f0:8", ["const:8b9198:8", "const:4:8"]]
+ 008b9198 ["CALLIND", null, ["register:0:8"]]
- 008b9148 ["INT_ADD", "register:40f0:8", ["const:8b9148:8", "const:4:8"]]
- 008b9148 ["CALL", null, ["callee:00c57f50:8"]]
+ 008b91a0 ["INT_ADD", "register:40f0:8", ["const:8b91a0:8", "const:4:8"]]
+ 008b91a0 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-afc9116fb0240a920e7d83b71765850e"></a>

### [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md) → [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) FUN_008b91d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 343件 [`005d9c94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d9/005d9c94.md) [`005d9f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d9/005d9f4c.md) [`005dafcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005da/005dafcc.md) [`005db074`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005db074.md) [`005db7f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005db7f4.md) · 呼出先 2件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 343件 [`005d9cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d9/005d9cd4.md) [`005d9f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d9/005d9f8c.md) [`005db00c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db00c.md) [`005db0b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db0b4.md) [`005db834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db834.md) · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b91c8 ["COPY", "register:0:8", ["register:4040:8"]]
- 008b91c8 ["INT_ADD", "register:40f0:8", ["const:8b91c8:8", "const:4:8"]]
- 008b91c8 ["CALLIND", null, ["register:0:8"]]
+ 008b9220 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008b9220 ["INT_ADD", "register:40f0:8", ["const:8b9220:8", "const:4:8"]]
+ 008b9220 ["CALLIND", null, ["register:0:8"]]
- 008b91fc ["INT_ADD", "register:40f0:8", ["const:8b91fc:8", "const:4:8"]]
- 008b91fc ["CALL", null, ["callee:00459db4:8"]]
+ 008b9254 ["INT_ADD", "register:40f0:8", ["const:8b9254:8", "const:4:8"]]
+ 008b9254 ["CALL", null, ["callee:00459db4:8"]]
- 008b9200 ["INT_ADD", "register:40f0:8", ["const:8b9200:8", "const:4:8"]]
- 008b9200 ["CALL", null, ["callee:00c57fb0:8"]]
+ 008b9258 ["INT_ADD", "register:40f0:8", ["const:8b9258:8", "const:4:8"]]
+ 008b9258 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-c304bde9020f04e6ce022326772390fd"></a>

### [`008b9204`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9204.md) → [`008b925c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b925c.md) FUN_008b925c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 5件 [`009ffff4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ff/009ffff4.md) [`00a02be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a02/00a02be8.md) [`00a039c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a03/00a039c4.md) [`00a03d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a03/00a03d04.md) [`00a057e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a05/00a057e0.md) · 呼出先 2件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 5件 [`00a00048`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a00/00a00048.md) [`00a02c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a02c3c.md) [`00a03a18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a03a18.md) [`00a03d58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a03d58.md) [`00a05834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a05834.md) · 呼出先 2件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b9254 ["COPY", "register:0:8", ["register:4040:8"]]
- 008b9254 ["INT_ADD", "register:40f0:8", ["const:8b9254:8", "const:4:8"]]
- 008b9254 ["CALLIND", null, ["register:0:8"]]
+ 008b92ac ["COPY", "register:0:8", ["register:4040:8"]]
+ 008b92ac ["INT_ADD", "register:40f0:8", ["const:8b92ac:8", "const:4:8"]]
+ 008b92ac ["CALLIND", null, ["register:0:8"]]
- 008b9288 ["INT_ADD", "register:40f0:8", ["const:8b9288:8", "const:4:8"]]
- 008b9288 ["CALL", null, ["callee:00459db4:8"]]
+ 008b92e0 ["INT_ADD", "register:40f0:8", ["const:8b92e0:8", "const:4:8"]]
+ 008b92e0 ["CALL", null, ["callee:00459db4:8"]]
- 008b928c ["INT_ADD", "register:40f0:8", ["const:8b928c:8", "const:4:8"]]
- 008b928c ["CALL", null, ["callee:00c57fb0:8"]]
+ 008b92e4 ["INT_ADD", "register:40f0:8", ["const:8b92e4:8", "const:4:8"]]
+ 008b92e4 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-6d765e30a6123ccfc4fdc6ddf5f2dca0"></a>

### [`008b9298`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9298.md) → [`008b92f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92f0.md) FUN_008b92f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 54件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`00627cb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00627/00627cb4.md) [`0068e754`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068e/0068e754.md) [`0068ed80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068e/0068ed80.md) [`0068f5d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068f/0068f5d8.md) · 呼出先 2件 [`0046daf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046daf4.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 54件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00627cf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00627/00627cf4.md) [`0068e7ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068e/0068e7ac.md) [`0068edd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068e/0068edd8.md) [`0068f630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068f/0068f630.md) · 呼出先 2件 [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b92c0 ["INT_ADD", "register:40f0:8", ["const:8b92c0:8", "const:4:8"]]
- 008b92c0 ["CALL", null, ["callee:0046db34:8"]]
+ 008b9318 ["INT_ADD", "register:40f0:8", ["const:8b9318:8", "const:4:8"]]
+ 008b9318 ["CALL", null, ["callee:0046db34:8"]]
- 008b92e8 ["INT_ADD", "register:40f0:8", ["const:8b92e8:8", "const:4:8"]]
- 008b92e8 ["CALL", null, ["callee:00c57fb0:8"]]
+ 008b9340 ["INT_ADD", "register:40f0:8", ["const:8b9340:8", "const:4:8"]]
+ 008b9340 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-5b493307be6871f555e67a8b8c90f2d7"></a>

### [`008b92ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b92ec.md) → [`008b9344`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b9344.md) FUN_008b9344

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 14件 [`0069550c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00695/0069550c.md) [`00696710`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00696/00696710.md) [`00697fd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00697/00697fd4.md) [`0069927c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00699/0069927c.md) [`006af748`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006af/006af748.md) · 呼出先 3件 [`0046daec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046daec.md) [`0046daf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046daf4.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 14件 [`00695564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00695/00695564.md) [`00696768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696768.md) [`0069802c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/0069802c.md) [`006992d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00699/006992d4.md) [`006af7a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af7a0.md) · 呼出先 3件 [`0046db2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db2c.md) [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b9408 ["INT_ADD", "register:40f0:8", ["const:8b9408:8", "const:4:8"]]
- 008b9408 ["CALL", null, ["callee:0046db2c:8"]]
+ 008b9460 ["INT_ADD", "register:40f0:8", ["const:8b9460:8", "const:4:8"]]
+ 008b9460 ["CALL", null, ["callee:0046db2c:8"]]
- 008b94d4 ["INT_ADD", "register:40f0:8", ["const:8b94d4:8", "const:4:8"]]
- 008b94d4 ["CALL", null, ["callee:0046db34:8"]]
+ 008b952c ["INT_ADD", "register:40f0:8", ["const:8b952c:8", "const:4:8"]]
+ 008b952c ["CALL", null, ["callee:0046db34:8"]]
- 008b94fc ["INT_ADD", "register:40f0:8", ["const:8b94fc:8", "const:4:8"]]
- 008b94fc ["CALL", null, ["callee:00c57fb0:8"]]
+ 008b9554 ["INT_ADD", "register:40f0:8", ["const:8b9554:8", "const:4:8"]]
+ 008b9554 ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-e1c7ac466b6533375012799332c3f1b9"></a>

### [`008b95cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b95cc.md) → [`008b9624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b9624.md) FUN_008b9624

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 22件 [`00606ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00606/00606ae4.md) [`0061452c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00614/0061452c.md) [`0068e754`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068e/0068e754.md) [`0068ed80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068e/0068ed80.md) [`0068f5d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068f/0068f5d8.md) · 呼出先 2件 [`008bc240`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bc/008bc240.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 22件 [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`0061456c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00614/0061456c.md) [`0068e7ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068e/0068e7ac.md) [`0068edd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068e/0068edd8.md) [`0068f630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068f/0068f630.md) · 呼出先 2件 [`008bc298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc298.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b960c ["COPY", "register:0:8", ["register:4048:8"]]
- 008b960c ["INT_ADD", "register:40f0:8", ["const:8b960c:8", "const:4:8"]]
- 008b960c ["CALLIND", null, ["register:0:8"]]
+ 008b9664 ["COPY", "register:0:8", ["register:4048:8"]]
+ 008b9664 ["INT_ADD", "register:40f0:8", ["const:8b9664:8", "const:4:8"]]
+ 008b9664 ["CALLIND", null, ["register:0:8"]]
- 008b9638 ["COPY", "register:0:8", ["register:4040:8"]]
- 008b9638 ["INT_ADD", "register:40f0:8", ["const:8b9638:8", "const:4:8"]]
- 008b9638 ["CALLIND", null, ["register:0:8"]]
+ 008b9690 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008b9690 ["INT_ADD", "register:40f0:8", ["const:8b9690:8", "const:4:8"]]
+ 008b9690 ["CALLIND", null, ["register:0:8"]]
- 008b9648 ["INT_ADD", "register:40f0:8", ["const:8b9648:8", "const:4:8"]]
- 008b9648 ["CALL", null, ["callee:008bc298:8"]]
+ 008b96a0 ["INT_ADD", "register:40f0:8", ["const:8b96a0:8", "const:4:8"]]
+ 008b96a0 ["CALL", null, ["callee:008bc298:8"]]
~~~


<a id="compare-cb69921da6f8a14eaa718f5f3602a966"></a>

### [`008b96a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b96a4.md) → [`008b96fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b96fc.md) FUN_008b96fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 38件 [`0060e0c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0060e/0060e0c4.md) [`00634a64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00634/00634a64.md) [`0066ff74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0066f/0066ff74.md) [`0068e754`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068e/0068e754.md) [`0068ed80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068e/0068ed80.md) · 呼出先 2件 [`008bc3a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bc/008bc3a8.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 38件 [`0060e104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060e/0060e104.md) [`00634aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00634/00634aa4.md) [`0066ffb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066f/0066ffb4.md) [`0068e7ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068e/0068e7ac.md) [`0068edd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068e/0068edd8.md) · 呼出先 2件 [`008bc400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc400.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008b96e4 ["COPY", "register:0:8", ["register:4048:8"]]
- 008b96e4 ["INT_ADD", "register:40f0:8", ["const:8b96e4:8", "const:4:8"]]
- 008b96e4 ["CALLIND", null, ["register:0:8"]]
+ 008b973c ["COPY", "register:0:8", ["register:4048:8"]]
+ 008b973c ["INT_ADD", "register:40f0:8", ["const:8b973c:8", "const:4:8"]]
+ 008b973c ["CALLIND", null, ["register:0:8"]]
- 008b9710 ["COPY", "register:0:8", ["register:4040:8"]]
- 008b9710 ["INT_ADD", "register:40f0:8", ["const:8b9710:8", "const:4:8"]]
- 008b9710 ["CALLIND", null, ["register:0:8"]]
+ 008b9768 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008b9768 ["INT_ADD", "register:40f0:8", ["const:8b9768:8", "const:4:8"]]
+ 008b9768 ["CALLIND", null, ["register:0:8"]]
- 008b9720 ["INT_ADD", "register:40f0:8", ["const:8b9720:8", "const:4:8"]]
- 008b9720 ["CALL", null, ["callee:008bc400:8"]]
+ 008b9778 ["INT_ADD", "register:40f0:8", ["const:8b9778:8", "const:4:8"]]
+ 008b9778 ["CALL", null, ["callee:008bc400:8"]]
~~~


<a id="compare-75621e8f9fbcacb3d59c1a47fa25fb0e"></a>

### [`008ba868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ba/008ba868.md) → [`008ba8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008ba8c0.md) FUN_008ba8c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 66件 [`005ccd04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cc/005ccd04.md) [`005d9f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d9/005d9f4c.md) [`00606ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00606/00606ae4.md) [`006103bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00610/006103bc.md) [`0061304c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00613/0061304c.md) · 呼出先 10件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b8354`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b8/008b8354.md) [`008bac8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ba/008bac8c.md) [`008bc510`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bc/008bc510.md)
- 新版 呼出元 66件 [`005ccd44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005ccd44.md) [`005d9f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d9/005d9f8c.md) [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`006103fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00610/006103fc.md) [`0061308c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00613/0061308c.md) · 呼出先 10件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b83ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b8/008b83ac.md) [`008bace4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008bace4.md) [`008bc568`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc568.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008ba8b0 ["INT_ADD", "register:40f0:8", ["const:8ba8b0:8", "const:4:8"]]
- 008ba8b0 ["CALL", null, ["callee:00c57f60:8"]]
+ 008ba908 ["INT_ADD", "register:40f0:8", ["const:8ba908:8", "const:4:8"]]
+ 008ba908 ["CALL", null, ["callee:00c57f60:8"]]
- 008ba8fc ["COPY", "register:0:8", ["register:4040:8"]]
- 008ba8fc ["INT_ADD", "register:40f0:8", ["const:8ba8fc:8", "const:4:8"]]
- 008ba8fc ["CALLIND", null, ["register:0:8"]]
+ 008ba954 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008ba954 ["INT_ADD", "register:40f0:8", ["const:8ba954:8", "const:4:8"]]
+ 008ba954 ["CALLIND", null, ["register:0:8"]]
- 008ba92c ["COPY", "register:0:8", ["register:4040:8"]]
- 008ba92c ["INT_ADD", "register:40f0:8", ["const:8ba92c:8", "const:4:8"]]
- 008ba92c ["CALLIND", null, ["register:0:8"]]
+ 008ba984 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008ba984 ["INT_ADD", "register:40f0:8", ["const:8ba984:8", "const:4:8"]]
+ 008ba984 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-57c99caf72bb4a388142e55ddcb15ebd"></a>

### [`008bac8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ba/008bac8c.md) → [`008bace4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008bace4.md) FUN_008bace4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`008ba868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ba/008ba868.md) [`008bacc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ba/008bacc8.md) [`008bb0ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bb/008bb0ec.md) · 呼出先 2件 [`00869b3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869b3c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`008ba8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008ba8c0.md) [`008bad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008bad20.md) [`008bb144`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bb144.md) · 呼出先 2件 [`00869b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869b94.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008baca8 ["INT_ADD", "register:40f0:8", ["const:8baca8:8", "const:4:8"]]
- 008baca8 ["CALL", null, ["callee:00869b94:8"]]
+ 008bad00 ["INT_ADD", "register:40f0:8", ["const:8bad00:8", "const:4:8"]]
+ 008bad00 ["CALL", null, ["callee:00869b94:8"]]
~~~


<a id="compare-dad8d5fa6cc2def4a3baa3f636773c37"></a>

### [`008bacc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ba/008bacc8.md) → [`008bad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008bad20.md) FUN_008bad20

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 81件 [`005d8f84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8f84.md) [`005db488`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005db488.md) [`005db8c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005db8c0.md) [`00606ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00606/00606ae4.md) [`0060e0c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0060e/0060e0c4.md) · 呼出先 10件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b8354`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b8/008b8354.md) [`008bac8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ba/008bac8c.md) [`008bc510`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bc/008bc510.md)
- 新版 呼出元 81件 [`005d8fc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8fc4.md) [`005db4c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db4c8.md) [`005db900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db900.md) [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`0060e104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060e/0060e104.md) · 呼出先 10件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b83ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b8/008b83ac.md) [`008bace4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008bace4.md) [`008bc568`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc568.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008bad10 ["INT_ADD", "register:40f0:8", ["const:8bad10:8", "const:4:8"]]
- 008bad10 ["CALL", null, ["callee:00c57f60:8"]]
+ 008bad68 ["INT_ADD", "register:40f0:8", ["const:8bad68:8", "const:4:8"]]
+ 008bad68 ["CALL", null, ["callee:00c57f60:8"]]
- 008bad5c ["COPY", "register:0:8", ["register:4040:8"]]
- 008bad5c ["INT_ADD", "register:40f0:8", ["const:8bad5c:8", "const:4:8"]]
- 008bad5c ["CALLIND", null, ["register:0:8"]]
+ 008badb4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008badb4 ["INT_ADD", "register:40f0:8", ["const:8badb4:8", "const:4:8"]]
+ 008badb4 ["CALLIND", null, ["register:0:8"]]
- 008bad8c ["COPY", "register:0:8", ["register:4040:8"]]
- 008bad8c ["INT_ADD", "register:40f0:8", ["const:8bad8c:8", "const:4:8"]]
- 008bad8c ["CALLIND", null, ["register:0:8"]]
+ 008bade4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008bade4 ["INT_ADD", "register:40f0:8", ["const:8bade4:8", "const:4:8"]]
+ 008bade4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8b7966f166b097d5b4ba76517b5cddec"></a>

### [`008bb0ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bb/008bb0ec.md) → [`008bb144`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bb144.md) FUN_008bb144

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 45件 [`005d8f84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8f84.md) [`005db8c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005db8c0.md) [`00606ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00606/00606ae4.md) [`0060e0c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0060e/0060e0c4.md) [`00616244`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00616/00616244.md) · 呼出先 10件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b8354`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b8/008b8354.md) [`008bac8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ba/008bac8c.md) [`008bc510`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bc/008bc510.md)
- 新版 呼出元 45件 [`005d8fc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8fc4.md) [`005db900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db900.md) [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`0060e104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060e/0060e104.md) [`00616284`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/00616284.md) · 呼出先 10件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b83ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b8/008b83ac.md) [`008bace4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008bace4.md) [`008bc568`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc568.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008bb134 ["INT_ADD", "register:40f0:8", ["const:8bb134:8", "const:4:8"]]
- 008bb134 ["CALL", null, ["callee:00c57f60:8"]]
+ 008bb18c ["INT_ADD", "register:40f0:8", ["const:8bb18c:8", "const:4:8"]]
+ 008bb18c ["CALL", null, ["callee:00c57f60:8"]]
- 008bb180 ["COPY", "register:0:8", ["register:4040:8"]]
- 008bb180 ["INT_ADD", "register:40f0:8", ["const:8bb180:8", "const:4:8"]]
- 008bb180 ["CALLIND", null, ["register:0:8"]]
+ 008bb1d8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008bb1d8 ["INT_ADD", "register:40f0:8", ["const:8bb1d8:8", "const:4:8"]]
+ 008bb1d8 ["CALLIND", null, ["register:0:8"]]
- 008bb1b0 ["COPY", "register:0:8", ["register:4040:8"]]
- 008bb1b0 ["INT_ADD", "register:40f0:8", ["const:8bb1b0:8", "const:4:8"]]
- 008bb1b0 ["CALLIND", null, ["register:0:8"]]
+ 008bb208 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008bb208 ["INT_ADD", "register:40f0:8", ["const:8bb208:8", "const:4:8"]]
+ 008bb208 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-73eefbde267b66bc7e9736899fc148d9"></a>

### [`008bb53c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bb/008bb53c.md) → [`008bb594`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bb594.md) FUN_008bb594

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 9件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00869b3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869b3c.md) [`008b9860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9860.md) [`008bc524`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bc/008bc524.md)
- 新版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 9件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00869b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869b94.md) [`008b98b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b98b8.md) [`008bc57c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc57c.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008bb5f8 ["INT_ADD", "register:40f0:8", ["const:8bb5f8:8", "const:4:8"]]
- 008bb5f8 ["CALL", null, ["callee:00c57f60:8"]]
+ 008bb650 ["INT_ADD", "register:40f0:8", ["const:8bb650:8", "const:4:8"]]
+ 008bb650 ["CALL", null, ["callee:00c57f60:8"]]
- 008bb620 ["INT_ADD", "register:40f0:8", ["const:8bb620:8", "const:4:8"]]
- 008bb620 ["CALL", null, ["callee:00c580d0:8"]]
+ 008bb678 ["INT_ADD", "register:40f0:8", ["const:8bb678:8", "const:4:8"]]
+ 008bb678 ["CALL", null, ["callee:00c580d0:8"]]
- 008bb634 ["INT_ADD", "register:40f0:8", ["const:8bb634:8", "const:4:8"]]
- 008bb634 ["CALL", null, ["callee:00c57f80:8"]]
+ 008bb68c ["INT_ADD", "register:40f0:8", ["const:8bb68c:8", "const:4:8"]]
+ 008bb68c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-31ba478caf918c70f84cb7fdaa92a03e"></a>

### [`008bb9f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bb/008bb9f4.md) → [`008bba4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bba4c.md) FUN_008bba4c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00859b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b58.md) · 呼出先 1件 [`008b9d2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9d2c.md)
- 新版 呼出元 1件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 1件 [`008b9d84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b9d84.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008bba48 ["INT_ADD", "register:40f0:8", ["const:8bba48:8", "const:4:8"]]
- 008bba48 ["CALL", null, ["callee:008b9d84:8"]]
+ 008bbaa0 ["INT_ADD", "register:40f0:8", ["const:8bbaa0:8", "const:4:8"]]
+ 008bbaa0 ["CALL", null, ["callee:008b9d84:8"]]
~~~


<a id="compare-4cdca86ea1995425c62e95d544f7efbb"></a>

### [`008bba60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bb/008bba60.md) → [`008bbab8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bbab8.md) FUN_008bbab8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`008acd54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ac/008acd54.md) · 呼出先 2件 [`00869b3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869b3c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`008acdac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008acdac.md) · 呼出先 2件 [`00869b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869b94.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008bbaa4 ["INT_ADD", "register:40f0:8", ["const:8bbaa4:8", "const:4:8"]]
- 008bbaa4 ["CALL", null, ["callee:00869b94:8"]]
+ 008bbafc ["INT_ADD", "register:40f0:8", ["const:8bbafc:8", "const:4:8"]]
+ 008bbafc ["CALL", null, ["callee:00869b94:8"]]
- 008bbaac ["INT_ADD", "register:40f0:8", ["const:8bbaac:8", "const:4:8"]]
- 008bbaac ["CALL", null, ["callee:00c57f80:8"]]
+ 008bbb04 ["INT_ADD", "register:40f0:8", ["const:8bbb04:8", "const:4:8"]]
+ 008bbb04 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-8210a0f80abc0c177f50ca162b9fd0ee"></a>

### [`008bbac4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bb/008bbac4.md) → [`008bbb1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bbb1c.md) FUN_008bbb1c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`008b80b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b8/008b80b0.md) [`00a8248c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a82/00a8248c.md) · 呼出先 6件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`008bbc58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bb/008bbc58.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 2件 [`008b8108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b8/008b8108.md) [`00a824fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a82/00a824fc.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`008bbcb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bbcb0.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008bbb50 ["INT_ADD", "register:40f0:8", ["const:8bbb50:8", "const:4:8"]]
- 008bbb50 ["CALL", null, ["callee:00c57f60:8"]]
+ 008bbba8 ["INT_ADD", "register:40f0:8", ["const:8bbba8:8", "const:4:8"]]
+ 008bbba8 ["CALL", null, ["callee:00c57f60:8"]]
- 008bbbf4 ["INT_ADD", "register:40f0:8", ["const:8bbbf4:8", "const:4:8"]]
- 008bbbf4 ["CALL", null, ["callee:00c53da0:8"]]
+ 008bbc4c ["INT_ADD", "register:40f0:8", ["const:8bbc4c:8", "const:4:8"]]
+ 008bbc4c ["CALL", null, ["callee:00c53da0:8"]]
- 008bbc08 ["COPY", "register:0:8", ["register:4040:8"]]
- 008bbc08 ["INT_ADD", "register:40f0:8", ["const:8bbc08:8", "const:4:8"]]
- 008bbc08 ["CALLIND", null, ["register:0:8"]]
+ 008bbc60 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008bbc60 ["INT_ADD", "register:40f0:8", ["const:8bbc60:8", "const:4:8"]]
+ 008bbc60 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8ae88b22a984ddb29404a5411db0fcec"></a>

### [`008bbc6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bb/008bbc6c.md) → [`008bbcc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bbcc4.md) FUN_008bbcc4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008b8354`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b8/008b8354.md) · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`008b83ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b8/008b83ac.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008bbcd8 ["COPY", "register:0:8", ["register:4040:8"]]
- 008bbcd8 ["INT_ADD", "register:40f0:8", ["const:8bbcd8:8", "const:4:8"]]
- 008bbcd8 ["CALLIND", null, ["register:0:8"]]
+ 008bbd30 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008bbd30 ["INT_ADD", "register:40f0:8", ["const:8bbd30:8", "const:4:8"]]
+ 008bbd30 ["CALLIND", null, ["register:0:8"]]
- 008bbce8 ["COPY", "register:0:8", ["register:4040:8"]]
- 008bbce8 ["INT_ADD", "register:40f0:8", ["const:8bbce8:8", "const:4:8"]]
- 008bbce8 ["CALLIND", null, ["register:0:8"]]
+ 008bbd40 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008bbd40 ["INT_ADD", "register:40f0:8", ["const:8bbd40:8", "const:4:8"]]
+ 008bbd40 ["CALLIND", null, ["register:0:8"]]
- 008bbd08 ["COPY", "register:0:8", ["register:4040:8"]]
- 008bbd08 ["INT_ADD", "register:40f0:8", ["const:8bbd08:8", "const:4:8"]]
- 008bbd08 ["CALLIND", null, ["register:0:8"]]
+ 008bbd60 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008bbd60 ["INT_ADD", "register:40f0:8", ["const:8bbd60:8", "const:4:8"]]
+ 008bbd60 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a470d93eca87a297e98547d6b06a2c8a"></a>

### [`008bbdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bb/008bbdd4.md) → [`008bbe2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bbe2c.md) FUN_008bbe2c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`008b8354`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b8/008b8354.md) [`00a81938`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a81/00a81938.md) · 呼出先 8件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`008bc004`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bc/008bc004.md) [`008bc22c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bc/008bc22c.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 2件 [`008b83ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b8/008b83ac.md) [`00a819a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a81/00a819a8.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`008bc05c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc05c.md) [`008bc284`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc284.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008bbe78 ["INT_ADD", "register:40f0:8", ["const:8bbe78:8", "const:4:8"]]
- 008bbe78 ["CALL", null, ["callee:00c57f60:8"]]
+ 008bbed0 ["INT_ADD", "register:40f0:8", ["const:8bbed0:8", "const:4:8"]]
+ 008bbed0 ["CALL", null, ["callee:00c57f60:8"]]
- 008bbed4 ["INT_ADD", "register:40f0:8", ["const:8bbed4:8", "const:4:8"]]
- 008bbed4 ["CALL", null, ["callee:008bc05c:8"]]
+ 008bbf2c ["INT_ADD", "register:40f0:8", ["const:8bbf2c:8", "const:4:8"]]
+ 008bbf2c ["CALL", null, ["callee:008bc05c:8"]]
- 008bbf38 ["INT_ADD", "register:40f0:8", ["const:8bbf38:8", "const:4:8"]]
- 008bbf38 ["CALL", null, ["callee:00c53da0:8"]]
+ 008bbf90 ["INT_ADD", "register:40f0:8", ["const:8bbf90:8", "const:4:8"]]
+ 008bbf90 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-91c07539f1536101afb7dd080c94fe21"></a>

### [`008bc004`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bc/008bc004.md) → [`008bc05c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc05c.md) FUN_008bc05c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008bbdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bb/008bbdd4.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`008bbe2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bbe2c.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008bc090 ["INT_ADD", "register:40f0:8", ["const:8bc090:8", "const:4:8"]]
- 008bc090 ["CALL", null, ["callee:00c57f80:8"]]
+ 008bc0e8 ["INT_ADD", "register:40f0:8", ["const:8bc0e8:8", "const:4:8"]]
+ 008bc0e8 ["CALL", null, ["callee:00c57f80:8"]]
- 008bc0d8 ["INT_ADD", "register:40f0:8", ["const:8bc0d8:8", "const:4:8"]]
- 008bc0d8 ["CALL", null, ["callee:00c53da0:8"]]
+ 008bc130 ["INT_ADD", "register:40f0:8", ["const:8bc130:8", "const:4:8"]]
+ 008bc130 ["CALL", null, ["callee:00c53da0:8"]]
- 008bc0ec ["COPY", "register:0:8", ["register:4040:8"]]
- 008bc0ec ["INT_ADD", "register:40f0:8", ["const:8bc0ec:8", "const:4:8"]]
- 008bc0ec ["CALLIND", null, ["register:0:8"]]
+ 008bc144 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008bc144 ["INT_ADD", "register:40f0:8", ["const:8bc144:8", "const:4:8"]]
+ 008bc144 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f955d63132ef84424ac338852b08dc43"></a>

### [`008bc14c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bc/008bc14c.md) → [`008bc1a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc1a4.md) FUN_008bc1a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008bc1c0 ["INT_ADD", "register:40f0:8", ["const:8bc1c0:8", "const:4:8"]]
- 008bc1c0 ["CALL", null, ["callee:00c53da0:8"]]
+ 008bc218 ["INT_ADD", "register:40f0:8", ["const:8bc218:8", "const:4:8"]]
+ 008bc218 ["CALL", null, ["callee:00c53da0:8"]]
- 008bc1d4 ["COPY", "register:0:8", ["register:4040:8"]]
- 008bc1d4 ["INT_ADD", "register:40f0:8", ["const:8bc1d4:8", "const:4:8"]]
- 008bc1d4 ["CALLIND", null, ["register:0:8"]]
+ 008bc22c ["COPY", "register:0:8", ["register:4040:8"]]
+ 008bc22c ["INT_ADD", "register:40f0:8", ["const:8bc22c:8", "const:4:8"]]
+ 008bc22c ["CALLIND", null, ["register:0:8"]]
- 008bc1dc ["INT_ADD", "register:40f0:8", ["const:8bc1dc:8", "const:4:8"]]
- 008bc1dc ["CALL", null, ["callee:00c57f50:8"]]
+ 008bc234 ["INT_ADD", "register:40f0:8", ["const:8bc234:8", "const:4:8"]]
+ 008bc234 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-f718061ca39a4d637aded043a1a47f65"></a>

### [`008bc240`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bc/008bc240.md) → [`008bc298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc298.md) FUN_008bc298

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008b95cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b95cc.md) · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`008b9624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b9624.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008bc2ac ["COPY", "register:0:8", ["register:4040:8"]]
- 008bc2ac ["INT_ADD", "register:40f0:8", ["const:8bc2ac:8", "const:4:8"]]
- 008bc2ac ["CALLIND", null, ["register:0:8"]]
+ 008bc304 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008bc304 ["INT_ADD", "register:40f0:8", ["const:8bc304:8", "const:4:8"]]
+ 008bc304 ["CALLIND", null, ["register:0:8"]]
- 008bc2bc ["COPY", "register:0:8", ["register:4040:8"]]
- 008bc2bc ["INT_ADD", "register:40f0:8", ["const:8bc2bc:8", "const:4:8"]]
- 008bc2bc ["CALLIND", null, ["register:0:8"]]
+ 008bc314 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008bc314 ["INT_ADD", "register:40f0:8", ["const:8bc314:8", "const:4:8"]]
+ 008bc314 ["CALLIND", null, ["register:0:8"]]
- 008bc2dc ["COPY", "register:0:8", ["register:4040:8"]]
- 008bc2dc ["INT_ADD", "register:40f0:8", ["const:8bc2dc:8", "const:4:8"]]
- 008bc2dc ["CALLIND", null, ["register:0:8"]]
+ 008bc334 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008bc334 ["INT_ADD", "register:40f0:8", ["const:8bc334:8", "const:4:8"]]
+ 008bc334 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-158028442f7aded0aaf5a13d4893ceb0"></a>

### [`008bc3a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bc/008bc3a8.md) → [`008bc400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc400.md) FUN_008bc400

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008b96a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b96a4.md) · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`008b96fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b96fc.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008bc414 ["COPY", "register:0:8", ["register:4040:8"]]
- 008bc414 ["INT_ADD", "register:40f0:8", ["const:8bc414:8", "const:4:8"]]
- 008bc414 ["CALLIND", null, ["register:0:8"]]
+ 008bc46c ["COPY", "register:0:8", ["register:4040:8"]]
+ 008bc46c ["INT_ADD", "register:40f0:8", ["const:8bc46c:8", "const:4:8"]]
+ 008bc46c ["CALLIND", null, ["register:0:8"]]
- 008bc424 ["COPY", "register:0:8", ["register:4040:8"]]
- 008bc424 ["INT_ADD", "register:40f0:8", ["const:8bc424:8", "const:4:8"]]
- 008bc424 ["CALLIND", null, ["register:0:8"]]
+ 008bc47c ["COPY", "register:0:8", ["register:4040:8"]]
+ 008bc47c ["INT_ADD", "register:40f0:8", ["const:8bc47c:8", "const:4:8"]]
+ 008bc47c ["CALLIND", null, ["register:0:8"]]
- 008bc444 ["COPY", "register:0:8", ["register:4040:8"]]
- 008bc444 ["INT_ADD", "register:40f0:8", ["const:8bc444:8", "const:4:8"]]
- 008bc444 ["CALLIND", null, ["register:0:8"]]
+ 008bc49c ["COPY", "register:0:8", ["register:4040:8"]]
+ 008bc49c ["INT_ADD", "register:40f0:8", ["const:8bc49c:8", "const:4:8"]]
+ 008bc49c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a36039b487dcdc7a7cce448ff78f22b2"></a>

### [`008bf5ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bf/008bf5ac.md) → [`008bf604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bf/008bf604.md) FUN_008bf604

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`008cbc58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cb/008cbc58.md) [`008cc3fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cc/008cc3fc.md) · 呼出先 10件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b6f18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f18.md) [`008b79c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b79c8.md)
- 新版 呼出元 2件 [`008cbcac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cb/008cbcac.md) [`008cc450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cc/008cc450.md) · 呼出先 10件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008bf63c ["INT_ADD", "register:40f0:8", ["const:8bf63c:8", "const:4:8"]]
- 008bf63c ["CALL", null, ["callee:00c57f60:8"]]
+ 008bf694 ["INT_ADD", "register:40f0:8", ["const:8bf694:8", "const:4:8"]]
+ 008bf694 ["CALL", null, ["callee:00c57f60:8"]]
- 008bf658 ["INT_ADD", "register:40f0:8", ["const:8bf658:8", "const:4:8"]]
- 008bf658 ["CALL", null, ["callee:00c580d0:8"]]
+ 008bf6b0 ["INT_ADD", "register:40f0:8", ["const:8bf6b0:8", "const:4:8"]]
+ 008bf6b0 ["CALL", null, ["callee:00c580d0:8"]]
- 008bf66c ["INT_ADD", "register:40f0:8", ["const:8bf66c:8", "const:4:8"]]
- 008bf66c ["CALL", null, ["callee:00851550:8"]]
+ 008bf6c4 ["INT_ADD", "register:40f0:8", ["const:8bf6c4:8", "const:4:8"]]
+ 008bf6c4 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-7d38be03c6e83091bf9d850c346dc31c"></a>

### [`008bf854`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bf/008bf854.md) → [`008bf8ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bf/008bf8ac.md) FUN_008bf8ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 3件 [`008bf5ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bf/008bf5ac.md) [`008c5da4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c5/008c5da4.md) [`008d0578`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d0/008d0578.md) · 呼出先 4件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b6f18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f18.md) [`008b79c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b79c8.md) [`00ac9688`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ac9/00ac9688.md)
- 新版 呼出元 3件 [`008bf604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bf/008bf604.md) [`008c5df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c5df8.md) [`008d05cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d05cc.md) · 呼出先 4件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md) [`00ac96f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ac9/00ac96f8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008bf860 ["INT_ADD", "register:40f0:8", ["const:8bf860:8", "const:4:8"]]
- 008bf860 ["CALL", null, ["callee:00851550:8"]]
+ 008bf8b8 ["INT_ADD", "register:40f0:8", ["const:8bf8b8:8", "const:4:8"]]
+ 008bf8b8 ["CALL", null, ["callee:00851550:8"]]
- 008bf86c ["INT_ADD", "register:40f0:8", ["const:8bf86c:8", "const:4:8"]]
- 008bf86c ["CALL", null, ["callee:00ac96f8:8"]]
+ 008bf8c4 ["INT_ADD", "register:40f0:8", ["const:8bf8c4:8", "const:4:8"]]
+ 008bf8c4 ["CALL", null, ["callee:00ac96f8:8"]]
- 008bf870 ["INT_ADD", "register:40f0:8", ["const:8bf870:8", "const:4:8"]]
- 008bf870 ["CALL", null, ["callee:00851550:8"]]
+ 008bf8c8 ["INT_ADD", "register:40f0:8", ["const:8bf8c8:8", "const:4:8"]]
+ 008bf8c8 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-e0b82e8b32728e4168a4010fe30d0f3a"></a>

### [`008c24e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c2/008c24e0.md) → [`008c2538`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c2/008c2538.md) FUN_008c2538

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008c5da4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c5/008c5da4.md) · 呼出先 11件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00ad03a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ad0/00ad03a0.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 1件 [`008c5df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c5df8.md) · 呼出先 11件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00ad0410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad0/00ad0410.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008c2534 ["INT_ADD", "register:40f0:8", ["const:8c2534:8", "const:4:8"]]
- 008c2534 ["CALL", null, ["callee:00851550:8"]]
+ 008c258c ["INT_ADD", "register:40f0:8", ["const:8c258c:8", "const:4:8"]]
+ 008c258c ["CALL", null, ["callee:00851550:8"]]
- 008c253c ["INT_ADD", "register:40f0:8", ["const:8c253c:8", "const:4:8"]]
- 008c253c ["CALL", null, ["callee:00ad0410:8"]]
+ 008c2594 ["INT_ADD", "register:40f0:8", ["const:8c2594:8", "const:4:8"]]
+ 008c2594 ["CALL", null, ["callee:00ad0410:8"]]
- 008c2560 ["INT_ADD", "register:40f0:8", ["const:8c2560:8", "const:4:8"]]
- 008c2560 ["CALL", null, ["callee:00851550:8"]]
+ 008c25b8 ["INT_ADD", "register:40f0:8", ["const:8c25b8:8", "const:4:8"]]
+ 008c25b8 ["CALL", null, ["callee:00851550:8"]]
~~~


