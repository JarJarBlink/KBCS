# v16.0.1 → v16.0.2 · 要調査の変更候補 (39)

[一覧の目次](README.md)

<a id="compare-77c40b5ce4c473a8cf594f08641604d6"></a>

### [`00b6f2e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6f/00b6f2e4.md) → [`00b6f380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6f/00b6f380.md) _ZNK11flatbuffers6Parser15GetPooledStringERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 5件 [`0054a614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054a/0054a614.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5b5b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5b0.md) [`00c5b5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5e0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0054a654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054a/0054a654.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b6f320 ["INT_ADD", "register:40f0:8", ["const:b6f320:8", "const:4:8"]]
- 00b6f320 ["CALL", null, ["callee:0054a654:8"]]
+ 00b6f3bc ["INT_ADD", "register:40f0:8", ["const:b6f3bc:8", "const:4:8"]]
+ 00b6f3bc ["CALL", null, ["callee:0054a654:8"]]
- 00b6f334 ["INT_ADD", "register:40f0:8", ["const:b6f334:8", "const:4:8"]]
- 00b6f334 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b6f3d0 ["INT_ADD", "register:40f0:8", ["const:b6f3d0:8", "const:4:8"]]
+ 00b6f3d0 ["CALL", null, ["callee:00c57f60:8"]]
- 00b6f344 ["INT_ADD", "register:40f0:8", ["const:b6f344:8", "const:4:8"]]
- 00b6f344 ["CALL", null, ["callee:00c5b680:8"]]
+ 00b6f3e0 ["INT_ADD", "register:40f0:8", ["const:b6f3e0:8", "const:4:8"]]
+ 00b6f3e0 ["CALL", null, ["callee:00c5b680:8"]]
~~~


<a id="compare-5568b9bbbfb65344c6e8a0cc5e98f613"></a>

### [`00b6f3b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6f/00b6f3b8.md) → [`00b6f454`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6f/00b6f454.md) _ZNK11flatbuffers9Namespace21GetFullyQualifiedNameERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ca40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ca40.md) · 呼出先 4件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c5a8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8e0.md) [`00c5b5b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5b0.md)
- 新版 呼出元 1件 [`00c5cb10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cb10.md) · 呼出先 4件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c5a9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9b0.md) [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b6f4a0 ["INT_ADD", "register:40f0:8", ["const:b6f4a0:8", "const:4:8"]]
- 00b6f4a0 ["CALL", null, ["callee:00c58050:8"]]
+ 00b6f53c ["INT_ADD", "register:40f0:8", ["const:b6f53c:8", "const:4:8"]]
+ 00b6f53c ["CALL", null, ["callee:00c58050:8"]]
- 00b6f4ec ["INT_ADD", "register:40f0:8", ["const:b6f4ec:8", "const:4:8"]]
- 00b6f4ec ["CALL", null, ["callee:00c5a9b0:8"]]
+ 00b6f588 ["INT_ADD", "register:40f0:8", ["const:b6f588:8", "const:4:8"]]
+ 00b6f588 ["CALL", null, ["callee:00c5a9b0:8"]]
- 00b6f514 ["INT_ADD", "register:40f0:8", ["const:b6f514:8", "const:4:8"]]
- 00b6f514 ["CALL", null, ["callee:00c5b680:8"]]
+ 00b6f5b0 ["INT_ADD", "register:40f0:8", ["const:b6f5b0:8", "const:4:8"]]
+ 00b6f5b0 ["CALL", null, ["callee:00c5b680:8"]]
~~~


<a id="compare-82c5f73ad6ddf16066f050dc67397685"></a>

### [`00b71108`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b71/00b71108.md) → [`00b711a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b71/00b711a4.md) _ZNK11flatbuffers6Parser7IsIdentEPKc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7112c ["INT_ADD", "register:40f0:8", ["const:b7112c:8", "const:4:8"]]
- 00b7112c ["CALL", null, ["callee:00c580b0:8"]]
+ 00b711c8 ["INT_ADD", "register:40f0:8", ["const:b711c8:8", "const:4:8"]]
+ 00b711c8 ["CALL", null, ["callee:00c580b0:8"]]
- 00b71170 ["INT_ADD", "register:40f0:8", ["const:b71170:8", "const:4:8"]]
- 00b71170 ["CALL", null, ["callee:00c58120:8"]]
+ 00b7120c ["INT_ADD", "register:40f0:8", ["const:b7120c:8", "const:4:8"]]
+ 00b7120c ["CALL", null, ["callee:00c58120:8"]]
- 00b71198 ["INT_ADD", "register:40f0:8", ["const:b71198:8", "const:4:8"]]
- 00b71198 ["CALL", null, ["callee:00c5b210:8"]]
+ 00b71234 ["INT_ADD", "register:40f0:8", ["const:b71234:8", "const:4:8"]]
+ 00b71234 ["CALL", null, ["callee:00c5b210:8"]]
~~~


<a id="compare-828185edf2cdb25b6dae6fe7ecd8b4aa"></a>

### [`00b71900`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b71/00b71900.md) → [`00b7199c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b71/00b7199c.md) _ZNK11flatbuffers6Parser12LookupStructERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5cab0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cab0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5cb80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cb80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b71914 ["INT_ADD", "register:40f0:8", ["const:b71914:8", "const:4:8"]]
- 00b71914 ["CALL", null, ["callee:00c5cb80:8"]]
+ 00b719b0 ["INT_ADD", "register:40f0:8", ["const:b719b0:8", "const:4:8"]]
+ 00b719b0 ["CALL", null, ["callee:00c5cb80:8"]]
~~~


<a id="compare-20f1e0ce6ffce89304e069a5c28d0c45"></a>

### [`00b76a3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b76/00b76a3c.md) → [`00b76ad8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b76/00b76ad8.md) _ZNK11flatbuffers7EnumDef11FindByValueERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c9f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c9f0.md) · 呼出先 3件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5c1b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1b0.md) [`00c5c1c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1c0.md)
- 新版 呼出元 1件 [`00c5cac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cac0.md) · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5c280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c280.md) [`00c5c290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c290.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b76a8c ["INT_ADD", "register:40f0:8", ["const:b76a8c:8", "const:4:8"]]
- 00b76a8c ["CALL", null, ["callee:00c5c290:8"]]
+ 00b76b28 ["INT_ADD", "register:40f0:8", ["const:b76b28:8", "const:4:8"]]
+ 00b76b28 ["CALL", null, ["callee:00c5c290:8"]]
- 00b76ae0 ["INT_ADD", "register:40f0:8", ["const:b76ae0:8", "const:4:8"]]
- 00b76ae0 ["CALL", null, ["callee:00c5c280:8"]]
+ 00b76b7c ["INT_ADD", "register:40f0:8", ["const:b76b7c:8", "const:4:8"]]
+ 00b76b7c ["CALL", null, ["callee:00c5c280:8"]]
- 00b76b70 ["INT_ADD", "register:40f0:8", ["const:b76b70:8", "const:4:8"]]
- 00b76b70 ["CALL", null, ["callee:00c57fb0:8"]]
+ 00b76c0c ["INT_ADD", "register:40f0:8", ["const:b76c0c:8", "const:4:8"]]
+ 00b76c0c ["CALL", null, ["callee:00c57fb0:8"]]
~~~


<a id="compare-4aeb74e732c7d0d66990c267cb8c034e"></a>

### [`00b76b74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b76/00b76b74.md) → [`00b76c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b76/00b76c10.md) _ZN11flatbuffers11SymbolTableINS_5ValueEE3AddERKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEPS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c060`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c060.md) · 呼出先 9件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5c130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c130.md) · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b76c04 ["INT_ADD", "register:40f0:8", ["const:b76c04:8", "const:4:8"]]
- 00b76c04 ["CALL", null, ["callee:00c5b210:8"]]
+ 00b76ca0 ["INT_ADD", "register:40f0:8", ["const:b76ca0:8", "const:4:8"]]
+ 00b76ca0 ["CALL", null, ["callee:00c5b210:8"]]
- 00b76c10 ["INT_ADD", "register:40f0:8", ["const:b76c10:8", "const:4:8"]]
- 00b76c10 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b76cac ["INT_ADD", "register:40f0:8", ["const:b76cac:8", "const:4:8"]]
+ 00b76cac ["CALL", null, ["callee:00c57f60:8"]]
- 00b76c38 ["INT_ADD", "register:40f0:8", ["const:b76c38:8", "const:4:8"]]
- 00b76c38 ["CALL", null, ["callee:00c580d0:8"]]
+ 00b76cd4 ["INT_ADD", "register:40f0:8", ["const:b76cd4:8", "const:4:8"]]
+ 00b76cd4 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-b0229d95c7930a3a98b4241ed2cda68a"></a>

### [`00b77190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b77/00b77190.md) → [`00b7722c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b77/00b7722c.md) _ZN11flatbuffers6Parser11ParseStringERNS_5ValueEb

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c4d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c4d0.md) · 呼出先 9件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5c5a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c5a0.md) · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b77230 ["INT_ADD", "register:40f0:8", ["const:b77230:8", "const:4:8"]]
- 00b77230 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b772cc ["INT_ADD", "register:40f0:8", ["const:b772cc:8", "const:4:8"]]
+ 00b772cc ["CALL", null, ["callee:00c57f60:8"]]
- 00b77250 ["INT_ADD", "register:40f0:8", ["const:b77250:8", "const:4:8"]]
- 00b77250 ["CALL", null, ["callee:00c580d0:8"]]
+ 00b772ec ["INT_ADD", "register:40f0:8", ["const:b772ec:8", "const:4:8"]]
+ 00b772ec ["CALL", null, ["callee:00c580d0:8"]]
- 00b77264 ["INT_ADD", "register:40f0:8", ["const:b77264:8", "const:4:8"]]
- 00b77264 ["CALL", null, ["callee:00c5c820:8"]]
+ 00b77300 ["INT_ADD", "register:40f0:8", ["const:b77300:8", "const:4:8"]]
+ 00b77300 ["CALL", null, ["callee:00c5c820:8"]]
~~~


<a id="compare-528433a6af889de1eb1c949ca279597a"></a>

### [`00b774e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b77/00b774e8.md) → [`00b77584`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b77/00b77584.md) _ZN11flatbuffers6Parser10ParseCommaEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5c750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c750.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c820.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b77508 ["INT_ADD", "register:40f0:8", ["const:b77508:8", "const:4:8"]]
- 00b77508 ["CALL", null, ["callee:00c5c820:8"]]
+ 00b775a4 ["INT_ADD", "register:40f0:8", ["const:b775a4:8", "const:4:8"]]
+ 00b775a4 ["CALL", null, ["callee:00c5c820:8"]]
~~~


<a id="compare-8e4377a1ae7299f774f911271f239fe2"></a>

### [`00b7ced4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7c/00b7ced4.md) → [`00b7cf70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7c/00b7cf70.md) _ZN11flatbuffers6Parser15SerializeStructERNS_21FlatBufferBuilderImplILb0EEERKNS_9StructDefERKNS_5ValueE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c5c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c5c0.md) · 呼出先 2件 [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md)
- 新版 呼出元 1件 [`00c5c690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c690.md) · 呼出先 2件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7cf34 ["INT_ADD", "register:40f0:8", ["const:b7cf34:8", "const:4:8"]]
- 00b7cf34 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b7cfd0 ["INT_ADD", "register:40f0:8", ["const:b7cfd0:8", "const:4:8"]]
+ 00b7cfd0 ["CALL", null, ["callee:00c5c270:8"]]
- 00b7cfb8 ["INT_ADD", "register:40f0:8", ["const:b7cfb8:8", "const:4:8"]]
- 00b7cfb8 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b7d054 ["INT_ADD", "register:40f0:8", ["const:b7d054:8", "const:4:8"]]
+ 00b7d054 ["CALL", null, ["callee:00c5c270:8"]]
- 00b7cfdc ["INT_ADD", "register:40f0:8", ["const:b7cfdc:8", "const:4:8"]]
- 00b7cfdc ["CALL", null, ["callee:00c580d0:8"]]
+ 00b7d078 ["INT_ADD", "register:40f0:8", ["const:b7d078:8", "const:4:8"]]
+ 00b7d078 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-ae289cbdcc937823ffa19f50b78a1ffa"></a>

### [`00b7dc10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7d/00b7dc10.md) → [`00b7dcac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7d/00b7dcac.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE10AddElementItEEvtT_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c200.md) · 呼出先 1件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md)
- 新版 呼出元 1件 [`00c5c2d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c2d0.md) · 呼出先 1件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7dc68 ["INT_ADD", "register:40f0:8", ["const:b7dc68:8", "const:4:8"]]
- 00b7dc68 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b7dd04 ["INT_ADD", "register:40f0:8", ["const:b7dd04:8", "const:4:8"]]
+ 00b7dd04 ["CALL", null, ["callee:00c5c270:8"]]
- 00b7dca0 ["INT_ADD", "register:40f0:8", ["const:b7dca0:8", "const:4:8"]]
- 00b7dca0 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b7dd3c ["INT_ADD", "register:40f0:8", ["const:b7dd3c:8", "const:4:8"]]
+ 00b7dd3c ["CALL", null, ["callee:00c5c270:8"]]
- 00b7dcd4 ["INT_ADD", "register:40f0:8", ["const:b7dcd4:8", "const:4:8"]]
- 00b7dcd4 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b7dd70 ["INT_ADD", "register:40f0:8", ["const:b7dd70:8", "const:4:8"]]
+ 00b7dd70 ["CALL", null, ["callee:00c5c270:8"]]
~~~


<a id="compare-a17e48c08edf7f96cfb7438586daaa8a"></a>

### [`00b7dd24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7d/00b7dd24.md) → [`00b7ddc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7d/00b7ddc0.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE10AddElementItEEvtT_S3_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c210`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c210.md) · 呼出先 1件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md)
- 新版 呼出元 1件 [`00c5c2e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c2e0.md) · 呼出先 1件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7dd90 ["INT_ADD", "register:40f0:8", ["const:b7dd90:8", "const:4:8"]]
- 00b7dd90 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b7de2c ["INT_ADD", "register:40f0:8", ["const:b7de2c:8", "const:4:8"]]
+ 00b7de2c ["CALL", null, ["callee:00c5c270:8"]]
- 00b7ddc8 ["INT_ADD", "register:40f0:8", ["const:b7ddc8:8", "const:4:8"]]
- 00b7ddc8 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b7de64 ["INT_ADD", "register:40f0:8", ["const:b7de64:8", "const:4:8"]]
+ 00b7de64 ["CALL", null, ["callee:00c5c270:8"]]
- 00b7ddfc ["INT_ADD", "register:40f0:8", ["const:b7ddfc:8", "const:4:8"]]
- 00b7ddfc ["CALL", null, ["callee:00c5c270:8"]]
+ 00b7de98 ["INT_ADD", "register:40f0:8", ["const:b7de98:8", "const:4:8"]]
+ 00b7de98 ["CALL", null, ["callee:00c5c270:8"]]
~~~


<a id="compare-7b38546360f7f74b990cd65d2eb3fc25"></a>

### [`00b7e870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7e/00b7e870.md) → [`00b7e90c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7e/00b7e90c.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE11PushElementIljEET0_T_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c260.md) · 呼出先 1件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md)
- 新版 呼出元 1件 [`00c5c330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c330.md) · 呼出先 1件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7e8c8 ["INT_ADD", "register:40f0:8", ["const:b7e8c8:8", "const:4:8"]]
- 00b7e8c8 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b7e964 ["INT_ADD", "register:40f0:8", ["const:b7e964:8", "const:4:8"]]
+ 00b7e964 ["CALL", null, ["callee:00c5c270:8"]]
- 00b7e924 ["INT_ADD", "register:40f0:8", ["const:b7e924:8", "const:4:8"]]
- 00b7e924 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b7e9c0 ["INT_ADD", "register:40f0:8", ["const:b7e9c0:8", "const:4:8"]]
+ 00b7e9c0 ["CALL", null, ["callee:00c5c270:8"]]
~~~


<a id="compare-ca6fa014f999ef1fac9f4cbf0e91f51d"></a>

### [`00b7ed84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7e/00b7ed84.md) → [`00b7ee20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7e/00b7ee20.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE11PushElementImjEET0_T_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c270.md) · 呼出先 1件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md)
- 新版 呼出元 1件 [`00c5c340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c340.md) · 呼出先 1件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7eddc ["INT_ADD", "register:40f0:8", ["const:b7eddc:8", "const:4:8"]]
- 00b7eddc ["CALL", null, ["callee:00c5c270:8"]]
+ 00b7ee78 ["INT_ADD", "register:40f0:8", ["const:b7ee78:8", "const:4:8"]]
+ 00b7ee78 ["CALL", null, ["callee:00c5c270:8"]]
- 00b7ee38 ["INT_ADD", "register:40f0:8", ["const:b7ee38:8", "const:4:8"]]
- 00b7ee38 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b7eed4 ["INT_ADD", "register:40f0:8", ["const:b7eed4:8", "const:4:8"]]
+ 00b7eed4 ["CALL", null, ["callee:00c5c270:8"]]
~~~


<a id="compare-06cee3d69cfaa2c45864ab3b7d708ac0"></a>

### [`00b7f064`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7f/00b7f064.md) → [`00b7f100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7f/00b7f100.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE11PushElementIfjEET0_T_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c230`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c230.md) · 呼出先 1件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md)
- 新版 呼出元 1件 [`00c5c300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c300.md) · 呼出先 1件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7f0bc ["INT_ADD", "register:40f0:8", ["const:b7f0bc:8", "const:4:8"]]
- 00b7f0bc ["CALL", null, ["callee:00c5c270:8"]]
+ 00b7f158 ["INT_ADD", "register:40f0:8", ["const:b7f158:8", "const:4:8"]]
+ 00b7f158 ["CALL", null, ["callee:00c5c270:8"]]
- 00b7f118 ["INT_ADD", "register:40f0:8", ["const:b7f118:8", "const:4:8"]]
- 00b7f118 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b7f1b4 ["INT_ADD", "register:40f0:8", ["const:b7f1b4:8", "const:4:8"]]
+ 00b7f1b4 ["CALL", null, ["callee:00c5c270:8"]]
~~~


<a id="compare-d395977c92b6e87a162de911fd192f43"></a>

### [`00b7f350`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7f/00b7f350.md) → [`00b7f3ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7f/00b7f3ec.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE11PushElementIdjEET0_T_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c220.md) · 呼出先 1件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md)
- 新版 呼出元 1件 [`00c5c2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c2f0.md) · 呼出先 1件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7f3a8 ["INT_ADD", "register:40f0:8", ["const:b7f3a8:8", "const:4:8"]]
- 00b7f3a8 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b7f444 ["INT_ADD", "register:40f0:8", ["const:b7f444:8", "const:4:8"]]
+ 00b7f444 ["CALL", null, ["callee:00c5c270:8"]]
- 00b7f404 ["INT_ADD", "register:40f0:8", ["const:b7f404:8", "const:4:8"]]
- 00b7f404 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b7f4a0 ["INT_ADD", "register:40f0:8", ["const:b7f4a0:8", "const:4:8"]]
+ 00b7f4a0 ["CALL", null, ["callee:00c5c270:8"]]
~~~


<a id="compare-9535298d15c2e434f6e4d26194234d4e"></a>

### [`00b7f434`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7f/00b7f434.md) → [`00b7f4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7f/00b7f4d0.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE9AddOffsetIvEEvtNS_8Offset64IT_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c420.md) · 呼出先 2件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md) [`00c5c270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c270.md)
- 新版 呼出元 1件 [`00c5c4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c4f0.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c340.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7f494 ["INT_ADD", "register:40f0:8", ["const:b7f494:8", "const:4:8"]]
- 00b7f494 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b7f530 ["INT_ADD", "register:40f0:8", ["const:b7f530:8", "const:4:8"]]
+ 00b7f530 ["CALL", null, ["callee:00c5c270:8"]]
- 00b7f4f0 ["INT_ADD", "register:40f0:8", ["const:b7f4f0:8", "const:4:8"]]
- 00b7f4f0 ["CALL", null, ["callee:00c5c340:8"]]
+ 00b7f58c ["INT_ADD", "register:40f0:8", ["const:b7f58c:8", "const:4:8"]]
+ 00b7f58c ["CALL", null, ["callee:00c5c340:8"]]
- 00b7f514 ["INT_ADD", "register:40f0:8", ["const:b7f514:8", "const:4:8"]]
- 00b7f514 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b7f5b0 ["INT_ADD", "register:40f0:8", ["const:b7f5b0:8", "const:4:8"]]
+ 00b7f5b0 ["CALL", null, ["callee:00c5c270:8"]]
~~~


<a id="compare-bd2dce8bde3f76ada0ce07930a2422c9"></a>

### [`00b7f564`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7f/00b7f564.md) → [`00b7f600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7f/00b7f600.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE9AddOffsetIvEEvtNS_6OffsetIT_EE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c410`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c410.md) · 呼出先 2件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md) [`00c5c250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c250.md)
- 新版 呼出元 1件 [`00c5c4e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c4e0.md) · 呼出先 2件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7f5c4 ["INT_ADD", "register:40f0:8", ["const:b7f5c4:8", "const:4:8"]]
- 00b7f5c4 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b7f660 ["INT_ADD", "register:40f0:8", ["const:b7f660:8", "const:4:8"]]
+ 00b7f660 ["CALL", null, ["callee:00c5c270:8"]]
- 00b7f620 ["INT_ADD", "register:40f0:8", ["const:b7f620:8", "const:4:8"]]
- 00b7f620 ["CALL", null, ["callee:00c5c320:8"]]
+ 00b7f6bc ["INT_ADD", "register:40f0:8", ["const:b7f6bc:8", "const:4:8"]]
+ 00b7f6bc ["CALL", null, ["callee:00c5c320:8"]]
- 00b7f644 ["INT_ADD", "register:40f0:8", ["const:b7f644:8", "const:4:8"]]
- 00b7f644 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b7f6e0 ["INT_ADD", "register:40f0:8", ["const:b7f6e0:8", "const:4:8"]]
+ 00b7f6e0 ["CALL", null, ["callee:00c5c270:8"]]
~~~


<a id="compare-de86e62206fba6681e624ffad50bc695"></a>

### [`00b7f694`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7f/00b7f694.md) → [`00b7f730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7f/00b7f730.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE8EndTableEj

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c340`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c340.md) · 呼出先 4件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c58090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58090.md) [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md) [`00c5c240`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c240.md)
- 新版 呼出元 1件 [`00c5c410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c410.md) · 呼出先 4件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md) [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c310.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7f6bc ["INT_ADD", "register:40f0:8", ["const:b7f6bc:8", "const:4:8"]]
- 00b7f6bc ["CALL", null, ["callee:00c5c310:8"]]
+ 00b7f758 ["INT_ADD", "register:40f0:8", ["const:b7f758:8", "const:4:8"]]
+ 00b7f758 ["CALL", null, ["callee:00c5c310:8"]]
- 00b7f700 ["INT_ADD", "register:40f0:8", ["const:b7f700:8", "const:4:8"]]
- 00b7f700 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b7f79c ["INT_ADD", "register:40f0:8", ["const:b7f79c:8", "const:4:8"]]
+ 00b7f79c ["CALL", null, ["callee:00c5c270:8"]]
- 00b7f724 ["INT_ADD", "register:40f0:8", ["const:b7f724:8", "const:4:8"]]
- 00b7f724 ["CALL", null, ["callee:00c58160:8"]]
+ 00b7f7c0 ["INT_ADD", "register:40f0:8", ["const:b7f7c0:8", "const:4:8"]]
+ 00b7f7c0 ["CALL", null, ["callee:00c58160:8"]]
~~~


<a id="compare-b4018aa58a3f241135db9a91fb961793"></a>

### [`00b7fcfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7f/00b7fcfc.md) → [`00b7fd98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7f/00b7fd98.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE11StartVectorINS_6OffsetEjEEvmmm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c280.md) · 呼出先 1件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md)
- 新版 呼出元 1件 [`00c5c350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c350.md) · 呼出先 1件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7fd68 ["INT_ADD", "register:40f0:8", ["const:b7fd68:8", "const:4:8"]]
- 00b7fd68 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b7fe04 ["INT_ADD", "register:40f0:8", ["const:b7fe04:8", "const:4:8"]]
+ 00b7fe04 ["CALL", null, ["callee:00c5c270:8"]]
- 00b7fdec ["INT_ADD", "register:40f0:8", ["const:b7fdec:8", "const:4:8"]]
- 00b7fdec ["CALL", null, ["callee:00c5c270:8"]]
+ 00b7fe88 ["INT_ADD", "register:40f0:8", ["const:b7fe88:8", "const:4:8"]]
+ 00b7fe88 ["CALL", null, ["callee:00c5c270:8"]]
~~~


<a id="compare-56ac51c74e7ea2235baa943ca46ddbc4"></a>

### [`00b7fe3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7f/00b7fe3c.md) → [`00b7fed8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7f/00b7fed8.md) FUN_00b7fed8

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00b7b278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7b/00b7b278.md) [`00b7fe3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7f/00b7fe3c.md) · 呼出先 2件 [`00b7fe3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7f/00b7fe3c.md) [`00baaf0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00baa/00baaf0c.md)
- 新版 呼出元 2件 [`00b7b314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7b/00b7b314.md) [`00b7fed8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7f/00b7fed8.md) · 呼出先 2件 [`00b7fed8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7f/00b7fed8.md) [`00baafa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baa/00baafa8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b7feb8 ["INT_ADD", "register:40f0:8", ["const:b7feb8:8", "const:4:8"]]
- 00b7feb8 ["CALL", null, ["local:b0:8"]]
+ 00b7ff54 ["INT_ADD", "register:40f0:8", ["const:b7ff54:8", "const:4:8"]]
+ 00b7ff54 ["CALL", null, ["local:b0:8"]]
- 00b7ff00 ["INT_ADD", "register:40f0:8", ["const:b7ff00:8", "const:4:8"]]
- 00b7ff00 ["CALL", null, ["callee:00baafa8:8"]]
+ 00b7ff9c ["INT_ADD", "register:40f0:8", ["const:b7ff9c:8", "const:4:8"]]
+ 00b7ff9c ["CALL", null, ["callee:00baafa8:8"]]
~~~


<a id="compare-97bd883a00d63bc7a3fb8a7742eb9c52"></a>

### [`00b80078`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b80/00b80078.md) → [`00b80114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b80/00b80114.md) FUN_00b80114

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00b7b278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7b/00b7b278.md) [`00b80078`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b80/00b80078.md) · 呼出先 2件 [`00b80078`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b80/00b80078.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 2件 [`00b7b314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7b/00b7b314.md) [`00b80114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b80/00b80114.md) · 呼出先 2件 [`00b80114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b80/00b80114.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b800e8 ["INT_ADD", "register:40f0:8", ["const:b800e8:8", "const:4:8"]]
- 00b800e8 ["CALL", null, ["local:b0:8"]]
+ 00b80184 ["INT_ADD", "register:40f0:8", ["const:b80184:8", "const:4:8"]]
+ 00b80184 ["CALL", null, ["local:b0:8"]]
- 00b801a0 ["INT_ADD", "register:40f0:8", ["const:b801a0:8", "const:4:8"]]
- 00b801a0 ["CALL", null, ["callee:00c58120:8"]]
+ 00b8023c ["INT_ADD", "register:40f0:8", ["const:b8023c:8", "const:4:8"]]
+ 00b8023c ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-7cebaa113970ff545df65de2ff29ac90"></a>

### [`00b80218`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b80/00b80218.md) → [`00b802b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b80/00b802b4.md) FUN_00b802b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 2件 [`00b7b278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7b/00b7b278.md) [`00b80218`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b80/00b80218.md) · 呼出先 2件 [`00b80218`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b80/00b80218.md) [`00baaf0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00baa/00baaf0c.md)
- 新版 呼出元 2件 [`00b7b314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7b/00b7b314.md) [`00b802b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b80/00b802b4.md) · 呼出先 2件 [`00b802b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b80/00b802b4.md) [`00baafa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baa/00baafa8.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b8027c ["INT_ADD", "register:40f0:8", ["const:b8027c:8", "const:4:8"]]
- 00b8027c ["CALL", null, ["local:b0:8"]]
+ 00b80318 ["INT_ADD", "register:40f0:8", ["const:b80318:8", "const:4:8"]]
+ 00b80318 ["CALL", null, ["local:b0:8"]]
- 00b80318 ["INT_ADD", "register:40f0:8", ["const:b80318:8", "const:4:8"]]
- 00b80318 ["CALL", null, ["callee:00baafa8:8"]]
+ 00b803b4 ["INT_ADD", "register:40f0:8", ["const:b803b4:8", "const:4:8"]]
+ 00b803b4 ["CALL", null, ["callee:00baafa8:8"]]
~~~


<a id="compare-610610002ed10285dfd015d36e99a5c6"></a>

### [`00b807c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b80/00b807c4.md) → [`00b80860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b80/00b80860.md) _ZN11flatbuffers10IDLOptionsaSERKS0_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5bfa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bfa0.md) · 呼出先 2件 [`00c5b0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0b0.md) [`00c5d030`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d030.md)
- 新版 呼出元 1件 [`00c5c070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c070.md) · 呼出先 2件 [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md) [`00c5d100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d100.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b80810 ["INT_ADD", "register:40f0:8", ["const:b80810:8", "const:4:8"]]
- 00b80810 ["CALL", null, ["callee:00c5b180:8"]]
+ 00b808ac ["INT_ADD", "register:40f0:8", ["const:b808ac:8", "const:4:8"]]
+ 00b808ac ["CALL", null, ["callee:00c5b180:8"]]
- 00b80834 ["INT_ADD", "register:40f0:8", ["const:b80834:8", "const:4:8"]]
- 00b80834 ["CALL", null, ["callee:00c5b180:8"]]
+ 00b808d0 ["INT_ADD", "register:40f0:8", ["const:b808d0:8", "const:4:8"]]
+ 00b808d0 ["CALL", null, ["callee:00c5b180:8"]]
- 00b80868 ["INT_ADD", "register:40f0:8", ["const:b80868:8", "const:4:8"]]
- 00b80868 ["CALL", null, ["callee:00c5b180:8"]]
+ 00b80904 ["INT_ADD", "register:40f0:8", ["const:b80904:8", "const:4:8"]]
+ 00b80904 ["CALL", null, ["callee:00c5b180:8"]]
~~~


<a id="compare-188ca96edb02c66dbef599d500363d97"></a>

### [`00b80be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b80/00b80be8.md) → [`00b80c84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b80/00b80c84.md) _ZN11flatbuffers6Parser5ParseEPKcPS2_S2_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5bf10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bf10.md) · 呼出先 5件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5c5b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c5b0.md) [`00c5c6a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c6a0.md) [`00c5c7c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c7c0.md) [`00c5c8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c8e0.md)
- 新版 呼出元 1件 [`00c5bfe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bfe0.md) · 呼出先 5件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5c680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c680.md) [`00c5c770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c770.md) [`00c5c890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c890.md) [`00c5c9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c9b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b80c20 ["INT_ADD", "register:40f0:8", ["const:b80c20:8", "const:4:8"]]
- 00b80c20 ["CALL", null, ["callee:00c5c680:8"]]
+ 00b80cbc ["INT_ADD", "register:40f0:8", ["const:b80cbc:8", "const:4:8"]]
+ 00b80cbc ["CALL", null, ["callee:00c5c680:8"]]
- 00b80c44 ["INT_ADD", "register:40f0:8", ["const:b80c44:8", "const:4:8"]]
- 00b80c44 ["CALL", null, ["callee:00c5c770:8"]]
+ 00b80ce0 ["INT_ADD", "register:40f0:8", ["const:b80ce0:8", "const:4:8"]]
+ 00b80ce0 ["CALL", null, ["callee:00c5c770:8"]]
- 00b80c60 ["INT_ADD", "register:40f0:8", ["const:b80c60:8", "const:4:8"]]
- 00b80c60 ["CALL", null, ["callee:00c5c890:8"]]
+ 00b80cfc ["INT_ADD", "register:40f0:8", ["const:b80cfc:8", "const:4:8"]]
+ 00b80cfc ["CALL", null, ["callee:00c5c890:8"]]
~~~


<a id="compare-4c18816f0040dea495660f9256226c8c"></a>

### [`00b80ca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b80/00b80ca8.md) → [`00b80d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b80/00b80d44.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE12CreateVectorIhNS_6OffsetENS_6VectorEEET0_IJT1_IJT_EEEEPKS7_m

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c290.md) · 呼出先 3件 [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md) [`00c5c250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c250.md)
- 新版 呼出元 1件 [`00c5c360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c360.md) · 呼出先 3件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b80d14 ["INT_ADD", "register:40f0:8", ["const:b80d14:8", "const:4:8"]]
- 00b80d14 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b80db0 ["INT_ADD", "register:40f0:8", ["const:b80db0:8", "const:4:8"]]
+ 00b80db0 ["CALL", null, ["callee:00c5c270:8"]]
- 00b80d80 ["INT_ADD", "register:40f0:8", ["const:b80d80:8", "const:4:8"]]
- 00b80d80 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b80e1c ["INT_ADD", "register:40f0:8", ["const:b80e1c:8", "const:4:8"]]
+ 00b80e1c ["CALL", null, ["callee:00c5c270:8"]]
- 00b80da4 ["INT_ADD", "register:40f0:8", ["const:b80da4:8", "const:4:8"]]
- 00b80da4 ["CALL", null, ["callee:00c580d0:8"]]
+ 00b80e40 ["INT_ADD", "register:40f0:8", ["const:b80e40:8", "const:4:8"]]
+ 00b80e40 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-4b824da575cfcc1a2e1d178c7f5ec857"></a>

### [`00b8277c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b82/00b8277c.md) → [`00b82818`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b82/00b82818.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6insertEmmc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cae0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cae0.md) · 呼出先 4件 [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c58090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58090.md) [`00c5a8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8e0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5cbb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cbb0.md) · 呼出先 4件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md) [`00c5a9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9b0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b82808 ["INT_ADD", "register:40f0:8", ["const:b82808:8", "const:4:8"]]
- 00b82808 ["CALL", null, ["callee:00c5a9b0:8"]]
+ 00b828a4 ["INT_ADD", "register:40f0:8", ["const:b828a4:8", "const:4:8"]]
+ 00b828a4 ["CALL", null, ["callee:00c5a9b0:8"]]
- 00b8283c ["INT_ADD", "register:40f0:8", ["const:b8283c:8", "const:4:8"]]
- 00b8283c ["CALL", null, ["callee:00c58010:8"]]
+ 00b828d8 ["INT_ADD", "register:40f0:8", ["const:b828d8:8", "const:4:8"]]
+ 00b828d8 ["CALL", null, ["callee:00c58010:8"]]
- 00b8284c ["INT_ADD", "register:40f0:8", ["const:b8284c:8", "const:4:8"]]
- 00b8284c ["CALL", null, ["callee:00c58160:8"]]
+ 00b828e8 ["INT_ADD", "register:40f0:8", ["const:b828e8:8", "const:4:8"]]
+ 00b828e8 ["CALL", null, ["callee:00c58160:8"]]
~~~


<a id="compare-07ee8af26a928bd7ddca9791f80f6130"></a>

### [`00b8288c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b82/00b8288c.md) → [`00b82928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b82/00b82928.md) _ZN11flatbuffers11SymbolTableINS_9StructDefEE3AddERKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEPS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c0b0.md) · 呼出先 9件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5c180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c180.md) · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b8291c ["INT_ADD", "register:40f0:8", ["const:b8291c:8", "const:4:8"]]
- 00b8291c ["CALL", null, ["callee:00c5b210:8"]]
+ 00b829b8 ["INT_ADD", "register:40f0:8", ["const:b829b8:8", "const:4:8"]]
+ 00b829b8 ["CALL", null, ["callee:00c5b210:8"]]
- 00b82928 ["INT_ADD", "register:40f0:8", ["const:b82928:8", "const:4:8"]]
- 00b82928 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b829c4 ["INT_ADD", "register:40f0:8", ["const:b829c4:8", "const:4:8"]]
+ 00b829c4 ["CALL", null, ["callee:00c57f60:8"]]
- 00b82950 ["INT_ADD", "register:40f0:8", ["const:b82950:8", "const:4:8"]]
- 00b82950 ["CALL", null, ["callee:00c580d0:8"]]
+ 00b829ec ["INT_ADD", "register:40f0:8", ["const:b829ec:8", "const:4:8"]]
+ 00b829ec ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-d92e0232bf05459c78efdb24e13c7af3"></a>

### [`00b862ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b86/00b862ac.md) → [`00b86348`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b86/00b86348.md) FUN_00b86348

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b8543c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b85/00b8543c.md) · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a930.md) [`00c5ca70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ca70.md)
- 新版 呼出元 1件 [`00b854d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b85/00b854d8.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aa00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aa00.md) [`00c5cb40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cb40.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b862f8 ["INT_ADD", "register:40f0:8", ["const:b862f8:8", "const:4:8"]]
- 00b862f8 ["CALL", null, ["callee:00c5cb40:8"]]
+ 00b86394 ["INT_ADD", "register:40f0:8", ["const:b86394:8", "const:4:8"]]
+ 00b86394 ["CALL", null, ["callee:00c5cb40:8"]]
- 00b8632c ["INT_ADD", "register:40f0:8", ["const:b8632c:8", "const:4:8"]]
- 00b8632c ["CALL", null, ["callee:00c5aa00:8"]]
+ 00b863c8 ["INT_ADD", "register:40f0:8", ["const:b863c8:8", "const:4:8"]]
+ 00b863c8 ["CALL", null, ["callee:00c5aa00:8"]]
- 00b86340 ["INT_ADD", "register:40f0:8", ["const:b86340:8", "const:4:8"]]
- 00b86340 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b863dc ["INT_ADD", "register:40f0:8", ["const:b863dc:8", "const:4:8"]]
+ 00b863dc ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-f49b21b0e0c054bd792741e9048d8dc1"></a>

### [`00b871b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b87/00b871b4.md) → [`00b87250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b87/00b87250.md) _ZN11flatbuffers6Parser11SetRootTypeEPKc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c4f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c4f0.md) · 呼出先 8件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00c5c5c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c5c0.md) · 呼出先 8件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b871f4 ["INT_ADD", "register:40f0:8", ["const:b871f4:8", "const:4:8"]]
- 00b871f4 ["CALL", null, ["callee:00c580b0:8"]]
+ 00b87290 ["INT_ADD", "register:40f0:8", ["const:b87290:8", "const:4:8"]]
+ 00b87290 ["CALL", null, ["callee:00c580b0:8"]]
- 00b87230 ["INT_ADD", "register:40f0:8", ["const:b87230:8", "const:4:8"]]
- 00b87230 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b872cc ["INT_ADD", "register:40f0:8", ["const:b872cc:8", "const:4:8"]]
+ 00b872cc ["CALL", null, ["callee:00c57f60:8"]]
- 00b87250 ["INT_ADD", "register:40f0:8", ["const:b87250:8", "const:4:8"]]
- 00b87250 ["CALL", null, ["callee:00c580d0:8"]]
+ 00b872ec ["INT_ADD", "register:40f0:8", ["const:b872ec:8", "const:4:8"]]
+ 00b872ec ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-8ed60d3935d4ff5f89a6d50dbd7b4ed5"></a>

### [`00b8b16c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8b/00b8b16c.md) → [`00b8b208`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8b/00b8b208.md) _ZN11flatbuffers6Parser15ParseFlexBufferEPKcS2_PN11flexbuffers7BuilderE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5c5b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c5b0.md) [`00c5c6a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c6a0.md) [`00c5c8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c8e0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5c680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c680.md) [`00c5c770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c770.md) [`00c5c9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c9b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b8b198 ["INT_ADD", "register:40f0:8", ["const:b8b198:8", "const:4:8"]]
- 00b8b198 ["CALL", null, ["callee:00c5c680:8"]]
+ 00b8b234 ["INT_ADD", "register:40f0:8", ["const:b8b234:8", "const:4:8"]]
+ 00b8b234 ["CALL", null, ["callee:00c5c680:8"]]
- 00b8b1b8 ["INT_ADD", "register:40f0:8", ["const:b8b1b8:8", "const:4:8"]]
- 00b8b1b8 ["CALL", null, ["callee:00c5c770:8"]]
+ 00b8b254 ["INT_ADD", "register:40f0:8", ["const:b8b254:8", "const:4:8"]]
+ 00b8b254 ["CALL", null, ["callee:00c5c770:8"]]
- 00b8b1f0 ["INT_ADD", "register:40f0:8", ["const:b8b1f0:8", "const:4:8"]]
- 00b8b1f0 ["CALL", null, ["callee:00c5c9b0:8"]]
+ 00b8b28c ["INT_ADD", "register:40f0:8", ["const:b8b28c:8", "const:4:8"]]
+ 00b8b28c ["CALL", null, ["callee:00c5c9b0:8"]]
~~~


<a id="compare-5e29f14ecffd8c3e316bfa1e2e491908"></a>

### [`00b8ed70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8e/00b8ed70.md) → [`00b8ee0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8e/00b8ee0c.md) _ZNK11flatbuffers9StructDef9SerializeEPNS_21FlatBufferBuilderImplILb0EEERKNS_6ParserE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ca50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ca50.md) · 呼出先 13件 [`00b92e98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b92/00b92e98.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00c5cb20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cb20.md) · 呼出先 13件 [`00b92f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b92/00b92f34.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b8ede8 ["INT_ADD", "register:40f0:8", ["const:b8ede8:8", "const:4:8"]]
- 00b8ede8 ["CALL", null, ["callee:00c5cb00:8"]]
+ 00b8ee84 ["INT_ADD", "register:40f0:8", ["const:b8ee84:8", "const:4:8"]]
+ 00b8ee84 ["CALL", null, ["callee:00c5cb00:8"]]
- 00b8ee4c ["INT_ADD", "register:40f0:8", ["const:b8ee4c:8", "const:4:8"]]
- 00b8ee4c ["CALL", null, ["callee:00c57f60:8"]]
+ 00b8eee8 ["INT_ADD", "register:40f0:8", ["const:b8eee8:8", "const:4:8"]]
+ 00b8eee8 ["CALL", null, ["callee:00c57f60:8"]]
- 00b8ee74 ["INT_ADD", "register:40f0:8", ["const:b8ee74:8", "const:4:8"]]
- 00b8ee74 ["CALL", null, ["callee:00c580d0:8"]]
+ 00b8ef10 ["INT_ADD", "register:40f0:8", ["const:b8ef10:8", "const:4:8"]]
+ 00b8ef10 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-ed4d50e80706aa052df6f8e321fa39db"></a>

### [`00b929c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b92/00b929c4.md) → [`00b92a60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b92/00b92a60.md) _ZN11flatbuffers7EnumVal11DeserializeERNS_6ParserEPKN10reflection7EnumValE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c820`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c820.md) · 呼出先 7件 [`00b93150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b93/00b93150.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00c5c8f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c8f0.md) · 呼出先 7件 [`00b931ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b93/00b931ec.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b92a4c ["INT_ADD", "register:40f0:8", ["const:b92a4c:8", "const:4:8"]]
- 00b92a4c ["CALL", null, ["callee:00c57f60:8"]]
+ 00b92ae8 ["INT_ADD", "register:40f0:8", ["const:b92ae8:8", "const:4:8"]]
+ 00b92ae8 ["CALL", null, ["callee:00c57f60:8"]]
- 00b92a6c ["INT_ADD", "register:40f0:8", ["const:b92a6c:8", "const:4:8"]]
- 00b92a6c ["CALL", null, ["callee:00c580d0:8"]]
+ 00b92b08 ["INT_ADD", "register:40f0:8", ["const:b92b08:8", "const:4:8"]]
+ 00b92b08 ["CALL", null, ["callee:00c580d0:8"]]
- 00b92a9c ["INT_ADD", "register:40f0:8", ["const:b92a9c:8", "const:4:8"]]
- 00b92a9c ["CALL", null, ["callee:00c57f80:8"]]
+ 00b92b38 ["INT_ADD", "register:40f0:8", ["const:b92b38:8", "const:4:8"]]
+ 00b92b38 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-6d8ffcba00dd74d3166fec65841505a8"></a>

### [`00b93504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b93/00b93504.md) → [`00b935a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b93/00b935a0.md) _ZN10reflection13CreateEnumValERN11flatbuffers21FlatBufferBuilderImplILb0EEENS0_6OffsetINS0_6StringEEElNS4_INS_4TypeEEENS4_INS0_6VectorIS6_j

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5bf90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bf90.md) · 呼出先 7件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md) [`00c5c260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c260.md) [`00c5c340`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c340.md) [`00c5c350`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c350.md) [`00c5c370`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c370.md)
- 新版 呼出元 1件 [`00c5c060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c060.md) · 呼出先 7件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c330.md) [`00c5c410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c410.md) [`00c5c420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c420.md) [`00c5c440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c440.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b93550 ["INT_ADD", "register:40f0:8", ["const:b93550:8", "const:4:8"]]
- 00b93550 ["CALL", null, ["callee:00c5c330:8"]]
+ 00b935ec ["INT_ADD", "register:40f0:8", ["const:b935ec:8", "const:4:8"]]
+ 00b935ec ["CALL", null, ["callee:00c5c330:8"]]
- 00b93574 ["INT_ADD", "register:40f0:8", ["const:b93574:8", "const:4:8"]]
- 00b93574 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b93610 ["INT_ADD", "register:40f0:8", ["const:b93610:8", "const:4:8"]]
+ 00b93610 ["CALL", null, ["callee:00c5c270:8"]]
- 00b935c0 ["INT_ADD", "register:40f0:8", ["const:b935c0:8", "const:4:8"]]
- 00b935c0 ["CALL", null, ["callee:00c5c4c0:8"]]
+ 00b9365c ["INT_ADD", "register:40f0:8", ["const:b9365c:8", "const:4:8"]]
+ 00b9365c ["CALL", null, ["callee:00c5c4c0:8"]]
~~~


<a id="compare-82c12ef65500806b6cca8abd4de66b05"></a>

### [`00b9361c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b93/00b9361c.md) → [`00b936b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b93/00b936b8.md) _ZN10reflection10CreateTypeERN11flatbuffers21FlatBufferBuilderImplILb0EEENS_8BaseTypeES4_itjj

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5bf50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bf50.md) · 呼出先 6件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md) [`00c5c1d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1d0.md) [`00c5c210`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c210.md) [`00c5c240`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c240.md) [`00c5c250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c250.md)
- 新版 呼出元 1件 [`00c5c020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c020.md) · 呼出先 6件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c2a0.md) [`00c5c2e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c2e0.md) [`00c5c310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c310.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9366c ["INT_ADD", "register:40f0:8", ["const:b9366c:8", "const:4:8"]]
- 00b9366c ["CALL", null, ["callee:00c5c320:8"]]
+ 00b93708 ["INT_ADD", "register:40f0:8", ["const:b93708:8", "const:4:8"]]
+ 00b93708 ["CALL", null, ["callee:00c5c320:8"]]
- 00b93690 ["INT_ADD", "register:40f0:8", ["const:b93690:8", "const:4:8"]]
- 00b93690 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b9372c ["INT_ADD", "register:40f0:8", ["const:b9372c:8", "const:4:8"]]
+ 00b9372c ["CALL", null, ["callee:00c5c270:8"]]
- 00b936f4 ["INT_ADD", "register:40f0:8", ["const:b936f4:8", "const:4:8"]]
- 00b936f4 ["CALL", null, ["callee:00c5c320:8"]]
+ 00b93790 ["INT_ADD", "register:40f0:8", ["const:b93790:8", "const:4:8"]]
+ 00b93790 ["CALL", null, ["callee:00c5c320:8"]]
~~~


<a id="compare-dc1710ea7a61bb5d2a9bf062bb6f14c3"></a>

### [`00b94d40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b94/00b94d40.md) → [`00b94ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b94/00b94ddc.md) FUN_00b94ddc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b93a64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b93/00b93a64.md) · 呼出先 11件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fd0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00b93b00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b93/00b93b00.md) · 呼出先 11件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580a0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b94e08 ["INT_ADD", "register:40f0:8", ["const:b94e08:8", "const:4:8"]]
- 00b94e08 ["CALL", null, ["callee:00c5d030:8"]]
+ 00b94ea4 ["INT_ADD", "register:40f0:8", ["const:b94ea4:8", "const:4:8"]]
+ 00b94ea4 ["CALL", null, ["callee:00c5d030:8"]]
- 00b94e28 ["INT_ADD", "register:40f0:8", ["const:b94e28:8", "const:4:8"]]
- 00b94e28 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b94ec4 ["INT_ADD", "register:40f0:8", ["const:b94ec4:8", "const:4:8"]]
+ 00b94ec4 ["CALL", null, ["callee:00c57f60:8"]]
- 00b94e90 ["INT_ADD", "register:40f0:8", ["const:b94e90:8", "const:4:8"]]
- 00b94e90 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b94f2c ["INT_ADD", "register:40f0:8", ["const:b94f2c:8", "const:4:8"]]
+ 00b94f2c ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-c79a20d25430ddf7354d25bc5fad8e4f"></a>

### [`00b95b48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b95/00b95b48.md) → [`00b95be4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b95/00b95be4.md) _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEmc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5be70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be70.md) · 呼出先 2件 [`00c58090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58090.md) [`00c5a8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8e0.md)
- 新版 呼出元 1件 [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md) · 呼出先 2件 [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md) [`00c5a9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b95bb4 ["INT_ADD", "register:40f0:8", ["const:b95bb4:8", "const:4:8"]]
- 00b95bb4 ["CALL", null, ["callee:00c5a9b0:8"]]
+ 00b95c50 ["INT_ADD", "register:40f0:8", ["const:b95c50:8", "const:4:8"]]
+ 00b95c50 ["CALL", null, ["callee:00c5a9b0:8"]]
- 00b95bd8 ["INT_ADD", "register:40f0:8", ["const:b95bd8:8", "const:4:8"]]
- 00b95bd8 ["CALL", null, ["callee:00c58160:8"]]
+ 00b95c74 ["INT_ADD", "register:40f0:8", ["const:b95c74:8", "const:4:8"]]
+ 00b95c74 ["CALL", null, ["callee:00c58160:8"]]
~~~


<a id="compare-1c8e9f7bf645f7ff6825eaef63b8b583"></a>

### [`00b98c08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b98c08.md) → [`00b98ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b98ca4.md) _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5d0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0e0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b98c1c ["INT_ADD", "register:40f0:8", ["const:b98c1c:8", "const:4:8"]]
- 00b98c1c ["CALL", null, ["callee:00c5d1b0:8"]]
+ 00b98cb8 ["INT_ADD", "register:40f0:8", ["const:b98cb8:8", "const:4:8"]]
+ 00b98cb8 ["CALL", null, ["callee:00c5d1b0:8"]]
~~~


<a id="compare-8a472cc16c1f9c2a1b296ca72cb6e370"></a>

### [`00b98c44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b98c44.md) → [`00b98ce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b98ce0.md) _ZTv0_n24_NSt6__ndk113basic_istreamIcNS_11char_traitsIcEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5d0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0e0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b98c60 ["INT_ADD", "register:40f0:8", ["const:b98c60:8", "const:4:8"]]
- 00b98c60 ["CALL", null, ["callee:00c5d1b0:8"]]
+ 00b98cfc ["INT_ADD", "register:40f0:8", ["const:b98cfc:8", "const:4:8"]]
+ 00b98cfc ["CALL", null, ["callee:00c5d1b0:8"]]
~~~


<a id="compare-3fba2e73302309872cdfc68b7cac5678"></a>

### [`00b990c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b99/00b990c4.md) → [`00b99160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b99/00b99160.md) _ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEE6xsgetnEPcl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b99144 ["INT_ADD", "register:40f0:8", ["const:b99144:8", "const:4:8"]]
- 00b99144 ["CALL", null, ["callee:00c580d0:8"]]
+ 00b991e0 ["INT_ADD", "register:40f0:8", ["const:b991e0:8", "const:4:8"]]
+ 00b991e0 ["CALL", null, ["callee:00c580d0:8"]]
- 00b99158 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b99158 ["INT_ADD", "register:40f0:8", ["const:b99158:8", "const:4:8"]]
- 00b99158 ["CALLIND", null, ["register:0:8"]]
+ 00b991f4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b991f4 ["INT_ADD", "register:40f0:8", ["const:b991f4:8", "const:4:8"]]
+ 00b991f4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-473d0101c366e5654c86330b7de66f58"></a>

### [`00b991dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b99/00b991dc.md) → [`00b99278`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b99/00b99278.md) _ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEE5uflowEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b991f4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b991f4 ["INT_ADD", "register:40f0:8", ["const:b991f4:8", "const:4:8"]]
- 00b991f4 ["CALLIND", null, ["register:0:8"]]
+ 00b99290 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b99290 ["INT_ADD", "register:40f0:8", ["const:b99290:8", "const:4:8"]]
+ 00b99290 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-1fcb44d68aa23f28f50b446e2babcb4b"></a>

### [`00b9928c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b99/00b9928c.md) → [`00b99328`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b99/00b99328.md) _ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEE6xsputnEPKcl

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b99300 ["INT_ADD", "register:40f0:8", ["const:b99300:8", "const:4:8"]]
- 00b99300 ["CALL", null, ["callee:00c580d0:8"]]
+ 00b9939c ["INT_ADD", "register:40f0:8", ["const:b9939c:8", "const:4:8"]]
+ 00b9939c ["CALL", null, ["callee:00c580d0:8"]]
- 00b99318 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b99318 ["INT_ADD", "register:40f0:8", ["const:b99318:8", "const:4:8"]]
- 00b99318 ["CALLIND", null, ["register:0:8"]]
+ 00b993b4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b993b4 ["INT_ADD", "register:40f0:8", ["const:b993b4:8", "const:4:8"]]
+ 00b993b4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2da566ae1977dcb90d5eee51393a19f2"></a>

### [`00b9a9d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9a/00b9a9d4.md) → [`00b9aa70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9a/00b9aa70.md) _ZNSt6__ndk118__insertion_sort_3IRZN11flexbuffers7Builder6EndMapEmEUlRKZNS2_6EndMapEmE8TwoValueS5_E_PS3_EEvT0_S9_T_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cc10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cc10.md) · 呼出先 2件 [`00c5b850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b850.md) [`00c5d090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d090.md)
- 新版 呼出元 1件 [`00c5cce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cce0.md) · 呼出先 2件 [`00c5b920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b920.md) [`00c5d160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d160.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9aa0c ["INT_ADD", "register:40f0:8", ["const:b9aa0c:8", "const:4:8"]]
- 00b9aa0c ["CALL", null, ["callee:00c5d160:8"]]
+ 00b9aaa8 ["INT_ADD", "register:40f0:8", ["const:b9aaa8:8", "const:4:8"]]
+ 00b9aaa8 ["CALL", null, ["callee:00c5d160:8"]]
- 00b9aa5c ["INT_ADD", "register:40f0:8", ["const:b9aa5c:8", "const:4:8"]]
- 00b9aa5c ["CALL", null, ["callee:00c5b920:8"]]
+ 00b9aaf8 ["INT_ADD", "register:40f0:8", ["const:b9aaf8:8", "const:4:8"]]
+ 00b9aaf8 ["CALL", null, ["callee:00c5b920:8"]]
- 00b9aaa0 ["INT_ADD", "register:40f0:8", ["const:b9aaa0:8", "const:4:8"]]
- 00b9aaa0 ["CALL", null, ["callee:00c5b920:8"]]
+ 00b9ab3c ["INT_ADD", "register:40f0:8", ["const:b9ab3c:8", "const:4:8"]]
+ 00b9ab3c ["CALL", null, ["callee:00c5b920:8"]]
~~~


<a id="compare-3127137523e452b2e7734284f9c2389f"></a>

### [`00b9b818`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9b/00b9b818.md) → [`00b9b8b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9b/00b9b8b4.md) _ZNSt6__ndk16__treeINS_4pairImmEEN11flexbuffers7Builder19StringOffsetCompareENS_9allocatorIS2_EEE25__emplace_unique_key_argsIS2_JRKS2_EEENS1

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cfc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cfc0.md) · 呼出先 3件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5b5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5e0.md)
- 新版 呼出元 1件 [`00c5d090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d090.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9b87c ["INT_ADD", "register:40f0:8", ["const:b9b87c:8", "const:4:8"]]
- 00b9b87c ["CALL", null, ["callee:00c58120:8"]]
+ 00b9b918 ["INT_ADD", "register:40f0:8", ["const:b9b918:8", "const:4:8"]]
+ 00b9b918 ["CALL", null, ["callee:00c58120:8"]]
- 00b9b8b8 ["INT_ADD", "register:40f0:8", ["const:b9b8b8:8", "const:4:8"]]
- 00b9b8b8 ["CALL", null, ["callee:00c58120:8"]]
+ 00b9b954 ["INT_ADD", "register:40f0:8", ["const:b9b954:8", "const:4:8"]]
+ 00b9b954 ["CALL", null, ["callee:00c58120:8"]]
- 00b9b908 ["INT_ADD", "register:40f0:8", ["const:b9b908:8", "const:4:8"]]
- 00b9b908 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b9b9a4 ["INT_ADD", "register:40f0:8", ["const:b9b9a4:8", "const:4:8"]]
+ 00b9b9a4 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-a3f19dd7539b9e8d87e18a37484d03f5"></a>

### [`00b9caa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9c/00b9caa4.md) → [`00b9cb40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9c/00b9cb40.md) _ZNSt6__ndk113__stable_sortIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection8KeyValueEEEPNS1_6OffsetIS6_EEEEvT

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cb40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cb40.md) · 呼出先 4件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5cb40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cb40.md) [`00c5cbd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cbd0.md) [`00c5cc70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cc70.md)
- 新版 呼出元 1件 [`00c5cc10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc10.md) · 呼出先 4件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cc10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc10.md) [`00c5cca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cca0.md) [`00c5cd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cd40.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9cb40 ["INT_ADD", "register:40f0:8", ["const:b9cb40:8", "const:4:8"]]
- 00b9cb40 ["CALL", null, ["callee:00c58120:8"]]
+ 00b9cbdc ["INT_ADD", "register:40f0:8", ["const:b9cbdc:8", "const:4:8"]]
+ 00b9cbdc ["CALL", null, ["callee:00c58120:8"]]
- 00b9cc2c ["INT_ADD", "register:40f0:8", ["const:b9cc2c:8", "const:4:8"]]
- 00b9cc2c ["CALL", null, ["callee:00c58120:8"]]
+ 00b9ccc8 ["INT_ADD", "register:40f0:8", ["const:b9ccc8:8", "const:4:8"]]
+ 00b9ccc8 ["CALL", null, ["callee:00c58120:8"]]
- 00b9cc94 ["INT_ADD", "register:40f0:8", ["const:b9cc94:8", "const:4:8"]]
- 00b9cc94 ["CALL", null, ["callee:00c5cc10:8"]]
+ 00b9cd30 ["INT_ADD", "register:40f0:8", ["const:b9cd30:8", "const:4:8"]]
+ 00b9cd30 ["CALL", null, ["callee:00c5cc10:8"]]
~~~


<a id="compare-4b298d706d233cd9ce7f27f7b5822cb2"></a>

### [`00b9dbd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9d/00b9dbd8.md) → [`00b9dc74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9d/00b9dc74.md) _ZNSt6__ndk120__half_inplace_mergeIN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection8KeyValueEEEPNS1_6OffsetIS6_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ccd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ccd0.md) · 呼出先 2件 [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cda0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cda0.md) · 呼出先 2件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9dc9c ["INT_ADD", "register:40f0:8", ["const:b9dc9c:8", "const:4:8"]]
- 00b9dc9c ["CALL", null, ["callee:00c58120:8"]]
+ 00b9dd38 ["INT_ADD", "register:40f0:8", ["const:b9dd38:8", "const:4:8"]]
+ 00b9dd38 ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-bfc3fd90b7909d4c7805771c3f229448"></a>

### [`00b9dd10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9d/00b9dd10.md) → [`00b9ddac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9d/00b9ddac.md) FUN_00b9ddac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b9d31c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b9d/00b9d31c.md) · 呼出先 1件 [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 1件 [`00b9d3b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b9d/00b9d3b8.md) · 呼出先 1件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b9ddd0 ["INT_ADD", "register:40f0:8", ["const:b9ddd0:8", "const:4:8"]]
- 00b9ddd0 ["CALL", null, ["callee:00c58010:8"]]
+ 00b9de6c ["INT_ADD", "register:40f0:8", ["const:b9de6c:8", "const:4:8"]]
+ 00b9de6c ["CALL", null, ["callee:00c58010:8"]]
- 00b9ddfc ["INT_ADD", "register:40f0:8", ["const:b9ddfc:8", "const:4:8"]]
- 00b9ddfc ["CALL", null, ["callee:00c58010:8"]]
+ 00b9de98 ["INT_ADD", "register:40f0:8", ["const:b9de98:8", "const:4:8"]]
+ 00b9de98 ["CALL", null, ["callee:00c58010:8"]]
~~~


<a id="compare-3759512f9e4d2998a6cc5c0bfd251dcc"></a>

### [`00ba199c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba1/00ba199c.md) → [`00ba1a38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba1/00ba1a38.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers9NamespaceEEENS_19__map_value

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cf60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cf60.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5d030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d030.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba1a38 ["INT_ADD", "register:40f0:8", ["const:ba1a38:8", "const:4:8"]]
- 00ba1a38 ["CALL", null, ["callee:00c58120:8"]]
+ 00ba1ad4 ["INT_ADD", "register:40f0:8", ["const:ba1ad4:8", "const:4:8"]]
+ 00ba1ad4 ["CALL", null, ["callee:00c58120:8"]]
- 00ba1a78 ["INT_ADD", "register:40f0:8", ["const:ba1a78:8", "const:4:8"]]
- 00ba1a78 ["CALL", null, ["callee:00c58120:8"]]
+ 00ba1b14 ["INT_ADD", "register:40f0:8", ["const:ba1b14:8", "const:4:8"]]
+ 00ba1b14 ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-7a906da7fc0e42887a733fc52fc5b4da"></a>

### [`00ba2b50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba2/00ba2b50.md) → [`00ba2bec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba2/00ba2bec.md) _ZNSt6__ndk115__inplace_mergeIRN11flatbuffers21FlatBufferBuilderImplILb0EE18TableKeyComparatorIN10reflection5FieldEEEPNS1_6OffsetIS6_EEEEvT0

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cba0.md) · 呼出先 4件 [`00ba3544`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ba3/00ba3544.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5cba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cba0.md) [`00c5cd60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cd60.md)
- 新版 呼出元 1件 [`00c5cc70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc70.md) · 呼出先 4件 [`00ba35e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ba3/00ba35e0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cc70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cc70.md) [`00c5ce30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ce30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00ba2c1c ["INT_ADD", "register:40f0:8", ["const:ba2c1c:8", "const:4:8"]]
- 00ba2c1c ["CALL", null, ["callee:00c58120:8"]]
+ 00ba2cb8 ["INT_ADD", "register:40f0:8", ["const:ba2cb8:8", "const:4:8"]]
+ 00ba2cb8 ["CALL", null, ["callee:00c58120:8"]]
- 00ba2cf4 ["INT_ADD", "register:40f0:8", ["const:ba2cf4:8", "const:4:8"]]
- 00ba2cf4 ["CALL", null, ["callee:00c58120:8"]]
+ 00ba2d90 ["INT_ADD", "register:40f0:8", ["const:ba2d90:8", "const:4:8"]]
+ 00ba2d90 ["CALL", null, ["callee:00c58120:8"]]
- 00ba2de0 ["INT_ADD", "register:40f0:8", ["const:ba2de0:8", "const:4:8"]]
- 00ba2de0 ["CALL", null, ["callee:00c58120:8"]]
+ 00ba2e7c ["INT_ADD", "register:40f0:8", ["const:ba2e7c:8", "const:4:8"]]
+ 00ba2e7c ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-bcde5646db60a284409d65d0175931d8"></a>

### [`00bae86c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bae/00bae86c.md) → [`00bae908`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00bae908.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers7EnumValEEENS_19__map_value_c

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cf10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cf10.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cfe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cfe0.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bae904 ["INT_ADD", "register:40f0:8", ["const:bae904:8", "const:4:8"]]
- 00bae904 ["CALL", null, ["callee:00c58120:8"]]
+ 00bae9a0 ["INT_ADD", "register:40f0:8", ["const:bae9a0:8", "const:4:8"]]
+ 00bae9a0 ["CALL", null, ["callee:00c58120:8"]]
- 00bae94c ["INT_ADD", "register:40f0:8", ["const:bae94c:8", "const:4:8"]]
- 00bae94c ["CALL", null, ["callee:00c58120:8"]]
+ 00bae9e8 ["INT_ADD", "register:40f0:8", ["const:bae9e8:8", "const:4:8"]]
+ 00bae9e8 ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-5ec2b571d0386ce5a96ede43ed8482a5"></a>

### [`00bae980`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bae/00bae980.md) → [`00baea1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00baea1c.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers7EnumValEEENS_19__map_value_c

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cf00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cf00.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cfd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cfd0.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00baea1c ["INT_ADD", "register:40f0:8", ["const:baea1c:8", "const:4:8"]]
- 00baea1c ["CALL", null, ["callee:00c58120:8"]]
+ 00baeab8 ["INT_ADD", "register:40f0:8", ["const:baeab8:8", "const:4:8"]]
+ 00baeab8 ["CALL", null, ["callee:00c58120:8"]]
- 00baea5c ["INT_ADD", "register:40f0:8", ["const:baea5c:8", "const:4:8"]]
- 00baea5c ["CALL", null, ["callee:00c58120:8"]]
+ 00baeaf8 ["INT_ADD", "register:40f0:8", ["const:baeaf8:8", "const:4:8"]]
+ 00baeaf8 ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-670c34508eee0e97947f2191fb5320ab"></a>

### [`00baeaa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bae/00baeaa0.md) → [`00baeb3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00baeb3c.md) _ZNSt6__ndk16__treeINS_4pairIN11flatbuffers8BaseTypeEPNS2_9StructDefEEENS_4lessIS6_EENS_9allocatorIS6_EEE7destroyEPNS_11__tree_nodeIS6_PvEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cfb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cfb0.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5cfb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cfb0.md)
- 新版 呼出元 1件 [`00c5d080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d080.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d080.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00baeabc ["INT_ADD", "register:40f0:8", ["const:baeabc:8", "const:4:8"]]
- 00baeabc ["CALL", null, ["callee:00c5d080:8"]]
+ 00baeb58 ["INT_ADD", "register:40f0:8", ["const:baeb58:8", "const:4:8"]]
+ 00baeb58 ["CALL", null, ["callee:00c5d080:8"]]
- 00baeac8 ["INT_ADD", "register:40f0:8", ["const:baeac8:8", "const:4:8"]]
- 00baeac8 ["CALL", null, ["callee:00c5d080:8"]]
+ 00baeb64 ["INT_ADD", "register:40f0:8", ["const:baeb64:8", "const:4:8"]]
+ 00baeb64 ["CALL", null, ["callee:00c5d080:8"]]
~~~


<a id="compare-3c7fd51b104f3cf348b294283d998dd7"></a>

### [`00baebf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bae/00baebf4.md) → [`00baec90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00baec90.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers4TypeEEENS_19__map_value_comp

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ce80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ce80.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cf50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cf50.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00baec90 ["INT_ADD", "register:40f0:8", ["const:baec90:8", "const:4:8"]]
- 00baec90 ["CALL", null, ["callee:00c58120:8"]]
+ 00baed2c ["INT_ADD", "register:40f0:8", ["const:baed2c:8", "const:4:8"]]
+ 00baed2c ["CALL", null, ["callee:00c58120:8"]]
- 00baecd0 ["INT_ADD", "register:40f0:8", ["const:baecd0:8", "const:4:8"]]
- 00baecd0 ["CALL", null, ["callee:00c58120:8"]]
+ 00baed6c ["INT_ADD", "register:40f0:8", ["const:baed6c:8", "const:4:8"]]
+ 00baed6c ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-fe69244121f6817490c4463b1a6fd39d"></a>

### [`00baed14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bae/00baed14.md) → [`00baedb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00baedb0.md) _ZNKSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_3setIN11flatbuffers12IncludedFileENS_4le

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ca60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ca60.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cb30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cb30.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00baedac ["INT_ADD", "register:40f0:8", ["const:baedac:8", "const:4:8"]]
- 00baedac ["CALL", null, ["callee:00c58120:8"]]
+ 00baee48 ["INT_ADD", "register:40f0:8", ["const:baee48:8", "const:4:8"]]
+ 00baee48 ["CALL", null, ["callee:00c58120:8"]]
- 00baedf4 ["INT_ADD", "register:40f0:8", ["const:baedf4:8", "const:4:8"]]
- 00baedf4 ["CALL", null, ["callee:00c58120:8"]]
+ 00baee90 ["INT_ADD", "register:40f0:8", ["const:baee90:8", "const:4:8"]]
+ 00baee90 ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-d58568f37efaaeca73766e8abdbbedc3"></a>

### [`00baf340`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00baf/00baf340.md) → [`00baf3dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baf/00baf3dc.md) _ZNSt6__ndk17__sort4IRPFbPKN11flatbuffers8FieldDefES4_EPPS2_EEjT0_SA_SA_SA_T_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0b0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5d180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d180.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00baf374 ["COPY", "register:0:8", ["register:4040:8"]]
- 00baf374 ["INT_ADD", "register:40f0:8", ["const:baf374:8", "const:4:8"]]
- 00baf374 ["CALLIND", null, ["register:0:8"]]
+ 00baf410 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00baf410 ["INT_ADD", "register:40f0:8", ["const:baf410:8", "const:4:8"]]
+ 00baf410 ["CALLIND", null, ["register:0:8"]]
- 00baf38c ["COPY", "register:0:8", ["register:4048:8"]]
- 00baf38c ["INT_ADD", "register:40f0:8", ["const:baf38c:8", "const:4:8"]]
- 00baf38c ["CALLIND", null, ["register:0:8"]]
+ 00baf428 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00baf428 ["INT_ADD", "register:40f0:8", ["const:baf428:8", "const:4:8"]]
+ 00baf428 ["CALLIND", null, ["register:0:8"]]
- 00baf3d0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00baf3d0 ["INT_ADD", "register:40f0:8", ["const:baf3d0:8", "const:4:8"]]
- 00baf3d0 ["CALLIND", null, ["register:0:8"]]
+ 00baf46c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00baf46c ["INT_ADD", "register:40f0:8", ["const:baf46c:8", "const:4:8"]]
+ 00baf46c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a55eec212dac6ca797a0df1bac828aba"></a>

### [`00baf4c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00baf/00baf4c4.md) → [`00baf560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baf/00baf560.md) FUN_00baf560

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00baee28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bae/00baee28.md) [`00baf728`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00baf/00baf728.md) · 呼出先 1件 [`00c5d0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0b0.md)
- 新版 呼出元 2件 [`00baeec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bae/00baeec4.md) [`00baf7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baf/00baf7c4.md) · 呼出先 1件 [`00c5d180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d180.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00baf4f8 ["INT_ADD", "register:40f0:8", ["const:baf4f8:8", "const:4:8"]]
- 00baf4f8 ["CALL", null, ["callee:00c5d180:8"]]
+ 00baf594 ["INT_ADD", "register:40f0:8", ["const:baf594:8", "const:4:8"]]
+ 00baf594 ["CALL", null, ["callee:00c5d180:8"]]
- 00baf510 ["COPY", "register:0:8", ["register:4048:8"]]
- 00baf510 ["INT_ADD", "register:40f0:8", ["const:baf510:8", "const:4:8"]]
- 00baf510 ["CALLIND", null, ["register:0:8"]]
+ 00baf5ac ["COPY", "register:0:8", ["register:4048:8"]]
+ 00baf5ac ["INT_ADD", "register:40f0:8", ["const:baf5ac:8", "const:4:8"]]
+ 00baf5ac ["CALLIND", null, ["register:0:8"]]
- 00baf534 ["COPY", "register:0:8", ["register:4040:8"]]
- 00baf534 ["INT_ADD", "register:40f0:8", ["const:baf534:8", "const:4:8"]]
- 00baf534 ["CALLIND", null, ["register:0:8"]]
+ 00baf5d0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00baf5d0 ["INT_ADD", "register:40f0:8", ["const:baf5d0:8", "const:4:8"]]
+ 00baf5d0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-785942314583bd29095077d28595eb52"></a>

### [`00baf5cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00baf/00baf5cc.md) → [`00baf668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baf/00baf668.md) _ZNSt6__ndk118__insertion_sort_3IRPFbPKN11flatbuffers8FieldDefES4_EPPS2_EEvT0_SA_T_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5cbf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cbf0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5ccc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ccc0.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00baf5fc ["COPY", "register:0:8", ["register:4048:8"]]
- 00baf5fc ["INT_ADD", "register:40f0:8", ["const:baf5fc:8", "const:4:8"]]
- 00baf5fc ["CALLIND", null, ["register:0:8"]]
+ 00baf698 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00baf698 ["INT_ADD", "register:40f0:8", ["const:baf698:8", "const:4:8"]]
+ 00baf698 ["CALLIND", null, ["register:0:8"]]
- 00baf618 ["COPY", "register:0:8", ["register:4048:8"]]
- 00baf618 ["INT_ADD", "register:40f0:8", ["const:baf618:8", "const:4:8"]]
- 00baf618 ["CALLIND", null, ["register:0:8"]]
+ 00baf6b4 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00baf6b4 ["INT_ADD", "register:40f0:8", ["const:baf6b4:8", "const:4:8"]]
+ 00baf6b4 ["CALLIND", null, ["register:0:8"]]
- 00baf654 ["COPY", "register:0:8", ["register:4040:8"]]
- 00baf654 ["INT_ADD", "register:40f0:8", ["const:baf654:8", "const:4:8"]]
- 00baf654 ["CALLIND", null, ["register:0:8"]]
+ 00baf6f0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00baf6f0 ["INT_ADD", "register:40f0:8", ["const:baf6f0:8", "const:4:8"]]
+ 00baf6f0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-bb47807f90e9247e7b38dfbfd0cffea5"></a>

### [`00bafc0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00baf/00bafc0c.md) → [`00bafca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00baf/00bafca8.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers7RPCCallEEENS_19__map_value_c

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cf30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cf30.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5d000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d000.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bafca4 ["INT_ADD", "register:40f0:8", ["const:bafca4:8", "const:4:8"]]
- 00bafca4 ["CALL", null, ["callee:00c58120:8"]]
+ 00bafd40 ["INT_ADD", "register:40f0:8", ["const:bafd40:8", "const:4:8"]]
+ 00bafd40 ["CALL", null, ["callee:00c58120:8"]]
- 00bafcec ["INT_ADD", "register:40f0:8", ["const:bafcec:8", "const:4:8"]]
- 00bafcec ["CALL", null, ["callee:00c58120:8"]]
+ 00bafd88 ["INT_ADD", "register:40f0:8", ["const:bafd88:8", "const:4:8"]]
+ 00bafd88 ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-e5782cae51a842a54e27322637b7dd43"></a>

### [`00bb01c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb0/00bb01c4.md) → [`00bb0260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb0/00bb0260.md) _ZNSt6__ndk16__treeImN11flexbuffers7Builder16KeyOffsetCompareENS_9allocatorImEEE25__emplace_unique_key_argsImJRKmEEENS_4pairINS_15__tree_ite

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cfe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cfe0.md) · 呼出先 3件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5b5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5e0.md) [`00c5b850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b850.md)
- 新版 呼出元 1件 [`00c5d0b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d0b0.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md) [`00c5b920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b920.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb0214 ["INT_ADD", "register:40f0:8", ["const:bb0214:8", "const:4:8"]]
- 00bb0214 ["CALL", null, ["callee:00c5b920:8"]]
+ 00bb02b0 ["INT_ADD", "register:40f0:8", ["const:bb02b0:8", "const:4:8"]]
+ 00bb02b0 ["CALL", null, ["callee:00c5b920:8"]]
- 00bb0238 ["INT_ADD", "register:40f0:8", ["const:bb0238:8", "const:4:8"]]
- 00bb0238 ["CALL", null, ["callee:00c5b920:8"]]
+ 00bb02d4 ["INT_ADD", "register:40f0:8", ["const:bb02d4:8", "const:4:8"]]
+ 00bb02d4 ["CALL", null, ["callee:00c5b920:8"]]
- 00bb0278 ["INT_ADD", "register:40f0:8", ["const:bb0278:8", "const:4:8"]]
- 00bb0278 ["CALL", null, ["callee:00c57f60:8"]]
+ 00bb0314 ["INT_ADD", "register:40f0:8", ["const:bb0314:8", "const:4:8"]]
+ 00bb0314 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-5fbfd705b86daf6d60788e9630d79e0f"></a>

### [`00bb02e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb0/00bb02e4.md) → [`00bb0380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb0/00bb0380.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers9StructDefEEENS_19__map_value

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cf90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cf90.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5d060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d060.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb037c ["INT_ADD", "register:40f0:8", ["const:bb037c:8", "const:4:8"]]
- 00bb037c ["CALL", null, ["callee:00c58120:8"]]
+ 00bb0418 ["INT_ADD", "register:40f0:8", ["const:bb0418:8", "const:4:8"]]
+ 00bb0418 ["CALL", null, ["callee:00c58120:8"]]
- 00bb03c4 ["INT_ADD", "register:40f0:8", ["const:bb03c4:8", "const:4:8"]]
- 00bb03c4 ["CALL", null, ["callee:00c58120:8"]]
+ 00bb0460 ["INT_ADD", "register:40f0:8", ["const:bb0460:8", "const:4:8"]]
+ 00bb0460 ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-6bf2d881ba15ea070f8accff12843754"></a>

### [`00bb03f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb0/00bb03f8.md) → [`00bb0494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb0/00bb0494.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_3setIN11flatbuffers12IncludedFileENS_4les

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ce50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ce50.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cf20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cf20.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb0494 ["INT_ADD", "register:40f0:8", ["const:bb0494:8", "const:4:8"]]
- 00bb0494 ["CALL", null, ["callee:00c58120:8"]]
+ 00bb0530 ["INT_ADD", "register:40f0:8", ["const:bb0530:8", "const:4:8"]]
+ 00bb0530 ["CALL", null, ["callee:00c58120:8"]]
- 00bb04d4 ["INT_ADD", "register:40f0:8", ["const:bb04d4:8", "const:4:8"]]
- 00bb04d4 ["CALL", null, ["callee:00c58120:8"]]
+ 00bb0570 ["INT_ADD", "register:40f0:8", ["const:bb0570:8", "const:4:8"]]
+ 00bb0570 ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-a8a1e24d8248bd85c034ef3b5f478208"></a>

### [`00bb0518`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb0/00bb0518.md) → [`00bb05b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb0/00bb05b4.md) _ZNSt6__ndk16vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEE24__emplace_back_slow_pathIJRS6_EEEvDpOT_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d020.md) · 呼出先 4件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md) [`00c5b5b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5b0.md)
- 新版 呼出元 1件 [`00c5d0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d0f0.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md) [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb0598 ["INT_ADD", "register:40f0:8", ["const:bb0598:8", "const:4:8"]]
- 00bb0598 ["CALL", null, ["callee:00c57f60:8"]]
+ 00bb0634 ["INT_ADD", "register:40f0:8", ["const:bb0634:8", "const:4:8"]]
+ 00bb0634 ["CALL", null, ["callee:00c57f60:8"]]
- 00bb05b0 ["INT_ADD", "register:40f0:8", ["const:bb05b0:8", "const:4:8"]]
- 00bb05b0 ["CALL", null, ["callee:00c5b680:8"]]
+ 00bb064c ["INT_ADD", "register:40f0:8", ["const:bb064c:8", "const:4:8"]]
+ 00bb064c ["CALL", null, ["callee:00c5b680:8"]]
- 00bb062c ["INT_ADD", "register:40f0:8", ["const:bb062c:8", "const:4:8"]]
- 00bb062c ["CALL", null, ["callee:00c57f80:8"]]
+ 00bb06c8 ["INT_ADD", "register:40f0:8", ["const:bb06c8:8", "const:4:8"]]
+ 00bb06c8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-c6fc78f3e559f3a5a0da49e2aed98f8b"></a>

### [`00bb074c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb0/00bb074c.md) → [`00bb07e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb0/00bb07e8.md) _ZNSt6__ndk16__treeIN11flatbuffers12IncludedFileENS_4lessIS2_EENS_9allocatorIS2_EEE12__find_equalIS2_EERPNS_16__tree_node_baseIPvEERPNS_15__

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ce20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ce20.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5cef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cef0.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb07ec ["INT_ADD", "register:40f0:8", ["const:bb07ec:8", "const:4:8"]]
- 00bb07ec ["CALL", null, ["callee:00c58120:8"]]
+ 00bb0888 ["INT_ADD", "register:40f0:8", ["const:bb0888:8", "const:4:8"]]
+ 00bb0888 ["CALL", null, ["callee:00c58120:8"]]
- 00bb082c ["INT_ADD", "register:40f0:8", ["const:bb082c:8", "const:4:8"]]
- 00bb082c ["CALL", null, ["callee:00c58120:8"]]
+ 00bb08c8 ["INT_ADD", "register:40f0:8", ["const:bb08c8:8", "const:4:8"]]
+ 00bb08c8 ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-8924aabad88dc7f02a3250c50efd3a28"></a>

### [`00bb0fa8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb0/00bb0fa8.md) → [`00bb1044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb1/00bb1044.md) _ZNSt6__ndk17__sort4IRPFbPKN11flatbuffers9StructDefES4_EPPS2_EEjT0_SA_SA_SA_T_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d0c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0c0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5d190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d190.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb0fdc ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb0fdc ["INT_ADD", "register:40f0:8", ["const:bb0fdc:8", "const:4:8"]]
- 00bb0fdc ["CALLIND", null, ["register:0:8"]]
+ 00bb1078 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb1078 ["INT_ADD", "register:40f0:8", ["const:bb1078:8", "const:4:8"]]
+ 00bb1078 ["CALLIND", null, ["register:0:8"]]
- 00bb0ff4 ["COPY", "register:0:8", ["register:4048:8"]]
- 00bb0ff4 ["INT_ADD", "register:40f0:8", ["const:bb0ff4:8", "const:4:8"]]
- 00bb0ff4 ["CALLIND", null, ["register:0:8"]]
+ 00bb1090 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00bb1090 ["INT_ADD", "register:40f0:8", ["const:bb1090:8", "const:4:8"]]
+ 00bb1090 ["CALLIND", null, ["register:0:8"]]
- 00bb1038 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb1038 ["INT_ADD", "register:40f0:8", ["const:bb1038:8", "const:4:8"]]
- 00bb1038 ["CALLIND", null, ["register:0:8"]]
+ 00bb10d4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb10d4 ["INT_ADD", "register:40f0:8", ["const:bb10d4:8", "const:4:8"]]
+ 00bb10d4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6af458a6e75d5d70b868138483651873"></a>

### [`00bb112c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb1/00bb112c.md) → [`00bb11c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb1/00bb11c8.md) FUN_00bb11c8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00bb0a90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb0/00bb0a90.md) [`00bb1390`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb1/00bb1390.md) · 呼出先 1件 [`00c5d0c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0c0.md)
- 新版 呼出元 2件 [`00bb0b2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb0/00bb0b2c.md) [`00bb142c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb1/00bb142c.md) · 呼出先 1件 [`00c5d190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d190.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb1160 ["INT_ADD", "register:40f0:8", ["const:bb1160:8", "const:4:8"]]
- 00bb1160 ["CALL", null, ["callee:00c5d190:8"]]
+ 00bb11fc ["INT_ADD", "register:40f0:8", ["const:bb11fc:8", "const:4:8"]]
+ 00bb11fc ["CALL", null, ["callee:00c5d190:8"]]
- 00bb1178 ["COPY", "register:0:8", ["register:4048:8"]]
- 00bb1178 ["INT_ADD", "register:40f0:8", ["const:bb1178:8", "const:4:8"]]
- 00bb1178 ["CALLIND", null, ["register:0:8"]]
+ 00bb1214 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00bb1214 ["INT_ADD", "register:40f0:8", ["const:bb1214:8", "const:4:8"]]
+ 00bb1214 ["CALLIND", null, ["register:0:8"]]
- 00bb119c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb119c ["INT_ADD", "register:40f0:8", ["const:bb119c:8", "const:4:8"]]
- 00bb119c ["CALLIND", null, ["register:0:8"]]
+ 00bb1238 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb1238 ["INT_ADD", "register:40f0:8", ["const:bb1238:8", "const:4:8"]]
+ 00bb1238 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-693fe11f724ff71ca970067e25e138c4"></a>

### [`00bb1234`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb1/00bb1234.md) → [`00bb12d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb1/00bb12d0.md) _ZNSt6__ndk118__insertion_sort_3IRPFbPKN11flatbuffers9StructDefES4_EPPS2_EEvT0_SA_T_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5cc00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cc00.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5ccd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ccd0.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb1264 ["COPY", "register:0:8", ["register:4048:8"]]
- 00bb1264 ["INT_ADD", "register:40f0:8", ["const:bb1264:8", "const:4:8"]]
- 00bb1264 ["CALLIND", null, ["register:0:8"]]
+ 00bb1300 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00bb1300 ["INT_ADD", "register:40f0:8", ["const:bb1300:8", "const:4:8"]]
+ 00bb1300 ["CALLIND", null, ["register:0:8"]]
- 00bb1280 ["COPY", "register:0:8", ["register:4048:8"]]
- 00bb1280 ["INT_ADD", "register:40f0:8", ["const:bb1280:8", "const:4:8"]]
- 00bb1280 ["CALLIND", null, ["register:0:8"]]
+ 00bb131c ["COPY", "register:0:8", ["register:4048:8"]]
+ 00bb131c ["INT_ADD", "register:40f0:8", ["const:bb131c:8", "const:4:8"]]
+ 00bb131c ["CALLIND", null, ["register:0:8"]]
- 00bb12bc ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb12bc ["INT_ADD", "register:40f0:8", ["const:bb12bc:8", "const:4:8"]]
- 00bb12bc ["CALLIND", null, ["register:0:8"]]
+ 00bb1358 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb1358 ["INT_ADD", "register:40f0:8", ["const:bb1358:8", "const:4:8"]]
+ 00bb1358 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b1e2f308ac3d0e3459ab6a4a085fe02c"></a>

### [`00bb1640`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb1/00bb1640.md) → [`00bb16dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb1/00bb16dc.md) FUN_00bb16dc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00b8e0dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8e/00b8e0dc.md) · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5ca40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ca40.md)
- 新版 呼出元 1件 [`00b8e178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8e/00b8e178.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5cb10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cb10.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb1684 ["INT_ADD", "register:40f0:8", ["const:bb1684:8", "const:4:8"]]
- 00bb1684 ["CALL", null, ["callee:00c5cb10:8"]]
+ 00bb1720 ["INT_ADD", "register:40f0:8", ["const:bb1720:8", "const:4:8"]]
+ 00bb1720 ["CALL", null, ["callee:00c5cb10:8"]]
- 00bb169c ["INT_ADD", "register:40f0:8", ["const:bb169c:8", "const:4:8"]]
- 00bb169c ["CALL", null, ["callee:00c5cb10:8"]]
+ 00bb1738 ["INT_ADD", "register:40f0:8", ["const:bb1738:8", "const:4:8"]]
+ 00bb1738 ["CALL", null, ["callee:00c5cb10:8"]]
- 00bb16f8 ["INT_ADD", "register:40f0:8", ["const:bb16f8:8", "const:4:8"]]
- 00bb16f8 ["CALL", null, ["callee:00c58120:8"]]
+ 00bb1794 ["INT_ADD", "register:40f0:8", ["const:bb1794:8", "const:4:8"]]
+ 00bb1794 ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-8d5dab1a9dd1b91cb2e0d9acbe718432"></a>

### [`00bb24f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb2/00bb24f4.md) → [`00bb2590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb2/00bb2590.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers9NamespaceEEENS_19__map_value

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cf70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cf70.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5cf70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cf70.md)
- 新版 呼出元 1件 [`00c5d040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d040.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d040.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb2510 ["INT_ADD", "register:40f0:8", ["const:bb2510:8", "const:4:8"]]
- 00bb2510 ["CALL", null, ["callee:00c5d040:8"]]
+ 00bb25ac ["INT_ADD", "register:40f0:8", ["const:bb25ac:8", "const:4:8"]]
+ 00bb25ac ["CALL", null, ["callee:00c5d040:8"]]
- 00bb251c ["INT_ADD", "register:40f0:8", ["const:bb251c:8", "const:4:8"]]
- 00bb251c ["CALL", null, ["callee:00c5d040:8"]]
+ 00bb25b8 ["INT_ADD", "register:40f0:8", ["const:bb25b8:8", "const:4:8"]]
+ 00bb25b8 ["CALL", null, ["callee:00c5d040:8"]]
- 00bb252c ["INT_ADD", "register:40f0:8", ["const:bb252c:8", "const:4:8"]]
- 00bb252c ["CALL", null, ["callee:00c57f80:8"]]
+ 00bb25c8 ["INT_ADD", "register:40f0:8", ["const:bb25c8:8", "const:4:8"]]
+ 00bb25c8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-6289ab4b09b1468647d8849c547b2162"></a>

### [`00bb2658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb2/00bb2658.md) → [`00bb26f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb2/00bb26f4.md) _ZNSt6__ndk16__treeIPN11flatbuffers8FieldDefENS_4lessIS3_EENS_9allocatorIS3_EEE7destroyEPNS_11__tree_nodeIS3_PvEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5cfd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cfd0.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5cfd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cfd0.md)
- 新版 呼出元 1件 [`00c5d0a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d0a0.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d0a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d0a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb2674 ["INT_ADD", "register:40f0:8", ["const:bb2674:8", "const:4:8"]]
- 00bb2674 ["CALL", null, ["callee:00c5d0a0:8"]]
+ 00bb2710 ["INT_ADD", "register:40f0:8", ["const:bb2710:8", "const:4:8"]]
+ 00bb2710 ["CALL", null, ["callee:00c5d0a0:8"]]
- 00bb2680 ["INT_ADD", "register:40f0:8", ["const:bb2680:8", "const:4:8"]]
- 00bb2680 ["CALL", null, ["callee:00c5d0a0:8"]]
+ 00bb271c ["INT_ADD", "register:40f0:8", ["const:bb271c:8", "const:4:8"]]
+ 00bb271c ["CALL", null, ["callee:00c5d0a0:8"]]
~~~


<a id="compare-5883266769318ab2580cb96282bd79ff"></a>

### [`00bb31b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb3/00bb31b4.md) → [`00bb3250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb3/00bb3250.md) _ZN11flatbuffers18ConCatPathFileNameERKNSt6__ndk112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEES8_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c740`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c740.md) · 呼出先 4件 [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c5a8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8e0.md) [`00c5b5b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5b0.md)
- 新版 呼出元 1件 [`00c5c810`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c810.md) · 呼出先 4件 [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c5a9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9b0.md) [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb31d4 ["INT_ADD", "register:40f0:8", ["const:bb31d4:8", "const:4:8"]]
- 00bb31d4 ["CALL", null, ["callee:00c5b680:8"]]
+ 00bb3270 ["INT_ADD", "register:40f0:8", ["const:bb3270:8", "const:4:8"]]
+ 00bb3270 ["CALL", null, ["callee:00c5b680:8"]]
- 00bb3268 ["INT_ADD", "register:40f0:8", ["const:bb3268:8", "const:4:8"]]
- 00bb3268 ["CALL", null, ["callee:00c5a9b0:8"]]
+ 00bb3304 ["INT_ADD", "register:40f0:8", ["const:bb3304:8", "const:4:8"]]
+ 00bb3304 ["CALL", null, ["callee:00c5a9b0:8"]]
- 00bb32b8 ["INT_ADD", "register:40f0:8", ["const:bb32b8:8", "const:4:8"]]
- 00bb32b8 ["CALL", null, ["callee:00c58050:8"]]
+ 00bb3354 ["INT_ADD", "register:40f0:8", ["const:bb3354:8", "const:4:8"]]
+ 00bb3354 ["CALL", null, ["callee:00c58050:8"]]
~~~


<a id="compare-d22e2471e25f367385247cf2f444fc36"></a>

### [`00bb371c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb3/00bb371c.md) → [`00bb37b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb3/00bb37b8.md) _ZN11flatbuffers12AbsolutePathERKNSt6__ndk112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5c720`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c720.md) · 呼出先 7件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c58660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58660.md) [`00c5b0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0b0.md)
- 新版 呼出元 1件 [`00c5c7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c7f0.md) · 呼出先 7件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c58730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58730.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb3758 ["INT_ADD", "register:40f0:8", ["const:bb3758:8", "const:4:8"]]
- 00bb3758 ["CALL", null, ["callee:00c5d300:8"]]
+ 00bb37f4 ["INT_ADD", "register:40f0:8", ["const:bb37f4:8", "const:4:8"]]
+ 00bb37f4 ["CALL", null, ["callee:00c5d300:8"]]
- 00bb3770 ["INT_ADD", "register:40f0:8", ["const:bb3770:8", "const:4:8"]]
- 00bb3770 ["CALL", null, ["callee:00c580b0:8"]]
+ 00bb380c ["INT_ADD", "register:40f0:8", ["const:bb380c:8", "const:4:8"]]
+ 00bb380c ["CALL", null, ["callee:00c580b0:8"]]
- 00bb3780 ["INT_ADD", "register:40f0:8", ["const:bb3780:8", "const:4:8"]]
- 00bb3780 ["CALL", null, ["callee:00c5b180:8"]]
+ 00bb381c ["INT_ADD", "register:40f0:8", ["const:bb381c:8", "const:4:8"]]
+ 00bb381c ["CALL", null, ["callee:00c5b180:8"]]
~~~


<a id="compare-92770a0be7a78420bbafb6128c17e544"></a>

### [`00bb58ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb5/00bb58ac.md) → [`00bb5948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5948.md) _ZNSt6__ndk113basic_filebufIcNS_11char_traitsIcEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5d1b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d1b0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d280.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb58bc ["INT_ADD", "register:40f0:8", ["const:bb58bc:8", "const:4:8"]]
- 00bb58bc ["CALL", null, ["callee:00c5d280:8"]]
+ 00bb5958 ["INT_ADD", "register:40f0:8", ["const:bb5958:8", "const:4:8"]]
+ 00bb5958 ["CALL", null, ["callee:00c5d280:8"]]
~~~


<a id="compare-c379013ff7c29e6eb302c96de228eecf"></a>

### [`00bb60b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb6/00bb60b4.md) → [`00bb6150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb6150.md) _ZNSt6__ndk113basic_filebufIcNS_11char_traitsIcEEE8overflowEi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00bb62ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb6/00bb62ec.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a220.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00bb6388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb6388.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a2f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb61a8 ["INT_ADD", "register:40f0:8", ["const:bb61a8:8", "const:4:8"]]
- 00bb61a8 ["CALL", null, ["callee:00c5a2f0:8"]]
+ 00bb6244 ["INT_ADD", "register:40f0:8", ["const:bb6244:8", "const:4:8"]]
+ 00bb6244 ["CALL", null, ["callee:00c5a2f0:8"]]
- 00bb61f8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bb61f8 ["INT_ADD", "register:40f0:8", ["const:bb61f8:8", "const:4:8"]]
- 00bb61f8 ["CALLIND", null, ["register:0:8"]]
+ 00bb6294 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bb6294 ["INT_ADD", "register:40f0:8", ["const:bb6294:8", "const:4:8"]]
+ 00bb6294 ["CALLIND", null, ["register:0:8"]]
- 00bb6238 ["INT_ADD", "register:40f0:8", ["const:bb6238:8", "const:4:8"]]
- 00bb6238 ["CALL", null, ["callee:00c5a2f0:8"]]
+ 00bb62d4 ["INT_ADD", "register:40f0:8", ["const:bb62d4:8", "const:4:8"]]
+ 00bb62d4 ["CALL", null, ["callee:00c5a2f0:8"]]
~~~


<a id="compare-d73bd806cc1664e08b756f0cfc2031fd"></a>

### [`00bb62ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb6/00bb62ec.md) → [`00bb6388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb6388.md) FUN_00bb6388

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 4件 [`00bb5ab8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb5/00bb5ab8.md) [`00bb5be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb5/00bb5be8.md) [`00bb5dd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb5/00bb5dd8.md) [`00bb60b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb6/00bb60b4.md) · 呼出先 1件 [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 4件 [`00bb5b54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5b54.md) [`00bb5c84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5c84.md) [`00bb5e74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb5/00bb5e74.md) [`00bb6150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb6150.md) · 呼出先 1件 [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb62f4 ["INT_ADD", "register:40f0:8", ["const:bb62f4:8", "const:4:8"]]
- 00bb62f4 ["CALL", null, ["callee:00c5b210:8"]]
+ 00bb6390 ["INT_ADD", "register:40f0:8", ["const:bb6390:8", "const:4:8"]]
+ 00bb6390 ["CALL", null, ["callee:00c5b210:8"]]
~~~


<a id="compare-88f27322987e60c1588028489ab3f77c"></a>

### [`00bb6300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb6/00bb6300.md) → [`00bb639c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb639c.md) _ZNSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5d0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0e0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb6314 ["INT_ADD", "register:40f0:8", ["const:bb6314:8", "const:4:8"]]
- 00bb6314 ["CALL", null, ["callee:00c5d1b0:8"]]
+ 00bb63b0 ["INT_ADD", "register:40f0:8", ["const:bb63b0:8", "const:4:8"]]
+ 00bb63b0 ["CALL", null, ["callee:00c5d1b0:8"]]
~~~


<a id="compare-834db8c04161e5eee294d3fab79368fe"></a>

### [`00bb633c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb6/00bb633c.md) → [`00bb63d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb63d8.md) _ZTv0_n24_NSt6__ndk113basic_ostreamIcNS_11char_traitsIcEEED0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5d0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d0e0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d1b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb6358 ["INT_ADD", "register:40f0:8", ["const:bb6358:8", "const:4:8"]]
- 00bb6358 ["CALL", null, ["callee:00c5d1b0:8"]]
+ 00bb63f4 ["INT_ADD", "register:40f0:8", ["const:bb63f4:8", "const:4:8"]]
+ 00bb63f4 ["CALL", null, ["callee:00c5d1b0:8"]]
~~~


<a id="compare-3841cf96fa8b5c83d72be71412007909"></a>

### [`00bb66a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb6/00bb66a4.md) → [`00bb6740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb6740.md) FUN_00bb6740

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00bb8bdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb8/00bb8bdc.md) · 呼出先 2件 [`00c5aad0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aad0.md) [`00c5ac60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac60.md)
- 新版 呼出元 1件 [`00bb8c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb8/00bb8c78.md) · 呼出先 2件 [`00c5aba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aba0.md) [`00c5ad30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad30.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb66b4 ["INT_ADD", "register:40f0:8", ["const:bb66b4:8", "const:4:8"]]
- 00bb66b4 ["CALL", null, ["callee:00c5ad30:8"]]
+ 00bb6750 ["INT_ADD", "register:40f0:8", ["const:bb6750:8", "const:4:8"]]
+ 00bb6750 ["CALL", null, ["callee:00c5ad30:8"]]
~~~


<a id="compare-a08d57c442b6a77b0ee2a91754e0e4bd"></a>

### [`00bb6dfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb6/00bb6dfc.md) → [`00bb6e98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb6e98.md) _ZN8firebase9messaging20PollableListenerImplD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d380`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d380.md) · 呼出先 3件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5aaa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aaa0.md) [`00c5d460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d460.md)
- 新版 呼出元 1件 [`00c5d450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d450.md) · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab70.md) [`00c5d530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d530.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb6e18 ["INT_ADD", "register:40f0:8", ["const:bb6e18:8", "const:4:8"]]
- 00bb6e18 ["CALL", null, ["callee:00c5d530:8"]]
+ 00bb6eb4 ["INT_ADD", "register:40f0:8", ["const:bb6eb4:8", "const:4:8"]]
+ 00bb6eb4 ["CALL", null, ["callee:00c5d530:8"]]
- 00bb6e2c ["INT_ADD", "register:40f0:8", ["const:bb6e2c:8", "const:4:8"]]
- 00bb6e2c ["CALL", null, ["callee:00c57f80:8"]]
+ 00bb6ec8 ["INT_ADD", "register:40f0:8", ["const:bb6ec8:8", "const:4:8"]]
+ 00bb6ec8 ["CALL", null, ["callee:00c57f80:8"]]
- 00bb6e60 ["INT_ADD", "register:40f0:8", ["const:bb6e60:8", "const:4:8"]]
- 00bb6e60 ["CALL", null, ["callee:00c57f80:8"]]
+ 00bb6efc ["INT_ADD", "register:40f0:8", ["const:bb6efc:8", "const:4:8"]]
+ 00bb6efc ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-1c69a3eba6126b810b1944b2247089ce"></a>

### [`00bb6f14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb6/00bb6f14.md) → [`00bb6fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb6/00bb6fb0.md) _ZN8firebase9messaging20PollableListenerImpl9OnMessageERKNS0_7MessageE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d370`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d370.md) · 呼出先 6件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5d3e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d3e0.md) [`00c5d3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d3f0.md)
- 新版 呼出元 1件 [`00c5d440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d440.md) · 呼出先 6件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5d4b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d4b0.md) [`00c5d4c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d4c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb6f3c ["INT_ADD", "register:40f0:8", ["const:bb6f3c:8", "const:4:8"]]
- 00bb6f3c ["CALL", null, ["callee:00c5d4b0:8"]]
+ 00bb6fd8 ["INT_ADD", "register:40f0:8", ["const:bb6fd8:8", "const:4:8"]]
+ 00bb6fd8 ["CALL", null, ["callee:00c5d4b0:8"]]
- 00bb6f44 ["INT_ADD", "register:40f0:8", ["const:bb6f44:8", "const:4:8"]]
- 00bb6f44 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bb6fe0 ["INT_ADD", "register:40f0:8", ["const:bb6fe0:8", "const:4:8"]]
+ 00bb6fe0 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bb6f70 ["INT_ADD", "register:40f0:8", ["const:bb6f70:8", "const:4:8"]]
- 00bb6f70 ["CALL", null, ["callee:00c5d580:8"]]
+ 00bb700c ["INT_ADD", "register:40f0:8", ["const:bb700c:8", "const:4:8"]]
+ 00bb700c ["CALL", null, ["callee:00c5d580:8"]]
~~~


<a id="compare-8dbd1ca28110be2e47be3507cb618186"></a>

### [`00bb7028`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb7/00bb7028.md) → [`00bb70c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb70c4.md) _ZN8firebase9messaging20PollableListenerImpl15OnTokenReceivedEPKc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d310`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d310.md) · 呼出先 4件 [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5b0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0b0.md)
- 新版 呼出元 1件 [`00c5d3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d3e0.md) · 呼出先 4件 [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb7040 ["INT_ADD", "register:40f0:8", ["const:bb7040:8", "const:4:8"]]
- 00bb7040 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bb70dc ["INT_ADD", "register:40f0:8", ["const:bb70dc:8", "const:4:8"]]
+ 00bb70dc ["CALL", null, ["callee:00c5aad0:8"]]
- 00bb704c ["INT_ADD", "register:40f0:8", ["const:bb704c:8", "const:4:8"]]
- 00bb704c ["CALL", null, ["callee:00c580b0:8"]]
+ 00bb70e8 ["INT_ADD", "register:40f0:8", ["const:bb70e8:8", "const:4:8"]]
+ 00bb70e8 ["CALL", null, ["callee:00c580b0:8"]]
- 00bb705c ["INT_ADD", "register:40f0:8", ["const:bb705c:8", "const:4:8"]]
- 00bb705c ["CALL", null, ["callee:00c5b180:8"]]
+ 00bb70f8 ["INT_ADD", "register:40f0:8", ["const:bb70f8:8", "const:4:8"]]
+ 00bb70f8 ["CALL", null, ["callee:00c5b180:8"]]
~~~


<a id="compare-676b7dbbae449905969e06184522934e"></a>

### [`00bb709c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb7/00bb709c.md) → [`00bb7138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb7138.md) _ZN8firebase9messaging20PollableListenerImpl22OnRegistrationReceivedEPKc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d350`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d350.md) · 呼出先 4件 [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5b0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0b0.md)
- 新版 呼出元 1件 [`00c5d420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d420.md) · 呼出先 4件 [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb70b4 ["INT_ADD", "register:40f0:8", ["const:bb70b4:8", "const:4:8"]]
- 00bb70b4 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bb7150 ["INT_ADD", "register:40f0:8", ["const:bb7150:8", "const:4:8"]]
+ 00bb7150 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bb70c0 ["INT_ADD", "register:40f0:8", ["const:bb70c0:8", "const:4:8"]]
- 00bb70c0 ["CALL", null, ["callee:00c580b0:8"]]
+ 00bb715c ["INT_ADD", "register:40f0:8", ["const:bb715c:8", "const:4:8"]]
+ 00bb715c ["CALL", null, ["callee:00c580b0:8"]]
- 00bb70d0 ["INT_ADD", "register:40f0:8", ["const:bb70d0:8", "const:4:8"]]
- 00bb70d0 ["CALL", null, ["callee:00c5b180:8"]]
+ 00bb716c ["INT_ADD", "register:40f0:8", ["const:bb716c:8", "const:4:8"]]
+ 00bb716c ["CALL", null, ["callee:00c5b180:8"]]
~~~


<a id="compare-057bfd59ff6db8ffa6c077c2b2ac1336"></a>

### [`00bb7110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb7/00bb7110.md) → [`00bb71ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb71ac.md) _ZN8firebase9messaging20PollableListenerImpl24OnUnregistrationReceivedEPKc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d360`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d360.md) · 呼出先 4件 [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5b0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0b0.md)
- 新版 呼出元 1件 [`00c5d430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d430.md) · 呼出先 4件 [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb7128 ["INT_ADD", "register:40f0:8", ["const:bb7128:8", "const:4:8"]]
- 00bb7128 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bb71c4 ["INT_ADD", "register:40f0:8", ["const:bb71c4:8", "const:4:8"]]
+ 00bb71c4 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bb7134 ["INT_ADD", "register:40f0:8", ["const:bb7134:8", "const:4:8"]]
- 00bb7134 ["CALL", null, ["callee:00c580b0:8"]]
+ 00bb71d0 ["INT_ADD", "register:40f0:8", ["const:bb71d0:8", "const:4:8"]]
+ 00bb71d0 ["CALL", null, ["callee:00c580b0:8"]]
- 00bb7144 ["INT_ADD", "register:40f0:8", ["const:bb7144:8", "const:4:8"]]
- 00bb7144 ["CALL", null, ["callee:00c5b180:8"]]
+ 00bb71e0 ["INT_ADD", "register:40f0:8", ["const:bb71e0:8", "const:4:8"]]
+ 00bb71e0 ["CALL", null, ["callee:00c5b180:8"]]
~~~


<a id="compare-85b39d56d256afc954c83984655ba967"></a>

### [`00bb7274`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb7/00bb7274.md) → [`00bb7310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb7310.md) _ZN8firebase9messaging16PollableListener21PollRegistrationTokenEPb

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5d340`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d340.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5d410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d410.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb7298 ["INT_ADD", "register:40f0:8", ["const:bb7298:8", "const:4:8"]]
- 00bb7298 ["CALL", null, ["callee:00c5d410:8"]]
+ 00bb7334 ["INT_ADD", "register:40f0:8", ["const:bb7334:8", "const:4:8"]]
+ 00bb7334 ["CALL", null, ["callee:00c5d410:8"]]
~~~


<a id="compare-20a141715f55e69060ac451584565bf1"></a>

### [`00bb72cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb7/00bb72cc.md) → [`00bb7368`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb7368.md) _ZN8firebase9messaging20PollableListenerImpl21PollRegistrationTokenEPNSt6__ndk112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d340`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d340.md) · 呼出先 3件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5b0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0b0.md)
- 新版 呼出元 1件 [`00c5d410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d410.md) · 呼出先 3件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb72e4 ["INT_ADD", "register:40f0:8", ["const:bb72e4:8", "const:4:8"]]
- 00bb72e4 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bb7380 ["INT_ADD", "register:40f0:8", ["const:bb7380:8", "const:4:8"]]
+ 00bb7380 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bb731c ["INT_ADD", "register:40f0:8", ["const:bb731c:8", "const:4:8"]]
- 00bb731c ["CALL", null, ["callee:00c5b180:8"]]
+ 00bb73b8 ["INT_ADD", "register:40f0:8", ["const:bb73b8:8", "const:4:8"]]
+ 00bb73b8 ["CALL", null, ["callee:00c5b180:8"]]
- 00bb7354 ["INT_ADD", "register:40f0:8", ["const:bb7354:8", "const:4:8"]]
- 00bb7354 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00bb73f0 ["INT_ADD", "register:40f0:8", ["const:bb73f0:8", "const:4:8"]]
+ 00bb73f0 ["CALL", null, ["callee:00c5aae0:8"]]
~~~


<a id="compare-1096e1be319ad2c5526aed44d753ed92"></a>

### [`00bb7388`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb7/00bb7388.md) → [`00bb7424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb7424.md) _ZN8firebase9messaging16PollableListener16PollRegistrationEPb

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5d320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d320.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5d3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d3f0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb73ac ["INT_ADD", "register:40f0:8", ["const:bb73ac:8", "const:4:8"]]
- 00bb73ac ["CALL", null, ["callee:00c5d3f0:8"]]
+ 00bb7448 ["INT_ADD", "register:40f0:8", ["const:bb7448:8", "const:4:8"]]
+ 00bb7448 ["CALL", null, ["callee:00c5d3f0:8"]]
~~~


<a id="compare-c9cedafb1ef61e5bb3e35313bd9e516a"></a>

### [`00bb73e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb7/00bb73e0.md) → [`00bb747c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb747c.md) _ZN8firebase9messaging20PollableListenerImpl16PollRegistrationEPNSt6__ndk112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d320.md) · 呼出先 3件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5b0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0b0.md)
- 新版 呼出元 1件 [`00c5d3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d3f0.md) · 呼出先 3件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb73f8 ["INT_ADD", "register:40f0:8", ["const:bb73f8:8", "const:4:8"]]
- 00bb73f8 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bb7494 ["INT_ADD", "register:40f0:8", ["const:bb7494:8", "const:4:8"]]
+ 00bb7494 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bb7430 ["INT_ADD", "register:40f0:8", ["const:bb7430:8", "const:4:8"]]
- 00bb7430 ["CALL", null, ["callee:00c5b180:8"]]
+ 00bb74cc ["INT_ADD", "register:40f0:8", ["const:bb74cc:8", "const:4:8"]]
+ 00bb74cc ["CALL", null, ["callee:00c5b180:8"]]
- 00bb7468 ["INT_ADD", "register:40f0:8", ["const:bb7468:8", "const:4:8"]]
- 00bb7468 ["CALL", null, ["callee:00c5aae0:8"]]
+ 00bb7504 ["INT_ADD", "register:40f0:8", ["const:bb7504:8", "const:4:8"]]
+ 00bb7504 ["CALL", null, ["callee:00c5aae0:8"]]
~~~


<a id="compare-83f2d453e317e7b284edb383224bba78"></a>

### [`00bb749c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb7/00bb749c.md) → [`00bb7538`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb7538.md) _ZN8firebase9messaging16PollableListener18PollUnregistrationEPb

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5d330`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d330.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5d400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d400.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb74c0 ["INT_ADD", "register:40f0:8", ["const:bb74c0:8", "const:4:8"]]
- 00bb74c0 ["CALL", null, ["callee:00c5d400:8"]]
+ 00bb755c ["INT_ADD", "register:40f0:8", ["const:bb755c:8", "const:4:8"]]
+ 00bb755c ["CALL", null, ["callee:00c5d400:8"]]
~~~


<a id="compare-ce8e5fd14a1ab5a9e3d4767c9940d449"></a>

### [`00bb74f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb7/00bb74f4.md) → [`00bb7590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb7590.md) _ZN8firebase9messaging20PollableListenerImpl18PollUnregistrationEPNSt6__ndk112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d330`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d330.md) · 呼出先 3件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5b0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0b0.md)
- 新版 呼出元 1件 [`00c5d400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d400.md) · 呼出先 3件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb750c ["INT_ADD", "register:40f0:8", ["const:bb750c:8", "const:4:8"]]
- 00bb750c ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bb75a8 ["INT_ADD", "register:40f0:8", ["const:bb75a8:8", "const:4:8"]]
+ 00bb75a8 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bb7544 ["INT_ADD", "register:40f0:8", ["const:bb7544:8", "const:4:8"]]
- 00bb7544 ["CALL", null, ["callee:00c5b180:8"]]
+ 00bb75e0 ["INT_ADD", "register:40f0:8", ["const:bb75e0:8", "const:4:8"]]
+ 00bb75e0 ["CALL", null, ["callee:00c5b180:8"]]
- 00bb757c ["INT_ADD", "register:40f0:8", ["const:bb757c:8", "const:4:8"]]
- 00bb757c ["CALL", null, ["callee:00c5aae0:8"]]
+ 00bb7618 ["INT_ADD", "register:40f0:8", ["const:bb7618:8", "const:4:8"]]
+ 00bb7618 ["CALL", null, ["callee:00c5aae0:8"]]
~~~


<a id="compare-bfa4e15bc1e9ab9455f05cc727fd94f0"></a>

### [`00bb7678`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb7/00bb7678.md) → [`00bb7714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb7714.md) _ZNSt6__ndk112__deque_baseIN8firebase9messaging7MessageENS_9allocatorIS3_EEE5clearEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d460.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5d3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d3f0.md)
- 新版 呼出元 1件 [`00c5d530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d530.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d4c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d4c0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb76f8 ["INT_ADD", "register:40f0:8", ["const:bb76f8:8", "const:4:8"]]
- 00bb76f8 ["CALL", null, ["callee:00c5d4c0:8"]]
+ 00bb7794 ["INT_ADD", "register:40f0:8", ["const:bb7794:8", "const:4:8"]]
+ 00bb7794 ["CALL", null, ["callee:00c5d4c0:8"]]
- 00bb773c ["INT_ADD", "register:40f0:8", ["const:bb773c:8", "const:4:8"]]
- 00bb773c ["CALL", null, ["callee:00c57f80:8"]]
+ 00bb77d8 ["INT_ADD", "register:40f0:8", ["const:bb77d8:8", "const:4:8"]]
+ 00bb77d8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-f6127520356cf4312a94545174b13dbf"></a>

### [`00bb7790`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb7/00bb7790.md) → [`00bb782c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb782c.md) _ZN8firebase9messaging7MessageD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d3f0.md) · 呼出先 3件 [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5d2d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d2d0.md)
- 新版 呼出元 1件 [`00c5d4c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d4c0.md) · 呼出先 3件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d3a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d3a0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb77ac ["INT_ADD", "register:40f0:8", ["const:bb77ac:8", "const:4:8"]]
- 00bb77ac ["CALL", null, ["callee:00c5d3a0:8"]]
+ 00bb7848 ["INT_ADD", "register:40f0:8", ["const:bb7848:8", "const:4:8"]]
+ 00bb7848 ["CALL", null, ["callee:00c5d3a0:8"]]
- 00bb77b4 ["INT_ADD", "register:40f0:8", ["const:bb77b4:8", "const:4:8"]]
- 00bb77b4 ["CALL", null, ["callee:00c57f80:8"]]
+ 00bb7850 ["INT_ADD", "register:40f0:8", ["const:bb7850:8", "const:4:8"]]
+ 00bb7850 ["CALL", null, ["callee:00c57f80:8"]]
- 00bb77fc ["INT_ADD", "register:40f0:8", ["const:bb77fc:8", "const:4:8"]]
- 00bb77fc ["CALL", null, ["callee:00c57f80:8"]]
+ 00bb7898 ["INT_ADD", "register:40f0:8", ["const:bb7898:8", "const:4:8"]]
+ 00bb7898 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-e8e0bbfdcd9d58fa46443c310663402b"></a>

### [`00bb78d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb7/00bb78d4.md) → [`00bb7970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb7970.md) _ZN8firebase9messaging12NotificationD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d2d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d2d0.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00c5d3a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d3a0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb78fc ["INT_ADD", "register:40f0:8", ["const:bb78fc:8", "const:4:8"]]
- 00bb78fc ["CALL", null, ["callee:00c57f80:8"]]
+ 00bb7998 ["INT_ADD", "register:40f0:8", ["const:bb7998:8", "const:4:8"]]
+ 00bb7998 ["CALL", null, ["callee:00c57f80:8"]]
- 00bb7904 ["INT_ADD", "register:40f0:8", ["const:bb7904:8", "const:4:8"]]
- 00bb7904 ["CALL", null, ["callee:00c57f80:8"]]
+ 00bb79a0 ["INT_ADD", "register:40f0:8", ["const:bb79a0:8", "const:4:8"]]
+ 00bb79a0 ["CALL", null, ["callee:00c57f80:8"]]
- 00bb7940 ["INT_ADD", "register:40f0:8", ["const:bb7940:8", "const:4:8"]]
- 00bb7940 ["CALL", null, ["callee:00c57f80:8"]]
+ 00bb79dc ["INT_ADD", "register:40f0:8", ["const:bb79dc:8", "const:4:8"]]
+ 00bb79dc ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-5cb16f31a23deb7ab9139d43415d1912"></a>

### [`00bb7aac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb7/00bb7aac.md) → [`00bb7b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb7b48.md) _ZN8firebase9messaging7MessageC2ERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d3e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d3e0.md) · 呼出先 1件 [`00c5d400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d400.md)
- 新版 呼出元 1件 [`00c5d4b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d4b0.md) · 呼出先 1件 [`00c5d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d4d0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb7b1c ["INT_ADD", "register:40f0:8", ["const:bb7b1c:8", "const:4:8"]]
- 00bb7b1c ["CALL", null, ["callee:00c5d4d0:8"]]
+ 00bb7bb8 ["INT_ADD", "register:40f0:8", ["const:bb7bb8:8", "const:4:8"]]
+ 00bb7bb8 ["CALL", null, ["callee:00c5d4d0:8"]]
~~~


<a id="compare-7c4256d9a2e5d367b1dd128541624d30"></a>

### [`00bb7c50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb7/00bb7c50.md) → [`00bb7cec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb7cec.md) _ZN8firebase9messaging7MessageaSERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d400.md) · 呼出先 7件 [`0053b77c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0053b/0053b77c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5b0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0b0.md) [`00c5d2c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d2c0.md)
- 新版 呼出元 1件 [`00c5d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d4d0.md) · 呼出先 7件 [`0053b7bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053b/0053b7bc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md) [`00c5d390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d390.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb7c8c ["INT_ADD", "register:40f0:8", ["const:bb7c8c:8", "const:4:8"]]
- 00bb7c8c ["CALL", null, ["callee:00c5b180:8"]]
+ 00bb7d28 ["INT_ADD", "register:40f0:8", ["const:bb7d28:8", "const:4:8"]]
+ 00bb7d28 ["CALL", null, ["callee:00c5b180:8"]]
- 00bb7cb0 ["INT_ADD", "register:40f0:8", ["const:bb7cb0:8", "const:4:8"]]
- 00bb7cb0 ["CALL", null, ["callee:00c5b180:8"]]
+ 00bb7d4c ["INT_ADD", "register:40f0:8", ["const:bb7d4c:8", "const:4:8"]]
+ 00bb7d4c ["CALL", null, ["callee:00c5b180:8"]]
- 00bb7cd4 ["INT_ADD", "register:40f0:8", ["const:bb7cd4:8", "const:4:8"]]
- 00bb7cd4 ["CALL", null, ["callee:00c5b180:8"]]
+ 00bb7d70 ["INT_ADD", "register:40f0:8", ["const:bb7d70:8", "const:4:8"]]
+ 00bb7d70 ["CALL", null, ["callee:00c5b180:8"]]
~~~


<a id="compare-d577a627494e0e493c8eb1684265c0c0"></a>

### [`00bb7e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb7/00bb7e80.md) → [`00bb7f1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb7/00bb7f1c.md) _ZN8firebase9messaging12NotificationC2ERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d2c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d2c0.md) · 呼出先 1件 [`00c5d2e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d2e0.md)
- 新版 呼出元 1件 [`00c5d390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d390.md) · 呼出先 1件 [`00c5d3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d3b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb7ec0 ["INT_ADD", "register:40f0:8", ["const:bb7ec0:8", "const:4:8"]]
- 00bb7ec0 ["CALL", null, ["callee:00c5d3b0:8"]]
+ 00bb7f5c ["INT_ADD", "register:40f0:8", ["const:bb7f5c:8", "const:4:8"]]
+ 00bb7f5c ["CALL", null, ["callee:00c5d3b0:8"]]
~~~


<a id="compare-f93f4e4371e5a2f0e04b74f3f6f27e45"></a>

### [`00bb8070`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb8/00bb8070.md) → [`00bb810c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb8/00bb810c.md) _ZNSt6__ndk16vectorIhNS_9allocatorIhEEE6assignIPhEENS_9enable_ifIXaasr21__is_forward_iteratorIT_EE5valuesr16is_constructibleIhNS_15iterator_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d4c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d4c0.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5ad10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad10.md)
- 新版 呼出元 1件 [`00c5d590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d590.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5ade0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ade0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb80b4 ["INT_ADD", "register:40f0:8", ["const:bb80b4:8", "const:4:8"]]
- 00bb80b4 ["CALL", null, ["callee:00c57f80:8"]]
+ 00bb8150 ["INT_ADD", "register:40f0:8", ["const:bb8150:8", "const:4:8"]]
+ 00bb8150 ["CALL", null, ["callee:00c57f80:8"]]
- 00bb8110 ["INT_ADD", "register:40f0:8", ["const:bb8110:8", "const:4:8"]]
- 00bb8110 ["CALL", null, ["callee:00c58010:8"]]
+ 00bb81ac ["INT_ADD", "register:40f0:8", ["const:bb81ac:8", "const:4:8"]]
+ 00bb81ac ["CALL", null, ["callee:00c58010:8"]]
- 00bb8138 ["INT_ADD", "register:40f0:8", ["const:bb8138:8", "const:4:8"]]
- 00bb8138 ["CALL", null, ["callee:00c580d0:8"]]
+ 00bb81d4 ["INT_ADD", "register:40f0:8", ["const:bb81d4:8", "const:4:8"]]
+ 00bb81d4 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-fd018b72b4f9f2293b77e3f16a44c0cb"></a>

### [`00bb9638`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb9/00bb9638.md) → [`00bb96d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb9/00bb96d4.md) _ZN8firebase9messaging10FileLockerC2EPKc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5d580`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d580.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5d650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d650.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bb9658 ["INT_ADD", "register:40f0:8", ["const:bb9658:8", "const:4:8"]]
- 00bb9658 ["CALL", null, ["callee:00c5d650:8"]]
+ 00bb96f4 ["INT_ADD", "register:40f0:8", ["const:bb96f4:8", "const:4:8"]]
+ 00bb96f4 ["CALL", null, ["callee:00c5d650:8"]]
~~~


<a id="compare-a2db984f30b44c552a11e1c0d309d508"></a>

### [`00bc10a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc1/00bc10a4.md) → [`00bc1140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc1140.md) _ZNSt6__ndk16vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEE8__appendEm

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d560`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d560.md) · 呼出先 3件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5ad10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ad10.md)
- 新版 呼出元 1件 [`00c5d630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d630.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ade0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ade0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc1140 ["INT_ADD", "register:40f0:8", ["const:bc1140:8", "const:4:8"]]
- 00bc1140 ["CALL", null, ["callee:00c57f60:8"]]
+ 00bc11dc ["INT_ADD", "register:40f0:8", ["const:bc11dc:8", "const:4:8"]]
+ 00bc11dc ["CALL", null, ["callee:00c57f60:8"]]
- 00bc122c ["INT_ADD", "register:40f0:8", ["const:bc122c:8", "const:4:8"]]
- 00bc122c ["CALL", null, ["callee:00c57f80:8"]]
+ 00bc12c8 ["INT_ADD", "register:40f0:8", ["const:bc12c8:8", "const:4:8"]]
+ 00bc12c8 ["CALL", null, ["callee:00c57f80:8"]]
- 00bc1268 ["INT_ADD", "register:40f0:8", ["const:bc1268:8", "const:4:8"]]
- 00bc1268 ["CALL", null, ["callee:00c5ade0:8"]]
+ 00bc1304 ["INT_ADD", "register:40f0:8", ["const:bc1304:8", "const:4:8"]]
+ 00bc1304 ["CALL", null, ["callee:00c5ade0:8"]]
~~~


<a id="compare-59f31be3d0f4df77c10d45034ee601c4"></a>

### [`00bc17e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc1/00bc17e8.md) → [`00bc1884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc1884.md) _ZN8firebase13remote_config12RemoteConfigD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5d6b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d6b0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5d780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d780.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc17f0 ["INT_ADD", "register:40f0:8", ["const:bc17f0:8", "const:4:8"]]
- 00bc17f0 ["CALL", null, ["callee:00c5d780:8"]]
+ 00bc188c ["INT_ADD", "register:40f0:8", ["const:bc188c:8", "const:4:8"]]
+ 00bc188c ["CALL", null, ["callee:00c5d780:8"]]
~~~


<a id="compare-4e445027f298e33d816248c2bf2d0ebb"></a>

### [`00bc1830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc1/00bc1830.md) → [`00bc18cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc18cc.md) _ZN8firebase13remote_config12RemoteConfig5FetchEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5d750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d750.md) [`00c5d7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d7e0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5d820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d820.md) [`00c5d8b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d8b0.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc1848 ["INT_ADD", "register:40f0:8", ["const:bc1848:8", "const:4:8"]]
- 00bc1848 ["CALL", null, ["callee:00c5d820:8"]]
+ 00bc18e4 ["INT_ADD", "register:40f0:8", ["const:bc18e4:8", "const:4:8"]]
+ 00bc18e4 ["CALL", null, ["callee:00c5d820:8"]]
~~~


<a id="compare-3d64191084007d1bb1a98db9c9ab00e4"></a>

### [`00bc1958`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc1/00bc1958.md) → [`00bc19f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc19f4.md) _ZN8firebase13remote_config12RemoteConfig25AddOnConfigUpdateListenerENSt6__ndk18functionIFvONS0_12ConfigUpdateENS0_17RemoteConfigErrorEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5d790`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d790.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5d860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d860.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc199c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc199c ["INT_ADD", "register:40f0:8", ["const:bc199c:8", "const:4:8"]]
- 00bc199c ["CALLIND", null, ["register:0:8"]]
+ 00bc1a38 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bc1a38 ["INT_ADD", "register:40f0:8", ["const:bc1a38:8", "const:4:8"]]
+ 00bc1a38 ["CALLIND", null, ["register:0:8"]]
- 00bc19c4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc19c4 ["INT_ADD", "register:40f0:8", ["const:bc19c4:8", "const:4:8"]]
- 00bc19c4 ["CALLIND", null, ["register:0:8"]]
+ 00bc1a60 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bc1a60 ["INT_ADD", "register:40f0:8", ["const:bc1a60:8", "const:4:8"]]
+ 00bc1a60 ["CALLIND", null, ["register:0:8"]]
- 00bc19d8 ["INT_ADD", "register:40f0:8", ["const:bc19d8:8", "const:4:8"]]
- 00bc19d8 ["CALL", null, ["callee:00c5d860:8"]]
+ 00bc1a74 ["INT_ADD", "register:40f0:8", ["const:bc1a74:8", "const:4:8"]]
+ 00bc1a74 ["CALL", null, ["callee:00c5d860:8"]]
~~~


<a id="compare-1c1a2592a37afd933d74544a54bae9a0"></a>

### [`00bc1a98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc1/00bc1a98.md) → [`00bc1b34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc1b34.md) _ZNSt6__ndk16__treeINS_12__value_typeIPN8firebase3AppEPNS2_13remote_config12RemoteConfigEEENS_19__map_value_compareIS4_S8_NS_4lessIS4_EELb1E

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5d8b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d8b0.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5d8b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d8b0.md)
- 新版 呼出元 1件 [`00c5d980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d980.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5d980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d980.md)

変更の種類 constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00bc1ab4 ["INT_ADD", "register:40f0:8", ["const:bc1ab4:8", "const:4:8"]]
- 00bc1ab4 ["CALL", null, ["callee:00c5d980:8"]]
+ 00bc1b50 ["INT_ADD", "register:40f0:8", ["const:bc1b50:8", "const:4:8"]]
+ 00bc1b50 ["CALL", null, ["callee:00c5d980:8"]]
- 00bc1ac0 ["INT_ADD", "register:40f0:8", ["const:bc1ac0:8", "const:4:8"]]
- 00bc1ac0 ["CALL", null, ["callee:00c5d980:8"]]
+ 00bc1b5c ["INT_ADD", "register:40f0:8", ["const:bc1b5c:8", "const:4:8"]]
+ 00bc1b5c ["CALL", null, ["callee:00c5d980:8"]]
~~~


