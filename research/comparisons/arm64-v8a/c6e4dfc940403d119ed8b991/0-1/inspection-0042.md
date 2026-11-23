# v16.0.1 → v16.0.2 · 要調査の変更候補 (42)

[一覧の目次](README.md)

<a id="compare-42b497aa4d070260fa288ff826126cde"></a>

### [`00bf9eb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9eb4.md) → [`00bf9f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9f50.md) _ZNSt6__ndk17promiseIvE9set_valueEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0045a6d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045a/0045a6d4.md) [`00c58550`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58550.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0045a714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md) [`00c58620`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58620.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf9ed4 ["INT_ADD", "register:40f0:8", ["const:bf9ed4:8", "const:4:8"]]
- 00bf9ed4 ["CALL", null, ["callee:0045a714:8"]]
+ 00bf9f70 ["INT_ADD", "register:40f0:8", ["const:bf9f70:8", "const:4:8"]]
+ 00bf9f70 ["CALL", null, ["callee:0045a714:8"]]
~~~


<a id="compare-68c9211abeca1cdea2501943d00121ae"></a>

### [`00bf9ed8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9ed8.md) → [`00bf9f74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9f74.md) _ZNSt6__ndk17promiseIvE13set_exceptionESt13exception_ptr

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`0045a6d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045a/0045a6d4.md) [`00c582f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582f0.md) [`00c58360`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58360.md) [`00c584b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c584b0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0045a714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md) [`00c583c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583c0.md) [`00c58430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58430.md) [`00c58580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58580.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf9ef4 ["INT_ADD", "register:40f0:8", ["const:bf9ef4:8", "const:4:8"]]
- 00bf9ef4 ["CALL", null, ["callee:00c58580:8"]]
+ 00bf9f90 ["INT_ADD", "register:40f0:8", ["const:bf9f90:8", "const:4:8"]]
+ 00bf9f90 ["CALL", null, ["callee:00c58580:8"]]
- 00bf9f00 ["INT_ADD", "register:40f0:8", ["const:bf9f00:8", "const:4:8"]]
- 00bf9f00 ["CALL", null, ["callee:00c58430:8"]]
+ 00bf9f9c ["INT_ADD", "register:40f0:8", ["const:bf9f9c:8", "const:4:8"]]
+ 00bf9f9c ["CALL", null, ["callee:00c58430:8"]]
- 00bf9f08 ["INT_ADD", "register:40f0:8", ["const:bf9f08:8", "const:4:8"]]
- 00bf9f08 ["CALL", null, ["callee:00c583c0:8"]]
+ 00bf9fa4 ["INT_ADD", "register:40f0:8", ["const:bf9fa4:8", "const:4:8"]]
+ 00bf9fa4 ["CALL", null, ["callee:00c583c0:8"]]
~~~


<a id="compare-6c59902444f9ba0cf82d51bab8f9b5b7"></a>

### [`00bf9f38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9f38.md) → [`00bf9fd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9fd4.md) _ZNSt6__ndk17promiseIvE24set_value_at_thread_exitEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`0045a6d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045a/0045a6d4.md) [`00c5e220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e220.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0045a714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md) [`00c5e2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e2f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf9f58 ["INT_ADD", "register:40f0:8", ["const:bf9f58:8", "const:4:8"]]
- 00bf9f58 ["CALL", null, ["callee:0045a714:8"]]
+ 00bf9ff4 ["INT_ADD", "register:40f0:8", ["const:bf9ff4:8", "const:4:8"]]
+ 00bf9ff4 ["CALL", null, ["callee:0045a714:8"]]
~~~


<a id="compare-82676c1d30432982ea7b0aad206be8dc"></a>

### [`00bf9f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9f5c.md) → [`00bf9ff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf9/00bf9ff8.md) _ZNSt6__ndk17promiseIvE28set_exception_at_thread_exitESt13exception_ptr

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`0045a6d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045a/0045a6d4.md) [`00c582f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582f0.md) [`00c584b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c584b0.md) [`00c5e240`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e240.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0045a714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a714.md) [`00c583c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583c0.md) [`00c58580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58580.md) [`00c5e310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e310.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf9f78 ["INT_ADD", "register:40f0:8", ["const:bf9f78:8", "const:4:8"]]
- 00bf9f78 ["CALL", null, ["callee:00c58580:8"]]
+ 00bfa014 ["INT_ADD", "register:40f0:8", ["const:bfa014:8", "const:4:8"]]
+ 00bfa014 ["CALL", null, ["callee:00c58580:8"]]
- 00bf9f84 ["INT_ADD", "register:40f0:8", ["const:bf9f84:8", "const:4:8"]]
- 00bf9f84 ["CALL", null, ["callee:00c5e310:8"]]
+ 00bfa020 ["INT_ADD", "register:40f0:8", ["const:bfa020:8", "const:4:8"]]
+ 00bfa020 ["CALL", null, ["callee:00c5e310:8"]]
- 00bf9f8c ["INT_ADD", "register:40f0:8", ["const:bf9f8c:8", "const:4:8"]]
- 00bf9f8c ["CALL", null, ["callee:00c583c0:8"]]
+ 00bfa028 ["INT_ADD", "register:40f0:8", ["const:bfa028:8", "const:4:8"]]
+ 00bfa028 ["CALL", null, ["callee:00c583c0:8"]]
~~~


<a id="compare-476512cc8ae28dbc012005cd71c6bd81"></a>

### [`00bf9fbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf9/00bf9fbc.md) → [`00bfa058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa058.md) _ZNSt6__ndk113shared_futureIvED1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bf9fdc ["INT_ADD", "register:40f0:8", ["const:bf9fdc:8", "const:4:8"]]
- 00bf9fdc ["CALL", null, ["callee:00c53da0:8"]]
+ 00bfa078 ["INT_ADD", "register:40f0:8", ["const:bfa078:8", "const:4:8"]]
+ 00bfa078 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-279147a0ae6f7584e859d1a380038e44"></a>

### [`00bfa010`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa010.md) → [`00bfa0ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa0ac.md) _ZNSt6__ndk113shared_futureIvEaSERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa03c ["INT_ADD", "register:40f0:8", ["const:bfa03c:8", "const:4:8"]]
- 00bfa03c ["CALL", null, ["callee:00c53d70:8"]]
+ 00bfa0d8 ["INT_ADD", "register:40f0:8", ["const:bfa0d8:8", "const:4:8"]]
+ 00bfa0d8 ["CALL", null, ["callee:00c53d70:8"]]
- 00bfa050 ["INT_ADD", "register:40f0:8", ["const:bfa050:8", "const:4:8"]]
- 00bfa050 ["CALL", null, ["callee:00c53da0:8"]]
+ 00bfa0ec ["INT_ADD", "register:40f0:8", ["const:bfa0ec:8", "const:4:8"]]
+ 00bfa0ec ["CALL", null, ["callee:00c53da0:8"]]
- 00bfa064 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfa064 ["INT_ADD", "register:40f0:8", ["const:bfa064:8", "const:4:8"]]
- 00bfa064 ["CALLIND", null, ["register:0:8"]]
+ 00bfa100 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfa100 ["INT_ADD", "register:40f0:8", ["const:bfa100:8", "const:4:8"]]
+ 00bfa100 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e6cfcd897e9e400468300c959affc979"></a>

### [`00bfa0e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa0e4.md) → [`00bfa180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa180.md) FUN_00bfa180

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5def0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5def0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5dfc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfc0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa0f8 ["INT_ADD", "register:40f0:8", ["const:bfa0f8:8", "const:4:8"]]
- 00bfa0f8 ["CALL", null, ["callee:00c5dfc0:8"]]
+ 00bfa194 ["INT_ADD", "register:40f0:8", ["const:bfa194:8", "const:4:8"]]
+ 00bfa194 ["CALL", null, ["callee:00c5dfc0:8"]]
~~~


<a id="compare-971d012776bb25562fedb806da48076d"></a>

### [`00bfa110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa110.md) → [`00bfa1ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa1ac.md) _ZNSt6__ndk15mutexD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 6件 [`0043ae78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae78.md) [`004524e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00452/004524e8.md) [`00452c54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00452/00452c54.md) [`0048baf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048b/0048baf0.md) [`0058f6b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0058f/0058f6b0.md) · 呼出先 1件 [`00c5b690`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b690.md)
- 新版 呼出元 6件 [`0043aeb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb8.md) [`00452528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00452/00452528.md) [`00452c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00452/00452c94.md) [`0048bb30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048b/0048bb30.md) [`0058f6f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f6f0.md) · 呼出先 1件 [`00c5b760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b760.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa11c ["INT_ADD", "register:40f0:8", ["const:bfa11c:8", "const:4:8"]]
- 00bfa11c ["CALL", null, ["callee:00c5b760:8"]]
+ 00bfa1b8 ["INT_ADD", "register:40f0:8", ["const:bfa1b8:8", "const:4:8"]]
+ 00bfa1b8 ["CALL", null, ["callee:00c5b760:8"]]
~~~


<a id="compare-99e59b98b506917e217f4d6246f0c248"></a>

### [`00bfa15c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa15c.md) → [`00bfa1f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa1f8.md) _ZNSt6__ndk15mutex8try_lockEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e270.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5e340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e340.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa168 ["INT_ADD", "register:40f0:8", ["const:bfa168:8", "const:4:8"]]
- 00bfa168 ["CALL", null, ["callee:00c5e340:8"]]
+ 00bfa204 ["INT_ADD", "register:40f0:8", ["const:bfa204:8", "const:4:8"]]
+ 00bfa204 ["CALL", null, ["callee:00c5e340:8"]]
~~~


<a id="compare-5765a5ec5e95538113fc99c523d723f5"></a>

### [`00bfa184`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa184.md) → [`00bfa220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa220.md) _ZNSt6__ndk15mutex6unlockEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c580f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580f0.md) · 呼出先 1件 [`00c5b6b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6b0.md)
- 新版 呼出元 1件 [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md) · 呼出先 1件 [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa190 ["INT_ADD", "register:40f0:8", ["const:bfa190:8", "const:4:8"]]
- 00bfa190 ["CALL", null, ["callee:00c5b780:8"]]
+ 00bfa22c ["INT_ADD", "register:40f0:8", ["const:bfa22c:8", "const:4:8"]]
+ 00bfa22c ["CALL", null, ["callee:00c5b780:8"]]
~~~


<a id="compare-df6b6f28b9a25465a2e2df89e2e1ed0e"></a>

### [`00bfa248`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa248.md) → [`00bfa2e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa2e4.md) _ZNSt6__ndk115recursive_mutexD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5a0d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0d0.md) · 呼出先 1件 [`00c5b690`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b690.md)
- 新版 呼出元 1件 [`00c5a1a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a1a0.md) · 呼出先 1件 [`00c5b760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b760.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa254 ["INT_ADD", "register:40f0:8", ["const:bfa254:8", "const:4:8"]]
- 00bfa254 ["CALL", null, ["callee:00c5b760:8"]]
+ 00bfa2f0 ["INT_ADD", "register:40f0:8", ["const:bfa2f0:8", "const:4:8"]]
+ 00bfa2f0 ["CALL", null, ["callee:00c5b760:8"]]
~~~


<a id="compare-fb1fa66fca427873d53c7b6b3e4f2e13"></a>

### [`00bfa294`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa294.md) → [`00bfa330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa330.md) _ZNSt6__ndk115recursive_mutex6unlockEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5a0f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a0f0.md) · 呼出先 1件 [`00c5b6b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6b0.md)
- 新版 呼出元 1件 [`00c5a1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a1c0.md) · 呼出先 1件 [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa2a0 ["INT_ADD", "register:40f0:8", ["const:bfa2a0:8", "const:4:8"]]
- 00bfa2a0 ["CALL", null, ["callee:00c5b780:8"]]
+ 00bfa33c ["INT_ADD", "register:40f0:8", ["const:bfa33c:8", "const:4:8"]]
+ 00bfa33c ["CALL", null, ["callee:00c5b780:8"]]
~~~


<a id="compare-655cc1e771a0e68218b0a2fdc6c6dabb"></a>

### [`00bfa2b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa2b4.md) → [`00bfa350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa350.md) _ZNSt6__ndk115recursive_mutex8try_lockEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e270.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5e340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e340.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa2c0 ["INT_ADD", "register:40f0:8", ["const:bfa2c0:8", "const:4:8"]]
- 00bfa2c0 ["CALL", null, ["callee:00c5e340:8"]]
+ 00bfa35c ["INT_ADD", "register:40f0:8", ["const:bfa35c:8", "const:4:8"]]
+ 00bfa35c ["CALL", null, ["callee:00c5e340:8"]]
~~~


<a id="compare-9e0af1983df2d00984fad1b4f06122e6"></a>

### [`00bfa3dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa3dc.md) → [`00bfa478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa478.md) _ZNSt6__ndk111timed_mutex8try_lockEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5b6b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6b0.md) [`00c5e270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e270.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md) [`00c5e340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e340.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa3f0 ["INT_ADD", "register:40f0:8", ["const:bfa3f0:8", "const:4:8"]]
- 00bfa3f0 ["CALL", null, ["callee:00c5e340:8"]]
+ 00bfa48c ["INT_ADD", "register:40f0:8", ["const:bfa48c:8", "const:4:8"]]
+ 00bfa48c ["CALL", null, ["callee:00c5e340:8"]]
- 00bfa41c ["INT_ADD", "register:40f0:8", ["const:bfa41c:8", "const:4:8"]]
- 00bfa41c ["CALL", null, ["callee:00c5b780:8"]]
+ 00bfa4b8 ["INT_ADD", "register:40f0:8", ["const:bfa4b8:8", "const:4:8"]]
+ 00bfa4b8 ["CALL", null, ["callee:00c5b780:8"]]
~~~


<a id="compare-c4e87b7c0d471134ad4428fe8580177a"></a>

### [`00bfa5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa5e0.md) → [`00bfa67c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa67c.md) _ZNSt6__ndk121recursive_timed_mutex8try_lockEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58620`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58620.md) [`00c5b6b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b6b0.md) [`00c5e270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e270.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c586f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586f0.md) [`00c5b780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b780.md) [`00c5e340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e340.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa5f8 ["INT_ADD", "register:40f0:8", ["const:bfa5f8:8", "const:4:8"]]
- 00bfa5f8 ["CALL", null, ["callee:00c586f0:8"]]
+ 00bfa694 ["INT_ADD", "register:40f0:8", ["const:bfa694:8", "const:4:8"]]
+ 00bfa694 ["CALL", null, ["callee:00c586f0:8"]]
- 00bfa604 ["INT_ADD", "register:40f0:8", ["const:bfa604:8", "const:4:8"]]
- 00bfa604 ["CALL", null, ["callee:00c5e340:8"]]
+ 00bfa6a0 ["INT_ADD", "register:40f0:8", ["const:bfa6a0:8", "const:4:8"]]
+ 00bfa6a0 ["CALL", null, ["callee:00c5e340:8"]]
- 00bfa644 ["INT_ADD", "register:40f0:8", ["const:bfa644:8", "const:4:8"]]
- 00bfa644 ["CALL", null, ["callee:00c5b780:8"]]
+ 00bfa6e0 ["INT_ADD", "register:40f0:8", ["const:bfa6e0:8", "const:4:8"]]
+ 00bfa6e0 ["CALL", null, ["callee:00c5b780:8"]]
~~~


<a id="compare-d62bfdb7680f34b204e7b1b079096977"></a>

### [`00bfa6e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa6e4.md) → [`00bfa780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa780.md) _ZNSt6__ndk16threadD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58180`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58180.md) · 呼出先 1件 [`00c58020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58020.md)
- 新版 呼出元 1件 [`00c58250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58250.md) · 呼出先 1件 [`00c580f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa700 ["INT_ADD", "register:40f0:8", ["const:bfa700:8", "const:4:8"]]
- 00bfa700 ["CALL", null, ["callee:00c580f0:8"]]
+ 00bfa79c ["INT_ADD", "register:40f0:8", ["const:bfa79c:8", "const:4:8"]]
+ 00bfa79c ["CALL", null, ["callee:00c580f0:8"]]
~~~


<a id="compare-1a1562e522172e3fb705f4a7be975544"></a>

### [`00bfa798`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa798.md) → [`00bfa834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa834.md) _ZNSt6__ndk16thread20hardware_concurrencyEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e290.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5e360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e360.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa7a8 ["INT_ADD", "register:40f0:8", ["const:bfa7a8:8", "const:4:8"]]
- 00bfa7a8 ["CALL", null, ["callee:00c5e360:8"]]
+ 00bfa844 ["INT_ADD", "register:40f0:8", ["const:bfa844:8", "const:4:8"]]
+ 00bfa844 ["CALL", null, ["callee:00c5e360:8"]]
~~~


<a id="compare-9899330386c01a683abecf572704b8bc"></a>

### [`00bfa7c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa7c4.md) → [`00bfa860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa860.md) _ZNSt6__ndk111this_thread9sleep_forERKNS_6chrono8durationIxNS_5ratioILl1ELl1000000000EEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58490.md) · 呼出先 2件 [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c5e2a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e2a0.md)
- 新版 呼出元 1件 [`00c58560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58560.md) · 呼出先 2件 [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5e370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e370.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa818 ["INT_ADD", "register:40f0:8", ["const:bfa818:8", "const:4:8"]]
- 00bfa818 ["CALL", null, ["callee:00c5e370:8"]]
+ 00bfa8b4 ["INT_ADD", "register:40f0:8", ["const:bfa8b4:8", "const:4:8"]]
+ 00bfa8b4 ["CALL", null, ["callee:00c5e370:8"]]
- 00bfa824 ["INT_ADD", "register:40f0:8", ["const:bfa824:8", "const:4:8"]]
- 00bfa824 ["CALL", null, ["callee:00c58190:8"]]
+ 00bfa8c0 ["INT_ADD", "register:40f0:8", ["const:bfa8c0:8", "const:4:8"]]
+ 00bfa8c0 ["CALL", null, ["callee:00c58190:8"]]
~~~


<a id="compare-e708b96c8cd2d57ad54927d4af4f1b9f"></a>

### [`00bfa8fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa8fc.md) → [`00bfa998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa998.md) FUN_00bfa998

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bfabf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfabf0.md) · 呼出先 5件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c580f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580f0.md) [`00c58380`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58380.md) [`00c5e250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e250.md)
- 新版 呼出元 1件 [`00bfac8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfac8c.md) · 呼出先 5件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md) [`00c58450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58450.md) [`00c5e320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e320.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfa924 ["INT_ADD", "register:40f0:8", ["const:bfa924:8", "const:4:8"]]
- 00bfa924 ["CALL", null, ["callee:00c58450:8"]]
+ 00bfa9c0 ["INT_ADD", "register:40f0:8", ["const:bfa9c0:8", "const:4:8"]]
+ 00bfa9c0 ["CALL", null, ["callee:00c58450:8"]]
- 00bfa92c ["INT_ADD", "register:40f0:8", ["const:bfa92c:8", "const:4:8"]]
- 00bfa92c ["CALL", null, ["callee:00c581c0:8"]]
+ 00bfa9c8 ["INT_ADD", "register:40f0:8", ["const:bfa9c8:8", "const:4:8"]]
+ 00bfa9c8 ["CALL", null, ["callee:00c581c0:8"]]
- 00bfa954 ["INT_ADD", "register:40f0:8", ["const:bfa954:8", "const:4:8"]]
- 00bfa954 ["CALL", null, ["callee:00c5e320:8"]]
+ 00bfa9f0 ["INT_ADD", "register:40f0:8", ["const:bfa9f0:8", "const:4:8"]]
+ 00bfa9f0 ["CALL", null, ["callee:00c5e320:8"]]
~~~


<a id="compare-831eb5e6e80ed6bfe908f53c1271c3bf"></a>

### [`00bfa9c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa9c8.md) → [`00bfaa64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfaa64.md) FUN_00bfaa64

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bfac34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfac34.md) · 呼出先 4件 [`00bfac4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfac4c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00bfacd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfacd0.md) · 呼出先 4件 [`00bface8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bface8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfaa44 ["INT_ADD", "register:40f0:8", ["const:bfaa44:8", "const:4:8"]]
- 00bfaa44 ["CALL", null, ["callee:00c57f60:8"]]
+ 00bfaae0 ["INT_ADD", "register:40f0:8", ["const:bfaae0:8", "const:4:8"]]
+ 00bfaae0 ["CALL", null, ["callee:00c57f60:8"]]
- 00bfaa88 ["INT_ADD", "register:40f0:8", ["const:bfaa88:8", "const:4:8"]]
- 00bfaa88 ["CALL", null, ["callee:00c580d0:8"]]
+ 00bfab24 ["INT_ADD", "register:40f0:8", ["const:bfab24:8", "const:4:8"]]
+ 00bfab24 ["CALL", null, ["callee:00c580d0:8"]]
- 00bfaa9c ["INT_ADD", "register:40f0:8", ["const:bfaa9c:8", "const:4:8"]]
- 00bfaa9c ["CALL", null, ["callee:00c57f80:8"]]
+ 00bfab38 ["INT_ADD", "register:40f0:8", ["const:bfab38:8", "const:4:8"]]
+ 00bfab38 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-26522fa960208ee8d4f2c74c2738d3d0"></a>

### [`00bfaac4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfaac4.md) → [`00bfab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfab60.md) FUN_00bfab60

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bfac40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfac40.md) · 呼出先 5件 [`00bfac64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfac64.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00bfacdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfacdc.md) · 呼出先 5件 [`00bfad00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfad00.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfab38 ["INT_ADD", "register:40f0:8", ["const:bfab38:8", "const:4:8"]]
- 00bfab38 ["CALL", null, ["callee:00c57f60:8"]]
+ 00bfabd4 ["INT_ADD", "register:40f0:8", ["const:bfabd4:8", "const:4:8"]]
+ 00bfabd4 ["CALL", null, ["callee:00c57f60:8"]]
- 00bfab6c ["INT_ADD", "register:40f0:8", ["const:bfab6c:8", "const:4:8"]]
- 00bfab6c ["CALL", null, ["callee:00c580d0:8"]]
+ 00bfac08 ["INT_ADD", "register:40f0:8", ["const:bfac08:8", "const:4:8"]]
+ 00bfac08 ["CALL", null, ["callee:00c580d0:8"]]
- 00bfab80 ["INT_ADD", "register:40f0:8", ["const:bfab80:8", "const:4:8"]]
- 00bfab80 ["CALL", null, ["callee:00c57f80:8"]]
+ 00bfac1c ["INT_ADD", "register:40f0:8", ["const:bfac1c:8", "const:4:8"]]
+ 00bfac1c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-25e7e555e6be83cf896ef208a5435dda"></a>

### [`00bfabb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfabb4.md) → [`00bfac50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfac50.md) _ZNSt6__ndk115__thread_structC1Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58100`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58100.md) · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`00c581d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581d0.md) · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfabcc ["INT_ADD", "register:40f0:8", ["const:bfabcc:8", "const:4:8"]]
- 00bfabcc ["CALL", null, ["callee:00c57f60:8"]]
+ 00bfac68 ["INT_ADD", "register:40f0:8", ["const:bfac68:8", "const:4:8"]]
+ 00bfac68 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-2bbb432faa287affe7cc9baa43ed28ed"></a>

### [`00bfabf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfabf0.md) → [`00bfac8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfac8c.md) _ZNSt6__ndk115__thread_structD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58150.md) · 呼出先 2件 [`00bfa8fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa8fc.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00c58220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58220.md) · 呼出先 2件 [`00bfa998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa998.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfac0c ["INT_ADD", "register:40f0:8", ["const:bfac0c:8", "const:4:8"]]
- 00bfac0c ["CALL", null, ["callee:00bfa998:8"]]
+ 00bfaca8 ["INT_ADD", "register:40f0:8", ["const:bfaca8:8", "const:4:8"]]
+ 00bfaca8 ["CALL", null, ["callee:00bfa998:8"]]
~~~


<a id="compare-4d3e5eb3e8839b77c8553f759854bd82"></a>

### [`00bfac7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfac7c.md) → [`00bfad18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfad18.md) FUN_00bfad18

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bfa8c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa8c8.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58150.md)
- 新版 呼出元 1件 [`00bfa964`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa964.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58220.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfac98 ["INT_ADD", "register:40f0:8", ["const:bfac98:8", "const:4:8"]]
- 00bfac98 ["CALL", null, ["callee:00c58220:8"]]
+ 00bfad34 ["INT_ADD", "register:40f0:8", ["const:bfad34:8", "const:4:8"]]
+ 00bfad34 ["CALL", null, ["callee:00c58220:8"]]
~~~


<a id="compare-20003a1c7729fa1dcfeba1f37098c86c"></a>

### [`00bfad58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfad58.md) → [`00bfadf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfadf4.md) _ZNSt6__ndk113random_deviceD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`0056078c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00560/0056078c.md) [`00c583d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c583d0.md) · 呼出先 1件 [`00c597d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c597d0.md)
- 新版 呼出元 2件 [`005607cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/005607cc.md) [`00c584a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c584a0.md) · 呼出先 1件 [`00c598a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c598a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfad68 ["INT_ADD", "register:40f0:8", ["const:bfad68:8", "const:4:8"]]
- 00bfad68 ["CALL", null, ["callee:00c598a0:8"]]
+ 00bfae04 ["INT_ADD", "register:40f0:8", ["const:bfae04:8", "const:4:8"]]
+ 00bfae04 ["CALL", null, ["callee:00c598a0:8"]]
~~~


<a id="compare-83609ba1a4cb0a8541a353c931587655"></a>

### [`00bfae10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfae10.md) → [`00bfaeac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfaeac.md) _ZNKSt6__ndk113random_device7entropyEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e2b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e2b0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5e380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e380.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfae30 ["INT_ADD", "register:40f0:8", ["const:bfae30:8", "const:4:8"]]
- 00bfae30 ["CALL", null, ["callee:00c5e380:8"]]
+ 00bfaecc ["INT_ADD", "register:40f0:8", ["const:bfaecc:8", "const:4:8"]]
+ 00bfaecc ["CALL", null, ["callee:00c5e380:8"]]
~~~


<a id="compare-cf2a38c8a036f5c34b8ff654429e33f7"></a>

### [`00bfafc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfafc4.md) → [`00bfb060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb060.md) _ZNSt6__ndk18ios_base7failureD0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5e2c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e2c0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e390.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfafd8 ["INT_ADD", "register:40f0:8", ["const:bfafd8:8", "const:4:8"]]
- 00bfafd8 ["CALL", null, ["callee:00c5e390:8"]]
+ 00bfb074 ["INT_ADD", "register:40f0:8", ["const:bfb074:8", "const:4:8"]]
+ 00bfb074 ["CALL", null, ["callee:00c5e390:8"]]
~~~


<a id="compare-ece620a77bb6261c61a6350e09c557ff"></a>

### [`00bfaff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfaff0.md) → [`00bfb08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb08c.md) _ZNSt6__ndk18ios_base16__call_callbacksENS0_5eventE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e2d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e2d0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5e3a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3a0.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfb030 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfb030 ["INT_ADD", "register:40f0:8", ["const:bfb030:8", "const:4:8"]]
- 00bfb030 ["CALLIND", null, ["register:0:8"]]
+ 00bfb0cc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfb0cc ["INT_ADD", "register:40f0:8", ["const:bfb0cc:8", "const:4:8"]]
+ 00bfb0cc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-fee9f8b67e2781d63ff2bc23200d1d24"></a>

### [`00bfb054`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfb054.md) → [`00bfb0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb0f0.md) _ZNSt6__ndk18ios_base5imbueERKNS_6localeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7d0.md) [`00c5e2e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e2e0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) [`00c5e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfb07c ["INT_ADD", "register:40f0:8", ["const:bfb07c:8", "const:4:8"]]
- 00bfb07c ["CALL", null, ["callee:00c5a8a0:8"]]
+ 00bfb118 ["INT_ADD", "register:40f0:8", ["const:bfb118:8", "const:4:8"]]
+ 00bfb118 ["CALL", null, ["callee:00c5a8a0:8"]]
- 00bfb088 ["INT_ADD", "register:40f0:8", ["const:bfb088:8", "const:4:8"]]
- 00bfb088 ["CALL", null, ["callee:00c5e3b0:8"]]
+ 00bfb124 ["INT_ADD", "register:40f0:8", ["const:bfb124:8", "const:4:8"]]
+ 00bfb124 ["CALL", null, ["callee:00c5e3b0:8"]]
- 00bfb0ac ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfb0ac ["INT_ADD", "register:40f0:8", ["const:bfb0ac:8", "const:4:8"]]
- 00bfb0ac ["CALLIND", null, ["register:0:8"]]
+ 00bfb148 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfb148 ["INT_ADD", "register:40f0:8", ["const:bfb148:8", "const:4:8"]]
+ 00bfb148 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-4fc24ff325efeb7dd5510ec92cc69a7e"></a>

### [`00bfb4d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfb4d8.md) → [`00bfb574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb574.md) _ZNSt6__ndk18ios_baseD0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5e2f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e2f0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfb4ec ["INT_ADD", "register:40f0:8", ["const:bfb4ec:8", "const:4:8"]]
- 00bfb4ec ["CALL", null, ["callee:00c5e3c0:8"]]
+ 00bfb588 ["INT_ADD", "register:40f0:8", ["const:bfb588:8", "const:4:8"]]
+ 00bfb588 ["CALL", null, ["callee:00c5e3c0:8"]]
~~~


<a id="compare-8d3205166a170fb1df84c6a63216f034"></a>

### [`00bfb630`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfb630.md) → [`00bfb6cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb6cc.md) _ZNSt6__ndk18ios_base7copyfmtERKS0_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5e310`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e310.md) · 呼出先 5件 [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c58660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58660.md) [`00c5a020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a020.md) [`00c5df80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5df80.md) [`00c5e2e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e2e0.md)
- 新版 呼出元 1件 [`00c5e3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3e0.md) · 呼出先 5件 [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c58730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58730.md) [`00c5a0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a0f0.md) [`00c5e050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e050.md) [`00c5e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfb664 ["INT_ADD", "register:40f0:8", ["const:bfb664:8", "const:4:8"]]
- 00bfb664 ["CALL", null, ["callee:00c5a0f0:8"]]
+ 00bfb700 ["INT_ADD", "register:40f0:8", ["const:bfb700:8", "const:4:8"]]
+ 00bfb700 ["CALL", null, ["callee:00c5a0f0:8"]]
- 00bfb674 ["INT_ADD", "register:40f0:8", ["const:bfb674:8", "const:4:8"]]
- 00bfb674 ["CALL", null, ["callee:00c5a0f0:8"]]
+ 00bfb710 ["INT_ADD", "register:40f0:8", ["const:bfb710:8", "const:4:8"]]
+ 00bfb710 ["CALL", null, ["callee:00c5a0f0:8"]]
- 00bfb6a0 ["INT_ADD", "register:40f0:8", ["const:bfb6a0:8", "const:4:8"]]
- 00bfb6a0 ["CALL", null, ["callee:00c5a0f0:8"]]
+ 00bfb73c ["INT_ADD", "register:40f0:8", ["const:bfb73c:8", "const:4:8"]]
+ 00bfb73c ["CALL", null, ["callee:00c5a0f0:8"]]
~~~


<a id="compare-694d8ddf4e082be8a5fc397d7a7686c5"></a>

### [`00bfb8f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfb8f0.md) → [`00bfb98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfb98c.md) _ZNSt6__ndk18ios_base4moveERS0_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5a7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfb92c ["INT_ADD", "register:40f0:8", ["const:bfb92c:8", "const:4:8"]]
- 00bfb92c ["CALL", null, ["callee:00c5a8a0:8"]]
+ 00bfb9c8 ["INT_ADD", "register:40f0:8", ["const:bfb9c8:8", "const:4:8"]]
+ 00bfb9c8 ["CALL", null, ["callee:00c5a8a0:8"]]
~~~


<a id="compare-06f1d21e6d06bd2211fc8435a494624e"></a>

### [`00bfb98c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfb98c.md) → [`00bfba28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfba28.md) _ZNSt6__ndk18ios_base4swapERS0_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5e320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e320.md) · 呼出先 3件 [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5a7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7d0.md) [`00c5e2e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e2e0.md)
- 新版 呼出元 1件 [`00c5e3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3f0.md) · 呼出先 3件 [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) [`00c5e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfba00 ["INT_ADD", "register:40f0:8", ["const:bfba00:8", "const:4:8"]]
- 00bfba00 ["CALL", null, ["callee:00c5a8a0:8"]]
+ 00bfba9c ["INT_ADD", "register:40f0:8", ["const:bfba9c:8", "const:4:8"]]
+ 00bfba9c ["CALL", null, ["callee:00c5a8a0:8"]]
- 00bfba0c ["INT_ADD", "register:40f0:8", ["const:bfba0c:8", "const:4:8"]]
- 00bfba0c ["CALL", null, ["callee:00c5e3b0:8"]]
+ 00bfbaa8 ["INT_ADD", "register:40f0:8", ["const:bfbaa8:8", "const:4:8"]]
+ 00bfbaa8 ["CALL", null, ["callee:00c5e3b0:8"]]
- 00bfba18 ["INT_ADD", "register:40f0:8", ["const:bfba18:8", "const:4:8"]]
- 00bfba18 ["CALL", null, ["callee:00c5e3b0:8"]]
+ 00bfbab4 ["INT_ADD", "register:40f0:8", ["const:bfbab4:8", "const:4:8"]]
+ 00bfbab4 ["CALL", null, ["callee:00c5e3b0:8"]]
~~~


<a id="compare-88132b8f589595a3de6bbd3b71748b2a"></a>

### [`00bfbaa8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfbaa8.md) → [`00bfbb44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfbb44.md) _ZNSt6__ndk18ios_base33__set_badbit_and_consider_rethrowEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c582c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582c0.md) · 呼出先 1件 [`00c58500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58500.md)
- 新版 呼出元 1件 [`00c58390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58390.md) · 呼出先 1件 [`00c585d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c585d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfbad0 ["INT_ADD", "register:40f0:8", ["const:bfbad0:8", "const:4:8"]]
- 00bfbad0 ["CALL", null, ["callee:00c585d0:8"]]
+ 00bfbb6c ["INT_ADD", "register:40f0:8", ["const:bfbb6c:8", "const:4:8"]]
+ 00bfbb6c ["CALL", null, ["callee:00c585d0:8"]]
~~~


<a id="compare-686367bb3a1373a06790f21bf03b1a05"></a>

### [`00bfbad4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfbad4.md) → [`00bfbb70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfbb70.md) _ZNSt6__ndk18ios_base34__set_failbit_and_consider_rethrowEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5e330`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e330.md) · 呼出先 1件 [`00c58500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58500.md)
- 新版 呼出元 1件 [`00c5e400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e400.md) · 呼出先 1件 [`00c585d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c585d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfbafc ["INT_ADD", "register:40f0:8", ["const:bfbafc:8", "const:4:8"]]
- 00bfbafc ["CALL", null, ["callee:00c585d0:8"]]
+ 00bfbb98 ["INT_ADD", "register:40f0:8", ["const:bfbb98:8", "const:4:8"]]
+ 00bfbb98 ["CALL", null, ["callee:00c585d0:8"]]
~~~


<a id="compare-5e2ea7d553b29713f1c914b5ba715a71"></a>

### [`00bfbb1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfbb1c.md) → [`00bfbbb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfbbb8.md) FUN_00bfbbb8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5def0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5def0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5dfc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfc0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfbb30 ["INT_ADD", "register:40f0:8", ["const:bfbb30:8", "const:4:8"]]
- 00bfbb30 ["CALL", null, ["callee:00c5dfc0:8"]]
+ 00bfbbcc ["INT_ADD", "register:40f0:8", ["const:bfbbcc:8", "const:4:8"]]
+ 00bfbbcc ["CALL", null, ["callee:00c5dfc0:8"]]
~~~


<a id="compare-cea63bcd13e52694f761ee4ca26a612b"></a>

### [`00bfbb50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfbb50.md) → [`00bfbbec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfbbec.md) _ZNSt6__ndk19basic_iosIcNS_11char_traitsIcEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5e340`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e340.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e410.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfbb64 ["INT_ADD", "register:40f0:8", ["const:bfbb64:8", "const:4:8"]]
- 00bfbb64 ["CALL", null, ["callee:00c5e410:8"]]
+ 00bfbc00 ["INT_ADD", "register:40f0:8", ["const:bfbc00:8", "const:4:8"]]
+ 00bfbc00 ["CALL", null, ["callee:00c5e410:8"]]
~~~


<a id="compare-9ce5ba7bcc2dfcfda4eb330c09352acd"></a>

### [`00bfbb7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfbb7c.md) → [`00bfbc18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfbc18.md) _ZNSt6__ndk19basic_iosIcNS_11char_traitsIcEEE7copyfmtERKS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e2d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e2d0.md) [`00c5e310`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e310.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e3a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3a0.md) [`00c5e3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfbba4 ["INT_ADD", "register:40f0:8", ["const:bfbba4:8", "const:4:8"]]
- 00bfbba4 ["CALL", null, ["callee:00c5e3a0:8"]]
+ 00bfbc40 ["INT_ADD", "register:40f0:8", ["const:bfbc40:8", "const:4:8"]]
+ 00bfbc40 ["CALL", null, ["callee:00c5e3a0:8"]]
- 00bfbbb0 ["INT_ADD", "register:40f0:8", ["const:bfbbb0:8", "const:4:8"]]
- 00bfbbb0 ["CALL", null, ["callee:00c5e3e0:8"]]
+ 00bfbc4c ["INT_ADD", "register:40f0:8", ["const:bfbc4c:8", "const:4:8"]]
+ 00bfbc4c ["CALL", null, ["callee:00c5e3e0:8"]]
- 00bfbbcc ["INT_ADD", "register:40f0:8", ["const:bfbbcc:8", "const:4:8"]]
- 00bfbbcc ["CALL", null, ["callee:00c5e3a0:8"]]
+ 00bfbc68 ["INT_ADD", "register:40f0:8", ["const:bfbc68:8", "const:4:8"]]
+ 00bfbc68 ["CALL", null, ["callee:00c5e3a0:8"]]
~~~


<a id="compare-b3275953293310c67470ae1fd231d859"></a>

### [`00bfbc10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfbc10.md) → [`00bfbcac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfbcac.md) FUN_00bfbcac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5e350`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e350.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e420.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfbc24 ["INT_ADD", "register:40f0:8", ["const:bfbc24:8", "const:4:8"]]
- 00bfbc24 ["CALL", null, ["callee:00c5e420:8"]]
+ 00bfbcc0 ["INT_ADD", "register:40f0:8", ["const:bfbcc0:8", "const:4:8"]]
+ 00bfbcc0 ["CALL", null, ["callee:00c5e420:8"]]
~~~


<a id="compare-8d4b0483e4e8c0a5b8a7c94931f7e46d"></a>

### [`00bfbc3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfbc3c.md) → [`00bfbcd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfbcd8.md) _ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEE8pubimbueERKNS_6localeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7d0.md) [`00c5e2e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e2e0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) [`00c5e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfbc64 ["COPY", "register:0:8", ["register:4048:8"]]
- 00bfbc64 ["INT_ADD", "register:40f0:8", ["const:bfbc64:8", "const:4:8"]]
- 00bfbc64 ["CALLIND", null, ["register:0:8"]]
+ 00bfbd00 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00bfbd00 ["INT_ADD", "register:40f0:8", ["const:bfbd00:8", "const:4:8"]]
+ 00bfbd00 ["CALLIND", null, ["register:0:8"]]
- 00bfbc70 ["INT_ADD", "register:40f0:8", ["const:bfbc70:8", "const:4:8"]]
- 00bfbc70 ["CALL", null, ["callee:00c5a8a0:8"]]
+ 00bfbd0c ["INT_ADD", "register:40f0:8", ["const:bfbd0c:8", "const:4:8"]]
+ 00bfbd0c ["CALL", null, ["callee:00c5a8a0:8"]]
~~~


<a id="compare-47be016882b36d68a0ecee7aed54f7cb"></a>

### [`00bfbd04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfbd04.md) → [`00bfbda0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfbda0.md) _ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEE6snextcEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfbd44 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfbd44 ["INT_ADD", "register:40f0:8", ["const:bfbd44:8", "const:4:8"]]
- 00bfbd44 ["CALLIND", null, ["register:0:8"]]
+ 00bfbde0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfbde0 ["INT_ADD", "register:40f0:8", ["const:bfbde0:8", "const:4:8"]]
+ 00bfbde0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-62f7a11f46a8035445f45ad2ad18436f"></a>

### [`00bfbf38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfbf38.md) → [`00bfbfd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfb/00bfbfd4.md) _ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEEaSERKS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e2e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e2e0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfbf58 ["INT_ADD", "register:40f0:8", ["const:bfbf58:8", "const:4:8"]]
- 00bfbf58 ["CALL", null, ["callee:00c5e3b0:8"]]
+ 00bfbff4 ["INT_ADD", "register:40f0:8", ["const:bfbff4:8", "const:4:8"]]
+ 00bfbff4 ["CALL", null, ["callee:00c5e3b0:8"]]
~~~


<a id="compare-731cd2d75cab247853de2669fc9792a9"></a>

### [`00bfbf88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfb/00bfbf88.md) → [`00bfc024`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfc024.md) _ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEE4swapERS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5a7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7d0.md) [`00c5e2e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e2e0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) [`00c5e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfbfac ["INT_ADD", "register:40f0:8", ["const:bfbfac:8", "const:4:8"]]
- 00bfbfac ["CALL", null, ["callee:00c5a8a0:8"]]
+ 00bfc048 ["INT_ADD", "register:40f0:8", ["const:bfc048:8", "const:4:8"]]
+ 00bfc048 ["CALL", null, ["callee:00c5a8a0:8"]]
- 00bfbfb8 ["INT_ADD", "register:40f0:8", ["const:bfbfb8:8", "const:4:8"]]
- 00bfbfb8 ["CALL", null, ["callee:00c5e3b0:8"]]
+ 00bfc054 ["INT_ADD", "register:40f0:8", ["const:bfc054:8", "const:4:8"]]
+ 00bfc054 ["CALL", null, ["callee:00c5e3b0:8"]]
- 00bfbfc4 ["INT_ADD", "register:40f0:8", ["const:bfbfc4:8", "const:4:8"]]
- 00bfbfc4 ["CALL", null, ["callee:00c5e3b0:8"]]
+ 00bfc060 ["INT_ADD", "register:40f0:8", ["const:bfc060:8", "const:4:8"]]
+ 00bfc060 ["CALL", null, ["callee:00c5e3b0:8"]]
~~~


<a id="compare-777d2ecf22606f622fada354ab957c1e"></a>

### [`00bfc08c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfc/00bfc08c.md) → [`00bfc128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfc128.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEEC2EPNS_15basic_streambufIcS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c581e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581e0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfc0c8 ["INT_ADD", "register:40f0:8", ["const:bfc0c8:8", "const:4:8"]]
- 00bfc0c8 ["CALL", null, ["callee:00c582b0:8"]]
+ 00bfc164 ["INT_ADD", "register:40f0:8", ["const:bfc164:8", "const:4:8"]]
+ 00bfc164 ["CALL", null, ["callee:00c582b0:8"]]
~~~


<a id="compare-88944e7c51191b097ccff5919461b2cc"></a>

### [`00bfc15c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfc/00bfc15c.md) → [`00bfc1f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfc1f8.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE4swapERS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e320.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5e3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfc194 ["INT_ADD", "register:40f0:8", ["const:bfc194:8", "const:4:8"]]
- 00bfc194 ["CALL", null, ["callee:00c5e3f0:8"]]
+ 00bfc230 ["INT_ADD", "register:40f0:8", ["const:bfc230:8", "const:4:8"]]
+ 00bfc230 ["CALL", null, ["callee:00c5e3f0:8"]]
~~~


<a id="compare-932dfeb59e96b139e3ac5e76bfb93c8f"></a>

### [`00bfc3ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfc/00bfc3ac.md) → [`00bfc448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfc448.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEErsEPFRNS_9basic_iosIcS2_EES6_E

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfc3cc ["COPY", "register:0:8", ["register:4008:8"]]
- 00bfc3cc ["INT_ADD", "register:40f0:8", ["const:bfc3cc:8", "const:4:8"]]
- 00bfc3cc ["CALLIND", null, ["register:0:8"]]
+ 00bfc468 ["COPY", "register:0:8", ["register:4008:8"]]
+ 00bfc468 ["INT_ADD", "register:40f0:8", ["const:bfc468:8", "const:4:8"]]
+ 00bfc468 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a4ce3661414e171218426ad72e9bbee0"></a>

### [`00bfc3e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfc/00bfc3e4.md) → [`00bfc480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfc480.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEErsEPFRNS_8ios_baseES5_E

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfc404 ["COPY", "register:0:8", ["register:4008:8"]]
- 00bfc404 ["INT_ADD", "register:40f0:8", ["const:bfc404:8", "const:4:8"]]
- 00bfc404 ["CALLIND", null, ["register:0:8"]]
+ 00bfc4a0 ["COPY", "register:0:8", ["register:4008:8"]]
+ 00bfc4a0 ["INT_ADD", "register:40f0:8", ["const:bfc4a0:8", "const:4:8"]]
+ 00bfc4a0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e148214d933422b9d7ba30cccc93df64"></a>

### [`00bfc41c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfc/00bfc41c.md) → [`00bfc4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfc/00bfc4b8.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEErsEPNS_15basic_streambufIcS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c59dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59dd0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfc44c ["INT_ADD", "register:40f0:8", ["const:bfc44c:8", "const:4:8"]]
- 00bfc44c ["CALL", null, ["callee:00c59ea0:8"]]
+ 00bfc4e8 ["INT_ADD", "register:40f0:8", ["const:bfc4e8:8", "const:4:8"]]
+ 00bfc4e8 ["CALL", null, ["callee:00c59ea0:8"]]
- 00bfc4b0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfc4b0 ["INT_ADD", "register:40f0:8", ["const:bfc4b0:8", "const:4:8"]]
- 00bfc4b0 ["CALLIND", null, ["register:0:8"]]
+ 00bfc54c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfc54c ["INT_ADD", "register:40f0:8", ["const:bfc54c:8", "const:4:8"]]
+ 00bfc54c ["CALLIND", null, ["register:0:8"]]
- 00bfc4e8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfc4e8 ["INT_ADD", "register:40f0:8", ["const:bfc4e8:8", "const:4:8"]]
- 00bfc4e8 ["CALLIND", null, ["register:0:8"]]
+ 00bfc584 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfc584 ["INT_ADD", "register:40f0:8", ["const:bfc584:8", "const:4:8"]]
+ 00bfc584 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-06e6453b95fc8391ad9d3fe0d6a9c3ee"></a>

### [`00bfd62c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfd/00bfd62c.md) → [`00bfd6c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfd6c8.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE3getEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e360`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e360.md) · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c59dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59dd0.md)
- 新版 呼出元 1件 [`00c5e430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e430.md) · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfd654 ["INT_ADD", "register:40f0:8", ["const:bfd654:8", "const:4:8"]]
- 00bfd654 ["CALL", null, ["callee:00c59ea0:8"]]
+ 00bfd6f0 ["INT_ADD", "register:40f0:8", ["const:bfd6f0:8", "const:4:8"]]
+ 00bfd6f0 ["CALL", null, ["callee:00c59ea0:8"]]
- 00bfd69c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfd69c ["INT_ADD", "register:40f0:8", ["const:bfd69c:8", "const:4:8"]]
- 00bfd69c ["CALLIND", null, ["register:0:8"]]
+ 00bfd738 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfd738 ["INT_ADD", "register:40f0:8", ["const:bfd738:8", "const:4:8"]]
+ 00bfd738 ["CALLIND", null, ["register:0:8"]]
- 00bfd6cc ["INT_ADD", "register:40f0:8", ["const:bfd6cc:8", "const:4:8"]]
- 00bfd6cc ["CALL", null, ["callee:00c58370:8"]]
+ 00bfd768 ["INT_ADD", "register:40f0:8", ["const:bfd768:8", "const:4:8"]]
+ 00bfd768 ["CALL", null, ["callee:00c58370:8"]]
~~~


<a id="compare-1a1aaf2a6ddbfe418890215a228526fc"></a>

### [`00bfd744`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfd/00bfd744.md) → [`00bfd7e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfd7e0.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE3getERc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e360`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e360.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5e430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e430.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfd75c ["INT_ADD", "register:40f0:8", ["const:bfd75c:8", "const:4:8"]]
- 00bfd75c ["CALL", null, ["callee:00c5e430:8"]]
+ 00bfd7f8 ["INT_ADD", "register:40f0:8", ["const:bfd7f8:8", "const:4:8"]]
+ 00bfd7f8 ["CALL", null, ["callee:00c5e430:8"]]
~~~


<a id="compare-e0f9148f18a6ecf1fd87bc43126b9ab7"></a>

### [`00bfd824`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfd/00bfd824.md) → [`00bfd8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfd8c0.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE3getEPclc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e370`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e370.md) · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c59dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59dd0.md)
- 新版 呼出元 1件 [`00c5e440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e440.md) · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfd860 ["INT_ADD", "register:40f0:8", ["const:bfd860:8", "const:4:8"]]
- 00bfd860 ["CALL", null, ["callee:00c59ea0:8"]]
+ 00bfd8fc ["INT_ADD", "register:40f0:8", ["const:bfd8fc:8", "const:4:8"]]
+ 00bfd8fc ["CALL", null, ["callee:00c59ea0:8"]]
- 00bfd8dc ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfd8dc ["INT_ADD", "register:40f0:8", ["const:bfd8dc:8", "const:4:8"]]
- 00bfd8dc ["CALLIND", null, ["register:0:8"]]
+ 00bfd978 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfd978 ["INT_ADD", "register:40f0:8", ["const:bfd978:8", "const:4:8"]]
+ 00bfd978 ["CALLIND", null, ["register:0:8"]]
- 00bfd91c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfd91c ["INT_ADD", "register:40f0:8", ["const:bfd91c:8", "const:4:8"]]
- 00bfd91c ["CALLIND", null, ["register:0:8"]]
+ 00bfd9b8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfd9b8 ["INT_ADD", "register:40f0:8", ["const:bfd9b8:8", "const:4:8"]]
+ 00bfd9b8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7e0564eeecf6497eaa9b6dc6367a5345"></a>

### [`00bfda8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfd/00bfda8c.md) → [`00bfdb28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfdb28.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE3getERNS_15basic_streambufIcS2_EEc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e380`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e380.md) · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c59dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59dd0.md)
- 新版 呼出元 1件 [`00c5e450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e450.md) · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfdac0 ["INT_ADD", "register:40f0:8", ["const:bfdac0:8", "const:4:8"]]
- 00bfdac0 ["CALL", null, ["callee:00c59ea0:8"]]
+ 00bfdb5c ["INT_ADD", "register:40f0:8", ["const:bfdb5c:8", "const:4:8"]]
+ 00bfdb5c ["CALL", null, ["callee:00c59ea0:8"]]
- 00bfdb24 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfdb24 ["INT_ADD", "register:40f0:8", ["const:bfdb24:8", "const:4:8"]]
- 00bfdb24 ["CALLIND", null, ["register:0:8"]]
+ 00bfdbc0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfdbc0 ["INT_ADD", "register:40f0:8", ["const:bfdbc0:8", "const:4:8"]]
+ 00bfdbc0 ["CALLIND", null, ["register:0:8"]]
- 00bfdb68 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfdb68 ["INT_ADD", "register:40f0:8", ["const:bfdb68:8", "const:4:8"]]
- 00bfdb68 ["CALLIND", null, ["register:0:8"]]
+ 00bfdc04 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfdc04 ["INT_ADD", "register:40f0:8", ["const:bfdc04:8", "const:4:8"]]
+ 00bfdc04 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-0162eee0da6513944a43de132579704e"></a>

### [`00bfdca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfd/00bfdca0.md) → [`00bfdd3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfdd3c.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE7getlineEPclc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e390`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e390.md) · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c59dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59dd0.md)
- 新版 呼出元 1件 [`00c5e460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e460.md) · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfdce0 ["INT_ADD", "register:40f0:8", ["const:bfdce0:8", "const:4:8"]]
- 00bfdce0 ["CALL", null, ["callee:00c59ea0:8"]]
+ 00bfdd7c ["INT_ADD", "register:40f0:8", ["const:bfdd7c:8", "const:4:8"]]
+ 00bfdd7c ["CALL", null, ["callee:00c59ea0:8"]]
- 00bfdd24 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfdd24 ["INT_ADD", "register:40f0:8", ["const:bfdd24:8", "const:4:8"]]
- 00bfdd24 ["CALLIND", null, ["register:0:8"]]
+ 00bfddc0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfddc0 ["INT_ADD", "register:40f0:8", ["const:bfddc0:8", "const:4:8"]]
+ 00bfddc0 ["CALLIND", null, ["register:0:8"]]
- 00bfdd7c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfdd7c ["INT_ADD", "register:40f0:8", ["const:bfdd7c:8", "const:4:8"]]
- 00bfdd7c ["CALLIND", null, ["register:0:8"]]
+ 00bfde18 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfde18 ["INT_ADD", "register:40f0:8", ["const:bfde18:8", "const:4:8"]]
+ 00bfde18 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8cdebc5a98e4816ee9be1490adc2238d"></a>

### [`00bfdee4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfd/00bfdee4.md) → [`00bfdf80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfd/00bfdf80.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE6ignoreEli

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c59dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59dd0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfdf18 ["INT_ADD", "register:40f0:8", ["const:bfdf18:8", "const:4:8"]]
- 00bfdf18 ["CALL", null, ["callee:00c59ea0:8"]]
+ 00bfdfb4 ["INT_ADD", "register:40f0:8", ["const:bfdfb4:8", "const:4:8"]]
+ 00bfdfb4 ["CALL", null, ["callee:00c59ea0:8"]]
- 00bfdf70 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfdf70 ["INT_ADD", "register:40f0:8", ["const:bfdf70:8", "const:4:8"]]
- 00bfdf70 ["CALLIND", null, ["register:0:8"]]
+ 00bfe00c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfe00c ["INT_ADD", "register:40f0:8", ["const:bfe00c:8", "const:4:8"]]
+ 00bfe00c ["CALLIND", null, ["register:0:8"]]
- 00bfdfec ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfdfec ["INT_ADD", "register:40f0:8", ["const:bfdfec:8", "const:4:8"]]
- 00bfdfec ["CALLIND", null, ["register:0:8"]]
+ 00bfe088 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfe088 ["INT_ADD", "register:40f0:8", ["const:bfe088:8", "const:4:8"]]
+ 00bfe088 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-bf15130f168d59870de97bac9a6f5b0d"></a>

### [`00bfe0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfe/00bfe0a0.md) → [`00bfe13c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfe13c.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE4peekEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c59dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59dd0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfe0c8 ["INT_ADD", "register:40f0:8", ["const:bfe0c8:8", "const:4:8"]]
- 00bfe0c8 ["CALL", null, ["callee:00c59ea0:8"]]
+ 00bfe164 ["INT_ADD", "register:40f0:8", ["const:bfe164:8", "const:4:8"]]
+ 00bfe164 ["CALL", null, ["callee:00c59ea0:8"]]
- 00bfe108 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfe108 ["INT_ADD", "register:40f0:8", ["const:bfe108:8", "const:4:8"]]
- 00bfe108 ["CALLIND", null, ["register:0:8"]]
+ 00bfe1a4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfe1a4 ["INT_ADD", "register:40f0:8", ["const:bfe1a4:8", "const:4:8"]]
+ 00bfe1a4 ["CALLIND", null, ["register:0:8"]]
- 00bfe130 ["INT_ADD", "register:40f0:8", ["const:bfe130:8", "const:4:8"]]
- 00bfe130 ["CALL", null, ["callee:00c58370:8"]]
+ 00bfe1cc ["INT_ADD", "register:40f0:8", ["const:bfe1cc:8", "const:4:8"]]
+ 00bfe1cc ["CALL", null, ["callee:00c58370:8"]]
~~~


<a id="compare-f42b3697397c9e2ef2565a9c6bfab1cf"></a>

### [`00bfe1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfe/00bfe1a0.md) → [`00bfe23c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfe23c.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE4readEPcl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c590d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c590d0.md) · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c59dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59dd0.md)
- 新版 呼出元 1件 [`00c591a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c591a0.md) · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfe1d0 ["INT_ADD", "register:40f0:8", ["const:bfe1d0:8", "const:4:8"]]
- 00bfe1d0 ["CALL", null, ["callee:00c59ea0:8"]]
+ 00bfe26c ["INT_ADD", "register:40f0:8", ["const:bfe26c:8", "const:4:8"]]
+ 00bfe26c ["CALL", null, ["callee:00c59ea0:8"]]
- 00bfe1fc ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfe1fc ["INT_ADD", "register:40f0:8", ["const:bfe1fc:8", "const:4:8"]]
- 00bfe1fc ["CALLIND", null, ["register:0:8"]]
+ 00bfe298 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfe298 ["INT_ADD", "register:40f0:8", ["const:bfe298:8", "const:4:8"]]
+ 00bfe298 ["CALLIND", null, ["register:0:8"]]
- 00bfe22c ["INT_ADD", "register:40f0:8", ["const:bfe22c:8", "const:4:8"]]
- 00bfe22c ["CALL", null, ["callee:00c58370:8"]]
+ 00bfe2c8 ["INT_ADD", "register:40f0:8", ["const:bfe2c8:8", "const:4:8"]]
+ 00bfe2c8 ["CALL", null, ["callee:00c58370:8"]]
~~~


<a id="compare-ad3cd21667a2ca41efdc7de75dad3cbf"></a>

### [`00bfe298`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfe/00bfe298.md) → [`00bfe334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfe334.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE8readsomeEPcl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c59dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59dd0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfe2c8 ["INT_ADD", "register:40f0:8", ["const:bfe2c8:8", "const:4:8"]]
- 00bfe2c8 ["CALL", null, ["callee:00c59ea0:8"]]
+ 00bfe364 ["INT_ADD", "register:40f0:8", ["const:bfe364:8", "const:4:8"]]
+ 00bfe364 ["CALL", null, ["callee:00c59ea0:8"]]
- 00bfe308 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfe308 ["INT_ADD", "register:40f0:8", ["const:bfe308:8", "const:4:8"]]
- 00bfe308 ["CALLIND", null, ["register:0:8"]]
+ 00bfe3a4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfe3a4 ["INT_ADD", "register:40f0:8", ["const:bfe3a4:8", "const:4:8"]]
+ 00bfe3a4 ["CALLIND", null, ["register:0:8"]]
- 00bfe354 ["COPY", "register:0:8", ["register:4048:8"]]
- 00bfe354 ["INT_ADD", "register:40f0:8", ["const:bfe354:8", "const:4:8"]]
- 00bfe354 ["CALLIND", null, ["register:0:8"]]
+ 00bfe3f0 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00bfe3f0 ["INT_ADD", "register:40f0:8", ["const:bfe3f0:8", "const:4:8"]]
+ 00bfe3f0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6397b0ad6b8eaa03e049083a71916eee"></a>

### [`00bfe3e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfe/00bfe3e8.md) → [`00bfe484`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfe484.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE7putbackEc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c59dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59dd0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfe428 ["INT_ADD", "register:40f0:8", ["const:bfe428:8", "const:4:8"]]
- 00bfe428 ["CALL", null, ["callee:00c58370:8"]]
+ 00bfe4c4 ["INT_ADD", "register:40f0:8", ["const:bfe4c4:8", "const:4:8"]]
+ 00bfe4c4 ["CALL", null, ["callee:00c58370:8"]]
- 00bfe438 ["INT_ADD", "register:40f0:8", ["const:bfe438:8", "const:4:8"]]
- 00bfe438 ["CALL", null, ["callee:00c59ea0:8"]]
+ 00bfe4d4 ["INT_ADD", "register:40f0:8", ["const:bfe4d4:8", "const:4:8"]]
+ 00bfe4d4 ["CALL", null, ["callee:00c59ea0:8"]]
- 00bfe48c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfe48c ["INT_ADD", "register:40f0:8", ["const:bfe48c:8", "const:4:8"]]
- 00bfe48c ["CALLIND", null, ["register:0:8"]]
+ 00bfe528 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfe528 ["INT_ADD", "register:40f0:8", ["const:bfe528:8", "const:4:8"]]
+ 00bfe528 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-1143811ff5fcf09a6596129d1feeccc8"></a>

### [`00bfe51c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfe/00bfe51c.md) → [`00bfe5b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfe5b8.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE5ungetEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c59dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59dd0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfe558 ["INT_ADD", "register:40f0:8", ["const:bfe558:8", "const:4:8"]]
- 00bfe558 ["CALL", null, ["callee:00c58370:8"]]
+ 00bfe5f4 ["INT_ADD", "register:40f0:8", ["const:bfe5f4:8", "const:4:8"]]
+ 00bfe5f4 ["CALL", null, ["callee:00c58370:8"]]
- 00bfe568 ["INT_ADD", "register:40f0:8", ["const:bfe568:8", "const:4:8"]]
- 00bfe568 ["CALL", null, ["callee:00c59ea0:8"]]
+ 00bfe604 ["INT_ADD", "register:40f0:8", ["const:bfe604:8", "const:4:8"]]
+ 00bfe604 ["CALL", null, ["callee:00c59ea0:8"]]
- 00bfe5b4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfe5b4 ["INT_ADD", "register:40f0:8", ["const:bfe5b4:8", "const:4:8"]]
- 00bfe5b4 ["CALLIND", null, ["register:0:8"]]
+ 00bfe650 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfe650 ["INT_ADD", "register:40f0:8", ["const:bfe650:8", "const:4:8"]]
+ 00bfe650 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9d4efe70e3a69bcd37dd989cb3607f27"></a>

### [`00bfe644`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfe/00bfe644.md) → [`00bfe6e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfe6e0.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE4syncEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c59dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59dd0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfe668 ["INT_ADD", "register:40f0:8", ["const:bfe668:8", "const:4:8"]]
- 00bfe668 ["CALL", null, ["callee:00c59ea0:8"]]
+ 00bfe704 ["INT_ADD", "register:40f0:8", ["const:bfe704:8", "const:4:8"]]
+ 00bfe704 ["CALL", null, ["callee:00c59ea0:8"]]
- 00bfe690 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfe690 ["INT_ADD", "register:40f0:8", ["const:bfe690:8", "const:4:8"]]
- 00bfe690 ["CALLIND", null, ["register:0:8"]]
+ 00bfe72c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfe72c ["INT_ADD", "register:40f0:8", ["const:bfe72c:8", "const:4:8"]]
+ 00bfe72c ["CALLIND", null, ["register:0:8"]]
- 00bfe6b4 ["INT_ADD", "register:40f0:8", ["const:bfe6b4:8", "const:4:8"]]
- 00bfe6b4 ["CALL", null, ["callee:00c58370:8"]]
+ 00bfe750 ["INT_ADD", "register:40f0:8", ["const:bfe750:8", "const:4:8"]]
+ 00bfe750 ["CALL", null, ["callee:00c58370:8"]]
~~~


<a id="compare-2b92c9c24cd8225d3d9606e8404b1d9b"></a>

### [`00bfe734`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfe/00bfe734.md) → [`00bfe7d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfe7d0.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEE5seekgENS_4fposI9mbstate_tEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c59800`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59800.md) · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c59dd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59dd0.md)
- 新版 呼出元 1件 [`00c598d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c598d0.md) · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c59ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c59ea0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfe770 ["INT_ADD", "register:40f0:8", ["const:bfe770:8", "const:4:8"]]
- 00bfe770 ["CALL", null, ["callee:00c58370:8"]]
+ 00bfe80c ["INT_ADD", "register:40f0:8", ["const:bfe80c:8", "const:4:8"]]
+ 00bfe80c ["CALL", null, ["callee:00c58370:8"]]
- 00bfe780 ["INT_ADD", "register:40f0:8", ["const:bfe780:8", "const:4:8"]]
- 00bfe780 ["CALL", null, ["callee:00c59ea0:8"]]
+ 00bfe81c ["INT_ADD", "register:40f0:8", ["const:bfe81c:8", "const:4:8"]]
+ 00bfe81c ["CALL", null, ["callee:00c59ea0:8"]]
- 00bfe7b0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfe7b0 ["INT_ADD", "register:40f0:8", ["const:bfe7b0:8", "const:4:8"]]
- 00bfe7b0 ["CALLIND", null, ["register:0:8"]]
+ 00bfe84c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfe84c ["INT_ADD", "register:40f0:8", ["const:bfe84c:8", "const:4:8"]]
+ 00bfe84c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c3d118e32ff64794f469abee3e804fce"></a>

### [`00bfe844`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfe/00bfe844.md) → [`00bfe8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfe8e0.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEEC2EPNS_15basic_streambufIcS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c581e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581e0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfe87c ["INT_ADD", "register:40f0:8", ["const:bfe87c:8", "const:4:8"]]
- 00bfe87c ["CALL", null, ["callee:00c582b0:8"]]
+ 00bfe918 ["INT_ADD", "register:40f0:8", ["const:bfe918:8", "const:4:8"]]
+ 00bfe918 ["CALL", null, ["callee:00c582b0:8"]]
~~~


<a id="compare-f5a3f60cfd1c6df2b5fd151844b46626"></a>

### [`00bfe910`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfe/00bfe910.md) → [`00bfe9ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfe9ac.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEE4swapERS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e320.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5e3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfe940 ["INT_ADD", "register:40f0:8", ["const:bfe940:8", "const:4:8"]]
- 00bfe940 ["CALL", null, ["callee:00c5e3f0:8"]]
+ 00bfe9dc ["INT_ADD", "register:40f0:8", ["const:bfe9dc:8", "const:4:8"]]
+ 00bfe9dc ["CALL", null, ["callee:00c5e3f0:8"]]
~~~


<a id="compare-3216d65199a7af8c6362ccbb9ef47fe5"></a>

### [`00bfe974`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfe/00bfe974.md) → [`00bfea10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfea10.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEE6sentryC1ERS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c58260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58260.md) · 呼出先 1件 [`00c58ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58ef0.md)
- 新版 呼出元 1件 [`00c58330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58330.md) · 呼出先 1件 [`00c58fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58fc0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfe9b8 ["INT_ADD", "register:40f0:8", ["const:bfe9b8:8", "const:4:8"]]
- 00bfe9b8 ["CALL", null, ["callee:00c58fc0:8"]]
+ 00bfea54 ["INT_ADD", "register:40f0:8", ["const:bfea54:8", "const:4:8"]]
+ 00bfea54 ["CALL", null, ["callee:00c58fc0:8"]]
~~~


<a id="compare-764030ab98377d80a961f9da059c0ee1"></a>

### [`00bfe9d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfe/00bfe9d8.md) → [`00bfea74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfea74.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEE6sentryD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c582b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582b0.md) · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5d0f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0f0.md)
- 新版 呼出元 1件 [`00c58380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58380.md) · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5d1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfea14 ["INT_ADD", "register:40f0:8", ["const:bfea14:8", "const:4:8"]]
- 00bfea14 ["CALL", null, ["callee:00c5d1c0:8"]]
+ 00bfeab0 ["INT_ADD", "register:40f0:8", ["const:bfeab0:8", "const:4:8"]]
+ 00bfeab0 ["CALL", null, ["callee:00c5d1c0:8"]]
- 00bfea38 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfea38 ["INT_ADD", "register:40f0:8", ["const:bfea38:8", "const:4:8"]]
- 00bfea38 ["CALLIND", null, ["register:0:8"]]
+ 00bfead4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bfead4 ["INT_ADD", "register:40f0:8", ["const:bfead4:8", "const:4:8"]]
+ 00bfead4 ["CALLIND", null, ["register:0:8"]]
- 00bfea5c ["INT_ADD", "register:40f0:8", ["const:bfea5c:8", "const:4:8"]]
- 00bfea5c ["CALL", null, ["callee:00c58370:8"]]
+ 00bfeaf8 ["INT_ADD", "register:40f0:8", ["const:bfeaf8:8", "const:4:8"]]
+ 00bfeaf8 ["CALL", null, ["callee:00c58370:8"]]
~~~


<a id="compare-5ebfb06603d0682e7b19804581ec55ff"></a>

### [`00bfea8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfe/00bfea8c.md) → [`00bfeb28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfeb28.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEElsEPFRNS_9basic_iosIcS2_EES6_E

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfeaac ["COPY", "register:0:8", ["register:4008:8"]]
- 00bfeaac ["INT_ADD", "register:40f0:8", ["const:bfeaac:8", "const:4:8"]]
- 00bfeaac ["CALLIND", null, ["register:0:8"]]
+ 00bfeb48 ["COPY", "register:0:8", ["register:4008:8"]]
+ 00bfeb48 ["INT_ADD", "register:40f0:8", ["const:bfeb48:8", "const:4:8"]]
+ 00bfeb48 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8c879348f058476266940f40e1fcc8f3"></a>

### [`00bfeac4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfe/00bfeac4.md) → [`00bfeb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfe/00bfeb60.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEElsEPFRNS_8ios_baseES5_E

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfeae4 ["COPY", "register:0:8", ["register:4008:8"]]
- 00bfeae4 ["INT_ADD", "register:40f0:8", ["const:bfeae4:8", "const:4:8"]]
- 00bfeae4 ["CALLIND", null, ["register:0:8"]]
+ 00bfeb80 ["COPY", "register:0:8", ["register:4008:8"]]
+ 00bfeb80 ["INT_ADD", "register:40f0:8", ["const:bfeb80:8", "const:4:8"]]
+ 00bfeb80 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-19b437e4bd4e8dafc929f370ea88b64d"></a>

### [`00bff464`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bff/00bff464.md) → [`00bff500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bff500.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEE3putEc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58260.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c582b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582b0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58330.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c58380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58380.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bff488 ["INT_ADD", "register:40f0:8", ["const:bff488:8", "const:4:8"]]
- 00bff488 ["CALL", null, ["callee:00c58330:8"]]
+ 00bff524 ["INT_ADD", "register:40f0:8", ["const:bff524:8", "const:4:8"]]
+ 00bff524 ["CALL", null, ["callee:00c58330:8"]]
- 00bff4d0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bff4d0 ["INT_ADD", "register:40f0:8", ["const:bff4d0:8", "const:4:8"]]
- 00bff4d0 ["CALLIND", null, ["register:0:8"]]
+ 00bff56c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bff56c ["INT_ADD", "register:40f0:8", ["const:bff56c:8", "const:4:8"]]
+ 00bff56c ["CALLIND", null, ["register:0:8"]]
- 00bff4f0 ["INT_ADD", "register:40f0:8", ["const:bff4f0:8", "const:4:8"]]
- 00bff4f0 ["CALL", null, ["callee:00c58370:8"]]
+ 00bff58c ["INT_ADD", "register:40f0:8", ["const:bff58c:8", "const:4:8"]]
+ 00bff58c ["CALL", null, ["callee:00c58370:8"]]
~~~


<a id="compare-6887a621684216cff1df078d35d7f9e8"></a>

### [`00bff55c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bff/00bff55c.md) → [`00bff5f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bff5f8.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEE5tellpEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bff5ac ["COPY", "register:0:8", ["register:4040:8"]]
- 00bff5ac ["INT_ADD", "register:40f0:8", ["const:bff5ac:8", "const:4:8"]]
- 00bff5ac ["CALLIND", null, ["register:0:8"]]
+ 00bff648 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bff648 ["INT_ADD", "register:40f0:8", ["const:bff648:8", "const:4:8"]]
+ 00bff648 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b1e981bddc9f7a7c0805e610f6c9cde9"></a>

### [`00bff5bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bff/00bff5bc.md) → [`00bff658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bff658.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEE5seekpENS_4fposI9mbstate_tEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58260.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c582b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582b0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58330.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c58380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58380.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bff5e8 ["INT_ADD", "register:40f0:8", ["const:bff5e8:8", "const:4:8"]]
- 00bff5e8 ["CALL", null, ["callee:00c58330:8"]]
+ 00bff684 ["INT_ADD", "register:40f0:8", ["const:bff684:8", "const:4:8"]]
+ 00bff684 ["CALL", null, ["callee:00c58330:8"]]
- 00bff620 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bff620 ["INT_ADD", "register:40f0:8", ["const:bff620:8", "const:4:8"]]
- 00bff620 ["CALLIND", null, ["register:0:8"]]
+ 00bff6bc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bff6bc ["INT_ADD", "register:40f0:8", ["const:bff6bc:8", "const:4:8"]]
+ 00bff6bc ["CALLIND", null, ["register:0:8"]]
- 00bff640 ["INT_ADD", "register:40f0:8", ["const:bff640:8", "const:4:8"]]
- 00bff640 ["CALL", null, ["callee:00c58370:8"]]
+ 00bff6dc ["INT_ADD", "register:40f0:8", ["const:bff6dc:8", "const:4:8"]]
+ 00bff6dc ["CALL", null, ["callee:00c58370:8"]]
~~~


<a id="compare-0c021626898b03a092c027f497c5a5ff"></a>

### [`00bff680`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bff/00bff680.md) → [`00bff71c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bff71c.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEE5seekpExNS_8ios_base7seekdirE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58260.md) [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c582b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582b0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58330.md) [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c58380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58380.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bff6ac ["INT_ADD", "register:40f0:8", ["const:bff6ac:8", "const:4:8"]]
- 00bff6ac ["CALL", null, ["callee:00c58330:8"]]
+ 00bff748 ["INT_ADD", "register:40f0:8", ["const:bff748:8", "const:4:8"]]
+ 00bff748 ["CALL", null, ["callee:00c58330:8"]]
- 00bff6e4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bff6e4 ["INT_ADD", "register:40f0:8", ["const:bff6e4:8", "const:4:8"]]
- 00bff6e4 ["CALLIND", null, ["register:0:8"]]
+ 00bff780 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bff780 ["INT_ADD", "register:40f0:8", ["const:bff780:8", "const:4:8"]]
+ 00bff780 ["CALLIND", null, ["register:0:8"]]
- 00bff704 ["INT_ADD", "register:40f0:8", ["const:bff704:8", "const:4:8"]]
- 00bff704 ["CALL", null, ["callee:00c58370:8"]]
+ 00bff7a0 ["INT_ADD", "register:40f0:8", ["const:bff7a0:8", "const:4:8"]]
+ 00bff7a0 ["CALL", null, ["callee:00c58370:8"]]
~~~


<a id="compare-a31ae82a7ec11e7d757c88448a760934"></a>

### [`00bff744`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bff/00bff744.md) → [`00bff7e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bff7e0.md) _ZNSt6__ndk114basic_iostreamIcNS_11char_traitsIcEEEC2EPNS_15basic_streambufIcS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c581e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581e0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bff78c ["INT_ADD", "register:40f0:8", ["const:bff78c:8", "const:4:8"]]
- 00bff78c ["CALL", null, ["callee:00c582b0:8"]]
+ 00bff828 ["INT_ADD", "register:40f0:8", ["const:bff828:8", "const:4:8"]]
+ 00bff828 ["CALL", null, ["callee:00c582b0:8"]]
~~~


<a id="compare-b7568001de0d390438c4324f1da8b6c6"></a>

### [`00bff8a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bff/00bff8a4.md) → [`00bff940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bff940.md) _ZNSt6__ndk114basic_iostreamIcNS_11char_traitsIcEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5d0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0e0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bff8bc ["INT_ADD", "register:40f0:8", ["const:bff8bc:8", "const:4:8"]]
- 00bff8bc ["CALL", null, ["callee:00c5d1b0:8"]]
+ 00bff958 ["INT_ADD", "register:40f0:8", ["const:bff958:8", "const:4:8"]]
+ 00bff958 ["CALL", null, ["callee:00c5d1b0:8"]]
~~~


<a id="compare-146c86b9a221854513b45ab4e54a231a"></a>

### [`00bff8d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bff/00bff8d4.md) → [`00bff970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bff970.md) _ZThn16_NSt6__ndk114basic_iostreamIcNS_11char_traitsIcEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5d0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0e0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bff8ec ["INT_ADD", "register:40f0:8", ["const:bff8ec:8", "const:4:8"]]
- 00bff8ec ["CALL", null, ["callee:00c5d1b0:8"]]
+ 00bff988 ["INT_ADD", "register:40f0:8", ["const:bff988:8", "const:4:8"]]
+ 00bff988 ["CALL", null, ["callee:00c5d1b0:8"]]
~~~


<a id="compare-8df7b6b519e0246f80fe3dc4998a77ab"></a>

### [`00bff904`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bff/00bff904.md) → [`00bff9a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bff9a0.md) _ZTv0_n24_NSt6__ndk114basic_iostreamIcNS_11char_traitsIcEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5d0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0e0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bff924 ["INT_ADD", "register:40f0:8", ["const:bff924:8", "const:4:8"]]
- 00bff924 ["CALL", null, ["callee:00c5d1b0:8"]]
+ 00bff9c0 ["INT_ADD", "register:40f0:8", ["const:bff9c0:8", "const:4:8"]]
+ 00bff9c0 ["CALL", null, ["callee:00c5d1b0:8"]]
~~~


<a id="compare-24c9b099c643002437751b2bfb67d403"></a>

### [`00bff93c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bff/00bff93c.md) → [`00bff9d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bff9d8.md) _ZNSt6__ndk114basic_iostreamIcNS_11char_traitsIcEEE4swapERS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e320.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5e3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bff974 ["INT_ADD", "register:40f0:8", ["const:bff974:8", "const:4:8"]]
- 00bff974 ["CALL", null, ["callee:00c5e3f0:8"]]
+ 00bffa10 ["INT_ADD", "register:40f0:8", ["const:bffa10:8", "const:4:8"]]
+ 00bffa10 ["CALL", null, ["callee:00c5e3f0:8"]]
~~~


<a id="compare-f5970bc3afa86b84d839a99274a846a5"></a>

### [`00bff9b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bff/00bff9b0.md) → [`00bffa4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bffa4c.md) _ZNSt6__ndk19basic_iosIwNS_11char_traitsIwEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5e3b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e3b0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e480.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bff9c4 ["INT_ADD", "register:40f0:8", ["const:bff9c4:8", "const:4:8"]]
- 00bff9c4 ["CALL", null, ["callee:00c5e480:8"]]
+ 00bffa60 ["INT_ADD", "register:40f0:8", ["const:bffa60:8", "const:4:8"]]
+ 00bffa60 ["CALL", null, ["callee:00c5e480:8"]]
~~~


<a id="compare-76f1ca43dbd212d5429f063c7976451c"></a>

### [`00bff9dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bff/00bff9dc.md) → [`00bffa78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bffa78.md) _ZNSt6__ndk19basic_iosIwNS_11char_traitsIwEEE7copyfmtERKS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e2d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e2d0.md) [`00c5e310`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e310.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e3a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3a0.md) [`00c5e3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bffa04 ["INT_ADD", "register:40f0:8", ["const:bffa04:8", "const:4:8"]]
- 00bffa04 ["CALL", null, ["callee:00c5e3a0:8"]]
+ 00bffaa0 ["INT_ADD", "register:40f0:8", ["const:bffaa0:8", "const:4:8"]]
+ 00bffaa0 ["CALL", null, ["callee:00c5e3a0:8"]]
- 00bffa10 ["INT_ADD", "register:40f0:8", ["const:bffa10:8", "const:4:8"]]
- 00bffa10 ["CALL", null, ["callee:00c5e3e0:8"]]
+ 00bffaac ["INT_ADD", "register:40f0:8", ["const:bffaac:8", "const:4:8"]]
+ 00bffaac ["CALL", null, ["callee:00c5e3e0:8"]]
- 00bffa2c ["INT_ADD", "register:40f0:8", ["const:bffa2c:8", "const:4:8"]]
- 00bffa2c ["CALL", null, ["callee:00c5e3a0:8"]]
+ 00bffac8 ["INT_ADD", "register:40f0:8", ["const:bffac8:8", "const:4:8"]]
+ 00bffac8 ["CALL", null, ["callee:00c5e3a0:8"]]
~~~


<a id="compare-75ae7d52c521e2d3f95164e6d1c51820"></a>

### [`00bffa70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bff/00bffa70.md) → [`00bffb0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bffb0c.md) _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5e3d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e3d0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5e4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bffa84 ["INT_ADD", "register:40f0:8", ["const:bffa84:8", "const:4:8"]]
- 00bffa84 ["CALL", null, ["callee:00c5e4a0:8"]]
+ 00bffb20 ["INT_ADD", "register:40f0:8", ["const:bffb20:8", "const:4:8"]]
+ 00bffb20 ["CALL", null, ["callee:00c5e4a0:8"]]
~~~


<a id="compare-930d82f9f14d214c4d75bfd379a24ed7"></a>

### [`00bffa9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bff/00bffa9c.md) → [`00bffb38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bffb38.md) _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEE8pubimbueERKNS_6localeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5a7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7d0.md) [`00c5e2e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e2e0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) [`00c5e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bffac4 ["COPY", "register:0:8", ["register:4048:8"]]
- 00bffac4 ["INT_ADD", "register:40f0:8", ["const:bffac4:8", "const:4:8"]]
- 00bffac4 ["CALLIND", null, ["register:0:8"]]
+ 00bffb60 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00bffb60 ["INT_ADD", "register:40f0:8", ["const:bffb60:8", "const:4:8"]]
+ 00bffb60 ["CALLIND", null, ["register:0:8"]]
- 00bffad0 ["INT_ADD", "register:40f0:8", ["const:bffad0:8", "const:4:8"]]
- 00bffad0 ["CALL", null, ["callee:00c5a8a0:8"]]
+ 00bffb6c ["INT_ADD", "register:40f0:8", ["const:bffb6c:8", "const:4:8"]]
+ 00bffb6c ["CALL", null, ["callee:00c5a8a0:8"]]
~~~


<a id="compare-17f2eb3821bf9eae173e882fcadee34f"></a>

### [`00bffb68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bff/00bffb68.md) → [`00bffc04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bffc04.md) _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEE6snextcEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bffbb4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bffbb4 ["INT_ADD", "register:40f0:8", ["const:bffbb4:8", "const:4:8"]]
- 00bffbb4 ["CALLIND", null, ["register:0:8"]]
+ 00bffc50 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bffc50 ["INT_ADD", "register:40f0:8", ["const:bffc50:8", "const:4:8"]]
+ 00bffc50 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b5d1f72c69485fe3caf4079bc5c9fe1f"></a>

### [`00bffda4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bff/00bffda4.md) → [`00bffe40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bffe40.md) _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEEaSERKS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e2e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e2e0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bffdc4 ["INT_ADD", "register:40f0:8", ["const:bffdc4:8", "const:4:8"]]
- 00bffdc4 ["CALL", null, ["callee:00c5e3b0:8"]]
+ 00bffe60 ["INT_ADD", "register:40f0:8", ["const:bffe60:8", "const:4:8"]]
+ 00bffe60 ["CALL", null, ["callee:00c5e3b0:8"]]
~~~


<a id="compare-b71dc83af5cf6a1159a2afa9a296b233"></a>

### [`00bffdf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bff/00bffdf4.md) → [`00bffe90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bffe90.md) _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEE4swapERS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5a7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7d0.md) [`00c5e2e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e2e0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) [`00c5e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bffe18 ["INT_ADD", "register:40f0:8", ["const:bffe18:8", "const:4:8"]]
- 00bffe18 ["CALL", null, ["callee:00c5a8a0:8"]]
+ 00bffeb4 ["INT_ADD", "register:40f0:8", ["const:bffeb4:8", "const:4:8"]]
+ 00bffeb4 ["CALL", null, ["callee:00c5a8a0:8"]]
- 00bffe24 ["INT_ADD", "register:40f0:8", ["const:bffe24:8", "const:4:8"]]
- 00bffe24 ["CALL", null, ["callee:00c5e3b0:8"]]
+ 00bffec0 ["INT_ADD", "register:40f0:8", ["const:bffec0:8", "const:4:8"]]
+ 00bffec0 ["CALL", null, ["callee:00c5e3b0:8"]]
- 00bffe30 ["INT_ADD", "register:40f0:8", ["const:bffe30:8", "const:4:8"]]
- 00bffe30 ["CALL", null, ["callee:00c5e3b0:8"]]
+ 00bffecc ["INT_ADD", "register:40f0:8", ["const:bffecc:8", "const:4:8"]]
+ 00bffecc ["CALL", null, ["callee:00c5e3b0:8"]]
~~~


<a id="compare-97453beba79cd46d73fa30fd9425cf52"></a>

### [`00bfff40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bff/00bfff40.md) → [`00bfffdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bff/00bfffdc.md) _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEE6xsgetnEPwl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bfffc4 ["INT_ADD", "register:40f0:8", ["const:bfffc4:8", "const:4:8"]]
- 00bfffc4 ["CALL", null, ["callee:00c58010:8"]]
+ 00c00060 ["INT_ADD", "register:40f0:8", ["const:c00060:8", "const:4:8"]]
+ 00c00060 ["CALL", null, ["callee:00c58010:8"]]
- 00bfffdc ["COPY", "register:0:8", ["register:4040:8"]]
- 00bfffdc ["INT_ADD", "register:40f0:8", ["const:bfffdc:8", "const:4:8"]]
- 00bfffdc ["CALLIND", null, ["register:0:8"]]
+ 00c00078 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c00078 ["INT_ADD", "register:40f0:8", ["const:c00078:8", "const:4:8"]]
+ 00c00078 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-bb7afa3f7e94829f169532ffb3127aa9"></a>

### [`00c00020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c00/00c00020.md) → [`00c000bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c000bc.md) _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEE5uflowEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0003c ["COPY", "register:0:8", ["register:4040:8"]]
- 00c0003c ["INT_ADD", "register:40f0:8", ["const:c0003c:8", "const:4:8"]]
- 00c0003c ["CALLIND", null, ["register:0:8"]]
+ 00c000d8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c000d8 ["INT_ADD", "register:40f0:8", ["const:c000d8:8", "const:4:8"]]
+ 00c000d8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-dd2d91a983bbae10adbc9e84de0cf921"></a>

### [`00c00070`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c00/00c00070.md) → [`00c0010c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c0010c.md) _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEE6xsputnEPKwl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c000ec ["INT_ADD", "register:40f0:8", ["const:c000ec:8", "const:4:8"]]
- 00c000ec ["CALL", null, ["callee:00c58010:8"]]
+ 00c00188 ["INT_ADD", "register:40f0:8", ["const:c00188:8", "const:4:8"]]
+ 00c00188 ["CALL", null, ["callee:00c58010:8"]]
- 00c00108 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c00108 ["INT_ADD", "register:40f0:8", ["const:c00108:8", "const:4:8"]]
- 00c00108 ["CALLIND", null, ["register:0:8"]]
+ 00c001a4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c001a4 ["INT_ADD", "register:40f0:8", ["const:c001a4:8", "const:4:8"]]
+ 00c001a4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b42a5e740b79b59371728c33d15fbbd8"></a>

### [`00c00154`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c00/00c00154.md) → [`00c001f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c001f0.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEEC2EPNS_15basic_streambufIwS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c581e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581e0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c00190 ["INT_ADD", "register:40f0:8", ["const:c00190:8", "const:4:8"]]
- 00c00190 ["CALL", null, ["callee:00c582b0:8"]]
+ 00c0022c ["INT_ADD", "register:40f0:8", ["const:c0022c:8", "const:4:8"]]
+ 00c0022c ["CALL", null, ["callee:00c582b0:8"]]
~~~


<a id="compare-cc3ea9bf254f2dbc3ee5e1f61d9399a9"></a>

### [`00c00248`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c00/00c00248.md) → [`00c002e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c002e4.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5d0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0e0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c00260 ["INT_ADD", "register:40f0:8", ["const:c00260:8", "const:4:8"]]
- 00c00260 ["CALL", null, ["callee:00c5d1b0:8"]]
+ 00c002fc ["INT_ADD", "register:40f0:8", ["const:c002fc:8", "const:4:8"]]
+ 00c002fc ["CALL", null, ["callee:00c5d1b0:8"]]
~~~


<a id="compare-f0009f493d5fd0134b7d180aa50b8bd5"></a>

### [`00c00278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c00/00c00278.md) → [`00c00314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c00314.md) _ZTv0_n24_NSt6__ndk113basic_istreamIwNS_11char_traitsIwEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5d0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0e0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c00298 ["INT_ADD", "register:40f0:8", ["const:c00298:8", "const:4:8"]]
- 00c00298 ["CALL", null, ["callee:00c5d1b0:8"]]
+ 00c00334 ["INT_ADD", "register:40f0:8", ["const:c00334:8", "const:4:8"]]
+ 00c00334 ["CALL", null, ["callee:00c5d1b0:8"]]
~~~


<a id="compare-16640453b28c70218b8239d75de7bbf7"></a>

### [`00c002b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c00/00c002b0.md) → [`00c0034c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c0034c.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE4swapERS3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e320.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5e3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e3f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c002e8 ["INT_ADD", "register:40f0:8", ["const:c002e8:8", "const:4:8"]]
- 00c002e8 ["CALL", null, ["callee:00c5e3f0:8"]]
+ 00c00384 ["INT_ADD", "register:40f0:8", ["const:c00384:8", "const:4:8"]]
+ 00c00384 ["CALL", null, ["callee:00c5e3f0:8"]]
~~~


<a id="compare-5538481e5a5deb397848af36b7099da4"></a>

### [`00c0050c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c00/00c0050c.md) → [`00c005a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c005a8.md) _ZNSt6__ndk113basic_ostreamIwNS_11char_traitsIwEEE5flushEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e3f0.md) · 呼出先 3件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e400.md) [`00c5e410`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e410.md)
- 新版 呼出元 1件 [`00c5e4c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4c0.md) · 呼出先 3件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4d0.md) [`00c5e4e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4e0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c00540 ["INT_ADD", "register:40f0:8", ["const:c00540:8", "const:4:8"]]
- 00c00540 ["CALL", null, ["callee:00c5e4d0:8"]]
+ 00c005dc ["INT_ADD", "register:40f0:8", ["const:c005dc:8", "const:4:8"]]
+ 00c005dc ["CALL", null, ["callee:00c5e4d0:8"]]
- 00c00564 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c00564 ["INT_ADD", "register:40f0:8", ["const:c00564:8", "const:4:8"]]
- 00c00564 ["CALLIND", null, ["register:0:8"]]
+ 00c00600 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c00600 ["INT_ADD", "register:40f0:8", ["const:c00600:8", "const:4:8"]]
+ 00c00600 ["CALLIND", null, ["register:0:8"]]
- 00c00584 ["INT_ADD", "register:40f0:8", ["const:c00584:8", "const:4:8"]]
- 00c00584 ["CALL", null, ["callee:00c58370:8"]]
+ 00c00620 ["INT_ADD", "register:40f0:8", ["const:c00620:8", "const:4:8"]]
+ 00c00620 ["CALL", null, ["callee:00c58370:8"]]
~~~


<a id="compare-2c4d66e0d302a488a5f9c2d7e69fcf11"></a>

### [`00c005fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c00/00c005fc.md) → [`00c00698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c00698.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEErsEPFRNS_9basic_iosIwS2_EES6_E

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0061c ["COPY", "register:0:8", ["register:4008:8"]]
- 00c0061c ["INT_ADD", "register:40f0:8", ["const:c0061c:8", "const:4:8"]]
- 00c0061c ["CALLIND", null, ["register:0:8"]]
+ 00c006b8 ["COPY", "register:0:8", ["register:4008:8"]]
+ 00c006b8 ["INT_ADD", "register:40f0:8", ["const:c006b8:8", "const:4:8"]]
+ 00c006b8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2a22bbec49ce3ffd419db71e63222ea0"></a>

### [`00c00634`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c00/00c00634.md) → [`00c006d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c006d0.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEErsEPFRNS_8ios_baseES5_E

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c00654 ["COPY", "register:0:8", ["register:4008:8"]]
- 00c00654 ["INT_ADD", "register:40f0:8", ["const:c00654:8", "const:4:8"]]
- 00c00654 ["CALLIND", null, ["register:0:8"]]
+ 00c006f0 ["COPY", "register:0:8", ["register:4008:8"]]
+ 00c006f0 ["INT_ADD", "register:40f0:8", ["const:c006f0:8", "const:4:8"]]
+ 00c006f0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-aa9f6e26020060bdc1148518cb3eec6f"></a>

### [`00c0066c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c00/00c0066c.md) → [`00c00708`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c00/00c00708.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEErsEPNS_15basic_streambufIwS2_EE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0069c ["INT_ADD", "register:40f0:8", ["const:c0069c:8", "const:4:8"]]
- 00c0069c ["CALL", null, ["callee:00c5e4f0:8"]]
+ 00c00738 ["INT_ADD", "register:40f0:8", ["const:c00738:8", "const:4:8"]]
+ 00c00738 ["CALL", null, ["callee:00c5e4f0:8"]]
- 00c00700 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c00700 ["INT_ADD", "register:40f0:8", ["const:c00700:8", "const:4:8"]]
- 00c00700 ["CALLIND", null, ["register:0:8"]]
+ 00c0079c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c0079c ["INT_ADD", "register:40f0:8", ["const:c0079c:8", "const:4:8"]]
+ 00c0079c ["CALLIND", null, ["register:0:8"]]
- 00c00734 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c00734 ["INT_ADD", "register:40f0:8", ["const:c00734:8", "const:4:8"]]
- 00c00734 ["CALLIND", null, ["register:0:8"]]
+ 00c007d0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c007d0 ["INT_ADD", "register:40f0:8", ["const:c007d0:8", "const:4:8"]]
+ 00c007d0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-958db8aa1d5cd5a500b8267889ece631"></a>

### [`00c01878`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c01/00c01878.md) → [`00c01914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c01914.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE3getEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e430.md) · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md)
- 新版 呼出元 1件 [`00c5e500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e500.md) · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c018a0 ["INT_ADD", "register:40f0:8", ["const:c018a0:8", "const:4:8"]]
- 00c018a0 ["CALL", null, ["callee:00c5e4f0:8"]]
+ 00c0193c ["INT_ADD", "register:40f0:8", ["const:c0193c:8", "const:4:8"]]
+ 00c0193c ["CALL", null, ["callee:00c5e4f0:8"]]
- 00c018f8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c018f8 ["INT_ADD", "register:40f0:8", ["const:c018f8:8", "const:4:8"]]
- 00c018f8 ["CALLIND", null, ["register:0:8"]]
+ 00c01994 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c01994 ["INT_ADD", "register:40f0:8", ["const:c01994:8", "const:4:8"]]
+ 00c01994 ["CALLIND", null, ["register:0:8"]]
- 00c01920 ["INT_ADD", "register:40f0:8", ["const:c01920:8", "const:4:8"]]
- 00c01920 ["CALL", null, ["callee:00c58370:8"]]
+ 00c019bc ["INT_ADD", "register:40f0:8", ["const:c019bc:8", "const:4:8"]]
+ 00c019bc ["CALL", null, ["callee:00c58370:8"]]
~~~


<a id="compare-158d3714dfe254fb152b1af909c217de"></a>

### [`00c01990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c01/00c01990.md) → [`00c01a2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c01a2c.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE3getERw

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5e430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e430.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5e500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e500.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c019a8 ["INT_ADD", "register:40f0:8", ["const:c019a8:8", "const:4:8"]]
- 00c019a8 ["CALL", null, ["callee:00c5e500:8"]]
+ 00c01a44 ["INT_ADD", "register:40f0:8", ["const:c01a44:8", "const:4:8"]]
+ 00c01a44 ["CALL", null, ["callee:00c5e500:8"]]
~~~


<a id="compare-9820db7872d98645fcece0e254bc303b"></a>

### [`00c01a70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c01/00c01a70.md) → [`00c01b0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c01b0c.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE3getEPwlw

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e440.md) · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md)
- 新版 呼出元 1件 [`00c5e510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e510.md) · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c01aac ["INT_ADD", "register:40f0:8", ["const:c01aac:8", "const:4:8"]]
- 00c01aac ["CALL", null, ["callee:00c5e4f0:8"]]
+ 00c01b48 ["INT_ADD", "register:40f0:8", ["const:c01b48:8", "const:4:8"]]
+ 00c01b48 ["CALL", null, ["callee:00c5e4f0:8"]]
- 00c01b24 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c01b24 ["INT_ADD", "register:40f0:8", ["const:c01b24:8", "const:4:8"]]
- 00c01b24 ["CALLIND", null, ["register:0:8"]]
+ 00c01bc0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c01bc0 ["INT_ADD", "register:40f0:8", ["const:c01bc0:8", "const:4:8"]]
+ 00c01bc0 ["CALLIND", null, ["register:0:8"]]
- 00c01b60 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c01b60 ["INT_ADD", "register:40f0:8", ["const:c01b60:8", "const:4:8"]]
- 00c01b60 ["CALLIND", null, ["register:0:8"]]
+ 00c01bfc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c01bfc ["INT_ADD", "register:40f0:8", ["const:c01bfc:8", "const:4:8"]]
+ 00c01bfc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-cb085973158ffb9ae88f60bbb07cb166"></a>

### [`00c01cd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c01/00c01cd4.md) → [`00c01d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c01d70.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE3getERNS_15basic_streambufIwS2_EEw

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e450`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e450.md) · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md)
- 新版 呼出元 1件 [`00c5e520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e520.md) · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c01d08 ["INT_ADD", "register:40f0:8", ["const:c01d08:8", "const:4:8"]]
- 00c01d08 ["CALL", null, ["callee:00c5e4f0:8"]]
+ 00c01da4 ["INT_ADD", "register:40f0:8", ["const:c01da4:8", "const:4:8"]]
+ 00c01da4 ["CALL", null, ["callee:00c5e4f0:8"]]
- 00c01d68 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c01d68 ["INT_ADD", "register:40f0:8", ["const:c01d68:8", "const:4:8"]]
- 00c01d68 ["CALLIND", null, ["register:0:8"]]
+ 00c01e04 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c01e04 ["INT_ADD", "register:40f0:8", ["const:c01e04:8", "const:4:8"]]
+ 00c01e04 ["CALLIND", null, ["register:0:8"]]
- 00c01da4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c01da4 ["INT_ADD", "register:40f0:8", ["const:c01da4:8", "const:4:8"]]
- 00c01da4 ["CALLIND", null, ["register:0:8"]]
+ 00c01e40 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c01e40 ["INT_ADD", "register:40f0:8", ["const:c01e40:8", "const:4:8"]]
+ 00c01e40 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-fe14cf8c9cac0115b3e17e4f885315c0"></a>

### [`00c01edc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c01/00c01edc.md) → [`00c01f78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c01/00c01f78.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE7getlineEPwlw

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5e460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e460.md) · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md)
- 新版 呼出元 1件 [`00c5e530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e530.md) · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c01f1c ["INT_ADD", "register:40f0:8", ["const:c01f1c:8", "const:4:8"]]
- 00c01f1c ["CALL", null, ["callee:00c5e4f0:8"]]
+ 00c01fb8 ["INT_ADD", "register:40f0:8", ["const:c01fb8:8", "const:4:8"]]
+ 00c01fb8 ["CALL", null, ["callee:00c5e4f0:8"]]
- 00c01f74 ["COPY", "register:0:8", ["register:4040:8"]]
- 00c01f74 ["INT_ADD", "register:40f0:8", ["const:c01f74:8", "const:4:8"]]
- 00c01f74 ["CALLIND", null, ["register:0:8"]]
+ 00c02010 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c02010 ["INT_ADD", "register:40f0:8", ["const:c02010:8", "const:4:8"]]
+ 00c02010 ["CALLIND", null, ["register:0:8"]]
- 00c01fbc ["COPY", "register:0:8", ["register:4040:8"]]
- 00c01fbc ["INT_ADD", "register:40f0:8", ["const:c01fbc:8", "const:4:8"]]
- 00c01fbc ["CALLIND", null, ["register:0:8"]]
+ 00c02058 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00c02058 ["INT_ADD", "register:40f0:8", ["const:c02058:8", "const:4:8"]]
+ 00c02058 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-3ba80d7d04713d71a4c03973d2f20fb0"></a>

### [`00c02118`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c02/00c02118.md) → [`00c021b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c02/00c021b4.md) _ZNSt6__ndk113basic_istreamIwNS_11char_traitsIwEEE6ignoreElj

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c582a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582a0.md) [`00c5e420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5e/00c5e420.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58370.md) [`00c5e4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e4f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00c0214c ["INT_ADD", "register:40f0:8", ["const:c0214c:8", "const:4:8"]]
- 00c0214c ["CALL", null, ["callee:00c5e4f0:8"]]
+ 00c021e8 ["INT_ADD", "register:40f0:8", ["const:c021e8:8", "const:4:8"]]
+ 00c021e8 ["CALL", null, ["callee:00c5e4f0:8"]]
- 00c021a4 ["COPY", "register:0:8", ["register:4048:8"]]
- 00c021a4 ["INT_ADD", "register:40f0:8", ["const:c021a4:8", "const:4:8"]]
- 00c021a4 ["CALLIND", null, ["register:0:8"]]
+ 00c02240 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00c02240 ["INT_ADD", "register:40f0:8", ["const:c02240:8", "const:4:8"]]
+ 00c02240 ["CALLIND", null, ["register:0:8"]]
- 00c0220c ["COPY", "register:0:8", ["register:4048:8"]]
- 00c0220c ["INT_ADD", "register:40f0:8", ["const:c0220c:8", "const:4:8"]]
- 00c0220c ["CALLIND", null, ["register:0:8"]]
+ 00c022a8 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00c022a8 ["INT_ADD", "register:40f0:8", ["const:c022a8:8", "const:4:8"]]
+ 00c022a8 ["CALLIND", null, ["register:0:8"]]
~~~


